(function($){
    'use strict';

    $.isNumber = function(o) {
        return $.type(o) === 'number';
    };

    // 코어 메소드 백업
    $.isNumericOrg = $.isNumeric;
    // 메소드 오버라이딩
    $.isNumeric = $.isNumber;

})(this.jQuery);