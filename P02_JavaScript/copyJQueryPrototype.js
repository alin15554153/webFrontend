var jQuery = function (selector) {
    return new jQuery.prototype.init(selector);
};
jQuery.prototype = {
    // constructor: jQuery,
    length: 0
};
jQuery.prototype.init = function (selector) {
    var elem = document.getElementById(selector);
    this[0] = elem;
    this.length = 1;
    // return this;
};
// console.log(jQuery('test'))

// jQuery.prototype.init.prototype = jQuery.prototype;
// console.log(jQuery('test'))

var mQuery = function mQuery () {
    return new mQuery.fn.myInit()
}
mQuery.fn = mQuery.prototype
mQuery.fn.myInit = function myInit(){
    return this
}
 var a =
console.log( Object)
