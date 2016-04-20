/*! jquery.ui.ripple.js © yamoo9.net, 2016 */
(function(exports, $){
	'use strict';

	// 스코프 내에 변수 선언 구간
	var defaults, plugin;

	// 플러그인 객체
	plugin = {
		// 플러그인 초기화
		'init': function() {
			// this === 플러그인이 연결된 jQuery 인스턴스 객체
			// console.log(this, this.jquery);

			// this 참조 변수
			var $this = this;

			// 1. 플러그인 컨테이너 요소에 식별자 클래스 속성 추가
			$this.addClass('yamoo9-ui-ripple-container');

		}
	};

	// jquery.fn.uiRipple 플러그인 기본 옵션 객체
	defaults = {
		'containerClass': 'yamoo9-ui-ripple-container'
	};

	// jquery.fn.uiRipple 정의
	$.fn.uiRipple = $.fn.uiRipple || function() {
		// 플러그인 객체의 init 메소드 빌려쓰기
		// jQuery 메소드 체이닝
		return plugin.init.apply(this, arguments);
	};

})(this, this.jQuery);