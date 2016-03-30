(function($){
    'use strict';

    $.isNumber = function(o) {
        return $.type(o) === 'number';
    };

    $.isNumeric = $.isNumber;

})(this.jQuery);