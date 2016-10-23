var tablero = [[],[],[]]
var terminado = false;
var turno = 1;

//Iniciamos el tablero a ceros

function iniciaTablero(){
    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++){
            tablero[i][j]=0;
        }
    }
    //Desaparecemos el boton.
    var boton= document.getElementById("boton");
    boton.style.display="none";
}

//Creamos una funcion que compruebe si hemos terminado. La dividimos en filas y columnas.

function comprobarFin(){
    var comprobar =0;
    
    alert
    
    comprobar= comprobarHorizontales();
    if (comprobar==0){
        comprobar= comprobarVerticales();
        if(comprobar==0){ //Esta estructura evita que siga comprobando si ya hay un ganador.
            comprobar=comprobarDiagonales();
        }
    }
    
    if(comprobar!=0){
        var p = document.getElementById("win");
        var texto;
        terminado=true;
        var boton= document.getElementById("boton");
        boton.style.display="inline";
        
        
        if(comprobar ==1){
            texto= document.createTextNode( "HA GANADO O. Ahora puedes pasar el raton por encima para quitar imagenes. El boton de abajo para mostrar.");
        }else{
            texto= document.createTextNode("HA GANADO X. Ahora puedes pasar el raton por encima para quitar imagenes. El boton de abajo para mostrar.");
        }
        p.appendChild(texto);
    }
    
}

function comprobarHorizontales(){
    var gana=0;
    var i=0;
    
    while(i<3 && gana==0){
        if (tablero[i][0] == tablero[i][1] && tablero[i][0] == tablero[i][2]){
            gana=tablero[i][0];
        }
        i++

    }
    
    return gana;
}

function comprobarVerticales(){
    var gana=0;
    var i=0;
    
    while(i<3 && gana==0){
        if (tablero[0][i] == tablero[1][i] && tablero[0][i] == tablero[2][i]){
            gana=tablero[0][i];
        }
        i++;

    }
    
    return gana;

}

function comprobarDiagonales(){
    var gana=0;
    
    if(tablero[0][0]== tablero[1][1] && tablero [0][0]== tablero[2][2]){
        gana = tablero[0][0];
    }else{
        if(tablero[0][2]== tablero[1][1] && tablero [0][2]== tablero[2][0]){
            gana= tablero[0][2];
        }
    }
    
    return gana;

}

function ponerFicha(fil, col){
    if(!terminado){
        //Pongo valor
        tablero[fil-1][col-1]=turno;
        //Pongo imagen
        if(turno==1)
            document.getElementById("im"+fil+col).setAttribute("src","img/o.png")
        else
            document.getElementById("im"+fil+col).setAttribute("src","img/x.png")
        //Actualizo turno
        turno= (turno+1);
        if (turno>2)
            turno = 1;
        //COmprobamos si es el final
        comprobarFin();
        //alert(""+tablero[0][0] + tablero[0][1] + tablero[0][2]+"\n"+tablero[1][0] + tablero[1][1] + tablero[1][2]+"\n"+tablero[2][0] + tablero[2][1] + tablero[2][2]+"\n")
    }
}


//Ejercicio 2.
function desaparecer(fil,col){
    if(terminado)
        document.getElementById("im"+fil+col).style.display="none";
}

function mostrar(){
    var imagenes= document.getElementsByTagName("img");
    
    for(var i=0; i<imagenes.length;i++){
        imagenes[i].style.display="inherit";
    }
}