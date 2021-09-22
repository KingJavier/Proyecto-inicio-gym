//Eliminar Clase 1 
var botonAceptar = document.getElementById('btnaceptar');
botonAceptar.addEventListener('click', eliminarCLase);

function eliminarCLase(){
    nodopadre = document.getElementById('nodopadre');
    clase = document.getElementById('clases1');
    nodopadre.removeChild(clase);
}


//Eliminar Clase 2
var botonAceptar = document.getElementById('btnaceptar1');
botonAceptar.addEventListener('click', eliminarCLase1);

function eliminarCLase1(){
    nodopadre = document.getElementById('nodopadre');
    clase1 = document.getElementById('clases2');
    nodopadre.removeChild(clase1);
}


//Eliminar Clase 3
var botonAceptar = document.getElementById('btnaceptar2');
botonAceptar.addEventListener('click', eliminarCLase2);

function eliminarCLase2(){
    nodopadre = document.getElementById('nodopadre');
    clase2 = document.getElementById('clases3');
    nodopadre.removeChild(clase2);
}


//Eliminar Clase 4
var botonAceptar = document.getElementById('btnaceptar3');
botonAceptar.addEventListener('click', eliminarCLase3);

function eliminarCLase3(){
    nodopadre = document.getElementById('nodopadre');
    clase3 = document.getElementById('clases4');
    nodopadre.removeChild(clase3);
}