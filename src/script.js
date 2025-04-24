function displayTime() {
  let today = new Date();
  let hours = today.getHours().toString().padStart(2, "0");
  let minutes = today.getMinutes().toString().padStart(2, "0");
  let seconds = today.getSeconds().toString().padStart(2, "0");
  let clockElement = document.getElementById("clock");
  clockElement.innerText = hours + ":" + minutes + ":" + seconds;
}

function displayDate() {
  let today = new Date();
  let date = today.toDateString();
  let dateElement = document.getElementById("date");
  dateElement.innerText = date;
}

setInterval(displayTime, 1000);
setInterval(displayDate, 1000);

displayDate();
displayTime();
