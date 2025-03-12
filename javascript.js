let formulario = document.querySelector('#formulario');
let display = document.querySelector('#display');
let titulo = document.querySelector('#titulo');
let autor = document.querySelector('#autor');
let paginas = document.querySelector('#paginas');
let leido = document.querySelector('#leido');
let noLeido = document.querySelector('#noLeido')
let botonNuevoLibro = document.querySelector('#nuevoLibro');
let botonAgregarLibro = document.querySelector('#agregarLibro');


let Libreria = [];

botonNuevoLibro.addEventListener('click', () => {
    formulario.style.display = 'grid';
    formulario.style.gap = '10px';
})

/*------------------------------------------------------------------------------*/

function Libro(titulo, autor, paginas, leido, noleido) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido;
    this.noleido = noleido;
}

function mostrarLibrosEnDisplay () {
    Libreria.forEach(function(objeto,indice,arreglo){
        let index = indice;
        let array = arreglo;
        let id = crypto.randomUUID();
        let nuevoDiv = document.createElement('div');
        nuevoDiv.id = id;
        nuevoDiv.style.height = '100px';
        nuevoDiv.style.border = '1px solid black';
        let divTitulo = document.createElement('div');
        divTitulo.textContent = `Titulo: ${objeto.titulo}`;
        nuevoDiv.appendChild(divTitulo);
        let divAutor = document.createElement('div');
        divAutor.textContent = `Autor: ${objeto.autor}`;
        nuevoDiv.appendChild(divAutor);
        let divPaginas = document.createElement('div');
        divPaginas.textContent = `Paginas: ${objeto.paginas}`;
        nuevoDiv.appendChild(divPaginas);
        if(objeto.leido === true || objeto.noLeido === false){
            let divLeidoONo = document.createElement('div');
            divLeidoONo.textContent = "Estatus: Libro leido";
            nuevoDiv.appendChild(divLeidoONo);
        } else if (objeto.noleido === true || objeto.leido === false) {
            let divLeidoONo = document.createElement('div');
            divLeidoONo.textContent = "Estatus: Libro no leido";
            nuevoDiv.appendChild(divLeidoONo);
        }
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener ('click', (e)=> {
            array.splice(index, 1)
            let padre = e.target.parentElement;
            display.removeChild(padre);
            display.innerHTML = '';
            mostrarLibrosEnDisplay();
        }) 
        nuevoDiv.appendChild(botonEliminar);
        let botonCambiarEstatus = document.createElement('button');
        botonCambiarEstatus.textContent = 'Cambiar estatus';
        botonCambiarEstatus.addEventListener('click', ()=>{
            if (objeto.leido === true){
                objeto.leido = false;
                objeto.noLeido = true;
                display.innerHTML =' ';
                mostrarLibrosEnDisplay();
            } else if(objeto.noleido === true){
                objeto.noLeido = false;
                objeto.leido = true;
                display.innerHTML= '';
                mostrarLibrosEnDisplay();
            } else if(objeto.leido === false) {
                objeto.leido = true;
                objeto.noLeido = false;
                display.innerHTML = '';
                mostrarLibrosEnDisplay();
            } else if (objeto.noLeido === false){
                objeto.noLeido = true;
                objeto.leido = false;
                display.innerHTML = '';
                mostrarLibrosEnDisplay();
            }
        })
        nuevoDiv.appendChild(botonCambiarEstatus);
        display.appendChild(nuevoDiv);
    })
}

function agregarLibroAArray (){
    let algunRadioChekeado = document.querySelector('input[name="leidoOno"]:checked')
    if (titulo.value === '' || autor.value === '' || paginas.value === ''|| algunRadioChekeado === null) {
        alert("Porfavor completa todas las opciones del formulario");
        formulario.reset();
    } else {
        let valorTitulo = titulo.value;
        let valorAutor = autor.value;
        let valorPaginas = paginas.value;
        let valorLeido = leido.checked;
        let valorNoLeido = noLeido.checked;
        let nuevoLibro = new Libro(valorTitulo, valorAutor, valorPaginas, valorLeido,valorNoLeido);
        Libreria.push(nuevoLibro);
        formulario.reset();
        formulario.style.display = 'none';
        display.innerHTML= '';
        mostrarLibrosEnDisplay();
    }
}

botonAgregarLibro.addEventListener('click', agregarLibroAArray);



    
