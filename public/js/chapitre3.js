//timer
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//mode sombre
let bouton = document.getElementById("night");

bouton.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "#58cdff") {
    document.body.style.backgroundColor = "black";
  } else if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "#58cdff";
  } else {
    document.body.style.backgroundColor = "black";
  }
});

//Lance la musique et l'histoire et l'FX
document.getElementById("musicStart").addEventListener("click", function () {
  var soundOrigin = new Howl({
    src: ["../../public/audio/baladedanslejardin.wav"],
    autoplay: true,
    loop: true,
    volume: 0.3,
    onend: function () {
      console.log("Finished!");
    },
  });
  var story = new Howl({
    src: ["../../public/audio/histoireSync/3.wav"],
    autoplay: true,
    loop: false,
    volume: 1,
    onend: function () {
      console.log("Finished!");
    },
  });
  document.getElementById("play").addEventListener("click", function () {
    var fx1 = new Howl({
      src: ["../../public/audio/fx1.wav"],
      autoplay: true,
      loop: true,
      volume: 2,
      onend: function () {
        console.log("Finished!");
      },
    });
    fx1.fade(2, 0, 4000);
    soundOrigin.fade(0.5, 0, 4000);
    delay(4000).then(() => window.open("./chapitre4.html", "_self"));
  });
});
