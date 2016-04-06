/*! jquery.plugin.js © yamoo9.net, 2016 */
(function(exports, $){
    'use strict';

    // 개발 하고자하는 플러그인 코드 작성
    // 플러그인이란?
    // jQuery.prototype 객체에 멤버를 추가하는 것을 말함.
    // 별칭: jQuery.fn === jQuery.prototype
    // 별칭: $ === jQuery
    // 플러그인 개발 시에 $.fn 객체를 확장한다.

    // 플러그인 이름
    var plugin_name = 'marking',
        colorlist = [
            '#E22885',
            '#BC216F',
            '#8E1853',
            '#560D32',
            '#230414',
        ];

    // 1.
    // 점 표기법(Dot Syntax)
    // $.fn.emphasize = function() {
    // 2.
    // 대괄호 표기법
    $.fn[plugin_name] = function() {

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

        // this는 jQuery 인스턴스 객체(리스트) 순환 방식
        // this.each(function(idx, el) {
        //     console.log(el);
        // });

        // $.each() 메소드 사용 방식
        // $.each(this, function(idx, el) {
        //     console.log(el);
        // });

        // 플러그인 내부에서 this 만 사용하면
        // 연결된 모든 $(DOM Element) 객체에
        // 동일한 결과를 처리한다.
        var $this = this;

        // $.each() 사용해서 플러그인 개발
        // return을 사용하는 이유는 메소드 체이닝
        return $.each($this, function(index, el) {
            var _$this = $this.eq(index);
            _$this.css({
                'background-color': colorlist[index],
                'color': '#fff'
            }).attr({
                'data-assigned-index': plugin_name + '_' + ++index,
                'data-assigned-plugin': plugin_name,
                'role': 'heading'
            });
        });

        // // 개별 적용을 위해 each()를 사용한다.
        // // this.each()를 반환해야만 jQuery 메소드 체이닝이 가능하다.
        // return $this.each(function(index, el) {

        //     // 미션 2.
        //     // 컬러리스트를 생성한다.
        //     // 플러그인이 연결된 문서 객체를 순환할 때 마다
        //     // 컬러리스트 원소를 빼내와서 배경 색상으로 할당한다.

        //     // console.log(this === el);
        //     $this.eq(index)
        //     // $(el)
        //         .css('background-color', colorlist[index])
        //         .attr({
        //             'data-assigned-index': plugin_name + '_' + ++index,
        //             // 'data-assigned-plugin': plugin_name,
        //             'role': 'heading'
        //         });
        //     // .attr('data-assigned-plugin', plugin_name)
        //     // // WAI-ARIA 활용
        //     // .attr('role', 'heading');
        // });

    };

    // 2.
    // 대괄호 표기법
    // var plugin_name = 'emphasize';

    // $.fn[plugin_name] = function() {

    // };

})(this, this.jQuery);