import Swal from 'sweetalert2';

export const generoPelicula = [
    "Elije una opcion...",
    "Accion",
    "Aventura",
    "Ciencia Ficcion",
    "Comedia",
    "Drama",
    "Fantasia",
    "Musical",
    "Suspenso",
    "Terror"
]

export const validacionNombre = (nombre) => {
    if(nombre.trim().length > 0 && nombre.trim().length <= 20){
        return true
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Nombre invalido',
            text: 'Debe tener entre 1 y 20 letras',
          })
          return false
    }
}

export const validacionDescripcion = (descripcion) => {
    if(descripcion.trim().length > 9 && descripcion.trim().length <= 100){
        return true
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Descripcion breve',
            text: 'Debe tener entre 10 y 100 letras',
          })
          return false
    }
}

export const validacionGenero = (genero) => {
    if(genero === "" || genero === generoPelicula[0]){
        Swal.fire({
            icon: 'error',
            title: 'Genero invalido',
            text: 'Debe elegir otra opcion',
          })
         return false
    } 
        return true
}


