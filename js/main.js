$(document).ready(function(){
    $('.wlist').slick({
        swipe: false,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        infinite: true,
        vertical: true,
        draggable: false,
    });
    $('.societyArticle').slick({
        swife: false,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        vertical: false,
        infinite: true,
        draggable: false,
        pauseOnFocus: true,
    })
    // $(".societyArticle").append('<button type="button" class="btn_pause bt1 pause">pause</button>');
    // $(".societyArticle > button").wrapAll('<span class="btn"></span>');
    var sw = 0;
	$('.bt1').click(function(){
	if(sw==0){
        $('.bt1').removeClass('pause');
		$('.bt1').addClass('on play');
		$('.societyArticle').slick('slickPause')
        $('.bt1').text('play');
		sw = 1;
        console.log(sw)
	}else{
		$('.bt1').removeClass('on play');
        $('.bt1').addClass('pause');
		$('.societyArticle').slick('slickPlay')
        $('.bt1').text('pause');
		sw = 0;
        console.log(sw)
		}
	});
    $("#title .wlist .slick-dots").append('<button type="button" class="btn_pause bt2 pause">pause</button>');
    var aw = 0;
	$('.bt2').click(function(){
	if(aw==0){
        $('.bt2').removeClass('pause');
		$('.bt2').addClass('on play');
		$('.societyArticle').slick('slickPause')
        $('.bt2').text('play');
		aw = 1;
        console.log(aw)
	}else{
		$('.bt2').removeClass('on play');
        $('.bt2').addClass('pause');
		$('.societyArticle').slick('slickPlay')
        $('.bt2').text('pause');
		aw = 0;
        console.log(aw)
		}
	});
    $("footer").after('<div class="top"><button type="button">위로</button></div>')
    // 탑버튼 스크롤시 보이게, 안보이게
    $(window).scroll(function(){
        if($(this).scrollTop()>$("#title").height()+$("header").height()){
            $(".top").addClass("topshow");
        }
        else{
            $(".top").removeClass("topshow");
        }
    })
    $(".top").click(function(e){
        e.preventDefault();

    jQuery('html, body').animate({
        scrollTop: 0
    },500);
    })
})