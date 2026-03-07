// Total countdown time in seconds (3600 = 1 hour)
let totalSeconds = 3600;
let timerInterval;
let isRunning = false;

// Get references to HTML elements
let display = document.getElementById('display');
let message = document.getElementById('message');

// Converts seconds into MM:SS format and updates the display
function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  // Pad single digits with a leading zero e.g. 5 → 05
  let mm = String(minutes).padStart(2, '0');
  let ss = String(seconds).padStart(2, '0');

  display.textContent = mm + ':' + ss;
}
updateDisplay(); // Show initial time on page load

// Starts the countdown
function startTimer() {
  if (isRunning) return; // Prevent double start
  isRunning = true;
  display.classList.add('pulsing'); // Start glow animation

  // Runs every 1 second
  timerInterval = setInterval(function() {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval); // Stop timer at zero
      message.textContent = "Time's up!";
      isRunning = false;
      return;
    }
    totalSeconds--;
    updateDisplay();
  }, 1000);
}

// Pauses the countdown
function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  display.classList.remove('pulsing'); // Stop glow animation
}

// Resets the countdown back to 1 hour
function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  display.classList.remove('pulsing');
  totalSeconds = 3600;
  updateDisplay();
  message.textContent = '';
}

// Connect buttons to their functions
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);