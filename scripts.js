let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let botaoSom = document.querySelector(".botao-som")
let videoSOm = document.querySelector(".videoSom")
let botaodesliga = document.querySelector(".botao-desliga")
let som = document.querySelector(".somtudum")



botao.addEventListener("click", modalMostre)
modal.addEventListener("click", sumir)
botaoSom.addEventListener("click", ligaSom)
botaodesliga.addEventListener("click", desligaSom)
som.addEventListener("open", ligarsom)

function ligarsom(){
audio.muted=false;

}

function desligaSom(){
    videoSOm.muted=true;



}

function ligaSom(){
videoSOm.muted=false;


}


function modalMostre(){
    modal.style.display = "block"
}

function sumir(){
modal.style.display = "none"

}