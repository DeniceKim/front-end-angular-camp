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

			// 2. 플러그인이 연결된 개별 요소를 순환하여 플러그인 초기화 수행
			return $.each( $this, function(index) {
				// jQuery 팩토리 함수를 다시 사용하지 않기 위해
				// $this에서 index를 뽑아 사용한다. (성능 최적화)
				var _$this = $this.eq(index);
				// console.log( _$this.jquery );

				// 리플 이펙트 구성 설정
				plugin.rippleSetting( _$this );

				// 이벤트 바인딩

				// 이벤트 핸들러 정의

			} );

		},

		// 리플 구성하는 메소드
		'rippleSetting': function($container) {
			// 플러그인이 연결된 컨테이너 객체
			// $container

			// 컨테이너 내부의 a 요소를 찾아 변수에 참조
			var $ripple        = $container.find('a'),
				$ripple_parent = $ripple.parent(); // a의 부모 요소

			// 1. 부모 요소에 스타일 설정
			// position: relative;
			// overflow: hidden;

			// 방법 1. 인라인 스타일 설정
			// $ripple_parent
			// 	.hide()
			// 	.css({
			// 		'position': 'relative',
			// 		'overflow': 'hidden'
			// 	})
			// 	.show();

			// 방법 2. 부모 요소에 식별자 클래스 속성 추가
			$ripple_parent.addClass('yamoo9-ui-ripple-parent');

			// 2. uiRipple Ink 요소를 동적으로 추가
			$('<span>', {
				'class': 'yamoo9-ui-ripple-ink'
			})
		}

	};

	// jquery.fn.uiRipple 플러그인 기본 옵션 객체
	defaults = {
		'prefix': 'yamoo9',
		'containerClass': defaults.prefix + '-ui-ripple-container',
		'parentClass': defaults.prefix + '-ui-ripple-parent',
		'inkClass': defaults.prefix + '-ui-ripple-ink',
	};

	// jquery.fn.uiRipple 정의
	$.fn.uiRipple = $.fn.uiRipple || function() {
		// 플러그인 객체의 init 메소드 빌려쓰기
		// jQuery 메소드 체이닝
		return plugin.init.apply(this, arguments);
	};

})(this, this.jQuery);