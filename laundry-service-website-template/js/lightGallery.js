const container = document.getElementById("gallery-container");
lightGallery(container, {
  speed: 500,
  plugins: [lgZoom, lgFullscreen]
});

const requestFullScreen = () => {
  const el = document.documentElement;
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  }
};
container.addEventListener("lgAfterOpen", () => {
  requestFullScreen();
});
