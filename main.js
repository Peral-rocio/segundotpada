//AQUI VA EL WINDOWS ONLOAD

//AQUI COMIENZA EL ATRAPADO DE ELEMENTS
function $(elements) {
   return document.querySelector (elements)
}
// AQUI COMIENZA EL TP

//SECCION DE HEADER

//BOTONES :

//MODO CLARO-MODO OSCURO

const $body = $ ("body")
const $botonModos = $("#bModos")
const $modoClaro = $(".modoClaro")
const $modoOscuro = $(".modoOscuro")

$botonModos.addEventListener ("click", () => {
  if ($body.classList.contains("modoClaro")){
    $body.classList.remove("modoClaro");
    $body.classList.add("modoOscuro");   
} else {
  $body.classList.contains("modoOscuro");
  $body.classList.remove ("modoOscuro");
  $body.classList.add("modoClaro");
}
})


//BOTON DE IMAGEN

const $botonimg = $ ("#botonimagen")
const $divimg = $("#divAside")


$botonimg.addEventListener("click", () => {
$divimg.style.display = "flex";
})


//boton de cierre imagen:

const $cierreImagen = $("#botonCierre1")

$cierreImagen.addEventListener("click", () => { 
  $divimg.style.display = "none"
}) 


//BOTON TEXTO

const $botonTexto = $("#botontexto")
const $divTexto = $ ("#divTexto")

$botonTexto.addEventListener("click", () => {
  $divTexto.style.display = "flex";
})

//boton de cierre texto:

const $cierreTexto = $("#botonCierre2")

$cierreTexto.addEventListener("click", () => {
  $divTexto.style.display = "none";
})



//boton de descarga:

//domtoimage.toBlob($card).then((blob) => {
  // saveAs(blob, ".png");
//});
 

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

$inputFiltrosFondo.addEventListener("input", () => {
  $imagenMeme.style.backgroundImage = `backgroundBlenMode ${$inputFiltrosFondo.value}`
})

//FILTROOOOOOS -----------------------------------------------------

const $inputBrillo = $("#brillo")

$inputBrillo.addEventListener ("input", () => {
  const aux = $imagenMeme.style.filter
  $imagenMeme.style.filter = `brightness (${$inputBrillo.value})`;
})

const $inputOpacidad = $("#opacidad")

$inputOpacidad.addEventListener ( "input", () => {
  const aux = $imagenMeme.style.filter
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
  $imagenMeme.style.filter = ` sepia (${$inputSepia.value}%)`
})

const $inputSaturado = $("#saturado")
$inputSaturado.addEventListener ("input" , () => {
$imagenMeme.style.filter = `saturate (${$inputSaturado.value}%)`
})

const $inputNegativo = $("#negativo")
$inputNegativo.addEventListener ("input" , () => {
$imagenMeme.style.filter = `invert (${$inputNegativo.value})`
})

// restablecer valores boton --------------------------------------
const $restablecervalores1 = $(".boton-restablecer")

function restablecervalores (){
   
  $url.value = "";

   $imagenMeme.value = "";

   $inputColorFondoImg.value = "";

   $inputFiltrosFondo.value= "";

   $inputBrillo.value = "0" 

  $inputOpacidad.value = "0" 

  $inputContraste.value = "0" 

  $inputDesenfoque.value = "0" 

  $inputEscalaDeGrises.value= "0" 

  $inputSepia.value = "0" 

  $inputSaturado.value = "0" 

  $inputNegativo.value  ="0" 
}

restablecervalores()

$restablecervalores1.addEventListener("click", restablecervalores)


//SECCION TEXTO:

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
} 
} )

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


//FUENTE
 
const $fuenteDeLetras= $(".clases-fuente")

$fuenteDeLetras.addEventListener ( "input" , () => {
  $textoArriba.style.fontFamily = $fuenteDeLetras.value
  $textoAbajo.style.fontFamily = $fuenteDeLetras.value
} )

//tamaño de fuente:

const $tamañoFuente = $(".tamaño-fuente")

$tamañoFuente.addEventListener ("input", () => {
  $textoArriba.style.fontSize = $tamañoFuente.value + "px";
  $textoAbajo.style.fontSize = $tamañoFuente.value +"px"; 
})

//ALINEACION 

//IZQUIERDA 

const $izquierda = $("#aIzquierda")

$izquierda.addEventListener("click", () =>{
 if ($divTextoTop.style.justifyContent = "center"){
  $divTextoTop.style.justifyContent = "start";
 }
})

$izquierda.addEventListener("click", () =>{
  if ($divInferior.style.justifyContent = "center"){
   $divInferior.style.justifyContent = "start";
  }
 })

 //CENTRO

 const $centro = $("#aCentro")

 $centro.addEventListener ("click", () => {
  $divTextoTop.style.justifyContent = "center";
 })

 $centro.addEventListener ("click", () => {
  $divInferior.style.justifyContent = "center";
 })

 //DERECHA

 const $derecha = $("#aDerecha")

 $derecha.addEventListener("click", () => {
  if ($divTextoTop.style.justifyContent = "center"){
    $divTextoTop.style.justifyContent = "end";
   }
 })

 $derecha.addEventListener("click", () => {
  if ($divInferior.style.justifyContent = "center"){
    $divInferior.style.justifyContent = "end";
   }

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

//CHECK DE FONDO TRANSPARENTE
 
const $checkTransparente = $ ("#checkColorFondo")

$checkTransparente.addEventListener("click", () => {
  if ($divTextoTop.style.backgroundColor = "") {
    $divTextoTop.style.backgroundColor = `rgba (0,0,0,0)`;
  }
  })

$checkTransparente.addEventListener("click", () => {
  if ($divInferior.style.backgroundColor = "") {
    $divInferior.style.backgroundColor = `rgba (0,0,0,0)`;
  }
  })

  //Contorno de las letras

  const $ninguno = $("#botonContorno1")

  $ninguno.addEventListener("click", () => {
    $textoArriba.style.textShadow = "" ;
    $textoAbajo.style.textShadow= "" ;
  })

  const $claro= $("#botonContorno2")

  $claro.addEventListener("click", () => {
      $textoArriba.style.textShadow= "2px 2px 5px white";
      $textoAbajo.style.textShadow = "2px 2px 5px white";
  })

  const $oscuro = $("#botonContorno3")

  $oscuro.addEventListener("click", () => {
     $textoArriba.style.textShadow= "2px 2px 5px black";
     $textoAbajo.style.textShadow= "2px 2px 5px black";
  })

  //Espaciado 

 const $inputEspaciado = $("#inputNumber")

 $inputEspaciado.addEventListener("input", () => {
  $divTextoTop.style.padding = `${$inputEspaciado.value}px 10px`;
  $divInferior.style.padding = `${$inputEspaciado.value}px 10px`;
 })

 //interlineado
  const $inputinterlineado = $(".select-interlineado")

  $inputinterlineado.addEventListener("input", () =>{
    $textoArriba.style.lineHeight= `${$inputinterlineado.value}`;
    $textoAbajo.style.lineHeight= `${$inputinterlineado.value}`;
   })

