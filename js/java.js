$( document ).ready(function() {

$(".find").click(function(){

    var x =$("#findUs").offset().top;
    $("html,body").animate({scrollTop:x},2000);
})
$(".service").click(function(){

    var y =$("#ourservices").offset().top;
    $("html,body").animate({scrollTop:y},2000);
})

window.onscroll = function(){

    myfunction();
}
var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myfunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");

    }
}

});
