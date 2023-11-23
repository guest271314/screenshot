// screenshot.js guest271314 11-23-2023
// getDisplayMedia() => MediaStreamTrackProcessor => ImageBitmap => OffscreenCanvas
async function screenshot() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true
    });
    const [track] = stream.getVideoTracks();
    const processor = new MediaStreamTrackProcessor({
      track
    });
    const {
      value: videoFrame
    } = await processor.readable.getReader().read();
    track.stop();
    const image = await createImageBitmap(videoFrame);
    const osctx = (new OffscreenCanvas(image.width, image.height)).getContext("bitmaprenderer");
    osctx.transferFromImageBitmap(image);
    videoFrame.close();
    return URL.createObjectURL(await osctx.canvas.convertToBlob());
  } catch (e) {
    throw e;
  }
}
