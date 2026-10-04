export const carrito = [
  { producto: "Notebook", precio: 800000, enStock: true },
  { producto: "Mouse", precio: 15000, enStock: false },
  { producto: "Teclado", precio: 30000, enStock: true },
  { producto: "Monitor", precio: 200000, enStock: true }
]; 
export const calcularCarrito = (items) =>{
    const enStock = items.filter(item => item.enStock);
    const precios = enStock.map(item => item.precio);
    const sumaProd = precios.reduce((acumulador, actual) => acumulador + actual, 0);

    return{
    total: sumaProd,
    cantidad: enStock.length
  };
};