export function calcularIVA(productos) {

    return productos.map(producto => ({
       nombre: producto.nombre, 
       precioFinal: producto.precio * 1.21
    }));
      
};  