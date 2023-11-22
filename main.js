
$(document).ready(function(){
    // reserve car btn
    $("#reserveBtn").click(function(){
        alert(" Your Car In'sha'alah will be reserved");
    })
    // Hamburger menu trigger
var menuTrigger = $("#menu-trigger");
menuTrigger.click(function() {
  $("#navbarList").toggleClass("nav-menu-open");
});

// nav bar background on scroll
$(function () {
  $(document).scroll(function () {
      var $nav = $(".test-navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
});

