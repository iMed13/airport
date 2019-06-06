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
       }, 500)
    })

})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $(".header-menu").children().removeClass("active-menu-resp");
    $(".header-hamburg").children().removeClass("rotate-hamburg");
    $(".header-hamburg").children().removeClass("x-hamburg");
    setTimeout(function(){   
        $(".header").addClass("header-resp");
       }, "slow");
  } else {
      
    $(".header").removeClass("header-resp");
    console.log("scroll up");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}