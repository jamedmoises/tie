let primero=document.getElementById("enlace1")
    segundo=document.getElementById("enlace2")
    tercero=document.getElementById("enlace3")
    cuarto=document.getElementById("enlace4")
    contenedoruno=document.getElementById("seccion1")
    contenedordos=document.getElementById("seccion2")
    contenedortres=document.getElementById("seccion3")
    contenedorcuatro=document.getElementById("seccion4")

function cambio1(){
contenedoruno.style.display="grid"
contenedordos.style.display="none"
contenedortres.style.display="none"
contenedorcuatro.style.display="none"
}
function cambio2(){
    contenedoruno.style.display="none"
    contenedordos.style.display="grid"
    contenedortres.style.display="none"
    contenedorcuatro.style.display="none"
}
function cambio3(){
    contenedoruno.style.display="none"
    contenedordos.style.display="none"
    contenedortres.style.display="grid"
    contenedorcuatro.style.display="none"
}
function cambio4(){
    contenedoruno.style.display="none"
    contenedordos.style.display="none"
    contenedortres.style.display="none"
    contenedorcuatro.style.display="grid"
}
primero.addEventListener("click",cambio1,true)
segundo.addEventListener("click",cambio2,true)
tercero.addEventListener("click",cambio3,true)
cuarto.addEventListener("click",cambio4,true)
