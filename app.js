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
    imagen = `
    <div style='display:flex; justify-content:center; flex-direction:column; align-item:center;'>
    <h1 style='color:pink; font-size:2.8rem; margin-botom:0; text-align:center;'>¡¡¡Feliz Cumple!!!</h1>
    <h2 style='color:grey; font-size:2.5rem; margin-top:0; text-align:center;'>Valentina y Sofia</h2>
    <img id='minie' width="80%" src='./tenor-2.gif' alt='git minie'/>
    <h4 style='text-align:center; margin-top:0 color:grey; font-weith:bold; font-size:2.5rem;'>Tia Diana y Abu Berta</h4>
    <p style='text-align:center; margin-top:-3rem; color:grey; font-size:2.5rem;'>las quieren muchoooo!!!!!</p>
    </div>`;
    document.write(imagen);
  }
});

function changeClass(next) {
  let htmlElement = document.getElementById("balloon");
  htmlElement.classList.add(classes[next]);
}
