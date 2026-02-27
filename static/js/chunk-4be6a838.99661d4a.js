(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-4be6a838"], {
        "257a": function(t, e, n) {
            n("d18a")
        },
        5849: function(t, e, n) {
            n.r(e);
            var i = {
                    data: function() {
                        return {
                            show: !0,
                            transitionName: "",
                            timer: null,
                            timing: 0,
                            memberTimer: null,
                            noticeFlag: !1,
                            noticeList: [],
                            audioSrc: ""
                        }
                    },
                    methods: {
                        clientWidth: function() {
                            document.documentElement.clientWidth < 414 ? this.setClient("smallPhone") : this.setClient("bigPhone")
                        }
                    },
                    created: function() {},
                    mounted: function() {
                        this.clientWidth(), window.addEventListener("resize", this.clientWidth)
                    },
                    beforeDestroy: function() {
                        clearInterval(void 0), clearInterval(this.timer), clearInterval(this.memberTimer), document.addEventListener("click", this.changeEvent), document.addEventListener("touchstart", this.changeEvent)
                    }
                },
                n = (n("257a"), n("2877")),
                n = Object(n.a)(i, function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "layout"
                    }, [this.show ? [t("keep-alive", {
                        attrs: {
                            include: "GameHall,Game"
                        }
                    }, [t("router-view")], 1)] : [t("JsonLoading", {
                        attrs: {
                            opacity: !0
                        }
                    })]], 2)
                }, [], !1, null, "72e4b508", null);
            e.default = n.exports
        },
        d18a: function(t, e, n) {}
    }
]);