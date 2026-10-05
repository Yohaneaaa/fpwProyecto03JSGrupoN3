export const filtrarPeliculas = (lista, genero, puntaje) => {
    if (genero !== "Todos") {
        lista = lista.filter((pelicula) => pelicula.genero === genero);
    }
    if (puntaje !== "Todos") {
        lista = lista.filter((pelicula) => pelicula.puntaje >= puntaje);
    }
    return lista;
};

export const mostrarPeliculas = (lista, contenedor) => {
    contenedor.innerHTML = "";

    lista.forEach((pelicula) => {
    contenedor.innerHTML = 
    contenedor.innerHTML + `<li>${pelicula.titulo} - Género: ${pelicula.genero} (Puntaje: ${pelicula.puntaje})</li>`;
    });
};
