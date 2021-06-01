---
title: Removing background in realtime
author: Shubham Pandey
type: post
date: 2021-05-16
path: /removing-background-in-realtime/
category: tensorflow
tags:
  - tensorflow
---

<div style="border-left: 4px solid #2196f3;padding: 1em;background: #f5f5f561">
This blog was in the backlog for a long time as this experiment was done last year(2020) in October around the Dussehra festival.
</div>

### Backstory

Last year when everyone has to go remote the demands for video conferencing/meeting software demands significantly.
The most famous softwares were Zoom, Google meet, Microsoft teams. We were using google meet at elitmus at that time.
Some of the features that are there today were not there at that time. One of the feature that was not available at that time was the background
change for videos.
I had worked on google meet meeting recording extension earlier that month so another thought came into my mind, What if we could change the background of any live video of ours in google meet that extension will be an instant hit if worked decently. So I started searching for such modules that can help me in achieving this feat.

I learned about an ML model called [Bodypix](https://github.com/tensorflow/tfjs-models/tree/master/body-pix) which you can use in the browser using the TensorFlow library. So I began doing some experiments with the library. Of course, it was not that efficient as google's background blur feature but it was something. In the end, I was able to remove the background for real-time video in the browser but before starting the extension part google released the background blur so I stopped working on it.
Here are the steps on how I achieved removing the background of real-time videos in the browser.

---

## Part 1

### Building first version of background removal with static image

#### Adding TensorFlow lib and bodypix model

```html
<!-- Load TensorFlow.js -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/dist/tf-backend-wasm.js"></script>

<!-- Load Posenet -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0"></script>
```

#### Adding image and canvas element

```html
<img id="myimage" src="images/myimage.png" />
<canvas id="canvas"></canvas>
```

#### Load and predict

Let's work on our load and predict where we will load the body pix model to TensorFlow and identify the person and background in the image.

- Adding `tf.setBackend('webgl');` will ask TensorFlow to use WebGL as the backend which is the fastest available in browsers yet, others include cpu and wasm.
- Load bodyPix `const net = await bodyPix.load();`
- Now we can use net variable for using the segmentation Api of bodypix.
- You can tweak with many options available one of them `internalResolution` is used here for tweaking the quality of segmentation.

```javascript
tf.setBackend('webgl')
async function changeBackground() {
  const img = document.getElementById('myimage')

  const net = await bodyPix.load()
  const segmentation = await net.segmentPerson(img, {
    internalResolution: 1,
  })
}
```

<div style="text-align: center;margin-top: 1em">

| Segmentation with different `internalResolution` values                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- |
| ![image showing segmentation with different internalResolution values](/removing-background-in-realtime/internalResolution.webp) |

</div>

#### Masking the image and printing to the canvas

- We got the segmentation from the above code and now we can mask the parts we want from that segmentation using the Api `bodyPix.toMask`.
- Setup background and forground color which will be applied to the image.
- If you dont want to apply any foreground or background you can pass alpha as 0, ex: `const red = {r: 255, g: 0, b: 0, a: 255}` rgb -> red, blue, green, and a is for the alpha channel.
- Now draw the mask to the canvas using `bodyPix.drawMask` Api.

```javascript
const foregroundColor = { r: 255, g: 0, b: 0, a: 255 } // red
const backgroundColor = { r: 0, g: 255, b: 0, a: 255 } // green
const coloredPartImage = bodyPix.toMask(
  segmentation, // segmentation of the image
  foregroundColor, // forground color
  backgroundColor
) // apply the colors to the segment and make mask
const opacity = 0.7 // Opacity of the color and the original image
const maskBlurAmount = 4 // Value for blur amount between the two segments forground and background.
const canvas = document.getElementById('canvas')
bodyPix.drawMask(
  canvas,
  img,
  coloredPartImage,
  opacity,
  maskBlurAmount,
  flipHorizontal
)
```

<div style="text-align: center;margin-top: 1em">

| Results with different `maskBlurAmount` value                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- |
| ![image showing segmentation with different internalResolution values](/removing-background-in-realtime/maskBlurAmount.webp) |

</div>

You can play with different options like `maskBlurAmount` for giving the correct results.

Here is the full code:

```javascript
async function changeBackground() {
  const img = document.getElementById('cat')
  const net = await bodyPix.load()
  const segmentation = await net.segmentPerson(img, {
    internalResolution: 1,
  })

  const foregroundColor = { r: 255, g: 0, b: 0, a: 255 }
  const backgroundColor = { r: 0, g: 255, b: 0, a: 255 }
  const coloredPartImage = bodyPix.toMask(
    segmentation,
    foregroundColor,
    backgroundColor
  )
  const opacity = 1
  const flipHorizontal = false
  const maskBlurAmount = 4
  const canvas = document.getElementById('canvas')
  bodyPix.drawMask(
    canvas,
    img,
    coloredPartImage,
    opacity,
    maskBlurAmount,
    flipHorizontal
  )
}
changeBackground()
```

<div style="border-left: 4px solid #2196f3;padding: 1em;margin-top: 2em;background: #f5f5f561;">
I have not even added anything extra to this code it is a basic bodypix API use example available in the <a href="https://github.com/tensorflow/tfjs-models/tree/master/body-pix">documentation</a>.
</div>

---

## Part 2

### Getting video from the camera and removing the background

What we have to do:

- Get the camera permissions
- Get frames from the video and remove the background
- Print the image to canvas and repeat the process again

#### Get the camera permissions

Add a new webcam video element to the HTML for viewing the actual video stream

```html
<video id="webcam"></video>
```

```javascript
const webcam = document.getElementById('webcam')
const stream = await navigator.mediaDevices.getUserMedia({
  video: { facingMode: 'user' },
})
webcam.srcObject = stream
webcam.play()
```

### Get frames from the video and remove the background

For getting frames from the video you can use `requestVideoFrameCallback` API it is a fairly new API and is not available in [chrome older than 83](https://caniuse.com/?search=requestVideoFrameCallback), for alternate you can try `requestAnimationFrame` API which is fairly stable in the browser, in the below example I will use `requestVideoFrameCallback` you can check the other example in [Github repo](https://github.com/shubham9411/body-pix-tutorial/).

#### requestVideoFrameCallback

This API register a callback for every video frame that is going to be created and displayed to the screen. So it is better in performing efficient per-video-frame operations on video. [Read More about `requestVideoFrameCallback`](https://web.dev/requestvideoframecallback-rvfc/).
For the first frame, we add a callback and after rendering every frame we will add the callback again.

We will add a callback for every frame and calculate new segmentation from the frame. 


```javascript
if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
  async function segmentAndRender(now, metadata) {
    webcam.width = metadata.width;
    webcam.height = metadata.height;
    const segmentation = await net.segmentPerson(webcam);
    let coloredPartImage = bodyPix.toMask(
      segmentation,
      foregroundColor,
      backgroundColor
    );

    canvasEl.width = metadata.width;
    canvasEl.height = metadata.height;
    bodyPix.drawMask(
      canvasEl,
      webcam,
      coloredPartImage,
      opacity,
      maskBlurAmount,
      flipHorizontal
    );
    webcam.requestVideoFrameCallback(segmentAndRender);
  }
  webcam.requestVideoFrameCallback(segmentAndRender);
}
```
That's it that's all you need to do to remove the background of the real-time video. For every frame, we will calculate the mask and then apply it to the video and paint it on canvas. We can go further and change background instead of color to a static image using clip paths etc.

You can try the example at [Bodypix in real time](https://shubham9411.github.io/body-pix-tutorial/index3.html). Here is the full code for the real-time removal of background:

```javascript
tf.setBackend("webgl").then(() => main());
  async function main() {
    const webcamEl = document.getElementById("webcam");
    const canvasEl = document.getElementById("canvas");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
    });
    webcamEl.srcObject = stream;
    webcamEl.play();
    const net = await bodyPix.load();

    const flipHorizontal = true; // for flipping the video and showing as mirror image
    const foregroundColor = {r: 0, g: 0, b: 0, a: 0}; // no color
    const backgroundColor = {r: 255, g: 0, b: 0, a: 255}; // red
    const maskBlurAmount = 4;
    const opacity = 0.7;

    async function renderLoop(now, metadata) {
      webcamEl.width = metadata.width;
      webcamEl.height = metadata.height;
      const segmentation = await net.segmentPerson(webcamEl);
      let coloredPartImage = bodyPix.toMask(segmentation, foregroundColor, backgroundColor);

      canvasEl.width = metadata.width;
      canvasEl.height = metadata.height;
      bodyPix.drawMask(canvasEl, webcamEl, coloredPartImage, opacity, maskBlurAmount, flipHorizontal);
      webcamEl.requestVideoFrameCallback(renderLoop);
    }
    webcamEl.requestVideoFrameCallback(renderLoop);
  }
} else {
  alert('requestVideoFrameCallback API not supported')
}
```

