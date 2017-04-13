$(document).ready(function() {

  // Mobile nav
  $("#nav-toggle").click(function(evn){
    evn.preventDefault();
    $("#nav-toggle").css("display","none");
    $("nav").addClass("mobile-nav");
    $(".main-nav").css("display","block");
    $("#nav-close").css("display","block");
  });
  $("#nav-close").click(function(evn){
    evn.preventDefault();
    $("#nav-close").css("display","none");
    $("nav").removeClass("mobile-nav");
    $(".main-nav").css("display","none");
    $("#nav-toggle").css("display","block");
  });

    $(window).scroll(function() {
        if ( ($(document).scrollTop() > 1 ) && ($(window).width() > 684) )  {
            $("nav").addClass("nav-scroll");
            $("#uvod").css("margin-top","130px");
            $("#uvod-strana").css("margin-top","130px");
        }
        else {
            $("nav").removeClass("nav-scroll");
            $("#uvod").css("margin-top","357px");
            $("#uvod-strana").css("margin-top","357px");
        }
    });

});
