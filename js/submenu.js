//     $(document).ready(
//     function(){
//         $("body").css({"background-color":"red", "border-top":"5px solid #111"});
//         $("body").css("background-color", "red");
//     }
// )
    $(document).ready(function(){
         // li에 마우스를 올리면 실행하시오 $("li").hover();
        $(".gnb > li").hover(  //mouseenter이벤트
            function(){
                // this는 hover한 li, addClass()는 클래스를 붙여라
                // $(this).find(".submenu").addClass("submenushow");
                // $(this).siblings().find(".submenu").removeClass("submenushow");
                // children() 앞 요소의 자식요소
                // "닫기" 버튼 제거
                // $("button.close").remove();
                // // "닫기" 버튼 추가
                // $(".submenu").append("<button class='close'>닫기</button>");

                // 닫기 버튼을 틀릭하면 실행하시오
                // $("button.close").click(
                //     function(){ // submenu를 안보이게
                //         $(this).parent(".submenu").addClass("submenuup");
                //         // $(".submenu").slideUp(300);
                //         $(".submenu").removeClass("submenuani submenushow");
                //     }
                // )
                // 영역에서 벗어나면(마우스가 떠나면) 서브메뉴가 닫히게 처리
                $(".gnb ").mouseleave(
                    function(){
                        // $(".submenu").slideUp(300);
                        $(".submenu").removeClass("submenuani submenushow");
                        $(".submenu").find(".close").remove();
                    }
                )
                // $(".gnb > li").mouseleave(
                //     function(){
                //         $(this).find(".submenu").addClass("submenuup");
                //     })
                 //(처음오버시에만 작동되야함) 서브메뉴 애니실행
                if($(".submenu").hasClass("submenuani")==0){    //submenu에 ani클래스가 없다면 실행
                    $(".submenu").removeClass("submenuup");
                    $(".submenu").addClass("submenuani");    //submenu에 ani클래스 추가
                    // $(this).siblings().find(".submenu").removeClass("submenuani");  //본인을 제외한 나머지 ani클래스 삭제
                    $(this).find(".submenu").addClass("submenushow");   //submenu에 show클래스 추가
                    $(this).siblings().find(".submenu").removeClass("submenushow"); //본인을 제외한 나머지 show클래스 삭제
                    console.log("1-if");    //콘솔 로그 표시

                }
                 // 다른 서브메뉴에 오버시 서브메뉴 보임(애니는 안되게)
                else{
                    if($(this).find(".submenu").hasClass("submenuani")==1){     //오버한 submenu에 ani클래스가 있을 경우 실행
                        $(".submenu").removeClass("submenuup");
                        $(this).find(".submenu").removeClass("submenuani"); //오버한 submenu에 ani클래스 삭제
                        $(this).find(".submenu").addClass("submenushow");   //오버한 submenu에 show클래스 추가
                        $(this).siblings().find(".submenu").addClass("submenuani"); //본인을 제외한 나머지에 ani클래스 추가
                        $(this).siblings().find(".submenu").removeClass("submenushow"); //본인을 제외한 나머지 show클래스 삭제
                        console.log("2-else>if")
                    }
                    // 두 번째 오버된 서브메뉴 보여주기
                    // else{
                        // $(this).find(".submenu").addClass("submenushow");   //오버한 submenu에 show클래스 추가
                        // $(this).siblings().find(".submenu").removeClass("submenushow"); //본인을 제외한 나머지 show클래스 제거
                        // console.log("3else>else");
                    // }
                }
            },
                // function(){ 
                //     $(this).find(".submenu").removeClass("submenushow submenunai");
                //     $(".submenu").find(".close").remove();
                // }
        );


                
                // 서브메뉴가 submenuani가 없는 상태일때 실행문
                // $(".submenu").remove("submenuani");
                // if($(".submenu").hasClass("submenuani")==0){
                //     $(this).find(".submenu").addClass("submenuani");
                //     $(this).siblings().find(".submenu").removeClass("submenuani");
                // siblings() 앞 요소를 제외한 나머지 형제요소들
                // removeClass() 클래스를 없애라
                // }

            //     if($(".submenu").hasClass("submenuani")==1){
            //         $(this).find(".submenu").removeClass("submenuani");
            //     }
            // },
            //     function(){ //마우스 나갔을때 mouseleave 이벤트
            //         $(this).find(".submenu").removeClass("submenushow submenunai");
            //         $(".submenu").find(".close").remove();
                // }
        // );
        // 서브메뉴를 div로 둘러싸고 닫기버튼 배치하기
        // $(".submenu").wrap("<div class='wsubmenu'></div>");
        // $("div.wsubmenu").append("<button class='close'>닫기</button>");
        $(".mSublist").hide();
        $(".wulAdd").hide();
        $(".ulAdd").hide();
        $(".ham").click(function(){
            $(".mSublist").slideDown(500);
            return false;
        })
        $(".mSublist a").click(function(){
            $(".wulAdd").slideDown(500);
            $(".mSublist ul li a").click(function(){
                $(".ulAdd").slideDown(500);
                return false;
            })
            return false;
        })
    });