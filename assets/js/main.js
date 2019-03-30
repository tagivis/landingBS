// var base=20;
// var symbol= '*';
// var line ='';
// for(var i=0; i<base; i++)
// {
//     console.log(line = line + symbol);
// }

//jugadores
    //2 jugadores
//opciones jugadores
    //que seleccionaron
// Opciones
    // a: piedra
    // b: papel
    // c: tijera
// Reglas
    // empate opcion1=opcion2
    //a gana c, b gana a, c gana b
    //a pierde b, b pierde c, c pierde con a
//prompt


var jugadorA;
var jugadorB;
var opciones =["piedra", "papel","tijeras"]

var seleccion1;
var seleccion2;

function aleatorio()
{
    var random = Math.floor(Math.random()*(opciones.length));
    // console.log(random);
    return random;
}

function validaResultado(seleccion1, seleccion2)
{
    var resultado="";
    if(seleccion1==seleccion2)
    {
        resultado="Empate"
    }
    else
    {
        printSelection(seleccion1)
        printSelection(seleccion2)
        // Gana seleccion 1, gana jugador 1
        if((seleccion1==opciones[0] && seleccion2==opciones[2])||
        (seleccion1==opciones[1] && seleccion2==opciones[0])||
        (seleccion1==opciones[2] && seleccion2==opciones[1]))
        {
            resultado="Gana jugador 1";
        }
        else{
            resultado="Gana jugador 2";
        }
    }
    return resultado;
}
function printSelection(a){
    if(a = 0) console.log('piedra');
    if(a = 1) console.log('papel');
    if(a = 2) console.log('tijera');
}
(function()
{
    console.log(validaResultado(opciones[aleatorio()], opciones[aleatorio()]));

})()



