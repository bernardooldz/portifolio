var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);
    
var currentWordIndex = 0, currentCharacterIndex = 0, currentCharacterIndex = 0; 

function type(){

    var wordToType = wordsToType[currentWordIndex%wordsToType.length];

    if(currentCharacterIndex < wordToType.length){
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    }else{

        setTimeout(erase, typingDelay);
    }

}
function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}

window.onload = function(){
    type(); 
}


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let tamanhoBar = document.querySelector('.header-nav')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        tamanhoBar.classList.remove('header-nav-open')
        document.querySelector('.icon').src = "images/imgs-menu/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        tamanhoBar.classList.add('header-nav-open')
        document.querySelector('.icon').src = "images/imgs-menu/close_white_36dp.svg";
    }
}

const $html = document.querySelector('html');
const btnDarkMode = document.querySelector('#btn-mudar-tema');
const iconeTema = document.querySelector('#icon-btn-darkMode');

function MudarTema() {
    if (btnDarkMode.checked === false) {
        $html.classList.remove('dark-mode');
        iconeTema.classList.remove('fa-sun'); 
        iconeTema.classList.add('fa-moon');
    } else {
        $html.classList.add('dark-mode');
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
    }
}

const btnDarkMode2 = document.querySelector('#btn-mudar-tema2');

function MudarTema2() {
    if (btnDarkMode2.checked === false) {
        $html.classList.remove('dark-mode');
        iconeTema.classList.remove('fa-sun'); 
        iconeTema.classList.add('fa-moon');
    } else {
        $html.classList.add('dark-mode');
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
    }
}

function abrirModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}