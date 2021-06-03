
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "80%";
    document.getElementById("header").style.width = "90%";
    document.getElementById("header").style.marginLeft = "5%";
    document.getElementById("header").style.marginRight = "1%";
    document.getElementById("header").style.borderRadius = "0%";
  } else {
    document.getElementById("header").style.height = "100%";
    document.getElementById("header").style.width = "100%";
    
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("header").style.marginRight = "0";
    document.getElementById("header").style.borderRadius = "0";
  }
} 