import { calcularCarrito, carrito } from "../services/services05.js";
const btnTotal = document.querySelector('#btnTotal');
const total = document.querySelector('#total');
const detalle = document.querySelector('#detalle');

btnTotal.addEventListener('click', (evento) => {
    evento.preventDefault();
    const resultado = calcularCarrito(carrito);
    total.textContent = `Total: $${resultado.total.toLocaleString("es-AR")}`;
    detalle.textContent = `Se compraron ${resultado.cantidad} productos`;
});