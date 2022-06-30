let dia1 = "Lunes"; 
let dia2 = "Martes"; 
let dia3 = "Miércoles"; 
let dia4 = "Jueves"; 
let dia5 = "Viernes"; 
let dia6 = "Sábado"; 
let turnos = 0;
while (turnos <= 6){
      let nombre = prompt("Ingrese su nombre").toLowerCase();
      if (turnos == 0) { 
            alert("Su turno es para el " + dia1);
            turnos++;
      } else if (turnos == 1) {
            alert("Su turno es para el " + dia2);
            turnos++;
      } else if (turnos == 2) {      
            alert("Su turno es para el " + dia3);
            turnos++;
      } else if (turnos == 3) {
            alert("Su turno es para el " + dia4);
            turnos++;
      } else if (turnos == 4) {
            alert("Su turno es para el " + dia5);
            turnos++;
      } else if (turnos == 5){
            alert("Su turno es para el " + dia6);
            turnos++;
      } else {
            alert("No hay más turnos disponibles por el momento");
            break;
      }
}