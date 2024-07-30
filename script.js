const stopwatch = document.getElementById('stopwatch');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
    const time = Date.now() - startTime + elapsedTime;
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    stopwatch.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 1000);
}

function stopTimer() {
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
}

startStopButton.addEventListener('click', function() {
    if (isRunning) {
        stopTimer();
        startStopButton.textContent = 'Start';
    } else {
        startTimer();
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function() {
    if (isRunning) {
        stopTimer();
    }
    elapsedTime = 0;
    stopwatch.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
});