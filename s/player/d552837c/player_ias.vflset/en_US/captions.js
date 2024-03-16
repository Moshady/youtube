(function(g) {
    var window = this;
    'use strict';
    var job = function(a, b) {
            return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        kob = function(a, b) {
            var c = new g.uS;
            c.languageCode = a.languageCode;
            c.languageName = a.languageName;
            c.name = a.name;
            c.displayName = a.displayName;
            c.kind = a.kind;
            c.isDefault = !1;
            c.j = a.j;
            c.isTranslateable = a.isTranslateable;
            c.vssId = a.vssId;
            c.url = a.url;
            c.translationLanguage = b;
            a.xtags && (c.xtags = a.xtags);
            a.captionId && (c.captionId = a.captionId);
            return c
        },
        lob = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                if (1 == f.j) return c = a + "|" + b, g.z(f, g.DD(), 2);
                if (3 != f.j) {
                    d = f.B;
                    if (!d) throw g.gD("gct");
                    return g.z(f, g.JS(d), 3)
                }
                e = f.B;
                return f.return(e.get("captions", c))
            })
        },
        mob = function(a, b, c) {
            lob(a, b).then(function(d) {
                d && c(d.trackData, new g.uS(d.metadata))
            })
        },
        pob = function(a) {
            if (!nob.test(a)) throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace(oob, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        },
        qob = function() {
            return g.EC("yt-player-caption-display-settings")
        },
        s4 = function() {
            this.segments = []
        },
        rob = function(a, b) {
            var c = g.Tb(a.segments, b);
            0 <= c || 0 > c && 1 === (-c - 1) % 2 || (c = -c - 1, 0 < c && 1 === b - a.segments[c - 1] && c < a.segments.length && 1 === a.segments[c] - b ? (g.Gb(a.segments, c), g.Gb(a.segments, c - 1)) : 0 < c && 1 === b - a.segments[c - 1] ? a.segments[c - 1] = b : c < a.segments.length && 1 === a.segments[c] - b ? a.segments[c] = b : (g.Rb(a.segments, c, 0, b), g.Rb(a.segments, c + 1, 0, b)))
        },
        sob = function(a, b, c, d, e, f) {
            g.I.call(this);
            this.policy = a;
            this.player = b;
            this.ma = c;
            this.Z = d;
            this.G = e;
            this.Y = f;
            this.D = new s4;
            this.K = -1;
            this.C = this.B = this.j = null;
            this.N = new g.Ru(this.HY, 1E3, this);
            this.events = new g.DK(this);
            g.N(this, this.N);
            g.N(this, this.events);
            this.events.T(b, "SEEK_COMPLETE", this.MA);
            this.MA();
            this.HY()
        },
        tob = function(a) {
            return a.j && a.j.D ? a.j.D + a.player.Vc() < a.player.getCurrentTime() : !1
        },
        uob = function(a, b) {
            var c = g.SOa(b, a.policy, {}).Ve(),
                d = {
                    format: "RAW",
                    withCredentials: !0
                };
            if (a.policy.Ca) {
                d.method = "POST";
                var e = b.D,
                    f = (0, g.HZ)([120, 0]);
                e && g.CO(e, g.lVa);
                d.postBody = f
            }
            a.G && (d.responseType = "arraybuffer");
            a.C = g.PB(c, d, 3, 100).then(function(h) {
                a: {
                    h = h.xhr;a.isDisposed();
                    if (a.B) {
                        var l = !(a.G ? h.response : h.responseText) || 400 <= h.status,
                            m = g.HPa(h);
                        if (m) {
                            h = g.SOa(a.B, a.policy, {});
                            a.B.Tk(h, m);
                            uob(a, a.B);
                            break a
                        }
                        l ? a.player.qa("capfail", {
                            status: h.status
                        }) : (a.player.Fi().ji("fcb_r"), m = a.B.fb[0].Pa, null != a.Z && a.K !== m && (l = a.B.fb[0], a.G ? a.Z(h.response, 1E3 * (l.startTime + a.player.Vc())) :
                            a.Z(h.responseText, 1E3 * (l.startTime + a.player.Vc())), a.K = m))
                    }
                    a.B = null;a.C = null
                }
            }).Al(function(h) {
                a.B = null;
                a.C = null;
                var l;
                a.player.qa("capfail", {
                    status: null == (l = h.xhr) ? void 0 : l.status
                })
            });
            a.B = b;
            rob(a.D, a.B.fb[0].Pa)
        },
        t4 = function(a, b) {
            g.QV.call(this, b.U());
            this.j = a;
            this.J = b;
            this.C = null;
            this.G = !1;
            this.K = g.rJ(this.J.U()) && !this.j.isManifestless
        },
        wob = function(a, b) {
            var c = [],
                d;
            for (d in a.j.j)
                if (a.j.j.hasOwnProperty(d)) {
                    var e = a.j.j[d];
                    if (g.aYa(e, b || null)) {
                        var f = e.info.id,
                            h = f,
                            l = "." + f,
                            m = "",
                            n = "",
                            p = "";
                        if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.J.U().L("html5_expose_xtags_through_caption_track") && (n = e.xtags), p = e.id;
                        else {
                            e = f;
                            var q = g.hmb.get(e);
                            null == q && (q = vob[e] || vob[e.replace(/-/g, "_")], g.hmb.set(e, q));
                            h = q || h
                        }
                        c.push(new g.uS({
                            id: d,
                            languageCode: f,
                            languageName: h,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: l,
                            kind: m,
                            xtags: n,
                            captionId: p
                        }))
                    }
                }
            return c
        },
        xob = function(a, b) {
            return null != b && b in a.j.j ? a.j.j[b] : null
        },
        yob = function(a, b, c) {
            var d = [],
                e;
            for (e in a.j.j)
                if (a.j.j.hasOwnProperty(e)) {
                    var f = a.j.j[e];
                    if (g.aYa(f, c || null)) {
                        var h = f.info.captionTrack;
                        h && h.languageCode === b && d.push(f)
                    }
                }
            return d.length ? d[0] : null
        },
        zob = function() {
            var a = void 0;
            a = void 0 === a ? {} : a;
            var b = "suggest_correction" in g.vmb ? g.vmb.suggest_correction : "Edit caption";
            b = b || "";
            var c = {},
                d;
            for (d in a) {
                c = {
                    rE: c.rE
                };
                c.rE = d;
                var e = function(f) {
                    return function() {
                        return String(a[f.rE])
                    }
                }(c);
                b = b.replace(new RegExp("\\$\\{" + c.rE + "\\}", "gi"), e);
                b = b.replace(new RegExp("\\$" + c.rE, "gi"), e)
            }
            return b
        },
        u4 = function(a, b, c, d, e, f, h, l, m, n) {
            var p = n.isInline() && !0,
                q = {};
            Object.assign(q, b);
            Object.assign(q, a.params);
            Object.assign(q, c);
            var r = {};
            Object.assign(r, b.hf);
            a.params.hf && Object.assign(r, a.params.hf);
            Object.assign(r, c.hf);
            p && (q.windowOpacity = .6, r.backgroundOpacity = 0);
            q.hf = r;
            var t = 1 === q.Ri,
                v = [{
                    I: "span",
                    S: "captions-text",
                    X: {
                        style: "word-wrap: normal; display: block;"
                    }
                }],
                x, A, E;
            (l = l.jb("caption_edit_on_hover") && (null == (x = n.getVideoData().getPlayerResponse()) ? void 0 : null == (A = x.captions) ? void 0 : null == (E = A.playerCaptionsTracklistRenderer) ? void 0 : E.openTranscriptCommand)) &&
            v.unshift({
                I: "button",
                S: "caption-edit",
                X: {
                    tabindex: "0",
                    "aria-label": zob()
                },
                V: [{
                    I: "svg",
                    X: {
                        fill: "#e3e3e3",
                        height: "100%",
                        viewBox: "5 5 38 38",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        X: {
                            d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                        }
                    }]
                }]
            });
            g.V.call(this, {
                I: "div",
                S: "caption-window",
                X: {
                    id: "caption-window-" + a.id,
                    dir: t ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: q.lang
                },
                V: v
            });
            var F =
                this;
            this.K = [];
            this.Ea = !1;
            this.B = a;
            this.Na = this.Ma = null;
            this.playerWidth = f;
            this.playerHeight = h;
            this.N = null;
            this.maxWidth = .96 * f;
            this.maxHeight = .96 * h;
            this.j = q;
            this.Jc = c;
            this.va = b;
            this.D = this.Ga("captions-text");
            this.Vb = "" !== this.D.style.getPropertyValue("box-decoration-break") || "" !== this.D.style.getPropertyValue("-webkit-box-decoration-break");
            this.Wa = Aob(d, e, f, h);
            this.Lc = m;
            l && (this.G = this.Ga("caption-edit"), this.T(this.G, "click", function() {
                F.Lc()
            }));
            this.type = 0;
            this.eb = this.Wa * Bob(r);
            this.Db = p;
            a = new g.mV(this.element, !0);
            g.N(this, a);
            a.subscribe("dragstart", this.H2, this);
            a.subscribe("dragmove", this.G2, this);
            a.subscribe("dragend", this.F2, this);
            this.ib = this.Za = this.ub = this.tb = 0;
            a = "";
            this.j.windowOpacity && (a = pob(this.j.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
            b = {
                "background-color": a,
                display: !1 === this.j.isVisible ? "none" : "",
                "text-align": Cob[this.j.textAlign]
            };
            this.Vb && (b["border-radius"] = a ? this.eb / 8 + "px" : "");
            (this.C =
                2 === this.B.params.Ri || 3 === this.B.params.Ri) && Dob(this, this.element);
            g.ls(this.element, b);
            if (p) {
                var G;
                null == (G = this.element.parentElement) || G.style.setProperty("--caption-window-color", a)
            }
            switch (this.j.Ul) {
                case 0:
                case 1:
                case 2:
                    g.Zu(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.Zu(this.element, "ytp-caption-window-bottom")
            }
        },
        Dob = function(a, b) {
            var c = "vertical-rl";
            1 === a.j.qS && (c = "vertical-lr");
            g.Cf && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl");
            g.ls(b, "-o-writing-mode", c);
            g.ls(b, "-webkit-writing-mode", c);
            g.ls(b, "writing-mode", c);
            g.ls(b, "text-orientation", "upright");
            g.Zu(b, "ytp-vertical-caption");
            3 === a.B.params.Ri && (g.ls(b, "text-orientation", ""), g.ls(b, "transform", "rotate(180deg)"))
        },
        Bob = function(a) {
            var b = 1 + .25 * (a.fontSizeIncrement || 0);
            if (0 === a.offset || 2 === a.offset) b *= .8;
            return b
        },
        Eob = function(a, b) {
            var c = {},
                d = b.background ? b.background : a.j.hf.background;
            if (null != b.backgroundOpacity || b.background) {
                var e = null != b.backgroundOpacity ? b.backgroundOpacity : a.j.hf.backgroundOpacity;
                d = pob(d);
                c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
                a.Vb && (c["box-decoration-break"] = "clone", c["border-radius"] = a.eb / 8 + "px")
            }
            if (null != b.fontSizeIncrement || null != b.offset) c["font-size"] = a.Wa * Bob(b) + "px";
            d = 1;
            e = b.color || a.j.hf.color;
            if (b.color || null != b.textOpacity) e = pob(e), d = null == b.textOpacity ? a.j.hf.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")",
                c.color = e, c.fill = e;
            var f = b.charEdgeStyle;
            0 === f && (f = void 0);
            if (f) {
                e = "rgba(34, 34, 34, " + d + ")";
                var h = "rgba(204, 204, 204, " + d + ")";
                b.dN && (h = e = b.dN);
                var l = a.Wa / 16 / 2,
                    m = Math.max(l, 1),
                    n = Math.max(2 * l, 1),
                    p = Math.max(3 * l, 1),
                    q = Math.max(5 * l, 1);
                d = [];
                switch (f) {
                    case 4:
                        for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
                        break;
                    case 1:
                        n = 2 <= window.devicePixelRatio ? .5 : 1;
                        for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
                        break;
                    case 2:
                        d.push(m + "px " + m + "px " + h);
                        d.push("-" + m + "px -" + m + "px " + e);
                        break;
                    case 3:
                        for (p = 0; 5 > p; p++) d.push("0 0 " +
                            n + "px " + e)
                }
                c["text-shadow"] = d.join(", ")
            }
            e = "";
            switch (b.fontFamily) {
                case 1:
                    e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    e = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    e = g.ZB() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    e = '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            e && (c["font-family"] = e);
            e = b.offset;
            null == e && (e = a.j.hf.offset);
            switch (e) {
                case 0:
                    c["vertical-align"] = "sub";
                    break;
                case 2:
                    c["vertical-align"] = "super"
            }
            7 === b.fontFamily && (c["font-variant"] = "small-caps");
            b.bold && (c["font-weight"] = "bold");
            b.italic && (c["font-style"] =
                "italic");
            b.underline && (c["text-decoration"] = "underline");
            b.o8 && (c.visibility = "hidden");
            1 === b.WX && a.C && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.jS || g.fD, 3 === a.B.params.Ri ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
            if (1 === b.Co || 2 === b.Co || 3 === b.Co || 4 === b.Co || 5 === b.Co)
                if (g.jS) c["font-weight"] = "bold";
                else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.Co) {
                    case 4:
                    case 3:
                        c["text-emphasis-position"] =
                            "under left";
                        c["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right"
                }
            return c
        },
        v4 = function(a) {
            a = a.split("px");
            return 0 < a.length ? (a = Number(a[0])) ? a : 0 : 0
        },
        Fob = function(a) {
            a.N = g.If("SPAN");
            g.ls(a.N, {
                display: "block"
            });
            g.Zu(a.N, "caption-visual-line");
            a.D.appendChild(a.N)
        },
        Gob = function(a, b) {
            var c = g.If("SPAN");
            g.ls(c, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.ls(c, Eob(a, b));
            c.classList.add("ytp-caption-segment");
            a.N.appendChild(c);
            c.previousElementSibling && (g.ls(c.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.ls(c, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return c
        },
        Hob = function(a, b, c) {
            a.Ea = a.Ea || !!c;
            var d = {};
            Object.assign(d, a.j.hf);
            Object.assign(d, c || b.j);
            Object.assign(d, a.Jc.hf);
            (c = !a.N) && Fob(a);
            for (var e = a.Ma && a.Na && g.od(d, a.Na) ? a.Ma : Gob(a, d), f = "string" === typeof b.text, h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
                var m = 0 < l || !b.append,
                    n = h[l];
                m && !c ? (Fob(a), e = Gob(a, d)) : m && c && (c = !1);
                n && (e.appendChild(f ? g.Jf(n) : n), f || "RUBY" !== n.tagName || 4 !== n.childElementCount || g.jS || !g.ns(n.children[2], "text-emphasis") || (m = a.C ? "padding-right" : "padding-top", g.ns(n.children[2], "text-emphasis-position") && (m =
                    a.C ? "padding-left" : "padding-bottom"), g.Vc ? g.ls(e, m, "1em") : g.ls(e, m, "0.5em")))
            }
            a.Na = d;
            a.Ma = e;
            a.K.push(b)
        },
        Aob = function(a, b, c, d) {
            var e = b / 360 * 16;
            b >= a && (a = 640, d > 1.3 * c && (a = 480), e = c / a * 16);
            return e
        },
        Job = function() {
            this.C = this.time = this.mode = this.B = 0;
            this.D = new Iob(this);
            this.G = new Iob(this);
            this.j = [];
            this.clear()
        },
        Lob = function(a, b, c) {
            if (255 === a && 255 === b || !a && !b) return {
                Wu: a,
                xs: b,
                result: 0
            };
            a = Kob[a];
            b = Kob[b];
            if (a & 128) {
                var d;
                if (d = !(b & 128)) d = b, d = c.Le() && c.xs === d;
                if (d) return {
                    Wu: a,
                    xs: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                Wu: a,
                xs: b,
                result: 2
            };
            return {
                Wu: a,
                xs: b,
                result: 3
            }
        },
        Nob = function(a, b, c, d) {
            255 === b && 255 === c || !b && !c ? (45 === ++a.C && a.reset(), a.D.B.clear(), a.G.B.clear()) : (a.C = 0, Mob(a.D, b, c, d))
        },
        Oob = function(a, b) {
            a.j.sort(function(e, f) {
                var h = e.time - f.time;
                return 0 === h ? e.order - f.order : h
            });
            for (var c = g.u(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, 0 === d.type ? Nob(a, d.RV, d.SV, b) : 1 === d.type && a.B & 496 && Mob(a.G, d.RV, d.SV, b);
            a.j.length = 0
        },
        w4 = function() {
            this.type = 0
        },
        x4 = function() {
            this.state = this.xs = this.Wu = 0
        },
        Pob = function() {
            this.timestamp = this.j = 0
        },
        y4 = function(a) {
            this.D = a;
            this.B = [];
            this.j = this.col = this.row = 0;
            this.style = new w4;
            for (a = this.C = 0; 15 >= a; a++) {
                this.B[a] = [];
                for (var b = 0; 32 >= b; b++) this.B[a][b] = new Pob
            }
        },
        z4 = function(a, b) {
            if (3 === a.style.type) {
                for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; 15 >= m; ++m) {
                    for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
                        var q = a.B[m][p];
                        if (0 !== q.j) {
                            0 === c && (c = m, d = p);
                            n = String.fromCharCode(q.j);
                            var r = q.timestamp;
                            r < e && (e = r);
                            q.timestamp = l;
                            h && (f += h, h = "");
                            f += n;
                            n = !0
                        }
                        if ((0 === q.j || 32 === p) && n) {
                            h = "\n";
                            break
                        } else if (d && !n) break
                    }
                    if (c && !n) break
                }
                f && b.D(c, d, e, l, f)
            } else
                for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h)
                    for (l = "", m = 1; 32 >= m; ++m)
                        if (p = a.B[h][m], q = p.j, 0 !== q && (0 === c && (c = h, d = m), n = String.fromCharCode(q), r = p.timestamp, r <= e && (e = r), l += n, p.reset()), 32 === m || 0 === q) l && b.D(c, d, e, f, l), e = f, l = "", d = c = 0
        },
        Uob = function(a, b) {
            switch (a) {
                case 0:
                    return Qob[(b & 127) - 32];
                case 1:
                    return Rob[b & 15];
                case 2:
                    return Sob[b & 31];
                case 3:
                    return Tob[b & 31]
            }
            return 0
        },
        A4 = function(a) {
            return a.B[a.row][a.col]
        },
        B4 = function(a, b, c) {
            2 <= b && 1 < a.col && (--a.col, A4(a).j = 0);
            var d = A4(a);
            d.timestamp = a.D.time + 0;
            d.j = Uob(b, c);
            32 > a.col && a.col++
        },
        Vob = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var h = a.B[b + e][f],
                        l = a.B[c + e][f];
                    h.j = l.j;
                    h.timestamp = l.timestamp
                }
        },
        C4 = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset()
        },
        Wob = function(a) {
            a.row = 0 < a.j ? a.j : 1;
            a.col = 1;
            C4(a, 0, 15)
        },
        Xob = function(a) {
            this.C = a;
            this.G = 0;
            this.style = new w4;
            this.K = new y4(this.C);
            this.N = new y4(this.C);
            this.text = new y4(this.C);
            this.B = this.K;
            this.D = this.N;
            this.j = this.B
        },
        Yob = function(a, b, c) {
            var d = a.B,
                e = !1;
            switch (a.style.get()) {
                case 4:
                case 1:
                case 2:
                    4 === a.style.get() && 0 < d.j || (z4(d, c), Wob(a.B), Wob(a.D), d.row = 15, d.j = b, e = !0)
            }
            a.style.set(3);
            a.j = d;
            a.j.style = a.style;
            a.C.mode = 1 << d.C;
            e ? d.col = 1 : d.j !== b && (d.j > b ? (z4(d, c), C4(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b)
        },
        Zob = function(a) {
            a.style.set(1);
            a.j = a.D;
            a.j.j = 0;
            a.j.style = a.style;
            a.C.mode = 1 << a.j.C
        },
        $ob = function(a) {
            a.style.set(4);
            a.j = a.text;
            a.j.style = a.style;
            a.C.mode = 1 << a.j.C
        },
        Iob = function(a) {
            this.j = a;
            this.G = 0;
            this.C = new Xob(this.j);
            this.K = new Xob(this.j);
            this.B = new x4;
            this.D = this.C
        },
        Mob = function(a, b, c, d) {
            a.B.update();
            b = Lob(b, c, a.B);
            switch (b.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var e = b.Wu;
            c = b.xs;
            if (32 <= e || !e) a.j.mode & a.j.B && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.D.j, b & 96 && B4(a, 0, b), c & 96 && B4(a, 0, c), 0 !== b && 0 !== c && 3 === a.style.type && z4(a, d));
            else if (e & 16) a: if (!a.B.matches(e, c) && (b = a.B, b.Wu = e, b.xs = c, b.state = 2, b = e & 8 ? a.K : a.C, a.D = b, a.j.mode = 1 << (a.G << 2) + (b.G << 1) + (4 === b.style.type ? 1 : 0), (a.j.mode | 1 << (a.G << 2) + (b.G << 1) + (4 !== b.style.type ? 1 : 0)) & a.j.B))
                if (c & 64) {
                    d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
                    a = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                    c = b.j;
                    switch (b.style.get()) {
                        case 4:
                            d = c.row;
                            break;
                        case 3:
                            if (d !== c.row) {
                                if (d < c.j && (d = c.j, d === c.row)) break;
                                var f = 1 + c.row - c.j,
                                    h = 1 + d - c.j;
                                Vob(c, h, f, c.j);
                                b = f;
                                e = c.j;
                                h < f ? (f = h + e - f, 0 < f && (b += f, e -= f)) : (f = f + e - h, 0 < f && (e -= f));
                                C4(c, b, e)
                            }
                    }
                    c.row = d;
                    c.col = a + 1
                } else switch (e & 7) {
                    case 1:
                        switch (c & 112) {
                            case 32:
                                B4(b.j, 0, 32);
                                break a;
                            case 48:
                                57 === c ? (d = b.j, A4(d).j = 0, 32 > d.col && d.col++) : B4(b.j, 1, c & 15)
                        }
                        break;
                    case 2:
                        c & 32 && B4(b.j, 2, c & 31);
                        break;
                    case 3:
                        c & 32 && B4(b.j, 3, c & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= c && 47 >= c) switch (c) {
                            case 32:
                                Zob(b);
                                break;
                            case 33:
                                d = b.j;
                                1 < d.col && (--d.col, A4(d).j = 0);
                                break;
                            case 36:
                                d = b.j;
                                b = A4(d);
                                for (a = 0; 15 >= a; a++)
                                    for (c = 0; 32 >= c; c++)
                                        if (d.B[a][c] === b) {
                                            for (; 32 >= c; c++) d.B[a][c].reset();
                                            break
                                        }
                                break;
                            case 37:
                                Yob(b, 2, d);
                                break;
                            case 38:
                                Yob(b, 3, d);
                                break;
                            case 39:
                                Yob(b, 4, d);
                                break;
                            case 40:
                                B4(b.j, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.j = b.B;
                                b.j.j = 0;
                                b.j.style = b.style;
                                b.C.mode = 1 << b.j.C;
                                break;
                            case 42:
                                d = b.text;
                                d.j = 15;
                                d.style.set(4);
                                Wob(d);
                                $ob(b);
                                break;
                            case 43:
                                $ob(b);
                                break;
                            case 44:
                                a = b.B;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        z4(a,
                                            d)
                                }
                                C4(a, 0, 15);
                                break;
                            case 45:
                                b: {
                                    a = b.j;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (15 > a.row) {
                                                ++a.row;
                                                a.col = 1;
                                                break b
                                            }
                                        case 3:
                                    }
                                    2 > a.j && (a.j = 2, a.row < a.j && (a.row = a.j));b = a.row - a.j + 1;z4(a, d);Vob(a, b, b + 1, a.j - 1);C4(a, a.row, 1)
                                }
                                break;
                            case 46:
                                C4(b.D, 0, 15);
                                break;
                            case 47:
                                z4(b.B, d), b.D.updateTime(b.C.time + 0), d = b.D, b.D = b.B, b.B = d, Zob(b)
                        }
                        break;
                    case 7:
                        switch (c) {
                            case 33:
                            case 34:
                            case 35:
                                d = b.j, 32 < (d.col += c & 3) && (d.col = 32)
                        }
                }
        },
        apb = function() {},
        D4 = function(a, b, c, d, e, f, h) {
            f = void 0 === f ? !1 : f;
            h = void 0 === h ? null : h;
            g.PJ.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.windowId = d;
            this.text = e;
            this.append = f;
            this.j = h
        },
        cpb = function(a, b, c, d, e, f, h) {
            var l = f[0],
                m = h[l.getAttribute("p")];
            if (1 === m.pg) {
                var n = f[1],
                    p = f[2];
                f = f[3];
                l.getAttribute("t");
                n.getAttribute("t");
                p.getAttribute("t");
                f.getAttribute("t");
                l.getAttribute("p");
                n.getAttribute("p");
                f.getAttribute("p");
                h = h[p.getAttribute("p")];
                l = bpb(l.textContent, n.textContent, p.textContent, f.textContent, h);
                return new D4(a, b, e, c, l, d, m)
            }
            switch (m.pg) {
                case 9:
                case 10:
                    m.Co = 1;
                    break;
                case 11:
                    m.Co = 2;
                    break;
                case 12:
                    m.Co = 3;
                    break;
                case 13:
                    m.Co = 4;
                    break;
                case 14:
                    m.Co = 5
            }
            return new D4(a, b, e, c, l.textContent || "", d, m)
        },
        bpb = function(a, b, c, d, e) {
            var f = g.ZB(),
                h =
                f ? g.If("DIV") : g.If("RUBY"),
                l = g.If("SPAN");
            l.textContent = a;
            h.appendChild(l);
            a = f ? g.If("DIV") : g.If("RP");
            a.textContent = b;
            h.appendChild(a);
            b = f ? g.If("DIV") : g.If("RT");
            b.textContent = c;
            h.appendChild(b);
            c = e.pg;
            if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c)
                if (g.ls(b, "text-emphasis-style", "filled circle"), g.ls(b, "text-emphasis-color", "currentcolor"), g.ls(b, "webkit-text-emphasis", "filled circle"), 11 === e.pg || 13 === e.pg) g.ls(b, "webkit-text-emphasis-position", "under left"), g.ls(b, "text-emphasis-position", "under left");
            c = !0;
            if (4 === e.pg || 7 === e.pg || 12 === e.pg ||
                14 === e.pg) g.ls(h, "ruby-position", "over"), g.ls(h, "-webkit-ruby-position", "before");
            else if (5 === e.pg || 6 === e.pg || 11 === e.pg || 13 === e.pg) g.ls(h, "ruby-position", "under"), g.ls(h, "-webkit-ruby-position", "after"), c = !1;
            e = f ? g.If("DIV") : g.If("RP");
            e.textContent = d;
            h.appendChild(e);
            f && (d = c, g.ls(h, {
                display: "inline-block",
                position: "relative"
            }), f = h.firstElementChild.nextElementSibling, g.ls(f, "display", "none"), f = f.nextElementSibling, g.ls(f, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.ls(h.lastElementChild, "display", "none"), d ? (g.ls(h, "padding-top", "0.6em"), g.ls(f, "top", "0")) : (g.ls(h, "padding-bottom", "0.6em"), g.ls(f, "bottom", "0")));
            return h
        },
        E4 = function() {
            g.I.apply(this, arguments)
        },
        F4 = function(a, b, c, d, e) {
            g.PJ.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.id = d;
            this.params = e;
            this.j = []
        },
        dpb = function(a) {
            var b = "_" + G4++;
            return new F4(0, 0x8000000000000, 0, b, a)
        },
        H4 = function(a) {
            E4.call(this);
            this.C = a;
            this.pens = {};
            this.N = {};
            this.Z = {};
            this.D = "_" + G4++;
            this.K = {};
            this.B = this.j = null;
            this.G = !0
        },
        I4 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return Number(a)
        },
        J4 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return "1" === a
        },
        K4 = function(a, b) {
            a = I4(a, b);
            return void 0 !== a ? a : null
        },
        M4 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return L4.test(a), a
        },
        epb = function(a, b) {
            var c = {},
                d = b.getAttribute("ws");
            Object.assign(c, d ? a.Z[d] : a.C);
            a = K4(b, "mh");
            null != a && (c.xA = a);
            a = K4(b, "ju");
            null != a && (c.textAlign = a);
            a = K4(b, "pd");
            null != a && (c.Ri = a);
            a = K4(b, "sd");
            null != a && (c.qS = a);
            a = M4(b, "wfc");
            null != a && (c.windowColor = a);
            b = I4(b, "wfo");
            void 0 !== b && (c.windowOpacity = b / 255);
            return c
        },
        fpb = function(a, b) {
            var c = {},
                d = b.getAttribute("wp");
            d && Object.assign(c, a.N[d]);
            a = K4(b, "ap");
            null != a && (c.Ul = a);
            a = I4(b, "cc");
            null != a && (c.Bs = a);
            a = I4(b, "ah");
            null != a && (c.pk = a);
            a = I4(b, "rc");
            null != a && (c.Cr = a);
            b = I4(b, "av");
            null != b && (c.Do = b);
            return c
        },
        gpb = function(a, b, c, d) {
            var e = {};
            Object.assign(e, fpb(a, b));
            Object.assign(e, epb(a, b));
            d ? g.od(e, a.C) ? (d = a.D, e = a.C) : d = "_" + G4++ : d = b.getAttribute("id") || "_" + G4++;
            a = I4(b, "t") + c;
            b = I4(b, "d") || 0x8000000000000;
            if (2 === e.Ri || 3 === e.Ri) c = e.Cr, e.Cr = e.Bs, e.Bs = c;
            return new F4(a, b, 0, d, e)
        },
        N4 = function(a) {
            E4.call(this);
            this.G = a;
            this.j = new Map;
            this.C = new Map;
            this.D = new Map;
            this.B = new Map
        },
        O4 = function(a) {
            a = g.He(Math.round(a), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substr(0, 7 - a.length) + a
        },
        hpb = function(a, b, c, d, e) {
            0 === d && (d = 0x8000000000000);
            var f = {};
            b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
            b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
            a = b.rcRowCount;
            void 0 !== a && (f.Cr = a);
            b = b.ccColCount;
            void 0 !== b && (f.Bs = b);
            if (2 === f.Ri || 3 === f.Ri) b = f.Cr, f.Cr = f.Bs, f.Bs = b;
            return new F4(c, d, 0, e, f)
        },
        P4 = function(a, b, c, d) {
            g.QV.call(this, a);
            this.videoData = b;
            this.audioTrack = c;
            this.Va = d;
            this.D = b.Eu
        },
        Q4 = function(a, b, c, d, e, f, h, l, m, n) {
            u4.call(this, a, b, c, d, e, f, h, l, m, n);
            this.type = 1
        },
        R4 = function(a, b, c) {
            this.trackData = a;
            this.K = c;
            this.version = this.G = this.C = this.byteOffset = 0;
            this.j = new DataView(this.trackData);
            this.B = []
        },
        S4 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 1;
            return a.j.getUint8(b)
        },
        T4 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 4;
            return a.j.getUint32(b)
        },
        U4 = function(a, b) {
            E4.call(this);
            this.B = a;
            this.C = b;
            this.track = "CC3" === this.C.languageName ? 4 : 0;
            this.j = new Job;
            this.j.B = 1 << this.track
        },
        jpb = function(a) {
            if ("string" === typeof a) return !1;
            a = new R4(a, 8, 0);
            return ipb(a)
        },
        ipb = function(a) {
            if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== T4(a)) return !1;
            a.version = S4(a);
            if (1 < a.version) return !1;
            S4(a);
            S4(a);
            S4(a);
            return !0
        },
        V4 = function(a, b, c, d, e, f, h, l, m, n) {
            u4.call(this, a, b, c, d, e, f, h, l, m, n);
            var p = this;
            this.type = 2;
            this.Ca = [];
            this.ma = this.Y = this.Ra = 0;
            this.Ia = NaN;
            this.Pb = 0;
            this.jc = null;
            this.Xa = new g.Ru(this.taa, 433, this);
            this.G && (n.createClientVe(this.G, this, 167342), this.T(this.G, "click", function() {
                n.logClick(p.G)
            }), a = new g.mV(this.element, !0), g.N(this, a), a.subscribe("hoverstart", function() {
                n.logVisibility(p.G, !0)
            }, this));
            g.Zu(this.element, "ytp-caption-window-rollup");
            g.N(this, this.Xa);
            g.ls(this.element, "overflow", "hidden")
        },
        kpb = function(a, b) {
            if (!b) return "";
            a.C && 1 !== a.B.params.qS && (b *= -1);
            return "translate" + (a.C ? "X" : "Y") + "(" + b + "px)"
        },
        lpb = function(a) {
            a.Ca = Array.from(document.getElementsByClassName("caption-visual-line"));
            for (var b = a.B.params.Cr, c = 0, d = 0, e = a.Ca.length - 1; c < b && -1 < e;) {
                var f = a.Ca[e];
                d += a.C ? f.offsetWidth : f.offsetHeight;
                c++;
                e--
            }
            a.Y = d;
            b = Math;
            c = b.max;
            isNaN(a.Ia) && ((d = a.j.Bs) ? (e = g.If("SPAN"), g.Vf(e, "\u2013".repeat(d)), g.ls(e, Eob(a, a.j.hf)), a.D.appendChild(e), a.Ia = e.offsetWidth, a.D.removeChild(e)) : a.Ia = 0);
            d = a.D;
            a.ma = c.call(b, a.Ia, a.Pb, (a.C ? d.offsetHeight : d.offsetWidth) + 1)
        },
        mpb = function(a, b) {
            lpb(a);
            var c = a.Ca.reduce(function(f, h) {
                return (a.C ? h.offsetWidth : h.offsetHeight) + f
            }, 0);
            c = a.Y - c;
            if (c !== a.Ra) {
                var d = 0 < c && 0 === a.Ra,
                    e = c < a.Ra;
                b || isNaN(c) || d || !e || (g.Zu(a.element, "ytp-rollup-mode"), g.Su(a.Xa));
                g.ls(a.D, "transform", kpb(a, c));
                a.Ra = c
            }
            lpb(a)
        },
        W4 = function() {
            E4.call(this)
        },
        npb = function(a, b, c, d, e, f, h, l, m) {
            switch (h.tagName) {
                case "b":
                    l.bold = !0;
                    break;
                case "i":
                    l.italic = !0;
                    break;
                case "u":
                    l.underline = !0
            }
            for (var n = 0; n < h.childNodes.length; n++) {
                var p = h.childNodes[n];
                if (3 === p.nodeType) p = new D4(b, c, d, e.id, p.nodeValue, f || 0 < n, g.md(l) ? void 0 : l), m.push(p), e.j.push(p);
                else {
                    var q = {};
                    Object.assign(q, l);
                    npb(a, b, c, d, e, !0, p, q, m)
                }
            }
        },
        opb = function(a) {
            var b = a.split(":");
            a = 0;
            b = g.u(b);
            for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + Number(c.value);
            return 1E3 * a
        },
        ppb = function(a, b, c, d) {
            d = Object.assign({
                xA: 0
            }, d);
            return new F4(a, b, c, "_" + G4++, d)
        },
        X4 = function(a, b) {
            g.I.call(this);
            this.J = a;
            this.W = b;
            this.j = null;
            this.B = this.J.Ez()
        },
        qpb = function(a) {
            if ("string" === typeof a || jpb(a)) return a;
            var b = new DataView(a);
            if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
            b = g.XP(b, 0, 1835295092);
            if (!b || !b.size) return "";
            a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
            return g.hO(a)
        },
        spb = function(a, b, c) {
            if ("string" === typeof b || jpb(b)) return [{
                trackData: b,
                kS: c
            }];
            var d = new DataView(b);
            if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
            var e = g.oOa(d);
            if (a.B && e) {
                var f = g.fOa(e),
                    h = g.gOa(e);
                e = e.j;
                f && e && a.B.uG(e, f, h)
            }
            a = g.dQ(d, 1835295092);
            if (!a || !a.length || !a[0].size) return [];
            f = [];
            for (h = 0; h < a.length; h++) e = a[h], e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.hO(e), f.push({
                trackData: e,
                kS: c + 1E3 * h
            });
            rpb(d, f, c);
            return f = f.filter(function(l) {
                return !!l.trackData
            })
        },
        rpb = function(a, b, c) {
            var d = g.XP(a, 0, 1836476516),
                e = 9E4;
            d && (e = g.YP(d) || 9E4);
            d = 0;
            for (var f = g.dQ(a, 1836019558), h = 0; h < f.length; h++) {
                var l = f[h];
                h < b.length && (l = g.XP(a, l.dataOffset, 1953653094)) && (l = g.XP(a, l.dataOffset, 1952867444)) && (l = g.lOa(l) / e * 1E3, 0 === h && (d = l), b[h].kS = l - d + c || c * h * 1E3)
            }
        },
        tpb = function(a, b, c, d, e) {
            if (!jpb(c)) throw Error("Invalid binary caption track data");
            a.j || (a.j = new U4(e, b));
            return a.j.Zn(c, d)
        },
        upb = function(a, b, c) {
            a.j || (a.j = new W4);
            a = a.j.Zn(b, c);
            .01 > Math.random() && g.pF(Error("Deprecated subtitles format in web player: WebVTT"));
            return a
        },
        wpb = function(a, b, c, d) {
            if ("{" === c[0]) try {
                return a.j || (a.j = new N4(vpb(b))), a.j.Zn(c, d)
            } catch (f) {
                return g.oF(f), []
            }
            var e = g.l2(c);
            if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
            if ("timedtext" === e.firstChild.tagName) {
                if (3 === Number(e.firstChild.getAttribute("format"))) return a.j || (a.j = new H4(vpb(b), a.W)), a.j.Zn(e, d);
                a = Error("Unsupported subtitles format in web player (Format2)");
                a.params = c;
                throw a;
            }
            if ("transcript" === e.firstChild.tagName) throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
            a = Error("Invalid caption track data");
            a.params = c;
            throw a;
        },
        vpb = function(a) {
            var b = {};
            if (a = g.xS(a)) b.lang = a, g.rib.test(a) && (b.Ri = 1);
            return b
        },
        Y4 = function(a) {
            g.NV.call(this, a);
            var b = this;
            this.J = a;
            this.W = this.J.U();
            this.videoData = this.J.getVideoData();
            this.ub = this.J.qb();
            var c;
            this.ib = null == (c = this.J.getVideoData(1)) ? void 0 : g.JT(c);
            this.C = {
                hf: {}
            };
            this.G = {
                hf: {}
            };
            this.Ea = [];
            this.va = {};
            this.Wa = {};
            this.Y = !1;
            this.Vb = g.KT(this.videoData);
            this.Za = g.bYa(this.videoData, this.J);
            this.Pb = !!this.videoData.captionTracks.length;
            this.jc = !!this.videoData.Yd;
            this.Xa = "3" === this.W.controlsType;
            this.j = this.N = this.Z = this.Ra = this.tb = null;
            this.eb = new X4(this.J, this.W);
            this.B = null;
            this.Ca = new g.DK(this);
            this.K = new g.V({
                I: "div",
                S: "ytp-caption-window-container",
                X: {
                    id: "ytp-caption-window-container"
                }
            });
            this.ma = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            c = null;
            var d = g.Rv("yt-html5-player-modules::subtitlesModuleData");
            d && (c = new g.Bv(d));
            this.storage = c;
            var e;
            this.Mb = !(null == (e = a.nf()) || !e.lG());
            this.D = xpb(this);
            this.Ia = !this.D && this.Xa && this.Mb && this.Za;
            g.N(this, this.eb);
            this.D ? this.Na = this.Ma = null : (this.Ma = new g.Pu(this.ES, void 0, this), g.N(this, this.Ma), this.Na = new g.Ru(this.eca, 2E3, this), g.N(this,
                this.Na));
            g.N(this, this.Ca);
            g.kU(this.player, this.K.element, 4);
            g.N(this, this.K);
            this.D || this.Ca.T(a, "resize", this.GS);
            (this.Db = g.UR(this.W) && !g.pC() && !this.J.isFullscreen() && !this.D && !this.Ia) && this.Ca.T(a, "resize", this.z$);
            this.Ca.T(a, "onPlaybackAudioChange", this.P9);
            this.Ca.T(a, g.QJ("captions"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.Ca.T(a, g.RJ("captions"), function(f) {
                b.onCueRangeExit(f)
            });
            this.ib && this.Ca.T(a, "videodatachange", function(f, h) {
                b.onVideoDataChange(f, h)
            });
            ypb(this, qob() || {});
            this.player.Ac("onCaptionsModuleAvailable")
        },
        Bpb = function(a) {
            if (1 === a.W.Db || 1 === a.videoData.rF || "alwayson" === g.qT(a.videoData, "yt:cc")) return !0;
            if (a.videoData.captionTracks.length) var b = a.getAudioTrack().B;
            if (2 === a.W.Db) {
                if (g.gS(a.W)) var c = zpb(a);
                else if (a.storage) try {
                    c = a.storage.get("module-enabled")
                } catch (e) {
                    a.storage.remove("module-enabled")
                } else c = null;
                if (null != c) return !!c
            }
            c = job(a.player.getAudioTrack(), g.gS(a.W));
            var d = g.qT(a.videoData, "yt:cc");
            if (void 0 === Apb(a)) {
                if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c) return d ? "on" === d : !0;
                if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d
            } else return "on" === d;
            return "ON" === b || "on" ===
                g.qT(a.videoData, "yt:cc")
        },
        Z4 = function(a, b) {
            if (a.B && (void 0 === b || !b) || !a.videoData.captionTracks.length) return !1;
            a = a.getAudioTrack();
            return !!a.j || "FORCED_ON" === a.B
        },
        Apb = function(a) {
            var b = void 0,
                c = g.JC(g.IC(), 65);
            if (g.gS(a.W) && null != c) {
                if (null != zpb(a)) return !1;
                b = !c
            }
            return b
        },
        Cpb = function(a) {
            var b;
            a.Vb ? b = new P4(a.W, a.videoData, a.getAudioTrack(), a.player) : a.Za ? b = new t4(a.videoData.j, a.player) : a.Pb ? b = new g.RV(a.W, a.videoData, a.getAudioTrack()) : b = new g.VV(a.W, a.videoData.Yd, a.videoData.videoId, g.ZTa(a.videoData), a.videoData.Qm, a.videoData.eventId);
            return b
        },
        a5 = function(a, b) {
            if (a.j) {
                if (a.N && a.N.D) return a.N.D;
                g.CT(a.videoData) && (b = !0);
                b || (b = a.jc ? !1 : a.Pb ? !1 : !0);
                b = b || Dpb(a);
                b = g.OV(a.j.B, b);
                var c = null;
                if (g.gS(a.W)) {
                    var d = a.J.isInline() ? void 0 : g.EC("yt-player-caption-sticky-language");
                    for (var e = [d, a.videoData.captionsLanguagePreference, a.W.captionsLanguagePreference, g.qT(a.videoData, "yt:cc_default_lang")], f = !1, h = 0; h < e.length; h++) {
                        var l = e[h];
                        if (l) {
                            f = !0;
                            for (var m = 0; m < b.length; m++)
                                if (g.xS(b[m]) === l) return b[m];
                            for (m = 0; m < b.length; m++)
                                if (g.xS(b[m]).split("-")[0] === l.split("-")[0]) return b[m]
                        }
                    }
                    if (f && a.j && (e = a.j.D,
                            e.length))
                        for (e = g.u(e), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.languageCode === d) {
                                c = f;
                                break
                            }
                } else
                    for (d = [a.videoData.captionsLanguagePreference, a.W.captionsLanguagePreference, g.qT(a.videoData, "yt:cc_default_lang")], e = 0; e < d.length; e++)
                        for (f = 0; f < b.length; f++)
                            if (g.xS(b[f]) === d[e]) return b[f];
                d = null;
                a.N && a.N.C && (d = a.N.C);
                d || (d = b.find(function(n) {
                    return n.isDefault
                }) || null);
                d || (d = b[0] || $4(a));
                d && c && g.xS(d).split("-")[0] !== c.languageCode.split("-")[0] && (d = kob(d, c));
                return d
            }
            return null
        },
        $4 = function(a) {
            return a.N && a.N.j
        },
        b5 = function(a) {
            var b = $4(a);
            return !!b && a.B === b
        },
        Epb = function(a) {
            var b = job(a.player.getAudioTrack(), g.gS(a.W)),
                c;
            "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b ? c = a5(a, a.Y) : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && Z4(a) ? c = $4(a) : Apb(a) || a.Y || Bpb(a) ? c = a5(a, a.Y) : Z4(a) && (c = $4(a));
            if (a.D || a.Ia) {
                var d = g.OV(a.j.B, !0);
                b = [];
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = g.If("TRACK");
                    h.setAttribute("kind", "subtitles");
                    h.setAttribute("label", g.vS(f));
                    h.setAttribute("srclang", g.xS(f));
                    h.setAttribute("id", f.toString());
                    a.Ia || h.setAttribute("src", a.j.Kv(f, "vtt"));
                    f === c && h.setAttribute("default", "1");
                    b.push(h)
                }
                c = a.J.nf();
                c.NC(b);
                c =
                    c.Kb();
                a.Mb && a.Ca.T(c.textTracks, "change", a.bba)
            } else !a.B && c && c5(a, c), a.player.Ac("onCaptionsTrackListChanged"), a.player.Dm("onApiChange")
        },
        Fpb = function(a, b) {
            var c = a.J.nf().Kb().textTracks;
            a = a.B.toString();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.id === a && (b ? "showing" !== e.mode && (e.mode = "showing") : "showing" === e.mode && (e.mode = "disabled"))
            }
        },
        c5 = function(a, b, c) {
            a.loaded && a.unload();
            null != c && (a.Y = c, a.Y && (g.gS(a.W) ? d5(a, !!b) : e5(a, !!b)));
            a.B = b;
            Z4(a) && (a.B = $4(a));
            var d;
            Gpb(a, null != (d = a.B) ? d : void 0);
            a.load()
        },
        Ipb = function(a, b) {
            if (b instanceof F4) {
                var c = a.va[b.id];
                c && c.B !== b && (c.dispose(), delete a.va[b.id], c = null);
                c || (c = Hpb(a, b)) && (a.va[b.id] = c)
            } else c = b.windowId, a.Wa[c] || (a.Wa[c] = []), a.Wa[c].push(b)
        },
        Hpb = function(a, b) {
            var c = Jpb(a);
            if (!c) return null;
            var d = a.B ? g.xS(a.B) : null;
            d && g.rib.test(d) && (b.params.Ri = 1);
            var e = a.ub.getPlayerSize();
            d = e.height * a.ma.height;
            e = e.width * a.ma.width;
            "google-live" !== a.W.playerStyle || a.C.isDefault || Object.assign(b.params, a.C);
            switch (null != b.params.xA ? b.params.xA : 1 < b.j.length ? 1 : 0) {
                case 1:
                    return new Q4(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.JL.bind(a), a.J);
                case 2:
                    return new V4(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.JL.bind(a), a.J);
                default:
                    return new u4(b, a.C, a.G, c.width, c.height, e,
                        d, a.W.experiments, a.JL.bind(a), a.J)
            }
        },
        ypb = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = f5.hf;
            a.C = {};
            Object.assign(a.C, f5);
            a.C.hf = {};
            Object.assign(a.C.hf, d);
            a.G = {
                hf: {}
            };
            var e = b.backgroundOverride ? a.G : a.C,
                f = b.background || d.background;
            L4.test(f);
            e.hf.background = f;
            e = b.colorOverride ? a.G : a.C;
            f = b.color || d.color;
            L4.test(f);
            e.hf.color = f;
            e = b.windowColorOverride ? a.G : a.C;
            f = b.windowColor || f5.windowColor;
            L4.test(f);
            e.windowColor = f;
            e = b.backgroundOpacityOverride ? a.G : a.C;
            f = b.backgroundOpacity;
            null == f && (f = d.backgroundOpacity);
            e.hf.backgroundOpacity = f;
            e = b.fontSizeIncrementOverride ? a.G : a.C;
            f = b.fontSizeIncrement;
            null == f && (f = d.fontSizeIncrement);
            e.hf.fontSizeIncrement = f;
            f = b.fontStyleOverride ? a.G : a.C;
            e = b.fontStyle;
            null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
            f = f.hf;
            switch (e) {
                case 1:
                    f.bold = !0;
                    delete f.italic;
                    break;
                case 2:
                    delete f.bold;
                    f.italic = !0;
                    break;
                case 3:
                    f.bold = !0;
                    f.italic = !0;
                    break;
                default:
                    delete f.bold, delete f.italic
            }
            e = b.textOpacityOverride ? a.G : a.C;
            f = b.textOpacity;
            null == f && (f = d.textOpacity);
            e.hf.textOpacity = f;
            e = b.windowOpacityOverride ? a.G : a.C;
            f = b.windowOpacity;
            null == f && (f = f5.windowOpacity);
            e.windowOpacity =
                f;
            e = b.charEdgeStyleOverride ? a.G : a.C;
            f = b.charEdgeStyle;
            null == f && (f = d.charEdgeStyle);
            e.hf.charEdgeStyle = f;
            e = b.fontFamilyOverride ? a.G : a.C;
            f = b.fontFamily;
            null == f && (f = d.fontFamily);
            e.hf.fontFamily = f;
            a.loaded && a.GS();
            c && g.DC("yt-player-caption-display-settings", b, 2592E3)
        },
        Lpb = function(a, b, c) {
            b && !a.Z ? (b = dpb({
                Ri: 0,
                lang: "en"
            }), a.Z = [b, new D4(b.start, b.end - b.start, 0, b.id, null != c ? c : "Captions look like this")], a.player.Af(a.Z)) : !b && a.Z && (Kpb(a, a.Z), a.Z = null)
        },
        Kpb = function(a, b) {
            a.player.Ao(b);
            b = g.u(b);
            for (var c = b.next(); !c.done; c = b.next()) g.Ib(a.Ea, c.value);
            g.Qu(a.Ma)
        },
        Gpb = function(a, b) {
            a.W.L("html5_modify_caption_vss_logging") && (a.videoData.ZB = b)
        },
        Jpb = function(a) {
            var b = a.ub.getVideoContentRect(!0).height,
                c = a.ub.getVideoContentRect(!0).width;
            if (!b || !c) return null;
            b *= a.ma.height;
            c *= a.ma.width;
            return {
                width: c,
                height: b
            }
        },
        e5 = function(a, b) {
            if (a.storage) try {
                a.storage.set("module-enabled", b)
            } catch (c) {}
        },
        d5 = function(a, b) {
            a.J.isInline() || g.DC("yt-player-sticky-caption", b, 2592E3)
        },
        zpb = function(a) {
            if (!a.J.isInline()) return g.EC("yt-player-sticky-caption")
        },
        xpb = function(a) {
            var b, c = !(null == (b = a.J.nf()) || !b.kG());
            return a.Xa && c && !a.Za
        },
        Dpb = function(a) {
            return a.W.L("web_deprecate_always_includes_asr_setting") && g.gS(a.W) ? !0 : !!g.JC(g.IC(), 66)
        };
    g.FY.prototype.DD = g.fa(45, function(a) {
        var b = 2;
        this.D.has(a) ? b = 0 : g.Q3a(this, a) && (b = 1);
        return b
    });
    g.K_.prototype.DD = g.fa(44, function(a) {
        return this.jd.DD(a)
    });
    g.FY.prototype.uG = g.fa(43, function(a, b, c) {
        this.Ra.set(a, {
            Gs: b,
            Ky: c
        })
    });
    g.K_.prototype.uG = g.fa(42, function(a, b, c) {
        this.jd.uG(a, b, c)
    });
    g.QV.prototype.gR = g.fa(41, function() {
        return !1
    });
    g.QV.prototype.Ft = g.fa(40, function() {});
    g.RV.prototype.Ft = g.fa(39, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Kv(a, b);
        this.Sr();
        this.j = g.MB(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.j = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.VV.prototype.Ft = g.fa(38, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Kv(a, b);
        this.Sr();
        this.j = g.MB(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.j = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.tV.prototype.Xy = g.fa(37, function() {
        for (var a = g.yf(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.Rf(a[b])
    });
    g.sY.prototype.Xy = g.fa(36, function() {
        this.mediaElement.Xy()
    });
    g.tV.prototype.lG = g.fa(35, function() {
        return !(!this.j.textTracks || !this.j.textTracks.addEventListener)
    });
    g.sY.prototype.lG = g.fa(34, function() {
        return this.mediaElement.lG()
    });
    g.tV.prototype.kG = g.fa(33, function() {
        return !!this.j.textTracks
    });
    g.sY.prototype.kG = g.fa(32, function() {
        return this.mediaElement.kG()
    });
    g.tV.prototype.NC = g.fa(31, function(a) {
        for (var b = 0; b < a.length; b++) this.j.appendChild(a[b])
    });
    g.sY.prototype.NC = g.fa(30, function(a) {
        this.mediaElement.NC(a)
    });
    g.E_.prototype.SD = g.fa(20, function() {
        return this.Y
    });
    g.R0.prototype.SD = g.fa(19, function() {
        var a;
        return (null == (a = g.XT(this)) ? void 0 : a.Ez()) || null
    });
    g.dU.prototype.Ez = g.fa(18, function() {
        return this.app.SD()
    });
    g.G0.prototype.Ez = g.fa(17, function() {
        var a;
        return (null == (a = this.Aa) ? void 0 : a.SD()) || null
    });
    g.MP.prototype.rI = g.fa(3, function(a) {
        return (a = this.xn(a)) ? a.j : 0
    });
    g.zPa.prototype.rI = g.fa(2, function() {
        return 0
    });
    var oob = /#(.)(.)(.)/,
        nob = /^#(?:[0-9a-f]{3}){1,2}$/i,
        vob = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Achinese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgc: "Haryanvi",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksik\u00e1",
            blo: "Anii",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            csw: "Swampy Cree",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fula",
            ff_Adlm: "Fula (Adlam)",
            ff_Latn: "Fula (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            kxv: "Kuvi",
            kxv_Deva: "Kuvi (Devanagari)",
            kxv_Latn: "Kuvi (Latin)",
            kxv_Orya: "Kuvi (Odia)",
            kxv_Telu: "Kuvi (Telugu)",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Western Panjabi",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lij: "Ligurian",
            lkt: "Lakota",
            lmo: "Lombard",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaw",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pon: "Pohnpeian",
            prg: "Prussian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Yakut",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            szl: "Silesian",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelau",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tok: "Toki Pona",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vec: "Venetian",
            vi: "Vietnamese",
            vmw: "Makhuwa",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xnr: "Kangri",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        };
    s4.prototype.contains = function(a) {
        a = g.Tb(this.segments, a);
        return 0 <= a || 0 > a && 1 === (-a - 1) % 2
    };
    s4.prototype.length = function() {
        return this.segments.length / 2
    };
    g.w(sob, g.I);
    g.k = sob.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.C && this.C.cancel()
    };
    g.k.MA = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.k.seekTo = function(a) {
        a -= this.player.Vc();
        var b = this.j;
        this.j = g.Bb(this.ma.Kq(a).fb);
        b !== this.j && this.Y && this.Y()
    };
    g.k.reset = function() {
        this.D = new s4;
        this.K = -1;
        this.C && (this.C.cancel(), this.C = null)
    };
    g.k.HY = function() {
        this.isDisposed();
        var a;
        if (a = null != this.j) a = this.j, a = a.j.gs(a);
        if (a && !this.C && !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())) {
            a = this.j;
            a = a.j.mC(a);
            var b = a.fb[0],
                c;
            if (null == (c = this.player.getVideoData()) ? 0 : c.enableServerStitchedDai)
                if (c = this.player.Ez()) {
                    var d = b.j.info.id,
                        e = b.Pa,
                        f = a.fb[0].C;
                    if (this.policy.Ca) {
                        if (c = c.uI(f, e, d, 3)) a.D = c
                    } else if (d = c.yz(f, e, d, 3))
                        if (c = c.DD(e), 0 === c) d && (a.j = new g.FP(d));
                        else if (2 === c) {
                        this.N.start();
                        tob(this) && this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            b.j.index.Hn(b.Pa) ? (this.D.contains(a.fb[0].Pa) || uob(this, a), this.j = g.Bb(a.fb)) : tob(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.N.start()
    };
    g.w(t4, g.QV);
    g.k = t4.prototype;
    g.k.Ft = function(a, b, c) {
        var d = this;
        this.Sr();
        b = xob(this, a.getId());
        b || (b = a.languageCode, b = this.j.isManifestless ? yob(this, b, "386") : yob(this, b));
        if (b) {
            var e = 1E3 * (b.index.rI(b.index.zn()) - b.index.getStartTime(b.index.zn())),
                f = new g.ZXa(this.W),
                h = function() {
                    d.C && d.C.reset();
                    d.G = !0
                };
            this.W.L("html5_keep_caption_data_after_seek") && (h = null);
            this.C = new sob(f, this.J, b, function(l, m) {
                c(l, a, m, e)
            }, this.K || g.OK(b.info), h)
        }
    };
    g.k.gR = function() {
        var a = this.G;
        this.G = !1;
        return a
    };
    g.k.lA = function(a) {
        var b = this.K ? [new g.uS({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        }), new g.uS({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        })] : this.j.isManifestless ? wob(this, "386") : wob(this);
        b = g.u(b);
        for (var c = b.next(); !c.done; c = b.next()) g.PV(this.B, c.value);
        a()
    };
    g.k.Sr = function() {
        this.C && (this.C.dispose(), this.C = null)
    };
    g.k.Kv = function() {
        return ""
    };
    var L4 = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var Cob = ["left", "right", "center", "justify"];
    g.w(u4, g.V);
    g.k = u4.prototype;
    g.k.H2 = function(a, b) {
        this.Za = a;
        this.ib = b;
        var c = g.vs(this.element, this.element.parentElement);
        this.tb = a - c.x;
        this.ub = b - c.y
    };
    g.k.G2 = function(a, b) {
        if (a !== this.Za || b !== this.ib) {
            g.Yu(this.element, "ytp-dragging") || g.Zu(this.element, "ytp-dragging");
            var c = g.xs(this.element);
            a = a - this.tb - .02 * this.playerWidth;
            var d = b - this.ub - .02 * this.playerHeight,
                e = (a + c.width / 2) / this.maxWidth * 3;
            e = Math.floor(g.He(e, 0, 2));
            var f = (d + c.height / 2) / this.maxHeight * 3;
            f = Math.floor(g.He(f, 0, 2));
            b = e + 3 * f;
            a = (a + e / 2 * c.width) / this.maxWidth;
            a = 100 * g.He(a, 0, 1);
            c = (d + f / 2 * c.height) / this.maxHeight;
            c = 100 * g.He(c, 0, 1);
            this.B.params.Ul = b;
            this.B.params.Do = c;
            this.B.params.pk =
                a;
            this.B.params.isDefault = !1;
            this.j.Ul = b;
            this.j.Do = c;
            this.j.pk = a;
            this.j.isDefault = !1;
            this.va.Ul = b;
            this.va.Do = c;
            this.va.pk = a;
            this.va.isDefault = !1;
            this.H_()
        }
    };
    g.k.F2 = function() {
        g.av(this.element, "ytp-dragging")
    };
    g.k.H_ = function() {
        this.xB(this.K)
    };
    g.k.getType = function() {
        return this.type
    };
    g.k.xB = function(a) {
        var b = this.Db ? 0 : Math.min(this.YW(), this.maxWidth),
            c = this.XW(),
            d = this.Db;
        if (d) {
            var e = getComputedStyle(this.D.parentNode);
            e = v4(e.borderLeftWidth) + v4(e.borderRightWidth) + v4(e.paddingLeft) + v4(e.paddingRight)
        } else e = 0;
        var f = e;
        e = "";
        3 === this.B.params.Ri && (e = "rotate(180deg)");
        var h = d ? "calc(96% - " + f + "px)" : "96%";
        g.ls(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": h,
            "max-height": h,
            margin: "",
            transform: ""
        });
        this.JM(a);
        e = {
            transform: e,
            top: "",
            left: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var l = .96 * this.j.pk + 2;
        h = this.j.Ul;
        switch (h) {
            case 0:
            case 3:
            case 6:
                (d = this.j.hf.fontSizeIncrement) && 0 < d && 2 !== this.j.Ri && 3 !== this.j.Ri && (l = Math.max(l / (1 + 2 * d), 2));
                e.left = l + "%";
                break;
            case 1:
            case 4:
            case 7:
                e.left = l + "%";
                l = this.D.offsetWidth;
                b || l ? (b = b || l + 1, e.width = b + "px", e["margin-left"] = d ? b / -2 - f / 2 + "px" : b / -2 + "px") : e.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                e.right = 100 - l + "%"
        }
        d = .96 * this.j.Do + 2;
        switch (h) {
            case 0:
            case 1:
            case 2:
                e.top =
                    d + "%";
                break;
            case 3:
            case 4:
            case 5:
                e.top = d + "%";
                (c = c || this.element.clientHeight) ? (e.height = c + "px", e["margin-top"] = c / -2 + "px") : e.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                e.bottom = 100 - d + "%"
        }
        g.ls(this.element, e);
        if (this.G) {
            c = this.D.offsetHeight;
            d = 1;
            for (b = 0; b < a.length; b++) e = a[b], "string" === typeof e.text && (d += e.text.split("\n").length - 1, e.append || 0 === b || d++);
            c /= d;
            this.G.style.height = c + "px";
            this.G.style.width = c + "px";
            this.element.style.paddingLeft = c + 5 + "px";
            this.element.style.paddingRight = c +
                5 + "px";
            a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
            c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
            this.element.style.marginLeft = a + "px";
            this.element.style.marginRight = c + "px"
        }
    };
    g.k.JM = function(a) {
        var b;
        for (b = 0; b < a.length && a[b] === this.K[b]; b++);
        if (this.Ea || this.K.length > b) b = 0, this.Ea = !1, this.K = [], this.N = this.Na = this.Ma = null, g.Pf(this.D);
        for (; b < a.length; b++) Hob(this, a[b])
    };
    g.k.YW = function() {
        return 0
    };
    g.k.XW = function() {
        return 0
    };
    g.k.toString = function() {
        return g.V.prototype.toString.call(this)
    };
    Job.prototype.clear = function() {
        this.C = this.time = this.mode = 0;
        this.j = [];
        this.reset()
    };
    Job.prototype.reset = function() {
        this.mode = 0;
        this.D.reset(0);
        this.G.reset(1)
    };
    var Kob = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    w4.prototype.set = function(a) {
        this.type = a
    };
    w4.prototype.get = function() {
        return this.type
    };
    x4.prototype.clear = function() {
        this.state = 0
    };
    x4.prototype.update = function() {
        this.state = 2 === this.state ? 1 : 0
    };
    x4.prototype.Le = function() {
        return 0 !== this.state
    };
    x4.prototype.matches = function(a, b) {
        return this.Le() && a === this.Wu && b === this.xs
    };
    Pob.prototype.reset = function() {
        this.timestamp = this.j = 0
    };
    y4.prototype.updateTime = function(a) {
        for (var b = 1; 15 >= b; ++b)
            for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a
    };
    y4.prototype.debugString = function() {
        for (var a = "\n", b = 1; 15 >= b; ++b) {
            for (var c = 1; 32 >= c; ++c) {
                var d = this.B[b][c];
                a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j)
            }
            a += "\n"
        }
        return a
    };
    y4.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
        this.C = a;
        this.j = 0;
        this.col = this.row = 1
    };
    var Qob = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        Rob = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        Sob = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        Tob = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    Xob.prototype.reset = function(a, b) {
        this.G = b;
        this.style.set(2);
        this.B = this.K;
        this.D = this.N;
        this.j = this.B;
        var c = (a << 2) + (b << 1);
        this.K.reset(c);
        this.N.reset(c);
        this.text.reset((a << 2) + (b << 1) + 1)
    };
    Iob.prototype.reset = function(a) {
        this.G = a;
        this.B.clear();
        this.D = this.C;
        this.C.reset(a, 0);
        this.K.reset(a, 1)
    };
    apb.prototype.D = function() {};
    g.w(D4, g.PJ);
    D4.prototype.toString = function() {
        return g.PJ.prototype.toString.call(this)
    };
    g.w(E4, g.I);
    E4.prototype.Zn = function() {
        return []
    };
    E4.prototype.reset = function() {};
    g.w(F4, g.PJ);
    F4.prototype.toString = function() {
        return g.PJ.prototype.toString.call(this)
    };
    var G4 = 0;
    g.w(H4, E4);
    H4.prototype.reset = function() {
        this.K = {};
        this.B = this.j = null;
        this.G = !0
    };
    H4.prototype.Zn = function(a, b) {
        a = a.firstChild;
        a.getAttribute("format");
        b = b || 0;
        Number.isFinite(b);
        a = Array.from(a.childNodes);
        a = g.u(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, 1 === c.nodeType) switch (c.tagName) {
                case "head":
                    var d = c;
                    break;
                case "body":
                    var e = c
            }
        if (d)
            for (d = Array.from(d.childNodes), d = g.u(d), a = d.next(); !a.done; a = d.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "pen":
                        c = a.getAttribute("id");
                        var f = this.pens,
                            h = {},
                            l = a.getAttribute("p");
                        l && Object.assign(h, this.pens[l]);
                        l = J4(a, "b");
                        null != l && (h.bold = l);
                        l = J4(a, "i");
                        null != l && (h.italic = l);
                        l = J4(a, "u");
                        null != l && (h.underline = l);
                        l = K4(a, "et");
                        null != l && (h.charEdgeStyle = l);
                        l = K4(a, "of");
                        null != l && (h.offset = l);
                        l = M4(a, "bc");
                        null != l && (h.background = l);
                        l = M4(a, "ec");
                        null != l && (h.dN = l);
                        l = M4(a, "fc");
                        null != l && (h.color = l);
                        l = K4(a, "fs");
                        null != l && 0 !== l && (h.fontFamily = l);
                        l = I4(a, "sz");
                        void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
                        l = I4(a, "bo");
                        void 0 !== l && (h.backgroundOpacity = l / 255);
                        l = I4(a, "fo");
                        void 0 !== l && (h.textOpacity = l / 255);
                        l = K4(a, "rb");
                        null != l && 10 !== l &&
                            0 !== l && (h.pg = 10 < l ? l - 1 : l);
                        a = K4(a, "hg");
                        null != a && (h.WX = a);
                        f[c] = h;
                        break;
                    case "ws":
                        c = a.getAttribute("id");
                        this.Z[c] = epb(this, a);
                        break;
                    case "wp":
                        c = a.getAttribute("id"), this.N[c] = fpb(this, a)
                }
        if (e) {
            d = [];
            e = Array.from(e.childNodes);
            e = g.u(e);
            for (a = e.next(); !a.done; a = e.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "w":
                        this.j = gpb(this, a, b, !1);
                        (a = this.K[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
                        this.K[this.j.id] = this.j;
                        d.push(this.j);
                        break;
                    case "p":
                        var m = a;
                        l = b;
                        c = [];
                        f = m.getAttribute("w") ||
                            this.D;
                        h = !!J4(m, "a");
                        l = (I4(m, "t") || 0) + l;
                        var n = I4(m, "d") || 5E3;
                        h || (!this.G && this.B && this.B.windowId === f && this.B.end > l && (this.B.end = l), this.B && "\n" === this.B.text && (this.B.text = ""));
                        var p = h ? 6 : 5,
                            q = m.getAttribute("p");
                        q = q ? this.pens[q] : null;
                        var r = Array.from(m.childNodes);
                        r.length && (this.G = null != m.getAttribute("d"));
                        for (m = 0; m < r.length; m++) {
                            var t = r[m],
                                v = void 0;
                            0 < m && (h = !0);
                            var x = void 0;
                            1 === t.nodeType && (x = t);
                            if (x && "s" === x.tagName) {
                                if ((t = (t = x.getAttribute("p")) ? this.pens[t] : null) && t.pg && (1 === t.pg ? (t = r.slice(m,
                                        m + 4), 4 === t.length && (v = cpb(l, n, f, h, p, t, this.pens), m += 3)) : v = cpb(l, n, f, h, p, [x], this.pens)), !v) {
                                    var A = x;
                                    v = l;
                                    x = n;
                                    t = f;
                                    var E = h,
                                        F = p,
                                        G = A.textContent ? A.textContent : "",
                                        L = A.getAttribute("p");
                                    L = L ? this.pens[L] : null;
                                    A = I4(A, "t") || 0;
                                    v = new D4(v + A, x - A, F, t, G, E, L)
                                }
                            } else v = new D4(l, n, p, f, t.textContent || "", h, q);
                            c.push(v);
                            this.B = v
                        }
                        if (0 < c.length)
                            for (c[0].windowId === this.D && (this.j = gpb(this, a, b, !0), d.push(this.j)), a = g.u(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c)
                }
            b = d
        } else b = [];
        return b
    };
    var Mpb = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.w(N4, E4);
    N4.prototype.reset = function() {
        this.B.clear()
    };
    N4.prototype.Zn = function(a, b) {
        var c = JSON.parse(a);
        if (!c) return [];
        if (c.pens) {
            a = 0;
            for (var d = g.u(c.pens), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {},
                    h = e.pParentId;
                h && Object.assign(f, this.j.get(h));
                e.bAttr && (f.bold = !0);
                e.iAttr && (f.italic = !0);
                e.uAttr && (f.underline = !0);
                h = e.ofOffset;
                null != h && (f.offset = h);
                void 0 !== e.szPenSize && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
                h = e.etEdgeType;
                null != h && (f.charEdgeStyle = h);
                void 0 !== e.ecEdgeColor && (f.dN = O4(e.ecEdgeColor));
                h = e.fsFontStyle;
                null != h && 0 !== h && (f.fontFamily =
                    h);
                void 0 !== e.fcForeColor && (f.color = O4(e.fcForeColor));
                void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
                void 0 !== e.bcBackColor && (f.background = O4(e.bcBackColor));
                void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
                (h = e.rbRuby) && 10 !== h && (f.pg = 10 < h ? h - 1 : h, f.Co = Mpb.get(f.pg));
                e.hgHorizGroup && (f.WX = e.hgHorizGroup);
                this.j.set(a++, f)
            }
        }
        if (c.wsWinStyles)
            for (a = 0, d = g.u(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.D.get(h)) : Object.assign(f,
                this.G), void 0 !== e.mhModeHint && (f.xA = e.mhModeHint), void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode), void 0 !== e.pdPrintDir && (f.Ri = e.pdPrintDir), void 0 !== e.sdScrollDir && (f.qS = e.sdScrollDir), void 0 !== e.wfcWinFillColor && (f.windowColor = O4(e.wfcWinFillColor)), void 0 !== e.wfoWinFillAlpha && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.D.set(a++, f);
        if (c.wpWinPositions)
            for (a = 0, d = g.u(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.C.get(h)), void 0 !== e.ahHorPos &&
                (f.pk = e.ahHorPos), void 0 !== e.apPoint && (f.Ul = e.apPoint), void 0 !== e.avVerPos && (f.Do = e.avVerPos), void 0 !== e.ccCols && (f.Bs = e.ccCols), void 0 !== e.rcRows && (f.Cr = e.rcRows), this.C.set(a++, f);
        if (c.events) {
            a = [];
            c = g.u(c.events);
            for (d = c.next(); !d.done; d = c.next()) {
                var l = d.value;
                e = (l.tStartMs || 0) + b;
                f = l.dDurationMs || 0;
                if (l.id) h = String(l.id), d = hpb(this, l, e, f, h), a.push(d), this.B.set(h, d);
                else {
                    l.wWinId ? h = l.wWinId.toString() : (h = "_" + G4++, d = hpb(this, l, e, f, h), a.push(d), this.B.set(h, d));
                    d = a;
                    var m = l;
                    0 === f && (f = 5E3);
                    l = this.B.get(h);
                    var n = !!m.aAppend,
                        p = n ? 6 : 5,
                        q = m.segs,
                        r = null;
                    m.pPenId && (r = this.j.get(m.pPenId));
                    for (m = 0; m < q.length; m++) {
                        var t = q[m],
                            v = t.utf8;
                        if (v) {
                            var x = t.tOffsetMs || 0,
                                A = null;
                            t.pPenId && (A = this.j.get(t.pPenId));
                            if (2 === (null != l.params.xA ? l.params.xA : 1 < l.j.length ? 1 : 0) && n && "\n" === v) continue;
                            t = null;
                            var E = [],
                                F;
                            if (F = A && 1 === A.pg) {
                                F = q;
                                var G = m;
                                if (G + 3 >= F.length || !F[G + 1].pPenId || !F[G + 2].pPenId || !F[G + 3].pPenId) F = !1;
                                else {
                                    var L = F[G + 1].pPenId;
                                    (L = this.j.get(L)) && L.pg && 2 === L.pg ? (L = F[G + 2].pPenId, L = this.j.get(L), !L || !L.pg || 3 > L.pg ? F = !1 :
                                        (L = F[G + 3].pPenId, F = (L = this.j.get(L)) && L.pg && 2 === L.pg ? !0 : !1)) : F = !1
                                }
                            }
                            if (F) x = q[m + 1].utf8, t = q[m + 3].utf8, F = q[m + 2].utf8, G = this.j.get(q[m + 2].pPenId), v = bpb(v, x, F, t, G), t = new D4(e, f, p, h, v, n, A), m += 3;
                            else {
                                if (-1 < v.indexOf("<")) {
                                    var Q = void 0;
                                    E = A;
                                    F = r;
                                    G = e;
                                    L = f;
                                    var R = x,
                                        aa = p,
                                        na = n,
                                        ta = [],
                                        la = g.l2("<html>" + v + "</html>");
                                    if (!la.getElementsByTagName("parsererror").length && (null == (Q = la.firstChild) ? 0 : Q.childNodes.length))
                                        for (Q = g.u(la.firstChild.childNodes), la = Q.next(); !la.done; la = Q.next()) {
                                            la = la.value;
                                            var va = void 0,
                                                ea = void 0,
                                                Y = null != (ea = null == (va = la.textContent) ? void 0 : va.replace(/\n/g, "")) ? ea : "";
                                            if (3 !== la.nodeType || Y && null == Y.match(/^ *$/)) {
                                                va = {};
                                                Object.assign(va, E || F);
                                                ea = void 0;
                                                switch (null == (ea = la) ? void 0 : ea.tagName) {
                                                    case "b":
                                                        va.bold = !0;
                                                        break;
                                                    case "i":
                                                        va.italic = !0;
                                                        break;
                                                    case "u":
                                                        va.underline = !0
                                                }
                                                ta.push(new D4(G + R, L - R, aa, l.id, Y, na, va))
                                            }
                                        }
                                    E = ta
                                }
                                E.length || (E = [new D4(e + x, f - x, p, l.id, v, n, A || r)])
                            }
                            if (E.length)
                                for (n = g.u(E), A = n.next(); !A.done; A = n.next()) A = A.value, d.push(A), l.j.push(A);
                            else t && (d.push(t), l.j.push(t))
                        }
                        n = !0
                    }
                }
            }
            b = a
        } else b = [];
        return b
    };
    g.w(P4, g.QV);
    P4.prototype.Ft = function(a, b, c) {
        mob(this.videoData.videoId, a.vssId, c)
    };
    P4.prototype.lA = function(a) {
        if (this.audioTrack)
            for (var b = g.u(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.PV(this.B, c.value);
        a()
    };
    g.w(Q4, u4);
    Q4.prototype.JM = function(a) {
        var b = this.B.j;
        u4.prototype.JM.call(this, a);
        for (a = a.length; a < b.length; a++) {
            var c = b[a];
            if (f && c.j === e) var d = f;
            else {
                d = {};
                Object.assign(d, c.j);
                Object.assign(d, Npb);
                var e = c.j;
                var f = d
            }
            Hob(this, c, d)
        }
    };
    var Npb = {
        o8: !0
    };
    g.w(R4, apb);
    R4.prototype.D = function(a, b, c, d, e) {
        if (c < d) {
            var f = "_" + G4++;
            c = c / 1E3 - this.K;
            d = d / 1E3 - this.K;
            a = new F4(c, d - c, 5, f, {
                textAlign: 0,
                Ul: 0,
                pk: 2.5 * b,
                Do: 5.33 * a
            });
            e = new D4(c, d - c, 5, f, e);
            this.B.push(a);
            this.B.push(e)
        }
    };
    g.w(U4, E4);
    U4.prototype.Zn = function(a) {
        a = new R4(a, a.byteLength, this.B);
        if (ipb(a)) {
            for (; a.byteOffset < a.j.byteLength;)
                for (0 === a.version ? a.C = T4(a) * (1E3 / 45) : 1 === a.version && (a.C = 4294967296 * T4(a) + T4(a)), a.G = S4(a); 0 < a.G; a.G--) {
                    var b = S4(a),
                        c = S4(a),
                        d = S4(a);
                    b & 4 && (b & 3) === this.track && (0 === this.track || 1 === this.track) && (b = this.j, b.j.push({
                        time: a.C,
                        type: this.track,
                        RV: c,
                        SV: d,
                        order: b.j.length
                    }))
                }
            Oob(this.j, a);
            return a.B
        }
        return []
    };
    U4.prototype.reset = function() {
        this.j.clear()
    };
    g.w(V4, u4);
    g.k = V4.prototype;
    g.k.H_ = function() {
        g.Tu(this.Xa)
    };
    g.k.taa = function() {
        g.av(this.element, "ytp-rollup-mode");
        this.xB(this.jc, !0)
    };
    g.k.XW = function() {
        return this.C ? this.ma : this.Y
    };
    g.k.YW = function() {
        return this.C ? this.Y : this.ma
    };
    g.k.xB = function(a, b) {
        this.jc = a;
        if (this.B.params.Cr) {
            for (var c = 0, d = 0; d < this.K.length && c < a.length; d++) this.K[d] === a[c] && c++;
            0 < c && c < a.length && (a = this.K.concat(a.slice(c)));
            this.Pb = this.ma;
            this.Y = this.ma = 0;
            u4.prototype.xB.call(this, a);
            mpb(this, b)
        }
        u4.prototype.xB.call(this, a)
    };
    g.w(W4, E4);
    W4.prototype.Zn = function(a, b) {
        var c = [];
        a = a.split(Opb);
        for (var d = 1; d < a.length; d++) {
            var e = a[d],
                f = b;
            if ("" !== e && !Ppb.test(e)) {
                var h = Qpb.exec(e);
                if (h && 4 <= h.length) {
                    var l = opb(h[1]),
                        m = opb(h[2]) - l;
                    l += f;
                    var n = (h = h[3]) ? h.split(" ") : [];
                    h = {};
                    var p = null;
                    var q = "";
                    var r = null,
                        t = "";
                    n = g.u(n);
                    for (var v = n.next(); !v.done; v = n.next())
                        if (v = v.value.split(":"), 2 === v.length) {
                            var x = v[1];
                            switch (v[0]) {
                                case "line":
                                    v = x.split(",");
                                    v[0].endsWith("%") && (p = v[0], h.Do = Number.parseInt(p, 10), 2 === v.length && (q = v[1].trim()));
                                    break;
                                case "position":
                                    v =
                                        x.split(",");
                                    r = v[0];
                                    h.pk = Number.parseInt(r, 10);
                                    2 === v.length && (t = v[1].trim());
                                    break;
                                case "align":
                                    switch (x) {
                                        case "start":
                                            h.textAlign = 0;
                                            break;
                                        case "middle":
                                            h.textAlign = 2;
                                            break;
                                        case "end":
                                            h.textAlign = 1
                                    }
                            }
                        }
                    p || q || (q = "end");
                    if (!r) switch (h.textAlign) {
                        case 0:
                            h.pk = 0;
                            break;
                        case 1:
                            h.pk = 100;
                            break;
                        case 2:
                            h.pk = 50
                    }
                    if (null != h.textAlign) {
                        p = 0;
                        switch (q) {
                            case "center":
                                p += 3;
                                break;
                            case "end":
                                p += 6;
                                break;
                            default:
                                p += 0
                        }
                        switch (t) {
                            case "line-left":
                                p += 0;
                                break;
                            case "center":
                                p += 1;
                                break;
                            case "line-right":
                                p += 2;
                                break;
                            default:
                                switch (h.textAlign) {
                                    case 0:
                                        p +=
                                            0;
                                        break;
                                    case 2:
                                        p += 1;
                                        break;
                                    case 1:
                                        p += 2
                                }
                        }
                        q = 0 > p || 8 < p ? 7 : p;
                        h.Ul = q
                    }
                    e = e.substring(Qpb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    t = h;
                    h = e;
                    e = {};
                    if (0 > h.indexOf("<") && 0 > h.indexOf("&")) f = ppb(l, m, 5, t), m = new D4(l, m, 5, f.id, h, !1, g.md(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);
                    else
                        for (q = h.split(Rpb), 1 === q.length ? (h = 5, t = ppb(l, m, h, t)) : (p = h = 6, t = Object.assign({
                                Bs: 32
                            }, t), t = new F4(l, m, p, "_" + G4++, t)), c.push(t), p = l, r = 0; r < q.length; r++) n = q[r], 0 === r % 2 ? (v = g.l2("<html>" + n + "</html>"), v.getElementsByTagName("parsererror").length ?
                            (x = v.createElement("span"), x.appendChild(v.createTextNode(n))) : x = v.firstChild, npb(this, p, m - (p - l), h, t, 0 < r, x, e, c)) : p = opb(n) + f
                }
                Qpb.lastIndex = 0
            }
        }
        return c
    };
    var Ppb = /^NOTE/,
        Opb = /(?:\r\n|\r|\n){2,}/,
        Qpb = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        Rpb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.tY.NI(W4, {
        Zn: "wvppt"
    });
    g.w(X4, g.I);
    X4.prototype.Zn = function(a, b, c, d) {
        c = c || 0;
        d = d || 0;
        if (this.B && a) {
            var e = d,
                f = spb(this, a, c),
                h = [];
            try {
                for (var l = g.u(f), m = l.next(); !m.done; m = l.next()) {
                    var n = m.value,
                        p = n.trackData,
                        q = n.kS;
                    h = "string" !== typeof p ? h.concat(tpb(this, b, p, q, e)) : "WEBVTT" === p.substring(0, 6) ? h.concat(upb(this, p, q)) : h.concat(wpb(this, b, p, q))
                }
                var r = h
            } catch (t) {
                g.oF(t), this.clear(), r = []
            }
            if (0 !== r.length) return r
        }
        a = qpb(a);
        if (!a) return [];
        try {
            return "string" !== typeof a ? tpb(this, b, a, c, d) : "WEBVTT" === a.substring(0, 6) ? upb(this, a, c) : wpb(this, b, a,
                c)
        } catch (t) {
            return g.oF(t), this.clear(), []
        }
    };
    X4.prototype.clear = function() {
        this.j && this.j.dispose();
        this.j = null
    };
    X4.prototype.reset = function() {
        this.j && this.j.reset()
    };
    X4.prototype.xa = function() {
        g.I.prototype.xa.call(this);
        this.clear()
    };
    var f5 = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        Ul: 7,
        pk: 50,
        Do: 100,
        isDefault: !0,
        hf: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.w(Y4, g.NV);
    g.k = Y4.prototype;
    g.k.xa = function() {
        if (this.D || this.Ia) {
            var a = this.J.nf();
            a && !a.isDisposed() && a.Xy()
        } else Lpb(this, !1);
        g.NV.prototype.xa.call(this)
    };
    g.k.cS = function() {
        return this.W.L("html5_honor_caption_availabilities_in_audio_track") && !this.Za
    };
    g.k.Zt = function() {
        if (this.Xa) return this.D || this.Ia;
        var a = this.getAudioTrack();
        if (this.cS()) {
            if (!a.captionTracks.length) return !1;
            if (!this.j) return !0
        }
        a = job(a, g.gS(this.W));
        return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a ? !0 : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a ? Z4(this) : Apb(this) || Z4(this) ? !0 : Bpb(this)
    };
    g.k.load = function() {
        var a = this;
        g.NV.prototype.load.call(this);
        this.N = this.getAudioTrack();
        this.j ? this.B && (this.eb.clear(), this.D ? Fpb(this, !0) : 3 !== this.player.getPresentingPlayerType() && this.j.Ft(this.B, "json3", function(b, c, d, e) {
            if (b) {
                var f;
                Gpb(a, null != (f = a.B) ? f : void 0);
                a.j.gR() && (a.Ea = [], a.J.Ef("captions"), g.Qu(a.Ma), a.eb.reset());
                if (a.videoData.Bj) {
                    var h;
                    d = (null != (h = d) ? h : 0) + a.videoData.Bj
                }
                b = a.eb.Zn(b, c, d, e);
                if (a.ib)
                    for (c = g.u(b), e = c.next(); !e.done; e = c.next()) e = e.value, e.C = a.videoData.clientPlaybackNonce,
                        e.Zk = a.videoData.Bj;
                c = !a.W.L("html5_keep_caption_data_after_seek") && a.Za;
                a.player.Af(b, void 0, c);
                !a.Y || a.Ia || b5(a) || !a.W.Rm || g.tJ(a.W) || g.WR(a.W) || g.VG(a.W) || "shortspage" === a.W.Ma || a.player.isInline() || (g.Uu(a.Na), b = dpb({
                    Ul: 0,
                    pk: 5,
                    Do: 5,
                    Cr: 2,
                    textAlign: 0,
                    Ri: 0,
                    lang: "en"
                }), a.Ra = [b], c = ["Click ", " for settings"], a.tb || (e = new g.MF(g.Vwa()), g.N(a, e), a.tb = e.element), e = b.end - b.start, (f = g.vS(a.B)) && a.Ra.push(new D4(b.start, e, 0, b.id, f)), a.Ra.push(new D4(b.start, e, 0, b.id, c[0]), new D4(b.start, e, 0, b.id, a.tb, !0),
                    new D4(b.start, e, 0, b.id, c[1], !0)), a.player.Af(a.Ra), g.Su(a.Na));
                !a.Y || a.Ia || b5(a) || (g.gS(a.W) ? d5(a, !0) : e5(a, !0), a.N && (a.N.D = a.B), a.player.Io());
                a.Y = !1
            }
        }), this.D || this.Ia || b5(this) || this.player.Ac("captionschanged", g.wS(this.B))) : (this.j = Cpb(this), g.N(this, this.j), this.j.lA(function() {
            Epb(a)
        }))
    };
    g.k.unload = function() {
        this.D && this.B ? Fpb(this, !1) : (this.Na && g.Uu(this.Na), this.player.Ef("captions"), this.Ea = [], this.j && this.j.Sr(), this.eb.clear(), this.Z && this.player.Af(this.Z), this.GS());
        g.NV.prototype.unload.call(this);
        this.player.Io();
        this.player.Ac("captionschanged", {})
    };
    g.k.create = function() {
        this.Zt() && this.load();
        var a;
        a: {
            var b, c, d;
            if (this.W.L("suggest_caption_correction_menu_item") && this.W.L("web_player_nitrate_promo_tooltip") && (null == (b = this.videoData.getPlayerResponse()) ? 0 : null == (c = b.captions) ? 0 : null == (d = c.playerCaptionsTracklistRenderer) ? 0 : d.openTranscriptCommand)) {
                var e, f;
                if (b = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (e = a.captions) ? void 0 : null == (f = e.playerCaptionsTracklistRenderer) ? void 0 : f.captionTracks)
                    for (a = g.u(b), e = a.next(); !e.done; e = a.next())
                        if (e =
                            e.value, "asr" === e.kind && "en" === e.languageCode) {
                            a = !0;
                            break a
                        }
            }
            a = !1
        }
        a && this.J.ra("showpromotooltip", this.K.element)
    };
    g.k.bba = function() {
        for (var a = this.J.nf().Kb().textTracks, b = null, c = 0; c < a.length; c++)
            if ("showing" === a[c].mode) a: {
                b = g.OV(this.j.B, !0);
                for (var d = 0; d < b.length; d++)
                    if (b[d].toString() === a[c].id) {
                        b = b[d];
                        break a
                    }
                b = null
            }(this.loaded ? this.B : null) !== b && c5(this, b, !0)
    };
    g.k.zda = function() {
        !this.B && this.D || this.unload()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Ea.push(a);
        g.Qu(this.Ma)
    };
    g.k.onCueRangeExit = function(a) {
        g.Ib(this.Ea, a);
        this.j instanceof t4 && this.j.K && this.player.Ao([a]);
        g.Qu(this.Ma)
    };
    g.k.getCaptionWindowContainerId = function() {
        return this.K.element.id
    };
    g.k.eca = function() {
        Kpb(this, this.Ra);
        this.Ra = null
    };
    g.k.ES = function() {
        var a = this;
        if (!this.Db || !this.D) {
            this.Ma.stop();
            g.dba(this.Wa);
            this.Ea.sort(g.jBa);
            var b = this.Ea;
            if (this.Z) {
                var c = g.pt(b, function(f) {
                    return -1 === this.Z.indexOf(f)
                }, this);
                c.length && (b = c)
            }
            b = g.u(b);
            for (c = b.next(); !c.done; c = b.next()) Ipb(this, c.value);
            b = g.u(Object.entries(this.va));
            var d = b.next();
            for (c = {}; !d.done; c = {
                    Rz: void 0,
                    hp: void 0
                }, d = b.next()) {
                var e = g.u(d.value);
                d = e.next().value;
                e = e.next().value;
                c.Rz = d;
                c.hp = e;
                this.Wa[c.Rz] ? (c.hp.element.parentNode || (c.hp instanceof V4 || c.hp instanceof Q4 || g.ed(this.va, function(f) {
                    return function(h, l) {
                        l !== f.Rz && h.B.params.Ul === f.hp.B.params.Ul && h.B.params.pk === f.hp.B.params.pk && h.B.params.Do === f.hp.B.params.Do && (h.dispose(), delete a.va[l]);
                        return l === f.Rz
                    }
                }(c), this), this.K.element.appendChild(c.hp.element)), c.hp.xB(this.Wa[c.Rz])) : (c.hp.dispose(), delete this.va[c.Rz])
            }
        }
    };
    g.k.jca = function() {
        ypb(this, {}, !0);
        this.player.Ac("captionssettingschanged")
    };
    g.k.w7 = function() {
        var a = f5.hf;
        a = {
            background: a.background,
            backgroundOpacity: a.backgroundOpacity,
            charEdgeStyle: a.charEdgeStyle,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.fontSizeIncrement,
            fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
            textOpacity: a.textOpacity,
            windowColor: f5.windowColor,
            windowOpacity: f5.windowOpacity
        };
        var b = qob() || {};
        null != b.background && (a.background = b.background);
        null != b.backgroundOverride && (a.backgroundOverride = b.backgroundOverride);
        null != b.backgroundOpacity && (a.backgroundOpacity =
            b.backgroundOpacity);
        null != b.backgroundOpacityOverride && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
        null != b.charEdgeStyle && (a.charEdgeStyle = b.charEdgeStyle);
        null != b.charEdgeStyleOverride && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
        null != b.color && (a.color = b.color);
        null != b.colorOverride && (a.colorOverride = b.colorOverride);
        null != b.fontFamily && (a.fontFamily = b.fontFamily);
        null != b.fontFamilyOverride && (a.fontFamilyOverride = b.fontFamilyOverride);
        null != b.fontSizeIncrement && (a.fontSizeIncrement =
            b.fontSizeIncrement);
        null != b.fontSizeIncrementOverride && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
        null != b.fontStyle && (a.fontStyle = b.fontStyle);
        null != b.fontStyleOverride && (a.fontStyleOverride = b.fontStyleOverride);
        null != b.textOpacity && (a.textOpacity = b.textOpacity);
        null != b.textOpacityOverride && (a.textOpacityOverride = b.textOpacityOverride);
        null != b.windowColor && (a.windowColor = b.windowColor);
        null != b.windowColorOverride && (a.windowColorOverride = b.windowColorOverride);
        null != b.windowOpacity &&
            (a.windowOpacity = b.windowOpacity);
        null != b.windowOpacityOverride && (a.windowOpacityOverride = b.windowOpacityOverride);
        return a
    };
    g.k.l1 = function(a, b) {
        var c = {};
        Object.assign(c, qob());
        Object.assign(c, a);
        ypb(this, c, b);
        this.player.Ac("captionssettingschanged")
    };
    g.k.GS = function() {
        !this.D && this.loaded && (g.bd(this.va, function(a, b) {
            a.dispose();
            delete this.va[b]
        }, this), this.ES())
    };
    g.k.Mh = function(a, b) {
        switch (a) {
            case "fontSize":
                if (isNaN(b)) break;
                var c = g.He(b, -2, 4);
                this.l1({
                    fontSizeIncrement: c
                });
                return c;
            case "reload":
                b && !this.D && c5(this, this.B, !0);
                break;
            case "stickyLoading":
                void 0 !== b && this.W.K && (g.gS(this.W) ? d5(this, !!b) : e5(this, !!b));
                break;
            case "track":
                if (!this.j) return {};
                if (b) {
                    if (this.D) break;
                    if (!g.bb(b)) break;
                    if (g.md(b)) {
                        c5(this, null, !0);
                        break
                    }
                    a = g.OV(this.j.B, !0);
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        e.languageCode !== b.languageCode || c && (e.languageName !== b.languageName ||
                            (e.captionId || "") !== (b.captionId || "") || this.W.L("html5_caption_enable_display_name_matching") && g.vS(e) !== b.displayName) || (c = b.translationLanguage ? kob(e, b.translationLanguage) : e)
                    }
                    this.jL(b.position);
                    !c || c === this.B && this.loaded || (b = g.rNa(), a = g.xS(c), b.length && a === b[b.length - 1] || (b.push(a), g.DC("yt-player-caption-language-preferences", b)), g.gS(this.W) && !this.J.isInline() && g.DC("yt-player-caption-sticky-language", a, 2592E3), c5(this, c, !0))
                } else return this.loaded && this.B && !b5(this) ? g.wS(this.B) : {};
                return "";
            case "tracklist":
                return this.j ? g.Fr(g.OV(this.j.B, !(!b || !b.includeAsr)), function(f) {
                    return g.wS(f)
                }) : [];
            case "translationLanguages":
                return this.j ? this.j.D.map(function(f) {
                    return Object.assign({}, f)
                }) : [];
            case "sampleSubtitles":
                this.D || void 0 === b || Lpb(this, !!b);
                break;
            case "sampleSubtitlesCustomized":
                this.D || Lpb(this, !!b, b);
                break;
            case "recommendedTranslationLanguages":
                return g.rNa();
            case "defaultTranslationSourceTrackIndices":
                return this.j ? this.j.N : []
        }
    };
    g.k.getOptions = function() {
        var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.W.K && a.push("stickyLoading");
        return a
    };
    g.k.Mq = function() {
        var a = this.B;
        if (this.W.L("html5_modify_caption_vss_logging")) {
            var b;
            return (a = null != (b = this.videoData.ZB) ? b : null) ? {
                cc: g.WRa(a)
            } : {}
        }
        return a ? (b = a.vssId, a.translationLanguage && b && (b = "t" + b + "." + g.xS(a)), {
            cc: b
        }) : {}
    };
    g.k.lda = function() {
        this.isSubtitlesOn() ? (g.gS(this.W) ? d5(this, !1) : e5(this, !1), Gpb(this), this.unload(), Z4(this, !0) && c5(this, $4(this), !1)) : this.K0()
    };
    g.k.K0 = function() {
        this.isSubtitlesOn() || c5(this, b5(this) || !this.B ? a5(this, !0) : this.B, !0)
    };
    g.k.isSubtitlesOn = function() {
        return !!this.loaded && !!this.B && !b5(this)
    };
    g.k.P9 = function() {
        var a = b5(this);
        Z4(this, a) ? c5(this, this.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.cS() && (this.Y = !1, this.B = null, this.j && (this.j.dispose(), this.j = null)), this.Zt() && (a ? c5(this, a5(this), !1) : this.load()))
    };
    g.k.jL = function(a) {
        a && (this.ma = {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left,
            width: 1 - a.left - a.right,
            height: 1 - a.top - a.bottom
        }, this.K.element.style.top = 100 * this.ma.top + "%", this.K.element.style.left = 100 * this.ma.left + "%", this.K.element.style.width = 100 * this.ma.width + "%", this.K.element.style.height = 100 * this.ma.height + "%", this.K.element.style.position = "absolute", a = Jpb(this)) && (this.K.element.style.width = a.width + "px", this.K.element.style.height = a.height + "px")
    };
    g.k.onVideoDataChange = function(a, b) {
        "newdata" === a && (this.videoData = b, this.loaded && this.unload(), this.Y = !1, this.B = null, this.j && (this.j.dispose(), this.j = null, this.player.Ac("captionschanged", {})), this.Zt() && this.load())
    };
    g.k.getAudioTrack = function() {
        return this.ib && 2 === this.player.getPresentingPlayerType() ? this.videoData.zl : this.player.getAudioTrack()
    };
    g.k.z$ = function() {
        var a = this.J.nf();
        a && !a.isDisposed() && a.Xy();
        this.J.isFullscreen() ? (this.D = this.Xa = !0, this.loaded && Epb(this)) : (this.Xa = "3" === this.W.controlsType, this.D = xpb(this));
        c5(this, this.B)
    };
    g.k.JL = function() {
        var a, b, c, d = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (b = a.captions) ? void 0 : null == (c = b.playerCaptionsTracklistRenderer) ? void 0 : c.openTranscriptCommand;
        d && this.player.ob("innertubeCommand", d)
    };
    g.tY.NI(Y4, {
        ES: "smucd"
    });
    g.MV("captions", Y4);
})(_yt_player);