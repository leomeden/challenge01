
let aside = document.getElementsByTagName("aside")[0];
let main = document.getElementsByTagName("main")[0];

let btnEncriptar = document.getElementsByClassName("btn-encriptar")[0];
let btnDesencriptar = document.getElementsByClassName("btn-desencriptar")[0];
let btnCopiar = document.getElementsByClassName("btn-copiar")[0];
let textMain = document.getElementById("text-main");
let textAside = document.getElementById("text-aside");
let imgAside = document.getElementById("img-aside");
let titleAside = document.getElementById("h-aside");
let pAside = document.getElementById("p-aside");



btnEncriptar.addEventListener("click", encriptar)
btnDesencriptar.addEventListener("click", ()=> console.log("Apretado botón Desencriptar"))
btnCopiar.addEventListener("click", copiar)
textMain.addEventListener("keyup", cambio)

/*textAside.addEventListener("input", ajustar)*/


function encriptar(){
  aside.style.justifyContent = "space-between";
  titleAside.style.display = "none";
  pAside.style.display = "none";
  imgAside.style.display = "none";
  textAside.style.display = "block";
  btnCopiar.style.display = "block";

  textAside.value = textMain.value;
  
  
}

async function copiar() {
  
    try {
      await navigator.clipboard.writeText(textAside.value);
    } catch (error) {
      console.error(error.message);
    }
  
}

function cambio(){

  if (!validarLetra()){
    //textMain.value = textMain.value.slice(0, textAside.value.length)
    let texto = textMain.value
    console.log("PROBLEMA")
    textMain.value = texto.slice(0, texto.length-1)
 } else{
  console.log("todo bien");
 }
}


function validarLetra() {
  // El pattern que vamos a comprobar
  const pattern = new RegExp('^[a-z,ñ ]+$');
      // Si input contiene caracteres diferentes a los permitidos
      if(!pattern.test(textMain.value)){ 
      // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
      // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
        return false;
      } else {
        // Si pasamos todas la validaciones anteriores, entonces el input es valido
        return true;
      }
    
}



