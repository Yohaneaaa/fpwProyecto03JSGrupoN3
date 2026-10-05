import {
  obtenerEstudiantes,
  agregarEstudiante,
  mostrarEstudiantes,
  limpiarFormulario,
} from "../services/services01.js";

const formularioEstudiante = document.querySelector("#form-estudiante");
const tablaEstudiante = document.querySelector("#tabla-estudiantes");

formularioEstudiante.addEventListener("submit", (event) => {
  event.preventDefault();

  const nuevoEstudiante = {
    nombre: formularioEstudiante.elements["nombre"].value.trim(),
    apellido: formularioEstudiante.elements["apellido"].value.trim(),
    libreta: formularioEstudiante.elements["libreta"].value.trim(),
  };

  agregarEstudiante(nuevoEstudiante);
  mostrarEstudiantes(obtenerEstudiantes(), tablaEstudiante);

  limpiarFormulario(formularioEstudiante);
});
