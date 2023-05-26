$(document).ready(function(){
    // $("#timeline > li").width("200px")
    $("#timeline").wrap("<div id='wtimeline'></div>");
    $("#wtimeline").wrap("<div id='wwtimeline'></div>");
    $("#timeline li:nth-child(1) a").addClass("currentT");
    $(".TG").not(".timeline1").hide();
    // 타임라인 컨트롤 버튼
    $("#wwtimeline").append("<span id='control'><button class='prev'></button><button class='next'></button></span>");

    let n = 0;  // 변수 n 선언 후 1로 초기화

    // 버튼을 클릭했을 때
    $("#control button").click(function(){
        if($(this).hasClass("next")==1){ // 다음 버튼
            // if(n < 8){ //5
                 // n++
                if(n < 4){
                    n += 1;
                    $("#timeline").css("transform","translateX(" + (-(990 / 5)*n) + "px)");
                    // console.log("next클릭: "+n)
                }
                // $("#timeline li:nth-child("+(n+1)+") a").addClass("currentT");
                // $("#timeline li a").not("#timeline li:nth-child("+(n+1)+") a").removeClass("currentT");
                // if(n == 4){
                //     $("#timeline").css("transform","translateX(" + (-(990 / 5)*n) + "px)");
                // }
                // $(".timeline"+(n+1)).show();
                // $(".TG").not(".timeline"+(n+1)).hide();
            // }
            else{
                n = 0;
                $("#timeline").css("transform","translateX(" + (-(990 / 5)*n) + "px)");
                

                // $("#timeline li:nth-child("+(n+1)+") a").addClass("currentT");
                // $("#timeline li a").not("#timeline li:nth-child("+(n+1)+") a").removeClass("currentT");
                // $(".timeline"+(n+1)).show();
                // $(".TG").not(".timeline"+(n+1)).hide();
            }
        }
        else{ // 이전 버튼
            if(n > 0){
                n -= 1; // n--
                if(n < 4){
                    $("#timeline").css("transform","translateX(" + (-(990 / 5)*n) + "px)");
                    // console.log("prev클릭: "+n)
                }
                // $("#timeline li:nth-child("+(n+1)+") a").addClass("currentT");
                // $("#timeline li a").not("#timeline li:nth-child("+(n+1)+") a").removeClass("currentT");
            }
            else{
                n = 4;
                $("#timeline").css("transform","translateX(" + (-(990 / 5)*n) + "px)");
                // n = 8;
                // $("#timeline li:nth-child("+(n+1)+") a").addClass("currentT");
                // $("#timeline li a").not("#timeline li:nth-child("+(n+1)+") a").removeClass("currentT");
            }
            
        }
    });
    let k = 0;
    // a를 클릭 시 실행
    $("#timeline li a").click(function(){
        $(this).addClass("currentT"); // 선택한 a 경로에 클래스 추가
        $("#timeline li a").not(this).removeClass("currentT"); // 선택한 a경로가 아닌 a 에 클래스 제거
        k = $(this).parent().index(); // n은 선택한 a의 부모의 인덱스값
        console.log("n="+n)

        // 클릭한 리스트에 해당하는 컨텐츠를 보이게 처리
        $(".timeline"+(k+1)).show();
        $(".TG").not(".timeline"+(k+1)).hide();
        // console.log(n)

        $(".intropopup").remove()
        $(".readpopup").remove();

        return false;
    })
    

    // 타임라인 갤러리 +버튼 생성
    $(".TG .intro").append('<button class="plus">view</button>');
    
    // +버튼 클릭 시  실행
    $(".TG .intro .plus").click(function(){
        $(".intropopup").remove();
        $(this).parents(".TG").append('<div class="intropopup"></div>'); // div 추가
        $(".intropopup").hide().fadeIn(500);
        $(this).parent(".intro").clone().appendTo(".intropopup"); // intro를 복제해서 intropopup에 붙여넣기
        $(".timeline3 .intropopup h3").html("세계 항공 역사에는 두 가지 미스터리가 있다. <span class='block'>하나는 육중한 쇳덩어리가 하늘을 날아오른 것이고,</span> 다른 하나는 1970년대 한국의 항공사가<span class='block'></span> 태평양을 건넌 것이다.");
        $(".intropopup .plus").attr("class", "close"); // .plus의 속성값을 가져와서 .close 클래스 붙임
        $(".intropopup .close").text("닫기"); // .close 의 text를 "닫기" 로 변경
        $(".intropopup .intro").append('<button class="read">전문읽기</button>'); // 팝업 intro에 버튼 추가
        $(".intropopup .intro button").wrapAll("<span class='wbutton'></span>"); // 버튼을 span태그(영역)로 묶음

        $(".TG .intropopup .wbutton .close").click(function(){ // .close 버튼 클릭 시 실행
            $(".TG .intropopup").fadeOut(500); // .intropopup 을 제거
            $(".readpopup").fadeOut(500);
        })
        $(".TG .intropopup .wbutton .read").click(function(){ // .read 버튼 클릭 시 실행
            n = $(this).parents(".TG").index();
            $(".readpopup").remove();
            if($(this).parents(".TG").hasClass("timeline1")==1){
                $("#art").append('<div class="readpopup"><div class="to"><h3 class="h3">파도마저 삼킨 오디세이</h3><select name="" id=""><option value="">공작신동</option><option value="">일본 조선소의 책벌레</option><option value="">유대인과 개성상인을 배우다</option><option value="">빼앗긴 이연공업사</option><option value="">한민족의 전진</option><option value="">신용으로 재기하다</option><option value="">지고 이기는 지혜</option><option value="">세단과 부암장</option><option value="">남대문시장의 군용파카</option><option value="">경쟁에도 도리가있다</option></select></div><iframe src="" frameborder="0"></iframe><button type="button" class="close">닫기</button></div>');
                
                // 옵션 클릭
                $(".readpopup .to select option:nth-child(1)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art-1.html");
                })
                $(".readpopup .to select option:nth-child(2)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-2.html");
                })
                $(".readpopup .to select option:nth-child(3)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-3.html");
                })
                $(".readpopup .to select option:nth-child(4)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-4.html");
                })
                $(".readpopup .to select option:nth-child(5)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-5.html");
                })
                $(".readpopup .to select option:nth-child(6)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-6.html");
                })
                $(".readpopup .to select option:nth-child(7)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-7.html");
                })
                $(".readpopup .to select option:nth-child(8)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-8.html");
                })
                $(".readpopup .to select option:nth-child(9)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-9.html");
                })
                $(".readpopup .to select option:nth-child(10)").click(function(){
                    $(".readpopup iframe").attr("src","wart/art/art-1/art1-10.html");
                })
            };
            if($(this).parents(".TG").hasClass("timeline2")==1){
                $("#art").append('<div class="readpopup"><div class="to"><h3 class="h3">퀴논의 전설</h3><select name="" id=""><option value="">사업은 타이밍</option><option value="">숨막히는 약속의 백일</option><option value="">사선을 넘는 수송용사들</option><option value="">베트남의 마음을 사다</option><option value="">성장의 엔진을 달다</option></select></div><iframe src="" frameborder="0"></iframe><button type="button" class="close">닫기</button></div>');
            };
            if($(this).parents(".TG").hasClass("timeline3")==1){
                $("#art").append('<div class="readpopup"><div class="to"><h3 class="h3">퀴논의 전설</h3><select name="" id=""><option value="">사업은 타이밍</option><option value="">숨막히는 약속의 백일</option><option value="">사선을 넘는 수송용사들</option><option value="">베트남의 마음을 사다</option><option value="">성장의 엔진을 달다</option></select></div><iframe src="" frameborder="0"></iframe><button type="button" class="close">닫기</button></div>');
            };
            $(".readpopup").hide().fadeIn(500);
            $(".readpopup iframe").attr("src","wart/art-"+(n+1)+".html");
            $(".readpopup iframe").css({"width":"100%", "height":"550px"});
            $(".readpopup .close").click(function(){
                $(".readpopup").fadeOut(500);
            })
        });
    });
    // 이미지 클릭 시 실행
    $("#timelinegallery figure img").click(function(){
        $(".popupimg").remove();
        $(this).parents(".TG").append("<div class='popupimg'></div>");
        $(this).parent().clone().appendTo(".popupimg");
        $(".popupimg").hide().fadeIn(500);
        // $(".popupimg").append("<button class='close'><img src='img/psi_close.svg'</button>");
        // $(".close").click(function(){
            // $(".popupimg").fadeOut(500);
        // })
        $(".popupimg").click(function(){
            $(".popupimg").fadeOut(500);
        })
    })

   
    
    


});