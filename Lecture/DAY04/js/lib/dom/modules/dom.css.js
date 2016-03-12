(function(dom){
    'use strict';

    // 비공개 함수
    function getStyle(elNode, property) {

    }
    // 비공개 함수
    function setStyle(elNode, property, value){
        elNode.style[property] = value;
    }
    // 공개 css 모듈 코드
    function css(elNode, property, value) {
        if ( dom.utils.isElement(elNode) ) {
            // setter
            if ( value ) {
                setStyle(elNode, property, value);
            }
            // getter
            else {

            }
        }
    }

    // dom 모듈 exports
    dom.css = css;

})( window.dom || (window.dom = {}) );