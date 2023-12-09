let menu = document.querySelector("#menu")
let comuBar = document.querySelector("#comu--nav")
let over = document.querySelector(".overlay")
let nav = document.querySelector("nav")
let navLog = document.querySelector(".top-nav-log")
let barra = document.querySelector("#barra-navegacao")
let dis = document.querySelector(".display-comu")
let formu = document.querySelector("form")

// navegação geral 
menu.addEventListener("click", mostrar)
function mostrar(mostraNav){
    nav.style.display = "flex" 
    nav.style.position = "absolute"
    over.style.display = "block"
    over.style.position = "absolute"
    dis.style.display = "none"
    navLog.style.display = "flex"
    formu.style.display = "none"
}
// navegação comunidade
if(comuBar){
comuBar.addEventListener("click",navega)
function navega(mostraNav){
    barra.style.display = "flex" 
    over.style.display = "block"
    dis.style.display = "none"
}
over.addEventListener("click",esconder)
    function esconder(escondeNav){
        over.style.display = "none"
        barra.style.display = "none" 
        dis.style.display = "flex"
        nav.style.display = "none"
        }  
}
// caso nao tenha comuBar entao executar
//  o esconder nav geral 
else{
    over.addEventListener("click",esconder)
    function esconder(escondeNav){
        nav.style.display = "none"
        over.style.display = "none"
        barra.style.display = "none" 
        dis.style.display = "flex"
        formu.style.display = "flex"

    } 
}