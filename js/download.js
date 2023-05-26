$(document).ready(function(){
    $("#life .lifelist li figure img").click(function(){
        $(".popupimg").remove();
        $(this).parents("figure").append("<div class='popupimg'></div>");
        $(this).clone().appendTo(".popupimg");
        $(".popupimg").hide().fadeIn(500);
        $(".popupimg").append("<button class='close'><img src='img/psi_close.svg'></button>");
        $(".close").click(function(){
            $(".popupimg").fadeOut(500);
        });
    });
});
function downloadPdf(n){
    window.open('download/사업은+예술이다_'+n+'장.pdf', '_blank');
};
// let imgx=$(".popimg img").position().left;
// let imgy=$(".popimg img").position().top;
// imgx=imgx + $(".popimg img").width() - $(".popimg .close").width()/2;
// imgy=imgy - $(".popimg .close").height()/2;
// $(".close").css({"left":imgx,"top":imgy});
// console.log($(".popimg img").offset());
// console.log($(".popimg img").position());