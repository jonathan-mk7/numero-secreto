


alert ("bienvenidos a mi juego");  //alerta de bienvenida al juego

let numeroSecreto=Math.floor(Math.random()*10)+1;//declaracion de variable del numero secreto
let numeroUsuario=0

let intentos=1       //numero de intentos
//let palabraVeces="vez" 
let maximoIntentos=5

while (numeroSecreto != numeroUsuario) {   // inicia condicion (codigo para realizar comparacion)
    let numeroUsuario=prompt("ingresa un numero del 1 al 10"); //variable para pedir al usuario un numero y guardarlo en (numeroUsuario)

    console.log(numeroSecreto); // muestra resultados en la consola

    if (numeroSecreto == numeroUsuario) {   // condicion 

        alert (`acertaste, el numero secreto es: ${numeroSecreto}. lo hiciste en: ${intentos} ${intentos == 1 ? 'Vez' : 'veces'}`);             //operadores ternarios
                        // para mostrar en ventana emergente si se cumplio la condicion 
    } else{    // condicion ( si no) es falsa la condicion (se agrega una pista)
        if (numeroUsuario > numeroSecreto ) {     //condicion si el numero es mayor se da una pista
            alert ("el numero es menor");    

        } else {
            alert ("el numero es mayor");    //si es mayor se muestra en ventana emergente
        }                             
            //incrementamos el contador cuando no acierta
            intentos ++
           //palabraVeces="veces" 
           if (intentos > maximoIntentos) {
            alert (`llegaste al numero maximo de: ${intentos} intentos`);
            break;    //para cerrar el ciclo

           }
    }

}





