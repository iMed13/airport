$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    $(".popup").addClass("active-popup");
    setTimeout(function(){
      $(".popup-content").addClass("active-popup-content")
    }, 600)
  });
  $(".exit-popup").click(function(){
    
      $(".popup-content").removeClass("active-popup-content")
    setTimeout(function(){
      $(".popup").removeClass("active-popup");
    }, 300)
    
  });
    $(".form-button").find("button").click(function(event){
        event.preventDefault();
        $(this).siblings().removeClass("form-active");
        $(this).addClass("form-active");
    });

    $(".header-hamburg").click(function(){
       $(this).children().toggleClass("x-hamburg");
       $(".header-menu-list").toggleClass("active-menu-resp");
       setTimeout(function(){
           
        $(".header-hamburg").children().toggleClass("rotate-hamburg");
       }, 500)
    });
    $(".active-language").click(function(){
      $(".language").find("ul").toggleClass("active-ul");
    });
    $(".language").find("ul li").click(function(){
      $(".language").find("ul").toggleClass("active-ul");
      $(".active-language").attr("src", $(this).children("img").attr("src")); 
      
    });
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