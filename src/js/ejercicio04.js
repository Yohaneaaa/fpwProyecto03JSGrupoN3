import { filtrarPeliculas, mostrarPeliculas } from "../services/services04.js";

// Constantes
const genero = document.querySelector("#filtroGenero");
const puntaje = document.querySelector("#filtroPuntaje");
const botonFiltrar = document.querySelector("#botonFiltrar");
const listaPeliculas = document.querySelector("#listaPeliculas");

const peliculas = [
    { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
    { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
    { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
    { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }
];

mostrarPeliculas(peliculas, listaPeliculas);

botonFiltrar.addEventListener("click", () => {
    const generoSeleccionado = genero.value;
    const puntajeSeleccionado = puntaje.value;

    const peliculasFiltradas = filtrarPeliculas(peliculas, generoSeleccionado, puntajeSeleccionado);
    mostrarPeliculas(peliculasFiltradas, listaPeliculas);
});