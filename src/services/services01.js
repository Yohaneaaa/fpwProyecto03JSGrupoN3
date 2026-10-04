let estudiantes = [];

export const obtenerEstudiantes = () => {
  return estudiantes;
};

export const agregarEstudiante = (nuevoEstudiante) => {
  estudiantes = [...estudiantes, nuevoEstudiante];
};

export const mostrarEstudiantes = (listaEstudiantes, tablaEstudiante) => {
  tablaEstudiante.innerHTML = listaEstudiantes
    .map(
      (estudiante) =>
        `<tr><td>${estudiante.nombre}</td><td>${estudiante.apellido}</td><td>${estudiante.libreta}</td></tr>`,
    )
    .join("");
};

export const limpiarFormulario = (formulario) => {
  // formulario.reset();
  formulario.elements["nombre"].value = "";
  formulario.elements["apellido"].value = "";
  formulario.elements["libreta"].value = "";
};
