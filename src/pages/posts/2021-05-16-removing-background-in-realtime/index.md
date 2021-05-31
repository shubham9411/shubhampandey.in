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

> This blog was in backlog for a long time as this experiment was done last year in October around Dussehra festivel.

### Backstory

Last year when everyone has to go remote the demands for video confrencing/meeting software demands increased significantly. 
The softwares that were most famous were Zoom, Google meet, Microsoft teams. We were using google meet at elitmus at that time.
SOme of the features that are there today was not there one of the feature that was not available at that time was the background
change for videos. I had worked on google meet meeting recording extension earlier that month so I thought there are softwares and libraries that can remove background from any real time videos and are pretty stable. What if we could change the background of any live video of ours in google meet that extension will be an instant hit if made correctly.
So i started searching such modules that can help me in achieving this feat.

I learned about a ML model called Bodypix which you can use in browser using the tensorflow library. So I begun doing some experiments with the library. Ofcourse it was not that efficient as the google's own background blur feature but it was something. In the end I was able to change background for realtime video in browser but before starting the extension part google released the background blur so I stopped working on it. 
Here is the steps on how I achieved that in browser. 

### Building first version with static image

1. Adding tensorflow lib and bodypix model

```html
<!-- Load TensorFlow.js -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/dist/tf-backend-wasm.js"></script>

<!-- Load Posenet -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0"></script>
```

2. Adding image and canvas element

```html
<img id="myimage" src="images/myimage.png" />
<canvas id="canvas"></canvas> <!-- For showing selected area by bodypix -->
<canvas id="canvas2"></canvas> <!-- After applying blur -->
```

3. Lets work on our load and predict where we will load the body pix model to tensorflow and identify person and background in the image.

   - Adding `tf.setBackend('webgl');` will ask tensorflow to use webgl as the backend which is the fastest available in browsers yet, others include cpu and wasm.
   - Load bodyPix `const net = await bodyPix.load();`
   - Now we can use net variable for using the segmentation Api of bodypix. 
   - You can tweek with many options available one of them `internalResolution` is used here for tweeking the quality of segmentation.

```javascript
tf.setBackend('webgl');
async function loadAndPredict() {

  const img = document.getElementById("myimage");

  const net = await bodyPix.load();
  const segmentation = await net.segmentPerson(img, {
    internalResolution: 1,
  });
}
```

<div style="text-align: center;margin-top: 1em">

| Segmentation with different internalResolution values |
| ------ |
| ![image showing segmentation with different internalResolution values](/removing-background-in-realtime/internalResolution.webp) |

</div>


3. Masking the image and printing to the canvas

   - We got the segmentation from above code and now we can mask the parts we want from that segmentation using the Api `bodyPix.toMask`.
   - Setup background and forground color it will be applied to the image.
   - If you dont want to apply any froground or background you can pass alpha as 0, ex: `const red = {r: 255, g: 0, b: 0, a: 255}` rgb -> red, blue, green, and a is for the alpha channel.
   - Now draw the mask to the canvas using `bodyPix.drawMask` Api.

```javascript
const foregroundColor = {r: 255, g: 0, b: 0, a: 255}; // red
const backgroundColor = {r: 0, g: 255, b: 0, a: 255}; // green
const coloredPartImage = bodyPix.toMask(
  segmentation, // segmentation of the image
  foregroundColor, // forground color
  backgroundColor
); // apply the colors to the segment and make mask
const opacity = 0.7; // Opacity of the color and the original image
const maskBlurAmount = 4; // Value for blur amount between the two segments forground and background.
const canvas = document.getElementById("canvas");
bodyPix.drawMask(
  canvas,
  img,
  coloredPartImage,
  opacity,
  maskBlurAmount,
  flipHorizontal
);
```

<div style="text-align: center;margin-top: 1em">

| Results with different `maskBlurAmount` value |
| ------ |
| ![image showing segmentation with different internalResolution values](/removing-background-in-realtime/maskBlurAmount.webp) |

</div>

