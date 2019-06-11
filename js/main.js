// Select DOM elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  // output time
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

  setTimeout(showTime, 1000);
}

// Run
showTime();
