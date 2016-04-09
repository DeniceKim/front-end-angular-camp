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
            var target_id = evt.target.getAttribute('href');
            // var target_id = $.memory(evt.target).attr('href');
            console.log( target_id );
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

        // 이벤트 바인딩 (이벤트 위임)
        $wrapper.on('click', 'a', _skipToContents);

    };

})(this, this.jQuery);