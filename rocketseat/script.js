const modal = document.querySelector('#modal')







function abrirModal(){
    modal.classList.toggle('display')
}

document.onkeydown = function (evt){
    evt = evt || window.event;
    if (evt.key == "Escape"){
       modal.classList.remove('display')
    }
}

