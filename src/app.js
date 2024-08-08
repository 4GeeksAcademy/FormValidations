// /* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
var mensaje = document.getElementById("alertMessage");
var btnenviar = document.getElementById("btn-send");
var inputtarjeta = document.getElementById("card-number");
var inputcvc = document.getElementById("cvc");
var inputamount = document.getElementById("amount");
var inputfirstname = document.getElementById("firstname");
var inputlastname = document.getElementById("lastname");
var inputcity = document.getElementById("city");
var inputpostalcode = document.getElementById("postalcode");
var selectpais = document.getElementById("inputState");

window.onload = function() {
  //write your code here
  mensaje.style.display = "none";
};

btnenviar.addEventListener("click", function(event) {
  if (
    inputtarjeta.value === "" ||
    inputcvc.value === "" ||
    inputamount.value === "" ||
    inputfirstname.value === "" ||
    inputlastname.value === "" ||
    inputcity.value === "" ||
    inputpostalcode.value === "" ||
    selectpais.selectedIndex == 0
  ) {
    event.preventDefault();
  } else {
    alert("se registraron los datos");
    limpiar();
  }
  verificarSelect();
  verificarTarjeta();
  verificarCVC();
  verificarAmount();
  verificarCity();
  verificarFirstname();
  verificarLastname();
  verificarPostalcode();
});

function verificarSelect() {
  if (selectpais.selectedIndex == 0) {
    selectpais.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

function verificarTarjeta() {
  if (inputtarjeta.value === "") {
    inputtarjeta.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

inputtarjeta.addEventListener("blur", function() {
  let cantidad = inputtarjeta.value.length;

  if (cantidad != 16) {
    mensaje.textContent = "Debe ingresar 16 caracteres";
    mensaje.style.display = "block";
    inputtarjeta.focus();
  } else {
    mensaje.style.display = "none";
  }
});

function verificarCVC() {
  if (inputcvc.value === "") {
    inputcvc.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

inputcvc.addEventListener("blur", function() {
  let cantidad = inputcvc.value.length;

  if (cantidad != 4) {
    mensaje.textContent = "Debe ingresar 4 caracteres";
    mensaje.style.display = "block";
    inputcvc.focus();
  } else {
    mensaje.style.display = "none";
  }
});

function verificarAmount() {
  if (inputamount.value === "") {
    inputamount.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

function verificarFirstname() {
  if (inputfirstname.value === "") {
    inputfirstname.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

function verificarLastname() {
  if (inputlastname.value === "") {
    inputlastname.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

function verificarCity() {
  if (inputcity.value === "") {
    inputcity.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

function verificarPostalcode() {
  if (inputpostalcode.value === "") {
    inputpostalcode.style.backgroundColor = "indianred";
    mostrarMensaje();
  }
}

function limpiar() {
  location.reload();
}

function mostrarMensaje() {
  mensaje.textContent = "Algunos campos obligatorios estan vacios";
  mensaje.style.display = "block";
}
