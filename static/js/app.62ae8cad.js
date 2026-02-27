(c => {
    function e(e) {
        for (var t, n, a = e[0], r = e[1], o = e[2], i = 0, s = []; i < a.length; i++) n = a[i], Object.prototype.hasOwnProperty.call(d, n) && d[n] && s.push(d[n][0]), d[n] = 0;
        for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (c[t] = r[t]);
        for (m && m(e); s.length;) s.shift()();
        return l.push.apply(l, o || []), u()
    }

    function u() {
        for (var e, t = 0; t < l.length; t++) {
            for (var n = l[t], a = !0, r = 1; r < n.length; r++) {
                var o = n[r];
                0 !== d[o] && (a = !1)
            }
            a && (l.splice(t--, 1), e = p(p.s = n[0]))
        }
        return e
    }
    var n = {},
        f = {
            app: 0
        },
        d = {
            app: 0
        },
        l = [];

    function p(e) {
        var t;
        return (n[e] || (t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        }, c[e].call(t.exports, t, t.exports, p), t.l = !0, t)).exports
    }
    p.e = function(l) {
        var a, r, e, o, t, n = [],
            i = (f[l] ? n.push(f[l]) : 0 !== f[l] && {
                "chunk-13497520": 1,
                "chunk-4be6a838": 1,
                "chunk-9f917292": 1,
                "chunk-a5b8ff70": 1,
                "chunk-2a64d08d": 1,
                "chunk-f7a1b7f2": 1,
                "chunk-a89f1c0c": 1
            }[l] && n.push(f[l] = new Promise(function(e, n) {
                for (var t = "static/css/" + ({}[l] || l) + "." + {
                        "chunk-13497520": "a402c36a",
                        "chunk-4be6a838": "0924e456",
                        "chunk-9f917292": "db9c1cfa",
                        "chunk-a5b8ff70": "2b3e2fb8",
                        "chunk-2a64d08d": "3a1afc11",
                        "chunk-f7a1b7f2": "efbbba43",
                        "chunk-a89f1c0c": "4182457d"
                    }[l] + ".css", a = p.p + t, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                    var i = r[o],
                        s = i.getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (s === t || s === a)) return e()
                }
                for (var c = document.getElementsByTagName("style"), o = 0; o < c.length; o++)
                    if ((s = (i = c[o]).getAttribute("data-href")) === t || s === a) return e();
                var u = document.createElement("link");
                u.rel = "stylesheet", u.type = "text/css", u.onload = e, u.onerror = function(e) {
                    var e = e && e.target && e.target.src || a,
                        t = new Error("Loading CSS chunk " + l + " failed.\n(" + e + ")");
                    t.code = "CSS_CHUNK_LOAD_FAILED", t.request = e, delete f[l], u.parentNode.removeChild(u), n(t)
                }, u.href = a, document.getElementsByTagName("head")[0].appendChild(u)
            }).then(function() {
                f[l] = 0
            })), d[l]);
        return 0 !== i && (i ? n.push(i[2]) : (t = new Promise(function(e, t) {
            i = d[l] = [e, t]
        }), n.push(i[2] = t), (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, p.nc && a.setAttribute("nonce", p.nc), a.src = p.p + "static/js/" + ({}[t = l] || t) + "." + {
            "chunk-13497520": "04b3fd5b",
            "chunk-4be6a838": "99661d4a",
            "chunk-9f917292": "9f5c94bd",
            "chunk-a5b8ff70": "6addce92",
            "chunk-2a64d08d": "20ee8497",
            "chunk-f7a1b7f2": "28f5decd",
            "chunk-a89f1c0c": "529f4d47"
        }[t] + ".js", r = new Error, e = function(e) {
            a.onerror = a.onload = null, clearTimeout(o);
            var t, n = d[l];
            0 !== n && (n && (t = e && ("load" === e.type ? "missing" : e.type), e = e && e.target && e.target.src, r.message = "Loading chunk " + l + " failed.\n(" + t + ": " + e + ")", r.name = "ChunkLoadError", r.type = t, r.request = e, n[1](r)), d[l] = void 0)
        }, o = setTimeout(function() {
            e({
                type: "timeout",
                target: a
            })
        }, 12e4), a.onerror = a.onload = e, document.head.appendChild(a))), Promise.all(n)
    }, p.m = c, p.c = n, p.d = function(e, t, n) {
        p.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, p.t = function(t, e) {
        if (1 & e && (t = p(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (p.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) p.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, p.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return p.d(t, "a", t), t
    }, p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, p.p = "", p.oe = function(e) {
        throw e
    };
    var t = (a = window.webpackJsonp = window.webpackJsonp || []).push.bind(a);
    a.push = e;
    for (var a = a.slice(), r = 0; r < a.length; r++) e(a[r]);
    var m = t;
    l.push([0, "chunk-libs"]), u()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "01bc": function(e, t, n) {
        e.exports = n.p + "static/media/newNotice.1a5635aa.mp3"
    },
    "0dae": function(e, t, n) {
        n("eb65")
    },
    1: function(e, t) {},
    1184: function(e, t, n) {
        n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "g", function() {
            return i
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        }), n.d(t, "h", function() {
            return l
        }), n.d(t, "i", function() {
            return f
        }), n.d(t, "e", function() {
            return d
        });
        var s = n("c1fb"),
            a = (n("4328"), function(e, t) {
                return s.a.getPlan("/api/index/health", {}, t, e)
            }),
            r = function(e, t) {
                return s.a.getPlan("/api/index/timeNoLogin", {
                    lotteryId: e
                }, t)
            },
            o = function(e) {
                return s.a.getPlan("/api/index/longdragonNoLogin", {
                    lotteryCode: e,
                    lotteryTypeCode: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""
                }, 2 < arguments.length ? arguments[2] : void 0)
            },
            i = function(e, t) {
                return s.a.getPlan("/api/index/planList", e, t)
            },
            c = function(e, t) {
                return s.a.getPlan("/api/index/plan", e, t)
            },
            u = function(e, t) {
                return s.a.getPlan("/api/index/dataAnalysis", {
                    lotteryId: e
                }, t)
            },
            l = function(e, t, n, a, r, o, i) {
                return s.a.getPlan("/api/index/resultByDateNoLogin", {
                    currentPage: n,
                    pageSize: a,
                    lotteryId: e,
                    lotteryCode: t,
                    startTime: r,
                    endTime: o
                }, i)
            },
            f = function(e, t) {
                return s.a.getPlan("/api/index/resultByDateNoLogin", e, t)
            },
            d = function(e, t) {
                return s.a.getPlan("/api/index/openResultNoLogin", {
                    lotteryId: e
                }, t)
            }
    },
    "2e56": function(e, t, n) {
        n("59e1")
    },
    "2fac": function(e, t, n) {},
    "2ffa": function(e, t, n) {
        n("2fac")
    },
    3089: function(e, t) {
        e.exports = vant
    },
    "35f3": function(e, t, n) {},
    "3c0e": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABYCAMAAAAJFsPWAAAAk1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////82Vn9fAAAAMHRSTlMA/YSI9I3YgPnEmax4kWa20qbObqPm6ZzuyOGfLVFBFbyzRRk7c78y3GIRlFd7KF7otb1DAAADRUlEQVRo3sWa0XaiMBCGSwmZBGQRKqLQKq5dtXXb/u//dHsBVu1aMkFscunR8zmTZOafydzdmdfycfH08jAa0ZDLBF0/fwwLZIFfFw90q9WBfXyhG65vsdsHIgfg7R8iB+D1LyIX4N9ELsCvv8gJ+H1ETsALIifgJ3ID/ktuwD/IJTd+PgcvyA34kdyAl2/s3/hFVNebOkkLfwAwN15NdK5wWKrU1ZVgXnwO9Axf12zjXwFes7BzD5eW2Nz3BnMcHX26WOzG83k2LsWn1VFP8JZxomTD8GQSHj67D5Ndix73AzP0hmy9Gn/5fK8bR0yDHuBnxhcBAPNL5yjImv8U24M5AqsG8vC7KyYAQMW2YF7MSjsOkL8DAOFbgofQOhkATO3Ay0Fi7xgA5lbggUTlFAAKG/BAJcO9B2BmATZFy4xrRQQAER9suMQT/saVAAQf/NHtQAXFTQF7AJiwwSPjYdU2JksueGlwNACPa/IEYPvHELaaBMA2WQFImeCFMSpYmJzxg0inmJ4cEj3X5BWAnAl+MTrawuSQf6G64tb4KKuYJvsK8HiKoOM2paeCjpnxZgBCHvitW3McVsbPFExwR+xN01QDyIuiqMy6fSyllApALqUsr7H4cFp2PGPnpw7Kr9ljIqLKQlccKxtO+DJk49giCCZHMCN6mQSXYJ+WE5M5m2PIilQCWJGlyZybbOo/aJvypDU5YV0ngwCpLDa5NZkXrO/eybzJkZXJvILCqKq1jVBPANTDSB+KbYQUCW5WJHNXTdrIZY2ADTbVqLGNEghSYoOXxNhlvrOHLGGEdfE7UNEW4gZkVpm6AgC179rbogeYUZhrAPC+jyOJZ932YbYidKN/Lt+VWAJAZQ/mNF82TYJP/g/b/qbp94U9wJx2U9vXE/ocEGZtSlr1cDWv3xSXbbadZkm1D/xgX62yQ081D6kXeMsrUMRR3HjqpKGq6l7Xid9x8uvZpeatDqg3eM39fiTVGdUrV37fAGL5kBmkWk6F8pSY7nQUXBG57J4GBgyZ7SPqyBHYKL5uBv6Z9+pLYGdPfO4eNd0947p7uHb3VO9uOMHdOIa7ARSHIzfuhowcjlU5HCRzODrncFjwfDzybVDwP0JBaTF/HhttAAAAAElFTkSuQmCC"
    },
    "40f5": function(e, t, n) {},
    "41cb": function(e, t, n) {
        n("4917"), n("7f7f"), n("96cf");
        var a = n("1da1"),
            r = n("8bbf"),
            r = n.n(r),
            o = n("6389"),
            o = n.n(o),
            i = (n("c0d6"), n("a78e"), n("60fe"));
        n("c1fb");
        var s = new(n("68fe").a)("sessionStorage");
        r.a.use(o.a);
        var c, u = new o.a({
            routes: [{
                path: "",
                component: function() {
                    return n.e("chunk-4be6a838").then(n.bind(null, "5849"))
                },
                children: [{
                    path: "/",
                    redirect: "gamehall"
                }, {
                    path: "/gamehall",
                    name: "GameHall",
                    component: function() {
                        return Promise.all([n.e("chunk-a5b8ff70"), n.e("chunk-f7a1b7f2")]).then(n.bind(null, "5ab1"))
                    },
                    meta: {
                        index: 3
                    }
                }, {
                    path: "/game",
                    name: "Game",
                    component: function() {
                        return Promise.all([n.e("chunk-a5b8ff70"), n.e("chunk-2a64d08d")]).then(n.bind(null, "8d8f"))
                    },
                    meta: {
                        index: 4
                    }
                }, {
                    path: "/open",
                    name: "open",
                    component: function() {
                        return n.e("chunk-13497520").then(n.bind(null, "72b2"))
                    },
                    meta: {
                        index: 5
                    }
                }, {
                    path: "personal",
                    name: "Personal",
                    component: function() {
                        return n.e("chunk-a89f1c0c").then(n.bind(null, "20a6"))
                    },
                    meta: {
                        title: "个人中心",
                        index: 6
                    }
                }]
            }, {
                path: "/maintain",
                name: "maintain",
                component: function() {
                    return n.e("chunk-9f917292").then(n.bind(null, "f6ac"))
                }
            }, {
                path: "*",
                name: "All",
                redirect: "/"
            }]
        });
        u.beforeEach((c = Object(a.a)(regeneratorRuntime.mark(function e(t, n, a) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (s.get(i.TOKEN), r = localStorage.getItem("ISMAINTIANSTATUSXJH5") || 0, 1 === parseInt(r) && "maintain" === n.name) return a("/maintain"), e.abrupt("return", !1);
                        e.next = 7;
                        break;
                    case 7:
                        a();
                    case 8:
                    case "end":
                        return e.stop()
                }
            }, e)
        })), function(e, t, n) {
            return c.apply(this, arguments)
        })), u.onError(function(e) {
            e.message.match(/Loading chunk [\s\S]* failed/g), u.history.pending.fullPath
        }), t.a = u
    },
    "420d": function(e, t, n) {
        n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        });
        var a = n("c1fb"),
            r = (n("4328"), function(e) {
                return a.a.getPlan("/api/index/getRoomLotteryNoLogin", {}, e)
            }),
            o = function(e) {
                return a.a.getPlan("/api/index/notice", {}, e)
            },
            i = function(e) {
                return a.a.getPlan("/api/index/online", {}, e)
            },
            s = function(e, t) {
                return a.a.getPlan("/api/index/getExpertList", e, t)
            },
            c = function(e, t) {
                return a.a.getPlan("/api/index/getListByExpert", e, t)
            }
    },
    "459a": function(e, t, n) {
        n.d(t, "a", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n("a481"), n("6b54");
        var a = n("8429"),
            r = n.n(a),
            o = r.a.enc.Utf8.parse("l4bRkSxAiLSGbvxQYsm4CZcmTVoAFtKN"),
            i = r.a.enc.Utf8.parse(""),
            s = function(e) {
                e = r.a.enc.Base64.parse(e), e = r.a.enc.Base64.stringify(e), e = r.a.AES.decrypt(e, o, {
                    iv: i,
                    mode: r.a.mode.CBC,
                    padding: r.a.pad.Pkcs7
                });
                try {
                    return e.toString(r.a.enc.Utf8).toString().replace(/[\r\n]/g, "")
                } catch (e) {
                    window.localStorage.clear()
                }
            },
            c = function(e) {
                e = r.a.enc.Utf8.parse(e), e = r.a.AES.encrypt(e, o, {
                    iv: i,
                    mode: r.a.mode.CBC,
                    padding: r.a.pad.Pkcs7
                });
                return r.a.enc.Base64.stringify(e.ciphertext)
            };
        t.b = {
            decrypt: s,
            encrypt: c
        }
    },
    "56d7": function(B, e, n) {
        n.r(e);
        var a = {},
            r = (n.r(a), n.d(a, "inputFloat", function() {
                return X
            }), {}),
            t = (n.r(r), n.d(r, "parseTime", function() {
                return j
            }), n.d(r, "formatTime", function() {
                return q
            }), n.d(r, "toThousandslsFilter", function() {
                return _
            }), n.d(r, "getFloat", function() {
                return Q
            }), n.d(r, "money", function() {
                return $
            }), n.d(r, "phone", function() {
                return ee
            }), n.d(r, "formatPeriod", function() {
                return te
            }), n("cadf"), n("551c"), n("f751"), n("097d"), n("db4d"), n("5cfb"), n("8bbf")),
            t = n.n(t),
            o = (n("7f7f"), n("ade3")),
            i = (n("96cf"), n("1da1")),
            s = (n("a481"), n("ac6a"), n("28a5"), n("c5f6"), n("01bc")),
            c = n.n(s),
            s = n("78e7"),
            u = n.n(s),
            s = {
                data: function() {
                    return {
                        audioSrc: n("6df9"),
                        receiveFlag: !0
                    }
                },
                watch: {
                    hasNewMessage: function(e) {
                        var t = this;
                        e && this.roomInfo && this.oneChatNum[this.roomInfo.groupName] && (!this.$refs.audio || 1 != this.openChecked && "true" != this.openChecked || (this.$refs.audio.volume = Number(this.openVol), this.$refs.audio.src = c.a, this.$refs.audio.play(), setTimeout(function() {
                            t.setHasNewMessage(!1)
                        }, 3e3)))
                    },
                    roomOpen: function(e) {
                        !e || !this.$refs.audio || 1 != this.openChecked && "true" != this.openChecked || (this.$refs.audio.volume = Number(this.openVol), this.$refs.audio.src = u.a, this.$refs.audio.play())
                    }
                },
                methods: {},
                mounted: function() {
                    var e = this;
                    document.addEventListener("click", function() {
                        e.$refs.audio1.play()
                    }), document.addEventListener("keydown", function() {
                        e.$refs.audio1.play()
                    })
                }
            },
            l = n("2877"),
            s = Object(l.a)(s, function() {
                var e = this._self._c;
                return e("div", [e("audio", {
                    ref: "audio",
                    staticStyle: {
                        visibility: "hidden"
                    },
                    attrs: {
                        id: "audio",
                        src: this.audioSrc
                    }
                }), e("audio", {
                    ref: "audio1",
                    staticStyle: {
                        visibility: "hidden"
                    },
                    attrs: {
                        id: "audio1",
                        src: this.audioSrc
                    }
                })])
            }, [], !1, null, null, null).exports,
            f = n("5880"),
            d = {
                name: "tz",
                data: function() {
                    return {}
                },
                mounted: function() {},
                created: function() {},
                methods: {
                    resback: function() {
                        this.setShowTzIframe(!1)
                    }
                }
            };
        n("0dae");

        function p(i) {
            var s = "";
            ["https://bs.oldkampalass.com", "https://bs.glvroc.com", "https://bs.shun8899.com", "https://bs.shun9988.com", "https://bs.hjqbbs.com"].forEach(function(o) {
                var e = new Image;
                e.src = o + "/svg/loading-spin.svg?_=" + (new Date).getTime(), e.onload = function() {
                    if (!s) {
                        s = o;
                        var e, t = {
                                webSideType: "8"
                            },
                            n = [];
                        for (e in t) n.push(e + "=" + t[e]);
                        var a = n.join("&"),
                            r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                        r.addEventListener("readystatechange", function() {
                            if (4 === this.readyState)
                                if (200 === r.status && r.response) try {
                                    i(JSON.parse(r))
                                } catch (e) {
                                    i(r)
                                } else i(null)
                        }), s += "/admin/appVersionUrlUpgrade/getUrlByType?" + a, r.open("GET", s);
                        r.send(null)
                    }
                }
            })
        }
        Object(l.a)(d, function() {
            var e = this,
                t = e._self._c;
            return t("flex-layout", {
                scopedSlots: e._u([{
                    key: "header",
                    fn: function() {
                        return [t("header-bar", {
                            attrs: {
                                title: "注册",
                                back: !1
                            },
                            on: {
                                back: e.resback
                            }
                        })]
                    },
                    proxy: !0
                }])
            }, [t("div", {
                staticClass: "iframe"
            }, [t("iframe", {
                attrs: {
                    src: e.urlObject && e.urlObject.betUrl
                }
            })])])
        }, [], !1, null, "32881333", null).exports;

        function m(t, e) {
            var n, a = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)), a
        }

        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach(function(e) {
                    Object(o.a)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        n("8e6e"), n("456d");
        d = {
            data: function() {
                return {
                    show: !0,
                    url: ""
                }
            },
            computed: h({}, Object(f.mapState)({
                downappShow: function(e) {
                    return e.global.downappShow
                }
            })),
            mounted: function() {
                this.url = this.downUrl || "https://dsjh.app"
            },
            watch: {
                downUrl: function(e) {
                    this.url = this.downUrl || "https://dsjh.app"
                }
            },
            methods: h(h({}, Object(f.mapMutations)({
                setDownappShow: "global/setDownappShow"
            })), {}, {
                move: function(e) {
                    e.preventDefault()
                },
                openMethods: function() {
                    return "_self" === this.$SesStorage.get("targetData") ? "_self" : "_blank"
                }
            })
        };
        n("d2f8");
        var d = Object(l.a)(d, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    ref: "downloadApp",
                    staticClass: "downloadApp",
                    class: {
                        hide: !t.downappShow && t.url
                    },
                    on: {
                        touchmove: t.move
                    }
                }, [e("div", {
                    staticClass: "phone"
                }, [e("img", {
                    attrs: {
                        src: n("ec54"),
                        alt: ""
                    }
                })]), e("span", {
                    staticClass: "download-tag"
                }, [t._v("下载APP，打开精彩世界！")]), e("a", {
                    staticClass: "app-download",
                    attrs: {
                        href: t.url,
                        target: t.openMethods()
                    }
                }, [t._v("点击下载")]), e("a", {
                    staticClass: "close-wave",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.setDownappShow(!1)
                        }
                    }
                })])
            }, [], !1, null, "37e6ffea", null).exports,
            A = n("1184"),
            d = Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({
                name: "App",
                data: function() {
                    return {
                        planUrlSpeed: "",
                        transitionName: "",
                        first: !0,
                        timerr: null
                    }
                },
                components: {
                    downloadApp: d,
                    vueaudio: s
                },
                watch: {
                    $route: function(e, t) {}
                },
                methods: {},
                beforeDestroy: function() {
                    clearInterval(this.timerr), this.timerr = null
                }
            }, "watch", {
                planUrlSpeed: function(e) {
                    e && this.setPlanUrl(e)
                }
            }), "methods", {
                getPlanURL: function(t) {
                    var n = this;
                    Object(A.b)(t, function(e) {
                        0 != e.code || n.planUrlSpeed || (n.planUrlSpeed = t)
                    })
                },
                getSpeedPlan: function(e) {
                    var t = this;
                    e.split("|").forEach(function(e) {
                        "/" === e.slice(-1) && (e = e.slice(0, -1)), t.getPlanURL(e)
                    })
                },
                setBDcode: function() {
                    var e = document.createElement("script");
                    e.src = "//js.users.51.la/21807419.js", document.body.appendChild(e)
                },
                done: function(e) {
                    var t, n, a = this;
                    try {
                        e ? (t = JSON.parse(e.response.replace(/\n/g, "").replace(/\t/g, "").replace(/\"/g, '"')), n = JSON.parse(t.data.url.replace(/\n/g, "").replace(/\t/g, "").replace(/\"/g, '"')), this.getSpeedPlan(n.planUrl), this.setLiveUrl(n.liveUrl), this.setDownUrl(n.appDownWeb)) : setTimeout(function() {
                            p(a.done)
                        }, 2e3)
                    } catch (e) {}
                }
            }), "mounted", function() {
                this.$bus.$on("refreshLine", function() {})
            }), "created", (P = Object(i.a)(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            p(this.done);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            })), function() {
                return P.apply(this, arguments)
            }));
        n("f667");
        var g = Object(l.a)(d, function() {
                var e = this._self._c;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("router-view"), e("vueaudio", {
                    ref: "music"
                }), "GameHall" === this.$route.name ? e("downloadApp") : this._e()], 1)
            }, [], !1, null, "5c29fe48", null).exports,
            s = n("41cb"),
            i = n("c0d6"),
            d = n("9236"),
            d = n.n(d),
            b = n("77ed"),
            b = n.n(b),
            y = n("4eb5"),
            y = n.n(y),
            x = (n("6b54"), n("4917"), {
                name: "HeaderBar",
                props: {
                    title: {
                        type: String
                    },
                    drop: {
                        type: Boolean,
                        default: !1
                    },
                    back: {
                        type: Boolean,
                        default: !0
                    },
                    left: {
                        type: Boolean,
                        default: !1
                    },
                    titIcon: {
                        type: Boolean,
                        default: !1
                    },
                    iconName: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        rotate: ""
                    }
                },
                methods: {
                    clickTitle: function(e) {
                        this.rotate && "rotate-back" !== this.rotate ? this.rotate = "rotate-back" : this.rotate = "rotate", this.$emit("titleClick", this.rotate)
                    },
                    _back: function() {
                        this.back ? this.$router.back() : this.$emit("back")
                    }
                }
            });
        n("d35f");
        var k = Object(l.a)(x, function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "header-bar",
                    class: {
                        left: e.left
                    }
                }, [t("div", {
                    staticClass: "header-bar-left",
                    on: {
                        click: e._back
                    }
                }, [t("van-icon", {
                    staticClass: "icon",
                    attrs: {
                        name: "arrow-left"
                    }
                })], 1), t("div", {
                    staticClass: "header-bar-title",
                    on: {
                        click: e.clickTitle
                    }
                }, [e.titIcon ? t("span", {
                    staticClass: "titicon",
                    class: e.iconName
                }) : e._e(), e._v("\n     " + e._s(e.title) + "\n     "), t("van-icon", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.drop,
                        expression: "drop"
                    }],
                    class: e.rotate,
                    attrs: {
                        name: "arrow-down"
                    }
                })], 1), t("div", {
                    staticClass: "header-bar-right"
                }, [e._t("default")], 2)])
            }, [], !1, null, "62b4ca20", null).exports,
            v = (n("2ffa"), Object(l.a)({}, function() {
                var e = this._self._c;
                return e("div", {
                    staticClass: "flex-layout"
                }, [e("div", [this._t("header")], 2), e("div", {
                    staticClass: "flex-content"
                }, [this._t("default")], 2)])
            }, [], !1, null, null, null).exports),
            w = "0.2s height linear",
            O = {
                beforeEnter: function(e) {
                    e.style.transition = w, e.dataset || (e.dataset = {}), e.style.height = 0
                },
                enter: function(e) {
                    0 !== e.scrollHeight ? e.style.height = "".concat(e.scrollHeight, "px") : e.style.height = "", e.style.overflow = "hidden"
                },
                afterEnter: function(e) {
                    e.style.transition = "", e.style.height = ""
                },
                beforeLeave: function(e) {
                    e.dataset || (e.dataset = {}), e.style.height = "".concat(e.scrollHeight, "px"), e.style.overflow = "hidden"
                },
                leave: function(e) {
                    0 !== e.scrollHeight && (e.style.transition = w, e.style.height = 0)
                },
                afterLeave: function(e) {
                    e.style.transition = "", e.style.height = ""
                }
            },
            D = {
                name: "CollapseTransition",
                functional: !0,
                render: function(e, t) {
                    t = t.children;
                    return e("transition", {
                        on: O
                    }, t)
                }
            },
            T = "0.2s width ease-in-out",
            E = {
                beforeEnter: function(e) {
                    e.style.transition = T, e.dataset || (e.dataset = {}), e.style.width = 0
                },
                enter: function(e) {
                    0 !== e.scrollwidth ? e.style.width = "".concat(e.scrollwidth, "px") : e.style.width = "", e.style.overflow = "hidden"
                },
                afterEnter: function(e) {
                    e.style.transition = "", e.style.width = ""
                },
                beforeLeave: function(e) {
                    e.dataset || (e.dataset = {}), e.style.width = "".concat(e.scrollwidth, "px"), e.style.overflow = "hidden"
                },
                leave: function(e) {
                    0 !== e.scrollwidth && (e.style.transition = T, e.style.width = 0)
                },
                afterLeave: function(e) {
                    e.style.transition = "", e.style.width = ""
                }
            },
            S = {
                name: "CardTransition",
                functional: !0,
                render: function(e, t) {
                    t = t.children;
                    return e("transition", {
                        on: E
                    }, t)
                }
            },
            C = n("1fba"),
            x = {
                props: {
                    probeType: {
                        type: Number,
                        default: 1
                    },
                    click: {
                        type: Boolean,
                        default: !0
                    },
                    tap: {
                        type: Boolean,
                        default: !1
                    },
                    data: {
                        type: Array || Object,
                        default: null
                    },
                    listenScroll: {
                        type: Boolean,
                        default: !1
                    },
                    pullup: {
                        type: Boolean,
                        default: !1
                    },
                    beforeScroll: {
                        type: Boolean,
                        default: !1
                    },
                    refreshDelay: {
                        type: Number,
                        default: 20
                    }
                },
                mounted: function() {
                    var e = this;
                    setTimeout(function() {
                        e._initScroll()
                    }, 20)
                },
                methods: {
                    _initScroll: function() {
                        var t, e = this;
                        this.$refs.wrapper && (this.scroll = new C.a(this.$refs.wrapper, {
                            probeType: this.probeType,
                            click: this.click,
                            bounce: !1,
                            tap: this.tap
                        }), this.listenScroll && (t = this).scroll.on("scroll", function(e) {
                            t.$emit("scroll", e)
                        }), this.pullup && this.scroll.on("scrollEnd", function() {
                            e.scroll.y <= e.scroll.maxScrollY + 50 && e.$emit("scrollToEnd")
                        }), this.beforeScroll) && this.scroll.on("beforeScrollStart", function() {
                            e.$emit("beforeScroll")
                        })
                    },
                    enable: function() {
                        this.scroll && this.scroll.enable()
                    },
                    disable: function() {
                        this.scroll && this.scroll.disable()
                    },
                    refresh: function() {
                        this.scroll && this.scroll.refresh()
                    },
                    scrollTo: function() {
                        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
                    },
                    scrollToElement: function() {
                        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
                    },
                    scrollToBottom: function() {
                        this.scroll && this.scroll.scrollTo(0, this.scroll.maxScrollY)
                    }
                },
                watch: {
                    data: function() {
                        var e = this;
                        setTimeout(function() {
                            e.refresh()
                        }, this.refreshDelay)
                    }
                }
            },
            F = Object(l.a)(x, function() {
                return (0, this._self._c)("div", {
                    ref: "wrapper"
                }, [this._t("default")], 2)
            }, [], !1, null, null, null).exports,
            x = {
                data: function() {
                    return {}
                },
                watch: {},
                methods: {
                    reloadView: function() {
                        window.location.reload()
                    }
                }
            };
        n("2e56");
        var H = Object(l.a)(x, function() {
                var e = this._self._c;
                return e("div", [e("img", {
                    staticClass: "reload",
                    attrs: {
                        src: n("3c0e")
                    },
                    on: {
                        click: this.reloadView
                    }
                })])
            }, [], !1, null, "e4d5d22c", null).exports,
            L = n("3089"),
            x = n("94f1"),
            I = n.n(x),
            R = n("57df"),
            x = {
                props: {
                    opacity: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    svgFun: function() {
                        var e = {
                            container: document.getElementById("lottie"),
                            renderer: "svg",
                            loop: !0,
                            autoplay: !0,
                            animationData: R
                        };
                        I.a.loadAnimation(e)
                    },
                    setLoading: function() {
                        var e = this,
                            t = document.getElementById("loading-number"),
                            n = 1;
                        this.loadTimer && clearInterval(this.loadTimer), this.loadTimer = setInterval(function() {
                            t.innerText = n + "%", 99 <= n && (n = 99, t.innerText = n + "%", clearInterval(e.loadTimer)), n += 2
                        }, 180)
                    }
                },
                mounted: function() {
                    var e = this;
                    this.svgFun(), this.$nextTick(function() {
                        e.setLoading()
                    })
                }
            };
        n("99d9");
        var P, G = Object(l.a)(x, function() {
                var e = this._self._c;
                return e("div", {
                    staticClass: "loading-con",
                    style: this.opacity ? "background-color: rgba(0,0,0,0)" : ""
                }, [e("div", {
                    attrs: {
                        id: "lottie"
                    }
                }), e("div", {
                    attrs: {
                        id: "loading-number"
                    }
                }, [this._v("0%")])])
            }, [], !1, null, "5cefb758", null).exports,
            W = n("ed08"),
            U = n("c1fb"),
            x = n("a78e"),
            z = n.n(x),
            K = {
                sc: {
                    "冠亚军和": "冠亚",
                    "冠、亚军和": "冠亚",
                    "冠军": "1",
                    "亚军": "2",
                    "第三名": "3",
                    "第四名": "4",
                    "第五名": "5",
                    "第六名": "6",
                    "第七名": "7",
                    "第八名": "8",
                    "第九名": "9",
                    "第十名": "0",
                    "冠亚大": "大",
                    "冠亚小": "小",
                    "冠亚单": "单",
                    "冠亚双": "双",
                    10: "0"
                },
                ssc: {
                    "第一球": "1",
                    "第二球": "2",
                    "第三球": "3",
                    "第四球": "4",
                    "第五球": "5",
                    "总和-龙虎和": "总和",
                    "总和、龙虎和": "总和",
                    "总和大": "大",
                    "总和小": "小",
                    "总和单": "单",
                    "总和双": "双"
                },
                pcdd: {},
                k3: {
                    11: "1",
                    22: "2",
                    33: "3",
                    44: "4",
                    55: "5",
                    66: "6",
                    111: "1",
                    222: "2",
                    333: "3",
                    444: "4",
                    555: "5",
                    666: "6",
                    "4点": "4",
                    "5点": "5",
                    "6点": "6",
                    "7点": "7",
                    "8点": "8",
                    "9点": "9",
                    "10点": "10",
                    "11点": "11",
                    "12点": "12",
                    "13点": "13",
                    "14点": "14",
                    "15点": "15",
                    "16点": "16",
                    "17点": "17"
                }
            };

        function M(t, e) {
            var n, a = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)), a
        }

        function N(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? M(Object(n), !0).forEach(function(e) {
                    Object(o.a)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var Z = {
                data: function() {
                    return {}
                },
                computed: N(N({}, Object(f.mapState)({
                    closeBtn: function(e) {
                        return e.global.closeBtn
                    },
                    openChecked: function(e) {
                        return e.global.openChecked
                    },
                    noticeChecked: function(e) {
                        return e.global.noticeChecked
                    },
                    openVol: function(e) {
                        return e.global.openVol
                    },
                    noticeVol: function(e) {
                        return e.global.noticeVol
                    },
                    roomOpen: function(e) {
                        return e.global.roomOpen
                    },
                    client: function(e) {
                        return e.global.client
                    },
                    phoneFlag: function(e) {
                        return e.global.phoneFlag
                    },
                    banners: function(e) {
                        return e.global.banners
                    },
                    smallBanners: function(e) {
                        return e.global.smallBanners
                    },
                    openfireUser: function(e) {
                        return e.home.openfireUser
                    },
                    chatList: function(e) {
                        return e.home.chatList
                    },
                    oneChatList: function(e) {
                        return e.home.oneChatList
                    },
                    lottery: function(e) {
                        return e.home.lottery
                    },
                    lotteryRanDom: function(e) {
                        return e.home.lotteryRanDom
                    },
                    lotteryOpenClose: function(e) {
                        return e.home.lotteryOpenClose
                    },
                    oneChatNum: function(e) {
                        return e.home.oneChatNum
                    },
                    roomLotteryInfo: function(e) {
                        return e.home.roomLotteryInfo
                    },
                    roomGame: function(e) {
                        return e.home.roomGame
                    },
                    everyCome: function(e) {
                        return e.home.everyCome
                    },
                    newOpen: function(e) {
                        return e.home.newOpen
                    },
                    lockedStatus: function(e) {
                        return e.home.lockedStatus
                    },
                    urlObject: function(e) {
                        return e.home.urlObject
                    },
                    planUrl: function(e) {
                        return e.home.planUrl
                    },
                    downUrl: function(e) {
                        return e.home.downUrl
                    },
                    liveUrl: function(e) {
                        return e.home.liveUrl
                    },
                    showTzIframe: function(e) {
                        return e.home.showTzIframe
                    }
                })), {}, {
                    $lotteryObj: function() {
                        return {
                            1: "sc",
                            2: "ssc",
                            5: "pcdd",
                            6: "k3"
                        }
                    },
                    $betkeyObj: function() {
                        return K
                    }
                }),
                methods: N(N(N({}, Object(f.mapActions)({
                    getRoomLotteryInfo: "home/getRoomLotteryInfo"
                })), Object(f.mapMutations)({
                    setOpenChecked: "global/setOpenChecked",
                    setOpenVol: "global/setOpenVol",
                    setNoticeVol: "global/setNoticeVol",
                    setRoomOpen: "global/setRoomOpen",
                    setClient: "global/setClient",
                    setDownappShow: "global/setDownappShow",
                    setPhoneFlag: "global/setPhoneFlag",
                    setBanners: "global/setBanners",
                    setSmallBanners: "global/setSmallBanners",
                    changeMessage: "home/changeMessage",
                    setLottery: "home/setLottery",
                    setLotteryOpenClose: "home/setLotteryOpenClose",
                    changeNewOpen: "home/changeNewOpen",
                    setLockedStatus: "home/setLockedStatus",
                    setPlanUrl: "home/setPlanUrl",
                    setLiveUrl: "home/setLiveUrl",
                    setDownUrl: "home/setDownUrl",
                    setShowTzIframe: "home/setShowTzIframe",
                    setUrlObject: "home/setUrlObject"
                })), {}, {
                    $formatNumber: function(e) {
                        return parseInt(e)
                    }
                })
            },
            Y = n("53ca"),
            X = {
                bind: function(e, c) {
                    var u = "input" === e.nodeName.toLowerCase() ? e : e.getElementsByTagName("input")[0],
                        l = !1;
                    u && u.addEventListener("input", function() {
                        if (l) l = !1;
                        else if ("" !== (o = u.value.replace(/[^0-9\.]/gi, ""))) {
                            var e = o.split(".");
                            if (c.expression) try {
                                var t, n, a, r, o, i, s = c.value;
                                "object" === Object(Y.a)(s) && (t = s.limit, n = s.min, a = s.max, void 0 !== t && (o = 1 < e.length ? (r = (r = e[1].length) < t ? r : t, 0 < t ? +e[0] + (1 < e.length ? ".".concat(e[1].substr(0, r)) : "") : +e[0] + "") : +o + ""), "number" == typeof n && +o < +n && (o = n + ""), "number" == typeof a && +a < +o && (o = a + ""), i = new Event("input", {
                                    bubbles: !0
                                }), u.value = o, l = !0, u.dispatchEvent(i))
                            } catch (e) {
                                u.value = o
                            }
                        }
                    })
                }
            },
            x = n("72f9"),
            J = n.n(x);

        function j(e, t) {
            var a;
            return 0 === arguments.length ? null : (t = t || "{y}-{m}-{d} {h}:{i}:{s}", e = "object" === Object(Y.a)(e) ? e : (10 === ("" + e).length && (e = 1e3 * parseInt(e)), new Date(e)), a = {
                y: e.getFullYear(),
                m: e.getMonth() + 1,
                d: e.getDate(),
                h: e.getHours(),
                i: e.getMinutes(),
                s: e.getSeconds(),
                a: e.getDay()
            }, t.replace(/{(y|m|d|h|i|s|a)+}/g, function(e, t) {
                var n = a[t];
                return "a" === t ? ["日", "一", "二", "三", "四", "五", "六"][n] : (n = 0 < e.length && n < 10 ? "0" + n : n) || 0
            }))
        }

        function q(e, t) {
            e = 1e3 * +e;
            var n = new Date(e),
                a = (Date.now() - n) / 1e3;
            return a < 30 ? "刚刚" : a < 3600 ? Math.ceil(a / 60) + "分钟前" : a < 86400 ? Math.ceil(a / 3600) + "小时前" : a < 172800 ? "1天前" : t ? j(e, t) : n.getMonth() + 1 + "月" + n.getDate() + "日" + n.getHours() + "时" + n.getMinutes() + "分"
        }

        function _(e) {
            return (+e || 0).toString().replace(/^-?\d+/g, function(e) {
                return e.replace(/(?=(?!\b)(\d{3})+$)/g, ",")
            })
        }

        function Q(e, t) {
            return (t = t ? parseInt(t) : 0) <= 0 ? Math.round(e) : (e = Math.round(e * Math.pow(10, t)) / Math.pow(10, t), e = Number(e).toFixed(t))
        }

        function $() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2;
            return J()(e, {
                separator: ",",
                precision: t
            }).format()
        }

        function ee() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "13527710025";
            return e ? e.substring(0, 7) + "****" : ""
        }

        function te(e) {
            return e ? 7 <= (e += "").length ? e.substr(-5) : e : "00000"
        }
        var V = n("68fe"),
            ne = n("60fe"),
            ae = n("459a"),
            f = {
                install: function(t) {
                    t.component("JsonLoading", G), t.component("header-bar", k), t.component("flex-layout", v), t.component("coll-transition", D), t.component("card-transition", S), t.component("base-scroll", F), t.component("reload-view", H), Object.keys(a).forEach(function(e) {
                        return t.directive(e, a[e])
                    }), Object.keys(r).forEach(function(e) {
                        return t.filter(e, r[e])
                    }), t.prototype.$toast = t.$toast = L.Toast, t.prototype.$dialog = t.$dialog = L.Dialog, t.prototype.$isIos = function() {
                        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
                    }, t.prototype.$utils = W.a, t.prototype.$http = U.a;
                    var e = new V.a,
                        n = new V.a("sessionStorage");
                    t.prototype.$Storage = e, t.prototype.$SesStorage = n, t.prototype.$constant = ne, t.prototype.$Cookie = z.a, t.mixin(Z), t.prototype.$bus = t.$bus = new t, t.prototype.$deepclone = function(e) {
                        return JSON.parse(JSON.stringify(e))
                    }, t.prototype.$aes = ae.b, t.prototype.$formatSevenDate = function() {
                        var e = moment().add(-1, "days").format("YYYY-MM-DD"),
                            t = moment().format("YYYY-MM-DD"),
                            n = (new Date).getTime(),
                            a = moment("".concat(t, " 07:00:00")).format();
                        return n < new Date(a).getTime() ? new Date(e) : new Date(t)
                    }, t.prototype.$genId = function() {
                        return "id-".concat(Date.now(), "-").concat(Math.random().toString(16).substr(2))
                    }
                }
            },
            x = (n("40f5"), {
                name: "loading",
                data: function() {
                    return {
                        show: !1
                    }
                }
            });
        n("f49b");
        var re = Object(l.a)(x, function() {
                var t = this,
                    e = t._self._c;
                return e("van-popup", {
                    attrs: {
                        "close-on-click-overlay": !1,
                        overlayStyle: {
                            "background-color": "transparent"
                        }
                    },
                    model: {
                        value: t.show,
                        callback: function(e) {
                            t.show = e
                        },
                        expression: "show"
                    }
                }, [e("div", {
                    staticClass: "loadingWrap"
                }, [t.show ? e("van-loading", {
                    attrs: {
                        vertical: "",
                        "text-color": "#fff"
                    }
                }, [t._v("加载中...")]) : t._e()], 1)])
            }, [], !1, null, "995957a8", null).exports,
            l = {
                install: function(e) {
                    var t = new(e.extend(re));
                    t.$mount(document.createElement("div")), document.body.appendChild(t.$el), e.prototype.$loading = {
                        show: function() {
                            t.show = !0
                        },
                        hide: function() {
                            t.show = !1
                        }
                    }
                },
                show: function() {}
            },
            x = (n("52b6"), n("dbe5")),
            x = n.n(x),
            oe = n("10a7"),
            l = (window.__axiosPromiseTime = [], t.a.use(l), t.a.use(oe.a), t.a.use(x.a), t.a.use(vant.Lazyload), t.a.use(y.a), t.a.use(b.a), t.a.use(d.a, {
                preLoad: 1.3,
                error: n("fa93"),
                loading: n("d8ab"),
                attempt: 1
            }), t.a.use(f), new t.a({
                router: s.a,
                store: i.a,
                render: function(e) {
                    return e(g)
                }
            }).$mount("#app"));
        window.vm = l, e.default = l
    },
    "57df": function(e) {
        e.exports = JSON.parse('{"v":"5.6.10","fr":25,"ip":0,"op":185,"w":140,"h":140,"nm":"合成 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"初始 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[128,128],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.529411792755,0.705882370472,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"初始","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":180,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":88,"op":519,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"遮罩蒙版 4","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[138,138],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.847058832645,0.847058832645,0.847058832645,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"遮罩蒙版","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":519,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"水流 3","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[-660]},{"t":180,"s":[-490]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.556]},"o":{"x":[0.59],"y":[0]},"t":100,"s":[486.5]},{"t":180,"s":[326.5]}],"ix":4}},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[0,0]],"o":[[0,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[0,0],[0,0]],"v":[[-1136,345.5],[-1136,-340.49],[-1118.25,-345.5],[-1100.5,-340.49],[-1082.75,-335.49],[-1065,-340.49],[-1047.25,-345.5],[-1029.5,-340.49],[-1011.75,-335.49],[-994,-340.49],[-976.25,-345.5],[-958.5,-340.49],[-940.75,-335.49],[-923,-340.49],[-905.25,-345.5],[-887.5,-340.49],[-869.75,-335.49],[-852,-340.49],[-834.25,-345.5],[-816.5,-340.49],[-798.75,-335.49],[-781,-340.49],[-763.25,-345.5],[-745.5,-340.49],[-727.75,-335.49],[-710,-340.49],[-692.25,-345.5],[-674.5,-340.49],[-656.75,-335.49],[-639,-340.49],[-621.25,-345.5],[-603.5,-340.49],[-585.75,-335.49],[-568,-340.49],[-550.25,-345.5],[-532.5,-340.49],[-514.75,-335.49],[-497,-340.49],[-479.25,-345.5],[-461.5,-340.49],[-443.75,-335.49],[-426,-340.49],[-408.25,-345.5],[-390.5,-340.49],[-372.75,-335.49],[-355,-340.49],[-337.25,-345.5],[-319.5,-340.49],[-301.75,-335.49],[-284,-340.49],[-266.25,-345.5],[-248.5,-340.49],[-230.75,-335.49],[-213,-340.49],[-195.25,-345.5],[-177.5,-340.49],[-159.75,-335.49],[-142,-340.49],[-124.25,-345.5],[-106.5,-340.49],[-88.75,-335.49],[-71,-340.49],[-53.25,-345.5],[-35.5,-340.49],[-17.75,-335.49],[0,-340.49],[17.75,-345.5],[35.5,-340.49],[53.25,-335.49],[71,-340.49],[88.75,-345.5],[106.5,-340.49],[124.25,-335.49],[142,-340.49],[159.75,-345.5],[177.5,-340.49],[195.25,-335.49],[213,-340.49],[230.75,-345.5],[248.5,-340.49],[266.25,-335.49],[284,-340.49],[301.75,-345.5],[319.5,-340.49],[337.25,-335.49],[355,-340.49],[372.75,-345.5],[390.5,-340.49],[408.25,-335.49],[426,-340.49],[443.75,-345.5],[461.5,-340.49],[479.25,-335.49],[497,-340.49],[514.75,-345.5],[532.5,-340.49],[550.25,-335.49],[568,-340.49],[585.75,-345.5],[603.5,-340.49],[621.25,-335.49],[639,-340.49],[656.75,-345.5],[674.5,-340.49],[692.25,-335.49],[710,-340.49],[727.75,-345.5],[745.5,-340.49],[763.25,-335.49],[781,-340.49],[798.75,-345.5],[816.5,-340.49],[834.25,-335.49],[852,-340.49],[869.75,-345.5],[887.5,-340.49],[905.25,-335.49],[923,-340.49],[940.75,-345.5],[958.5,-340.49],[976.25,-335.49],[994,-340.49],[1011.75,-345.5],[1029.5,-340.49],[1047.25,-335.49],[1065,-340.49],[1082.75,-345.5],[1100.5,-340.49],[1118.25,-335.49],[1136,-340.49],[1136,345.5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"水流","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":65,"op":188,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"形状结合","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":53,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":177,"s":[100]},{"t":180,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,71,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[83,83,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[22.5,-16.352],[22.5,26.418],[0.01,39.998],[-22.5,26.418],[-22.5,-16.352]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[20,-13.836],[-20,-13.836],[-20,24.994],[0.01,37.064],[20,24.994]],"c":true},"ix":2},"nm":"路径 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[19,-12.83],[19,24.23],[0,35.98],[-19,24.53],[-19,-12.83]],"c":true},"ix":2},"nm":"路径 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.12,-1.54],[0,0],[1.59,-0.08],[0.34,1.28],[-0.34,0],[-0.06,1.62],[1.31,0.08],[-0.02,-2.3],[-2.73,-0.08],[0.34,4.95],[0,0],[-1.48,-0.08]],"o":[[0,0],[0,0],[1.65,-0.08],[0,0],[-0.05,2.13],[-1.32,-0.17],[0.4,0.34],[1.02,-0.08],[-0.06,-1.76],[-1.31,0.08],[0.15,3.16],[3.82,0.17],[0,0],[-0.12,-1.54],[0,0]],"v":[[16.215,-4.257],[8.185,-4.257],[8.185,-2.977],[10.485,-0.797],[10.485,13.793],[8.015,17.113],[5.535,14.943],[6.645,15.323],[8.265,12.763],[6.215,9.953],[4.245,13.533],[8.605,18.393],[14.165,11.233],[14.165,-0.797],[16.215,-2.977]],"c":true},"ix":2},"nm":"路径 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.05,-1.57],[0,0],[1.42,-0.09],[0,0],[0,0],[0,0],[0,2.05],[0,0],[0,0],[0,0],[0,0],[0,0],[1.37,0.08],[0,0],[0,0],[0,0],[-0.11,1.54],[0,0],[-1.54,-0.08],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[1.37,-0.08],[0,0],[0,1.97],[0,0],[0,0],[0,0],[-1.48,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.11,1.54],[0,0],[0,0],[0,0],[-1.54,0.08],[0,0],[-0.11,-1.54],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-9.137,-4.257],[-15.457,-4.257],[-15.457,-2.977],[-13.487,-0.847],[-13.487,13.913],[-15.627,16.993],[-15.627,18.273],[-9.987,18.273],[-9.987,16.993],[-12.207,13.913],[-12.207,-1.827],[-8.197,18.273],[-6.317,18.273],[-2.127,-1.827],[-2.127,14.813],[-4.097,16.993],[-4.097,18.273],[3.513,18.273],[3.513,16.993],[1.373,14.813],[1.373,-0.797],[3.513,-2.977],[3.513,-4.257],[-2.897,-4.257],[-5.977,11.003],[-6.057,11.003]],"c":true},"ix":2},"nm":"路径 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-25,5.786],[-25,10.816],[-50,10.816],[-53,5.786]],"c":true},"ix":2},"nm":"路径 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[53,5.786],[50,10.816],[25,10.816],[25,5.786]],"c":true},"ix":2},"nm":"路径 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-25,-2.264],[-25,2.766],[-54,2.766],[-57,-2.264]],"c":true},"ix":2},"nm":"路径 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[57,-2.264],[54,2.766],[25,2.766],[25,-2.264]],"c":true},"ix":2},"nm":"路径 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-25,-10.314],[-25,-5.284],[-58,-5.284],[-61,-10.314]],"c":true},"ix":2},"nm":"路径 10","mn":"ADBE Vector Shape - Group","hd":false},{"ind":10,"ty":"sh","ix":11,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[61,-10.314],[58,-5.284],[25,-5.284],[25,-10.314]],"c":true},"ix":2},"nm":"路径 11","mn":"ADBE Vector Shape - Group","hd":false},{"ind":11,"ty":"sh","ix":12,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-28.193,-40],[-10.253,-28.64],[-1.023,-36.31],[-1.023,-19.42],[-19.113,-19.42]],"c":true},"ix":2},"nm":"路径 12","mn":"ADBE Vector Shape - Group","hd":false},{"ind":12,"ty":"sh","ix":13,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[27.977,-40],[18.897,-19.42],[0.807,-19.42],[0.807,-36.31],[10.037,-28.64]],"c":true},"ix":2},"nm":"路径 13","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"合并路径 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状结合","np":15,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":188,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"遮罩蒙版 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[138,138],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.847058832645,0.847058832645,0.847058832645,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"遮罩蒙版","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":568,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"水流 2","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":38,"s":[-660]},{"t":93,"s":[-490]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.694]},"o":{"x":[0.6],"y":[0]},"t":38,"s":[486.5]},{"t":93,"s":[326.5]}],"ix":4}},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[0,0]],"o":[[0,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[0,0],[0,0]],"v":[[-1136,345.5],[-1136,-340.49],[-1118.25,-345.5],[-1100.5,-340.49],[-1082.75,-335.49],[-1065,-340.49],[-1047.25,-345.5],[-1029.5,-340.49],[-1011.75,-335.49],[-994,-340.49],[-976.25,-345.5],[-958.5,-340.49],[-940.75,-335.49],[-923,-340.49],[-905.25,-345.5],[-887.5,-340.49],[-869.75,-335.49],[-852,-340.49],[-834.25,-345.5],[-816.5,-340.49],[-798.75,-335.49],[-781,-340.49],[-763.25,-345.5],[-745.5,-340.49],[-727.75,-335.49],[-710,-340.49],[-692.25,-345.5],[-674.5,-340.49],[-656.75,-335.49],[-639,-340.49],[-621.25,-345.5],[-603.5,-340.49],[-585.75,-335.49],[-568,-340.49],[-550.25,-345.5],[-532.5,-340.49],[-514.75,-335.49],[-497,-340.49],[-479.25,-345.5],[-461.5,-340.49],[-443.75,-335.49],[-426,-340.49],[-408.25,-345.5],[-390.5,-340.49],[-372.75,-335.49],[-355,-340.49],[-337.25,-345.5],[-319.5,-340.49],[-301.75,-335.49],[-284,-340.49],[-266.25,-345.5],[-248.5,-340.49],[-230.75,-335.49],[-213,-340.49],[-195.25,-345.5],[-177.5,-340.49],[-159.75,-335.49],[-142,-340.49],[-124.25,-345.5],[-106.5,-340.49],[-88.75,-335.49],[-71,-340.49],[-53.25,-345.5],[-35.5,-340.49],[-17.75,-335.49],[0,-340.49],[17.75,-345.5],[35.5,-340.49],[53.25,-335.49],[71,-340.49],[88.75,-345.5],[106.5,-340.49],[124.25,-335.49],[142,-340.49],[159.75,-345.5],[177.5,-340.49],[195.25,-335.49],[213,-340.49],[230.75,-345.5],[248.5,-340.49],[266.25,-335.49],[284,-340.49],[301.75,-345.5],[319.5,-340.49],[337.25,-335.49],[355,-340.49],[372.75,-345.5],[390.5,-340.49],[408.25,-335.49],[426,-340.49],[443.75,-345.5],[461.5,-340.49],[479.25,-335.49],[497,-340.49],[514.75,-345.5],[532.5,-340.49],[550.25,-335.49],[568,-340.49],[585.75,-345.5],[603.5,-340.49],[621.25,-335.49],[639,-340.49],[656.75,-345.5],[674.5,-340.49],[692.25,-335.49],[710,-340.49],[727.75,-345.5],[745.5,-340.49],[763.25,-335.49],[781,-340.49],[798.75,-345.5],[816.5,-340.49],[834.25,-335.49],[852,-340.49],[869.75,-345.5],[887.5,-340.49],[905.25,-335.49],[923,-340.49],[940.75,-345.5],[958.5,-340.49],[976.25,-335.49],[994,-340.49],[1011.75,-345.5],[1029.5,-340.49],[1047.25,-335.49],[1065,-340.49],[1082.75,-345.5],[1100.5,-340.49],[1118.25,-335.49],[1136,-340.49],[1136,345.5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.529411764706,0.705882352941,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"水流","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":24,"op":188,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"遮罩蒙版 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[138,138],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.847058832645,0.847058832645,0.847058832645,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"遮罩蒙版","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":519,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"水流","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[-940]},{"t":92,"s":[-770]}],"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.678]},"o":{"x":[0.6],"y":[0]},"t":34,"s":[486.5]},{"t":92,"s":[326.5]}],"ix":4}},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[-5.92,0],[-5.92,-3.34],[-5.92,0],[-5.92,3.33],[0,0]],"o":[[0,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[5.92,-3.34],[5.92,0],[5.92,3.33],[5.92,0],[0,0],[0,0]],"v":[[-1136,345.5],[-1136,-340.49],[-1118.25,-345.5],[-1100.5,-340.49],[-1082.75,-335.49],[-1065,-340.49],[-1047.25,-345.5],[-1029.5,-340.49],[-1011.75,-335.49],[-994,-340.49],[-976.25,-345.5],[-958.5,-340.49],[-940.75,-335.49],[-923,-340.49],[-905.25,-345.5],[-887.5,-340.49],[-869.75,-335.49],[-852,-340.49],[-834.25,-345.5],[-816.5,-340.49],[-798.75,-335.49],[-781,-340.49],[-763.25,-345.5],[-745.5,-340.49],[-727.75,-335.49],[-710,-340.49],[-692.25,-345.5],[-674.5,-340.49],[-656.75,-335.49],[-639,-340.49],[-621.25,-345.5],[-603.5,-340.49],[-585.75,-335.49],[-568,-340.49],[-550.25,-345.5],[-532.5,-340.49],[-514.75,-335.49],[-497,-340.49],[-479.25,-345.5],[-461.5,-340.49],[-443.75,-335.49],[-426,-340.49],[-408.25,-345.5],[-390.5,-340.49],[-372.75,-335.49],[-355,-340.49],[-337.25,-345.5],[-319.5,-340.49],[-301.75,-335.49],[-284,-340.49],[-266.25,-345.5],[-248.5,-340.49],[-230.75,-335.49],[-213,-340.49],[-195.25,-345.5],[-177.5,-340.49],[-159.75,-335.49],[-142,-340.49],[-124.25,-345.5],[-106.5,-340.49],[-88.75,-335.49],[-71,-340.49],[-53.25,-345.5],[-35.5,-340.49],[-17.75,-335.49],[0,-340.49],[17.75,-345.5],[35.5,-340.49],[53.25,-335.49],[71,-340.49],[88.75,-345.5],[106.5,-340.49],[124.25,-335.49],[142,-340.49],[159.75,-345.5],[177.5,-340.49],[195.25,-335.49],[213,-340.49],[230.75,-345.5],[248.5,-340.49],[266.25,-335.49],[284,-340.49],[301.75,-345.5],[319.5,-340.49],[337.25,-335.49],[355,-340.49],[372.75,-345.5],[390.5,-340.49],[408.25,-335.49],[426,-340.49],[443.75,-345.5],[461.5,-340.49],[479.25,-335.49],[497,-340.49],[514.75,-345.5],[532.5,-340.49],[550.25,-335.49],[568,-340.49],[585.75,-345.5],[603.5,-340.49],[621.25,-335.49],[639,-340.49],[656.75,-345.5],[674.5,-340.49],[692.25,-335.49],[710,-340.49],[727.75,-345.5],[745.5,-340.49],[763.25,-335.49],[781,-340.49],[798.75,-345.5],[816.5,-340.49],[834.25,-335.49],[852,-340.49],[869.75,-345.5],[887.5,-340.49],[905.25,-335.49],[923,-340.49],[940.75,-345.5],[958.5,-340.49],[976.25,-335.49],[994,-340.49],[1011.75,-345.5],[1029.5,-340.49],[1047.25,-335.49],[1065,-340.49],[1082.75,-345.5],[1100.5,-340.49],[1118.25,-335.49],[1136,-340.49],[1136,345.5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.326057942708,0.729159246706,0.863526348039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"水流","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":174,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"水滴","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[100]},{"t":43,"s":[2]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.846},"o":{"x":1,"y":0},"t":31,"s":[70.5,6.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":43,"s":[70.5,126.5,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":34,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-2],[0,2]],"c":false}]},{"t":43,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-2],[0,12.5]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.529411792755,0.705882370472,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"水滴","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":27,"op":519,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"初始","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[70,70,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[128,128],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.529411792755,0.705882370472,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"初始","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.758]},"o":{"x":[0.915],"y":[0]},"t":0,"s":[0]},{"t":29,"s":[50]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.758]},"o":{"x":[0.915],"y":[0]},"t":0,"s":[100]},{"t":29,"s":[50]}],"ix":2},"o":{"a":0,"k":180,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":519,"st":0,"bm":0}],"markers":[]}')
    },
    5880: function(e, t) {
        e.exports = Vuex
    },
    "59e1": function(e, t, n) {},
    "60fe": function(e, t, n) {
        n.r(t), n.d(t, "TOKEN", function() {
            return a
        }), n.d(t, "XTOKEN", function() {
            return r
        }), n.d(t, "BASE_INFO", function() {
            return o
        }), n.d(t, "MESSAGE_LIST", function() {
            return i
        }), n.d(t, "LOTTERY", function() {
            return s
        }), n.d(t, "ONE_CHAT_LIST", function() {
            return c
        }), n.d(t, "ONE_CHAT_NUM", function() {
            return u
        }), n.d(t, "CRYPTO", function() {
            return l
        }), n.d(t, "OPEN_CHECK", function() {
            return f
        }), n.d(t, "NOTICE_CHECK", function() {
            return d
        }), n.d(t, "OPEN_VOL", function() {
            return p
        }), n.d(t, "NOTICE_VOL", function() {
            return m
        }), n.d(t, "ROOM_LOTTERY_INFO", function() {
            return h
        }), n.d(t, "CHAT_TYPE", function() {
            return A
        }), n.d(t, "LOTTERYPLAY", function() {
            return g
        }), n.d(t, "PLANURL", function() {
            return b
        }), n.d(t, "LIVEURL", function() {
            return y
        }), n.d(t, "DOWNURL", function() {
            return x
        });
        var a = "WEB_PLAN_AUTH",
            r = "WEB_PLAN_XTOKEN",
            o = "WEB_PLAN_BASE_INFO",
            i = "WEB_PLAN_MESSAGE_LIST",
            s = "WEB_PLAN_LOTTERY",
            c = "WEB_PLAN_ONE_CHAT_LIST",
            u = "WEB_PLAN_ONE_CHAT_NUM",
            l = "WEB_PLAN_CRYPTO",
            f = "WEB_PLAN_OPEN_CHECK",
            d = "WEB_PLAN_NOTICE_CHECK",
            p = "WEB_PLAN_OPEN_VOL",
            m = "WEB_PLAN_NOTICE_VOL",
            h = "WEB_PLAN_ROOM_LOTTERY_INFO",
            A = "WEB_PLAN_CHAT_TYPE",
            g = "WEB_PLAN_LOTTERYPLAY",
            b = "WEB_PLAN_PLANURL",
            y = "WEB_PLAN_LIVEURL",
            x = "WEB_PLAN_DOWNURL"
    },
    6389: function(e, t) {
        e.exports = VueRouter
    },
    "68fe": function(e, t, n) {
        n("8e6e"), n("ac6a"), n("456d");
        var a = n("53ca"),
            r = n("ade3"),
            o = n("2909"),
            i = n("d4ec"),
            s = n("bee2"),
            c = n("459a");

        function u(t, e) {
            var n, a = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)), a
        }
        n = Object(s.a)(function e(t) {
            Object(i.a)(this, e), this.type = "localStorage"
        }, [{
            key: "get",
            value: function(t) {
                t = localStorage.getItem(t) || "";
                try {
                    var e = JSON.parse(Object(c.a)(t)),
                        n = Array.isArray(e) ? Object(o.a)(e) : e instanceof Object ? function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? u(Object(n), !0).forEach(function(e) {
                                    Object(r.a)(t, e, n[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                })
                            }
                            return t
                        }({}, e) : Object(c.a)(t)
                } catch (e) {
                    n = Object(c.a)(t)
                }
                return n
            }
        }, {
            key: "set",
            value: function(e, t) {
                t = "string" == typeof t ? t || "" : "object" === Object(a.a)(t) ? JSON.stringify(t) || "" : t;
                return localStorage.setItem(e, Object(c.c)(t))
            }
        }, {
            key: "remove",
            value: function(e) {
                return localStorage.removeItem(e)
            }
        }, {
            key: "clear",
            value: function() {
                localStorage.clear()
            }
        }]);
        t.a = n
    },
    "6df9": function(e, t, n) {
        e.exports = n.p + "static/media/silence.2e5bf17b.mp3"
    },
    "78e7": function(e, t, n) {
        e.exports = n.p + "static/media/kaijiang.7364e6e1.mp3"
    },
    "8bbf": function(e, t) {
        e.exports = Vue
    },
    9236: function(e, t) {
        e.exports = VueLazyload
    },
    "99d9": function(e, t, n) {
        n("f9d0")
    },
    a5f6: function(e, t, n) {},
    c0d6: function(e, t, n) {
        var a = n("8bbf"),
            a = n.n(a),
            r = n("5880"),
            r = n.n(r),
            o = (n("ac6a"), n("68fe")),
            i = n("60fe"),
            s = new o.a,
            c = {
                namespaced: !0,
                state: {
                    openChecked: s.get(i.OPEN_CHECK) || !0,
                    noticeChecked: s.get(i.NOTICE_CHECK) || !0,
                    openVol: s.get(i.OPEN_VOL) || .5,
                    noticeVol: s.get(i.NOTICE_VOL) || .5,
                    roomOpen: "",
                    client: "",
                    phoneFlag: !1,
                    downappShow: !0,
                    banners: [],
                    smallBanners: []
                },
                getters: {},
                actions: {},
                mutations: {
                    setBanners: function(e, t) {
                        e.banners = t
                    },
                    setSmallBanners: function(e, t) {
                        e.smallBanners = t
                    },
                    setDownappShow: function(e, t) {
                        e.downappShow = t
                    },
                    setClient: function(e, t) {
                        e.client = t
                    },
                    setPhoneFlag: function(e, t) {
                        e.phoneFlag = t
                    },
                    setOpenChecked: function(e, t) {
                        e.openChecked = t, s.set(i.OPEN_CHECK, t)
                    },
                    setNoticeChecked: function(e, t) {
                        e.noticeChecked = t, s.set(i.NOTICE_CHECK, t)
                    },
                    setOpenVol: function(e, t) {
                        e.openVol = t, s.set(i.OPEN_VOL, t)
                    },
                    setNoticeVol: function(e, t) {
                        e.noticeVol = t, s.set(i.NOTICE_VOL, t)
                    },
                    setRoomOpen: function(e, t) {
                        e.roomOpen = t
                    }
                }
            },
            u = (n("20d6"), n("6b54"), n("6762"), n("2fdb"), n("420d")),
            l = new o.a;
        new o.a("sessionStorage");
        n = {
            namespaced: !0,
            state: {
                chatList: l.get(i.MESSAGE_LIST) || [],
                roomLotteryInfo: l.get(i.ROOM_LOTTERY_INFO) || {},
                lottery: l.get(i.LOTTERY) || null,
                lotteryOpenClose: null,
                lockedStatus: !1,
                planUrl: "",
                downUrl: "",
                liveUrl: "",
                showTzIframe: !1,
                urlObject: null
            },
            getters: {},
            actions: {
                getRoomLotteryInfo: function(e) {
                    var a = e.commit;
                    Object(u.d)(function(e) {
                        var t, n;
                        0 == e.code && (e.data = e.data.filter(function(e) {
                            return ["38", "4", "13", "5", "49", "37", "42", "43", "39"].includes(e.lotteryId.toString())
                        }), -1 === (t = e.data.findIndex(function(e) {
                            return "39" == e.lotteryId
                        })) && 0 === t || (n = e.data[t], e.data.splice(t, 1), e.data.splice(0, 0, n)), a("setRoomLotteryInfo", e.data || []))
                    })
                }
            },
            mutations: {
                setPlanUrl: function(e, t) {
                    e.planUrl = t || "", l.set(i.PLANURL, t)
                },
                setDownUrl: function(e, t) {
                    e.downUrl = t, l.set(i.DOWNURL, t)
                },
                setLiveUrl: function(e, t) {
                    e.liveUrl = t, l.set(i.LIVEURL, t)
                },
                setUrlObject: function(e, t) {
                    e.urlObject = t
                },
                setShowTzIframe: function(e, t) {
                    e.showTzIframe = t
                },
                setLockedStatus: function(e, t) {
                    e.lockedStatus = t
                },
                setRoomLotteryInfo: function(e, t) {
                    e.roomLotteryInfo = t, l.set(i.ROOM_LOTTERY_INFO, t)
                },
                changeNewOpen: function(e, t) {
                    e.newOpen = t
                },
                changeMessage: function(e, t) {
                    e.chatList = t, l.set(i.MESSAGE_LIST, e.chatList)
                },
                setLottery: function(e, t) {
                    e.lottery = t, l.set(i.LOTTERY, t)
                },
                setLotteryOpenClose: function(e, t) {
                    e.lotteryOpenClose = t
                }
            }
        };
        a.a.use(r.a), t.a = new r.a.Store({
            modules: {
                global: c,
                home: n
            }
        })
    },
    c1fb: function(e, t, n) {
        n("8e6e"), n("456d"), n("ac6a");
        var r, a, o = n("ade3"),
            i = (n("28a5"), n("96cf"), n("1da1")),
            s = n("cebe"),
            s = n.n(s),
            c = n("56d7"),
            u = (n("a78e"), n("68fe")),
            l = (n("41cb"), n("60fe"), n("8237")),
            p = n.n(l),
            m = n("ed08"),
            l = n("1157"),
            h = n.n(l);

        function f(t, e) {
            var n, a = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)), a
        }

        function A(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(n), !0).forEach(function(e) {
                    Object(o.a)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

        function g() {
            return d.apply(this, arguments)
        }

        function d() {
            return (d = Object(i.a)(regeneratorRuntime.mark(function e(t, n, a, r) {
                var o, i, s, c, u, l, f, d;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (window.vm.$store.state.home.planUrl || "/api/index/health" == t) return o = "/api/index/health" == t ? r : window.vm.$store.state.home.planUrl, i = "0", s = parseInt(1e6 * Math.random()), c = m.a.randomString(3), u = parseInt((new Date).getTime() / 1e3), e.next = 10, m.a.decrypt("2mFA9KIkHOYHzoGPWnLRjE9lcGRDbLnDYomp641dGpI=", "1QWERdfbIU12Q2vb");
                            e.next = 23;
                            break;
                        case 10:
                            l = e.sent, f = "", d = -1 !== t.indexOf("?") ? t.split("?")[0] : t, f = (d = f = d).toLocaleLowerCase(), f = p()(f + "-" + u + "-" + s + "-" + i + "-" + l), d = p()(d + "-" + u + "-" + c + "-" + i + "-" + l), n = A({
                                sign: u + "-" + s + "-" + i + "-" + f,
                                sign2: u + "-" + c + "-" + i + "-" + d
                            }, n), h.a.ajax({
                                url: o + t,
                                type: "GET",
                                dataType: "json",
                                contentType: "application/json",
                                data: n,
                                complete: function(e) {
                                    200 == e.status && (e = e.responseJSON, a(e))
                                }
                            }), e.next = 24;
                            break;
                        case 23:
                            setTimeout(function() {
                                g(t, n, a)
                            }, 5e3);
                        case 24:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }
        n("c1df"), new u.a("sessionStorage"), s.a.defaults.timeout = 3e4, s.a.defaults.withCredentials = !0, s.a.interceptors.request.use((a = Object(i.a)(regeneratorRuntime.mark(function e(t) {
            var n, a, r, o, i, s, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = "0", a = parseInt(1e6 * Math.random()), r = m.a.randomString(3), o = parseInt((new Date).getTime() / 1e3), e.next = 8, m.a.decrypt("2mFA9KIkHOYHzoGPWnLRjE9lcGRDbLnDYomp641dGpI=", "1QWERdfbIU12Q2vb");
                    case 8:
                        return s = e.sent, c = "", i = -1 !== t.url.indexOf("?") ? t.url.split("?")[0] : t.url, c = (i = c = i).toLocaleLowerCase(), c = p()(c + "-" + o + "-" + a + "-" + n + "-" + s), s = p()(i + "-" + o + "-" + r + "-" + n + "-" + s), t.params = A({
                            sign: o + "-" + a + "-" + n + "-" + c,
                            sign2: o + "-" + r + "-" + n + "-" + s
                        }, t.params), c = (new Date).getTime(), window.__axiosPromiseTime.push({
                            url: i,
                            sign: t.params.sign,
                            time: c
                        }), e.abrupt("return", t);
                    case 21:
                    case "end":
                        return e.stop()
                }
            }, e)
        })), function(e) {
            return a.apply(this, arguments)
        }), function(e) {
            return Promise.reject(e)
        }), s.a.interceptors.response.use(function(n) {
            try {
                var a;
                if ((new Date).getTime(), a = -1 !== n.config.url.indexOf("?") ? n.config.url.split("?")[0] : n.config.url, window.__axiosPromiseTime.forEach(function(e, t) {
                        e.url === a && e.sign === n.config.params.sign && e.time
                    }), 100 <= window.__axiosPromiseTime.length && window.__axiosPromiseTime.splice(0, 90), n.data.code && 1 != n.data.code) {
                    if (-1 !== n.config.url.indexOf("user/bets") && -1 === n.data.msg.indexOf("禁言")) return;
                    var e = n.data.msg.indexOf("错误状态码"),
                        t = ""; - 1 == (t = -1 !== e ? n.data.msg.substring(0, e) : n.data.msg).indexOf("未登录") && -1 == t.indexOf("必须重置密码") || c.default.$logout(), r && clearTimeout(r), r = setTimeout(function() {
                        -1 == t.indexOf("领") && -1 == t.indexOf("红包") && -1 == t.indexOf("用户不存在") && -1 == t.indexOf("必须重置密码") && c.default.$toast(t)
                    }, 1e3)
                }
            } catch (e) {
                c.default.$toast("网络出错")
            }
            return n
        }, function(n) {
            var a;
            if (n.response) switch ((new Date).getTime(), a = -1 !== n.response.config.url.indexOf("?") ? n.response.config.url.split("?")[0] : n.response.config.url, window.__axiosPromiseTime.forEach(function(e, t) {
                e.url === a && e.sign === n.response.config.params.sign && e.time
            }), 100 <= window.__axiosPromiseTime.length && window.__axiosPromiseTime.splice(0, 90), n.response.status) {
                case 500:
                    return r && clearTimeout(r), r = setTimeout(function() {
                        c.default.$toast("服务器出错")
                    }, 1e3), n;
                case 401:
                    return c.default.$logout(), c.default.$toast("登录已失效，请重新登录"), n
            }
            return n
        }), t.a = {
            getPlan: function(e, t, n, a) {
                return g(e, t, n, a)
            },
            get: function(e, t, n, a) {
                return g(e, t, n, a)
            },
            post: function(e, t, n, a) {
                return g(e, t, n, a)
            }
        }
    },
    cebe: function(e, t) {
        e.exports = axios
    },
    d2f8: function(e, t, n) {
        n("a5f6")
    },
    d35f: function(e, t, n) {
        n("35f3")
    },
    d8ab: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2wAAAJYBAMAAADs3nhtAAAAJFBMVEXp6eza2trj4+X////g4OH29vbw8PHt7e/z8/T7+/vd3d3m5ugYZ1A6AAALeklEQVR42u3du28c1xUHYJIWlxTZcAlKVqiGKzuOgXQR5FhIozXsREhFwvADqigFieG4WQdIZMONaMtIpEoJ44dSmYGNOKlEw1Cjfy587OPOzJnZmVEjYL+v4/AxwP5mzr337J3l3BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAzbLVb17XcL/62293YKv69J0+e/HDpyNaU8z4Zy3/rx4Pu5mvF3xj94UtCaxJb7hf7Jwdz4axMfnyt+rzzpX/4x5OD/84dPRj/+KbQjtRN7fyDzK8dnh7dKA1jyt12puwnF8KbO7m61mXWILYXBuHLmH11e5Ofv1N92ttl1Xf0JzbCMI+ck1n92Da/jqvhelA5T2xXn3axrJzGN2FSfa/LrH5suRrZi0empJTtVp92uR9XvUnx/Kak+i7JrH5sLwwexTOErbiUnZ9y2qVJEBtxPhfbVV+xZWrk6jfxb12L5xlTR6C9eCrZi9Oc3Jub2zKrHdv5Bytr8W21Fo9AL0077414KtmPJ/rJ+QYyqx3bC4PeenxbrRdXBcd2p513EN+wk+rbfRReJhdEVju2o3lkpmglM4SNVhPJozlJN5p8pKv/rfAy+U5ktWM7/+BMZgjqxd2Tya2yMXXisHgQTT6SfNI0k8vkschqx3ZUIzNXfz+8KZJb5fmpI1DnMLphk9ExHTV7Daqv2NIamRmC4hZzs1bGzWjykYyO6ajZpPqKLVMjk6t/oRvWsjONWhk70eQjrb4bUfVdd7fVju2kRiZXfzoCJSNTs1bGrajOHoTvOazWX8aLLa2RB5mrf74b1rJmrYylqM5mzrvVZhkvtkmNXMhe/b1MqC1bGVEzeSF+YzaZqLx8euB/Q9+KraJGHmav/n7m24/atTKiZnKm+k7STCYqt7O3+6y+Z7r0MPGP8avzcXr46+GQcy0cgcZpNmxlLH1YnHxkqu8kzV5+IjkfNi5nKbbLiV+NX53fpYeHNXI8Z1yNN5k0bWUEzeRM9Z1k0s8v4+dn/q3u24k/TWaC6eHRq3QxLGXjWta0lRE0k/vx9pVC9RVbaqFkW04/+xqtdMNa1rSVETSTc4PqVln1FVuN2BZy4/9hN6xlTVsZy4UbdiHe41esvmKrEdtKbs7Yi7fiNW1lJM3k9bD6jgbT4jJebDVi6+eK1kFYyxq3MorN5Fz1HQ2mxWW82KbHtpovWvF+5eZ74grN5PxtvFG2jBfb9NhWckNQfgQaHi60MqYqNJP7+a5a/u6+uCu2urH1ckNQfgQaHp7PtzKmKjST89X3NM1gGS+2JrFtBK2M8eFe4/fEOrnJR/F5hK3cZXJObLVj+zA3Z+x1w1rWb7AjYTiVzNXZQvU9TTPYDya26bHdzV39/fimaL4nLt9MXumGo2awH0xs02PLdzPiR99aPFyRbyYfdsNRM6i+y38bEVpZbLluRrGUndSyNnvics3kQvU9TTNZlY+q73OjLvdVoZXFlutmnCnGdnGu3cMV97N1th8/CxnsB+v8YURoZbF1sk9ZzHfDWtbm4Ypc+Q3eod3yaFvr5tZeZs7YCzabzLV7uCJbfhfiB8ab7QcTW0k3ox8/111sZdRYAWTKb1B9j9OMlvFnXh8aPZp/aeS42K6+ePR3v/35rMd2K3P1H4S1bLXNwxXZZnJQfY/TjKpvYS/JQTI7Whh+sfFotmPLdDNW4w+/aDcCZZrJQfU9TjOpvsXYCu/1XRunNju5lcS2mM4ZoxHoqJY1ebStpPz244/ViJbx86XvrG+l6a/P9t2WNpNXumEta/JoW0n5DTf7bYX7wSpiO1PxETizFVumliX5JF3IFo3kfPlN8tlIXvhwGV8RWz/eMT2LsSW1LMln82ZyuF9sZTRrJl9M8vlZkuZKtB+sPLbXu/HW21mMLW0mT/JZ+3tyuMmjbXEzOcnnz0mah9Eyfr5i11g3fhxoBmNLP7InGWqSkem18olkv+Kju9JmcpLPu0maYfWtHdv6LMeW1LL1ZKjphKPR9Qaxpc3kZKT862QJtxnuB6sd2+Ysx7YcLbG7jxfDVyq/I6FXFdv96C88P9gLH/yZax7bTAxuZbEtRQ2M7p3l8MXKz0gOq2IbRH/hQrrPPKy+9WPbmuHY5sKrfzsZmbpBK6NObMvRH/4+TvOlNrFdm+XYoqv/aKjZiRomgyaxLUbldylOc7dNbGuzHNsH8VBzN6xwTWLrHIZlNkxzu01sF2c5tuV4qLkdHP6uUWxJAyZ9vy5KM90PVj+29VmOLZozvhwf7jSLLaizx+/X7UXzy5qxbR642wrN5HSiH9WyO81iuxWX2Z3KiWRlbL/ev/qhsa20lm3HC4PtZrF14nyCNK/Xi23t8tX9KwdiK6llJ0PNXjS/bBTbYjzR70Tzy1qxPffl3NJn/xLbiU/joeZGVSujVmzL/XCiv1hdfctj2/ziuD3wldjyzeR0qPmgcgSqE1uwZD8us8UGTGY/WHlsayc/9rHYSmrZ9/HCoLgjYbzL6tTU8ntSZotpZpbx5bGdXjaT1Gc7tmItW4rTLAxtc29ezsh/+35cZncql/HlseU/SmG2Yyte/XfihUFhIjl372FG/tuDuMzerVzGl8f2G7FVNZOHQ83NilZGPcvxRL8wmD6uF9s1sVXVsrXdsJY12ZFQ0ky+HQ+mu/Vi2xJbVS27EDc5mj9cUWg/nt7GhXdmt8XWIrbleKjpVLQyatoLy2y+AbPubmsTW76WPY4XBi3+b9BOPNHfq1rGi61mbPlathsvDO40P+mteKJ/o6r6iq1mbPmrfztcGLT5v0GdeKK/W3ibSGwtYtuJh5qd6h0JdaaScZldrtoPJra6sd2Kh5q71TsS6izc+mGZzQ2m22JrFVsnHmoG1TsSasjW2XGZzQ6muWW82OrGthgPNcvlrYxWU8nJE8Q3K6qv2OrGln0r5Xa8MNhtc9b7cZndqai+YqsbW7aWjYea7LJ4u81ZB/FE/1ZF9RVb3dgyV38y1OxV7kioNSeJ36/rVCzjxVY7trtxx/hG5Y6EWiuAg7DMLlYs48VWO7ZB3LP44KkayYU543Y4mOaX8WKrHdtiPNQsl7Yyakvq7PqdcDDNf0KN2OrHdhAONYsVj7Y1XwGk79ftlC/jxVY7tnTOmAw1nd5TTiQzc8Zz8WB6TmxtY0s/MS3N5+ZT7EgozBmvx4PpS2JrHduNeKjZeapGcq7O3o4P74qtdWy78VDz6VNOJDNzxu14MN0WW+vYJlf/G+nhj8aHf9rytEt74UfRTKaSF++IrX1s49fi7fTw2fFL9lXb847/S+NPMmX2n6PD/x2IrXVsS78YzdIfZCYUo1f3woO2531/9Jbbvczhe6Mq+dac2FrHNvfm6Yux+Vl2hvDwtMux+eag7XnPDm+3734ZHn7jK7E9RWxnr5y8OmdfzR1+9fhm2Tz7SuvzLu2frNG+2d/NHf7j8eH/7O+KrVLpczHD2+3qJy9uvX85/yruX/nk0ta9q7vtz3v28js/XFq+/GXu8Menh4tjptgyk47xczHxwrmzf/y9d2oebjS6Hf+FK4XD944Pfz0ntuoF1Pi5mJI7Z+nzh18E31q6Fx5u4qOHD9+uf3jxraF3hwc+Hx0YXm+/H3399hzPjMI/S9kf/4/w06/H/zf8FS/Ws2P8z1LeGx74y+jAIPf1e14sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBW/g8rdOeUzURfwgAAAABJRU5ErkJggg=="
    },
    dcb4: function(e, t, n) {},
    e60d: function(e, t, n) {},
    eb65: function(e, t, n) {},
    ec54: function(e, t, n) {
        e.exports = n.p + "static/img/app_download_wave_mobile.9881fb0d.png"
    },
    ed08: function(e, t, n) {
        n("6762"), n("2fdb");
        var a, r, o, i, s = n("53ca"),
            c = (n("c5f6"), n("7f7f"), n("1c4c"), n("ac6a"), n("5df3"), n("3b2b"), n("a481"), n("96cf"), n("1da1")),
            u = (n("28a5"), n("6b54"), n("34ef"), n("c1df")),
            l = n.n(u),
            f = n("c0d6"),
            u = n("8429"),
            d = n.n(u);

        function p(e, t, n) {
            return a.apply(this, arguments)
        }
        t.a = {
            randomString: function(e, t) {
                var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9][Math.floor(10 * Math.random())] || 0,
                    a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"][Math.floor(26 * Math.random())] || "a",
                    r = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"][Math.floor(26 * Math.random())] || "A";
                t = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var o = "", i = 0; i < e; i++) {
                    var s = Math.floor(Math.random() * t.length);
                    o += t.substring(s, s + 1)
                }
                return o + n + a + r
            },
            encrypt: function(e, t) {
                t = d.a.enc.Utf8.parse(t), e = d.a.enc.Utf8.parse(e);
                return d.a.AES.encrypt(e, t, {
                    mode: d.a.mode.ECB,
                    padding: d.a.pad.Pkcs7
                }).toString()
            },
            decrypt: function(t, n) {
                n = d.a.enc.Utf8.parse(n), t = d.a.AES.decrypt(t, n, {
                    mode: d.a.mode.ECB,
                    padding: d.a.pad.Pkcs7
                });
                try {
                    return d.a.enc.Utf8.stringify(t).toString()
                } catch (e) {
                    n = [];
                    return n = 0 < t.sigBytes ? function(e, t) {
                        for (var t = 1 < arguments.length && void 0 !== t ? t : 4 * e.length, n = new Uint8Array(Math.min(4 * e.length, t)), a = 0; a < e.length; a++) {
                            var r = e[a];
                            r < 0 && (r = e[a] + 4294967296), n[4 * a + 0] = r >>> 24 & 255, n[4 * a + 1] = r >>> 16 & 255, n[4 * a + 2] = r >>> 8 & 255, n[4 * a + 3] = r >>> 0 & 255
                        }
                        return n
                    }(t.words, t.sigBytes) : n
                }
            },
            decryptMg: function(e, t) {
                t = d.a.enc.Utf8.parse(t), e = d.a.AES.decrypt(e, t, {
                    mode: d.a.mode.ECB,
                    padding: d.a.pad.Pkcs7
                });
                try {
                    return d.a.enc.Utf8.stringify(e).toString()
                } catch (e) {
                    return ""
                }
            },
            getUrlRelativePath: function() {
                var e = document.location.toString().split("//"),
                    t = e[1].indexOf("/"),
                    e = e[1].substring(t);
                return (e = -1 != e.indexOf("?") ? e.split("?")[0] : e).toLocaleLowerCase()
            },
            returnIqAvatar: (i = Object(c.a)(regeneratorRuntime.mark(function e(t) {
                var n, a, r, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (1 !== t.code) return e.abrupt("return");
                            e.next = 2;
                            break;
                        case 2:
                            return n = {
                                nickname: ""
                            }, t.data && (t.data.PHOTO && (a = (t => {
                                var n = "",
                                    e = !1;
                                try {
                                    (n = window.atob(t)) && (e = !0)
                                } catch (e) {
                                    n = t
                                }
                                return {
                                    path: n,
                                    isParsed: e
                                }
                            })(t.data.PHOTO.BINVAL), r = "data:".concat(t.data.PHOTO.TYPE, ";base64,"), o = f.a.state.global.imgDomain, n.avatar = -1 != a.path.indexOf("http") ? a.path : o + "/" + a.path, n.type = r), n.nickname = t.data.NICKNAME), e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return i.apply(this, arguments)
            }),
            removeAllSpace: function(e) {
                return e.replace(/\s+/g, "")
            },
            html2Text: function(e) {
                var t;
                return "" === (e = e.replace(/\s+|\t|\r|\n/g, "")) ? "" : (t = new RegExp("<[^>]+>", "g"), (e = e.replace(t, "")).trim())
            },
            getLocalTime: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
                return e ? l()(1e3 * parseInt(e)).format(t) : "0000-00-00 --:--:--"
            },
            getCurTime: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
                return e ? l()(parseInt(e)).format(t) : "0000-00-00 --:--:--"
            },
            isRepeat: function(e) {
                var t, n = {};
                for (t in e) {
                    if (n[e[t]]) return !0;
                    n[e[t]] = !0
                }
                return !1
            },
            getNewArr: function(e, t) {
                var n = [],
                    a = [];
                if (e)
                    for (var r = 0, o = e.length; r < o; r++) e[r] === e[r + 1] ? a.push(e[r]) : (a.push(e[r]), n.push(a.slice(0)), a.length = 0);
                return t < n.length ? n.slice(0, t) : n
            },
            comboList: function(e) {
                for (var t = [], n = [], a = e.length, r = 0; r < a; r++) n[r] = 0;
                for (;;) {
                    for (var o = [], r = 0; r < a; r++) o[r] = e[r][n[r]];
                    for (t.push(o), r = 0; r < a && (n[r] += 1, !(n[r] < e[r].length)); r++) {
                        if (r == a - 1) return t;
                        n[r] = 0
                    }
                }
            },
            comboArray: function(e, t, n) {
                if (null == n && (n = e.length), !(t < 1 || n < 1 || n < t)) {
                    for (var a = [], r = [], o = 0; o < t; o++) r[o] = o;
                    for (;;) {
                        for (var i = [], o = 0; o < t; o++) i[o] = e[r[o]];
                        i.count = i[0].count;
                        for (var s = 1, c = i.length; s < c; s++) i.count *= i[s].count;
                        a[a.length] = i;
                        for (var u = o = t - 1; 0 <= o; o--) {
                            var l = r[o] + 1;
                            if (!(n - u + o <= l)) {
                                r[o] = l;
                                for (var f = o; f < u; f++) r[f + 1] = r[f] + 1;
                                break
                            }
                            if (0 == o) {
                                for (a.count = a[0].count, s = 1, c = a.length; s < c; s++) a.count += a[s].count;
                                return a
                            }
                        }
                    }
                }
            },
            replaceArray: function(e, t) {
                if (t)
                    for (var n = [], a = 0; a < e.length; a++) {
                        var r = t[e[a]];
                        null == r ? n.push(e[a]) : n.push(r)
                    }
                return n
            },
            combination: function(e, t) {
                if (e <= t) return 1;
                if (e == t + 1) return e;
                for (var n = e, a = e - 1; e - t < a; a--) n *= a;
                for (a = t; 1 < a; a--) n /= a;
                return n
            },
            compressImg: function(h, e) {
                var t = this,
                    A = e ? e : .85;
                return h[0] ? Promise.all(Array.from(h).map(function(e) {
                    return t.compressImg(e, A)
                })) : new Promise(function(m) {
                    var e;
                    parseInt((h.size / 1024).toFixed(2)) < 300 ? m({
                        file: h
                    }) : ((e = new FileReader).onload = function(e) {
                        var d = e.target.result,
                            p = new Image;
                        p.onload = Object(c.a)(regeneratorRuntime.mark(function e() {
                            var t, n, a, r, o, i, s, c, u, l, f;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        for (t = document.createElement("canvas"), f = t.getContext("2d"), n = p.width, a = p.height, i = p.width, l = p.height, 1024 <= parseInt((h.size / 1024).toFixed(2)) && parseInt((h.size / 1024).toFixed(2)) <= 10240 && (o = r = 1600, a = l, r < (n = i) || o < l) && (r / o < i / l ? (n = r, a = Math.round(r * (l / i))) : (a = o, n = Math.round(o * (i / l)))), 10240 <= parseInt((h.size / 1024).toFixed(2)) && parseInt((h.size / 1024).toFixed(2)) <= 20480 && (o = r = 1400, a = l, r < (n = i) || o < l) && (r / o < i / l ? (n = r, a = Math.round(r * (l / i))) : (a = o, n = Math.round(o * (i / l)))), t.width = n, t.height = a, f.clearRect(0, 0, n, a), f.drawImage(p, 0, 0, n, a), i = t.toDataURL("image/webp", A), s = atob(i.split(",")[1]), c = s.length, u = new Uint8Array(new ArrayBuffer(c)); c--;) u[c] = s.charCodeAt(c);
                                        l = h.name, -1 !== h.name.indexOf(".") && -1 === h.name.indexOf("webp") && (l = h.name.split(".")[0] + ".webp"), f = new File([u], l, {
                                            type: "image/webp"
                                        }), m({
                                            file: f,
                                            origin: h,
                                            beforeSrc: d,
                                            afterSrc: i,
                                            beforeKB: Number((h.size / 1024).toFixed(2)),
                                            afterKB: Number((f.size / 1024).toFixed(2))
                                        });
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), p.src = d
                    }, e.readAsDataURL(h))
                })
            },
            parseTime: function(e, t) {
                var a;
                return e ? 0 === arguments.length ? null : (t = t || "{y}-{m}-{d} {h}:{i}:{s}", e = "object" === Object(s.a)(e) ? e : (10 === ("" + e).length && (e = 1e3 * parseInt(e)), new Date(e)), a = {
                    y: e.getFullYear(),
                    m: e.getMonth() + 1,
                    d: e.getDate(),
                    h: e.getHours(),
                    i: e.getMinutes(),
                    s: e.getSeconds(),
                    a: e.getDay()
                }, t.replace(/{(y|m|d|h|i|s|a)+}/g, function(e, t) {
                    var n = a[t];
                    return "a" === t ? ["日", "一", "二", "三", "四", "五", "六"][n] : (n = 0 < e.length && n < 10 ? "0" + n : n) || 0
                })) : "0000-00-00 --:--:--"
            },
            formatTime: function(e, t) {
                e = 1e3 * +e;
                var n = new Date(e),
                    a = (Date.now() - n) / 1e3;
                return a < 30 ? "刚刚" : a < 3600 ? Math.ceil(a / 60) + "分钟前" : a < 86400 ? Math.ceil(a / 3600) + "小时前" : a < 172800 ? "1天前" : t ? this.parseTime(e, t) : n.getMonth() + 1 + "月" + n.getDate() + "日" + n.getHours() + "时" + n.getMinutes() + "分"
            },
            getPermutations: function(a, r) {
                var o = [];
                return function e(t, n) {
                    t.length !== r ? n + 1 > a.length || (e(t.concat(a[n]), n + 1), e(t, n + 1)) : o.push(t)
                }([], 0), o
            },
            dt: (r = (new Date).getTime() - 252e5, o = 864e5, {
                day: function(e, t) {
                    var e = new Date(r + e * o),
                        n = new Date(e.getTime());
                    return [e, n]
                },
                week: function(e, t) {
                    var n = new Date(r),
                        a = n.getDay() - 1,
                        n = (a < 0 && (a = 6), new Date(n.getTime() - o * a + 7 * o * e)),
                        a = new Date(n.getTime() + 6 * o);
                    return [n, a]
                },
                month: function(e, t) {
                    var n = new Date(r),
                        e = (n.setDate(1), n.setMonth(n.getMonth() + e), new Date(n.getTime()));
                    return e.setMonth(n.getMonth() + 1), [n, e = new Date(e.getTime() - o)]
                }
            }),
            debounce: function(r, o, i) {
                function s() {
                    var e = +new Date - l;
                    e < o && 0 < e ? c = setTimeout(s, o - e) : (c = null, i || (f = r.apply(u, t), c) || (u = t = null))
                }
                var c, t, u, l, f;
                return function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    u = this, l = +new Date;
                    var a = i && !c;
                    return c = c || setTimeout(s, o), a && (f = r.apply(u, t), u = t = null), f
                }
            },
            getBase64: function(a) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "dataUrl";
                return new Promise(function(t, n) {
                    var e = new FileReader;
                    e.onload = function(e) {
                        return t(e.target.result)
                    }, e.onerror = function(e) {
                        return n(e)
                    }, "dataUrl" === r ? e.readAsDataURL(a) : "text" === r && e.readAsText(a)
                })
            },
            scrollTo: (a = function(e, t, n) {
                var a;
                n <= 0 || (a = (t - e.scrollTop) / n * 10, setTimeout(function() {
                    e.scrollTop = e.scrollTop + a, e.scrollTop !== t && scrollTo(e, t, n - 10)
                }, 10))
            }, p.toString = function() {
                return a.toString()
            }, p),
            getBallColor: function(e) {
                var t = "1 2 12 13 23 24 34 35 45 46 7 8 18 19 29 30 40".split(/\s/g),
                    n = "3 4 14 15 25 26 36 37 46 48 31 41 42 9 10 20".split(/\s/g),
                    a = "11 21 22 32 33 43 44 5 6 16 17 27 28 38 39 49".split(/\s/g),
                    e = e.toString();
                return t.includes(e) ? "red" : n.includes(e) ? "blue" : a.includes(e) ? "green" : void 0
            },
            formatSecondsToTime: function(e) {
                var t = Math.floor(e / 60),
                    e = e % 60;
                return "".concat(t < 10 ? "0" + t : t, ":").concat(e < 10 ? "0" + e : e)
            },
            formatAmount: function(e) {
                var t, n, a, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2,
                    o = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    i = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                    s = +e;
                if (s) return r = +r || 2, 0 === (n = (t = "".concat(e)).indexOf(".")) && (t = "0" + t), a = 0, -1 !== n && (a = t.length - 1 - n, s = +t.replace(/\./g, "")), r < a ? s /= Math.pow(10, a - r) : a < r && (s *= Math.pow(10, r - a)), ("boolean" != typeof o || o ? Math.round(s) : Math.floor(s)) / Math.pow(10, r);
                if (isNaN(s)) {
                    if (!1 === i) return e;
                    if ("string" == typeof i) return i
                }
                return 0
            },
            formatDateToHours: function(e) {
                var t;
                return e && "number" == typeof e ? (t = (e = new Date(e)).getHours(), e = e.getMinutes(), "".concat(t < 10 ? "0" + t : t, ": ").concat(e < 10 ? "0" + e : e)) : ""
            },
            quickTimeBtn7: function(e) {
                var t, n, a, r, o, i, s = {};
                return "day" == e ? (t = l()().format("YYYY-MM-DD 06:00:00"), n = l()((new Date).getTime() + 864e5).format("YYYY-MM-DD 06:00:00")) : "lastday" == e ? (t = l()((new Date).getTime() - 864e5).format("YYYY-MM-DD 06:00:00"), n = l()().format("YYYY-MM-DD 06:00:00")) : "week" == e ? (a = 0 != (a = (new Date).getDay()) ? a - 1 : 6, a = new Date((new Date).getTime() - 864e5 * a), t = l()(new Date(a)).format("YYYY-MM-DD 06:00:00"), a = (new Date).getDate() + 8 - (0 == (new Date).getDay() ? 7 : (new Date).getDay()), a = new Date((new Date).setDate(a)), n = l()(new Date(a)).format("YYYY-MM-DD 06:00:00")) : "lastweek" == e ? (a = (new Date).getDate() - (0 == (new Date).getDay() ? 7 : (new Date).getDay()) - 6, r = new Date((new Date).setDate(a)), t = l()(new Date(r)).format("YYYY-MM-DD 06:00:00"), r = 7 + a, a = new Date((new Date).setDate(r)), n = l()(new Date(a)).format("YYYY-MM-DD 06:00:00")) : "month" == e ? (r = (new Date).getMonth(), a = (new Date).getFullYear(), t = l()(new Date(a, r, 1)).format("YYYY-MM-DD 06:00:00"), 11 == r ? (a++, r = 0) : r++, o = new Date(a, r, 1), i = new Date(o.getTime()), n = l()(new Date(i)).format("YYYY-MM-DD 06:00:00")) : "lastmonth" == e && (a = (new Date).getMonth(), r = (new Date).getFullYear(), 0 == a ? (a = 11, r--) : a--, t = l()(new Date(r, a, 1)).format("YYYY-MM-DD 06:00:00"), e = (new Date).getMonth(), r = (new Date).getFullYear(), o = new Date(r, e, 1), i = new Date(o.getTime()), n = l()(new Date(i)).format("YYYY-MM-DD 06:00:00")), s.startTime = t, s.endTime = n, s
            },
            getPeriodTime7: function(e) {
                var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD",
                    a = ((new Date).getTimezoneOffset() || -480) / 60,
                    r = "",
                    o = "",
                    i = 0,
                    s = 0,
                    c = 0;
                return l()().hour() < 7 && c++, ["day"].includes(e) ? (r = l()().add(-c, "days").format(n), o = l()().add(-c, "days").format(n)) : ["lastday"].includes(e) ? (r = l()().add(-c, "days").subtract(1, "days").format(n), o = l()().add(-c, "days").subtract(1, "days").format(n)) : ["week"].includes(e) ? (t = l()().format("E"), r = l()().subtract(t - 1, "days").format(n), o = l()().add(7 - t, "days").format(n)) : ["month"].includes(e) ? (r = l()().utcOffset(a).startOf(e).format(n), o = l()().utcOffset(a).endOf(e).format(n)) : ["lastweek"].includes(e) ? (t = parseInt(l()().format("E")), r = l()().subtract(t + 7 - 1, "days").format(n), o = l()().subtract(t + 0, "days").format(n)) : ["lastmonth"].includes(e) && (t = e.substr(4), r = l()().add(-c, "days").utcOffset(a).subtract(1, t).startOf(t).format(n), o = l()().add(-c, "days").utcOffset(a).subtract(1, t).endOf(t).format(n)), r && o && (i = new Date(r).getTime(), s = new Date(o).getTime()), {
                    startTime: r,
                    endTime: o,
                    startStamp: i,
                    endStamp: s
                }
            },
            unqie: function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "key",
                    a = {};
                return e.reduce(function(e, t) {
                    return a[t[n]] || (a[t[n]] = e.push(t)), e
                }, [])
            },
            showTimePipe: function(e) {
                var t = new Date,
                    n = t.getFullYear(),
                    a = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() - -1) : t.getMonth() - -1,
                    t = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                    n = Date.parse(n + "/" + a + "/" + t + " 00:00:00"),
                    a = Date.parse(new Date((new Date).getFullYear(), 0, 1)),
                    t = [];
                t[0] = n + 864e5, t[1] = n, t[2] = n - 864e5, t[3] = n - 1728e5, t[4] = n - 5184e5, t[5] = a;
                var r, o, n = new Date;
                if (n.setTime(e), t[1] <= e && e < t[0]) i = n.getHours() + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes());
                else if (t[2] <= e && e < t[1]) var i = "昨天 " + n.getHours() + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes());
                else if (t[3] <= e && e < t[2]) i = "前天 " + n.getHours() + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes());
                else if (t[4] <= e && e < t[3]) {
                    var s, c = "星期" + ["天", "一", "二", "三", "四", "五", "六"][n.getDay()];
                    switch (c) {
                        case "星期天":
                            s = "星期天";
                            break;
                        case "星期一":
                            s = "星期一";
                            break;
                        case "星期二":
                            s = "星期二";
                            break;
                        case "星期三":
                            s = "星期三";
                            break;
                        case "星期四":
                            s = "星期四";
                            break;
                        case "星期五":
                            s = "星期五";
                            break;
                        case "星期六":
                            s = "星期六";
                            break;
                        default:
                            s = c
                    }
                    i = s + " " + n.getHours() + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes())
                } else i = t[5] <= e && e < t[4] ? (r = "月", o = "日", n.getMonth() - -1 + r + n.getDate() + o + " " + n.getHours() + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes())) : (r = "月", o = "日", n.getFullYear() + "年" + (n.getMonth() - -1) + r + n.getDate() + o + " " + n.getHours() + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes()));
                return i
            }
        }
    },
    f49b: function(e, t, n) {
        n("e60d")
    },
    f667: function(e, t, n) {
        n("dcb4")
    },
    f9d0: function(e, t, n) {},
    fa93: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACiCAAAAABn6n7UAAAK70lEQVR42u2dTYvkOA/H+/t/skAMIQdTFDmEkIPRQSAQQiAMfg55s1PVs+wz7t3UTjw009NDD/VrvfwlWan54j/ofN2wN+wNe8PesDfsDXvD3rA37A17w96wN+wNe8P+ybD0x8AS/Yu0X/80qsT0J8ASMVtKKQn912GJSGJazn8blphYU0opxn/TtF//DKtYyk6k/WdAGbfI58MS6+a/ySymGCPhQilqmZWJPhlWmImQLcXFhaOqqi5/pWoWY4oKSMf5ZMsSIauqiJkqM3FKSUWYRc0smqoqC6uqmlmMnwi72QlJeLGpmaowyerMKsy8mLY4P5y5vn4mSFXVVDUmyXEsLh8ppWgixKwqIracaJGBPgwWObdVBhs1JUWWlTdFU11Il2BW4zV++WfC9+sHvJcyvgLWUhJAQBLdHDiqWtx1KaZoi8f/SAX9VY+UmVnVLOo3sGopMSICANBhYDM1s1P0pqR0WVjSPdvkgOXnKSUCRETE0sBmqhvv9g0CV4Wlb+LUclhNSVfW1b5ApN8Z+ANhtfRiATxwF2AkscPAtgMzXhYW43tYK79MOelOjEhHil7ri8TwwbBRU4oAa7wi4PGBi4GLFG14TVgiVn0Pq1YIj5Y+jCePziI4GiPVlp+vKqiv/voKq5YSF3xvHLowsAnXbQ6+fpt0aVVz2Iww+7KkFAlyQMhB85S1a3A0XTr/a1hWYyaibwhjHrJWGnJ35bNDY56io+k1LJsVhhmsvINVS0le3HdtZjfizdYL7xHBlWToN2HtLwL1+KqklLhwXUAkUbMYo6nQrsBHjQWbJMElYKnAimc3zqpFTSnmOIBYDqaUAQrULWPFZOEaCcp+mZWixBRL4dkzL9lr6Q956tq8ICWCa8DKm6yUweq549mjVdKbw6dchYjIKSFeRHriL2Et63jikYYBNb09AkX2QkTUFGvNL35XevZXnWmPyUvMZsKzEqS/pF2RY1K4iM7uKeot7N70aDy8GBD4RChHa0dQ1hyUEuFFYA/THonXXgNZYkqHF1M5logExHs4nMoOSQmuUkEdhYVYejHyBrt48Z6I9ZyFMdewspyqJzwVYAVtz7fxO8taUT7ROU6RSHM7Z80fp8Qg17Esn4cSr5YthOds2MhIuWNLVngAp4R0HdjNj/McvA1G10ojakrxyDunQWJEKkbNMdMe0BQD8YVg9WTP47M1jqNtwgP4koqTIpVSRFmNXFF46sDSWXvkJLO5F7/WTkyn9Hy0+FWFp85YZrFLVvTLaYIsMaVvi6fIRKWx+ZhcaEXhqTRwo5P2SNnRL7XiXtnbq/CU/Nmkqqbw1IK1su85w1pKetQKdr6mpFPKst0JKFWdqNaB5bL+P8FqEYdnWEY8V4+7F1fseOrNjSkWQvsKG+k7y8bXtmCvocBSrDk9rgSrhdDmvc5icT3GMSBn4TmVypkXpKTherBUpGMt5jNmKcnRlJ909tWLd1jgekOKqtcfmvc9mpXEKaptjRts9ipGTy9alNWVsereQS1YyrXnBHseGJ/gzvfQh/LUFZ6Kl9GWwebNTtbxrBPDvOuJb67c9/vqysJTEZYzoc2bneyOZ58dZrddhCTfGLa28NTcqchmiRus2MuoDWEx2Z6Lz9k5HuGtdYWnJqweDcCmuBKP5YJi/iBZLj6VT8cMCmPSIJeEZYoHrBzdj8bFi8up4e4DckyfVtmBbKBBeE3LMuquPTmspH3Ult/e6ctoeQ1YyH4glb245tIXJX3T7Whe2Ge3H/xmaBw5z2O1hacurO3DxAx279vhdMnOL3c9RnnSri48dWH5DaxaShTg0NnsCqTAjcaFpwNXu6n8CVimLQtvsLq0d0pHQVHesLOYxfV+dr2N3q8sLVntfZmqsCwFrFmKSxjHBQagvLNav0Bv14Xqe3HdFVx8gU0q665ANOFlha8IXQSAFRqKPMYpER4qK+uvC8FSMWhTSymaim1LmKa87sPgi/Ke18A0RWC5sGV5m0IssHwsndqWqaMpL/shcFopOElxrNu314eVrQ+X1ZAq2yZi2s2bkhkTFbAvC1HAPxCytS27w8YYYzLZwowQQwjzjLRmLFMmQCg3Sg73BkkJ6dqwvF9yiaqqiggTU5iewzhO0zTNMyCvraAZEwCUu24brKZY3Ytrw9Le5JnwuksP0zwHXLcQiRCRaLsEUmGCXXSynByTBLk6bFyf4hFmZjFThgAkKsdhZiJiscPAlGvwNmrDy1uWWUSIVdRiTJERgE4PFMr63Nq+5HlocDFq46vDMoLsMmMEAb97dnJ5To9YtghWpn1xs+5N5Y/B7jtvUTAA0q8eExVZHwWSTIMRAKoPjH8KdknIRhAQ//KJ2EWZiIhyA9e+qfxBWLKkBOHXRn2dO+OesqJJqt/x/JBlCQPg33vMWZbvI5J9MPkxsPj/VvBHikb8DNjffHadkEgk8IfA/t5Pai2z/gjYPYT/FNif4r3fIumGvWFv2Bv2hr1hb9gb9oa9YW/YG/aGfdeDVmpCs/t2vSrs/IAcXLY34nsPpG/O+nfHxHie6IqwqtI7Xl8yEQGEcRi+oWLm8Hy8nOcyeAI/bP+qd1dcwQXvH617eO+958F3nXNt1/XEHF6hRmYem6Zt27btunY/zTJSDI3fYdtwSdi+cQ//8N579s0wzPMMgMw87ig7lGfmyU0AAPgYYTuDW2HdAeuuuUk+twOFQETE3jGv1+7MtKMMGxUy8+RARBS6sL4Rocr0MbDsO9ahV1Vl78yW4JQlVYmIzG7Or6MnF5gFuqb33nv/eAB/Duzc9uPYteM4Aj9a7/3j4b3PXuqzfN2TCyzYdU/vvfd90+Swjy2TPRzuP7QLwY5d33XOdV03cd9577um937OLF8m1skFCV3rAhMx9c3AGWzn19O1i+HDxWIWEdE7RCRynohGF4iWNxJVVdXOZSIkPLkwuB58F8TANyPlsPvpuuX38VKwREQA3kGYILSjiEwORJjG7bRuPA7w5ML8QKGhG4bezZtnrzELp0OXgp26xQh93019R/tLD816WtdkZ+TJBSZVCV3TNAOJ5tn4IadzMZ0dhhBC3wCAbyZm5rEJzExhPU83BNj+EHCBnZ9914+z7zo/jOFNNr5sIyBm82hmMKqqKs7Eh/CIb1E4s9TkQt+57jmRKMHYt834Jhv/srz+VxsB7/vee+/7NZXm2Te0PUM/FNl4GAKO/WMYAyDCjBssHNn49K9cCLZxj8cmsN53RVnr25FD60udZZHw6Lu2dV5E9gQ1u25Px1u9fDlY57N3UqcxLyKC6yiLRVlhVYUJYRrHPBuPbthXceuWUD8GO2UvE7t2yhIPjEuC4ucwApDosg61fYd3YQ/ux2VhXZef7GX61udZNrgnTy4wuqZxXdf7cQ5HUUGuRf6Z4rgmbJeVDWNmE986ymHndtVZgDA+Hl3buA532Ml1/AGw/lzpMzML+saBLLDLYu7oJp4ciKrpsq85DSIyu8DM1LXjR8CG7Gxdztw33SIf0LqAiAh9O/PkHocXTMMwjuMC9mw7+gTY4rQuMDP4rnluIfholqhuHPFUlI9N2zRN6wLz3JaSdVXYpstr9+dSLnZu2t+7iqbn8/l8PkdkHpvpXO0PTWAGNxSFylV1FjCv3WlpVcpnB9f/EkGYYaJztQ8TMnP5zEeY8Jqwr9vx5cT7707Ir9wIfMC5YW/YG/aGvWFv2Bv2hr1hb9gb9oa9YW/YG/aGvWFv2Bv2hr1h//L8D0MfsWihcEUwAAAAAElFTkSuQmCC"
    }
});