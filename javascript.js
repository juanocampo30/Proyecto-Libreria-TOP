let botonAgregar = document.querySelector('.botonAgregar');

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
}


botonAgregar.addEventListener('click', agregarLibroALaLibreria);



