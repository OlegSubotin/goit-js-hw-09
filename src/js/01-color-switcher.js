const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;
const INTERVAL_DURATION = 1000;
startBtn.disabled = false;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function updateBodyColor() {
    bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
    console.log('on start button click');
    timerId = setInterval(updateBodyColor, INTERVAL_DURATION);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function onStopBtnClick() {
    console.log('on stop button click');
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

