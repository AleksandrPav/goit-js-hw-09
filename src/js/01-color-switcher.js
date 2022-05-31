const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

console.log(refs);

let intervalId;

refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}