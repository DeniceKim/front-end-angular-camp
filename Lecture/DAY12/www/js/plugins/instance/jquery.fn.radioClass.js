/*! jquery.fn.radioClass.js © yamoo9.net, 2016 */
(function(exports, $){
    'use strict';

    // 1.
    // 플러그인 존재 유무 검증
    $.fn.radioClass = $.fn.radioClass || function(class_name) {
        // 1.
        // 전달인자 유형 유효성 검증
        if ( $.type(class_name) !== 'string' ) {
            $.error('전달받은 클래스 속성 이름은 문자열로 전달해야 합니다.');
        }
        // 2.
        // 선택된 자신의 형제 중, 클래스 속성을 소유한 형제의 클래스 속성 제거
        this.siblings('.'+class_name).removeClass(class_name);
        // 자신에게 클래스 속성 설정
        this.addClass(class_name);

        // 체이닝 방식 사용 시, 코드
        // this
        //     .siblings('.'+class_name)
        //         .removeClass(class_name)
        //     .end()
        //     .addClass(class_name);

        // 3.
        // jQuery 메소드 체이닝
        return this;
    };

})(this, this.jQuery);