//Clase 1
var botonElement = document.getElementById("btnconfirmar");

do{
var contador = 0;
botonElement.onclick = function () {
contador++;

var cupos = document.getElementById("cupos");

if (contador>0 && contador<11){
    console.log(contador);
    cupos.innerHTML = contador + "/10";
}
else{
    alert("Señor usuario su clase no ha sido asignada debido a que los cupos están completos");   
    nodoPadre = document.getElementById("modal2");
    modal = document.getElementById("prueba");
    nodoPadre.removeChild(modal);
}
}
} while (contador>0 && contador<11);

//Clase 2
var botonElement = document.getElementById("btnconfirmar1");

do{
var contador2 = 0;
botonElement.onclick = function () {
contador2++;

var cupos = document.getElementById("cupos1");

if (contador2>0 && contador2<11){
    console.log(contador2);
    cupos.innerHTML = contador2 + "/10";
}
else{
    alert("Señor usuario su clase no ha sido asignada debido a que los cupos están completos");   
    nodoPadre = document.getElementById("modal3");
    modal = document.getElementById("prueba2");
    nodoPadre.removeChild(modal);
}
}
} while (contador2>0 && contador2<11);

//Clase 3
var botonElement = document.getElementById("btnconfirmar2");

do{
var contador3 = 0;
botonElement.onclick = function () {
contador3++;

var cupos = document.getElementById("cupos2");

if (contador3>0 && contador3<11){
    console.log(contador3);
    cupos.innerHTML = contador3 + "/10";
}
else{
    alert("Señor usuario su clase no ha sido asignada debido a que los cupos están completos");   
    nodoPadre = document.getElementById("modal4");
    modal = document.getElementById("prueba3");
    nodoPadre.removeChild(modal);
}
}
} while (contador3>0 && contador3<11);


//Clase 4
var botonElement = document.getElementById("btnconfirmar3");

do{
var contador4 = 0;
botonElement.onclick = function () {
contador4++;

var cupos = document.getElementById("cupos3");

if (contador4>0 && contador4<11){
    console.log(contador4);
    cupos.innerHTML = contador4 + "/10";
}
else{
    alert("Señor usuario su clase no ha sido asignada debido a que los cupos están completos");   
    nodoPadre = document.getElementById("modal5");
    modal = document.getElementById("prueba4");
    nodoPadre.removeChild(modal);
}
}
} while (contador4>0 && contador4<11);