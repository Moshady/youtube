(function(g) {
    var window = this;
    'use strict';
    var Jtb = function(a, b) {
            var c = [];
            return g.uD(a, {
                query: b
            }, function(d) {
                c.push(d.getValue());
                return g.tD(d)
            }).then(function() {
                return c
            })
        },
        Ktb = function(a, b) {
            return "getAll" in IDBIndex.prototype ? g.jD(a.j.getAll(b, void 0)) : Jtb(a, b)
        },
        Ltb = function(a, b) {
            return g.nD(a, ["captions"], {
                mode: "readonly",
                Tb: !0
            }, function(c) {
                return g.pra(c.objectStore("captions"), b)
            })
        },
        Mtb = function(a) {
            var b = new g.oP("und", new g.WQ("Default", "und", !0));
            b.captionTracks = a.captionTracks;
            return b
        },
        Ntb = function(a) {
            return new g.kg(function(b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function(n, p) {
                            d--;
                            e[n] = p;
                            0 == d && b(e)
                        }, h = function(n) {
                            c(n)
                        }, l = 0, m; l < a.length; l++) m = a[l], g.qca(m, g.jb(f, l), h);
                else b(e)
            })
        },
        M6 = function(a) {
            this.j = a
        },
        N6 = function() {
            M6.apply(this, arguments)
        },
        Otb = function() {
            N6.apply(this, arguments)
        },
        Ptb = function() {
            N6.apply(this, arguments)
        },
        Qtb = function() {
            N6.apply(this, arguments)
        },
        Rtb = function() {
            M6.apply(this, arguments)
        },
        Stb = function() {
            N6.apply(this, arguments)
        },
        Ttb = function() {
            N6.apply(this, arguments)
        },
        Utb = function() {
            N6.apply(this, arguments)
        },
        Vtb = function() {
            N6.apply(this, arguments)
        },
        Wtb = function() {
            N6.apply(this, arguments)
        },
        Xtb = function() {
            N6.apply(this, arguments)
        },
        Ytb = function() {
            N6.apply(this,
                arguments)
        },
        Ztb = function() {
            N6.apply(this, arguments)
        },
        $tb = function() {
            N6.apply(this, arguments)
        },
        aub = function() {
            N6.apply(this, arguments)
        },
        bub = function() {
            N6.apply(this, arguments)
        },
        cub = function() {
            M6.apply(this, arguments)
        },
        dub = function() {
            N6.apply(this, arguments)
        },
        eub = function() {
            N6.apply(this, arguments)
        },
        fub = function() {
            N6.apply(this, arguments)
        },
        gub = function() {
            N6.apply(this, arguments)
        },
        hub = function() {
            N6.apply(this, arguments)
        },
        iub = function() {
            N6.apply(this, arguments)
        },
        jub = function() {
            N6.apply(this, arguments)
        },
        kub = function() {
            N6.apply(this, arguments)
        },
        lub = function() {
            N6.apply(this, arguments)
        },
        mub = function() {
            M6.apply(this, arguments)
        },
        nub = function() {
            M6.apply(this, arguments)
        },
        oub = function() {
            M6.apply(this, arguments)
        },
        pub = function() {
            N6.apply(this, arguments)
        },
        qub = function() {
            N6.apply(this, arguments)
        },
        rub = function() {
            N6.apply(this, arguments)
        },
        sub = function() {
            N6.apply(this, arguments)
        },
        tub = function() {
            N6.apply(this, arguments)
        },
        uub = function() {
            N6.apply(this, arguments)
        },
        vub = function() {
            N6.apply(this, arguments)
        },
        wub = function() {
            N6.apply(this,
                arguments)
        },
        xub = function() {
            N6.apply(this, arguments)
        },
        yub = function() {
            N6.apply(this, arguments)
        },
        zub = function() {
            N6.apply(this, arguments)
        },
        Aub = function() {
            N6.apply(this, arguments)
        },
        Bub = function() {
            N6.apply(this, arguments)
        },
        Cub = function() {
            N6.apply(this, arguments)
        },
        Dub = function() {
            N6.apply(this, arguments)
        },
        Eub = function() {
            N6.apply(this, arguments)
        },
        Fub = function() {
            N6.apply(this, arguments)
        },
        Gub = function() {
            N6.apply(this, arguments)
        },
        Hub = function() {
            N6.apply(this, arguments)
        },
        Iub = function() {
            N6.apply(this, arguments)
        },
        Jub = function() {
            N6.apply(this, arguments)
        },
        Kub = function() {
            N6.apply(this, arguments)
        },
        Lub = function() {
            N6.apply(this, arguments)
        },
        Mub = function() {
            M6.apply(this, arguments)
        },
        Nub = function() {
            N6.apply(this, arguments)
        },
        Oub = function() {
            N6.apply(this, arguments)
        },
        Pub = function() {
            N6.apply(this, arguments)
        },
        Qub = function() {
            N6.apply(this, arguments)
        },
        Rub = function() {
            N6.apply(this, arguments)
        },
        Sub = function() {
            N6.apply(this, arguments)
        },
        Tub = function() {
            N6.apply(this, arguments)
        },
        Uub = function() {
            N6.apply(this, arguments)
        },
        Vub = function() {
            N6.apply(this,
                arguments)
        },
        Wub = function() {
            N6.apply(this, arguments)
        },
        Xub = function() {
            N6.apply(this, arguments)
        },
        Yub = function() {
            N6.apply(this, arguments)
        },
        Zub = function() {
            N6.apply(this, arguments)
        },
        $ub = function() {
            N6.apply(this, arguments)
        },
        avb = function() {
            N6.apply(this, arguments)
        },
        bvb = function() {
            N6.apply(this, arguments)
        },
        cvb = function() {
            N6.apply(this, arguments)
        },
        dvb = function() {
            N6.apply(this, arguments)
        },
        evb = function() {
            N6.apply(this, arguments)
        },
        fvb = function() {
            N6.apply(this, arguments)
        },
        gvb = function() {
            N6.apply(this, arguments)
        },
        hvb = function() {
            N6.apply(this, arguments)
        },
        ivb = function() {
            N6.apply(this, arguments)
        },
        jvb = function() {
            N6.apply(this, arguments)
        },
        kvb = function() {
            N6.apply(this, arguments)
        },
        lvb = function() {
            N6.apply(this, arguments)
        },
        mvb = function(a) {
            return g.yD((0, g.Ilb)(), a)
        },
        O6 = function(a) {
            this.token = a
        },
        nvb = function(a) {
            a = a.key || a.id;
            if (!a) throw Error("Entity key is missing");
            return a
        },
        ovb = function() {
            if (P6) return P6();
            var a = {};
            P6 = g.FD("PersistentEntityStoreDb", {
                lr: (a.EntityStore = {
                    fn: 1
                }, a.EntityAssociationStore = {
                    fn: 2
                }, a),
                shared: !1,
                upgrade: function(b, c) {
                    c(1) && g.rD(g.lD(b, "EntityStore", {
                        keyPath: "key"
                    }), "entityType", "entityType");
                    c(2) && (b = g.lD(b, "EntityAssociationStore", {
                        keyPath: ["parentEntityKey", "childEntityKey"]
                    }), g.rD(b, "byParentEntityKey", "parentEntityKey"), g.rD(b, "byChildEntityKey", "childEntityKey"))
                },
                version: 3
            });
            return P6()
        },
        pvb = function(a) {
            return g.yD(ovb(), a)
        },
        Q6 = function(a, b) {
            b = void 0 === b ? {} : b;
            g.LC.call(this, g.Qlb[a], Object.assign({}, {
                name: "PESEncoderError",
                type: a
            }, b));
            this.type = a;
            this.level = "WARNING";
            Object.setPrototypeOf(this, Q6.prototype)
        },
        qvb = function(a) {
            return new Q6("WRONG_DATA_TYPE", {
                I6: a
            })
        },
        rvb = function(a) {
            return a instanceof Error ? new Q6("UNKNOWN_ENCODE_ERROR", {
                RQ: a.message
            }) : new Q6("UNKNOWN_ENCODE_ERROR")
        },
        svb = function(a) {
            return a instanceof Error ? new Q6("UNKNOWN_DECODE_ERROR", {
                RQ: a.message
            }) : new Q6("UNKNOWN_DECODE_ERROR")
        },
        tvb = function(a, b) {
            a = a instanceof Q6 ? a : b(a);
            g.oF(a);
            throw a;
        },
        uvb = function() {},
        vvb = function(a, b, c) {
            try {
                return a.C(b, c)
            } catch (d) {
                tvb(d, rvb)
            }
        },
        wvb = function(a) {
            a = (new TextEncoder).encode(a).subarray(0, 16);
            var b = new Uint8Array(16);
            b.set(a);
            return b
        },
        R6 = function(a) {
            this.j = a
        },
        yvb = function(a) {
            var b = xvb[a];
            if (b) return b;
            g.pF(new g.LC("Entity model not found.", {
                entityType: a
            }))
        },
        zvb = function(a, b) {
            this.j = a;
            this.B = b;
            this.C = {}
        },
        Bvb = function(a, b) {
            a: {
                a = Avb(a.B, b.version);
                try {
                    var c = a.B(b.data, b.key);
                    break a
                } catch (d) {
                    tvb(d, svb)
                }
                c = void 0
            }
            return c
        },
        S6 = function(a, b, c) {
            return a.j.objectStore("EntityStore").get(b).then(function(d) {
                if (d) {
                    if (c && d.entityType !== c) throw Error("Incorrect entity type");
                    return Bvb(a, d)
                }
            })
        },
        T6 = function(a, b, c) {
            return c ? (c = c.map(function(d) {
                return S6(a, d, b)
            }), g.iD.all(c)) : Ktb(a.j.objectStore("EntityStore").index("entityType"), IDBKeyRange.only(b)).then(function(d) {
                return d.map(function(e) {
                    return Bvb(a, e)
                })
            })
        },
        V6 = function(a, b, c) {
            var d = nvb(b),
                e = Avb(a.B, 1),
                f = Object.assign({}, b);
            return a.j.objectStore("EntityStore").get(d).then(function(h) {
                if (h) {
                    if (h.entityType !== c) throw Error("Incorrect entity type");
                    f.entityMetadata || (h = Bvb(a, h), f.entityMetadata = h.entityMetadata)
                }
            }).then(function() {
                var h = {
                    key: d,
                    entityType: c,
                    data: vvb(e, f, d),
                    version: 1
                };
                return g.iD.all([g.oD(a.j.objectStore("EntityStore"), h), Cvb(a, f, c)])
            }).then(function() {
                U6(a, d, c);
                return d
            })
        },
        Dvb = function(a, b, c) {
            b = b.map(function(d) {
                return V6(a, d, c)
            });
            return g.iD.all(b)
        },
        W6 = function(a, b, c) {
            if (null == c ? 0 : c.ev) {
                var d = new Set;
                return Evb(a, b, d).then(function() {
                    for (var f = [], h = g.u(d), l = h.next(); !l.done; l = h.next()) f.push(W6(a, l.value));
                    return g.iD.all(f).then(function() {})
                })
            }
            var e = g.DO(b).entityType;
            return g.iD.all([a.j.objectStore("EntityStore").delete(b), Fvb(a, b)]).then(function() {
                U6(a, b, e)
            })
        },
        Gvb = function(a, b) {
            return g.uD(a.j.objectStore("EntityStore").index("entityType"), {
                query: IDBKeyRange.only(b)
            }, function(c) {
                return g.iD.all([c.delete(),
                    Fvb(a, c.cursor.primaryKey)
                ]).then(function() {
                    U6(a, c.cursor.primaryKey, b);
                    return g.tD(c)
                })
            })
        },
        Hvb = function(a, b, c, d) {
            var e = Avb(a.B, 1);
            return S6(a, b, d).then(function(f) {
                if (f) {
                    f = g.iIa(f, c);
                    var h = {
                        key: b,
                        entityType: d,
                        data: vvb(e, f, b),
                        version: 1
                    };
                    return g.iD.all([g.oD(a.j.objectStore("EntityStore"), h), Cvb(a, f, d)])
                }
            }).then(function() {
                U6(a, b, d);
                return b
            })
        },
        U6 = function(a, b, c) {
            var d = a.C[c];
            d || (d = new Set, a.C[c] = d);
            d.add(b)
        },
        Ivb = function(a, b, c) {
            var d = nvb(b);
            c = yvb(c);
            if (!c) return g.iD.resolve([]);
            c = new c(b);
            a = a.j.objectStore("EntityAssociationStore");
            b = [];
            c = g.u(c.B());
            for (var e = c.next(); !e.done; e = c.next()) b.push(g.oD(a, {
                parentEntityKey: d,
                childEntityKey: e.value
            }));
            return g.iD.all(b).then(function(f) {
                return f.map(function(h) {
                    return h[1]
                })
            })
        },
        Fvb = function(a, b) {
            return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b))
        },
        Cvb = function(a, b, c) {
            var d = nvb(b);
            return Fvb(a, d).then(function() {
                return Ivb(a, b, c)
            })
        },
        Evb = function(a, b, c) {
            if (c.has(b)) return g.iD.resolve(void 0);
            c.add(b);
            return Jvb(a, b).then(function(d) {
                return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b)).then(function() {
                    return d
                })
            }).then(function(d) {
                var e = g.iD.resolve(void 0);
                d = g.u(d);
                for (var f = d.next(), h = {}; !f.done; h = {
                        YZ: void 0
                    }, f = d.next()) h.YZ = f.value, e = e.then(function(l) {
                    return function() {
                        return Evb(a, l.YZ, c)
                    }
                }(h));
                return e
            }).then(function() {})
        },
        Jvb = function(a, b) {
            var c = a.j.objectStore("EntityAssociationStore");
            return Ktb(c.index("byParentEntityKey"), IDBKeyRange.only(b)).then(function(d) {
                var e = [];
                d = g.u(d);
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, e.push(Ktb(c.index("byChildEntityKey"), f.childEntityKey));
                return g.iD.all(e)
            }).then(function(d) {
                var e = [];
                d = g.u(d);
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, 1 === f.length && e.push(f[0].childEntityKey);
                return e
            })
        },
        X6 = function() {},
        Kvb = function() {
            this.j = {};
            this.j[0] = new X6;
            if (!g.KB("aes_pes_encoder_killswitch")) {
                var a = this.j;
                try {
                    var b = g.MC();
                    var c = wvb(b);
                    var d = new R6(new g.UN(c), new g.TN(c))
                } catch (e) {
                    throw a = e instanceof Error ? new Q6("KEY_CREATION_FAILED", {
                        RQ: e.message
                    }) : new Q6("KEY_CREATION_FAILED"), g.oF(a), a;
                }
                a[1] = d
            }
        },
        Avb = function(a, b) {
            b = void 0 === b ? 0 : b;
            a = a.j[b];
            if (!a) throw b = new Q6("INVALID_ENCODER_VERSION", {
                I6: b
            }), g.oF(b), b;
            return a
        },
        Y6 = function(a, b) {
            g.I.call(this);
            this.token = a;
            this.j = b;
            this.observers = [];
            a = new g.Ta.BroadcastChannel("PERSISTENT_ENTITY_STORE_SYNC:" + g.MC());
            a.onmessage = this.B.bind(this);
            this.channel = a
        },
        Z6 = function(a, b, c) {
            var d, e, f, h;
            return g.H(function(l) {
                if (1 == l.j) return g.z(l, pvb(a.token), 2);
                if (3 != l.j) return d = l.B, g.z(l, g.nD(d, ["EntityStore", "EntityAssociationStore"], b, function(m) {
                    e = new zvb(m, a.j);
                    return c(e)
                }), 3);
                f = l.B;
                e && (h = e.C, 0 < Object.keys(h).length && (a.channel.postMessage(h), Lvb(a, h)));
                return l.return(f)
            })
        },
        Mvb = function(a, b) {
            a.observers.push(b);
            return function() {
                var c = a.observers.indexOf(b);
                0 <= c && a.observers.splice(c, 1)
            }
        },
        $6 = function(a, b, c) {
            return Z6(a, {
                mode: "readwrite",
                Tb: !0
            }, function(d) {
                return V6(d, b, c)
            })
        },
        Nvb = function(a, b) {
            return Z6(a, {
                mode: "readwrite",
                Tb: !0
            }, function(c) {
                return Dvb(c, b, "offlineOrchestrationActionWrapperEntity")
            })
        },
        Ovb = function(a, b) {
            return Z6(a, {
                mode: "readwrite",
                Tb: !0
            }, function(c) {
                return W6(c, b)
            })
        },
        Pvb = function(a) {
            return Z6(a, {
                mode: "readwrite",
                Tb: !0
            }, function(b) {
                return Gvb(b, "videoPlaybackPositionEntity")
            })
        },
        a7 = function(a, b, c) {
            return Z6(a, {
                mode: "readonly",
                Tb: !0
            }, function(d) {
                return S6(d, b, c)
            })
        },
        b7 = function(a, b, c) {
            return Z6(a, {
                mode: "readonly",
                Tb: !0
            }, function(d) {
                return T6(d, b, c)
            })
        },
        Lvb = function(a, b) {
            a = g.u(a.observers);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, c(b)
        },
        Qvb = function() {
            var a, b, c;
            return g.H(function(d) {
                if (1 == d.j) return g.Ba(d, 2), g.z(d, g.DD(), 4);
                if (2 != d.j) {
                    a = d.B;
                    if (!a || !g.NC() || "undefined" === typeof g.Ta.BroadcastChannel) return d.return();
                    b = new Kvb;
                    return d.return(new Y6(a, b))
                }
                c = g.Da(d);
                c instanceof Error && g.oF(c);
                return d.return()
            })
        },
        c7 = function() {
            Rvb || (Rvb = Qvb());
            return Rvb
        },
        Svb = function(a) {
            var b;
            a = null == (b = a.options) ? void 0 : b.persistenceOption;
            return "ENTITY_PERSISTENCE_OPTION_PERSIST" === a || "ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST" === a
        },
        Tvb = function(a) {
            var b;
            return g.H(function(c) {
                return 1 == c.j ? g.z(c, c7(), 2) : (b = c.B) ? g.z(c, Z6(b, "readwrite", function(d) {
                    for (var e = {}, f = g.u(a), h = f.next(), l = {}; !h.done; l = {
                            vk: void 0,
                            HE: void 0
                        }, h = f.next()) l.vk = h.value, l.vk.entityKey && Svb(l.vk) && (l.HE = g.fd(l.vk.payload), h = void 0, "ENTITY_MUTATION_TYPE_REPLACE" === l.vk.type && (h = function(m) {
                            return function() {
                                return V6(d, m.vk.payload[m.HE], m.HE)
                            }
                        }(l)), "ENTITY_MUTATION_TYPE_DELETE" === l.vk.type && (h = function(m) {
                            return function() {
                                return W6(d, m.vk.entityKey)
                            }
                        }(l)), "ENTITY_MUTATION_TYPE_UPDATE" ===
                        l.vk.type && (h = function(m) {
                            return function() {
                                return Hvb(d, m.vk.entityKey, m.vk.payload[m.HE], m.HE)
                            }
                        }(l)), h && (e[l.vk.entityKey] = e[l.vk.entityKey] ? e[l.vk.entityKey].then(h) : h()));
                    return g.iD.all(Object.values(e))
                }), 0) : c.return()
            })
        },
        Uvb = function(a) {
            var b;
            return g.H(function(c) {
                if (1 == c.j) {
                    b = a.mutations;
                    if (!b || 0 >= b.length) return c.return();
                    if (g.gT) {
                        var d = {
                            type: "ENTITY_LOADED"
                        };
                        void 0 !== b && (d.payload = b);
                        g.gT.dispatch(d)
                    }
                    return g.z(c, Tvb(b), 2)
                }
                b.length = 0;
                g.Aa(c)
            })
        },
        Vvb = function(a) {
            return void 0 !== a
        },
        Wvb = function(a) {
            var b = g.GS();
            b = Object.assign({}, b);
            a = Object.assign({}, a);
            for (var c in b) a[c] ? (4 !== b[c] && (b[c] = a[c]), delete a[c]) : 2 !== b[c] && (b[c] = 4);
            Object.assign(b, a);
            g.rSa(b);
            JSON.stringify(b);
            return b
        },
        Xvb = function(a) {
            var b, c;
            return g.H(function(d) {
                if (1 == d.j) return g.z(d, g.DD(), 2);
                if (3 != d.j) return (b = d.B) ? g.z(d, g.JS(b), 3) : d.return();
                c = d.B;
                return d.return(g.nD(c, ["index", "media", "captions"], {
                    mode: "readwrite",
                    Tb: !0
                }, function(e) {
                    var f = IDBKeyRange.bound(a + "|", a + "~");
                    e = [e.objectStore("index").delete(f), e.objectStore("media").delete(f), e.objectStore("captions").delete(f)];
                    return g.iD.all(e).then(function() {})
                }))
            })
        },
        Yvb = function() {
            var a, b;
            return g.H(function(c) {
                if (1 == c.j) return g.z(c, g.DD(), 2);
                if (3 != c.j) {
                    a = c.B;
                    if (!a) throw g.gD("rvdfd");
                    return g.z(c, g.JS(a), 3)
                }
                b = c.B;
                return c.return(g.nD(b, ["index", "media"], {
                    mode: "readwrite",
                    Tb: !0
                }, function(d) {
                    var e = {};
                    return g.sD(d.objectStore("index"), {}, function(f) {
                        var h = f.cursor.key.match(/^([\w\-_]+)\|(a|v)$/),
                            l = g.iD.resolve(void 0);
                        if (h) {
                            var m = h[1];
                            h = h[2];
                            e[m] = e[m] || {};
                            var n;
                            e[m][h] = g.wSa(null == (n = f.getValue()) ? void 0 : n.fmts)
                        } else l = f.delete().then(function() {});
                        return g.iD.all([g.tD(f), l]).then(function(p) {
                            return g.u(p).next().value
                        })
                    }).then(function() {
                        for (var f = {}, h = g.u(Object.keys(e)), l = h.next(); !l.done; l = h.next()) {
                            l = l.value;
                            var m = e[l].v;
                            f[l] = e[l].a && m ? 1 : 2
                        }
                        var n = Wvb(f);
                        return g.sra(d.objectStore("media"), {}, function(p) {
                            var q = p.cursor.key.match(g.BSa);
                            q && f[q[1]] || d.objectStore("media").delete(p.cursor.key);
                            return g.hra(p)
                        }).then(function() {
                            return n
                        })
                    })
                }))
            })
        },
        Zvb = function(a, b) {
            var c, d;
            return g.H(function(e) {
                if (1 == e.j) return g.z(e, g.DD(), 2);
                if (3 != e.j) {
                    c = e.B;
                    if (!c) throw g.gD("wct");
                    return g.z(e, g.JS(c), 3)
                }
                d = e.B;
                return g.z(e, g.nD(d, ["captions"], {
                    mode: "readwrite",
                    Tb: !0
                }, function(f) {
                    var h = [];
                    f = f.objectStore("captions");
                    for (var l = 0; l < b.length; l++) {
                        var m = g.oD(f, b[l], a + "|" + b[l].metadata.vss_id);
                        h.push(m)
                    }
                    return g.iD.all(h)
                }), 0)
            })
        },
        $vb = function(a) {
            var b, c, d;
            return g.H(function(e) {
                if (1 == e.j) return b = IDBKeyRange.bound(a + "|", a + "~"), g.z(e, g.DD(), 2);
                if (3 != e.j) {
                    c = e.B;
                    if (!c) throw g.gD("gactfv");
                    return g.z(e, g.JS(c), 3)
                }
                d = e.B;
                return e.return(Ltb(d, b))
            })
        },
        awb = function(a) {
            return g.H(function(b) {
                g.IS(a, 0);
                return b.return(Xvb(a))
            })
        },
        bwb = function(a) {
            return {
                context: g.bH(),
                videoIds: a
            }
        },
        cwb = function(a) {
            return {
                context: g.bH(),
                playlistIds: a
            }
        },
        dwb = function(a) {
            return {
                context: g.bH(),
                offlinePlaylistSyncChecks: a
            }
        },
        ewb = function(a, b, c, d, e, f) {
            a = {
                entityKey: a
            };
            c && (a.refreshData = c);
            d && (a.isExpiredStreamUrlRefetch = d);
            e && (a.downloadParameters = e);
            f && (a.offlineSourceData = f);
            return {
                context: g.aUa(b),
                signatureTimestamp: 19795,
                videos: [a]
            }
        },
        fwb = function() {
            this.j = new Map
        },
        hwb = function() {
            gwb || (gwb = new fwb);
            return gwb
        },
        iwb = function(a, b) {
            return {
                eventType: {
                    flowEventNamespace: "FLOW_EVENT_NAMESPACE_OFFLINE_ORCHESTRATION",
                    flowEventType: a
                },
                metadata: b,
                statusCode: void 0,
                csn: void 0,
                can: void 0
            }
        },
        jwb = function(a, b, c) {
            if (!c) {
                var d = void 0 === d ? !1 : d;
                c = a.j.get("FLOW_TYPE_OFFLINE_ORCHESTRATION");
                if (!c || d) c = g.BE(16), a.j.set("FLOW_TYPE_OFFLINE_ORCHESTRATION", c)
            }
            a = {
                flowNonce: c,
                flowType: "FLOW_TYPE_OFFLINE_ORCHESTRATION",
                flowEventType: b.eventType
            };
            b.metadata && (a.flowMetadata = b.metadata);
            void 0 !== b.statusCode && (a.flowEventStatus = b.statusCode);
            b.csn && (a.csn = b.csn);
            b.can && (a.can = b.can);
            g.XC("flowEvent", a, void 0)
        },
        kwb = function(a) {
            var b, c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb, Oa, Ua, gb, qb, rb;
            return g.H(function(B) {
                if (1 == B.j) return g.z(B, Z6(a, {
                    mode: "readonly",
                    Tb: !0
                }, function(C) {
                    return T6(C, "playbackData").then(function(D) {
                        var J = D.map(function(ia) {
                                return ia.transfer
                            }).filter(function(ia) {
                                return !!ia
                            }),
                            K = D.map(function(ia) {
                                return ia.offlineVideoPolicy
                            }).filter(function(ia) {
                                return !!ia
                            }),
                            ba = D.filter(function(ia) {
                                return !!ia.key
                            }).map(function(ia) {
                                return g.EO(g.DO(ia.key).entityId, "downloadStatusEntity")
                            });
                        J = T6(C, "transfer", J);
                        K = T6(C, "offlineVideoPolicy", K);
                        ba = T6(C, "downloadStatusEntity", ba);
                        var sa = J.then(function(ia) {
                            ia = ia.reduce(function(M, X) {
                                (null == X ? 0 : X.offlineVideoStreams) && M.push.apply(M, g.pa(X.offlineVideoStreams));
                                return M
                            }, []).filter(function(M) {
                                return !!M
                            });
                            return T6(C, "offlineVideoStreams", ia)
                        });
                        return g.iD.all([J, K, sa, ba]).then(function(ia) {
                            var M = g.u(ia);
                            ia = M.next().value;
                            var X = M.next().value,
                                ya = M.next().value;
                            M = M.next().value;
                            return [D, ia, X, ya, M]
                        })
                    })
                }), 2);
                if (3 != B.j) return b = B.B, g.z(B, Z6(a, {
                    mode: "readonly",
                    Tb: !0
                }, function(C) {
                    return T6(C, "mainDownloadsListEntity").then(function(D) {
                        var J, K;
                        return null != (K = null == (J = D[0]) ? void 0 : J.downloads) ? K : []
                    })
                }), 3);
                c = B.B;
                d = g.u(b);
                e = d.next().value;
                f = d.next().value;
                h = d.next().value;
                l = d.next().value;
                m = d.next().value;
                n = e;
                p = f;
                q = h;
                r = l;
                t = m;
                v = {};
                x = {};
                A = {};
                E = {};
                F = {};
                G = [];
                L = g.u(p);
                for (Q = L.next(); !Q.done; Q = L.next())(R = Q.value) && (v[R.key] = R);
                aa = g.u(q);
                for (na = aa.next(); !na.done; na = aa.next())(ta = na.value) && (x[ta.key] = ta);
                la = g.u(t);
                for (va = la.next(); !va.done; va = la.next())(ea = va.value) && (A[ea.key] = ea);
                Y = g.u(r);
                for (Na = Y.next(); !Na.done; Na = Y.next())(y = Na.value) && (E[y.key] = y);
                ca = g.u(c);
                for (Ja = ca.next(); !Ja.done; Ja = ca.next()) cb =
                    Ja.value, nb = void 0, F[null != (nb = cb.videoItem) ? nb : ""] = !0, cb.videoItem && (Ua = Oa = void 0, gb = null != (Ua = null == (Oa = g.DO(cb.videoItem)) ? void 0 : Oa.entityId) ? Ua : "", G.push({
                        externalVideoId: gb
                    }));
                qb = n.filter(function(C) {
                    if (!C || !C.key) return !1;
                    C = g.DO(C.key).entityId;
                    C = g.EO(C, "downloadStatusEntity");
                    var D;
                    return !(C && "DOWNLOAD_STATE_USER_DELETED" === (null == (D = A[C]) ? void 0 : D.downloadState))
                });
                rb = qb.map(function(C) {
                    var D = v[C.transfer],
                        J = [];
                    if (null == D ? 0 : D.offlineVideoStreams)
                        for (var K = g.u(D.offlineVideoStreams), ba = K.next(); !ba.done; ba = K.next())(ba = E[ba.value]) && J.push(ba);
                    K = x[C.offlineVideoPolicy];
                    ba = F;
                    var sa = null == C ? void 0 : C.playerResponseTimestamp,
                        ia = g.DO(K.key).entityId;
                    C = g.EO(ia, "mainVideoEntity");
                    if ("OFFLINE_VIDEO_POLICY_ACTION_DISABLE" === K.action) {
                        var M = "OFFLINE_VIDEO_STATE_DISABLED";
                        K.expirationTimestamp && Number(K.expirationTimestamp) < Date.now() / 1E3 && (M = "OFFLINE_VIDEO_STATE_EXPIRED")
                    } else if ("OFFLINE_VIDEO_POLICY_ACTION_DOWNLOAD_FAILED" ===
                        K.action) M = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED";
                    else {
                        switch (null == D ? void 0 : D.transferState) {
                            case "TRANSFER_STATE_TRANSFER_IN_QUEUE":
                                M = "OFFLINE_VIDEO_STATE_PENDING";
                                break;
                            case "TRANSFER_STATE_TRANSFERRING":
                                M = "OFFLINE_VIDEO_STATE_TRANSFERRING";
                                break;
                            case "TRANSFER_STATE_PAUSED_BY_USER":
                                M = "OFFLINE_VIDEO_STATE_PAUSED_TRANSFER";
                                break;
                            case "TRANSFER_STATE_FAILED":
                                M = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED";
                                break;
                            case "TRANSFER_STATE_COMPLETE":
                                M = "OFFLINE_VIDEO_STATE_PLAYABLE";
                                break;
                            case "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH":
                                M =
                                    "OFFLINE_VIDEO_STATE_STREAMS_OUT_OF_DATE";
                                break;
                            default:
                                M = "OFFLINE_VIDEO_STATE_UNKNOWN"
                        }
                        if ("OFFLINE_VIDEO_STATE_OFFLINE_FAILED" === M) switch (null == D ? void 0 : D.failureReason) {
                            case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE":
                            case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE":
                                M = "OFFLINE_VIDEO_STATE_OUT_OF_STORAGE_ERROR";
                                break;
                            case "TRANSFER_FAILURE_REASON_STREAM_MISSING":
                                M = "OFFLINE_VIDEO_STATE_STREAMS_MISSING";
                                break;
                            case "TRANSFER_FAILURE_REASON_NETWORK":
                            case "TRANSFER_FAILURE_REASON_NETWORK_LOST":
                                M =
                                    "OFFLINE_VIDEO_STATE_NETWORK_ERROR"
                        }
                    }
                    ia = {
                        id: ia,
                        videoState: M
                    };
                    if (null == D ? 0 : D.cotn) ia.cotn = D.cotn;
                    if (null == D ? 0 : D.maximumDownloadQuality) ia.selectedVideoQuality = null == D ? void 0 : D.maximumDownloadQuality;
                    if (null == D ? 0 : D.lastProgressTimeMs) ia.lastProgressTimeMs = D.lastProgressTimeMs;
                    sa && (ia.playerResponseSavedTimeMs = String(1E3 * Number(sa)));
                    D = String;
                    sa = 0;
                    J = g.u(J);
                    for (M = J.next(); !M.done; M = J.next())
                        if (M = M.value, M.streamsProgress) {
                            M = g.u(M.streamsProgress);
                            for (var X = M.next(); !X.done; X = M.next()) {
                                var ya = void 0;
                                sa +=
                                    Number(null != (ya = X.value.numBytesDownloaded) ? ya : 0)
                            }
                        }
                    ia.downloadedBytes = D(sa);
                    ia.selectedOfflineMode = ba[C] ? "OFFLINE_MODE_TYPE_AUTO_OFFLINE" : "OFFLINE_NOW";
                    "OFFLINE_VIDEO_POLICY_ACTION_DISABLE" === K.action && (ia.offlinePlaybackDisabledReason = K.offlinePlaybackDisabledReason);
                    return ia
                });
                return B.return({
                    offlineVideos: rb,
                    additionalOfflineClientState: {
                        mainAppAdditionalOfflineClientState: {
                            smartDownloadVideos: G
                        }
                    }
                })
            })
        },
        lwb = function() {
            this.locks = navigator.locks
        },
        mwb = function() {
            try {
                var a = g.Wa("ytglobal.locks_");
                if (a) return a;
                var b;
                if (b = navigator) {
                    var c = navigator;
                    b = "locks" in c && !!c.locks
                }
                if (b) return g.Ta.localStorage && g.Ta.localStorage.getItem("noop"), a = new lwb, g.Va("ytglobal.locks_", a), a
            } catch (d) {}
        },
        d7 = function() {},
        nwb = function() {},
        owb = function(a) {
            if (a.includes(":")) throw Error("Invalid user cache name: " + a);
            return a + ":" + g.MC("CacheStorage get")
        },
        pwb = function() {
            return g.H(function(a) {
                if (void 0 !== e7) return a.return(e7);
                e7 = new Promise(function(b) {
                    var c;
                    return g.H(function(d) {
                        switch (d.j) {
                            case 1:
                                return g.Ba(d, 2), g.z(d, f7.open("test-only"), 4);
                            case 4:
                                return g.z(d, f7.delete("test-only"), 5);
                            case 5:
                                g.Ca(d, 3);
                                break;
                            case 2:
                                if (c = g.Da(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return();
                            case 3:
                                b("caches" in window), g.Aa(d)
                        }
                    })
                });
                return a.return(e7)
            })
        },
        rwb = function() {
            return g.H(function(a) {
                if (1 == a.j) return g.z(a, pwb(), 2);
                if (!a.B) return a.return(void 0);
                qwb || (qwb = new nwb);
                return a.return(qwb)
            })
        },
        g7 = function(a, b, c) {
            g.pF(new g.LC("Woffle: " + a, c ? {
                cotn: c
            } : ""));
            b instanceof Error && g.pF(b)
        },
        swb = function(a) {
            var b;
            return g.H(function(c) {
                if (1 == c.j) return g.z(c, kwb(a), 2);
                b = c.B;
                g.XC("offlineStateSnapshot", b);
                g.Aa(c)
            })
        },
        h7 = function(a) {
            g.I.call(this);
            var b = this;
            this.api = a;
            this.Cd = {
                Zmb: function() {
                    return b.j
                },
                rnb: function() {
                    return b.B
                }
            };
            "undefined" !== typeof g.Ta.BroadcastChannel && (this.j = new g.Ta.BroadcastChannel("PLAYER_OFFLINE_ERROR_SYNC:" + g.MC()), this.j.onmessage = this.C.bind(this), this.B = new g.Ta.BroadcastChannel("PLAYER_OFFLINE_PAUSE_SYNC:" + g.MC()), this.B.onmessage = this.D.bind(this))
        },
        i7 = function(a, b) {
            a.api.ob("onOfflineOperationFailure", b);
            var c;
            null == (c = a.j) || c.postMessage(b)
        },
        twb = function(a, b, c, d) {
            var e = this;
            this.Z = a;
            this.Y = b;
            this.visibility = c;
            this.L = d;
            this.G = this.N = this.K = this.C = this.j = !1;
            this.D = new g.Ru(function() {
                e.tK()
            });
            this.Cd = {
                eX: function() {
                    return e.B
                },
                tK: function() {
                    e.tK()
                },
                xnb: function() {
                    return e.D
                }
            };
            this.visibility.subscribe("visibilitystatechange", function() {
                e.jg()
            })
        },
        uwb = function(a) {
            if (!a.C && !a.j) {
                var b = mwb();
                if (b) {
                    a.C = !0;
                    var c = g.MC("OfflineLockManager");
                    b.request("woffle_orchestration_leader:" + c, {}, function() {
                        var d, e, f, h;
                        return g.H(function(l) {
                            switch (l.j) {
                                case 1:
                                    return g.Ba(l, 2), a.B = new g.ho, a.j = !0, a.C = !1, g.z(l, a.Z(), 4);
                                case 4:
                                    return g.z(l, a.B.promise, 5);
                                case 5:
                                    g.Ca(l, 0);
                                    break;
                                case 2:
                                    d = g.Da(l), (null == (f = (e = a).L) ? 0 : f.call(e, "wo_relinquish_leadership_on_lock_request_error")) || a.tK(), d instanceof Error && (h = d, h.args = [{
                                        name: "WoLockManagerError",
                                        XJ: d.name
                                    }], g.oF(h)), g.Aa(l)
                            }
                        })
                    })
                }
            }
        },
        vwb = function(a) {
            a.j && (a.G = !0, j7(a))
        },
        wwb = function(a, b) {
            a.j && (a.K = b, j7(a))
        },
        xwb = function(a, b) {
            a.j && (a.N = b, j7(a))
        },
        j7 = function(a) {
            a.N && a.K && a.G && a.visibility.isBackground() ? g.Su(a.D, 6E4) : a.D.stop()
        },
        ywb = function(a) {
            var b;
            a.offlineDeleteReason = null != (b = a.offlineDeleteReason) ? b : "OFFLINE_DELETE_REASON_UNKNOWN";
            var c;
            a.offlineModeType = null != (c = a.offlineModeType) ? c : "OFFLINE_NOW";
            g.XC("offlineDeleteEvent", a)
        },
        k7 = function(a, b) {
            var c = b.Bl,
                d = b.offlineModeType;
            a.encryptedVideoId = b.videoId;
            a.cotn = null == c ? void 0 : c.cotn;
            a.offlineabilityFormatType = null == c ? void 0 : c.maximumDownloadQuality;
            var e;
            a.isRefresh = null != (e = null == c ? void 0 : c.isRefresh) ? e : !1;
            var f;
            a.softErrorCount = null != (f = null == c ? void 0 : c.transferRetryCount) ? f : 0;
            a.offlineModeType = null != d ? d : "OFFLINE_NOW";
            ("TRANSFER_STATUS_TYPE_UNKNOWN" === a.transferStatusType && "UNKNOWN_STATUS_TYPE" === a.statusType || !a.transferStatusType && !a.statusType) && g.pF(Error("Woffle unknown transfer status"));
            g.XC("offlineTransferStatusChanged",
                a)
        },
        zwb = function(a, b, c, d) {
            d = {
                transferStatusType: "TRANSFER_STATUS_TYPE_PROCESSING",
                statusType: "OFFLINING_STARTED",
                transferFirstStarted: !!d
            };
            b && c && (b = Math.floor(b / 1024).toFixed(), c = Math.floor(c / 1024).toFixed(), d.alreadyDownloadedKbytes = b, d.totalFetchedKbytes = b, d.totalContentKbytes = c);
            k7(d, a)
        },
        Awb = function(a) {
            k7({
                transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_USER_PAUSE",
                statusType: "SUSPENDED"
            }, a)
        },
        Bwb = function(a) {
            switch (a) {
                case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE":
                case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE":
                    return "OFFLINE_DATABASE_ERROR";
                case "TRANSFER_FAILURE_REASON_PLAYABILITY":
                    return "NOT_PLAYABLE";
                case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES":
                    return "TOO_MANY_RETRIES";
                case "TRANSFER_FAILURE_REASON_INTERNAL":
                    return "OFFLINE_DOWNLOAD_CONTROLLER_ERROR";
                case "TRANSFER_FAILURE_REASON_STREAM_MISSING":
                    return "STREAM_VERIFICATION_FAILED";
                case "TRANSFER_FAILURE_REASON_SERVER":
                case "TRANSFER_FAILURE_REASON_SERVER_PROPERTY_MISSING":
                    return "OFFLINE_REQUEST_FAILURE";
                case "TRANSFER_FAILURE_REASON_NETWORK":
                    return "OFFLINE_NETWORK_ERROR";
                default:
                    return "UNKNOWN_FAILURE_REASON"
            }
        },
        l7 = function(a) {
            var b, c, d;
            return 0 < (null != (d = null == (b = a.actionMetadata) ? void 0 : null == (c = b.retryScheduleIntervalsInSeconds) ? void 0 : c.length) ? d : 0)
        },
        m7 = function(a) {
            return "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === a.actionType && !!a.entityKey
        },
        n7 = function(a) {
            return "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === a.actionType && !!a.entityKey
        },
        o7 = function(a) {
            return "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === a.actionType && !!a.entityKey
        },
        Cwb = function(a) {
            return "OFFLINE_ORCHESTRATION_ACTION_TYPE_UPDATE" === a.actionType && !!a.entityKey
        },
        p7 =
        function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f, h, l, m, n, p;
            return g.H(function(q) {
                if (1 == q.j) return f = g.EO(a, b), h = g.EO(a, "downloadStatusEntity"), g.z(q, Z6(c, {
                    mode: "readonly",
                    Tb: !0
                }, function(r) {
                    return g.iD.all([S6(r, f, b), S6(r, h, "downloadStatusEntity")])
                }), 2);
                l = q.B;
                m = l.length ? l[0] : void 0;
                if (!m) return q.Ka(0);
                n = Dwb;
                if (p = 1 < l.length ? l[1] : void 0) {
                    if ("DOWNLOAD_STATE_USER_DELETED" === p.downloadState && !e) return q.return();
                    p.downloadState = d
                } else p = {
                    key: h,
                    downloadState: d
                };
                g.vF(m, n, p);
                return g.z(q, Z6(c, {
                    mode: "readwrite",
                    Tb: !0
                }, function(r) {
                    return g.iD.all([V6(r, m, b), V6(r, p, "downloadStatusEntity")])
                }), 0)
            })
        },
        q7 = function(a, b) {
            return a.actionType === b.actionType && a.entityKey === b.entityKey
        },
        r7 = function(a, b) {
            if (a && "TRANSFER_STATE_COMPLETE" !== a.transferState && "TRANSFER_STATE_FAILED" !==
                a.transferState) {
                var c = g.DO(a.key).entityId;
                k7({
                    transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_BY_USER",
                    statusType: "CANCELLED"
                }, {
                    videoId: c,
                    Bl: a,
                    offlineModeType: b
                })
            }
        },
        s7 = function(a) {
            if (!a || !a.thumbnails) return [];
            var b = [];
            a = g.u(a.thumbnails);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.url && b.push(c.url);
            return b
        },
        Ewb = function(a, b, c) {
            c = void 0 === c ? [] : c;
            var d, e, f, h, l, m, n, p, q, r, t, v, x;
            return g.H(function(A) {
                if (1 == A.j) return c.length ? g.z(A, b7(a, b), 2) : A.return([]);
                d = A.B;
                e = new Set;
                f = g.u(d);
                for (h = f.next(); !h.done; h = f.next())
                    if (l = h.value, m = l.id || l.key) n = g.DO(m).entityId, e.add(n);
                p = [];
                q = g.u(c);
                for (r = q.next(); !r.done; r = q.next()) t = r.value, v = t.offlineVideoData, x = void 0, (null == (x = v) ? 0 : x.videoId) && !e.has(v.videoId) && p.push(t);
                return A.return(p)
            })
        },
        Fwb = function(a, b, c) {
            return new g.TS(a, {
                cotn: b,
                raw_player_response: c,
                download_media: !0,
                start: Infinity,
                disable_watch_next: !0
            })
        },
        Gwb = function() {
            return {
                priority: 1,
                retryScheduleIntervalsInSeconds: [1, 2, 4]
            }
        },
        t7 = function(a, b, c, d, e, f, h, l, m, n, p) {
            this.entityType = a;
            this.actionId = b;
            this.action = c;
            this.parentActionId = d;
            this.rootActionId = void 0 === e ? b : e;
            this.childActionIds = f;
            this.prereqActionId = h;
            this.postreqActionIds = l;
            this.hasChildActionFailed = n;
            this.retryScheduleIndex = 0;
            this.j = p || Date.now();
            this.retryScheduleIndex = m || 0
        },
        u7 = function(a) {
            if (!a.key) throw Error("Entity key is required.");
            if (!a.actionProto) throw Error("OfflineOrchestrationAction is required.");
            var b = g.DO(a.key),
                c = g.DO(a.actionProto.entityKey);
            return new t7(c.entityType, b.entityId, a.actionProto, a.parentActionId, a.rootActionId, a.childActionIds, a.prereqActionId, a.postreqActionIds, a.retryScheduleIndex, a.hasChildActionFailed, 1E3 * Number(a.enqueueTimeSec))
        },
        v7 = function(a) {
            return {
                key: g.EO(a.actionId, "offlineOrchestrationActionWrapperEntity"),
                actionProto: a.action,
                parentActionId: a.parentActionId,
                rootActionId: a.rootActionId,
                childActionIds: a.childActionIds,
                prereqActionId: a.prereqActionId,
                postreqActionIds: a.postreqActionIds,
                retryScheduleIndex: a.retryScheduleIndex,
                hasChildActionFailed: a.hasChildActionFailed,
                enqueueTimeSec: (a.j / 1E3).toFixed()
            }
        },
        Hwb = function() {
            var a;
            return g.H(function(b) {
                return 1 == b.j ? g.z(b, rwb(), 2) : (a = b.B) ? b.return(a.delete("yt-player-local-img")) : b.return(!0)
            })
        },
        w7 = function(a) {
            var b, c;
            return g.H(function(d) {
                if (1 == d.j) return g.z(d, rwb(), 2);
                if (3 != d.j) {
                    b = d.B;
                    if (!b) throw Error("Cache API not supported");
                    return a.length ? g.z(d, b.open("yt-player-local-img"), 3) : d.return()
                }
                c = d.B;
                return g.z(d, Promise.all(a.map(function(e) {
                    return c.delete(e)
                })), 0)
            })
        },
        x7 = function(a) {
            var b, c;
            return g.H(function(d) {
                if (1 == d.j) return g.z(d, rwb(), 2);
                if (3 != d.j) {
                    b = d.B;
                    if (!b) throw Error("Cache API not supported");
                    return a.length ? g.z(d, b.open("yt-player-local-img"), 3) : d.return()
                }
                c = d.B;
                return g.z(d, c.addAll(a), 0)
            })
        },
        y7 = function(a, b, c, d, e) {
            var f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb;
            return g.H(function(Oa) {
                switch (Oa.j) {
                    case 1:
                        return f = g.EO(a, "mainVideoEntity"), h = g.EO(a, "ytMainChannelEntity"), l = g.EO(a, "transfer"), m = g.EO(a, "videoDownloadContextEntity"), g.z(Oa, Z6(b, {
                            mode: "readonly",
                            Tb: !0
                        }, function(Ua) {
                            return g.iD.all([S6(Ua, f, "mainVideoEntity"), S6(Ua, h, "ytMainChannelEntity"), S6(Ua, l, "transfer"), S6(Ua, m, "videoDownloadContextEntity"), T6(Ua, "ytMainChannelEntity"), T6(Ua, "offlineOrchestrationActionWrapperEntity")])
                        }), 2);
                    case 2:
                        n = Oa.B;
                        p = g.u(n);
                        q = p.next().value;
                        r = p.next().value;
                        t = p.next().value;
                        v = p.next().value;
                        x = p.next().value;
                        A = p.next().value;
                        E = q;
                        F = r;
                        G = t;
                        L = v;
                        Q = x;
                        R = A;
                        if (!E && !F) {
                            Oa.Ka(3);
                            break
                        }
                        aa = E ? s7(E.thumbnail) : [];
                        if (!F) {
                            na = [];
                            Oa.Ka(4);
                            break
                        }
                        return g.z(Oa, Iwb(F, Q), 5);
                    case 5:
                        na = Oa.B;
                    case 4:
                        return ta = na, g.z(Oa, w7(aa.concat(ta)), 3);
                    case 3:
                        la = [];
                        va = g.EO(a, "downloadStatusEntity");
                        ea = g.u(R);
                        for (Y = ea.next(); !Y.done; Y = ea.next()) Na = Y.value, y = g.DO(Na.key).entityId, ca = u7(Na), Ja = g.DO(ca.action.entityKey).entityId, y !== a && Ja !==
                            a || q7(c, Na.actionProto) || la.push(Na.key);
                        return g.z(Oa, Z6(b, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(Ua) {
                            var gb = la.map(function(qb) {
                                return W6(Ua, qb)
                            });
                            gb.push(W6(Ua, f, {
                                ev: !0
                            }));
                            gb.push(W6(Ua, va, {
                                ev: !0
                            }));
                            return g.iD.all(gb)
                        }), 7);
                    case 7:
                        nb = null == (cb = L) ? void 0 : cb.offlineModeType, e && (ywb(e), e.offlineModeType && (nb = e.offlineModeType)), r7(G, nb), i7(d, {
                            entityKey: f,
                            failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
                        }), g.Aa(Oa)
                }
            })
        },
        Lwb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb, Oa, Ua, gb, qb, rb, B, C, D, J, K, ba, sa, ia, M, X, ya, xa, Za;
            return g.H(function(Xa) {
                switch (Xa.j) {
                    case 1:
                        return e = g.EO(a, "mainPlaylistEntity"), f = g.EO(a, "ytMainChannelEntity"), g.z(Xa, Z6(b, {
                            mode: "readonly",
                            Tb: !0
                        }, function(wb) {
                            return g.iD.all([S6(wb, e, "mainPlaylistEntity"), S6(wb, f, "ytMainChannelEntity"), T6(wb, "mainPlaylistEntity"), T6(wb, "mainDownloadsListEntity"), T6(wb, "ytMainChannelEntity"), T6(wb, "offlineOrchestrationActionWrapperEntity")])
                        }), 2);
                    case 2:
                        h = Xa.B;
                        l = g.u(h);
                        m = l.next().value;
                        n = l.next().value;
                        p = l.next().value;
                        q = l.next().value;
                        r = l.next().value;
                        t = l.next().value;
                        v = m;
                        x = n;
                        A = p;
                        E = q;
                        F = r;
                        G = t;
                        if (!v && !x) {
                            Xa.Ka(3);
                            break
                        }
                        L = v ? Jwb(v) : [];
                        if (!x) {
                            Q = [];
                            Xa.Ka(4);
                            break
                        }
                        return g.z(Xa, Iwb(x, F), 5);
                    case 5:
                        Q = Xa.B;
                    case 4:
                        return R = Q, g.z(Xa, w7(L.concat(R)), 3);
                    case 3:
                        aa = [];
                        na = new Map;
                        if (!v) {
                            Xa.Ka(7);
                            break
                        }
                        return g.z(Xa, Kwb(v, A, E), 8);
                    case 8:
                        aa = Xa.B;
                        ta = g.u(aa);
                        for (la = ta.next(); !la.done; la = ta.next()) va = la.value, na.set(va, {
                            videoId: va,
                            playlistId: a,
                            offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_DELETE"
                        });
                        return g.z(Xa, Z6(b, {
                            mode: "readonly",
                            Tb: !0
                        }, function(wb) {
                            return g.iD.all([T6(wb, "transfer"), T6(wb, "videoDownloadContextEntity")])
                        }), 9);
                    case 9:
                        ea = Xa.B;
                        Y = g.u(ea);
                        Na = Y.next().value;
                        y = Y.next().value;
                        ca = Na;
                        Ja = y;
                        cb = g.u(ca);
                        for (nb = cb.next(); !nb.done; nb = cb.next()) Oa = nb.value, Ua = g.DO(Oa.key).entityId, (gb = na.get(Ua)) && Oa && (gb.cotn = Oa.cotn);
                        qb = g.u(Ja);
                        for (rb = qb.next(); !rb.done; rb = qb.next()) B = rb.value, C = g.DO(B.key).entityId, (D = na.get(C)) && B && (D.offlineModeType = B.offlineModeType);
                    case 7:
                        J = [];
                        K = g.u(G);
                        for (ba = K.next(); !ba.done; ba = K.next()) sa = ba.value, ia = g.DO(sa.key).entityId, M = u7(sa), ia !== a && M.rootActionId !== a || q7(c, sa.actionProto) || J.push(sa.key);
                        X = g.EO(a, "mainPlaylistEntity");
                        return g.z(Xa, Z6(b, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(wb) {
                            var Pb = J.map(function(db) {
                                return W6(wb, db)
                            });
                            Pb.push(W6(wb, X, {
                                ev: !0
                            }));
                            return g.iD.all(Pb)
                        }), 10);
                    case 10:
                        if (!v) {
                            Xa.Ka(0);
                            break
                        }
                        aa.reverse();
                        if (!aa) {
                            Xa.Ka(0);
                            break
                        }
                        ya = g.u(aa);
                        xa = ya.next();
                    case 13:
                        if (xa.done) {
                            Xa.Ka(0);
                            break
                        }
                        Za = xa.value;
                        return g.z(Xa, y7(Za, b, c, d, na.get(Za)), 14);
                    case 14:
                        xa = ya.next(), Xa.Ka(13)
                }
            })
        },
        Nwb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r;
            return g.H(function(t) {
                if (1 == t.j) return e = g.EO("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), f = new Map, g.z(t, Z6(a, {
                        mode: "readwrite",
                        Tb: !0
                    }, function(v) {
                        var x = T6(v, "transfer"),
                            A = T6(v, "offlineOrchestrationActionWrapperEntity"),
                            E = T6(v, "videoDownloadContextEntity"),
                            F = S6(v, e, "mainDownloadsListEntity");
                        return g.iD.all([x, A, E, F]).then(function(G) {
                            G = g.u(G);
                            var L = G.next().value,
                                Q = G.next().value,
                                R = G.next().value,
                                aa = G.next().value;
                            G = Mwb.map(function(va) {
                                return Gvb(v, va)
                            });
                            Q = g.u(Q);
                            for (var na = Q.next(); !na.done; na = Q.next()) {
                                na = na.value;
                                var ta = "mainVideoEntity" === g.DO(na.actionProto.entityKey).entityType,
                                    la = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === na.actionProto.actionType;
                                q7(b, na.actionProto) || ta && (!ta || la) || G.push(W6(v, na.key, {
                                    ev: !0
                                }))
                            }
                            aa && (aa.downloads = [], G.push(V6(v, aa, "mainDownloadsListEntity")));
                            if (R)
                                for (R = g.u(R), aa = R.next(); !aa.done; aa = R.next()) aa = aa.value, Q = g.DO(aa.key).entityId, Q = g.EO(Q, "transfer"), f.set(Q, aa.offlineModeType);
                            return g.iD.all(G).then(function() {
                                return L
                            })
                        })
                    }),
                    2);
                h = t.B;
                l = g.u(h);
                for (m = l.next(); !m.done; m = l.next()) n = m.value, r7(n, f.get(n.key)), p = g.DO(n.key).entityId, q = {
                    videoId: p,
                    offlineDeleteReason: d,
                    cotn: n.cotn,
                    offlineModeType: f.get(n.key)
                }, ywb(q), r = g.EO(p, "mainVideoEntity"), i7(c, {
                    entityKey: r,
                    failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
                });
                return g.z(t, Hwb(), 0)
            })
        },
        Jwb = function(a, b) {
            var c = [];
            if (a.thumbnailStyleData) {
                a = g.u(a.thumbnailStyleData);
                for (var d = a.next(); !d.done; d = a.next()) {
                    var e = void 0,
                        f = void 0,
                        h = void 0;
                    c = c.concat(s7(null == (e = d.value) ? void 0 : null == (f = e.value) ? void 0 : null == (h = f.collageThumbnail) ? void 0 : h.coverThumbnail))
                }
            }
            b = s7(b);
            return c.concat(b)
        },
        Kwb = function(a, b, c) {
            var d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta;
            return g.H(function(la) {
                d = [];
                e = new Set;
                if (c.length)
                    for (f = g.u(c), h = f.next(); !h.done; h = f.next())
                        if (l = h.value, m = void 0, null == (m = l.downloads) ? 0 : m.length)
                            for (n = g.u(l.downloads), p = n.next(); !p.done; p = n.next()) q = p.value, q.videoItem && (r = g.DO(q.videoItem).entityId, e.add(r));
                if (a.videos) {
                    t = g.u(a.videos);
                    for (v = t.next(); !v.done; v = t.next()) x = v.value, A = JSON.parse(g.DO(x).entityId), A.videoId && !e.has(A.videoId) && d.push(A.videoId);
                    E = g.u(b);
                    for (F = E.next(); !F.done; F = E.next())
                        if (G = F.value, G.key !== a.key && (L = G.videos))
                            for (Q =
                                g.u(L), R = Q.next(); !R.done; R = Q.next()) aa = R.value, na = JSON.parse(g.DO(aa).entityId), na.videoId && (ta = d.indexOf(na.videoId), -1 !== ta && d.splice(ta, 1))
                }
                return la.return(d)
            })
        },
        Iwb = function(a, b) {
            var c, d, e, f, h, l, m, n;
            return g.H(function(p) {
                c = s7(a.avatar);
                d = g.u(b);
                for (e = d.next(); !e.done; e = d.next())
                    if (f = e.value, f.id !== a.id)
                        for (h = g.u(s7(f.avatar)), l = h.next(); !l.done; l = h.next()) m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1);
                return p.return(c)
            })
        },
        Owb = function(a) {
            var b;
            return g.H(function(c) {
                b = g.U(a.frameworkUpdates, z7);
                return a.frameworkUpdates && b ? g.z(c, Uvb(b), 0) : c.return()
            })
        },
        Rwb = function(a) {
            var b;
            if (null != (b = a.onResponseReceivedActions) && b.length) {
                var c;
                a = null == (c = g.U(g.U(a.onResponseReceivedActions[0], Pwb), Qwb)) ? void 0 : c.actions;
                if (null != a && a.length) return a
            }
        },
        Twb = function(a, b) {
            var c;
            return g.H(function(d) {
                return 1 == d.j ? g.z(d, Swb(a, b), 2) : (c = d.B) ? g.z(d, Z6(a, {
                    mode: "readwrite",
                    Tb: !0
                }, function(e) {
                    var f = [V6(e, c.mainDownloadsLibraryEntity, "mainDownloadsLibraryEntity")];
                    c.mainDownloadsListEntity && f.push(V6(e, c.mainDownloadsListEntity, "mainDownloadsListEntity"));
                    return g.iD.all(f)
                }), 0) : d.Ka(0)
            })
        },
        Swb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G;
            return g.H(function(L) {
                if (1 == L.j) return c = g.EO("main_downloads_library_id", "mainDownloadsLibraryEntity"), d = g.EO("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(L, Z6(a, {
                    mode: "readonly",
                    Tb: !0
                }, function(Q) {
                    return g.iD.all([S6(Q, c, "mainDownloadsLibraryEntity"), S6(Q, d, "mainDownloadsListEntity")])
                }), 2);
                e = L.B;
                f = g.u(e);
                h = f.next().value;
                l = f.next().value;
                m = h;
                n = l;
                m || (m = {
                    id: c
                });
                p = g.u(b);
                for (q = p.next(); !q.done; q = p.next())
                    if (r = q.value, r === A7) {
                        if (m.smartDownloadsList) return L.return();
                        m.smartDownloadsList = r
                    } else if (t = g.DO(r).entityType, v = {}, "mainPlaylistEntity" === t ? v.playlistItem = r : "mainVideoEntity" === t && (v.videoItem = r), !g.md(v)) {
                    x = void 0;
                    if (null == (x = n) ? 0 : x.downloads) {
                        A = !1;
                        E = g.u(n.downloads);
                        for (F = E.next(); !F.done; F = E.next())
                            if (G = F.value, G.playlistItem === r || G.videoItem === r) {
                                A = !0;
                                break
                            }
                        A || n.downloads.push(v)
                    } else n = {
                        id: d,
                        downloads: [v]
                    };
                    m.downloadsList = d
                }
                return L.return({
                    mainDownloadsLibraryEntity: m,
                    mainDownloadsListEntity: n
                })
            })
        },
        Uwb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A;
            return g.H(function(E) {
                if (1 == E.j) return c = g.EO("main_downloads_library_id", "mainDownloadsLibraryEntity"), d = g.EO("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(E, Z6(a, {
                    mode: "readonly",
                    Tb: !0
                }, function(F) {
                    return g.iD.all([S6(F, c, "mainDownloadsLibraryEntity"), S6(F, d, "mainDownloadsListEntity"), S6(F, A7, "mainDownloadsListEntity")])
                }), 2);
                e = E.B;
                f = g.u(e);
                h = f.next().value;
                l = f.next().value;
                m = f.next().value;
                n = h;
                p = l;
                q = m;
                if (!n) return E.Ka(0);
                if (b === A7 && (null == (r = q) ? 0 : r.downloads)) q.downloads = [];
                else if (null == (t = p) ? 0 : t.downloads)
                    for (v = g.DO(b).entityType, x = 0; x < p.downloads.length; x++)
                        if (A = p.downloads[x], "mainVideoEntity" === v && A.videoItem === b) {
                            p.downloads.splice(x, 1);
                            break
                        } else if ("mainPlaylistEntity" === v && A.playlistItem === b) {
                    p.downloads.splice(x, 1);
                    break
                }
                return g.z(E, Z6(a, {
                    mode: "readwrite",
                    Tb: !0
                }, function(F) {
                    var G = [V6(F, n, "mainDownloadsLibraryEntity")];
                    p && G.push(V6(F, p, "mainDownloadsListEntity"));
                    q && G.push(V6(F, q, "mainDownloadsListEntity"));
                    return g.iD.all(G)
                }), 0)
            })
        },
        Vwb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r;
            return g.H(function(t) {
                if (1 == t.j) return c = g.EO(b, "transfer"), d = g.EO(b, "videoDownloadContextEntity"), g.z(t, Z6(a, {
                    mode: "readonly",
                    Tb: !0
                }, function(v) {
                    return g.iD.all([S6(v, c, "transfer"), S6(v, d, "videoDownloadContextEntity")])
                }), 2);
                e = t.B;
                f = g.u(e);
                h = f.next().value;
                l = f.next().value;
                m = h;
                n = l;
                r = {
                    videoId: b,
                    cotn: null == (p = m) ? void 0 : p.cotn,
                    offlineModeType: null == (q = n) ? void 0 : q.offlineModeType
                };
                return t.return(r)
            })
        },
        Xwb = function(a) {
            var b, c, d, e, f, h, l, m;
            return g.H(function(n) {
                switch (n.j) {
                    case 1:
                        return b = g.$H(), c = bwb(a), d = g.dH(Wwb), g.Ba(n, 2), f = {
                            zv: !0
                        }, g.z(n, g.RH(b, c, d, void 0, f), 4);
                    case 4:
                        e = n.B;
                        g.Ca(n, 3);
                        break;
                    case 2:
                        h = g.Da(n);
                        if (h instanceof g.YH) throw l = "GetOffline network manager error: " + h.message, g7(l, h), Error(l);
                        g7("GetOffline fetch request error", h);
                        throw Error("GetOffline fetch request error");
                    case 3:
                        m = B7(e);
                        if (!e) throw g7("Network request failed"), Error("Network request failed");
                        if (void 0 !== m) C7(m);
                        else if (!e.videos || !e.videos.length) throw g7("No data"),
                            Error("No data");
                        return n.return(e.videos.map(function(p) {
                            return p.offlineVideoData
                        }))
                }
            })
        },
        Ywb = function(a) {
            var b, c, d, e, f, h, l, m;
            return g.H(function(n) {
                switch (n.j) {
                    case 1:
                        return b = g.$H(), c = cwb(a), d = g.dH(Wwb), g.Ba(n, 2), f = {
                            zv: !0
                        }, g.z(n, g.RH(b, c, d, void 0, f), 4);
                    case 4:
                        e = n.B;
                        g.Ca(n, 3);
                        break;
                    case 2:
                        h = g.Da(n);
                        if (h instanceof g.YH) throw l = "GetOffline network manager error for playlist: " + h.message, g7(l, h), Error(l);
                        g7("GetOffline fetch request error for playlist", h);
                        throw Error("GetOffline fetch request error for playlist");
                    case 3:
                        m = B7(e);
                        if (!e) throw g7("Network request failed for playlist"), Error("Network request failed for playlist");
                        if (void 0 !== m) C7(m, "playlist");
                        else if (!e.playlists || !e.playlists.length) throw g7("No data for playlist"), Error("No data for playlist");
                        return n.return(e.playlists.map(function(p) {
                            return p.offlinePlaylistData
                        }))
                }
            })
        },
        $wb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja;
            return g.H(function(cb) {
                switch (cb.j) {
                    case 1:
                        return g.z(cb, c7(), 2);
                    case 2:
                        e = cb.B;
                        if (!e) return cb.return([]);
                        f = [];
                        if (null == (h = d) ? 0 : h.length) {
                            f = d;
                            cb.Ka(3);
                            break
                        }
                        return g.z(cb, b7(e, "mainPlaylistEntity"), 4);
                    case 4:
                        f = cb.B;
                    case 3:
                        if (!f.length) return cb.return([]);
                        l = [];
                        m = Date.now() / 1E3;
                        n = g.u(f);
                        p = n.next();
                    case 5:
                        if (p.done) return l.length ? g.z(cb, Zwb(l), 10) : cb.return([]);
                        q = p.value;
                        if (!q.downloadState) {
                            r = void 0;
                            cb.Ka(8);
                            break
                        }
                        return g.z(cb, a7(e, q.downloadState, "mainPlaylistDownloadStateEntity"), 9);
                    case 9:
                        r =
                            cb.B;
                    case 8:
                        t = r;
                        v = void 0;
                        A = (x = null == (v = q) ? void 0 : v.entityMetadata) && x.nextAutoRefreshIntervalSeconds ? Number(x.nextAutoRefreshIntervalSeconds) : NaN;
                        E = Number.isNaN(A) ? a : A;
                        G = F = void 0;
                        L = (null == (F = t) ? 0 : F.lastSyncedTimestampMillis) ? Number(null == (G = t) ? void 0 : G.lastSyncedTimestampMillis) / 1E3 : 0;
                        R = Q = void 0;
                        aa = (null == (Q = t) ? 0 : Q.addedTimestampMillis) ? Number(null == (R = t) ? void 0 : R.addedTimestampMillis) / 1E3 : 0;
                        if (c || !x || L + E <= m) {
                            na = [];
                            ta = void 0;
                            if (null == (ta = q.videos) ? 0 : ta.length)
                                for (la = g.u(q.videos), va = la.next(); !va.done; va =
                                    la.next()) ea = va.value, Y = JSON.parse(g.DO(ea).entityId), Y.videoId && na.push(Y.videoId);
                            Na = "0";
                            x && (y = void 0, Na = String(Number(null != (y = x.offlineLastModifiedTimestampSeconds) ? y : 0).toFixed()));
                            ca = {
                                playlistId: q.playlistId,
                                videoIds: na,
                                offlineLastModifiedTimestamp: Na,
                                autoSync: b,
                                offlineDateAddedTimestamp: String(aa.toFixed())
                            };
                            l.push(ca)
                        }
                        p = n.next();
                        cb.Ka(5);
                        break;
                    case 10:
                        return Ja = cb.B, cb.return(Ja)
                }
            })
        },
        axb = function() {
            var a, b, c, d, e;
            return g.H(function(f) {
                if (1 == f.j) return g.z(f, c7(), 2);
                if (3 != f.j) return (a = f.B) ? g.z(f, b7(a, "refresh"), 3) : f.return(!1);
                b = f.B;
                if (null == (c = b[0]) || !c.refreshTime) return f.return(!1);
                d = Number(b[0].refreshTime);
                e = Date.now() / 1E3;
                return f.return(isFinite(d) && e >= d)
            })
        },
        cxb = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                switch (f.j) {
                    case 1:
                        return g.Ba(f, 2), g.z(f, bxb(a, b), 4);
                    case 4:
                        return d = f.B, g.z(f, Owb(d), 5);
                    case 5:
                        c = Rwb(d);
                        g.Ca(f, 3);
                        break;
                    case 2:
                        e = g.Da(f), g7("getAndProcessSmartDownloadsResponse request or processing error", e);
                    case 3:
                        return f.return(c)
                }
            })
        },
        dxb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta;
            return g.H(function(la) {
                switch (la.j) {
                    case 1:
                        return g.z(la, c7(), 2);
                    case 2:
                        c = la.B;
                        if (!c) return la.return([]);
                        d = [];
                        if (null == (e = b) ? 0 : e.length) {
                            d = b;
                            la.Ka(3);
                            break
                        }
                        return g.z(la, b7(c, "musicPlaylist"), 4);
                    case 4:
                        d = la.B;
                    case 3:
                        if (!d.length) return la.return([]);
                        f = [];
                        Date.now();
                        h = g.u(d);
                        l = h.next();
                    case 5:
                        if (l.done) return f.length ? g.z(la, Zwb(f), 10) : la.return([]);
                        m = l.value;
                        n = void 0;
                        q = (p = null == (n = m) ? void 0 : n.entityMetadata) && p.nextAutoRefreshIntervalSeconds ? Number(p.nextAutoRefreshIntervalSeconds) : NaN;
                        Number.isNaN(q);
                        t = r = 0;
                        if (!m.downloadMetadata) {
                            la.Ka(8);
                            break
                        }
                        return g.z(la, a7(c, m.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 9);
                    case 9:
                        v = la.B, A = x = void 0, r = Number(null != (A = null == (x = v) ? void 0 : x.addedTimestampMillis) ? A : "0") / 1E3, F = E = void 0, t = Number(null != (F = null == (E = v) ? void 0 : E.lastModifiedTimestampMillis) ? F : "0") / 1E3;
                    case 8:
                        G = [];
                        L = void 0;
                        if (null == (L = m.tracks) ? 0 : L.length)
                            for (Q = g.u(m.tracks), R = Q.next(); !R.done; R = Q.next()) aa = R.value, G.push(g.DO(aa).entityId);
                        na = {
                            playlistId: m.playlistId,
                            videoIds: G,
                            offlineLastModifiedTimestamp: String(t.toFixed()),
                            autoSync: a,
                            offlineDateAddedTimestamp: String(r.toFixed())
                        };
                        f.push(na);
                        l = h.next();
                        la.Ka(5);
                        break;
                    case 10:
                        return ta = la.B, la.return(ta)
                }
            })
        },
        bxb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q;
            return g.H(function(r) {
                switch (r.j) {
                    case 1:
                        return c = g.$H(), g.z(r, c7(), 2);
                    case 2:
                        d = r.B;
                        if (!d) {
                            r.Ka(3);
                            break
                        }
                        return g.z(r, kwb(d), 4);
                    case 4:
                        e = r.B;
                    case 3:
                        var t = e;
                        f = {
                            context: g.bH(),
                            browseId: "FEdownloads",
                            browseRequestSupportedMetadata: {
                                downloadsBrowseParams: {
                                    offlineFeatureSettingState: {
                                        isSdEnabled: a
                                    },
                                    offlineClientState: t,
                                    clientStateRequestData: {
                                        preferredFormatType: b
                                    }
                                }
                            }
                        };
                        h = g.dH(exb);
                        g.Ba(r, 5);
                        m = {
                            zv: !0
                        };
                        return g.z(r, g.RH(c, f, h, void 0, m), 7);
                    case 7:
                        l = r.B;
                        g.Ca(r, 6);
                        break;
                    case 5:
                        n = g.Da(r);
                        if (n instanceof g.YH) throw p =
                            "DPS network manager error for smart downloads: " + n.message, g7(p, n), Error(p);
                        g7("DPS fetch request error for smart downloads", n);
                        throw Error("DPS fetch request error for smart downloads");
                    case 6:
                        q = B7(l);
                        if (l) void 0 !== q && C7(q, "smart downloads");
                        else throw g7("Network request failed for smart downloads"), Error("Network request failed for smart downloads");
                        return r.return(l)
                }
            })
        },
        B7 = function(a) {
            var b;
            return null == (b = a.errorMetadata) ? void 0 : b.status
        },
        C7 = function(a, b) {
            b = b ? " for " + b : "";
            if (0 === a) throw a = "Empty response body" + b, g7(a), Error(a);
            a = "Response with error" + b;
            g7(a);
            throw Error(a);
        },
        Zwb = function(a) {
            var b, c, d, e, f, h, l, m;
            return g.H(function(n) {
                switch (n.j) {
                    case 1:
                        return b = g.$H(), c = dwb(a), d = g.dH(fxb), g.Ba(n, 2), f = {
                            zv: !0
                        }, g.z(n, g.RH(b, c, d, void 0, f), 4);
                    case 4:
                        e = n.B;
                        g.Ca(n, 3);
                        break;
                    case 2:
                        h = g.Da(n);
                        if (h instanceof g.YH) throw l = "offlinePlaylistSyncCheck network manager error: " + h.message, g7(l, h), Error(l);
                        g7("offlinePlaylistSyncCheck fetch request error", h);
                        throw Error("offlinePlaylistSyncCheck fetch request error");
                    case 3:
                        m = B7(e);
                        if (!e) throw g7("Network request failed for playlist sync"), Error("Network request failed for playlist sync");
                        if (void 0 !== m) C7(m, "playlist sync");
                        else if (!e.offlinePlaylistSyncCheckDatas || !e.offlinePlaylistSyncCheckDatas.length) throw g7("No data for playlist sync"), Error("No data for playlist sync");
                        return n.return(e.offlinePlaylistSyncCheckDatas.map(function(p) {
                            return p.offlinePlaylistSyncCheckData
                        }))
                }
            })
        },
        D7 = function(a) {
            this.j = a
        },
        gxb = function(a, b) {
            var c, d, e, f, h, l;
            return g.H(function(m) {
                switch (m.j) {
                    case 1:
                        c = new Map, d = g.u(b), e = d.next();
                    case 2:
                        if (e.done) {
                            m.Ka(4);
                            break
                        }
                        f = e.value;
                        h = c;
                        l = h.set;
                        return g.z(m, a.B(f), 5);
                    case 5:
                        l.call(h, f, m.B);
                        e = d.next();
                        m.Ka(2);
                        break;
                    case 4:
                        return m.return(c)
                }
            })
        },
        E7 = function(a, b, c, d, e, f) {
            b = g.EO(b, c);
            d = Object.assign({}, f, {
                priority: d,
                retryScheduleIntervalsInSeconds: e
            });
            return {
                actionType: a,
                entityKey: b,
                actionMetadata: d
            }
        },
        F7 = function(a, b, c, d, e, f) {
            this.status = a;
            this.j = b;
            this.D = c;
            this.B = d;
            this.C = e;
            this.downloadState = f
        },
        hxb = function(a, b, c) {
            this.j = a;
            this.W = b;
            this.C = c
        },
        lxb = function(a, b) {
            var c, d, e, f, h, l, m, n, p;
            return g.H(function(q) {
                switch (q.j) {
                    case 1:
                        return c = b.entityKey, e = null == (d = g.U(b.actionMetadata, G7)) ? void 0 : d.isEnqueuedForExpiredStreamUrlRefetch, g.Ba(q, 2), f = void 0, g.z(q, ixb(a, b), 4);
                    case 4:
                        f = q.B;
                        var r = (r = g.U(b.actionMetadata, G7)) ? {
                            maximumDownloadQuality: r.maximumDownloadQuality
                        } : void 0;
                        return g.z(q, jxb(a, c, {
                            isEnqueuedForExpiredStreamUrlRefetch: e,
                            v1: r,
                            offlineSourceData: f
                        }), 5);
                    case 5:
                        return h = q.B, h && void 0 === B7(h) ? g.z(q, kxb(a, h, b), 6) : (l = l7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" :
                            "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", q.return(H7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", l, "DOWNLOAD_STATE_FAILED")));
                    case 6:
                        return q.return(H7(b, !0, h.orchestrationActions));
                    case 2:
                        return m = g.Da(q), n = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", p = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", m instanceof g.dD && "QUOTA_EXCEEDED" === m.type && (n = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", p = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                            g7("PDE handleAdd error"), q.return(H7(b, !1, void 0, n, p, "DOWNLOAD_STATE_FAILED"))
                }
            })
        },
        mxb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G;
            return g.H(function(L) {
                switch (L.j) {
                    case 1:
                        return c = b.entityKey, g.z(L, Z6(a.j, {
                            mode: "readonly",
                            Tb: !0
                        }, function(Q) {
                            var R = S6(Q, c, "playbackData"),
                                aa = S6(Q, g.EO(g.DO(b.entityKey).entityId, "offlineVideoPolicy"), "offlineVideoPolicy");
                            Q = S6(Q, g.EO(g.DO(b.entityKey).entityId, "transfer"), "transfer");
                            return g.iD.all([R, aa, Q])
                        }), 2);
                    case 2:
                        d = L.B;
                        e = g.u(d);
                        f = e.next().value;
                        h = e.next().value;
                        l = e.next().value;
                        m = f;
                        n = h;
                        p = l;
                        if (!m || !n) return L.return(H7(b, !0));
                        q = {
                            lastPlayerResponseTimestampSeconds: m.playerResponseTimestamp,
                            offlineToken: n.offlineToken
                        };
                        r = {};
                        if (null == (t = p) ? 0 : t.maximumDownloadQuality) r.maximumDownloadQuality = p.maximumDownloadQuality;
                        g.Ba(L, 3);
                        v = void 0;
                        return g.z(L, ixb(a, b), 5);
                    case 5:
                        return v = L.B, g.z(L, jxb(a, c, {
                            refreshData: q,
                            v1: r,
                            offlineSourceData: v
                        }), 6);
                    case 6:
                        return x = L.B, x && void 0 === B7(x) ? g.z(L, kxb(a, x, b), 7) : (A = l7(b) ?
                            "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", L.return(H7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", A, "DOWNLOAD_STATE_FAILED")));
                    case 7:
                        return L.return(H7(b, !0, x.orchestrationActions));
                    case 3:
                        return E = g.Da(L), F = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", G = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", E instanceof g.dD && "QUOTA_EXCEEDED" === E.type && (F = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                            G = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), L.return(H7(b, !1, void 0, F, G, "DOWNLOAD_STATE_FAILED"))
                }
            })
        },
        ixb = function(a, b) {
            var c, d, e, f;
            return g.H(function(h) {
                if (1 == h.j) return c = g.DO(b.entityKey).entityId, d = g.EO(c, "videoDownloadContextEntity"), g.z(h, a7(a.j, d, "videoDownloadContextEntity"), 2);
                e = h.B;
                return null != (f = e) && f.offlineModeType ? h.return({
                    offlineModeType: e.offlineModeType
                }) : h.return(void 0)
            })
        },
        jxb = function(a, b, c) {
            var d, e, f;
            return g.H(function(h) {
                d = g.$H();
                e = ewb(b, a.W, c.refreshData, c.isEnqueuedForExpiredStreamUrlRefetch, c.v1, c.offlineSourceData);
                f = g.dH(nxb);
                return h.return(g.RH(d, e, f).then(function(l) {
                    return l
                }))
            })
        },
        kxb = function(a, b, c) {
            var d, e, f, h, l;
            return g.H(function(m) {
                if (1 == m.j) {
                    if (!b.frameworkUpdates || !g.U(b.frameworkUpdates, z7)) return m.return();
                    if (!(g.U(b.frameworkUpdates, z7).mutations && 0 < g.U(b.frameworkUpdates, z7).mutations.length && "ENTITY_MUTATION_TYPE_DELETE" === g.U(b.frameworkUpdates, z7).mutations[0].type)) return m.Ka(2);
                    d = g.DO(g.U(b.frameworkUpdates, z7).mutations[0].entityKey).entityId;
                    return g.z(m, Vwb(a.j, d), 3)
                }
                if (2 != m.j) {
                    e = m.B;
                    f = g.U(c.actionMetadata, G7);
                    if (l = null == (h = f) ? void 0 : h.playlistId) e.playlistId = l;
                    e.offlineDeleteReason = "OFFLINE_DELETE_REASON_UNKNOWN";
                    return g.z(m, y7(d, a.j, c, a.C, e), 2)
                }
                return g.z(m, Uvb(g.U(b.frameworkUpdates, z7)), 0)
            })
        },
        H7 = function(a, b, c, d, e, f) {
            for (var h = l7(a), l = g.u(c || []), m = l.next(); !m.done; m = l.next())
                if (m = m.value, m.actionMetadata) {
                    var n = void 0;
                    m.actionMetadata.priority = (null == (n = a.actionMetadata) ? void 0 : n.priority) || 1
                }
            return new F7(b ? "OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" : "OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", h, c, d, e, f)
        },
        oxb = function(a, b) {
            this.j = a;
            this.W = b
        },
        qxb = function(a, b) {
            var c, d, e, f, h, l, m;
            return g.H(function(n) {
                switch (n.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey).entityId, g.z(n, a7(a.j, b.entityKey, "videoPlaybackPositionEntity"), 2);
                    case 2:
                        e = n.B;
                        if (!e || d !== e.videoId) return n.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        g.Ba(n, 3);
                        f = g.U(b.actionMetadata, pxb);
                        if (null == (h = f) || !h.lastPlaybackPositionSeconds || (null == (l = f) ? void 0 : l.lastPlaybackPositionSeconds) === (null == (m = e) ? void 0 : m.lastPlaybackPositionSeconds)) {
                            n.Ka(5);
                            break
                        }
                        e.lastPlaybackPositionSeconds = f.lastPlaybackPositionSeconds;
                        return g.z(n, $6(a.j, e, "videoPlaybackPositionEntity"), 5);
                    case 5:
                        g.Ca(n, 4);
                        break;
                    case 3:
                        return g.Da(n), n.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 4:
                        return n.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        },
        rxb = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                switch (f.j) {
                    case 1:
                        c = l7(b);
                        g.Ba(f, 2);
                        d = g.DO(b.entityKey).entityId;
                        if ("!*$_ALL_ENTITIES_!*$" === d) return g.z(f, Pvb(a.j), 5);
                        e = g.EO(d, "videoPlaybackPositionEntity");
                        return g.z(f, Ovb(a.j, e), 5);
                    case 5:
                        g.Ca(f, 3);
                        break;
                    case 2:
                        return g.Da(f), f.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 3:
                        return f.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c))
                }
            })
        },
        sxb = function(a, b) {
            this.j = a;
            this.W = b
        },
        uxb = function(a, b) {
            var c, d;
            return g.H(function(e) {
                switch (e.j) {
                    case 1:
                        return c = l7(b), g.z(e, a7(a.j, b.entityKey, "transfer"), 2);
                    case 2:
                        if (d = e.B) return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        g.Ba(e, 3);
                        return g.z(e, txb(a, b), 5);
                    case 5:
                        g.Ca(e, 4);
                        break;
                    case 3:
                        return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 4:
                        return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c))
                }
            })
        },
        vxb = function(a, b) {
            var c, d;
            return g.H(function(e) {
                switch (e.j) {
                    case 1:
                        return c = l7(b), g.z(e, a7(a.j, b.entityKey, "transfer"), 2);
                    case 2:
                        d = e.B;
                        if (!d || "TRANSFER_STATE_COMPLETE" !== d.transferState) return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        g.Ba(e, 3);
                        return g.z(e, txb(a, b, !0), 5);
                    case 5:
                        g.Ca(e, 4);
                        break;
                    case 3:
                        return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 4:
                        return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        },
        wxb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q;
            return g.H(function(r) {
                switch (r.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey).entityId, g.z(r, Z6(a.j, {
                            mode: "readonly",
                            Tb: !0
                        }, function(t) {
                            var v = S6(t, b.entityKey, "transfer");
                            t = S6(t, g.EO(d, "videoDownloadContextEntity"), "videoDownloadContextEntity");
                            return g.iD.all([v, t])
                        }), 2);
                    case 2:
                        e = r.B;
                        f = g.u(e);
                        h = f.next().value;
                        l = f.next().value;
                        m = h;
                        n = l;
                        if (!m || "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH" !== m.transferState) return r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        g.Ba(r, 3);
                        m.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE";
                        return g.z(r, $6(a.j, m, "transfer"), 5);
                    case 5:
                        p = g.DO(m.key).entityId;
                        k7({
                            transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_PLAYER_RESPONSE_REFRESH"
                        }, {
                            videoId: p,
                            Bl: m,
                            offlineModeType: null == (q = n) ? void 0 : q.offlineModeType
                        });
                        g.Ca(r,
                            4);
                        break;
                    case 3:
                        return g.Da(r), r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 4:
                        return r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        },
        txb = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d, e, f, h, l, m, n, p, q, r, t, v, x, A, E;
            return g.H(function(F) {
                if (1 == F.j) return d = g.U(b.actionMetadata, xxb), e = g.DO(b.entityKey).entityId, f = g.EO(e, "downloadStatusEntity"), g.z(F, Z6(a.j, {
                    mode: "readonly",
                    Tb: !0
                }, function(G) {
                    var L = S6(G, f, "downloadStatusEntity");
                    G = S6(G, g.EO(e, "videoDownloadContextEntity"), "videoDownloadContextEntity");
                    return g.iD.all([L, G])
                }), 2);
                if (3 != F.j) return h = F.B, l = g.u(h), m = l.next().value, n = l.next().value, p = m, q = n, r = "TRANSFER_STATE_TRANSFER_IN_QUEUE", "DOWNLOAD_STATE_USER_DELETED" === (null == (t = p) ? void 0 : t.downloadState) && (r = "TRANSFER_STATE_PAUSED_BY_USER"), A = {
                    key: b.entityKey,
                    transferState: r,
                    cotn: g.BE(16),
                    enqueuedTimestampMs: Date.now().toString(),
                    maximumDownloadQuality: null == (v = d) ? void 0 : v.maximumDownloadQuality,
                    preferredAudioTrack: null == (x = d) ? void 0 : x.preferredAudioTrack,
                    transferRetryCount: 0,
                    isRefresh: c,
                    hasLoggedFirstStarted: !1
                }, g.z(F,
                    Z6(a.j, {
                        mode: "readwrite",
                        Tb: !0
                    }, function(G) {
                        var L = [];
                        c && L.push(W6(G, g.EO(e, "offlineVideoStreams")));
                        L.push(V6(G, A, "transfer"));
                        return g.iD.all(L)
                    }), 3);
                k7({
                    transferStatusType: "TRANSFER_STATUS_TYPE_ENQUEUED",
                    statusType: "ADDED_TO_QUEUE"
                }, {
                    videoId: e,
                    Bl: A,
                    offlineModeType: null == (E = q) ? void 0 : E.offlineModeType
                });
                g.Aa(F)
            })
        },
        zxb = function(a, b, c, d) {
            if (!a.action.entityKey) throw Error("entityKey is missing.");
            var e = g.DO(a.action.entityKey);
            e = {
                entityType: e.M6,
                entityId: e.entityId,
                offlineOrchestrationActionType: a.action.actionType,
                orchestrationAction: {
                    orchestrationActionId: a.actionId
                }
            };
            b && (e.offlineOrchestrationActionResult = b.status, e.isRetryable = c ? !1 : b.j, b.C && (e.offlineOrchestrationFailureReason = yxb(b.C, e.isRetryable)));
            var f, h;
            if (null == (f = a.action.actionMetadata) ? 0 : null == (h = f.offlineLoggingData) ? 0 : h.offlineModeType) e.offlineModeType = a.action.actionMetadata.offlineLoggingData.offlineModeType;
            d && (e.additionalOrchestrationActions =
                d.map(function(l) {
                    return {
                        orchestrationActionId: l.actionId
                    }
                }));
            return e
        },
        yxb = function(a, b) {
            return "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" !== a || b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR" === a && b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : a : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR"
        },
        Axb = function(a, b) {
            var c = {
                offlineOrchestrationContext: zxb(a)
            };
            b = iwb(b, c);
            jwb(hwb(), b, a.rootActionId)
        },
        Bxb = function(a, b, c, d) {
            d = void 0 === d ? [] : d;
            b = {
                offlineOrchestrationContext: zxb(a, b, c, d)
            };
            b = iwb(3, b);
            jwb(hwb(), b, a.rootActionId)
        },
        Cxb = function() {
            this.actions = []
        },
        Dxb = function(a, b) {
            b = g.u(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, Axb(c, 1), a.actions.push(c);
            a.actions.sort(a.j)
        },
        Exb = function(a, b) {
            if (b)
                for (var c = 0; c < a.actions.length; c++) a.actions[c].rootActionId === b && a.actions[c].actionId !== b && (a.actions.splice(c, 1), c--)
        },
        Fxb = function(a, b) {
            a = g.u(a.actions);
            for (var c = a.next(); !c.done; c = a.next())
                if (c.value.actionId === b) return !0;
            return !1
        },
        I7 = function(a, b, c, d, e) {
            g.I.call(this);
            var f = this;
            this.B = a;
            this.Ca = b;
            this.ma = c;
            this.N = d;
            this.W = e;
            this.j = new Cxb;
            this.K = new g.jE;
            this.C = new g.Ru(function() {
                f.retry()
            });
            this.Z = NaN;
            this.G = !1;
            this.Cd = {
                vnb: function() {
                    return f.j
                },
                iX: function() {
                    return f.K
                },
                Anb: function() {
                    return f.C
                },
                retry: function() {
                    return f.retry()
                }
            };
            g.N(this, this.C);
            this.Y = Mvb(this.B, this.va.bind(this))
        },
        Ixb = function(a, b, c, d, e) {
            var f;
            return g.H(function(h) {
                if (1 == h.j) return f = new I7(a, b, c, d, e), g.z(h, Gxb(f), 2);
                Hxb(f);
                return h.return(f)
            })
        },
        Hxb = function(a) {
            var b = a.j.actions[0];
            return a.D ? ("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === (null == b ? void 0 : b.action.actionType) && "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" !== a.D[0].action.actionType && (a.G = !0), Promise.resolve()) : Jxb(a)
        },
        Jxb = function(a) {
            var b, c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E;
            return g.H(function(F) {
                switch (F.j) {
                    case 1:
                        if (a.D) throw Error("Already processing an action");
                        if (a.isDisposed()) return F.return();
                        b = a.j.actions.shift();
                        wwb(a.ma, !b);
                        if (void 0 === b) return F.return();
                        "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === b.action.actionType && "DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS" === b.actionId && Exb(a.j, b.actionId);
                        c = "";
                        "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === b.action.actionType && b.rootActionId === b.actionId && (c = b.actionId);
                        d = [b];
                        a.D = d;
                        if (e = a.Ca[b.entityType]) {
                            F.Ka(2);
                            break
                        }
                        a.D =
                            void 0;
                        return g.z(F, Jxb(a), 3);
                    case 3:
                        return F.return();
                    case 2:
                        f = g.u(d);
                        for (h = f.next(); !h.done; h = f.next()) l = h.value, Axb(l, 2);
                        g.Ba(F, 4, 5);
                        return g.z(F, gxb(e, d.map(function(G) {
                            return G.action
                        })), 7);
                    case 7:
                        m = F.B, n = g.u(d), p = n.next();
                    case 8:
                        if (p.done) {
                            F.Ka(10);
                            break
                        }
                        q = p.value;
                        r = m.get(q.action);
                        return g.z(F, Kxb(a, q, r), 9);
                    case 9:
                        p = n.next();
                        F.Ka(8);
                        break;
                    case 10:
                        Exb(a.j, c);
                    case 5:
                        g.Ea(F);
                        a.D = void 0;
                        g.Fa(F, 6);
                        break;
                    case 4:
                        return t = g.Da(F), g7("Orchestration error", t), g.Ba(F, 12), g.z(F, Lxb(a, d), 14);
                    case 14:
                        g.Ca(F, 5);
                        break;
                    case 12:
                        v = g.Da(F);
                        g7("Orchestration retry error", v);
                        x = g.u(d);
                        for (A = x.next(); !A.done; A = x.next()) E = A.value, 3 > E.retryScheduleIndex && Dxb(a.j, [E]);
                        F.Ka(5);
                        break;
                    case 6:
                        return g.z(F, Jxb(a),
                            0)
                }
            })
        },
        Kxb = function(a, b, c) {
            var d, e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function(x) {
                switch (x.j) {
                    case 1:
                        d = 3 === b.retryScheduleIndex + 2;
                        if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" === c.status) {
                            x.Ka(2);
                            break
                        }
                        if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE" !== c.status) {
                            x.Ka(0);
                            break
                        }
                        Bxb(b, c, d);
                        if (c.j && 3 > b.retryScheduleIndex + 1) return g.z(x, Lxb(a, [b]), 0);
                        f = (null == (e = c) ? 0 : e.B) ? c.B : "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN";
                        h = {
                            entityKey: b.action.entityKey,
                            failureReason: f
                        };
                        l = void 0;
                        g.gS(a.W) ? l = "mainVideoDownloadStateEntity" : g.VG(a.W) && (l = "musicTrackDownloadMetadataEntity");
                        if (!l || !c.downloadState) {
                            x.Ka(7);
                            break
                        }
                        m = g.DO(b.action.entityKey).entityId;
                        return g.z(x, p7(m, l, a.B, c.downloadState), 7);
                    case 7:
                        return i7(a.N, h), g7("Orchestration result is not retryable, deleting action"), g.z(x, Ovb(a.B, v7(b).key), 0);
                    case 2:
                        n = void 0;
                        try {
                            n = null == (p = c.D) ? void 0 : p.map(function(A) {
                                return a.createAction(A, b)
                            })
                        } catch (A) {
                            return Bxb(b, c, d), q = {
                                entityKey: b.action.entityKey,
                                failureReason: "OFFLINE_OPERATION_FAILURE_REASON_UNSUPPORTED_ENTITY_FAILED"
                            }, i7(a.N, q), g7("Orchestration subactions creation error", A), x.return()
                        }
                        Bxb(b, c, d, n);
                        if (!n) {
                            x.Ka(11);
                            break
                        }
                        r = n.map(function(A) {
                            return v7(A)
                        });
                        t = 0;
                    case 12:
                        if (!(t < n.length) || a.G) {
                            x.Ka(14);
                            break
                        }
                        return g.z(x, Z6(a.B, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(A) {
                            var E = [];
                            E.push(Dvb(A, r.slice(t, t + 10), "offlineOrchestrationActionWrapperEntity"));
                            return g.iD.all(E)
                        }), 15);
                    case 15:
                        t += 10;
                        x.Ka(12);
                        break;
                    case 14:
                        if (a.G) return a.G = !1, x.return();
                    case 11:
                        return v = v7(b), g.z(x, Ovb(a.B, v.key), 16);
                    case 16:
                        Axb(b, 4), g.Aa(x)
                }
            })
        },
        Pxb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t;
            return g.H(function(v) {
                c = [];
                d = Infinity;
                e = 4E3;
                f = g.u(b);
                for (h = f.next(); !h.done; h = f.next()) l = h.value, m = Number(l.enqueueTimeSec), n = Mxb(m), p = l.retryScheduleIndex, q = null != p && 0 < p, 0 < n && q ? (d = Math.min(d, m), e = Math.min(n, e)) : c.push(l);
                isFinite(d) && (!a.C.isActive() || d < a.Z) && (a.Z = d, a.C.start(e));
                a.K.Uh() || (r = c.length, c = c.filter(function(x) {
                    var A;
                    x = (null == (A = x.actionProto) ? void 0 : A.actionType) || "OFFLINE_ORCHESTRATION_ACTION_TYPE_UNKNOWN";
                    return !Nxb.includes(x)
                }), t = c.length < r, !a.C.isActive() && t && a.C.start(1));
                0 < c.length && Oxb(a, c);
                return g.z(v, Hxb(a), 0)
            })
        },
        Rxb = function(a) {
            var b, c, d, e, f, h, l;
            return g.H(function(m) {
                if (1 == m.j) return g.z(m, Qxb(a), 2);
                b = m.B;
                c = [];
                d = g.u(b);
                for (e = d.next(); !e.done; e = d.next()) f = e.value, h = g.DO(f.key), l = h.entityId, Fxb(a.j, l) || c.push(f);
                return g.z(m, Pxb(a, c), 0)
            })
        },
        Mxb = function(a) {
            a = 1E3 * a - Date.now();
            return 4E3 < a ? 4E3 : a
        },
        Lxb = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                c = g.u(b);
                for (d = c.next(); !d.done; d = c.next()) {
                    e = d.value;
                    var h = void 0,
                        l = void 0,
                        m = (null == (l = e.action) ? void 0 : null == (h = l.actionMetadata) ? void 0 : h.retryScheduleIntervalsInSeconds) || [1, 2, 4];
                    h = 1;
                    e.retryScheduleIndex < m.length && (h = m[e.retryScheduleIndex]);
                    e.j = 1E3 * h + Date.now();
                    e.retryScheduleIndex++
                }
                return g.z(f, Sxb(a, b), 0)
            })
        },
        Gxb = function(a) {
            var b;
            return g.H(function(c) {
                if (1 == c.j) return g.z(c, b7(a.B, "offlineOrchestrationActionWrapperEntity"), 2);
                b = c.B;
                return g.z(c, Pxb(a, b), 0)
            })
        },
        Oxb = function(a, b) {
            0 !== b.length && b.forEach(function(c) {
                c = u7(c);
                3 > c.retryScheduleIndex && Dxb(a.j, [c])
            })
        },
        Qxb = function(a, b) {
            var c;
            return g.H(function(d) {
                if (1 == d.j) return g.z(d, b7(a.B, "offlineOrchestrationActionWrapperEntity", b), 2);
                c = d.B;
                return d.return(c.filter(Vvb))
            })
        },
        Sxb = function(a, b) {
            if (0 === b.length) return Promise.resolve([]);
            b = b.map(function(c) {
                return v7(c)
            });
            return Nvb(a.B, b)
        },
        Txb = function() {
            this.j = void 0
        },
        Vxb = function(a, b) {
            var c, d, e, f, h;
            return g.H(function(l) {
                c = b.videoId;
                d = b.U();
                e = !0;
                if (b.captionTracks.length) f = Mtb(b), a.j = new g.RV(d, b, f);
                else if (b.Yd) h = g.ZTa(b), a.j = new g.VV(d, b.Yd, c, h, b.Qm, b.eventId), e = b.Qm;
                else return l.return();
                return l.return(new Promise(function(m) {
                    var n;
                    null == (n = a.j) || n.lA(function() {
                        return g.H(function(p) {
                            if (1 == p.j) return g.z(p, Uxb(a, c, e), 2);
                            m();
                            g.Aa(p)
                        })
                    })
                }))
            })
        },
        Uxb = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d, e, f, h, l, m, n, p;
            return g.H(function(q) {
                switch (q.j) {
                    case 1:
                        if (!a.j) return q.return();
                        d = [];
                        e = g.OV(a.j.B, c);
                        f = [];
                        for (h = {
                                Uz: 0
                            }; h.Uz < e.length; h = {
                                Uz: h.Uz
                            }, h.Uz++) l = e[h.Uz], m = a.j.Kv(l, "json3"), n = g.PB(m, {
                            withCredentials: !0,
                            format: "RAW"
                        }, 3, 500).then(function(r) {
                            return function(t) {
                                t = {
                                    metadata: g.wS(e[r.Uz]),
                                    trackData: t.xhr.responseText
                                };
                                f.push(t)
                            }
                        }(h)).Al(function(r) {
                            g7("Caption fetch error", r)
                        }), d.push(n);
                        return g.z(q, Ntb(d), 2);
                    case 2:
                        return g.Ba(q, 3), g.z(q, Zvb(b, f), 5);
                    case 5:
                        g.Ca(q, 0);
                        break;
                    case 3:
                        p = g.Da(q), g7("Caption DB transaction error", p), g.Aa(q)
                }
            })
        },
        Wxb = function(a) {
            var b;
            return g.H(function(c) {
                if (1 == c.j) return g.z(c, $vb(a), 2);
                b = c.B;
                return c.return(!!b && 0 < b.length)
            })
        },
        Xxb = function(a, b) {
            this.api = a;
            this.j = b;
            this.logger = new g.qU("woffle");
            this.B = !1;
            this.Cd = {
                kO: this.kO
            };
            this.logger.debug("Initialized OfflineMediaManager")
        },
        Yxb = function(a) {
            return g.H(function(b) {
                return b.return(awb(a))
            })
        },
        Zxb = function(a) {
            var b;
            return g.H(function(c) {
                if (1 == c.j) return g.z(c, g.ySa(a), 2);
                b = c.B;
                return c.return(b.filter(function(d) {
                    return !!d.url
                }).map(function(d) {
                    return d.url
                }))
            })
        },
        J7 = function(a, b) {
            var c = g.HS(b);
            if (1 === c || 0 === c) return Promise.resolve();
            (c = $xb(a, b)) && c.stopVideo();
            a.C = 0;
            return Yxb(b)
        },
        K7 = function(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !0 : d;
            var e = "string" === typeof b ? b : b.videoDetails.videoId;
            2 === g.HS(e) && ((b = $xb(a, e)) ? b.stopVideo() : a.logger.info(function() {
                return "Corresponding player for " + e + " not found. Pausing anyway"
            }), g.IS(e, 2), a.C = 2, c ? ayb(a.j) : d && byb(a.j))
        },
        $xb = function(a, b) {
            var c;
            return (null == (c = a.player) ? void 0 : c.getVideoData().videoId) === b ? a.player : null
        },
        cyb = function(a, b, c) {
            b.getPlayerResponse();
            g.IS(b.videoId, 2);
            a.C = 2;
            a.B = !1;
            var d;
            null == (d = a.player) || d.dispose();
            a.player = a.api.mz(9, b);
            b = {};
            g.JF(a.player, (b.localmediachange = a.LJ, b.signatureexpired = a.yQ, b.statechange = a.k$, b), a);
            var e = a.kO(c);
            g.Dcb(a.player, g.qP(e, e, !0, "m"), !1);
            a.logger.debug(function() {
                return "Starting headless playback with quality: " + e
            });
            g.yY(a.player, !1)
        },
        L7 = function(a) {
            g.I.call(this);
            this.j = a;
            this.B = Mvb(this.j, this.C.bind(this))
        },
        dyb = function(a, b) {
            var c, d, e, f, h, l, m;
            return g.H(function(n) {
                switch (n.j) {
                    case 1:
                        if (0 === b.length) return n.return([]);
                        c = b.map(function(p) {
                            return g.EO(p, "transfer")
                        });
                        return g.z(n, b7(a.j, "transfer", c), 2);
                    case 2:
                        d = n.B;
                        e = d.filter(Vvb).map(function(p) {
                            return g.DO(p.key).entityId
                        });
                        f = b.filter(function(p) {
                            return -1 === e.indexOf(p)
                        });
                        if (0 === f.length) return n.return([]);
                        h = g.u(f);
                        l = h.next();
                    case 3:
                        if (l.done) {
                            n.Ka(5);
                            break
                        }
                        m = l.value;
                        return g.z(n, Yxb(m), 4);
                    case 4:
                        l = h.next();
                        n.Ka(3);
                        break;
                    case 5:
                        return n.return(f)
                }
            })
        },
        gyb = function(a, b, c, d, e, f) {
            var h, l, m;
            return g.H(function(n) {
                h = "STREAM_TYPE_UNKNOWN";
                c.video && c.audio ? (h = "STREAM_TYPE_AUDIO_AND_VIDEO", g7("unexpected stream type")) : c.video && !c.audio ? h = "STREAM_TYPE_VIDEO" : !c.video && c.audio && (h = "STREAM_TYPE_AUDIO");
                l = g.EO(b, "offlineVideoStreams");
                m = {
                    numBytesDownloaded: e.toFixed(),
                    numTotalBytes: f.toFixed(),
                    streamType: h,
                    streamState: "DOWNLOAD_STREAM_STATE_IN_PROGRESS",
                    formatStreamBytes: JSON.stringify(d),
                    itag: "STREAM_TYPE_AUDIO_AND_VIDEO" === h ? Number(c.itag) : void 0
                };
                return g.z(n, Z6(a, {
                        mode: "readwrite",
                        Tb: !0
                    },
                    function(p) {
                        var q = S6(p, l, "offlineVideoStreams"),
                            r = S6(p, g.EO(b, "transfer"), "transfer");
                        return g.iD.all([q, r]).then(function(t) {
                            t = g.u(t);
                            var v = t.next().value;
                            t = t.next().value;
                            if (!t) return W6(p, l).then(function() {});
                            var x = eyb(v);
                            v = fyb(v, d, m, l);
                            var A = V6(p, v, "offlineVideoStreams");
                            eyb(v) > x && (t.lastProgressTimeMs = Date.now().toString());
                            x = [A];
                            t.offlineVideoStreams || (t.offlineVideoStreams = []); - 1 === t.offlineVideoStreams.indexOf(l) && (t.offlineVideoStreams.push(l), x.push(V6(p, t, "transfer")));
                            return g.iD.all(x)
                        })
                    }), 0)
            })
        },
        hyb = function(a, b) {
            var c, d, e, f, h;
            return g.H(function(l) {
                if (1 == l.j) return c = g.EO(b, "offlineVideoStreams"), g.z(l, a7(a, c, "offlineVideoStreams"), 2);
                d = l.B;
                if (!d || !d.streamsProgress) return l.return();
                e = g.u(d.streamsProgress);
                for (f = e.next(); !f.done; f = e.next()) h = f.value, h.streamState = "DOWNLOAD_STREAM_STATE_COMPLETE", h.numTotalBytes !== h.numBytesDownloaded && (h.numBytesDownloaded = h.numTotalBytes);
                return g.z(l, $6(a, d, "offlineVideoStreams"), 0)
            })
        },
        fyb = function(a, b, c, d) {
            if (a && a.streamsProgress) {
                d = a;
                a: {
                    b = b.itag + ";" + b.xtags;
                    for (var e = a.streamsProgress, f = 0; f < e.length; f++) {
                        var h = JSON.parse(e[f].formatStreamBytes);
                        if (h.itag + ";" + h.xtags === b) {
                            e[f] = c;
                            c = e;
                            break a
                        }
                    }
                    e.push(c);c = e
                }
                d.streamsProgress = c
            } else a = {
                key: d,
                streamsProgress: [c]
            };
            return a
        },
        eyb = function(a) {
            if (null == a ? 0 : a.streamsProgress) {
                var b = 0;
                a = a.streamsProgress;
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    isNaN(Number(d.numBytesDownloaded)) ? g7("stream progress bytes number invalid") : b += Number(d.numBytesDownloaded)
                }
                return b
            }
            return 0
        },
        iyb = function(a, b, c, d) {
            g.I.call(this);
            var e = this;
            this.B = a;
            this.api = b;
            this.Wa = c;
            this.va = d;
            this.K = new g.jE;
            this.D = new g.Ru(function() {
                e.j && "TRANSFER_STATE_TRANSFERRING" === e.j.transferState && e.K.Uh() && (3 > (e.j.transferRetryCount || 0) ? K7(e.N, e.G, !1, !1) : J7(e.N, e.G.videoDetails.videoId), e.Qw("TRANSFER_FAILURE_REASON_TIMEOUT_NO_PROGRESS"))
            });
            this.ma = this.Ea = 0;
            this.Xa = g.gJ(this.api.U().experiments, "html5_transfer_processing_logs_interval");
            this.Z = !1;
            this.Ra = new g.DK(this);
            this.Y = !1;
            this.Cd = {
                Enb: function() {
                    return e.D
                },
                onb: function() {
                    return e.va
                },
                iX: function() {
                    return e.K
                }
            };
            this.Ca = Mvb(this.B, this.f3.bind(this));
            this.N = new Xxb(b, this);
            this.eb = new Txb;
            this.Ia = new L7(this.B);
            this.Na = this.K.Ta("publicytnetworkstatus-online", this.KF.bind(this));
            this.Ma = this.K.Ta("publicytnetworkstatus-offline", this.vba.bind(this));
            this.Y = this.api.U().L("html5_less_transfer_processing_logs");
            g.N(this, this.Ra);
            this.Ra.T(b, "offlinetransferpause", this.wba);
            g.gS(this.api.U()) ? this.C = "mainVideoDownloadStateEntity" : g.VG(this.api.U()) && (this.C = "musicTrackDownloadMetadataEntity")
        },
        jyb = function(a) {
            return g.H(function(b) {
                if (1 ==
                    b.j) b = g.z(b, Yvb(), 2);
                else {
                    var c = a.Ia;
                    var d = g.GS();
                    d = Object.keys(d);
                    c = dyb(c, d);
                    b = g.z(b, c, 0)
                }
                return b
            })
        },
        N7 = function(a, b) {
            b = void 0 === b ? !1 : b;
            var c;
            return g.H(function(d) {
                if (1 == d.j) {
                    if (a.j) throw Error("Already downloading a video");
                    a.ma = 0;
                    a.Z = !1;
                    return g.z(d, kyb(a), 2)
                }
                return 4 != d.j ? (c = d.B, xwb(a.Wa, !c), c && a.K.Uh() ? b ? g.z(d, new Promise(function(e) {
                    g.GB(e, 1E3)
                }), 4) : d.Ka(4) : (!c && a.j && M7(a), d.Ka(0))) : g.z(d, lyb(a, c), 0)
            })
        },
        myb = function(a) {
            return g.H(function(b) {
                if (1 == b.j) return a.G ? g.z(b, J7(a.N, a.G.videoDetails.videoId), 3) : b.Ka(0);
                M7(a);
                g.Aa(b)
            })
        },
        nyb = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                switch (f.j) {
                    case 1:
                        return g.Ba(f, 2), (c = !!b.captionTracks.length || !!b.Yd) ? g.z(f, Wxb(b.videoId), 4) : f.return();
                    case 4:
                        return (d = f.B) ? f.return() : g.z(f, Vxb(a.eb, b), 5);
                    case 5:
                        g.Ca(f, 0);
                        break;
                    case 2:
                        e = g.Da(f), g7("Caption downloading error", e, b.cotn), g.Aa(f)
                }
            })
        },
        lyb = function(a, b) {
            var c, d, e, f, h, l;
            return g.H(function(m) {
                switch (m.j) {
                    case 1:
                        if (a.Z) return m.return();
                        a.Z = !0;
                        a.j = b;
                        c = g.DO(a.j.key);
                        d = c.entityId;
                        e = void 0;
                        if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) return g.z(m, O7(a, d), 7);
                        if ("TRANSFER_STATE_TRANSFER_IN_QUEUE" !== a.j.transferState || a.j.transferRetryCount || a.j.hasLoggedFirstStarted) {
                            m.Ka(3);
                            break
                        }
                        return g.z(m, O7(a, d), 5);
                    case 5:
                        return e = m.B, a.j.hasLoggedFirstStarted = !0, g.z(m, oyb(a), 6);
                    case 6:
                        zwb({
                            videoId: d,
                            Bl: a.j,
                            offlineModeType: e
                        }, void 0, void 0, !0);
                        m.Ka(3);
                        break;
                    case 7:
                        e = m.B,
                            k7({
                                transferStatusType: "TRANSFER_STATUS_TYPE_RESUME_PROCESSING",
                                statusType: "OFFLINING_RETRIED"
                            }, {
                                videoId: d,
                                Bl: a.j,
                                offlineModeType: e
                            });
                    case 3:
                        return g.z(m, pyb(a), 8);
                    case 8:
                        return f = null, g.Ba(m, 9), g.z(m, qyb(a, b), 11);
                    case 11:
                        f = m.B;
                        a.G = f;
                        g.Ca(m, 10);
                        break;
                    case 9:
                        return h = g.Da(m), g7("error getting player response", h, b.cotn), g.z(m, a.Qw("TRANSFER_FAILURE_REASON_INTERNAL"), 12);
                    case 12:
                        return m.return();
                    case 10:
                        return l = Fwb(a.api.U(), b.cotn, f), g.z(m, nyb(a, l), 13);
                    case 13:
                        return g.z(m, Zxb(l.videoId), 14);
                    case 14:
                        l.gr =
                            m.B, cyb(a.N, l, b.maximumDownloadQuality), a.D.start(108E5), g.Aa(m)
                }
            })
        },
        kyb = function(a) {
            var b, c;
            return g.H(function(d) {
                if (1 == d.j) return g.z(d, b7(a.B, "transfer"), 2);
                b = d.B;
                c = b.filter(ryb).sort(syb);
                return 0 === c.length ? d.return() : d.return(c[0])
            })
        },
        pyb = function(a) {
            var b, c, d;
            return g.H(function(e) {
                if (1 == e.j) {
                    if (!a.j) return P7(a, "onTransferStart"), e.return();
                    a.D.start(108E5);
                    return g.z(e, Q7(a, "TRANSFER_STATE_TRANSFERRING"), 2)
                }
                b = a.j;
                return (d = (null == (c = b) ? 0 : c.key) ? g.DO(b.key).entityId : "") && a.C ? g.z(e, p7(d, a.C, a.B, "DOWNLOAD_STATE_DOWNLOAD_IN_PROGRESS"), 0) : e.Ka(0)
            })
        },
        ayb = function(a) {
            var b, c, d, e;
            g.H(function(f) {
                switch (f.j) {
                    case 1:
                        if (!a.j) {
                            P7(a, "onTransferPausedByUser");
                            f.Ka(2);
                            break
                        }
                        b = a.j;
                        a.D.stop();
                        return g.z(f, Q7(a, "TRANSFER_STATE_PAUSED_BY_USER"), 3);
                    case 3:
                        d = (null == (c = b) ? 0 : c.key) ? g.DO(b.key).entityId : "";
                        if (!d || !a.C) {
                            f.Ka(4);
                            break
                        }
                        return g.z(f, p7(d, a.C, a.B, "DOWNLOAD_STATE_PAUSED"), 4);
                    case 4:
                        return g.z(f, O7(a, d), 6);
                    case 6:
                        e = f.B, Awb({
                            videoId: d,
                            Bl: b,
                            offlineModeType: e
                        });
                    case 2:
                        M7(a), N7(a), g.Aa(f)
                }
            })
        },
        byb = function(a) {
            var b, c, d;
            g.H(function(e) {
                if (1 == e.j) {
                    if (!a.j) return P7(a, "onTransferPausedByNetwork"), e.return();
                    a.D.stop();
                    return g.z(e, Q7(a, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 2)
                }
                if (3 != e.j) return b = a.j, (d = (null == (c = b) ? 0 : c.key) ? g.DO(b.key).entityId : "") && a.C ? g.z(e, p7(d, a.C, a.B, "DOWNLOAD_STATE_PAUSED"), 3) : e.Ka(3);
                M7(a);
                g.Aa(e)
            })
        },
        tyb = function(a) {
            var b, c, d, e, f;
            g.H(function(h) {
                switch (h.j) {
                    case 1:
                        if (!a.j) return P7(a, "onTransferComplete"), h.return();
                        b = a.j;
                        a.D.stop();
                        if (!b || !a.G) {
                            h.Ka(2);
                            break
                        }
                        c = Fwb(a.api.U(), b.cotn, a.G);
                        return g.z(h, nyb(a, c), 2);
                    case 2:
                        return g.z(h, Q7(a, "TRANSFER_STATE_COMPLETE", "DOWNLOAD_STREAM_STATE_COMPLETE"), 4);
                    case 4:
                        e = (null == (d = b) ? 0 : d.key) ? g.DO(b.key).entityId : "";
                        if (!e || !a.C) {
                            h.Ka(5);
                            break
                        }
                        return g.z(h, p7(e, a.C, a.B, "DOWNLOAD_STATE_COMPLETE"), 5);
                    case 5:
                        return g.z(h, hyb(a.B, e), 7);
                    case 7:
                        return g.z(h, O7(a, e), 8);
                    case 8:
                        f = h.B, k7({
                            transferStatusType: "TRANSFER_STATUS_TYPE_COMPLETED",
                            statusType: "SUCCESS"
                        }, {
                            videoId: e,
                            Bl: b,
                            offlineModeType: f
                        }), M7(a), N7(a), g.Aa(h)
                }
            })
        },
        uyb = function(a, b, c) {
            var d, e;
            g.H(function(f) {
                switch (f.j) {
                    case 1:
                        if (!a.j) return P7(a, "onTransferProgress: " + b), f.return();
                        if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) {
                            f.Ka(2);
                            break
                        }
                        return g.z(f, pyb(a), 2);
                    case 2:
                        d = Date.now();
                        if (!(1E3 < d - a.Ea)) {
                            f.Ka(4);
                            break
                        }
                        a.Ea = d;
                        return g.z(f, gyb(a.B, c.videoId, c.B, c.TN, c.bytesDownloaded, c.j), 5);
                    case 5:
                        if (a.Y && !(a.Y && d - a.ma > a.Xa)) {
                            f.Ka(4);
                            break
                        }
                        a.ma = d;
                        return g.z(f, O7(a, b), 7);
                    case 7:
                        e = f.B, zwb({
                            videoId: b,
                            Bl: a.j,
                            offlineModeType: e
                        }, c.bytesDownloaded, c.j);
                    case 4:
                        a.D.start(108E5), g.Aa(f)
                }
            })
        },
        vyb = function(a) {
            var b = 3 > (a.j.transferRetryCount || 0);
            b && (a = a.j, a.transferRetryCount = (a.transferRetryCount || 0) + 1);
            return b
        },
        wyb = function(a, b) {
            b = void 0 === b ? "TRANSFER_FAILURE_REASON_UNKNOWN" : b;
            var c, d, e, f;
            return g.H(function(h) {
                if (1 == h.j) return a.j || P7(a, "setTransferToFailed: " + b), c = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", "TRANSFER_FAILURE_REASON_NETWORK" === b ? c = "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED" : "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" === b && (c = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED"), g.z(h, Q7(a, "TRANSFER_STATE_FAILED", "DOWNLOAD_STREAM_STATE_ERROR_STREAMS_MISSING", b), 2);
                if (3 != h.j) return i7(a.va, {
                        entityKey: null == (d = a.j) ? void 0 : d.key,
                        failureReason: c
                    }),
                    e = a.j ? g.DO(a.j.key).entityId : "", g.z(h, O7(a, e), 3);
                f = h.B;
                var l = {
                        videoId: e,
                        Bl: a.j,
                        offlineModeType: f
                    },
                    m = b,
                    n = {
                        transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_WITH_FAILURE",
                        statusType: "FAILED"
                    };
                m && (n.transferFailureReason = m, n.failureReason = Bwb(m));
                k7(n, l);
                g.Aa(h)
            })
        },
        Q7 = function(a, b, c, d) {
            var e;
            return g.H(function(f) {
                if (1 == f.j) {
                    if (!a.j) return P7(a, "saveTransferState: " + b), f.return();
                    a.j.transferState = b;
                    a.j.failureReason = d;
                    g.Ba(f, 2);
                    return g.z(f, oyb(a, function(h) {
                            return c ? T6(h, "offlineVideoStreams", a.j.offlineVideoStreams).then(function(l) {
                                for (var m = g.u(l), n = m.next(); !n.done; n = m.next())
                                    if ((n = n.value) && n.streamsProgress) {
                                        n = g.u(n.streamsProgress);
                                        for (var p = n.next(); !p.done; p = n.next()) p.value.streamState = c
                                    }
                                return Dvb(h, l.filter(function(q) {
                                    return !!q
                                }), "offlineVideoStreams")
                            }) : g.iD.resolve(void 0)
                        }),
                        4)
                }
                if (2 != f.j) return g.Ca(f, 0);
                e = g.Da(f);
                return e instanceof g.dD && "QUOTA_EXCEEDED" === e.type ? g.z(f, a.Qw("TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE"), 0) : f.Ka(0)
            })
        },
        oyb = function(a, b) {
            var c;
            return g.H(function(d) {
                if (!a.j) return d.return();
                c = a.j;
                return g.z(d, Z6(a.B, {
                    mode: "readwrite",
                    Tb: !0
                }, function(e) {
                    var f = [V6(e, c, "transfer")];
                    b && f.push(b(e));
                    return g.iD.all(f)
                }), 0)
            })
        },
        M7 = function(a) {
            a.j = void 0;
            a.G = void 0;
            a.D.stop()
        },
        qyb = function(a, b) {
            var c, d, e, f, h;
            return g.H(function(l) {
                if (1 == l.j) return c = g.DO(b.key), d = c.entityId, e = g.EO(d, "playbackData"), g.z(l, a7(a.B, e, "playbackData"), 2);
                f = l.B;
                if (null == (h = f) ? 0 : h.playerResponseJson) return l.return(JSON.parse(f.playerResponseJson));
                throw Error("No PlayerResponse found");
            })
        },
        P7 = function(a, b) {
            a.api.qa("woffle", {
                mcte: b
            });
            g7("missing current transfer entity.")
        },
        O7 = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                if (1 == f.j) return g.z(f, a7(a.B, g.EO(b, "videoDownloadContextEntity"), "videoDownloadContextEntity"), 2);
                c = f.B;
                return f.return(null != (e = null == (d = c) ? void 0 : d.offlineModeType) ? e : void 0)
            })
        },
        ryb = function(a) {
            return void 0 !== xyb[a.transferState]
        },
        syb = function(a, b) {
            var c = xyb[a.transferState],
                d = xyb[b.transferState];
            return c !== d ? c - d : Number(a.enqueuedTimestampMs) - Number(b.enqueuedTimestampMs)
        },
        R7 = function(a, b) {
            var c = this;
            this.W = a;
            this.api = b;
            this.K = new g.jE;
            this.C = new twb(function() {
                return yyb(c)
            }, function() {
                c.mS()
            }, this.api.En(), this.api.L.bind(this.api));
            this.j = new h7(this.api);
            this.D = new g.ho;
            this.Cd = {
                eX: function() {
                    return c.C.Cd.eX()
                },
                iX: function() {
                    return c.K
                },
                pnb: function() {
                    return c.C
                },
                lP: function() {
                    return c.lP()
                },
                jS: function() {
                    return c.jS()
                },
                mS: function() {
                    return c.mS()
                },
                GR: function() {
                    return c.GR()
                },
                DR: function() {
                    return c.DR()
                }
            };
            uwb(this.C)
        },
        yyb = function(a) {
            return g.H(function(b) {
                a.api.ob("onOrchestrationBecameLeader");
                return g.z(b, a.jS(), 0)
            })
        },
        Ayb = function(a) {
            var b, c;
            return g.H(function(d) {
                if (1 == d.j) return g.z(d, c7(), 2);
                if (3 != d.j) {
                    b = d.B;
                    if (!b) return g7("PES is undefined"), d.return();
                    a.B = new iyb(b, a.api, a.C, a.j);
                    c = a.ED(b);
                    return g.z(d, Ixb(b, c, a.C, a.j, a.W), 3)
                }
                a.G = d.B;
                return g.z(d, zyb(a), 0)
            })
        },
        zyb = function(a) {
            var b;
            return g.H(function(c) {
                switch (c.j) {
                    case 1:
                        if (!a.B) return g7("transferManager is undefined"), c.return();
                        if (a.B.j) {
                            c.Ka(2);
                            break
                        }
                        return g.z(c, N7(a.B), 2);
                    case 2:
                        if (!a.W.L("woffle_enable_main_downloads_library")) {
                            c.Ka(4);
                            break
                        }
                        return g.z(c, a.bZ(), 4);
                    case 4:
                        return g.z(c, a.refreshAllStaleEntities(43200, !0), 6);
                    case 6:
                        return g.z(c, a.iN(), 7);
                    case 7:
                        if (!a.W.L("html5_retry_downloads_for_expiration")) {
                            c.Ka(8);
                            break
                        }
                        return g.z(c, a.DR(), 8);
                    case 8:
                        return a.N = g.HB(function() {
                                a.refreshAllStaleEntities(43200, !0);
                                a.iN()
                            },
                            9E5), g.QC(g.SC(), function() {
                            return a.GR()
                        }), g.z(c, c7(), 10);
                    case 10:
                        return b = c.B, g.z(c, swb(b), 11);
                    case 11:
                        vwb(a.C), g.Aa(c)
                }
            })
        },
        Byb = function() {
            var a, b, c, d, e, f;
            return g.H(function(h) {
                switch (h.j) {
                    case 1:
                        return g.z(h, c7(), 2);
                    case 2:
                        a = h.B;
                        if (!a) return h.return([]);
                        b = Date.now() / 1E3;
                        return g.z(h, b7(a, "offlineVideoPolicy"), 3);
                    case 3:
                        c = h.B, d = g.u(c), e = d.next();
                    case 4:
                        if (e.done) {
                            h.Ka(6);
                            break
                        }
                        f = e.value;
                        if (!(f.expirationTimestamp && Number(f.expirationTimestamp) < b)) {
                            h.Ka(5);
                            break
                        }
                        f.action = "OFFLINE_VIDEO_POLICY_ACTION_DISABLE";
                        f.offlinePlaybackDisabledReason = "OFFLINE_PLAYBACK_DISABLED_REASON_CLIENT_OFFLINE_CONTENT_EXPIRED";
                        return g.z(h, $6(a, f, "offlineVideoPolicy"), 5);
                    case 5:
                        e = d.next();
                        h.Ka(4);
                        break;
                    case 6:
                        return h.return(c.map(function(l) {
                            return l.key
                        }))
                }
            })
        },
        S7 = function(a, b, c, d, e) {
            var f, h, l;
            return g.H(function(m) {
                if (1 == m.j) return g.z(m, c7(), 2);
                f = m.B;
                if (!f) return m.return([]);
                h = b.map(function(n) {
                    var p = g.EO(n, c);
                    p = {
                        actionType: d,
                        entityKey: p,
                        actionMetadata: Object.assign({}, Gwb(), e)
                    };
                    "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" !== d && (p.actionMetadata.priority = 0);
                    n = new t7(c, n, p);
                    return v7(n)
                });
                l = Nvb(f, h);
                uwb(a.C);
                return m.return(l)
            })
        },
        Cyb = function(a, b, c) {
            var d, e, f, h, l, m, n;
            return g.H(function(p) {
                switch (p.j) {
                    case 1:
                        d = [], e = g.u(b), f = e.next();
                    case 2:
                        if (f.done) {
                            p.Ka(4);
                            break
                        }
                        h = f.value;
                        if (h.upToDate || c && !h.shouldAutoSyncMetadata || !h.playlistId) {
                            p.Ka(3);
                            break
                        }
                        l = {};
                        m = {
                            nextAutoRefreshIntervalSeconds: h.checkInSeconds,
                            autoSync: c
                        };
                        l = {
                            mainPlaylistEntityActionMetadata: m
                        };
                        return g.z(p, S7(a, [h.playlistId], "mainPlaylistEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", l), 6);
                    case 6:
                        (n = p.B) && d.push.apply(d, g.pa(n));
                    case 3:
                        f = e.next();
                        p.Ka(2);
                        break;
                    case 4:
                        return p.return(d)
                }
            })
        },
        Dyb = function(a,
            b) {
            var c;
            return g.H(function(d) {
                return b.length ? (c = Gwb(), g.vF(c, G7, {
                    isEnqueuedForExpiredStreamUrlRefetch: !0
                }), a.api.qa("qrd", {
                    v: b.length
                }), d.return(S7(a, b, "playbackData", "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", c))) : d.return([])
            })
        },
        Eyb = function(a, b, c) {
            this.j = a;
            this.W = b;
            this.C = c
        },
        Hyb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F;
            return g.H(function(G) {
                switch (G.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, f = [], g.Ba(G, 2), g.z(G, Fyb(a, e), 4);
                    case 4:
                        f = G.B;
                        if (!(a.W.L("woffle_enable_main_downloads_library") && (null == (h = f) ? 0 : h.length))) {
                            G.Ka(5);
                            break
                        }
                        return g.z(G, Twb(a.j, [b.entityKey]), 5);
                    case 5:
                        g.Ca(G, 3);
                        break;
                    case 2:
                        return l = g.Da(G), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.dD && "QUOTA_EXCEEDED" === l.type ? (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                            n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE") : g7("Playlist add error"), G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n));
                    case 3:
                        p = [];
                        if (!a.W.L("html5_offline_prevent_redownload_downloaded_video")) {
                            G.Ka(7);
                            break
                        }
                        return g.z(G, Ewb(a.j, "mainVideoEntity", f), 8);
                    case 8:
                        f = G.B;
                    case 7:
                        if (null == (q = f) ? 0 : q.length)
                            for (r = g.u(f), t = r.next(); !t.done; t = r.next())
                                if (v = t.value, x = v.offlineVideoData, A = void 0, null == (A = x) ? 0 : A.videoId) E = void 0, F = Number((null == (E = b.actionMetadata) ? void 0 : E.priority) ||
                                    0) + 1, p.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", x.videoId, "mainVideoEntity", F, T7, Gyb(b, x, e)));
                        return G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p))
                }
            })
        },
        Jyb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb, Oa, Ua, gb, qb, rb, B, C, D, J, K, ba, sa, ia, M, X, ya, xa, Za, Xa, wb, Pb, db, Qb, gc, Ac, Yb, vc, Wc, Jc, Kc, Lc, Ub, ud, vd, ac, Wb, Mc, Hb, Zc, wd;
            return g.H(function(Nb) {
                switch (Nb.j) {
                    case 1:
                        return c = l7(b), d = b.entityKey, e = g.DO(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Nb, b7(a.j, "mainPlaylistEntity"), 5)) : g.z(Nb, a7(a.j, d, "mainPlaylistEntity"), 4);
                    case 4:
                        (l = Nb.B) && f.push(l);
                        Nb.Ka(3);
                        break;
                    case 5:
                        f = Nb.B;
                    case 3:
                        if (null == (m = f) || !m.length) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        n = g.U(b.actionMetadata, Iyb);
                        q = null == (p = n) ? void 0 : p.nextAutoRefreshIntervalSeconds;
                        t = null == (r = n) ? void 0 : r.autoSync;
                        v = [];
                        A = x = !0;
                        E = !1;
                        if (!h && !1 === t) {
                            Nb.Ka(6);
                            break
                        }
                        g.Ba(Nb, 7);
                        return g.z(Nb, $wb(0, !!t, !0, f), 9);
                    case 9:
                        v = Nb.B;
                        g.Ca(Nb, 8);
                        break;
                    case 7:
                        F = g.Da(Nb);
                        if (!(F instanceof Error && "No data" === F.message)) {
                            F instanceof Error && "Empty response body" === F.message && g7(F.message);
                            Nb.Ka(8);
                            break
                        }
                        return "!*$_ALL_ENTITIES_!*$" === e ? g.z(Nb, Nwb(a.j, b, a.C, "OFFLINE_DELETE_REASON_UNAVAILABLE"), 8) : g.z(Nb, Lwb(e, a.j, b, a.C), 8);
                    case 8:
                        if (!v.length || !h && v[0].playlistId !== e) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                    case 6:
                        if (h) {
                            G = [];
                            L = g.u(v);
                            for (Q = L.next(); !Q.done; Q = L.next()) R = Q.value, R.upToDate || t && !R.shouldAutoSyncMetadata || !R.playlistId || (aa = {
                                nextAutoRefreshIntervalSeconds: R.checkInSeconds,
                                autoSync: t
                            }, G.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", R.playlistId, "mainPlaylistEntity", 0, T7, {
                                mainPlaylistEntityActionMetadata: aa
                            })));
                            return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, G))
                        }
                        v.length && (na = v[0], E = !!na.upToDate, t && (x = null != (ta = na.shouldAutoSyncMetadata) ? ta : !0, A = null != (la = na.shouldAutoSyncVideos) ?
                            la : !0, na.checkInSeconds && (q = na.checkInSeconds)));
                        if (E || !x) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        va = [];
                        ea = f[0];
                        if (!ea.downloadState) {
                            Y = void 0;
                            Nb.Ka(15);
                            break
                        }
                        return g.z(Nb, a7(a.j, ea.downloadState, "mainPlaylistDownloadStateEntity"), 16);
                    case 16:
                        Y = Nb.B;
                    case 15:
                        return Na = Y, ca = (null == (y = Na) ? 0 : y.addedTimestampMillis) ? String(Na.addedTimestampMillis) : void 0, g.Ba(Nb, 17), g.z(Nb, Fyb(a, e, ca, q), 19);
                    case 19:
                        va = Nb.B;
                        g.Ca(Nb, 18);
                        break;
                    case 17:
                        Ja = g.Da(Nb);
                        if (!(Ja instanceof Error &&
                                "No data for playlist" === Ja.message)) {
                            if (Ja instanceof Error && "Empty response body for playlist" === Ja.message) g7(Ja.message);
                            else return cb = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Ja instanceof g.dD && "QUOTA_EXCEEDED" === Ja.type && (cb = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, cb, nb));
                            Nb.Ka(18);
                            break
                        }
                        return g.z(Nb, Lwb(e, a.j, b, a.C), 18);
                    case 18:
                        if (!A) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        Oa = [];
                        Ua = new Map;
                        if (null == (gb = va) ? 0 : gb.length)
                            for (qb = g.u(va), rb = qb.next(); !rb.done; rb = qb.next()) B = rb.value, C = B.offlineVideoData, D = void 0, (null == (D = C) ? 0 : D.videoId) && Ua.set(C.videoId, C);
                        J = new Map;
                        K = [];
                        if (null == (ba = ea) ? 0 : null == (sa = ba.videos) ? 0 : sa.length)
                            for (ia = g.u(ea.videos), M = ia.next(); !M.done; M = ia.next())
                                if (X = M.value, ya = JSON.parse(g.DO(X).entityId), xa = ya.videoId) Ua.has(xa) ?
                                    (J.set(xa, Ua.get(xa)), Ua.delete(xa)) : K.push(xa);
                        Xa = Number((null == (Za = b.actionMetadata) ? void 0 : Za.priority) || 0) + 1;
                        wb = g.u(Ua.entries());
                        for (Pb = wb.next(); !Pb.done; Pb = wb.next()) db = Pb.value, Qb = g.u(db), gc = Qb.next().value, Ac = Qb.next().value, Yb = gc, vc = Ac, Oa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", Yb, "mainVideoEntity", Xa, T7, Gyb(b, vc, e)));
                        Wc = g.u(J.entries());
                        for (Jc = Wc.next(); !Jc.done; Jc = Wc.next()) Kc = Jc.value, Lc = g.u(Kc), Ub = Lc.next().value, ud = Lc.next().value, vd = Ub, ac = ud, Oa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH",
                            vd, "mainVideoEntity", Xa, T7, Gyb(b, ac, e)));
                        Wb = g.u(K);
                        for (Mc = Wb.next(); !Mc.done; Mc = Wb.next()) Hb = Mc.value, Zc = {
                            playlistId: e
                        }, wd = {
                            offlineLoggingData: {
                                offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_REFRESH"
                            },
                            mainVideoEntityActionMetadata: Zc
                        }, Oa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE", Hb, "mainVideoEntity", 0, T7, wd));
                        return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, Oa))
                }
            })
        },
        Kyb = function(a, b) {
            var c, d, e, f;
            return g.H(function(h) {
                switch (h.j) {
                    case 1:
                        return c = l7(b), g.Ba(h, 2), d = g.DO(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(h, Nwb(a.j, b, a.C, null == (e = b.actionMetadata) ? void 0 : null == (f = e.offlineLoggingData) ? void 0 : f.offlineDeleteReason), 5) : g.z(h, Lwb(d, a.j, b, a.C), 6);
                    case 6:
                        if (!a.W.L("woffle_enable_main_downloads_library")) {
                            h.Ka(5);
                            break
                        }
                        return g.z(h, Uwb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(h, 3);
                        break;
                    case 2:
                        return g.Da(h), h.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                            "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 3:
                        return h.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        },
        Fyb = function(a, b, c, d) {
            var e, f, h, l, m, n;
            return g.H(function(p) {
                switch (p.j) {
                    case 1:
                        return g.z(p, Ywb([b]), 2);
                    case 2:
                        return e = p.B, g.z(p, Lyb(a, e[0], c, d), 3);
                    case 3:
                        return f = p.B, h = f.mainPlaylistEntity, l = f.Dba, m = Jwb(h, l.avatar), g.Ba(p, 4), g.z(p, x7(m), 6);
                    case 6:
                        g.Ca(p, 5);
                        break;
                    case 4:
                        n = g.Da(p), n instanceof Error && "Failed to fetch" === n.message && g7(n.message);
                    case 5:
                        return p.return(e[0].videos)
                }
            })
        },
        Lyb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L;
            return g.H(function(Q) {
                switch (Q.j) {
                    case 1:
                        e = Date.now().toString();
                        c || (c = e);
                        f = b.videos;
                        h = b.playlistId;
                        l = [];
                        m = [];
                        if (f)
                            for (n = g.u(f), p = n.next(); !p.done; p = n.next()) {
                                q = p.value;
                                r = q.offlineVideoData;
                                if (!r || !r.videoId) throw g7("Invalid offlineVideoData for playlist"), Error("Invalid offlineVideoData for playlist");
                                t = r.videoId;
                                v = {
                                    videoId: t,
                                    playlistId: h
                                };
                                x = {
                                    id: g.EO(JSON.stringify(v), "mainPlaylistVideoEntity"),
                                    video: g.EO(t, "mainVideoEntity")
                                };
                                l.push(x);
                                m.push(x.id)
                            }
                        A = b.channel.offlineChannelData;
                        E = Myb(g.EO(h,
                            "ytMainChannelEntity"), A);
                        F = {
                            key: g.EO(h, "mainPlaylistDownloadStateEntity"),
                            addedTimestampMillis: c,
                            lastSyncedTimestampMillis: e
                        };
                        G = {
                            key: g.EO(h, "mainPlaylistEntity"),
                            playlistId: h,
                            channelOwner: E.id,
                            videos: m,
                            title: b.title,
                            thumbnailStyleData: Nyb(b),
                            visibility: Oyb(b),
                            downloadState: F.key
                        };
                        (null == (L = G) ? 0 : L.entityMetadata) ? (G.entityMetadata.offlineLastModifiedTimestampSeconds = b.lastModifiedTimestamp, d && (G.entityMetadata.nextAutoRefreshIntervalSeconds = String(d))) : G && (G.entityMetadata = {
                            nextAutoRefreshIntervalSeconds: d ?
                                String(d) : void 0,
                            offlineLastModifiedTimestampSeconds: b.lastModifiedTimestamp
                        });
                        g.Ba(Q, 2);
                        return g.z(Q, Z6(a.j, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(R) {
                            for (var aa = V6(R, G, "mainPlaylistEntity"), na = V6(R, E, "ytMainChannelEntity"), ta = V6(R, F, "mainPlaylistDownloadStateEntity"), la = [], va = g.u(l), ea = va.next(); !ea.done; ea = va.next()) la.push(V6(R, ea.value, "mainPlaylistVideoEntity"));
                            return g.iD.all([aa, na, ta].concat(g.pa(la)))
                        }), 4);
                    case 4:
                        g.Ca(Q, 3);
                        break;
                    case 2:
                        throw g.Da(Q), g7("PES failure for playlist"), Error("PES failure for playlist");
                    case 3:
                        return Q.return({
                            mainPlaylistEntity: G,
                            Dba: E,
                            uob: l
                        })
                }
            })
        },
        Myb = function(a, b) {
            return {
                id: a,
                channelId: b.channelId,
                title: b.title,
                avatar: b.thumbnail
            }
        },
        Nyb = function(a) {
            var b = [],
                c = a.videos;
            c && 0 < c.length && b.push({
                key: Number("PLAYLIST_THUMBNAIL_STYLE_FIRST_VIDEO"),
                value: {
                    collageThumbnail: {
                        coverThumbnail: c[0].offlineVideoData.thumbnail
                    }
                }
            });
            if ((a = a.additionalMetadadatas) && 0 < a.length)
                for (a = g.u(a), c = a.next(); !c.done; c = a.next()) {
                    var d = c.value.offlineBundleItemPlaylistData,
                        e = void 0;
                    c = null == (e = d) ? void 0 : e.style;
                    e = void 0;
                    d = {
                        collageThumbnail: {
                            coverThumbnail: null == (e = d) ? void 0 : e.coverThumbnail
                        }
                    };
                    switch (c) {
                        case "BUNDLE_ITEM_STYLE_UNSPECIFIED":
                            b.push({
                                key: Number("PLAYLIST_THUMBNAIL_STYLE_UNKNOWN"),
                                value: d
                            });
                            break;
                        case "BUNDLE_ITEM_STYLE_TWO_BY_TWO":
                            b.push({
                                key: Number("PLAYLIST_THUMBNAIL_STYLE_TWO_BY_TWO"),
                                value: d
                            });
                            break;
                        case "BUNDLE_ITEM_STYLE_ONE_AND_TWO_AVATAR":
                            b.push({
                                key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO_AVATAR"),
                                value: d
                            });
                            break;
                        case "BUNDLE_ITEM_STYLE_ONE_AND_TWO":
                            b.push({
                                key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO"),
                                value: d
                            })
                    }
                }
            return b
        },
        Oyb = function(a) {
            switch (a.privacy) {
                case "PRIVATE":
                    return "PLAYLIST_VISIBILITY_PRIVATE";
                case "PUBLIC":
                    return "PLAYLIST_VISIBILITY_PUBLIC";
                case "UNLISTED":
                    return "PLAYLIST_VISIBILITY_UNLISTED";
                default:
                    return "PLAYLIST_VISIBILITY_UNKNOWN"
            }
        },
        Gyb = function(a, b, c) {
            b = {
                offlineVideoData: b,
                playlistId: c
            };
            if (a = g.U(a.actionMetadata, Iyb)) b.maximumDownloadQuality = a.maximumDownloadQuality;
            return {
                mainVideoEntityActionMetadata: b
            }
        },
        Pyb = function(a, b, c) {
            this.j = a;
            this.W = b;
            this.C = c
        },
        Syb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function(x) {
                switch (x.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, f = g.U(b.actionMetadata, U7), l = !(null == (h = f) ? 0 : h.playlistId), g.Ba(x, 2), g.z(x, Qyb(a, e, void 0, null == (m = f) ? void 0 : m.offlineVideoData, l), 4);
                    case 4:
                        g.Ca(x, 3);
                        break;
                    case 2:
                        return n = g.Da(x), p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.dD && "QUOTA_EXCEEDED" === n.type && (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                            x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, p, q));
                    case 3:
                        r = 1;
                        r = Number((null == (t = b.actionMetadata) ? void 0 : t.priority) || 0) + 1;
                        var A = (A = g.U(b.actionMetadata, U7)) ? {
                            playbackDataActionMetadata: {
                                maximumDownloadQuality: A.maximumDownloadQuality
                            }
                        } : void 0;
                        v = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", r, Ryb, A);
                        return x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [v]))
                }
            })
        },
        Tyb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F;
            return g.H(function(G) {
                switch (G.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, g.z(G, a7(a.j, b.entityKey, "mainVideoEntity"), 2);
                    case 2:
                        f = G.B;
                        if (!f) {
                            h = void 0;
                            G.Ka(3);
                            break
                        }
                        return g.z(G, a7(a.j, f.downloadState, "mainVideoDownloadStateEntity"), 4);
                    case 4:
                        h = G.B;
                    case 3:
                        l = h;
                        if (!f || !l) return G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        g.Ba(G, 5);
                        return g.z(G, Qyb(a, e, l.addedTimestampMillis, null == (n = g.U(b.actionMetadata, U7)) ? void 0 : n.offlineVideoData), 7);
                    case 7:
                        p = 1;
                        p = Number((null ==
                            (q = b.actionMetadata) ? void 0 : q.priority) || 0) + 1;
                        m = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", p, Ryb);
                        g.Ca(G, 6);
                        break;
                    case 5:
                        r = g.Da(G);
                        if (!(r instanceof Error && "No data" === r.message)) {
                            if (r instanceof Error && "Empty response body" === r.message) g7(r.message);
                            else return t = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", v = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", r instanceof g.dD && "QUOTA_EXCEEDED" === r.type && (t = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                                v = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, t, v));
                            G.Ka(6);
                            break
                        }
                        return g.z(G, Vwb(a.j, e), 9);
                    case 9:
                        x = G.B;
                        A = g.U(b.actionMetadata, U7);
                        if (F = null == (E = A) ? void 0 : E.playlistId) x.playlistId = F;
                        x.offlineDeleteReason = "OFFLINE_DELETE_REASON_UNAVAILABLE";
                        return g.z(G, y7(e, a.j, b, a.C, x), 6);
                    case 6:
                        return G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, m ? [m] : void 0))
                }
            })
        },
        Uyb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q;
            return g.H(function(r) {
                switch (r.j) {
                    case 1:
                        return c = l7(b), g.Ba(r, 2), d = g.DO(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(r, Nwb(a.j, b, a.C, null == (p = b.actionMetadata) ? void 0 : null == (q = p.offlineLoggingData) ? void 0 : q.offlineDeleteReason), 5) : g.z(r, Vwb(a.j, d), 6);
                    case 6:
                        e = r.B;
                        f = g.U(b.actionMetadata, U7);
                        if (l = null == (h = f) ? void 0 : h.playlistId) e.playlistId = l;
                        e.offlineDeleteReason = null == (m = b.actionMetadata) ? void 0 : null == (n = m.offlineLoggingData) ? void 0 : n.offlineDeleteReason;
                        return g.z(r, y7(d, a.j, b, a.C, e), 7);
                    case 7:
                        if (!a.W.L("woffle_enable_main_downloads_library")) {
                            r.Ka(5);
                            break
                        }
                        return g.z(r, Uwb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(r, 3);
                        break;
                    case 2:
                        return g.Da(r), r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 3:
                        return r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        },
        Qyb = function(a, b, c, d, e) {
            var f, h, l, m, n, p;
            return g.H(function(q) {
                switch (q.j) {
                    case 1:
                        if (f = d) {
                            q.Ka(2);
                            break
                        }
                        return g.z(q, Xwb([b]), 3);
                    case 3:
                        h = q.B, f = h[0];
                    case 2:
                        return g.z(q, Vyb(a, f, c, e), 4);
                    case 4:
                        l = q.B;
                        m = l.mainVideoEntity;
                        n = l.channelEntity;
                        g.Ba(q, 5);
                        var r = s7(m.thumbnail),
                            t = s7(n.avatar);
                        return g.z(q, x7(r.concat(t)), 7);
                    case 7:
                        g.Ca(q, 0);
                        break;
                    case 5:
                        p = g.Da(q), p instanceof Error && "Failed to fetch" === p.message && g7(p.message), g.Aa(q)
                }
            })
        },
        Vyb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, A;
            return g.H(function(E) {
                switch (E.j) {
                    case 1:
                        c || (c = Date.now().toString());
                        f = null == (e = b.channel) ? void 0 : e.offlineChannelData;
                        h = {
                            id: g.EO(b.videoId, "ytMainChannelEntity"),
                            channelId: f.channelId,
                            title: f.title,
                            avatar: f.thumbnail
                        };
                        l = {
                            key: g.EO(b.videoId, "mainVideoDownloadStateEntity"),
                            playbackData: g.EO(b.videoId, "playbackData"),
                            addedTimestampMillis: c,
                            videoDownloadContextEntity: g.EO(b.videoId, "videoDownloadContextEntity")
                        };
                        m = {
                            key: g.EO(b.videoId, "videoPlaybackPositionEntity"),
                            videoId: b.videoId,
                            lastPlaybackPositionSeconds: "0"
                        };
                        a.W.L("html5_offline_playback_position_sync") && (n = {
                            playbackPosition: m.key
                        });
                        p = g.EO(b.videoId, "mainVideoEntity");
                        q = {
                            key: p,
                            videoId: b.videoId,
                            title: b.title,
                            thumbnail: b.thumbnail,
                            localizedStrings: {
                                viewCount: b.shortViewCountText
                            },
                            userState: n,
                            lengthSeconds: b.lengthSeconds ? Number(b.lengthSeconds) : void 0,
                            publishedTimestampMillis: b.publishedTimestamp ? (1E3 * Number(b.publishedTimestamp)).toString() : void 0,
                            formattedDescription: b.description,
                            owner: h.id,
                            downloadState: l.key
                        };
                        if (!a.W.L("woffle_enable_main_downloads_library") ||
                            !d) {
                            E.Ka(2);
                            break
                        }
                        return g.z(E, Swb(a.j, [p]), 3);
                    case 3:
                        if (v = E.B) r = v.mainDownloadsLibraryEntity, t = v.mainDownloadsListEntity;
                    case 2:
                        return A = Dwb, x = {
                            key: g.EO(b.videoId, "downloadStatusEntity"),
                            downloadState: "DOWNLOAD_STATE_PENDING_DOWNLOAD"
                        }, g.vF(l, A, x), g.z(E, Z6(a.j, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(F) {
                            var G = V6(F, h, "ytMainChannelEntity"),
                                L = V6(F, l, "mainVideoDownloadStateEntity"),
                                Q = V6(F, q, "mainVideoEntity");
                            G = [G, L, Q];
                            a.W.L("html5_offline_playback_position_sync") && (L = V6(F, m, "videoPlaybackPositionEntity"),
                                G.push(L));
                            r && (L = V6(F, r, "mainDownloadsLibraryEntity"), G.push(L));
                            t && (L = V6(F, t, "mainDownloadsListEntity"), G.push(L));
                            x && (F = V6(F, x, "downloadStatusEntity"), G.push(F));
                            return g.iD.all(G)
                        }), 4);
                    case 4:
                        return E.return({
                            mainVideoEntity: q,
                            channelEntity: h
                        })
                }
            })
        },
        Wyb = function(a, b) {
            this.j = a;
            this.W = b
        },
        Yyb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R;
            return g.H(function(aa) {
                switch (aa.j) {
                    case 1:
                        return c = l7(b), d = [], g.z(aa, O6.getInstance(), 2);
                    case 2:
                        e = aa.B;
                        if (!e) {
                            aa.Ka(3);
                            break
                        }
                        return g.z(aa, e.get("sdois"), 4);
                    case 4:
                        return f = aa.B, g.z(aa, null == (l = e) ? void 0 : l.get("lmqf"), 5);
                    case 5:
                        h = aa.B;
                    case 3:
                        g.Ba(aa, 6);
                        if (void 0 === f) throw Error("prefStorage or opt-in state is undefined");
                        return g.z(aa, bxb(f, null != (m = h) ? m : "SD"), 8);
                    case 8:
                        return n = aa.B, g.z(aa, Owb(n), 9);
                    case 9:
                        p = Rwb(n);
                        if (!a.W.L("woffle_enable_main_downloads_library")) {
                            aa.Ka(10);
                            break
                        }
                        if (f) {
                            aa.Ka(11);
                            break
                        }
                        return g.z(aa, Uwb(a.j, A7), 11);
                    case 11:
                        return g.z(aa, Twb(a.j, [A7]), 10);
                    case 10:
                        if (null == (q = p) ? 0 : q.length)
                            for (r = g.u(p), t = r.next(); !t.done; t = r.next())
                                if (x = v = t.value, A = x.actionType, E = x.entityKey, F = x.actionMetadata, A && E && F && !g.U(F, Xyb)) {
                                    "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === A && (F.offlineLoggingData = {
                                        offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_DELETE"
                                    });
                                    if (G = g.U(v.actionMetadata, U7)) G.playlistId = "DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", v.actionMetadata = Object.assign({}, v.actionMetadata, {
                                        mainVideoEntityActionMetadata: G
                                    });
                                    d.push(v)
                                }
                        g.Ca(aa, 7);
                        break;
                    case 6:
                        return L = g.Da(aa), Q = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", R = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", L instanceof g.dD && "QUOTA_EXCEEDED" === L.type && (Q = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", R = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), aa.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, Q, R));
                    case 7:
                        return aa.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c, d))
                }
            })
        },
        Zyb = function() {
            R7.apply(this, arguments);
            this.Z = "mainVideoEntity"
        },
        $yb = function(a, b, c) {
            b = void 0 === b ? 43200 : b;
            c = void 0 === c ? !0 : c;
            var d = void 0 === d ? !1 : d;
            var e, f, h;
            return g.H(function(l) {
                switch (l.j) {
                    case 1:
                        if (!a.K.Uh()) return l.return([]);
                        e = [];
                        g.Ba(l, 2);
                        return g.z(l, $wb(b, c, d), 4);
                    case 4:
                        e = l.B;
                        g.Ca(l, 3);
                        break;
                    case 2:
                        f = g.Da(l), f instanceof Error && "No data" === f.message || f instanceof Error && "Empty response body" === f.message && g7(f.message);
                    case 3:
                        return h = Cyb(a, e, c), l.return(h)
                }
            })
        },
        azb = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e, f, h, l, m, n, p, q, r, t, v, x, A, E, F;
            return g.H(function(G) {
                switch (G.j) {
                    case 1:
                        return e = [], g.z(G, axb(), 2);
                    case 2:
                        return (f = G.B) || d ? g.z(G, cxb(b, c), 3) : G.return([]);
                    case 3:
                        h = G.B;
                        if (null == (l = h) || !l.length) return G.return([]);
                        m = {
                            offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_REFRESH"
                        };
                        n = g.u(h);
                        p = n.next();
                    case 4:
                        if (p.done) {
                            G.Ka(6);
                            break
                        }
                        r = q = p.value;
                        t = r.actionType;
                        v = r.entityKey;
                        x = r.actionMetadata;
                        if (!(t && v && x) || g.U(x, Xyb)) {
                            G.Ka(5);
                            break
                        }
                        "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === t && (x.offlineLoggingData =
                            m);
                        A = g.DO(v);
                        E = A.entityId;
                        return g.z(G, S7(a, [E], "mainVideoEntity", t, x), 8);
                    case 8:
                        F = G.B, e = e.concat(F);
                    case 5:
                        p = n.next();
                        G.Ka(4);
                        break;
                    case 6:
                        return G.return(e)
                }
            })
        },
        czb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na;
            return g.H(function(ta) {
                switch (ta.j) {
                    case 1:
                        return e = g.EO(a, "musicTrack"), f = g.EO(a, "transfer"), g.z(ta, Z6(b, {
                            mode: "readonly",
                            Tb: !0
                        }, function(la) {
                            return g.iD.all([S6(la, e, "musicTrack"), S6(la, f, "transfer"), T6(la, "musicTrack"), T6(la, "offlineOrchestrationActionWrapperEntity")])
                        }), 2);
                    case 2:
                        h = ta.B;
                        l = g.u(h);
                        m = l.next().value;
                        n = l.next().value;
                        p = l.next().value;
                        q = l.next().value;
                        r = m;
                        t = n;
                        v = p;
                        x = q;
                        if (!r) {
                            ta.Ka(3);
                            break
                        }
                        return g.z(ta, bzb(r, v), 4);
                    case 4:
                        return A = ta.B, g.z(ta, w7(A), 3);
                    case 3:
                        E = [];
                        F = g.EO(a, "musicTrack");
                        G = g.u(x);
                        for (L = G.next(); !L.done; L = G.next()) Q = L.value, R = g.DO(Q.key).entityId, aa = u7(Q), na = g.DO(aa.action.entityKey).entityId, R !== a && na !== a || q7(c, Q.actionProto) || E.push(Q.key);
                        return g.z(ta, Z6(b, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(la) {
                            var va = E.map(function(ea) {
                                return W6(la, ea)
                            });
                            va.push(W6(la, F, {
                                ev: !0
                            }));
                            return g.iD.all(va)
                        }), 6);
                    case 6:
                        r7(t), i7(d, {
                            entityKey: F,
                            failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
                        }), g.Aa(ta)
                }
            })
        },
        V7 = function(a, b, c, d, e) {
            var f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y;
            return g.H(function(Na) {
                switch (Na.j) {
                    case 1:
                        return f = g.EO(a, b), h = g.EO("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(Na, Z6(c, {
                            mode: "readonly",
                            Tb: !0
                        }, function(y) {
                            return g.iD.all([S6(y, f, b), S6(y, h, "musicDownloadsLibraryEntity"), T6(y, b), T6(y, "offlineOrchestrationActionWrapperEntity")])
                        }), 2);
                    case 2:
                        l = Na.B;
                        m = g.u(l);
                        n = m.next().value;
                        p = m.next().value;
                        q = m.next().value;
                        r = m.next().value;
                        t = n;
                        v = p;
                        x = q;
                        A = r;
                        if (!t) {
                            Na.Ka(3);
                            break
                        }
                        return g.z(Na, bzb(t, x), 4);
                    case 4:
                        return E = Na.B, g.z(Na, w7(E), 3);
                    case 3:
                        F = [];
                        G = g.u(A);
                        for (L = G.next(); !L.done; L = G.next()) Q = L.value, R = g.DO(Q.key).entityId, aa = u7(Q), R !== a && aa.rootActionId !== a || q7(d, Q.actionProto) || F.push(Q.key);
                        na = g.EO(a, b);
                        return g.z(Na, Z6(c, {
                            mode: "readwrite",
                            Tb: !0
                        }, function(y) {
                            var ca = F.map(function(Ja) {
                                return W6(y, Ja)
                            });
                            ca.push(W6(y, na, {
                                ev: !0
                            }));
                            return g.iD.all(ca)
                        }), 6);
                    case 6:
                        if (!t) {
                            Na.Ka(0);
                            break
                        }
                        return g.z(Na, dzb(t, x, v), 8);
                    case 8:
                        ta = Na.B;
                        ta.reverse();
                        if (!ta.length) {
                            Na.Ka(0);
                            break
                        }
                        la = g.u(ta);
                        va = la.next();
                    case 10:
                        if (va.done) {
                            Na.Ka(0);
                            break
                        }
                        ea = va.value;
                        Y = g.DO(ea).entityId;
                        if (!Y) {
                            Na.Ka(11);
                            break
                        }
                        return g.z(Na, czb(Y, c, d, e), 11);
                    case 11:
                        va = la.next(), Na.Ka(10)
                }
            })
        },
        W7 = function(a, b, c) {
            var d, e, f, h, l, m;
            return g.H(function(n) {
                if (1 == n.j) return g.z(n, Z6(a, {
                    mode: "readwrite",
                    Tb: !0
                }, function(p) {
                    var q = T6(p, "transfer"),
                        r = T6(p, "offlineOrchestrationActionWrapperEntity");
                    return g.iD.all([q, r]).then(function(t) {
                        t = g.u(t);
                        var v = t.next().value,
                            x = t.next().value;
                        t = ezb.map(function(G) {
                            return Gvb(p, G)
                        });
                        x = g.u(x);
                        for (var A = x.next(); !A.done; A = x.next()) {
                            A = A.value;
                            var E = "musicTrack" === g.DO(A.actionProto.entityKey).entityType,
                                F = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === A.actionProto.actionType;
                            q7(b, A.actionProto) || E && (!E || F) || t.push(W6(p, A.key, {
                                ev: !0
                            }))
                        }
                        return g.iD.all(t).then(function() {
                            return v
                        })
                    })
                }), 2);
                d = n.B;
                e = g.u(d);
                for (f = e.next(); !f.done; f = e.next()) h = f.value, r7(h), l = g.DO(h.key).entityId, m = g.EO(l, "musicTrack"), i7(c, {
                    entityKey: m,
                    failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
                });
                return g.z(n, Hwb(), 0)
            })
        },
        fzb = function(a) {
            for (var b, c = g.u(a.additionalMetadatas), d = c.next(); !d.done; d = c.next()) d = d.value, d.offlineMusicVideoData && (b = d.offlineMusicVideoData);
            var e, f, h, l, m;
            return {
                id: g.EO(a.videoId, "musicTrack"),
                videoId: a.videoId,
                title: a.title,
                thumbnailDetails: a.thumbnail,
                lengthMs: String(1E3 * Number(a.lengthSeconds)),
                albumTitle: null == (e = b) ? void 0 : e.releaseTitle,
                musicVideoType: null == (f = b) ? void 0 : f.musicVideoType,
                contentRating: {
                    explicitType: null == (h = b) ? void 0 : h.explicitType
                },
                artistNames: (null == (l = b) ? void 0 : l.byline) || (null == (m = b) ? void 0 : m.channelName),
                downloadMetadata: g.EO(a.videoId, "musicTrackDownloadMetadataEntity")
            }
        },
        dzb = function(a, b, c) {
            var d, e, f, h, l, m,
                n, p, q, r, t, v, x, A, E, F, G, L;
            return g.H(function(Q) {
                d = [];
                e = new Set;
                if (null == (f = c) ? 0 : null == (h = f.downloadedTracks) ? 0 : h.length)
                    for (l = g.u(c.downloadedTracks), m = l.next(); !m.done; m = l.next()) n = m.value, e.add(n);
                if (a.tracks) {
                    p = g.u(a.tracks);
                    for (q = p.next(); !q.done; q = p.next()) r = q.value, e.has(r) || d.push(r);
                    t = g.u(b);
                    for (v = t.next(); !v.done; v = t.next())
                        if (x = v.value, x.id !== a.id && (A = x.tracks))
                            for (E = g.u(A), F = E.next(); !F.done; F = E.next()) G = F.value, L = d.indexOf(G), -1 !== L && d.splice(L, 1)
                }
                return Q.return(d)
            })
        },
        bzb = function(a, b) {
            var c, d, e, f, h, l, m, n;
            return g.H(function(p) {
                c = s7(a.thumbnailDetails);
                d = g.u(b);
                for (e = d.next(); !e.done; e = d.next())
                    if (f = e.value, f.id !== a.id)
                        for (h = g.u(s7(f.thumbnailDetails)), l = h.next(); !l.done; l = h.next()) m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1);
                return p.return(c)
            })
        },
        gzb = function(a, b) {
            var c, d, e, f, h, l, m, n, p;
            return g.H(function(q) {
                if (1 == q.j) return c = g.EO("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(q, a7(a, c, "musicDownloadsLibraryEntity"), 2);
                (d = q.B) || (d = {
                    id: c
                });
                e = g.DO(b).entityType;
                "musicTrack" === e ? null != (f = d.downloadedTracks) && f.includes(b) || (d.downloadedTracks = (null != (h = d.downloadedTracks) ? h : []).concat(b)) : "musicPlaylist" === e ? null != (l = d.downloadedPlaylists) && l.includes(b) || (d.downloadedPlaylists = (null != (m = d.downloadedPlaylists) ? m : []).concat(b)) : "musicAlbumRelease" !== e || null != (n = d.downloadedAlbumReleases) &&
                    n.includes(b) || (d.downloadedAlbumReleases = (null != (p = d.downloadedAlbumReleases) ? p : []).concat(b));
                return g.z(q, $6(a, d, "musicDownloadsLibraryEntity"), 0)
            })
        },
        hzb = function(a, b) {
            var c, d, e, f, h, l, m;
            return g.H(function(n) {
                if (1 == n.j) return c = g.EO("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(n, a7(a, c, "musicDownloadsLibraryEntity"), 2);
                d = n.B;
                if (!d) return n.Ka(0);
                e = g.DO(b).entityType;
                "musicTrack" === e ? f = d.downloadedTracks : "musicPlaylist" === e && (f = d.downloadedPlaylists);
                if (null == (h = f) ? 0 : h.length)
                    for (l = 0; l < f.length; l++)
                        if (m = f[l], m === b) {
                            f.splice(l, 1);
                            break
                        }
                return g.z(n, $6(a, d, "musicDownloadsLibraryEntity"), 0)
            })
        },
        izb = function(a) {
            var b = a.videos;
            a = [];
            var c = [];
            if (b) {
                b = g.u(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    var e = d.value.offlineVideoData.videoId;
                    d = g.EO(e, "musicTrack");
                    e = g.EO(e, "musicTrackDownloadMetadataEntity");
                    a.push(d);
                    c.push(e)
                }
            }
            return {
                N0: a,
                M0: c
            }
        },
        X7 = function(a, b, c) {
            b = {
                track: fzb(b)
            };
            c && (b.playlistId = c);
            if (a = g.U(a.actionMetadata, jzb)) b.maximumDownloadQuality = a.maximumDownloadQuality;
            return {
                musicTrackEntityActionMetadata: b
            }
        },
        kzb = function(a, b) {
            this.j = a;
            this.C = b
        },
        mzb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E;
            return g.H(function(F) {
                switch (F.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, f = [], g.Ba(F, 2), g.z(F, lzb(a, e), 4);
                    case 4:
                        f = F.B;
                        if (null == (h = f) || !h.length) {
                            F.Ka(5);
                            break
                        }
                        return g.z(F, gzb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(F, 3);
                        break;
                    case 2:
                        return l = g.Da(F), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.dD && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                            F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n));
                    case 3:
                        return p = [], g.z(F, Ewb(a.j, "musicTrack", f), 7);
                    case 7:
                        f = F.B;
                        if (f.length)
                            for (q = g.u(f), r = q.next(); !r.done; r = q.next())
                                if (t = r.value, v = t.offlineVideoData, x = void 0, null == (x = v) ? 0 : x.videoId) A = void 0, E = Number((null == (A = b.actionMetadata) ? void 0 : A.priority) || 0) + 1, p.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", v.videoId, "musicTrack", E, Y7, X7(b, v, e)));
                        return F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p))
                }
            })
        },
        nzb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb, Oa, Ua, gb, qb, rb, B, C, D, J, K, ba, sa, ia, M, X, ya, xa, Za, Xa, wb, Pb, db, Qb, gc, Ac;
            return g.H(function(Yb) {
                switch (Yb.j) {
                    case 1:
                        return c = l7(b), d = b.entityKey, e = g.DO(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Yb, b7(a.j, "musicAlbumRelease"), 5)) : g.z(Yb, a7(a.j, d, "musicAlbumRelease"), 4);
                    case 4:
                        (l = Yb.B) && f.push(l);
                        Yb.Ka(3);
                        break;
                    case 5:
                        f = Yb.B;
                    case 3:
                        if (null == (m = f) || !m.length) return Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        if (h) {
                            n = [];
                            p = g.u(f);
                            for (q = p.next(); !q.done; q = p.next()) r = q.value, t = g.DO(r.id).entityId, n.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH",
                                t, "musicAlbumRelease", 0, Y7));
                            return Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, n))
                        }
                        v = [];
                        x = f[0];
                        A = void 0;
                        if (!x.downloadMetadata) {
                            Yb.Ka(6);
                            break
                        }
                        return g.z(Yb, a7(a.j, x.downloadMetadata, "musicAlbumReleaseDownloadMetadataEntity"), 7);
                    case 7:
                        E = Yb.B, A = Number(null != (G = null == (F = E) ? void 0 : F.addedTimestampMillis) ? G : "0") / 1E3;
                    case 6:
                        return g.Ba(Yb, 8), g.z(Yb, lzb(a, e, null == (L = A) ? void 0 : L.toString()), 10);
                    case 10:
                        v = Yb.B;
                        g.Ca(Yb, 9);
                        break;
                    case 8:
                        Q = g.Da(Yb);
                        if (!(Q instanceof Error && "No data" ===
                                Q.message)) {
                            if (Q instanceof Error && "Empty response body" === Q.message) g7(Q.message);
                            else return R = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", aa = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Q instanceof g.dD && "QUOTA_EXCEEDED" === Q.type && (R = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", aa = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, R, aa));
                            Yb.Ka(9);
                            break
                        }
                        return g.z(Yb, V7(e, "musicAlbumRelease",
                            a.j, b, a.C), 9);
                    case 9:
                        na = [];
                        ta = new Map;
                        if (null == (la = v) ? 0 : la.length)
                            for (va = g.u(v), ea = va.next(); !ea.done; ea = va.next()) Y = ea.value, Na = Y.offlineVideoData, y = void 0, (null == (y = Na) ? 0 : y.videoId) && ta.set(Na.videoId, Na);
                        ca = new Map;
                        Ja = [];
                        if (null == (cb = x) ? 0 : null == (nb = cb.tracks) ? 0 : nb.length)
                            for (Oa = g.u(x.tracks), Ua = Oa.next(); !Ua.done; Ua = Oa.next())
                                if (gb = Ua.value, qb = g.DO(gb).entityId) ta.has(qb) ? (ca.set(qb, ta.get(qb)), ta.delete(qb)) : Ja.push(qb);
                        B = Number((null == (rb = b.actionMetadata) ? void 0 : rb.priority) || 0) + 1;
                        C = g.u(ta.entries());
                        for (D = C.next(); !D.done; D = C.next()) J = D.value, K = g.u(J), ba = K.next().value, sa = K.next().value, ia = ba, M = sa, na.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", ia, "musicTrack", B, Y7, X7(b, M)));
                        X = g.u(ca.entries());
                        for (ya = X.next(); !ya.done; ya = X.next()) xa = ya.value, Za = g.u(xa), Xa = Za.next().value, wb = Za.next().value, Pb = Xa, db = wb, na.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Pb, "musicTrack", B, Y7, X7(b, db)));
                        Qb = g.u(Ja);
                        for (gc = Qb.next(); !gc.done; gc = Qb.next()) Ac = gc.value, na.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                            Ac, "musicTrack", 0, Y7));
                        return Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, na))
                }
            })
        },
        ozb = function(a, b) {
            var c, d;
            return g.H(function(e) {
                switch (e.j) {
                    case 1:
                        return c = l7(b), g.Ba(e, 2), d = g.DO(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, W7(a.j, b, a.C), 5) : g.z(e, V7(d, "musicAlbumRelease", a.j, b, a.C), 6);
                    case 6:
                        return g.z(e, hzb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(e, 3);
                        break;
                    case 2:
                        return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 3:
                        return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c))
                }
            })
        },
        lzb = function(a, b, c) {
            var d, e, f;
            return g.H(function(h) {
                switch (h.j) {
                    case 1:
                        return g.z(h, Ywb([b]), 2);
                    case 2:
                        return d = h.B, g.z(h, pzb(a, d[0], c), 3);
                    case 3:
                        return e = h.B, f = s7(e.thumbnailDetails), g.z(h, x7(f), 4);
                    case 4:
                        return h.return(d[0].videos)
                }
            })
        },
        pzb = function(a, b, c) {
            var d, e, f, h, l, m, n, p, q, r, t, v, x, A;
            return g.H(function(E) {
                if (1 == E.j) {
                    d = b.additionalMetadadatas;
                    e = void 0;
                    if (d && 0 < d.length)
                        for (f = g.u(d), h = f.next(); !h.done; h = f.next())
                            if (l = h.value, l.offlineMusicPlaylistData) {
                                e = l.offlineMusicPlaylistData;
                                break
                            }
                    m = b.playlistId;
                    n = izb(b);
                    p = n.N0;
                    q = n.M0;
                    r = c ? (1E3 * Number(c)).toString() : Date.now().toString();
                    t = b.lastModifiedTimestamp ? (1E3 * Number(b.lastModifiedTimestamp)).toString() : "0";
                    v = {
                        id: g.EO(m, "musicAlbumReleaseDownloadMetadataEntity"),
                        trackDownloadMetadatas: q,
                        lastModifiedTimestampMillis: t,
                        addedTimestampMillis: r,
                        syncState: "DOWNLOAD_SYNC_STATE_UP_TO_DATE"
                    };
                    x = {
                        id: g.EO(m, "musicAlbumRelease"),
                        title: b.title,
                        audioPlaylistId: m,
                        trackCount: b.totalVideoCount,
                        tracks: p,
                        downloadMetadata: v.id
                    };
                    e && (x.thumbnailDetails = null != (A = e.albumHqThumbnail) ? A : e.albumArtistThumbnail, x.artistDisplayName = e.albumArtistDisplayName, x.releaseDate = e.albumReleaseDate, x.contentRating = {
                        explicitType: e.albumReleaseExplicitType
                    }, x.releaseType = e.albumReleaseType);
                    return g.z(E, Z6(a.j, {
                        mode: "readwrite",
                        Tb: !0
                    }, function(F) {
                        var G = V6(F, x, "musicAlbumRelease");
                        F = V6(F, v, "musicAlbumReleaseDownloadMetadataEntity");
                        return g.iD.all([G, F])
                    }), 2)
                }
                return E.return(x)
            })
        },
        qzb = function(a, b) {
            this.j = a;
            this.C = b
        },
        szb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E;
            return g.H(function(F) {
                switch (F.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, f = [], g.Ba(F, 2), g.z(F, rzb(a, e), 4);
                    case 4:
                        f = F.B;
                        if (null == (h = f) || !h.length) {
                            F.Ka(5);
                            break
                        }
                        return g.z(F, gzb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(F, 3);
                        break;
                    case 2:
                        return l = g.Da(F), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.dD && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                            F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n));
                    case 3:
                        return p = [], g.z(F, Ewb(a.j, "musicTrack", f), 7);
                    case 7:
                        f = F.B;
                        if (f.length)
                            for (q = g.u(f), r = q.next(); !r.done; r = q.next())
                                if (t = r.value, v = t.offlineVideoData, x = void 0, null == (x = v) ? 0 : x.videoId) A = void 0, E = Number((null == (A = b.actionMetadata) ? void 0 : A.priority) || 0) + 1, p.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", v.videoId, "musicTrack", E, Z7, X7(b, v, e)));
                        return F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p))
                }
            })
        },
        tzb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb, Oa, Ua, gb, qb, rb, B, C, D, J, K, ba, sa, ia, M, X, ya, xa, Za, Xa, wb, Pb, db, Qb, gc, Ac, Yb, vc, Wc, Jc, Kc, Lc, Ub, ud, vd, ac, Wb, Mc;
            return g.H(function(Hb) {
                switch (Hb.j) {
                    case 1:
                        return c = l7(b), d = b.entityKey, e = g.DO(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Hb, b7(a.j, "musicPlaylist"), 5)) : g.z(Hb, a7(a.j, d, "musicPlaylist"), 4);
                    case 4:
                        (l = Hb.B) && f.push(l);
                        Hb.Ka(3);
                        break;
                    case 5:
                        f = Hb.B;
                    case 3:
                        if (null == (m = f) || !m.length) return Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        n = g.U(b.actionMetadata, jzb);
                        q = null == (p = n) ? void 0 : p.autoSync;
                        r = [];
                        v = t = !0;
                        x = !1;
                        A = void 0;
                        if (!h && !1 === q) {
                            Hb.Ka(6);
                            break
                        }
                        g.Ba(Hb, 7);
                        return g.z(Hb,
                            dxb(!!q, f), 9);
                    case 9:
                        r = Hb.B;
                        g.Ca(Hb, 8);
                        break;
                    case 7:
                        E = g.Da(Hb);
                        if (!(E instanceof Error && "No data" === E.message)) {
                            E instanceof Error && "Empty response body" === E.message && g7(E.message);
                            Hb.Ka(8);
                            break
                        }
                        return "!*$_ALL_ENTITIES_!*$" === e ? g.z(Hb, W7(a.j, b, a.C), 8) : g.z(Hb, V7(e, "musicPlaylist", a.j, b, a.C), 8);
                    case 8:
                        if (!r.length || !h && r[0].playlistId !== e) return Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                    case 6:
                        if (h) {
                            F = [];
                            G = g.u(r);
                            for (L = G.next(); !L.done; L = G.next()) Q = L.value, Q.upToDate || q && !Q.shouldAutoSyncMetadata ||
                                !Q.playlistId || (R = {
                                    autoSync: q
                                }, F.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Q.playlistId, "musicPlaylist", 0, Z7, {
                                    musicPlaylistEntityActionMetadata: R
                                })));
                            return Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, F))
                        }
                        r.length && (aa = r[0], x = !!aa.upToDate, q && (t = null != (na = aa.shouldAutoSyncMetadata) ? na : !0, v = null != (ta = aa.shouldAutoSyncVideos) ? ta : !0, aa.checkInSeconds && (A = aa.checkInSeconds)));
                        if (x || !t) return Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        la = [];
                        va = f[0];
                        ea = void 0;
                        if (!va.downloadMetadata) {
                            Hb.Ka(15);
                            break
                        }
                        return g.z(Hb, a7(a.j, va.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 16);
                    case 16:
                        Y = Hb.B, ea = Number(null != (y = null == (Na = Y) ? void 0 : Na.addedTimestampMillis) ? y : "0") / 1E3;
                    case 15:
                        return g.Ba(Hb, 17), g.z(Hb, rzb(a, e, null == (ca = ea) ? void 0 : ca.toString(), A), 19);
                    case 19:
                        la = Hb.B;
                        g.Ca(Hb, 18);
                        break;
                    case 17:
                        Ja = g.Da(Hb);
                        if (!(Ja instanceof Error && "No data" === Ja.message)) {
                            if (Ja instanceof Error && "Empty response body" === Ja.message) g7(Ja.message);
                            else return cb =
                                "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Ja instanceof g.dD && "QUOTA_EXCEEDED" === Ja.type && (cb = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, cb, nb));
                            Hb.Ka(18);
                            break
                        }
                        return g.z(Hb, V7(e, "musicPlaylist", a.j, b, a.C), 18);
                    case 18:
                        if (!v) return Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c));
                        Oa = [];
                        Ua = new Map;
                        if (null == (gb = la) ? 0 : gb.length)
                            for (qb = g.u(la), rb = qb.next(); !rb.done; rb = qb.next()) B = rb.value, C = B.offlineVideoData, D = void 0, (null == (D = C) ? 0 : D.videoId) && Ua.set(C.videoId, C);
                        J = new Map;
                        K = [];
                        if (null == (ba = va) ? 0 : null == (sa = ba.tracks) ? 0 : sa.length)
                            for (ia = g.u(va.tracks), M = ia.next(); !M.done; M = ia.next())
                                if (X = M.value, ya = g.DO(X).entityId) Ua.has(ya) ? (J.set(ya, Ua.get(ya)), Ua.delete(ya)) : K.push(ya);
                        Za = Number((null == (xa = b.actionMetadata) ? void 0 : xa.priority) || 0) + 1;
                        Xa = g.u(Ua.entries());
                        for (wb = Xa.next(); !wb.done; wb =
                            Xa.next()) Pb = wb.value, db = g.u(Pb), Qb = db.next().value, gc = db.next().value, Ac = Qb, Yb = gc, Oa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", Ac, "musicTrack", Za, Z7, X7(b, Yb)));
                        vc = g.u(J.entries());
                        for (Wc = vc.next(); !Wc.done; Wc = vc.next()) Jc = Wc.value, Kc = g.u(Jc), Lc = Kc.next().value, Ub = Kc.next().value, ud = Lc, vd = Ub, Oa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", ud, "musicTrack", Za, Z7, X7(b, vd)));
                        ac = g.u(K);
                        for (Wb = ac.next(); !Wb.done; Wb = ac.next()) Mc = Wb.value, Oa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                            Mc, "musicTrack", 0, Z7));
                        return Hb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, Oa))
                }
            })
        },
        uzb = function(a, b) {
            var c, d;
            return g.H(function(e) {
                switch (e.j) {
                    case 1:
                        return c = l7(b), g.Ba(e, 2), d = g.DO(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, W7(a.j, b, a.C), 5) : g.z(e, V7(d, "musicPlaylist", a.j, b, a.C), 6);
                    case 6:
                        return g.z(e, hzb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(e, 3);
                        break;
                    case 2:
                        return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 3:
                        return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c))
                }
            })
        },
        rzb = function(a, b, c, d) {
            var e, f, h;
            return g.H(function(l) {
                switch (l.j) {
                    case 1:
                        return g.z(l, Ywb([b]), 2);
                    case 2:
                        return e = l.B, g.z(l, vzb(a, e[0], c, d), 3);
                    case 3:
                        return f = l.B, h = s7(f.thumbnailDetails), g.z(l, x7(h), 4);
                    case 4:
                        return l.return(e[0].videos)
                }
            })
        },
        vzb = function(a, b, c, d) {
            var e, f, h, l, m, n, p, q, r;
            return g.H(function(t) {
                return 1 == t.j ? (e = b.playlistId, f = izb(b), h = f.N0, l = f.M0, m = c ? (1E3 * Number(c)).toString() : Date.now().toString(), n = b.lastModifiedTimestamp ? (1E3 * Number(b.lastModifiedTimestamp)).toString() : "0", p = {
                    id: g.EO(e, "musicPlaylistDownloadMetadataEntity"),
                    trackDownloadMetadatas: l,
                    lastModifiedTimestampMillis: n,
                    addedTimestampMillis: m,
                    syncState: "DOWNLOAD_SYNC_STATE_UP_TO_DATE"
                }, q = {
                    id: g.EO(e, "musicPlaylist"),
                    title: b.title,
                    playlistId: e,
                    thumbnailDetails: b.thumbnail,
                    visibility: wzb(b),
                    trackCount: b.totalVideoCount,
                    tracks: h,
                    downloadMetadata: p.id
                }, d && ((null == (r = q) ? 0 : r.entityMetadata) ? q.entityMetadata.nextAutoRefreshIntervalSeconds = String(d) : q && (q.entityMetadata = {
                    nextAutoRefreshIntervalSeconds: String(d)
                })), g.z(t, Z6(a.j, {
                    mode: "readwrite",
                    Tb: !0
                }, function(v) {
                    var x = V6(v, q, "musicPlaylist");
                    v = V6(v, p, "musicPlaylistDownloadMetadataEntity");
                    return g.iD.all([x, v])
                }), 2)) : t.return(q)
            })
        },
        wzb = function(a) {
            switch (a.privacy) {
                case "PRIVATE":
                    return "PLAYLIST_ENTITY_VISIBILITY_PRIVATE";
                case "PUBLIC":
                    return "PLAYLIST_ENTITY_VISIBILITY_PUBLIC";
                case "UNLISTED":
                    return "PLAYLIST_ENTITY_VISIBILITY_UNLISTED";
                default:
                    return "PLAYLIST_ENTITY_VISIBILITY_UNKNOWN"
            }
        },
        xzb = function(a, b) {
            this.j = a;
            this.C = b
        },
        Bzb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function(x) {
                switch (x.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, f = g.U(b.actionMetadata, yzb), g.Ba(x, 2), g.z(x, zzb(a, e, void 0, null == (h = f) ? void 0 : h.track, null == (l = f) ? void 0 : l.albumRelease), 4);
                    case 4:
                        if (null == (m = f) ? 0 : m.playlistId) {
                            x.Ka(5);
                            break
                        }
                        return g.z(x, gzb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(x, 3);
                        break;
                    case 2:
                        return n = g.Da(x), p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.dD && "QUOTA_EXCEEDED" === n.type &&
                            (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, p, q));
                    case 3:
                        t = Number((null == (r = b.actionMetadata) ? void 0 : r.priority) || 0) + 1;
                        var A = (A = g.U(b.actionMetadata, yzb)) ? {
                            playbackDataActionMetadata: {
                                maximumDownloadQuality: A.maximumDownloadQuality
                            }
                        } : void 0;
                        v = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", t, Azb, A);
                        return x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c, [v]))
                }
            })
        },
        Czb = function(a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, A;
            return g.H(function(E) {
                switch (E.j) {
                    case 1:
                        return c = l7(b), d = g.DO(b.entityKey), e = d.entityId, g.z(E, a7(a.j, b.entityKey, "musicTrack"), 2);
                    case 2:
                        f = E.B;
                        if (!f) {
                            h = void 0;
                            E.Ka(3);
                            break
                        }
                        return g.z(E, a7(a.j, f.downloadMetadata, "musicTrackDownloadMetadataEntity"), 4);
                    case 4:
                        h = E.B;
                    case 3:
                        l = h;
                        if (!f || !l) return E.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                        n = g.U(b.actionMetadata, yzb);
                        g.Ba(E, 5);
                        return g.z(E, zzb(a, e, l.addedTimestampMillis, null == (p = n) ? void 0 : p.track, null == (q = n) ? void 0 : q.albumRelease),
                            7);
                    case 7:
                        t = Number((null == (r = b.actionMetadata) ? void 0 : r.priority) || 0) + 1;
                        m = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", t, Azb);
                        g.Ca(E, 6);
                        break;
                    case 5:
                        v = g.Da(E);
                        if (!(v instanceof Error && "No data" === v.message)) {
                            if (v instanceof Error && "Empty response body" === v.message) g7(v.message);
                            else return x = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", A = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", v instanceof g.dD && "QUOTA_EXCEEDED" === v.type && (x = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                                A = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), E.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, x, A));
                            E.Ka(6);
                            break
                        }
                        return g.z(E, czb(e, a.j, b, a.C), 6);
                    case 6:
                        return E.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, m ? [m] : void 0))
                }
            })
        },
        Dzb = function(a, b) {
            var c, d;
            return g.H(function(e) {
                switch (e.j) {
                    case 1:
                        return c = l7(b), g.Ba(e, 2), d = g.DO(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, W7(a.j, b, a.C), 5) : g.z(e, czb(d, a.j, b, a.C), 6);
                    case 6:
                        return g.z(e, hzb(a.j, b.entityKey), 5);
                    case 5:
                        g.Ca(e, 3);
                        break;
                    case 2:
                        return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 3:
                        return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c))
                }
            })
        },
        zzb = function(a, b, c, d, e) {
            var f, h, l, m, n, p;
            return g.H(function(q) {
                switch (q.j) {
                    case 1:
                        if (f = d) {
                            q.Ka(2);
                            break
                        }
                        return g.z(q, Xwb([b]), 3);
                    case 3:
                        h = q.B, l = h[0], f = fzb(l);
                    case 2:
                        return g.z(q, Ezb(a, f, b, e, c), 4);
                    case 4:
                        m = q.B;
                        n = m.musicTrackEntity;
                        p = m.L5;
                        var r = s7(n.thumbnailDetails),
                            t = [];
                        p && (t = s7(p.thumbnailDetails));
                        return g.z(q, x7(r.concat(t)), 0)
                }
            })
        },
        Ezb = function(a, b, c, d, e) {
            var f;
            return g.H(function(h) {
                return 1 == h.j ? (e || (e = Date.now().toString()), f = {
                    id: g.EO(c, "musicTrackDownloadMetadataEntity"),
                    playbackData: g.EO(c, "playbackData"),
                    addedTimestampMillis: e,
                    videoDownloadContextEntity: g.EO(c, "videoDownloadContextEntity")
                }, d && (b.albumRelease = d.id), g.z(h, Z6(a.j, {
                    mode: "readwrite",
                    Tb: !0
                }, function(l) {
                    var m = [],
                        n = V6(l, f, "musicTrackDownloadMetadataEntity");
                    m.push(n);
                    n = V6(l, b, "musicTrack");
                    m.push(n);
                    d && (l = V6(l, d, "musicAlbumRelease"), m.push(l));
                    return g.iD.all(m)
                }), 2)) : 3 != h.j ? g.z(h, p7(c, "musicTrackDownloadMetadataEntity",
                    a.j, "DOWNLOAD_STATE_PENDING_DOWNLOAD"), 3) : h.return({
                    musicTrackEntity: b,
                    L5: d
                })
            })
        },
        $7 = function() {
            R7.apply(this, arguments);
            this.Z = "musicTrack"
        },
        Fzb = function() {
            g.NV.apply(this, arguments);
            var a = this;
            this.events = new g.DK(this);
            this.W = this.player.U();
            this.Cd = {
                qnb: function() {
                    return a.j
                },
                AI: function() {
                    return a.AI()
                }
            }
        },
        Gzb = function(a) {
            var b;
            a = g.U(null == (b = a.getWatchNextResponse()) ? void 0 : b.currentVideoEndpoint, g.dT);
            if (null == a ? 0 : a.playlistId) var c = a.playlistId;
            return c
        },
        Hzb = function(a, b) {
            var c, d, e, f;
            return g.H(function(h) {
                if (1 == h.j) {
                    c = b.clientPlaybackNonce;
                    d = {
                        cpn: c,
                        offlineSourceVisualElement: g.jF(b.va || "").getAsJson(),
                        selectedOfflineMode: "OFFLINE_NOW",
                        isPartialPlayback: !1
                    };
                    b.B && (d.videoFmt = Number(b.B.itag));
                    b.D && (d.audioFmt = Number(b.D.itag));
                    if ((e = Gzb(b)) && b.videoId) {
                        var l = b.videoId;
                        l = "PPSV" !== e ? Promise.resolve(!1) : a.j.rT(l);
                        h = g.z(h, l, 3)
                    } else h = h.Ka(2);
                    return h
                }
                2 != h.j && (f = h.B) && (d.selectedOfflineMode = "OFFLINE_MODE_TYPE_AUTO_OFFLINE");
                a.B = c;
                g.XC("offlinePlaybackStarted", d);
                g.Aa(h)
            })
        };
    g.w(N6, M6);
    g.ha.Object.defineProperties(N6.prototype, {
        entityMetadata: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.entityMetadata
            },
            set: function(a) {
                this.j.entityMetadata = a
            }
        }
    });
    g.w(Otb, N6);
    Otb.prototype.B = function() {
        return []
    };
    g.w(Ptb, N6);
    Ptb.prototype.B = function() {
        var a = [];
        this.j.alternateChannel && a.push(this.j.alternateChannel);
        this.j.alternateChannelList && a.push.apply(a, g.pa(this.j.alternateChannelList));
        this.j.oneofChannelEntity && a.push(this.j.oneofChannelEntity);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Qtb, N6);
    Qtb.prototype.B = function() {
        var a = [];
        this.j.entryCollection && a.push(this.j.entryCollection);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Rtb, M6);
    Rtb.prototype.B = function() {
        var a = [];
        this.j.video && a.push(this.j.video);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Stb, N6);
    Stb.prototype.B = function() {
        var a = [];
        this.j.parentPlaylist && a.push(this.j.parentPlaylist);
        if (this.j.entries)
            for (var b = g.u(this.j.entries), c = b.next(); !c.done; c = b.next()) a.push.apply(a, g.pa((new Rtb(c.value)).B()));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Ttb, N6);
    Ttb.prototype.B = function() {
        var a = [];
        this.j.descriptionEntity && a.push(this.j.descriptionEntity);
        this.j.creators && a.push.apply(a, g.pa(this.j.creators));
        this.j.theBiggestFan && a.push(this.j.theBiggestFan);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Utb, N6);
    Utb.prototype.B = function() {
        return []
    };
    g.w(Vtb, N6);
    Vtb.prototype.B = function() {
        return []
    };
    g.w(Wtb, N6);
    Wtb.prototype.B = function() {
        return []
    };
    g.w(Xtb, N6);
    Xtb.prototype.B = function() {
        return []
    };
    g.w(Ytb, N6);
    Ytb.prototype.B = function() {
        return []
    };
    g.w(Ztb, N6);
    Ztb.prototype.B = function() {
        return []
    };
    g.w($tb, N6);
    $tb.prototype.B = function() {
        return []
    };
    g.w(aub, N6);
    aub.prototype.B = function() {
        return []
    };
    g.w(bub, N6);
    bub.prototype.B = function() {
        var a = [];
        this.j.downloadsList && a.push(this.j.downloadsList);
        this.j.smartDownloadsList && a.push(this.j.smartDownloadsList);
        this.j.recommendedDownloadsList && a.push(this.j.recommendedDownloadsList);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(cub, M6);
    cub.prototype.B = function() {
        var a = [];
        this.j.video && a.push(this.j.video);
        this.j.playlist && a.push(this.j.playlist);
        this.j.videoItem && a.push(this.j.videoItem);
        this.j.playlistItem && a.push(this.j.playlistItem);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(dub, N6);
    dub.prototype.B = function() {
        var a = [];
        this.j.refresh && a.push(this.j.refresh);
        if (this.j.downloads)
            for (var b = g.u(this.j.downloads), c = b.next(); !c.done; c = b.next()) a.push.apply(a, g.pa((new cub(c.value)).B()));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(eub, N6);
    eub.prototype.B = function() {
        var a = [];
        this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(fub, N6);
    fub.prototype.B = function() {
        var a = [];
        this.j.playbackData && a.push(this.j.playbackData);
        this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
        this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(gub, N6);
    gub.prototype.B = function() {
        return []
    };
    g.w(hub, N6);
    hub.prototype.B = function() {
        var a = [];
        this.j.fakeChildren && a.push.apply(a, g.pa(this.j.fakeChildren));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(iub, N6);
    iub.prototype.B = function() {
        var a = [];
        this.j.video && a.push(this.j.video);
        this.j.playbackData && a.push(this.j.playbackData);
        this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(jub, N6);
    jub.prototype.B = function() {
        return []
    };
    g.w(kub, N6);
    kub.prototype.B = function() {
        var a = [];
        this.j.channelOwner && a.push(this.j.channelOwner);
        this.j.videos && a.push.apply(a, g.pa(this.j.videos));
        this.j.collaboratorChannels && a.push.apply(a, g.pa(this.j.collaboratorChannels));
        this.j.downloadState && a.push(this.j.downloadState);
        this.j.refresh && a.push(this.j.refresh);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(lub, N6);
    lub.prototype.B = function() {
        var a = [];
        this.j.video && a.push(this.j.video);
        this.j.channelContributor && a.push(this.j.channelContributor);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(mub, M6);
    mub.prototype.B = function() {
        var a = [];
        this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
        this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(nub, M6);
    nub.prototype.B = function() {
        var a = [];
        this.j.recommendedVideoMetadata && a.push.apply(a, g.pa((new mub(this.j.recommendedVideoMetadata)).B()));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(oub, M6);
    oub.prototype.B = function() {
        var a = [];
        this.j.playbackPosition && a.push(this.j.playbackPosition);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(pub, N6);
    pub.prototype.B = function() {
        var a = [];
        this.j.owner && a.push(this.j.owner);
        this.j.downloadState && a.push(this.j.downloadState);
        this.j.userState && a.push.apply(a, g.pa((new oub(this.j.userState)).B()));
        this.j.additionalMetadata && a.push.apply(a, g.pa((new nub(this.j.additionalMetadata)).B()));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(qub, N6);
    qub.prototype.B = function() {
        var a = [];
        this.j.userChannelDetails && a.push(this.j.userChannelDetails);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(rub, N6);
    rub.prototype.B = function() {
        var a = [];
        this.j.channelOwner && a.push(this.j.channelOwner);
        this.j.playbackPosition && a.push(this.j.playbackPosition);
        this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
        this.j.downloadStatus && a.push(this.j.downloadStatus);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(sub, N6);
    sub.prototype.B = function() {
        return []
    };
    g.w(tub, N6);
    tub.prototype.B = function() {
        return []
    };
    g.w(uub, N6);
    uub.prototype.B = function() {
        return []
    };
    g.w(vub, N6);
    vub.prototype.B = function() {
        return []
    };
    g.w(wub, N6);
    wub.prototype.B = function() {
        return []
    };
    g.w(xub, N6);
    xub.prototype.B = function() {
        return []
    };
    g.w(yub, N6);
    yub.prototype.B = function() {
        return []
    };
    g.w(zub, N6);
    zub.prototype.B = function() {
        return []
    };
    g.w(Aub, N6);
    Aub.prototype.B = function() {
        var a = [];
        this.j.trackDownloadMetadatas && a.push.apply(a, g.pa(this.j.trackDownloadMetadatas));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Bub, N6);
    Bub.prototype.B = function() {
        var a = [];
        this.j.downloadedTracks && a.push.apply(a, g.pa(this.j.downloadedTracks));
        this.j.smartDownloadedTracks && a.push.apply(a, g.pa(this.j.smartDownloadedTracks));
        this.j.downloadedEpisodes && a.push.apply(a, g.pa(this.j.downloadedEpisodes));
        this.j.downloadedAlbumReleases && a.push.apply(a, g.pa(this.j.downloadedAlbumReleases));
        this.j.smartDownloadedAlbumReleases && a.push.apply(a, g.pa(this.j.smartDownloadedAlbumReleases));
        this.j.downloadedPlaylists && a.push.apply(a, g.pa(this.j.downloadedPlaylists));
        this.j.smartDownloadedPlaylists &&
            a.push.apply(a, g.pa(this.j.smartDownloadedPlaylists));
        this.j.metadataOnlyTracks && a.push.apply(a, g.pa(this.j.metadataOnlyTracks));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Cub, N6);
    Cub.prototype.B = function() {
        var a = [];
        this.j.trackDownloadMetadatas && a.push.apply(a, g.pa(this.j.trackDownloadMetadatas));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Dub, N6);
    Dub.prototype.B = function() {
        var a = [];
        this.j.playbackData && a.push(this.j.playbackData);
        this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
        this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Eub, N6);
    Eub.prototype.B = function() {
        var a = [];
        this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity);
        this.j.primaryArtists && a.push.apply(a, g.pa(this.j.primaryArtists));
        this.j.details && a.push(this.j.details);
        this.j.userDetails && a.push(this.j.userDetails);
        this.j.tracks && a.push.apply(a, g.pa(this.j.tracks));
        this.j.share && a.push(this.j.share);
        this.j.downloadMetadata && a.push(this.j.downloadMetadata);
        this.j.refresh && a.push(this.j.refresh);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Fub, N6);
    Fub.prototype.B = function() {
        var a = [];
        this.j.albumRelease && a.push(this.j.albumRelease);
        this.j.tracks && a.push.apply(a, g.pa(this.j.tracks));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Gub, N6);
    Gub.prototype.B = function() {
        var a = [];
        this.j.albumRelease && a.push(this.j.albumRelease);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Hub, N6);
    Hub.prototype.B = function() {
        var a = [];
        this.j.details && a.push(this.j.details);
        this.j.userDetails && a.push(this.j.userDetails);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Iub, N6);
    Iub.prototype.B = function() {
        var a = [];
        this.j.parentArtist && a.push(this.j.parentArtist);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Jub, N6);
    Jub.prototype.B = function() {
        var a = [];
        this.j.parentArtist && a.push(this.j.parentArtist);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Kub, N6);
    Kub.prototype.B = function() {
        return []
    };
    g.w(Lub, N6);
    Lub.prototype.B = function() {
        return []
    };
    g.w(Mub, M6);
    Mub.prototype.B = function() {
        var a = [];
        this.j.creatorEntity && a.push(this.j.creatorEntity);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Nub, N6);
    Nub.prototype.B = function() {
        var a = [];
        this.j.tracks && a.push.apply(a, g.pa(this.j.tracks));
        this.j.refresh && a.push(this.j.refresh);
        this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity);
        this.j.details && a.push(this.j.details);
        this.j.downloadMetadata && a.push(this.j.downloadMetadata);
        this.j.sideloadMetadata && a.push(this.j.sideloadMetadata);
        this.j.userDetails && a.push(this.j.userDetails);
        this.j.entryCollection && a.push(this.j.entryCollection);
        this.j.share && a.push(this.j.share);
        this.j.podcastShowAdditionalMetadata &&
            a.push.apply(a, g.pa((new Mub(this.j.podcastShowAdditionalMetadata)).B()));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Oub, N6);
    Oub.prototype.B = function() {
        return []
    };
    g.w(Pub, N6);
    Pub.prototype.B = function() {
        var a = [];
        this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity);
        this.j.artists && a.push.apply(a, g.pa(this.j.artists));
        this.j.audioModeVersion && a.push(this.j.audioModeVersion);
        this.j.videoModeVersion && a.push(this.j.videoModeVersion);
        this.j.userDetails && a.push(this.j.userDetails);
        this.j.details && a.push(this.j.details);
        this.j.albumRelease && a.push(this.j.albumRelease);
        this.j.share && a.push(this.j.share);
        this.j.libraryEdit && a.push(this.j.libraryEdit);
        this.j.downloadMetadata &&
            a.push(this.j.downloadMetadata);
        this.j.playbackPosition && a.push(this.j.playbackPosition);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Qub, N6);
    Qub.prototype.B = function() {
        var a = [];
        this.j.parentTrack && a.push(this.j.parentTrack);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Rub, N6);
    Rub.prototype.B = function() {
        var a = [];
        this.j.parentTrack && a.push(this.j.parentTrack);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Sub, N6);
    Sub.prototype.B = function() {
        return []
    };
    g.w(Tub, N6);
    Tub.prototype.B = function() {
        return []
    };
    g.w(Uub, N6);
    Uub.prototype.B = function() {
        return []
    };
    g.w(Vub, N6);
    Vub.prototype.B = function() {
        return []
    };
    g.w(Wub, N6);
    Wub.prototype.B = function() {
        var a = [];
        this.j.transfer && a.push(this.j.transfer);
        this.j.adsPlaybackData && a.push.apply(a, g.pa(this.j.adsPlaybackData));
        this.j.drmLicense && a.push(this.j.drmLicense);
        this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy);
        this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Xub, N6);
    Xub.prototype.B = function() {
        return []
    };
    g.w(Yub, N6);
    Yub.prototype.B = function() {
        var a = [];
        this.j.offlineVideoStreams && a.push.apply(a, g.pa(this.j.offlineVideoStreams));
        this.j.captionTrack && a.push.apply(a, g.pa(this.j.captionTrack));
        return [].concat(g.pa(new Set(a)))
    };
    g.w(Zub, N6);
    Zub.prototype.B = function() {
        return []
    };
    g.w($ub, N6);
    $ub.prototype.B = function() {
        return []
    };
    g.w(avb, N6);
    avb.prototype.B = function() {
        return []
    };
    g.w(bvb, N6);
    bvb.prototype.B = function() {
        return []
    };
    g.w(cvb, N6);
    cvb.prototype.B = function() {
        return []
    };
    g.w(dvb, N6);
    dvb.prototype.B = function() {
        return []
    };
    g.w(evb, N6);
    evb.prototype.B = function() {
        return []
    };
    g.w(fvb, N6);
    fvb.prototype.B = function() {
        return []
    };
    g.w(gvb, N6);
    gvb.prototype.B = function() {
        return []
    };
    g.w(hvb, N6);
    hvb.prototype.B = function() {
        return []
    };
    g.w(ivb, N6);
    ivb.prototype.B = function() {
        return []
    };
    g.w(jvb, N6);
    jvb.prototype.B = function() {
        return []
    };
    g.w(kvb, N6);
    kvb.prototype.B = function() {
        return []
    };
    g.w(lvb, N6);
    lvb.prototype.B = function() {
        return []
    };
    var exb = ["browse", "music/browse", "unplugged/browse"],
        fxb = ["offline/playlist_sync_check"],
        Wwb = ["offline"],
        nxb = ["offline/get_playback_data_entity"];
    O6.getInstance = function() {
        return g.H(function(a) {
            return a.return(new Promise(function(b) {
                g.DD().then(function(c) {
                    c ? (O6.instance || (O6.instance = new O6(c)), b(O6.instance)) : b(void 0)
                })
            }))
        })
    };
    O6.prototype.get = function(a) {
        var b = this,
            c, d, e;
        return g.H(function(f) {
            if (1 == f.j) return g.z(f, mvb(b.token), 2);
            if (3 != f.j) return c = f.B, g.z(f, c.get("prefs", a), 3);
            d = f.B;
            if (!d) return f.return();
            e = (0, g.kD)();
            return d.expirationTimestampMs <= e ? f.return() : f.return(d.value)
        })
    };
    O6.prototype.set = function(a, b, c) {
        c = void 0 === c ? 31536E3 : c;
        var d = this,
            e, f, h;
        return g.H(function(l) {
            if (1 == l.j) return e = (0, g.kD)(), f = {
                key: a,
                value: b,
                expirationTimestampMs: e + 1E3 * c
            }, g.z(l, mvb(d.token), 2);
            h = l.B;
            return g.z(l, g.pD(h, "prefs", f), 0)
        })
    };
    O6.prototype.remove = function(a) {
        var b = this,
            c;
        return g.H(function(d) {
            if (1 == d.j) return g.z(d, mvb(b.token), 2);
            c = d.B;
            return g.z(d, c.delete("prefs", a), 0)
        })
    };
    var P6;
    g.w(Q6, g.LC);
    g.w(R6, uvb);
    R6.prototype.C = function(a, b) {
        b = wvb(b);
        a = (new TextEncoder).encode(JSON.stringify(a));
        return this.j.encrypt(a, b)
    };
    R6.prototype.B = function(a, b) {
        if (!(a instanceof Uint8Array)) throw qvb(1);
        var c = new TextDecoder;
        b = wvb(b);
        a = this.j.decrypt(a, b);
        return JSON.parse(c.decode(a))
    };
    var xvb = {
        buttonEntity: gvb,
        captionTrack: Sub,
        channelHandle: Otb,
        commerceAcquisitionClientPayloadEntity: ivb,
        commerceCartListEntity: jvb,
        continuationTokenEntity: jub,
        downloadQualityPickerEntity: Ztb,
        downloadsPageRefreshTokenEntity: aub,
        downloadsPageViewConfigurationEntity: sub,
        downloadStatusEntity: $tb,
        sfvAudioItemCurrentlyPlayingEntity: $ub,
        emojiFountainDataEntity: evb,
        emojiCustomizationSetEntity: dvb,
        fakeChannel: Ptb,
        fakePlaylist: Qtb,
        fakePlaylistEntryCollection: Stb,
        fakeVideo: Ttb,
        fakeVideoDescription: Utb,
        featuredProductsEntity: xub,
        flowStateEntity: Vtb,
        iconBadgeEntity: kvb,
        interstitialInteractionStateEntity: Xtb,
        liveChatPollStateEntity: Ytb,
        liveReactionsDataEntity: fvb,
        logoEntity: Wtb,
        macroMarkerEntity: tub,
        mainDownloadsLibraryEntity: bub,
        mainDownloadsListEntity: dub,
        mainPlaylistDownloadStateEntity: eub,
        mainPlaylistEntity: kub,
        mainPlaylistVideoEntity: lub,
        mainVideoDownloadStateEntity: fub,
        mainVideoEntity: pub,
        markersEngagementPanelSyncEntity: uub,
        markersVisibilityOverrideEntity: vub,
        musicAlbumReleaseDetail: Fub,
        musicAlbumReleaseDownloadMetadataEntity: Aub,
        musicAlbumRelease: Eub,
        musicAlbumReleaseUserDetail: Gub,
        musicArtistDetail: Iub,
        musicArtist: Hub,
        musicArtistUserDetail: Jub,
        musicDownloadsLibraryEntity: Bub,
        musicLibraryEdit: Kub,
        musicLibraryStatusEntity: Lub,
        musicPlaylist: Nub,
        musicPlaylistDownloadMetadataEntity: Cub,
        musicShare: Oub,
        musicTrackDetail: Qub,
        musicTrackDownloadMetadataEntity: Dub,
        musicTrack: Pub,
        musicTrackUserDetail: Rub,
        offlineOrchestrationActionWrapperEntity: Tub,
        offlineVideoPolicy: Uub,
        offlineVideoStreams: Vub,
        offlineabilityEntity: gub,
        orchestrationWebSamplingEntity: hub,
        pageHeaderEntity: cvb,
        pinnedProductEntity: yub,
        playbackData: Wub,
        playerStateEntity: wub,
        quantityIncrementerEntity: lvb,
        refresh: Xub,
        saveToPlaylistListEntity: avb,
        settingEntity: bvb,
        transfer: Yub,
        trendingOfferEntity: zub,
        videoDownloadContextEntity: Zub,
        videoPlaybackPositionEntity: hvb,
        ytMainChannelEntity: qub,
        ytMainDownloadedVideoEntity: iub,
        ytMainVideoEntity: rub
    };
    g.w(X6, uvb);
    X6.prototype.C = function(a) {
        return a
    };
    X6.prototype.B = function(a) {
        if (a instanceof Uint8Array) throw qvb(0);
        return a
    };
    g.w(Y6, g.I);
    Y6.prototype.B = function(a) {
        Lvb(this, a.data)
    };
    Y6.prototype.xa = function() {
        this.channel.close()
    };
    var Rvb;
    var Pwb = new g.Hw("elementsCommand");
    var z7 = new g.Hw("entityBatchUpdate");
    var Dwb = new g.Hw("downloadStatusEntity");
    var Iyb = new g.Hw("mainPlaylistEntityActionMetadata");
    var U7 = new g.Hw("mainVideoEntityActionMetadata");
    var jzb = new g.Hw("musicPlaylistEntityActionMetadata");
    var yzb = new g.Hw("musicTrackEntityActionMetadata");
    var Qwb = new g.Hw("offlineOrchestrationActionCommand");
    var Xyb = new g.Hw("localImageEntityActionMetadata");
    var G7 = new g.Hw("playbackDataActionMetadata");
    var xxb = new g.Hw("transferEntityActionMetadata");
    var pxb = new g.Hw("videoPlaybackPositionEntityActionMetadata");
    g.EO("", "downloadsPageViewConfigurationEntity");
    g.EO("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity");
    var A7 = g.EO("DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", "mainDownloadsListEntity");
    g.EO("DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", "refresh");
    g.EO("SMART_DOWNLOADS_ENABLED", "settingEntity");
    g.EO("SMART_DOWNLOADS_OPT_IN_BANNER_DISMISSED", "settingEntity");
    var gwb;
    new g.ho;
    new g.ho;
    lwb.prototype.request = function(a, b, c) {
        b = void 0 === b ? {} : b;
        return this.locks.request(a, b, function(d) {
            return c(d)
        })
    };
    var f7 = g.Ta.caches,
        e7, qwb;
    d7.prototype.open = function(a) {
        return f7.open(owb(a))
    };
    d7.prototype.has = function(a) {
        return f7.has(owb(a))
    };
    d7.prototype.delete = function(a) {
        return f7.delete(owb(a))
    };
    d7.prototype.match = function(a, b) {
        var c = this,
            d, e, f, h, l, m;
        return g.H(function(n) {
            switch (n.j) {
                case 1:
                    return g.z(n, c.keys(), 2);
                case 2:
                    d = n.B, e = g.u(d), f = e.next();
                case 3:
                    if (f.done) {
                        n.Ka(5);
                        break
                    }
                    h = f.value;
                    return g.z(n, c.open(h), 6);
                case 6:
                    return l = n.B, g.z(n, l.match(a, b), 7);
                case 7:
                    if (m = n.B) return n.return(m);
                    f = e.next();
                    n.Ka(3);
                    break;
                case 5:
                    return n.return()
            }
        })
    };
    g.w(nwb, d7);
    nwb.prototype.keys = function() {
        var a, b, c, d, e, f, h, l, m;
        return g.H(function(n) {
            if (1 == n.j) return a = [], b = g.MC("CacheStorage keys"), g.z(n, f7.keys(), 2);
            c = n.B;
            d = g.u(c);
            for (e = d.next(); !e.done; e = d.next()) {
                f = e.value;
                var p = f.indexOf(":");
                h = -1 === p ? {
                    XJ: f
                } : {
                    XJ: f.substring(0, p),
                    datasyncId: f.substring(p + 1)
                };
                l = h.XJ;
                m = h.datasyncId;
                m === b && a.push(l)
            }
            return n.return(a)
        })
    };
    g.w(h7, g.I);
    h7.prototype.C = function(a) {
        this.api.ob("onOfflineOperationFailure", a.data)
    };
    h7.prototype.D = function(a) {
        this.api.ra("offlinetransferpause", a.data)
    };
    h7.prototype.xa = function() {
        var a;
        null == (a = this.j) || a.close();
        var b;
        null == (b = this.B) || b.close()
    };
    twb.prototype.jg = function() {
        this.j && j7(this)
    };
    twb.prototype.tK = function() {
        this.B && this.B.resolve();
        this.C = this.j = !1;
        this.Y()
    };
    var Nxb = ["OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"];
    var Mwb = "captionTrack downloadStatusEntity ytMainChannelEntity mainPlaylistEntity mainPlaylistDownloadStateEntity mainPlaylistVideoEntity mainVideoEntity mainVideoDownloadStateEntity offlineVideoPolicy offlineVideoStreams playbackData transfer videoDownloadContextEntity videoPlaybackPositionEntity".split(" ");
    g.w(hxb, D7);
    hxb.prototype.B = function(a) {
        return m7(a) ? lxb(this, a) : n7(a) ? mxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    g.w(oxb, D7);
    oxb.prototype.B = function(a) {
        return Cwb(a) ? qxb(this, a) : o7(a) ? rxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    g.w(sxb, D7);
    sxb.prototype.B = function(a) {
        return m7(a) ? uxb(this, a) : n7(a) ? vxb(this, a) : Cwb(a) ? wxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    Cxb.prototype.j = function(a, b) {
        var c = a.action.actionMetadata.priority - b.action.actionMetadata.priority;
        0 === c && (a.j < b.j ? c = -1 : a.j > b.j && (c = 1));
        return c
    };
    g.w(I7, g.I);
    I7.prototype.xa = function() {
        this.Y && this.Y();
        g.I.prototype.xa.call(this)
    };
    I7.prototype.createAction = function(a, b) {
        var c = g.DO(a.entityKey).entityType,
            d = g.BE(16);
        return new t7(c, d, a, b.actionId, b.rootActionId)
    };
    I7.prototype.va = function(a) {
        var b = this,
            c, d, e, f, h, l, m, n, p;
        return g.H(function(q) {
            if (1 == q.j) {
                if (b.isDisposed()) return q.return();
                d = null != (c = a.offlineOrchestrationActionWrapperEntity) ? c : new Set;
                e = [];
                f = g.u(d);
                for (h = f.next(); !h.done; h = f.next()) l = h.value, m = g.DO(l), n = m.entityId, Fxb(b.j, n) || e.push(l);
                return g.z(q, Qxb(b, e), 2)
            }
            p = q.B;
            return g.z(q, Pxb(b, p), 0)
        })
    };
    I7.prototype.retry = function() {
        var a = this;
        return g.H(function(b) {
            return g.z(b, Rxb(a), 0)
        })
    };
    g.k = Xxb.prototype;
    g.k.k$ = function(a) {
        var b = this,
            c, d, e, f;
        return g.H(function(h) {
            if (!g.EG(a.state, 128)) return h.Ka(0);
            c = a.state.Tg;
            var l = null == (d = c) ? void 0 : d.errorCode,
                m = null == (e = c) ? void 0 : e.PH;
            f = "net.connect" === l && 1 === m ? "TRANSFER_FAILURE_REASON_NETWORK_LOST" : (null == l ? 0 : l.startsWith("net.")) ? "TRANSFER_FAILURE_REASON_NETWORK" : "TRANSFER_FAILURE_REASON_INTERNAL";
            return g.z(h, b.Qw(b.player.getVideoData().videoId, f), 0)
        })
    };
    g.k.Qw = function(a, b) {
        var c = this;
        return g.H(function(d) {
            if (1 == d.j) {
                if (c.B) return d.return();
                c.B = !0;
                return "TRANSFER_FAILURE_REASON_NETWORK_LOST" === b ? (K7(c, a, !1, !0), d.Ka(0)) : g.z(d, J7(c, a), 3)
            }
            g.IS(a, 4);
            return g.z(d, c.j.Qw(b), 0)
        })
    };
    g.k.LJ = function(a) {
        2 === a.status ? (a.status !== this.C && (pyb(this.j), g.IS(a.videoId, 2)), a.mF && uyb(this.j, a.videoId, a.mF)) : 4 === a.status ? (J7(this, a.videoId), this.Qw(a.videoId, a.II ? "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" : "TRANSFER_FAILURE_REASON_INTERNAL")) : 1 === a.status && tyb(this.j);
        this.C = a.status;
        this.api.ob("localmediachange", {
            videoId: a.videoId,
            status: a.status
        })
    };
    g.k.yQ = function() {
        var a = this,
            b;
        return g.H(function(c) {
            if (1 == c.j) {
                if (a.B) return c.return();
                a.B = !0;
                b = a.player.getVideoData().videoId;
                return g.z(c, J7(a, b), 2)
            }
            return g.z(c, a.j.yQ(), 0)
        })
    };
    g.k.kO = function(a) {
        switch (a) {
            case "HD_1080":
                return "hd1080";
            case "HD":
                return "hd720";
            case "SD":
                return "large";
            case "LD":
                return "tiny";
            default:
                return "hd720"
        }
    };
    g.k.L = function(a) {
        return this.api.U().L(a)
    };
    g.w(L7, g.I);
    L7.prototype.xa = function() {
        this.B && this.B();
        g.I.prototype.xa.call(this)
    };
    L7.prototype.C = function(a) {
        var b = this,
            c, d, e, f, h, l, m, n;
        return g.H(function(p) {
            d = null != (c = a.transfer) ? c : new Set;
            e = [];
            f = g.u(d);
            for (h = f.next(); !h.done; h = f.next()) l = h.value, m = g.DO(l), n = m.entityId, e.push(n);
            return 0 === e.length ? p.return() : g.z(p, dyb(b, e), 0)
        })
    };
    g.w(iyb, g.I);
    g.k = iyb.prototype;
    g.k.xa = function() {
        this.Ca && this.Ca();
        this.Ia.dispose();
        this.D.dispose();
        this.Na && g.td(this.K.Zl, this.Na);
        this.Ma && g.td(this.K.Zl, this.Ma);
        g.I.prototype.xa.call(this)
    };
    g.k.wba = function(a) {
        var b = this,
            c, d, e;
        return g.H(function(f) {
            switch (f.j) {
                case 1:
                    c = g.EO(a, "transfer");
                    if (b.j && c === b.j.key) {
                        K7(b.N, b.G, !0);
                        b.D.stop();
                        f.Ka(0);
                        break
                    }
                    return g.z(f, Z6(b.B, {
                        mode: "readwrite",
                        Tb: !0
                    }, function(h) {
                        return S6(h, c, "transfer").then(function(l) {
                            if (l && "TRANSFER_STATE_COMPLETE" !== l.transferState && "TRANSFER_STATE_FAILED" !== l.transferState) return l.transferState = "TRANSFER_STATE_PAUSED_BY_USER", V6(h, l, "transfer").then(function() {
                                return l
                            })
                        })
                    }), 3);
                case 3:
                    d = f.B;
                    if (!d) {
                        f.Ka(0);
                        break
                    }
                    if (!a || !b.C) {
                        f.Ka(5);
                        break
                    }
                    return g.z(f, p7(a, b.C, b.B, "DOWNLOAD_STATE_PAUSED"), 5);
                case 5:
                    return g.z(f, O7(b, a), 7);
                case 7:
                    e = f.B, Awb({
                        videoId: a,
                        Bl: d,
                        offlineModeType: e
                    }), g.Aa(f)
            }
        })
    };
    g.k.vba = function() {
        var a = this;
        if (this.j && this.G) {
            K7(this.N, this.G, !1);
            var b = this.j,
                c = (null == b ? 0 : b.key) ? g.DO(b.key).entityId : "";
            c && this.C && (new Promise(function(d, e) {
                p7(c, a.C, a.B, "DOWNLOAD_STATE_PAUSED").catch(function(f) {
                    e(f)
                })
            })).catch(function(d) {
                g7("Download state setting error", d)
            })
        }
        this.D.stop()
    };
    g.k.KF = function() {
        this.j ? lyb(this, this.j) : N7(this)
    };
    g.k.f3 = function(a) {
        var b = this;
        return g.H(function(c) {
            switch (c.j) {
                case 1:
                    if (!b.j) {
                        c.Ka(2);
                        break
                    }
                    if ("TRANSFER_STATE_COMPLETE" === b.j.transferState || "TRANSFER_STATE_FAILED" === b.j.transferState || !a.transfer || !a.transfer.has(b.j.key)) {
                        c.Ka(3);
                        break
                    }
                    return g.z(c, a7(b.B, b.j.key, "transfer"), 4);
                case 4:
                    b.j = c.B;
                    if (b.j) {
                        c.Ka(3);
                        break
                    }
                    return g.z(c, myb(b), 3);
                case 3:
                    if (b.j) return c.return();
                case 2:
                    return g.z(c, N7(b), 0)
            }
        })
    };
    g.k.Qw = function(a, b) {
        var c = this,
            d, e, f, h, l;
        return g.H(function(m) {
            switch (m.j) {
                case 1:
                    if (!c.j) {
                        P7(c, "onTransferFailure: " + a);
                        m.Ka(2);
                        break
                    }
                    d = c.j;
                    f = (null == (e = d) ? 0 : e.key) ? g.DO(d.key).entityId : "";
                    a: switch (a) {
                        case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE":
                        case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE":
                        case "TRANSFER_FAILURE_REASON_PLAYABILITY":
                        case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES":
                            var n = !1;
                            break a;
                        default:
                            n = !0
                    }
                    return n && vyb(c) ? g.z(m, Q7(c, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 8) : g.z(m,
                        wyb(c, a), 5);
                case 5:
                    if (!f || !c.C) {
                        m.Ka(2);
                        break
                    }
                    return g.z(m, p7(f, c.C, c.B, "DOWNLOAD_STATE_FAILED"), 2);
                case 8:
                    return g.z(m, O7(c, f), 9);
                case 9:
                    h = m.B;
                    k7({
                        transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_RETRY"
                    }, {
                        videoId: f,
                        Bl: d,
                        offlineModeType: h
                    });
                    if (!f || !c.C) {
                        m.Ka(2);
                        break
                    }
                    return g.z(m, p7(f, c.C, c.B, "DOWNLOAD_STATE_RETRYABLE_FAILURE"), 2);
                case 2:
                    M7(c), l = N7(c, !0), b && b(l), g.Aa(m)
            }
        })
    };
    g.k.yQ = function(a) {
        var b = this,
            c, d, e, f, h, l, m, n, p, q, r, t;
        return g.H(function(v) {
            switch (v.j) {
                case 1:
                    if (!b.j) {
                        P7(b, "onMaybeTransferStreamsExpired");
                        v.Ka(2);
                        break
                    }
                    return vyb(b) ? g.z(v, Q7(b, "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH"), 9) : g.z(v, wyb(b, "TRANSFER_FAILURE_REASON_STREAM_MISSING"), 5);
                case 5:
                    if (!b.C) {
                        v.Ka(2);
                        break
                    }
                    c = b.j;
                    e = (null == (d = c) ? 0 : d.key) ? g.DO(c.key).entityId : "";
                    if (!e) {
                        v.Ka(2);
                        break
                    }
                    return g.z(v, p7(e, b.C, b.B, "DOWNLOAD_STATE_FAILED"), 2);
                case 9:
                    return b.j || P7(b, "onMaybeTransferStreamsExpiredRetryAttempting"),
                        f = b.j, l = (null == (h = f) ? 0 : h.key) ? g.DO(f.key).entityId : "", g.z(v, O7(b, l), 10);
                case 10:
                    return m = v.B, k7({
                        transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_PLAYER_RESPONSE_EXPIRATION"
                    }, {
                        videoId: l,
                        Bl: f,
                        offlineModeType: m
                    }), n = Gwb(), g.vF(n, G7, {
                        isEnqueuedForExpiredStreamUrlRefetch: !0
                    }), p = g.EO(l, "playbackData"), q = {
                        actionType: "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD",
                        entityKey: p,
                        actionMetadata: n
                    }, r = v7(new t7("playbackData", l, q)), g.z(v, $6(b.B, r, "offlineOrchestrationActionWrapperEntity"), 2);
                case 2:
                    M7(b), t = N7(b, !0),
                        a && a(t), g.Aa(v)
            }
        })
    };
    var Izb = {},
        xyb = (Izb.TRANSFER_STATE_TRANSFERRING = 1, Izb.TRANSFER_STATE_TRANSFER_IN_QUEUE = 2, Izb);
    g.k = R7.prototype;
    g.k.lP = function() {
        return this.D.promise
    };
    g.k.jS = function() {
        if (this.B && this.G) return this.D.promise;
        Ayb(this).then(this.D.resolve).catch(this.D.reject);
        return this.D.promise
    };
    g.k.ED = function(a) {
        var b = {};
        return b.playbackData = new hxb(a, this.W, this.j), b.transfer = new sxb(a, this.W), b.videoPlaybackPositionEntity = new oxb(a, this.W), b
    };
    g.k.GR = function() {
        var a = this;
        return g.H(function(b) {
            return a.B ? g.z(b, jyb(a.B), 0) : b.Ka(0)
        })
    };
    g.k.mS = function() {
        var a = this,
            b, c;
        return g.H(function(d) {
            if (1 == d.j) return a.B || a.G ? g.z(d, a.lP(), 2) : d.return();
            void 0 !== a.N && (g.JB(a.N), a.N = void 0);
            null == (b = a.B) || b.dispose();
            a.B = void 0;
            null == (c = a.G) || c.dispose();
            a.G = void 0;
            a.api.ob("onOrchestrationLostLeader");
            a.D = new g.ho;
            g.Aa(d)
        })
    };
    g.k.isOrchestrationLeader = function() {
        return this.C.j
    };
    g.k.rT = function() {
        return g.H(function(a) {
            return a.return(!1)
        })
    };
    g.k.WQ = function(a) {
        var b = this.j;
        b.api.ra("offlinetransferpause", a);
        var c;
        null == (c = b.B) || c.postMessage(a)
    };
    g.k.KF = function(a) {
        var b, c;
        return g.H(function(d) {
            if (1 == d.j) return g.z(d, c7(), 2);
            b = d.B;
            if (!b) return d.return();
            c = g.EO(a, "transfer");
            return g.z(d, Z6(b, {
                mode: "readwrite",
                Tb: !0
            }, function(e) {
                var f = S6(e, c, "transfer"),
                    h = S6(e, g.EO(a, "videoDownloadContextEntity"), "videoDownloadContextEntity");
                return g.iD.all([f, h]).then(function(l) {
                    l = g.u(l);
                    var m = l.next().value,
                        n = l.next().value;
                    return m && "TRANSFER_STATE_PAUSED_BY_USER" === m.transferState ? (m.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE", V6(e, m, "transfer").then(function() {
                        k7({
                            transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_USER_RESUME",
                            statusType: "USER_RESUMED"
                        }, {
                            videoId: a,
                            Bl: m,
                            offlineModeType: null == n ? void 0 : n.offlineModeType
                        });
                        return g.iD.resolve(null)
                    })) : g.iD.resolve(null)
                })
            }), 0)
        })
    };
    g.k.pR = function(a) {
        a = void 0 === a ? 43200 : a;
        var b = this,
            c, d, e, f, h, l, m, n;
        return g.H(function(p) {
            if (1 == p.j) return b.K.Uh() ? g.z(p, c7(), 2) : p.return(Byb());
            if (3 != p.j) {
                c = p.B;
                if (!c) return p.return([]);
                d = Date.now() / 1E3;
                return g.z(p, b7(c, "offlineVideoPolicy"), 3)
            }
            e = p.B;
            f = [];
            h = g.u(e);
            for (l = h.next(); !l.done; l = h.next()) m = l.value, Number(m.lastUpdatedTimestampSeconds) + a <= d && (n = g.DO(m.key).entityId, f.push(n));
            return f.length ? p.return(S7(b, f, b.Z, "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH")) : p.return([])
        })
    };
    g.k.refreshAllStaleEntities = function(a) {
        var b = this;
        return g.H(function(c) {
            return 1 == c.j ? g.z(c, b.pR(a), 2) : c.return(c.B)
        })
    };
    g.k.DR = function() {
        var a = this,
            b, c, d, e, f, h, l;
        return g.H(function(m) {
            if (1 == m.j) return g.z(m, c7(), 2);
            if (3 != m.j) return (b = m.B) ? g.z(m, b7(b, "transfer"), 3) : m.return([]);
            c = m.B;
            d = [];
            e = g.u(c);
            for (f = e.next(); !f.done; f = e.next()) h = f.value, "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH" === h.transferState && h.key && (l = g.DO(h.key).entityId, d.push(l));
            return m.return(Dyb(a, d))
        })
    };
    g.k.iN = function() {
        return g.H(function(a) {
            return a.return([])
        })
    };
    g.k.bZ = function() {
        return g.H(function(a) {
            g.Aa(a)
        })
    };
    g.w(Eyb, D7);
    Eyb.prototype.B = function(a) {
        return m7(a) ? Hyb(this, a) : n7(a) ? Jyb(this, a) : o7(a) ? Kyb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    var T7 = [10];
    g.w(Pyb, D7);
    Pyb.prototype.B = function(a) {
        return m7(a) ? Syb(this, a) : n7(a) ? Tyb(this, a) : o7(a) ? Uyb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    var Ryb = [10];
    g.w(Wyb, D7);
    Wyb.prototype.B = function(a) {
        return n7(a) ? Yyb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    g.w(Zyb, R7);
    g.k = Zyb.prototype;
    g.k.ED = function(a) {
        var b = R7.prototype.ED.call(this, a);
        b.mainVideoEntity = new Pyb(a, this.W, this.j);
        b.mainPlaylistEntity = new Eyb(a, this.W, this.j);
        b.mainDownloadsListEntity = new Wyb(a, this.W);
        return b
    };
    g.k.refreshAllStaleEntities = function(a, b) {
        var c = this,
            d, e, f, h, l, m, n, p, q, r, t;
        return g.H(function(v) {
            switch (v.j) {
                case 1:
                    d = [];
                    if (!c.W.L("web_player_offline_playlist_auto_refresh")) {
                        v.Ka(2);
                        break
                    }
                    return g.z(v, $yb(c, a, b), 3);
                case 3:
                    d = v.B;
                case 2:
                    return g.z(v, O6.getInstance(), 4);
                case 4:
                    return e = v.B, g.z(v, null == (f = e) ? void 0 : f.get("sdois"), 5);
                case 5:
                    return h = v.B, g.z(v, null == (l = e) ? void 0 : l.get("lmqf"), 6);
                case 6:
                    m = v.B;
                    if (!h) {
                        v.Ka(7);
                        break
                    }
                    p = d;
                    q = p.concat;
                    return g.z(v, azb(c, h, null != (n = m) ? n : "SD", 0 === a), 8);
                case 8:
                    d =
                        q.call(p, v.B);
                case 7:
                    return r = d, t = r.concat, g.z(v, R7.prototype.refreshAllStaleEntities.call(c, a, b), 9);
                case 9:
                    return d = t.call(r, v.B), v.return(d)
            }
        })
    };
    g.k.rT = function(a) {
        var b, c, d, e, f, h, l, m;
        return g.H(function(n) {
            if (1 == n.j) return g.z(n, c7(), 2);
            if (3 != n.j) return (b = n.B) ? g.z(n, a7(b, A7, "mainDownloadsListEntity"), 3) : n.return(!1);
            c = n.B;
            if (null == (d = c) ? 0 : null == (e = d.downloads) ? 0 : e.length)
                for (f = g.EO(a, "mainVideoEntity"), h = g.u(c.downloads), l = h.next(); !l.done; l = h.next())
                    if (m = l.value, m.videoItem === f) return n.return(!0);
            return n.return(!1)
        })
    };
    g.k.iN = function() {
        var a = this,
            b, c, d, e, f, h, l, m;
        return g.H(function(n) {
            if (1 == n.j) return g.z(n, c7(), 2);
            if (3 != n.j) return (b = n.B) ? g.z(n, b7(b, "downloadStatusEntity"), 3) : n.return([]);
            c = n.B;
            d = [];
            e = g.u(c);
            for (f = e.next(); !f.done; f = e.next()) h = f.value, "DOWNLOAD_STATE_USER_DELETED" === h.downloadState && h.key && (l = g.DO(h.key).entityId, d.push(l));
            return d.length ? (m = {
                offlineLoggingData: {
                    offlineDeleteReason: "OFFLINE_DELETE_REASON_USER_INITIATED"
                }
            }, n.return(S7(a, d, "mainVideoEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                m))) : n.return([])
        })
    };
    g.k.bZ = function() {
        var a, b, c, d, e, f, h, l, m, n, p, q, r, t, v, x, A, E, F, G, L, Q, R, aa, na, ta, la, va, ea, Y, Na, y, ca, Ja, cb, nb, Oa, Ua;
        return g.H(function(gb) {
            if (1 == gb.j) return g.z(gb, c7(), 2);
            if (3 != gb.j) {
                a = gb.B;
                if (!a) return gb.return();
                b = g.EO("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity");
                return g.z(gb, Z6(a, {
                    mode: "readonly",
                    Tb: !0
                }, function(qb) {
                    return g.iD.all([S6(qb, b, "mainDownloadsListEntity"), S6(qb, A7, "mainDownloadsListEntity"), T6(qb, "mainVideoEntity"), T6(qb, "mainPlaylistEntity")])
                }), 3)
            }
            c = gb.B;
            d = g.u(c);
            e = d.next().value;
            f = d.next().value;
            h = d.next().value;
            l = d.next().value;
            m = e;
            n = f;
            p = h;
            q = l;
            r = new Set;
            if (null == (t = m) ? 0 : null == (v = t.downloads) ? 0 : v.length)
                for (x = g.u(m.downloads), A = x.next(); !A.done; A = x.next()) E = A.value, F = void 0, (G = null != (F = E.videoItem) ? F : E.playlistItem) && r.add(G);
            if (null == (L = n) ? 0 : null == (Q = L.downloads) ? 0 : Q.length)
                for (R = g.u(n.downloads), aa = R.next(); !aa.done; aa = R.next()) na = aa.value, na.videoItem && r.add(na.videoItem);
            ta = new Set;
            la = [];
            va = g.u(q);
            for (ea = va.next(); !ea.done; ea = va.next()) {
                Y = ea.value;
                if (Y.videos)
                    for (Na = g.u(Y.videos), y = Na.next(); !y.done; y = Na.next()) ca = y.value, (Ja = JSON.parse(g.DO(ca).entityId).videoId) && ta.add(Ja);
                Y.key && !r.has(Y.key) && la.push(Y.key)
            }
            cb = g.u(p);
            for (nb = cb.next(); !nb.done; nb = cb.next()) Oa = nb.value, Oa.key && !r.has(Oa.key) && (Ua = g.DO(Oa.key).entityId, ta.has(Ua) || la.push(Oa.key));
            return la.length ? g.z(gb, Twb(a, la), 0) : gb.Ka(0)
        })
    };
    var ezb = "downloadStatusEntity musicAlbumRelease musicDownloadsLibraryEntity musicPlaylist musicTrack musicTrackDownloadMetadataEntity offlineVideoPolicy offlineVideoStreams playbackData transfer videoDownloadContextEntity".split(" ");
    g.w(kzb, D7);
    kzb.prototype.B = function(a) {
        return m7(a) ? mzb(this, a) : n7(a) ? nzb(this, a) : o7(a) ? ozb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    var Y7 = [10];
    g.w(qzb, D7);
    qzb.prototype.B = function(a) {
        return m7(a) ? szb(this, a) : n7(a) ? tzb(this, a) : o7(a) ? uzb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    var Z7 = [10];
    g.w(xzb, D7);
    xzb.prototype.B = function(a) {
        return m7(a) ? Bzb(this, a) : n7(a) ? Czb(this, a) : o7(a) ? Dzb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType))
    };
    var Azb = [10];
    g.w($7, R7);
    $7.prototype.ED = function(a) {
        var b = R7.prototype.ED.call(this, a);
        b.musicTrack = new xzb(a, this.j);
        b.musicPlaylist = new qzb(a, this.j);
        b.musicAlbumRelease = new kzb(a, this.j);
        return b
    };
    $7.prototype.refreshAllStaleEntities = function(a, b) {
        var c = this,
            d, e, f;
        return g.H(function(h) {
            if (1 == h.j) return e = d = [], f = e.concat, g.z(h, R7.prototype.refreshAllStaleEntities.call(c, a, b), 2);
            d = f.call(e, h.B);
            return h.return(d)
        })
    };
    g.w(Fzb, g.NV);
    g.k = Fzb.prototype;
    g.k.create = function() {
        var a = this;
        g.N(this, this.events);
        g.gS(this.W) ? this.j = new Zyb(this.W, this.player) : g.VG(this.W) && (this.j = new $7(this.W, this.player));
        this.events.T(this.player, "onPlaybackStartExternal", function() {
            a.AI()
        });
        this.events.T(this.player, "videodatachange", function() {
            a.AI()
        })
    };
    g.k.xl = function() {
        return !1
    };
    g.k.Tba = function(a, b, c, d) {
        var e = this;
        return g.H(function(f) {
            return e.j ? f.return(S7(e.j, a, b, c, d)) : f.return(Promise.reject())
        })
    };
    g.k.pR = function(a) {
        return this.j.pR(a)
    };
    g.k.refreshAllStaleEntities = function(a) {
        return this.j.refreshAllStaleEntities(a)
    };
    g.k.WQ = function(a) {
        this.j.WQ(a)
    };
    g.k.KF = function(a) {
        return this.j.KF(a)
    };
    g.k.AI = function() {
        var a = this,
            b;
        return g.H(function(c) {
            b = a.player.getVideoData();
            return g.KT(b) ? Gzb(b) && a.B !== b.clientPlaybackNonce ? g.z(c, Hzb(a, b), 0) : c.Ka(0) : c.return()
        })
    };
    g.k.isOrchestrationLeader = function() {
        return this.j.isOrchestrationLeader()
    };
    g.k.updateDownloadState = function(a, b) {
        var c, d, e, f;
        return g.H(function(h) {
            if (1 == h.j) return g.z(h, c7(), 2);
            c = h.B;
            if (!c) return g7("PES is undefined"), h.return();
            d = g.DO(a);
            e = d.entityType;
            f = d.entityId;
            return g.z(h, p7(f, e, c, b, !0), 0)
        })
    };
    g.MV("offline", Fzb);
})(_yt_player);