export const filtrarPeliculas = (lista, genero) => {
    if (genero === "Todos") {
        return lista;
    }
    return lista.filter((pelicula) => pelicula.genero === genero);
};

export const mostrarPeliculas = (lista, contenedor) => {
    contenedor.innerHTML = "";

    lista.forEach((pelicula) => {
    contenedor.innerHTML = 
    contenedor.innerHTML + `<li>${pelicula.titulo} - Género: ${pelicula.genero} (Puntaje: ${pelicula.puntaje})</li>`;
    });
};