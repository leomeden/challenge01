
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
btnDesencriptar.addEventListener("click", desencriptar/*()=> console.log("Apretado botón Desencriptar")*/)
btnCopiar.addEventListener("click", copiar)
textMain.addEventListener("keydown", validateKey)
textMain.addEventListener("paste", validatePaste)

/*textAside.addEventListener("input", ajustar)*/


function encriptar(){
  aside.style.justifyContent = "space-between";
  titleAside.style.display = "none";
  pAside.style.display = "none";
  imgAside.style.display = "none";
  textAside.style.display = "block";
  btnCopiar.style.display = "block";

  /*textAside.value = textMain.value;*/
  textAside.value = replaceCode();

  function replaceCode(x) {
    const chars = {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat'
    };

   return textMain.value.split('').map(c => c = chars[c] || c ).join('');
   
  }
  
}

function desencriptar(){
  aside.style.justifyContent = "space-between";
  titleAside.style.display = "none";
  pAside.style.display = "none";
  imgAside.style.display = "none";
  textAside.style.display = "block";
  btnCopiar.style.display = "block";

  /*textAside.value = textMain.value;*/
  textAside.value = replaceCode();

  function replaceCode(x) {
    const chars = {
      'ai' : 'a',
      'enter' : 'e',
      'imes' : 'i',
      'ober' : 'o',
      'ufat' : 'u' 
    };
   
let re = new RegExp(Object.keys(chars).join("|"),"g");
let str = textMain.value.replace(re, function(matched){
  return chars[matched];
});
  return str;
  }
  
}


async function copiar() {
  
    try {
      await navigator.clipboard.writeText(textAside.value);
    } catch (error) {
      console.error(error.message);
    }
    textMain.value = "";
  
}

function validateKey(e) {
  let key = e.key;
  /*console.log(e.key);*/
  e.key == "Backspace" ? key = "backspace": key = e.key;
  const pattern = new RegExp('^[a-zñ .backspace!?]+$');
  
      if(!pattern.test(key)) {
        e.preventDefault();
        return false;
      }

}

async function validatePaste(e) {
  const pattern = new RegExp('^[a-zñ .!?]+$');
  e.preventDefault();
  let key = "";
  try {
    key = await navigator.clipboard.readText()
  } catch (error) {
    console.error(error.message);
  }

  console.log(key);
  if (!pattern.test(key)) {
    console.log("no pasa")
    return false;
  } else {
    textMain.value = textMain.value + " " + key;
    console.log("El texto es valido");
  }
}
