$(document).ready(function(){
  
  // Hamburger menu trigger
var menuTrigger = $("#menu-trigger");
menuTrigger.click(function() {
$("#navbarList").toggleClass("nav-menu-open");
});


});
document.getElementById("searchbtn").addEventListener("click", filtercars)
document.getElementById("filter1")
document.getElementById("filter2")
function filtercars() {
  // Get the input value and convert it to lowercase
  var filterValue = document.getElementById("filter1").value.toLowerCase();
  var filterValue2 = document.getElementById("filter2").value.toLowerCase();
  
  // Get all the div elements
  var divs = document.getElementsByClassName("image-container");
  
  // Loop through the divs and hide/show them based on their classes
  for(var i = 0; i < divs.length; i++) {
    var divClass = divs[i].className.toLowerCase();
    if(divClass.includes(filterValue) && divClass.includes(filterValue2)) {
      divs[i].style.display = "";
    } else {
      divs[i].style.display = "none";
    }
  }
}

