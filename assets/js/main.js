$(document).ready(function(){
    $(".form-button").find("button").click(function(event){
        event.preventDefault();
        $(this).siblings().removeClass("form-active");
        $(this).addClass("form-active");
    });

    $(".header-hamburg").click(function(){
       $(this).children().toggleClass("x-hamburg");
       setTimeout(function(){
           
        $(".header-menu-list").toggleClass("active-menu-resp");
        $(".header-hamburg").children().toggleClass("rotate-hamburg");
       }, 1000)
    })

})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".header-menu").children().removeClass("active-menu-resp");
    $(".header-hamburg").children().toggleClass("rotate-hamburg");
    $(".header-hamburg").children().toggleClass("x-hamburg");
    console.log("scroll down");
  } else {
      
    console.log("scroll up");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}