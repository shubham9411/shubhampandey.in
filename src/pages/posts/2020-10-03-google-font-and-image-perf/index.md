---
title: Google font and image performance
author: Shubham Pandey
type: post
date: 2020-10-03
path: /google-font-and-image-perf/
category: web-performance
tags:
  - perf
  - webP
---

I have recently revamped this blog. I was using Hugo earlier it is also a good framework for the blog but seeing all those "I'm using gatsby" tweets I also wanted to learn it and change my site too. Earlier I used a default theme available in gatsby theme store and started moving my content to it but I never succeded fully. After thinking and procrastinating on this for long finally I did it last Saturday(26 Sep).

I have customised the theme used by [Sophia Li][4] which is a variant of [tania.dev's][5] site. My gratitude to them for creating the theme and letting it used by anyone on the internet free of cost. I have also added some new flavours to it and will customize more in future.

Some changes I did today are related with some google perf issues. Last week my agenda was to push my blog to production as fast as I could, so I overlooked some aspects of performance which I am fixing this week.

### Problems Identified

* Large download size for a blog site
* Render blocking issues by fonts

### Solutions

#### Large Download size for a blog site

You can google [page insights][1] or [lighthouse][2] tool to check how fast your site loads in a slow network. When I checked it for this site it gave me a score of 96 with two warnings one of which was to reduce the size of the image which is about 437 KiB while the total size of the page was 564 KiB you can see it clearly in the image below.

<div style="text-align: center">

| Pagespeed |
| ------ |
| ![pagespeed old](/google-font-and-image-perf/pagespeed-old.webp) |

</div>

The image of mine on the landing page was 80% of the total size of all the assets. The solution was clear in my mind that was to convert the image to webP format(as was suggested by lighthouse and also by [Surma][6] in his various videos on youtube). So now the problem and its solution were in front of me, I had to just convert png image to webP but I did not knew how much I am going to save after changing the image to webP. I was hoping for at least a 50% reduction in file size.

I search on bing _Convert png to webP_. Clicked on the first result that came. Uploaded file and got the image output and the file size of the downloaded image file was 275 KiB, which was more than 40% reduction in size. I was not that impressed but yeah now I had the same file in almost half the size, I pushed it to production. I then remembered there is also a terminal command which converts images to webP which I guess that website was also be using in the background. So I just searched and got the command. I ran the command and I was surprised by the final size of the webP image after that for the same 400+ KiB png file. The new size was 21 KiB which is 5% of the size of the original image. That was an awe moment. I had heard a lot about the improvement on images by using webP but did not knew it is that good.

Anyway, If you are a web developer you must knew that compatibility between different browsers is still not that good. here the browser in question is Safari, after all these years it still doesn't have the [webP support][7] and will throw an error on webP images. I just used a hack there to use the old png image, which I reduced in size by changing the resolution. The hack I used here was to change back the `src` of the `img` tag back to the old image if there is an error. That way we not only can support safari but also the older IE browsers.
Reference of the code below:

```jsx
  const webpImage = useRef(null)

  const changeImageFromWebP = () => {
    const pngUrl = 'shubham9411.png'
    webpImage.current.src = pngUrl
  };
  render (
    <img
      src="shubham9411.webp"
      className={styles.headshot}
      alt="Photo of Shubham Pandey"
      ref={webpImage}
      onError={changeImageFromWebP}
    />
  )
```

Updated sizes:

<div style="text-align: center">

| Pagespeed |
| ------ |
| ![pagespeed-new](/google-font-and-image-perf/pagespeed-new.webp) |

</div>

#### Render blocking issues by fonts

This was just a straight-up issue of fonts blocking the main thread and taking time to download fonts first and then loading the content after it. Render blocking for js is easier to fix as you just have to use `async` and `defer` according to the need. 
In the case of CSS, they are treated as [render blocking resource by default][3].

But in my case the fonts are not that important to be loaded on the first view it can use swapping after loading at any time because there is no fancy font is being used. The hack I used here was to use the link attribute as `preload` and on `onLoad` change it back to `stylesheet` see below.

```jsx
  const changePreload = event => {
    event.target.onload = null
    event.target.rel = 'stylesheet'
  }
  
  render (
    <>
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        as="style"
        onLoad={changePreload}
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </noscript>
    </>
  )
```

You need that `noscript` tag to load normal font if javascript is not available.

---

So yeah that was it about the performance upgrades. After pushing new code to Github I checked the new score of the site from [pagespeed insights][1]. It was 99 this time with no extra warnings and the size of the site reduced to 116.6 KiB in total. So today's learning was to use webP wherever you can and if possible to automate using webP. The other was to watch out for the render blocking issues and try to fix them as much you can.

[1]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fshubhampandey.in%2F&tab=mobile&hl=en
[2]: https://web.dev/performance-scoring/
[3]: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css
[4]: https://sophiali.dev/
[5]: https://tania.dev/
[6]: https://twitter.com/search?q=%40dassurma%20webp&src=typed_query
[7]: https://caniuse.com/?search=webp
