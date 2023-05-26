$(document).ready(function(){
    // 메인내용 중 전문만 남기고 나머지 감추기
    // $("#governance section article:not(:first-of-type)").hide();
    $("#governance section article").not(":first-of-type").hide();
    // 목록클릭시 해당 메인이 보이게 하기
    $(".navtab li a").click(
        function(){
            // $("article").show();
            let n; // n은 변수(그릇: 데이터를 담는 그릇)
            n = $(this).parent().index()+ 1; // 변수에 데이터를 넣음
            
            $(".navlist:nth-of-type("+ n +")").show();
            $(".navlist").not(".navlist:nth-of-type("+ n +")").hide();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            // $("article").fadeIn();
            // $("article").slideUp();
            // $("article").slideDown();
            $(this).parent().children("a").addClass("skyb bold")
            $(this).parent().siblings().children("a").removeClass("skyb bold")
            
            console.log($(this).parent().index());
            return false;
        }
    );
    $(".jujup").hide();
    $(".juju").click(function(){
        $(this).toggleClass("whiteG");
        $(this).next(".jujup").slideToggle();
        if($(".juju").hasClass("whiteG")==1){
            $(".allview").addClass("bcolor");
            $(".allview").text("전체접기");
        }
        else{
            $(".allview").removeClass("bcolor");
            $(".allview").text("전체보기");
        };
    });
    $(".allview").click(function(){
        if($(".juju").hasClass("whiteG")==0){
            $(".juju").addClass("whiteG");
            $(".jujup").slideDown();
            $(this).text("전체접기");
            $(this).addClass("bcolor");
        }
        else{
            $(".juju").removeClass("whiteG");
            $(".jujup").slideUp();
            $(this).text("전체보기");
            $(this).removeClass("bcolor");
        };
    });
    // $("#governance section .wrap ul li:nth-child(1) a").click(
    //     function(){
                // $("article:nth-of-type(1)").show();
                // $(this).parent().addClass("current");
                // $(this).parent().siblings().removeClass("current");
    //         // $("article:nth-of-type(1)").siblings().hide();
    //         $("article").not("article:nth-of-type(1)").hide();
    //         return false;

    //         $("article:nth-of-type(2)").show();
    //         // $("article:nth-of-type(1)").siblings().hide();
    //         $("article").not("article:nth-of-type(2)").hide();
    //         return false;
    //     }
    // )
});