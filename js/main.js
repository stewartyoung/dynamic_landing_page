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
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add zeros to single digit elements of time
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set background and greeting depending on time
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternnon
    document.body.style.backgroundImage = "url('../img/afternoon.png')";
    greeting.textContent = "Good Afternoon";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }

  // Make sure background image fills the viewport
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPositionX = "center";
  document.body.style.backgroundPositionY = "center";
  document.body.style.backgroundSize = "cover";
}

// Run (they're asynchronous)
showTime();
setBgGreet();
