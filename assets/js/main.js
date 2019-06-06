$(document).ready(function(){
    $(".form-button").find("button").click(function(event){
        event.preventDefault();
        $(this).siblings().removeClass("form-active");
        $(this).addClass("form-active");
    });

    $(".header-hamburg").click(function(){
       $(this).children().toggleClass("x-hamburg");
       setTimeout(function(){
        $(".header-hamburg").children().toggleClass("rotate-hamburg");
       }, 1000)
    })
})