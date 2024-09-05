// Funcion para calcular la media, mediana, moda y la desviacion estandar

function calcularEstadisticas(numeros) {

  if (!numeros.every(num => typeof num === 'number')) { // typeof nos va a permitir los datos del array sean numericos

    console.error('El arreglo contiene valores no numericos'); // esto nos ayudara a alertar al usuario que el arreglo no contienen datos numericos

    return;

  }


  const media = numeros.reduce((a, b) => a + b, 0) / numeros.length; // Calculamos la media

  const numerosOrdenados = [...numeros].sort((a, b) => a - b); // Ordenamos los numeros ya que la moda y la mediana requieren que los nueros esten ordenados 
  
  const mitad = Math.floor(numeros.length / 2);

  const mediana = numeros.length % 2 === 0

    ? (numerosOrdenados[mitad - 1] + numerosOrdenados[mitad]) / 2 // impares

    : numerosOrdenados[mitad]; // pares

  const frecuencia = {};

  numeros.forEach(num => (frecuencia[num] = (frecuencia[num] || 0) + 1));

  const maxFrecuencia = Math.max(...Object.values(frecuencia)); // primer dato para hallar la desviacion

  const moda = Object.keys(frecuencia).filter(num => frecuencia[num] === maxFrecuencia);

  const varianza = numeros.reduce((acumulado, num) => acumulado + Math.pow(num - media, 2), 0) / numeros.length; // segundo dato que toma la formual de la desviacion

  const desviacionEstandar = Math.sqrt(varianza);

  return { media, mediana, moda, desviacionEstandar };

}


// Iteracion avanzada y destructuring

function calcularEstadisticasPorCategoria(datos, categoria) {
    
    return datos.map(({ [categoria]: valores }) => {
        
        if (!valores) return { error: `Categoria ${categoria} no encontrada` }; // manejo de errores si la categoria no existe
        
        const estadisticas = calcularEstadisticas(valores);
        
        return estadisticas;
    
    });
}


// Organizacion de datos en categorias

const datos = [

  { edad: [23, 24, 25, 30], ingresos: [2000, 3000, 2500, 4000] },

  { edad: [20, 21, 22, 29], ingresos: [2200, 3100, 2300, 4200] },

];

const estadisticasEdades = calcularEstadisticasPorCategoria(datos, 'edad');

const estadisticasIngresos = calcularEstadisticasPorCategoria(datos, 'ingresos');


console.log(estadisticasEdades);

console.log(estadisticasIngresos);

// Diferencia de dias entre dos fechas

function diferenciaDias(fecha1, fecha2) {

  const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un dia

  const diff = Math.abs(new Date(fecha1) - new Date(fecha2));

  return Math.floor(diff / unDia);

}


const diasDiferencia = diferenciaDias('2024-04-11', '2024-09-25');

console.log(`Diferencia de dias: ${diasDiferencia}`);


// Imput

console.log('Estadistica de la edad: ', estadisticasEdades);

console.log('Estadistica de los ingresos: ', estadisticasIngresos);
