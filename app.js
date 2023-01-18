const contador = document.getElementById("counter");
const sumar = document.getElementById("incr");
const classes = [
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
];
let classIndex = 0;
let previousClass = classIndex;
let años;
function saludar(params) {
  años = prompt("Cuantos años cumples?");
  alert(`¡Aprieta el botón ${años} veces!`);
}
saludar();

sumar.addEventListener("click", function () {
  classIndex++;
  classIndex = classIndex == classes.length ? classes.length - 1 : classIndex;
  changeClass(previousClass, classIndex);
  contador.innerHTML = classIndex;
  if (classIndex == años) {
    imagen = `<img id='minie' width="80%" src='./tenor.gif' alt='git minie'/>`;
    document.write(imagen);
  }
});

function changeClass(next) {
  let htmlElement = document.getElementById("balloon");
  htmlElement.classList.add(classes[next]);
}
