//AQUI VA EL WINDOWS ONLOAD

//AQUI COMIENZA EL ATRAPADO DE ELEMENTS
function $(elements) {
   return document.querySelector (elements)
}
// AQUI COMIENZA LAS CONST

//CONTENEDOR CENTRAL:
//HEADER:
const $contenedorCentral = $("#divCentral")
const $contenedorHeader = $("#divHeader") 
const $h1Central = $("#h1Titulo")
const $navCentral = $("#navCentral")
const $botonNav1 = $ ("#boton1")
const $botonNav2 = $ ("#boton2")
const $botonModo = $ ("#modoClaro")
//MAIN
const $contenedorMain = $("#divSecciones")
const $textoTop = $("#divTop")
const $imagenMeme = $("#img")
const $textoBottom = $("#divBottom")
const $descargarimg = $("#descargarMeme")
//ASIDE:
const $contenedorAside = $("#divAside")
const $cierreImg = $("#botonCierre1")
//SECCION IMAGEN
const $opcionesImg = $("#opcionesImagen")
const $h1Aside= $("#asideTitulo") 
const $contenedorUrl = $(".divUrl")
const $inputUrl = $("#urlInput")
const $colorFondo = $("#colorFondo")
const $inputColor = $ ("#inputColorFondo")
const $SelectorFondo = $ ("#selectFondo")
const $divFiltros = $ ("#divFiltros")
const $inputBrillo = $ ("#brillo")
const $inputOpacidad = $ ("#opacidad")
const $inputContraste = $ ("#contraste")
const $inputDesenfoque = $ ("#desenfoque")
const $inputEscala = $ ("#escalaDeGrises")
const $inputSepia = $ ("#sepia")
const $inputHue = $ ("#hue")
const $inputSaturado = $ ("#saturado")
const $inputNegativo = $ ("#negativo")
const $restablecerFiltros = $ ("#botonRestablecer")

//SECCION TEXTO
const $contenedorTexto = $("#divTexto")
const $cierreTexto = $ ("#botonCierre2")
const $tituloTexto = $("#h1Texto")
const $top1Texto = $ ("#TopText")
const $textarea1 = $ ("#textareaDiv")
const $checkTexto = $("#checkTexto")
const $fuentes = $ ("#divFuentes")
const $funte1 = $ ("#impact")
const $funte2 = $ ("#arial")
const $funte3 = $ ("#arialBlack")
const $funte4 = $ ("#american")
const $funte5 = $ ("#mono")
const $funte6 = $ ("#comic")
const $funte7 = $ ("#helvetica")
const $funte8 = $ ("#verdana")
const $funte9 = $ ("#times")
const $tamañoFuente= $("#numeroFuente")
const $alinearTexto1 = $ ("#iconosFuente1")
const $alinearTexto2 = $ ("#iconosFuente2")
const $alinearTexto3 = $ ("#iconosFuente3")
const $ContenedorColores= $("#seccionColor")
const $contenedorColores = $("#divColores")
const $inputColores= $ ("#inputColor")
const $contenedorFondo = $("#divFondo")
const $inputFondo = $("#colorFondo")
const $checkColor = $("#checkColor")
const $contenedorContorno = $("#divContorno")
const $boton1= $ ("#botonContorno1")
const $boton2= $ ("#botonContorno2")
const $boton3= $ ("#botonContorno3")
const $contenedorEspaciado= $ ("#divEspaciado")
const $inputNumero= $ ("#inputNumber")
const $contenedorInterlineados= $ ("#divInterlineado")
const $selectInterlineados = $ ("#selectInterlineado")

// AQUI COMIENZAN LOS EVENTOS






//url

const $divImg = document.querySelector("#img") 
const $urlUsuario = document.querySelector ("urlInput")
   if ($divImg = " ") {
      $divImg.src = Url.  $urlUsuario
   }

// LAS EJECUCIONES DE FUNCIONES

