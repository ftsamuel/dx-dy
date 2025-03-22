// console.log("document")

var hamburgerdiv = document.querySelector(".hamburger");
var  mobileLink = document.querySelector(".mobile_link_holder");
var backdrop = document.querySelector(".backdrop")

function dosomething(){
    hamburgerdiv.classList.toggle("showburger");
   mobileLink.classList.toggle("show_mobile_link_holder");
   backdrop.classList.toggle("show_backdrop");
}

