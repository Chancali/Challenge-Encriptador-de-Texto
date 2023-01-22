var auxVar = true;
var pantalla = screen.width;
var tabletW = 1065;
var celW = 540;

function encriptado(){
    event.preventDefault();
    let textoNoEncriptado=document.querySelector(".text-area").value.toLowerCase();
    var txtCifrado = textoNoEncriptado.replace(/e/igm,"enter");
    txtCifrado = txtCifrado.replace(/i/igm,"imes"); 
    txtCifrado = txtCifrado.replace(/a/igm,"ai"); 
    txtCifrado = txtCifrado.replace(/o/igm,"ober"); 
    txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    
    if(textoNoEncriptado!="" & auxVar){
        let cuadroTxt=document.querySelector(".vacio");
        let txtResult = document.querySelector(".resultado");
        cuadroTxt.className="result-container";
        while(cuadroTxt.firstChild) {
            cuadroTxt.removeChild(cuadroTxt.firstChild);
        }
        txtResult.innerHTML = txtCifrado;
        cuadroTxt.innerHTML= '<p class="resultado">'+txtCifrado+'</p>'+'\n'+'<button class="copiar" onclick="copiar()">Copiar</button>'+'\n'+'<button class="copiar" onclick="copiar()">Copiar</button>'+'\n'+'<div class="txt-copiado"></div>';
        auxVar = false;
    } else if(auxVar == false & textoNoEncriptado != ""){
        let txtResult = document.querySelector(".resultado");
        txtResult.innerHTML = txtCifrado;
    } else if (textoNoEncriptado == "" & auxVar == false){
        let txtResult = document.querySelector(".resultado");
        txtResult.innerHTML = "Ingrese un texto";
    }
}

function desencriptado(){
    event.preventDefault();
    let textoEncriptado=document.querySelector(".text-area").value.toLowerCase();
    var txtDescifrado = textoEncriptado.replace(/enter/igm,"e");
    txtDescifrado = txtDescifrado.replace(/imes/igm,"i"); 
    txtDescifrado = txtDescifrado.replace(/ai/igm,"a"); 
    txtDescifrado = txtDescifrado.replace(/ober/igm,"o"); 
    txtDescifrado = txtDescifrado.replace(/ufat/igm,"u"); 

    if(textoEncriptado!="" & auxVar){
        let cuadroTxt=document.querySelector(".vacio");
        let txtResult = document.querySelector(".resultado");
        cuadroTxt.className="result-container";
        while(cuadroTxt.firstChild) {
            cuadroTxt.removeChild(cuadroTxt.firstChild);
        }
        txtResult.innerHTML = txtDescifrado;
        cuadroTxt.innerHTML= '<p class="resultado">'+txtDescifrado+'</p>'+'\n'+'<button class="copiar" onclick="copiar()">Copiar!</button>'+'\n'+'<button class="copiar" onclick="copiar()">Copiar!</button>'+'\n'+'<div class="txt-copiado"></div>';
        auxVar = false;
    } else if(auxVar == false & textoEncriptado !=""){
        let txtResult = document.querySelector(".resultado");
        txtResult.innerHTML = txtDescifrado;
    } else if (textoEncriptado == "" & auxVar == false){
        let txtResult = document.querySelector(".resultado");
        txtResult.innerHTML = "Ingrese un texto";
    }
}

function copiar(){
    let aux = document.createElement("input");
    aux.setAttribute("value", document.querySelector(".resultado").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    let contenedor= document.querySelector(".txt-copiado");
    contenedor.innerHTML='<p class="copiado">Texto copiado</p>'
    let copiado= document.querySelector(".copiado");
    function remover(){
        copiado.remove();
    }
    setTimeout(remover, 2000);
}
