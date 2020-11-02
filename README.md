# screenshot
`getDisplayMedia()` => `HTMLVideoElement` => `ImageBitmap`

<h4>Usage</h4>

```
onclick = async e => {
  onclick = null;
  try {
    const bitmap = await screenshot();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('bitmaprenderer');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    ctx.transferFromImageBitmap(bitmap);
    document.body.appendChild(canvas);
  } catch(e) {
      console.error(e);
      console.trace();
  }
}

```

Tested at Firefox 82, Nightly 84, Chromium 88.

<h5>References</h5>

- [Screenshot (still image) capability #107](https://github.com/w3c/mediacapture-screen-share/issues/107)
- [capture screenshot of DOM #145](https://github.com/w3c/mediacapture-screen-share/issues/145)
