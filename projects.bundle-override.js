// I believe the Scratchy stuff is handled by a script called projects.bundle.js, so ScratchInterface with pull out that script and shove this nice new one in it's place.
// I'll look at this mess tomorrow.

var w = function(e, t) {
        return (w = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    },
    b = function() {
        return b = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++) {
                t = arguments[o];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, b.apply(this, arguments)
    }
},
function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(11),
        i = n.getGlobalObject(),
        a = function() {
            function e() {
                this.enabled = !1
            }
            return e.prototype.disable = function() {
                this.enabled = !1
            }, e.prototype.enable = function() {
                this.enabled = !0
            }, e.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.enabled && n.consoleSandbox(function() {
                    i.console.log("Sentry Logger [Log]: " + e.join(" "))
                })
            }, e.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.enabled && n.consoleSandbox(function() {
                    i.console.warn("Sentry Logger [Warn]: " + e.join(" "))
                })
            }, e.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.enabled && n.consoleSandbox(function() {
                    i.console.error("Sentry Logger [Error]: " + e.join(" "))
                })
            }, e
        }(),
        r = new a;
    t.logger = r
},
function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(30);
    t.addGlobalEventProcessor = n.addGlobalEventProcessor, t.Scope = n.Scope;
    var i = o(87);
    t.getCurrentHub = i.getCurrentHub, t.getHubFromCarrier = i.getHubFromCarrier, t.getMainCarrier = i.getMainCarrier, t.Hub = i.Hub, t.setHubOnCarrier = i.setHubOnCarrier
}, ,
function(e, t, o) {
    "use strict";

    function n(e) {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
        }
    }

    function i(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }

    function a(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e)
    }

    function r(e) {
        return "[object DOMException]" === Object.prototype.toString.call(e)
    }

    function A(e) {
        return void 0 === e
    }

    function s(e) {
        return "function" == typeof e
    }

    function l(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }

    function u(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function g(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }

    function d(e) {
        return e !== e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isError = n, t.isErrorEvent = i, t.isDOMError = a, t.isDOMException = r, t.isUndefined = A, t.isFunction = s, t.isString = l, t.isArray = u, t.isPlainObject = c, t.isRegExp = g, t.isNaN = d
},
function(e, t, o) {
    "use strict";
    (function(e, n) {
        function i(e, t) {
            return e.require(t)
        }

        function a() {
            return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0)
        }

        function r() {
            return a() ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}
        }

        function A() {
            var e = r(),
                t = e.crypto || e.msCrypto;
            if (void 0 !== t && t.getRandomValues) {
                var o = new Uint16Array(8);
                t.getRandomValues(o), o[3] = 4095 & o[3] | 16384, o[4] = 16383 & o[4] | 32768;
                var n = function(e) {
                    for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                    return t
                };
                return n(o[0]) + n(o[1]) + n(o[2]) + n(o[3]) + n(o[4]) + n(o[5]) + n(o[6]) + n(o[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function s(e) {
            for (var t, o = e, n = [], i = 0, a = 0, r = " > ".length; o && i++ < 5 && !("html" === (t = l(o)) || i > 1 && a + n.length * r + t.length >= 80);) n.push(t), a += t.length, o = o.parentNode;
            return n.reverse().join(" > ")
        }

        function l(e) {
            var t, o, n, i, a, r = [];
            if (!e || !e.tagName) return "";
            if (r.push(e.tagName.toLowerCase()), e.id && r.push("#" + e.id), (t = e.className) && d.isString(t))
                for (o = t.split(/\s+/), a = 0; a < o.length; a++) r.push("." + o[a]);
            var A = ["type", "name", "title", "alt"];
            for (a = 0; a < A.length; a++) n = A[a], (i = e.getAttribute(n)) && r.push("[" + n + '="' + i + '"]');
            return r.join("")
        }

        function u(e) {
            if (!e) return {};
            var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t) return {};
            var o = t[6] || "",
                n = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                relative: t[5] + o + n
            }
        }

        function c(e) {
            if (e.message) return e.message;
            if (e.exception && e.exception.values && e.exception.values[0]) {
                var t = e.exception.values[0];
                return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
            }
            return e.event_id || "<unknown>"
        }

        function g(e) {
            var t = r(),
                o = ["debug", "info", "warn", "error", "log"];
            if (!("console" in t)) return e();
            var n = t.console,
                i = {};
            o.forEach(function(e) {
                e in t.console && n[e].__sentry__ && (i[e] = n[e].__sentry_wrapped__, n[e] = n[e].__sentry_original__)
            });
            var a = e();
            return Object.keys(i).forEach(function(e) {
                n[e] = i[e]
            }), a
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = o(10);
        t.dynamicRequire = i, t.isNodeEnv = a, t.getGlobalObject = r, t.uuid4 = A, t.htmlTreeAsString = s, t.htmlElementAsString = l, t.parseUrl = u, t.getEventDescription = c, t.consoleSandbox = g
    }).call(t, o(25), o(21))
}, ,
function(e, t, o) {
    "use strict";
    var n = o(5),
        i = o(1),
        a = o(0);
    o(48);
    var r = function(e) {
        return a.createElement(e.as, {
            className: n("flex-row", e.className)
        }, e.children)
    };
    r.propTypes = {
        children: i.node,
        className: i.string
    }, r.defaultProps = {
        as: "div"
    }, e.exports = r
}, ,
function(e, t, o) {
    "use strict";
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        },
        i = o(5),
        a = o(14),
        r = o(1),
        A = o(0);
    o(27);
    var s = function(e) {
        var t = i("button", e.className);
        return A.createElement("button", n({
            className: t
        }, a(e, ["className", "children"])), e.children)
    };
    s.propTypes = {
        children: r.node,
        className: r.string
    }, e.exports = s
}, ,
function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(6),
        i = o(10),
        a = o(19),
        r = o(18),
        A = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        s = function() {
            function e(e) {
                "string" == typeof e ? this.fromString(e) : this.fromComponents(e), this.validate()
            }
            return e.prototype.toString = function(e) {
                void 0 === e && (e = !1);
                var t = this,
                    o = t.host,
                    n = t.path,
                    i = t.pass,
                    a = t.port,
                    r = t.projectId;
                return t.protocol + "://" + t.user + (e && i ? ":" + i : "") + "@" + o + (a ? ":" + a : "") + "/" + (n ? n + "/" : n) + r
            }, e.prototype.fromString = function(e) {
                var t = A.exec(e);
                if (!t) throw new r.SentryError("Invalid Dsn");
                var o = n.__read(t.slice(1), 6),
                    i = o[0],
                    s = o[1],
                    l = o[2],
                    u = void 0 === l ? "" : l,
                    c = o[3],
                    g = o[4],
                    d = void 0 === g ? "" : g,
                    p = o[5],
                    h = "",
                    m = p,
                    E = m.split("/");
                E.length > 1 && (h = E.slice(0, -1).join("/"), m = E.pop()), a.assign(this, {
                    host: c,
                    pass: u,
                    path: h,
                    projectId: m,
                    port: d,
                    protocol: i,
                    user: s
                })
            }, e.prototype.fromComponents = function(e) {
                this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
            }, e.prototype.validate = function() {
                var e, t;
                try {
                    for (var o = n.__values(["protocol", "user", "host", "projectId"]), a = o.next(); !a.done; a = o.next()) {
                        var A = a.value;
                        if (!this[A]) throw new r.SentryError("Invalid Dsn: Missing " + A)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (t = o.return) && t.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
                if ("http" !== this.protocol && "https" !== this.protocol) throw new r.SentryError('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
                if (this.port && i.isNaN(parseInt(this.port, 10))) throw new r.SentryError('Invalid Dsn: Invalid port number "' + this.port + '"')
            }, e
        }();
    t.Dsn = s
},
function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(6),
        i = function(e) {
            function t(t) {
                var o = this.constructor,
                    n = e.call(this, t) || this;
                return n.message = t, n.name = o.prototype.constructor.name, Object.setPrototypeOf(n, o.prototype), n
            }
            return n.__extends(t, e), t
        }(Error);
    t.SentryError = i
},
function(e, t, o) {
    "use strict";
    (function(e) {
        function n(e) {
            return JSON.stringify(e)
        }

        function i(e) {
            return JSON.parse(e)
        }

        function a(e) {
            return i(n(e))
        }

        function r(e, t, o) {
            if (t in e && !e[t].__sentry__) {
                var n = e[t],
                    i = o(n);
                i.__sentry__ = !0, i.__sentry_original__ = n, i.__sentry_wrapped__ = i, e[t] = i
            }
        }

        function A(e) {
            return Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&")
        }

        function s(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }

        function l(e) {
            return s(JSON.stringify(e))
        }

        function u(e) {
            if ("string" == typeof e) return e.length <= 40 ? e : e.substr(0, 39) + "â€¦";
            if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
            if (B.isNaN(e)) return "[NaN]";
            if (B.isUndefined(e)) return "[undefined]";
            var t = Object.prototype.toString.call(e);
            if ("[object Object]" === t) return "[Object]";
            if ("[object Array]" === t) return "[Array]";
            if ("[object Function]" === t) {
                var o = e.name;
                return o ? "[Function: " + o + "]" : "[Function]"
            }
            return e
        }

        function c(e, t) {
            if (0 === t) return u(e);
            if (B.isPlainObject(e)) {
                var o = {},
                    n = e;
                return Object.keys(n).forEach(function(e) {
                    o[e] = c(n[e], t - 1)
                }), o
            }
            if (Array.isArray(e)) {
                return e.map(function(e) {
                    return c(e, t - 1)
                })
            }
            return u(e)
        }

        function g(e, t, o) {
            void 0 === t && (t = C), void 0 === o && (o = y);
            var i = c(e, t);
            return l(n(i)) > o ? g(e, t - 1) : i
        }

        function d(e, t) {
            if (void 0 === t && (t = w), !e.length) return "[object has no keys]";
            if (e[0].length >= t) return e[0];
            for (var o = e.length; o > 0; o--) {
                var n = e.slice(0, o).join(", ");
                if (!(n.length > t)) return o === e.length ? n : n + "â€¦"
            }
            return ""
        }

        function p(e) {
            for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), i = 0; i < t.length; i++) {
                var a = t[i];
                if (null !== a)
                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r])
            }
            return n
        }

        function h(e) {
            var t = {
                message: e.message,
                name: e.name,
                stack: e.stack
            };
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }

        function m(t, o) {
            return "domain" === o && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === o ? "[DomainEmitter]" : void 0 !== e && t === e ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : t instanceof Date ? "[Date] " + t : t instanceof Error ? h(t) : B.isNaN(t) ? "[NaN]" : B.isUndefined(t) ? "[undefined]" : "function" == typeof t ? "[Function] " + (t.name || "<unknown-function-name>") : t
        }

        function E() {
            function e(e, n) {
                return t[0] === n ? "[Circular ~]" : "[Circular ~." + o.slice(0, t.indexOf(n)).join(".") + "]"
            }
            var t = [],
                o = [];
            return function(n, i) {
                if (t.length > 0) {
                    var a = t.indexOf(this); - 1 === a ? (t.push(this), o.push(n)) : (t.splice(a + 1), o.splice(a, 1 / 0, n)), -1 !== t.indexOf(i) && (i = e.call(this, n, i))
                } else t.push(i);
                return m(i, n)
            }
        }

        function f(e) {
            try {
                return JSON.parse(JSON.stringify(e, E()))
            } catch (e) {
                return "**non-serializable**"
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var B = o(10);
        t.serialize = n, t.deserialize = i, t.clone = a, t.fill = r, t.urlEncode = A;
        var C = 3,
            y = 102400,
            w = 40;
        t.serializeObject = c, t.limitObjectDepthToSize = g, t.serializeKeysToEventMessage = d, t.assign = p, t.safeNormalize = f
    }).call(t, o(21))
},
function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.canUseDOM = void 0;
    var n = o(114),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n),
        a = i.default,
        r = a.canUseDOM ? window.HTMLElement : {};
    t.canUseDOM = a.canUseDOM;
    t.default = r
}, , ,
function(e, t, o) {
    "use strict";
    var n = o(5),
        i = o(1),
        a = o(0);
    o(54);
    var r = function(e) {
        return a.createElement("div", {
            className: n("title-banner", e.className)
        }, e.children)
    };
    r.propTypes = {
        children: i.node,
        className: i.string
    }, e.exports = r
},
function(e, t, o) {
    "use strict";

    function n(e, t) {
        var o = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
        return o
    }
    var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        },
        a = o(5),
        r = o(66).Input,
        A = o(14),
        s = o(1),
        l = o(0),
        u = o(63).defaultValidationHOC,
        c = o(94);
    o(59), o(61);
    var g = function(e) {
        var t = e.className,
            o = e.label,
            s = n(e, ["className", "label"]);
        return l.createElement(r, i({
            className: "input",
            label: o,
            rowClassName: a(t, {
                "no-label": void 0 === o
            })
        }, A(s, ["className"])))
    };
    g.propTypes = {
        className: s.string,
        label: s.string
    }, e.exports = c(u(g))
},
function(e, t) {
    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === o || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (c === clearTimeout) return clearTimeout(e);
        if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
        try {
            return c(e)
        } catch (t) {
            try {
                return c.call(null, e)
            } catch (t) {
                return c.call(this, e)
            }
        }
    }

    function r() {
        h && d && (h = !1, d.length ? p = d.concat(p) : m = -1, p.length && A())
    }

    function A() {
        if (!h) {
            var e = i(r);
            h = !0;
            for (var t = p.length; t;) {
                for (d = p, p = []; ++m < t;) d && d[m].run();
                m = -1, t = p.length
            }
            d = null, h = !1, a(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var u, c, g = e.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            u = o
        }
        try {
            c = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
            c = n
        }
    }();
    var d, p = [],
        h = !1,
        m = -1;
    g.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        p.push(new s(e, t)), 1 !== p.length || h || i(A)
    }, s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, g.title = "browser", g.browser = !0, g.env = {}, g.argv = [], g.version = "", g.versions = {}, g.on = l, g.addListener = l, g.once = l, g.off = l, g.removeListener = l, g.removeAllListeners = l, g.emit = l, g.prependListener = l, g.prependOnceListener = l, g.listeners = function(e) {
        return []
    }, g.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, g.cwd = function() {
        return "/"
    }, g.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, g.umask = function() {
        return 0
    }
},
function(e, t, o) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        },
        A = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
        s = o(9),
        l = o(5),
        u = o(14),
        c = o(1),
        g = o(0),
        d = o(121);
    o(126), d.setAppElement(document.getElementById("app"));
    var p = function(e) {
        function t(e) {
            n(this, t);
            var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return s(o, ["handleRequestClose"]), o
        }
        return a(t, e), A(t, [{
            key: "handleRequestClose",
            value: function() {
                return this.modal.portal.requestClose()
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.useStandardSizes ? {
                        bodyOpenClassName: l("overflow-hidden")
                    } : {};
                return g.createElement(d, r({
                    appElement: document.getElementById("app")
                }, t, {
                    className: {
                        base: l("modal-content", this.props.className, {
                            "modal-sizes": this.props.useStandardSizes
                        }),
                        afterOpen: l("modal-content", this.props.className),
                        beforeClose: l("modal-content", this.props.className)
                    },
                    overlayClassName: {
                        base: l("modal-overlay", this.props.overlayClassName),
                        afterOpen: l("modal-overlay", this.props.overlayClassName),
                        beforeClose: l("modal-overlay", this.props.overlayClassName)
                    },
                    ref: function(t) {
                        e.modal = t
                    }
                }, u(this.props, ["className", "overlayClassName"])), this.props.showCloseButton && g.createElement("div", {
                    className: "modal-content-close",
                    onClick: this.handleRequestClose
                }, g.createElement("img", {
                    alt: "close-icon",
                    className: "modal-content-close-img",
                    draggable: "false",
                    src: "/svgs/modal/close-x.svg"
                })), this.props.children)
            }
        }]), t
    }(g.Component);
    p.propTypes = {
        children: c.node,
        className: c.string,
        overlayClassName: c.string,
        showCloseButton: c.bool,
        useStandardSizes: c.bool
    }, p.defaultProps = {
        showCloseButton: !0
    }, e.exports = p
},
function(e, t, o) {
    var n = o(38);
    "string" == typeof n && (n = [
        [e.i, n, ""]
    ]);
    o(3)(n, {});
    n.locals && (e.exports = n.locals)
},
function(e, t, o) {
    "use strict";
    var n = o(5),
        i = o(1),
        a = o(0),
        r = o(98),
        A = o(93),
        s = o(99),
        l = o(64),
        u = o(100),
        c = function(e) {
            var t = e.children,
                o = e.className,
                i = e.showDonorRecognition;
            return a.createElement(l, {
                componentName: "Page"
            }, a.createElement("div", {
                className: n("page", o)
            }, a.createElement("div", {
                className: n({
                    staging: !1
                }),
                id: "navigation"
            }, a.createElement(r, null)), a.createElement("div", {
                id: "view"
            }, Date.now() >= 15787188e5 && Date.now() < 15787476e5 && a.createElement(u, null, "We are experiencing a disruption with email delivery. If you are not receiving emails from us, please try after 8am EST."), t), a.createElement("div", {
                id: "footer"
            }, a.createElement(A, null)), i && a.createElement("div", {
                id: "donor"
            }, a.createElement(s, null))))
        };
    c.propTypes = {
        children: i.node,
        className: i.string,
        showDonorRecognition: i.bool
    }, e.exports = c
},
function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(6),
        i = function() {
            function e() {
                this.buffer = []
            }
            return e.prototype.add = function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return n.__generator(this, function(o) {
                        return -1 === this.buffer.indexOf(e) && this.buffer.push(e), e.then(function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                return n.__generator(this, function(t) {
                                    return [2, this.remove(e)]
                                })
                            })
                        }).catch(function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                return n.__generator(this, function(t) {
                                    return [2, this.remove(e)]
                                })
                            })
                        }), [2, e]
                    })
                })
            }, e.prototype.remove = function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return n.__generator(this, function(o) {
                        return t = this.buffer.splice(this.buffer.indexOf(e), 1)[0], [2, t]
                    })
                })
            }, e.prototype.length = function() {
                return this.buffer.length
            }, e.prototype.drain = function(e) {
                return n.__awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return n.__generator(this, function(o) {
                        return [2, new Promise(function(o) {
                            var n = setTimeout(function() {
                                e && e > 0 && o(!1)
                            }, e);
                            Promise.all(t.buffer).then(function() {
                                clearTimeout(n), o(!0)
                            }).catch(function() {
                                o(!0)
                            })
                        })]
                    })
                })
            }, e
        }();
    t.RequestBuffer = i
},
function(e, t, o) {
    "use strict";

    function n() {
        var e = r.getGlobalObject();
        return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
    }

    function i(e) {
        n().push(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = o(6),
        r = o(11),
        A = o(19),
        s = function() {
            function e() {
                this.notifyingListeners = !1, this.scopeListeners = [], this.eventProcessors = [], this.breadcrumbs = [], this.user = {}, this.tags = {}, this.extra = {}
            }
            return e.prototype.addScopeListener = function(e) {
                this.scopeListeners.push(e)
            }, e.prototype.addEventProcessor = function(e) {
                return this.eventProcessors.push(e), this
            }, e.prototype.notifyScopeListeners = function() {
                var e = this;
                this.notifyingListeners || (this.notifyingListeners = !0, setTimeout(function() {
                    e.scopeListeners.forEach(function(t) {
                        t(e)
                    }), e.notifyingListeners = !1
                }, 0))
            }, e.prototype.notifyEventProcessors = function(e, t) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var o, i, r, A, s, l, u, c;
                    return a.__generator(this, function(g) {
                        switch (g.label) {
                            case 0:
                                r = e, g.label = 1;
                            case 1:
                                g.trys.push([1, 8, 9, 10]), A = a.__values(a.__spread(n(), this.eventProcessors)), s = A.next(), g.label = 2;
                            case 2:
                                if (s.done) return [3, 7];
                                l = s.value, g.label = 3;
                            case 3:
                                return g.trys.push([3, 5, , 6]), [4, l(a.__assign({}, r), t)];
                            case 4:
                                return r = g.sent(), null === r ? [2, null] : [3, 6];
                            case 5:
                                return u = g.sent(), [3, 6];
                            case 6:
                                return s = A.next(), [3, 2];
                            case 7:
                                return [3, 10];
                            case 8:
                                return c = g.sent(), o = {
                                    error: c
                                }, [3, 10];
                            case 9:
                                try {
                                    s && !s.done && (i = A.return) && i.call(A)
                                } finally {
                                    if (o) throw o.error
                                }
                                return [7];
                            case 10:
                                return [2, r]
                        }
                    })
                })
            }, e.prototype.setUser = function(e) {
                return this.user = A.safeNormalize(e), this.notifyScopeListeners(), this
            }, e.prototype.setTag = function(e, t) {
                var o;
                return this.tags = a.__assign({}, this.tags, (o = {}, o[e] = A.safeNormalize(t), o)), this.notifyScopeListeners(), this
            }, e.prototype.setExtra = function(e, t) {
                var o;
                return this.extra = a.__assign({}, this.extra, (o = {}, o[e] = A.safeNormalize(t), o)), this.notifyScopeListeners(), this
            }, e.prototype.setFingerprint = function(e) {
                return this.fingerprint = A.safeNormalize(e), this.notifyScopeListeners(), this
            }, e.prototype.setLevel = function(e) {
                return this.level = A.safeNormalize(e), this.notifyScopeListeners(), this
            }, e.clone = function(t) {
                var o = new e;
                return A.assign(o, t, {
                    scopeListeners: []
                }), t && (o.extra = A.assign(t.extra), o.tags = A.assign(t.tags), o.breadcrumbs = a.__spread(t.breadcrumbs), o.eventProcessors = a.__spread(t.eventProcessors)), o
            }, e.prototype.clear = function() {
                this.breadcrumbs = [], this.tags = {}, this.extra = {}, this.user = {}, this.level = void 0, this.fingerprint = void 0, this.notifyScopeListeners()
            }, e.prototype.addBreadcrumb = function(e, t) {
                this.breadcrumbs = void 0 !== t && t >= 0 ? a.__spread(this.breadcrumbs, [A.safeNormalize(e)]).slice(-t) : a.__spread(this.breadcrumbs, [A.safeNormalize(e)]), this.notifyScopeListeners()
            }, e.prototype.applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this.fingerprint ? e.fingerprint = e.fingerprint.concat(this.fingerprint) : e.message && (e.fingerprint = e.fingerprint.concat(e.message)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }, e.prototype.applyToEvent = function(e, t, o) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return a.__generator(this, function(i) {
                        return this.extra && Object.keys(this.extra).length && (e.extra = a.__assign({}, this.extra, e.extra)), this.tags && Object.keys(this.tags).length && (e.tags = a.__assign({}, this.tags, e.tags)), this.user && Object.keys(this.user).length && (e.user = a.__assign({}, this.user, e.user)), this.level && (e.level = this.level), this.applyFingerprint(e), n = !e.breadcrumbs || 0 === e.breadcrumbs.length, n && this.breadcrumbs.length > 0 && (e.breadcrumbs = void 0 !== o && o >= 0 ? this.breadcrumbs.slice(-o) : this.breadcrumbs), [2, this.notifyEventProcessors(e, t)]
                    })
                })
            }, e
        }();
    t.Scope = s, t.addGlobalEventProcessor = i
},
function(e, t, o) {
    "use strict";

    function n(e, t) {
        return void 0 === t && (t = 0), 0 !== t && A.isString(e) ? e.length <= t ? e : e.substr(0, t) + "â€¦" : e
    }

    function i(e, t) {
        var o = e,
            n = o.length;
        if (n <= 150) return o;
        t > n && (t = n);
        var i = Math.max(t - 60, 0);
        i < 5 && (i = 0);
        var a = Math.min(i + 140, n);
        return a > n - 5 && (a = n), a === n && (i = Math.max(a - 140, 0)), o = o.slice(i, a), i > 0 && (o = "'{snip} " + o), a < n && (o += " {snip}"), o
    }

    function a(e, t) {
        if (!Array.isArray(e)) return "";
        for (var o = [], n = 0; n < e.length; n++) {
            var i = e[n];
            try {
                o.push(String(i))
            } catch (e) {
                o.push("[value cannot be serialized]")
            }
        }
        return o.join(t)
    }

    function r(e, t) {
        return !(t.length > e.length) && -1 !== e.indexOf(t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var A = o(10);
    t.truncate = n, t.snipLine = i, t.safeJoin = a, t.includes = r
},
function(e, t, o) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var r = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
        A = o(9),
        s = o(5),
        l = o(58).default,
        u = o(1),
        c = o(0);
    o(123);
    var g = function(e) {
        function t(e) {
            n(this, t);
            var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return A(o, ["handleClickOutside"]), o
        }
        return a(t, e), r(t, [{
            key: "handleClickOutside",
            value: function() {
                this.props.isOpen && this.props.onRequestClose()
            }
        }, {
            key: "render",
            value: function() {
                return c.createElement(this.props.as, {
                    className: s("dropdown", this.props.className, {
                        open: this.props.isOpen
                    })
                }, this.props.children)
            }
        }]), t
    }(c.Component);
    g.propTypes = {
        children: u.node,
        className: u.string,
        isOpen: u.bool,
        onRequestClose: u.func.isRequired
    }, g.defaultProps = {
        as: "div",
        isOpen: !1
    }, e.exports = l(g)
},
function(e, t, o) {
    "use strict";

    function n(e, t) {
        if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
    }

    function i(e) {
        var t = e;
        if ("string" == typeof t && g.canUseDOM) {
            var o = document.querySelectorAll(t);
            n(o, t), t = "length" in o ? o[0] : o
        }
        return d = t || d
    }

    function a(e) {
        return !(!e && !d) || ((0, c.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), !1)
    }

    function r(e) {
        a(e) && (e || d).setAttribute("aria-hidden", "true")
    }

    function A(e) {
        a(e) && (e || d).removeAttribute("aria-hidden")
    }

    function s() {
        d = null
    }

    function l() {
        d = null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.assertNodeList = n, t.setElement = i, t.validateElement = a, t.hide = r, t.show = A, t.documentNotReadyOrSSRTesting = s, t.resetForTesting = l;
    var u = o(132),
        c = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(u),
        g = o(20),
        d = null
},
function(e, t, o) {
    "use strict";

    function n(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var o = window.getComputedStyle(e);
        return t ? "visible" !== o.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0 : "none" == o.getPropertyValue("display")
    }

    function i(e) {
        for (var t = e; t && t !== document.body;) {
            if (n(t)) return !1;
            t = t.parentNode
        }
        return !0
    }

    function a(e, t) {
        var o = e.nodeName.toLowerCase();
        return (s.test(o) && !e.disabled || ("a" === o ? e.href || t : t)) && i(e)
    }

    function r(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var o = isNaN(t);
        return (o || t >= 0) && a(e, !o)
    }

    function A(e) {
        return [].slice.call(e.querySelectorAll("*"), 0).filter(r)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = A;
    /*!
