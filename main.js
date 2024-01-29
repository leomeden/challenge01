let btnEncriptar = document.getElementsByClassName("btn-encriptar")[0];
let btnDesencriptar = document.getElementsByClassName("btn-desencriptar")[0];
let btnCopiar = document.getElementsByClassName("btn-copiar")[0];
let textMain = document.getElementById("text-main");
let textAside = document.getElementById("text-aside");



btnEncriptar.addEventListener("click", encriptar)
btnDesencriptar.addEventListener("click", ()=> console.log("Apretado botón Desencriptar"))
btnCopiar.addEventListener("click", ()=> console.log("Apretado botón Copiar"))


function encriptar(){
  
  textAside.style.backgroundImage = "none";
  textAside.value = textMain.value;
  btnCopiar.style.display = "block";
  
 
  
  //textAside.style.backgroundImage = null;
  
  
}