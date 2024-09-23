var cronometro = 0;
var minutos = 0;
var horas = 0;
var texto = document.getElementById("cronometro");
var texto2 = document.getElementById("min");
var texto3 = document.getElementById("horas");

var funcionando = false;
function tempo() {
  cronometro++;
  texto.innerHTML = cronometro;
  if (cronometro >= 60) {
    cronometro = 0;
    minutos++;
    texto.innerHTML = cronometro;
    texto2.innerHTML = "Se passaram " + minutos + " Minutos";
    if (minutos >= 60) {
      minutos = 0;
      horas++;
      texto2.innerHTML = "Se passaram " + minutos + " Minutos";
      texto3.innerHTML = "Se passaram " + horas + " horas";
    }
  }
}

var timeout;
function intervall() {
  timeout = setInterval(tempo, 1000);
}
function Start() {
  if (funcionando == false) {
    intervall();
    funcionando = true;
  } else {
    return 0;
  }
}

function Stop() {
  clearInterval(timeout);
  funcionando = false;
}
