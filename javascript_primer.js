let botonAgregar = document.querySelector('.botonAgregar');
let display = document.querySelector('.display');

let miLibreria = [];

function Libro(titulo, autor, paginas, leido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido;
}


function agregarLibroALaLibreria() {
    event.preventDefault();

    let inputTitulo = document.querySelector('.titulo').value;
    let inputAutor = document.querySelector('.autor').value;
    let inputPaginas = +document.querySelector('.paginas').value;
    let inputLeido = document.querySelector('.checkbox').checked;

    let nuevoLibro = new Libro(inputTitulo, inputAutor, inputPaginas, inputLeido);
    miLibreria.push(nuevoLibro);

    display.innerHTML = '';
    miLibreria.forEach(mostrarLibroEnPantalla)

}

function mostrarLibroEnPantalla(elemento, indice, arreglo) {
    
    function quitarLibro() {
        let id = this.parentElement.id;
        let elementoPorQuitar = document.getElementById(id);
        display.removeChild(elementoPorQuitar);
        array.splice(index, 1);
    }

    let index = indice;
    let array = arreglo;
    let nuevoDiv = document.createElement('div');
    nuevoDiv.id = crypto.randomUUID();
    nuevoDiv.style.width = '300px';
    nuevoDiv.style.height = '300px';
    nuevoDiv.style.border = '1px solid black'
    let titulo = document.createElement('div');
    titulo.textContent = elemento.titulo;
    let autor = document.createElement('div');
    autor.textContent = elemento.autor;
    let paginas = document.createElement('div');
    paginas.textContent = elemento.paginas;
    let leido = document.createElement('div');
    if (elemento.leido === true) {
        leido.textContent = 'Leido';
    } else if (elemento.leido === false) {
        leido.textContent = 'No leido';
    };
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar Libro';
    botonEliminar.addEventListener('click', quitarLibro)
    nuevoDiv.appendChild(titulo);
    nuevoDiv.appendChild(autor);
    nuevoDiv.appendChild(paginas);
    nuevoDiv.appendChild(leido);
    nuevoDiv.appendChild(botonEliminar);
    display.appendChild(nuevoDiv);

}


botonAgregar.addEventListener('click', agregarLibroALaLibreria);


