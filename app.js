
alert ("bienvenidos a mi juego");  //alerta de bienvenida al juego

let numeroSecreto=8 //declaracion de variable del numero secreto

let numeroUsuario=prompt("ingresa un numero del 1 al 10"); //variable para pedir al usuario un numero y guardarlo en (numeroUsuario)

console.log(numeroUsuario); // muestra resultados en la consola

// inicia condicion (codigo para realizar comparacion)

if (numeroSecreto == numeroUsuario) {   // condicion 
    //la condicion es verdadera
    alert (`acertaste, el numero secreto es: ${numeroSecreto}`);                // para mostrar en ventana emergente si se cumplio la condicion 
} else{                                 // condicion ( si no) es falsa la condicion
alert ("sigue intentando");             // para mostrar en ventana emergente
}





/*
practicas
//condicion de calificaciones


let calif = prompt("¿cual es la calificacion?");


console.log(calif);

// inicia condicion

if (calif >= 6) {    
    if (calif >= 9) {
        alert("excelente");

    }
    alert("aprobaste");
}
alert ("reprobado");



//condicion de edad

let edad = prompt("¿cual es tu edad?");

console.log(edad);

//inicia condicion

if (edad >= 18) {
    alert("acceso permitido");
}
alert ("acceso denegado");

*/