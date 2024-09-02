const enterFullscreen = document.getElementById("enter-fullscreen");
const exitFullscreen = document.getElementById("exit-fullscreen");

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    enterFullscreen.setAttribute("stroke", "transparent");
    exitFullscreen.setAttribute("stroke", "black");
  } else {
    document.exitFullscreen();
    enterFullscreen.setAttribute("stroke", "black");
    exitFullscreen.setAttribute("stroke", "transparent");
  }
}