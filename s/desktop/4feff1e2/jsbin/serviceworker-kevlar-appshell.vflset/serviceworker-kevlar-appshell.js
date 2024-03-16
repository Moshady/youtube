'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return ea(a())
}

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t = this || self;

function ha(a) {
    var b = v("CLOSURE_FLAGS");
    a = b && b[a];
    return null != a ? a : !1
}

function v(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return la.apply(null, arguments)
}

function w(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Na = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Nb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}

function na(a) {
    return a
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
ma(oa, Error);
oa.prototype.name = "CustomError";
var pa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var qa;

function ra(a, b) {
    this.h = a === sa && b || ""
}
ra.prototype.toString = function() {
    return this.h
};

function ta(a) {
    return new ra(sa, a)
}
var sa = {};
ta("");
var ua = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    },
    va = {};

function wa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function xa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function ya(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function za(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function Aa(a) {
    for (const b in a) return !1;
    return !0
}

function Ba(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = Ba(a[c]);
    return b
}
const Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Da(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < Ca.length; f++) c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var Ea = ha(610401301),
    Fa = ha(188588736);

function Ga() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Ha;
const Ia = t.navigator;
Ha = Ia ? Ia.userAgentData || null : null;

function Ja(a) {
    return Ea ? Ha ? Ha.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function x(a) {
    return -1 != Ga().indexOf(a)
};

function Ka() {
    return Ea ? !!Ha && 0 < Ha.brands.length : !1
}

function La() {
    return Ka() ? Ja("Chromium") : (x("Chrome") || x("CriOS")) && !(Ka() ? 0 : x("Edge")) || x("Silk")
};

function Ma(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function Na(a) {
    var b = v("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Oa(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Pa[c]) c = Pa[c];
                else {
                    c = String(c);
                    if (!Pa[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Pa[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Pa[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}

function Oa(a, b) {
    b || (b = {});
    b[Qa(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Qa(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Oa(a, b));
    return c
}

function Qa(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Pa = {};
var Ra = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Sa(a) {
    return a ? decodeURI(a) : a
}

function Ta(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ta(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Ua(a) {
    var b = [],
        c;
    for (c in a) Ta(c, a[c], b);
    return b.join("&")
};

function Va() {
    this.l = this.l;
    this.i = this.i
}
Va.prototype.l = !1;
Va.prototype.dispose = function() {
    this.l || (this.l = !0, this.m())
};
Va.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? void 0 !== b ? a.call(b) : a() : (this.i || (this.i = []), this.i.push(void 0 !== b ? la(a, b) : a))
};
Va.prototype.m = function() {
    if (this.i)
        for (; this.i.length;) this.i.shift()()
};
var Wa = Ka() ? !1 : x("Trident") || x("MSIE");

function Xa(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class Ya {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function Za() {};

function $a(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
class ab {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = bb.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var bb = new Ya(() => new cb, a => a.reset());
class cb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let db, eb = !1,
    fb = new ab,
    hb = (a, b) => {
        db || gb();
        eb || (db(), eb = !0);
        fb.add(a, b)
    },
    gb = () => {
        const a = t.Promise.resolve(void 0);
        db = () => {
            a.then(ib)
        }
    };
var ib = () => {
    let a;
    for (; a = fb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            $a(b)
        }
        Xa(bb, a)
    }
    eb = !1
};

function y(a) {
    this.h = 0;
    this.v = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != Za) try {
        var b = this;
        a.call(void 0, function(c) {
            jb(b, 2, c)
        }, function(c) {
            jb(b, 3, c)
        })
    } catch (c) {
        jb(this, 3, c)
    }
}

function kb() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
kb.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var lb = new Ya(function() {
    return new kb
}, function(a) {
    a.reset()
});

function mb(a, b, c) {
    var d = lb.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function nb(a) {
    if (a instanceof y) return a;
    var b = new y(Za);
    jb(b, 2, a);
    return b
}
y.prototype.then = function(a, b, c) {
    return ob(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
y.prototype.$goog_Thenable = !0;
y.prototype.F = function(a, b) {
    return ob(this, null, a, b)
};
y.prototype.catch = y.prototype.F;
y.prototype.cancel = function(a) {
    if (0 == this.h) {
        var b = new pb(a);
        hb(function() {
            qb(this, b)
        }, this)
    }
};

function qb(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? qb(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : rb(c), sb(c, e, 3, b)))
            }
            a.j = null
        } else jb(a, 3, b)
}

function tb(a, b) {
    a.i || 2 != a.h && 3 != a.h || ub(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function ob(a, b, c, d) {
    var e = mb(null, null, null);
    e.h = new y(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof pb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    tb(a, e);
    return e.h
}
y.prototype.K = function(a) {
    this.h = 0;
    jb(this, 2, a)
};
y.prototype.M = function(a) {
    this.h = 0;
    jb(this, 3, a)
};

function jb(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.K,
                f = a.M;
            if (d instanceof y) {
                tb(d, mb(e || Za, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            vb(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.v = c, a.h = b, a.j = null, ub(a), 3 != b || c instanceof pb || wb(a, c))
    }
}

function vb(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function ub(a) {
    a.s || (a.s = !0, hb(a.B, a))
}

function rb(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
y.prototype.B = function() {
    for (var a; a = rb(this);) sb(this, a, this.h, this.v);
    this.s = !1
};

function sb(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, xb(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : xb(b, c, d)
    } catch (e) {
        yb.call(null, e)
    }
    Xa(lb, b)
}

function xb(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function wb(a, b) {
    a.m = !0;
    hb(function() {
        a.m && yb.call(null, b)
    })
}
var yb = $a;

function pb(a) {
    oa.call(this, a)
}
ma(pb, oa);
pb.prototype.name = "cancel";

function zb() {
    throw Error("Invalid UTF8");
}

function Ab(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Bb = void 0,
    Cb;
const Db = "undefined" !== typeof TextDecoder;
!x("Android") || La();
La();
var Eb = x("Safari") && !(La() || (Ka() ? 0 : x("Coast")) || (Ka() ? 0 : x("Opera")) || (Ka() ? 0 : x("Edge")) || (Ka() ? Ja("Microsoft Edge") : x("Edg/")) || (Ka() ? Ja("Opera") : x("OPR")) || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var Fb = {},
    Gb = null;

function Hb(a, b) {
    void 0 === b && (b = 0);
    Ib();
    b = Fb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Jb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Kb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Kb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                q = Gb[l];
            if (null != q) return q;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ib();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ib() {
    if (!Gb) {
        Gb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Fb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Gb[f] && (Gb[f] = e)
            }
        }
    }
};
var Lb = "undefined" !== typeof Uint8Array,
    Mb = !Wa && "function" === typeof btoa;

function Nb(a) {
    if (!Mb) return Hb(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const Ob = /[-_.]/g,
    Pb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function Qb(a) {
    return Pb[a] || ""
}

function Rb(a) {
    if (!Mb) return Jb(a);
    Ob.test(a) && (a = a.replace(Ob, Qb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function Sb(a) {
    return Lb && null != a && a instanceof Uint8Array
}
let Tb;
var Ub = {};
let Vb;

function Wb(a) {
    if (a !== Ub) throw Error("illegal external caller");
}

function Xb() {
    return Vb || (Vb = new Yb(null, Ub))
}

function Zb(a) {
    Wb(Ub);
    var b = a.h;
    b = null == b || Sb(b) ? b : "string" === typeof b ? Rb(b) : null;
    return null == b ? b : a.h = b
}
var Yb = class {
    constructor(a, b) {
        Wb(b);
        this.h = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = Zb(this);
        return a ? a.length : 0
    }
};

function $b(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function ac() {
    return Error("Failed to read varint, encoding is invalid.")
}

function bc(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function cc(a) {
    if ("string" === typeof a) return {
        buffer: Rb(a),
        L: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        L: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === Yb) return {
        buffer: Zb(a) || Tb || (Tb = new Uint8Array(0)),
        L: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        L: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};

function dc() {
    return "function" === typeof BigInt
};
const ec = "function" === typeof Uint8Array.prototype.slice;
let fc = 0,
    gc = 0;

function hc(a) {
    const b = 0 > a;
    a = Math.abs(a);
    let c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    if (b) {
        const [d, e] = ic(c, a);
        a = e;
        c = d
    }
    fc = c >>> 0;
    gc = a >>> 0
}

function jc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);
    else dc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + kc(c) + kc(a));
    return c
}

function kc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}

function lc() {
    var a = fc,
        b = gc;
    if (b & 2147483648)
        if (dc()) a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else {
            const [c, d] = ic(a, b);
            a = "-" + jc(c, d)
        }
    else a = jc(a, b);
    return a
}

function ic(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
};

function mc(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw ac();
    nc(a, c);
    return e
}

function nc(a, b) {
    a.h = b;
    if (b > a.i) throw bc(a.i, b);
}

function oc(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw bc(b, a.i - c);
    a.h = d;
    return c
}
var pc = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            ca: d = !1
        } = {}) {
            this.ca = d;
            a && (a = cc(a), this.j = a.buffer, this.m = a.L, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.ca = !1
        }
        reset() {
            this.h = this.l
        }
    },
    qc = [];

function rc(a, {
    la: b = !1
} = {}) {
    a.la = b
}

function sc(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = mc(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw $b(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function tc(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) tc(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        nc(a, b);
                        break a
                    }
                throw ac();
            }
            break;
        case 1:
            a = a.h;
            nc(a, a.h + 8);
            break;
        case 2:
            2 != a.i ? tc(a) : (b = mc(a.h) >>> 0, a = a.h, nc(a, a.h + b));
            break;
        case 5:
            a = a.h;
            nc(a, a.h + 4);
            break;
        case 3:
            b = a.l;
            do {
                if (!sc(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                tc(a)
            } while (1);
            break;
        default:
            throw $b(a.i, a.j);
    }
}

function uc(a, b, c) {
    const d = a.h.i,
        e = mc(a.h) >>> 0,
        f = a.h.h + e;
    let g = f - d;
    0 >= g && (a.h.i = f, c(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${e} bytes, instead read ${e-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = d
}
var vc = class {
        constructor(a, b) {
            if (qc.length) {
                const c = qc.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new pc(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            rc(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
    },
    wc = [];
class xc {
    constructor(a, b, c) {
        this.aa = a;
        this.h = b;
        this.ra = c
    }
};

function yc(a) {
    return Array.prototype.slice.call(a)
};
var A;
A = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
[...Object.values({
    zb: 1,
    xb: 2,
    wb: 4,
    Eb: 8,
    Db: 16,
    Cb: 32,
    Ta: 64,
    Jb: 128,
    ab: 256,
    Za: 512,
    yb: 1024,
    Xa: 2048,
    Ib: 4096,
    Ya: 8192
})];
var zc = A ? (a, b) => {
        a[A] |= b
    } : (a, b) => {
        void 0 !== a.D ? a.D |= b : Object.defineProperties(a, {
            D: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    },
    Ac = A ? (a, b) => {
        a[A] &= ~b
    } : (a, b) => {
        void 0 !== a.D && (a.D &= ~b)
    };

function Bc(a, b, c) {
    return c ? a | b : a & ~b
}
var B = A ? a => a[A] | 0 : a => a.D | 0,
    D = A ? a => a[A] : a => a.D,
    E = A ? (a, b) => {
        a[A] = b;
        return a
    } : (a, b) => {
        void 0 !== a.D ? a.D = b : Object.defineProperties(a, {
            D: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    };

function Cc(a, b) {
    E(b, (a | 0) & -14591)
}

function Dc(a, b) {
    E(b, (a | 34) & -14557)
}

function Ec(a) {
    a = a >> 14 & 1023;
    return 0 === a ? 536870912 : a
};
var Fc = {},
    Gc = {};

function Hc(a) {
    return !(!a || "object" !== typeof a || a.h !== Gc)
}

function Ic(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let Jc;

function Kc(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = B(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    E(a, d | 1);
    return !0
}
var Lc;
const Mc = [];
E(Mc, 55);
Lc = Object.freeze(Mc);

function Nc(a) {
    if (a & 2) throw Error();
}
let Oc;

function Pc(a, b) {
    (b = Oc ? b[Oc] : void 0) && (a[Oc] = yc(b))
}
let Qc;
class Rc {}
class Sc {}
Object.freeze(new Rc);
Object.freeze(new Sc);

function Tc(a) {
    a = Error(a);
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    return a
};

function Uc(a) {
    return a.displayName || a.name || "unknown type name"
}
const Vc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

function Wc(a) {
    const b = typeof a;
    return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Vc.test(a)
}

function Xc(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
        if (!a) return;
        a = +a
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
}

function Yc(a, b) {
    b = !!b;
    if (!Wc(a)) throw Tc("int64");
    if ("string" === typeof a)
        if (Wc(a), b = Math.trunc(Number(a)), Number.isSafeInteger(b)) a = String(b);
        else {
            if (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), !Zc(a)) {
                if (16 > a.length) hc(Number(a));
                else if (dc()) a = BigInt(a), fc = Number(a & BigInt(4294967295)) >>> 0, gc = Number(a >> BigInt(32) & BigInt(4294967295));
                else {
                    b = +("-" === a[0]);
                    gc = fc = 0;
                    var c = a.length;
                    for (let d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
                        const f = Number(a.slice(d, e));
                        gc *= 1E6;
                        fc = 1E6 * fc + f;
                        4294967296 <= fc && (gc += Math.trunc(fc /
                            4294967296), gc >>>= 0, fc >>>= 0)
                    }
                    if (b) {
                        const [d, e] = ic(fc, gc);
                        fc = d;
                        gc = e
                    }
                }
                a = lc()
            }
        }
    else if (b) Wc(a), a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), Zc(b) ? a = b : (hc(a), a = lc()));
    else if (Wc(a), a = Math.trunc(a), !Number.isSafeInteger(a)) {
        hc(a);
        b = fc;
        c = gc;
        if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
        b = 4294967296 * c + (b >>> 0);
        a = a ? -b : b
    }
    return a
}

function Zc(a) {
    return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
}

function $c(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a
}

function ad(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Uc(b)} but got ${a&&Uc(a.constructor)}`);
    return a
}

function bd(a, b, c) {
    if (null != a && "object" === typeof a && a.W === Fc) return a;
    if (Array.isArray(a)) {
        var d = B(a),
            e = d;
        0 === e && (e |= c & 32);
        e |= c & 2;
        e !== d && E(a, e);
        return new b(a)
    }
};
let cd, dd, ed;

function fd(a) {
    switch (typeof a) {
        case "boolean":
            return dd || (dd = [0, void 0, !0]);
        case "number":
            return 0 < a ? void 0 : 0 === a ? ed || (ed = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function gd(a, b, c) {
    null == a && (a = cd);
    cd = void 0;
    if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -16760833 | (b & 1023) << 14)
    } else {
        if (!Array.isArray(a)) throw Error();
        d = B(a);
        if (d & 2048) throw Error();
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
            c = a;
            const e = c.length;
            if (e) {
                const f = e - 1;
                if (Ic(c[f])) {
                    d |= 256;
                    b = f - (+!!(d & 512) - 1);
                    if (1024 <= b) throw Error();
                    d = d & -16760833 | (b & 1023) << 14;
                    break a
                }
            }
            if (b) {
                b = Math.max(b, e - (+!!(d & 512) - 1));
                if (1024 < b) throw Error();
                d = d & -16760833 | (b & 1023) << 14
            }
        }
    }
    E(a, d);
    return a
};

function hd(a, b) {
    return id(b)
}

function id(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Kc(a, void 0, 0)) return
                } else {
                    if (Sb(a)) return Nb(a);
                    if (a instanceof Yb) {
                        const b = a.h;
                        return null == b ? "" : "string" === typeof b ? b : a.h = Nb(b)
                    }
                }
    }
    return a
};

function jd(a, b, c) {
    const d = yc(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Pc(d, a);
    return d
}

function kd(a, b, c, d, e) {
    if (null != a) {
        if (Array.isArray(a)) a = Kc(a, void 0, 0) ? void 0 : e && B(a) & 2 ? a : ld(a, b, c, void 0 !== d, e);
        else if (Ic(a)) {
            const f = {};
            for (let g in a) f[g] = kd(a[g], b, c, d, e);
            a = f
        } else a = b(a, d);
        return a
    }
}

function ld(a, b, c, d, e) {
    const f = d || c ? B(a) : 0;
    d = d ? !!(f & 32) : void 0;
    const g = yc(a);
    for (let h = 0; h < g.length; h++) g[h] = kd(g[h], b, c, d, e);
    c && (Pc(g, a), c(f, g));
    return g
}

function md(a) {
    return a.W === Fc ? a.toJSON() : id(a)
};

function nd(a, b, c = Dc) {
    if (null != a) {
        if (Lb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            var d = B(a);
            if (d & 2) return a;
            b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? E(a, (d | 34) & -12293) : ld(a, nd, d & 4 ? Dc : c, !0, !0)
        }
        a.W === Fc && (c = a.o, d = D(c), a = d & 2 ? a : od(a, c, d, !0));
        return a
    }
}

function od(a, b, c, d) {
    a = a.constructor;
    cd = b = pd(b, c, d);
    b = new a(b);
    cd = void 0;
    return b
}

function pd(a, b, c) {
    const d = c || b & 2 ? Dc : Cc,
        e = !!(b & 32);
    a = jd(a, b, f => nd(f, e, d));
    zc(a, 32 | (c ? 2 : 0));
    return a
}

function qd(a) {
    const b = a.o,
        c = D(b);
    return c & 2 ? od(a, b, c, !1) : a
};

function rd(a, b) {
    a = a.o;
    return sd(a, D(a), b)
}

function sd(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= Ec(b)) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b]
    }
}

function td(a, b, c) {
    const d = a.o;
    let e = D(d);
    Nc(e);
    F(d, e, b, c);
    return a
}

function F(a, b, c, d, e) {
    const f = Ec(b);
    if (c >= f || e) {
        let g = b;
        if (b & 256) e = a[a.length - 1];
        else {
            if (null == d) return g;
            e = a[f + (+!!(b & 512) - 1)] = {};
            g |= 256
        }
        e[c] = d;
        c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
        g !== b && E(a, g);
        return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
}

function ud(a) {
    return void 0 !== vd(a, H, 2)
}

function wd(a, b, c, d) {
    var e = b & 2;
    let f = sd(a, b, c);
    Array.isArray(f) || (f = Lc);
    const g = !(d & 2);
    d = !(d & 1);
    const h = !!(b & 32);
    let k = B(f);
    0 !== k || !h || e || g ? k & 1 || (k |= 1, E(f, k)) : (k |= 33, E(f, k));
    e ? (a = !1, k & 2 || (zc(f, 34), a = !!(4 & k)), (d || a) && Object.freeze(f)) : (e = !!(2 & k) || !!(2048 & k), d && e ? (f = yc(f), d = 1, h && !g && (d |= 32), E(f, d), F(a, b, c, f)) : g && k & 32 && !e && Ac(f, 32));
    return f
}

function xd(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a)
}

function yd(a, b, c, d) {
    const e = a.o;
    let f = D(e);
    Nc(f);
    (c = zd(e, f, c)) && c !== b && null != d && (f = F(e, f, c));
    F(e, f, b, d);
    return a
}

function zd(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
        const f = c[e];
        null != sd(a, b, f) && (0 !== d && (b = F(a, b, d)), d = f)
    }
    return d
}

function Ad(a, b, c, d) {
    let e = D(a);
    Nc(e);
    const f = sd(a, e, c, d);
    let g;
    if (null != f && f.W === Fc) return b = qd(f), b !== f && F(a, e, c, b, d), b.o;
    if (Array.isArray(f)) {
        const h = B(f);
        h & 2 ? g = pd(f, h, !1) : g = f;
        g = gd(g, b[0], b[1])
    } else g = gd(void 0, b[0], b[1]);
    g !== f && F(a, e, c, g, d);
    return g
}

function vd(a, b, c) {
    a = a.o;
    let d = D(a);
    const e = sd(a, d, c, !1);
    b = bd(e, b, d);
    b !== e && null != b && F(a, d, c, b, !1);
    return b
}

function Bd(a, b, c) {
    b = vd(a, b, c);
    if (null == b) return b;
    a = a.o;
    let d = D(a);
    if (!(d & 2)) {
        const e = qd(b);
        e !== b && (b = e, F(a, d, c, b, !1))
    }
    return b
}

function Cd(a, b, c, d, e, f) {
    var g = !!(2 & b),
        h = g ? 1 : 2;
    const k = 1 === h;
    h = 2 === h;
    e = !!e;
    f && (f = !g);
    g = sd(a, b, d);
    g = Array.isArray(g) ? g : Lc;
    var l = B(g);
    const q = !!(4 & l);
    if (!q) {
        var m = l;
        0 === m && (m = Dd(m, b, e));
        m = Bc(m, 1, !0);
        l = g;
        var p = b;
        const n = !!(2 & m);
        n && (p = Bc(p, 2, !0));
        let u = !n,
            z = !0,
            C = 0,
            P = 0;
        for (; C < l.length; C++) {
            const G = bd(l[C], c, p);
            if (G instanceof c) {
                if (!n) {
                    const Z = !!(B(G.o) & 2);
                    u && (u = !Z);
                    z && (z = Z)
                }
                l[P++] = G
            }
        }
        P < C && (l.length = P);
        m = Bc(m, 4, !0);
        m = Bc(m, 16, z);
        m = Bc(m, 8, u);
        E(l, m);
        n && Object.freeze(l);
        l = m
    }
    c = !!(8 & l) || k && !g.length;
    if (f && !c) {
        xd(l) &&
            (g = yc(g), l = Dd(l, b, e), b = F(a, b, d, g));
        f = g;
        c = l;
        for (l = 0; l < f.length; l++) m = f[l], p = qd(m), m !== p && (f[l] = p);
        c = Bc(c, 8, !0);
        c = Bc(c, 16, !f.length);
        E(f, c);
        l = c
    }
    xd(l) || (f = l, k ? l = Bc(l, !g.length || 16 & l && (!q || 32 & l) ? 2 : 2048, !0) : e || (l = Bc(l, 32, !1)), l !== f && E(g, l), k && Object.freeze(g));
    h && xd(l) && (g = yc(g), l = Dd(l, b, e), E(g, l), F(a, b, d, g));
    return g
}

function I(a, b, c, d) {
    null != d ? ad(d, b) : d = void 0;
    return td(a, c, d)
}

function Ed(a, b, c, d, e) {
    null != e ? ad(e, b) : e = void 0;
    yd(a, c, d, e)
}

function Dd(a, b, c) {
    a = Bc(a, 2, !!(2 & b));
    a = Bc(a, 32, !!(32 & b) && c);
    return a = Bc(a, 2048, !1)
}

function Fd(a, b, c, d) {
    a = a.o;
    const e = D(a);
    Nc(e);
    b = Cd(a, e, c, b, !0);
    c = null != d ? ad(d, c) : new c;
    b.push(c);
    B(c.o) & 2 ? Ac(b, 8) : Ac(b, 16)
}

function Gd(a, b) {
    a = rd(a, b);
    return null == a || "string" === typeof a ? a : void 0
}

function Hd(a, b) {
    a = Gd(a, b);
    return null != a ? a : ""
}

function Id(a, b) {
    const c = a.o;
    b = zd(c, D(c), Jd) === b ? b : -1;
    return Gd(a, b)
}

function Kd(a, b, c) {
    if (null != c) {
        if ("number" !== typeof c) throw Tc("int32");
        if (!Number.isFinite(c)) throw Tc("int32");
        c |= 0
    }
    return td(a, b, c)
}

function Ld(a, b, c) {
    td(a, b, null == c ? c : Yc(c))
}

function J(a, b, c) {
    return td(a, b, $c(c))
}

function K(a, b, c) {
    if (null != c) {
        if (!Number.isFinite(c)) throw Tc("enum");
        c |= 0
    }
    return td(a, b, c)
};
var L = class {
    constructor(a, b, c) {
        this.o = gd(a, b, c)
    }
    toJSON() {
        return Jc ? Md(this, this.o, !1) : Md(this, ld(this.o, md, void 0, void 0, !1), !0)
    }
    clone() {
        const a = this.o;
        return od(this, a, D(a), !1)
    }
    L() {
        return !!(B(this.o) & 2)
    }
};
L.prototype.W = Fc;

function Md(a, b, c) {
    var d = Fa ? void 0 : a.constructor.A;
    const e = D(c ? a.o : b);
    a = b.length;
    if (!a) return b;
    let f, g;
    if (Ic(c = b[a - 1])) {
        a: {
            var h = c;
            let q = {},
                m = !1;
            for (var k in h) {
                let p = h[k];
                if (Array.isArray(p)) {
                    let n = p;
                    if (Kc(p, d, +k) || Hc(p) && 0 === p.size) p = null;
                    p != n && (m = !0)
                }
                null != p ? q[k] = p : m = !0
            }
            if (m) {
                for (var l in q) {
                    h = q;
                    break a
                }
                h = null
            }
        }
        h != c && (f = !0);a--
    }
    for (k = +!!(e & 512) - 1; 0 < a; a--) {
        l = a - 1;
        c = b[l];
        l -= k;
        if (!(null == c || Kc(c, d, l) || Hc(c) && 0 === c.size)) break;
        g = !0
    }
    if (!f && !g) return b;
    b = Array.prototype.slice.call(b, 0, a);
    h && b.push(h);
    return b
};
const Nd = Symbol();

function Od(a) {
    let b = a[Nd];
    if (!b) {
        const c = Pd(a),
            d = Qd(a),
            e = d.j;
        b = e ? (f, g) => e(f, g, d) : (f, g) => {
            for (; sc(g) && 4 != g.i;) {
                var h = g.l,
                    k = d[h];
                if (!k) {
                    var l = d.extensions;
                    l && (l = l[h]) && (k = d[h] = Rd(l))
                }
                if (!k || !k(g, f, h)) {
                    k = g;
                    h = k.j;
                    tc(k);
                    if (k.la) k = void 0;
                    else {
                        l = k.h.h - h;
                        k.h.h = h;
                        b: {
                            k = k.h;h = l;
                            if (0 == h) {
                                k = Xb();
                                break b
                            }
                            const q = oc(k, h);k.ca && k.m ? h = k.j.subarray(q, q + h) : (k = k.j, l = q, h = q + h, h = l === h ? Tb || (Tb = new Uint8Array(0)) : ec ? k.slice(l, h) : new Uint8Array(k.subarray(l, h)));k = 0 == h.length ? Xb() : new Yb(h, Ub)
                        }
                    }
                    h = f;
                    k && (Oc || (Oc = Symbol()), (l = h[Oc]) ? l.push(k) : h[Oc] = [k])
                }
            }
            c === Sd || c === Td || c.l || (f[Qc || (Qc = Symbol())] = c)
        };
        a[Nd] = b
    }
    return b
}

function Rd(a) {
    a = Array.isArray(a) ? a[0] instanceof xc ? a : [Ud, a] : [a, void 0];
    const b = a[0].aa;
    if (a = a[1]) {
        const c = Od(a),
            d = Qd(a).V;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
}
class Vd {}
let Sd, Td;
const Wd = Symbol();

function Xd(a, b, c) {
    const d = c[1];
    let e;
    if (d) {
        const f = d[Wd];
        e = f ? f.V : fd(d[0]);
        a[b] = null != f ? f : d
    }
    e && e === dd ? (a.h || (a.h = new Set)).add(b) : c[0] && (a.i || (a.i = new Set)).add(b)
}

function Yd(a, b) {
    return [a.h, !b || 0 < b[0] ? void 0 : b]
}

function Pd(a) {
    var b = a[Wd];
    if (b) return b;
    b = Zd(a, a[Wd] = new Vd, Yd, Yd, Xd);
    if (!b.extensions && !b.i && !b.h) {
        let c = !0;
        for (let d in b) isNaN(d) || (c = !1);
        c ? (fd(a[0]) === dd ? Td ? b = Td : (b = new Vd, b.V = fd(!0), b = Td = b) : b = Sd || (Sd = new Vd), b = a[Wd] = b) : b.l = !0
    }
    return b
}

function $d(a, b, c) {
    a[b] = c
}

function Zd(a, b, c, d, e = $d) {
    b.V = fd(a[0]);
    let f = 0;
    var g = a[++f];
    g && g.constructor === Object && (b.extensions = g, g = a[++f], "function" === typeof g && (b.j = g, b.m = a[++f], g = a[++f]));
    const h = {};
    for (; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
        for (var k = 0; k < g.length; k++) h[g[k]] = g;
        g = a[++f]
    }
    for (k = 1; void 0 !== g;) {
        "number" === typeof g && (k += g, g = a[++f]);
        let m;
        var l = void 0;
        g instanceof xc ? m = g : (m = ae, f--);
        if (m.ra) {
            g = a[++f];
            l = a;
            var q = f;
            "function" == typeof g && (g = g(), l[q] = g);
            l = g
        }
        g = a[++f];
        q = k + 1;
        "number" === typeof g && 0 > g && (q -=
            g, g = a[++f]);
        for (; k < q; k++) {
            const p = h[k];
            e(b, k, l ? d(m, l, p) : c(m, p))
        }
    }
    return b
}
const be = Symbol(),
    ce = Symbol();

function de(a, b) {
    const c = a.aa;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function ee(a, b, c) {
    const d = a.aa;
    let e, f;
    return (g, h, k) => d(g, h, k, f || (f = Qd(b).V), e || (e = Od(b)), c)
}

function Qd(a) {
    let b = a[ce];
    if (b) return b;
    Pd(a);
    b = Zd(a, a[ce] = {}, de, ee);
    ce in a && Wd in a && be in a && (a.length = 0);
    return b
}
var fe;
fe = new xc(function(a, b, c) {
    if (2 !== a.i) return !1;
    var d = mc(a.h) >>> 0;
    a = a.h;
    var e = oc(a, d);
    a = a.j;
    if (Db) {
        var f = a,
            g;
        (g = Cb) || (g = Cb = new TextDecoder("utf-8", {
            fatal: !0
        }));
        d = e + d;
        f = 0 === e && d === f.length ? f : f.subarray(e, d);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (void 0 === Bb) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (q) {}
                try {
                    g.decode(new Uint8Array([97])), Bb = !0
                } catch (q) {
                    Bb = !1
                }
            }!Bb && (Cb = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let q;
        for (; h < d;) {
            var k = a[h++];
            128 > k ? e.push(k) : 224 > k ? h >= d ? zb() : (q = a[h++], 194 > k || 128 !== (q & 192) ?
                (h--, zb()) : e.push((k & 31) << 6 | q & 63)) : 240 > k ? h >= d - 1 ? zb() : (q = a[h++], 128 !== (q & 192) || 224 === k && 160 > q || 237 === k && 160 <= q || 128 !== ((g = a[h++]) & 192) ? (h--, zb()) : e.push((k & 15) << 12 | (q & 63) << 6 | g & 63)) : 244 >= k ? h >= d - 2 ? zb() : (q = a[h++], 128 !== (q & 192) || 0 !== (k << 28) + (q - 144) >> 30 || 128 !== ((g = a[h++]) & 192) || 128 !== ((f = a[h++]) & 192) ? (h--, zb()) : (k = (k & 7) << 18 | (q & 63) << 12 | (g & 63) << 6 | f & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : zb();
            8192 <= e.length && (l = Ab(l, e), e.length = 0)
        }
        h = Ab(l, e)
    }
    F(b, D(b), c, h);
    return !0
}, !1, !1);
var Ud = new xc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        uc(a, Ad(b, d, c, !0), e);
        return !0
    }, !1, !0),
    ae = new xc(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        uc(a, Ad(b, d, c), e);
        return !0
    }, !1, !0),
    ge;
ge = new xc(function(a, b, c, d, e) {
    if (2 !== a.i) return !1;
    d = gd(void 0, d[0], d[1]);
    let f = D(b);
    Nc(f);
    let g = wd(b, f, c, 3);
    f = D(b);
    B(g) & 4 && (g = yc(g), E(g, (B(g) | 1) & -2079), F(b, f, c, g));
    g.push(d);
    uc(a, d, e);
    return !0
}, !0, !0);
ta("csi.gstatic.com");
ta("googleads.g.doubleclick.net");
ta("partner.googleadservices.com");
ta("pubads.g.doubleclick.net");
ta("securepubads.g.doubleclick.net");
ta("tpc.googlesyndication.com");

function he(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    0 === a.indexOf("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};

function ie() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = l = 0
    }

    function b(m) {
        for (var p = g, n = 0; 64 > n; n += 4) p[n / 4] = m[n] << 24 | m[n + 1] << 16 | m[n + 2] << 8 | m[n + 3];
        for (n = 16; 80 > n; n++) m = p[n - 3] ^ p[n - 8] ^ p[n - 14] ^ p[n - 16], p[n] = (m << 1 | m >>> 31) & 4294967295;
        m = e[0];
        var u = e[1],
            z = e[2],
            C = e[3],
            P = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var G = C ^ u & (z ^ C);
                    var Z = 1518500249
                } else G = u ^ z ^ C, Z = 1859775393;
            else 60 > n ? (G = u & z | C & (u | z), Z = 2400959708) : (G = u ^ z ^ C, Z = 3395469782);
            G = ((m << 5 | m >>> 27) & 4294967295) + G + P + Z + p[n] & 4294967295;
            P = C;
            C = z;
            z = (u << 30 | u >>> 2) & 4294967295;
            u = m;
            m = G
        }
        e[0] = e[0] + m & 4294967295;
        e[1] = e[1] + u & 4294967295;
        e[2] =
            e[2] + z & 4294967295;
        e[3] = e[3] + C & 4294967295;
        e[4] = e[4] + P & 4294967295
    }

    function c(m, p) {
        if ("string" === typeof m) {
            m = unescape(encodeURIComponent(m));
            for (var n = [], u = 0, z = m.length; u < z; ++u) n.push(m.charCodeAt(u));
            m = n
        }
        p || (p = m.length);
        n = 0;
        if (0 == l)
            for (; n + 64 < p;) b(m.slice(n, n + 64)), n += 64, q += 64;
        for (; n < p;)
            if (f[l++] = m[n++], q++, 64 == l)
                for (l = 0, b(f); n + 64 < p;) b(m.slice(n, n + 64)), n += 64, q += 64
    }

    function d() {
        var m = [],
            p = 8 * q;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var n = 63; 56 <= n; n--) f[n] = p & 255, p >>>= 8;
        b(f);
        for (n = p = 0; 5 > n; n++)
            for (var u = 24; 0 <= u; u -= 8) m[p++] = e[n] >> u & 255;
        return m
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ca: function() {
            for (var m = d(), p = "", n = 0; n < m.length; n++) p += "0123456789ABCDEF".charAt(Math.floor(m[n] / 16)) + "0123456789ABCDEF".charAt(m[n] % 16);
            return p
        }
    }
};

function je(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, ke(he(d), a, c || null)].join(" ") : null
}

function ke(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], wa(d, function(h) {
        e.push(h)
    }), le(e.join(" "));
    var f = [],
        g = [];
    wa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    wa(d, function(h) {
        e.push(h)
    });
    a = le(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function le(a) {
    var b = ie();
    b.update(a);
    return b.Ca().toLowerCase()
};
const me = {};

function ne() {
    this.h = document || {
        cookie: ""
    }
}
ne.prototype.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        oa: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
ne.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.dc, g = c.ec || !1, f = c.domain || void 0, e = c.path || void 0, d = c.oa);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
ne.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = pa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
ne.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        oa: 0,
        path: b,
        domain: c
    });
    return d
};
ne.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function oe() {
    return !!me.FPA_SAMESITE_PHASE2_MOD || !1
}

function pe(a, b, c, d) {
    (a = t[a]) || "undefined" === typeof document || (a = (new ne).get(b));
    return a ? je(a, c, d) : null
};
const qe = self;
class re {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function M(a) {
    Va.call(this);
    this.K = 1;
    this.s = [];
    this.v = 0;
    this.h = [];
    this.j = {};
    this.ba = !!a
}
ma(M, Va);
M.prototype.M = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.K;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.K = e + 3;
    d.push(e);
    return e
};
M.prototype.F = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.j[b];
        0 != this.v ? (this.s.push(a), this.h[a + 1] = () => {}) : (c && ya(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
M.prototype.B = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.ba)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                se(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.v++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.v--, 0 < this.s.length && 0 == this.v)
                        for (; c = this.s.pop();) this.F(c)
                }
            }
        return 0 != e
    }
    return !1
};

function se(a, b, c) {
    hb(function() {
        a.apply(b, c)
    })
}
M.prototype.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.F, this), delete this.j[a])
    } else this.h.length = 0, this.j = {}
};
M.prototype.m = function() {
    M.Na.m.call(this);
    this.clear();
    this.s.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N = {};
var te = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
N.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
N.ic = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var ue = {
        za: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Da: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    ve = {
        za: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Da: function(a) {
            return [].concat.apply([], a)
        }
    };
N.Ma = function() {
    te ? (N.va = Uint8Array, N.sa = Uint16Array, N.ta = Int32Array, N.assign(N, ue)) : (N.va = Array, N.sa = Array, N.ta = Array, N.assign(N, ve))
};
N.Ma();
try {
    new Uint8Array(1)
} catch (a) {};

function we(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
we(Array(576));
we(Array(60));
we(Array(512));
we(Array(256));
we(Array(29));
we(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var xe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var ye = class {
    constructor(a) {
        this.name = a
    }
};
var ze = new ye("rawColdConfigGroup");
var Ae = new ye("rawHotConfigGroup");

function Be(a, b) {
    return Kd(a, 1, b)
}
var Ce = class extends L {
    constructor(a) {
        super(a)
    }
};
var De = class extends L {
    constructor(a) {
        super(a)
    }
};
De.A = [1];
var Ee = class extends L {
    constructor(a) {
        super(a)
    }
};
var Fe = class extends L {
    constructor(a) {
        super(a)
    }
};
var Ge = class extends L {
    constructor(a) {
        super(a)
    }
};
Ge.A = [2];
var He = class extends L {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = rd(this, 36);
        a = null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
        return null != a ? a : 0
    }
    setHomeGroupInfo(a) {
        return I(this, Ge, 81, a)
    }
    clearLocationPlayabilityToken() {
        return td(this, 89)
    }
};
He.A = [9, 66, 32, 86, 100, 101];
var Ie = class extends L {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Hd(this, 1)
        }
    },
    Je = [2, 3, 4, 5, 6];
var Ke = class extends L {
    constructor(a) {
        super(a)
    }
};
Ke.A = [15, 26, 28];
var Le = class extends L {
    constructor(a) {
        super(a)
    }
};
Le.A = [5];
var Me = class extends L {
    constructor(a) {
        super(a)
    }
};
var Ne = class extends L {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return K(this, 5, a)
    }
};
Ne.A = [12];
var Oe = class extends L {
    constructor(a) {
        super(a)
    }
    j(a) {
        return I(this, He, 1, a)
    }
};
Oe.A = [12];
var Pe = class extends L {
    constructor(a) {
        super(a)
    }
    getKey() {
        return Hd(this, 1)
    }
};
var Qe = class extends L {
    constructor(a) {
        super(a)
    }
};
Qe.A = [4, 5];
var Re = class extends L {
    constructor(a) {
        super(a)
    }
};
var Se = class extends L {
        constructor(a) {
            super(a)
        }
    },
    Te = [2, 3, 4, 5];
var Ue = class extends L {
    constructor(a) {
        super(a)
    }
};
var Ve = class extends L {
    constructor(a) {
        super(a)
    }
};
var We = class extends L {
    constructor(a) {
        super(a)
    }
};
var Xe = class extends L {
    constructor(a) {
        super(a)
    }
};
Xe.A = [10, 17];
var Ye = class extends L {
    constructor(a) {
        super(a)
    }
};
var H = class extends L {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Yb(a, Ub) : Xb();
            else if (a.constructor !== Yb)
            if (Sb(a)) a = a.length ? new Yb(new Uint8Array(a), Ub) : Xb();
            else throw Error();
        return td(this, 1, a)
    }
};
var Ze = class extends L {
    constructor(a) {
        super(a)
    }
};
var $e = class extends L {
    constructor(a) {
        super(a)
    }
};
var af = class extends L {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return Bd(this, $e, 15)
    }
};
af.A = [4];

function bf(a, b) {
    I(a, H, 1, b)
}
var cf = class extends L {
    constructor(a) {
        super(a)
    }
};

function df(a, b) {
    return I(a, H, 1, b)
}
var ef = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 2, a)
    }
};

function ff(a, b) {
    return I(a, H, 2, b)
}
var gf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
gf.A = [3];
var hf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return ud(this)
    }
};
var jf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return ud(this)
    }
};
var kf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return ud(this)
    }
};
var lf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return ud(this)
    }
};
var mf = class extends L {
    constructor(a) {
        super(a)
    }
};
var nf = class extends L {
    constructor(a) {
        super(a)
    }
};
var O = class extends L {
        constructor(a) {
            super(a, 497)
        }
    },
    of = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486, 491, 495, 496
    ];
var pf = {
    vb: 0,
    bb: 1,
    ib: 2,
    jb: 4,
    pb: 8,
    kb: 16,
    lb: 32,
    ub: 64,
    tb: 128,
    eb: 256,
    gb: 512,
    nb: 1024,
    fb: 2048,
    hb: 4096,
    cb: 8192,
    mb: 16384,
    qb: 32768,
    ob: 65536,
    rb: 131072,
    sb: 262144
};
var qf = class extends L {
    constructor(a) {
        super(a)
    }
};
var rf = class extends L {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return yd(this, 1, Jd, $c(a))
        }
        getPlaylistId() {
            return Id(this, 2)
        }
    },
    Jd = [1, 2];
var sf = class extends L {
    constructor() {
        super()
    }
};
sf.A = [3];
var tf = new ye("recordNotificationInteractionsEndpoint");
var uf = ["notification/convert_endpoint_to_url"],
    vf = ["notification/record_interactions"],
    wf = ["notification_registration/set_registration"];
var xf = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var yf = ["notifications_register", "notifications_check_registration"];
var zf = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Af = null;

function Q(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Bf().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Cf() {
    return Q("IndexedDBCheck", "testing IndexedDB").then(() => Df("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Df(a) {
    const b = new zf("Error accessing DB");
    return Bf().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Bf() {
    return Af ? Promise.resolve(Af) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Af = d, a(Af);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Bf()
        };
        c.onupgradeneeded = Ef
    })
}

function Ef(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Ff = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Gf(a) {
    if (1 === a.length) return a[0];
    var b = Ff.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Ff).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Hf(a) {
    return `/youtubei/v1/${Gf(a)}`
};
var If = class extends L {
    constructor(a) {
        super(a)
    }
};
var Jf = class extends L {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const Kf = t.window;
let Lf, Mf;
const Nf = (null == Kf ? void 0 : null == (Lf = Kf.yt) ? void 0 : Lf.config_) || (null == Kf ? void 0 : null == (Mf = Kf.ytcfg) ? void 0 : Mf.data_) || {};
w("yt.config_", Nf);

function R(...a) {
    a = arguments;
    1 < a.length ? Nf[a[0]] = a[1] : 1 === a.length && Object.assign(Nf, a[0])
}

function S(a, b) {
    return a in Nf ? Nf[a] : b
}

function Of() {
    return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function Pf() {
    const a = Nf.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const Qf = [];

function Rf(a) {
    Qf.forEach(b => b(a))
}

function Sf(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Tf(b)
        }
    } : a
}

function Tf(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b));
    Rf(a)
}

function Uf(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b))
};
const Vf = /^[\w.]*$/,
    Wf = {
        q: !0,
        search_query: !0
    };

function Xf(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 === h.length && h[0] || 2 === h.length) try {
            const k = Yf(h[0] || ""),
                l = Yf(h[1] || "");
            if (k in c) {
                const q = c[k];
                Array.isArray(q) ? za(q, l) : c[k] = [q, l]
            } else c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Xf);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Zf === l ? "unchanged" : l
            }];
            Wf.hasOwnProperty(e) || Uf(d)
        }
    }
    return c
}
const Zf = String(Xf);

function $f(a) {
    "?" === a.charAt(0) && (a = a.substring(1));
    return Xf(a, "&")
}

function ag(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = $f(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Ua(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function bg(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ra)[1] || null,
        d = Sa(a.match(Ra)[3] || null);
    c && d ? (a = a.match(Ra), b = b.match(Ra), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Sa(b.match(Ra)[3] || null) === d && (Number(b.match(Ra)[4] || null) || null) === (Number(a.match(Ra)[4] || null) || null) : !0;
    return a
}

function Yf(a) {
    return a && a.match(Vf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function cg(a, b) {
    "function" === typeof a && (a = Sf(a));
    return window.setTimeout(a, b)
};
var dg = "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    eg = [...dg, "client_dev_set_cookie"];

function T(a) {
    a = fg(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function gg(a, b) {
    a = fg(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function hg() {
    return S("EXPERIMENTS_TOKEN", "")
}

function fg(a) {
    return S("EXPERIMENT_FLAGS", {})[a]
}

function ig() {
    const a = [],
        b = S("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = S("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
[...dg];
let jg = !1;

function kg(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = lg(a, b);
    const d = mg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = q => {
                    q = q || {};
                    k ? b.onSuccess && b.onSuccess.call(e, q, h) : b.onError && b.onError.call(e, q, h);
                    b.onFinish && b.onFinish.call(e, q, h)
                };
            "JSON" === (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, () => {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = cg(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function lg(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = S("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = ag(a, b || {}, !0);
    return a
}

function mg(a, b) {
    const c = S("XSRF_FIELD_NAME"),
        d = S("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = S("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Sa(a.match(Ra)[3] || null) && !b.withCredentials && Sa(a.match(Ra)[3] || null) !== document.location.hostname || "POST" !== b.method || h && "application/x-www-form-urlencoded" !== h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (T("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = $f(e), Da(e, f), e = b.postBodyFormat && "JSON" === b.postBodyFormat ? JSON.stringify(e) : Ua(e));
    f = e || f && !Aa(f);
    !jg && f && "POST" !== b.method && (jg = !0, Tf(Error("AJAX request with postData should use POST")));
    return e
};
const ng = [{
    fa: a => `Cannot read property '${a.key}'`,
    X: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    fa: a => `Cannot call '${a.key}'`,
    X: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    fa: a => `${a.key} is not defined`,
    X: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var pg = {
    H: [],
    G: [{
        callback: og,
        weight: 500
    }]
};

function og(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function qg() {
    if (!rg) {
        var a = rg = new sg;
        a.H.length = 0;
        a.G.length = 0;
        tg(a, pg)
    }
    return rg
}

function tg(a, b) {
    b.H && a.H.push.apply(a.H, b.H);
    b.G && a.G.push.apply(a.G, b.G)
}
var sg = class {
        constructor() {
            this.G = [];
            this.H = []
        }
    },
    rg;
const ug = new M;

function vg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = wg(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = wg(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = wg(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function wg(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function xg(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += yg(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = vg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? yg(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += yg(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = zg(a), d += c[b].length;
    else c[b] = zg(a), d += c[b].length;
    return d
}

function yg(a, b, c, d) {
    c += `.${a}`;
    a = zg(b);
    d[c] = a;
    return c.length + a.length
}

function zg(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function Ag() {
    Bg.h || (Bg.h = new Bg);
    return Bg.h
}

function Cg(a, b) {
    a = {};
    var c = [],
        d = he(String(t.location.href));
    var e = [];
    var f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    oe() && (f = f || t.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            var g = new ne;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            oe() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (g = (f = d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? t.__SAPISID : t.__APISID, g || "undefined" ===
        typeof document || (g = new ne, g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID")), (f = g ? je(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && oe() && ((d = pe("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = pe("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(S("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), T("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in Nf || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in Nf && (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
    return a
}
var Bg = class {
    constructor() {
        this.Oa = !0
    }
};
var Dg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function Eg(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
w("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});

function Fg() {
    if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
    throw new zf("Datasync ID not set", "unknown");
};

function Gg(a, b) {
    return Hg(a, 0, b)
}

function Ig(a) {
    const b = v("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var Jg = class {
    h(a) {
        Hg(a, 1)
    }
};

function Kg() {
    Lg.h || (Lg.h = new Lg);
    return Lg.h
}

function Hg(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = v("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : cg(a, c || 0)
}
var Lg = class extends Jg {
        T(a) {
            if (void 0 === a || !Number.isNaN(Number(a))) {
                var b = v("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = v("yt.scheduler.instance.start");
            a && a()
        }
    },
    Mg = Kg();
const Ng = [];
let Og, Pg = !1;

function Qg(a) {
    Pg || (Og ? Og.handleError(a) : (Ng.push({
        type: "ERROR",
        payload: a
    }), 10 < Ng.length && Ng.shift()))
}

function Rg(a, b) {
    Pg || (Og ? Og.U(a, b) : (Ng.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < Ng.length && Ng.shift()))
};

function Sg(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function Tg(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const Ug = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    Vg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    Wg = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var U = class extends zf {
        constructor(a, b = {}, c = Ug[a], d = Vg[a], e = Wg[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    Xg = class extends U {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, Ug.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, Xg.prototype)
        }
    },
    Yg = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Yg.prototype)
        }
    };
const Zg = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function $g(a, b, c, d) {
    b = Tg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
    if (Eb && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Yg) return new U("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && Zg.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Vb: e.name
    })];
    e.level = "WARNING";
    return e
}

function ah(a, b, c) {
    return new U("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function bh(a) {
    if (!a) throw Error();
    throw a;
}

function ch(a) {
    return a
}
var dh = class {
    constructor(a) {
        this.h = a
    }
};

function eh(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof fh ? gh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function hh(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof fh ? gh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function gh(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof fh ? gh(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var fh = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new fh(new dh((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) fh.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new fh(new dh((b, c) => {
            a instanceof fh ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : ch,
            d = null != b ? b : bh;
        return new fh(new dh((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                eh(this, this, c, e, f)
            }), this.i.push(() => {
                hh(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? eh(this, this, c, e, f) : "REJECTED" === this.state.status && hh(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function ih(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function jh(a) {
    return new Promise((b, c) => {
        ih(a, b, c)
    })
}

function V(a) {
    return new fh(new dh((b, c) => {
        ih(a, b, c)
    }))
};

function kh(a, b) {
    return new fh(new dh((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const lh = window;
var W = lh.ytcsi && lh.ytcsi.now ? lh.ytcsi.now : lh.performance && lh.performance.timing && lh.performance.now && lh.performance.timing.navigationStart ? () => lh.performance.timing.navigationStart + lh.performance.now() : () => (new Date).getTime();

function mh(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            C: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.C ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const q = Math.round(W());
            try {
                var k = a.h.transaction(b, e.mode),
                    l = d;
                const m = new nh(k),
                    p = yield oh(m, l), n = Math.round(W());
                ph(a, q, n, g, void 0, b.join(), e);
                return p
            } catch (m) {
                l = Math.round(W());
                const p = $g(m, a.h.name, b.join(), a.h.version);
                if (p instanceof U && !p.h || g >= f) ph(a, q, l, g, p, b.join(), e), h = p
            }
        }
        return Promise.reject(h)
    })
}

function qh(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new rh(a)
}

function sh(a, b, c, d) {
    return mh(a, [b], {
        mode: "readwrite",
        C: !0
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    })
}

function ph(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && Rg("QUOTA_EXCEEDED", {
        dbName: Tg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), Rg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), th(a, !1, d, f, b, g.tag), Qg(e)) : th(a, !0, d, f, b, g.tag)
}

function th(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    Rg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var uh = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return mh(this, [a], {
            mode: "readwrite",
            C: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return mh(this, [a], {
            mode: "readwrite",
            C: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return mh(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return mh(this, [a], {
            mode: "readwrite",
            C: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return mh(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return mh(this, [a], {
            mode: "readonly",
            C: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function vh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return wh(a).then(d => kh(d, c))
}

function xh(a, b) {
    return vh(a, {
        query: b
    }, c => c.delete().then(() => yh(c))).then(() => {})
}

function zh(a, b, c) {
    const d = [];
    return vh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.cursor.value), yh(e)
    }).then(() => d)
}
var rh = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? xh(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : zh(this, a, b)
    }
    index(a) {
        try {
            return new Ah(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Yg(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function oh(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var nh = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new rh(a), this.j.set(a, b));
        return b
    }
};

function Bh(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return wh(a).then(f => kh(f, c))
}

function Ch(a, b, c) {
    const d = [];
    return Bh(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.cursor.value), yh(e)
    }).then(() => d)
}
var Ah = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Bh(this, {
            query: a
        }, b => b.delete().then(() => yh(b)))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? V(this.h.getAll(a, b)) : Ch(this, a, b)
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function wh(a) {
    return V(a).then(b => b ? new Dh(a, b) : null)
}

function yh(a) {
    a.cursor.continue(void 0);
    return wh(a.request)
}

function Eh(a) {
    a.cursor.advance(5);
    return wh(a.request)
}
var Dh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function Fh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Aa,
            h = c.blocking,
            k = c.Pa,
            l = c.upgrade,
            q = c.closed;
        let m;
        const p = () => {
            m || (m = new uh(f.result, {
                closed: q
            }));
            return m
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && Rg("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: Tg(a)
                });
                const u = p(),
                    z = new nh(f.transaction);
                l && l(u, C => n.oldVersion < C && n.newVersion >= C, z);
                z.done.catch(C => {
                    e(C)
                })
            } catch (u) {
                e(u)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(p())
            });
            n.addEventListener("close", () => {
                Rg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: Tg(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(p())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Gh(a, b, c = {}) {
    return Fh(a, b, c)
}

function Hh(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Aa;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield jh(c)
        } catch (c) {
            throw $g(c, a, "", -1);
        }
    })
};

function Ih(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Jh(a, b) {
    if (!b) throw ah("openWithToken", Tg(a.name));
    return a.open()
}
var Kh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return Gh(a, b, c)
    }
    delete(a = {}) {
        return Hh(this.name, a)
    }
    open() {
        if (!this.j) throw Ih(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Pa: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const q of Object.keys(h.O)) {
                            const {
                                N: m,
                                Zb: p = Number.MAX_VALUE
                            } = h.O[q];
                            !(f.h.version >= m) || f.h.version >= p || f.h.objectStoreNames.contains(q) || l.push(q)
                        }
                        if (0 !== l.length) {
                            const q = Object.keys(e.options.O),
                                m = k.objectStoreNames();
                            if (e.m < gg("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), Qg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: q,
                                foundObjectStores: m
                            })), d();
                            if (e.l < gg("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), Qg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: q,
                                foundObjectStores: m
                            })), d();
                            throw new Xg(m, q);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, Ih(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !T("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw $g(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const Lh = new Kh("YtIdbMeta", {
    O: {
        databases: {
            N: 1
        }
    },
    upgrade(a, b) {
        b(1) && qh(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Mh(a, b) {
    return r(function*() {
        return mh(yield Jh(Lh, b), ["databases"], {
            C: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return V(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function Nh(a, b) {
    return r(function*() {
        if (a) return (yield Jh(Lh, b)).delete("databases", a)
    })
};
let Oh;
const Ph = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function Qh() {
    return r(function*() {
        return !0
    })
}

function Rh() {
    if (void 0 !== Oh) return Oh;
    Pg = !0;
    return Oh = Qh().then(a => {
        Pg = !1;
        return a
    })
}

function Sh() {
    return v("ytglobal.idbToken_") || void 0
}

function Th() {
    const a = Sh();
    return a ? Promise.resolve(a) : Rh().then(b => {
        (b = b ? Ph : void 0) && w("ytglobal.idbToken_", b);
        return b
    })
};
new re;

function Uh(a) {
    try {
        Fg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), Qg(a), a;
    b = Fg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function Vh(a, b, c, d) {
    return r(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield Th();
        if (!e) throw e = ah("openDbImpl", a, b), T("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), Qg(e), e;
        Sg(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : Uh(a);
        try {
            return yield Mh(f, e), yield Gh(f.actualName, b, d)
        } catch (g) {
            try {
                yield Nh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function Wh(a, b, c = {}) {
    return Vh(a, b, !1, c)
}

function Xh(a, b, c = {}) {
    return Vh(a, b, !0, c)
}

function Yh(a, b = {}) {
    return r(function*() {
        const c = yield Th();
        if (c) {
            Sg(a);
            var d = Uh(a);
            yield Hh(d.actualName, b);
            yield Nh(d.actualName, c)
        }
    })
}

function Zh(a, b = {}) {
    return r(function*() {
        const c = yield Th();
        c && (Sg(a), yield Hh(a, b), yield Nh(a, c))
    })
};

function $h(a, b) {
    let c;
    return () => {
        c || (c = new ai(a, b));
        return c
    }
}
var ai = class extends Kh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        Sg(a)
    }
    i(a, b, c = {}) {
        return (this.options.Z ? Xh : Wh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.Z ? Zh : Yh)(this.name, a)
    }
};

function bi(a, b) {
    return $h(a, b)
};
var ci = bi("ytGcfConfig", {
    O: {
        coldConfigStore: {
            N: 1
        },
        hotConfigStore: {
            N: 1
        }
    },
    Z: !1,
    upgrade(a, b) {
        b(1) && (qh(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), qh(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function di(a) {
    return Jh(ci(), a)
}

function ei(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: W()
            },
            e = yield di(c);
        yield e.clear("hotConfigStore");
        return yield sh(e, "hotConfigStore", d)
    })
}

function fi(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: W()
            },
            f = yield di(d);
        yield f.clear("coldConfigStore");
        return yield sh(f, "coldConfigStore", e)
    })
}

function gi(a) {
    return r(function*() {
        let b = void 0;
        yield mh(yield di(a), ["coldConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => Bh(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
}

function hi(a) {
    return r(function*() {
        let b = void 0;
        yield mh(yield di(a), ["hotConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => Bh(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
};
var ii = class extends Va {
    constructor() {
        super();
        this.j = [];
        this.h = [];
        const a = v("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.j = [...a], this.h = a) : (this.h = [], w("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    m() {
        for (const b of this.j) {
            var a = this.h;
            const c = a.indexOf(b);
            0 <= c && a.splice(c, 1)
        }
        this.j.length = 0;
        super.m()
    }
};

function ji(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            c && (a.j = c, w("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            w("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = Sh();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield hi(d)) ? void 0 : e.config
                }
                yield ei(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function ki(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            a.coldHashData = b;
            w("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = Sh();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield gi(d)) ? void 0 : e.config
                }
                c && (yield fi(c, b, c.configData, d))
            }
        }
    })
}
var li = class {
    constructor() {
        this.h = 0;
        this.i = new ii
    }
};

function mi() {
    return "INNERTUBE_API_KEY" in Nf && "INNERTUBE_API_VERSION" in Nf
}

function ni() {
    return {
        innertubeApiKey: S("INNERTUBE_API_KEY"),
        innertubeApiVersion: S("INNERTUBE_API_VERSION"),
        da: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ea: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Fa: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        na: S("INNERTUBE_CONTEXT_HL"),
        ma: S("INNERTUBE_CONTEXT_GL"),
        Ga: S("INNERTUBE_HOST_OVERRIDE") || "",
        Ia: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ha: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function oi(a) {
    const b = {
        client: {
            hl: a.na,
            gl: a.ma,
            clientName: a.Ea,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.da
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = hg();
    "" !== c && (b.client.experimentsToken = c);
    c = ig();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    pi(void 0, b);
    qi(a, void 0, b);
    T("start_client_gcf") && ri(void 0, b);
    S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: S("DELEGATED_SESSION_ID")
    });
    !T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = S("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries($f(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" ===
            e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function pi(a, b) {
    const c = v("yt.embedded_player.embed_url");
    c && (a ? (b = Bd(a, Le, 7) || new Le, J(b, 4, c), I(a, Le, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function qi(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Bd(b, Fe, 62)) ? d : new Fe;
            J(c, 6, a.appInstallData);
            I(b, Fe, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function si(a, b, c = {}) {
    let d = {};
    S("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Mb || S("AUTHORIZATION");
    b || (a ? b = `Bearer ${v("gapi.auth.getToken")().Lb}` : (a = Cg(Ag()), T("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function ri(a, b) {
    if (!li.h) {
        var c = new li;
        li.h = c
    }
    c = li.h;
    var d = W() - c.h;
    if (0 !== c.h && d < gg("send_config_hash_timer")) c = void 0;
    else {
        d = v("yt.gcf.config.coldConfigData");
        var e = v("yt.gcf.config.hotHashData"),
            f = v("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = Bd(a, Fe, 62)) ? g : new Fe;
                J(b, 1, c);
                J(b, 3, d);
                J(b, 5, e);
                I(a, Fe, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};
"undefined" !== typeof TextEncoder && new TextEncoder;

function ti(a) {
    this.version = 1;
    this.args = a
};

function ui() {
    var a = vi;
    this.topic = "screen-created";
    this.h = a
}
ui.prototype.toString = function() {
    return this.topic
};
const wi = v("ytPubsub2Pubsub2Instance") || new M;
M.prototype.subscribe = M.prototype.M;
M.prototype.unsubscribeByKey = M.prototype.F;
M.prototype.publish = M.prototype.B;
M.prototype.clear = M.prototype.clear;
w("ytPubsub2Pubsub2Instance", wi);
const xi = v("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", xi);
const yi = v("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", yi);
const zi = v("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", zi);
w("ytPubsub2Pubsub2SkipSubKey", null);

function Ai(a, b) {
    const c = Bi();
    c && c.publish.call(c, a.toString(), a, b)
}

function Ci(a) {
    var b = Di;
    const c = Bi();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = v("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (xi[d]) try {
                if (f && b instanceof ui && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.qa) {
                            const n = new h;
                            h.qa = n.version
                        }
                        var l = h.qa
                    } catch (n) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var q = l.construct; {
                            var m = k.args;
                            const n = m.length;
                            if (0 < n) {
                                const u = Array(n);
                                for (k = 0; k < n; k++) u[k] = m[k];
                                var p = u
                            } else p = []
                        }
                        f = q.call(l, h, p)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                Tf(n)
            }
        }, zi[b.toString()] ? v("yt.scheduler.instance") ? Mg.h(g) : cg(g, 0) : g())
    });
    xi[d] = !0;
    yi[b.toString()] || (yi[b.toString()] = []);
    yi[b.toString()].push(d);
    return d
}

function Ei() {
    var a = Fi;
    const b = Ci(function(c) {
        a.apply(void 0, arguments);
        Gi(b)
    });
    return b
}

function Gi(a) {
    const b = Bi();
    b && ("number" === typeof a && (a = [a]), wa(a, c => {
        b.unsubscribeByKey(c);
        delete xi[c]
    }))
}

function Bi() {
    return v("ytPubsub2Pubsub2Instance")
};
let Hi = void 0,
    Ii = void 0;
var Ji = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496
};
const Ki = ["client.name", "client.version"];

function Li(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Ki.includes(b.key) : !1);
    return a
};
var Mi = bi("ServiceWorkerLogsDatabase", {
    O: {
        SWHealthLog: {
            N: 1
        }
    },
    Z: !0,
    upgrade: (a, b) => {
        b(1) && qh(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Ni(a, b) {
    return r(function*() {
        var c = yield Jh(Mi(), b), d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Li(e.clientError));
        e.interface = d;
        return sh(c, "SWHealthLog", e)
    })
};
w("ytNetworklessLoggingInitializationOptions", t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Oi(a, b, c, d) {
    !S("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && Uf(new zf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new zf("innertube xhrclient not ready", b, c, d), Tf(a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (k, l) => {
            if (d.onSuccess) d.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (d.onSuccess) d.onSuccess(k)
        },
        onError: (k, l) => {
            if (d.onError) d.onError(l)
        },
        onFetchError: k => {
            if (d.onError) d.onError(k)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Ga;
    f && (e = f);
    var g = a.config_.Ia || !1;
    f = si(g, e, d);
    Object.assign(c.headers, f);
    (f = c.headers.Authorization) && !e && g && (c.headers["x-origin"] = window.location.origin);
    b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
    g = {
        alt: "json"
    };
    let h = a.config_.Ha && f;
    h = h && f.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = ag(`${e}${b}`, g || {}, !0);
    try {
        kg(a,
            c)
    } catch (k) {
        if ("InvalidAccessError" === k.name) Uf(Error("An extension is blocking network request."));
        else throw k;
    }
}
var Pi = class {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : mi() && (this.config_ = ni())
    }
    isReady() {
        !this.config_ && mi() && (this.config_ = ni());
        return !!this.config_
    }
};
let Qi = 0;
w("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++Qi));
w("ytEventsEventsListeners", t.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", t.ytEventsEventsCounter || {
    count: 0
});

function Ri() {
    const a = v("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
t.ytPubsubPubsubInstance || new M;
var Si = Symbol("injectionDeps"),
    Ti = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    Ui = class {
        constructor() {
            this.key = li
        }
    };

function Vi(a) {
    var b = {
        ga: Wi,
        pa: Xi.h
    };
    a.i.set(b.ga, b);
    const c = a.j.get(b.ga);
    c && c.bc(a.resolve(b.ga))
}

function Yi(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.pa) var e = d.pa;
    else if (d.Ra) e = d[Si] ? Zi(a, d[Si], c) : [], e = d.Ra(...e);
    else if (d.Qa) {
        e = d.Qa;
        const f = e[Si] ? Zi(a, e[Si], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.jc || a.h.set(b, e);
    return e
}

function Zi(a, b, c) {
    return b ? b.map(d => d instanceof Ui ? Yi(a, d.key, c, !0) : Yi(a, d, c)) : []
}
var $i = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof Ui ? Yi(this, a.key, [], !0) : Yi(this, a, [])
    }
};
let aj;

function bj() {
    aj || (aj = new $i);
    return aj
};
let cj = window;

function dj() {
    let a, b;
    return "h5vcc" in cj && (null == (a = cj.h5vcc.traceEvent) ? 0 : a.traceBegin) && (null == (b = cj.h5vcc.traceEvent) ? 0 : b.traceEnd) ? 1 : "performance" in cj && cj.performance.mark && cj.performance.measure ? 2 : 0
}

function ej(a) {
    const b = dj();
    switch (b) {
        case 1:
            cj.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            cj.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            Ma(b, "unknown trace type")
    }
}

function fj(a) {
    var b = dj();
    switch (b) {
        case 1:
            cj.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            cj.performance.mark(c);
            cj.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            Ma(b, "unknown trace type")
    }
};
var gj = T("web_enable_lifecycle_monitoring") && 0 !== dj(),
    hj = T("web_enable_lifecycle_monitoring");

function ij(a) {
    let b;
    return null != (b = a.priority) ? b : 0
}

function jj(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => ij(a.h[d]) - ij(a.h[c]));
    for (const c of b) b = a.h[c], void 0 === b.jobId || b.Y || (a.scheduler.T(b.jobId), Hg(b.ea, 10))
}
var kj = class {
    constructor(a) {
        this.scheduler = Kg();
        this.i = new re;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.ea();
                this.h[b].Y = !0;
                this.h.every(e => !0 === e.Y) && this.i.resolve()
            };
            const d = Hg(a, ij(c));
            this.h[b] = Object.assign({}, c, {
                ea: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) void 0 === a.jobId || a.Y || this.scheduler.T(a.jobId), a.Y = !0;
        this.i.resolve()
    }
};

function lj(a, b, c) {
    hj && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function mj(a, b) {
    const c = b.filter(e => 10 === nj(a, e)),
        d = b.filter(e => 10 !== nj(a, e));
    return a.l.hc ? (...e) => r(function*() {
        yield oj(c, ...e);
        pj(a, d, ...e)
    }) : (...e) => {
        qj(c, ...e);
        pj(a, d, ...e)
    }
}

function nj(a, b) {
    let c, d;
    return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0
}

function oj(a, ...b) {
    return r(function*() {
        Kg();
        for (const c of a) {
            let d;
            Ig(() => {
                rj(c.name);
                const e = c.callback(...b);
                "function" === typeof(null == e ? void 0 : e.then) ? d = e.then(() => {
                    sj(c.name)
                }): sj(c.name)
            });
            d && (yield d)
        }
    })
}

function pj(a, b, ...c) {
    b = b.map(d => ({
        ea: () => {
            rj(d.name);
            d.callback(...c);
            sj(d.name)
        },
        priority: nj(a, d)
    }));
    b.length && (a.i = new kj(b))
}

function qj(a, ...b) {
    Kg();
    for (const c of a) Ig(() => {
        rj(c.name);
        c.callback(...b);
        sj(c.name)
    })
}

function rj(a) {
    gj && a && ej(a)
}

function sj(a) {
    gj && a && fj(a)
}
var tj = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        gj && ej(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        gj && fj(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.S === a) : d.from === this.state && d.S === a);
        if (c) {
            this.i && (jj(this.i), this.i = void 0);
            lj(this, a, b);
            this.state = a;
            gj && ej(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(mj(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function uj() {
    vj || (vj = new wj);
    return vj
}
var wj = class extends tj {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    S: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    S: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    S: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    S: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = Gg(() => {
                "application_navigating" === this.currentState && this.transition("none")
            }, 5E3);
            a(null == b ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (Mg.T(this.h), this.h = null);
            a(null == b ? void 0 : b.event)
        }
    },
    vj;
let xj = [];
w("yt.logging.transport.getScrapedGelPayloads", function() {
    return xj
});

function yj(a, b) {
    const c = zj(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && zj(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (Aj(b.auth, h[0])) {
            var f = b.isJspb;
            Aj(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && Aj(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), Aj(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Aj(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var Bj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = zj(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = yj(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = yj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = yj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
Bj.prototype.getSequenceCount = Bj.prototype.getSequenceCount;
Bj.prototype.extractMatchingEntries = Bj.prototype.extractMatchingEntries;
Bj.prototype.smartExtractMatchingEntries = Bj.prototype.smartExtractMatchingEntries;
Bj.prototype.storePayload = Bj.prototype.storePayload;

function zj(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};

function Cj(a, b) {
    if (a) return a[b.name]
};
/*

 SPDX-License-Identifier: Apache-2.0
*/
const Dj = gg("initial_gel_batch_timeout", 2E3),
    Ej = gg("gel_queue_timeout_max_ms", 6E4),
    Fj = Math.pow(2, 16) - 1,
    Gj = gg("gel_min_batch_size", 5);
let Hj = void 0;
class Ij {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const Jj = new Ij,
    Kj = new Ij,
    Lj = new Ij,
    Mj = new Ij;
let Nj, Oj = !0,
    Pj = 1;
const Qj = new Map,
    Rj = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    Sj = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Tj = {};

function Uj() {
    let a = v("yt.logging.ims");
    a || (a = new Bj, w("yt.logging.ims", a));
    return a
}

function Vj(a, b) {
    if ("log_event" === a.endpoint) {
        Wj();
        var c = Xj(a),
            d = Yj(a.payload) || "",
            e = Zj(d),
            f = 200;
        if (e) {
            if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch")) return;
            f = ak(e.tier);
            if (400 === f) {
                bk(a, b);
                return
            }
        }
        Tj[c] = !0;
        e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        Uj().storePayload(e, a.payload);
        ck(b, c, !1, e, dk(d))
    }
}

function ek(a, b, c) {
    if ("log_event" === b.endpoint) {
        Wj();
        var d = Xj(b, !0),
            e = Zj(a),
            f = 200;
        if (e) {
            if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch")) return;
            f = ak(e.tier);
            if (400 === f) {
                fk(a, b, c);
                return
            }
        }
        Tj[d] = !0;
        e = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: f
        };
        Uj().storePayload(e, b.payload.toJSON());
        ck(c, d, !0, e, dk(a))
    }
}

function ck(a, b, c = !1, d, e = !1) {
    a && (Hj = new a);
    a = gg("tvhtml5_logging_max_batch_ads_fork") || gg("web_logging_max_batch") || 100;
    const f = W(),
        g = gk(c, d.tier),
        h = g.l;
    e && (g.j = !0);
    e = 0;
    d && (e = Uj().getSequenceCount(d));
    const k = () => {
        hk({
            writeThenSend: !0
        }, T("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    1E3 <= e ? k() : e >= a ? Nj || (Nj = ik(() => {
        k();
        Nj = void 0
    }, 0)) : 10 <= f - h && (jk(c, d.tier), g.l = f)
}

function bk(a, b) {
    if ("log_event" === a.endpoint) {
        Wj();
        var c = Xj(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = Yj(a.payload) || "";
        b && (Hj = new b);
        return new y((f, g) => {
            Hj && Hj.isReady() ? kk(d, Hj, f, g, {
                bypassNetworkless: !0
            }, !0, dk(e)) : f()
        })
    }
}

function fk(a, b, c) {
    if ("log_event" === b.endpoint) {
        Wj();
        var d = Xj(b, !0),
            e = new Map;
        e.set(d, [b.payload.toJSON()]);
        c && (Hj = new c);
        return new y(f => {
            Hj && Hj.isReady() ? lk(e, Hj, f, {
                bypassNetworkless: !0
            }, !0, dk(a)) : f()
        })
    }
}

function Xj(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new rf;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && yd(d, 2, Jd, $c(c.playlistId));
            Sj[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Rj[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function hk(a = {}, b, c = !1, d) {
    new y((e, f) => {
        const g = gk(c, d),
            h = g.j;
        g.j = !1;
        mk(g.i);
        mk(g.h);
        g.h = 0;
        Hj && Hj.isReady() ? void 0 === d && T("enable_web_tiered_gel") ? nk(e, f, a, b, c, 300, h) : nk(e, f, a, b, c, d, h) : (jk(c, d), e())
    })
}

function nk(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var h = Hj,
        k = new Map;
    const l = new Map,
        q = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = T("enable_web_tiered_gel") ? Uj().smartExtractMatchingEntries({
        keys: [q, m],
        sizeLimit: 1E3
    }) : Uj().extractMatchingEntries(m), k.set(d, b), lk(k, h, a, c, !1, g)) : (k = T("enable_web_tiered_gel") ? Uj().smartExtractMatchingEntries({
        keys: [q, m],
        sizeLimit: 1E3
    }) : Uj().extractMatchingEntries(m), l.set(d, k), kk(l, h, a, b, c, !1, g));
    else if (e) {
        for (const p of Object.keys(Tj)) b = T("enable_web_tiered_gel") ?
            Uj().smartExtractMatchingEntries({
                keys: [q, m],
                sizeLimit: 1E3
            }) : Uj().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: p
            }), 0 < b.length && k.set(p, b), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete Tj[p];
        lk(k, h, a, c, !1, g)
    } else {
        for (const p of Object.keys(Tj)) d = T("enable_web_tiered_gel") ? Uj().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: p,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: p
            }],
            sizeLimit: 1E3
        }) : Uj().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: p
        }), 0 < d.length && l.set(p,
            d), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete Tj[p];
        kk(l, h, a, b, c, !1, g)
    }
}

function jk(a = !1, b = 200) {
    const c = () => {
            hk({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = gk(a, b);
    var e = d === Mj || d === Lj ? 5E3 : Ej;
    T("web_gel_timeout_cap") && !d.h && (e = ik(() => {
        c()
    }, e), d.h = e);
    mk(d.i);
    e = S("LOGGING_BATCH_TIMEOUT", gg("web_gel_debounce_ms", 1E4));
    T("shorten_initial_gel_batch_timeout") && Oj && (e = Dj);
    e = ik(() => {
        0 < gg("gel_min_batch_size") ? Uj().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= Gj && c() : c()
    }, e);
    d.i = e
}

function kk(a, b, c, d, e = {}, f, g) {
    const h = Math.round(W());
    let k = a.size;
    const l = ok(g);
    for (const [q, m] of a) {
        a = q;
        g = m;
        const p = Ba({
            context: oi(b.config_ || ni())
        });
        if (!ia(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        p.events = g;
        (g = Rj[a]) && pk(p, a, g);
        delete Rj[a];
        const n = "visitorOnlyApprovedKey" === a;
        qk(p, h, n);
        rk(e);
        const u = P => {
            T("start_client_gcf") && Mg.h(() => r(function*() {
                yield sk(P)
            }));
            k--;
            k || c()
        };
        let z = 0;
        const C = () => {
            z++;
            if (e.bypassNetworkless && 1 === z) try {
                Oi(b, l, p, tk({
                    writeThenSend: !0
                }, n, u, C, f)), Oj = !1
            } catch (P) {
                Tf(P), d()
            }
            k--;
            k || c()
        };
        try {
            Oi(b, l, p, tk(e, n, u, C, f)), Oj = !1
        } catch (P) {
            Tf(P), d()
        }
    }
}

function lk(a, b, c, d = {}, e, f) {
    const g = Math.round(W()),
        h = {
            value: a.size
        };
    var k = new Map([...a]);
    for (const [P] of k) {
        var l = P,
            q = a.get(l);
        k = new sf;
        var m = b.config_ || ni(),
            p = new Oe,
            n = new He;
        J(n, 1, m.na);
        J(n, 2, m.ma);
        K(n, 16, m.Fa);
        J(n, 17, m.innertubeContextClientVersion);
        if (m.da) {
            var u = m.da,
                z = new Fe;
            u.coldConfigData && J(z, 1, u.coldConfigData);
            u.appInstallData && J(z, 6, u.appInstallData);
            u.coldHashData && J(z, 3, u.coldHashData);
            u.hotHashData && J(z, 5, u.hotHashData);
            I(n, Fe, 62, z)
        }
        if ((u = t.devicePixelRatio) && 1 != u) {
            if (null != u && "number" !==
                typeof u) throw Error(`Value of float/double field must be a number, found ${typeof u}: ${u}`);
            td(n, 65, u)
        }
        u = hg();
        "" !== u && J(n, 54, u);
        u = ig();
        if (0 < u.length) {
            z = new Ke;
            for (let G = 0; G < u.length; G++) {
                const Z = new Ie;
                J(Z, 1, u[G].key);
                yd(Z, 2, Je, $c(u[G].value));
                Fd(z, 15, Ie, Z)
            }
            I(p, Ke, 5, z)
        }
        pi(p);
        qi(m, n);
        T("start_client_gcf") && ri(n);
        S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (m = new Ne, J(m, 3, S("DELEGATED_SESSION_ID")));
        !T("fill_delegate_context_in_gel_killswitch") && (u = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
            (z = Bd(p, Ne, 3) || new Ne, m = p, u = J(z, 18, u), I(m, Ne, 3, u));
        m = n;
        u = S("DEVICE", "");
        for (const [G, Z] of Object.entries($f(u))) u = G, z = Z, "cbrand" === u ? J(m, 12, z) : "cmodel" === u ? J(m, 13, z) : "cbr" === u ? J(m, 87, z) : "cbrver" === u ? J(m, 88, z) : "cos" === u ? J(m, 18, z) : "cosver" === u ? J(m, 19, z) : "cplatform" === u && K(m, 42, Eg(z));
        p.j(n);
        I(k, Oe, 1, p);
        if (n = Sj[l]) a: {
            if (Id(n, 1)) p = 1;
            else if (n.getPlaylistId()) p = 2;
            else break a;I(k, rf, 4, n);n = Bd(k, Oe, 1) || new Oe;m = Bd(n, Ne, 3) || new Ne;u = new Me;J(u, 2, l);K(u, 1, p);Fd(m, 12, Me, u);I(n, Ne, 3, m)
        }
        delete Sj[l];
        l = "visitorOnlyApprovedKey" ===
            l;
        uk() || Ld(k, 2, g);
        !l && (p = S("EVENT_ID")) && (n = vk(), m = new qf, J(m, 1, p), Ld(m, 2, n), I(k, qf, 5, m));
        rk(d);
        if (T("jspb_serialize_with_worker")) {
            if (!Ii)
                if (p = S("WORKER_SERIALIZATION_URL")) {
                    if (p = p.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) {
                        if (void 0 === qa)
                            if (n = null, (m = t.trustedTypes) && m.createPolicy) {
                                try {
                                    n = m.createPolicy("goog#html", {
                                        createHTML: na,
                                        createScript: na,
                                        createScriptURL: na
                                    })
                                } catch (G) {
                                    t.console && t.console.error(G.message)
                                }
                                qa = n
                            } else qa = n;
                        p = (n = qa) ? n.createScriptURL(p) : p;
                        p = new ua(p, va)
                    } else p = null;
                    Ii = p
                } else Ii = null;
            p = Ii || void 0;
            Hi || void 0 === p || (Hi = new Worker(p instanceof ua && p.constructor === ua ? p.h : "type_error:TrustedResourceUrl", void 0));
            if ((p = Hi) && d.writeThenSend) {
                Qj.set(Pj, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: e,
                    useVSSEndpoint: f,
                    dangerousLogToVisitorSession: l,
                    requestsOutstanding: h
                });
                p.postMessage({
                    op: "gelBatchToSerialize",
                    batchRequest: k.toJSON(),
                    clientEvents: q,
                    key: Pj
                });
                Pj++;
                break
            }
        }
        if (q) {
            p = [];
            for (n = 0; n < q.length; n++) try {
                p.push(new O(q[n]))
            } catch (G) {
                Tf(new zf("Transport failed to deserialize " +
                    String(q[n])))
            }
            q = p
        } else q = [];
        for (const G of q) Fd(k, 3, O, G);
        q = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        a: {
            Jc = !0;
            try {
                var C = JSON.stringify(k.toJSON(), hd);
                break a
            } finally {
                Jc = !1
            }
            C = void 0
        }
        k = C;
        q.ticks.geljspc = W();
        T("log_jspb_serialize_latency") && .001 > Math.random() && Ai("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            kc: q
        });
        wk(k, b, c, d, e, f, l, h)
    }
}

function wk(a, b, c, d = {}, e, f, g, h = {
    value: 0
}) {
    f = ok(f);
    d = tk(d, g, k => {
        T("start_client_gcf") && Mg.h(() => r(function*() {
            yield sk(k)
        }));
        h.value--;
        h.value || c()
    }, () => {
        h.value--;
        h.value || c()
    }, e);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Oi(b, f, "", d);
    Oj = !1
}

function rk(a) {
    T("always_send_and_write") && (a.writeThenSend = !1)
}

function tk(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        Ob: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: T("compress_gel") || T("compress_gel_lr")
    };
    uk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}

function qk(a, b, c) {
    uk() || (a.requestTimeMs = String(b));
    T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = S("EVENT_ID")) && (c = vk(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function vk() {
    let a = S("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Fj / 2));
    a++;
    a > Fj && (a = 1);
    R("BATCH_CLIENT_COUNTER", a);
    return a
}

function pk(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Wj() {
    var a;
    (a = v("yt.logging.transport.enableScrapingForTest")) || (a = fg("il_payload_scraping"), a = "enable_il_payload_scraping" !== (void 0 !== a ? String(a) : ""));
    a || (xj = [], w("yt.logging.transport.enableScrapingForTest", !0), w("yt.logging.transport.scrapedPayloadsForTesting", xj), w("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
        w("yt.logging.transport.scrapeClientEvent", !0))
}

function uk() {
    return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header")
}

function ik(a, b) {
    return !1 === T("embeds_transport_use_scheduler") ? cg(a, b) : T("logging_avoid_blocking_during_navigation") || T("lr_logging_avoid_blocking_during_navigation") ? Gg(() => {
        "none" === uj().currentState ? a() : uj().install({
            none: {
                callback: a
            }
        })
    }, b) : Gg(a, b)
}

function mk(a) {
    T("transport_use_scheduler") ? Mg.T(a) : window.clearTimeout(a)
}

function sk(a) {
    return r(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = Cj(c, Ae);
        const d = null == c ? void 0 : c.hotHashData,
            e = Cj(c, ze);
        c = null == c ? void 0 : c.coldHashData;
        const f = bj().resolve(new Ui);
        f && (d && (b ? yield ji(f, d, b): yield ji(f, d)), c && (e ? yield ki(f, c, e): yield ki(f, c)))
    })
}

function gk(a, b = 200) {
    return a ? 300 === b ? Mj : Kj : 300 === b ? Lj : Jj
}

function Zj(a) {
    if (T("enable_web_tiered_gel")) {
        a = Ji[a || ""];
        var b, c;
        if (null == bj().resolve(new Ui)) var d = void 0;
        else {
            var e = null != (d = v("yt.gcf.config.hotConfigGroup")) ? d : S("RAW_HOT_CONFIG_GROUP");
            d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return b[c]
    }
}

function Yj(a) {
    a = Object.keys(a);
    for (const b of a)
        if (Ji[b]) return b
}

function ak(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
}

function dk(a) {
    return "gelDebuggingEvent" === a
}

function ok(a = !1) {
    return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const xk = t.ytLoggingGelSequenceIdObj_ || {};

function yk(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = Ri();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !T("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
        index: zk(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete xk[d.sequenceGroup]);
    (d.sendIsolatedPayload ? bk : Vj)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function Ak(a = !1) {
    hk(void 0, void 0, a)
}

function zk(a) {
    xk[a] = a in xk ? xk[a] + 1 : 0;
    return xk[a]
};
let Bk = [];

function X(a, b, c = {}) {
    let d = Pi;
    S("ytLoggingEventsDefaultDisabled", !1) && Pi === Pi && (d = null);
    T("web_all_payloads_via_jspb") && !c.timestamp && (c.lact = Ri(), c.timestamp = W());
    yk(a, b, d, c)
};
const Ck = t.ytLoggingGelSequenceIdObj_ || {};

function Dk(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || W());
    Ld(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    e = new nf;
    if (d.lact) Ld(e, 1, isFinite(d.lact) ? d.lact : -1);
    else if (d.timestamp) Ld(e, 1, -1);
    else {
        var f = Ri();
        Ld(e, 1, isFinite(f) ? f : -1)
    }
    if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
        f = d.sequenceGroup;
        const g = zk(f),
            h = new mf;
        Ld(h, 2, g);
        J(h, 1, f);
        I(e, mf, 3, h);
        d.endOfSequence && delete Ck[d.sequenceGroup]
    }
    I(b, nf, 33, e);
    (d.sendIsolatedPayload ? fk : ek)(a, {
        endpoint: "log_event",
        payload: b,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
};

function Ek(a, b, c = {}) {
    let d = !1;
    S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    Dk(a, b, d ? null : Pi, c)
};

function Fk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Ed(d, kf, 72, of , a);
    c ? Dk("visualElementShown", d, c, b) : Ek("visualElementShown", d, b)
}

function Gk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Ed(d, jf, 73, of , a);
    c ? Dk("visualElementHidden", d, c, b) : Ek("visualElementHidden", d, b)
}

function Hk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Ed(d, hf, 78, of , a);
    c ? Dk("visualElementGestured", d, c, b) : Ek("visualElementGestured", d, b)
}

function Ik(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Ed(d, lf, 208, of , a);
    c ? Dk("visualElementStateChanged", d, c, b) : Ek("visualElementStateChanged", d, b)
}

function Jk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Ed(d, ef, 156, of , a);
    c ? Dk("screenCreated", d, c, b) : Ek("screenCreated", d, b)
}

function Kk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Ed(d, gf, 215, of , a);
    c ? Dk("visualElementAttached", d, c, b) : Ek("visualElementAttached", d, b)
};
var Lk = new Set,
    Mk = 0,
    Nk = 0,
    Ok = 0,
    Pk = [];
const Qk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Rk(a) {
    Sk(a)
}

function Tk(a) {
    Sk(a, "WARNING")
}

function Sk(a, b = "ERROR") {
    var c = {};
    c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Uk(a, c, b)
}

function Uk(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (T("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Mk)) {
            d = Pk;
            var e = Na(a);
            const m = e.message || "Unknown Error",
                p = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${p}: ${m}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let n = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(n = xg(a.args[h], `params.${h}`, b, n), 500 <= n); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const u = a.params;
                if ("object" === typeof a.params)
                    for (h in u) {
                        if (!u[h]) continue;
                        const z = `params.${h}`,
                            C = zg(u[h]);
                        b[z] = C;
                        n +=
                            z.length + C.length;
                        if (500 < n) break
                    } else b.params = zg(u)
            }
            if (d.length)
                for (h = 0; h < d.length && !(n = xg(d[h], `params.context.${h}`, b, n), 500 <= n); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: m,
                name: p,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = qg();
                for (k of a.H)
                    if (b.message && b.message.match(k.Ja)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.G)
                    if (l.callback(b)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var q of ng)
                if (q.X[k.name]) {
                    l = q.X[k.name];
                    for (const u of l)
                        if (l = k.message.match(u.u)) {
                            k.params["params.error.original"] = l[0];
                            a = u.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = q.fa(b);
                            break
                        }
                }
            k.params || (k.params = {});
            q = qg();
            k.params["params.errorServiceSignature"] = `msg=${q.H.length}&cb=${q.G.length}`;
            k.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            ta("sample").constructor !== ra && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || Lk.has(k.message) || Vk(k, c)
        }
    }
}

function Vk(a, b = "ERROR") {
    if ("ERROR" === b) {
        ug.B("handleError", a);
        if (T("record_app_crashed_web") && 0 === Ok && 1 === a.sampleWeight)
            if (Ok++, T("errors_via_jspb")) {
                var c = new Ye;
                c = K(c, 1, 1);
                if (!T("report_client_error_with_app_crash_ks")) {
                    var d = new Xe;
                    var e = new We;
                    var f = new Ve;
                    var g = new Ue;
                    g = J(g, 1, a.message);
                    f = I(f, Ue, 3, g);
                    e = I(e, Ve, 5, f);
                    d = I(d, We, 9, e);
                    I(c, Xe, 4, d)
                }
                d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
                Ed(d, Ye, 20, of , c);
                Ek("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, T("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), X("appCrashed", c);
        Nk++
    } else "WARNING" === b && ug.B("handleWarning", a);
    a: {
        if (T("errors_via_jspb")) {
            if (Wk()) var h = void 0;
            else {
                c = new Re;
                J(c, 1, a.stack);
                a.fileName && J(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (Kd(c, 2, Number(k[0])), Kd(c, 3, Number(k[1]))) : Kd(c, 2, Number(k[0])));
                k = new Ue;
                J(k, 1,
                    a.message);
                J(k, 3, a.name);
                Kd(k, 6, a.sampleWeight);
                "ERROR" === b ? K(k, 2, 2) : "WARNING" === b ? K(k, 2, 1) : K(k, 2, 0);
                var l = new Se;
                td(l, 1, !0);
                Ed(l, Re, 3, Te, c);
                c = new Qe;
                J(c, 3, window.location.href);
                d = S("FEXP_EXPERIMENTS", []);
                for (f = 0; f < d.length; f++) {
                    g = c.o;
                    e = d[f];
                    var q = D(g);
                    Nc(q);
                    g = wd(g, q, 5, 2);
                    q = B(g);
                    e = Yc(e, !!(4 & q) && !!(4096 & q));
                    g.push(e)
                }
                d = Of();
                if (!Pf() && d)
                    for (var m of Object.keys(d)) e = new Pe, J(e, 1, m), J(e, 2, String(d[m])), Fd(c, 4, Pe, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new Pe, J(d, 1, `client.${h}`), J(d, 2, String(m[h])),
                        Fd(c, 4, Pe, d);
                m = S("SERVER_NAME");
                h = S("SERVER_VERSION");
                m && h && (d = new Pe, J(d, 1, "server.name"), J(d, 2, m), Fd(c, 4, Pe, d), m = new Pe, J(m, 1, "server.version"), J(m, 2, h), Fd(c, 4, Pe, m));
                h = new Ve;
                I(h, Qe, 1, c);
                I(h, Se, 2, l);
                I(h, Ue, 3, k)
            }
            if (!h) break a;
            m = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
            Ed(m, Ve, 163, of , h);
            Ek("clientError", m)
        } else {
            h = {};
            if (Wk()) h = void 0;
            else {
                c = {
                    stackTrace: a.stack
                };
                a.fileName && (c.filename = a.fileName);
                m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== m.length && (1 !== m.length || isNaN(Number(m[0])) ?
                    2 !== m.length || isNaN(Number(m[0])) || isNaN(Number(m[1])) || (c.lineNumber = Number(m[0]), c.columnNumber = Number(m[1])) : c.lineNumber = Number(m[0]));
                m = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? m.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
                c = {
                    isObfuscated: !0,
                    browserStackInfo: c
                };
                h.pageUrl = window.location.href;
                h.kvPairs = [];
                S("FEXP_EXPERIMENTS") && (h.experimentIds = S("FEXP_EXPERIMENTS"));
                d = Of();
                if (!Pf() && d)
                    for (l of Object.keys(d)) h.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) h.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = S("SERVER_NAME");
                l = S("SERVER_VERSION");
                k && l && (h.kvPairs.push({
                    key: "server.name",
                    value: k
                }), h.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: h,
                    stackTrace: c,
                    logMessage: m
                }
            }
            if (!h) break a;
            X("clientError", h)
        }
        if ("ERROR" === b || T("errors_flush_gel_always_killswitch")) b: {
            if (T("web_fp_via_jspb")) {
                b = Bk;
                Bk = [];
                if (b)
                    for (const p of b) yk(p.P, p.payload, Pi, p.options);
                Ak(!0);
                if (!T("web_fp_via_jspb_and_json")) break b
            }
            Ak()
        }
    }
    try {
        Lk.add(a.message)
    } catch (p) {}
    Mk++
}

function Wk() {
    for (const a of Qk) {
        const b = Ga();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function Xk(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function Yk(a) {
    return r(function*() {
        var b = yield t.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if ("yt.sw.adr" === b[c][0]) {
                    b = new Jf(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function Zk(a = !1) {
    const b = $k.h;
    return r(function*() {
        if (a || !b.h) b.h = Yk(b).then(b.j).catch(c => {
            delete b.h;
            Sk(c)
        });
        return b.h
    })
}
var $k = class {
    constructor() {
        this.i = al("/sw.js_data")
    }
    j(a) {
        const b = Bd(a, If, 2);
        if (b) {
            var c = Hd(b, 5);
            c && (t.__SAPISID = c);
            null != Gd(b, 10) ? R("EOM_VISITOR_DATA", Hd(b, 10)) : null != Gd(b, 7) && R("VISITOR_DATA", Hd(b, 7));
            if (null != Xc(rd(b, 4))) {
                c = String;
                var d = Xc(rd(b, 4));
                R("SESSION_INDEX", c(null != d ? d : 0))
            }
            null != Gd(b, 8) && R("DELEGATED_SESSION_ID", Hd(b, 8));
            null != Gd(b, 11) && R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Hd(b, 11))
        }
        return a
    }
};

function bl(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var cl = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.I.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            bl(this, a)
        }
    }
};
let dl = Date.now().toString();

function el() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (dl)
        for (b = 1, c = 0; c < dl.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ dl.charCodeAt(c), b++;
    return a
}

function fl() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return el()
};
let gl = t.ytLoggingDocDocumentNonce_;
if (!gl) {
    const a = fl(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    gl = b.join("")
}
var hl = gl;
var il = {
    Va: 0,
    Sa: 1,
    Ua: 2,
    Ab: 3,
    Wa: 4,
    Kb: 5,
    Bb: 6,
    Hb: 7,
    Fb: 8,
    Gb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let jl = 1;

function kl(a) {
    return new ll({
        trackingParams: a
    })
}

function ml(a) {
    const b = jl++;
    return new ll({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var ll = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new H;
        void 0 !== this.h.trackingParams ? a.setTrackingParams(this.h.trackingParams) : (void 0 !== this.h.veType && Kd(a, 2, this.h.veType), void 0 !== this.h.veCounter && Kd(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && Kd(a, 3, this.h.elementIndex), this.h.isCounterfactual && td(a, 5, !0));
        if (void 0 !== this.h.dataElement) {
            var b = this.h.dataElement.getAsJspb();
            I(a, H, 7, b)
        }
        void 0 !== this.h.youtubeData && I(a, Ee, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams &&
            !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function nl(a = 0) {
    return S("client-screen-nonce-store", {})[a]
}

function ol(a, b = 0) {
    let c = S("client-screen-nonce-store");
    c || (c = {}, R("client-screen-nonce-store", c));
    c[b] = a
}

function pl(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function ql(a = 0) {
    return S(pl(a))
}

function rl(a = 0) {
    return (a = ql(a)) ? new ll({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function sl() {
    let a = S("csn-to-ctt-auth-info");
    a || (a = {}, R("csn-to-ctt-auth-info", a));
    return a
}

function tl() {
    return Object.values(S("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function ul(a = 0) {
    a = nl(a);
    if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function vl(a) {
    for (const b of Object.values(il))
        if (ul(b) === a) return !0;
    return !1
}

function wl(a, b, c) {
    const d = sl();
    (c = ul(c)) && delete d[c];
    b && (d[a] = b)
}

function xl(a) {
    return sl()[a]
}

function yl(a, b, c = 0, d) {
    if (a !== nl(c) || b !== S(pl(c)))
        if (wl(a, d, c), ol(a, c), R(pl(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (T("web_time_via_jspb")) {
                            const e = new Ze;
                            J(e, 1, hl);
                            J(e, 2, a);
                            const f = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
                            Ed(f, Ze, 111, of , e);
                            Ek("foregroundHeartbeatScreenAssociated", f)
                        } else X("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: hl,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function zl() {
    var a = S("INNERTUBE_CONTEXT");
    if (!a) return Sk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = Ba(a);
    T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = hg();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    cl.h || (cl.h = new cl);
    b = cl.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Al(a) {
    var b = a;
    if (a = S("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ra);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};

function Bl(a) {
    const b = {
        "Content-Type": "application/json"
    };
    S("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA") : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
    S("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = S("DEBUG_SETTINGS_METADATA"));
    "cors" !== a && ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a =
        S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = S("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
};
var Cl = class {},
    Dl = class extends Cl {};
const El = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends Dl {})
};

function Fl(a = !0) {
    a = a ? fl() : el();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
class vi extends ti {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Di = new ui,
    Gl = [];
let Il = Hl,
    Jl = 0;
const Kl = new Map,
    Ll = new Map,
    Ml = new Map;

function Nl(a, b, c, d, e, f, g, h) {
    const k = Il(),
        l = new ll({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = Ol({}, k);
    e && (f.cttAuthInfo = e);
    var q = () => {
        Tk(new zf("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (T("il_via_jspb")) {
        e = df((new ef).h(k), l.getAsJspb());
        c && c.visualElement ? (q = new cf, c.clientScreenNonce && J(q, 2, c.clientScreenNonce), bf(q, c.visualElement.getAsJspb()), g && K(q, 4, pf[g]), I(e, cf, 5, q)) : c && q();
        d && J(e, 3, d);
        if (T("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new De;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var m of h) m.screenVeType && (h = Be(new Ce, m.screenVeType), Fd(c, 1, Ce, h));
            I(e, De, 7, c)
        }
        Jk(e, f, a)
    } else m = {
            csn: k,
            pageVe: l.getAsJson()
        }, T("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (m.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (m.implicitGesture.gestureType = g)) : c && q(), d && (m.cloneCsn = d), a ? yk("screenCreated", m, a, f) : X("screenCreated", m, f);
    Ai(Di, new vi(k));
    Kl.clear();
    Ll.clear();
    Ml.clear();
    return k
}

function Pl(a, b, c, d, e = !1) {
    Ql(a, b, c, [d], e)
}

function Ql(a, b, c, d, e = !1) {
    if (!T("do_not_send_empty_attach_payloads") || d && !(1 > d.length)) {
        var f = Ol({
            cttAuthInfo: xl(b) || void 0
        }, b);
        for (const h of d) {
            var g = h.getAsJson();
            (Aa(g) || !g.trackingParams && !g.veType) && Tk(Error("Child VE logged with no data"));
            if (T("no_client_ve_attach_unless_shown")) {
                const k = Rl(h, b);
                if (g.veType && !Ll.has(k) && !Ml.has(k) && !e) {
                    if (!T("il_attach_cache_limit") || 1E3 > Kl.size) {
                        Kl.set(k, [a, b, c, h]);
                        return
                    }
                    T("il_attach_cache_limit") && 1E3 < Kl.size && Tk(new zf("IL Attach cache exceeded limit"))
                }
                g =
                    Rl(c, b);
                Kl.has(g) ? Sl(c, b) : Ml.set(g, !0)
            }
        }
        d = d.filter(h => {
            h.csn !== b ? (h.csn = b, h = !0) : h = !1;
            return h
        });
        if (T("il_via_jspb")) {
            const h = ff((new gf).h(b), c.getAsJspb());
            xa(d, k => {
                k = k.getAsJspb();
                Fd(h, 3, H, k)
            });
            "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, h) : Kk(h, f, a)
        } else c = {
            csn: b,
            parentVe: c.getAsJson(),
            childVes: xa(d, h => h.getAsJson())
        }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? yk("visualElementAttached", c, a, f) : X("visualElementAttached", c, f)
    }
}

function Tl(a, b, c, d, e, f) {
    Ul(a, b, c, e, f)
}

function Ul(a, b, c, d, e) {
    Vl(c, b);
    const f = Ol({
        cttAuthInfo: xl(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new kf).h(b), c = c.getAsJspb(), c = I(d, H, 2, c), c = K(c, 4, 1), e && I(c, af, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, c) : Fk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? yk("visualElementShown", e, a, f) : X("visualElementShown", e, f))
}

function Wl(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = Ol({
        cttAuthInfo: xl(b) || void 0,
        endOfSequence: d
    }, b);
    T("il_via_jspb") ? (e = (new jf).h(b), c = c.getAsJspb(), c = I(e, H, 2, c), K(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, c) : Gk(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? yk("visualElementHidden", d, a, f) : X("visualElementHidden", d, f))
}

function Xl(a, b, c, d) {
    var e = void 0;
    Vl(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = Ol({
        cttAuthInfo: xl(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new hf).h(b), c = c.getAsJspb(), c = I(d, H, 2, c), K(c, 4, pf[e]), "UNDEFINED_CSN" === b ? Y("visualElementGestured", f, void 0, c) : Hk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", f, e) : a ? yk("visualElementGestured", e, a, f) : X("visualElementGestured", e, f))
}

function Hl() {
    if (T("enable_web_96_bit_csn")) var a = Fl();
    else if (T("enable_web_96_bit_csn_no_crypto")) a = Fl(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = Hb(b, 3)
    }
    return a
}

function Y(a, b, c, d) {
    Gl.push({
        P: a,
        payload: c,
        J: d,
        options: b
    });
    Jl || (Jl = Ei())
}

function Fi(a) {
    if (Gl) {
        for (const b of Gl)
            if (T("il_via_jspb") && b.J) switch (b.J.h(a.csn), b.P) {
                case "screenCreated":
                    Jk(b.J, b.options);
                    break;
                case "visualElementAttached":
                    Kk(b.J, b.options);
                    break;
                case "visualElementShown":
                    Fk(b.J, b.options);
                    break;
                case "visualElementHidden":
                    Gk(b.J, b.options);
                    break;
                case "visualElementGestured":
                    Hk(b.J, b.options);
                    break;
                case "visualElementStateChanged":
                    Ik(b.J, b.options);
                    break;
                default:
                    Tk(new zf("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, X(b.P, b.payload, b.options));
        Gl.length = 0
    }
    Jl = 0
}

function Rl(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function Vl(a, b) {
    if (T("no_client_ve_attach_unless_shown")) {
        var c = Rl(a, b);
        Ll.set(c, !0);
        Sl(a, b)
    }
}

function Sl(a, b) {
    a = Rl(a, b);
    Kl.has(a) && (b = Kl.get(a) || [], Pl(b[0], b[1], b[2], b[3], !0), Kl.delete(a))
}

function Ol(a, b) {
    T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};
w("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const Yl = window;
class Zl {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var $l = Yl.performance || Yl.mozPerformance || Yl.msPerformance || Yl.webkitPerformance || new Zl;
la($l.clearResourceTimings || $l.webkitClearResourceTimings || $l.mozClearResourceTimings || $l.msClearResourceTimings || $l.oClearResourceTimings || Za, $l);
const am = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];

function bm(a) {
    var b = {
            Qb: {}
        },
        c = Ag();
    if (void 0 !== Xi.h) {
        const d = Xi.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new zf("InnerTubeTransportService is already initialized", a);
    } else Xi.h = new Xi(b, a, c)
}

function cm(a, b) {
    return r(function*() {
        var c;
        const d = null == a ? void 0 : null == (c = a.ia) ? void 0 : c.sessionIndex;
        c = yield nb(Cg(0, {
            sessionIndex: d
        }));
        return Promise.resolve(Object.assign({}, Bl(b), c))
    })
}

function dm(a, b, c, d = () => {}) {
    return r(function*() {
        var e;
        if (null == b ? 0 : null == (e = b.I) ? 0 : e.context) {
            e = b.I.context;
            for (var f of []) yield f.Yb(e)
        }
        var g;
        if (null == (g = a.i) ? 0 : g.fc(b.input, b.I)) return yield a.i.Ub(b.input, b.I);
        var h;
        if ((g = null == (h = b.config) ? void 0 : h.ac) && a.h.has(g)) var k = a.h.get(g);
        else {
            h = JSON.stringify(b.I);
            let p;
            f = null != (p = null == (k = b.R) ? void 0 : k.headers) ? p : {};
            b.R = Object.assign({}, b.R, {
                headers: Object.assign({}, f, c)
            });
            k = Object.assign({}, b.R);
            "POST" === b.R.method && (k = Object.assign({}, k, {
                body: h
            }));
            k = a.l.fetch(b.input, k, b.config);
            g && a.h.set(g, k)
        }
        k = yield k;
        var l;
        let q;
        if (k && "error" in k && (null == (l = k) ? 0 : null == (q = l.error) ? 0 : q.details)) {
            l = k.error.details;
            for (const p of l)(l = p["@type"]) && -1 < am.indexOf(l) && (delete p["@type"], k = p)
        }
        g && a.h.has(g) && a.h.delete(g);
        let m;
        !k && (null == (m = a.i) ? 0 : m.Pb(b.input, b.I)) && (k = yield a.i.Tb(b.input, b.I));
        d();
        return k || void 0
    })
}

function em(a, b, c) {
    var d = {
        ia: {
            identity: Dg
        }
    };
    let e = () => {};
    b.context || (b.context = zl());
    return new y(f => r(function*() {
        var g = Al(c);
        g = bg(g) ? "same-origin" : "cors";
        if (a.j.Oa) {
            var h, k = null == d ? void 0 : null == (h = d.ia) ? void 0 : h.sessionIndex;
            h = Cg(0, {
                sessionIndex: k
            });
            g = Object.assign({}, Bl(g), h)
        } else g = yield cm(d, g);
        h = Al(c);
        k = {};
        T("web_api_key_killswitch") && (S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == g ? 0 : g.Authorization) || (k.key = S("INNERTUBE_API_KEY")));
        T("json_condensed_response") && (k.prettyPrint = "false");
        h = ag(h, k || {}, !1);
        k = {
            method: "POST",
            mode: bg(h) ?
                "same-origin" : "cors",
            credentials: bg(h) ? "same-origin" : "include"
        };
        var l = {};
        const q = {};
        for (const m of Object.keys(l)) l[m] && (q[m] = l[m]);
        0 < Object.keys(q).length && (k.headers = q);
        f(dm(a, {
            input: h,
            R: k,
            I: b,
            config: d
        }, g, e))
    }))
}
var Xi = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ha || (a.ha = {});
        a.ha = Object.assign({}, El, a.ha)
    }
};
var Wi = new Ti;
let fm;

function gm() {
    if (!fm) {
        const a = bj();
        bm({
            fetch: (b, c) => nb(fetch(new Request(b, c)))
        });
        Vi(a);
        fm = a.resolve(Wi)
    }
    return fm
};

function hm(a) {
    return r(function*() {
        yield im();
        Tk(a)
    })
}

function jm(a) {
    return r(function*() {
        yield im();
        Sk(a)
    })
}

function km(a) {
    r(function*() {
        var b = yield Th();
        b ? yield Ni(a, b): (yield Zk(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            P: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            P: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && X(b.P, b.payload))
    })
}

function im() {
    return r(function*() {
        try {
            yield Zk()
        } catch (a) {}
    })
};
var lm = Symbol("trackingData"),
    mm = new WeakMap;

function nm() {
    om.h || (om.h = new om);
    return om.h
}

function pm(a, b, c) {
    const d = ul(c);
    return null === a.csn || d === a.csn || c ? d : (a = new zf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), Tk(a), null)
}

function qm(a) {
    let b;
    return !(null == (b = rm(a)) || !b.loggingDirectives)
}

function sm(a) {
    a = rm(a);
    return Math.floor(Number(a && a.loggingDirectives && a.loggingDirectives.visibility && a.loggingDirectives.visibility.types || "")) || 1
}

function rm(a) {
    let b, c = a.data || (null == (b = a.props) ? void 0 : b.data);
    if (!c && a.isWebComponentWrapper && T("read_data_from_web_component_wrapper")) {
        let d;
        c = null == (d = mm.get(a)) ? void 0 : d[lm]
    }
    return c
}
var om = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = ul()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    B(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = pm(this, a, c)) {
                var g = qm(a);
                if (sm(a) || g) {
                    d = a.visualElement ? a.visualElement : kl(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? sm(a) & 4 ? f || (a = this.client, Vl(d, c), e = Ol({
                        cttAuthInfo: xl(c) || void 0
                    }, c), T("il_via_jspb") ? (f = (new kf).h(c), d = d.getAsJspb(), f = I(f, H, 2, d), f = K(f, 4, 4), b && I(f, af, 3, b), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, void 0, f) : Fk(f, e, a)) : (b = {
                        csn: c,
                        ve: d.getAsJson(),
                        eventType: 4
                    }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, b) : a ? yk("visualElementShown", b, a, e) : X("visualElementShown", b, e))) : sm(a) & 1 && !e && Ul(this.client, c, d, h, b) : Ul(this.client, c, d, h, b)
                }
            }
    }
    v(a,
        b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = pm(this, a, c);
        if (!c || !sm(a) && qm(a)) return !1;
        d = a.visualElement ? a.visualElement : kl(d);
        sm(a) & 8 ? Wl(this.client, c, d) : sm(a) & 2 && !b && (a = this.client, b = Ol({
            cttAuthInfo: xl(c) || void 0
        }, c), T("il_via_jspb") ? (e = (new jf).h(c), d = d.getAsJspb(), d = I(e, H, 2, d), d = K(d, 4, 2), "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, void 0, d) : Gk(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, d) : a ? yk("visualElementHidden", d, a, b) : X("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        const b = rm(a);
        let c, d;
        if (T("il_use_view_model_logging_context") && (null == b ? 0 : null == (c = b.context) ? 0 : null == (d = c.loggingContext) ? 0 : d.loggingDirectives)) return b.context.loggingContext.loggingDirectives.trackingParams || "";
        let e, f;
        if (null == b ? 0 : null == (e = b.rendererContext) ? 0 : null == (f = e.loggingContext) ? 0 : f.loggingDirectives) return b.rendererContext.loggingContext.loggingDirectives.trackingParams ||
            "";
        if (null == b ? 0 : b.loggingDirectives) return b.loggingDirectives.trackingParams || "";
        let g;
        return (null == (g = a.veContainer) ? 0 : g.trackingParams) ? a.veContainer.trackingParams : (null == b ? void 0 : b.trackingParams) || ""
    }
};

function tm() {
    um.h || (um.h = new um)
}

function vm(a) {
    tm();
    Sf(nm().B).bind(nm())(a, void 0, 8)
}

function wm(a) {
    tm();
    Sf(nm().v).bind(nm())(a, void 0, 8)
}
var um = class {
    j(a) {
        Sf(nm().j).bind(nm())(a)
    }
    clear() {
        Sf(nm().clear).bind(nm())()
    }
};

function xm() {
    ym.h || (ym.h = new ym);
    return ym.h
}

function zm(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        Am(a, b, c);
        const d = rl(c.layer);
        if (d) {
            for (const e of a.B) Bm(a, e[0], e[1] || d, c.layer);
            for (const e of a.F) Cm(a, e[0], e[1])
        }
    };
    ul(c.layer) || a.m();
    if (c.ka)
        for (const d of c.ka) Dm(a, d, c.layer);
    else Sk(Error("Delayed screen needs a data promise."))
}

function Am(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = void 0 !== c.Ka ? c.Ka : c.layer;
    const e = ul(d);
    d = rl(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = S("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    T("combine_ve_grafts") && e && Em(a, e);
    T("no_client_ve_attach_unless_shown") && d && e && Sl(d, e);
    let k;
    try {
        k = Nl(a.client, b, f, c.ja, c.cttAuthInfo, g, c.Sb, c.loggingExpectations)
    } catch (m) {
        Xk(m, {
            cc: b,
            rootVe: d,
            Xb: void 0,
            Rb: e,
            Wb: f,
            ja: c.ja
        });
        Sk(m);
        return
    }
    yl(k, b, c.layer, c.cttAuthInfo);
    e && "UNDEFINED_CSN" !== e && d && !vl(e) && Wl(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    tm();
    Sf(nm().s).bind(nm())();
    const l = rl(c.layer);
    e && "UNDEFINED_CSN" !== e && l && (T("web_mark_root_visible") || T("music_web_mark_root_visible")) && Sf(Tl)(void 0, k, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let q;
    null == (q = a.ba.get(c.layer)) || q.forEach((m, p) => {
        m ? Bm(a, p, m, c.layer) :
            l && Bm(a, p, l, c.layer)
    });
    Fm(a)
}

function Gm(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    Sf(() => {
        [28631].includes(b) || (Tk(new zf("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.B = [];
        a.F = [];
        c.ka ? zm(a, b, c) : Am(a, b, c)
    })()
}

function Dm(a, b, c = 0) {
    Sf(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = ul(c),
                f = rl(c);
            if (e && f) {
                var g;
                (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) && Pl(a.client, e, f, kl(d.response.trackingParams));
                var h;
                (null == d ? 0 : null == (h = d.playerResponse) ? 0 : h.trackingParams) && Pl(a.client, e, f, kl(d.playerResponse.trackingParams))
            }
        })
    })()
}

function Bm(a, b, c, d = 0) {
    Sf(() => {
        if (a.i.has(d)) return a.B.push([b, c]), !0;
        const e = ul(d),
            f = c || rl(d);
        if (e && f) {
            if (T("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.v.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.M || (a.M = Gg(() => {
                    Em(a, e)
                }, 1200))
            } else Pl(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function Hm(a, b) {
    return Sf(() => {
        const c = kl(b);
        Bm(a, c, void 0, 8);
        return c
    })()
}

function Em(a, b) {
    if (void 0 === b) {
        const c = tl();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Em(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.v.get(d)) && Ql(a.client, b, d, c)
    }), a.l.clear(), a.v.clear(), a.M = void 0
}

function Im(a, b, c = 0) {
    (c = ul(c)) && Xl(a.client, c, b)
}

function Jm(a, b, c, d = 0) {
    if (!b) return !1;
    d = ul(d);
    if (!d) return !1;
    Xl(a.client, d, kl(b), c);
    return !0
}

function Km(a, b) {
    const c = b.getScreenLayer && b.getScreenLayer();
    b.visualElement ? Im(a, b.visualElement, c) : (tm(), b = Sf(nm().i).bind(nm())(b), Jm(a, b, void 0, c))
}

function Cm(a, b, c, d = 0) {
    const e = ul(d);
    d = b || rl(d);
    if (e && d)
        if (a = a.client, b = Ol({
                cttAuthInfo: xl(e) || void 0
            }, e), T("il_via_jspb")) {
            const f = new lf;
            f.h(e);
            c = f;
            d = d.getAsJspb();
            I(c, H, 2, d);
            "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", b, void 0, f) : Ik(f, b, a)
        } else c = {
            csn: e,
            ve: d.getAsJson(),
            clientData: c
        }, "UNDEFINED_CSN" === e ? Y("visualElementStateChanged", b, c) : a ? yk("visualElementStateChanged", c, a, b) : X("visualElementStateChanged", c, b)
}

function Fm(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            Sk(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.K.length; b++) {
        c = a.K[b];
        try {
            c()
        } catch (d) {
            Sk(d)
        }
    }
}
var ym = class {
    constructor() {
        this.B = [];
        this.F = [];
        this.h = [];
        this.s = [];
        this.K = [];
        this.l = new Map;
        this.v = new Map;
        this.i = new Set;
        this.ba = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Jm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c = 0) {
        this.visualElementStateChanged(kl(a), b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.i.has(c) ? this.F.push([a, b]) : Cm(this, a, b, c)
    }
};
const Lm = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    Mm = RegExp("^(?:[a-z]+:)?//", "i");

function Nm(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Q("IDToken", b), Om()) : "notifications_check_registration" === a && Pm(b)
}

function Qm() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Rm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Sm(a) {
    return r(function*() {
        const b = Rm(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Hf(uf);
        return Tm().then(e => em(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? Um(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                jm(g);
                Promise.reject(g)
            })
        }))
    })
}

function Vm(a, b) {
    var c = ul(8);
    if (null == c || !b) return a;
    a = Mm.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function Um(a, b) {
    a.deviceId && Q("DeviceId", a.deviceId);
    a.timestampSec && Q("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = xm();
    Gm(d);
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Vm(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && Wm(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: Hm(d, g.data.clickTrackingParams)
        }, vm(h);
        Xm(a.displayCap)
    }).catch(() => {})
}

function Wm(a) {
    if (!Cj(a, tf)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: Cj(a, tf).serializedInteractionsRequest
        },
        c = Hf(vf);
    return Tm().then(d => em(d, b, c)).then(d => d)
}

function Xm(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
                let f;
                var c = kl(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    h = ml(82046),
                    k = xm();
                Bm(k, h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                vm(c);
                Km(k, c);
                wm(g)
            }
        }
    })
}

function Pm(a) {
    const b = [Ym(a), Df("RegistrationTimestamp").then(Zm), $m(), an(), bn()];
    Promise.all(b).catch(() => {
        Q("IDToken", a);
        Om();
        return Promise.resolve()
    })
}

function Zm(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Ym(a) {
    return Df("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function $m() {
    return Df("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function an() {
    return Df("Endpoint").then(a => cn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function bn() {
    return Df("application_server_key").then(a => dn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function en() {
    var a = Notification.permission;
    if (Lm[a]) return Lm[a]
}

function Om() {
    Q("RegistrationTimestamp", 0);
    Promise.all([cn(), fn(), gn(), dn()]).then(([a, b, c, d]) => {
        b = b ? xf(b) : null;
        c = c ? xf(c) : null;
        d = d ? Hb(new Uint8Array(d), 4) : null;
        hn(a, b, c, d)
    }).catch(() => {
        hn()
    })
}

function hn(a = null, b = null, c = null, d = null) {
    Cf().then(e => {
        e && (Q("Endpoint", a), Q("P256dhKey", b), Q("AuthKey", c), Q("application_server_key", d), Q("Permission", Notification.permission), Promise.all([Df("DeviceId"), Df("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || xe.length;
                for (k = 0; 256 > k; k++) f[k] = xe[0 | Math.random() * h];
                h = f.join("")
            }
            jn(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function jn(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: en()
                    }
                }
            },
            h = Hf(wf);
        return Tm().then(k => em(k, g, h).then(() => {
            Q("DeviceId", a);
            Q("RegistrationTimestamp", Date.now());
            Q("TimestampLowerBound", Date.now())
        }, l => {
            hm(l)
        }))
    })
}

function cn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function fn() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function gn() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function dn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Tm() {
    return r(function*() {
        try {
            return yield Zk(!0), gm()
        } catch (a) {
            return yield hm(a), Promise.reject(a)
        }
    })
};
let kn = self.location.origin + "/";

function al(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? qe.registration.scope : kn;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let ln = void 0;

function mn(a) {
    return r(function*() {
        ln || (ln = yield a.open("yt-appshell-assets"));
        return ln
    })
}

function nn(a, b) {
    return r(function*() {
        const c = yield mn(a), d = b.map(e => on(c, e));
        return Promise.all(d)
    })
}

function pn(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function qn(a, b) {
    return r(function*() {
        const c = yield mn(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function rn(a, b, c) {
    return r(function*() {
        yield(yield mn(a)).put(b, c)
    })
}

function sn(a, b) {
    r(function*() {
        yield(yield mn(a)).delete(b)
    })
}

function on(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var tn = bi("yt-serviceworker-metadata", {
    O: {
        auth: {
            N: 1
        },
        ["resource-manifest-assets"]: {
            N: 2
        }
    },
    Z: !0,
    upgrade(a, b) {
        b(1) && qh(a, "resource-manifest-assets");
        b(2) && qh(a, "auth")
    },
    version: 2
});
let un = null;

function vn(a) {
    return Jh(tn(), a)
}

function wn() {
    return r(function*() {
        const a = yield Th();
        if (a) return xn.h || (xn.h = new xn(a)), xn.h
    })
}

function yn(a, b) {
    return r(function*() {
        yield mh(yield vn(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return V(d.h.put(b, e)).then(() => {
                un = e;
                let f = !0;
                return vh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, Eh(g)) : d.delete(g.getKey()).then(() => yh(g)))
            })
        })
    })
}

function zn(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield mh(yield vn(a.token), ["resource-manifest-assets"], "readonly", e => vh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, yh(f)
        }));
        return c ? d : -1
    })
}

function An(a) {
    return r(function*() {
        un || (yield mh(yield vn(a.token), ["resource-manifest-assets"], "readonly", b => vh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            un = c.getKey()
        })));
        return un
    })
}
var xn = class {
    constructor(a) {
        this.token = a
    }
};

function Bn() {
    return r(function*() {
        const a = yield Th();
        if (a) return Cn.h || (Cn.h = new Cn(a)), Cn.h
    })
}

function Dn(a, b) {
    return r(function*() {
        yield sh(yield vn(a.token), "auth", b, "shell_identifier_key")
    })
}

function En(a) {
    return r(function*() {
        return (yield(yield vn(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function Fn(a) {
    return r(function*() {
        yield(yield vn(a.token)).clear("auth")
    })
}
var Cn = class {
    constructor(a) {
        this.token = a
    }
};

function Gn() {
    r(function*() {
        const a = yield Bn();
        a && (yield Fn(a))
    })
};
var Hn = class extends L {
        constructor(a) {
            super(a)
        }
        hasUrl() {
            return null != Gd(this, 1)
        }
    },
    In = [0, fe];

function Jn(a) {
    a = a.o;
    const b = D(a);
    return Cd(a, b, Hn, 1, !1, !(2 & b))
}
var Kn = class extends L {
    constructor(a) {
        super(a)
    }
};
Kn.A = [1];
var Ln = function(a, b) {
    return (c, d) => {
        a: {
            if (wc.length) {
                const f = wc.pop();
                rc(f, d);
                f.h.init(c, void 0, void 0, d);
                c = f
            } else c = new vc(c, d);
            try {
                const f = new a,
                    g = f.o;
                Od(b)(g, c);
                var e = f;
                break a
            } finally {
                c.h.clear(), c.l = -1, c.i = -1, 100 > wc.length && wc.push(c)
            }
            e = void 0
        }
        return e
    }
}(Kn, [0,
    ge, In
]);

function Mn(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(Nn(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function Nn(a) {
    return Jn(Ln(decodeURIComponent(a))).reduce((b, c) => {
        (c = Hd(c, 1)) && b.push(c);
        return b
    }, [])
};

function On(a) {
    return r(function*() {
        const b = yield Zk();
        if (b && null != Gd(b, 3)) {
            var c = yield Bn();
            c && (c = yield En(c), Gd(b, 3) !== c && (sn(a.caches, a.h), Gn()))
        }
    })
}

function Pn(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield Qn(a.i), b = yield Mn(c), yield nn(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield Rn(), yield rn(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield Sn(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function Tn(a) {
    return r(function*() {
        yield On(a);
        return Pn(a)
    })
}

function Qn(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function Rn() {
    return r(function*() {
        var a = yield Zk();
        let b;
        a && null != Gd(a, 3) && (b = Hd(a, 3));
        return b ? (a = yield Bn()) ? Promise.resolve(Dn(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function Sn(a, b, c) {
    return r(function*() {
        const d = yield wn();
        if (d) try {
            yield yn(d, b)
        } catch (e) {
            yield hm(e)
        }
        b.push(c);
        try {
            yield qn(a.caches, b)
        } catch (e) {
            yield hm(e)
        }
        return Promise.resolve()
    })
}

function Un(a, b) {
    return r(function*() {
        return pn(a.caches, b)
    })
}

function Vn(a) {
    return r(function*() {
        return pn(a.caches, a.h)
    })
}
var Wn = class {
    constructor() {
        var a = self.caches;
        let b = al("/app_shell");
        T("service_worker_forward_exp_params") && (b += self.location.search);
        var c = al("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var Xn = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function Yn(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield Un(a.h, c.url);
        if (d) return km({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: W()
        }), d;
        Zn(c);
        return $n(b)
    })
}

function ao(a, b) {
    return r(function*() {
        const c = yield bo(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield Vn(a.h);
        if (d) return co(a), eo(d, b);
        fo(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function go(a, b) {
    b = new URL(b);
    if (!a.config.wa.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.ya)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function ho(a, b) {
    return r(function*() {
        const c = yield Vn(a.h);
        if (!c) return fo(a), $n(b);
        co(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return eo(c, b);
        d = yield bo(b);
        return d.response && d.response.ok ? d.response : eo(c, b)
    })
}

function $n(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !io(b) ? b : t.fetch(a.request))
}

function Zn(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    wn().then(c => {
        if (c) {
            var d = An(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = zn(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                hm(e)
            }).finally(() => {
                km({
                    appShellAssetLoadReport: b,
                    timestamp: W()
                })
            })
        } else km({
            appShellAssetLoadReport: b,
            timestamp: W()
        })
    })
}

function co(a) {
    km({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: W()
    })
}

function fo(a) {
    km({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: W()
    })
}

function eo(a, b) {
    if (!T("sw_nav_preload_pbj")) return a;
    const c = new Xn,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !io(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function bo(a) {
    return r(function*() {
        try {
            return {
                response: yield $n(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function io(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var ro = class {
    constructor() {
        var a = jo;
        var b = {
            Ba: ko,
            La: lo([mo, /\/signin/, /\/logout/]),
            wa: ["/", "/feed/downloads"],
            ya: no([{
                key: "feature",
                value: "ytca"
            }]),
            xa: oo(T("kevlar_sw_app_wide_fallback") ? po : qo)
        };
        this.h = a;
        this.config = b
    }
};
const so = /^\/$/,
    qo = [so, /^\/feed\/downloads$/],
    po = [so, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function oo(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const to = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function lo(a) {
    a = oo(a);
    return new RegExp(`${to.source}(${a.source})`)
}
const uo = oo([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    ko = new RegExp(`${to.source}(${uo.source})`),
    mo = /purge_shell=1/;

function no(a = []) {
    const b = [];
    for (const c of eg) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
lo([mo]);
no();
var wo = class {
    constructor() {
        var a = jo,
            b = vo,
            c = self;
        if (t.URLPattern) {
            var d = [];
            T("service_worker_static_routing_exclude_embed") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            T("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else d = [];
        this.h = c;
        this.i = a;
        this.s = b;
        this.F = yf;
        this.j = d
    }
    init() {
        this.h.oninstall = this.v.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch =
            this.m.bind(this);
        this.h.onmessage = this.B.bind(this)
    }
    v(a) {
        this.h.skipWaiting();
        if (T("service_worker_static_routing_registration") && 0 < this.j.length && a.addRoutes) try {
            a.addRoutes(this.j)
        } catch (c) {}
        const b = Tn(this.i).catch(c => {
            hm(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), T("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.s,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.La.test(e.url)) $k.h && (delete $k.h.h, t.__SAPISID = void 0, R("VISITOR_DATA", void 0), R("SESSION_INDEX", void 0), R("DELEGATED_SESSION_ID", void 0), R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, sn(c.caches, c.h), Gn(), c = $n(a), d.call(a, c);
            else if (c.config.Ba.test(e.url)) a.respondWith(Yn(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url);
                c.config.xa.test(f.pathname) ? a.respondWith(ao(c, a)) : go(c, e.url) ? a.respondWith(ho(c, a)) : d && a.respondWith($n(a))
            }
        })
    }
    B(a) {
        const b = a.data;
        this.F.includes(b.type) ? Nm(a) : "refresh_shell" === b.type && Pn(this.i).catch(c => {
            hm(c)
        })
    }
};

function xo() {
    let a = v("ytglobal.storage_");
    a || (a = new yo, w("ytglobal.storage_", a));
    return a
}
var yo = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return zo()
        })
    }
};

function zo() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
w("ytglobal.storageClass_", yo);

function Ao(a, b) {
    xo().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Bo(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Bo(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Co {
    constructor() {
        var a = Do;
        this.handleError = Eo;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= gg("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    U(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                T("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Ao(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= gg("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function Bo(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
tg(qg(), {
    H: [{
        Ja: /Failed to fetch/,
        weight: 500
    }],
    G: []
});
var {
    handleError: Eo = Rk,
    U: Do = X
} = {
    handleError: jm,
    U: function(a, b) {
        return r(function*() {
            yield im();
            X(a, b)
        })
    }
};
for (Og = new Co; 0 < Ng.length;) {
    const a = Ng.shift();
    switch (a.type) {
        case "ERROR":
            Og.handleError(a.payload);
            break;
        case "EVENT":
            Og.U(a.eventType, a.payload)
    }
}
$k.h = new $k;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Wm(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = kl(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = ml(74726);
            b = xm();
            Bm(b, d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            vm(c);
            Km(b, c)
        }
        wm(a)
    }
};
self.onpush = function(a) {
    a.waitUntil(Df("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Sm(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(Qm())
};
self.onpushsubscriptionchange = function() {
    Om()
};
const jo = new Wn,
    vo = new ro;
(new wo).init();