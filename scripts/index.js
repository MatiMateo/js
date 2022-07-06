let dia1 = "Lunes"; 
let dia2 = "Martes"; 
let dia3 = "Miércoles"; 
let dia4 = "Jueves"; 
let dia5 = "Viernes"; 
let dia6 = "Sábado"; 
let turnos = 0;
const lunes = (name) => alert(`Bienvenide ${name} su turno es para el ${dia1}`)
const martes = (name) => alert(`Bienvenide ${name} su turno es para el ${dia2}`)
const miercoles = (name) => alert(`Bienvenide ${name} su turno es para el ${dia3}`)
const jueves = (name) => alert(`Bienvenide ${name} su turno es para el ${dia4}`)
const viernes = (name) => alert(`Bienvenide ${name} su turno es para el ${dia5}`)
const sabado = (name) => alert(`Bienvenide ${name} su turno es para el ${dia6}`)
while (turnos <= 6){
      const nombre = prompt("Ingrese su nombre");
      const name = nombre[0].toUpperCase() + nombre.substring(1);
      if (turnos == 0) { 
            lunes(name);
            turnos++;
      } else if (turnos == 1) {
            martes(name);
            turnos++;
      } else if (turnos == 2) {      
            miercoles(name);
            turnos++;
      } else if (turnos == 3) {
            jueves(name);
            turnos++;
      } else if (turnos == 4) {
            viernes(name);
            turnos++;
      } else if (turnos == 5){
            sabado(name);
            turnos++;
      } else {
            alert("No hay más turnos disponibles por el momento");
            break;
      }
}

/* const nombre = prompt("Ingrese su nombre");
const resultado = nombre[0].toUpperCase() + nombre.substring(1);
alert(resultado); */

