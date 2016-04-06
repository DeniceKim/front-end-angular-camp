/*! jquery.plugin.js © yamoo9.net, 2016 */
(function(exports, $){
    'use strict';

    // 개발 하고자하는 플러그인 코드 작성
    // 플러그인이란?
    // jQuery.prototype 객체에 멤버를 추가하는 것을 말함.
    // 별칭: jQuery.fn === jQuery.prototype
    // 별칭: $ === jQuery
    // 플러그인 개발 시에 $.fn 객체를 확장한다.

    // 1.
    // 점 표기법(Dot Syntax)
    $.fn.emphasize = function() {

        // 플러그인 내부에서 this가 참조하는 객체는 무엇인가?

        // 플러그인이 적용된 jQuery 인스턴스 객체
        // console.log( this.jquery );
        // jQuery 인스턴스 객체에서 벗어나
        // DOM 객체를 반환한다.

        // 노드 리스트
        // console.log( this.get() );
        // 노드
        // console.log( this[0] );
        // console.log( this.get(0) );

        this
            .css('background-color', '#ff0')
            .attr('data-assigned-plugin', 'emphasize')
            // WAI-ARIA 활용
            .attr('role', 'heading');

    };

    // 2.
    // 대괄호 표기법
    // var plugin_name = 'emphasize';

    // $.fn[plugin_name] = function() {

    // };

})(this, this.jQuery);