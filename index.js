const button = document.querySelector('.btn');
const buttonStop = document.querySelector('.btn-stop');
const buttonStart = document.querySelector('.btn-start');
const time = document.querySelector('.time');
const textNone = document.querySelector('.text-none');
const changeLetter = document.querySelector('.change-letter');
const alphabet = document.querySelector('.alphabet');
const colors = ['blue' , 'green' , 'red' , 'yellow'];
const alphabetArr = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
let i = 0;
let j = 0;
let intervalId;
function changeColorText(){
    button.style.color = colors[i];
    i = (i + 1) % colors.length;
}
intervalId = setInterval(changeColorText, 1000);
function stopColor(){
    clearInterval(intervalId);
}
function startColor(){
    intervalId = setInterval(changeColorText, 1000);
}
buttonStart.addEventListener('click', startColor);
buttonStop.addEventListener('click', stopColor);
function showingTime(){
    time.value = new Date().toLocaleTimeString();
}
setInterval(showingTime, 1000);
function displayChanging(){
    if(textNone.style.display === 'block'){
        textNone.style.display = 'none';
    }else {
        textNone.style.display = 'block';
    }
}
setInterval(displayChanging, 2000);
function showAlphabet(){
    j = (j + 1) % alphabetArr.length;
    alphabet.innerHTML = alphabetArr[j];
}
changeLetter.addEventListener('click', showAlphabet);


