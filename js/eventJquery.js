/*
	$("이벤트 대상 선택").이벤트 등록 메서드(function(){
		자바스크립트 코드;
	})
*/
$(document).ready(function(){
	//스크롤이벤트
	$(window).scroll(function(){
		var sc_top=$(this).scrollTop();
		var sc_left=$(this).scrollLeft();
		
		if(sc_top>240){
			$('h1').addClass('headerTop')
		}else if(sc_top==240){
			$('h1').removeClass('headerTop');
		}
	})
});

