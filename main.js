//AQUI VA EL WINDOWS ONLOAD

//AQUI COMIENZA EL ATRAPADO DE ELEMENTS
function $(elements) {
   return document.querySelector (elements)
}
// AQUI COMIENZA EL TP

//MODO CLARO-MODO OSCURO

const $bodymodo = $("body")
const $botonModos = $(".botonNav")

$botonModos.addEventListener ("Click", () => {
  if ($bodymodo.classList.contains("modoClaro")){
    $bodymodo.classList.remove("modoClaro")
    $bodymodo.classList.add("modoOscuro")
} else {
    $bodymodo.classList.remove("modoOscuro")
    $bodymodo.classList.add("modoClaro")
}
})

//SECCION IMAGEN:

//imagen del usuario :

const $url = $ ("#urlInput")
const $imagenMeme = $ ("#imagenMeme")

$url.addEventListener( "input", () => {
  if ($imagenMeme.src = " " ){
  $imagenMeme.src = $url.value;
}
} )

//fondo color

// fondo select

//filtros

// restablecer valores boton

//SECCION TEXTO:
//BOTON DE CERRAR LA SECCION 

const $botonCierre = $("#botonCierre2")
const $seccionTexto = $("#divTexto")

$botonCierre.addEventListener ("Click", () => {
 $seccionTexto.style.display = "none" 
})

//texto superior:

const $textoArriba = $("#textoArriba")
const $inputTextTop =$("#textareaDiv")

$inputTextTop.addEventListener("input", () =>{ 
  $textoArriba.innerText = $inputTextTop.value 
})

// INPUT DEL CHEK  SUPERIOR 
const $checkTexto = $ ("#checkTexto")
const $divTextoTop = $ (".contenedorTexto1")

$checkTexto.addEventListener("input", () => {
 if ($divTextoTop.style.display = "flex") {
  $divTextoTop.style.display = "none"
} } )

// COMO LO HAGO VOLVER? -..........................................

//texto inferior:

const $textoAbajo = $("#textoAbajo")
const $inputTextButtom = $("#textareaButtom")  


$inputTextButtom.addEventListener ("input" , () => {
  $textoAbajo.innerText = $inputTextButtom.value
})

//INPUT DEL CHECK INFERIOR

const $checkInferior = $("#checkTextoInferior")
const $divInferior = $(".contenedorTexto2")

$checkInferior.addEventListener ("input" , () => {
  $divInferior.style.display = "none"
})

//como lo hago volver? ............................................................

//FUENTE
