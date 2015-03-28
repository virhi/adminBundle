"use strict";

if (!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    function D(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
        n.ready();
    }
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            M.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f;
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), 
        c;
    }
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function Fb(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--; ) if (b = Eb[e] + c, 
        b in a) return b;
        return d;
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g;
    }
    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), 
        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e);
    }
    function Sb() {
        return setTimeout(function() {
            Lb = void 0;
        }), Lb = n.now();
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++) if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rc(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        var e = {}, f = a === mc;
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tc(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ac(a + "[" + e + "]", b[e], c, d);
    }
    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.3", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), 
            b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) for (;f > e && (d = b.apply(a[e], c), d !== !1); e++) ; else for (e in a) if (d = b.apply(a[e], c), 
                d === !1) break;
            } else if (g) for (;f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++) ; else for (e in a) if (d = b.call(a[e], e, a[e]), 
            d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    var t = function(a) {
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length; l--; ) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function hb() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            var a = [];
            return b;
        }
        function ib(a) {
            return a[u] = !0, a;
        }
        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function kb(a, b) {
            for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
        }
        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function qb() {}
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
            return c;
        }
        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = vb(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                return a === b;
            }, h, !0), l = sb(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sb(tb(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                    return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
                }
                m.push(c);
            }
            return tb(m);
        }
        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        for (m = 0; o = a[m++]; ) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    for (m = 0; o = b[m++]; ) o(r, s, g, h);
                    if (f) {
                        if (p > 0) for (;q--; ) r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ib(f) : f;
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, eb = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), 
            p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                for (c = a; c = c.parentNode; ) h.unshift(c);
                for (c = b; c = c.parentNode; ) i.unshift(c);
                for (;h[d] === i[d]; ) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b);
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return gb(b, n, null, [ a ]).length > 0;
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, gb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                for (;e--; ) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = gb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else for (;b = a[d++]; ) c += e(b);
            return c;
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0;
                    };
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: ob(function() {
                    return [ 0 ];
                }),
                last: ob(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: ob(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = mb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = nb(b);
        return qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h; ) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
        }, h = gb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--; ) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a;
            }
            return f;
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                    if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
                    break;
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), jb(function(a) {
            return null == a.getAttribute("disabled");
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), gb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }
                return this;
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    for (var c; (c = n.inArray(b, h, c)) > -1; ) h.splice(c, 1), d && (f >= c && f--, 
                    g >= c && g--);
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], f = 0, this;
            },
            disable: function() {
                return h = i = b = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, b || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            };
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
            n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        }
    }), n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
        a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(E) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a);
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = L.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
            (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(E) || [ "" ], j = b.length; j--; ) h = Y.exec(b[j]) || [], 
            o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, 
            o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && n.expr.match.needsContext.test(e),
                namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            n.event.global[o] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(E) || [ "" ], j = b.length; j--; ) if (h = Y.exec(b[j]) || [], 
                o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
            q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                    h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : o.bindType || q, 
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), 
                m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], 
                h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, 
    ib.th = ib.td, n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), 
            f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (cb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
            f = ob(k.appendChild(e), "script"), i && mb(f), c)) for (j = 0; e = f[j++]; ) fb.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), 
            c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], 
                fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
            }
            return this;
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
            n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qb, rb = {}, ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            f.innerHTML = "", d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        }
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        e.appendChild(f), a.getComputedStyle && n.extend(k, {
            pixelPosition: function() {
                return g(), b;
            },
            boxSizingReliable: function() {
                return null == c && g(), c;
            },
            reliableMarginRight: function() {
                var b, c = f.appendChild(l.createElement("div"));
                return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                b;
            }
        }));
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = [ "Webkit", "O", "Moz", "ms" ];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                f = "number"), void (null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d);
                }) : Ib(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Jb(this, !0);
        },
        hide: function() {
            return Jb(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    }), n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [ Vb ], Rb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
        k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", 
        k.radioValue = "t" === a.value;
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void n.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            $b[b] = f), e;
        };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)) : void 0;
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
        b;
    };
    var ec = /#.*$/, fc = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)$/gm, hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ic = /^(?:GET|HEAD)$/, jc = /^\/\//, kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lc = {}, mc = {}, nc = "*/".concat("*"), oc = a.location.href, pc = kc.exec(oc.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a);
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), 
                w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) for (f = {}; b = gc.exec(e); ) f[b[1].toLowerCase()] = b[2];
                        b = f[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
            rc(lc, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), 
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b));
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var vc = /%20/g, wc = /\[\]$/, xc = /\r?\n/g, yc = /^(?:submit|button|image|reset|file)$/i, zc = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Bc = 0, Cc = {}, Dc = {
        0: 200,
        1223: 204
    }, Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) Cc[a]();
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Fc = [], Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
        n.merge([], d.childNodes));
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Ic = a.document.documentElement;
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
            c = Jc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Ic; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); ) a = a.offsetParent;
                return a || Ic;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function() {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Kc = a.jQuery, Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

if (+function($) {
    var version = $.fn.jquery.split(" ")[0].split(".");
    if (version[0] < 2 && version[1] < 9 || 1 == version[0] && 9 == version[1] && version[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function($) {
    function transitionEnd() {
        var el = document.createElement("bootstrap"), transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) if (void 0 !== el.style[name]) return {
            end: transEndEventNames[name]
        };
        return !1;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = !1, $el = this;
        $(this).one("bsTransitionEnd", function() {
            called = !0;
        });
        var callback = function() {
            called || $($el).trigger($.support.transition.end);
        };
        return setTimeout(callback, duration), this;
    }, $(function() {
        $.support.transition = transitionEnd(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                return $(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
            }
        });
    });
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.alert");
            data || $this.data("bs.alert", data = new Alert(this)), "string" == typeof option && data[option].call($this);
        });
    }
    var dismiss = '[data-dismiss="alert"]', Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.VERSION = "3.3.2", Alert.TRANSITION_DURATION = 150, Alert.prototype.close = function(e) {
        function removeElement() {
            $parent.detach().trigger("closed.bs.alert").remove();
        }
        var $this = $(this), selector = $this.attr("data-target");
        selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""));
        var $parent = $(selector);
        e && e.preventDefault(), $parent.length || ($parent = $this.closest(".alert")), 
        $parent.trigger(e = $.Event("close.bs.alert")), e.isDefaultPrevented() || ($parent.removeClass("in"), 
        $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement());
    };
    var old = $.fn.alert;
    $.fn.alert = Plugin, $.fn.alert.Constructor = Alert, $.fn.alert.noConflict = function() {
        return $.fn.alert = old, this;
    }, $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.button"), options = "object" == typeof option && option;
            data || $this.data("bs.button", data = new Button(this, options)), "toggle" == option ? data.toggle() : option && data.setState(option);
        });
    }
    var Button = function(element, options) {
        this.$element = $(element), this.options = $.extend({}, Button.DEFAULTS, options), 
        this.isLoading = !1;
    };
    Button.VERSION = "3.3.2", Button.DEFAULTS = {
        loadingText: "loading..."
    }, Button.prototype.setState = function(state) {
        var d = "disabled", $el = this.$element, val = $el.is("input") ? "val" : "html", data = $el.data();
        state += "Text", null == data.resetText && $el.data("resetText", $el[val]()), setTimeout($.proxy(function() {
            $el[val](null == data[state] ? this.options[state] : data[state]), "loadingText" == state ? (this.isLoading = !0, 
            $el.addClass(d).attr(d, d)) : this.isLoading && (this.isLoading = !1, $el.removeClass(d).removeAttr(d));
        }, this), 0);
    }, Button.prototype.toggle = function() {
        var changed = !0, $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            "radio" == $input.prop("type") && ($input.prop("checked") && this.$element.hasClass("active") ? changed = !1 : $parent.find(".active").removeClass("active")), 
            changed && $input.prop("checked", !this.$element.hasClass("active")).trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        changed && this.$element.toggleClass("active");
    };
    var old = $.fn.button;
    $.fn.button = Plugin, $.fn.button.Constructor = Button, $.fn.button.noConflict = function() {
        return $.fn.button = old, this;
    }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target);
        $btn.hasClass("btn") || ($btn = $btn.closest(".btn")), Plugin.call($btn, "toggle"), 
        e.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.carousel"), options = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == typeof option && option), action = "string" == typeof option ? option : options.slide;
            data || $this.data("bs.carousel", data = new Carousel(this, options)), "number" == typeof option ? data.to(option) : action ? data[action]() : options.interval && data.pause().cycle();
        });
    }
    var Carousel = function(element, options) {
        this.$element = $(element), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = options, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
    };
    Carousel.VERSION = "3.3.2", Carousel.TRANSITION_DURATION = 600, Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, Carousel.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            e.preventDefault();
        }
    }, Carousel.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), 
        this;
    }, Carousel.prototype.getItemIndex = function(item) {
        return this.$items = item.parent().children(".item"), this.$items.index(item || this.$active);
    }, Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active), willWrap = "prev" == direction && 0 === activeIndex || "next" == direction && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = "prev" == direction ? -1 : 1, itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
    }, Carousel.prototype.to = function(pos) {
        var that = this, activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return pos > this.$items.length - 1 || 0 > pos ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        }) : activeIndex == pos ? this.pause().cycle() : this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
    }, Carousel.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, Carousel.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, Carousel.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active"), $next = next || this.getItemForDirection(type, $active), isCycling = this.interval, direction = "next" == type ? "left" : "right", that = this;
        if ($next.hasClass("active")) return this.sliding = !1;
        var relatedTarget = $next[0], slideEvent = $.Event("slide.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        if (this.$element.trigger(slideEvent), !slideEvent.isDefaultPrevented()) {
            if (this.sliding = !0, isCycling && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
                $nextIndicator && $nextIndicator.addClass("active");
            }
            var slidEvent = $.Event("slid.bs.carousel", {
                relatedTarget: relatedTarget,
                direction: direction
            });
            return $.support.transition && this.$element.hasClass("slide") ? ($next.addClass(type), 
            $next[0].offsetWidth, $active.addClass(direction), $next.addClass(direction), $active.one("bsTransitionEnd", function() {
                $next.removeClass([ type, direction ].join(" ")).addClass("active"), $active.removeClass([ "active", direction ].join(" ")), 
                that.sliding = !1, setTimeout(function() {
                    that.$element.trigger(slidEvent);
                }, 0);
            }).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : ($active.removeClass("active"), 
            $next.addClass("active"), this.sliding = !1, this.$element.trigger(slidEvent)), 
            isCycling && this.cycle(), this;
        }
    };
    var old = $.fn.carousel;
    $.fn.carousel = Plugin, $.fn.carousel.Constructor = Carousel, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = old, this;
    };
    var clickHandler = function(e) {
        var href, $this = $(this), $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        if ($target.hasClass("carousel")) {
            var options = $.extend({}, $target.data(), $this.data()), slideIndex = $this.attr("data-slide-to");
            slideIndex && (options.interval = !1), Plugin.call($target, options), slideIndex && $target.data("bs.carousel").to(slideIndex), 
            e.preventDefault();
        }
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler), 
    $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            Plugin.call($carousel, $carousel.data());
        });
    });
}(jQuery), +function($) {
    function getTargetFromTrigger($trigger) {
        var href, target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $(target);
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.collapse"), options = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == typeof option && option);
            !data && options.toggle && "show" == option && (options.toggle = !1), data || $this.data("bs.collapse", data = new Collapse(this, options)), 
            "string" == typeof option && data[option]();
        });
    }
    var Collapse = function(element, options) {
        this.$element = $(element), this.options = $.extend({}, Collapse.DEFAULTS, options), 
        this.$trigger = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    Collapse.VERSION = "3.3.2", Collapse.TRANSITION_DURATION = 350, Collapse.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    }, Collapse.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var activesData, actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(actives && actives.length && (activesData = actives.data("bs.collapse"), activesData && activesData.transitioning))) {
                var startEvent = $.Event("show.bs.collapse");
                if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
                    actives && actives.length && (Plugin.call(actives, "hide"), activesData || actives.data("bs.collapse", null));
                    var dimension = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var complete = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[dimension](""), 
                        this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                    };
                    if (!$.support.transition) return complete.call(this);
                    var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
                    this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
                }
            }
        }
    }, Collapse.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var startEvent = $.Event("hide.bs.collapse");
            if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
                var dimension = this.dimension();
                this.$element[dimension](this.$element[dimension]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var complete = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return $.support.transition ? void this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION) : complete.call(this);
            }
        }
    }, Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element);
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
    }, Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen), $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    var old = $.fn.collapse;
    $.fn.collapse = Plugin, $.fn.collapse.Constructor = Collapse, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = old, this;
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $(this);
        $this.attr("data-target") || e.preventDefault();
        var $target = getTargetFromTrigger($this), data = $target.data("bs.collapse"), option = data ? "toggle" : $.extend({}, $this.data(), {
            trigger: this
        });
        Plugin.call($target, option);
    });
}(jQuery), +function($) {
    function clearMenus(e) {
        e && 3 === e.which || ($(backdrop).remove(), $(toggle).each(function() {
            var $this = $(this), $parent = getParent($this), relatedTarget = {
                relatedTarget: this
            };
            $parent.hasClass("open") && ($parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget)), 
            e.isDefaultPrevented() || ($this.attr("aria-expanded", "false"), $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget)));
        }));
    }
    function getParent($this) {
        var selector = $this.attr("data-target");
        selector || (selector = $this.attr("href"), selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""));
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.dropdown");
            data || $this.data("bs.dropdown", data = new Dropdown(this)), "string" == typeof option && data[option].call($this);
        });
    }
    var backdrop = ".dropdown-backdrop", toggle = '[data-toggle="dropdown"]', Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.2", Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if (!$this.is(".disabled, :disabled")) {
            var $parent = getParent($this), isActive = $parent.hasClass("open");
            if (clearMenus(), !isActive) {
                "ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus);
                var relatedTarget = {
                    relatedTarget: this
                };
                if ($parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget)), e.isDefaultPrevented()) return;
                $this.trigger("focus").attr("aria-expanded", "true"), $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget);
            }
            return !1;
        }
    }, Dropdown.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var $this = $(this);
            if (e.preventDefault(), e.stopPropagation(), !$this.is(".disabled, :disabled")) {
                var $parent = getParent($this), isActive = $parent.hasClass("open");
                if (!isActive && 27 != e.which || isActive && 27 == e.which) return 27 == e.which && $parent.find(toggle).trigger("focus"), 
                $this.trigger("click");
                var desc = " li:not(.divider):visible a", $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
                if ($items.length) {
                    var index = $items.index(e.target);
                    38 == e.which && index > 0 && index--, 40 == e.which && index < $items.length - 1 && index++, 
                    ~index || (index = 0), $items.eq(index).trigger("focus");
                }
            }
        }
    };
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin, $.fn.dropdown.Constructor = Dropdown, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = old, this;
    }, $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', Dropdown.prototype.keydown);
}(jQuery), +function($) {
    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.modal"), options = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == typeof option && option);
            data || $this.data("bs.modal", data = new Modal(this, options)), "string" == typeof option ? data[option](_relatedTarget) : options.show && data.show(_relatedTarget);
        });
    }
    var Modal = function(element, options) {
        this.options = options, this.$body = $(document.body), this.$element = $(element), 
        this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    Modal.VERSION = "3.3.2", Modal.TRANSITION_DURATION = 300, Modal.BACKDROP_TRANSITION_DURATION = 150, 
    Modal.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    }, Modal.prototype.show = function(_relatedTarget) {
        var that = this, e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), 
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            that.$element.parent().length || that.$element.appendTo(that.$body), that.$element.show().scrollTop(0), 
            that.options.backdrop && that.adjustBackdrop(), that.adjustDialog(), transition && that.$element[0].offsetWidth, 
            that.$element.addClass("in").attr("aria-hidden", !1), that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
        }));
    }, Modal.prototype.hide = function(e) {
        e && e.preventDefault(), e = $.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), 
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal());
    }, Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
        }, this));
    }, Modal.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(e) {
            27 == e.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, Modal.prototype.resize = function() {
        this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal");
    }, Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide(), this.backdrop(function() {
            that.$body.removeClass("modal-open"), that.resetAdjustments(), that.resetScrollbar(), 
            that.$element.trigger("hidden.bs.modal");
        });
    }, Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, Modal.prototype.backdrop = function(callback) {
        var that = this, animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", $.proxy(function(e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), 
            !callback) return;
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                that.removeBackdrop(), callback && callback();
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else callback && callback();
    }, Modal.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
    }, Modal.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight);
    }, Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        });
    }, Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, Modal.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, 
        this.scrollbarWidth = this.measureScrollbar();
    }, Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    }, Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "");
    }, Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure", this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        return this.$body[0].removeChild(scrollDiv), scrollbarWidth;
    };
    var old = $.fn.modal;
    $.fn.modal = Plugin, $.fn.modal.Constructor = Modal, $.fn.modal.noConflict = function() {
        return $.fn.modal = old, this;
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this), href = $this.attr("href"), $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")), option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        $this.is("a") && e.preventDefault(), $target.one("show.bs.modal", function(showEvent) {
            showEvent.isDefaultPrevented() || $target.one("hidden.bs.modal", function() {
                $this.is(":visible") && $this.trigger("focus");
            });
        }), Plugin.call($target, option, this);
    });
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.tooltip"), options = "object" == typeof option && option;
            (data || "destroy" != option) && (data || $this.data("bs.tooltip", data = new Tooltip(this, options)), 
            "string" == typeof option && data[option]());
        });
    }
    var Tooltip = function(element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
        this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.2", Tooltip.TRANSITION_DURATION = 150, Tooltip.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, Tooltip.prototype.init = function(type, element, options) {
        this.enabled = !0, this.type = type, this.$element = $(element), this.options = this.getOptions(options), 
        this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        for (var triggers = this.options.trigger.split(" "), i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if ("click" == trigger) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this)); else if ("manual" != trigger) {
                var eventIn = "hover" == trigger ? "mouseenter" : "focusin", eventOut = "hover" == trigger ? "mouseleave" : "focusout";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this)), 
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
    }, Tooltip.prototype.getOptions = function(options) {
        return options = $.extend({}, this.getDefaults(), this.$element.data(), options), 
        options.delay && "number" == typeof options.delay && (options.delay = {
            show: options.delay,
            hide: options.delay
        }), options;
    }, Tooltip.prototype.getDelegateOptions = function() {
        var options = {}, defaults = this.getDefaults();
        return this._options && $.each(this._options, function(key, value) {
            defaults[key] != value && (options[key] = value);
        }), options;
    }, Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        return self && self.$tip && self.$tip.is(":visible") ? void (self.hoverState = "in") : (self || (self = new this.constructor(obj.currentTarget, this.getDelegateOptions()), 
        $(obj.currentTarget).data("bs." + this.type, self)), clearTimeout(self.timeout), 
        self.hoverState = "in", self.options.delay && self.options.delay.show ? void (self.timeout = setTimeout(function() {
            "in" == self.hoverState && self.show();
        }, self.options.delay.show)) : self.show());
    }, Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        return self || (self = new this.constructor(obj.currentTarget, this.getDelegateOptions()), 
        $(obj.currentTarget).data("bs." + this.type, self)), clearTimeout(self.timeout), 
        self.hoverState = "out", self.options.delay && self.options.delay.hide ? void (self.timeout = setTimeout(function() {
            "out" == self.hoverState && self.hide();
        }, self.options.delay.hide)) : self.hide();
    }, Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !inDom) return;
            var that = this, $tip = this.tip(), tipId = this.getUID(this.type);
            this.setContent(), $tip.attr("id", tipId), this.$element.attr("aria-describedby", tipId), 
            this.options.animation && $tip.addClass("fade");
            var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement, autoToken = /\s?auto?\s?/i, autoPlace = autoToken.test(placement);
            autoPlace && (placement = placement.replace(autoToken, "") || "top"), $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement).data("bs." + this.type, this), this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            var pos = this.getPosition(), actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement, $container = this.options.container ? $(this.options.container) : this.$element.parent(), containerDim = this.getPosition($container);
                placement = "bottom" == placement && pos.bottom + actualHeight > containerDim.bottom ? "top" : "top" == placement && pos.top - actualHeight < containerDim.top ? "bottom" : "right" == placement && pos.right + actualWidth > containerDim.width ? "left" : "left" == placement && pos.left - actualWidth < containerDim.left ? "right" : placement, 
                $tip.removeClass(orgPlacement).addClass(placement);
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            var complete = function() {
                var prevHoverState = that.hoverState;
                that.$element.trigger("shown.bs." + that.type), that.hoverState = null, "out" == prevHoverState && that.leave(that);
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
    }, Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip(), width = $tip[0].offsetWidth, height = $tip[0].offsetHeight, marginTop = parseInt($tip.css("margin-top"), 10), marginLeft = parseInt($tip.css("margin-left"), 10);
        isNaN(marginTop) && (marginTop = 0), isNaN(marginLeft) && (marginLeft = 0), offset.top = offset.top + marginTop, 
        offset.left = offset.left + marginLeft, $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                });
            }
        }, offset), 0), $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
        "top" == placement && actualHeight != height && (offset.top = offset.top + height - actualHeight);
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        delta.left ? offset.left += delta.left : offset.top += delta.top;
        var isVertical = /top|bottom/.test(placement), arrowDelta = isVertical ? 2 * delta.left - width + actualWidth : 2 * delta.top - height + actualHeight, arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset), this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    }, Tooltip.prototype.replaceArrow = function(delta, dimension, isHorizontal) {
        this.arrow().css(isHorizontal ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isHorizontal ? "top" : "left", "");
    }, Tooltip.prototype.setContent = function() {
        var $tip = this.tip(), title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title), $tip.removeClass("fade in top bottom left right");
    }, Tooltip.prototype.hide = function(callback) {
        function complete() {
            "in" != that.hoverState && $tip.detach(), that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type), 
            callback && callback();
        }
        var that = this, $tip = this.tip(), e = $.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : ($tip.removeClass("in"), 
        $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete(), 
        this.hoverState = null, this);
    }, Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        ($e.attr("title") || "string" != typeof $e.attr("data-original-title")) && $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
    }, Tooltip.prototype.hasContent = function() {
        return this.getTitle();
    }, Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0], isBody = "BODY" == el.tagName, elRect = el.getBoundingClientRect();
        null == elRect.width && (elRect = $.extend({}, elRect, {
            width: elRect.right - elRect.left,
            height: elRect.bottom - elRect.top
        }));
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset(), scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        }, outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null;
        return $.extend({}, elRect, scroll, outerDims, elOffset);
    }, Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return "bottom" == placement ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : "top" == placement ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : "left" == placement ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        };
    }, Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0, viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll, bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            topEdgeOffset < viewportDimensions.top ? delta.top = viewportDimensions.top - topEdgeOffset : bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height && (delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset);
        } else {
            var leftEdgeOffset = pos.left - viewportPadding, rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            leftEdgeOffset < viewportDimensions.left ? delta.left = viewportDimensions.left - leftEdgeOffset : rightEdgeOffset > viewportDimensions.width && (delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset);
        }
        return delta;
    }, Tooltip.prototype.getTitle = function() {
        var title, $e = this.$element, o = this.options;
        return title = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title);
    }, Tooltip.prototype.getUID = function(prefix) {
        do prefix += ~~(1e6 * Math.random()); while (document.getElementById(prefix));
        return prefix;
    }, Tooltip.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template);
    }, Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, Tooltip.prototype.enable = function() {
        this.enabled = !0;
    }, Tooltip.prototype.disable = function() {
        this.enabled = !1;
    }, Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, Tooltip.prototype.toggle = function(e) {
        var self = this;
        e && (self = $(e.currentTarget).data("bs." + this.type), self || (self = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        $(e.currentTarget).data("bs." + this.type, self))), self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
    }, Tooltip.prototype.destroy = function() {
        var that = this;
        clearTimeout(this.timeout), this.hide(function() {
            that.$element.off("." + that.type).removeData("bs." + that.type);
        });
    };
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin, $.fn.tooltip.Constructor = Tooltip, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = old, this;
    };
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.popover"), options = "object" == typeof option && option;
            (data || "destroy" != option) && (data || $this.data("bs.popover", data = new Popover(this, options)), 
            "string" == typeof option && data[option]());
        });
    }
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.2", Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), Popover.prototype.constructor = Popover, 
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
    }, Popover.prototype.setContent = function() {
        var $tip = this.tip(), title = this.getTitle(), content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title), $tip.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof content ? "html" : "append" : "text"](content), 
        $tip.removeClass("fade top bottom left right in"), $tip.find(".popover-title").html() || $tip.find(".popover-title").hide();
    }, Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, Popover.prototype.getContent = function() {
        var $e = this.$element, o = this.options;
        return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content);
    }, Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, Popover.prototype.tip = function() {
        return this.$tip || (this.$tip = $(this.options.template)), this.$tip;
    };
    var old = $.fn.popover;
    $.fn.popover = Plugin, $.fn.popover.Constructor = Popover, $.fn.popover.noConflict = function() {
        return $.fn.popover = old, this;
    };
}(jQuery), +function($) {
    function ScrollSpy(element, options) {
        var process = $.proxy(this.process, this);
        this.$body = $("body"), this.$scrollElement = $($(element).is("body") ? window : element), 
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", process), this.refresh(), this.process();
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.scrollspy"), options = "object" == typeof option && option;
            data || $this.data("bs.scrollspy", data = new ScrollSpy(this, options)), "string" == typeof option && data[option]();
        });
    }
    ScrollSpy.VERSION = "3.3.2", ScrollSpy.DEFAULTS = {
        offset: 10
    }, ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, ScrollSpy.prototype.refresh = function() {
        var offsetMethod = "offset", offsetBase = 0;
        $.isWindow(this.$scrollElement[0]) || (offsetMethod = "position", offsetBase = this.$scrollElement.scrollTop()), 
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var self = this;
        this.$body.find(this.selector).map(function() {
            var $el = $(this), href = $el.data("target") || $el.attr("href"), $href = /^#./.test(href) && $(href);
            return $href && $href.length && $href.is(":visible") && [ [ $href[offsetMethod]().top + offsetBase, href ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            self.offsets.push(this[0]), self.targets.push(this[1]);
        });
    }, ScrollSpy.prototype.process = function() {
        var i, scrollTop = this.$scrollElement.scrollTop() + this.options.offset, scrollHeight = this.getScrollHeight(), maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height(), offsets = this.offsets, targets = this.targets, activeTarget = this.activeTarget;
        if (this.scrollHeight != scrollHeight && this.refresh(), scrollTop >= maxScroll) return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        if (activeTarget && scrollTop < offsets[0]) return this.activeTarget = null, this.clear();
        for (i = offsets.length; i--; ) activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }, ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target, this.clear();
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]', active = $(selector).parents("li").addClass("active");
        active.parent(".dropdown-menu").length && (active = active.closest("li.dropdown").addClass("active")), 
        active.trigger("activate.bs.scrollspy");
    }, ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var old = $.fn.scrollspy;
    $.fn.scrollspy = Plugin, $.fn.scrollspy.Constructor = ScrollSpy, $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = old, this;
    }, $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            Plugin.call($spy, $spy.data());
        });
    });
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.tab");
            data || $this.data("bs.tab", data = new Tab(this)), "string" == typeof option && data[option]();
        });
    }
    var Tab = function(element) {
        this.element = $(element);
    };
    Tab.VERSION = "3.3.2", Tab.TRANSITION_DURATION = 150, Tab.prototype.show = function() {
        var $this = this.element, $ul = $this.closest("ul:not(.dropdown-menu)"), selector = $this.data("target");
        if (selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")), 
        !$this.parent("li").hasClass("active")) {
            var $previous = $ul.find(".active:last a"), hideEvent = $.Event("hide.bs.tab", {
                relatedTarget: $this[0]
            }), showEvent = $.Event("show.bs.tab", {
                relatedTarget: $previous[0]
            });
            if ($previous.trigger(hideEvent), $this.trigger(showEvent), !showEvent.isDefaultPrevented() && !hideEvent.isDefaultPrevented()) {
                var $target = $(selector);
                this.activate($this.closest("li"), $ul), this.activate($target, $target.parent(), function() {
                    $previous.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: $this[0]
                    }), $this.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: $previous[0]
                    });
                });
            }
        }
    }, Tab.prototype.activate = function(element, container, callback) {
        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            transition ? (element[0].offsetWidth, element.addClass("in")) : element.removeClass("fade"), 
            element.parent(".dropdown-menu") && element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            callback && callback();
        }
        var $active = container.find("> .active"), transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next(), 
        $active.removeClass("in");
    };
    var old = $.fn.tab;
    $.fn.tab = Plugin, $.fn.tab.Constructor = Tab, $.fn.tab.noConflict = function() {
        return $.fn.tab = old, this;
    };
    var clickHandler = function(e) {
        e.preventDefault(), Plugin.call($(this), "show");
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery), +function($) {
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.affix"), options = "object" == typeof option && option;
            data || $this.data("bs.affix", data = new Affix(this, options)), "string" == typeof option && data[option]();
        });
    }
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = $(element), this.affixed = this.unpin = this.pinnedOffset = null, 
        this.checkPosition();
    };
    Affix.VERSION = "3.3.2", Affix.RESET = "affix affix-top affix-bottom", Affix.DEFAULTS = {
        offset: 0,
        target: window
    }, Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop(), position = this.$element.offset(), targetHeight = this.$target.height();
        if (null != offsetTop && "top" == this.affixed) return offsetTop > scrollTop ? "top" : !1;
        if ("bottom" == this.affixed) return null != offsetTop ? scrollTop + this.unpin <= position.top ? !1 : "bottom" : scrollHeight - offsetBottom >= scrollTop + targetHeight ? !1 : "bottom";
        var initializing = null == this.affixed, colliderTop = initializing ? scrollTop : position.top, colliderHeight = initializing ? targetHeight : height;
        return null != offsetTop && offsetTop >= scrollTop ? "top" : null != offsetBottom && colliderTop + colliderHeight >= scrollHeight - offsetBottom ? "bottom" : !1;
    }, Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop(), position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
    }, Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
    }, Affix.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var height = this.$element.height(), offset = this.options.offset, offsetTop = offset.top, offsetBottom = offset.bottom, scrollHeight = $("body").height();
            "object" != typeof offset && (offsetBottom = offsetTop = offset), "function" == typeof offsetTop && (offsetTop = offset.top(this.$element)), 
            "function" == typeof offsetBottom && (offsetBottom = offset.bottom(this.$element));
            var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
            if (this.affixed != affix) {
                null != this.unpin && this.$element.css("top", "");
                var affixType = "affix" + (affix ? "-" + affix : ""), e = $.Event(affixType + ".bs.affix");
                if (this.$element.trigger(e), e.isDefaultPrevented()) return;
                this.affixed = affix, this.unpin = "bottom" == affix ? this.getPinnedOffset() : null, 
                this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == affix && this.$element.offset({
                top: scrollHeight - height - offsetBottom
            });
        }
    };
    var old = $.fn.affix;
    $.fn.affix = Plugin, $.fn.affix.Constructor = Affix, $.fn.affix.noConflict = function() {
        return $.fn.affix = old, this;
    }, $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this), data = $spy.data();
            data.offset = data.offset || {}, null != data.offsetBottom && (data.offset.bottom = data.offsetBottom), 
            null != data.offsetTop && (data.offset.top = data.offsetTop), Plugin.call($spy, data);
        });
    });
}(jQuery), "undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");

$.AdminLTE = {}, $.AdminLTE.options = {
    navbarMenuSlimscroll: !0,
    navbarMenuSlimscrollWidth: "3px",
    navbarMenuHeight: "200px",
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    sidebarPushMenu: !0,
    sidebarSlimScroll: !0,
    enableBoxRefresh: !0,
    enableBSToppltip: !0,
    BSTooltipSelector: "[data-toggle='tooltip']",
    enableFastclick: !0,
    enableBoxWidget: !0,
    boxWidgetOptions: {
        boxWidgetIcons: {
            collapse: "fa fa-minus",
            open: "fa fa-plus",
            remove: "fa fa-times"
        },
        boxWidgetSelectors: {
            remove: '[data-widget="remove"]',
            collapse: '[data-widget="collapse"]'
        }
    },
    directChat: {
        enable: !0,
        contactToggleSelector: '[data-widget="chat-pane-toggle"]'
    },
    colors: {
        lightBlue: "#3c8dbc",
        red: "#f56954",
        green: "#00a65a",
        aqua: "#00c0ef",
        yellow: "#f39c12",
        blue: "#0073b7",
        navy: "#001F3F",
        teal: "#39CCCC",
        olive: "#3D9970",
        lime: "#01FF70",
        orange: "#FF851B",
        fuchsia: "#F012BE",
        purple: "#8E24AA",
        maroon: "#D81B60",
        black: "#222222",
        gray: "#d2d6de"
    },
    screenSizes: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
}, $(function() {
    var o = $.AdminLTE.options;
    $.AdminLTE.layout.activate(), $.AdminLTE.tree(".sidebar"), o.navbarMenuSlimscroll && "undefined" != typeof $.fn.slimscroll && $(".navbar .menu").slimscroll({
        height: "200px",
        alwaysVisible: !1,
        size: "3px"
    }).css("width", "100%"), o.sidebarPushMenu && $.AdminLTE.pushMenu(o.sidebarToggleSelector), 
    o.enableBSToppltip && $(o.BSTooltipSelector).tooltip(), o.enableBoxWidget && $.AdminLTE.boxWidget.activate(), 
    o.enableFastclick && "undefined" != typeof FastClick && FastClick.attach(document.body), 
    o.directChat.enable && $(o.directChat.contactToggleSelector).click(function() {
        var box = $(this).parents(".direct-chat").first();
        box.toggleClass("direct-chat-contacts-open");
    }), $('.btn-group[data-toggle="btn-toggle"]').each(function() {
        var group = $(this);
        $(this).find(".btn").click(function(e) {
            group.find(".btn.active").removeClass("active"), $(this).addClass("active"), e.preventDefault();
        });
    });
}), $.AdminLTE.layout = {
    activate: function() {
        var _this = this;
        _this.fix(), _this.fixSidebar(), $(window, ".wrapper").resize(function() {
            _this.fix(), _this.fixSidebar();
        });
    },
    fix: function() {
        var neg = $(".main-header").outerHeight() + $(".main-footer").outerHeight(), window_height = $(window).height(), sidebar_height = $(".sidebar").height();
        $("body").hasClass("fixed") ? $(".content-wrapper, .right-side").css("min-height", window_height - $(".main-footer").outerHeight()) : window_height >= sidebar_height ? $(".content-wrapper, .right-side").css("min-height", window_height - neg) : $(".content-wrapper, .right-side").css("min-height", sidebar_height);
    },
    fixSidebar: function() {
        return $("body").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll && console && console.error("Error: the fixed layout requires the slimscroll plugin!"), 
        void ($.AdminLTE.options.sidebarSlimScroll && "undefined" != typeof $.fn.slimScroll && ($(".sidebar").slimScroll({
            destroy: !0
        }).height("auto"), $(".sidebar").slimscroll({
            height: $(window).height() - $(".main-header").height() + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
        })))) : void ("undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({
            destroy: !0
        }).height("auto"));
    }
}, $.AdminLTE.pushMenu = function(toggleBtn) {
    var screenSizes = this.options.screenSizes;
    $(toggleBtn).click(function(e) {
        e.preventDefault(), $(window).width() > screenSizes.sm - 1 ? $("body").toggleClass("sidebar-collapse") : $("body").hasClass("sidebar-open") ? ($("body").removeClass("sidebar-open"), 
        $("body").removeClass("sidebar-collapse")) : $("body").addClass("sidebar-open");
    }), $(".content-wrapper").click(function() {
        $(window).width() <= screenSizes.sm - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open");
    });
}, $.AdminLTE.tree = function(menu) {
    var _this = this;
    $("li a", $(menu)).click(function(e) {
        var $this = $(this), checkElement = $this.next();
        if (checkElement.is(".treeview-menu") && checkElement.is(":visible")) checkElement.slideUp("normal", function() {
            checkElement.removeClass("menu-open");
        }), checkElement.parent("li").removeClass("active"); else if (checkElement.is(".treeview-menu") && !checkElement.is(":visible")) {
            var parent = $this.parents("ul").first(), ul = parent.find("ul:visible").slideUp("normal");
            ul.removeClass("menu-open");
            var parent_li = $this.parent("li");
            checkElement.slideDown("normal", function() {
                checkElement.addClass("menu-open"), parent.find("li.active").removeClass("active"), 
                parent_li.addClass("active"), _this.layout.fix();
            });
        }
        checkElement.is(".treeview-menu") && e.preventDefault();
    });
}, $.AdminLTE.boxWidget = {
    activate: function() {
        var o = $.AdminLTE.options, _this = this;
        $(o.boxWidgetOptions.boxWidgetSelectors.collapse).click(function(e) {
            e.preventDefault(), _this.collapse($(this));
        }), $(o.boxWidgetOptions.boxWidgetSelectors.remove).click(function(e) {
            e.preventDefault(), _this.remove($(this));
        });
    },
    collapse: function(element) {
        var box = element.parents(".box").first(), bf = box.find(".box-body, .box-footer");
        box.hasClass("collapsed-box") ? (element.children(".fa-plus").removeClass("fa-plus").addClass("fa-minus"), 
        bf.slideDown(300, function() {
            box.removeClass("collapsed-box");
        })) : (element.children(".fa-minus").removeClass("fa-minus").addClass("fa-plus"), 
        bf.slideUp(300, function() {
            box.addClass("collapsed-box");
        }));
    },
    remove: function(element) {
        var box = element.parents(".box").first();
        box.slideUp();
    },
    options: $.AdminLTE.options.boxWidgetOptions
}, function($) {
    $.fn.boxRefresh = function(options) {
        function start(box) {
            box.append(overlay), settings.onLoadStart.call(box);
        }
        function done(box) {
            box.find(overlay).remove(), settings.onLoadDone.call(box);
        }
        var settings = $.extend({
            trigger: ".refresh-btn",
            source: "",
            onLoadStart: function() {},
            onLoadDone: function() {}
        }, options), overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
        return this.each(function() {
            if ("" === settings.source) return void (console && console.log("Please specify a source first - boxRefresh()"));
            var box = $(this), rBtn = box.find(settings.trigger).first();
            rBtn.click(function(e) {
                e.preventDefault(), start(box), box.find(".box-body").load(settings.source, function() {
                    done(box);
                });
            });
        });
    };
}(jQuery), function($) {
    $.fn.todolist = function(options) {
        var settings = $.extend({
            onCheck: function() {},
            onUncheck: function() {}
        }, options);
        return this.each(function() {
            "undefined" != typeof $.fn.iCheck ? ($("input", this).on("ifChecked", function() {
                var ele = $(this).parents("li").first();
                ele.toggleClass("done"), settings.onCheck.call(ele);
            }), $("input", this).on("ifUnchecked", function() {
                var ele = $(this).parents("li").first();
                ele.toggleClass("done"), settings.onUncheck.call(ele);
            })) : $("input", this).on("change", function() {
                var ele = $(this).parents("li").first();
                ele.toggleClass("done"), settings.onCheck.call(ele);
            });
        });
    };
}(jQuery), function($) {
    function isInputEventSupported(eventName) {
        var el = document.createElement("input"), eventName = "on" + eventName, isSupported = eventName in el;
        return isSupported || (el.setAttribute(eventName, "return;"), isSupported = "function" == typeof el[eventName]), 
        el = null, isSupported;
    }
    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = opts.aliases[aliasStr];
        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), 
        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : !1;
    }
    function generateMaskSets(opts) {
        function getMaskTemplate(mask) {
            opts.numericInput && (mask = mask.split("").reverse().join(""));
            var escaped = !1, outCount = 0, greedy = opts.greedy, repeat = opts.repeat;
            "*" == repeat && (greedy = !1), 1 == mask.length && 0 == greedy && 0 != repeat && (opts.placeholder = "");
            for (var singleMask = $.map(mask.split(""), function(element) {
                var outElem = [];
                if (element == opts.escapeChar) escaped = !0; else if (element != opts.optionalmarker.start && element != opts.optionalmarker.end || escaped) {
                    var maskdef = opts.definitions[element];
                    if (maskdef && !escaped) for (var i = 0; i < maskdef.cardinality; i++) outElem.push(opts.placeholder.charAt((outCount + i) % opts.placeholder.length)); else outElem.push(element), 
                    escaped = !1;
                    return outCount += outElem.length, outElem;
                }
            }), repeatedMask = singleMask.slice(), i = 1; repeat > i && greedy; i++) repeatedMask = repeatedMask.concat(singleMask.slice());
            return {
                mask: repeatedMask,
                repeat: repeat,
                greedy: greedy
            };
        }
        function getTestingChain(mask) {
            opts.numericInput && (mask = mask.split("").reverse().join(""));
            var isOptional = !1, escaped = !1, newBlockMarker = !1;
            return $.map(mask.split(""), function(element) {
                var outElem = [];
                if (element == opts.escapeChar) escaped = !0; else if (element != opts.optionalmarker.start || escaped) {
                    if (element != opts.optionalmarker.end || escaped) {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;
                                outElem.push({
                                    fn: validator ? "string" == typeof validator ? new RegExp(validator) : new function() {
                                        this.test = validator;
                                    }() : new RegExp("."),
                                    cardinality: cardinality ? cardinality : 1,
                                    optionality: isOptional,
                                    newBlockMarker: 1 == isOptional ? newBlockMarker : !1,
                                    offset: 0,
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element
                                }), 1 == isOptional && (newBlockMarker = !1);
                            }
                            outElem.push({
                                fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator) : new function() {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                cardinality: maskdef.cardinality,
                                optionality: isOptional,
                                newBlockMarker: newBlockMarker,
                                offset: 0,
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element
                            });
                        } else outElem.push({
                            fn: null,
                            cardinality: 0,
                            optionality: isOptional,
                            newBlockMarker: newBlockMarker,
                            offset: 0,
                            casing: null,
                            def: element
                        }), escaped = !1;
                        return newBlockMarker = !1, outElem;
                    }
                    isOptional = !1, newBlockMarker = !0;
                } else isOptional = !0, newBlockMarker = !0;
            });
        }
        function markOptional(maskPart) {
            return opts.optionalmarker.start + maskPart + opts.optionalmarker.end;
        }
        function splitFirstOptionalEndPart(maskPart) {
            for (var optionalStartMarkers = 0, optionalEndMarkers = 0, mpl = maskPart.length, i = 0; mpl > i && (maskPart.charAt(i) == opts.optionalmarker.start && optionalStartMarkers++, 
            maskPart.charAt(i) == opts.optionalmarker.end && optionalEndMarkers++, !(optionalStartMarkers > 0 && optionalStartMarkers == optionalEndMarkers)); i++) ;
            var maskParts = [ maskPart.substring(0, i) ];
            return mpl > i && maskParts.push(maskPart.substring(i + 1, mpl)), maskParts;
        }
        function splitFirstOptionalStartPart(maskPart) {
            for (var mpl = maskPart.length, i = 0; mpl > i && maskPart.charAt(i) != opts.optionalmarker.start; i++) ;
            var maskParts = [ maskPart.substring(0, i) ];
            return mpl > i && maskParts.push(maskPart.substring(i + 1, mpl)), maskParts;
        }
        function generateMask(maskPrefix, maskPart, metadata) {
            var newMask, maskTemplate, maskParts = splitFirstOptionalEndPart(maskPart), masks = splitFirstOptionalStartPart(maskParts[0]);
            masks.length > 1 ? (newMask = maskPrefix + masks[0] + markOptional(masks[1]) + (maskParts.length > 1 ? maskParts[1] : ""), 
            -1 == $.inArray(newMask, genmasks) && "" != newMask && (genmasks.push(newMask), 
            maskTemplate = getMaskTemplate(newMask), ms.push({
                mask: newMask,
                _buffer: maskTemplate.mask,
                buffer: maskTemplate.mask.slice(),
                tests: getTestingChain(newMask),
                lastValidPosition: -1,
                greedy: maskTemplate.greedy,
                repeat: maskTemplate.repeat,
                metadata: metadata
            })), newMask = maskPrefix + masks[0] + (maskParts.length > 1 ? maskParts[1] : ""), 
            -1 == $.inArray(newMask, genmasks) && "" != newMask && (genmasks.push(newMask), 
            maskTemplate = getMaskTemplate(newMask), ms.push({
                mask: newMask,
                _buffer: maskTemplate.mask,
                buffer: maskTemplate.mask.slice(),
                tests: getTestingChain(newMask),
                lastValidPosition: -1,
                greedy: maskTemplate.greedy,
                repeat: maskTemplate.repeat,
                metadata: metadata
            })), splitFirstOptionalStartPart(masks[1]).length > 1 && generateMask(maskPrefix + masks[0], masks[1] + maskParts[1], metadata), 
            maskParts.length > 1 && splitFirstOptionalStartPart(maskParts[1]).length > 1 && (generateMask(maskPrefix + masks[0] + markOptional(masks[1]), maskParts[1], metadata), 
            generateMask(maskPrefix + masks[0], maskParts[1], metadata))) : (newMask = maskPrefix + maskParts, 
            -1 == $.inArray(newMask, genmasks) && "" != newMask && (genmasks.push(newMask), 
            maskTemplate = getMaskTemplate(newMask), ms.push({
                mask: newMask,
                _buffer: maskTemplate.mask,
                buffer: maskTemplate.mask.slice(),
                tests: getTestingChain(newMask),
                lastValidPosition: -1,
                greedy: maskTemplate.greedy,
                repeat: maskTemplate.repeat,
                metadata: metadata
            })));
        }
        var ms = [], genmasks = [];
        return $.isFunction(opts.mask) && (opts.mask = opts.mask.call(this, opts)), $.isArray(opts.mask) ? $.each(opts.mask, function(ndx, msk) {
            void 0 != msk.mask ? generateMask("", msk.mask.toString(), msk) : generateMask("", msk.toString());
        }) : generateMask("", opts.mask.toString()), opts.greedy ? ms : ms.sort(function(a, b) {
            return a.mask.length - b.mask.length;
        });
    }
    function maskScope(masksets, activeMasksetIndex, opts, actionObj) {
        function getActiveMaskSet() {
            return masksets[activeMasksetIndex];
        }
        function getActiveTests() {
            return getActiveMaskSet().tests;
        }
        function getActiveBufferTemplate() {
            return getActiveMaskSet()._buffer;
        }
        function getActiveBuffer() {
            return getActiveMaskSet().buffer;
        }
        function isValid(pos, c, strict) {
            function _isValid(position, activeMaskset, c, strict) {
                for (var testPos = determineTestPosition(position), loopend = c ? 1 : 0, chrs = "", buffer = activeMaskset.buffer, i = activeMaskset.tests[testPos].cardinality; i > loopend; i--) chrs += getBufferElement(buffer, testPos - (i - 1));
                return c && (chrs += c), null != activeMaskset.tests[testPos].fn ? activeMaskset.tests[testPos].fn.test(chrs, buffer, position, strict, opts) : c == getBufferElement(activeMaskset._buffer, position, !0) || c == opts.skipOptionalPartCharacter ? {
                    refresh: !0,
                    c: getBufferElement(activeMaskset._buffer, position, !0),
                    pos: position
                } : !1;
            }
            function PostProcessResults(maskForwards, results) {
                var hasValidActual = !1;
                if ($.each(results, function(ndx, rslt) {
                    return hasValidActual = -1 == $.inArray(rslt.activeMasksetIndex, maskForwards) && rslt.result !== !1, 
                    hasValidActual ? !1 : void 0;
                }), hasValidActual) results = $.map(results, function(rslt) {
                    return -1 == $.inArray(rslt.activeMasksetIndex, maskForwards) ? rslt : void (masksets[rslt.activeMasksetIndex].lastValidPosition = actualLVP);
                }); else {
                    var rsltValid, lowestPos = -1, lowestIndex = -1;
                    $.each(results, function(ndx, rslt) {
                        -1 != $.inArray(rslt.activeMasksetIndex, maskForwards) && rslt.result !== !1 & (-1 == lowestPos || lowestPos > rslt.result.pos) && (lowestPos = rslt.result.pos, 
                        lowestIndex = rslt.activeMasksetIndex);
                    }), results = $.map(results, function(rslt) {
                        if (-1 != $.inArray(rslt.activeMasksetIndex, maskForwards)) {
                            if (rslt.result.pos == lowestPos) return rslt;
                            if (rslt.result !== !1) {
                                for (var i = pos; lowestPos > i; i++) {
                                    if (rsltValid = _isValid(i, masksets[rslt.activeMasksetIndex], masksets[lowestIndex].buffer[i], !0), 
                                    rsltValid === !1) {
                                        masksets[rslt.activeMasksetIndex].lastValidPosition = lowestPos - 1;
                                        break;
                                    }
                                    setBufferElement(masksets[rslt.activeMasksetIndex].buffer, i, masksets[lowestIndex].buffer[i], !0), 
                                    masksets[rslt.activeMasksetIndex].lastValidPosition = i;
                                }
                                return rsltValid = _isValid(lowestPos, masksets[rslt.activeMasksetIndex], c, !0), 
                                rsltValid !== !1 && (setBufferElement(masksets[rslt.activeMasksetIndex].buffer, lowestPos, c, !0), 
                                masksets[rslt.activeMasksetIndex].lastValidPosition = lowestPos), rslt;
                            }
                        }
                    });
                }
                return results;
            }
            if (strict = strict === !0) {
                var result = _isValid(pos, getActiveMaskSet(), c, strict);
                return result === !0 && (result = {
                    pos: pos
                }), result;
            }
            var results = [], result = !1, currentActiveMasksetIndex = activeMasksetIndex, actualBuffer = getActiveBuffer().slice(), actualLVP = getActiveMaskSet().lastValidPosition, maskForwards = (seekPrevious(pos), 
            []);
            return $.each(masksets, function(index, value) {
                if ("object" == typeof value) {
                    activeMasksetIndex = index;
                    var rsltValid, maskPos = pos, lvp = getActiveMaskSet().lastValidPosition;
                    if (lvp == actualLVP) {
                        if (maskPos - actualLVP > 1) for (var i = -1 == lvp ? 0 : lvp; maskPos > i && (rsltValid = _isValid(i, getActiveMaskSet(), actualBuffer[i], !0), 
                        rsltValid !== !1); i++) {
                            setBufferElement(getActiveBuffer(), i, actualBuffer[i], !0), rsltValid === !0 && (rsltValid = {
                                pos: i
                            });
                            var newValidPosition = rsltValid.pos || i;
                            getActiveMaskSet().lastValidPosition < newValidPosition && (getActiveMaskSet().lastValidPosition = newValidPosition);
                        }
                        if (!isMask(maskPos) && !_isValid(maskPos, getActiveMaskSet(), c, strict)) {
                            for (var maxForward = seekNext(maskPos) - maskPos, fw = 0; maxForward > fw && _isValid(++maskPos, getActiveMaskSet(), c, strict) === !1; fw++) ;
                            maskForwards.push(activeMasksetIndex);
                        }
                    }
                    if ((getActiveMaskSet().lastValidPosition >= actualLVP || activeMasksetIndex == currentActiveMasksetIndex) && maskPos >= 0 && maskPos < getMaskLength()) {
                        if (result = _isValid(maskPos, getActiveMaskSet(), c, strict), result !== !1) {
                            result === !0 && (result = {
                                pos: maskPos
                            });
                            var newValidPosition = result.pos || maskPos;
                            getActiveMaskSet().lastValidPosition < newValidPosition && (getActiveMaskSet().lastValidPosition = newValidPosition);
                        }
                        results.push({
                            activeMasksetIndex: index,
                            result: result
                        });
                    }
                }
            }), activeMasksetIndex = currentActiveMasksetIndex, PostProcessResults(maskForwards, results);
        }
        function determineActiveMasksetIndex() {
            var currentMasksetIndex = activeMasksetIndex, highestValid = {
                activeMasksetIndex: 0,
                lastValidPosition: -1,
                next: -1
            };
            $.each(masksets, function(index, value) {
                "object" == typeof value && (activeMasksetIndex = index, getActiveMaskSet().lastValidPosition > highestValid.lastValidPosition ? (highestValid.activeMasksetIndex = index, 
                highestValid.lastValidPosition = getActiveMaskSet().lastValidPosition, highestValid.next = seekNext(getActiveMaskSet().lastValidPosition)) : getActiveMaskSet().lastValidPosition == highestValid.lastValidPosition && (-1 == highestValid.next || highestValid.next > seekNext(getActiveMaskSet().lastValidPosition)) && (highestValid.activeMasksetIndex = index, 
                highestValid.lastValidPosition = getActiveMaskSet().lastValidPosition, highestValid.next = seekNext(getActiveMaskSet().lastValidPosition)));
            }), activeMasksetIndex = -1 != highestValid.lastValidPosition && masksets[currentMasksetIndex].lastValidPosition == highestValid.lastValidPosition ? currentMasksetIndex : highestValid.activeMasksetIndex, 
            currentMasksetIndex != activeMasksetIndex && (clearBuffer(getActiveBuffer(), seekNext(highestValid.lastValidPosition), getMaskLength()), 
            getActiveMaskSet().writeOutBuffer = !0), $el.data("_inputmask").activeMasksetIndex = activeMasksetIndex;
        }
        function isMask(pos) {
            var testPos = determineTestPosition(pos), test = getActiveTests()[testPos];
            return void 0 != test ? test.fn : !1;
        }
        function determineTestPosition(pos) {
            return pos % getActiveTests().length;
        }
        function getMaskLength() {
            return opts.getMaskLength(getActiveBufferTemplate(), getActiveMaskSet().greedy, getActiveMaskSet().repeat, getActiveBuffer(), opts);
        }
        function seekNext(pos) {
            var maskL = getMaskLength();
            if (pos >= maskL) return maskL;
            for (var position = pos; ++position < maskL && !isMask(position); ) ;
            return position;
        }
        function seekPrevious(pos) {
            var position = pos;
            if (0 >= position) return 0;
            for (;--position > 0 && !isMask(position); ) ;
            return position;
        }
        function setBufferElement(buffer, position, element, autoPrepare) {
            autoPrepare && (position = prepareBuffer(buffer, position));
            var test = getActiveTests()[determineTestPosition(position)], elem = element;
            if (void 0 != elem && void 0 != test) switch (test.casing) {
              case "upper":
                elem = element.toUpperCase();
                break;

              case "lower":
                elem = element.toLowerCase();
            }
            buffer[position] = elem;
        }
        function getBufferElement(buffer, position, autoPrepare) {
            return autoPrepare && (position = prepareBuffer(buffer, position)), buffer[position];
        }
        function prepareBuffer(buffer, position) {
            for (var j; void 0 == buffer[position] && buffer.length < getMaskLength(); ) for (j = 0; void 0 !== getActiveBufferTemplate()[j]; ) buffer.push(getActiveBufferTemplate()[j++]);
            return position;
        }
        function writeBuffer(input, buffer, caretPos) {
            input._valueSet(buffer.join("")), void 0 != caretPos && caret(input, caretPos);
        }
        function clearBuffer(buffer, start, end, stripNomasks) {
            for (var i = start, maskL = getMaskLength(); end > i && maskL > i; i++) stripNomasks === !0 ? isMask(i) || setBufferElement(buffer, i, "") : setBufferElement(buffer, i, getBufferElement(getActiveBufferTemplate().slice(), i, !0));
        }
        function setReTargetPlaceHolder(buffer, pos) {
            var testPos = determineTestPosition(pos);
            setBufferElement(buffer, pos, getBufferElement(getActiveBufferTemplate(), testPos));
        }
        function getPlaceHolder(pos) {
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function checkVal(input, writeOut, strict, nptvl, intelliCheck) {
            var inputValue = void 0 != nptvl ? nptvl.slice() : truncateInput(input._valueGet()).split("");
            $.each(masksets, function(ndx, ms) {
                "object" == typeof ms && (ms.buffer = ms._buffer.slice(), ms.lastValidPosition = -1, 
                ms.p = -1);
            }), strict !== !0 && (activeMasksetIndex = 0), writeOut && input._valueSet("");
            getMaskLength();
            $.each(inputValue, function(ndx, charCode) {
                if (intelliCheck === !0) {
                    var p = getActiveMaskSet().p, lvp = -1 == p ? p : seekPrevious(p), pos = -1 == lvp ? ndx : seekNext(lvp);
                    -1 == $.inArray(charCode, getActiveBufferTemplate().slice(lvp + 1, pos)) && keypressEvent.call(input, void 0, !0, charCode.charCodeAt(0), writeOut, strict, ndx);
                } else keypressEvent.call(input, void 0, !0, charCode.charCodeAt(0), writeOut, strict, ndx);
            }), strict === !0 && -1 != getActiveMaskSet().p && (getActiveMaskSet().lastValidPosition = seekPrevious(getActiveMaskSet().p));
        }
        function escapeRegex(str) {
            return $.inputmask.escapeRegex.call(this, str);
        }
        function truncateInput(inputValue) {
            return inputValue.replace(new RegExp("(" + escapeRegex(getActiveBufferTemplate().join("")) + ")*$"), "");
        }
        function clearOptionalTail(input) {
            for (var testPos, pos, buffer = getActiveBuffer(), tmpBuffer = buffer.slice(), pos = tmpBuffer.length - 1; pos >= 0; pos--) {
                var testPos = determineTestPosition(pos);
                if (!getActiveTests()[testPos].optionality) break;
                if (isMask(pos) && isValid(pos, buffer[pos], !0)) break;
                tmpBuffer.pop();
            }
            writeBuffer(input, tmpBuffer);
        }
        function unmaskedvalue($input, skipDatepickerCheck) {
            if (!getActiveTests() || skipDatepickerCheck !== !0 && $input.hasClass("hasDatepicker")) return $input[0]._valueGet();
            var umValue = $.map(getActiveBuffer(), function(element, index) {
                return isMask(index) && isValid(index, element, !0) ? element : null;
            }), unmaskedValue = (isRTL ? umValue.reverse() : umValue).join("");
            return void 0 != opts.onUnMask ? opts.onUnMask.call(this, getActiveBuffer().join(""), unmaskedValue) : unmaskedValue;
        }
        function TranslatePosition(pos) {
            if (isRTL && "number" == typeof pos && (!opts.greedy || "" != opts.placeholder)) {
                var bffrLght = getActiveBuffer().length;
                pos = bffrLght - pos;
            }
            return pos;
        }
        function caret(input, begin, end) {
            var range, npt = input.jquery && input.length > 0 ? input[0] : input;
            return "number" != typeof begin ? $(input).is(":visible") ? (npt.setSelectionRange ? (begin = npt.selectionStart, 
            end = npt.selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), 
            begin = TranslatePosition(begin), end = TranslatePosition(end), {
                begin: begin,
                end: end
            }) : {
                begin: 0,
                end: 0
            } : (begin = TranslatePosition(begin), end = TranslatePosition(end), $(input).is(":visible") && (end = "number" == typeof end ? end : begin, 
            npt.scrollLeft = npt.scrollWidth, 0 == opts.insertMode && begin == end && end++, 
            npt.setSelectionRange ? (npt.selectionStart = begin, npt.selectionEnd = android ? begin : end) : npt.createTextRange && (range = npt.createTextRange(), 
            range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), 
            range.select())), void 0);
        }
        function isComplete(buffer) {
            if ("*" == opts.repeat) return void 0;
            var complete = !1, highestValidPosition = 0, currentActiveMasksetIndex = activeMasksetIndex;
            return $.each(masksets, function(ndx, ms) {
                if ("object" == typeof ms) {
                    activeMasksetIndex = ndx;
                    var aml = seekPrevious(getMaskLength());
                    if (ms.lastValidPosition >= highestValidPosition && ms.lastValidPosition == aml) {
                        for (var msComplete = !0, i = 0; aml >= i; i++) {
                            var mask = isMask(i), testPos = determineTestPosition(i);
                            if (mask && (void 0 == buffer[i] || buffer[i] == getPlaceHolder(i)) || !mask && buffer[i] != getActiveBufferTemplate()[testPos]) {
                                msComplete = !1;
                                break;
                            }
                        }
                        if (complete = complete || msComplete) return !1;
                    }
                    highestValidPosition = ms.lastValidPosition;
                }
            }), activeMasksetIndex = currentActiveMasksetIndex, complete;
        }
        function isSelection(begin, end) {
            return isRTL ? begin - end > 1 || begin - end == 1 && opts.insertMode : end - begin > 1 || end - begin == 1 && opts.insertMode;
        }
        function installEventRuler(npt) {
            var events = $._data(npt).events;
            $.each(events, function(eventType, eventHandlers) {
                $.each(eventHandlers, function(ndx, eventHandler) {
                    if ("inputmask" == eventHandler.namespace && "setvalue" != eventHandler.type) {
                        var handler = eventHandler.handler;
                        eventHandler.handler = function(e) {
                            return this.readOnly || this.disabled ? void e.preventDefault : handler.apply(this, arguments);
                        };
                    }
                });
            });
        }
        function patchValueProperty(npt) {
            var valueProperty;
            if (Object.getOwnPropertyDescriptor && (valueProperty = Object.getOwnPropertyDescriptor(npt, "value")), 
            valueProperty && valueProperty.get) {
                if (!npt._valueGet) {
                    var valueGet = valueProperty.get, valueSet = valueProperty.set;
                    npt._valueGet = function() {
                        return isRTL ? valueGet.call(this).split("").reverse().join("") : valueGet.call(this);
                    }, npt._valueSet = function(value) {
                        valueSet.call(this, isRTL ? value.split("").reverse().join("") : value);
                    }, Object.defineProperty(npt, "value", {
                        get: function() {
                            var $self = $(this), inputData = $(this).data("_inputmask"), masksets = inputData.masksets, activeMasksetIndex = inputData.activeMasksetIndex;
                            return inputData && inputData.opts.autoUnmask ? $self.inputmask("unmaskedvalue") : valueGet.call(this) != masksets[activeMasksetIndex]._buffer.join("") ? valueGet.call(this) : "";
                        },
                        set: function(value) {
                            valueSet.call(this, value), $(this).triggerHandler("setvalue.inputmask");
                        }
                    });
                }
            } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                if (!npt._valueGet) {
                    var valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value");
                    npt._valueGet = function() {
                        return isRTL ? valueGet.call(this).split("").reverse().join("") : valueGet.call(this);
                    }, npt._valueSet = function(value) {
                        valueSet.call(this, isRTL ? value.split("").reverse().join("") : value);
                    }, npt.__defineGetter__("value", function() {
                        var $self = $(this), inputData = $(this).data("_inputmask"), masksets = inputData.masksets, activeMasksetIndex = inputData.activeMasksetIndex;
                        return inputData && inputData.opts.autoUnmask ? $self.inputmask("unmaskedvalue") : valueGet.call(this) != masksets[activeMasksetIndex]._buffer.join("") ? valueGet.call(this) : "";
                    }), npt.__defineSetter__("value", function(value) {
                        valueSet.call(this, value), $(this).triggerHandler("setvalue.inputmask");
                    });
                }
            } else if (npt._valueGet || (npt._valueGet = function() {
                return isRTL ? this.value.split("").reverse().join("") : this.value;
            }, npt._valueSet = function(value) {
                this.value = isRTL ? value.split("").reverse().join("") : value;
            }), void 0 == $.valHooks.text || 1 != $.valHooks.text.inputmaskpatch) {
                var valueGet = $.valHooks.text && $.valHooks.text.get ? $.valHooks.text.get : function(elem) {
                    return elem.value;
                }, valueSet = $.valHooks.text && $.valHooks.text.set ? $.valHooks.text.set : function(elem, value) {
                    return elem.value = value, elem;
                };
                jQuery.extend($.valHooks, {
                    text: {
                        get: function(elem) {
                            var $elem = $(elem);
                            if ($elem.data("_inputmask")) {
                                if ($elem.data("_inputmask").opts.autoUnmask) return $elem.inputmask("unmaskedvalue");
                                var result = valueGet(elem), inputData = $elem.data("_inputmask"), masksets = inputData.masksets, activeMasksetIndex = inputData.activeMasksetIndex;
                                return result != masksets[activeMasksetIndex]._buffer.join("") ? result : "";
                            }
                            return valueGet(elem);
                        },
                        set: function(elem, value) {
                            var $elem = $(elem), result = valueSet(elem, value);
                            return $elem.data("_inputmask") && $elem.triggerHandler("setvalue.inputmask"), result;
                        },
                        inputmaskpatch: !0
                    }
                });
            }
        }
        function shiftL(start, end, c, maskJumps) {
            var buffer = getActiveBuffer();
            if (maskJumps !== !1) for (;!isMask(start) && start - 1 >= 0; ) start--;
            for (var i = start; end > i && i < getMaskLength(); i++) if (isMask(i)) {
                setReTargetPlaceHolder(buffer, i);
                var j = seekNext(i), p = getBufferElement(buffer, j);
                if (p != getPlaceHolder(j)) if (j < getMaskLength() && isValid(i, p, !0) !== !1 && getActiveTests()[determineTestPosition(i)].def == getActiveTests()[determineTestPosition(j)].def) setBufferElement(buffer, i, p, !0); else if (isMask(i)) break;
            } else setReTargetPlaceHolder(buffer, i);
            if (void 0 != c && setBufferElement(buffer, seekPrevious(end), c), 0 == getActiveMaskSet().greedy) {
                var trbuffer = truncateInput(buffer.join("")).split("");
                buffer.length = trbuffer.length;
                for (var i = 0, bl = buffer.length; bl > i; i++) buffer[i] = trbuffer[i];
                0 == buffer.length && (getActiveMaskSet().buffer = getActiveBufferTemplate().slice());
            }
            return start;
        }
        function shiftR(start, end, c) {
            var buffer = getActiveBuffer();
            if (getBufferElement(buffer, start, !0) != getPlaceHolder(start)) for (var i = seekPrevious(end); i > start && i >= 0; i--) if (isMask(i)) {
                var j = seekPrevious(i), t = getBufferElement(buffer, j);
                t != getPlaceHolder(j) && isValid(j, t, !0) !== !1 && getActiveTests()[determineTestPosition(i)].def == getActiveTests()[determineTestPosition(j)].def && (setBufferElement(buffer, i, t, !0), 
                setReTargetPlaceHolder(buffer, j));
            } else setReTargetPlaceHolder(buffer, i);
            void 0 != c && getBufferElement(buffer, start) == getPlaceHolder(start) && setBufferElement(buffer, start, c);
            var lengthBefore = buffer.length;
            if (0 == getActiveMaskSet().greedy) {
                var trbuffer = truncateInput(buffer.join("")).split("");
                buffer.length = trbuffer.length;
                for (var i = 0, bl = buffer.length; bl > i; i++) buffer[i] = trbuffer[i];
                0 == buffer.length && (getActiveMaskSet().buffer = getActiveBufferTemplate().slice());
            }
            return end - (lengthBefore - buffer.length);
        }
        function HandleRemove(input, k, pos) {
            if (opts.numericInput || isRTL) {
                switch (k) {
                  case opts.keyCode.BACKSPACE:
                    k = opts.keyCode.DELETE;
                    break;

                  case opts.keyCode.DELETE:
                    k = opts.keyCode.BACKSPACE;
                }
                if (isRTL) {
                    var pend = pos.end;
                    pos.end = pos.begin, pos.begin = pend;
                }
            }
            var isSelection = !0;
            if (pos.begin == pos.end) {
                var posBegin = k == opts.keyCode.BACKSPACE ? pos.begin - 1 : pos.begin;
                opts.isNumeric && "" != opts.radixPoint && getActiveBuffer()[posBegin] == opts.radixPoint && (pos.begin = getActiveBuffer().length - 1 == posBegin ? pos.begin : k == opts.keyCode.BACKSPACE ? posBegin : seekNext(posBegin), 
                pos.end = pos.begin), isSelection = !1, k == opts.keyCode.BACKSPACE ? pos.begin-- : k == opts.keyCode.DELETE && pos.end++;
            } else pos.end - pos.begin != 1 || opts.insertMode || (isSelection = !1, k == opts.keyCode.BACKSPACE && pos.begin--);
            clearBuffer(getActiveBuffer(), pos.begin, pos.end);
            var ml = getMaskLength();
            if (0 == opts.greedy) shiftL(pos.begin, ml, void 0, !isRTL && k == opts.keyCode.BACKSPACE && !isSelection); else {
                for (var newpos = pos.begin, i = pos.begin; i < pos.end; i++) (isMask(i) || !isSelection) && (newpos = shiftL(pos.begin, ml, void 0, !isRTL && k == opts.keyCode.BACKSPACE && !isSelection));
                isSelection || (pos.begin = newpos);
            }
            var firstMaskPos = seekNext(-1);
            clearBuffer(getActiveBuffer(), pos.begin, pos.end, !0), checkVal(input, !1, void 0 == masksets[1] || firstMaskPos >= pos.end, getActiveBuffer()), 
            getActiveMaskSet().lastValidPosition < firstMaskPos ? (getActiveMaskSet().lastValidPosition = -1, 
            getActiveMaskSet().p = firstMaskPos) : getActiveMaskSet().p = pos.begin;
        }
        function keydownEvent(e) {
            skipKeyPressEvent = !1;
            var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
            k == opts.keyCode.BACKSPACE || k == opts.keyCode.DELETE || iphone && 127 == k || e.ctrlKey && 88 == k ? (e.preventDefault(), 
            88 == k && (valueOnFocus = getActiveBuffer().join("")), HandleRemove(input, k, pos), 
            determineActiveMasksetIndex(), writeBuffer(input, getActiveBuffer(), getActiveMaskSet().p), 
            input._valueGet() == getActiveBufferTemplate().join("") && $input.trigger("cleared"), 
            opts.showTooltip && $input.prop("title", getActiveMaskSet().mask)) : k == opts.keyCode.END || k == opts.keyCode.PAGE_DOWN ? setTimeout(function() {
                var caretPos = seekNext(getActiveMaskSet().lastValidPosition);
                opts.insertMode || caretPos != getMaskLength() || e.shiftKey || caretPos--, caret(input, e.shiftKey ? pos.begin : caretPos, caretPos);
            }, 0) : k == opts.keyCode.HOME && !e.shiftKey || k == opts.keyCode.PAGE_UP ? caret(input, 0, e.shiftKey ? pos.begin : 0) : k == opts.keyCode.ESCAPE || 90 == k && e.ctrlKey ? (checkVal(input, !0, !1, valueOnFocus.split("")), 
            $input.click()) : k != opts.keyCode.INSERT || e.shiftKey || e.ctrlKey ? 0 != opts.insertMode || e.shiftKey || (k == opts.keyCode.RIGHT ? setTimeout(function() {
                var caretPos = caret(input);
                caret(input, caretPos.begin);
            }, 0) : k == opts.keyCode.LEFT && setTimeout(function() {
                var caretPos = caret(input);
                caret(input, caretPos.begin - 1);
            }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin != getMaskLength() ? pos.begin : pos.begin - 1));
            var currentCaretPos = caret(input);
            opts.onKeyDown.call(this, e, getActiveBuffer(), opts) === !0 && caret(input, currentCaretPos.begin, currentCaretPos.end), 
            ignorable = -1 != $.inArray(k, opts.ignorables);
        }
        function keypressEvent(e, checkval, k, writeOut, strict, ndx) {
            if (void 0 == k && skipKeyPressEvent) return !1;
            skipKeyPressEvent = !0;
            var input = this, $input = $(input);
            e = e || window.event;
            var k = checkval ? k : e.which || e.charCode || e.keyCode;
            if (!(checkval === !0 || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return !0;
            if (k) {
                checkval !== !0 && 46 == k && 0 == e.shiftKey && "," == opts.radixPoint && (k = 44);
                var pos, results, result, c = String.fromCharCode(k);
                if (checkval) {
                    var pcaret = strict ? ndx : getActiveMaskSet().lastValidPosition + 1;
                    pos = {
                        begin: pcaret,
                        end: pcaret
                    };
                } else pos = caret(input);
                var isSlctn = isSelection(pos.begin, pos.end), initialIndex = activeMasksetIndex;
                isSlctn && (activeMasksetIndex = initialIndex, $.each(masksets, function(ndx, lmnt) {
                    "object" == typeof lmnt && (activeMasksetIndex = ndx, getActiveMaskSet().undoBuffer = getActiveBuffer().join(""));
                }), HandleRemove(input, opts.keyCode.DELETE, pos), opts.insertMode || $.each(masksets, function(ndx, lmnt) {
                    "object" == typeof lmnt && (activeMasksetIndex = ndx, shiftR(pos.begin, getMaskLength()), 
                    getActiveMaskSet().lastValidPosition = seekNext(getActiveMaskSet().lastValidPosition));
                }), activeMasksetIndex = initialIndex);
                var radixPosition = getActiveBuffer().join("").indexOf(opts.radixPoint);
                opts.isNumeric && checkval !== !0 && -1 != radixPosition && (opts.greedy && pos.begin <= radixPosition ? (pos.begin = seekPrevious(pos.begin), 
                pos.end = pos.begin) : c == opts.radixPoint && (pos.begin = radixPosition, pos.end = pos.begin));
                var p = pos.begin;
                results = isValid(p, c, strict), strict === !0 && (results = [ {
                    activeMasksetIndex: activeMasksetIndex,
                    result: results
                } ]);
                var minimalForwardPosition = -1;
                if ($.each(results, function(index, result) {
                    activeMasksetIndex = result.activeMasksetIndex, getActiveMaskSet().writeOutBuffer = !0;
                    var np = result.result;
                    if (np !== !1) {
                        var refresh = !1, buffer = getActiveBuffer();
                        if (np !== !0 && (refresh = np.refresh, p = void 0 != np.pos ? np.pos : p, c = void 0 != np.c ? np.c : c), 
                        refresh !== !0) {
                            if (1 == opts.insertMode) {
                                for (var lastUnmaskedPosition = getMaskLength(), bfrClone = buffer.slice(); getBufferElement(bfrClone, lastUnmaskedPosition, !0) != getPlaceHolder(lastUnmaskedPosition) && lastUnmaskedPosition >= p; ) lastUnmaskedPosition = 0 == lastUnmaskedPosition ? -1 : seekPrevious(lastUnmaskedPosition);
                                if (lastUnmaskedPosition >= p) {
                                    shiftR(p, getMaskLength(), c);
                                    var lvp = getActiveMaskSet().lastValidPosition, nlvp = seekNext(lvp);
                                    nlvp != getMaskLength() && lvp >= p && getBufferElement(getActiveBuffer(), nlvp, !0) != getPlaceHolder(nlvp) && (getActiveMaskSet().lastValidPosition = nlvp);
                                } else getActiveMaskSet().writeOutBuffer = !1;
                            } else setBufferElement(buffer, p, c, !0);
                            (-1 == minimalForwardPosition || minimalForwardPosition > seekNext(p)) && (minimalForwardPosition = seekNext(p));
                        } else if (!strict) {
                            var nextPos = p < getMaskLength() ? p + 1 : p;
                            (-1 == minimalForwardPosition || minimalForwardPosition > nextPos) && (minimalForwardPosition = nextPos);
                        }
                        minimalForwardPosition > getActiveMaskSet().p && (getActiveMaskSet().p = minimalForwardPosition);
                    }
                }), strict !== !0 && (activeMasksetIndex = initialIndex, determineActiveMasksetIndex()), 
                writeOut !== !1 && ($.each(results, function(ndx, rslt) {
                    return rslt.activeMasksetIndex == activeMasksetIndex ? (result = rslt, !1) : void 0;
                }), void 0 != result)) {
                    var self = this;
                    if (setTimeout(function() {
                        opts.onKeyValidation.call(self, result.result, opts);
                    }, 0), getActiveMaskSet().writeOutBuffer && result.result !== !1) {
                        var newCaretPosition, buffer = getActiveBuffer();
                        newCaretPosition = checkval ? void 0 : opts.numericInput ? p > radixPosition ? seekPrevious(minimalForwardPosition) : c == opts.radixPoint ? minimalForwardPosition - 1 : seekPrevious(minimalForwardPosition - 1) : minimalForwardPosition, 
                        writeBuffer(input, buffer, newCaretPosition), checkval !== !0 && setTimeout(function() {
                            isComplete(buffer) === !0 && $input.trigger("complete"), skipInputEvent = !0, $input.trigger("input");
                        }, 0);
                    } else isSlctn && (getActiveMaskSet().buffer = getActiveMaskSet().undoBuffer.split(""));
                }
                opts.showTooltip && $input.prop("title", getActiveMaskSet().mask), e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
            }
        }
        function keyupEvent(e) {
            var $input = $(this), input = this, k = e.keyCode, buffer = getActiveBuffer();
            androidchrome && k == opts.keyCode.BACKSPACE && chromeValueOnInput == input._valueGet() && keydownEvent.call(this, e), 
            opts.onKeyUp.call(this, e, buffer, opts), k == opts.keyCode.TAB && opts.showMaskOnFocus && ($input.hasClass("focus.inputmask") && 0 == input._valueGet().length ? (buffer = getActiveBufferTemplate().slice(), 
            writeBuffer(input, buffer), caret(input, 0), valueOnFocus = getActiveBuffer().join("")) : (writeBuffer(input, buffer), 
            buffer.join("") == getActiveBufferTemplate().join("") && -1 != $.inArray(opts.radixPoint, buffer) ? (caret(input, TranslatePosition(0)), 
            $input.click()) : caret(input, TranslatePosition(0), TranslatePosition(getMaskLength()))));
        }
        function inputEvent() {
            if (skipInputEvent === !0) return skipInputEvent = !1, !0;
            var input = this, $input = $(input);
            chromeValueOnInput = getActiveBuffer().join(""), checkVal(input, !1, !1), writeBuffer(input, getActiveBuffer()), 
            isComplete(getActiveBuffer()) === !0 && $input.trigger("complete"), $input.click();
        }
        function mask(el) {
            if ($el = $(el), $el.is(":input")) {
                if ($el.data("_inputmask", {
                    masksets: masksets,
                    activeMasksetIndex: activeMasksetIndex,
                    opts: opts,
                    isRTL: !1
                }), opts.showTooltip && $el.prop("title", getActiveMaskSet().mask), getActiveMaskSet().greedy = getActiveMaskSet().greedy ? getActiveMaskSet().greedy : 0 == getActiveMaskSet().repeat, 
                null != $el.attr("maxLength")) {
                    var maxLength = $el.prop("maxLength");
                    maxLength > -1 && $.each(masksets, function(ndx, ms) {
                        "object" == typeof ms && "*" == ms.repeat && (ms.repeat = maxLength);
                    }), getMaskLength() >= maxLength && maxLength > -1 && (maxLength < getActiveBufferTemplate().length && (getActiveBufferTemplate().length = maxLength), 
                    0 == getActiveMaskSet().greedy && (getActiveMaskSet().repeat = Math.round(maxLength / getActiveBufferTemplate().length)), 
                    $el.prop("maxLength", 2 * getMaskLength()));
                }
                if (patchValueProperty(el), opts.numericInput && (opts.isNumeric = opts.numericInput), 
                ("rtl" == el.dir || opts.numericInput && opts.rightAlignNumerics || opts.isNumeric && opts.rightAlignNumerics) && $el.css("text-align", "right"), 
                "rtl" == el.dir || opts.numericInput) {
                    el.dir = "ltr", $el.removeAttr("dir");
                    var inputData = $el.data("_inputmask");
                    inputData.isRTL = !0, $el.data("_inputmask", inputData), isRTL = !0;
                }
                $el.unbind(".inputmask"), $el.removeClass("focus.inputmask"), $el.closest("form").bind("submit", function() {
                    valueOnFocus != getActiveBuffer().join("") && $el.change();
                }).bind("reset", function() {
                    setTimeout(function() {
                        $el.trigger("setvalue");
                    }, 0);
                }), $el.bind("mouseenter.inputmask", function() {
                    var $input = $(this), input = this;
                    !$input.hasClass("focus.inputmask") && opts.showMaskOnHover && input._valueGet() != getActiveBuffer().join("") && writeBuffer(input, getActiveBuffer());
                }).bind("blur.inputmask", function() {
                    var $input = $(this), input = this, nptValue = input._valueGet(), buffer = getActiveBuffer();
                    $input.removeClass("focus.inputmask"), valueOnFocus != getActiveBuffer().join("") && $input.change(), 
                    opts.clearMaskOnLostFocus && "" != nptValue && (nptValue == getActiveBufferTemplate().join("") ? input._valueSet("") : clearOptionalTail(input)), 
                    isComplete(buffer) === !1 && ($input.trigger("incomplete"), opts.clearIncomplete && ($.each(masksets, function(ndx, ms) {
                        "object" == typeof ms && (ms.buffer = ms._buffer.slice(), ms.lastValidPosition = -1);
                    }), activeMasksetIndex = 0, opts.clearMaskOnLostFocus ? input._valueSet("") : (buffer = getActiveBufferTemplate().slice(), 
                    writeBuffer(input, buffer))));
                }).bind("focus.inputmask", function() {
                    var $input = $(this), input = this, nptValue = input._valueGet();
                    opts.showMaskOnFocus && !$input.hasClass("focus.inputmask") && (!opts.showMaskOnHover || opts.showMaskOnHover && "" == nptValue) && input._valueGet() != getActiveBuffer().join("") && writeBuffer(input, getActiveBuffer(), seekNext(getActiveMaskSet().lastValidPosition)), 
                    $input.addClass("focus.inputmask"), valueOnFocus = getActiveBuffer().join("");
                }).bind("mouseleave.inputmask", function() {
                    var $input = $(this), input = this;
                    opts.clearMaskOnLostFocus && ($input.hasClass("focus.inputmask") || input._valueGet() == $input.attr("placeholder") || (input._valueGet() == getActiveBufferTemplate().join("") || "" == input._valueGet() ? input._valueSet("") : clearOptionalTail(input)));
                }).bind("click.inputmask", function() {
                    var input = this;
                    setTimeout(function() {
                        var selectedCaret = caret(input), buffer = getActiveBuffer();
                        if (selectedCaret.begin == selectedCaret.end) {
                            var lastPosition, clickPosition = isRTL ? TranslatePosition(selectedCaret.begin) : selectedCaret.begin, lvp = getActiveMaskSet().lastValidPosition;
                            lastPosition = opts.isNumeric && opts.skipRadixDance === !1 && "" != opts.radixPoint && -1 != $.inArray(opts.radixPoint, buffer) ? opts.numericInput ? seekNext($.inArray(opts.radixPoint, buffer)) : $.inArray(opts.radixPoint, buffer) : seekNext(lvp), 
                            lastPosition > clickPosition ? isMask(clickPosition) ? caret(input, clickPosition) : caret(input, seekNext(clickPosition)) : caret(input, lastPosition);
                        }
                    }, 0);
                }).bind("dblclick.inputmask", function() {
                    var input = this;
                    setTimeout(function() {
                        caret(input, 0, seekNext(getActiveMaskSet().lastValidPosition));
                    }, 0);
                }).bind(pasteEvent + ".inputmask dragdrop.inputmask drop.inputmask", function(e) {
                    if (skipInputEvent === !0) return skipInputEvent = !1, !0;
                    var input = this, $input = $(input);
                    return "propertychange" == e.type && input._valueGet().length <= getMaskLength() ? !0 : void setTimeout(function() {
                        var pasteValue = void 0 != opts.onBeforePaste ? opts.onBeforePaste.call(this, input._valueGet()) : input._valueGet();
                        checkVal(input, !0, !1, pasteValue.split(""), !0), isComplete(getActiveBuffer()) === !0 && $input.trigger("complete"), 
                        $input.click();
                    }, 0);
                }).bind("setvalue.inputmask", function() {
                    var input = this;
                    checkVal(input, !0), valueOnFocus = getActiveBuffer().join(""), input._valueGet() == getActiveBufferTemplate().join("") && input._valueSet("");
                }).bind("complete.inputmask", opts.oncomplete).bind("incomplete.inputmask", opts.onincomplete).bind("cleared.inputmask", opts.oncleared).bind("keyup.inputmask", keyupEvent), 
                androidchrome ? $el.bind("input.inputmask", inputEvent) : $el.bind("keydown.inputmask", keydownEvent).bind("keypress.inputmask", keypressEvent), 
                msie10 && $el.bind("input.inputmask", inputEvent), checkVal(el, !0, !1), valueOnFocus = getActiveBuffer().join("");
                var activeElement;
                try {
                    activeElement = document.activeElement;
                } catch (e) {}
                activeElement === el ? ($el.addClass("focus.inputmask"), caret(el, seekNext(getActiveMaskSet().lastValidPosition))) : opts.clearMaskOnLostFocus ? getActiveBuffer().join("") == getActiveBufferTemplate().join("") ? el._valueSet("") : clearOptionalTail(el) : writeBuffer(el, getActiveBuffer()), 
                installEventRuler(el);
            }
        }
        var $el, chromeValueOnInput, isRTL = !1, valueOnFocus = getActiveBuffer().join(""), skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1;
        if (void 0 != actionObj) switch (actionObj.action) {
          case "isComplete":
            return isComplete(actionObj.buffer);

          case "unmaskedvalue":
            return isRTL = actionObj.$input.data("_inputmask").isRTL, unmaskedvalue(actionObj.$input, actionObj.skipDatepickerCheck);

          case "mask":
            mask(actionObj.el);
            break;

          case "format":
            return $el = $({}), $el.data("_inputmask", {
                masksets: masksets,
                activeMasksetIndex: activeMasksetIndex,
                opts: opts,
                isRTL: opts.numericInput
            }), opts.numericInput && (opts.isNumeric = opts.numericInput, isRTL = !0), checkVal($el, !1, !1, actionObj.value.split(""), !0), 
            getActiveBuffer().join("");
        }
    }
    if (void 0 === $.fn.inputmask) {
        var msie10 = null !== navigator.userAgent.match(new RegExp("msie 10", "i")), iphone = null !== navigator.userAgent.match(new RegExp("iphone", "i")), android = null !== navigator.userAgent.match(new RegExp("android.*safari.*", "i")), androidchrome = null !== navigator.userAgent.match(new RegExp("android.*chrome.*", "i")), pasteEvent = isInputEventSupported("paste") ? "paste" : isInputEventSupported("input") ? "input" : "propertychange";
        $.inputmask = {
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                escapeChar: "\\",
                mask: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                aliases: {},
                onKeyUp: $.noop,
                onKeyDown: $.noop,
                onBeforePaste: void 0,
                onUnMask: void 0,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                showTooltip: !1,
                numericInput: !1,
                isNumeric: !1,
                radixPoint: "",
                skipRadixDance: !1,
                rightAlignNumerics: !0,
                definitions: {
                    "9": {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    a: {
                        validator: "[A-Za-zА-яЁё]",
                        cardinality: 1
                    },
                    "*": {
                        validator: "[A-Za-zА-яЁё0-9]",
                        cardinality: 1
                    }
                },
                keyCode: {
                    ALT: 18,
                    BACKSPACE: 8,
                    CAPS_LOCK: 20,
                    COMMA: 188,
                    COMMAND: 91,
                    COMMAND_LEFT: 91,
                    COMMAND_RIGHT: 93,
                    CONTROL: 17,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    INSERT: 45,
                    LEFT: 37,
                    MENU: 93,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SHIFT: 16,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38,
                    WINDOWS: 91
                },
                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123 ],
                getMaskLength: function(buffer, greedy, repeat, currentBuffer) {
                    var calculatedLength = buffer.length;
                    return greedy || ("*" == repeat ? calculatedLength = currentBuffer.length + 1 : repeat > 1 && (calculatedLength += buffer.length * (repeat - 1))), 
                    calculatedLength;
                }
            },
            escapeRegex: function(str) {
                var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\" ];
                return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
            },
            format: function(value, options) {
                var opts = $.extend(!0, {}, $.inputmask.defaults, options);
                return resolveAlias(opts.alias, options, opts), maskScope(generateMaskSets(opts), 0, opts, {
                    action: "format",
                    value: value
                });
            }
        }, $.fn.inputmask = function(fn, options) {
            var masksets, opts = $.extend(!0, {}, $.inputmask.defaults, options), activeMasksetIndex = 0;
            if ("string" == typeof fn) switch (fn) {
              case "mask":
                return resolveAlias(opts.alias, options, opts), masksets = generateMaskSets(opts), 
                0 == masksets.length ? this : this.each(function() {
                    maskScope($.extend(!0, {}, masksets), 0, opts, {
                        action: "mask",
                        el: this
                    });
                });

              case "unmaskedvalue":
                var $input = $(this);
                return $input.data("_inputmask") ? (masksets = $input.data("_inputmask").masksets, 
                activeMasksetIndex = $input.data("_inputmask").activeMasksetIndex, opts = $input.data("_inputmask").opts, 
                maskScope(masksets, activeMasksetIndex, opts, {
                    action: "unmaskedvalue",
                    $input: $input
                })) : $input.val();

              case "remove":
                return this.each(function() {
                    var $input = $(this), input = this;
                    if ($input.data("_inputmask")) {
                        masksets = $input.data("_inputmask").masksets, activeMasksetIndex = $input.data("_inputmask").activeMasksetIndex, 
                        opts = $input.data("_inputmask").opts, input._valueSet(maskScope(masksets, activeMasksetIndex, opts, {
                            action: "unmaskedvalue",
                            $input: $input,
                            skipDatepickerCheck: !0
                        })), $input.removeData("_inputmask"), $input.unbind(".inputmask"), $input.removeClass("focus.inputmask");
                        var valueProperty;
                        Object.getOwnPropertyDescriptor && (valueProperty = Object.getOwnPropertyDescriptor(input, "value")), 
                        valueProperty && valueProperty.get ? input._valueGet && Object.defineProperty(input, "value", {
                            get: input._valueGet,
                            set: input._valueSet
                        }) : document.__lookupGetter__ && input.__lookupGetter__("value") && input._valueGet && (input.__defineGetter__("value", input._valueGet), 
                        input.__defineSetter__("value", input._valueSet));
                        try {
                            delete input._valueGet, delete input._valueSet;
                        } catch (e) {
                            input._valueGet = void 0, input._valueSet = void 0;
                        }
                    }
                });

              case "getemptymask":
                return this.data("_inputmask") ? (masksets = this.data("_inputmask").masksets, activeMasksetIndex = this.data("_inputmask").activeMasksetIndex, 
                masksets[activeMasksetIndex]._buffer.join("")) : "";

              case "hasMaskedValue":
                return this.data("_inputmask") ? !this.data("_inputmask").opts.autoUnmask : !1;

              case "isComplete":
                return masksets = this.data("_inputmask").masksets, activeMasksetIndex = this.data("_inputmask").activeMasksetIndex, 
                opts = this.data("_inputmask").opts, maskScope(masksets, activeMasksetIndex, opts, {
                    action: "isComplete",
                    buffer: this[0]._valueGet().split("")
                });

              case "getmetadata":
                return this.data("_inputmask") ? (masksets = this.data("_inputmask").masksets, activeMasksetIndex = this.data("_inputmask").activeMasksetIndex, 
                masksets[activeMasksetIndex].metadata) : void 0;

              default:
                return resolveAlias(fn, options, opts) || (opts.mask = fn), masksets = generateMaskSets(opts), 
                0 == masksets.length ? this : this.each(function() {
                    maskScope($.extend(!0, {}, masksets), activeMasksetIndex, opts, {
                        action: "mask",
                        el: this
                    });
                });
            } else {
                if ("object" == typeof fn) return opts = $.extend(!0, {}, $.inputmask.defaults, fn), 
                resolveAlias(opts.alias, fn, opts), masksets = generateMaskSets(opts), 0 == masksets.length ? this : this.each(function() {
                    maskScope($.extend(!0, {}, masksets), activeMasksetIndex, opts, {
                        action: "mask",
                        el: this
                    });
                });
                if (void 0 == fn) return this.each(function() {
                    var attrOptions = $(this).attr("data-inputmask");
                    if (attrOptions && "" != attrOptions) try {
                        attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
                        var dataoptions = $.parseJSON("{" + attrOptions + "}");
                        $.extend(!0, dataoptions, options), opts = $.extend(!0, {}, $.inputmask.defaults, dataoptions), 
                        resolveAlias(opts.alias, dataoptions, opts), opts.alias = void 0, $(this).inputmask(opts);
                    } catch (ex) {}
                });
            }
        };
    }
}(jQuery), function($) {
    $.extend($.inputmask.defaults.definitions, {
        h: {
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[0-2]",
                cardinality: 1
            } ]
        },
        s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[0-5]",
                cardinality: 1
            } ]
        },
        d: {
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[0-3]",
                cardinality: 1
            } ]
        },
        m: {
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[01]",
                cardinality: 1
            } ]
        },
        y: {
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [ {
                validator: "[12]",
                cardinality: 1
            }, {
                validator: "(19|20)",
                cardinality: 2
            }, {
                validator: "(19|20)\\d",
                cardinality: 3
            } ]
        }
    }), $.extend($.inputmask.defaults.aliases, {
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function(separator) {
                    var escapedSeparator = $.inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
                },
                val2: function(separator) {
                    var escapedSeparator = $.inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function(chrs, minyear, maxyear) {
                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                return (0/0 != enteredyear ? enteredyear >= minyear && maxyear >= enteredyear : !1) || (0/0 != enteredyear2 ? enteredyear2 >= minyear && maxyear >= enteredyear2 : !1);
            },
            determinebaseyear: function(minyear, maxyear, hint) {
                var currentyear = new Date().getFullYear();
                if (minyear > currentyear) return minyear;
                if (currentyear > maxyear) {
                    for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxYearPrefix + hint > maxyear; ) maxYearPrefix--;
                    var maxxYear = maxYearPrefix + maxYearPostfix;
                    return minyear > maxxYear ? minyear : maxxYear;
                }
                return currentyear;
            },
            onKeyUp: function(e, buffer, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString());
                }
            },
            definitions: {
                "1": {
                    validator: function(chrs, buffer, pos, strict, opts) {
                        var isValid = opts.regex.val1.test(chrs);
                        return strict || isValid || chrs.charAt(1) != opts.separator && -1 == "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (buffer[pos - 1] = "0", 
                        {
                            pos: pos,
                            c: chrs.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var isValid = opts.regex.val1pre.test(chrs);
                            return strict || isValid || !(isValid = opts.regex.val1.test("0" + chrs)) ? isValid : (buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                },
                "2": {
                    validator: function(chrs, buffer, pos, strict, opts) {
                        var frontValue = buffer.join("").substr(0, 3);
                        -1 != frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        return strict || isValid || chrs.charAt(1) != opts.separator && -1 == "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (buffer[pos - 1] = "0", 
                        {
                            pos: pos,
                            c: chrs.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var frontValue = buffer.join("").substr(0, 3);
                            -1 != frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                            var isValid = opts.regex.val2pre(opts.separator).test(frontValue + chrs);
                            return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                },
                y: {
                    validator: function(chrs, buffer, pos, strict, opts) {
                        if (opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) {
                            var dayMonthValue = buffer.join("").substr(0, 6);
                            if (dayMonthValue != opts.leapday) return !0;
                            var year = parseInt(chrs, 10);
                            return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? !0 : !1 : !0 : !1;
                        }
                        return !1;
                    },
                    cardinality: 4,
                    prevalidator: [ {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (!strict && !isValid) {
                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                                if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return buffer[pos++] = yearPrefix[0], 
                                {
                                    pos: pos
                                };
                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), 
                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return buffer[pos++] = yearPrefix[0], 
                                buffer[pos++] = yearPrefix[1], {
                                    pos: pos
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    }, {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (!strict && !isValid) {
                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                                if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return buffer[pos++] = yearPrefix[1], 
                                {
                                    pos: pos
                                };
                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), 
                                opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) {
                                    var dayMonthValue = buffer.join("").substr(0, 6);
                                    if (dayMonthValue != opts.leapday) isValid = !0; else {
                                        var year = parseInt(chrs, 10);
                                        isValid = year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? !0 : !1 : !0 : !1;
                                    }
                                } else isValid = !1;
                                if (isValid) return buffer[pos - 1] = yearPrefix[0], buffer[pos++] = yearPrefix[1], 
                                buffer[pos++] = chrs[0], {
                                    pos: pos
                                };
                            }
                            return isValid;
                        },
                        cardinality: 2
                    }, {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        },
                        cardinality: 3
                    } ]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function(separator) {
                    var escapedSeparator = $.inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function(separator) {
                    var escapedSeparator = $.inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyUp: function(e, buffer, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString());
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyUp: function(e, buffer, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString());
                }
            },
            definitions: {
                "2": {
                    validator: function(chrs, buffer, pos, strict, opts) {
                        var frontValue = buffer.join("").substr(5, 3);
                        -1 != frontValue.indexOf(opts.placeholder[5]) && (frontValue = "01" + opts.separator);
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        if (!strict && !isValid && (chrs.charAt(1) == opts.separator || -1 != "-./".indexOf(chrs.charAt(1))) && (isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0)))) return buffer[pos - 1] = "0", 
                        {
                            pos: pos,
                            c: chrs.charAt(0)
                        };
                        if (isValid) {
                            var dayMonthValue = buffer.join("").substr(4, 4) + chrs;
                            if (dayMonthValue != opts.leapday) return !0;
                            var year = parseInt(buffer.join("").substr(0, 4), 10);
                            return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? !0 : !1 : !0 : !1;
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var frontValue = buffer.join("").substr(5, 3);
                            -1 != frontValue.indexOf(opts.placeholder[5]) && (frontValue = "01" + opts.separator);
                            var isValid = opts.regex.val2pre(opts.separator).test(frontValue + chrs);
                            return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-9]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-3]"),
                ampm: new RegExp("^[a|p|A|P][m|M]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function(chrs, buffer, pos, strict, opts) {
                        var isValid = opts.regex.hrs.test(chrs);
                        if (!strict && !isValid && (chrs.charAt(1) == opts.timeseparator || -1 != "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return buffer[pos - 1] = "0", 
                        buffer[pos] = chrs.charAt(0), pos++, {
                            pos: pos
                        };
                        if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
                            var tmp = parseInt(chrs, 10);
                            return 24 == tmp ? (buffer[pos + 5] = "a", buffer[pos + 6] = "m") : (buffer[pos + 5] = "p", 
                            buffer[pos + 6] = "m"), tmp -= 12, 10 > tmp ? (buffer[pos] = tmp.toString(), buffer[pos - 1] = "0") : (buffer[pos] = tmp.toString().charAt(1), 
                            buffer[pos - 1] = tmp.toString().charAt(0)), {
                                pos: pos,
                                c: buffer[pos]
                            };
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var isValid = opts.regex.hrspre.test(chrs);
                            return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                },
                t: {
                    validator: function(chrs, buffer, pos, strict, opts) {
                        return opts.regex.ampm.test(chrs + "m");
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        }
    });
}(jQuery), function($) {
    $.extend($.inputmask.defaults.definitions, {
        A: {
            validator: "[A-Za-z]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[A-Za-zА-яЁё0-9]",
            cardinality: 1,
            casing: "upper"
        }
    }), $.extend($.inputmask.defaults.aliases, {
        url: {
            mask: "ir",
            placeholder: "",
            separator: "",
            defaultPrefix: "http://",
            regex: {
                urlpre1: new RegExp("[fh]"),
                urlpre2: new RegExp("(ft|ht)"),
                urlpre3: new RegExp("(ftp|htt)"),
                urlpre4: new RegExp("(ftp:|http|ftps)"),
                urlpre5: new RegExp("(ftp:/|ftps:|http:|https)"),
                urlpre6: new RegExp("(ftp://|ftps:/|http:/|https:)"),
                urlpre7: new RegExp("(ftp://|ftps://|http://|https:/)"),
                urlpre8: new RegExp("(ftp://|ftps://|http://|https://)")
            },
            definitions: {
                i: {
                    validator: function() {
                        return !0;
                    },
                    cardinality: 8,
                    prevalidator: function() {
                        for (var result = [], prefixLimit = 8, i = 0; prefixLimit > i; i++) result[i] = function() {
                            var j = i;
                            return {
                                validator: function(chrs, buffer, pos, strict, opts) {
                                    if (opts.regex["urlpre" + (j + 1)]) {
                                        var k, tmp = chrs;
                                        j + 1 - chrs.length > 0 && (tmp = buffer.join("").substring(0, j + 1 - chrs.length) + "" + tmp);
                                        var isValid = opts.regex["urlpre" + (j + 1)].test(tmp);
                                        if (!strict && !isValid) {
                                            for (pos -= j, k = 0; k < opts.defaultPrefix.length; k++) buffer[pos] = opts.defaultPrefix[k], 
                                            pos++;
                                            for (k = 0; k < tmp.length - 1; k++) buffer[pos] = tmp[k], pos++;
                                            return {
                                                pos: pos
                                            };
                                        }
                                        return isValid;
                                    }
                                    return !1;
                                },
                                cardinality: j
                            };
                        }();
                        return result;
                    }()
                },
                r: {
                    validator: ".",
                    cardinality: 50
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        ip: {
            mask: [ "[[x]y]z.[[x]y]z.[[x]y]z.x[yz]", "[[x]y]z.[[x]y]z.[[x]y]z.[[x]y][z]" ],
            definitions: {
                x: {
                    validator: "[012]",
                    cardinality: 1,
                    definitionSymbol: "i"
                },
                y: {
                    validator: function(chrs, buffer, pos) {
                        return chrs = pos - 1 > -1 && "." != buffer[pos - 1] ? buffer[pos - 1] + chrs : "0" + chrs, 
                        new RegExp("2[0-5]|[01][0-9]").test(chrs);
                    },
                    cardinality: 1,
                    definitionSymbol: "i"
                },
                z: {
                    validator: function(chrs, buffer, pos) {
                        return pos - 1 > -1 && "." != buffer[pos - 1] ? (chrs = buffer[pos - 1] + chrs, 
                        chrs = pos - 2 > -1 && "." != buffer[pos - 2] ? buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, 
                        new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    },
                    cardinality: 1,
                    definitionSymbol: "i"
                }
            }
        }
    });
}(jQuery), !function(t) {
    function e(t, e) {
        return function(n) {
            return u(t.call(this, n), e);
        };
    }
    function n(t, e) {
        return function(n) {
            return this.lang().ordinal(t.call(this, n), e);
        };
    }
    function s() {}
    function i(t) {
        a(this, t);
    }
    function r(t) {
        var e = t.years || t.year || t.y || 0, n = t.months || t.month || t.M || 0, s = t.weeks || t.week || t.w || 0, i = t.days || t.day || t.d || 0, r = t.hours || t.hour || t.h || 0, a = t.minutes || t.minute || t.m || 0, o = t.seconds || t.second || t.s || 0, u = t.milliseconds || t.millisecond || t.ms || 0;
        this._input = t, this._milliseconds = u + 1e3 * o + 6e4 * a + 36e5 * r, this._days = i + 7 * s, 
        this._months = n + 12 * e, this._data = {}, this._bubble();
    }
    function a(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function o(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t);
    }
    function u(t, e) {
        for (var n = t + ""; n.length < e; ) n = "0" + n;
        return n;
    }
    function h(t, e, n, s) {
        var i, r, a = e._milliseconds, o = e._days, u = e._months;
        a && t._d.setTime(+t._d + a * n), (o || u) && (i = t.minute(), r = t.hour()), o && t.date(t.date() + o * n), 
        u && t.month(t.month() + u * n), a && !s && H.updateOffset(t), (o || u) && (t.minute(i), 
        t.hour(r));
    }
    function d(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }
    function c(t, e) {
        var n, s = Math.min(t.length, e.length), i = Math.abs(t.length - e.length), r = 0;
        for (n = 0; s > n; n++) ~~t[n] !== ~~e[n] && r++;
        return r + i;
    }
    function f(t) {
        return t ? ie[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t;
    }
    function l(t, e) {
        return e.abbr = t, x[t] || (x[t] = new s()), x[t].set(e), x[t];
    }
    function _(t) {
        if (!t) return H.fn._lang;
        if (!x[t] && A) try {
            require("./lang/" + t);
        } catch (e) {
            return H.fn._lang;
        }
        return x[t];
    }
    function m(t) {
        return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
    }
    function y(t) {
        var e, n, s = t.match(E);
        for (e = 0, n = s.length; n > e; e++) s[e] = ue[s[e]] ? ue[s[e]] : m(s[e]);
        return function(i) {
            var r = "";
            for (e = 0; n > e; e++) r += s[e] instanceof Function ? s[e].call(i, t) : s[e];
            return r;
        };
    }
    function M(t, e) {
        function n(e) {
            return t.lang().longDateFormat(e) || e;
        }
        for (var s = 5; s-- && N.test(e); ) e = e.replace(N, n);
        return re[e] || (re[e] = y(e)), re[e](t);
    }
    function g(t, e) {
        switch (t) {
          case "DDDD":
            return V;

          case "YYYY":
            return X;

          case "YYYYY":
            return $;

          case "S":
          case "SS":
          case "SSS":
          case "DDD":
            return I;

          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
            return R;

          case "a":
          case "A":
            return _(e._l)._meridiemParse;

          case "X":
            return B;

          case "Z":
          case "ZZ":
            return j;

          case "T":
            return q;

          case "MM":
          case "DD":
          case "YY":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
            return J;

          default:
            return new RegExp(t.replace("\\", ""));
        }
    }
    function p(t) {
        var e = (j.exec(t) || [])[0], n = (e + "").match(ee) || [ "-", 0, 0 ], s = +(60 * n[1]) + ~~n[2];
        return "+" === n[0] ? -s : s;
    }
    function D(t, e, n) {
        var s, i = n._a;
        switch (t) {
          case "M":
          case "MM":
            i[1] = null == e ? 0 : ~~e - 1;
            break;

          case "MMM":
          case "MMMM":
            s = _(n._l).monthsParse(e), null != s ? i[1] = s : n._isValid = !1;
            break;

          case "D":
          case "DD":
          case "DDD":
          case "DDDD":
            null != e && (i[2] = ~~e);
            break;

          case "YY":
            i[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
            break;

          case "YYYY":
          case "YYYYY":
            i[0] = ~~e;
            break;

          case "a":
          case "A":
            n._isPm = _(n._l).isPM(e);
            break;

          case "H":
          case "HH":
          case "h":
          case "hh":
            i[3] = ~~e;
            break;

          case "m":
          case "mm":
            i[4] = ~~e;
            break;

          case "s":
          case "ss":
            i[5] = ~~e;
            break;

          case "S":
          case "SS":
          case "SSS":
            i[6] = ~~(1e3 * ("0." + e));
            break;

          case "X":
            n._d = new Date(1e3 * parseFloat(e));
            break;

          case "Z":
          case "ZZ":
            n._useUTC = !0, n._tzm = p(e);
        }
        null == e && (n._isValid = !1);
    }
    function Y(t) {
        var e, n, s = [];
        if (!t._d) {
            for (e = 0; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), n = new Date(0), 
            t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), 
            n.setHours(s[3], s[4], s[5], s[6])), t._d = n;
        }
    }
    function w(t) {
        var e, n, s = t._f.match(E), i = t._i;
        for (t._a = [], e = 0; e < s.length; e++) n = (g(s[e], t).exec(i) || [])[0], n && (i = i.slice(i.indexOf(n) + n.length)), 
        ue[s[e]] && D(s[e], n, t);
        i && (t._il = i), t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), 
        Y(t);
    }
    function k(t) {
        var e, n, s, r, o, u = 99;
        for (r = 0; r < t._f.length; r++) e = a({}, t), e._f = t._f[r], w(e), n = new i(e), 
        o = c(e._a, n.toArray()), n._il && (o += n._il.length), u > o && (u = o, s = n);
        a(t, s);
    }
    function v(t) {
        var e, n = t._i, s = K.exec(n);
        if (s) {
            for (t._f = "YYYY-MM-DD" + (s[2] || " "), e = 0; 4 > e; e++) if (te[e][1].exec(n)) {
                t._f += te[e][0];
                break;
            }
            j.exec(n) && (t._f += " Z"), w(t);
        } else t._d = new Date(n);
    }
    function T(e) {
        var n = e._i, s = G.exec(n);
        n === t ? e._d = new Date() : s ? e._d = new Date(+s[1]) : "string" == typeof n ? v(e) : d(n) ? (e._a = n.slice(0), 
        Y(e)) : e._d = new Date(n instanceof Date ? +n : n);
    }
    function b(t, e, n, s, i) {
        return i.relativeTime(e || 1, !!n, t, s);
    }
    function S(t, e, n) {
        var s = W(Math.abs(t) / 1e3), i = W(s / 60), r = W(i / 60), a = W(r / 24), o = W(a / 365), u = 45 > s && [ "s", s ] || 1 === i && [ "m" ] || 45 > i && [ "mm", i ] || 1 === r && [ "h" ] || 22 > r && [ "hh", r ] || 1 === a && [ "d" ] || 25 >= a && [ "dd", a ] || 45 >= a && [ "M" ] || 345 > a && [ "MM", W(a / 30) ] || 1 === o && [ "y" ] || [ "yy", o ];
        return u[2] = e, u[3] = t > 0, u[4] = n, b.apply({}, u);
    }
    function F(t, e, n) {
        var s, i = n - e, r = n - t.day();
        return r > i && (r -= 7), i - 7 > r && (r += 7), s = H(t).add("d", r), {
            week: Math.ceil(s.dayOfYear() / 7),
            year: s.year()
        };
    }
    function O(t) {
        var e = t._i, n = t._f;
        return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = _().preparse(e)), 
        H.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? d(n) ? k(t) : w(t) : T(t), 
        new i(t));
    }
    function z(t, e) {
        H.fn[t] = H.fn[t + "s"] = function(t) {
            var n = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + n + e](t), H.updateOffset(this), this) : this._d["get" + n + e]();
        };
    }
    function C(t) {
        H.duration.fn[t] = function() {
            return this._data[t];
        };
    }
    function L(t, e) {
        H.duration.fn["as" + t] = function() {
            return +this / e;
        };
    }
    for (var H, P, U = "2.1.0", W = Math.round, x = {}, A = "undefined" != typeof module && module.exports, G = /^\/?Date\((\-?\d+)/i, Z = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, E = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, N = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, J = /\d\d?/, I = /\d{1,3}/, V = /\d{3}/, X = /\d{1,4}/, $ = /[+\-]?\d{1,6}/, R = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, j = /Z|[\+\-]\d\d:?\d\d/i, q = /T/i, B = /[\+\-]?\d+(\.\d{1,3})?/, K = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Q = "YYYY-MM-DDTHH:mm:ssZ", te = [ [ "HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], ee = /([\+\-]|\d\d)/gi, ne = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), se = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, ie = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        w: "week",
        M: "month",
        y: "year"
    }, re = {}, ae = "DDD w W M D d".split(" "), oe = "M D H h m s w W".split(" "), ue = {
        M: function() {
            return this.month() + 1;
        },
        MMM: function(t) {
            return this.lang().monthsShort(this, t);
        },
        MMMM: function(t) {
            return this.lang().months(this, t);
        },
        D: function() {
            return this.date();
        },
        DDD: function() {
            return this.dayOfYear();
        },
        d: function() {
            return this.day();
        },
        dd: function(t) {
            return this.lang().weekdaysMin(this, t);
        },
        ddd: function(t) {
            return this.lang().weekdaysShort(this, t);
        },
        dddd: function(t) {
            return this.lang().weekdays(this, t);
        },
        w: function() {
            return this.week();
        },
        W: function() {
            return this.isoWeek();
        },
        YY: function() {
            return u(this.year() % 100, 2);
        },
        YYYY: function() {
            return u(this.year(), 4);
        },
        YYYYY: function() {
            return u(this.year(), 5);
        },
        gg: function() {
            return u(this.weekYear() % 100, 2);
        },
        gggg: function() {
            return this.weekYear();
        },
        ggggg: function() {
            return u(this.weekYear(), 5);
        },
        GG: function() {
            return u(this.isoWeekYear() % 100, 2);
        },
        GGGG: function() {
            return this.isoWeekYear();
        },
        GGGGG: function() {
            return u(this.isoWeekYear(), 5);
        },
        e: function() {
            return this.weekday();
        },
        E: function() {
            return this.isoWeekday();
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
            return this.hours();
        },
        h: function() {
            return this.hours() % 12 || 12;
        },
        m: function() {
            return this.minutes();
        },
        s: function() {
            return this.seconds();
        },
        S: function() {
            return ~~(this.milliseconds() / 100);
        },
        SS: function() {
            return u(~~(this.milliseconds() / 10), 2);
        },
        SSS: function() {
            return u(this.milliseconds(), 3);
        },
        Z: function() {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(t / 60), 2) + ":" + u(~~t % 60, 2);
        },
        ZZ: function() {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + u(~~(10 * t / 6), 4);
        },
        z: function() {
            return this.zoneAbbr();
        },
        zz: function() {
            return this.zoneName();
        },
        X: function() {
            return this.unix();
        }
    }; ae.length; ) P = ae.pop(), ue[P + "o"] = n(ue[P], P);
    for (;oe.length; ) P = oe.pop(), ue[P + P] = e(ue[P], 2);
    for (ue.DDDD = e(ue.DDD, 3), s.prototype = {
        set: function(t) {
            var e, n;
            for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(t) {
            return this._months[t.month()];
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(t) {
            return this._monthsShort[t.month()];
        },
        monthsParse: function(t) {
            var e, n, s;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++) if (this._monthsParse[e] || (n = H([ 2e3, e ]), 
            s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(s.replace(".", ""), "i")), 
            this._monthsParse[e].test(t)) return e;
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(t) {
            return this._weekdays[t.day()];
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(t) {
            return this._weekdaysShort[t.day()];
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(t) {
            return this._weekdaysMin[t.day()];
        },
        weekdaysParse: function(t) {
            var e, n, s;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (n = H([ 2e3, 1 ]).day(e), 
            s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), 
            this._weekdaysParse[e] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e;
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1);
            }), this._longDateFormat[t] = e), e;
        },
        isPM: function(t) {
            return "p" === (t + "").toLowerCase()[0];
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(t, e) {
            var n = this._calendar[t];
            return "function" == typeof n ? n.apply(e) : n;
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(t, e, n, s) {
            var i = this._relativeTime[n];
            return "function" == typeof i ? i(t, e, n, s) : i.replace(/%d/i, t);
        },
        pastFuture: function(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e);
        },
        ordinal: function(t) {
            return this._ordinal.replace("%d", t);
        },
        _ordinal: "%d",
        preparse: function(t) {
            return t;
        },
        postformat: function(t) {
            return t;
        },
        week: function(t) {
            return F(t, this._week.dow, this._week.doy).week;
        },
        _week: {
            dow: 0,
            doy: 6
        }
    }, H = function(t, e, n) {
        return O({
            _i: t,
            _f: e,
            _l: n,
            _isUTC: !1
        });
    }, H.utc = function(t, e, n) {
        return O({
            _useUTC: !0,
            _isUTC: !0,
            _l: n,
            _i: t,
            _f: e
        });
    }, H.unix = function(t) {
        return H(1e3 * t);
    }, H.duration = function(t, e) {
        var n, s, i = H.isDuration(t), a = "number" == typeof t, o = i ? t._input : a ? {} : t, u = Z.exec(t);
        return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, 
        o = {
            y: 0,
            d: ~~u[2] * n,
            h: ~~u[3] * n,
            m: ~~u[4] * n,
            s: ~~u[5] * n,
            ms: ~~u[6] * n
        }), s = new r(o), i && t.hasOwnProperty("_lang") && (s._lang = t._lang), s;
    }, H.version = U, H.defaultFormat = Q, H.updateOffset = function() {}, H.lang = function(t, e) {
        return t ? (e ? l(t, e) : x[t] || _(t), void (H.duration.fn._lang = H.fn._lang = _(t))) : H.fn._lang._abbr;
    }, H.langData = function(t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t);
    }, H.isMoment = function(t) {
        return t instanceof i;
    }, H.isDuration = function(t) {
        return t instanceof r;
    }, H.fn = i.prototype = {
        clone: function() {
            return H(this);
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0);
        },
        unix: function() {
            return Math.floor(+this / 1e3);
        },
        toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d;
        },
        toISOString: function() {
            return M(H(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        },
        toArray: function() {
            var t = this;
            return [ t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds() ];
        },
        isValid: function() {
            return null == this._isValid && (this._isValid = this._a ? !c(this._a, (this._isUTC ? H.utc(this._a) : H(this._a)).toArray()) : !isNaN(this._d.getTime())), 
            !!this._isValid;
        },
        utc: function() {
            return this.zone(0);
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this;
        },
        format: function(t) {
            var e = M(this, t || H.defaultFormat);
            return this.lang().postformat(e);
        },
        add: function(t, e) {
            var n;
            return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, 1), 
            this;
        },
        subtract: function(t, e) {
            var n;
            return n = "string" == typeof t ? H.duration(+e, t) : H.duration(t, e), h(this, n, -1), 
            this;
        },
        diff: function(t, e, n) {
            var s, i, r = this._isUTC ? H(t).zone(this._offset || 0) : H(t).local(), a = 6e4 * (this.zone() - r.zone());
            return e = f(e), "year" === e || "month" === e ? (s = 432e5 * (this.daysInMonth() + r.daysInMonth()), 
            i = 12 * (this.year() - r.year()) + (this.month() - r.month()), i += (this - H(this).startOf("month") - (r - H(r).startOf("month"))) / s, 
            i -= 6e4 * (this.zone() - H(this).startOf("month").zone() - (r.zone() - H(r).startOf("month").zone())) / s, 
            "year" === e && (i /= 12)) : (s = this - r, i = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - a) / 864e5 : "week" === e ? (s - a) / 6048e5 : s), 
            n ? i : o(i);
        },
        from: function(t, e) {
            return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e);
        },
        fromNow: function(t) {
            return this.from(H(), t);
        },
        calendar: function() {
            var t = this.diff(H().startOf("day"), "days", !0), e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(e, this));
        },
        isLeapYear: function() {
            var t = this.year();
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400;
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
        },
        day: function(t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({
                d: t - e
            }) : e;
        },
        month: function(t) {
            var e, n = this._isUTC ? "UTC" : "";
            return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), 
            this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), 
            H.updateOffset(this), this) : this._d["get" + n + "Month"]();
        },
        startOf: function(t) {
            switch (t = f(t)) {
              case "year":
                this.month(0);

              case "month":
                this.date(1);

              case "week":
              case "day":
                this.hours(0);

              case "hour":
                this.minutes(0);

              case "minute":
                this.seconds(0);

              case "second":
                this.milliseconds(0);
            }
            return "week" === t && this.weekday(0), this;
        },
        endOf: function(t) {
            return this.startOf(t).add(t, 1).subtract("ms", 1);
        },
        isAfter: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +H(t).startOf(e);
        },
        isBefore: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +H(t).startOf(e);
        },
        isSame: function(t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +H(t).startOf(e);
        },
        min: function(t) {
            return t = H.apply(null, arguments), this > t ? this : t;
        },
        max: function(t) {
            return t = H.apply(null, arguments), t > this ? this : t;
        },
        zone: function(t) {
            var e = this._offset || 0;
            return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = p(t)), 
            Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && h(this, H.duration(e - t, "m"), 1, !0), 
            this);
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : "";
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },
        daysInMonth: function() {
            return H.utc([ this.year(), this.month() + 1, 0 ]).date();
        },
        dayOfYear: function(t) {
            var e = W((H(this).startOf("day") - H(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e);
        },
        weekYear: function(t) {
            var e = F(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e);
        },
        isoWeekYear: function(t) {
            var e = F(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e);
        },
        week: function(t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e));
        },
        isoWeek: function(t) {
            var e = F(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e));
        },
        weekday: function(t) {
            var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == t ? e : this.add("d", t - e);
        },
        isoWeekday: function(t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
        },
        lang: function(e) {
            return e === t ? this._lang : (this._lang = _(e), this);
        }
    }, P = 0; P < ne.length; P++) z(ne[P].toLowerCase().replace(/s$/, ""), ne[P]);
    z("year", "FullYear"), H.fn.days = H.fn.day, H.fn.months = H.fn.month, H.fn.weeks = H.fn.week, 
    H.fn.isoWeeks = H.fn.isoWeek, H.fn.toJSON = H.fn.toISOString, H.duration.fn = r.prototype = {
        _bubble: function() {
            var t, e, n, s, i = this._milliseconds, r = this._days, a = this._months, u = this._data;
            u.milliseconds = i % 1e3, t = o(i / 1e3), u.seconds = t % 60, e = o(t / 60), u.minutes = e % 60, 
            n = o(e / 60), u.hours = n % 24, r += o(n / 24), u.days = r % 30, a += o(r / 30), 
            u.months = a % 12, s = o(a / 12), u.years = s;
        },
        weeks: function() {
            return o(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12);
        },
        humanize: function(t) {
            var e = +this, n = S(e, !t, this.lang());
            return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n);
        },
        add: function(t, e) {
            var n = H.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, 
            this._bubble(), this;
        },
        subtract: function(t, e) {
            var n = H.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, 
            this._bubble(), this;
        },
        get: function(t) {
            return t = f(t), this[t.toLowerCase() + "s"]();
        },
        as: function(t) {
            return t = f(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]();
        },
        lang: H.fn.lang
    };
    for (P in se) se.hasOwnProperty(P) && (L(P, se[P]), C(P.toLowerCase()));
    L("Weeks", 6048e5), H.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years();
    }, H.lang("en", {
        ordinal: function(t) {
            var e = t % 10, n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n;
        }
    }), A && (module.exports = H), "undefined" == typeof ender && (this.moment = H), 
    "function" == typeof define && define.amd && define("moment", [], function() {
        return H;
    });
}.call(this), !function($) {
    var DateRangePicker = function(element, options, cb) {
        var localeObject, hasOptions = "object" == typeof options;
        this.startDate = moment().startOf("day"), this.endDate = moment().startOf("day"), 
        this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.showDropdowns = !1, 
        this.showWeekNumbers = !1, this.timePicker = !1, this.timePickerIncrement = 30, 
        this.timePicker12Hour = !0, this.ranges = {}, this.opens = "right", this.buttonClasses = [ "btn", "btn-small" ], 
        this.applyClass = "btn-success", this.cancelClass = "btn-default", this.format = "MM/DD/YYYY", 
        this.separator = " - ", this.locale = {
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            fromLabel: "From",
            toLabel: "To",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: moment()._lang._weekdaysMin.slice(),
            monthNames: moment()._lang._monthsShort.slice(),
            firstDay: 0
        }, this.cb = function() {}, this.parentEl = "body", this.element = $(element), this.element.hasClass("pull-right") && (this.opens = "left"), 
        this.element.is("input") ? this.element.on({
            click: $.proxy(this.show, this),
            focus: $.proxy(this.show, this)
        }) : this.element.on("click", $.proxy(this.show, this)), localeObject = this.locale, 
        hasOptions && ("object" == typeof options.locale && $.each(localeObject, function(property, value) {
            localeObject[property] = options.locale[property] || value;
        }), options.applyClass && (this.applyClass = options.applyClass), options.cancelClass && (this.cancelClass = options.cancelClass));
        var DRPTemplate = '<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input" style="float: left"><label for="daterangepicker_start">' + this.locale.fromLabel + '</label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /></div><div class="daterangepicker_end_input" style="float: left; padding-left: 11px"><label for="daterangepicker_end">' + this.locale.toLabel + '</label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /></div><button class="' + this.applyClass + ' applyBtn" disabled="disabled">' + this.locale.applyLabel + '</button>&nbsp;<button class="' + this.cancelClass + ' cancelBtn">' + this.locale.cancelLabel + "</button></div></div></div>";
        if (this.parentEl = hasOptions && options.parentEl && $(options.parentEl) || $(this.parentEl), 
        this.container = $(DRPTemplate).appendTo(this.parentEl), hasOptions) {
            if ("string" == typeof options.format && (this.format = options.format), "string" == typeof options.separator && (this.separator = options.separator), 
            "string" == typeof options.startDate && (this.startDate = moment(options.startDate, this.format)), 
            "string" == typeof options.endDate && (this.endDate = moment(options.endDate, this.format)), 
            "string" == typeof options.minDate && (this.minDate = moment(options.minDate, this.format)), 
            "string" == typeof options.maxDate && (this.maxDate = moment(options.maxDate, this.format)), 
            "object" == typeof options.startDate && (this.startDate = moment(options.startDate)), 
            "object" == typeof options.endDate && (this.endDate = moment(options.endDate)), 
            "object" == typeof options.minDate && (this.minDate = moment(options.minDate)), 
            "object" == typeof options.maxDate && (this.maxDate = moment(options.maxDate)), 
            "object" == typeof options.ranges) {
                for (var range in options.ranges) {
                    var start = moment(options.ranges[range][0]), end = moment(options.ranges[range][1]);
                    this.minDate && start.isBefore(this.minDate) && (start = moment(this.minDate)), 
                    this.maxDate && end.isAfter(this.maxDate) && (end = moment(this.maxDate)), this.minDate && end.isBefore(this.minDate) || this.maxDate && start.isAfter(this.maxDate) || (this.ranges[range] = [ start, end ]);
                }
                var list = "<ul>";
                for (var range in this.ranges) list += "<li>" + range + "</li>";
                list += "<li>" + this.locale.customRangeLabel + "</li>", list += "</ul>", this.container.find(".ranges").prepend(list);
            }
            if ("object" == typeof options.dateLimit && (this.dateLimit = options.dateLimit), 
            "object" == typeof options.locale && ("object" == typeof options.locale.daysOfWeek && (this.locale.daysOfWeek = options.locale.daysOfWeek.slice()), 
            "number" == typeof options.locale.firstDay)) {
                this.locale.firstDay = options.locale.firstDay;
                for (var iterator = options.locale.firstDay; iterator > 0; ) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), 
                iterator--;
            }
            "string" == typeof options.opens && (this.opens = options.opens), "boolean" == typeof options.showWeekNumbers && (this.showWeekNumbers = options.showWeekNumbers), 
            "string" == typeof options.buttonClasses && (this.buttonClasses = [ options.buttonClasses ]), 
            "object" == typeof options.buttonClasses && (this.buttonClasses = options.buttonClasses), 
            "boolean" == typeof options.showDropdowns && (this.showDropdowns = options.showDropdowns), 
            "boolean" == typeof options.timePicker && (this.timePicker = options.timePicker), 
            "number" == typeof options.timePickerIncrement && (this.timePickerIncrement = options.timePickerIncrement), 
            "boolean" == typeof options.timePicker12Hour && (this.timePicker12Hour = options.timePicker12Hour);
        }
        this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.startOf("day"));
        var c = this.container;
        if ($.each(this.buttonClasses, function(idx, val) {
            c.find("button").addClass(val);
        }), "right" == this.opens) {
            var left = this.container.find(".calendar.left"), right = this.container.find(".calendar.right");
            left.removeClass("left").addClass("right"), right.removeClass("right").addClass("left");
        }
        if (("undefined" == typeof options || "undefined" == typeof options.ranges) && (this.container.find(".calendar").show(), 
        this.move()), "function" == typeof cb && (this.cb = cb), this.container.addClass("opens" + this.opens), 
        (!hasOptions || "undefined" == typeof options.startDate && "undefined" == typeof options.endDate) && $(this.element).is("input[type=text]")) {
            var start, end, val = $(this.element).val(), split = val.split(this.separator);
            2 == split.length && (start = moment(split[0], this.format), end = moment(split[1], this.format)), 
            null != start && null != end && (this.startDate = start, this.endDate = end);
        }
        this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), 
        this.leftCalendar = {
            month: moment([ this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute() ]),
            calendar: []
        }, this.rightCalendar = {
            month: moment([ this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute() ]),
            calendar: []
        }, this.container.on("mousedown", $.proxy(this.mousedown, this)), this.container.find(".calendar").on("click", ".prev", $.proxy(this.clickPrev, this)).on("click", ".next", $.proxy(this.clickNext, this)).on("click", "td.available", $.proxy(this.clickDate, this)).on("mouseenter", "td.available", $.proxy(this.enterDate, this)).on("mouseleave", "td.available", $.proxy(this.updateFormInputs, this)).on("change", "select.yearselect", $.proxy(this.updateMonthYear, this)).on("change", "select.monthselect", $.proxy(this.updateMonthYear, this)).on("change", "select.hourselect,select.minuteselect,select.ampmselect", $.proxy(this.updateTime, this)), 
        this.container.find(".ranges").on("click", "button.applyBtn", $.proxy(this.clickApply, this)).on("click", "button.cancelBtn", $.proxy(this.clickCancel, this)).on("click", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.showCalendars, this)).on("click", "li", $.proxy(this.clickRange, this)).on("mouseenter", "li", $.proxy(this.enterRange, this)).on("mouseleave", "li", $.proxy(this.updateFormInputs, this)), 
        this.element.on("keyup", $.proxy(this.updateFromControl, this)), this.updateView(), 
        this.updateCalendars();
    };
    DateRangePicker.prototype = {
        constructor: DateRangePicker,
        mousedown: function(e) {
            e.stopPropagation();
        },
        updateView: function() {
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), 
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), 
            this.updateFormInputs();
        },
        updateFormInputs: function() {
            this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)), 
            this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)), 
            this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled");
        },
        updateFromControl: function() {
            if (this.element.is("input") && this.element.val().length) {
                var dateString = this.element.val().split(this.separator), start = moment(dateString[0], this.format), end = moment(dateString[1], this.format);
                null != start && null != end && (end.isBefore(start) || (this.oldStartDate = this.startDate.clone(), 
                this.oldEndDate = this.endDate.clone(), this.startDate = start, this.endDate = end, 
                this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), 
                this.updateCalendars()));
            }
        },
        notify: function() {
            this.updateView(), this.cb(this.startDate, this.endDate);
        },
        move: function() {
            var parentOffset = {
                top: this.parentEl.offset().top - (this.parentEl.is("body") ? 0 : this.parentEl.scrollTop()),
                left: this.parentEl.offset().left - (this.parentEl.is("body") ? 0 : this.parentEl.scrollLeft())
            };
            "left" == this.opens ? (this.container.css({
                top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
                right: $(window).width() - this.element.offset().left - this.element.outerWidth() - parentOffset.left,
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
                left: this.element.offset().left - parentOffset.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > $(window).width() && this.container.css({
                left: "auto",
                right: 0
            }));
        },
        show: function(e) {
            this.container.show(), this.move(), e && (e.stopPropagation(), e.preventDefault()), 
            $(document).on("mousedown", $.proxy(this.hide, this)), this.element.trigger("shown", {
                target: e.target,
                picker: this
            });
        },
        hide: function() {
            this.container.hide(), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), 
            this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), 
            $(document).off("mousedown", this.hide), this.element.trigger("hidden", {
                picker: this
            });
        },
        enterRange: function(e) {
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) this.updateView(); else {
                var dates = this.ranges[label];
                this.container.find("input[name=daterangepicker_start]").val(dates[0].format(this.format)), 
                this.container.find("input[name=daterangepicker_end]").val(dates[1].format(this.format));
            }
        },
        showCalendars: function() {
            this.container.find(".calendar").show(), this.move();
        },
        updateInputText: function() {
            this.element.is("input") && this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format));
        },
        clickRange: function(e) {
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) this.showCalendars(); else {
                var dates = this.ranges[label];
                this.startDate = dates[0], this.endDate = dates[1], this.timePicker || (this.startDate.startOf("day"), 
                this.endDate.startOf("day")), this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()), 
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()), 
                this.updateCalendars(), this.updateInputText(), this.container.find(".calendar").hide(), 
                this.hide();
            }
        },
        clickPrev: function(e) {
            var cal = $(e.target).parents(".calendar");
            cal.hasClass("left") ? this.leftCalendar.month.subtract("month", 1) : this.rightCalendar.month.subtract("month", 1), 
            this.updateCalendars();
        },
        clickNext: function(e) {
            var cal = $(e.target).parents(".calendar");
            cal.hasClass("left") ? this.leftCalendar.month.add("month", 1) : this.rightCalendar.month.add("month", 1), 
            this.updateCalendars();
        },
        enterDate: function(e) {
            var title = $(e.target).attr("data-title"), row = title.substr(1, 1), col = title.substr(3, 1), cal = $(e.target).parents(".calendar");
            cal.hasClass("left") ? this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[row][col].format(this.format)) : this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[row][col].format(this.format));
        },
        clickDate: function(e) {
            var title = $(e.target).attr("data-title"), row = title.substr(1, 1), col = title.substr(3, 1), cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                var startDate = this.leftCalendar.calendar[row][col], endDate = this.endDate;
                if ("object" == typeof this.dateLimit) {
                    var maxDate = moment(startDate).add(this.dateLimit).startOf("day");
                    endDate.isAfter(maxDate) && (endDate = maxDate);
                }
            } else {
                var startDate = this.startDate, endDate = this.rightCalendar.calendar[row][col];
                if ("object" == typeof this.dateLimit) {
                    var minDate = moment(endDate).subtract(this.dateLimit).startOf("day");
                    startDate.isBefore(minDate) && (startDate = minDate);
                }
            }
            cal.find("td").removeClass("active"), startDate.isSame(endDate) || startDate.isBefore(endDate) ? ($(e.target).addClass("active"), 
            this.startDate = startDate, this.endDate = endDate) : startDate.isAfter(endDate) && ($(e.target).addClass("active"), 
            this.startDate = startDate, this.endDate = moment(startDate).add("day", 1).startOf("day")), 
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), 
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), 
            this.updateCalendars();
        },
        clickApply: function() {
            this.updateInputText(), this.hide();
        },
        clickCancel: function() {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.updateView(), 
            this.updateCalendars(), this.hide();
        },
        updateMonthYear: function(e) {
            var isLeft = $(e.target).closest(".calendar").hasClass("left"), cal = this.container.find(".calendar.left");
            isLeft || (cal = this.container.find(".calendar.right"));
            var month = parseInt(cal.find(".monthselect").val(), 10), year = cal.find(".yearselect").val();
            isLeft ? this.leftCalendar.month.month(month).year(year) : this.rightCalendar.month.month(month).year(year), 
            this.updateCalendars();
        },
        updateTime: function(e) {
            var isLeft = $(e.target).closest(".calendar").hasClass("left"), cal = this.container.find(".calendar.left");
            isLeft || (cal = this.container.find(".calendar.right"));
            var hour = parseInt(cal.find(".hourselect").val()), minute = parseInt(cal.find(".minuteselect").val());
            if (this.timePicker12Hour) {
                var ampm = cal.find(".ampmselect").val();
                "PM" == ampm && 12 > hour && (hour += 12), "AM" == ampm && 12 == hour && (hour = 0);
            }
            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour), start.minute(minute), this.startDate = start, this.leftCalendar.month.hour(hour).minute(minute);
            } else {
                var end = this.endDate.clone();
                end.hour(hour), end.minute(minute), this.endDate = end, this.rightCalendar.month.hour(hour).minute(minute);
            }
            this.updateCalendars();
        },
        updateCalendars: function() {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), "left"), 
            this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), "right"), 
            this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate)), 
            this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate)), 
            this.container.find(".ranges li").removeClass("active");
            var customRange = !0, i = 0;
            for (var range in this.ranges) this.timePicker ? this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1]) && (customRange = !1, 
            this.container.find(".ranges li:eq(" + i + ")").addClass("active")) : this.startDate.format("YYYY-MM-DD") == this.ranges[range][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[range][1].format("YYYY-MM-DD") && (customRange = !1, 
            this.container.find(".ranges li:eq(" + i + ")").addClass("active")), i++;
            customRange && this.container.find(".ranges li:last").addClass("active");
        },
        buildCalendar: function(month, year, hour, minute) {
            for (var firstDay = moment([ year, month, 1 ]), lastMonth = moment(firstDay).subtract("month", 1).month(), lastYear = moment(firstDay).subtract("month", 1).year(), daysInLastMonth = moment([ lastYear, lastMonth ]).daysInMonth(), dayOfWeek = firstDay.day(), calendar = [], i = 0; 6 > i; i++) calendar[i] = [];
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            startDay > daysInLastMonth && (startDay -= 7), dayOfWeek == this.locale.firstDay && (startDay = daysInLastMonth - 6);
            for (var curDate = moment([ lastYear, lastMonth, startDay, 12, minute ]), i = 0, col = 0, row = 0; 42 > i; i++, 
            col++, curDate = moment(curDate).add("hour", 24)) i > 0 && col % 7 == 0 && (col = 0, 
            row++), calendar[row][col] = curDate.clone().hour(hour), curDate.hour(12);
            return calendar;
        },
        renderDropdowns: function(selected, minDate, maxDate) {
            for (var currentMonth = selected.month(), monthHtml = '<select class="monthselect">', inMinYear = !1, inMaxYear = !1, m = 0; 12 > m; m++) (!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month()) && (monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>");
            monthHtml += "</select>";
            for (var currentYear = selected.year(), maxYear = maxDate && maxDate.year() || currentYear + 5, minYear = minDate && minDate.year() || currentYear - 50, yearHtml = '<select class="yearselect">', y = minYear; maxYear >= y; y++) yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : "") + ">" + y + "</option>";
            return yearHtml += "</select>", monthHtml + yearHtml;
        },
        renderCalendar: function(calendar, selected, minDate, maxDate) {
            var html = '<div class="calendar-date">';
            html += '<table class="table-condensed">', html += "<thead>", html += "<tr>", this.showWeekNumbers && (html += "<th></th>"), 
            html += !minDate || minDate.isBefore(calendar[1][1]) ? '<th class="prev available"><i class="icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>' : "<th></th>";
            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
            this.showDropdowns && (dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate)), 
            html += '<th colspan="5" style="width: auto">' + dateHtml + "</th>", html += !maxDate || maxDate.isAfter(calendar[1][1]) ? '<th class="next available"><i class="icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>' : "<th></th>", 
            html += "</tr>", html += "<tr>", this.showWeekNumbers && (html += '<th class="week">' + this.locale.weekLabel + "</th>"), 
            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += "<th>" + dayOfWeek + "</th>";
            }), html += "</tr>", html += "</thead>", html += "<tbody>";
            for (var row = 0; 6 > row; row++) {
                html += "<tr>", this.showWeekNumbers && (html += '<td class="week">' + calendar[row][0].week() + "</td>");
                for (var col = 0; 7 > col; col++) {
                    var cname = "available ";
                    cname += calendar[row][col].month() == calendar[1][1].month() ? "" : "off", minDate && calendar[row][col].isBefore(minDate) || maxDate && calendar[row][col].isAfter(maxDate) ? cname = " off disabled " : calendar[row][col].format("YYYY-MM-DD") == selected.format("YYYY-MM-DD") ? (cname += " active ", 
                    calendar[row][col].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && (cname += " start-date "), 
                    calendar[row][col].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && (cname += " end-date ")) : calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate && (cname += " in-range ", 
                    calendar[row][col].isSame(this.startDate) && (cname += " start-date "), calendar[row][col].isSame(this.endDate) && (cname += " end-date "));
                    var title = "r" + row + "c" + col;
                    html += '<td class="' + cname.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + title + '">' + calendar[row][col].date() + "</td>";
                }
                html += "</tr>";
            }
            if (html += "</tbody>", html += "</table>", html += "</div>", this.timePicker) {
                html += '<div class="calendar-time">', html += '<select class="hourselect">';
                var start = 0, end = 23, selected_hour = selected.hour();
                this.timePicker12Hour && (start = 1, end = 12, selected_hour >= 12 && (selected_hour -= 12), 
                0 == selected_hour && (selected_hour = 12));
                for (var i = start; end >= i; i++) html += i == selected_hour ? '<option value="' + i + '" selected="selected">' + i + "</option>" : '<option value="' + i + '">' + i + "</option>";
                html += "</select> : ", html += '<select class="minuteselect">';
                for (var i = 0; 60 > i; i += this.timePickerIncrement) {
                    var num = i;
                    10 > num && (num = "0" + num), html += i == selected.minute() ? '<option value="' + i + '" selected="selected">' + num + "</option>" : '<option value="' + i + '">' + num + "</option>";
                }
                html += "</select> ", this.timePicker12Hour && (html += '<select class="ampmselect">', 
                html += selected.hour() >= 12 ? '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>' : '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>', 
                html += "</select>"), html += "</div>";
            }
            return html;
        }
    }, $.fn.daterangepicker = function(options, cb) {
        return this.each(function() {
            var el = $(this);
            el.data("daterangepicker") || el.data("daterangepicker", new DateRangePicker(el, options, cb));
        }), this;
    };
}(window.jQuery), function($, window, document, undefined) {
    var Timepicker = function(element, options) {
        this.widget = "", this.$element = $(element), this.defaultTime = options.defaultTime, 
        this.disableFocus = options.disableFocus, this.isOpen = options.isOpen, this.minuteStep = options.minuteStep, 
        this.modalBackdrop = options.modalBackdrop, this.secondStep = options.secondStep, 
        this.showInputs = options.showInputs, this.showMeridian = options.showMeridian, 
        this.showSeconds = options.showSeconds, this.template = options.template, this.appendWidgetTo = options.appendWidgetTo, 
        this.upArrowStyle = options.upArrowStyle, this.downArrowStyle = options.downArrowStyle, 
        this.containerClass = options.containerClass, this._init();
    };
    Timepicker.prototype = {
        constructor: Timepicker,
        _init: function() {
            var self = this;
            this.$element.parent().hasClass("input-append") || this.$element.parent().hasClass("input-prepend") ? (this.$element.parent(".input-append, .input-prepend").find(".add-on").length ? this.$element.parent(".input-append, .input-prepend").find(".add-on").on({
                "click.timepicker": $.proxy(this.showWidget, this)
            }) : this.$element.closest(this.containerClass).find(".add-on").on({
                "click.timepicker": $.proxy(this.showWidget, this)
            }), this.$element.on({
                "focus.timepicker": $.proxy(this.highlightUnit, this),
                "click.timepicker": $.proxy(this.highlightUnit, this),
                "keydown.timepicker": $.proxy(this.elementKeydown, this),
                "blur.timepicker": $.proxy(this.blurElement, this)
            })) : this.$element.on(this.template ? {
                "focus.timepicker": $.proxy(this.showWidget, this),
                "click.timepicker": $.proxy(this.showWidget, this),
                "blur.timepicker": $.proxy(this.blurElement, this)
            } : {
                "focus.timepicker": $.proxy(this.highlightUnit, this),
                "click.timepicker": $.proxy(this.highlightUnit, this),
                "keydown.timepicker": $.proxy(this.elementKeydown, this),
                "blur.timepicker": $.proxy(this.blurElement, this)
            }), this.$widget = this.template !== !1 ? $(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click", $.proxy(this.widgetClick, this)) : !1, 
            this.showInputs && this.$widget !== !1 && this.$widget.find("input").each(function() {
                $(this).on({
                    "click.timepicker": function() {
                        $(this).select();
                    },
                    "keydown.timepicker": $.proxy(self.widgetKeydown, self)
                });
            }), this.setDefaultTime(this.defaultTime);
        },
        blurElement: function() {
            this.highlightedUnit = undefined, this.updateFromElementVal();
        },
        decrementHour: function() {
            if (this.showMeridian) if (1 === this.hour) this.hour = 12; else {
                if (12 === this.hour) return this.hour--, this.toggleMeridian();
                if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
                this.hour--;
            } else 0 === this.hour ? this.hour = 23 : this.hour--;
            this.update();
        },
        decrementMinute: function(step) {
            var newVal;
            newVal = step ? this.minute - step : this.minute - this.minuteStep, 0 > newVal ? (this.decrementHour(), 
            this.minute = newVal + 60) : this.minute = newVal, this.update();
        },
        decrementSecond: function() {
            var newVal = this.second - this.secondStep;
            0 > newVal ? (this.decrementMinute(!0), this.second = newVal + 60) : this.second = newVal, 
            this.update();
        },
        elementKeydown: function(e) {
            switch (e.keyCode) {
              case 9:
                switch (this.updateFromElementVal(), this.highlightedUnit) {
                  case "hour":
                    e.preventDefault(), this.highlightNextUnit();
                    break;

                  case "minute":
                    (this.showMeridian || this.showSeconds) && (e.preventDefault(), this.highlightNextUnit());
                    break;

                  case "second":
                    this.showMeridian && (e.preventDefault(), this.highlightNextUnit());
                }
                break;

              case 27:
                this.updateFromElementVal();
                break;

              case 37:
                e.preventDefault(), this.highlightPrevUnit(), this.updateFromElementVal();
                break;

              case 38:
                switch (e.preventDefault(), this.highlightedUnit) {
                  case "hour":
                    this.incrementHour(), this.highlightHour();
                    break;

                  case "minute":
                    this.incrementMinute(), this.highlightMinute();
                    break;

                  case "second":
                    this.incrementSecond(), this.highlightSecond();
                    break;

                  case "meridian":
                    this.toggleMeridian(), this.highlightMeridian();
                }
                break;

              case 39:
                e.preventDefault(), this.updateFromElementVal(), this.highlightNextUnit();
                break;

              case 40:
                switch (e.preventDefault(), this.highlightedUnit) {
                  case "hour":
                    this.decrementHour(), this.highlightHour();
                    break;

                  case "minute":
                    this.decrementMinute(), this.highlightMinute();
                    break;

                  case "second":
                    this.decrementSecond(), this.highlightSecond();
                    break;

                  case "meridian":
                    this.toggleMeridian(), this.highlightMeridian();
                }
            }
        },
        formatTime: function(hour, minute, second, meridian) {
            return hour = 10 > hour ? "0" + hour : hour, minute = 10 > minute ? "0" + minute : minute, 
            second = 10 > second ? "0" + second : second, hour + ":" + minute + (this.showSeconds ? ":" + second : "") + (this.showMeridian ? " " + meridian : "");
        },
        getCursorPosition: function() {
            var input = this.$element.get(0);
            if ("selectionStart" in input) return input.selectionStart;
            if (document.selection) {
                input.focus();
                var sel = document.selection.createRange(), selLen = document.selection.createRange().text.length;
                return sel.moveStart("character", -input.value.length), sel.text.length - selLen;
            }
        },
        getTemplate: function() {
            var template, hourTemplate, minuteTemplate, secondTemplate, meridianTemplate, templateContent;
            switch (this.showInputs ? (hourTemplate = '<input type="text" name="hour" class="bootstrap-timepicker-hour form-control" maxlength="2"/>', 
            minuteTemplate = '<input type="text" name="minute" class="bootstrap-timepicker-minute form-control" maxlength="2"/>', 
            secondTemplate = '<input type="text" name="second" class="bootstrap-timepicker-second form-control" maxlength="2"/>', 
            meridianTemplate = '<input type="text" name="meridian" class="bootstrap-timepicker-meridian form-control" maxlength="2"/>') : (hourTemplate = '<span class="bootstrap-timepicker-hour"></span>', 
            minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>', secondTemplate = '<span class="bootstrap-timepicker-second"></span>', 
            meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>'), templateContent = '<table><tr><td><a href="#" data-action="incrementHour"><i class="' + this.upArrowStyle + '"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="' + this.upArrowStyle + '"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="' + this.upArrowStyle + '"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="' + this.upArrowStyle + '"></i></a></td>' : "") + "</tr><tr><td>" + hourTemplate + '</td> <td class="separator">:</td><td>' + minuteTemplate + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + secondTemplate + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + meridianTemplate + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><i class="' + this.downArrowStyle + '"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="' + this.downArrowStyle + '"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="' + this.downArrowStyle + '"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="' + this.downArrowStyle + '"></i></a></td>' : "") + "</tr></table>", 
            this.template) {
              case "modal":
                template = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">' + templateContent + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                break;

              case "dropdown":
                template = '<div class="bootstrap-timepicker-widget dropdown-menu">' + templateContent + "</div>";
            }
            return template;
        },
        getTime: function() {
            return this.formatTime(this.hour, this.minute, this.second, this.meridian);
        },
        hideWidget: function() {
            this.isOpen !== !1 && (this.showInputs && this.updateFromWidgetInputs(), this.$element.trigger({
                type: "hide.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), 
            $(document).off("mousedown.timepicker"), this.isOpen = !1);
        },
        highlightUnit: function() {
            this.position = this.getCursorPosition(), this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian();
        },
        highlightNextUnit: function() {
            switch (this.highlightedUnit) {
              case "hour":
                this.highlightMinute();
                break;

              case "minute":
                this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                break;

              case "second":
                this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                break;

              case "meridian":
                this.highlightHour();
            }
        },
        highlightPrevUnit: function() {
            switch (this.highlightedUnit) {
              case "hour":
                this.highlightMeridian();
                break;

              case "minute":
                this.highlightHour();
                break;

              case "second":
                this.highlightMinute();
                break;

              case "meridian":
                this.showSeconds ? this.highlightSecond() : this.highlightMinute();
            }
        },
        highlightHour: function() {
            var $element = this.$element.get(0);
            this.highlightedUnit = "hour", $element.setSelectionRange && setTimeout(function() {
                $element.setSelectionRange(0, 2);
            }, 0);
        },
        highlightMinute: function() {
            var $element = this.$element.get(0);
            this.highlightedUnit = "minute", $element.setSelectionRange && setTimeout(function() {
                $element.setSelectionRange(3, 5);
            }, 0);
        },
        highlightSecond: function() {
            var $element = this.$element.get(0);
            this.highlightedUnit = "second", $element.setSelectionRange && setTimeout(function() {
                $element.setSelectionRange(6, 8);
            }, 0);
        },
        highlightMeridian: function() {
            var $element = this.$element.get(0);
            this.highlightedUnit = "meridian", $element.setSelectionRange && (this.showSeconds ? setTimeout(function() {
                $element.setSelectionRange(9, 11);
            }, 0) : setTimeout(function() {
                $element.setSelectionRange(6, 8);
            }, 0));
        },
        incrementHour: function() {
            if (this.showMeridian) {
                if (11 === this.hour) return this.hour++, this.toggleMeridian();
                12 === this.hour && (this.hour = 0);
            }
            return 23 === this.hour ? void (this.hour = 0) : (this.hour++, void this.update());
        },
        incrementMinute: function(step) {
            var newVal;
            newVal = step ? this.minute + step : this.minute + this.minuteStep - this.minute % this.minuteStep, 
            newVal > 59 ? (this.incrementHour(), this.minute = newVal - 60) : this.minute = newVal, 
            this.update();
        },
        incrementSecond: function() {
            var newVal = this.second + this.secondStep - this.second % this.secondStep;
            newVal > 59 ? (this.incrementMinute(!0), this.second = newVal - 60) : this.second = newVal, 
            this.update();
        },
        remove: function() {
            $("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker;
        },
        setDefaultTime: function(defaultTime) {
            if (this.$element.val()) this.updateFromElementVal(); else if ("current" === defaultTime) {
                var dTime = new Date(), hours = dTime.getHours(), minutes = Math.floor(dTime.getMinutes() / this.minuteStep) * this.minuteStep, seconds = Math.floor(dTime.getSeconds() / this.secondStep) * this.secondStep, meridian = "AM";
                this.showMeridian && (0 === hours ? hours = 12 : hours >= 12 ? (hours > 12 && (hours -= 12), 
                meridian = "PM") : meridian = "AM"), this.hour = hours, this.minute = minutes, this.second = seconds, 
                this.meridian = meridian, this.update();
            } else defaultTime === !1 ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(defaultTime);
        },
        setTime: function(time) {
            var arr, timeArray;
            this.showMeridian ? (arr = time.split(" "), timeArray = arr[0].split(":"), this.meridian = arr[1]) : timeArray = time.split(":"), 
            this.hour = parseInt(timeArray[0], 10), this.minute = parseInt(timeArray[1], 10), 
            this.second = parseInt(timeArray[2], 10), isNaN(this.hour) && (this.hour = 0), isNaN(this.minute) && (this.minute = 0), 
            this.showMeridian ? (this.hour > 12 ? this.hour = 12 : this.hour < 1 && (this.hour = 12), 
            "am" === this.meridian || "a" === this.meridian ? this.meridian = "AM" : ("pm" === this.meridian || "p" === this.meridian) && (this.meridian = "PM"), 
            "AM" !== this.meridian && "PM" !== this.meridian && (this.meridian = "AM")) : this.hour >= 24 ? this.hour = 23 : this.hour < 0 && (this.hour = 0), 
            this.minute < 0 ? this.minute = 0 : this.minute >= 60 && (this.minute = 59), this.showSeconds && (isNaN(this.second) ? this.second = 0 : this.second < 0 ? this.second = 0 : this.second >= 60 && (this.second = 59)), 
            this.update();
        },
        showWidget: function() {
            if (!this.isOpen && !this.$element.is(":disabled")) {
                var self = this;
                $(document).on("mousedown.timepicker", function(e) {
                    0 === $(e.target).closest(".bootstrap-timepicker-widget").length && self.hideWidget();
                }), this.$element.trigger({
                    type: "show.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), this.disableFocus && this.$element.blur(), this.updateFromElementVal(), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", $.proxy(this.hideWidget, this)) : this.isOpen === !1 && this.$widget.addClass("open"), 
                this.isOpen = !0;
            }
        },
        toggleMeridian: function() {
            this.meridian = "AM" === this.meridian ? "PM" : "AM", this.update();
        },
        update: function() {
            this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), this.updateElement(), this.updateWidget();
        },
        updateElement: function() {
            this.$element.val(this.getTime()).change();
        },
        updateFromElementVal: function() {
            var val = this.$element.val();
            val && this.setTime(val);
        },
        updateWidget: function() {
            if (this.$widget !== !1) {
                var hour = this.hour < 10 ? "0" + this.hour : this.hour, minute = this.minute < 10 ? "0" + this.minute : this.minute, second = this.second < 10 ? "0" + this.second : this.second;
                this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(hour), 
                this.$widget.find("input.bootstrap-timepicker-minute").val(minute), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(second), 
                this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(hour), 
                this.$widget.find("span.bootstrap-timepicker-minute").text(minute), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(second), 
                this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian));
            }
        },
        updateFromWidgetInputs: function() {
            if (this.$widget !== !1) {
                var time = $("input.bootstrap-timepicker-hour", this.$widget).val() + ":" + $("input.bootstrap-timepicker-minute", this.$widget).val() + (this.showSeconds ? ":" + $("input.bootstrap-timepicker-second", this.$widget).val() : "") + (this.showMeridian ? " " + $("input.bootstrap-timepicker-meridian", this.$widget).val() : "");
                this.setTime(time);
            }
        },
        widgetClick: function(e) {
            e.stopPropagation(), e.preventDefault();
            var action = $(e.target).closest("a").data("action");
            action && this[action]();
        },
        widgetKeydown: function(e) {
            var $input = $(e.target).closest("input"), name = $input.attr("name");
            switch (e.keyCode) {
              case 9:
                if (this.showMeridian) {
                    if ("meridian" === name) return this.hideWidget();
                } else if (this.showSeconds) {
                    if ("second" === name) return this.hideWidget();
                } else if ("minute" === name) return this.hideWidget();
                this.updateFromWidgetInputs();
                break;

              case 27:
                this.hideWidget();
                break;

              case 38:
                switch (e.preventDefault(), name) {
                  case "hour":
                    this.incrementHour();
                    break;

                  case "minute":
                    this.incrementMinute();
                    break;

                  case "second":
                    this.incrementSecond();
                    break;

                  case "meridian":
                    this.toggleMeridian();
                }
                break;

              case 40:
                switch (e.preventDefault(), name) {
                  case "hour":
                    this.decrementHour();
                    break;

                  case "minute":
                    this.decrementMinute();
                    break;

                  case "second":
                    this.decrementSecond();
                    break;

                  case "meridian":
                    this.toggleMeridian();
                }
            }
        }
    }, $.fn.timepicker = function(option) {
        var args = Array.apply(null, arguments);
        return args.shift(), this.each(function() {
            var $this = $(this), data = $this.data("timepicker"), options = "object" == typeof option && option;
            data || $this.data("timepicker", data = new Timepicker(this, $.extend({}, $.fn.timepicker.defaults, options, $(this).data()))), 
            "string" == typeof option && data[option].apply(data, args);
        });
    }, $.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        secondStep: 15,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: "dropdown",
        appendWidgetTo: ".bootstrap-timepicker",
        upArrowStyle: "glyphicon glyphicon-chevron-up",
        downArrowStyle: "glyphicon glyphicon-chevron-down",
        containerClass: "bootstrap-timepicker"
    }, $.fn.timepicker.Constructor = Timepicker;
}(jQuery, window, document), function(window, document, undefined) {
    !function(factory) {
        "function" == typeof define && define.amd ? define([ "jquery" ], factory) : jQuery && !jQuery.fn.dataTable && factory(jQuery);
    }(function($) {
        var DataTable = function(oInit) {
            function _fnAddColumn(oSettings, nTh) {
                var oDefaults = DataTable.defaults.columns, iCol = oSettings.aoColumns.length, oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
                    sSortingClass: oSettings.oClasses.sSortable,
                    sSortingClassJUI: oSettings.oClasses.sSortJUI,
                    nTh: nTh ? nTh : document.createElement("th"),
                    sTitle: oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : "",
                    aDataSort: oDefaults.aDataSort ? oDefaults.aDataSort : [ iCol ],
                    mData: oDefaults.mData ? oDefaults.oDefaults : iCol
                });
                if (oSettings.aoColumns.push(oCol), oSettings.aoPreSearchCols[iCol] === undefined || null === oSettings.aoPreSearchCols[iCol]) oSettings.aoPreSearchCols[iCol] = $.extend({}, DataTable.models.oSearch); else {
                    var oPre = oSettings.aoPreSearchCols[iCol];
                    oPre.bRegex === undefined && (oPre.bRegex = !0), oPre.bSmart === undefined && (oPre.bSmart = !0), 
                    oPre.bCaseInsensitive === undefined && (oPre.bCaseInsensitive = !0);
                }
                _fnColumnOptions(oSettings, iCol, null);
            }
            function _fnColumnOptions(oSettings, iCol, oOptions) {
                var oCol = oSettings.aoColumns[iCol];
                oOptions !== undefined && null !== oOptions && (oOptions.mDataProp && !oOptions.mData && (oOptions.mData = oOptions.mDataProp), 
                oOptions.sType !== undefined && (oCol.sType = oOptions.sType, oCol._bAutoType = !1), 
                $.extend(oCol, oOptions), _fnMap(oCol, oOptions, "sWidth", "sWidthOrig"), oOptions.iDataSort !== undefined && (oCol.aDataSort = [ oOptions.iDataSort ]), 
                _fnMap(oCol, oOptions, "aDataSort"));
                var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null, mData = _fnGetObjectDataFn(oCol.mData);
                oCol.fnGetData = function(oData, sSpecific) {
                    var innerData = mData(oData, sSpecific);
                    return oCol.mRender && sSpecific && "" !== sSpecific ? mRender(innerData, sSpecific, oData) : innerData;
                }, oCol.fnSetData = _fnSetObjectDataFn(oCol.mData), oSettings.oFeatures.bSort || (oCol.bSortable = !1), 
                !oCol.bSortable || -1 == $.inArray("asc", oCol.asSorting) && -1 == $.inArray("desc", oCol.asSorting) ? (oCol.sSortingClass = oSettings.oClasses.sSortableNone, 
                oCol.sSortingClassJUI = "") : -1 == $.inArray("asc", oCol.asSorting) && -1 == $.inArray("desc", oCol.asSorting) ? (oCol.sSortingClass = oSettings.oClasses.sSortable, 
                oCol.sSortingClassJUI = oSettings.oClasses.sSortJUI) : -1 != $.inArray("asc", oCol.asSorting) && -1 == $.inArray("desc", oCol.asSorting) ? (oCol.sSortingClass = oSettings.oClasses.sSortableAsc, 
                oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIAscAllowed) : -1 == $.inArray("asc", oCol.asSorting) && -1 != $.inArray("desc", oCol.asSorting) && (oCol.sSortingClass = oSettings.oClasses.sSortableDesc, 
                oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIDescAllowed);
            }
            function _fnAdjustColumnSizing(oSettings) {
                if (oSettings.oFeatures.bAutoWidth === !1) return !1;
                _fnCalculateColumnWidths(oSettings);
                for (var i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) oSettings.aoColumns[i].nTh.style.width = oSettings.aoColumns[i].sWidth;
            }
            function _fnVisibleToColumnIndex(oSettings, iMatch) {
                var aiVis = _fnGetColumns(oSettings, "bVisible");
                return "number" == typeof aiVis[iMatch] ? aiVis[iMatch] : null;
            }
            function _fnColumnIndexToVisible(oSettings, iMatch) {
                var aiVis = _fnGetColumns(oSettings, "bVisible"), iPos = $.inArray(iMatch, aiVis);
                return -1 !== iPos ? iPos : null;
            }
            function _fnVisbleColumns(oSettings) {
                return _fnGetColumns(oSettings, "bVisible").length;
            }
            function _fnGetColumns(oSettings, sParam) {
                var a = [];
                return $.map(oSettings.aoColumns, function(val, i) {
                    val[sParam] && a.push(i);
                }), a;
            }
            function _fnDetectType(sData) {
                for (var aTypes = DataTable.ext.aTypes, iLen = aTypes.length, i = 0; iLen > i; i++) {
                    var sType = aTypes[i](sData);
                    if (null !== sType) return sType;
                }
                return "string";
            }
            function _fnReOrderIndex(oSettings, sColumns) {
                for (var aColumns = sColumns.split(","), aiReturn = [], i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) for (var j = 0; iLen > j; j++) if (oSettings.aoColumns[i].sName == aColumns[j]) {
                    aiReturn.push(j);
                    break;
                }
                return aiReturn;
            }
            function _fnColumnOrdering(oSettings) {
                for (var sNames = "", i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) sNames += oSettings.aoColumns[i].sName + ",";
                return sNames.length == iLen ? "" : sNames.slice(0, -1);
            }
            function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
                var i, iLen, j, jLen, k, kLen;
                if (aoColDefs) for (i = aoColDefs.length - 1; i >= 0; i--) {
                    var aTargets = aoColDefs[i].aTargets;
                    for ($.isArray(aTargets) || _fnLog(oSettings, 1, "aTargets must be an array of targets, not a " + typeof aTargets), 
                    j = 0, jLen = aTargets.length; jLen > j; j++) if ("number" == typeof aTargets[j] && aTargets[j] >= 0) {
                        for (;oSettings.aoColumns.length <= aTargets[j]; ) _fnAddColumn(oSettings);
                        fn(aTargets[j], aoColDefs[i]);
                    } else if ("number" == typeof aTargets[j] && aTargets[j] < 0) fn(oSettings.aoColumns.length + aTargets[j], aoColDefs[i]); else if ("string" == typeof aTargets[j]) for (k = 0, 
                    kLen = oSettings.aoColumns.length; kLen > k; k++) ("_all" == aTargets[j] || $(oSettings.aoColumns[k].nTh).hasClass(aTargets[j])) && fn(k, aoColDefs[i]);
                }
                if (aoCols) for (i = 0, iLen = aoCols.length; iLen > i; i++) fn(i, aoCols[i]);
            }
            function _fnAddData(oSettings, aDataSupplied) {
                var oCol, aDataIn = $.isArray(aDataSupplied) ? aDataSupplied.slice() : $.extend(!0, {}, aDataSupplied), iRow = oSettings.aoData.length, oData = $.extend(!0, {}, DataTable.models.oRow);
                oData._aData = aDataIn, oSettings.aoData.push(oData);
                for (var sThisType, i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) if (oCol = oSettings.aoColumns[i], 
                "function" == typeof oCol.fnRender && oCol.bUseRendered && null !== oCol.mData ? _fnSetCellData(oSettings, iRow, i, _fnRender(oSettings, iRow, i)) : _fnSetCellData(oSettings, iRow, i, _fnGetCellData(oSettings, iRow, i)), 
                oCol._bAutoType && "string" != oCol.sType) {
                    var sVarType = _fnGetCellData(oSettings, iRow, i, "type");
                    null !== sVarType && "" !== sVarType && (sThisType = _fnDetectType(sVarType), null === oCol.sType ? oCol.sType = sThisType : oCol.sType != sThisType && "html" != oCol.sType && (oCol.sType = "string"));
                }
                return oSettings.aiDisplayMaster.push(iRow), oSettings.oFeatures.bDeferRender || _fnCreateTr(oSettings, iRow), 
                iRow;
            }
            function _fnGatherData(oSettings) {
                var i, iLen, jInner, nTds, nTrs, nTd, nTr, iThisIndex, iRow, iRows, iColumn, iColumns, sNodeName, oCol, oData;
                if (oSettings.bDeferLoading || null === oSettings.sAjaxSource) for (nTr = oSettings.nTBody.firstChild; nTr; ) {
                    if ("TR" == nTr.nodeName.toUpperCase()) for (iThisIndex = oSettings.aoData.length, 
                    nTr._DT_RowIndex = iThisIndex, oSettings.aoData.push($.extend(!0, {}, DataTable.models.oRow, {
                        nTr: nTr
                    })), oSettings.aiDisplayMaster.push(iThisIndex), nTd = nTr.firstChild, jInner = 0; nTd; ) sNodeName = nTd.nodeName.toUpperCase(), 
                    ("TD" == sNodeName || "TH" == sNodeName) && (_fnSetCellData(oSettings, iThisIndex, jInner, $.trim(nTd.innerHTML)), 
                    jInner++), nTd = nTd.nextSibling;
                    nTr = nTr.nextSibling;
                }
                for (nTrs = _fnGetTrNodes(oSettings), nTds = [], i = 0, iLen = nTrs.length; iLen > i; i++) for (nTd = nTrs[i].firstChild; nTd; ) sNodeName = nTd.nodeName.toUpperCase(), 
                ("TD" == sNodeName || "TH" == sNodeName) && nTds.push(nTd), nTd = nTd.nextSibling;
                for (iColumn = 0, iColumns = oSettings.aoColumns.length; iColumns > iColumn; iColumn++) {
                    oCol = oSettings.aoColumns[iColumn], null === oCol.sTitle && (oCol.sTitle = oCol.nTh.innerHTML);
                    var nCell, sThisType, sRendered, sValType, bAutoType = oCol._bAutoType, bRender = "function" == typeof oCol.fnRender, bClass = null !== oCol.sClass, bVisible = oCol.bVisible;
                    if (bAutoType || bRender || bClass || !bVisible) for (iRow = 0, iRows = oSettings.aoData.length; iRows > iRow; iRow++) oData = oSettings.aoData[iRow], 
                    nCell = nTds[iRow * iColumns + iColumn], bAutoType && "string" != oCol.sType && (sValType = _fnGetCellData(oSettings, iRow, iColumn, "type"), 
                    "" !== sValType && (sThisType = _fnDetectType(sValType), null === oCol.sType ? oCol.sType = sThisType : oCol.sType != sThisType && "html" != oCol.sType && (oCol.sType = "string"))), 
                    oCol.mRender ? nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, "display") : oCol.mData !== iColumn && (nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, "display")), 
                    bRender && (sRendered = _fnRender(oSettings, iRow, iColumn), nCell.innerHTML = sRendered, 
                    oCol.bUseRendered && _fnSetCellData(oSettings, iRow, iColumn, sRendered)), bClass && (nCell.className += " " + oCol.sClass), 
                    bVisible ? oData._anHidden[iColumn] = null : (oData._anHidden[iColumn] = nCell, 
                    nCell.parentNode.removeChild(nCell)), oCol.fnCreatedCell && oCol.fnCreatedCell.call(oSettings.oInstance, nCell, _fnGetCellData(oSettings, iRow, iColumn, "display"), oData._aData, iRow, iColumn);
                }
                if (0 !== oSettings.aoRowCreatedCallback.length) for (i = 0, iLen = oSettings.aoData.length; iLen > i; i++) oData = oSettings.aoData[i], 
                _fnCallbackFire(oSettings, "aoRowCreatedCallback", null, [ oData.nTr, oData._aData, i ]);
            }
            function _fnNodeToDataIndex(oSettings, n) {
                return n._DT_RowIndex !== undefined ? n._DT_RowIndex : null;
            }
            function _fnNodeToColumnIndex(oSettings, iRow, n) {
                for (var anCells = _fnGetTdNodes(oSettings, iRow), i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) if (anCells[i] === n) return i;
                return -1;
            }
            function _fnGetRowData(oSettings, iRow, sSpecific, aiColumns) {
                for (var out = [], i = 0, iLen = aiColumns.length; iLen > i; i++) out.push(_fnGetCellData(oSettings, iRow, aiColumns[i], sSpecific));
                return out;
            }
            function _fnGetCellData(oSettings, iRow, iCol, sSpecific) {
                var sData, oCol = oSettings.aoColumns[iCol], oData = oSettings.aoData[iRow]._aData;
                if ((sData = oCol.fnGetData(oData, sSpecific)) === undefined) return oSettings.iDrawError != oSettings.iDraw && null === oCol.sDefaultContent && (_fnLog(oSettings, 0, "Requested unknown parameter " + ("function" == typeof oCol.mData ? "{mData function}" : "'" + oCol.mData + "'") + " from the data source for row " + iRow), 
                oSettings.iDrawError = oSettings.iDraw), oCol.sDefaultContent;
                if (null === sData && null !== oCol.sDefaultContent) sData = oCol.sDefaultContent; else if ("function" == typeof sData) return sData();
                return "display" == sSpecific && null === sData ? "" : sData;
            }
            function _fnSetCellData(oSettings, iRow, iCol, val) {
                var oCol = oSettings.aoColumns[iCol], oData = oSettings.aoData[iRow]._aData;
                oCol.fnSetData(oData, val);
            }
            function _fnGetObjectDataFn(mSource) {
                if (null === mSource) return function() {
                    return null;
                };
                if ("function" == typeof mSource) return function(data, type, extra) {
                    return mSource(data, type, extra);
                };
                if ("string" != typeof mSource || -1 === mSource.indexOf(".") && -1 === mSource.indexOf("[")) return function(data) {
                    return data[mSource];
                };
                var fetchData = function(data, type, src) {
                    var arrayNotation, out, innerSrc, a = src.split(".");
                    if ("" !== src) for (var i = 0, iLen = a.length; iLen > i; i++) {
                        if (arrayNotation = a[i].match(__reArray)) {
                            a[i] = a[i].replace(__reArray, ""), "" !== a[i] && (data = data[a[i]]), out = [], 
                            a.splice(0, i + 1), innerSrc = a.join(".");
                            for (var j = 0, jLen = data.length; jLen > j; j++) out.push(fetchData(data[j], type, innerSrc));
                            var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                            data = "" === join ? out : out.join(join);
                            break;
                        }
                        if (null === data || data[a[i]] === undefined) return undefined;
                        data = data[a[i]];
                    }
                    return data;
                };
                return function(data, type) {
                    return fetchData(data, type, mSource);
                };
            }
            function _fnSetObjectDataFn(mSource) {
                if (null === mSource) return function() {};
                if ("function" == typeof mSource) return function(data, val) {
                    mSource(data, "set", val);
                };
                if ("string" != typeof mSource || -1 === mSource.indexOf(".") && -1 === mSource.indexOf("[")) return function(data, val) {
                    data[mSource] = val;
                };
                var setData = function(data, val, src) {
                    for (var b, arrayNotation, o, innerSrc, a = src.split("."), i = 0, iLen = a.length - 1; iLen > i; i++) {
                        if (arrayNotation = a[i].match(__reArray)) {
                            a[i] = a[i].replace(__reArray, ""), data[a[i]] = [], b = a.slice(), b.splice(0, i + 1), 
                            innerSrc = b.join(".");
                            for (var j = 0, jLen = val.length; jLen > j; j++) o = {}, setData(o, val[j], innerSrc), 
                            data[a[i]].push(o);
                            return;
                        }
                        (null === data[a[i]] || data[a[i]] === undefined) && (data[a[i]] = {}), data = data[a[i]];
                    }
                    data[a[a.length - 1].replace(__reArray, "")] = val;
                };
                return function(data, val) {
                    return setData(data, val, mSource);
                };
            }
            function _fnGetDataMaster(oSettings) {
                for (var aData = [], iLen = oSettings.aoData.length, i = 0; iLen > i; i++) aData.push(oSettings.aoData[i]._aData);
                return aData;
            }
            function _fnClearTable(oSettings) {
                oSettings.aoData.splice(0, oSettings.aoData.length), oSettings.aiDisplayMaster.splice(0, oSettings.aiDisplayMaster.length), 
                oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length), _fnCalculateEnd(oSettings);
            }
            function _fnDeleteIndex(a, iTarget) {
                for (var iTargetIndex = -1, i = 0, iLen = a.length; iLen > i; i++) a[i] == iTarget ? iTargetIndex = i : a[i] > iTarget && a[i]--;
                -1 != iTargetIndex && a.splice(iTargetIndex, 1);
            }
            function _fnRender(oSettings, iRow, iCol) {
                var oCol = oSettings.aoColumns[iCol];
                return oCol.fnRender({
                    iDataRow: iRow,
                    iDataColumn: iCol,
                    oSettings: oSettings,
                    aData: oSettings.aoData[iRow]._aData,
                    mDataProp: oCol.mData
                }, _fnGetCellData(oSettings, iRow, iCol, "display"));
            }
            function _fnCreateTr(oSettings, iRow) {
                var nTd, oData = oSettings.aoData[iRow];
                if (null === oData.nTr) {
                    oData.nTr = document.createElement("tr"), oData.nTr._DT_RowIndex = iRow, oData._aData.DT_RowId && (oData.nTr.id = oData._aData.DT_RowId), 
                    oData._aData.DT_RowClass && (oData.nTr.className = oData._aData.DT_RowClass);
                    for (var i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) {
                        var oCol = oSettings.aoColumns[i];
                        nTd = document.createElement(oCol.sCellType), nTd.innerHTML = "function" != typeof oCol.fnRender || oCol.bUseRendered && null !== oCol.mData ? _fnGetCellData(oSettings, iRow, i, "display") : _fnRender(oSettings, iRow, i), 
                        null !== oCol.sClass && (nTd.className = oCol.sClass), oCol.bVisible ? (oData.nTr.appendChild(nTd), 
                        oData._anHidden[i] = null) : oData._anHidden[i] = nTd, oCol.fnCreatedCell && oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i, "display"), oData._aData, iRow, i);
                    }
                    _fnCallbackFire(oSettings, "aoRowCreatedCallback", null, [ oData.nTr, oData._aData, iRow ]);
                }
            }
            function _fnBuildHead(oSettings) {
                var i, nTh, iLen, iThs = $("th, td", oSettings.nTHead).length;
                if (0 !== iThs) for (i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) nTh = oSettings.aoColumns[i].nTh, 
                nTh.setAttribute("role", "columnheader"), oSettings.aoColumns[i].bSortable && (nTh.setAttribute("tabindex", oSettings.iTabIndex), 
                nTh.setAttribute("aria-controls", oSettings.sTableId)), null !== oSettings.aoColumns[i].sClass && $(nTh).addClass(oSettings.aoColumns[i].sClass), 
                oSettings.aoColumns[i].sTitle != nTh.innerHTML && (nTh.innerHTML = oSettings.aoColumns[i].sTitle); else {
                    var nTr = document.createElement("tr");
                    for (i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) nTh = oSettings.aoColumns[i].nTh, 
                    nTh.innerHTML = oSettings.aoColumns[i].sTitle, nTh.setAttribute("tabindex", "0"), 
                    null !== oSettings.aoColumns[i].sClass && $(nTh).addClass(oSettings.aoColumns[i].sClass), 
                    nTr.appendChild(nTh);
                    $(oSettings.nTHead).html("")[0].appendChild(nTr), _fnDetectHeader(oSettings.aoHeader, oSettings.nTHead);
                }
                if ($(oSettings.nTHead).children("tr").attr("role", "row"), oSettings.bJUI) for (i = 0, 
                iLen = oSettings.aoColumns.length; iLen > i; i++) {
                    nTh = oSettings.aoColumns[i].nTh;
                    var nDiv = document.createElement("div");
                    nDiv.className = oSettings.oClasses.sSortJUIWrapper, $(nTh).contents().appendTo(nDiv);
                    var nSpan = document.createElement("span");
                    nSpan.className = oSettings.oClasses.sSortIcon, nDiv.appendChild(nSpan), nTh.appendChild(nDiv);
                }
                if (oSettings.oFeatures.bSort) for (i = 0; i < oSettings.aoColumns.length; i++) oSettings.aoColumns[i].bSortable !== !1 ? _fnSortAttachListener(oSettings, oSettings.aoColumns[i].nTh, i) : $(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);
                if ("" !== oSettings.oClasses.sFooterTH && $(oSettings.nTFoot).children("tr").children("th").addClass(oSettings.oClasses.sFooterTH), 
                null !== oSettings.nTFoot) {
                    var anCells = _fnGetUniqueThs(oSettings, null, oSettings.aoFooter);
                    for (i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) anCells[i] && (oSettings.aoColumns[i].nTf = anCells[i], 
                    oSettings.aoColumns[i].sClass && $(anCells[i]).addClass(oSettings.aoColumns[i].sClass));
                }
            }
            function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
                var i, iLen, j, jLen, k, n, nLocalTr, iRowspan, iColspan, aoLocal = [], aApplied = [], iColumns = oSettings.aoColumns.length;
                for (bIncludeHidden === undefined && (bIncludeHidden = !1), i = 0, iLen = aoSource.length; iLen > i; i++) {
                    for (aoLocal[i] = aoSource[i].slice(), aoLocal[i].nTr = aoSource[i].nTr, j = iColumns - 1; j >= 0; j--) oSettings.aoColumns[j].bVisible || bIncludeHidden || aoLocal[i].splice(j, 1);
                    aApplied.push([]);
                }
                for (i = 0, iLen = aoLocal.length; iLen > i; i++) {
                    if (nLocalTr = aoLocal[i].nTr) for (;n = nLocalTr.firstChild; ) nLocalTr.removeChild(n);
                    for (j = 0, jLen = aoLocal[i].length; jLen > j; j++) if (iRowspan = 1, iColspan = 1, 
                    aApplied[i][j] === undefined) {
                        for (nLocalTr.appendChild(aoLocal[i][j].cell), aApplied[i][j] = 1; aoLocal[i + iRowspan] !== undefined && aoLocal[i][j].cell == aoLocal[i + iRowspan][j].cell; ) aApplied[i + iRowspan][j] = 1, 
                        iRowspan++;
                        for (;aoLocal[i][j + iColspan] !== undefined && aoLocal[i][j].cell == aoLocal[i][j + iColspan].cell; ) {
                            for (k = 0; iRowspan > k; k++) aApplied[i + k][j + iColspan] = 1;
                            iColspan++;
                        }
                        aoLocal[i][j].cell.rowSpan = iRowspan, aoLocal[i][j].cell.colSpan = iColspan;
                    }
                }
            }
            function _fnDraw(oSettings) {
                var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [ oSettings ]);
                if (-1 !== $.inArray(!1, aPreDraw)) return void _fnProcessingDisplay(oSettings, !1);
                var i, iLen, n, anRows = [], iRowCount = 0, iStripes = oSettings.asStripeClasses.length, iOpenRows = oSettings.aoOpenRows.length;
                if (oSettings.bDrawing = !0, oSettings.iInitDisplayStart !== undefined && -1 != oSettings.iInitDisplayStart && (oSettings._iDisplayStart = oSettings.oFeatures.bServerSide ? oSettings.iInitDisplayStart : oSettings.iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : oSettings.iInitDisplayStart, 
                oSettings.iInitDisplayStart = -1, _fnCalculateEnd(oSettings)), oSettings.bDeferLoading) oSettings.bDeferLoading = !1, 
                oSettings.iDraw++; else if (oSettings.oFeatures.bServerSide) {
                    if (!oSettings.bDestroying && !_fnAjaxUpdate(oSettings)) return;
                } else oSettings.iDraw++;
                if (0 !== oSettings.aiDisplay.length) {
                    var iStart = oSettings._iDisplayStart, iEnd = oSettings._iDisplayEnd;
                    oSettings.oFeatures.bServerSide && (iStart = 0, iEnd = oSettings.aoData.length);
                    for (var j = iStart; iEnd > j; j++) {
                        var aoData = oSettings.aoData[oSettings.aiDisplay[j]];
                        null === aoData.nTr && _fnCreateTr(oSettings, oSettings.aiDisplay[j]);
                        var nRow = aoData.nTr;
                        if (0 !== iStripes) {
                            var sStripe = oSettings.asStripeClasses[iRowCount % iStripes];
                            aoData._sRowStripe != sStripe && ($(nRow).removeClass(aoData._sRowStripe).addClass(sStripe), 
                            aoData._sRowStripe = sStripe);
                        }
                        if (_fnCallbackFire(oSettings, "aoRowCallback", null, [ nRow, oSettings.aoData[oSettings.aiDisplay[j]]._aData, iRowCount, j ]), 
                        anRows.push(nRow), iRowCount++, 0 !== iOpenRows) for (var k = 0; iOpenRows > k; k++) if (nRow == oSettings.aoOpenRows[k].nParent) {
                            anRows.push(oSettings.aoOpenRows[k].nTr);
                            break;
                        }
                    }
                } else {
                    anRows[0] = document.createElement("tr"), oSettings.asStripeClasses[0] && (anRows[0].className = oSettings.asStripeClasses[0]);
                    var oLang = oSettings.oLanguage, sZero = oLang.sZeroRecords;
                    1 != oSettings.iDraw || null === oSettings.sAjaxSource || oSettings.oFeatures.bServerSide ? oLang.sEmptyTable && 0 === oSettings.fnRecordsTotal() && (sZero = oLang.sEmptyTable) : sZero = oLang.sLoadingRecords;
                    var nTd = document.createElement("td");
                    nTd.setAttribute("valign", "top"), nTd.colSpan = _fnVisbleColumns(oSettings), nTd.className = oSettings.oClasses.sRowEmpty, 
                    nTd.innerHTML = _fnInfoMacros(oSettings, sZero), anRows[iRowCount].appendChild(nTd);
                }
                _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [ $(oSettings.nTHead).children("tr")[0], _fnGetDataMaster(oSettings), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay ]), 
                _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [ $(oSettings.nTFoot).children("tr")[0], _fnGetDataMaster(oSettings), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay ]);
                var nBodyPar, nAddFrag = document.createDocumentFragment(), nRemoveFrag = document.createDocumentFragment();
                if (oSettings.nTBody) {
                    if (nBodyPar = oSettings.nTBody.parentNode, nRemoveFrag.appendChild(oSettings.nTBody), 
                    !oSettings.oScroll.bInfinite || !oSettings._bInitComplete || oSettings.bSorted || oSettings.bFiltered) for (;n = oSettings.nTBody.firstChild; ) oSettings.nTBody.removeChild(n);
                    for (i = 0, iLen = anRows.length; iLen > i; i++) nAddFrag.appendChild(anRows[i]);
                    oSettings.nTBody.appendChild(nAddFrag), null !== nBodyPar && nBodyPar.appendChild(oSettings.nTBody);
                }
                _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [ oSettings ]), oSettings.bSorted = !1, 
                oSettings.bFiltered = !1, oSettings.bDrawing = !1, oSettings.oFeatures.bServerSide && (_fnProcessingDisplay(oSettings, !1), 
                oSettings._bInitComplete || _fnInitComplete(oSettings));
            }
            function _fnReDraw(oSettings) {
                oSettings.oFeatures.bSort ? _fnSort(oSettings, oSettings.oPreviousSearch) : oSettings.oFeatures.bFilter ? _fnFilterComplete(oSettings, oSettings.oPreviousSearch) : (_fnCalculateEnd(oSettings), 
                _fnDraw(oSettings));
            }
            function _fnAddOptionsHtml(oSettings) {
                var nHolding = $("<div></div>")[0];
                oSettings.nTable.parentNode.insertBefore(nHolding, oSettings.nTable), oSettings.nTableWrapper = $('<div id="' + oSettings.sTableId + '_wrapper" class="' + oSettings.oClasses.sWrapper + '" role="grid"></div>')[0], 
                oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
                for (var nTmp, iPushFeature, cOption, nNewNode, cNext, sAttr, j, nInsertNode = oSettings.nTableWrapper, aDom = oSettings.sDom.split(""), i = 0; i < aDom.length; i++) {
                    if (iPushFeature = 0, cOption = aDom[i], "<" == cOption) {
                        if (nNewNode = $("<div></div>")[0], cNext = aDom[i + 1], "'" == cNext || '"' == cNext) {
                            for (sAttr = "", j = 2; aDom[i + j] != cNext; ) sAttr += aDom[i + j], j++;
                            if ("H" == sAttr ? sAttr = oSettings.oClasses.sJUIHeader : "F" == sAttr && (sAttr = oSettings.oClasses.sJUIFooter), 
                            -1 != sAttr.indexOf(".")) {
                                var aSplit = sAttr.split(".");
                                nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1), nNewNode.className = aSplit[1];
                            } else "#" == sAttr.charAt(0) ? nNewNode.id = sAttr.substr(1, sAttr.length - 1) : nNewNode.className = sAttr;
                            i += j;
                        }
                        nInsertNode.appendChild(nNewNode), nInsertNode = nNewNode;
                    } else if (">" == cOption) nInsertNode = nInsertNode.parentNode; else if ("l" == cOption && oSettings.oFeatures.bPaginate && oSettings.oFeatures.bLengthChange) nTmp = _fnFeatureHtmlLength(oSettings), 
                    iPushFeature = 1; else if ("f" == cOption && oSettings.oFeatures.bFilter) nTmp = _fnFeatureHtmlFilter(oSettings), 
                    iPushFeature = 1; else if ("r" == cOption && oSettings.oFeatures.bProcessing) nTmp = _fnFeatureHtmlProcessing(oSettings), 
                    iPushFeature = 1; else if ("t" == cOption) nTmp = _fnFeatureHtmlTable(oSettings), 
                    iPushFeature = 1; else if ("i" == cOption && oSettings.oFeatures.bInfo) nTmp = _fnFeatureHtmlInfo(oSettings), 
                    iPushFeature = 1; else if ("p" == cOption && oSettings.oFeatures.bPaginate) nTmp = _fnFeatureHtmlPaginate(oSettings), 
                    iPushFeature = 1; else if (0 !== DataTable.ext.aoFeatures.length) for (var aoFeatures = DataTable.ext.aoFeatures, k = 0, kLen = aoFeatures.length; kLen > k; k++) if (cOption == aoFeatures[k].cFeature) {
                        nTmp = aoFeatures[k].fnInit(oSettings), nTmp && (iPushFeature = 1);
                        break;
                    }
                    1 == iPushFeature && null !== nTmp && ("object" != typeof oSettings.aanFeatures[cOption] && (oSettings.aanFeatures[cOption] = []), 
                    oSettings.aanFeatures[cOption].push(nTmp), nInsertNode.appendChild(nTmp));
                }
                nHolding.parentNode.replaceChild(oSettings.nTableWrapper, nHolding);
            }
            function _fnDetectHeader(aLayout, nThead) {
                var nTr, nCell, i, k, l, iLen, iColShifted, iColumn, iColspan, iRowspan, bUnique, nTrs = $(nThead).children("tr"), fnShiftCol = function(a, i, j) {
                    for (var k = a[i]; k[j]; ) j++;
                    return j;
                };
                for (aLayout.splice(0, aLayout.length), i = 0, iLen = nTrs.length; iLen > i; i++) aLayout.push([]);
                for (i = 0, iLen = nTrs.length; iLen > i; i++) for (nTr = nTrs[i], iColumn = 0, 
                nCell = nTr.firstChild; nCell; ) {
                    if ("TD" == nCell.nodeName.toUpperCase() || "TH" == nCell.nodeName.toUpperCase()) for (iColspan = 1 * nCell.getAttribute("colspan"), 
                    iRowspan = 1 * nCell.getAttribute("rowspan"), iColspan = iColspan && 0 !== iColspan && 1 !== iColspan ? iColspan : 1, 
                    iRowspan = iRowspan && 0 !== iRowspan && 1 !== iRowspan ? iRowspan : 1, iColShifted = fnShiftCol(aLayout, i, iColumn), 
                    bUnique = 1 === iColspan ? !0 : !1, l = 0; iColspan > l; l++) for (k = 0; iRowspan > k; k++) aLayout[i + k][iColShifted + l] = {
                        cell: nCell,
                        unique: bUnique
                    }, aLayout[i + k].nTr = nTr;
                    nCell = nCell.nextSibling;
                }
            }
            function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
                var aReturn = [];
                aLayout || (aLayout = oSettings.aoHeader, nHeader && (aLayout = [], _fnDetectHeader(aLayout, nHeader)));
                for (var i = 0, iLen = aLayout.length; iLen > i; i++) for (var j = 0, jLen = aLayout[i].length; jLen > j; j++) !aLayout[i][j].unique || aReturn[j] && oSettings.bSortCellsTop || (aReturn[j] = aLayout[i][j].cell);
                return aReturn;
            }
            function _fnAjaxUpdate(oSettings) {
                if (oSettings.bAjaxDataGet) {
                    oSettings.iDraw++, _fnProcessingDisplay(oSettings, !0);
                    var aoData = (oSettings.aoColumns.length, _fnAjaxParameters(oSettings));
                    return _fnServerParams(oSettings, aoData), oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function(json) {
                        _fnAjaxUpdateDraw(oSettings, json);
                    }, oSettings), !1;
                }
                return !0;
            }
            function _fnAjaxParameters(oSettings) {
                var mDataProp, aaSort, aDataSort, i, j, iColumns = oSettings.aoColumns.length, aoData = [];
                for (aoData.push({
                    name: "sEcho",
                    value: oSettings.iDraw
                }), aoData.push({
                    name: "iColumns",
                    value: iColumns
                }), aoData.push({
                    name: "sColumns",
                    value: _fnColumnOrdering(oSettings)
                }), aoData.push({
                    name: "iDisplayStart",
                    value: oSettings._iDisplayStart
                }), aoData.push({
                    name: "iDisplayLength",
                    value: oSettings.oFeatures.bPaginate !== !1 ? oSettings._iDisplayLength : -1
                }), i = 0; iColumns > i; i++) mDataProp = oSettings.aoColumns[i].mData, aoData.push({
                    name: "mDataProp_" + i,
                    value: "function" == typeof mDataProp ? "function" : mDataProp
                });
                if (oSettings.oFeatures.bFilter !== !1) for (aoData.push({
                    name: "sSearch",
                    value: oSettings.oPreviousSearch.sSearch
                }), aoData.push({
                    name: "bRegex",
                    value: oSettings.oPreviousSearch.bRegex
                }), i = 0; iColumns > i; i++) aoData.push({
                    name: "sSearch_" + i,
                    value: oSettings.aoPreSearchCols[i].sSearch
                }), aoData.push({
                    name: "bRegex_" + i,
                    value: oSettings.aoPreSearchCols[i].bRegex
                }), aoData.push({
                    name: "bSearchable_" + i,
                    value: oSettings.aoColumns[i].bSearchable
                });
                if (oSettings.oFeatures.bSort !== !1) {
                    var iCounter = 0;
                    for (aaSort = null !== oSettings.aaSortingFixed ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice(), 
                    i = 0; i < aaSort.length; i++) for (aDataSort = oSettings.aoColumns[aaSort[i][0]].aDataSort, 
                    j = 0; j < aDataSort.length; j++) aoData.push({
                        name: "iSortCol_" + iCounter,
                        value: aDataSort[j]
                    }), aoData.push({
                        name: "sSortDir_" + iCounter,
                        value: aaSort[i][1]
                    }), iCounter++;
                    for (aoData.push({
                        name: "iSortingCols",
                        value: iCounter
                    }), i = 0; iColumns > i; i++) aoData.push({
                        name: "bSortable_" + i,
                        value: oSettings.aoColumns[i].bSortable
                    });
                }
                return aoData;
            }
            function _fnServerParams(oSettings, aoData) {
                _fnCallbackFire(oSettings, "aoServerParams", "serverParams", [ aoData ]);
            }
            function _fnAjaxUpdateDraw(oSettings, json) {
                if (json.sEcho !== undefined) {
                    if (1 * json.sEcho < oSettings.iDraw) return;
                    oSettings.iDraw = 1 * json.sEcho;
                }
                (!oSettings.oScroll.bInfinite || oSettings.oScroll.bInfinite && (oSettings.bSorted || oSettings.bFiltered)) && _fnClearTable(oSettings), 
                oSettings._iRecordsTotal = parseInt(json.iTotalRecords, 10), oSettings._iRecordsDisplay = parseInt(json.iTotalDisplayRecords, 10);
                var aiIndex, sOrdering = _fnColumnOrdering(oSettings), bReOrder = json.sColumns !== undefined && "" !== sOrdering && json.sColumns != sOrdering;
                bReOrder && (aiIndex = _fnReOrderIndex(oSettings, json.sColumns));
                for (var aData = _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json), i = 0, iLen = aData.length; iLen > i; i++) if (bReOrder) {
                    for (var aDataSorted = [], j = 0, jLen = oSettings.aoColumns.length; jLen > j; j++) aDataSorted.push(aData[i][aiIndex[j]]);
                    _fnAddData(oSettings, aDataSorted);
                } else _fnAddData(oSettings, aData[i]);
                oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(), oSettings.bAjaxDataGet = !1, 
                _fnDraw(oSettings), oSettings.bAjaxDataGet = !0, _fnProcessingDisplay(oSettings, !1);
            }
            function _fnFeatureHtmlFilter(oSettings) {
                var oPreviousSearch = oSettings.oPreviousSearch, sSearchStr = oSettings.oLanguage.sSearch;
                sSearchStr = -1 !== sSearchStr.indexOf("_INPUT_") ? sSearchStr.replace("_INPUT_", '<input type="text" />') : "" === sSearchStr ? '<input type="text" />' : sSearchStr + ' <input type="text" />';
                var nFilter = document.createElement("div");
                nFilter.className = oSettings.oClasses.sFilter, nFilter.innerHTML = "<label>" + sSearchStr + "</label>", 
                oSettings.aanFeatures.f || (nFilter.id = oSettings.sTableId + "_filter");
                var jqFilter = $('input[type="text"]', nFilter);
                return nFilter._DT_Input = jqFilter[0], jqFilter.val(oPreviousSearch.sSearch.replace('"', "&quot;")), 
                jqFilter.bind("keyup.DT", function() {
                    for (var n = oSettings.aanFeatures.f, val = "" === this.value ? "" : this.value, i = 0, iLen = n.length; iLen > i; i++) n[i] != $(this).parents("div.dataTables_filter")[0] && $(n[i]._DT_Input).val(val);
                    val != oPreviousSearch.sSearch && _fnFilterComplete(oSettings, {
                        sSearch: val,
                        bRegex: oPreviousSearch.bRegex,
                        bSmart: oPreviousSearch.bSmart,
                        bCaseInsensitive: oPreviousSearch.bCaseInsensitive
                    });
                }), jqFilter.attr("aria-controls", oSettings.sTableId).bind("keypress.DT", function(e) {
                    return 13 == e.keyCode ? !1 : void 0;
                }), nFilter;
            }
            function _fnFilterComplete(oSettings, oInput, iForce) {
                var oPrevSearch = oSettings.oPreviousSearch, aoPrevSearch = oSettings.aoPreSearchCols, fnSaveFilter = function(oFilter) {
                    oPrevSearch.sSearch = oFilter.sSearch, oPrevSearch.bRegex = oFilter.bRegex, oPrevSearch.bSmart = oFilter.bSmart, 
                    oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
                };
                if (oSettings.oFeatures.bServerSide) fnSaveFilter(oInput); else {
                    _fnFilter(oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive), 
                    fnSaveFilter(oInput);
                    for (var i = 0; i < oSettings.aoPreSearchCols.length; i++) _fnFilterColumn(oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex, aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive);
                    _fnFilterCustom(oSettings);
                }
                oSettings.bFiltered = !0, $(oSettings.oInstance).trigger("filter", oSettings), oSettings._iDisplayStart = 0, 
                _fnCalculateEnd(oSettings), _fnDraw(oSettings), _fnBuildSearchArray(oSettings, 0);
            }
            function _fnFilterCustom(oSettings) {
                for (var afnFilters = DataTable.ext.afnFiltering, aiFilterColumns = _fnGetColumns(oSettings, "bSearchable"), i = 0, iLen = afnFilters.length; iLen > i; i++) for (var iCorrector = 0, j = 0, jLen = oSettings.aiDisplay.length; jLen > j; j++) {
                    var iDisIndex = oSettings.aiDisplay[j - iCorrector], bTest = afnFilters[i](oSettings, _fnGetRowData(oSettings, iDisIndex, "filter", aiFilterColumns), iDisIndex);
                    bTest || (oSettings.aiDisplay.splice(j - iCorrector, 1), iCorrector++);
                }
            }
            function _fnFilterColumn(oSettings, sInput, iColumn, bRegex, bSmart, bCaseInsensitive) {
                if ("" !== sInput) for (var iIndexCorrector = 0, rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive), i = oSettings.aiDisplay.length - 1; i >= 0; i--) {
                    var sData = _fnDataToSearch(_fnGetCellData(oSettings, oSettings.aiDisplay[i], iColumn, "filter"), oSettings.aoColumns[iColumn].sType);
                    rpSearch.test(sData) || (oSettings.aiDisplay.splice(i, 1), iIndexCorrector++);
                }
            }
            function _fnFilter(oSettings, sInput, iForce, bRegex, bSmart, bCaseInsensitive) {
                var i, rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive), oPrevSearch = oSettings.oPreviousSearch;
                if (iForce || (iForce = 0), 0 !== DataTable.ext.afnFiltering.length && (iForce = 1), 
                sInput.length <= 0) oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length), oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(); else if (oSettings.aiDisplay.length == oSettings.aiDisplayMaster.length || oPrevSearch.sSearch.length > sInput.length || 1 == iForce || 0 !== sInput.indexOf(oPrevSearch.sSearch)) for (oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length), 
                _fnBuildSearchArray(oSettings, 1), i = 0; i < oSettings.aiDisplayMaster.length; i++) rpSearch.test(oSettings.asDataSearch[i]) && oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]); else {
                    var iIndexCorrector = 0;
                    for (i = 0; i < oSettings.asDataSearch.length; i++) rpSearch.test(oSettings.asDataSearch[i]) || (oSettings.aiDisplay.splice(i - iIndexCorrector, 1), 
                    iIndexCorrector++);
                }
            }
            function _fnBuildSearchArray(oSettings, iMaster) {
                if (!oSettings.oFeatures.bServerSide) {
                    oSettings.asDataSearch = [];
                    for (var aiFilterColumns = _fnGetColumns(oSettings, "bSearchable"), aiIndex = 1 === iMaster ? oSettings.aiDisplayMaster : oSettings.aiDisplay, i = 0, iLen = aiIndex.length; iLen > i; i++) oSettings.asDataSearch[i] = _fnBuildSearchRow(oSettings, _fnGetRowData(oSettings, aiIndex[i], "filter", aiFilterColumns));
                }
            }
            function _fnBuildSearchRow(oSettings, aData) {
                var sSearch = aData.join("  ");
                return -1 !== sSearch.indexOf("&") && (sSearch = $("<div>").html(sSearch).text()), 
                sSearch.replace(/[\n\r]/g, " ");
            }
            function _fnFilterCreateSearch(sSearch, bRegex, bSmart, bCaseInsensitive) {
                var asSearch, sRegExpString;
                return bSmart ? (asSearch = bRegex ? sSearch.split(" ") : _fnEscapeRegex(sSearch).split(" "), 
                sRegExpString = "^(?=.*?" + asSearch.join(")(?=.*?") + ").*$", new RegExp(sRegExpString, bCaseInsensitive ? "i" : "")) : (sSearch = bRegex ? sSearch : _fnEscapeRegex(sSearch), 
                new RegExp(sSearch, bCaseInsensitive ? "i" : ""));
            }
            function _fnDataToSearch(sData, sType) {
                return "function" == typeof DataTable.ext.ofnSearch[sType] ? DataTable.ext.ofnSearch[sType](sData) : null === sData ? "" : "html" == sType ? sData.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "") : "string" == typeof sData ? sData.replace(/[\r\n]/g, " ") : sData;
            }
            function _fnEscapeRegex(sVal) {
                var acEscape = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-" ], reReplace = new RegExp("(\\" + acEscape.join("|\\") + ")", "g");
                return sVal.replace(reReplace, "\\$1");
            }
            function _fnFeatureHtmlInfo(oSettings) {
                var nInfo = document.createElement("div");
                return nInfo.className = oSettings.oClasses.sInfo, oSettings.aanFeatures.i || (oSettings.aoDrawCallback.push({
                    fn: _fnUpdateInfo,
                    sName: "information"
                }), nInfo.id = oSettings.sTableId + "_info"), oSettings.nTable.setAttribute("aria-describedby", oSettings.sTableId + "_info"), 
                nInfo;
            }
            function _fnUpdateInfo(oSettings) {
                if (oSettings.oFeatures.bInfo && 0 !== oSettings.aanFeatures.i.length) {
                    var sOut, oLang = oSettings.oLanguage, iStart = oSettings._iDisplayStart + 1, iEnd = oSettings.fnDisplayEnd(), iMax = oSettings.fnRecordsTotal(), iTotal = oSettings.fnRecordsDisplay();
                    sOut = 0 === iTotal ? oLang.sInfoEmpty : oLang.sInfo, iTotal != iMax && (sOut += " " + oLang.sInfoFiltered), 
                    sOut += oLang.sInfoPostFix, sOut = _fnInfoMacros(oSettings, sOut), null !== oLang.fnInfoCallback && (sOut = oLang.fnInfoCallback.call(oSettings.oInstance, oSettings, iStart, iEnd, iMax, iTotal, sOut));
                    for (var n = oSettings.aanFeatures.i, i = 0, iLen = n.length; iLen > i; i++) $(n[i]).html(sOut);
                }
            }
            function _fnInfoMacros(oSettings, str) {
                var iStart = oSettings._iDisplayStart + 1, sStart = oSettings.fnFormatNumber(iStart), iEnd = oSettings.fnDisplayEnd(), sEnd = oSettings.fnFormatNumber(iEnd), iTotal = oSettings.fnRecordsDisplay(), sTotal = oSettings.fnFormatNumber(iTotal), iMax = oSettings.fnRecordsTotal(), sMax = oSettings.fnFormatNumber(iMax);
                return oSettings.oScroll.bInfinite && (sStart = oSettings.fnFormatNumber(1)), str.replace(/_START_/g, sStart).replace(/_END_/g, sEnd).replace(/_TOTAL_/g, sTotal).replace(/_MAX_/g, sMax);
            }
            function _fnInitialise(oSettings) {
                var i, iLen, iAjaxStart = oSettings.iInitDisplayStart;
                if (oSettings.bInitialised === !1) return void setTimeout(function() {
                    _fnInitialise(oSettings);
                }, 200);
                for (_fnAddOptionsHtml(oSettings), _fnBuildHead(oSettings), _fnDrawHead(oSettings, oSettings.aoHeader), 
                oSettings.nTFoot && _fnDrawHead(oSettings, oSettings.aoFooter), _fnProcessingDisplay(oSettings, !0), 
                oSettings.oFeatures.bAutoWidth && _fnCalculateColumnWidths(oSettings), i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) null !== oSettings.aoColumns[i].sWidth && (oSettings.aoColumns[i].nTh.style.width = _fnStringToCss(oSettings.aoColumns[i].sWidth));
                if (oSettings.oFeatures.bSort ? _fnSort(oSettings) : oSettings.oFeatures.bFilter ? _fnFilterComplete(oSettings, oSettings.oPreviousSearch) : (oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(), 
                _fnCalculateEnd(oSettings), _fnDraw(oSettings)), null !== oSettings.sAjaxSource && !oSettings.oFeatures.bServerSide) {
                    var aoData = [];
                    return _fnServerParams(oSettings, aoData), void oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function(json) {
                        var aData = "" !== oSettings.sAjaxDataProp ? _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json) : json;
                        for (i = 0; i < aData.length; i++) _fnAddData(oSettings, aData[i]);
                        oSettings.iInitDisplayStart = iAjaxStart, oSettings.oFeatures.bSort ? _fnSort(oSettings) : (oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(), 
                        _fnCalculateEnd(oSettings), _fnDraw(oSettings)), _fnProcessingDisplay(oSettings, !1), 
                        _fnInitComplete(oSettings, json);
                    }, oSettings);
                }
                oSettings.oFeatures.bServerSide || (_fnProcessingDisplay(oSettings, !1), _fnInitComplete(oSettings));
            }
            function _fnInitComplete(oSettings, json) {
                oSettings._bInitComplete = !0, _fnCallbackFire(oSettings, "aoInitComplete", "init", [ oSettings, json ]);
            }
            function _fnLanguageCompat(oLanguage) {
                var oDefaults = DataTable.defaults.oLanguage;
                !oLanguage.sEmptyTable && oLanguage.sZeroRecords && "No data available in table" === oDefaults.sEmptyTable && _fnMap(oLanguage, oLanguage, "sZeroRecords", "sEmptyTable"), 
                !oLanguage.sLoadingRecords && oLanguage.sZeroRecords && "Loading..." === oDefaults.sLoadingRecords && _fnMap(oLanguage, oLanguage, "sZeroRecords", "sLoadingRecords");
            }
            function _fnFeatureHtmlLength(oSettings) {
                if (oSettings.oScroll.bInfinite) return null;
                var i, iLen, sName = 'name="' + oSettings.sTableId + '_length"', sStdMenu = '<select size="1" ' + sName + ">", aLengthMenu = oSettings.aLengthMenu;
                if (2 == aLengthMenu.length && "object" == typeof aLengthMenu[0] && "object" == typeof aLengthMenu[1]) for (i = 0, 
                iLen = aLengthMenu[0].length; iLen > i; i++) sStdMenu += '<option value="' + aLengthMenu[0][i] + '">' + aLengthMenu[1][i] + "</option>"; else for (i = 0, 
                iLen = aLengthMenu.length; iLen > i; i++) sStdMenu += '<option value="' + aLengthMenu[i] + '">' + aLengthMenu[i] + "</option>";
                sStdMenu += "</select>";
                var nLength = document.createElement("div");
                return oSettings.aanFeatures.l || (nLength.id = oSettings.sTableId + "_length"), 
                nLength.className = oSettings.oClasses.sLength, nLength.innerHTML = "<label>" + oSettings.oLanguage.sLengthMenu.replace("_MENU_", sStdMenu) + "</label>", 
                $('select option[value="' + oSettings._iDisplayLength + '"]', nLength).attr("selected", !0), 
                $("select", nLength).bind("change.DT", function() {
                    var iVal = $(this).val(), n = oSettings.aanFeatures.l;
                    for (i = 0, iLen = n.length; iLen > i; i++) n[i] != this.parentNode && $("select", n[i]).val(iVal);
                    oSettings._iDisplayLength = parseInt(iVal, 10), _fnCalculateEnd(oSettings), oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() && (oSettings._iDisplayStart = oSettings.fnDisplayEnd() - oSettings._iDisplayLength, 
                    oSettings._iDisplayStart < 0 && (oSettings._iDisplayStart = 0)), -1 == oSettings._iDisplayLength && (oSettings._iDisplayStart = 0), 
                    _fnDraw(oSettings);
                }), $("select", nLength).attr("aria-controls", oSettings.sTableId), nLength;
            }
            function _fnCalculateEnd(oSettings) {
                oSettings._iDisplayEnd = oSettings.oFeatures.bPaginate === !1 ? oSettings.aiDisplay.length : oSettings._iDisplayStart + oSettings._iDisplayLength > oSettings.aiDisplay.length || -1 == oSettings._iDisplayLength ? oSettings.aiDisplay.length : oSettings._iDisplayStart + oSettings._iDisplayLength;
            }
            function _fnFeatureHtmlPaginate(oSettings) {
                if (oSettings.oScroll.bInfinite) return null;
                var nPaginate = document.createElement("div");
                return nPaginate.className = oSettings.oClasses.sPaging + oSettings.sPaginationType, 
                DataTable.ext.oPagination[oSettings.sPaginationType].fnInit(oSettings, nPaginate, function(oSettings) {
                    _fnCalculateEnd(oSettings), _fnDraw(oSettings);
                }), oSettings.aanFeatures.p || oSettings.aoDrawCallback.push({
                    fn: function(oSettings) {
                        DataTable.ext.oPagination[oSettings.sPaginationType].fnUpdate(oSettings, function(oSettings) {
                            _fnCalculateEnd(oSettings), _fnDraw(oSettings);
                        });
                    },
                    sName: "pagination"
                }), nPaginate;
            }
            function _fnPageChange(oSettings, mAction) {
                var iOldStart = oSettings._iDisplayStart;
                if ("number" == typeof mAction) oSettings._iDisplayStart = mAction * oSettings._iDisplayLength, 
                oSettings._iDisplayStart > oSettings.fnRecordsDisplay() && (oSettings._iDisplayStart = 0); else if ("first" == mAction) oSettings._iDisplayStart = 0; else if ("previous" == mAction) oSettings._iDisplayStart = oSettings._iDisplayLength >= 0 ? oSettings._iDisplayStart - oSettings._iDisplayLength : 0, 
                oSettings._iDisplayStart < 0 && (oSettings._iDisplayStart = 0); else if ("next" == mAction) oSettings._iDisplayLength >= 0 ? oSettings._iDisplayStart + oSettings._iDisplayLength < oSettings.fnRecordsDisplay() && (oSettings._iDisplayStart += oSettings._iDisplayLength) : oSettings._iDisplayStart = 0; else if ("last" == mAction) if (oSettings._iDisplayLength >= 0) {
                    var iPages = parseInt((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength, 10) + 1;
                    oSettings._iDisplayStart = (iPages - 1) * oSettings._iDisplayLength;
                } else oSettings._iDisplayStart = 0; else _fnLog(oSettings, 0, "Unknown paging action: " + mAction);
                return $(oSettings.oInstance).trigger("page", oSettings), iOldStart != oSettings._iDisplayStart;
            }
            function _fnFeatureHtmlProcessing(oSettings) {
                var nProcessing = document.createElement("div");
                return oSettings.aanFeatures.r || (nProcessing.id = oSettings.sTableId + "_processing"), 
                nProcessing.innerHTML = oSettings.oLanguage.sProcessing, nProcessing.className = oSettings.oClasses.sProcessing, 
                oSettings.nTable.parentNode.insertBefore(nProcessing, oSettings.nTable), nProcessing;
            }
            function _fnProcessingDisplay(oSettings, bShow) {
                if (oSettings.oFeatures.bProcessing) for (var an = oSettings.aanFeatures.r, i = 0, iLen = an.length; iLen > i; i++) an[i].style.visibility = bShow ? "visible" : "hidden";
                $(oSettings.oInstance).trigger("processing", [ oSettings, bShow ]);
            }
            function _fnFeatureHtmlTable(oSettings) {
                if ("" === oSettings.oScroll.sX && "" === oSettings.oScroll.sY) return oSettings.nTable;
                var nScroller = document.createElement("div"), nScrollHead = document.createElement("div"), nScrollHeadInner = document.createElement("div"), nScrollBody = document.createElement("div"), nScrollFoot = document.createElement("div"), nScrollFootInner = document.createElement("div"), nScrollHeadTable = oSettings.nTable.cloneNode(!1), nScrollFootTable = oSettings.nTable.cloneNode(!1), nThead = oSettings.nTable.getElementsByTagName("thead")[0], nTfoot = 0 === oSettings.nTable.getElementsByTagName("tfoot").length ? null : oSettings.nTable.getElementsByTagName("tfoot")[0], oClasses = oSettings.oClasses;
                nScrollHead.appendChild(nScrollHeadInner), nScrollFoot.appendChild(nScrollFootInner), 
                nScrollBody.appendChild(oSettings.nTable), nScroller.appendChild(nScrollHead), nScroller.appendChild(nScrollBody), 
                nScrollHeadInner.appendChild(nScrollHeadTable), nScrollHeadTable.appendChild(nThead), 
                null !== nTfoot && (nScroller.appendChild(nScrollFoot), nScrollFootInner.appendChild(nScrollFootTable), 
                nScrollFootTable.appendChild(nTfoot)), nScroller.className = oClasses.sScrollWrapper, 
                nScrollHead.className = oClasses.sScrollHead, nScrollHeadInner.className = oClasses.sScrollHeadInner, 
                nScrollBody.className = oClasses.sScrollBody, nScrollFoot.className = oClasses.sScrollFoot, 
                nScrollFootInner.className = oClasses.sScrollFootInner, oSettings.oScroll.bAutoCss && (nScrollHead.style.overflow = "hidden", 
                nScrollHead.style.position = "relative", nScrollFoot.style.overflow = "hidden", 
                nScrollBody.style.overflow = "auto"), nScrollHead.style.border = "0", nScrollHead.style.width = "100%", 
                nScrollFoot.style.border = "0", nScrollHeadInner.style.width = "" !== oSettings.oScroll.sXInner ? oSettings.oScroll.sXInner : "100%", 
                nScrollHeadTable.removeAttribute("id"), nScrollHeadTable.style.marginLeft = "0", 
                oSettings.nTable.style.marginLeft = "0", null !== nTfoot && (nScrollFootTable.removeAttribute("id"), 
                nScrollFootTable.style.marginLeft = "0");
                var nCaption = $(oSettings.nTable).children("caption");
                return nCaption.length > 0 && (nCaption = nCaption[0], "top" === nCaption._captionSide ? nScrollHeadTable.appendChild(nCaption) : "bottom" === nCaption._captionSide && nTfoot && nScrollFootTable.appendChild(nCaption)), 
                "" !== oSettings.oScroll.sX && (nScrollHead.style.width = _fnStringToCss(oSettings.oScroll.sX), 
                nScrollBody.style.width = _fnStringToCss(oSettings.oScroll.sX), null !== nTfoot && (nScrollFoot.style.width = _fnStringToCss(oSettings.oScroll.sX)), 
                $(nScrollBody).scroll(function() {
                    nScrollHead.scrollLeft = this.scrollLeft, null !== nTfoot && (nScrollFoot.scrollLeft = this.scrollLeft);
                })), "" !== oSettings.oScroll.sY && (nScrollBody.style.height = _fnStringToCss(oSettings.oScroll.sY)), 
                oSettings.aoDrawCallback.push({
                    fn: _fnScrollDraw,
                    sName: "scrolling"
                }), oSettings.oScroll.bInfinite && $(nScrollBody).scroll(function() {
                    oSettings.bDrawing || 0 === $(this).scrollTop() || $(this).scrollTop() + $(this).height() > $(oSettings.nTable).height() - oSettings.oScroll.iLoadGap && oSettings.fnDisplayEnd() < oSettings.fnRecordsDisplay() && (_fnPageChange(oSettings, "next"), 
                    _fnCalculateEnd(oSettings), _fnDraw(oSettings));
                }), oSettings.nScrollHead = nScrollHead, oSettings.nScrollFoot = nScrollFoot, nScroller;
            }
            function _fnScrollDraw(o) {
                var i, iLen, anHeadToSize, anHeadSizers, anFootSizers, anFootToSize, oStyle, iVis, nTheadSize, nTfootSize, iSanityWidth, nScrollHeadInner = o.nScrollHead.getElementsByTagName("div")[0], nScrollHeadTable = nScrollHeadInner.getElementsByTagName("table")[0], nScrollBody = o.nTable.parentNode, aApplied = [], aAppliedFooter = [], nScrollFootInner = null !== o.nTFoot ? o.nScrollFoot.getElementsByTagName("div")[0] : null, nScrollFootTable = null !== o.nTFoot ? nScrollFootInner.getElementsByTagName("table")[0] : null, ie67 = o.oBrowser.bScrollOversize, zeroOut = function(nSizer) {
                    oStyle = nSizer.style, oStyle.paddingTop = "0", oStyle.paddingBottom = "0", oStyle.borderTopWidth = "0", 
                    oStyle.borderBottomWidth = "0", oStyle.height = 0;
                };
                $(o.nTable).children("thead, tfoot").remove(), nTheadSize = $(o.nTHead).clone()[0], 
                o.nTable.insertBefore(nTheadSize, o.nTable.childNodes[0]), anHeadToSize = o.nTHead.getElementsByTagName("tr"), 
                anHeadSizers = nTheadSize.getElementsByTagName("tr"), null !== o.nTFoot && (nTfootSize = $(o.nTFoot).clone()[0], 
                o.nTable.insertBefore(nTfootSize, o.nTable.childNodes[1]), anFootToSize = o.nTFoot.getElementsByTagName("tr"), 
                anFootSizers = nTfootSize.getElementsByTagName("tr")), "" === o.oScroll.sX && (nScrollBody.style.width = "100%", 
                nScrollHeadInner.parentNode.style.width = "100%");
                var nThs = _fnGetUniqueThs(o, nTheadSize);
                for (i = 0, iLen = nThs.length; iLen > i; i++) iVis = _fnVisibleToColumnIndex(o, i), 
                nThs[i].style.width = o.aoColumns[iVis].sWidth;
                if (null !== o.nTFoot && _fnApplyToChildren(function(n) {
                    n.style.width = "";
                }, anFootSizers), o.oScroll.bCollapse && "" !== o.oScroll.sY && (nScrollBody.style.height = nScrollBody.offsetHeight + o.nTHead.offsetHeight + "px"), 
                iSanityWidth = $(o.nTable).outerWidth(), "" === o.oScroll.sX ? (o.nTable.style.width = "100%", 
                ie67 && ($("tbody", nScrollBody).height() > nScrollBody.offsetHeight || "scroll" == $(nScrollBody).css("overflow-y")) && (o.nTable.style.width = _fnStringToCss($(o.nTable).outerWidth() - o.oScroll.iBarWidth))) : "" !== o.oScroll.sXInner ? o.nTable.style.width = _fnStringToCss(o.oScroll.sXInner) : iSanityWidth == $(nScrollBody).width() && $(nScrollBody).height() < $(o.nTable).height() ? (o.nTable.style.width = _fnStringToCss(iSanityWidth - o.oScroll.iBarWidth), 
                $(o.nTable).outerWidth() > iSanityWidth - o.oScroll.iBarWidth && (o.nTable.style.width = _fnStringToCss(iSanityWidth))) : o.nTable.style.width = _fnStringToCss(iSanityWidth), 
                iSanityWidth = $(o.nTable).outerWidth(), _fnApplyToChildren(zeroOut, anHeadSizers), 
                _fnApplyToChildren(function(nSizer) {
                    aApplied.push(_fnStringToCss($(nSizer).width()));
                }, anHeadSizers), _fnApplyToChildren(function(nToSize, i) {
                    nToSize.style.width = aApplied[i];
                }, anHeadToSize), $(anHeadSizers).height(0), null !== o.nTFoot && (_fnApplyToChildren(zeroOut, anFootSizers), 
                _fnApplyToChildren(function(nSizer) {
                    aAppliedFooter.push(_fnStringToCss($(nSizer).width()));
                }, anFootSizers), _fnApplyToChildren(function(nToSize, i) {
                    nToSize.style.width = aAppliedFooter[i];
                }, anFootToSize), $(anFootSizers).height(0)), _fnApplyToChildren(function(nSizer, i) {
                    nSizer.innerHTML = "", nSizer.style.width = aApplied[i];
                }, anHeadSizers), null !== o.nTFoot && _fnApplyToChildren(function(nSizer, i) {
                    nSizer.innerHTML = "", nSizer.style.width = aAppliedFooter[i];
                }, anFootSizers), $(o.nTable).outerWidth() < iSanityWidth) {
                    var iCorrection = nScrollBody.scrollHeight > nScrollBody.offsetHeight || "scroll" == $(nScrollBody).css("overflow-y") ? iSanityWidth + o.oScroll.iBarWidth : iSanityWidth;
                    ie67 && (nScrollBody.scrollHeight > nScrollBody.offsetHeight || "scroll" == $(nScrollBody).css("overflow-y")) && (o.nTable.style.width = _fnStringToCss(iCorrection - o.oScroll.iBarWidth)), 
                    nScrollBody.style.width = _fnStringToCss(iCorrection), o.nScrollHead.style.width = _fnStringToCss(iCorrection), 
                    null !== o.nTFoot && (o.nScrollFoot.style.width = _fnStringToCss(iCorrection)), 
                    "" === o.oScroll.sX ? _fnLog(o, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") : "" !== o.oScroll.sXInner && _fnLog(o, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation");
                } else nScrollBody.style.width = _fnStringToCss("100%"), o.nScrollHead.style.width = _fnStringToCss("100%"), 
                null !== o.nTFoot && (o.nScrollFoot.style.width = _fnStringToCss("100%"));
                if ("" === o.oScroll.sY && ie67 && (nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + o.oScroll.iBarWidth)), 
                "" !== o.oScroll.sY && o.oScroll.bCollapse) {
                    nScrollBody.style.height = _fnStringToCss(o.oScroll.sY);
                    var iExtra = "" !== o.oScroll.sX && o.nTable.offsetWidth > nScrollBody.offsetWidth ? o.oScroll.iBarWidth : 0;
                    o.nTable.offsetHeight < nScrollBody.offsetHeight && (nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + iExtra));
                }
                var iOuterWidth = $(o.nTable).outerWidth();
                nScrollHeadTable.style.width = _fnStringToCss(iOuterWidth), nScrollHeadInner.style.width = _fnStringToCss(iOuterWidth);
                var bScrolling = $(o.nTable).height() > nScrollBody.clientHeight || "scroll" == $(nScrollBody).css("overflow-y");
                nScrollHeadInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + "px" : "0px", 
                null !== o.nTFoot && (nScrollFootTable.style.width = _fnStringToCss(iOuterWidth), 
                nScrollFootInner.style.width = _fnStringToCss(iOuterWidth), nScrollFootInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + "px" : "0px"), 
                $(nScrollBody).scroll(), (o.bSorted || o.bFiltered) && (nScrollBody.scrollTop = 0);
            }
            function _fnApplyToChildren(fn, an1, an2) {
                for (var nNode1, nNode2, index = 0, i = 0, iLen = an1.length; iLen > i; ) {
                    for (nNode1 = an1[i].firstChild, nNode2 = an2 ? an2[i].firstChild : null; nNode1; ) 1 === nNode1.nodeType && (an2 ? fn(nNode1, nNode2, index) : fn(nNode1, index), 
                    index++), nNode1 = nNode1.nextSibling, nNode2 = an2 ? nNode2.nextSibling : null;
                    i++;
                }
            }
            function _fnConvertToWidth(sWidth, nParent) {
                if (!sWidth || null === sWidth || "" === sWidth) return 0;
                nParent || (nParent = document.body);
                var iWidth, nTmp = document.createElement("div");
                return nTmp.style.width = _fnStringToCss(sWidth), nParent.appendChild(nTmp), iWidth = nTmp.offsetWidth, 
                nParent.removeChild(nTmp), iWidth;
            }
            function _fnCalculateColumnWidths(oSettings) {
                var iTmpWidth, i, iCorrector, iWidth, iUserInputs = (oSettings.nTable.offsetWidth, 
                0), iVisibleColumns = 0, iColums = oSettings.aoColumns.length, oHeaders = $("th", oSettings.nTHead), widthAttr = oSettings.nTable.getAttribute("width"), nWrapper = oSettings.nTable.parentNode;
                for (i = 0; iColums > i; i++) oSettings.aoColumns[i].bVisible && (iVisibleColumns++, 
                null !== oSettings.aoColumns[i].sWidth && (iTmpWidth = _fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig, nWrapper), 
                null !== iTmpWidth && (oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth)), 
                iUserInputs++));
                if (iColums == oHeaders.length && 0 === iUserInputs && iVisibleColumns == iColums && "" === oSettings.oScroll.sX && "" === oSettings.oScroll.sY) for (i = 0; i < oSettings.aoColumns.length; i++) iTmpWidth = $(oHeaders[i]).width(), 
                null !== iTmpWidth && (oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth)); else {
                    var nCalcTmp = oSettings.nTable.cloneNode(!1), nTheadClone = oSettings.nTHead.cloneNode(!0), nBody = document.createElement("tbody"), nTr = document.createElement("tr");
                    nCalcTmp.removeAttribute("id"), nCalcTmp.appendChild(nTheadClone), null !== oSettings.nTFoot && (nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(!0)), 
                    _fnApplyToChildren(function(n) {
                        n.style.width = "";
                    }, nCalcTmp.getElementsByTagName("tr"))), nCalcTmp.appendChild(nBody), nBody.appendChild(nTr);
                    var jqColSizing = $("thead th", nCalcTmp);
                    0 === jqColSizing.length && (jqColSizing = $("tbody tr:eq(0)>td", nCalcTmp));
                    var nThs = _fnGetUniqueThs(oSettings, nTheadClone);
                    for (iCorrector = 0, i = 0; iColums > i; i++) {
                        var oColumn = oSettings.aoColumns[i];
                        oColumn.bVisible && null !== oColumn.sWidthOrig && "" !== oColumn.sWidthOrig ? nThs[i - iCorrector].style.width = _fnStringToCss(oColumn.sWidthOrig) : oColumn.bVisible ? nThs[i - iCorrector].style.width = "" : iCorrector++;
                    }
                    for (i = 0; iColums > i; i++) if (oSettings.aoColumns[i].bVisible) {
                        var nTd = _fnGetWidestNode(oSettings, i);
                        null !== nTd && (nTd = nTd.cloneNode(!0), "" !== oSettings.aoColumns[i].sContentPadding && (nTd.innerHTML += oSettings.aoColumns[i].sContentPadding), 
                        nTr.appendChild(nTd));
                    }
                    nWrapper.appendChild(nCalcTmp), "" !== oSettings.oScroll.sX && "" !== oSettings.oScroll.sXInner ? nCalcTmp.style.width = _fnStringToCss(oSettings.oScroll.sXInner) : "" !== oSettings.oScroll.sX ? (nCalcTmp.style.width = "", 
                    $(nCalcTmp).width() < nWrapper.offsetWidth && (nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth))) : "" !== oSettings.oScroll.sY ? nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth) : widthAttr && (nCalcTmp.style.width = _fnStringToCss(widthAttr)), 
                    nCalcTmp.style.visibility = "hidden", _fnScrollingWidthAdjust(oSettings, nCalcTmp);
                    var oNodes = $("tbody tr:eq(0)", nCalcTmp).children();
                    if (0 === oNodes.length && (oNodes = _fnGetUniqueThs(oSettings, $("thead", nCalcTmp)[0])), 
                    "" !== oSettings.oScroll.sX) {
                        var iTotal = 0;
                        for (iCorrector = 0, i = 0; i < oSettings.aoColumns.length; i++) oSettings.aoColumns[i].bVisible && (iTotal += null === oSettings.aoColumns[i].sWidthOrig ? $(oNodes[iCorrector]).outerWidth() : parseInt(oSettings.aoColumns[i].sWidth.replace("px", ""), 10) + ($(oNodes[iCorrector]).outerWidth() - $(oNodes[iCorrector]).width()), 
                        iCorrector++);
                        nCalcTmp.style.width = _fnStringToCss(iTotal), oSettings.nTable.style.width = _fnStringToCss(iTotal);
                    }
                    for (iCorrector = 0, i = 0; i < oSettings.aoColumns.length; i++) oSettings.aoColumns[i].bVisible && (iWidth = $(oNodes[iCorrector]).width(), 
                    null !== iWidth && iWidth > 0 && (oSettings.aoColumns[i].sWidth = _fnStringToCss(iWidth)), 
                    iCorrector++);
                    var cssWidth = $(nCalcTmp).css("width");
                    oSettings.nTable.style.width = -1 !== cssWidth.indexOf("%") ? cssWidth : _fnStringToCss($(nCalcTmp).outerWidth()), 
                    nCalcTmp.parentNode.removeChild(nCalcTmp);
                }
                widthAttr && (oSettings.nTable.style.width = _fnStringToCss(widthAttr));
            }
            function _fnScrollingWidthAdjust(oSettings, n) {
                if ("" === oSettings.oScroll.sX && "" !== oSettings.oScroll.sY) {
                    {
                        $(n).width();
                    }
                    n.style.width = _fnStringToCss($(n).outerWidth() - oSettings.oScroll.iBarWidth);
                } else "" !== oSettings.oScroll.sX && (n.style.width = _fnStringToCss($(n).outerWidth()));
            }
            function _fnGetWidestNode(oSettings, iCol) {
                var iMaxIndex = _fnGetMaxLenString(oSettings, iCol);
                if (0 > iMaxIndex) return null;
                if (null === oSettings.aoData[iMaxIndex].nTr) {
                    var n = document.createElement("td");
                    return n.innerHTML = _fnGetCellData(oSettings, iMaxIndex, iCol, ""), n;
                }
                return _fnGetTdNodes(oSettings, iMaxIndex)[iCol];
            }
            function _fnGetMaxLenString(oSettings, iCol) {
                for (var iMax = -1, iMaxIndex = -1, i = 0; i < oSettings.aoData.length; i++) {
                    var s = _fnGetCellData(oSettings, i, iCol, "display") + "";
                    s = s.replace(/<.*?>/g, ""), s.length > iMax && (iMax = s.length, iMaxIndex = i);
                }
                return iMaxIndex;
            }
            function _fnStringToCss(s) {
                if (null === s) return "0px";
                if ("number" == typeof s) return 0 > s ? "0px" : s + "px";
                var c = s.charCodeAt(s.length - 1);
                return 48 > c || c > 57 ? s : s + "px";
            }
            function _fnScrollBarWidth() {
                var inner = document.createElement("p"), style = inner.style;
                style.width = "100%", style.height = "200px", style.padding = "0px";
                var outer = document.createElement("div");
                style = outer.style, style.position = "absolute", style.top = "0px", style.left = "0px", 
                style.visibility = "hidden", style.width = "200px", style.height = "150px", style.padding = "0px", 
                style.overflow = "hidden", outer.appendChild(inner), document.body.appendChild(outer);
                var w1 = inner.offsetWidth;
                outer.style.overflow = "scroll";
                var w2 = inner.offsetWidth;
                return w1 == w2 && (w2 = outer.clientWidth), document.body.removeChild(outer), w1 - w2;
            }
            function _fnSort(oSettings, bApplyClasses) {
                var i, iLen, j, jLen, k, kLen, sDataType, nTh, aaSort = [], aiOrig = [], oSort = DataTable.ext.oSort, aoData = oSettings.aoData, aoColumns = oSettings.aoColumns, oAria = oSettings.oLanguage.oAria;
                if (!oSettings.oFeatures.bServerSide && (0 !== oSettings.aaSorting.length || null !== oSettings.aaSortingFixed)) {
                    for (aaSort = null !== oSettings.aaSortingFixed ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice(), 
                    i = 0; i < aaSort.length; i++) {
                        var iColumn = aaSort[i][0], iVisColumn = _fnColumnIndexToVisible(oSettings, iColumn);
                        if (sDataType = oSettings.aoColumns[iColumn].sSortDataType, DataTable.ext.afnSortData[sDataType]) {
                            var aData = DataTable.ext.afnSortData[sDataType].call(oSettings.oInstance, oSettings, iColumn, iVisColumn);
                            if (aData.length === aoData.length) for (j = 0, jLen = aoData.length; jLen > j; j++) _fnSetCellData(oSettings, j, iColumn, aData[j]); else _fnLog(oSettings, 0, "Returned data sort array (col " + iColumn + ") is the wrong length");
                        }
                    }
                    for (i = 0, iLen = oSettings.aiDisplayMaster.length; iLen > i; i++) aiOrig[oSettings.aiDisplayMaster[i]] = i;
                    var fnSortFormat, aDataSort, iSortLen = aaSort.length;
                    for (i = 0, iLen = aoData.length; iLen > i; i++) for (j = 0; iSortLen > j; j++) for (aDataSort = aoColumns[aaSort[j][0]].aDataSort, 
                    k = 0, kLen = aDataSort.length; kLen > k; k++) sDataType = aoColumns[aDataSort[k]].sType, 
                    fnSortFormat = oSort[(sDataType ? sDataType : "string") + "-pre"], aoData[i]._aSortData[aDataSort[k]] = fnSortFormat ? fnSortFormat(_fnGetCellData(oSettings, i, aDataSort[k], "sort")) : _fnGetCellData(oSettings, i, aDataSort[k], "sort");
                    oSettings.aiDisplayMaster.sort(function(a, b) {
                        var k, l, lLen, iTest, aDataSort, sDataType;
                        for (k = 0; iSortLen > k; k++) for (aDataSort = aoColumns[aaSort[k][0]].aDataSort, 
                        l = 0, lLen = aDataSort.length; lLen > l; l++) if (sDataType = aoColumns[aDataSort[l]].sType, 
                        iTest = oSort[(sDataType ? sDataType : "string") + "-" + aaSort[k][1]](aoData[a]._aSortData[aDataSort[l]], aoData[b]._aSortData[aDataSort[l]]), 
                        0 !== iTest) return iTest;
                        return oSort["numeric-asc"](aiOrig[a], aiOrig[b]);
                    });
                }
                for (bApplyClasses !== undefined && !bApplyClasses || oSettings.oFeatures.bDeferRender || _fnSortingClasses(oSettings), 
                i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) {
                    var sTitle = aoColumns[i].sTitle.replace(/<.*?>/g, "");
                    if (nTh = aoColumns[i].nTh, nTh.removeAttribute("aria-sort"), nTh.removeAttribute("aria-label"), 
                    aoColumns[i].bSortable) if (aaSort.length > 0 && aaSort[0][0] == i) {
                        nTh.setAttribute("aria-sort", "asc" == aaSort[0][1] ? "ascending" : "descending");
                        var nextSort = aoColumns[i].asSorting[aaSort[0][2] + 1] ? aoColumns[i].asSorting[aaSort[0][2] + 1] : aoColumns[i].asSorting[0];
                        nTh.setAttribute("aria-label", sTitle + ("asc" == nextSort ? oAria.sSortAscending : oAria.sSortDescending));
                    } else nTh.setAttribute("aria-label", sTitle + ("asc" == aoColumns[i].asSorting[0] ? oAria.sSortAscending : oAria.sSortDescending)); else nTh.setAttribute("aria-label", sTitle);
                }
                oSettings.bSorted = !0, $(oSettings.oInstance).trigger("sort", oSettings), oSettings.oFeatures.bFilter ? _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1) : (oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(), 
                oSettings._iDisplayStart = 0, _fnCalculateEnd(oSettings), _fnDraw(oSettings));
            }
            function _fnSortAttachListener(oSettings, nNode, iDataIndex, fnCallback) {
                _fnBindAction(nNode, {}, function(e) {
                    if (oSettings.aoColumns[iDataIndex].bSortable !== !1) {
                        var fnInnerSorting = function() {
                            var iColumn, iNextSort;
                            if (e.shiftKey) {
                                for (var bFound = !1, i = 0; i < oSettings.aaSorting.length; i++) if (oSettings.aaSorting[i][0] == iDataIndex) {
                                    bFound = !0, iColumn = oSettings.aaSorting[i][0], iNextSort = oSettings.aaSorting[i][2] + 1, 
                                    oSettings.aoColumns[iColumn].asSorting[iNextSort] ? (oSettings.aaSorting[i][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort], 
                                    oSettings.aaSorting[i][2] = iNextSort) : oSettings.aaSorting.splice(i, 1);
                                    break;
                                }
                                bFound === !1 && oSettings.aaSorting.push([ iDataIndex, oSettings.aoColumns[iDataIndex].asSorting[0], 0 ]);
                            } else 1 == oSettings.aaSorting.length && oSettings.aaSorting[0][0] == iDataIndex ? (iColumn = oSettings.aaSorting[0][0], 
                            iNextSort = oSettings.aaSorting[0][2] + 1, oSettings.aoColumns[iColumn].asSorting[iNextSort] || (iNextSort = 0), 
                            oSettings.aaSorting[0][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort], oSettings.aaSorting[0][2] = iNextSort) : (oSettings.aaSorting.splice(0, oSettings.aaSorting.length), 
                            oSettings.aaSorting.push([ iDataIndex, oSettings.aoColumns[iDataIndex].asSorting[0], 0 ]));
                            _fnSort(oSettings);
                        };
                        oSettings.oFeatures.bProcessing ? (_fnProcessingDisplay(oSettings, !0), setTimeout(function() {
                            fnInnerSorting(), oSettings.oFeatures.bServerSide || _fnProcessingDisplay(oSettings, !1);
                        }, 0)) : fnInnerSorting(), "function" == typeof fnCallback && fnCallback(oSettings);
                    }
                });
            }
            function _fnSortingClasses(oSettings) {
                var i, iLen, j, iFound, aaSort, sClass, iColumns = oSettings.aoColumns.length, oClasses = oSettings.oClasses;
                for (i = 0; iColumns > i; i++) oSettings.aoColumns[i].bSortable && $(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc + " " + oClasses.sSortDesc + " " + oSettings.aoColumns[i].sSortingClass);
                for (aaSort = null !== oSettings.aaSortingFixed ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice(), 
                i = 0; i < oSettings.aoColumns.length; i++) if (oSettings.aoColumns[i].bSortable) {
                    for (sClass = oSettings.aoColumns[i].sSortingClass, iFound = -1, j = 0; j < aaSort.length; j++) if (aaSort[j][0] == i) {
                        sClass = "asc" == aaSort[j][1] ? oClasses.sSortAsc : oClasses.sSortDesc, iFound = j;
                        break;
                    }
                    if ($(oSettings.aoColumns[i].nTh).addClass(sClass), oSettings.bJUI) {
                        var jqSpan = $("span." + oClasses.sSortIcon, oSettings.aoColumns[i].nTh);
                        jqSpan.removeClass(oClasses.sSortJUIAsc + " " + oClasses.sSortJUIDesc + " " + oClasses.sSortJUI + " " + oClasses.sSortJUIAscAllowed + " " + oClasses.sSortJUIDescAllowed);
                        var sSpanClass;
                        sSpanClass = -1 == iFound ? oSettings.aoColumns[i].sSortingClassJUI : "asc" == aaSort[iFound][1] ? oClasses.sSortJUIAsc : oClasses.sSortJUIDesc, 
                        jqSpan.addClass(sSpanClass);
                    }
                } else $(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);
                if (sClass = oClasses.sSortColumn, oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses) {
                    var iClass, iTargetCol, nTds = _fnGetTdNodes(oSettings), asClasses = [];
                    for (i = 0; iColumns > i; i++) asClasses.push("");
                    for (i = 0, iClass = 1; i < aaSort.length; i++) iTargetCol = parseInt(aaSort[i][0], 10), 
                    asClasses[iTargetCol] = sClass + iClass, 3 > iClass && iClass++;
                    var sTmpClass, sCurrentClass, sNewClass, reClass = new RegExp(sClass + "[123]");
                    for (i = 0, iLen = nTds.length; iLen > i; i++) iTargetCol = i % iColumns, sCurrentClass = nTds[i].className, 
                    sNewClass = asClasses[iTargetCol], sTmpClass = sCurrentClass.replace(reClass, sNewClass), 
                    sTmpClass != sCurrentClass ? nTds[i].className = $.trim(sTmpClass) : sNewClass.length > 0 && -1 == sCurrentClass.indexOf(sNewClass) && (nTds[i].className = sCurrentClass + " " + sNewClass);
                }
            }
            function _fnSaveState(oSettings) {
                if (oSettings.oFeatures.bStateSave && !oSettings.bDestroying) {
                    var i, iLen, bInfinite = oSettings.oScroll.bInfinite, oState = {
                        iCreate: new Date().getTime(),
                        iStart: bInfinite ? 0 : oSettings._iDisplayStart,
                        iEnd: bInfinite ? oSettings._iDisplayLength : oSettings._iDisplayEnd,
                        iLength: oSettings._iDisplayLength,
                        aaSorting: $.extend(!0, [], oSettings.aaSorting),
                        oSearch: $.extend(!0, {}, oSettings.oPreviousSearch),
                        aoSearchCols: $.extend(!0, [], oSettings.aoPreSearchCols),
                        abVisCols: []
                    };
                    for (i = 0, iLen = oSettings.aoColumns.length; iLen > i; i++) oState.abVisCols.push(oSettings.aoColumns[i].bVisible);
                    _fnCallbackFire(oSettings, "aoStateSaveParams", "stateSaveParams", [ oSettings, oState ]), 
                    oSettings.fnStateSave.call(oSettings.oInstance, oSettings, oState);
                }
            }
            function _fnLoadState(oSettings, oInit) {
                if (oSettings.oFeatures.bStateSave) {
                    var oData = oSettings.fnStateLoad.call(oSettings.oInstance, oSettings);
                    if (oData) {
                        var abStateLoad = _fnCallbackFire(oSettings, "aoStateLoadParams", "stateLoadParams", [ oSettings, oData ]);
                        if (-1 === $.inArray(!1, abStateLoad)) {
                            oSettings.oLoadedState = $.extend(!0, {}, oData), oSettings._iDisplayStart = oData.iStart, 
                            oSettings.iInitDisplayStart = oData.iStart, oSettings._iDisplayEnd = oData.iEnd, 
                            oSettings._iDisplayLength = oData.iLength, oSettings.aaSorting = oData.aaSorting.slice(), 
                            oSettings.saved_aaSorting = oData.aaSorting.slice(), $.extend(oSettings.oPreviousSearch, oData.oSearch), 
                            $.extend(!0, oSettings.aoPreSearchCols, oData.aoSearchCols), oInit.saved_aoColumns = [];
                            for (var i = 0; i < oData.abVisCols.length; i++) oInit.saved_aoColumns[i] = {}, 
                            oInit.saved_aoColumns[i].bVisible = oData.abVisCols[i];
                            _fnCallbackFire(oSettings, "aoStateLoaded", "stateLoaded", [ oSettings, oData ]);
                        }
                    }
                }
            }
            function _fnCreateCookie(sName, sValue, iSecs, sBaseName, fnCallback) {
                var date = new Date();
                date.setTime(date.getTime() + 1e3 * iSecs);
                var aParts = window.location.pathname.split("/"), sNameFile = sName + "_" + aParts.pop().replace(/[\/:]/g, "").toLowerCase(), sFullCookie, oData;
                null !== fnCallback ? (oData = "function" == typeof $.parseJSON ? $.parseJSON(sValue) : eval("(" + sValue + ")"), 
                sFullCookie = fnCallback(sNameFile, oData, date.toGMTString(), aParts.join("/") + "/")) : sFullCookie = sNameFile + "=" + encodeURIComponent(sValue) + "; expires=" + date.toGMTString() + "; path=" + aParts.join("/") + "/";
                var aCookies = document.cookie.split(";"), iNewCookieLen = sFullCookie.split(";")[0].length, aOldCookies = [];
                if (iNewCookieLen + document.cookie.length + 10 > 4096) {
                    for (var i = 0, iLen = aCookies.length; iLen > i; i++) if (-1 != aCookies[i].indexOf(sBaseName)) {
                        var aSplitCookie = aCookies[i].split("=");
                        try {
                            oData = eval("(" + decodeURIComponent(aSplitCookie[1]) + ")"), oData && oData.iCreate && aOldCookies.push({
                                name: aSplitCookie[0],
                                time: oData.iCreate
                            });
                        } catch (e) {}
                    }
                    for (aOldCookies.sort(function(a, b) {
                        return b.time - a.time;
                    }); iNewCookieLen + document.cookie.length + 10 > 4096; ) {
                        if (0 === aOldCookies.length) return;
                        var old = aOldCookies.pop();
                        document.cookie = old.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + aParts.join("/") + "/";
                    }
                }
                document.cookie = sFullCookie;
            }
            function _fnReadCookie(sName) {
                for (var aParts = window.location.pathname.split("/"), sNameEQ = sName + "_" + aParts[aParts.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=", sCookieContents = document.cookie.split(";"), i = 0; i < sCookieContents.length; i++) {
                    for (var c = sCookieContents[i]; " " == c.charAt(0); ) c = c.substring(1, c.length);
                    if (0 === c.indexOf(sNameEQ)) return decodeURIComponent(c.substring(sNameEQ.length, c.length));
                }
                return null;
            }
            function _fnSettingsFromNode(nTable) {
                for (var i = 0; i < DataTable.settings.length; i++) if (DataTable.settings[i].nTable === nTable) return DataTable.settings[i];
                return null;
            }
            function _fnGetTrNodes(oSettings) {
                for (var aNodes = [], aoData = oSettings.aoData, i = 0, iLen = aoData.length; iLen > i; i++) null !== aoData[i].nTr && aNodes.push(aoData[i].nTr);
                return aNodes;
            }
            function _fnGetTdNodes(oSettings, iIndividualRow) {
                var iCorrector, anTds, nTd, iRow, iColumn, iColumns, oData, sNodeName, anReturn = [], iRows = oSettings.aoData.length, iStart = 0, iEnd = iRows;
                for (iIndividualRow !== undefined && (iStart = iIndividualRow, iEnd = iIndividualRow + 1), 
                iRow = iStart; iEnd > iRow; iRow++) if (oData = oSettings.aoData[iRow], null !== oData.nTr) {
                    for (anTds = [], nTd = oData.nTr.firstChild; nTd; ) sNodeName = nTd.nodeName.toLowerCase(), 
                    ("td" == sNodeName || "th" == sNodeName) && anTds.push(nTd), nTd = nTd.nextSibling;
                    for (iCorrector = 0, iColumn = 0, iColumns = oSettings.aoColumns.length; iColumns > iColumn; iColumn++) oSettings.aoColumns[iColumn].bVisible ? anReturn.push(anTds[iColumn - iCorrector]) : (anReturn.push(oData._anHidden[iColumn]), 
                    iCorrector++);
                }
                return anReturn;
            }
            function _fnLog(oSettings, iLevel, sMesg) {
                var sAlert = null === oSettings ? "DataTables warning: " + sMesg : "DataTables warning (table id = '" + oSettings.sTableId + "'): " + sMesg;
                if (0 === iLevel) {
                    if ("alert" != DataTable.ext.sErrMode) throw new Error(sAlert);
                    alert(sAlert);
                } else window.console && console.log && console.log(sAlert);
            }
            function _fnMap(oRet, oSrc, sName, sMappedName) {
                sMappedName === undefined && (sMappedName = sName), oSrc[sName] !== undefined && (oRet[sMappedName] = oSrc[sName]);
            }
            function _fnExtend(oOut, oExtender) {
                var val;
                for (var prop in oExtender) oExtender.hasOwnProperty(prop) && (val = oExtender[prop], 
                "object" == typeof oInit[prop] && null !== val && $.isArray(val) === !1 ? $.extend(!0, oOut[prop], val) : oOut[prop] = val);
                return oOut;
            }
            function _fnBindAction(n, oData, fn) {
                $(n).bind("click.DT", oData, function(e) {
                    n.blur(), fn(e);
                }).bind("keypress.DT", oData, function(e) {
                    13 === e.which && fn(e);
                }).bind("selectstart.DT", function() {
                    return !1;
                });
            }
            function _fnCallbackReg(oSettings, sStore, fn, sName) {
                fn && oSettings[sStore].push({
                    fn: fn,
                    sName: sName
                });
            }
            function _fnCallbackFire(oSettings, sStore, sTrigger, aArgs) {
                for (var aoStore = oSettings[sStore], aRet = [], i = aoStore.length - 1; i >= 0; i--) aRet.push(aoStore[i].fn.apply(oSettings.oInstance, aArgs));
                return null !== sTrigger && $(oSettings.oInstance).trigger(sTrigger, aArgs), aRet;
            }
            function _fnBrowserDetect(oSettings) {
                var n = $('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"><div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"><div id="DT_BrowserTest" style="width:100%; height:10px;"></div></div></div>')[0];
                document.body.appendChild(n), oSettings.oBrowser.bScrollOversize = 100 === $("#DT_BrowserTest", n)[0].offsetWidth ? !0 : !1, 
                document.body.removeChild(n);
            }
            function _fnExternApiFunc(sFunc) {
                return function() {
                    var aArgs = [ _fnSettingsFromNode(this[DataTable.ext.iApiIndex]) ].concat(Array.prototype.slice.call(arguments));
                    return DataTable.ext.oApi[sFunc].apply(this, aArgs);
                };
            }
            var __reArray = /\[.*?\]$/, _fnJsonString = window.JSON ? JSON.stringify : function(o) {
                var sType = typeof o;
                if ("object" !== sType || null === o) return "string" === sType && (o = '"' + o + '"'), 
                o + "";
                var sProp, mValue, json = [], bArr = $.isArray(o);
                for (sProp in o) mValue = o[sProp], sType = typeof mValue, "string" === sType ? mValue = '"' + mValue + '"' : "object" === sType && null !== mValue && (mValue = _fnJsonString(mValue)), 
                json.push((bArr ? "" : '"' + sProp + '":') + mValue);
                return (bArr ? "[" : "{") + json + (bArr ? "]" : "}");
            };
            this.$ = function(sSelector, oOpts) {
                var i, iLen, tr, a = [], oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), aoData = oSettings.aoData, aiDisplay = oSettings.aiDisplay, aiDisplayMaster = oSettings.aiDisplayMaster;
                if (oOpts || (oOpts = {}), oOpts = $.extend({}, {
                    filter: "none",
                    order: "current",
                    page: "all"
                }, oOpts), "current" == oOpts.page) for (i = oSettings._iDisplayStart, iLen = oSettings.fnDisplayEnd(); iLen > i; i++) tr = aoData[aiDisplay[i]].nTr, 
                tr && a.push(tr); else if ("current" == oOpts.order && "none" == oOpts.filter) for (i = 0, 
                iLen = aiDisplayMaster.length; iLen > i; i++) tr = aoData[aiDisplayMaster[i]].nTr, 
                tr && a.push(tr); else if ("current" == oOpts.order && "applied" == oOpts.filter) for (i = 0, 
                iLen = aiDisplay.length; iLen > i; i++) tr = aoData[aiDisplay[i]].nTr, tr && a.push(tr); else if ("original" == oOpts.order && "none" == oOpts.filter) for (i = 0, 
                iLen = aoData.length; iLen > i; i++) tr = aoData[i].nTr, tr && a.push(tr); else if ("original" == oOpts.order && "applied" == oOpts.filter) for (i = 0, 
                iLen = aoData.length; iLen > i; i++) tr = aoData[i].nTr, -1 !== $.inArray(i, aiDisplay) && tr && a.push(tr); else _fnLog(oSettings, 1, "Unknown selection options");
                var jqA = $(a), jqTRs = jqA.filter(sSelector), jqDescendants = jqA.find(sSelector);
                return $([].concat($.makeArray(jqTRs), $.makeArray(jqDescendants)));
            }, this._ = function(sSelector, oOpts) {
                var i, iLen, aOut = [], aTrs = this.$(sSelector, oOpts);
                for (i = 0, iLen = aTrs.length; iLen > i; i++) aOut.push(this.fnGetData(aTrs[i]));
                return aOut;
            }, this.fnAddData = function(mData, bRedraw) {
                if (0 === mData.length) return [];
                var iTest, aiReturn = [], oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                if ("object" == typeof mData[0] && null !== mData[0]) for (var i = 0; i < mData.length; i++) {
                    if (iTest = _fnAddData(oSettings, mData[i]), -1 == iTest) return aiReturn;
                    aiReturn.push(iTest);
                } else {
                    if (iTest = _fnAddData(oSettings, mData), -1 == iTest) return aiReturn;
                    aiReturn.push(iTest);
                }
                return oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(), (bRedraw === undefined || bRedraw) && _fnReDraw(oSettings), 
                aiReturn;
            }, this.fnAdjustColumnSizing = function(bRedraw) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                _fnAdjustColumnSizing(oSettings), bRedraw === undefined || bRedraw ? this.fnDraw(!1) : ("" !== oSettings.oScroll.sX || "" !== oSettings.oScroll.sY) && this.oApi._fnScrollDraw(oSettings);
            }, this.fnClearTable = function(bRedraw) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                _fnClearTable(oSettings), (bRedraw === undefined || bRedraw) && _fnDraw(oSettings);
            }, this.fnClose = function(nTr) {
                for (var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), i = 0; i < oSettings.aoOpenRows.length; i++) if (oSettings.aoOpenRows[i].nParent == nTr) {
                    var nTrParent = oSettings.aoOpenRows[i].nTr.parentNode;
                    return nTrParent && nTrParent.removeChild(oSettings.aoOpenRows[i].nTr), oSettings.aoOpenRows.splice(i, 1), 
                    0;
                }
                return 1;
            }, this.fnDeleteRow = function(mTarget, fnCallBack, bRedraw) {
                var i, iLen, iAODataIndex, oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                iAODataIndex = "object" == typeof mTarget ? _fnNodeToDataIndex(oSettings, mTarget) : mTarget;
                var oData = oSettings.aoData.splice(iAODataIndex, 1);
                for (i = 0, iLen = oSettings.aoData.length; iLen > i; i++) null !== oSettings.aoData[i].nTr && (oSettings.aoData[i].nTr._DT_RowIndex = i);
                var iDisplayIndex = $.inArray(iAODataIndex, oSettings.aiDisplay);
                return oSettings.asDataSearch.splice(iDisplayIndex, 1), _fnDeleteIndex(oSettings.aiDisplayMaster, iAODataIndex), 
                _fnDeleteIndex(oSettings.aiDisplay, iAODataIndex), "function" == typeof fnCallBack && fnCallBack.call(this, oSettings, oData), 
                oSettings._iDisplayStart >= oSettings.fnRecordsDisplay() && (oSettings._iDisplayStart -= oSettings._iDisplayLength, 
                oSettings._iDisplayStart < 0 && (oSettings._iDisplayStart = 0)), (bRedraw === undefined || bRedraw) && (_fnCalculateEnd(oSettings), 
                _fnDraw(oSettings)), oData;
            }, this.fnDestroy = function(bRemove) {
                var i, iLen, oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), nOrig = oSettings.nTableWrapper.parentNode, nBody = oSettings.nTBody;
                if (bRemove = bRemove === undefined ? !1 : bRemove, oSettings.bDestroying = !0, 
                _fnCallbackFire(oSettings, "aoDestroyCallback", "destroy", [ oSettings ]), !bRemove) for (i = 0, 
                iLen = oSettings.aoColumns.length; iLen > i; i++) oSettings.aoColumns[i].bVisible === !1 && this.fnSetColumnVis(i, !0);
                for ($(oSettings.nTableWrapper).find("*").andSelf().unbind(".DT"), $("tbody>tr>td." + oSettings.oClasses.sRowEmpty, oSettings.nTable).parent().remove(), 
                oSettings.nTable != oSettings.nTHead.parentNode && ($(oSettings.nTable).children("thead").remove(), 
                oSettings.nTable.appendChild(oSettings.nTHead)), oSettings.nTFoot && oSettings.nTable != oSettings.nTFoot.parentNode && ($(oSettings.nTable).children("tfoot").remove(), 
                oSettings.nTable.appendChild(oSettings.nTFoot)), oSettings.nTable.parentNode.removeChild(oSettings.nTable), 
                $(oSettings.nTableWrapper).remove(), oSettings.aaSorting = [], oSettings.aaSortingFixed = [], 
                _fnSortingClasses(oSettings), $(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripeClasses.join(" ")), 
                $("th, td", oSettings.nTHead).removeClass([ oSettings.oClasses.sSortable, oSettings.oClasses.sSortableAsc, oSettings.oClasses.sSortableDesc, oSettings.oClasses.sSortableNone ].join(" ")), 
                oSettings.bJUI && ($("th span." + oSettings.oClasses.sSortIcon + ", td span." + oSettings.oClasses.sSortIcon, oSettings.nTHead).remove(), 
                $("th, td", oSettings.nTHead).each(function() {
                    var jqWrapper = $("div." + oSettings.oClasses.sSortJUIWrapper, this), kids = jqWrapper.contents();
                    $(this).append(kids), jqWrapper.remove();
                })), !bRemove && oSettings.nTableReinsertBefore ? nOrig.insertBefore(oSettings.nTable, oSettings.nTableReinsertBefore) : bRemove || nOrig.appendChild(oSettings.nTable), 
                i = 0, iLen = oSettings.aoData.length; iLen > i; i++) null !== oSettings.aoData[i].nTr && nBody.appendChild(oSettings.aoData[i].nTr);
                if (oSettings.oFeatures.bAutoWidth === !0 && (oSettings.nTable.style.width = _fnStringToCss(oSettings.sDestroyWidth)), 
                iLen = oSettings.asDestroyStripes.length) {
                    var anRows = $(nBody).children("tr");
                    for (i = 0; iLen > i; i++) anRows.filter(":nth-child(" + iLen + "n + " + i + ")").addClass(oSettings.asDestroyStripes[i]);
                }
                for (i = 0, iLen = DataTable.settings.length; iLen > i; i++) DataTable.settings[i] == oSettings && DataTable.settings.splice(i, 1);
                oSettings = null, oInit = null;
            }, this.fnDraw = function(bComplete) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                bComplete === !1 ? (_fnCalculateEnd(oSettings), _fnDraw(oSettings)) : _fnReDraw(oSettings);
            }, this.fnFilter = function(sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                if (oSettings.oFeatures.bFilter) if ((bRegex === undefined || null === bRegex) && (bRegex = !1), 
                (bSmart === undefined || null === bSmart) && (bSmart = !0), (bShowGlobal === undefined || null === bShowGlobal) && (bShowGlobal = !0), 
                (bCaseInsensitive === undefined || null === bCaseInsensitive) && (bCaseInsensitive = !0), 
                iColumn === undefined || null === iColumn) {
                    if (_fnFilterComplete(oSettings, {
                        sSearch: sInput + "",
                        bRegex: bRegex,
                        bSmart: bSmart,
                        bCaseInsensitive: bCaseInsensitive
                    }, 1), bShowGlobal && oSettings.aanFeatures.f) for (var n = oSettings.aanFeatures.f, i = 0, iLen = n.length; iLen > i; i++) try {
                        n[i]._DT_Input != document.activeElement && $(n[i]._DT_Input).val(sInput);
                    } catch (e) {
                        $(n[i]._DT_Input).val(sInput);
                    }
                } else $.extend(oSettings.aoPreSearchCols[iColumn], {
                    sSearch: sInput + "",
                    bRegex: bRegex,
                    bSmart: bSmart,
                    bCaseInsensitive: bCaseInsensitive
                }), _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
            }, this.fnGetData = function(mRow, iCol) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                if (mRow !== undefined) {
                    var iRow = mRow;
                    if ("object" == typeof mRow) {
                        var sNode = mRow.nodeName.toLowerCase();
                        "tr" === sNode ? iRow = _fnNodeToDataIndex(oSettings, mRow) : "td" === sNode && (iRow = _fnNodeToDataIndex(oSettings, mRow.parentNode), 
                        iCol = _fnNodeToColumnIndex(oSettings, iRow, mRow));
                    }
                    return iCol !== undefined ? _fnGetCellData(oSettings, iRow, iCol, "") : oSettings.aoData[iRow] !== undefined ? oSettings.aoData[iRow]._aData : null;
                }
                return _fnGetDataMaster(oSettings);
            }, this.fnGetNodes = function(iRow) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                return iRow !== undefined ? oSettings.aoData[iRow] !== undefined ? oSettings.aoData[iRow].nTr : null : _fnGetTrNodes(oSettings);
            }, this.fnGetPosition = function(nNode) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), sNodeName = nNode.nodeName.toUpperCase();
                if ("TR" == sNodeName) return _fnNodeToDataIndex(oSettings, nNode);
                if ("TD" == sNodeName || "TH" == sNodeName) {
                    var iDataIndex = _fnNodeToDataIndex(oSettings, nNode.parentNode), iColumnIndex = _fnNodeToColumnIndex(oSettings, iDataIndex, nNode);
                    return [ iDataIndex, _fnColumnIndexToVisible(oSettings, iColumnIndex), iColumnIndex ];
                }
                return null;
            }, this.fnIsOpen = function(nTr) {
                for (var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), i = (oSettings.aoOpenRows, 
                0); i < oSettings.aoOpenRows.length; i++) if (oSettings.aoOpenRows[i].nParent == nTr) return !0;
                return !1;
            }, this.fnOpen = function(nTr, mHtml, sClass) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), nTableRows = _fnGetTrNodes(oSettings);
                if (-1 !== $.inArray(nTr, nTableRows)) {
                    this.fnClose(nTr);
                    var nNewRow = document.createElement("tr"), nNewCell = document.createElement("td");
                    nNewRow.appendChild(nNewCell), nNewCell.className = sClass, nNewCell.colSpan = _fnVisbleColumns(oSettings), 
                    "string" == typeof mHtml ? nNewCell.innerHTML = mHtml : $(nNewCell).html(mHtml);
                    var nTrs = $("tr", oSettings.nTBody);
                    return -1 != $.inArray(nTr, nTrs) && $(nNewRow).insertAfter(nTr), oSettings.aoOpenRows.push({
                        nTr: nNewRow,
                        nParent: nTr
                    }), nNewRow;
                }
            }, this.fnPageChange = function(mAction, bRedraw) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                _fnPageChange(oSettings, mAction), _fnCalculateEnd(oSettings), (bRedraw === undefined || bRedraw) && _fnDraw(oSettings);
            }, this.fnSetColumnVis = function(iCol, bShow, bRedraw) {
                var i, iLen, nTd, bAppend, iBefore, oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), aoColumns = oSettings.aoColumns, aoData = oSettings.aoData;
                if (aoColumns[iCol].bVisible != bShow) {
                    if (bShow) {
                        var iInsert = 0;
                        for (i = 0; iCol > i; i++) aoColumns[i].bVisible && iInsert++;
                        if (bAppend = iInsert >= _fnVisbleColumns(oSettings), !bAppend) for (i = iCol; i < aoColumns.length; i++) if (aoColumns[i].bVisible) {
                            iBefore = i;
                            break;
                        }
                        for (i = 0, iLen = aoData.length; iLen > i; i++) null !== aoData[i].nTr && (bAppend ? aoData[i].nTr.appendChild(aoData[i]._anHidden[iCol]) : aoData[i].nTr.insertBefore(aoData[i]._anHidden[iCol], _fnGetTdNodes(oSettings, i)[iBefore]));
                    } else for (i = 0, iLen = aoData.length; iLen > i; i++) null !== aoData[i].nTr && (nTd = _fnGetTdNodes(oSettings, i)[iCol], 
                    aoData[i]._anHidden[iCol] = nTd, nTd.parentNode.removeChild(nTd));
                    for (aoColumns[iCol].bVisible = bShow, _fnDrawHead(oSettings, oSettings.aoHeader), 
                    oSettings.nTFoot && _fnDrawHead(oSettings, oSettings.aoFooter), i = 0, iLen = oSettings.aoOpenRows.length; iLen > i; i++) oSettings.aoOpenRows[i].nTr.colSpan = _fnVisbleColumns(oSettings);
                    (bRedraw === undefined || bRedraw) && (_fnAdjustColumnSizing(oSettings), _fnDraw(oSettings)), 
                    _fnSaveState(oSettings);
                }
            }, this.fnSettings = function() {
                return _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
            }, this.fnSort = function(aaSort) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                oSettings.aaSorting = aaSort, _fnSort(oSettings);
            }, this.fnSortListener = function(nNode, iColumn, fnCallback) {
                _fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]), nNode, iColumn, fnCallback);
            }, this.fnUpdate = function(mData, mRow, iColumn, bRedraw, bAction) {
                var i, sDisplay, oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]), iRow = "object" == typeof mRow ? _fnNodeToDataIndex(oSettings, mRow) : mRow;
                if ($.isArray(mData) && iColumn === undefined) for (oSettings.aoData[iRow]._aData = mData.slice(), 
                i = 0; i < oSettings.aoColumns.length; i++) this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, !1, !1); else if ($.isPlainObject(mData) && iColumn === undefined) for (oSettings.aoData[iRow]._aData = $.extend(!0, {}, mData), 
                i = 0; i < oSettings.aoColumns.length; i++) this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, !1, !1); else {
                    _fnSetCellData(oSettings, iRow, iColumn, mData), sDisplay = _fnGetCellData(oSettings, iRow, iColumn, "display");
                    var oCol = oSettings.aoColumns[iColumn];
                    null !== oCol.fnRender && (sDisplay = _fnRender(oSettings, iRow, iColumn), oCol.bUseRendered && _fnSetCellData(oSettings, iRow, iColumn, sDisplay)), 
                    null !== oSettings.aoData[iRow].nTr && (_fnGetTdNodes(oSettings, iRow)[iColumn].innerHTML = sDisplay);
                }
                var iDisplayIndex = $.inArray(iRow, oSettings.aiDisplay);
                return oSettings.asDataSearch[iDisplayIndex] = _fnBuildSearchRow(oSettings, _fnGetRowData(oSettings, iRow, "filter", _fnGetColumns(oSettings, "bSearchable"))), 
                (bAction === undefined || bAction) && _fnAdjustColumnSizing(oSettings), (bRedraw === undefined || bRedraw) && _fnReDraw(oSettings), 
                0;
            }, this.fnVersionCheck = DataTable.ext.fnVersionCheck, this.oApi = {
                _fnExternApiFunc: _fnExternApiFunc,
                _fnInitialise: _fnInitialise,
                _fnInitComplete: _fnInitComplete,
                _fnLanguageCompat: _fnLanguageCompat,
                _fnAddColumn: _fnAddColumn,
                _fnColumnOptions: _fnColumnOptions,
                _fnAddData: _fnAddData,
                _fnCreateTr: _fnCreateTr,
                _fnGatherData: _fnGatherData,
                _fnBuildHead: _fnBuildHead,
                _fnDrawHead: _fnDrawHead,
                _fnDraw: _fnDraw,
                _fnReDraw: _fnReDraw,
                _fnAjaxUpdate: _fnAjaxUpdate,
                _fnAjaxParameters: _fnAjaxParameters,
                _fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
                _fnServerParams: _fnServerParams,
                _fnAddOptionsHtml: _fnAddOptionsHtml,
                _fnFeatureHtmlTable: _fnFeatureHtmlTable,
                _fnScrollDraw: _fnScrollDraw,
                _fnAdjustColumnSizing: _fnAdjustColumnSizing,
                _fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
                _fnFilterComplete: _fnFilterComplete,
                _fnFilterCustom: _fnFilterCustom,
                _fnFilterColumn: _fnFilterColumn,
                _fnFilter: _fnFilter,
                _fnBuildSearchArray: _fnBuildSearchArray,
                _fnBuildSearchRow: _fnBuildSearchRow,
                _fnFilterCreateSearch: _fnFilterCreateSearch,
                _fnDataToSearch: _fnDataToSearch,
                _fnSort: _fnSort,
                _fnSortAttachListener: _fnSortAttachListener,
                _fnSortingClasses: _fnSortingClasses,
                _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
                _fnPageChange: _fnPageChange,
                _fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
                _fnUpdateInfo: _fnUpdateInfo,
                _fnFeatureHtmlLength: _fnFeatureHtmlLength,
                _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
                _fnProcessingDisplay: _fnProcessingDisplay,
                _fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
                _fnColumnIndexToVisible: _fnColumnIndexToVisible,
                _fnNodeToDataIndex: _fnNodeToDataIndex,
                _fnVisbleColumns: _fnVisbleColumns,
                _fnCalculateEnd: _fnCalculateEnd,
                _fnConvertToWidth: _fnConvertToWidth,
                _fnCalculateColumnWidths: _fnCalculateColumnWidths,
                _fnScrollingWidthAdjust: _fnScrollingWidthAdjust,
                _fnGetWidestNode: _fnGetWidestNode,
                _fnGetMaxLenString: _fnGetMaxLenString,
                _fnStringToCss: _fnStringToCss,
                _fnDetectType: _fnDetectType,
                _fnSettingsFromNode: _fnSettingsFromNode,
                _fnGetDataMaster: _fnGetDataMaster,
                _fnGetTrNodes: _fnGetTrNodes,
                _fnGetTdNodes: _fnGetTdNodes,
                _fnEscapeRegex: _fnEscapeRegex,
                _fnDeleteIndex: _fnDeleteIndex,
                _fnReOrderIndex: _fnReOrderIndex,
                _fnColumnOrdering: _fnColumnOrdering,
                _fnLog: _fnLog,
                _fnClearTable: _fnClearTable,
                _fnSaveState: _fnSaveState,
                _fnLoadState: _fnLoadState,
                _fnCreateCookie: _fnCreateCookie,
                _fnReadCookie: _fnReadCookie,
                _fnDetectHeader: _fnDetectHeader,
                _fnGetUniqueThs: _fnGetUniqueThs,
                _fnScrollBarWidth: _fnScrollBarWidth,
                _fnApplyToChildren: _fnApplyToChildren,
                _fnMap: _fnMap,
                _fnGetRowData: _fnGetRowData,
                _fnGetCellData: _fnGetCellData,
                _fnSetCellData: _fnSetCellData,
                _fnGetObjectDataFn: _fnGetObjectDataFn,
                _fnSetObjectDataFn: _fnSetObjectDataFn,
                _fnApplyColumnDefs: _fnApplyColumnDefs,
                _fnBindAction: _fnBindAction,
                _fnExtend: _fnExtend,
                _fnCallbackReg: _fnCallbackReg,
                _fnCallbackFire: _fnCallbackFire,
                _fnJsonString: _fnJsonString,
                _fnRender: _fnRender,
                _fnNodeToColumnIndex: _fnNodeToColumnIndex,
                _fnInfoMacros: _fnInfoMacros,
                _fnBrowserDetect: _fnBrowserDetect,
                _fnGetColumns: _fnGetColumns
            }, $.extend(DataTable.ext.oApi, this.oApi);
            for (var sFunc in DataTable.ext.oApi) sFunc && (this[sFunc] = _fnExternApiFunc(sFunc));
            var _that = this;
            return this.each(function() {
                var iLen, j, jLen, i = 0, sId = this.getAttribute("id"), bInitHandedOff = !1, bUsePassedData = !1;
                if ("table" != this.nodeName.toLowerCase()) return void _fnLog(null, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);
                for (i = 0, iLen = DataTable.settings.length; iLen > i; i++) {
                    if (DataTable.settings[i].nTable == this) {
                        if (oInit === undefined || oInit.bRetrieve) return DataTable.settings[i].oInstance;
                        if (oInit.bDestroy) {
                            DataTable.settings[i].oInstance.fnDestroy();
                            break;
                        }
                        return void _fnLog(DataTable.settings[i], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy");
                    }
                    if (DataTable.settings[i].sTableId == this.id) {
                        DataTable.settings.splice(i, 1);
                        break;
                    }
                }
                (null === sId || "" === sId) && (sId = "DataTables_Table_" + DataTable.ext._oExternConfig.iNextUnique++, 
                this.id = sId);
                var oSettings = $.extend(!0, {}, DataTable.models.oSettings, {
                    nTable: this,
                    oApi: _that.oApi,
                    oInit: oInit,
                    sDestroyWidth: $(this).width(),
                    sInstance: sId,
                    sTableId: sId
                });
                if (DataTable.settings.push(oSettings), oSettings.oInstance = 1 === _that.length ? _that : $(this).dataTable(), 
                oInit || (oInit = {}), oInit.oLanguage && _fnLanguageCompat(oInit.oLanguage), oInit = _fnExtend($.extend(!0, {}, DataTable.defaults), oInit), 
                _fnMap(oSettings.oFeatures, oInit, "bPaginate"), _fnMap(oSettings.oFeatures, oInit, "bLengthChange"), 
                _fnMap(oSettings.oFeatures, oInit, "bFilter"), _fnMap(oSettings.oFeatures, oInit, "bSort"), 
                _fnMap(oSettings.oFeatures, oInit, "bInfo"), _fnMap(oSettings.oFeatures, oInit, "bProcessing"), 
                _fnMap(oSettings.oFeatures, oInit, "bAutoWidth"), _fnMap(oSettings.oFeatures, oInit, "bSortClasses"), 
                _fnMap(oSettings.oFeatures, oInit, "bServerSide"), _fnMap(oSettings.oFeatures, oInit, "bDeferRender"), 
                _fnMap(oSettings.oScroll, oInit, "sScrollX", "sX"), _fnMap(oSettings.oScroll, oInit, "sScrollXInner", "sXInner"), 
                _fnMap(oSettings.oScroll, oInit, "sScrollY", "sY"), _fnMap(oSettings.oScroll, oInit, "bScrollCollapse", "bCollapse"), 
                _fnMap(oSettings.oScroll, oInit, "bScrollInfinite", "bInfinite"), _fnMap(oSettings.oScroll, oInit, "iScrollLoadGap", "iLoadGap"), 
                _fnMap(oSettings.oScroll, oInit, "bScrollAutoCss", "bAutoCss"), _fnMap(oSettings, oInit, "asStripeClasses"), 
                _fnMap(oSettings, oInit, "asStripClasses", "asStripeClasses"), _fnMap(oSettings, oInit, "fnServerData"), 
                _fnMap(oSettings, oInit, "fnFormatNumber"), _fnMap(oSettings, oInit, "sServerMethod"), 
                _fnMap(oSettings, oInit, "aaSorting"), _fnMap(oSettings, oInit, "aaSortingFixed"), 
                _fnMap(oSettings, oInit, "aLengthMenu"), _fnMap(oSettings, oInit, "sPaginationType"), 
                _fnMap(oSettings, oInit, "sAjaxSource"), _fnMap(oSettings, oInit, "sAjaxDataProp"), 
                _fnMap(oSettings, oInit, "iCookieDuration"), _fnMap(oSettings, oInit, "sCookiePrefix"), 
                _fnMap(oSettings, oInit, "sDom"), _fnMap(oSettings, oInit, "bSortCellsTop"), _fnMap(oSettings, oInit, "iTabIndex"), 
                _fnMap(oSettings, oInit, "oSearch", "oPreviousSearch"), _fnMap(oSettings, oInit, "aoSearchCols", "aoPreSearchCols"), 
                _fnMap(oSettings, oInit, "iDisplayLength", "_iDisplayLength"), _fnMap(oSettings, oInit, "bJQueryUI", "bJUI"), 
                _fnMap(oSettings, oInit, "fnCookieCallback"), _fnMap(oSettings, oInit, "fnStateLoad"), 
                _fnMap(oSettings, oInit, "fnStateSave"), _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback"), 
                _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback, "user"), _fnCallbackReg(oSettings, "aoServerParams", oInit.fnServerParams, "user"), 
                _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams, "user"), 
                _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams, "user"), 
                _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded, "user"), _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback, "user"), 
                _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow, "user"), _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback, "user"), 
                _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback, "user"), _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete, "user"), 
                _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback, "user"), 
                oSettings.oFeatures.bServerSide && oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses ? _fnCallbackReg(oSettings, "aoDrawCallback", _fnSortingClasses, "server_side_sort_classes") : oSettings.oFeatures.bDeferRender && _fnCallbackReg(oSettings, "aoDrawCallback", _fnSortingClasses, "defer_sort_classes"), 
                oInit.bJQueryUI ? ($.extend(oSettings.oClasses, DataTable.ext.oJUIClasses), oInit.sDom === DataTable.defaults.sDom && "lfrtip" === DataTable.defaults.sDom && (oSettings.sDom = '<"H"lfr>t<"F"ip>')) : $.extend(oSettings.oClasses, DataTable.ext.oStdClasses), 
                $(this).addClass(oSettings.oClasses.sTable), ("" !== oSettings.oScroll.sX || "" !== oSettings.oScroll.sY) && (oSettings.oScroll.iBarWidth = _fnScrollBarWidth()), 
                oSettings.iInitDisplayStart === undefined && (oSettings.iInitDisplayStart = oInit.iDisplayStart, 
                oSettings._iDisplayStart = oInit.iDisplayStart), oInit.bStateSave && (oSettings.oFeatures.bStateSave = !0, 
                _fnLoadState(oSettings, oInit), _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState, "state_save")), 
                null !== oInit.iDeferLoading) {
                    oSettings.bDeferLoading = !0;
                    var tmp = $.isArray(oInit.iDeferLoading);
                    oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading, 
                    oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
                }
                if (null !== oInit.aaData && (bUsePassedData = !0), "" !== oInit.oLanguage.sUrl ? (oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl, 
                $.getJSON(oSettings.oLanguage.sUrl, null, function(json) {
                    _fnLanguageCompat(json), $.extend(!0, oSettings.oLanguage, oInit.oLanguage, json), 
                    _fnInitialise(oSettings);
                }), bInitHandedOff = !0) : $.extend(!0, oSettings.oLanguage, oInit.oLanguage), null === oInit.asStripeClasses && (oSettings.asStripeClasses = [ oSettings.oClasses.sStripeOdd, oSettings.oClasses.sStripeEven ]), 
                iLen = oSettings.asStripeClasses.length, oSettings.asDestroyStripes = [], iLen) {
                    var bStripeRemove = !1, anRows = $(this).children("tbody").children("tr:lt(" + iLen + ")");
                    for (i = 0; iLen > i; i++) anRows.hasClass(oSettings.asStripeClasses[i]) && (bStripeRemove = !0, 
                    oSettings.asDestroyStripes.push(oSettings.asStripeClasses[i]));
                    bStripeRemove && anRows.removeClass(oSettings.asStripeClasses.join(" "));
                }
                var aoColumnsInit, anThs = [], nThead = this.getElementsByTagName("thead");
                if (0 !== nThead.length && (_fnDetectHeader(oSettings.aoHeader, nThead[0]), anThs = _fnGetUniqueThs(oSettings)), 
                null === oInit.aoColumns) for (aoColumnsInit = [], i = 0, iLen = anThs.length; iLen > i; i++) aoColumnsInit.push(null); else aoColumnsInit = oInit.aoColumns;
                for (i = 0, iLen = aoColumnsInit.length; iLen > i; i++) oInit.saved_aoColumns !== undefined && oInit.saved_aoColumns.length == iLen && (null === aoColumnsInit[i] && (aoColumnsInit[i] = {}), 
                aoColumnsInit[i].bVisible = oInit.saved_aoColumns[i].bVisible), _fnAddColumn(oSettings, anThs ? anThs[i] : null);
                for (_fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function(iCol, oDef) {
                    _fnColumnOptions(oSettings, iCol, oDef);
                }), i = 0, iLen = oSettings.aaSorting.length; iLen > i; i++) {
                    oSettings.aaSorting[i][0] >= oSettings.aoColumns.length && (oSettings.aaSorting[i][0] = 0);
                    var oColumn = oSettings.aoColumns[oSettings.aaSorting[i][0]];
                    for (oSettings.aaSorting[i][2] === undefined && (oSettings.aaSorting[i][2] = 0), 
                    oInit.aaSorting === undefined && oSettings.saved_aaSorting === undefined && (oSettings.aaSorting[i][1] = oColumn.asSorting[0]), 
                    j = 0, jLen = oColumn.asSorting.length; jLen > j; j++) if (oSettings.aaSorting[i][1] == oColumn.asSorting[j]) {
                        oSettings.aaSorting[i][2] = j;
                        break;
                    }
                }
                _fnSortingClasses(oSettings), _fnBrowserDetect(oSettings);
                var captions = $(this).children("caption").each(function() {
                    this._captionSide = $(this).css("caption-side");
                }), thead = $(this).children("thead");
                0 === thead.length && (thead = [ document.createElement("thead") ], this.appendChild(thead[0])), 
                oSettings.nTHead = thead[0];
                var tbody = $(this).children("tbody");
                0 === tbody.length && (tbody = [ document.createElement("tbody") ], this.appendChild(tbody[0])), 
                oSettings.nTBody = tbody[0], oSettings.nTBody.setAttribute("role", "alert"), oSettings.nTBody.setAttribute("aria-live", "polite"), 
                oSettings.nTBody.setAttribute("aria-relevant", "all");
                var tfoot = $(this).children("tfoot");
                if (0 === tfoot.length && captions.length > 0 && ("" !== oSettings.oScroll.sX || "" !== oSettings.oScroll.sY) && (tfoot = [ document.createElement("tfoot") ], 
                this.appendChild(tfoot[0])), tfoot.length > 0 && (oSettings.nTFoot = tfoot[0], _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot)), 
                bUsePassedData) for (i = 0; i < oInit.aaData.length; i++) _fnAddData(oSettings, oInit.aaData[i]); else _fnGatherData(oSettings);
                oSettings.aiDisplay = oSettings.aiDisplayMaster.slice(), oSettings.bInitialised = !0, 
                bInitHandedOff === !1 && _fnInitialise(oSettings);
            }), _that = null, this;
        };
        DataTable.fnVersionCheck = function(sVersion) {
            for (var fnZPad = function(Zpad, count) {
                for (;Zpad.length < count; ) Zpad += "0";
                return Zpad;
            }, aThis = DataTable.ext.sVersion.split("."), aThat = sVersion.split("."), sThis = "", sThat = "", i = 0, iLen = aThat.length; iLen > i; i++) sThis += fnZPad(aThis[i], 3), 
            sThat += fnZPad(aThat[i], 3);
            return parseInt(sThis, 10) >= parseInt(sThat, 10);
        }, DataTable.fnIsDataTable = function(nTable) {
            for (var o = DataTable.settings, i = 0; i < o.length; i++) if (o[i].nTable === nTable || o[i].nScrollHead === nTable || o[i].nScrollFoot === nTable) return !0;
            return !1;
        }, DataTable.fnTables = function(bVisible) {
            var out = [];
            return jQuery.each(DataTable.settings, function(i, o) {
                (!bVisible || bVisible === !0 && $(o.nTable).is(":visible")) && out.push(o.nTable);
            }), out;
        }, DataTable.version = "1.9.4", DataTable.settings = [], DataTable.models = {}, 
        DataTable.models.ext = {
            afnFiltering: [],
            afnSortData: [],
            aoFeatures: [],
            aTypes: [],
            fnVersionCheck: DataTable.fnVersionCheck,
            iApiIndex: 0,
            ofnSearch: {},
            oApi: {},
            oStdClasses: {},
            oJUIClasses: {},
            oPagination: {},
            oSort: {},
            sVersion: DataTable.version,
            sErrMode: "alert",
            _oExternConfig: {
                iNextUnique: 0
            }
        }, DataTable.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, DataTable.models.oRow = {
            nTr: null,
            _aData: [],
            _aSortData: [],
            _anHidden: [],
            _sRowStripe: ""
        }, DataTable.models.oColumn = {
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bUseRendered: null,
            bVisible: null,
            _bAutoType: !0,
            fnCreatedCell: null,
            fnGetData: null,
            fnRender: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, DataTable.defaults = {
            aaData: null,
            aaSorting: [ [ 0, "asc" ] ],
            aaSortingFixed: null,
            aLengthMenu: [ 10, 25, 50, 100 ],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollAutoCss: !0,
            bScrollCollapse: !1,
            bScrollInfinite: !1,
            bServerSide: !1,
            bSort: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCookieCallback: null,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(iIn) {
                if (1e3 > iIn) return iIn;
                for (var s = iIn + "", a = s.split(""), out = "", iLen = s.length, i = 0; iLen > i; i++) i % 3 === 0 && 0 !== i && (out = this.oLanguage.sInfoThousands + out), 
                out = a[iLen - i - 1] + out;
                return out;
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: function(sUrl, aoData, fnCallback, oSettings) {
                oSettings.jqXHR = $.ajax({
                    url: sUrl,
                    data: aoData,
                    success: function(json) {
                        json.sError && oSettings.oApi._fnLog(oSettings, 0, json.sError), $(oSettings.oInstance).trigger("xhr", [ oSettings, json ]), 
                        fnCallback(json);
                    },
                    dataType: "json",
                    cache: !1,
                    type: oSettings.sServerMethod,
                    error: function(xhr, error) {
                        "parsererror" == error && oSettings.oApi._fnLog(oSettings, 0, "DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.");
                    }
                });
            },
            fnServerParams: null,
            fnStateLoad: function(oSettings) {
                var sData = this.oApi._fnReadCookie(oSettings.sCookiePrefix + oSettings.sInstance), oData;
                try {
                    oData = "function" == typeof $.parseJSON ? $.parseJSON(sData) : eval("(" + sData + ")");
                } catch (e) {
                    oData = null;
                }
                return oData;
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSave: function(oSettings, oData) {
                this.oApi._fnCreateCookie(oSettings.sCookiePrefix + oSettings.sInstance, this.oApi._fnJsonString(oData), oSettings.iCookieDuration, oSettings.sCookiePrefix, oSettings.fnCookieCallback);
            },
            fnStateSaveParams: null,
            iCookieDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iScrollLoadGap: 100,
            iTabIndex: 0,
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sInfoThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: $.extend({}, DataTable.models.oSearch),
            sAjaxDataProp: "aaData",
            sAjaxSource: null,
            sCookiePrefix: "SpryMedia_DataTables_",
            sDom: "lfrtip",
            sPaginationType: "two_button",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET"
        }, DataTable.defaults.columns = {
            aDataSort: null,
            asSorting: [ "asc", "desc" ],
            bSearchable: !0,
            bSortable: !0,
            bUseRendered: !0,
            bVisible: !0,
            fnCreatedCell: null,
            fnRender: null,
            iDataSort: -1,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, DataTable.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bAutoCss: null,
                bCollapse: null,
                bInfinite: null,
                iBarWidth: 0,
                iLoadGap: null,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1
            },
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            asDataSearch: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: null,
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            sPaginationType: "two_button",
            iCookieDuration: 0,
            sCookiePrefix: "",
            fnCookieCallback: null,
            aoStateSave: [],
            aoStateLoad: [],
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iDisplayEnd: 10,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length;
            },
            fnRecordsDisplay: function() {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length;
            },
            fnDisplayEnd: function() {
                return this.oFeatures.bServerSide ? this.oFeatures.bPaginate === !1 || -1 == this._iDisplayLength ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd;
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null
        }, DataTable.ext = $.extend(!0, {}, DataTable.models.ext), $.extend(DataTable.ext.oStdClasses, {
            sTable: "dataTable",
            sPagePrevEnabled: "paginate_enabled_previous",
            sPagePrevDisabled: "paginate_disabled_previous",
            sPageNextEnabled: "paginate_enabled_next",
            sPageNextDisabled: "paginate_disabled_next",
            sPageJUINext: "",
            sPageJUIPrev: "",
            sPageButton: "paginate_button",
            sPageButtonActive: "paginate_active",
            sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
            sPageFirst: "first",
            sPagePrevious: "previous",
            sPageNext: "next",
            sPageLast: "last",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sFooterTH: "",
            sJUIHeader: "",
            sJUIFooter: ""
        }), $.extend(DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {
            sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
            sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
            sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
            sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
            sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
            sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
            sPageButton: "fg-button ui-button ui-state-default",
            sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
            sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
            sPageFirst: "first ui-corner-tl ui-corner-bl",
            sPageLast: "last ui-corner-tr ui-corner-br",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: "ui-state-default",
            sSortDesc: "ui-state-default",
            sSortable: "ui-state-default",
            sSortableAsc: "ui-state-default",
            sSortableDesc: "ui-state-default",
            sSortableNone: "ui-state-default",
            sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
            sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
            sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
            sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
            sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead ui-state-default",
            sScrollFoot: "dataTables_scrollFoot ui-state-default",
            sFooterTH: "ui-state-default",
            sJUIHeader: "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
            sJUIFooter: "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
        }), $.extend(DataTable.ext.oPagination, {
            two_button: {
                fnInit: function(oSettings, nPaging, fnCallbackDraw) {
                    var oLang = oSettings.oLanguage.oPaginate, fnClickHandler = (oSettings.oClasses, 
                    function(e) {
                        oSettings.oApi._fnPageChange(oSettings, e.data.action) && fnCallbackDraw(oSettings);
                    }), sAppend = oSettings.bJUI ? '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUIPrev + '"></span></a><a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUINext + '"></span></a>' : '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sPrevious + '</a><a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sNext + "</a>";
                    $(nPaging).append(sAppend);
                    var els = $("a", nPaging), nPrevious = els[0], nNext = els[1];
                    oSettings.oApi._fnBindAction(nPrevious, {
                        action: "previous"
                    }, fnClickHandler), oSettings.oApi._fnBindAction(nNext, {
                        action: "next"
                    }, fnClickHandler), oSettings.aanFeatures.p || (nPaging.id = oSettings.sTableId + "_paginate", 
                    nPrevious.id = oSettings.sTableId + "_previous", nNext.id = oSettings.sTableId + "_next", 
                    nPrevious.setAttribute("aria-controls", oSettings.sTableId), nNext.setAttribute("aria-controls", oSettings.sTableId));
                },
                fnUpdate: function(oSettings) {
                    if (oSettings.aanFeatures.p) for (var nNode, oClasses = oSettings.oClasses, an = oSettings.aanFeatures.p, i = 0, iLen = an.length; iLen > i; i++) nNode = an[i].firstChild, 
                    nNode && (nNode.className = 0 === oSettings._iDisplayStart ? oClasses.sPagePrevDisabled : oClasses.sPagePrevEnabled, 
                    nNode = nNode.nextSibling, nNode.className = oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ? oClasses.sPageNextDisabled : oClasses.sPageNextEnabled);
                }
            },
            iFullNumbersShowPages: 5,
            full_numbers: {
                fnInit: function(oSettings, nPaging, fnCallbackDraw) {
                    var oLang = oSettings.oLanguage.oPaginate, oClasses = oSettings.oClasses, fnClickHandler = function(e) {
                        oSettings.oApi._fnPageChange(oSettings, e.data.action) && fnCallbackDraw(oSettings);
                    };
                    $(nPaging).append('<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageFirst + '">' + oLang.sFirst + '</a><a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPagePrevious + '">' + oLang.sPrevious + '</a><span></span><a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageNext + '">' + oLang.sNext + '</a><a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageLast + '">' + oLang.sLast + "</a>");
                    var els = $("a", nPaging), nFirst = els[0], nPrev = els[1], nNext = els[2], nLast = els[3];
                    oSettings.oApi._fnBindAction(nFirst, {
                        action: "first"
                    }, fnClickHandler), oSettings.oApi._fnBindAction(nPrev, {
                        action: "previous"
                    }, fnClickHandler), oSettings.oApi._fnBindAction(nNext, {
                        action: "next"
                    }, fnClickHandler), oSettings.oApi._fnBindAction(nLast, {
                        action: "last"
                    }, fnClickHandler), oSettings.aanFeatures.p || (nPaging.id = oSettings.sTableId + "_paginate", 
                    nFirst.id = oSettings.sTableId + "_first", nPrev.id = oSettings.sTableId + "_previous", 
                    nNext.id = oSettings.sTableId + "_next", nLast.id = oSettings.sTableId + "_last");
                },
                fnUpdate: function(oSettings, fnCallbackDraw) {
                    if (oSettings.aanFeatures.p) {
                        var iStartButton, iEndButton, i, iLen, anButtons, anStatic, nNode, iPageCount = DataTable.ext.oPagination.iFullNumbersShowPages, iPageCountHalf = Math.floor(iPageCount / 2), iPages = Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength), iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1, sList = "", oClasses = oSettings.oClasses, an = oSettings.aanFeatures.p, fnBind = function(j) {
                            oSettings.oApi._fnBindAction(this, {
                                page: j + iStartButton - 1
                            }, function(e) {
                                oSettings.oApi._fnPageChange(oSettings, e.data.page), fnCallbackDraw(oSettings), 
                                e.preventDefault();
                            });
                        };
                        for (-1 === oSettings._iDisplayLength ? (iStartButton = 1, iEndButton = 1, iCurrentPage = 1) : iPageCount > iPages ? (iStartButton = 1, 
                        iEndButton = iPages) : iPageCountHalf >= iCurrentPage ? (iStartButton = 1, iEndButton = iPageCount) : iCurrentPage >= iPages - iPageCountHalf ? (iStartButton = iPages - iPageCount + 1, 
                        iEndButton = iPages) : (iStartButton = iCurrentPage - Math.ceil(iPageCount / 2) + 1, 
                        iEndButton = iStartButton + iPageCount - 1), i = iStartButton; iEndButton >= i; i++) sList += iCurrentPage !== i ? '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + '">' + oSettings.fnFormatNumber(i) + "</a>" : '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButtonActive + '">' + oSettings.fnFormatNumber(i) + "</a>";
                        for (i = 0, iLen = an.length; iLen > i; i++) nNode = an[i], nNode.hasChildNodes() && ($("span:eq(0)", nNode).html(sList).children("a").each(fnBind), 
                        anButtons = nNode.getElementsByTagName("a"), anStatic = [ anButtons[0], anButtons[1], anButtons[anButtons.length - 2], anButtons[anButtons.length - 1] ], 
                        $(anStatic).removeClass(oClasses.sPageButton + " " + oClasses.sPageButtonActive + " " + oClasses.sPageButtonStaticDisabled), 
                        $([ anStatic[0], anStatic[1] ]).addClass(1 == iCurrentPage ? oClasses.sPageButtonStaticDisabled : oClasses.sPageButton), 
                        $([ anStatic[2], anStatic[3] ]).addClass(0 === iPages || iCurrentPage === iPages || -1 === oSettings._iDisplayLength ? oClasses.sPageButtonStaticDisabled : oClasses.sPageButton));
                    }
                }
            }
        }), $.extend(DataTable.ext.oSort, {
            "string-pre": function(a) {
                return "string" != typeof a && (a = null !== a && a.toString ? a.toString() : ""), 
                a.toLowerCase();
            },
            "string-asc": function(x, y) {
                return y > x ? -1 : x > y ? 1 : 0;
            },
            "string-desc": function(x, y) {
                return y > x ? 1 : x > y ? -1 : 0;
            },
            "html-pre": function(a) {
                return a.replace(/<.*?>/g, "").toLowerCase();
            },
            "html-asc": function(x, y) {
                return y > x ? -1 : x > y ? 1 : 0;
            },
            "html-desc": function(x, y) {
                return y > x ? 1 : x > y ? -1 : 0;
            },
            "date-pre": function(a) {
                var x = Date.parse(a);
                return (isNaN(x) || "" === x) && (x = Date.parse("01/01/1970 00:00:00")), x;
            },
            "date-asc": function(x, y) {
                return x - y;
            },
            "date-desc": function(x, y) {
                return y - x;
            },
            "numeric-pre": function(a) {
                return "-" == a || "" === a ? 0 : 1 * a;
            },
            "numeric-asc": function(x, y) {
                return x - y;
            },
            "numeric-desc": function(x, y) {
                return y - x;
            }
        }), $.extend(DataTable.ext.aTypes, [ function(sData) {
            if ("number" == typeof sData) return "numeric";
            if ("string" != typeof sData) return null;
            var Char, sValidFirstChars = "0123456789-", sValidChars = "0123456789.", bDecimal = !1;
            if (Char = sData.charAt(0), -1 == sValidFirstChars.indexOf(Char)) return null;
            for (var i = 1; i < sData.length; i++) {
                if (Char = sData.charAt(i), -1 == sValidChars.indexOf(Char)) return null;
                if ("." == Char) {
                    if (bDecimal) return null;
                    bDecimal = !0;
                }
            }
            return "numeric";
        }, function(sData) {
            var iParse = Date.parse(sData);
            return null !== iParse && !isNaN(iParse) || "string" == typeof sData && 0 === sData.length ? "date" : null;
        }, function(sData) {
            return "string" == typeof sData && -1 != sData.indexOf("<") && -1 != sData.indexOf(">") ? "html" : null;
        } ]), $.fn.DataTable = DataTable, $.fn.dataTable = DataTable, $.fn.dataTableSettings = DataTable.settings, 
        $.fn.dataTableExt = DataTable.ext;
    });
}(window, document), $.extend(!0, $.fn.dataTable.defaults, {
    sDom: "<'row'<'col-xs-6'l><'col-xs-6'f>r>t<'row'<'col-xs-6'i><'col-xs-6'p>>",
    oLanguage: {
        sLengthMenu: "_MENU_ records per page"
    }
}), $.extend($.fn.dataTableExt.oStdClasses, {
    sWrapper: "dataTables_wrapper form-inline",
    sFilterInput: "form-control input-sm",
    sLengthSelect: "form-control input-sm"
}), $.fn.dataTable.Api ? ($.fn.dataTable.defaults.renderer = "bootstrap", $.fn.dataTable.ext.renderer.pageButton.bootstrap = function(settings, host, idx, buttons, page, pages) {
    var btnDisplay, btnClass, api = new $.fn.dataTable.Api(settings), classes = settings.oClasses, lang = settings.oLanguage.oPaginate, attach = function(container, buttons) {
        var i, ien, node, button, clickHandler = function(e) {
            e.preventDefault(), "ellipsis" !== e.data.action && api.page(e.data.action).draw(!1);
        };
        for (i = 0, ien = buttons.length; ien > i; i++) if (button = buttons[i], $.isArray(button)) attach(container, button); else {
            switch (btnDisplay = "", btnClass = "", button) {
              case "ellipsis":
                btnDisplay = "&hellip;", btnClass = "disabled";
                break;

              case "first":
                btnDisplay = lang.sFirst, btnClass = button + (page > 0 ? "" : " disabled");
                break;

              case "previous":
                btnDisplay = lang.sPrevious, btnClass = button + (page > 0 ? "" : " disabled");
                break;

              case "next":
                btnDisplay = lang.sNext, btnClass = button + (pages - 1 > page ? "" : " disabled");
                break;

              case "last":
                btnDisplay = lang.sLast, btnClass = button + (pages - 1 > page ? "" : " disabled");
                break;

              default:
                btnDisplay = button + 1, btnClass = page === button ? "active" : "";
            }
            btnDisplay && (node = $("<li>", {
                "class": classes.sPageButton + " " + btnClass,
                "aria-controls": settings.sTableId,
                tabindex: settings.iTabIndex,
                id: 0 === idx && "string" == typeof button ? settings.sTableId + "_" + button : null
            }).append($("<a>", {
                href: "#"
            }).html(btnDisplay)).appendTo(container), settings.oApi._fnBindAction(node, {
                action: button
            }, clickHandler));
        }
    };
    attach($(host).empty().html('<ul class="pagination"/>').children("ul"), buttons);
}) : ($.fn.dataTable.defaults.sPaginationType = "bootstrap", $.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings) {
    return {
        iStart: oSettings._iDisplayStart,
        iEnd: oSettings.fnDisplayEnd(),
        iLength: oSettings._iDisplayLength,
        iTotal: oSettings.fnRecordsTotal(),
        iFilteredTotal: oSettings.fnRecordsDisplay(),
        iPage: -1 === oSettings._iDisplayLength ? 0 : Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
        iTotalPages: -1 === oSettings._iDisplayLength ? 0 : Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
    };
}, $.extend($.fn.dataTableExt.oPagination, {
    bootstrap: {
        fnInit: function(oSettings, nPaging, fnDraw) {
            var oLang = oSettings.oLanguage.oPaginate, fnClickHandler = function(e) {
                e.preventDefault(), oSettings.oApi._fnPageChange(oSettings, e.data.action) && fnDraw(oSettings);
            };
            $(nPaging).append('<ul class="pagination"><li class="prev disabled"><a href="#">&larr; ' + oLang.sPrevious + '</a></li><li class="next disabled"><a href="#">' + oLang.sNext + " &rarr; </a></li></ul>");
            var els = $("a", nPaging);
            $(els[0]).bind("click.DT", {
                action: "previous"
            }, fnClickHandler), $(els[1]).bind("click.DT", {
                action: "next"
            }, fnClickHandler);
        },
        fnUpdate: function(oSettings, fnDraw) {
            var i, ien, j, sClass, iStart, iEnd, iListLength = 5, oPaging = oSettings.oInstance.fnPagingInfo(), an = oSettings.aanFeatures.p, iHalf = Math.floor(iListLength / 2);
            for (oPaging.iTotalPages < iListLength ? (iStart = 1, iEnd = oPaging.iTotalPages) : oPaging.iPage <= iHalf ? (iStart = 1, 
            iEnd = iListLength) : oPaging.iPage >= oPaging.iTotalPages - iHalf ? (iStart = oPaging.iTotalPages - iListLength + 1, 
            iEnd = oPaging.iTotalPages) : (iStart = oPaging.iPage - iHalf + 1, iEnd = iStart + iListLength - 1), 
            i = 0, ien = an.length; ien > i; i++) {
                for ($("li:gt(0)", an[i]).filter(":not(:last)").remove(), j = iStart; iEnd >= j; j++) sClass = j == oPaging.iPage + 1 ? 'class="active"' : "", 
                $("<li " + sClass + '><a href="#">' + j + "</a></li>").insertBefore($("li:last", an[i])[0]).bind("click", function(e) {
                    e.preventDefault(), oSettings._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * oPaging.iLength, 
                    fnDraw(oSettings);
                });
                0 === oPaging.iPage ? $("li:first", an[i]).addClass("disabled") : $("li:first", an[i]).removeClass("disabled"), 
                oPaging.iPage === oPaging.iTotalPages - 1 || 0 === oPaging.iTotalPages ? $("li:last", an[i]).addClass("disabled") : $("li:last", an[i]).removeClass("disabled");
            }
        }
    }
})), $.fn.DataTable.TableTools && ($.extend(!0, $.fn.DataTable.TableTools.classes, {
    container: "DTTT btn-group",
    buttons: {
        normal: "btn btn-default",
        disabled: "disabled"
    },
    collection: {
        container: "DTTT_dropdown dropdown-menu",
        buttons: {
            normal: "",
            disabled: "disabled"
        }
    },
    print: {
        info: "DTTT_print_info modal"
    },
    select: {
        row: "active"
    }
}), $.extend(!0, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
    collection: {
        container: "ul",
        button: "li",
        liner: "a"
    }
})), function($) {
    $.fn.extend({
        slimScroll: function(options) {
            var defaults = {
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, o = $.extend(defaults, options);
            return this.each(function() {
                function _onWheel(e) {
                    if (isOverPanel) {
                        var e = e || window.event, delta = 0;
                        e.wheelDelta && (delta = -e.wheelDelta / 120), e.detail && (delta = e.detail / 3);
                        var target = e.target || e.srcTarget || e.srcElement;
                        $(target).closest("." + o.wrapperClass).is(me.parent()) && scrollContent(delta, !0), 
                        e.preventDefault && !releaseScroll && e.preventDefault(), releaseScroll || (e.returnValue = !1);
                    }
                }
                function scrollContent(y, isWheel, isJump) {
                    releaseScroll = !1;
                    var delta = y, maxTop = me.outerHeight() - bar.outerHeight();
                    if (isWheel && (delta = parseInt(bar.css("top")) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight(), 
                    delta = Math.min(Math.max(delta, 0), maxTop), delta = y > 0 ? Math.ceil(delta) : Math.floor(delta), 
                    bar.css({
                        top: delta + "px"
                    })), percentScroll = parseInt(bar.css("top")) / (me.outerHeight() - bar.outerHeight()), 
                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight()), isJump) {
                        delta = y;
                        var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
                        offsetTop = Math.min(Math.max(offsetTop, 0), maxTop), bar.css({
                            top: offsetTop + "px"
                        });
                    }
                    me.scrollTop(delta), me.trigger("slimscrolling", ~~delta), showBar(), hideBar();
                }
                function attachWheel() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", _onWheel, !1), 
                    this.addEventListener("mousewheel", _onWheel, !1)) : document.attachEvent("onmousewheel", _onWheel);
                }
                function getBarHeight() {
                    barHeight = Math.max(me.outerHeight() / me[0].scrollHeight * me.outerHeight(), minBarHeight), 
                    bar.css({
                        height: barHeight + "px"
                    });
                    var display = barHeight == me.outerHeight() ? "none" : "block";
                    bar.css({
                        display: display
                    });
                }
                function showBar() {
                    if (getBarHeight(), clearTimeout(queueHide), percentScroll == ~~percentScroll) {
                        if (releaseScroll = o.allowPageScroll, lastScroll != percentScroll) {
                            var msg = 0 == ~~percentScroll ? "top" : "bottom";
                            me.trigger("slimscroll", msg);
                        }
                    } else releaseScroll = !1;
                    return lastScroll = percentScroll, barHeight >= me.outerHeight() ? void (releaseScroll = !0) : (bar.stop(!0, !0).fadeIn("fast"), 
                    void (o.railVisible && rail.stop(!0, !0).fadeIn("fast")));
                }
                function hideBar() {
                    o.alwaysVisible || (queueHide = setTimeout(function() {
                        o.disableFadeOut && isOverPanel || isOverBar || isDragg || (bar.fadeOut("slow"), 
                        rail.fadeOut("slow"));
                    }, 1e3));
                }
                var isOverPanel, isOverBar, isDragg, queueHide, touchDif, barHeight, percentScroll, lastScroll, divS = "<div></div>", minBarHeight = 30, releaseScroll = !1, me = $(this);
                if (me.parent().hasClass(o.wrapperClass)) {
                    var offset = me.scrollTop();
                    if (bar = me.parent().find("." + o.barClass), rail = me.parent().find("." + o.railClass), 
                    getBarHeight(), $.isPlainObject(options)) {
                        if ("height" in options && "auto" == options.height) {
                            me.parent().css("height", "auto"), me.css("height", "auto");
                            var height = me.parent().parent().height();
                            me.parent().css("height", height), me.css("height", height);
                        }
                        if ("scrollTo" in options) offset = parseInt(o.scrollTo); else if ("scrollBy" in options) offset += parseInt(o.scrollBy); else if ("destroy" in options) return bar.remove(), 
                        rail.remove(), void me.unwrap();
                        scrollContent(offset, !1, !0);
                    }
                } else if (!($.isPlainObject(options) && "destroy" in options)) {
                    o.height = "auto" == o.height ? me.parent().height() : o.height;
                    var wrapper = $(divS).addClass(o.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: o.width,
                        height: o.height
                    });
                    me.css({
                        overflow: "hidden",
                        width: o.width,
                        height: o.height,
                        "-ms-touch-action": "none"
                    });
                    var rail = $(divS).addClass(o.railClass).css({
                        width: o.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: o.alwaysVisible && o.railVisible ? "block" : "none",
                        "border-radius": o.railBorderRadius,
                        background: o.railColor,
                        opacity: o.railOpacity,
                        zIndex: 90
                    }), bar = $(divS).addClass(o.barClass).css({
                        background: o.color,
                        width: o.size,
                        position: "absolute",
                        top: 0,
                        opacity: o.opacity,
                        display: o.alwaysVisible ? "block" : "none",
                        "border-radius": o.borderRadius,
                        BorderRadius: o.borderRadius,
                        MozBorderRadius: o.borderRadius,
                        WebkitBorderRadius: o.borderRadius,
                        zIndex: 99
                    }), posCss = "right" == o.position ? {
                        right: o.distance
                    } : {
                        left: o.distance
                    };
                    rail.css(posCss), bar.css(posCss), me.wrap(wrapper), me.parent().append(bar), me.parent().append(rail), 
                    o.railDraggable && bar.bind("mousedown", function(e) {
                        var $doc = $(document);
                        return isDragg = !0, t = parseFloat(bar.css("top")), pageY = e.pageY, $doc.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY, bar.css("top", currTop), scrollContent(0, bar.position().top, !1);
                        }), $doc.bind("mouseup.slimscroll", function() {
                            isDragg = !1, hideBar(), $doc.unbind(".slimscroll");
                        }), !1;
                    }).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(), e.preventDefault(), !1;
                    }), rail.hover(function() {
                        showBar();
                    }, function() {
                        hideBar();
                    }), bar.hover(function() {
                        isOverBar = !0;
                    }, function() {
                        isOverBar = !1;
                    }), me.hover(function() {
                        isOverPanel = !0, showBar(), hideBar();
                    }, function() {
                        isOverPanel = !1, hideBar();
                    }), window.navigator.msPointerEnabled ? (me.bind("MSPointerDown", function(e) {
                        e.originalEvent.targetTouches.length && (touchDif = e.originalEvent.targetTouches[0].pageY);
                    }), me.bind("MSPointerMove", function(e) {
                        if (e.originalEvent.preventDefault(), e.originalEvent.targetTouches.length) {
                            var diff = (touchDif - e.originalEvent.targetTouches[0].pageY) / o.touchScrollStep;
                            scrollContent(diff, !0), touchDif = e.originalEvent.targetTouches[0].pageY;
                        }
                    })) : (me.bind("touchstart", function(e) {
                        e.originalEvent.touches.length && (touchDif = e.originalEvent.touches[0].pageY);
                    }), me.bind("touchmove", function(e) {
                        if (releaseScroll || e.originalEvent.preventDefault(), e.originalEvent.touches.length) {
                            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
                            scrollContent(diff, !0), touchDif = e.originalEvent.touches[0].pageY;
                        }
                    })), getBarHeight(), "bottom" === o.start ? (bar.css({
                        top: me.outerHeight() - bar.outerHeight()
                    }), scrollContent(0, !0)) : "top" !== o.start && (scrollContent($(o.start).position().top, null, !0), 
                    o.alwaysVisible || bar.hide()), attachWheel();
                }
            }), this;
        }
    }), $.fn.extend({
        slimscroll: $.fn.slimScroll
    });
}(jQuery);