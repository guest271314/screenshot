// screenshot.js guest271314 10-31-2020
// getDisplayMedia() => HTMLVideoElement => ImageBitmap
async function screenshot() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const [track] = stream.getVideoTracks();
    const video = document.createElement('video');
    video.autoplay = video.muted = true;
    return new Promise((resolve) => {
      video.onplay = async (e) => {
	// wait for prompt to fade out
        await new Promise((_) => setTimeout(_, 1000));
	resolve(createImageBitmap(video));
        track.stop();
        video.load();
        video.srcObject = null;
      };
      video.srcObject = stream;
    });
  } catch (e) {
    throw e;
  }
}
