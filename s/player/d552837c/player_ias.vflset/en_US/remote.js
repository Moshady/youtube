(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
            g.No(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36));
            return a
        },
        b8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Fga(a.B, b, c)
        },
        Jzb = function(a) {
            if (a instanceof g.kt) return a;
            if ("function" == typeof a.Kk) return a.Kk(!1);
            if (g.ab(a)) {
                var b = 0,
                    c = new g.kt;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.y2;
                        if (b in a) return g.lt(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Kzb = function(a, b, c) {
            if (g.ab(a)) g.bc(a, b, c);
            else
                for (a = Jzb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Lzb = function(a, b) {
            var c = [];
            Kzb(b, function(d) {
                try {
                    var e = g.Ev.prototype.B.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.vla(e) && c.push(d)
            }, a);
            return c
        },
        Mzb = function(a, b) {
            Lzb(a, b).forEach(function(c) {
                g.Ev.prototype.remove.call(this, c)
            }, a)
        },
        Nzb = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        Ozb = function(a, b) {
            g.Fb(a, b) || a.push(b)
        },
        Pzb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Qzb = function(a, b) {
            return g.kd(a, b)
        },
        Rzb = function(a) {
            try {
                return g.Ta.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        c8 = function(a) {
            if (g.Ta.JSON) try {
                return g.Ta.JSON.parse(a)
            } catch (b) {}
            return Rzb(a)
        },
        Szb = function(a) {
            if (a.jm && "function" == typeof a.jm) return a.jm();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (g.ab(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.gd(a)
        },
        Tzb = function(a) {
            if (a.yp && "function" == typeof a.yp) return a.yp();
            if (!a.jm || "function" != typeof a.jm) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (g.ab(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.id(a)
                }
            }
        },
        Uzb = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.ab(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = Tzb(a), d = Szb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        Vzb = function(a, b, c, d) {
            var e = new g.Fo(null);
            a && g.Go(e, a);
            b && g.Ho(e, b);
            c && g.Io(e, c);
            d && (e.C = d);
            return e
        },
        Wzb = function() {
            this.j = d8();
            this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Pc: 3,
                Oc: "channel_type"
            })
        },
        Xzb = function(a, b) {
            a.j.rj("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Yzb = function() {
            this.j = d8();
            this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Pc: 3,
                Oc: "channel_type"
            })
        },
        Zzb = function(a, b) {
            a.j.rj("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        $zb = function() {
            this.j = d8();
            this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Pc: 3,
                Oc: "channel_type"
            })
        },
        aAb = function(a, b) {
            a.j.rj("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        bAb = function() {
            this.j = d8();
            this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/error", {
                Pc: 3,
                Oc: "channel_type"
            })
        },
        cAb = function(a, b) {
            a.j.rj("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        dAb = function() {
            this.j = d8();
            this.j.Lh("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        eAb = function() {
            this.j = d8();
            this.j.Lh("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        iAb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Jv;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", fAb(this, a.capabilities || ""), gAb(this, a.compatibleSenderThemes || ""), hAb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        fAb = function(a, b) {
            a.capabilities.clear();
            g.pt(b.split(","), g.jb(Qzb, jAb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        gAb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.pt(b.split(","), g.jb(Qzb, kAb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        hAb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        lAb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        mAb = function(a) {
            return new e8(a)
        },
        nAb = function(a) {
            return Array.isArray(a) ? g.Fr(a, mAb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        oAb = function(a) {
            return Array.isArray(a) ? "[" + g.Fr(a, g8).join(",") + "]" : "null"
        },
        pAb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        qAb = function(a) {
            return g.Fr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        rAb = function(a, b) {
            return g.Db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Db(a, function(c) {
                return f8(c, b)
            })
        },
        sAb = function() {
            var a = (0, g.CC)();
            a && Mzb(a, a.j.Kk(!0))
        },
        i8 = function() {
            var a = g.EC("yt-remote-connected-devices") || [];
            g.Xb(a);
            return a
        },
        tAb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Fr(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        uAb = function(a) {
            g.DC("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (vAb) return vAb;
            var a = g.EC("yt-remote-device-id");
            a || (a = pAb(), g.DC("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Fb(b, d);) c++, d = a + "#" + c;
            return vAb = d
        },
        wAb = function() {
            var a = i8(),
                b = j8();
            g.GC() && g.$b(a, b);
            a = tAb(a);
            if (0 == a.length) try {
                g.xpa("remote_sid")
            } catch (c) {} else try {
                g.VB("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        xAb = function() {
            return g.EC("yt-remote-session-browser-channel")
        },
        yAb = function() {
            return g.EC("yt-remote-local-screens") || []
        },
        zAb = function() {
            g.DC("yt-remote-lounge-token-expiration", !0, 86400)
        },
        AAb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Fr(yAb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Fr(a, function(d) {
                    return d.loungeToken
                });
            g.Gr(c, function(d) {
                return !g.Fb(b, d)
            }) && zAb();
            g.DC("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.FC("yt-remote-session-screen-id"), g.FC("yt-remote-session-video-id"));
            wAb();
            a = i8();
            g.Ib(a, j8());
            uAb(a)
        },
        BAb = function() {
            if (!l8) {
                var a = g.Rv();
                a && (l8 = new g.Bv(a))
            }
        },
        CAb = function() {
            BAb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.qE[a] = !0;
            var c = g.oE();
            c && c.publish.apply(c, arguments);
            g.qE[a] = !1
        },
        DAb = function() {},
        d8 = function() {
            if (!n8) {
                n8 = new g.Ag(new DAb);
                var a = g.LB("client_streamz_web_flush_count", -1); - 1 !== a && (n8.D = a)
            }
            return n8
        },
        EAb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        FAb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        GAb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? HAb(a.shift(), function() {
                o8(a)
            }) : IAb()
        },
        JAb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        HAb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.We(d, g.Fw(a));
            (document.head || document.documentElement).appendChild(d)
        },
        KAb = function() {
            var a = EAb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        IAb = function() {
            var a = GAb();
            a && a(!1, "No cast extension found")
        },
        MAb = function() {
            if (LAb) {
                var a = 2,
                    b = GAb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                HAb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", IAb, c)
            }
        },
        NAb = function() {
            MAb();
            var a = KAb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        PAb = function() {
            MAb();
            var a = KAb();
            a.push.apply(a, g.pa(OAb.map(JAb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.I.call(this);
            this.K = null != c ? (0, g.ib)(a, c) : a;
            this.gj = b;
            this.G = (0, g.ib)(this.j3, this);
            this.j = !1;
            this.B = 0;
            this.C = this.qd = null;
            this.D = []
        },
        q8 = function(a, b, c) {
            g.I.call(this);
            this.D = null != c ? a.bind(c) : a;
            this.gj = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.qd = null
        },
        QAb = function(a) {
            a.qd = g.yg(function() {
                a.qd = null;
                a.j && !a.B && (a.j = !1, QAb(a))
            }, a.gj);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        r8 = function() {},
        RAb = function() {
            g.Ab.call(this, "p")
        },
        SAb = function() {
            g.Ab.call(this, "o")
        },
        UAb = function() {
            return TAb = TAb || new g.Ld
        },
        VAb = function(a) {
            g.Ab.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = UAb();
            b.dispatchEvent(new VAb(b, a))
        },
        WAb = function(a) {
            g.Ab.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = UAb();
            b.dispatchEvent(new WAb(b, a))
        },
        XAb = function(a, b, c, d) {
            g.Ab.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ta.setTimeout(function() {
                a()
            }, b)
        },
        v8 = function() {},
        w8 = function(a, b, c, d) {
            this.G = a;
            this.D = b;
            this.Lc = c;
            this.jc = d || 1;
            this.Za = new g.Fp(this);
            this.ub = 45E3;
            a = g.jS ? 125 : void 0;
            this.ib = new g.xg(a);
            this.Na = null;
            this.C = !1;
            this.Y = this.eb = this.Z = this.Ra = this.Ca = this.Mb = this.ma = null;
            this.va = [];
            this.j = null;
            this.K = 0;
            this.N = this.Ia = null;
            this.Db = -1;
            this.Ma = !1;
            this.tb = 0;
            this.Xa = null;
            this.Vb = this.Wa = this.Pb = this.Ea = !1;
            this.B = new YAb
        },
        YAb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        $Ab = function(a, b, c) {
            a.Ra = 1;
            a.Z = a8(b.clone());
            a.Y = c;
            a.Ea = !0;
            ZAb(a, null)
        },
        ZAb = function(a, b) {
            a.Ca = Date.now();
            x8(a);
            a.eb = a.Z.clone();
            b8(a.eb, "t", a.jc);
            a.K = 0;
            var c = a.G.Ra;
            a.B = new YAb;
            a.j = aBb(a.G, c ? b : null, !a.Y);
            0 < a.tb && (a.Xa = new q8((0, g.ib)(a.sT, a, a.j), a.tb));
            a.Za.Ta(a.j, "readystatechange", a.n3);
            b = a.Na ? g.pd(a.Na) : {};
            a.Y ? (a.Ia || (a.Ia = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.eb, a.Ia, a.Y, b)) : (a.Ia = "GET", a.j.send(a.eb, a.Ia, null, b));
            s8(1)
        },
        bBb = function(a) {
            return a.j ? "GET" == a.Ia && 2 != a.Ra && a.G.bf : !1
        },
        gBb = function(a, b, c) {
            for (var d = !0, e; !a.Ma && a.K < c.length;)
                if (e = cBb(a, c), e == dBb) {
                    4 == b &&
                        (a.N = 4, t8(14), d = !1);
                    break
                } else if (e == eBb) {
                a.N = 4;
                t8(15);
                d = !1;
                break
            } else fBb(a, e);
            bBb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
            4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
            a.C = a.C && d;
            d ? 0 < c.length && !a.Vb && (a.Vb = !0, a.G.qQ(a)) : (y8(a), z8(a))
        },
        cBb = function(a, b) {
            var c = a.K,
                d = b.indexOf("\n", c);
            if (-1 == d) return dBb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return eBb;
            d += 1;
            if (d + c > b.length) return dBb;
            b = b.slice(d, d + c);
            a.K = d + c;
            return b
        },
        x8 = function(a) {
            a.Mb = Date.now() + a.ub;
            hBb(a, a.ub)
        },
        hBb = function(a, b) {
            if (null != a.ma) throw Error("WatchDog timer not null");
            a.ma = u8((0, g.ib)(a.l3, a), b)
        },
        A8 = function(a) {
            a.ma && (g.Ta.clearTimeout(a.ma), a.ma = null)
        },
        z8 = function(a) {
            a.G.Ug() || a.Ma || iBb(a.G, a)
        },
        y8 = function(a) {
            A8(a);
            g.vb(a.Xa);
            a.Xa = null;
            a.ib.stop();
            a.Za.Tf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        fBb = function(a, b) {
            try {
                var c = a.G;
                if (0 != c.Kh && (c.j == a || jBb(c.B, a)))
                    if (!a.Wa && jBb(c.B, a) && 3 == c.Kh) {
                        try {
                            var d = c.cf.j.parse(b)
                        } catch (x) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ca + 3E3 < a.Ca) B8(c), C8(c);
                                        else break a;
                                    kBb(c);
                                    t8(18)
                                }
                            }
                            else c.Yd = e[1], 0 < c.Yd - c.Xa && 37500 > e[2] && c.Wa && 0 == c.va && !c.ma && (c.ma = u8((0, g.ib)(c.o3, c), 6E3));
                            if (1 >= lBb(c.B) && c.Yc) {
                                try {
                                    c.Yc()
                                } catch (x) {}
                                c.Yc = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Wa || c.j == a) && B8(c), !g.fc(b))
                    for (e = c.cf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Xa = f[0];
                        f = f[1];
                        if (2 == c.Kh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.Vb = f[2];
                                var h = f[3];
                                null != h && (c.tT = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.Za = 1.5 * l);
                                d = c;
                                var m = a.DO();
                                if (m) {
                                    var n = g.Qn(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (mBb(p, p.B), p.B = null))
                                    }
                                    if (d.Ea) {
                                        var q = g.Qn(m, "X-HTTP-Session-Id");
                                        q && (d.Qe = q, g.No(d.Na, d.Ea, q))
                                    }
                                }
                                c.Kh = 3;
                                c.G && c.G.zT();
                                c.Jc && (c.Ld = Date.now() - a.Ca);
                                d = c;
                                var r = a;
                                d.Bd = nBb(d, d.Ra ? d.Vb : null, d.jc);
                                if (r.Wa) {
                                    oBb(d.B,
                                        r);
                                    var t = r,
                                        v = d.Za;
                                    v && t.setTimeout(v);
                                    t.ma && (A8(t), x8(t));
                                    d.j = r
                                } else pBb(d);
                                0 < c.C.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Kh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.yT(f), c.va = 0)
                    }
                s8(4)
            } catch (x) {}
        },
        qBb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        rBb = function(a) {
            this.G = a || 10;
            g.Ta.PerformanceNavigationTiming ? (a = g.Ta.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ta.chrome && g.Ta.chrome.loadTimes && g.Ta.chrome.loadTimes() && g.Ta.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            1 < this.D && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        sBb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        lBb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        jBb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        mBb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        oBb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        tBb = function(a) {
            if (null != a.B) return a.C.concat(a.B.va);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.C;
                a = g.u(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.va);
                return b
            }
            return g.Lb(a.C)
        },
        uBb = function(a, b) {
            var c = new v8;
            if (g.Ta.Image) {
                var d = new Image;
                d.onload = g.jb(F8, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.jb(F8, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.jb(F8, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.jb(F8, c, "TestLoadImage: timeout", !1, b, d);
                g.Ta.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        vBb = function(a, b) {
            var c = new v8,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    F8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? F8(c, "TestPingServer: ok", !0, b) : F8(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                F8(c, "TestPingServer: error", !1, b)
            })
        },
        F8 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        wBb = function() {
            this.j = new r8
        },
        xBb = function(a, b, c) {
            var d = c || "";
            try {
                Uzb(a, function(e, f) {
                    var h = e;
                    g.bb(e) && (h = g.Om(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.y8 ? c.y8[a] || b : b
        },
        yBb = function(a) {
            this.C = [];
            this.Vb = this.Bd = this.Na = this.jc = this.j = this.Qe = this.Ea = this.Ma = this.N = this.Mb = this.Y = null;
            this.Yf = this.eb = 0;
            this.Wf = G8("failFast", !1, a);
            this.Wa = this.ma = this.Z = this.K = this.G = null;
            this.Lc = !0;
            this.Yd = this.Xa = -1;
            this.Pb = this.va = this.Ca = 0;
            this.wh = G8("baseRetryDelayMs", 5E3, a);
            this.Zf = G8("retryDelaySeedMs", 1E4, a);
            this.Xf = G8("forwardChannelMaxRetries", 2, a);
            this.Fe = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Ge = a && a.npb || void 0;
            this.rg = a && a.fob || void 0;
            this.bf = a && a.jpb || !1;
            this.Za = void 0;
            this.Ra = a && a.Zca ||
                !1;
            this.D = "";
            this.B = new rBb(a && a.nmb);
            this.cf = new wBb;
            this.ub = a && a.Hmb || !1;
            this.tb = a && a.wmb || !1;
            this.ub && this.tb && (this.tb = !1);
            this.ag = a && a.cmb || !1;
            a && a.Jmb && (this.Lc = !1);
            this.Jc = !this.ub && this.Lc && a && a.rmb || !1;
            this.rd = void 0;
            a && a.QY && 0 < a.QY && (this.rd = a.QY);
            this.Yc = void 0;
            this.Ld = 0;
            this.ib = !1;
            this.Db = this.Ia = null
        },
        C8 = function(a) {
            a.j && (zBb(a), a.j.cancel(), a.j = null)
        },
        ABb = function(a) {
            C8(a);
            a.Z && (g.Ta.clearTimeout(a.Z), a.Z = null);
            B8(a);
            a.B.cancel();
            a.K && ("number" === typeof a.K && g.Ta.clearTimeout(a.K), a.K = null)
        },
        E8 = function(a) {
            sBb(a.B) || a.K || (a.K = !0, g.ig(a.vT, a), a.Ca = 0)
        },
        CBb = function(a, b) {
            if (lBb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.va.concat(a.C), !0;
            if (1 == a.Kh || 2 == a.Kh || a.Ca >= (a.Wf ? 0 : a.Xf)) return !1;
            a.K = u8((0, g.ib)(a.vT, a, b), BBb(a, a.Ca));
            a.Ca++;
            return !0
        },
        EBb = function(a, b) {
            var c;
            b ? c = b.Lc : c = a.eb++;
            var d = a.Na.clone();
            g.No(d, "SID", a.D);
            g.No(d, "RID", c);
            g.No(d, "AID", a.Xa);
            H8(a, d);
            a.N && a.Y && g.Ep(d, a.N, a.Y);
            c = new w8(a, a.D, c, a.Ca + 1);
            null === a.N && (c.Na = a.Y);
            b && (a.C = b.va.concat(a.C));
            b = DBb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Fe) + Math.round(.5 * a.Fe * Math.random()));
            mBb(a.B, c);
            $Ab(c, d, b)
        },
        H8 = function(a, b) {
            a.Ma && g.bd(a.Ma, function(c, d) {
                g.No(b, d, c)
            });
            a.G && Uzb({}, function(c, d) {
                g.No(b, d, c)
            })
        },
        DBb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.ib)(a.G.q3, a.G, a) : null;
            a: for (var e = a.C, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        xBb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.C.splice(0, c);
            b.va = a;
            return d
        },
        pBb = function(a) {
            a.j || a.Z || (a.Pb = 1, g.ig(a.uT, a), a.va = 0)
        },
        kBb = function(a) {
            if (a.j || a.Z || 3 <= a.va) return !1;
            a.Pb++;
            a.Z = u8((0, g.ib)(a.uT, a), BBb(a, a.va));
            a.va++;
            return !0
        },
        zBb = function(a) {
            null != a.Ia && (g.Ta.clearTimeout(a.Ia), a.Ia = null)
        },
        FBb = function(a) {
            a.j = new w8(a, a.D, "rpc", a.Pb);
            null === a.N && (a.j.Na = a.Y);
            a.j.tb = 0;
            var b = a.Bd.clone();
            g.No(b, "RID", "rpc");
            g.No(b, "SID", a.D);
            g.No(b, "AID", a.Xa);
            g.No(b, "CI", a.Wa ? "0" : "1");
            !a.Wa && a.rd && g.No(b, "TO", a.rd);
            g.No(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.N && a.Y && g.Ep(b, a.N, a.Y);
            a.Za && a.j.setTimeout(a.Za);
            var c = a.j;
            a = a.Vb;
            c.Ra = 1;
            c.Z = a8(b.clone());
            c.Y = null;
            c.Ea = !0;
            ZAb(c, a)
        },
        B8 = function(a) {
            null != a.ma && (g.Ta.clearTimeout(a.ma), a.ma = null)
        },
        iBb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                zBb(a);
                a.j = null;
                var d = 2
            } else if (jBb(a.B, b)) c = b.va, oBb(a.B, b), d = 1;
            else return;
            if (0 != a.Kh)
                if (b.C)
                    if (1 == d) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ca;
                        var e = a.Ca;
                        d = UAb();
                        d.dispatchEvent(new XAb(d, c, b, e));
                        E8(a)
                    } else pBb(a);
            else {
                var f = b.Db;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && CBb(a, b) || 2 == d && kBb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        BBb = function(a, b) {
            var c = a.wh + Math.floor(Math.random() *
                a.Zf);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = (0, g.ib)(a.gda, a),
                    d = a.rg,
                    e = !d;
                d = new g.Fo(d || "//www.google.com/images/cleardot.gif");
                g.Ta.location && "http" == g.Ta.location.protocol || g.Go(d, "https");
                a8(d);
                e ? uBb(d.toString(), c) : vBb(d.toString(), c)
            } else t8(2);
            a.Kh = 0;
            a.G && a.G.xT(b);
            GBb(a);
            ABb(a)
        },
        GBb = function(a) {
            a.Kh = 0;
            a.Db = [];
            if (a.G) {
                var b = tBb(a.B);
                if (0 != b.length || 0 != a.C.length) g.Mb(a.Db, b), g.Mb(a.Db, a.C), a.B.C.length = 0, g.Lb(a.C), a.C.length = 0;
                a.G.wT()
            }
        },
        HBb = function(a) {
            if (0 == a.Kh) return a.Db;
            var b = [];
            g.Mb(b, tBb(a.B));
            g.Mb(b, a.C);
            return b
        },
        nBb = function(a, b, c) {
            var d = g.Oo(c);
            "" != d.j ? (b && g.Ho(d, b + "." + d.j), g.Io(d, d.D)) : (d = g.Ta.location, d = Vzb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ea;
            c = a.Qe;
            b && c && g.No(d, b, c);
            g.No(d, "VER", a.tT);
            H8(a, d);
            return d
        },
        aBb = function(a, b, c) {
            if (b && !a.Ra) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.bf && !a.Ge ? new g.Jn(new g.Bo({
                v0: c
            })) : new g.Jn(a.Ge);
            b.K = a.Ra;
            return b
        },
        IBb = function() {},
        JBb = function() {
            if (g.Cf && !g.Uc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Ld.call(this);
            this.j = new yBb(b);
            this.G = a;
            this.B = b && b.n9 || null;
            a = b && b.m9 || null;
            b && b.lmb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.Knb || null;
            b && b.XY && (a ? a["X-WebChannel-Content-Type"] = b.XY : a = {
                "X-WebChannel-Content-Type": b.XY
            });
            b && b.aW && (a ? a["X-WebChannel-Client-Profile"] = b.aW : a = {
                "X-WebChannel-Client-Profile": b.aW
            });
            this.j.Mb = a;
            (a = b && b.Jnb) && !g.fc(a) && (this.j.N = a);
            this.K = b && b.Zca || !1;
            this.D = b && b.Fob || !1;
            (b = b && b.s8) && !g.fc(b) && (this.j.Ea = b, g.jd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new I8(this)
        },
        KBb = function(a) {
            RAb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.fd(b)) ? g.nd(b, this.j) : b : this.data = a
        },
        LBb = function(a) {
            SAb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        MBb = function(a, b) {
            this.B = a;
            this.j = b
        },
        NBb = function(a) {
            return HBb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? Rzb(b) : b) : c = b;
                return c
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ta.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new OBb(L8, a))
        },
        OBb = function(a) {
            g.Ab.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.Fp(this);
            this.G = new g.xg;
            this.G.setInterval(250)
        },
        QBb = function(a, b, c) {
            a.Tx = 1;
            a.Vr = a8(b.clone());
            a.Iu = c;
            a.Ea = !0;
            PBb(a, null)
        },
        RBb = function(a, b, c, d, e) {
            a.Tx = 1;
            a.Vr = a8(b.clone());
            a.Iu = null;
            a.Ea = c;
            e && (a.U_ = !1);
            PBb(a, d)
        },
        PBb = function(a, b) {
            a.Sx = Date.now();
            O8(a);
            a.Xr = a.Vr.clone();
            b8(a.Xr, "t", a.K);
            a.KG = 0;
            a.qj = a.j.QL(a.j.gC() ? b : null);
            0 < a.OL && (a.IG = new q8((0, g.ib)(a.AT, a, a.qj), a.OL));
            a.C.Ta(a.qj, "readystatechange", a.s3);
            b = a.Hu ? g.pd(a.Hu) : {};
            a.Iu ? (a.JG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.qj.send(a.Xr, a.JG, a.Iu, b)) : (a.JG = "GET", a.U_ && !g.Vc && (b.Connection = "close"), a.qj.send(a.Xr, a.JG, null, b));
            a.j.Vn(1)
        },
        UBb = function(a, b) {
            var c = a.KG,
                d = b.indexOf("\n", c);
            if (-1 == d) return SBb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return TBb;
            d += 1;
            if (d + c > b.length) return SBb;
            b = b.slice(d, d + c);
            a.KG = d + c;
            return b
        },
        WBb = function(a, b) {
            a.Sx = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Xr = a.Vr.clone();
            g.No(a.Xr, "DOMAIN", c);
            g.No(a.Xr, "t", a.K);
            try {
                a.Eo = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Wr = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in VBb) f = R8[f] = VBb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.qe(d + "</body></html>");
            a.Eo.open();
            a.Eo.write(g.pe(c));
            a.Eo.close();
            a.Eo.parentWindow.m = (0, g.ib)(a.fba, a);
            a.Eo.parentWindow.d = (0, g.ib)(a.RZ, a, !0);
            a.Eo.parentWindow.rpcClose = (0, g.ib)(a.RZ, a, !1);
            c = a.Eo.createElement("DIV");
            a.Eo.parentWindow.document.body.appendChild(c);
            d = g.ye(a.Xr.toString());
            d = g.$e(g.he(d));
            d = g.qe('<iframe src="' + d + '"></iframe>');
            g.Qba(c, d);
            a.j.Vn(1)
        },
        O8 = function(a) {
            a.PL = Date.now() + a.B;
            XBb(a, a.B)
        },
        XBb = function(a, b) {
            if (null != a.Ux) throw Error("WatchDog timer not null");
            a.Ux = K8((0, g.ib)(a.r3, a), b)
        },
        YBb = function(a) {
            a.Ux && (g.Ta.clearTimeout(a.Ux), a.Ux = null)
        },
        Q8 = function(a) {
            a.j.Ug() || a.Gu || a.j.LG(a)
        },
        P8 = function(a) {
            YBb(a);
            g.vb(a.IG);
            a.IG = null;
            a.G.stop();
            a.C.Tf();
            if (a.qj) {
                var b = a.qj;
                a.qj = null;
                b.abort();
                b.dispose()
            }
            a.Eo && (a.Eo = null)
        },
        ZBb = function(a, b) {
            try {
                a.j.BT(a, b), a.j.Vn(4)
            } catch (c) {}
        },
        aCb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                $Bb(a, b, function(h) {
                    h ? c(!0) : g.Ta.setTimeout(function() {
                        aCb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        $Bb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Ta.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        bCb = function(a) {
            this.j = a;
            this.B = new r8
        },
        cCb = function(a) {
            var b = T8(a.j, a.RC, "/mail/images/cleardot.gif");
            a8(b);
            aCb(b.toString(), 5E3, (0, g.ib)(a.T5, a), 3, 2E3);
            a.Vn(1)
        },
        dCb = function(a) {
            var b = a.j.K;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Qj = new N8(a), a.Qj.Hu = a.RL, b = a.j, b = T8(b, b.gC() ? a.fC : null, a.SL), M8(5), !g.Cf || g.Uc(10)) b8(b, "TYPE", "xmlhttp"), RBb(a.Qj, b, !1, a.fC, !1);
            else {
                b8(b, "TYPE", "html");
                var c = a.Qj;
                a = !!a.fC;
                c.Tx = 3;
                c.Vr = a8(b.clone());
                WBb(c, a)
            }
        },
        eCb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new r8;
            this.Y = a || null;
            this.K = null != b ? b : null;
            this.Z = c || !1
        },
        fCb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        gCb = function(a, b, c, d) {
            g.Ab.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        hCb = function(a) {
            g.Ab.call(this, "serverreachability", a)
        },
        jCb = function(a) {
            a.t3(1, 0);
            a.MG = T8(a, null, a.TL);
            iCb(a)
        },
        kCb = function(a) {
            a.Cs && (a.Cs.abort(), a.Cs = null);
            a.Qg && (a.Qg.cancel(), a.Qg = null);
            a.qq && (g.Ta.clearTimeout(a.qq), a.qq = null);
            V8(a);
            a.ek && (a.ek.cancel(), a.ek = null);
            a.Yr && (g.Ta.clearTimeout(a.Yr), a.Yr = null)
        },
        lCb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new fCb(a.u3++, b));
            2 != a.j && 3 != a.j || iCb(a)
        },
        mCb = function(a) {
            var b = 0;
            a.Qg && b++;
            a.ek && b++;
            return b
        },
        iCb = function(a) {
            a.ek || a.Yr || (a.Yr = K8((0, g.ib)(a.FT, a), 0), a.Wx = 0)
        },
        pCb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.iC = Math.floor(1E5 * Math.random());
                    b = a.iC++;
                    var c = new N8(a, "", b);
                    c.Hu = a.Mo;
                    var d = nCb(a),
                        e = a.MG.clone();
                    g.No(e, "RID", b);
                    g.No(e, "CVER", "1");
                    W8(a, e);
                    QBb(c, e, d);
                    a.ek = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? oCb(a, b) : 0 == a.B.length || a.ek || oCb(a))
        },
        oCb = function(a, b) {
            if (b)
                if (6 < a.Ju) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.iC - 1;
                    b = nCb(a)
                } else c = b.N, b = b.Iu;
            else c = a.iC++, b = nCb(a);
            var d = a.MG.clone();
            g.No(d, "SID", a.D);
            g.No(d, "RID", c);
            g.No(d, "AID", a.Xx);
            W8(a, d);
            c = new N8(a, a.D, c, a.Wx + 1);
            c.Hu = a.Mo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.ek = c;
            QBb(c, d, b)
        },
        W8 = function(a, b) {
            a.Ti && (a = a.Ti.JT()) && g.bd(a, function(c, d) {
                g.No(b, d, c)
            })
        },
        nCb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Ju && 0 < b) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    CE: void 0
                }, f++) {
                e.CE = a.B[f].j;
                var h = a.B[f].map;
                e.CE = 6 >= a.Ju ? f : e.CE - d;
                try {
                    g.bd(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.CE + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.CE + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        qCb = function(a) {
            a.Qg || a.qq || (a.N = 1, a.qq = K8((0, g.ib)(a.ET, a), 0), a.Vx = 0)
        },
        sCb = function(a) {
            if (a.Qg || a.qq || 3 <= a.Vx) return !1;
            a.N++;
            a.qq = K8((0, g.ib)(a.ET, a), rCb(a, a.Vx));
            a.Vx++;
            return !0
        },
        U8 = function(a, b, c) {
            a.lL = null == a.K ? c : !a.K;
            a.No = b.mq;
            a.Z || jCb(a)
        },
        V8 = function(a) {
            null != a.Ku && (g.Ta.clearTimeout(a.Ku), a.Ku = null)
        },
        rCb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Ti && (c = null);
                var d = (0, g.ib)(a.fda, a);
                c || (c = new g.Fo("//www.google.com/images/cleardot.gif"), a8(c));
                $Bb(c.toString(), 1E4, d)
            } else M8(2);
            tCb(a, b)
        },
        tCb = function(a, b) {
            a.j = 0;
            a.Ti && a.Ti.GT(b);
            uCb(a);
            kCb(a)
        },
        uCb = function(a) {
            a.j = 0;
            a.No = -1;
            if (a.Ti)
                if (0 == a.C.length && 0 == a.B.length) a.Ti.UL();
                else {
                    var b = g.Lb(a.C),
                        c = g.Lb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Ti.UL(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.Oo(c);
            if ("" != d.j) b && g.Ho(d, b + "." + d.j), g.Io(d, d.D);
            else {
                var e = window.location;
                d = Vzb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.hC && g.bd(a.hC, function(f, h) {
                g.No(d, h, f)
            });
            g.No(d, "VER", a.Ju);
            W8(a, d);
            return d
        },
        vCb = function() {},
        wCb = function() {
            this.j = [];
            this.B = []
        },
        xCb = function(a) {
            g.Ab.call(this, "channelMessage");
            this.message = a
        },
        yCb = function(a) {
            g.Ab.call(this, "channelError");
            this.error = a
        },
        zCb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.Ru(this.Xaa, 0, this);
            g.N(this, this.j);
            this.gj = 5E3;
            this.B = 0;
            if ("function" === typeof a) b && (a = (0, g.ib)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.ib)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        ACb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ca = a;
            this.N = b;
            this.C = new g.Av;
            this.B = new Y8(this.sca, this);
            this.j = null;
            this.ma = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Ra = c;
            this.va = d;
            this.Wa = e;
            this.Na = new Wzb;
            this.Ia = new Yzb;
            this.Ma = new $zb;
            this.Ea = new bAb;
            this.Xa = new dAb;
            this.eb = new eAb
        },
        BCb = function(a) {
            if (a.j) {
                var b = a.va(),
                    c = a.j.Mo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Mo = c
            }
        },
        Z8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Vm(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Wm(a) || "";
            a = g.pc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.oc(a, "10.0") && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = "https://" + a.domain + a.port + a.j);
            return g.bn(c + b, {})
        },
        CCb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.jb(a.D, d, !0),
                onError: g.jb(a.C, e),
                onTimeout: g.jb(a.G, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.MB(b, a)
        },
        DCb = function(a, b) {
            g.Ld.call(this);
            var c = this;
            this.Id = a();
            this.Id.subscribe("handlerOpened", this.y3, this);
            this.Id.subscribe("handlerClosed", this.w3, this);
            this.Id.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Id.subscribe("handlerMessage", this.x3, this);
            this.j = b
        },
        ECb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new JBb : e;
            var f = void 0 === f ? new g.Av : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ca = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : lBb((new MBb(h, h.j)).j.B)) && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.ma = !1;
            this.logger = null;
            this.va = [];
            this.Ig = void 0;
            this.Na = new Wzb;
            this.Ia = new Yzb;
            this.Ma = new $zb;
            this.Ea = new bAb
        },
        FCb = function(a) {
            g.Bd(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.u(a.va), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.va = [];
                a.ra("webChannelOpened");
                Xzb(a.Na, "WEB_CHANNEL")
            });
            g.Bd(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.ra("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : NBb(new MBb(b, b.j));
                c && (a.va = [].concat(g.pa(c)));
                Zzb(a.Ia, "WEB_CHANNEL")
            });
            g.Bd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.ra("webChannelMessage", new zCb(c[0], c[1]));
                a.Ig = b.statusCode;
                aAb(a.Ma, "WEB_CHANNEL")
            });
            g.Bd(a.channel, "o", function() {
                401 === a.Ig || a.C.start();
                a.ra("webChannelError");
                cAb(a.Ea, "WEB_CHANNEL")
            })
        },
        GCb = function(a) {
            var b = a.Ca();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        HCb = function(a) {
            g.Ld.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.B3, this);
            this.j.subscribe("webChannelClosed", this.z3, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.A3, this)
        },
        ICb = function(a, b, c, d, e) {
            function f() {
                return new ACb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.KB("enable_mdx_web_channel_desktop") ? new HCb(function() {
                return new ECb($8(a, "/wc"), b, c)
            }) : new DCb(f, e)
        },
        MCb = function() {
            var a = JCb;
            KCb();
            a9.push(a);
            LCb()
        },
        b9 = function(a, b) {
            KCb();
            var c = NCb(a, String(b));
            0 == a9.length ? OCb(c) : (LCb(), g.bc(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        KCb = function() {
            a9 || (a9 = g.Wa("yt.mdx.remote.debug.handlers_") || [], g.Va("yt.mdx.remote.debug.handlers_", a9))
        },
        OCb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        LCb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.bc(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        NCb = function(a, b) {
            var c = (Date.now() - PCb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.IF.call(this);
            this.K = a;
            this.screens = []
        },
        QCb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        RCb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.pt(a.screens, function(f) {
                return !!rAb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = QCb(a, b[d]) || c;
            return c
        },
        SCb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.pt(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        TCb = function(a, b, c, d, e) {
            g.IF.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.qd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + oAb(this.screens))
        },
        UCb = function(a) {
            if (a.screens.length) {
                var b = g.Fr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                CCb(a.B, c, {
                    screen_ids: b.join(",")
                }, (0, g.ib)(a.P7, a), (0, g.ib)(a.O7, a))
            }
        },
        h9 = function(a) {
            if (g.KB("deprecate_pair_servlet_enabled")) return RCb(a, []);
            var b = nAb(yAb());
            b = g.pt(b, function(c) {
                return !c.uuid
            });
            return RCb(a, b)
        },
        j9 = function(a, b) {
            AAb(g.Fr(a.screens, lAb));
            b && zAb()
        },
        WCb = function(a, b) {
            g.IF.call(this);
            this.K = b;
            b = (b = g.EC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Fb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            VCb("Initialized with " + g.Om(this.j))
        },
        XCb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            CCb(a.G, d, {
                lounge_token: b.token
            }, (0, g.ib)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.ib)(function() {
                c(!1)
            }, a))
        },
        ZCb = function(a, b) {
            a: if (Pzb(b) != Pzb(a.j)) var c = !1;
                else {
                    c = g.id(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (VCb("Updated online screens: " + g.Om(a.j)), a.j = b, a.ra("screenChange"));YCb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.IB(a.C);
            a.C = g.GB((0, g.ib)(a.wR, a), 0 < a.D && a.D < g.kb() ? 2E4 : 1E4)
        },
        VCb = function(a) {
            b9("OnlineScreenService", a)
        },
        $Cb = function(a) {
            var b = {};
            g.bc(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.qg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        YCb = function(a) {
            a = g.id(g.cd(a.j, function(b) {
                return b
            }));
            g.Xb(a);
            a.length ? g.DC("yt-remote-online-screen-ids", a.join(","), 60) : g.FC("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            aDb(this)
        },
        cDb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Rk(),
                l = c ? h8(h, c) : null;
            c && (a.N || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                XCb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? bDb(a, c, (0, g.ib)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                XCb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        dDb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        eDb = function(a, b, c) {
            XCb(a.j, b, c)
        },
        bDb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.MB($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        fDb = function(a) {
            a.screens = a.B.Rk();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + oAb(a.screens))
        },
        aDb = function(a) {
            gDb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.ib)(a.Z7, a));
            fDb(a);
            a.N || (a.C = nAb(g.EC("yt-remote-automatic-screen-cache") || []));
            gDb(a);
            a.info("Initializing automatic screens: " + oAb(a.C));
            a.j = new WCb(a.D, (0, g.ib)(a.Rk, a, !0));
            a.j.subscribe("screenChange", (0, g.ib)(function() {
                this.ra("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || hDb(a));
            gDb(a);
            a.G[b.uuid] = b.id;
            g.DC("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        hDb = function(a) {
            a = g.pt(a.C, function(b) {
                return "shortLived" != b.idType
            });
            g.DC("yt-remote-automatic-screen-cache", g.Fr(a, lAb))
        },
        gDb = function(a) {
            a.G = g.EC("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.IF.call(this);
            this.Ea = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.ra("sessionScreen", a.j)
        },
        iDb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.ra("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ea, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.va = (0, g.ib)(this.G3, this);
            this.Ia = (0, g.ib)(this.pba, this);
            this.ma = g.GB(function() {
                jDb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ca = !1;
            this.Y = "unknown"
        },
        lDb = function(a, b) {
            g.IB(a.N);
            a.N = 0;
            0 == b ? kDb(a) : a.N = g.GB(function() {
                kDb(a)
            }, b)
        },
        kDb = function(a) {
            mDb(a, "getLoungeToken");
            g.IB(a.G);
            a.G = g.GB(function() {
                nDb(a, null)
            }, 3E4)
        },
        mDb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Om());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.ib)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.Om(c))
        },
        oDb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.oX(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Gj()
            }, 5)) : a.Gj(Error("Waiting for session status timed out."))
        },
        qDb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            pDb(a, d, function(e) {
                e ? (a.Ca = !0, m9(a.D, d), o9(a, d), a.Y = "unknown", lDb(a, c)) : (g.pB(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Gj())
            }, 5)
        },
        jDb = function(a, b) {
            g.IB(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? qDb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.pB(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), oDb(a, b.screenId))) : (g.pB(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), oDb(a, b.screenId)) :
                oDb(a, b.screenId) : a.Gj(Error("Waiting for session status timed out."))
        },
        nDb = function(a, b) {
            g.IB(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, lDb(a, 3E4)) : (iDb(a, b.loungeToken), a.Ca = !1, a.Y = "unknown", lDb(a, b.loungeTokenRefreshIntervalMs))
        },
        pDb = function(a, b, c, d) {
            g.IB(a.K);
            a.K = 0;
            eDb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.GB(function() {
                    pDb(a, b, c, d - 1)
                }, 300)
            })
        },
        rDb = function(a) {
            g.IB(a.Z);
            a.Z = 0;
            g.IB(a.K);
            a.K = 0;
            g.IB(a.ma);
            a.ma = 0;
            g.IB(a.G);
            a.G = 0;
            g.IB(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ia = "";
            this.Ra = c;
            this.Na = null;
            this.ma = function() {};
            this.Y = NaN;
            this.Ma = (0, g.ib)(this.H3, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.va = !1;
            this.Ca = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
        },
        sDb = function(a) {
            a.G = a.D.LT(a.Ia, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.va = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Gj(b)
            })
        },
        tDb = function(a) {
            var b = {};
            b.pairingCode = a.Ia;
            b.theme = a.Ra;
            CAb() && (b.env_useStageMdx = 1);
            return g.an(b)
        },
        uDb = function(a) {
            return new Promise(function(b) {
                a.Ia = pAb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, tDb(a));
                    b(c);
                    sDb(a)
                } else a.ma = function() {
                    g.IB(a.Y);
                    a.ma = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, tDb(a));
                    b(d);
                    sDb(a)
                }, a.Y = g.GB(function() {
                    a.ma()
                }, 100)
            })
        },
        wDb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                vDb(a, d, function(f) {
                    f ? (a.va = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.pB(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : uDb(a)
            })
        },
        xDb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                cDb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : uDb(a)
            })
        },
        vDb = function(a, b, c, d) {
            g.IB(a.K);
            a.K = 0;
            eDb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.GB(function() {
                    vDb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.IB(a.N), a.N = 0, 0 == b ? yDb(a) : a.N = g.GB(function() {
                yDb(a)
            }, b))
        },
        yDb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ca = c, t9(a, 3E4)) : (a.va = !1, a.Ca = "unknown", iDb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ca = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        zDb = function(a) {
            g.IB(a.K);
            a.K = 0;
            g.IB(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.IB(a.Y)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.GB((0, g.ib)(this.hA, this, null), 150)
        },
        v9 = function(a, b) {
            g.IF.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.ib)(this.haa, this)
        },
        ADb = function(a, b) {
            return b ? g.Db(a.C, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        JCb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.ra("yt-remote-cast2-receiver-resumed",
                b.B) : a.ra("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.ib)(a.PZ, a, b)), b.subscribe("sessionFailed", function() {
                return BDb(a, b)
            }), b.j ? a.ra("yt-remote-cast2-session-change", b.j) : c && a.j.hA(null)) : a.ra("yt-remote-cast2-session-change", null))
        },
        BDb = function(a, b) {
            a.j == b && a.ra("yt-remote-cast2-session-failed")
        },
        CDb = function(a) {
            var b = a.B.KT(),
                c = a.j && a.j.B;
            a = g.Fr(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = ADb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        JDb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : DDb() ? EDb(b, d) && (FDb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? GDb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? GDb(a, c) : (A9("Failed to load cast API: " + f), HDb(!1), FDb(!1), g.FC("yt-remote-cast-available"), g.FC("yt-remote-cast-receiver"),
                    IDb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Bta("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= EAb() && NAb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? IAb() : 89 <= EAb() ? PAb() : (MAb(), o8(OAb.map(JAb))))) : z9("Cannot initialize because not running Chrome")
        },
        IDb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Va("yt.mdx.remote.cloudview.instance_", null);
            KDb(!1);
            g.tE(LDb);
            LDb.length = 0
        },
        C9 = function() {
            return !!g.EC("yt-remote-cast-installed")
        },
        MDb = function() {
            var a = g.EC("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        NDb = function() {
            z9("clearCurrentReceiver");
            g.FC("yt-remote-cast-receiver")
        },
        ODb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        PDb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), LDb.push(g.sE("yt-remote-cast2-api-ready", PDb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        DDb = function() {
            var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.BK || a
        },
        QDb = function(a, b) {
            B9().init(a, b)
        },
        EDb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.DC("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.DC("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.DC("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.FC("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Va("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Wa("yt.mdx.remote.cloudview.instance_")
        },
        GDb = function(a, b) {
            HDb(!0);
            FDb(!1);
            QDb(a, function(c) {
                c ? (KDb(!0), g.uE("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), HDb(!1), g.FC("yt-remote-cast-available"), g.FC("yt-remote-cast-receiver"), IDb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        HDb = function(a) {
            z9("setCastInstalled_ " + a);
            g.DC("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Wa("yt.mdx.remote.cloudview.apiReady_")
        },
        KDb = function(a) {
            z9("setApiReady_ " + a);
            g.Va("yt.mdx.remote.cloudview.apiReady_", a)
        },
        FDb = function(a) {
            g.Va("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Uk = this.Cp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        RDb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Cp = !1;
            a.Uk = !1;
            a.N = 0;
            a.K = g.kb();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.kb() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.kb()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.kb() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && RDb(a)
        },
        SDb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.qd(a.trackData);
            b.hasPrevious = a.Cp;
            b.hasNext = a.Uk;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.IF.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new wCb;
            this.B = this.j = null;
            this.Y = (0, g.ib)(this.W9, this);
            this.N = (0, g.ib)(this.NE, this);
            this.Z = (0, g.ib)(this.V9, this);
            this.ma = (0, g.ib)(this.Z9, this);
            var d = 0;
            a ? (d = a.getProxyState(), 3 != d && (a.subscribe("proxyStateChange", this.TR, this), TDb(this))) : d = 3;
            0 != d && (b ? this.TR(d) : g.GB(function() {
                c.TR(d)
            }, 0));
            (a = ODb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        TDb = function(a) {
            g.bc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.jb(this.eaa, b), this))
            }, a)
        },
        UDb = function(a) {
            g.bc(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.B.push(b)
        },
        VDb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            UDb(a);
            a.D.setPlayerContextData(SDb(b));
            TDb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.NE(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.NE(a.B.media[0]))
        },
        WDb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.ib)(function(d) {
                this.qg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.qg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.IF.call(this);
            var e = this;
            this.K = NaN;
            this.Ia = !1;
            this.Y = this.Z = this.va = this.Ca = NaN;
            this.ma = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.Ma = d;
            this.ma.push(g.uC(window, "beforeunload", function() {
                e.qz(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Ra = b.id;
            this.Ea = b.idType;
            this.B = ICb(this.Na, c, this.QT, "shortLived" == this.Ea, this.Ra);
            this.B.Ta("channelOpened", function() {
                XDb(e)
            });
            this.B.Ta("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? k8(!0) : k8();
                e.dispose()
            });
            this.B.Ta("channelError", function(f) {
                k8();
                isNaN(e.ND()) ? (1 == f && "shortLived" == e.Ea && e.ra("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ia = !0, S9("Channel error: " + f + " with reconnection in " + e.ND() + " ms"), T9(e, 2))
            });
            this.B.Ta("channelMessage", function(f) {
                YDb(e, f)
            });
            this.B.Fr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.GC() && g.DC("yt-remote-session-video-id", f)
            })
        },
        ZDb = function(a) {
            return g.Db(a.C, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.ra("proxyStateChange", b)
        },
        $Db = function(a) {
            a.K = g.GB(function() {
                S9("Connecting timeout");
                a.qz(1)
            }, 2E4)
        },
        aEb = function(a) {
            g.IB(a.K);
            a.K = NaN
        },
        bEb = function(a) {
            g.IB(a.Ca);
            a.Ca = NaN
        },
        dEb = function(a) {
            cEb(a);
            a.va = g.GB(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        cEb = function(a) {
            g.IB(a.va);
            a.va = NaN
        },
        XDb = function(a) {
            S9("Channel opened");
            a.Ia && (a.Ia = !1, bEb(a), a.Ca = g.GB(function() {
                S9("Timing out waiting for a screen.");
                a.qz(1)
            }, 15E3))
        },
        fEb = function(a, b) {
            var c = null;
            if (b) {
                var d = ZDb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Va("yt.mdx.remote.remoteClient_", c);
            b && (aEb(a), bEb(a));
            c = a.B.Vz() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.jX() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), eEb(a)) : a.qz(1)
        },
        gEb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.md(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ra("remotePlayerChange"))
        },
        hEb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.ra("remoteQueueChange", c)
        },
        jEb = function(a, b) {
            b.params = b.params || {};
            hEb(a, b, "NOW_PLAYING_MAY_CHANGE");
            iEb(a, b);
            a.ra("autoplayDismissed")
        },
        iEb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.wl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? dEb(a) : cEb(a);
            a.ra("remotePlayerChange")
        },
        kEb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.ra("remotePlayerChange")
            }
        },
        lEb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ra("remotePlayerChange")
        },
        mEb = function(a, b) {
            a.N = b.params.videoId;
            a.ra("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        nEb = function(a, b) {
            a.N = b.params.videoId || null;
            a.ra("autoplayUpNext", a.N)
        },
        oEb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.ra("autoplayModeChange", a.G);
            "DISABLED" == a.G && a.ra("autoplayDismissed")
        },
        pEb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Cp = "true" == b.params.hasPrevious;
            a.j.Uk = c;
            a.ra("previousNextChange")
        },
        YDb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Om(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = c8(b.params.devices);
                    a.C = g.Fr(b, function(d) {
                        return new iAb(d)
                    });
                    b = !!g.Db(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    fEb(a, b);
                    b = a.mY("mlm");
                    a.ra("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Jb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    fEb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new iAb(c8(b.params.device));
                    g.Db(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || Ozb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new iAb(c8(b.params.device));
                    g.Jb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    hEb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    jEb(a, b);
                    break;
                case "onStateChange":
                    iEb(a, b);
                    break;
                case "onAdStateChange":
                    kEb(a, b);
                    break;
                case "onVolumeChanged":
                    lEb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    gEb(a, b);
                    break;
                case "nowAutoplaying":
                    mEb(a, b);
                    break;
                case "autoplayDismissed":
                    a.ra("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    nEb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    oEb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    pEb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ra("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ra("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        eEb = function(a) {
            g.IB(a.Y);
            a.Y = g.GB(function() {
                a.qz(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Om(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        qEb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.jh = a;
            this.j = [];
            this.j.push(this.jh.$_s("screenChange", (0, g.ib)(this.L3, this)));
            this.j.push(this.jh.$_s("onlineScreenChange", (0, g.ib)(this.M$, this)))
        },
        vEb = function(a, b) {
            BAb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.mB("MDX_CONFIG") || b;
                sAb();
                wAb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), CAb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Wa("yt.mdx.remote.deferredProxies_") || [], g.Va("yt.mdx.remote.deferredProxies_", X9));
                rEb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Va("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Va("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    JDb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Wa("yt.mdx.remote.initialized_") && (g.Va("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Om(b)),
                    a$.push(g.sE("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.sE("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.sE("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.sE("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.sE("yt-remote-cast2-session-change", sEb)), a$.push(g.sE("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), NDb())
                    })), a$.push(g.sE("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = tEb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.KB("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Om(a)), a ? (g.DC("yt-remote-session-app", a.app), g.DC("yt-remote-session-name", a.name)) : (g.FC("yt-remote-session-app"), g.FC("yt-remote-session-name")), g.Va("yt.mdx.remote.channelParams_", a), c.start(), Z9() || uEb())
            }
        },
        wEb = function() {
            var a = Y9().jh.$_gos();
            var b = d$();
            b && e$() && (rAb(a, b) || a.push(b));
            return qAb(a)
        },
        yEb = function() {
            var a = xEb();
            !a && C9() && MDb() && (a = {
                key: "cast-selector-receiver",
                name: MDb()
            });
            return a
        },
        xEb = function() {
            var a = wEb(),
                b = d$();
            b || (b = c$());
            return g.Db(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Rk();
            return h8(b, a)
        },
        sEb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.Fr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), zEb(null))
        },
        AEb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!BEb) {
                var a = g.Wa("yt.mdx.remote.screenService_");
                BEb = a ? new qEb(a) : null
            }
            return BEb
        },
        Z9 = function() {
            return g.Wa("yt.mdx.remote.currentScreenId_")
        },
        CEb = function(a) {
            g.Va("yt.mdx.remote.currentScreenId_", a)
        },
        DEb = function() {
            return g.Wa("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Va("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Wa("yt.mdx.remote.connection_")
        },
        zEb = function(a) {
            var b = e$();
            b$(null);
            a || CEb("");
            g.Va("yt.mdx.remote.connection_", a);
            X9 && (g.bc(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.GC();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Rk();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                CEb(a.id);
                var c = g.Wa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, tEb(), c);
                a.connect(b, DEb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), zEb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                zEb(a)
            }
        },
        uEb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), NDb(), $9("Skipping connecting because no session screen found."))
        },
        rEb = function() {
            var a = tEb();
            if (g.md(a)) {
                a = j8();
                var b = g.EC("yt-remote-session-name") || "",
                    c = g.EC("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.mB("SESSION_INDEX", "0"));
                (b = g.mB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Va("yt.mdx.remote.channelParams_", a)
            }
        },
        tEb = function() {
            return g.Wa("yt.mdx.remote.channelParams_") || {}
        },
        GEb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Kc = c;
            this.events = new g.DK(this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                EEb(d, e)
            });
            this.D = !1;
            this.G = new g.rL(64);
            this.j = new g.Ru(this.r0, 500, this);
            this.B = new g.Ru(this.s0, 1E3, this);
            this.N = new p8(this.Dda, 0, this);
            this.C = {};
            this.Z = new g.Ru(this.m1, 1E3, this);
            this.K = new q8(this.seekTo, 1E3, this);
            g.N(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.x$);
            this.events.T(b, "captionschanged", this.T9);
            this.events.T(b, "captionssettingschanged", this.A0);
            this.events.T(b, "videoplayerreset", this.UJ);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Kc.sW()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                FEb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Kc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.MZ, this);
            a.subscribe("remotePlayerChange", this.TE, this);
            a.subscribe("remoteQueueChange", this.UJ, this);
            a.subscribe("previousNextChange", this.JZ, this);
            a.subscribe("nowAutoplaying", this.FZ, this);
            a.subscribe("autoplayDismissed", this.oZ, this);
            g.N(this, this.j);
            g.N(this, this.B);
            g.N(this, this.N);
            g.N(this, this.Z);
            g.N(this, this.K);
            this.A0();
            this.UJ();
            this.TE()
        },
        EEb = function(a, b) {
            if (j$(a)) {
                a.Kc.unsubscribe("remotePlayerChange", a.TE, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Kc);
                if (c !== d.volume || b !== d.muted) a.Kc.setVolume(c, b), a.Z.start();
                a.Kc.subscribe("remotePlayerChange", a.TE, a)
            }
        },
        HEb = function(a) {
            a.Rc(0);
            a.j.stop();
            a.Gc(new g.rL(64))
        },
        IEb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.rd(c, b));
                a.Kc.PT(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Kc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Kc.playVideo(c.videoId, b, d, e, c.playerParams, c.va, Nzb(c));
            a.Gc(new g.rL(1))
        },
        JEb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    ZX: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Kc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.V.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        ya: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        ya: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ya: "Cancel"
                        }, {
                            I: "button",
                            La: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ya: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.xG(this, 250);
            this.cancelButton = this.Ga("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ga("ytp-mdx-privacy-popup-confirm");
            g.N(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.V.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.zwa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        ya: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.xG(this, 250);
            g.N(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Hc(a.Xb())
        },
        n$ = function(a, b) {
            g.KX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Ut = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        KEb = function(a) {
            g.NV.call(this, a);
            this.Kp = {
                key: pAb(),
                name: "This computer"
            };
            this.Sl = null;
            this.subscriptions = [];
            this.dR = this.Kc = null;
            this.Ut = [this.Kp];
            this.Fs = this.Kp;
            this.Me = new g.rL(64);
            this.wY = 0;
            this.Wh = -1;
            this.lF = !1;
            this.jF = this.aB = null;
            if (!g.WR(this.player.U()) && !g.VG(this.player.U())) {
                a = this.player;
                var b = g.ZT(a);
                b && (b = b.zp()) && (b = new n$(a, b), g.N(this, b));
                b = new m$(a);
                g.N(this, b);
                g.kU(a, b.element, 4);
                this.aB = new l$;
                g.N(this, this.aB);
                g.kU(a, this.aB.element, 4);
                this.lF = !!c$()
            }
        },
        o$ = function(a) {
            a.jF && (a.player.removeEventListener("presentingplayerstatechange",
                a.jF), a.jF = null)
        },
        LEb = function(a, b, c) {
            a.Me = c;
            a.player.ra("presentingplayerstatechange", new g.DG(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Fs.key)
                if (b.key === a.Kp.key) g$();
                else if (FEb(a) && MEb(a), a.Fs = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.VG(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.KV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.va,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Nzb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.Om(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && AEb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Rk(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        FEb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.lF || !a.aB ? !1 : g.gS(b) || g.iS(b)
        },
        MEb = function(a) {
            a.player.Xb().isPlaying() ? a.player.pauseVideo() : (a.jF = function(b) {
                !a.lF && g.GG(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.jF));
            a.aB && a.aB.xd();
            e$() || (i$ = !0)
        };
    g.Ky.prototype.Ss = g.fa(0, function() {
        return g.sk(this, 6)
    });
    var VBb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        jAb = {
            epa: "atp",
            A6a: "ska",
            O2a: "que",
            YUa: "mus",
            z6a: "sus",
            eGa: "dsp",
            C4a: "seq",
            zTa: "mic",
            Nwa: "dpa",
            Dqa: "cds",
            NUa: "mlm",
            Bwa: "dsdtr",
            yVa: "ntb",
            kib: "vsp",
            Cxa: "scn",
            c3a: "rpe",
            ywa: "dcn",
            zwa: "dcp",
            q_a: "pas",
            Awa: "drq",
            YYa: "opf",
            Bxa: "els",
            T4a: "svq"
        },
        kAb = {
            g5: "u",
            CLASSIC: "cl",
            P4: "k",
            w2: "i",
            Y1: "cr",
            V4: "m",
            s2: "g",
            cV: "up"
        },
        vAb = "",
        l8 = null;
    DAb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.KB("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.efa(c.value), c = {
                serializedIncrementBatch: g.Dg(c.j())
            }, g.XC("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, LAb = FAb("loadCastFramework") || FAb("loadCastApplicationFramework"),
        OAb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ob(p8, g.I);
    g.k = p8.prototype;
    g.k.g3 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.qd ? this.C = g.kb() + this.gj : this.qd = g.yg(this.G, this.gj)
    };
    g.k.stop = function() {
        this.qd && (g.Ta.clearTimeout(this.qd), this.qd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        p8.Uf.xa.call(this)
    };
    g.k.j3 = function() {
        this.qd && (g.Ta.clearTimeout(this.qd), this.qd = null);
        this.C ? (this.qd = g.yg(this.G, this.C - g.kb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.w(q8, g.I);
    g.k = q8.prototype;
    g.k.NL = function(a) {
        this.C = arguments;
        this.qd || this.B ? this.j = !0 : QAb(this)
    };
    g.k.stop = function() {
        this.qd && (g.Ta.clearTimeout(this.qd), this.qd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.qd || (this.j = !1, QAb(this))
    };
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Ta.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Ta.JSON.parse(a, void 0)
    };
    g.ob(RAb, g.Ab);
    g.ob(SAb, g.Ab);
    var TAb = null;
    g.ob(VAb, g.Ab);
    g.ob(WAb, g.Ab);
    g.ob(XAb, g.Ab);
    v8.prototype.debug = function() {};
    v8.prototype.info = function() {};
    v8.prototype.warning = function() {};
    var eBb = {},
        dBb = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.ub = a
    };
    g.k.n3 = function(a) {
        a = a.target;
        var b = this.Xa;
        b && 3 == g.Mn(a) ? b.NL() : this.sT(a)
    };
    g.k.sT = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Mn(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.jS || this.j && (this.B.B || g.On(this.j) || g.Pn(this.j)))) {
                    this.Ma || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.Db = e;
                    b: if (bBb(this)) {
                        var f = g.Pn(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Mn(this.j);
                        if (!this.B.C) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Ta.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.K = 0;
                        m = this.B.j
                    } else m = g.On(this.j);
                    if (this.C = 200 == e) {
                        if (this.Pb && !this.Wa) {
                            b: {
                                if (this.j) {
                                    var n = g.Qn(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.fc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Wa = !0,
                            fBb(this, e);
                            else {
                                this.C = !1;
                                this.N = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Ea ? (gBb(this, b, m), g.jS && this.C && 3 == b && (this.Za.Ta(this.ib, "tick", this.m3), this.ib.start())) : fBb(this, m);
                        4 == b && y8(this);
                        this.C && !this.Ma && (4 == b ? iBb(this.G, this) : (this.C = !1, x8(this)))
                    } else g.Ufa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.m3 = function() {
        if (this.j) {
            var a = g.Mn(this.j),
                b = g.On(this.j);
            this.K < b.length && (A8(this), gBb(this, a, b), this.C && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.Ma = !0;
        y8(this)
    };
    g.k.l3 = function() {
        this.ma = null;
        var a = Date.now();
        0 <= a - this.Mb ? (2 != this.Ra && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : hBb(this, this.Mb - a)
    };
    g.k.getLastError = function() {
        return this.N
    };
    g.k.DO = function() {
        return this.j
    };
    rBb.prototype.cancel = function() {
        this.C = tBb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = yBb.prototype;
    g.k.tT = 8;
    g.k.Kh = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.jc = a;
        this.Ma = b || {};
        c && void 0 !== d && (this.Ma.OSID = c, this.Ma.OAID = d);
        this.Wa = this.Lc;
        this.Na = nBb(this, null, this.jc);
        E8(this)
    };
    g.k.disconnect = function() {
        ABb(this);
        if (3 == this.Kh) {
            var a = this.eb++,
                b = this.Na.clone();
            g.No(b, "SID", this.D);
            g.No(b, "RID", a);
            g.No(b, "TYPE", "terminate");
            H8(this, b);
            a = new w8(this, this.D, a);
            a.Ra = 2;
            a.Z = a8(b.clone());
            b = !1;
            if (g.Ta.navigator && g.Ta.navigator.sendBeacon) try {
                b = g.Ta.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Ta.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = aBb(a.G, null), a.j.send(a.Z));
            a.Ca = Date.now();
            x8(a)
        }
        GBb(this)
    };
    g.k.Ug = function() {
        return 0 == this.Kh
    };
    g.k.getState = function() {
        return this.Kh
    };
    g.k.vT = function(a) {
        if (this.K)
            if (this.K = null, 1 == this.Kh) {
                if (!a) {
                    this.eb = Math.floor(1E5 * Math.random());
                    a = this.eb++;
                    var b = new w8(this, "", a),
                        c = this.Y;
                    this.Mb && (c ? (c = g.pd(c), g.rd(c, this.Mb)) : c = this.Mb);
                    null !== this.N || this.tb || (b.Na = c, c = null);
                    var d;
                    if (this.ub) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = DBb(this, b, d);
                    e = this.Na.clone();
                    g.No(e, "RID", a);
                    g.No(e, "CVER", 22);
                    this.Ea && g.No(e, "X-HTTP-Session-Id", this.Ea);
                    H8(this, e);
                    c && (this.tb ? d = "headers=" + g.Ye(g.Gga(c)) + "&" + d : this.N && g.Ep(e, this.N, c));
                    mBb(this.B, b);
                    this.ag && g.No(e, "TYPE", "init");
                    this.ub ? (g.No(e, "$req", d), g.No(e, "SID", "null"), b.Pb = !0, $Ab(b, e, null)) : $Ab(b, e, d);
                    this.Kh = 2
                }
            } else 3 == this.Kh && (a ? EBb(this, a) : 0 == this.C.length || sBb(this.B) || EBb(this))
    };
    g.k.uT = function() {
        this.Z = null;
        FBb(this);
        if (this.Jc && !(this.ib || null == this.j || 0 >= this.Ld)) {
            var a = 2 * this.Ld;
            this.Ia = u8((0, g.ib)(this.S9, this), a)
        }
    };
    g.k.S9 = function() {
        this.Ia && (this.Ia = null, this.Wa = !1, this.ib = !0, t8(10), C8(this), FBb(this))
    };
    g.k.qQ = function(a) {
        this.j == a && this.Jc && !this.ib && (zBb(this), this.ib = !0, t8(11))
    };
    g.k.o3 = function() {
        null != this.ma && (this.ma = null, C8(this), kBb(this), t8(19))
    };
    g.k.gda = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = IBb.prototype;
    g.k.zT = function() {};
    g.k.yT = function() {};
    g.k.xT = function() {};
    g.k.wT = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.q3 = function() {};
    g.ob(J8, g.Ld);
    J8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Ra = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Om(a), a = c);
        b.C.push(new qBb(b.Yf++, a));
        3 == b.Kh && E8(b)
    };
    J8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        J8.Uf.xa.call(this)
    };
    g.ob(KBb, RAb);
    g.ob(LBb, SAb);
    g.ob(I8, IBb);
    I8.prototype.zT = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.yT = function(a) {
        this.j.dispatchEvent(new KBb(a))
    };
    I8.prototype.xT = function(a) {
        this.j.dispatchEvent(new LBb(a))
    };
    I8.prototype.wT = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Ld;
    g.w(OBb, g.Ab);
    g.k = N8.prototype;
    g.k.Hu = null;
    g.k.lq = !1;
    g.k.Ux = null;
    g.k.PL = null;
    g.k.Sx = null;
    g.k.Tx = null;
    g.k.Vr = null;
    g.k.Xr = null;
    g.k.Iu = null;
    g.k.qj = null;
    g.k.KG = 0;
    g.k.Eo = null;
    g.k.JG = null;
    g.k.Wr = null;
    g.k.eC = -1;
    g.k.U_ = !0;
    g.k.Gu = !1;
    g.k.OL = 0;
    g.k.IG = null;
    var TBb = {},
        SBb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.s3 = function(a) {
        a = a.target;
        var b = this.IG;
        b && 3 == g.Mn(a) ? b.NL() : this.AT(a)
    };
    g.k.AT = function(a) {
        try {
            if (a == this.qj) a: {
                var b = g.Mn(this.qj),
                    c = this.qj.B,
                    d = this.qj.getStatus();
                if (g.Cf && !g.Uc(10) || g.Vc && !g.Tc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.On(this.qj)) break a;this.Gu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Vn(3) : this.j.Vn(2));YBb(this);
                var e = this.qj.getStatus();this.eC = e;
                var f = g.On(this.qj);
                if (this.lq = 200 == e) {
                    4 == b && P8(this);
                    if (this.Ea) {
                        for (a = !0; !this.Gu && this.KG < f.length;) {
                            var h = UBb(this, f);
                            if (h == SBb) {
                                4 == b && (this.Wr = 4, M8(15), a = !1);
                                break
                            } else if (h == TBb) {
                                this.Wr = 4;
                                M8(16);
                                a = !1;
                                break
                            } else ZBb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Wr = 1, M8(17), a = !1);
                        this.lq = this.lq && a;
                        a || (P8(this), Q8(this))
                    } else ZBb(this, f);
                    this.lq && !this.Gu && (4 == b ? this.j.LG(this) : (this.lq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Wr = 3, M8(13)) : (this.Wr = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.fba = function(a) {
        K8((0, g.ib)(this.eba, this, a), 0)
    };
    g.k.eba = function(a) {
        this.Gu || (YBb(this), ZBb(this, a), O8(this))
    };
    g.k.RZ = function(a) {
        K8((0, g.ib)(this.dba, this, a), 0)
    };
    g.k.dba = function(a) {
        this.Gu || (P8(this), this.lq = a, this.j.LG(this), this.j.Vn(4))
    };
    g.k.cancel = function() {
        this.Gu = !0;
        P8(this)
    };
    g.k.r3 = function() {
        this.Ux = null;
        var a = Date.now();
        0 <= a - this.PL ? (2 != this.Tx && this.j.Vn(3), P8(this), this.Wr = 2, M8(18), Q8(this)) : XBb(this, this.PL - a)
    };
    g.k.getLastError = function() {
        return this.Wr
    };
    g.k = bCb.prototype;
    g.k.RL = null;
    g.k.Qj = null;
    g.k.rK = !1;
    g.k.t0 = null;
    g.k.UH = null;
    g.k.BP = null;
    g.k.SL = null;
    g.k.Ql = null;
    g.k.mq = -1;
    g.k.fC = null;
    g.k.RC = null;
    g.k.connect = function(a) {
        this.SL = a;
        a = T8(this.j, null, this.SL);
        M8(3);
        this.t0 = Date.now();
        var b = this.j.Y;
        null != b ? (this.fC = b[0], (this.RC = b[1]) ? (this.Ql = 1, cCb(this)) : (this.Ql = 2, dCb(this))) : (b8(a, "MODE", "init"), this.Qj = new N8(this), this.Qj.Hu = this.RL, RBb(this.Qj, a, !1, null, !0), this.Ql = 0)
    };
    g.k.T5 = function(a) {
        if (a) this.Ql = 2, dCb(this);
        else {
            M8(4);
            var b = this.j;
            b.No = b.Cs.mq;
            X8(b, 9)
        }
        a && this.Vn(2)
    };
    g.k.QL = function(a) {
        return this.j.QL(a)
    };
    g.k.abort = function() {
        this.Qj && (this.Qj.cancel(), this.Qj = null);
        this.mq = -1
    };
    g.k.Ug = function() {
        return !1
    };
    g.k.BT = function(a, b) {
        this.mq = a.eC;
        if (0 == this.Ql)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.No = this.mq;
                    X8(a, 2);
                    return
                }
                this.fC = c[0];
                this.RC = c[1]
            } else a = this.j, a.No = this.mq, X8(a, 2);
        else if (2 == this.Ql)
            if (this.rK) M8(7), this.BP = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.rK = !0, this.UH = Date.now(), a = this.UH - this.t0, !g.Cf || g.Uc(10) || 500 > a) this.mq = 200, this.Qj.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.UH = this.BP = Date.now(), this.rK = !1
    };
    g.k.LG = function() {
        this.mq = this.Qj.eC;
        if (this.Qj.lq) 0 == this.Ql ? this.RC ? (this.Ql = 1, cCb(this)) : (this.Ql = 2, dCb(this)) : 2 == this.Ql && ((!g.Cf || g.Uc(10) ? !this.rK : 200 > this.BP - this.UH) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Ql ? M8(9) : 2 == this.Ql && M8(10);
            var a = this.j;
            this.Qj.getLastError();
            a.No = this.mq;
            X8(a, 2)
        }
    };
    g.k.gC = function() {
        return this.j.gC()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Vn = function(a) {
        this.j.Vn(a)
    };
    g.k = eCb.prototype;
    g.k.Mo = null;
    g.k.hC = null;
    g.k.ek = null;
    g.k.Qg = null;
    g.k.TL = null;
    g.k.MG = null;
    g.k.CT = null;
    g.k.NG = null;
    g.k.iC = 0;
    g.k.u3 = 0;
    g.k.Ti = null;
    g.k.Yr = null;
    g.k.qq = null;
    g.k.Ku = null;
    g.k.Cs = null;
    g.k.lL = null;
    g.k.Xx = -1;
    g.k.DT = -1;
    g.k.No = -1;
    g.k.Wx = 0;
    g.k.Vx = 0;
    g.k.Ju = 8;
    g.ob(gCb, g.Ab);
    g.ob(hCb, g.Ab);
    g.k = eCb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.TL = b;
        this.hC = c || {};
        d && void 0 !== e && (this.hC.OSID = d, this.hC.OAID = e);
        this.Z ? (K8((0, g.ib)(this.dW, this, a), 100), jCb(this)) : this.dW(a)
    };
    g.k.disconnect = function() {
        kCb(this);
        if (3 == this.j) {
            var a = this.iC++,
                b = this.MG.clone();
            g.No(b, "SID", this.D);
            g.No(b, "RID", a);
            g.No(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.D, a);
            a.Tx = 2;
            a.Vr = a8(b.clone());
            (new Image).src = a.Vr.toString();
            a.Sx = Date.now();
            O8(a)
        }
        uCb(this)
    };
    g.k.dW = function(a) {
        this.Cs = new bCb(this);
        this.Cs.RL = this.Mo;
        this.Cs.B = this.G;
        this.Cs.connect(a)
    };
    g.k.Ug = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.FT = function(a) {
        this.Yr = null;
        pCb(this, a)
    };
    g.k.ET = function() {
        this.qq = null;
        this.Qg = new N8(this, this.D, "rpc", this.N);
        this.Qg.Hu = this.Mo;
        this.Qg.OL = 0;
        var a = this.CT.clone();
        g.No(a, "RID", "rpc");
        g.No(a, "SID", this.D);
        g.No(a, "CI", this.lL ? "0" : "1");
        g.No(a, "AID", this.Xx);
        W8(this, a);
        if (!g.Cf || g.Uc(10)) g.No(a, "TYPE", "xmlhttp"), RBb(this.Qg, a, !0, this.NG, !1);
        else {
            g.No(a, "TYPE", "html");
            var b = this.Qg,
                c = !!this.NG;
            b.Tx = 3;
            b.Vr = a8(a.clone());
            WBb(b, c)
        }
    };
    g.k.BT = function(a, b) {
        if (0 != this.j && (this.Qg == a || this.ek == a))
            if (this.No = a.eC, this.ek == a && 3 == this.j)
                if (7 < this.Ju) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.qq) {
                                if (this.Qg)
                                    if (this.Qg.Sx + 3E3 < this.ek.Sx) V8(this), this.Qg.cancel(), this.Qg = null;
                                    else break a;
                                sCb(this);
                                M8(19)
                            }
                        }
                    else this.DT = a[1], 0 < this.DT - this.Xx && 37500 > a[2] && this.lL && 0 == this.Vx && !this.Ku && (this.Ku = K8((0, g.ib)(this.v3, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Qg ==
            a && V8(this), !g.fc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Xx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.NG = c[2], c = c[3], null != c ? this.Ju = c : this.Ju = 6, this.j = 3, this.Ti && this.Ti.IT(), this.CT = T8(this, this.gC() ? this.NG : null, this.TL), qCb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Ti && this.Ti.HT(c), this.Vx = 0)
    };
    g.k.v3 = function() {
        null != this.Ku && (this.Ku = null, this.Qg.cancel(), this.Qg = null, sCb(this), M8(20))
    };
    g.k.LG = function(a) {
        if (this.Qg == a) {
            V8(this);
            this.Qg = null;
            var b = 2
        } else if (this.ek == a) this.ek = null, b = 1;
        else return;
        this.No = a.eC;
        if (0 != this.j)
            if (a.lq)
                if (1 == b) {
                    b = a.Iu ? a.Iu.length : 0;
                    a = Date.now() - a.Sx;
                    var c = L8;
                    c.dispatchEvent(new gCb(c, b, a, this.Wx));
                    iCb(this);
                    this.C.length = 0
                } else qCb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.No)) {
                if (d = 1 == b) this.ek || this.Yr || 1 == this.j || 2 <= this.Wx ? d = !1 : (this.Yr = K8((0, g.ib)(this.FT, this, a), rCb(this, this.Wx)), this.Wx++, d = !0);
                d = !(d || 2 == b && sCb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.t3 = function(a) {
        if (!g.Fb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.fda = function(a) {
        a ? M8(2) : (M8(1), tCb(this, 8))
    };
    g.k.QL = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Jn;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Ti && this.Ti.isActive(this)
    };
    g.k.Vn = function(a) {
        var b = L8;
        b.dispatchEvent(new hCb(b, a))
    };
    g.k.gC = function() {
        return !(!g.Cf || g.Uc(10))
    };
    g.k = vCb.prototype;
    g.k.IT = function() {};
    g.k.HT = function() {};
    g.k.GT = function() {};
    g.k.UL = function() {};
    g.k.JT = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = wCb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Fb(this.j, a) || g.Fb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Ugb)(b, a);
        0 <= c ? (g.Gb(b, c), b = !0) : b = !1;
        return b || g.Ib(this.B, a)
    };
    g.k.jm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.w(xCb, g.Ab);
    g.w(yCb, g.Ab);
    g.ob(Y8, g.I);
    g.k = Y8.prototype;
    g.k.Xaa = function() {
        this.gj = Math.min(3E5, 2 * this.gj);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.gj + 15E3 * Math.random();
        g.Su(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.gj = 5E3
    };
    g.ob(ACb, vCb);
    g.k = ACb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.C.Jh(a)
    };
    g.k.ra = function(a, b) {
        return this.C.ra.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.va = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ca + "/test";
            b = this.Ca + "/bind";
            var d = new eCb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ra),
                e = this.j;
            e && (e.Ti = null);
            d.Ti = this;
            this.j = d;
            BCb(this);
            if (this.j) {
                d = g.mB("ID_TOKEN");
                var f = this.j.Mo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Mo = f
            }
            e ? (3 != e.getState() && 0 == mCb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Xx)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        BCb(this);
        this.j && (3 == this.j.getState() && pCb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.rd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Vz() && (BCb(this), lCb(this.j, a))
    };
    g.k.IT = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) lCb(this.j, a[b])
        }
        this.ra("handlerOpened");
        Xzb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.GT = function(a) {
        var b = 2 == a && 401 == this.j.No;
        4 == a || b || this.B.start();
        this.ra("handlerError", a, b);
        cAb(this.Ea, "BROWSER_CHANNEL")
    };
    g.k.UL = function(a, b) {
        if (!this.B.isActive()) this.ra("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        Zzb(this.Ia, "BROWSER_CHANNEL");
        a && this.Xa.j.WL("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.eb.j.WL("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.JT = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.Z && (a.ui = "" + this.Z);
        this.K && g.rd(a, this.K);
        return a
    };
    g.k.HT = function(a) {
        "S" == a[0] ? this.Y = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.ra("handlerMessage", new zCb(a[0], a[1]));
        aAb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.Vz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Fr = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Wa && this.j) {
            var b = this.j.Mo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Mo = b
        }
    };
    g.k.Ss = function() {
        return this.N.id
    };
    g.k.Xs = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.ex = function() {
        var a = this.B;
        g.Tu(a.j);
        a.start()
    };
    g.k.sca = function() {
        this.B.isActive();
        0 == mCb(this.j) && this.connect(this.K, this.G)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.w(DCb, g.Ld);
    g.k = DCb.prototype;
    g.k.connect = function(a, b, c) {
        this.Id.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Id.disconnect(a)
    };
    g.k.ex = function() {
        this.Id.ex()
    };
    g.k.Ss = function() {
        return this.Id.Ss()
    };
    g.k.Xs = function() {
        return this.Id.Xs()
    };
    g.k.Vz = function() {
        return this.Id.Vz()
    };
    g.k.y3 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Id,
            b = this.j;
        g.DC("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.lL,
            sessionId: a.j.D,
            arrayId: a.j.Xx
        });
        g.DC("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Fb(a, b) || a.push(b);
        uAb(a);
        wAb()
    };
    g.k.w3 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.x3 = function(a) {
        this.dispatchEvent(new xCb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new yCb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Id.sendMessage(a, b)
    };
    g.k.Fr = function(a) {
        this.Id.Fr(a)
    };
    g.k.dispose = function() {
        this.Id.dispose()
    };
    g.k = ECb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, GCb(this), (a = g.mB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.i9 && (this.B.mdxVersion = "" + this.j.i9), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.i6 && (this.B.cst = this.j.i6),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
            s8: "gsessionid",
            m9: this.D,
            n9: this.B
        }), this.channel.open(), this.K = 2, FCb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = void 0 === a ? 0 : a;
        this.C.stop();
        GCb(this);
        this.channel && (0 !== this.Y ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.Xs = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.ex = function() {
        var a = this.C;
        g.Tu(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (GCb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Fr = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.Ss = function() {
        return this.j ? this.j.id : ""
    };
    g.k.ra = function(a) {
        return this.G.ra.apply(this.G, [a].concat(g.pa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.G.Jh(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ca = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.w(HCb, g.Ld);
    g.k = HCb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.ex = function() {
        this.j.ex()
    };
    g.k.Ss = function() {
        return this.j.Ss()
    };
    g.k.Xs = function() {
        return this.j.Xs()
    };
    g.k.Vz = function() {
        return 3 === this.j.K
    };
    g.k.B3 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.z3 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.A3 = function(a) {
        this.dispatchEvent(new xCb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new yCb(401 === this.j.Ig ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Fr = function(a) {
        this.j.Fr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var PCb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.ob(g9, g.IF);
    g9.prototype.Rk = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!rAb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.w(TCb, g.IF);
    g.k = TCb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.qd) && this.l_()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.qd) || (g.IB(this.qd), this.qd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.IF.prototype.xa.call(this)
    };
    g.k.l_ = function() {
        this.qd = NaN;
        this.j = g.MB($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.ib)(this.D3, this),
            onError: (0, g.ib)(this.C3, this),
            onTimeout: (0, g.ib)(this.E3, this)
        })
    };
    g.k.D3 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ra("pairingComplete", new e8(a), b)
    };
    g.k.C3 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= NEb.length ? this.ra("pairingFailed", Error("DIAL polling timed out")) : (a = NEb[this.B], this.qd = g.GB((0, g.ib)(this.l_, this), a), this.B++) : this.ra("pairingFailed", Error("Server error " + a.status))
    };
    g.k.E3 = function() {
        this.j = null;
        this.ra("pairingFailed", Error("Server not responding"))
    };
    var NEb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ob(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.ra("screenChange");
        !g.EC("yt-remote-lounge-token-expiration") && UCb(this);
        g.IB(this.j);
        this.j = g.GB((0, g.ib)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        QCb(this, a);
        j9(this, !1);
        this.ra("screenChange");
        b(a);
        a.token || UCb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        SCb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.ra("screenChange")
    };
    g.k.kL = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ra("screenChange")
    };
    g.k.xa = function() {
        g.IB(this.j);
        i9.Uf.xa.call(this)
    };
    g.k.P7 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.O7 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.w(WCb, g.IF);
    g.k = WCb.prototype;
    g.k.start = function() {
        var a = parseInt(g.EC("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.kb() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.kb() + 3E5, g.DC("yt-remote-fast-check-period", this.D), this.wR())
    };
    g.k.isEmpty = function() {
        return g.md(this.j)
    };
    g.k.update = function() {
        VCb("Updating availability on schedule.");
        var a = this.K(),
            b = g.cd(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        ZCb(this, b)
    };
    g.k.xa = function() {
        g.IB(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.IF.prototype.xa.call(this)
    };
    g.k.wR = function() {
        g.IB(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = $Cb(this);
        if (Pzb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = CCb(this.G, b, {
                lounge_token: g.id(a).join(",")
            }, (0, g.ib)(this.Daa, this, a), (0, g.ib)(this.Caa, this))
        } else ZCb(this, {}), k9(this)
    };
    g.k.Daa = function(a, b) {
        this.B = null;
        var c = g.id($Cb(this));
        if (g.Zb(c, g.id(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            ZCb(this, c);
            k9(this)
        } else this.qg("Changing Screen set during request."), this.wR()
    };
    g.k.Caa = function(a) {
        this.qg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.qg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.ob(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.ra("screenChange"), this.j.isEmpty() || this.ra("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.kL = function(a, b, c, d) {
        this.B.contains(a) ? this.B.kL(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.Rk = function(a) {
        return a ? this.screens : g.Kb(this.screens, g.pt(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.KT = function() {
        return g.pt(this.Rk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.LT = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new TCb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.vb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.vb(l);
            f(m)
        });
        l.start();
        return (0, g.ib)(l.stop, l)
    };
    g.k.F3 = function(a, b, c, d) {
        g.MB($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.ib)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || dDb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); dDb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.ib)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.ib)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.vb(this.B);
        g.vb(this.j);
        l9.Uf.xa.call(this)
    };
    g.k.Z7 = function() {
        fDb(this);
        this.ra("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.ob(n9, g.IF);
    g.k = n9.prototype;
    g.k.Gj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.ra("sessionFailed")), this.j = null, this.ra("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ea, a)
    };
    g.k.NT = function() {
        return null
    };
    g.k.PR = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.ib)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.ib)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.PR("");
        n9.Uf.xa.call(this)
    };
    g.w(q9, n9);
    g.k = q9.prototype;
    g.k.NR = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            rDb(this);
            this.Ca = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.va);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia)
        }
        this.C = a;
        this.C.addUpdateListener(this.va);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia);
        mDb(this, "getMdxSessionStatus")
    };
    g.k.hA = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Om(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.ib)(function() {
            this.Gj()
        }, this), (0, g.ib)(function() {
            this.Gj(Error("Failed to stop receiver app."))
        }, this)) : this.Gj(Error("Stopping cast device without session."))
    };
    g.k.PR = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        rDb(this);
        this.C && (this.C.removeUpdateListener(this.va), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia));
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.pba = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b), g.bb(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Om(b)), a) {
                    case "mdxSessionStatus":
                        jDb(this, b);
                        break;
                    case "loungeToken":
                        nDb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.oX = function(a, b, c, d) {
        g.IB(this.Z);
        this.Z = 0;
        cDb(this.D, this.B.label, a, this.B.friendlyName, (0, g.ib)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.GB((0, g.ib)(this.oX, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.NT = function() {
        return this.C
    };
    g.k.G3 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.Gj())
    };
    g.w(r9, n9);
    g.k = r9.prototype;
    g.k.NR = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ma)
    };
    g.k.hA = function(a) {
        this.Na = a;
        this.ma()
    };
    g.k.stop = function() {
        zDb(this);
        this.C ? this.C.stop((0, g.ib)(this.Gj, this, null), (0, g.ib)(this.Gj, this, "Failed to stop DIAL device.")) : this.Gj()
    };
    g.k.xa = function() {
        zDb(this);
        this.C && this.C.removeUpdateListener(this.Ma);
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.H3 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Gj())
    };
    g.w(u9, n9);
    u9.prototype.stop = function() {
        this.Gj()
    };
    u9.prototype.NR = function() {};
    u9.prototype.hA = function() {
        g.IB(this.C);
        this.C = NaN;
        var a = h8(this.D.Rk(), this.B.label);
        a ? o9(this, a) : this.Gj(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.IB(this.C);
        this.C = NaN;
        n9.prototype.xa.call(this)
    };
    g.w(v9, g.IF);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.ib)(this.maa, this);
        c = new chrome.cast.ApiConfig(c, (0, g.ib)(this.NZ, this), e, d, a);
        c.customDialLaunchCallback = (0, g.ib)(this.g$, this);
        chrome.cast.initialize(c, (0, g.ib)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), MCb(), this.B.subscribe("onlineScreenChange", (0, g.ib)(this.OT, this)), this.C = CDb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function(f) {
                this.qg("Failed to set initial custom receivers: " + g.Om(f))
            }, this)), this.ra("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.ib)(function(f) {
            this.qg("Failed to initialize API: " + g.Om(f));
            b(!1)
        }, this))
    };
    g.k.Bca = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = h8(this.B.Rk(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == a.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = ADb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function(d) {
                    this.qg("Failed to set initial custom receivers: " + g.Om(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.PR(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.Eca = function(a) {
        this.isDisposed() ? this.qg("Setting connection data on disposed cast v2") : this.j ? this.j.hA(a) : this.qg("Setting connection data without a session")
    };
    g.k.J3 = function() {
        this.isDisposed() ? this.qg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.ib)(this.NZ, this), (0, g.ib)(this.Gaa, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.ib)(this.OT, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = JCb,
            b = g.Wa("yt.mdx.remote.debug.handlers_");
        g.Ib(b || [], a);
        g.vb(this.j);
        g.IF.prototype.xa.call(this)
    };
    g.k.qg = function(a) {
        b9("Controller", a)
    };
    g.k.PZ = function(a, b) {
        this.j == a && (b || y9(this, null), this.ra("yt-remote-cast2-session-change", b))
    };
    g.k.haa = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.qg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.qg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.qg("onReceiverAction_ called without receiver.")
    };
    g.k.g$ = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.qg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.qg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.ra("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.qg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = wDb(b, {
                name: b.B.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.Z.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.pB(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = xDb(b, c)) : a = xDb(b, c)) : a = uDb(b);
        return a
    };
    g.k.NZ = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.qg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = h8(this.B.Rk(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.ib)(this.PZ, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return BDb(b, b.j)
                }), this.j.hA(null));
                this.j.NR(a)
            }
        }
    };
    g.k.I3 = function() {
        return this.j ? this.j.NT() : null
    };
    g.k.Gaa = function(a) {
        this.isDisposed() || (this.qg("Failed to estabilish a session: " + g.Om(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.ra("yt-remote-cast2-session-failed"))
    };
    g.k.maa = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.ra("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.OT = function() {
        this.isDisposed() || (this.C = CDb(this), w9("Updating custom receivers: " + g.Om(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function() {
            this.qg("Failed to set custom receivers.")
        }, this)), this.ra("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.Eca;
    v9.prototype.setConnectedScreenStatus = v9.prototype.Bca;
    v9.prototype.stopSession = v9.prototype.J3;
    v9.prototype.getCastSession = v9.prototype.I3;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var LDb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        RDb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Cp = a.hasPrevious, this.Uk = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.wl = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(SDb(this))
    };
    g.w(L9, g.IF);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Xs = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.ex = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Sd, R9(this, "play")) : Q9(this, "play"), VDb(this, 1, I9(M9(this))), this.ra("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Sd, R9(this, "pause")) : Q9(this, "pause"), VDb(this, 2, I9(M9(this))), this.ra("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Sd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            VDb(this, 3, a);
            this.ra("remotePlayerChange")
        } else O9(this, g.jb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Sd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            RDb(a);
            P9(this, a);
            this.ra("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.ib)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.ib)(function() {
                        this.qg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.ib)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.ib)(function() {
                    this.qg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.jb(this.setVolume, a, b))
    };
    g.k.PT = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Om(b.style), g.rd(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.jb(this.PT, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.jb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Om(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.lK = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.jb(this.lK, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.jb(this.nextVideo, a, b))
    };
    g.k.qH = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.ra("remotePlayerChange")
        } else O9(this, this.qH)
    };
    g.k.sW = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.sW)
    };
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.ra("proxyStateChange", a, this.C)
        }
        g.IF.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        UDb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.IF.prototype.xa.call(this)
    };
    g.k.TR = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.ra("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.eaa = function(a, b) {
        this.ra(a, b)
    };
    g.k.W9 = function(a) {
        if (!a) this.NE(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.NE = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), WDb(this), this.ra("remotePlayerChange")
    };
    g.k.V9 = function(a) {
        a ? (WDb(this), this.ra("remotePlayerChange")) : this.NE(null)
    };
    g.k.tS = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.Z9 = function() {
        var a = ODb();
        a && K9(this, a)
    };
    g.k.qg = function(a) {
        b9("CP", a)
    };
    g.w(U9, g.IF);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ma ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.Om(m));
            this.B.connect({
                method: c,
                params: g.Om(m)
            }, a, xAb())
        } else S9("Connecting without params"), this.B.connect({}, a, xAb());
        $Db(this)
    };
    g.k.Fr = function(a) {
        this.B.Fr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Va("yt.mdx.remote.remoteClient_", null), this.ra("beforeDispose"), T9(this, 3));
        g.IF.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        aEb(this);
        cEb(this);
        bEb(this);
        g.IB(this.Z);
        this.Z = NaN;
        g.IB(this.Y);
        this.Y = NaN;
        this.D = null;
        g.vC(this.ma);
        this.ma.length = 0;
        this.B.dispose();
        g.IF.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.mY = function(a) {
        if (!this.C || 0 === this.C.length) return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.v7 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.ND()) ? this.B.Vz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.qz = function(a) {
        S9("Disconnecting with " + a);
        g.Va("yt.mdx.remote.remoteClient_", null);
        aEb(this);
        this.ra("beforeDisconnect", a);
        1 == a && k8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.q7 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return SDb(a)
    };
    g.k.Gca = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.IB(this.Z), this.Z = g.GB(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Om(this.j.trackData) == g.Om(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.bc(d, function(e) {
            this.ra(e)
        }, this)
    };
    g.k.jX = function() {
        var a = this.B.Ss(),
            b = g.Db(this.C, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.ND = function() {
        return this.B.Xs()
    };
    g.k.a7 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.b7 = function() {
        return this.N || ""
    };
    g.k.K3 = function() {
        !isNaN(this.ND()) && this.B.ex()
    };
    g.k.zca = function(a, b) {
        V9(this, a, b);
        eEb(this)
    };
    g.k.QT = function() {
        var a = g.WB("SAPISID", "") || g.WB("__Secure-1PAPISID") || "",
            b = g.WB("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.Dg(g.Cg(a), 2);
        b = g.Dg(g.Cg(b), 2);
        return g.Dg(g.Cg("," + a + "," + b), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Jh;
    U9.prototype.getProxyState = U9.prototype.v7;
    U9.prototype.disconnect = U9.prototype.qz;
    U9.prototype.getPlayerContextData = U9.prototype.q7;
    U9.prototype.setPlayerContextData = U9.prototype.Gca;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.jX;
    U9.prototype.getReconnectTimeout = U9.prototype.ND;
    U9.prototype.getAutoplayMode = U9.prototype.a7;
    U9.prototype.getAutoplayVideoId = U9.prototype.b7;
    U9.prototype.reconnect = U9.prototype.K3;
    U9.prototype.sendMessage = U9.prototype.zca;
    U9.prototype.getXsrfToken = U9.prototype.QT;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.mY;
    g.w(qEb, g9);
    g.k = qEb.prototype;
    g.k.Rk = function(a) {
        return this.jh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.jh.$_c(a)
    };
    g.k.get = function(a) {
        return this.jh.$_g(a)
    };
    g.k.start = function() {
        this.jh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.jh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.jh.$_r(a, b, c)
    };
    g.k.kL = function(a, b, c, d) {
        this.jh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.jh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.jh = null;
        g9.prototype.xa.call(this)
    };
    g.k.L3 = function() {
        this.ra("screenChange")
    };
    g.k.M$ = function() {
        this.ra("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.F3;
    l9.prototype.$_gsppc = l9.prototype.LT;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.kL;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Rk;
    l9.prototype.$_gos = l9.prototype.KT;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Jh;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        BEb = null,
        a$ = [];
    g.w(GEb, g.I);
    g.k = GEb.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Kc;
        a.unsubscribe("proxyStateChange", this.MZ, this);
        a.unsubscribe("remotePlayerChange", this.TE, this);
        a.unsubscribe("remoteQueueChange", this.UJ, this);
        a.unsubscribe("previousNextChange", this.JZ, this);
        a.unsubscribe("nowAutoplaying", this.FZ, this);
        a.unsubscribe("autoplayDismissed", this.oZ, this);
        this.Kc = this.module = null
    };
    g.k.Tk = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Kc.C)
            if (j$(this)) {
                if (1081 != M9(this.Kc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Kc).isPlaying() ? this.Kc.pause() : this.Kc.play();
                        break;
                    case "control_play":
                        this.Kc.play();
                        break;
                    case "control_pause":
                        this.Kc.pause();
                        break;
                    case "control_seek":
                        this.K.NL(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        IEb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    IEb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.T9 = function(a) {
        this.N.g3(a)
    };
    g.k.Dda = function(a) {
        this.Tk("control_subtitles_set_track", g.md(a) ? null : a)
    };
    g.k.A0 = function() {
        var a = this.J.getOption("captions", "track");
        g.md(a) || IEb(this, a)
    };
    g.k.Rc = function(a) {
        this.module.Rc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.x$ = function() {
        g.md(this.C) || JEb(this, this.C);
        this.D = !1
    };
    g.k.MZ = function(a, b) {
        this.B.stop();
        2 === b && this.s0()
    };
    g.k.TE = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Kc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Wh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Wh = 0;
                    break;
                default:
                    this.module.Wh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Gc(new g.rL(8));
                    this.r0();
                    break;
                case 1085:
                case 3:
                    this.Gc(new g.rL(9));
                    break;
                case 1083:
                case 0:
                    this.Gc(new g.rL(2));
                    this.K.stop();
                    this.Rc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Gc(new g.rL(4));
                    break;
                case 2:
                    this.Gc(new g.rL(4));
                    this.Rc(I9(a));
                    break;
                case -1:
                    this.Gc(new g.rL(64));
                    break;
                case -1E3:
                    this.Gc(new g.rL(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        PH: 2
                    }))
            }
            a = M9(this.Kc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, JEb(this, a));
            a = M9(this.Kc); - 1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.m1()
        } else HEb(this)
    };
    g.k.JZ = function() {
        this.J.ra("mdxpreviousnextchange")
    };
    g.k.UJ = function() {
        j$(this) || HEb(this)
    };
    g.k.FZ = function(a) {
        isNaN(a) || this.J.ra("mdxnowautoplaying", a)
    };
    g.k.oZ = function() {
        this.J.ra("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Kc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Kc).playerState ? k$(this, a) : b && this.Kc.seekTo(a)
    };
    g.k.m1 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Kc);
            this.events.Tc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                EEb(a, c)
            })
        }
    };
    g.k.r0 = function() {
        this.j.stop();
        if (!this.Kc.isDisposed()) {
            var a = M9(this.Kc);
            a.isPlaying() && this.Gc(new g.rL(8));
            this.Rc(I9(a));
            this.j.start()
        }
    };
    g.k.s0 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Kc.Xs();
        2 == this.Kc.C && !isNaN(a) && this.B.start()
    };
    g.k.Gc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.gDa(b, a)) {
            var c = g.EG(a, 2);
            c !== g.EG(this.G, 2) && this.J.vB(c);
            this.G = a;
            LEb(this.module, b, a)
        }
    };
    g.w(l$, g.V);
    l$.prototype.xd = function() {
        this.j.show()
    };
    l$.prototype.Qb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-cancel");
        this.Qb()
    };
    l$.prototype.C = function() {
        m8("mdx-privacy-popup-confirm");
        this.Qb()
    };
    g.w(m$, g.V);
    m$.prototype.onStateChange = function(a) {
        this.Hc(a.state)
    };
    m$.prototype.Hc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.EG(a, 128) ? g.WJ("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.WJ("Playing on $RECEIVER_NAME", b) : g.WJ("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.w(n$, g.KX);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Ut = g.cc(a, this.j, this), g.LX(this, g.Fr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Rj(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Jk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Ut[a].name
    };
    n$.prototype.uh = function(a) {
        g.KX.prototype.uh.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Ut[a]);
        this.Hb.Qb()
    };
    g.w(KEb, g.NV);
    g.k = KEb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.VR(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        vEb(b, a);
        this.subscriptions.push(g.sE("yt-remote-before-disconnect", this.R9, this));
        this.subscriptions.push(g.sE("yt-remote-connection-change", this.naa, this));
        this.subscriptions.push(g.sE("yt-remote-receiver-availability-change", this.LZ,
            this));
        this.subscriptions.push(g.sE("yt-remote-auto-connect", this.jaa, this));
        this.subscriptions.push(g.sE("yt-remote-receiver-resumed", this.iaa, this));
        this.subscriptions.push(g.sE("mdx-privacy-popup-confirm", this.Nba, this));
        this.subscriptions.push(g.sE("mdx-privacy-popup-cancel", this.Mba, this));
        this.LZ()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.NV.prototype.load.call(this);
        this.Sl = new GEb(this, this.player, this.Kc);
        var a = (a = DEb()) ? a.currentTime : 0;
        var b = AEb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Rc(a);
        LEb(this, this.Me, this.Me);
        this.player.Yp(6)
    };
    g.k.unload = function() {
        this.player.ra("mdxautoplaycanceled");
        this.Fs = this.Kp;
        g.xb(this.Sl, this.Kc);
        this.Kc = this.Sl = null;
        g.NV.prototype.unload.call(this);
        this.player.Yp(5);
        o$(this)
    };
    g.k.xa = function() {
        g.tE(this.subscriptions);
        g.NV.prototype.xa.call(this)
    };
    g.k.PE = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Sl.Tk.apply(this.Sl, [a].concat(g.pa(b)))
    };
    g.k.getAdState = function() {
        return this.Wh
    };
    g.k.Cp = function() {
        return this.Kc ? M9(this.Kc).Cp : !1
    };
    g.k.Uk = function() {
        return this.Kc ? M9(this.Kc).Uk : !1
    };
    g.k.Rc = function(a, b) {
        this.wY = a || 0;
        this.player.ra("progresssync", a, b);
        this.player.Ac("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.wY
    };
    g.k.getProgressState = function() {
        var a = M9(this.Kc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Vh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Kc && this.Kc.nextVideo()
    };
    g.k.lK = function() {
        this.Kc && this.Kc.lK()
    };
    g.k.R9 = function(a) {
        1 === a && (this.dR = this.Kc ? M9(this.Kc) : null)
    };
    g.k.naa = function() {
        var a = AEb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.Fs;
            this.loaded && this.unload();
            this.Kc = a;
            this.dR = null;
            b.key !== this.Kp.key && (this.Fs = b, this.load())
        } else g.vb(this.Kc), this.Kc = null, this.loaded && (this.unload(), (a = this.dR) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.LZ = function() {
        var a = [this.Kp],
            b = a.concat,
            c = wEb();
        C9() && g.EC("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Ut = b.call(a, c);
        a = yEb() || this.Kp;
        p$(this, a);
        this.player.Ac("onMdxReceiversChange")
    };
    g.k.jaa = function() {
        var a = yEb();
        p$(this, a)
    };
    g.k.iaa = function() {
        this.Fs = yEb()
    };
    g.k.Nba = function() {
        this.lF = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.Mba = function() {
        this.lF = !1;
        o$(this);
        p$(this, this.Kp);
        this.Fs = this.Kp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Mh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Ut;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? PDb() : p$(this, b)), this.loaded ? this.Fs : this.Kp;
            case "quickCast":
                return 2 === this.Ut.length && "cast-selector-receiver" === this.Ut[1].key ? (b && PDb(), !0) : !1
        }
    };
    g.k.tS = function() {
        this.Kc.tS()
    };
    g.k.xl = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.mB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.mB("SESSION_INDEX") && !g.mB("LOGGED_IN"))
    };
    g.MV("remote", KEb);
})(_yt_player);