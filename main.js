window.onload = () =>{

//                                  AQUI COMIENZA EL ATRAPADO DE ELEMENTS

function $(elements) {
   return document.querySelector (elements)
}

//                                     AQUI COMIENZAN LAS CONST 
const $body = $ ("body")
const $botonModos = $("#bModos")
const $modoClaro = $(".modoClaro")
const $modoOscuro = $(".modoOscuro")
const $botonimg = $ ("#botonimagen")
const $divimg = $("#divAside")
const $cierreImagen = $("#botonCierre1")
const $botonTexto = $("#botontexto")
const $divTexto = $ ("#divTexto")
const $cierreTexto = $("#botonCierre2")
const $descargaMeme = $(".boton-descarga")
const $url = $ ("#urlInput")
const $imagenMeme = $ ("#imagenMeme")
const $inputColorFondoImg = $ (".inputFondoColor")
const $divCentral = $(".divCentral")
const $inputFiltrosFondo = $("#selectFondo")
const $inputBrillo = $("#brillo")
const $inputOpacidad = $("#opacidad")
const $inputContraste = $ ("#contraste")
const $inputDesenfoque = $("#desenfoque")
const $inputEscalaDeGrises = $("#escalaDeGrises")
const $inputSepia = $ ("#sepia")
const $inputSaturado = $("#saturado")
const $inputNegativo = $("#negativo")
const $textoArriba = $("#textoArriba")
const $inputTextTop =$("#textareaDiv")
const $checkTexto = $ ("#checkTexto")
const $divTextoTop = $ (".contenedorTexto1")
const $textoAbajo = $("#textoAbajo")
const $inputTextButtom = $("#textareaButtom")  
const $checkInferior = $("#checkTextoInferior")
const $divInferior = $(".contenedorTexto2")
const $fuenteDeLetras= $(".clases-fuente")
const $tamañoFuente = $(".tamaño-fuente")
const $izquierda = $("#aIzquierda")
const $centro = $("#aCentro")
const $derecha = $("#aDerecha")
const $inputColorLetra = $("#inputColor")
const $textosMeme = $(".contenedor-seccion")
const $colorDeFondo = $("#inputFondo")
const $checkTransparente = $ ("#checkColorFondo")
const $ninguno = $("#botonContorno1")
const $claro= $("#botonContorno2")
const $oscuro = $("#botonContorno3")
const $inputEspaciado = $("#inputNumber")
const $inputinterlineado = $(".select-interlineado")

//                                           AQUI COMIENZAN LOS EVENTOS 

//SECCION DE HEADER

//BOTONES :

//BOTON MODO CLARO-MODO OSCURO
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

//BOTON DE IMAGEN- HEADER
$botonimg.addEventListener("click", () => {
$divimg.style.display = "flex";
})


//boton de cierre imagen:
$cierreImagen.addEventListener("click", () => { 
  $divimg.style.display = "none"
}) 


//BOTON DE TEXTO- HEADER
$botonTexto.addEventListener("click", () => {
  $divTexto.style.display = "flex";
})

//boton de cierre texto:
$cierreTexto.addEventListener("click", () => {
  $divTexto.style.display = "none";
})


//boton de descarga:
$descargaMeme.addEventListener("click", () => {
  domtoimage.toBlob($textosMeme).then((blob) => {
    saveAs(blob, "mi-meme.png");
  })
})


//ASIDE-IMAGEN:

//imagen URL donde el usuario coloca su img:
$url.addEventListener( "input", () => {
  if ($imagenMeme.src = " " ){
  $imagenMeme.src = $url.value;
}
} )

//FONDO DE COLOR DE LA SECCION CENTRAL 
$inputColorFondoImg.addEventListener ("input" , () => {
  $divCentral.style.backgroundColor = $inputColorFondoImg.value
} )

// SECCION FONDO, SELECTOR DE FILTROS 
$inputFiltrosFondo.addEventListener("input", () => {
  $imagenMeme.style.backgroundImage = `backgroundBlenMode ${$inputFiltrosFondo.value}`
})

// SECCION DE FILTROOOOOOS 

//BRILLO
$inputBrillo.addEventListener ("input", () => {
  $divCentral.style.filter = `brightness(${$inputBrillo.value})`;
})

//OPACIDAD
$inputOpacidad.addEventListener ( "input", () => {
  $divCentral.style.filter = `opacity(${$inputOpacidad.value})`
})

//CONTRASTE
$inputContraste.addEventListener ("input", () => {
  $divCentral.style.filter = `contrast(${$inputContraste.value})`
})

//DESENFOQUE
$inputDesenfoque.addEventListener ( "input", () => {
  $divCentral.style.filter = `blur(${$inputDesenfoque.value})`
})

//ESCALA DE GRISES
$inputEscalaDeGrises.addEventListener ( "input", ()=> {
  $divCentral.style.filter = `grayscale(${$inputEscalaDeGrises.value})`
})

//SEPIA
$inputSepia.addEventListener ("input" , () => {
  $divCentral.style.filter = `sepia(${$inputSepia.value})`
})

//SATURACION
$inputSaturado.addEventListener ("input" , () => {
$divCentral.style.filter = `saturate(${$inputSaturado.value})`
})

//NEGATIVO
$inputNegativo.addEventListener ("input" , () => {
$divCentral.style.filter = `invert(${$inputNegativo.value})`
})


//SECCION TEXTO:

//ESCRIBIR EN EL texto superior:
$inputTextTop.addEventListener("input", () =>{ 
  $textoArriba.innerText = $inputTextTop.value 
})

// INPUT DEL CHEK  SUPERIOR 
$checkTexto.addEventListener("input", () => {
 if ($divTextoTop.style.display = "flex") {
  $divTextoTop.style.display = "none"
} 
} )

// ESCRIBIR EN EL texto inferior:
$inputTextButtom.addEventListener ("input" , () => {
  $textoAbajo.innerText = $inputTextButtom.value
})

//INPUT DEL CHECK INFERIOR
$checkInferior.addEventListener ("input" , () => {
  $divInferior.style.display = "none"
})

//FUENTES
//TIPOGRAFIA
$fuenteDeLetras.addEventListener ( "input" , () => {
  $textoArriba.style.fontFamily = $fuenteDeLetras.value
  $textoAbajo.style.fontFamily = $fuenteDeLetras.value
} )

//tamaño de fuente:
$tamañoFuente.addEventListener ("input", () => {
  $textoArriba.style.fontSize = $tamañoFuente.value + "px";
  $textoAbajo.style.fontSize = $tamañoFuente.value +"px"; 
})

//ALINEACION 
//IZQUIERDA 
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
 $centro.addEventListener ("click", () => {
  $divTextoTop.style.justifyContent = "center";
 })

 $centro.addEventListener ("click", () => {
  $divInferior.style.justifyContent = "center";
 })

 //DERECHA
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
$inputColorLetra.addEventListener ("input" , () => {
$textosMeme.style.color = $inputColorLetra.value
})

//COLOR FONDO DEL DIV DE LAS LETRAS 
$colorDeFondo.addEventListener("input", () => {
  $divTextoTop.style.backgroundColor = $colorDeFondo.value
  $divInferior.style.backgroundColor = $colorDeFondo.value
}
)

//CHECK DE FONDO TRANSPARENTE
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

//CONTORNO DE LAS LETRAS 
//NINGUNO
  $ninguno.addEventListener("click", () => {
    $textoArriba.style.textShadow = "" ;
    $textoAbajo.style.textShadow= "" ;
  })

//CLARO
  $claro.addEventListener("click", () => {
      $textoArriba.style.textShadow= "2px 2px 5px white";
      $textoAbajo.style.textShadow = "2px 2px 5px white";
  })

//OSCURO
  $oscuro.addEventListener("click", () => {
     $textoArriba.style.textShadow= "2px 2px 5px black";
     $textoAbajo.style.textShadow= "2px 2px 5px black";
  })

//ESPACIADO
 $inputEspaciado.addEventListener("input", () => {
  $divTextoTop.style.padding = `${$inputEspaciado.value}px 10px`;
  $divInferior.style.padding = `${$inputEspaciado.value}px 10px`;
 })

 //INTERLINEADO
  $inputinterlineado.addEventListener("input", () =>{
    $textoArriba.style.lineHeight= `${$inputinterlineado.value}`;
    $textoAbajo.style.lineHeight= `${$inputinterlineado.value}`;
   })

//---------------------------------------FUNCION RESTABLECER 

// restablecer valores boton
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

  $inputSepia.value = "0%" 

  $inputSaturado.value = "0" 

  $inputNegativo.value  ="0" 
}

restablecervalores()

$restablecervalores1.addEventListener("click", restablecervalores)

}
