const elementCountdownDays = document.getElementById("days");
const elementCountdownHours = document.getElementById("hours");
const elementCountdownMinutes = document.getElementById("minutes");
const elementCountdownSeconds = document.getElementById("seconds");

// Utils
const DAY_IN_MS = 1000 * 60 * 60 * 24;
const HOUR_IN_MS = 1000 * 60 * 60;
const MINUTE_IN_MS = 1000 * 60;
const SECOND_IN_MS = 1000;

// Em ms
const birthday = new Date("May 2, 2022 00:00:00").getTime();

const countdownTimeout = setInterval(setCountdownTimer, 1000)

function setCountdownTimer() {
  const timeNow = new Date().getTime();

  // tempo em ms que falta até o dia do aniversário
  const timeLeft = birthday - timeNow;

  const days = Math.floor(timeLeft / DAY_IN_MS);
  const hours = Math.floor((timeLeft % DAY_IN_MS) / HOUR_IN_MS);
  const minutes = Math.floor((timeLeft % HOUR_IN_MS) / MINUTE_IN_MS);
  const seconds = Math.floor((timeLeft % MINUTE_IN_MS) / SECOND_IN_MS);

  elementCountdownDays.innerHTML = String(days).padStart(2, '0');
  elementCountdownHours.innerHTML = String(hours).padStart(2, '0');
  elementCountdownMinutes.innerHTML = String(minutes).padStart(2, '0');
  elementCountdownSeconds.innerHTML = String(seconds).padStart(2, '0');

  if (timeLeft < 0) {
    clearInterval(countdownTimeout);
    elementCountdownDays.innerHTML = 00;
    elementCountdownHours.innerHTML = 00;
    elementCountdownMinutes.innerHTML = 00;
    elementCountdownSeconds.innerHTML = 00;
  }
}