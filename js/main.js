
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
textMain.addEventListener("keydown", validateKey)

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

function validateKey(e) {
  let key = e.key;
  console.log(e.key);
  e.key == "Backspace" ? key = "backspace": key = e.key;
  const pattern = new RegExp('^[a-zñ .backspace]+$');
  
 
      
      if(!pattern.test(key)) {
        e.preventDefault();
        return false;
      }
   
}
/*
function validatePaste(el, e) {
  var regex = /^[a-z .'-]+$/gi;
  var key = e.clipboardData.getData('text')
  if (!regex.test(key)) {
    e.preventDefault();
    return false;
  }
}*/


