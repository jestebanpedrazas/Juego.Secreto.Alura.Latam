/* let  title = document.querySelector('h1');
title.innerHTML= 'Juego  del numero secreto';
let instructions = document.querySelector('p');
instructions.innerHTML='Indica un numero del 1 al 10';*/
let numeroSecreto=0;
let intentos=0;
let numerosGuardados =[];
let numMaximo=10;
condiciconesIniciales();
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("numeroUsuario").value);  
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemnto('p',`¡Felicitaciones!, Acertaste en ${intentos} ${(intentos===1)?'vez' :'veces'}`);
        console.log(numerosGuardados);
        //La siguiente linea de codigo quita un atributo dentro del html, solo requiere un parametro
        document.getElementById('reiniciar').removeAttribute('disabled');
    } //El usurio no acierta en los siguientes dos bloques de codigo 
    else if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemnto('p',`El numero secreto es MENOR que ${numeroDeUsuario}`);
        intentos++;
        limpiarCaja();
    } else if(numeroDeUsuario<numeroSecreto){
        asignarTextoElemnto('p',`El numero secreto es MAYOR que ${numeroDeUsuario}`);
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemnto(elemento,texto){
    let  title = document.querySelector(elemento);
    title.innerHTML= texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numMaximo)+1;
    //Este bloque evita que al utilizar la recursividad se crashee el programa al no hallar una posibilidad cuando la lista de numeros este completa
    if (numerosGuardados.length==numMaximo){
        asignarTextoElemnto('p',`Ya se sortearon todos los ${numMaximo} numeros`);
    } else {
        //Esta bloque de codigo revisa si el numero ya ha salido
        if(numerosGuardados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            numerosGuardados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}

function limpiarCaja(){
    //Está función limpia el sitio donde se está introduciendo el numero para ser comparado
    let valorCaja =document.querySelector('#numeroUsuario');
    valorCaja.value="";
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //reiniciar
    //Indicar mensaje de inicio
    //Generar el numero aleatorio
    //Deshabilitar el botón
    //Inicializar el número de intentos
    condiciconesIniciales();
    
}

function condiciconesIniciales() {
    asignarTextoElemnto('h1','¡Juego del numero secreto!');
    asignarTextoElemnto('p',`Indica un numero del 1 al ${numMaximo}`);        
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
    //La siguiente linea de codigo tiene como finalidad volver a desactivar el botón de nuevo juego dentro de la web, requiere 2 parametros, la condición y su estado 0 o 1
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

