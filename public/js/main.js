//Timer
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//Lance la musique et l'histoire et l'FX
document.getElementById("musicStart").addEventListener("click", function () {
  var soundOrigin = new Howl({
    src: ["../../../public/audio/lune.wav"],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function () {
      console.log("Finished!");
    },
  });
  document.getElementById("play").addEventListener("click", function () {
    var fx1 = new Howl({
      src: ["../../../public/audio/fx1.wav"],
      autoplay: true,
      loop: true,
      volume: 2,
      onend: function () {
        console.log("Finished!");
      },
    });
    fx1.fade(2, 0, 4000);
    soundOrigin.fade(0.5, 0, 4000);
    delay(4000).then(() =>
      window.open("./public/pages/chapitre1.html", "_self")
    );
  });
});
