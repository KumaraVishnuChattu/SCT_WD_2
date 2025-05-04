let startTime = 0;
let running = false;
let interval;
let laps = [];

function startStop() {
  if (!running) {
    startTime = Date.now() - (startTime || 0);
    interval = setInterval(updateDisplay, 100);
    running = true;
  }
}

function pause() {
  clearInterval(interval);
  running = false;
}

function reset() {
  clearInterval(interval);
  startTime = 0;
  running = false;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  laps = [];
}

function updateDisplay() {
  const elapsed = Date.now() - startTime;
  const date = new Date(elapsed);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function lap() {
  if (!running) return;
  const lapTime = document.getElementById("display").textContent;
  laps.push(lapTime);
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Lap ${laps.length}: ${lapTime}`;
  lapList.appendChild(li);
}
