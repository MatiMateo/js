//Creación de interacción entre catálogo y carrito
class Producto{
      constructor (nombre, precio, cantidad) {
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.cantidad = parseInt(cantidad);
      }
      agregarAlCarrito (item, cant) {
            let index = catalogo.indexOf(item);
            if (index != -1 && this.cantidad > cant) {
                  this.cantidad = this.cantidad - cant;
                  carrito.push(item);
            } else {
                  console.log("No hay más productos disponibles");
            }
      }
}
catalogo = [];
carrito =[];
const remeras = new Producto("Remeras","1800","10");
const jeans = new Producto("Jeans", "5200", "15");
const sweaters = new Producto("Sweaters", "3350", "5");
const cintos = new Producto("Cintos", "950", "20");
catalogo.push(remeras, jeans, sweaters, cintos);
console.log(catalogo);
remeras.agregarAlCarrito(remeras, 4);
console.log(catalogo);
console.log(carrito);