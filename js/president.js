 // $(document).ready(function(){    //아래 형식처럼 줄일 수 있음.
 $(function(){
    $(".gallery").wrap("<div class='wgallery'></div>"); //.gallery를 wgallery로 둘러싼다
    $(".wgallery").prepend('<figure><img src="img/cm1.jpg" alt=""></figure>'); //wgallery안에 <figure><img src="img/cm1.jpg" alt=""></figure>추가
    $(".wgallery+h2, .wgallery+h2~p").wrapAll('<div class="wtext"></div>');
    $(".wgallery, .wtext").wrapAll('<div class="wwgallery flex"></div>');

    // 첫 번쨰 li에 blueborder 클래스 추가
    $("#president section .wrap .wwgallery .wgallery .gallery li:nth-child(1)").addClass("blueborder");

    // gallery에 a를 클릭했을 때 섬네일 테두리 표시 & 이미지 교체
    $("#president section .wrap .wwgallery .wgallery .gallery li a").click(
        function(){
            $(this).parent().addClass("blueborder"); // 클릭한 a의 인 li에 blueborder 클래스 추가
            $(this).parent().siblings().removeClass("blueborder"); // 클릭한 a를 제외한 나머지 클래스 제거

            // 큰 이미지 교체
            // $(".wgallery figure img").attr("src","img/cm2.jpg");

            let n; // n은 변수(그릇: 데이터를 담는 그릇)
            n = $(this).parent().index()+ 1; // 변수에 데이터를 넣음
            $(".wgallery figure img").attr("src",'img/cm'+ n +'.jpg');
            return false;
        }
    )
    //  학력 및 학위만 보이게 하기
    $("#president section .wrap .year > li:not(:first-child)").hide();
    
    //  career에 a를 클릭했을 때
    $(".navtab li a").click(
        function(){
            // $("article").show();
            let n; // n은 변수(그릇: 데이터를 담는 그릇)
            n = $(this).parent().index()+ 1; // 변수에 데이터를 넣음

            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");

            $(this).parent().children("a").addClass("skyb bold")
            $(this).parent().siblings().children("a").removeClass("skyb bold")

            $(".navlist:nth-of-type("+ n +")").show();
            $(".navlist").not(".navlist:nth-of-type("+ n +")").hide();
            
            return false;
        }
    )
    // 기타메뉴 english를 영문이란 글자로 변경하기
    // $(".etcmenu li:nth-child(2) a").text("영문");

    // 큰 이미지 클릭 시 실행(팝업)
    
    $("#president section .wrap .wgallery figure img").click(function(){
        $(".popupimg").remove();
        $(".wgallery").prepend("<div class='popupimg'></div>"); // .wgallery 맨뒤에 .popupimg div 추가
        $(this).clone().appendTo(".popupimg").hide().fadeIn(500); // popipimg안에 this 이미지 추가

        // "닫기" 버튼 제거
        // $(".close").remove();
        // "닫기" 버튼 추가
        $(".popupimg").append("<button class='close'><img src='img/psi_close.svg'</button>");

        $(".close").click(function(){
            $(".popupimg").fadeOut(500);
        })
    });
    
    



})