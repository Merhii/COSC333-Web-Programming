$(document).ready(function(){
    // reserve car
    $("#reserveBtn").click(function(){
        alert(" Your Car In'sha'alah will be reserved");
    })
})

  document.getElementById("menu-trigger").addEventListener('click', function(){
    document.getElementById("navbarList").classList.toggle('nav-menu-open')
  })


$(function () {
    $(document).scroll(function () {
        var $nav = $(".test-navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });