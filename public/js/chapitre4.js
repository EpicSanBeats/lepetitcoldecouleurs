// timer
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//Lance la musique et l'histoire et l'FX
document.getElementById("musicStart").addEventListener("click", function () {
  var soundOrigin = new Howl({
    src: ["../../public/audio/climb.wav"],
    autoplay: true,
    loop: true,
    volume: 0.3,
    onend: function () {
      console.log("Finished!");
    },
  });
  var story = new Howl({
    src: ["../../public/audio/histoireSync/4.wav"],
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
    delay(4000).then(() => window.open("./chapitre5.html", "_self"));
  });
});
// text qui apparait
const el = document.getElementById("container");
const hiddenDiv = document.getElementById("hidden-div");

el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.display = "block";
});

let fusee = document.getElementsByClassName("fufu")[0];
let titleTiti = document.getElementsByClassName("titi")[0];
let counter = 0;

fusee.addEventListener("click", () => {
  if (counter === 0) {
    fusee.style.height = "300px";
    titleTiti.style.fontFamily = "Impact";
    counter++;
    console.log(counter);
  } else if (counter === 1) {
    fusee.style.height = "400px";
    titleTiti.style.fontFamily = "Arial";
    counter++;
    console.log(counter);
  } else {
    fusee.style.height = "200px";
    titleTiti.style.fontFamily = "Times New Roman";
    counter = 0;
    console.log(counter);
  }
});
