# screenshot
`getDisplayMedia()` => `MediaRecorder()` => [VP8 - WebM JavaScript Decoder](https://github.com/dominikhlbg/vp8-webm-javascript-decoder) => `ImageData`

<h4>Usage</h4>

```
(async _ => {
  try {
    const screenshots = await screenshot()
    for (const screenshot of screenshots) {
      // do stuff with ImageData
      console.log(screenshot);
      const canvas = document.createElement('canvas');
      const ctx = c.getContext('2d');
      canvas.width = screenshot.width;
      canvas.height = screenshot.height;
      ctx.putImageData(screenshot, 0, 0);
      document.body.appendChild(canvas);
    }  
  } catch(e) {
      throw e;
  }
})()
.catch(e => {
  console.error(e);
  console.trace();
});
```

<h5>Note</h5> 

At Chromium a five (5) second delay for time to hide screen capture notification window is implemented before the `MediaStream` from `getDisplayMedia()` is passed to `MediaRecorder` to avoid capturing the notification in screenshots.

TODO: Programmatically hide Chromium screen capture notification.

<h5>References</h5>

- [Screenshot (still image) capability #107](https://github.com/w3c/mediacapture-screen-share/issues/107)
- [capture screenshot of DOM #145](https://github.com/w3c/mediacapture-screen-share/issues/145)
