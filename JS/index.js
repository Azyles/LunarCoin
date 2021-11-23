

// Set the date we're counting down to
var countDownDate = new Date("Jul 20, 2022 00:00:00").getTime();
            
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  var d = Math.abs(countDownDate - now) / 1000;                           // delta
  var r = {};                                                                // result
  var s = {                                                                  // structure
      year: 31536000,
      month: 2592000,
      day: 86400,   // feel free to add your own row
      hour: 3600,
      minute: 60,
      second: 1
  };
  
  Object.keys(s).forEach(function(key){
      r[key] = Math.floor(d / s[key]);
      d -= r[key] * s[key];
  });

  // for example: {year:0,month:0,week:1,day:2,hour:34,minute:56,second:7}
console.log(r);

  

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(days)

  function getDigit(number, n) {
    return Math.floor((number / Math.pow(10, n - 1)) % 10);
    }

  var months = Math.floor(days/31);

  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(distance/day);

  console.log(months)
  
  // Months
  var elms = document.querySelectorAll("[id='months_1']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].innerHTML = getDigit(r['month'], 2);

  
  var elms = document.querySelectorAll("[id='months_2']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].innerHTML = getDigit(r['month'], 1); 
  
  
  // Days
  var elms = document.querySelectorAll("[id='days_1']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].innerHTML = getDigit(r['day'], 2);

  
  var elms = document.querySelectorAll("[id='days_2']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].innerHTML = getDigit(r['day'], 1);

  // Hours
  var elms = document.querySelectorAll("[id='hours_1']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].innerHTML = getDigit(r['hour'], 2);

  
  var elms = document.querySelectorAll("[id='hours_2']");

  for(var i = 0; i < elms.length; i++) 
    elms[i].innerHTML = getDigit(r['hour'], 1);

  //document.getElementById("months_1").innerHTML = getDigit(months, 2);
  //document.getElementById("months_2").innerHTML = getDigit(months, 1);

  //document.getElementById("days_1").innerHTML = getDigit(days, 2);
  //document.getElementById("days_2").innerHTML = getDigit(days, 1);

  //document.getElementById("hours_1").innerHTML = getDigit(hours, 2);
  //document.getElementById("hours_2").innerHTML = getDigit(hours, 1);

  
  document.getElementById("mins_1").innerHTML = getDigit(r['minute'], 2);
  document.getElementById("mins_2").innerHTML = getDigit(r['minute'], 1);


  document.getElementById("sec_1").innerHTML = getDigit(r['second'], 2);
  document.getElementById("sec_2").innerHTML = getDigit(r['second'], 1);


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    //document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);