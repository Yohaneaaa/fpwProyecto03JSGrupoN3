const colores = [
  '#FBF6F0', '#F3E1DE', '#E9D8C4', '#E4C7A8', '#CBB9A6', '#FDE2E4',
  '#FAD2E1', '#FFE5D9', '#D8E2DC', '#E2ECE9', '#DFE7FD', '#F0E8E1',
  '#590C07', '#C5F2C9', '#E4C3C7', '#C5A2A2', '#AD6E6E', '#FDF2CF'
];
export const obtenerColorAleatorio = () => {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
};