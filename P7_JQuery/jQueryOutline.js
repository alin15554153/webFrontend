(function (global, factory) {
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    /**48-144 公共方法*/
    var version = "3.5.0"
    var jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {    /**163-250 原型成员*/}
    jQuery.extend = jQuery.fn.extend = function () {
    }
    jQuery.extend({    /**328-490 扩展成员*/})
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

    function isArrayLike(obj) {
    }

    var Sizzle = (function (window) {    /**519-2974*/
    })(window)

    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;


    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;

    var dir = function (elem, dir, until) {
    }
    var siblings = function (n, elem) {
    }
    var rneedsContext = jQuery.expr.match.needsContext;

    function nodeName(elem, name) {
    }

    var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);

    function winnow(elements, qualifier, not) {
    }

    jQuery.filter = function (expr, elems, not) {
    }

    jQuery.fn.extend({    /**3076-3119*/})

    var rootjQuery
    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
    var init = jQuery.fn.init = function (selector, context, root) {    /**3133 - 3231*/
    }

    init.prototype = jQuery.fn;

    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/
    var guaranteedUnique = {children: true, contents: true, next: true, prev: true};
    jQuery.fn.extend({    /**3249-3329*/})

    function sibling(cur, dir) {
    }

    jQuery.each({    /**3337-3393*/}, function (name, fn) {    /**3393-3421*/
    })
    var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);

    function createOptions(options) {
    }

    jQuery.Callbacks = function (options) {  /** 3455-3648*/
    }

    function Identity(v) {
        return v;
    }

    function Thrower(ex) {
        throw ex;
    }

    function adoptValue(value, resolve, reject, noValue) {
    }

    jQuery.extend({/**3691-4039*/})
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

    jQuery.Deferred.exceptionHook = function (error, stack) {
    };

    jQuery.readyException = function (error) {
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function (fn) {
    };
    jQuery.extend({    /**4080-4109*/})
    jQuery.ready.then = readyList.then;

    function completed() {
    }

    var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    }
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;

    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }

    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }

    var acceptData = function (owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
    };

    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;
    Data.prototype = {/**4325-4379*/}
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;

    function getData(data) {
    }

    function dataAttr(elem, key, data) {
    }

    jQuery.extend({/**4446*/})
    jQuery.fn.extend({/**4470-4552*/})
    jQuery.extend({/**4554-4619*/})
    jQuery.fn.extend({/**4620-4686*/})
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document.documentElement;

    var isAttached = function (elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }
    var composed = {composed: true};
    if (documentElement.getRootNode) {
        isAttached = function (elem) {
            return jQuery.contains(elem.ownerDocument, elem) ||
                elem.getRootNode(composed) === elem.ownerDocument;
        };
    }
    var isHiddenWithinTree = function (elem, el) {
    };

    function adjustCSS(elem, prop, valueParts, tween) {
    }

    var defaultDisplayMap = {};

    function getDefaultDisplay(elem) {
    }

    function showHide(elements, show) {
    }

    jQuery.extend({/**4872-4893*/})
    var rcheckableType = (/^(?:checkbox|radio)$/i);

    var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);

    var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);

    (function () {
        /**4900-4930*/
    })();
    var wrapMap = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

        _default: [0, "", ""]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
// Support: IE <=9 only
    if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
    }

    function getAll(context, tag) {
    }

    function setGlobalEval(elems, refElements) {
    }

    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) { /**4996-5084*/
    }

    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function expectSync(elem, type) {
        return (elem === safeActiveElement()) === (type === "focus");
    }

    function safeActiveElement() {
    }

    function on(elem, types, selector, data, fn, one) {/**5119-5179*/
    }

    jQuery.event = {/**5184-5602*/}

    function leverageNative(el, type, expectSync) {/**5607-5688*/
    }

    jQuery.removeEvent = function (elem, type, handle) {
    };
    jQuery.Event = function (src, props) {/**5697-5745*/
    }
    jQuery.Event.prototype = {/**5748-5785*/}
    jQuery.each({/**5787-5847*/}, jQuery.event.addProp);
    jQuery.each({focus: "focusin", blur: "focusout"}, function (type, delegateType) {/**5848-5874*/
    })
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (orig, fix) {/**5889-5911*/
    })
    jQuery.fn.extend({/**5912-5957*/})

    var rnoInnerhtml = /<script|<style|<link/i

    var rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
    var rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g

    function manipulationTarget(elem, content) {
    }

    function disableScript(elem) {
    }

    function restoreScript(elem) {
    }

    function cloneCopyEvent(src, dest) {
    }

    function fixInput(src, dest) {
    }

    function domManip(collection, args, callback, ignored) {/**6043-6134*/
    }

    function remove(elem, selector, keepData) {
    }

    jQuery.extend({/**6156-6237*/})
    jQuery.fn.extend({/**6238-6378*/})

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {/**6386-6406*/
    })
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function (elem) {
    }
    var swap = function (elem, options, callback) {
    }
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function () {/**6446-6566*/
    })();

    function curCSS(elem, name, computed) {/**6568-6619*/
    }

    function addGetHookIf(conditionFn, hookFn) {
    }

    var cssPrefixes = ["Webkit", "Moz", "ms"]
    var emptyStyle = document.createElement("div").style
    var vendorProps = {};

    function vendorPropName(name) {
    }

    function finalPropName(name) {
    }

    var
        rdisplayswap = /^(none|table(?!-c[ea]).+)/
    var rcustomProp = /^--/
    var cssShow = {position: "absolute", visibility: "hidden", display: "block"}
    var cssNormalTransform = {letterSpacing: "0", fontWeight: "400"};

    function setPositiveNumber(_elem, value, subtract) {
    }

    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {/**6699-6766*/
    }

    function getWidthOrHeight(elem, dimension, extra) {/**6767-6842*/
    }

    jQuery.extend({/**6843-7005*/})
    jQuery.each(["height", "width"], function (_i, dimension) {
    })
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (prefix, suffix) {/**7095-7117*/
    })
    jQuery.fn.extend({})

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }

    jQuery.Tween = Tween;
    Tween.prototype = {}
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {}
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function (p) {
            return p;
        },
        swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;

    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;

    function schedule() {
    }

    function createFxNow() {
    }

    function genFx(type, includeWidth) {
    }

    function createTween(value, prop, animation) {
    }

    function defaultPrefilter(elem, props, opts) {/**7321-7429*/
    }

    function propFilter(props, specialEasing) {
    }

    function Animation(elem, properties, options) {/**7530-7654*/
    }

    jQuery.Animation = jQuery.extend(Animation, {})
    jQuery.speed = function (speed, easing, fn) {
    }
    jQuery.fn.extend({/**7739-7861*/})
    jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function () {
    }
    jQuery.fx.timer = function (timer) {
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function () {
    };
    jQuery.fx.stop = function () {
    };

    jQuery.fx.speeds = {};
    jQuery.fn.delay = function (time, type) {
    };
    (function () {
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({});
    jQuery.extend({/**7990-8068*/})
    boolHook = {};
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({});
    jQuery.extend({});
    if (!support.optSelected) {
        jQuery.propHooks.selected = {};
    }
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function () {
        jQuery.propFix[this.toLowerCase()] = this;
    });

    function stripAndCollapse(value) {
    }

    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }

    function classesToArray(value) {
    }

    jQuery.fn.extend({/**8261-8420*/})
    var rreturn = /\r/g;
    jQuery.fn.extend({/**8424-8492*/})
    jQuery.extend({/**8493-8583*/})
    jQuery.each(["radio", "checkbox"], function () {
    });
    support.focusin = "onfocusin" in window;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/
    var stopPropagationCallback = function (e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {/**8612-8777*/})
    jQuery.fn.extend({});
    jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {/**8803-8837*/
    })
    var location = window.location;

    var nonce = {guid: Date.now()};

    var rquery = (/\?/);
    jQuery.parseXML = function (data) {
    };

    var rbracket = /\[\]$/
    var rCRLF = /\r?\n/g
    var rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
    }

    jQuery.param = function (a, traditional) {
    }
    jQuery.fn.extend({/**8952-8988*/})

    var r20 = /%20/g
    var rhash = /#.*$/
    var rantiCache = /([?&])_=[^&]*/
    var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg


    var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    var rnoContent = /^(?:GET|HEAD)$/
    var rprotocol = /^\/\//


    var prefilters = {}

    var transports = {}

    var allTypes = "*/".concat("*")

    var originAnchor = document.createElement("a");
    originAnchor.href = location.href;

    function addToPrefiltersOrTransports(structure) {
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    }

    function ajaxExtend(target, src) {
    }

    function ajaxHandleResponses(s, jqXHR, responses) {
    }

    function ajaxConvert(s, response, jqXHR, isSuccess) {/**9168-9263*/
    }

    jQuery.extend({/**9264-9813*/})
    jQuery.each(["get", "post"], function (_i, method) {
    });
    jQuery.ajaxPrefilter(function (s) {
    });
    jQuery._evalUrl = function (url, options, doc) {
    };
    jQuery.fn.extend({/**9870-9935*/})
    jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };


    jQuery.ajaxSettings.xhr = function () {
    };
    var xhrSuccessStatus = {}
    var xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function (options) {/**9966-10105*/
    })
    jQuery.ajaxPrefilter(function (s) {
    });
    jQuery.ajaxSetup({});
    jQuery.ajaxPrefilter("script", function (s) {
    });
    jQuery.ajaxTransport("script", function (s) {
    })
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce.guid++));
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {/**10187-10264*/
    })
    support.createHTMLDocument = (function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    })();
    jQuery.parseHTML = function (data, context, keepScripts) {/**10282-10327*/
    }
    jQuery.fn.load = function (url, params, callback) {/**10332-10391*/
    }
    jQuery.expr.pseudos.animated = function (elem) {
    };
    jQuery.offset = {}
    jQuery.fn.extend({})
    jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
    })
    jQuery.each(["top", "left"], function (_i, prop) {
    });
    jQuery.each({Height: "height", Width: "width"}, function (name, type) {
    })
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function (_i, type) {
        jQuery.fn[type] = function (fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({})
    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup contextmenu").split(" "),
        function (_i, name) {

            // Handle event binding
            jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ?
                    this.on(name, null, data, fn) :
                    this.trigger(name);
            };
        });
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function (fn, context) {
    }
    jQuery.holdReady = function (hold) {
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;

    jQuery.now = Date.now;
    jQuery.isNumeric = function (obj) {
    };
    jQuery.trim = function (text) {
    };
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return jQuery;
        });
    }

    var _jQuery = window.jQuery

    var _$ = window.$;

    jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };
    if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
    }


    return jQuery;
});
