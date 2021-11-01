// Set the date we're counting down to
var countDownDate = new Date("Jul 20, 2022 00:00:00").getTime();
            
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function getDigit(number, n) {
    return Math.floor((number / Math.pow(10, n - 1)) % 10);
    }

  var months = Math.floor(days/31);

  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(distance/day);

  console.log(months)

  document.getElementById("months_1").innerHTML = getDigit(months, 2);
  document.getElementById("months_2").innerHTML = getDigit(months, 1);

  document.getElementById("days_1").innerHTML = getDigit(days, 2);
  document.getElementById("days_2").innerHTML = getDigit(days, 1);

  document.getElementById("hours_1").innerHTML = getDigit(hours, 2);
  document.getElementById("hours_2").innerHTML = getDigit(hours, 1);

  
  document.getElementById("mins_1").innerHTML = getDigit(minutes, 2);
  document.getElementById("mins_2").innerHTML = getDigit(minutes, 1);


  document.getElementById("sec_1").innerHTML = getDigit(seconds, 2);
  document.getElementById("sec_2").innerHTML = getDigit(seconds, 1);


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);