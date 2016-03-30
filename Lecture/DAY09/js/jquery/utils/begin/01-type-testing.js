// 모듈 패턴
(function(exports){
    'use strict';

    // 전역에 공개 함수
    exports.printCallback = function(times, delay, callback) {
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