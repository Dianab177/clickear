const contador = document.getElementById("counter");
const sumar = document.getElementById("incr");
const classes = ["f0", "f1", "f2", "f3", "f4", "f5"];
let classIndex = 0;
let previousClass = classIndex;

sumar.addEventListener("click", function () {
  classIndex++;
  classIndex = classIndex == classes.length ? classes.length - 1 : classIndex;
  changeClass(previousClass, classIndex);
  contador.innerHTML = classIndex;
  if (classIndex == 5) {
    imagen = `<img class='img' src='https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif' alt='gift'/>`;
    document.write(imagen);
  }
});

function changeClass(next) {
  let htmlElement = document.getElementById("balloon");
  htmlElement.classList.add(classes[next]);
}
