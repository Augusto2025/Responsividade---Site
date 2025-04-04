var setaBaixo = document.getElementById('setaBaixo')
var setaBaixo2 = document.getElementById('setaBaixo1')

function dropDown() {
    document.getElementById('myDropdown').classList.toggle('show');
}

function trocaImagem() {
    if (setaBaixo.src.includes("icon-arrow-down.svg")) {
        setaBaixo.src = "/images/icon-arrow-up.svg"
    } else {
        setaBaixo.src = "/images/icon-arrow-down.svg"
    }
}

function trocaImagem2() {
    if (setaBaixo2.src.includes("icon-arrow-down.svg")) {
        setaBaixo2.src = "/images/icon-arrow-up.svg"
    } else {
        setaBaixo2.src = "/images/icon-arrow-down.svg"
    }
}

function DropDown2() {
    document.getElementById('myDropdown1').classList.toggle('show');
}

function DropDown3() {
    document.getElementById('MyDropdown').classList.toggle('show');
}

// Função para alternar a visibilidade do menu
function clickMenu() {
    console.log('test');
    document.getElementById("menu-sanduiche").classList.toggle('show');// Adiciona ou remove a classe "show"
}