import { obtenerColorAleatorio } from '../services/services02.js';

const boton = document.querySelector('#botonColor');

boton.addEventListener('click', (evento) => {
    const nuevoColor = obtenerColorAleatorio();

    document.body.style.backgroundColor = nuevoColor;

    console.log('El color de fondo cambió a:', nuevoColor);
});