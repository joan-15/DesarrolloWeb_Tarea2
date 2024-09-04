//variable con let

let nivelDeBateria = 87;

let dia = lunes;

let tareasPendientes = ["estudiar", "ejercicio", "jugar"];

let paginasLeidas = 327;

let pasosDia = 9827;


//variables con const

const nombre = "juan";

const cedula = 124983549934;

const configuracion = {idioma: "español"};

const clases = 5;

const pais = "colombia"


//funciones tipo flecha: sin parametros

const mostrarSaludo = () => "Hola, ¿cómo estás?";


const mostrarSaludoConHora = () => {
    const hora = new Date().getHours();
    if (hora < 12) {
      return "Buenos días";
    } else if (hora < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

//funciones tipo flecha: con un parametro
  
  const duplicarNumero = (numero) => numero * 2;


  const duplicarSiEsNumero = (valor) => {
    if (typeof valor !== "number") {
      return "No es un número";
    }
    return valor * 2;
  };

  
//funciones tipo flecha: con más parametros

  const calcularSuma = (a, b) => a + b;


  const calcularOperacion = (a, b, operacion) => {
    switch (operacion) {
      case "suma":
        return a + b;
      case "resta":
        return a - b;
      case "multiplicacion":
        return a * b;
      case "division":
        return a / b;
      default:
        return "Operación no válida";
    }
  };
  