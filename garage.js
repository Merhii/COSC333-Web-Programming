$(document).ready(function(){
  
  // Hamburger menu trigger
var menuTrigger = $("#menu-trigger");
menuTrigger.click(function() {
$("#navbarList").toggleClass("nav-menu-open");
});
// double filter cars by classname with jquery
// $("#searchbtn").on("click", filtercars);
// function filtercars() {
//   var filterValue1 = $("#filter1").val().toLowerCase();
//   var filterValue2 = $("#filter2").val().toLowerCase();
  
//   $(".col-xs-12").each(function() {
//     var divClass = $(this).attr("class").toLowerCase();
//     if(divClass.includes(filterValue1) && divClass.includes(filterValue2)) {
//       $(this).show();
//     } else {
//       $(this).hide();
//     }
//   });
// }

});
// double filter cars by classname
document.getElementById("searchbtn").addEventListener("click", filtercars)
function filtercars() {
  // Get the input value and convert it to lowercase
  var filterValue1 = document.getElementById("filter1").value.toLowerCase();
  var filterValue2 = document.getElementById("filter2").value.toLowerCase();
  
  // Get all the div cars with classname
  var divs = document.getElementsByClassName("col-xs-12");
  
  // Loop through the divs and hide/show them based on their classes
  for(var i = 0; i < divs.length; i++) {
    var divClass = divs[i].className.toLowerCase();
    if(divClass.includes(filterValue1) && divClass.includes(filterValue2)) {
      divs[i].style.display = "";
    } else {
      divs[i].style.display = "none";
    }
  }
}

