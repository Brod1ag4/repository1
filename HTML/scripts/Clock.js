function Time() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hour = checkTime(hour);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('clock').innerHTML = hour + ":" + min+ ":" +sec;
  setTimeout(Time,500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
