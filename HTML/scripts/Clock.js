function Time() {
  var time=new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  hour = checkTime(hour);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('clock').innerHTML = hour + ":" + min+ ":" +sec;
  setTimeout('Time()',500);
}
function checkTime(i) {
  if (i < 10)
  {
    i = "0" + i;
  }
  return i;
}
