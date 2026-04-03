let totalSeconds = 3600; 
let timerInterval; 
let isRunning = false; 

let display = document.getElementById('display');
let message = document.getElementById('message');

// show time in MM:SS
function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60); 
  let seconds = totalSeconds % 60; 
  let mm = String(minutes).padStart(2, '0'); 
  let ss = String(seconds).padStart(2, '0');
  display.textContent = mm + ':' + ss;
}

updateDisplay(); // run once so display isn't blank on load

function startTimer() {
  if (isRunning) return; // stop double clicks from creating multiple intervals
  isRunning = true;
  display.classList.add('pulsing'); // glow effect while running

  timerInterval = setInterval(function() {
    if (totalSeconds <= 0) { // don't go below zero
      clearInterval(timerInterval);
      message.textContent = "Time's up!";
      isRunning = false;
      return;
    }
    totalSeconds--; // count down by 1 each second
    updateDisplay();
  }, 1000); // fires every 1000ms = 1 second
}

function pauseTimer() {
  clearInterval(timerInterval); // stops the interval without resetting time
  isRunning = false;
  display.classList.remove('pulsing');
}

// reset everything back to 1 hour
function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  display.classList.remove('pulsing');
  totalSeconds = 3600; // back to start
  updateDisplay();
  message.textContent = ''; // clear the time's up message
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);