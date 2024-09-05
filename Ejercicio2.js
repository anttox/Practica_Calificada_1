// Estructura de datos compleja
const gestorDeTareas = {

  categoria1: {

    subcategoria1: [

      { nombre: 'Limpieza', estado: false },

      { nombre: 'Materiales', estado: true }

    ],

    subcategoria2: [

      { nombre: 'Cocinar', estado: false }

    ]

  },

  categoria2: {

    subcategoria1: [

      { nombre: 'Podar Cesped', estado: true }

    ]

  }

};

// Operacion CRUD

function agregarTarea({ categoria, subcategoria, nombreTarea }) {
    if (!gestorDeTareas[categoria]) {
        
        gestorDeTareas[categoria] = {}; // Crear una categoria en caso no exista
    }
     
    else if (!gestorDeTareas[categoria][subcategoria]) {
        
        gestorDeTareas[categoria][subcategoria] = []; // Crear subcategoria en caso no exista

    } else {
        
        gestorDeTareas[categoria][subcategoria].push({ nombre: nombreTarea, estado: false });
    }
        
}

function eliminarTarea(categoria, subcategoria, nombreTarea) {

     if (gestorDeTareas[categoria]?.[subcategoria]) {

       gestorDeTareas[categoria][subcategoria] = gestorDeTareas[categoria][subcategoria].filter(tarea => tarea.nombre !== nombreTarea);

     }

   }

function actualizarTarea(categoria, subcategoria, nombreTarea, nuevoEstado) {
    
    const tarea = gestorDeTareas[categoria]?.[subcategoria]?.find(t => t.nombre === nombreTarea);

    if (tarea) {
        
        tarea.estado = nuevoEstado;

    }

}

function fusionarCategorias(categoria1, categoria2) {
    
    gestorDeTareas[categoria1] = { ...gestorDeTareas[categoria1], ...gestorDeTareas[categoria2] };

}

// Iteracion compleja y copias

function listarTareas() {

    for (const [categoria, subcategorias] of Object.entries(gestorDeTareas)) {
        
        console.log(`Categoria: ${categoria}`);
        
        for (const [subcategoria, tareas] of Object.entries(subcategorias)) {
            
            console.log(`  Subcategoria: ${subcategoria}`);
            
            tareas.forEach(tarea => {
                
                console.log(`Tarea: ${tarea.nombre}, Completada: ${tarea.estado}`);

        });

    }

    }

}

// Copia superficial y profunda

const copiaSuperficial = { ...gestorDeTareas };

const copiaProfunda = JSON.parse(JSON.stringify(gestorDeTareas));

// Manejo seguro de propiedades

function obtenerTareas(categoria, subcategoria) {
    
    return gestorDeTareas[categoria]?.[subcategoria] ?? 'La subcategoria no fue encontrada'; // Importante para manejar propiedades no definidas

}

// Uso de nuevas caracteristicas de ECMAScript
// Podemos uusar un operador de calescencia nula 

const numero = null ?? 5; // Retornara 5 si el valor es null o undefined

// Imput
agregarTarea({ categoria: 'categoria1', subcategoria: 'subcategoria1', nombreTarea: 'Lavar Ropa' });

listarTareas();

