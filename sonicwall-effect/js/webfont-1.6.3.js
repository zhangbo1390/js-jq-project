/* Web Font Loader v1.6.3 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function() {
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function m(a, b, c) {
        m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa: ba;
        return m.apply(null, arguments)
    }
    var n = Date.now ||
        function() {
            return + new Date
        };
    function r(a, b) {
        this.C = a;
        this.q = b || a;
        this.D = this.q.document
    }
    r.prototype.createElement = function(a, b, c) {
        a = this.D.createElement(a);
        if (b) for (var d in b) b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        c && a.appendChild(this.D.createTextNode(c));
        return a
    };
    function s(a, b, c) {
        a = a.D.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    function t(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), f = 0; f < b.length; f += 1) {
            for (var e = !1,
                     g = 0; g < d.length; g += 1) if (b[f] === d[g]) {
                e = !0;
                break
            }
            e || d.push(b[f])
        }
        b = [];
        for (f = 0; f < d.length; f += 1) {
            e = !1;
            for (g = 0; g < c.length; g += 1) if (d[f] === c[g]) {
                e = !0;
                break
            }
            e || b.push(d[f])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function u(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, f = c.length; d < f; d++) if (c[d] == b) return ! 0;
        return ! 1
    }
    function v(a) {
        if ("string" === typeof a.ca) return a.ca;
        var b = a.q.location.protocol;
        "about:" == b && (b = a.C.location.protocol);
        return "https:" == b ? "https:": "http:"
    }
    function w(a, b) {
        var c = a.createElement("link", {
                rel: "stylesheet",
                href: b,
                media: "all"
            }),
            d = !1;
        c.onload = function() {
            d || (d = !0)
        };
        c.onerror = function() {
            d || (d = !0)
        };
        s(a, "head", c)
    }
    function x(a, b, c, d) {
        var f = a.D.getElementsByTagName("head")[0];
        if (f) {
            var e = a.createElement("script", {
                    src: b
                }),
                g = !1;
            e.onload = e.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), e.onload = e.onreadystatechange = null, "HEAD" == e.parentNode.tagName && f.removeChild(e))
            };
            f.appendChild(e);
            setTimeout(function() {
                    g || (g = !0, c && c(Error("Script load timeout")))
                },
                d || 5E3);
            return e
        }
        return null
    };
    function y(a) {
        this.ba = a || "-"
    }
    y.prototype.d = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.ba)
    };
    function z(a, b) {
        this.U = a;
        this.M = 4;
        this.G = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.G = c[1], this.M = parseInt(c[2], 10))
    }
    z.prototype.getName = function() {
        return this.U
    };
    function A(a) {
        return a.G + a.M
    }
    function ca(a) {
        var b = 4,
            c = "n",
            d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    };
    function da(a, b) {
        this.a = a;
        this.j = a.q.document.documentElement;
        this.I = b;
        this.f = "wf";
        this.e = new y("-");
        this.Y = !1 !== b.events;
        this.v = !1 !== b.classes
    }
    function ea(a) {
        a.v && t(a.j, [a.e.d(a.f, "loading")]);
        B(a, "loading")
    }
    function C(a) {
        if (a.v) {
            var b = u(a.j, a.e.d(a.f, "active")),
                c = [],
                d = [a.e.d(a.f, "loading")];
            b || c.push(a.e.d(a.f, "inactive"));
            t(a.j, c, d)
        }
        B(a, "inactive")
    }
    function B(a, b, c) {
        if (a.Y && a.I[b]) if (c) a.I[b](c.getName(), A(c));
        else a.I[b]()
    };
    function fa() {
        this.u = {}
    }
    function ga(a, b, c) {
        var d = [],
            f;
        for (f in b) if (b.hasOwnProperty(f)) {
            var e = a.u[f];
            e && d.push(e(b[f], c))
        }
        return d
    };
    function D(a, b) {
        this.a = a;
        this.A = b;
        this.g = this.a.createElement("span", {
                "aria-hidden": "true"
            },
            this.A)
    }
    function F(a) {
        s(a.a, "body", a.g)
    }
    function G(a) {
        var b;
        b = [];
        for (var c = a.U.split(/,\s*/), d = 0; d < c.length; d++) {
            var f = c[d].replace(/['"]/g, ""); - 1 == f.indexOf(" ") ? b.push(f) : b.push("'" + f + "'")
        }
        b = b.join(",");
        c = "normal";
        "o" === a.G ? c = "oblique": "i" === a.G && (c = "italic");
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b + ";" + ("font-style:" + c + ";font-weight:" + (a.M + "00") + ";")
    }
    D.prototype.remove = function() {
        var a = this.g;
        a.parentNode && a.parentNode.removeChild(a)
    };
    function H(a, b, c, d, f, e, g) {
        this.N = a;
        this.aa = b;
        this.a = c;
        this.h = d;
        this.A = g || "BESbswy";
        this.p = {};
        this.L = f || 3E3;
        this.S = e || null;
        this.w = this.o = this.m = null;
        this.m = new D(this.a, this.A);
        this.o = new D(this.a, this.A);
        this.w = new D(this.a, this.A);
        a = new z("serif", A(this.h));
        a = G(a);
        this.m.g.style.cssText = a;
        a = new z("sans-serif", A(this.h));
        a = G(a);
        this.o.g.style.cssText = a;
        a = new z("monospace", A(this.h));
        a = G(a);
        this.w.g.style.cssText = a;
        F(this.m);
        F(this.o);
        F(this.w);
        this.p.serif = this.m.g.offsetWidth;
        this.p["sans-serif"] = this.o.g.offsetWidth;
        this.p.monospace = this.w.g.offsetWidth
    }
    var I = {
            ga: "serif",
            fa: "sans-serif",
            ea: "monospace"
        },
        J = null;
    function K() {
        if (null === J) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            J = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return J
    }
    H.prototype.start = function() {
        this.da = n();
        var a = new z(this.h.getName() + ",serif", A(this.h)),
            a = G(a);
        this.m.g.style.cssText = a;
        a = new z(this.h.getName() + ",sans-serif", A(this.h));
        a = G(a);
        this.o.g.style.cssText = a;
        L(this)
    };
    function M(a, b, c) {
        for (var d in I) if (I.hasOwnProperty(d) && b === a.p[I[d]] && c === a.p[I[d]]) return ! 0;
        return ! 1
    }
    function L(a) {
        var b = a.m.g.offsetWidth,
            c = a.o.g.offsetWidth,
            d; (d = b === a.p.serif && c === a.p["sans-serif"]) || (d = K() && M(a, b, c));
        d ? n() - a.da >= a.L ? K() && M(a, b, c) && (null === a.S || a.S.hasOwnProperty(a.h.getName())) ? N(a, a.N) : N(a, a.aa) : ha(a) : N(a, a.N)
    }
    function ha(a) {
        setTimeout(m(function() {
                L(this)
            },
            a), 50)
    }
    function N(a, b) {
        a.m.remove();
        a.o.remove();
        a.w.remove();
        b(a.h)
    };
    function O(a, b, c) {
        this.a = a;
        this.s = b;
        this.J = 0;
        this.W = this.R = !1;
        this.L = c
    }
    O.prototype.Z = function(a) {
        var b = this.s;
        b.v && t(b.j, [b.e.d(b.f, a.getName(), A(a).toString(), "active")], [b.e.d(b.f, a.getName(), A(a).toString(), "loading"), b.e.d(b.f, a.getName(), A(a).toString(), "inactive")]);
        B(b, "fontactive", a);
        this.W = !0;
        P(this)
    };
    O.prototype.$ = function(a) {
        var b = this.s;
        if (b.v) {
            var c = u(b.j, b.e.d(b.f, a.getName(), A(a).toString(), "active")),
                d = [],
                f = [b.e.d(b.f, a.getName(), A(a).toString(), "loading")];
            c || d.push(b.e.d(b.f, a.getName(), A(a).toString(), "inactive"));
            t(b.j, d, f)
        }
        B(b, "fontinactive", a);
        P(this)
    };
    function P(a) {
        0 == --a.J && a.R && (a.W ? (a = a.s, a.v && t(a.j, [a.e.d(a.f, "active")], [a.e.d(a.f, "loading"), a.e.d(a.f, "inactive")]), B(a, "active")) : C(a.s))
    };
    function Q(a) {
        this.C = a;
        this.t = new fa;
        this.T = 0;
        this.O = this.P = !0
    }
    Q.prototype.load = function(a) {
        this.a = new r(this.C, a.context || this.C);
        this.P = !1 !== a.events;
        this.O = !1 !== a.classes;
        ia(this, new da(this.a, a), a)
    };
    function ja(a, b, c, d, f) {
        var e = 0 == --a.T; (a.O || a.P) && setTimeout(function() {
                var a = f || null,
                    l = d || null || {};
                if (0 === c.length && e) C(b.s);
                else {
                    b.J += c.length;
                    e && (b.R = e);
                    for (var k = 0; k < c.length; k++) {
                        var h = c[k],
                            p = l[h.getName()],
                            q = b.s,
                            E = h;
                        q.v && t(q.j, [q.e.d(q.f, E.getName(), A(E).toString(), "loading")]);
                        B(q, "fontloading", E);
                        q = null;
                        q = new H(m(b.Z, b), m(b.$, b), b.a, h, b.L, a, p);
                        q.start()
                    }
                }
            },
            0)
    }
    function ia(a, b, c) {
        var d = [],
            f = c.timeout;
        ea(b);
        var d = ga(a.t, c, a.a),
            e = new O(a.a, b, f);
        a.T = d.length;
        b = 0;
        for (c = d.length; b < c; b++) d[b].load(function(b, c, d) {
            ja(a, e, b, c, d)
        })
    };
    function R(a, b, c) {
        this.H = a ? a: b + ka;
        this.k = [];
        this.K = [];
        this.X = c || ""
    }
    var ka = "//fonts.googleapis.com/css";
    R.prototype.d = function() {
        if (0 == this.k.length) throw Error("No fonts to load!");
        if ( - 1 != this.H.indexOf("kit=")) return this.H;
        for (var a = this.k.length,
                 b = [], c = 0; c < a; c++) b.push(this.k[c].replace(/ /g, "+"));
        a = this.H + "?family=" + b.join("%7C");
        0 < this.K.length && (a += "&subset=" + this.K.join(","));
        0 < this.X.length && (a += "&text=" + encodeURIComponent(this.X));
        return a
    };
    function S(a) {
        this.k = a;
        this.V = [];
        this.F = {}
    }
    var T = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        },
        la = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        ma = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        na = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    S.prototype.parse = function() {
        for (var a = this.k.length,
                 b = 0; b < a; b++) {
            var c = this.k[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                f = ["n4"];
            if (2 <= c.length) {
                var e;
                var g = c[1];
                e = [];
                if (g) for (var g = g.split(","), l = g.length, k = 0; k < l; k++) {
                    var h;
                    h = g[k];
                    if (h.match(/^[\w-]+$/)) if (h = na.exec(h.toLowerCase()), null == h) h = "";
                    else {
                        var p;
                        p = h[1];
                        if (null == p || "" == p) p = "4";
                        else {
                            var q = la[p];
                            p = q ? q: isNaN(p) ? "4": p.substr(0, 1)
                        }
                        h = h[2];
                        h = [null == h || "" == h ? "n": ma[h], p].join("")
                    } else h = "";
                    h && e.push(h)
                }
                0 < e.length && (f = e);
                3 == c.length && (c = c[2], e = [], c = c ? c.split(",") : e, 0 < c.length && (c = T[c[0]]) && (this.F[d] = c))
            }
            this.F[d] || (c = T[d]) && (this.F[d] = c);
            for (c = 0; c < f.length; c += 1) this.V.push(new z(d, f[c]))
        }
    };
    function U(a, b) {
        this.a = a;
        this.c = b
    }
    var oa = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    U.prototype.load = function(a) {
        for (var b = this.a,
                 c = new R(this.c.api, v(b), this.c.text), d = this.c.families, f = d.length, e = 0; e < f; e++) {
            var g = d[e].split(":");
            3 == g.length && c.K.push(g.pop());
            var l = "";
            2 == g.length && "" != g[1] && (l = ":");
            c.k.push(g.join(l))
        }
        d = new S(d);
        d.parse();
        w(b, c.d());
        a(d.V, d.F, oa)
    };
    function V(a, b) {
        this.a = a;
        this.c = b;
        this.Q = []
    }
    V.prototype.B = function(a) {
        var b = this.a;
        return v(this.a) + (this.c.api || "//f.fontdeck.com/s/css/js/") + (b.q.location.hostname || b.C.location.hostname) + "/" + a + ".js"
    };
    V.prototype.load = function(a) {
        var b = this.c.id,
            c = this.a.q,
            d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b, c) {
            for (var g = 0,
                     l = c.fonts.length; g < l; ++g) {
                var k = c.fonts[g];
                d.Q.push(new z(k.name, ca("font-weight:" + k.weight + ";font-style:" + k.style)))
            }
            a(d.Q)
        },
            x(this.a, this.B(b),
                function(b) {
                    b && a([])
                })) : a([])
    };
    function W(a, b) {
        this.a = a;
        this.c = b
    }
    W.prototype.B = function(a) {
        return (this.c.api || "https://use.typekit.net") + "/" + a + ".js"
    };
    W.prototype.load = function(a) {
        var b = this.c.id,
            c = this.a.q;
        b ? x(this.a, this.B(b),
            function(b) {
                if (b) a([]);
                else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                    b = c.Typekit.config.fn;
                    for (var f = [], e = 0; e < b.length; e += 2) for (var g = b[e], l = b[e + 1], k = 0; k < l.length; k++) f.push(new z(g, l[k]));
                    try {
                        c.Typekit.load({
                            events: !1,
                            classes: !1
                        })
                    } catch(h) {}
                    a(f)
                }
            },
            2E3) : a([])
    };
    function X(a, b) {
        this.a = a;
        this.c = b
    }
    X.prototype.B = function(a, b) {
        var c = v(this.a),
            d = (this.c.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b: "")
    };
    X.prototype.load = function(a) {
        var b = this.c.projectId,
            c = this.c.version;
        if (b) {
            var d = this.a.q;
            x(this.a, this.B(b, c),
                function(c) {
                    if (c) a([]);
                    else if (d["__mti_fntLst" + b]) {
                        c = d["__mti_fntLst" + b]();
                        var e = [];
                        if (c) for (var g = 0; g < c.length; g++) e.push(new z(c[g].fontfamily));
                        a(e)
                    } else a([])
                }).id = "__MonotypeAPIScript__" + b
        } else a([])
    };
    function Y(a, b) {
        this.a = a;
        this.c = b
    }
    Y.prototype.load = function(a) {
        var b, c, d = this.c.urls || [],
            f = this.c.families || [],
            e = this.c.testStrings || {};
        b = 0;
        for (c = d.length; b < c; b++) w(this.a, d[b]);
        d = [];
        b = 0;
        for (c = f.length; b < c; b++) {
            var g = f[b].split(":");
            if (g[1]) for (var l = g[1].split(","), k = 0; k < l.length; k += 1) d.push(new z(g[0], l[k]));
            else d.push(new z(g[0]))
        }
        a(d, e)
    };
    var Z = new Q(window);
    Z.t.u.custom = function(a, b) {
        return new Y(b, a)
    };
    Z.t.u.fontdeck = function(a, b) {
        return new V(b, a)
    };
    Z.t.u.monotype = function(a, b) {
        return new X(b, a)
    };
    Z.t.u.typekit = function(a, b) {
        return new W(b, a)
    };
    Z.t.u.google = function(a, b) {
        return new U(b, a)
    };
    var $ = {
        load: m(Z.load, Z)
    };
    "function" === typeof define && define.amd ? define(function() {
        return $
    }) : "undefined" !== typeof module && module.exports ? module.exports = $: (window.WebFont = $, window.WebFontConfig && Z.load(window.WebFontConfig));
} ());