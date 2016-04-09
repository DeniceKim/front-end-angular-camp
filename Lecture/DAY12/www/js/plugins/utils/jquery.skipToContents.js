/*! jquery.skipToContents.js © yamoo9.net, 2016 */
(function(exports, $){
    'use strict';

    $.skipToContents = function(wrapper) {

        // 3.
        // _skipToContents 비공개 함수 정의
        function _skipToContents(evt) {
            // 기본 동작 차단
            // url 뒤에 hash(#)를 붙이지 않음
            evt.preventDefault();
            // evt.target 요소의 href 속성 값을 참조
            var _this = evt.target;
            var target_id = _this.getAttribute('href');
            // var target_id = $.memory(evt.target).attr('href');

            // event.target 요소에 data() 메모리를 설정한다.
            // jQuery 팩토리함수를 클릭 때마다 매번 사용하는 (비싼) 비용을 절감
            var $target = $.memory(_this, 'target_id', $(target_id));

            // console.log( $target.attr('id') );
            console.log($.isFocusable($target));
            // console.log($.isFocusable( document.querySelector('.test')));

            return;
            // $target 요소는 포커스가 가능한가?
            if ( !$.isFocusable($target) ) {

            } else {
                // $target 객체를 포커싱한다.
                $target.focus();
            }

        };

        // 1.
        // 검증
        if ($.type(wrapper) !== 'string') {
            $.error('스킵 내비게이션을 설정할 부모 요소 선택자는 문자열이어야 합니다.');
        }
        // 2.
        // 스킵 내비게이션을 설정할 부모 요소 참조
        // jQuery 인스턴스 객체화
        var $wrapper = $(wrapper);

        // $wrapper 내부의 모든 a 요소에 클래스를 설정
        $wrapper.find('a').addClass('a11y-hidden focusable');

        // 이벤트 바인딩 (이벤트 위임)
        $wrapper.on('click', 'a', _skipToContents);

    };

})(this, this.jQuery);