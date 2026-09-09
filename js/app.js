let timeLeft =25 *60;
let timerInterval =null;
let selectedMintues =25;

const timerDisplay = document.getElementById("timer");

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

const presetButtons = document.querySelectorAll(".preset");
const message = document.getElementById("message");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedSeconds = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${formattedSeconds}`;

}
function startTimer() {
  if (timerInterval !==null) {
    return;
  }
  message.textContent ="";

  timerInterval =setInterval(function(){
    if(timeLeft > 0) {
      timeLeft--;
      updateDisplay();

    } else {
      clearInterval(timerInterval);
      timerInterval =null;
      message.textContent = "Timer complete! Take a little break.💕 ";
    }

  },1000);

}
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval=null;
  timeLeft = selectedMinutes * 60;
  updateDisplay();
  message.textContent = "";
}
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function setPreset(minutes) {
  clearInterval(timerInterval);
  timerInterval = null;
  selectedMinutes = minutes;
  timeLeft = minutes * 60;
  updateDisplay();
  message.textContent="";
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click",pauseTimer);
resetButton.addEventListener("click" , resetTimer);

presetButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const minutes = Number(button.dataset.minutes);
    setPreset(minutes);
  });
});

updateDisplay();
