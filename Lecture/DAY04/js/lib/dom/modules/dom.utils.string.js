(function(){
    'use strict';

    // 검증 dom.utils
    if ( !dom.utils ) {
        dom.utils = {};
    }

    // CSS 문자열을 Javascript에서 처리할 수 있도록 변경
    function toCamel(str) {
        if ( !dom.utils.isString(str) ) { throw new Error('전달된 인자 값이 문자가 아닙니다.'); }
        return str.replace(/-[a-z]/g, function($1) {
            return $1.toUpperCase().replace(/-/, '');
        });
    }

    // dom 라이브러리로 exports
    dom.utils.toCamel = toCamel;

})( window.dom || (window.dom = {}) );