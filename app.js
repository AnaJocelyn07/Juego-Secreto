
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let tamañoLista = 10;


//FUNCION CON PARÁMETROS
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//FUNCION DEL BOTON "INTENTO"
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);

    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos==1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    //el usuario no acertó
    else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//FUNCION PARA VACIAR CAJA/INPUT
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

//FUNCION QUE RETORNA UN NÚMERO ALEATORIO
function generaNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*tamañoLista)+1;
 
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length == tamañoLista){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
   }
   else{
        //si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//FUNCION PARA MENSAJES DE INICIO
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Escribe un número del 1 al ${tamañoLista}`);
    //GENERAR NUEVO NUMERO SECRETO
    numeroSecreto = generaNumeroSecreto();
    //INICIALIZAR NUMERO DE INTENTOS
    intentos = 1;

}

//FUNCION PARA REINICIAR JUEGO
function reiniciarJuego(){
    //LIMPIAR CAJA
    limpiarCaja();

    //MOSTRAR NUEVAMENTE MENSAJE DE INTERVALO
    //GENERAR NUEVO NUMERO SECRETO
    //INICIALIZAR NUMERO DE INTENTOS
    condicionesIniciales();

    //DESABILITAR BOTON DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();



