function liguilin(window, noGlobal) {
    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/

    var jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        length: 0,
    };
    var init = jQuery.fn.init = function (selector) {
        var match, elem;
        if (typeof selector === "string") {
            match = rquickExpr.exec(selector);
            elem = document.getElementById(match[2]);
            this[0] = elem;
            this.length = 1;
            return this;
        }
    };
    init.prototype = jQuery.fn;
    window.jQuery = window.$ = jQuery;
    return jQuery;
}
window.onload = liguilin(window)
