$(document).ready(function(){
    $(".form-button").find("button").click(function(event){
        event.preventDefault();
        $(this).siblings().removeClass("form-active");
        $(this).addClass("form-active");
    });


})