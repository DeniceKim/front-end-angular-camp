// 모듈 패턴
(function(exports){
    'use strict';

    // 전역에 공개 함수
    exports.printCallback = function(times, delay, callback) {

        console.log( typeof times, $.isNumeric(times) );

        // 전달인자 검증
        var count    = $.isNumeric(times) ? times : 3,
            duration = $.isNumeric(delay) ? delay : 400, // normal = 400 (0.4초)
            cb       = $.isFunction(callback) ? callback : (function(){});

        console.log(count, duration, cb);

        return;

        // i 값 1회 초기화 (지역 변수)
        var i = 0;

        // 즉시실행함수 + 재귀함수
        (function loopit(){
            i += 1;
            callback();
            if ( i < times ) {
                exports.setTimeout(loopit, delay);
            }
        })();

    }

})(this);