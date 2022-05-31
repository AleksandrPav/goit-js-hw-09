const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}



console.log(refs);

let intervalId;
let isActive = false;

start();
stop();


function start() {
   refs.startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
        } 
        isActive = true;
    intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});
}


function stop() {
    
    refs.stopBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        isActive = false;
    });
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
