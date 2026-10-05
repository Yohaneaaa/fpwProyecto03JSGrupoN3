import { calcularIVA } from "../services/services03.js";

const productos = [
    { nombre: "Coca", precio: 1000 },
    { nombre: "Pan", precio: 500 },
    { nombre: "Leche", precio: 1200 }
];

const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", () => {
    
    const productosConIVA = calcularIVA(productos);

    let contenido = "";

    productosConIVA.forEach(producto => {

        contenido += `
            <div class="producto">
                 <h3>${producto.nombre}</h3>
                 <p>Precio Final: $${producto.precioFinal}</p>
            </div>
        `;
    });

    resultado.innerHTML = contenido;

});