//AQUI VA EL WINDOWS ONLOAD

//AQUI COMIENZA EL ATRAPADO DE ELEMENTS
function $(elements) {
   return document.querySelector (elements)
}
// AQUI COMIENZA EL TP

//MODO CLARO-MODO OSCURO

const $body = $ ("body")
const $botonModos = $(".botonNav")
const $modoClaro = $(".modoClaro")
const $modoOscuro = $ (".modoOscuro")

$botonModos.addEventListener ("Click", () => {
  if ($body.classList.contains("modoClaro")){
    $body.classList.add("modoOscuro")
    $body.classList.remove("modoClaro")
}
else {
  $body.classList.add("modoClaro")
    $body.classList.remove("modoOscuro")
}
})

//SECCION DE HEADER

//BOTONES 

//IMG





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

const $inputColorFondoImg = $ (".inputFondoColor")
const $divCentral = $(".divCentral")


$inputColorFondoImg.addEventListener ("input" , () => {
  $divCentral.style.backgroundColor = $inputColorFondoImg.value
} )

// fondo select

const $inputFiltrosFondo = $("#selectFondo")

$inputFiltrosFondo.addEventListener ("change" , () => {
     const $imagenMeme = $inputFiltrosFondo.value

     switch ($imagenMeme) {
      
      case "1":
        $imagenMeme.style.mixBlendMode = "unset" ;

        break;

      case "2":
        $imagenMeme.style.mixBlendMode= "lighten";

        break;

      case "3":
        $imagenMeme.style.mixBlendMode = "darken";

        break;
      
      case "4":
        $imagenMeme.style. mixBlendMode= "difference";

        break;
      
      case "5":
        $imagenMeme.style.mixBlendMode = "luminosity";
        
        break;
        
      case "6":
      $imagenMeme.style.mixBlendMode= "multiply";
     
    default:
      $imagenMeme.style.filter = "none";
      $imagenMeme.style.mixBlendMode = "unset";
    }

})

//filtros
const $inputBrillo = $("#brillo")

$inputBrillo.addEventListener( "input", () =>{
  $imagenMeme.style.filter = `brightness (${$inputBrillo.value})`
})


const $inputOpacidad = $("#opacidad")

$inputOpacidad.addEventListener ( "input", () => {
  $imagenMeme.style.filter = `opacity (${$inputOpacidad.value})`
})

const $inputContraste = $ ("#contraste")

$inputContraste.addEventListener ("input", () => {
  $imagenMeme.style.filter = `contrast (${$inputContraste.value}%)`
})


const $inputDesenfoque = $("#desenfoque")
$inputDesenfoque.addEventListener ( "input", () => {
  $imagenMeme.style.filter = `blur (${$inputDesenfoque.value}px)`
})

const $inputEscalaDeGrises = $("#escalaDeGrises")

$inputEscalaDeGrises.addEventListener ( "input", ()=> {
  $imagenMeme.style.filter = `grayscale (${$inputEscalaDeGrises.value}%)`
})

const $inputSepia = $ ("#sepia")

$inputSepia.addEventListener ("input" , () => {
  $imagenMeme.style.filter = `sepia (${$inputSepia.value}%)`
})

const $inputHue = $("hue")
$inputHue.addEventListener("input", () => {
  $imagenMeme.style.filter = `hue-rotate (${$inputHue.value})deg`
})

const $inputSaturado = $("#saturado")
$inputSaturado.addEventListener ("input" , () => {
$imagenMeme.style.filter = `saturate (${$inputSaturado.value}%)`
})

const $inputNegativo = $("#negativo")
$inputNegativo.addEventListener ("input" , () => {
$imagenMeme.style.filter = `invert (${$inputNegativo.value})`
})

// restablecer valores boton
const $restablecervalores1 = $(".boton-restablecer")

function restablecervalores (){
   
  $url.value = " ";

   $imagenMeme.value = "";

   $inputColorFondoImg.value = ""

   $inputFiltrosFondo.value = " ";

   $inputBrillo.value ="0" 

  $inputOpacidad.value ="0" 

  $inputContraste.value ="0" 

  $inputDesenfoque.value ="0" 

  $inputEscalaDeGrises.value ="0" 

  $inputSepia.value="0" 

  $inputHue.value ="0" 

  $inputSaturado.value="0" 

  $inputNegativo.value ="0" 
}

restablecervalores ()

$restablecervalores1.addEventListener ("click", restablecervalores)


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
 
const $fuenteDeLetras= $(".clases-fuente")

$fuenteDeLetras.addEventListener ( "input" , () => {
  $textoArriba.style.fontFamily = $fuenteDeLetras.value
  $textoAbajo.style.fontFamily = $fuenteDeLetras.value
} )

//tamaño de fuente:

const $tamañoFuente = $(".tamaño-fuente")

$tamañoFuente.addEventListener ("input", () => {
  $textoArriba.style.fontSize = $tamañoFuente.value
  $textoAbajo.style.fontSize = $tamañoFuente.value
})

//COLOR DE LETRAS

const $inputColorLetra = $("#inputColor")
const $textosMeme = $(".contenedor-seccion")

$inputColorLetra.addEventListener ("input" , () => {
$textosMeme.style.color = $inputColorLetra.value
})

//FONDO DE LETRAS 

const $colorDeFondo = $("#inputFondo")
const $fondoTextos = $ ("#contenedorTextos")

$colorDeFondo.addEventListener("input", () => {
  $divTextoTop.style.backgroundColor = $colorDeFondo.value
  $divInferior.style.backgroundColor = $colorDeFondo.value
}
)

//CHECK DE FONDO TRANSPARENTE ( hacerlo funcionar)
 
const $checkTransparente = $ ("#checkColorFondo")

$checkTransparente.addEventListener("input", () => {
  $divTextoTop.style.backgroundColor = rgba( 0, 0, 0, 0) ;
  $divInferior.style.backgroundColor =  rgba (0,0,0,0) ; 
})


































//restablecer filtros

//function restablecerFiltros (){
  // aca debo poner como inicia cada uno ejemplo: 
  // el brillo.value = 1 
//}

//luego aca tengo que colocar como ejecuta la funcion es decir
// restablecerfiltros ()

//luego al boton de restablecer le ponemos un escuchador
// boton.addevenlistener ( click , () => { 
  // resteablecer filtros ( o puede ir arriba en la funcion directamente para no repetir funcion sobre fduncion) 
  //})