(function(g) {
    var window = this;
    'use strict';
    var wsb = function(a, b) {
            a.ob("onAutonavCoundownStarted", b)
        },
        j6 = function(a, b, c) {
            g.cv(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.hh(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.ES && (b.lengthText ? (e = b.lengthText || null, f = b.ow || null) : b.lengthSeconds && (e = g.OG(b.lengthSeconds), f = g.OG(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && "RD" === g.kSa(d).type;
            var l = b instanceof g.ES ? b.isLivePlayback : null,
                m = b instanceof g.ES ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                t = [];
            n && r.push(n);
            p && (r.push(p), t.push(p));
            q && t.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.WJ("Watch $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.Sk(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: t.join(" \u2022 "),
                autoplayAlternativeHeader: b.ws
            };
            b instanceof g.DS && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        k6 = function(a) {
            var b = a.U(),
                c = b.D;
            g.V.call(this, {
                I: "a",
                S: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    V: [{
                        I: "div",
                        X: {
                            "aria-label": "{{timestamp}}"
                        },
                        La: ["ytp-autonav-timestamp"],
                        ya: "{{duration}}"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-live-stamp"],
                        ya: "Live"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-upcoming-stamp"],
                        ya: "Upcoming"
                    }, {
                        I: "div",
                        S: "ytp-autonav-list-overlay",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-mix-text",
                            ya: "Mix"
                        }, {
                            I: "div",
                            S: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    ya: "{{title}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    ya: "{{author}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    ya: "{{views_and_publish_time}}"
                }]
            });
            this.J = a;
            this.suggestion =
                null;
            this.j = c;
            this.Ta("click", this.onClick);
            this.Ta("keypress", this.onKeyPress)
        },
        l6 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g.V.call(this, {
                I: "div",
                S: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.N = b;
            this.G = this.K = void 0;
            this.C = 0;
            this.container = new g.V({
                I: "div",
                S: "ytp-autonav-endscreen-countdown-container"
            });
            g.N(this, this.container);
            this.container.Ja(this.element);
            b = a.U();
            var d = b.D;
            this.J = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.J.getVideoData());
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.j = new g.V({
                I: "div",
                S: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-header"
                }, {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-alternative-header",
                    ya: "{{autoplayAlternativeHeader}}"
                }, {
                    I: "a",
                    S: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.Y : ""
                    },
                    V: [{
                        I: "div",
                        S: "ytp-autonav-endscreen-upnext-thumbnail",
                        X: {
                            style: "{{background}}"
                        },
                        V: [{
                            I: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            La: ["ytp-autonav-timestamp"],
                            ya: "{{duration}}"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-live-stamp"],
                            ya: "Live"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-upcoming-stamp"],
                            ya: "Upcoming"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-autonav-endscreen-video-info",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-title",
                            ya: "{{title}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-author",
                            ya: "{{author}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-view-and-date",
                            ya: "{{views_and_publish_time}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-author-and-view",
                            ya: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.N(this, this.j);
            this.j.Ja(this.container.element);
            d || this.T(this.j.Ga("ytp-autonav-endscreen-link-container"), "click", this.lT);
            this.J.createClientVe(this.container.element, this, 115127);
            this.J.createClientVe(this.j.Ga("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.V({
                I: "div",
                S: "ytp-autonav-overlay"
            });
            g.N(this, this.overlay);
            this.overlay.Ja(this.container.element);
            this.B = new g.V({
                I: "div",
                S: "ytp-autonav-endscreen-button-container"
            });
            g.N(this, this.B);
            this.B.Ja(this.container.element);
            this.cancelButton = new g.V({
                I: "button",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "Cancel autoplay"
                },
                ya: "Cancel"
            });
            g.N(this, this.cancelButton);
            this.cancelButton.Ja(this.B.element);
            this.cancelButton.Ta("click", this.L2, this);
            this.J.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.V({
                I: "a",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                ya: "Play Now"
            });
            g.N(this, this.playButton);
            this.playButton.Ja(this.B.element);
            this.playButton.Ta("click", this.lT, this);
            this.J.L("web_player_autonav_next_button_renderer") ? (this.J.createServerVe(this.playButton.element, this.playButton, !0), (b = this.J.getVideoData()) && xsb(this, b)) : this.J.createClientVe(this.playButton.element, this, 115130);
            this.D = new g.Ru(function() {
                    ysb(c)
                },
                500);
            g.N(this, this.D);
            this.kT();
            this.T(a, "autonavvisibility", this.kT);
            this.J.L("web_autonav_color_transition") && (this.T(a, "autonavchange", this.K2), this.T(a, "onAutonavCoundownStarted", this.Q9))
        },
        m6 = function(a) {
            var b = a.J.Cn(!0, a.J.isFullscreen());
            g.cv(a.container.element, "ytp-autonav-endscreen-small-mode", a.Vg(b));
            g.cv(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.TK);
            g.cv(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.Mf());
            g.cv(a.J.getRootNode(), "countdown-running", a.Wk());
            g.cv(a.container.element, "ytp-player-content", a.J.Mf());
            g.ls(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Wk()) {
                a.J.Mf() ? zsb(a, Math.round(Asb(a) / 1E3)) : zsb(a);
                b = !!a.suggestion && !!a.suggestion.ws;
                var c = a.J.Mf() || !b;
                g.cv(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.cv(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.PF(a.B, a.J.Mf());
                g.cv(a.element, "ytp-enable-w2w-color-transitions", Bsb(a))
            }
        },
        ysb = function(a) {
            var b = Asb(a),
                c = Math,
                d = c.min;
            var e = a.C ? Date.now() - a.C : 0;
            c = d.call(c, e, b);
            zsb(a, Math.ceil((b - c) / 1E3));
            500 >= b - c && a.Wk() ? a.select(!0) : a.Wk() && a.D.start()
        },
        Asb = function(a) {
            if (a.J.isFullscreen()) {
                var b;
                a = null == (b = a.J.getVideoData()) ? void 0 : b.VB;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.J.Ps() ? a.J.Ps() : g.gJ(a.J.U().experiments, "autoplay_time") || 1E4
        },
        xsb = function(a, b) {
            a.J.L("web_player_autonav_next_button_renderer");
            b = b.B6;
            a.K = null == b ? void 0 : b.navigationEndpoint;
            b = null == b ? void 0 : b.trackingParams;
            a.playButton && b && a.J.setTrackingParams(a.playButton.element, b)
        },
        Bsb = function(a) {
            var b;
            return !(null == (b = a.J.getVideoData()) || !b.watchToWatchTransitionRenderer)
        },
        zsb = function(a, b) {
            b = void 0 === b ? -1 : b;
            a = a.j.Ga("ytp-autonav-endscreen-upnext-header");
            g.Pf(a);
            if (0 <= b) {
                b = String(b);
                var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Up next in $SECONDS".indexOf(c);
                if (0 <= d) {
                    a.appendChild(g.Jf("Up next in $SECONDS".slice(0, d)));
                    var e = g.If("span");
                    g.Xu(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.Vf(e, b);
                    a.appendChild(e);
                    a.appendChild(g.Jf("Up next in $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.Vf(a, "Up next")
        },
        n6 = function(a, b) {
            g.V.call(this, {
                I: "div",
                La: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        o6 = function(a) {
            g.V.call(this, {
                I: "div",
                La: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-upnext-top",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-header",
                        ya: "Up Next"
                    }, {
                        I: "span",
                        S: "ytp-upnext-title",
                        ya: "{{title}}"
                    }, {
                        I: "span",
                        S: "ytp-upnext-author",
                        ya: "{{author}}"
                    }]
                }, {
                    I: "a",
                    S: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
                    V: [{
                        I: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "path",
                            S: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    I: "span",
                    S: "ytp-upnext-bottom",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-cancel"
                    }, {
                        I: "span",
                        S: "ytp-upnext-paused",
                        ya: "Autoplay is paused"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.G = this.Ga("ytp-svg-autoplay-ring");
            this.C = this.notification = this.j = this.suggestion = null;
            this.D = new g.Ru(this.tH, 5E3, this);
            this.B = 0;
            var b = this.Ga("ytp-upnext-cancel");
            this.cancelButton = new g.V({
                I: "button",
                La: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "Cancel autoplay"
                },
                ya: "Cancel"
            });
            g.N(this, this.cancelButton);
            this.cancelButton.Ta("click", this.M2, this);
            this.cancelButton.Ja(b);
            this.cancelButton && this.api.createClientVe(this.cancelButton.element,
                this, 115129);
            g.N(this, this.D);
            this.api.createClientVe(this.element, this, 18788);
            b = this.Ga("ytp-upnext-autoplay-icon");
            this.T(b, "click", this.N2);
            this.api.createClientVe(b, this, 115130);
            this.mT();
            this.T(a, "autonavvisibility", this.mT);
            this.T(a, "mdxnowautoplaying", this.B$);
            this.T(a, "mdxautoplaycanceled", this.C$);
            g.cv(this.element, "ytp-upnext-mobile", this.api.U().B)
        },
        Csb = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = null == (c = a.api.getVideoData()) ? void 0 : c.VB;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.api.Ps() ? a.api.Ps() : g.gJ(a.api.U().experiments, "autoplay_time") || 1E4
        },
        Dsb = function(a, b) {
            b = Csb(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.kD)() - a.B;
            c = d.call(c, e, b);
            b = 0 === b ? 1 : Math.min(c / b, 1);
            a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            1 <= b && a.Wk() && 3 !== a.api.getPresentingPlayerType() ? a.select(!0) : a.Wk() && a.j.start()
        },
        p6 = function(a) {
            n6.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.V({
                I: "div",
                S: "ytp-suggestion-panel",
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    ya: "More videos"
                }]
            });
            this.N = new g.V({
                I: "div",
                S: "ytp-suggestions-container"
            });
            this.videos = [];
            this.C = null;
            this.G = this.K = !1;
            this.B = new l6(this.player);
            g.N(this, this.B);
            this.B.Ja(this.element);
            a.getVideoData().Xf ? this.j = this.B : (this.j = new o6(a), g.kU(this.player, this.j.element, 4), g.N(this, this.j));
            this.overlay = new g.V({
                I: "div",
                S: "ytp-autonav-overlay-cancelled-state"
            });
            g.N(this, this.overlay);
            this.overlay.Ja(this.element);
            this.D = new g.DK(this);
            g.N(this, this.D);
            g.N(this, this.table);
            this.table.Ja(this.element);
            this.table.show();
            g.N(this, this.N);
            this.N.Ja(this.table.element);
            this.hide()
        },
        q6 = function(a) {
            var b = a.Mf();
            b !== a.G && (a.G = b, a.player.ra("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()))
        },
        r6 = function(a, b) {
            g.V.call(this, {
                I: "button",
                La: ["ytp-watch-on-youtube-button", "ytp-button"],
                ya: "{{content}}"
            });
            this.J = a;
            this.buttonType = this.buttonType = b;
            this.d0();
            2 === this.buttonType && g.Zu(this.element, "ytp-continue-watching-button");
            this.Ta("click", this.onClick);
            this.Ta("videodatachange", this.d0);
            g.PF(this, !0)
        },
        s6 = function(a, b) {
            n6.call(this, a, "embeds-lite-endscreen");
            this.J = a;
            this.df = b;
            this.J.createClientVe(this.element, this, 156943);
            this.watchButton = new r6(a, 2);
            g.N(this, this.watchButton);
            this.watchButton.Ja(this.element);
            this.hide()
        },
        Esb = function(a) {
            n6.call(this, a, "subscribecard-endscreen");
            this.j = new g.V({
                I: "div",
                S: "ytp-subscribe-card",
                V: [{
                    I: "img",
                    S: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    I: "div",
                    S: "ytp-subscribe-card-right",
                    V: [{
                        I: "div",
                        S: "ytp-author-name",
                        ya: "{{author}}"
                    }, {
                        I: "div",
                        S: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.N(this, this.j);
            this.j.Ja(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.vW("Subscribe", null, "Unsubscribe", null, !0, !1, b.Gl, b.subscribed, "trailer-endscreen", null, a, !1);
            g.N(this, this.subscribeButton);
            this.subscribeButton.Ja(this.j.Ga("html5-subscribe-button-container"));
            this.T(a, "videodatachange", this.Sa);
            this.Sa();
            this.hide()
        },
        t6 = function(a) {
            var b = a.U(),
                c = g.BK || g.PR ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.D,
                e = ["ytp-videowall-still"];
            b.B && e.push("ytp-videowall-show-text");
            g.V.call(this, {
                I: "a",
                La: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-info-bg",
                        V: [{
                            I: "span",
                            S: "ytp-videowall-still-info-content",
                            X: c,
                            V: [{
                                    I: "span",
                                    S: "ytp-videowall-still-info-title",
                                    ya: "{{title}}"
                                },
                                {
                                    I: "span",
                                    S: "ytp-videowall-still-info-author",
                                    ya: "{{author_and_views}}"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-live",
                                    ya: "Live"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-duration",
                                    ya: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        V: [" (", {
                            I: "span",
                            ya: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        ya: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.B = d;
            this.api = a;
            this.j = new g.DK(this);
            g.N(this, this.j);
            this.Ta("click", this.onClick);
            this.Ta("keypress", this.onKeyPress);
            this.j.T(a, "videodatachange", this.onVideoDataChange);
            a.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        u6 = function(a) {
            n6.call(this, a, "videowall-endscreen");
            var b = this;
            this.J = a;
            this.C = 0;
            this.stills = [];
            this.D = this.videoData = null;
            this.G = this.N = !1;
            this.Y = null;
            this.B = new g.DK(this);
            g.N(this, this.B);
            this.K = new g.Ru(function() {
                g.Zu(b.element, "ytp-show-tiles")
            }, 0);
            g.N(this, this.K);
            var c = new g.V({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Previous"
                },
                V: [g.VF()]
            });
            g.N(this, c);
            c.Ja(this.element);
            c.Ta("click", this.R2, this);
            this.table = new g.MF({
                I: "div",
                S: "ytp-endscreen-content"
            });
            g.N(this, this.table);
            this.table.Ja(this.element);
            c = new g.V({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Next"
                },
                V: [g.WF()]
            });
            g.N(this, c);
            c.Ja(this.element);
            c.Ta("click", this.Q2, this);
            a.getVideoData().Xf ? this.j = new l6(a, !0) : this.j = new o6(a);
            g.N(this, this.j);
            g.kU(this.player, this.j.element, 4);
            a.createClientVe(this.element, this, 158789);
            this.hide()
        },
        v6 = function(a) {
            return g.lU(a.player) && a.QC() && !a.D
        },
        w6 = function(a) {
            var b = a.Mf();
            b !== a.N && (a.N = b, a.player.ra("autonavvisibility"))
        },
        x6 = function(a) {
            n6.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new r6(a, 1);
            g.N(this, this.watchButton);
            this.watchButton.Ja(this.element);
            g.Jgb(a) && (this.j = new g.n2(a), g.N(this, this.j), this.B = new g.V({
                I: "div",
                La: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                V: [this.j]
            }), g.N(this, this.B), this.j.Ja(this.B.element), this.B.Ja(this.element));
            a.createClientVe(this.element, this, 156914);
            this.hide()
        },
        Isb = function(a) {
            g.NV.call(this, a);
            var b = this;
            this.endScreen = null;
            this.B = this.j = this.C = this.D = !1;
            this.listeners = new g.DK(this);
            g.N(this, this.listeners);
            var c = a.U(),
                d = a.getVideoData();
            d = d && 0 !== d.limitedPlaybackDurationInSeconds;
            g.lC(g.ZR(c)) && d && !g.hU(a) ? (this.B = !0, this.endScreen = new s6(a, g.ZT(a))) : a.md() ? this.endScreen = new x6(a) : Fsb(a) ? (this.D = !0, Gsb(this), this.j ? this.endScreen = new p6(a) : this.endScreen = new u6(a)) : c.Yg ? this.endScreen = new Esb(a) : this.endScreen = new n6(a);
            g.N(this, this.endScreen);
            g.kU(a, this.endScreen.element, 4);
            Hsb(this);
            this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.T(a, g.QJ("endscreen"), function(e) {
                b.onCueRangeEnter(e)
            });
            this.listeners.T(a, g.RJ("endscreen"), function(e) {
                b.onCueRangeExit(e)
            })
        },
        Gsb = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.Kl && a.C === b.Xf) return !1;
            a.j = b.Kl;
            a.C = b.Xf;
            return !0
        },
        Fsb = function(a) {
            a = a.U();
            return a.Yd && !a.Yg
        },
        Hsb = function(a) {
            a.player.Ef("endscreen");
            var b = a.player.getVideoData();
            b = new g.PJ(Math.max(1E3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.PJ(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.Af([b, c])
        };
    g.dU.prototype.Ps = g.fa(16, function() {
        return this.app.Ps()
    });
    g.R0.prototype.Ps = g.fa(15, function() {
        return this.getVideoData().dV
    });
    g.$T.prototype.Gr = g.fa(14, function(a) {
        this.Ei().Gr(a)
    });
    g.WW.prototype.Gr = g.fa(13, function(a) {
        this.j !== a && (this.j = a, this.Sa())
    });
    g.cY.prototype.Gr = g.fa(12, function(a) {
        this.overflowButton && this.overflowButton.Gr(a)
    });
    g.$T.prototype.Hr = g.fa(11, function(a) {
        this.Ei().Hr(a)
    });
    g.aX.prototype.Hr = g.fa(10, function(a) {
        this.j !== a && (this.j = a, this.Sa())
    });
    g.cY.prototype.Hr = g.fa(9, function(a) {
        this.shareButton && this.shareButton.Hr(a)
    });
    g.$T.prototype.tB = g.fa(8, function(a) {
        this.Ei().tB(a)
    });
    g.oW.prototype.tB = g.fa(7, function(a) {
        this.UQ !== a && (this.UQ = a, this.gq())
    });
    g.$T.prototype.sB = g.fa(6, function(a) {
        this.Ei().sB(a)
    });
    g.cY.prototype.sB = g.fa(5, function(a) {
        this.TQ !== a && (this.TQ = a, this.fq())
    });
    g.w(k6, g.V);
    k6.prototype.select = function() {
        this.J.Lo(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.mD || void 0) && this.J.logClick(this.element)
    };
    k6.prototype.onClick = function(a) {
        g.WU(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    k6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    g.w(l6, g.V);
    g.k = l6.prototype;
    g.k.GG = function(a) {
        this.suggestion !== a && (this.suggestion = a, j6(this.j, a), this.playButton.updateValue("url", this.suggestion.Sk()), m6(this))
    };
    g.k.Wk = function() {
        return 0 < this.C
    };
    g.k.BB = function() {
        this.Wk() || (this.C = Date.now(), ysb(this), wsb(this.J, Asb(this)), g.cv(this.J.getRootNode(), "countdown-running", this.Wk()))
    };
    g.k.Ww = function() {
        this.aq();
        ysb(this);
        var a = this.j.Ga("ytp-autonav-endscreen-upnext-header");
        a && g.Vf(a, "Up next")
    };
    g.k.aq = function() {
        this.Wk() && (this.D.stop(), this.C = 0)
    };
    g.k.select = function(a) {
        this.J.nextVideo(!1, void 0 === a ? !1 : a);
        this.aq()
    };
    g.k.lT = function(a) {
        g.WU(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : a.currentTarget === this.j.Ga("ytp-autonav-endscreen-link-container") && (a = this.j.Ga("ytp-autonav-endscreen-link-container"), this.J.logVisibility(a, !0), this.J.logClick(a)), this.J.L("web_player_autonav_next_button_renderer") && this.K ? (this.J.ob("innertubeCommand", this.K), this.aq()) : this.select())
    };
    g.k.L2 = function() {
        this.J.logClick(this.cancelButton.element);
        g.fU(this.J, !0);
        this.G && this.J.ob("innertubeCommand", this.G)
    };
    g.k.onVideoDataChange = function(a, b) {
        this.J.L("web_player_autonav_next_button_renderer") && xsb(this, b);
        var c;
        this.G = null == (c = b.t6) ? void 0 : c.command
    };
    g.k.Q9 = function(a) {
        if (Bsb(this)) {
            var b = this.J.getVideoData().watchToWatchTransitionRenderer,
                c = null == b ? void 0 : b.fromColorPaletteDark;
            b = null == b ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.WG(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.WG(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.WG(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.WG(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.WG(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.WG(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.cv(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.K2 = function(a) {
        this.J.L("web_autonav_color_transition") && 2 !== a && g.cv(this.element, "ytp-w2w-animate", !1)
    };
    g.k.kT = function() {
        var a = this.J.Mf();
        this.N && this.Jb !== a && g.PF(this, a);
        m6(this);
        this.J.logVisibility(this.container.element, a);
        this.J.logVisibility(this.cancelButton.element, a);
        this.J.logVisibility(this.j.Ga("ytp-autonav-endscreen-link-container"), a);
        this.J.logVisibility(this.playButton.element, a)
    };
    g.k.Vg = function(a) {
        return 400 > a.width || 459 > a.height
    };
    g.w(n6, g.V);
    g.k = n6.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.QC = function() {
        return !1
    };
    g.k.Mf = function() {
        return !1
    };
    g.k.qY = function() {
        return !1
    };
    g.w(o6, g.V);
    g.k = o6.prototype;
    g.k.tH = function() {
        this.notification && (this.D.stop(), this.Tc(this.C), this.C = null, this.notification.close(), this.notification = null)
    };
    g.k.GG = function(a) {
        this.suggestion = a;
        j6(this, a, "hqdefault.jpg")
    };
    g.k.mT = function() {
        g.PF(this, this.api.Mf());
        this.api.logVisibility(this.element, this.api.Mf());
        this.api.logVisibility(this.Ga("ytp-upnext-autoplay-icon"), this.api.Mf());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.Mf())
    };
    g.k.K$ = function() {
        window.focus();
        this.tH()
    };
    g.k.BB = function(a) {
        var b = this;
        this.Wk() || (g.uE("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.kD)(), this.j = new g.Ru(function() {
            Dsb(b, a)
        }, 25), Dsb(this, a), wsb(this.api, Csb(this, a)));
        g.av(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.V.prototype.hide.call(this)
    };
    g.k.Wk = function() {
        return !!this.j
    };
    g.k.Ww = function() {
        this.aq();
        this.B = (0, g.kD)();
        Dsb(this);
        g.Zu(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.aq = function() {
        this.Wk() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = void 0 === a ? !1 : a;
        if (this.api.U().L("autonav_notifications") && a && window.Notification && "function" === typeof document.hasFocus) {
            var b = Notification.permission;
            "default" === b ? Notification.requestPermission() : "granted" !== b || document.hasFocus() || (this.tH(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.hh()
            }), this.C = this.T(this.notification, "click", this.K$), this.D.start())
        }
        this.aq();
        this.api.nextVideo(!1, a)
    };
    g.k.N2 = function(a) {
        !g.Tf(this.cancelButton.element, a.target) && g.WU(a, this.api) && (this.api.Mf() && this.api.logClick(this.Ga("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.M2 = function() {
        this.api.Mf() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.fU(this.api, !0)
    };
    g.k.B$ = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.BB(a)
    };
    g.k.C$ = function() {
        this.api.getPresentingPlayerType();
        this.aq();
        this.hide()
    };
    g.k.xa = function() {
        this.aq();
        this.tH();
        g.V.prototype.xa.call(this)
    };
    g.w(p6, n6);
    g.k = p6.prototype;
    g.k.create = function() {
        n6.prototype.create.call(this);
        this.D.T(this.player, "appresize", this.dC);
        this.D.T(this.player, "onVideoAreaChange", this.dC);
        this.D.T(this.player, "videodatachange", this.onVideoDataChange);
        this.D.T(this.player, "autonavchange", this.nT);
        this.D.T(this.player, "onAutonavCancelled", this.O2);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        n6.prototype.show.call(this);
        (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.fU(this.player, !1);
        g.lU(this.player) && this.QC() && !this.C ? (q6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.BB() : 3 === this.videoData.autonavState && this.j.Ww()) : (g.fU(this.player, !0), q6(this));
        this.dC()
    };
    g.k.hide = function() {
        n6.prototype.hide.call(this);
        this.j.Ww();
        q6(this)
    };
    g.k.dC = function() {
        var a = this.player.Cn(!0, this.player.isFullscreen());
        q6(this);
        m6(this.B);
        g.cv(this.element, "ytp-autonav-cancelled-small-mode", this.Vg(a));
        g.cv(this.element, "ytp-autonav-cancelled-tiny-mode", this.UI(a));
        g.cv(this.element, "ytp-autonav-cancelled-mini-mode", 400 >= a.width || 360 >= a.height);
        this.overlay && g.ls(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.G)
            for (a = 0; a < this.videos.length; a++) g.cv(this.videos[a].element, "ytp-suggestion-card-with-margin", 1 === a % 2)
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length || this.player.L("web_player_autonav_empty_suggestions_fix")) {
                var b = g.eT(this.videoData);
                b && (this.j.GG(b), this.j !== this.B && this.B.GG(b))
            }
            if (a && a.length)
                for (b = 0; b < Jsb.length; ++b) {
                    var c = Jsb[b];
                    if (a && a[c]) {
                        this.videos[b] = new k6(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, j6(d, c));
                        g.N(this, this.videos[b]);
                        this.videos[b].Ja(this.N.element)
                    }
                }
            this.dC()
        }
    };
    g.k.nT = function(a) {
        1 === a ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.aq(), this.Jb && this.dC()) : (this.K = !0, this.Mf() && (2 === a ? this.j.BB() : 3 === a && this.j.Ww()))
    };
    g.k.O2 = function(a) {
        a ? this.nT(1) : (this.C = null, this.K = !1)
    };
    g.k.QC = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.Vg = function(a) {
        return (910 > a.width || 459 > a.height) && !this.UI(a) && !(400 >= a.width || 360 >= a.height)
    };
    g.k.UI = function(a) {
        return 800 > a.width && !(400 >= a.width || 360 >= a.height)
    };
    g.k.Mf = function() {
        return this.Jb && g.lU(this.player) && this.QC() && !this.C
    };
    var Jsb = [1, 3, 2, 4];
    g.w(r6, g.V);
    g.k = r6.prototype;
    g.k.d0 = function() {
        switch (this.buttonType) {
            case 1:
                var a = "Watch again on YouTube";
                var b = 156915;
                break;
            case 2:
                a = "Continue watching on YouTube";
                b = 156942;
                break;
            default:
                a = "Continue watching on YouTube", b = 156942
        }
        this.update({
            content: a
        });
        this.J.hasVe(this.element) && this.J.destroyVe(this.element);
        this.J.createClientVe(this.element, this, b)
    };
    g.k.onClick = function(a) {
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
        g.XU(this.getVideoUrl(), this.J, a);
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.J.getVideoUrl(a, !1, !1, !0);
        var b = this.J.U();
        if (g.QR(b)) {
            var c = {};
            g.QR(b) && g.ST(this.J, "addEmbedsConversionTrackingParams", [c]);
            a: {
                switch (this.buttonType) {
                    case 2:
                        b = "emb_ytp_continue_watching";
                        break a
                }
                b = "emb_ytp_watch_again"
            }
            g.lP(c, b);
            a = g.bn(a, c)
        }
        return a
    };
    g.k.logVisibility = function() {
        this.J.logVisibility(this.element, this.Jb && this.Z)
    };
    g.k.show = function() {
        g.V.prototype.show.call(this);
        this.logVisibility()
    };
    g.k.hide = function() {
        g.V.prototype.hide.call(this);
        this.logVisibility()
    };
    g.k.Nc = function(a) {
        g.V.prototype.Nc.call(this, a);
        this.logVisibility()
    };
    g.w(s6, n6);
    s6.prototype.show = function() {
        3 !== this.player.getPlayerState() && (n6.prototype.show.call(this), this.df.sB(!0), this.df.Hr(!0), this.J.U().Fe || this.df.Gr(!0), this.J.logVisibility(this.element, !0), this.watchButton.Nc(!0))
    };
    s6.prototype.hide = function() {
        n6.prototype.hide.call(this);
        this.df.sB(!1);
        this.df.Hr(!1);
        this.df.Gr(!1);
        this.J.logVisibility(this.element, !1);
        this.watchButton.Nc(!1)
    };
    g.w(Esb, n6);
    Esb.prototype.Sa = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.Gl;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.B()
    };
    g.w(t6, g.V);
    t6.prototype.select = function() {
        this.api.Lo(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.mD || void 0) && this.api.logClick(this.element)
    };
    t6.prototype.onClick = function(a) {
        if (g.QR(this.api.U()) && this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var b = this.suggestion.Sk(),
                c = {};
            g.EUa(this.api, c, "emb_rel_end");
            b = g.bn(b, c);
            g.XU(b, this.api, a)
        } else g.WU(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select()
    };
    t6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    t6.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.B = a.Of ? !1 : b.D
    };
    g.w(u6, n6);
    g.k = u6.prototype;
    g.k.create = function() {
        n6.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.kq();
        this.B.T(this.player, "appresize", this.kq);
        this.B.T(this.player, "onVideoAreaChange", this.kq);
        this.B.T(this.player, "videodatachange", this.onVideoDataChange);
        this.B.T(this.player, "autonavchange", this.LL);
        this.B.T(this.player, "onAutonavCancelled", this.P2);
        a = this.videoData.autonavState;
        a !== this.Y && this.LL(a);
        this.B.T(this.element, "transitionend", this.cba)
    };
    g.k.destroy = function() {
        g.AC(this.B);
        g.xb(this.stills);
        this.stills = [];
        n6.prototype.destroy.call(this);
        g.av(this.element, "ytp-show-tiles");
        this.K.stop();
        this.Y = this.videoData.autonavState
    };
    g.k.QC = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.show = function() {
        var a = this.Jb;
        n6.prototype.show.call(this);
        g.av(this.element, "ytp-show-tiles");
        this.player.U().B ? g.Tu(this.K) : this.K.start();
        (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.fU(this.player, !1);
        v6(this) ? (w6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.BB() : 3 === this.videoData.autonavState && this.j.Ww()) : (g.fU(this.player, !0), w6(this));
        a !== this.Jb && this.player.logVisibility(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.Jb;
        n6.prototype.hide.call(this);
        this.j.Ww();
        w6(this);
        a !== this.Jb && this.player.logVisibility(this.element, !1)
    };
    g.k.cba = function(a) {
        a.target === this.element && this.kq()
    };
    g.k.kq = function() {
        var a, b, c, d;
        var e = (null == (a = this.videoData) ? 0 : null == (b = a.suggestions) ? 0 : b.length) ? null == (c = this.videoData) ? void 0 : c.suggestions : [null == (d = this.videoData) ? void 0 : g.eT(d)];
        if (e.length) {
            g.Zu(this.element, "ytp-endscreen-paginate");
            var f = this.J.Cn(!0, this.J.isFullscreen());
            if (a = g.ZT(this.J)) a = a.Dh() ? 48 : 32, f.width -= 2 * a;
            var h = f.width / f.height;
            d = 96 / 54;
            b = a = 2;
            var l = Math.max(f.width / 96, 2),
                m = Math.max(f.height / 54, 2);
            c = e.length;
            var n = Math.pow(2, 2);
            var p = c * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) -
                n;
            for (p -= n; 0 < p && (a < l || b < m);) {
                var q = a / 2,
                    r = b / 2,
                    t = a <= l - 2 && p >= r * n,
                    v = b <= m - 2 && p >= q * n;
                if ((q + 1) / r * d / h > h / (q / (r + 1) * d) && v) p -= q * n, b += 2;
                else if (t) p -= r * n, a += 2;
                else if (v) p -= q * n, b += 2;
                else break
            }
            d = !1;
            p >= 3 * n && 6 >= c * n - p && (4 <= b || 4 <= a) && (d = !0);
            n = 96 * a;
            p = 54 * b;
            h = n / p < h ? f.height / p : f.width / n;
            h = Math.min(h, 2);
            n = Math.floor(Math.min(f.width, n * h));
            p = Math.floor(Math.min(f.height, p * h));
            f = this.table.element;
            f.ariaLive = "polite";
            g.ws(f, n, p);
            g.ls(f, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.GG(g.eT(this.videoData));
            this.j instanceof
            l6 && m6(this.j);
            g.cv(this.element, "ytp-endscreen-takeover", v6(this));
            w6(this);
            n += 4;
            p += 4;
            h = 0;
            f.ariaBusy = "true";
            for (l = 0; l < a; l++)
                for (m = 0; m < b; m++)
                    if (q = h, t = 0, d && l >= a - 2 && m >= b - 2 ? t = 1 : 0 === m % 2 && 0 === l % 2 && (2 > m && 2 > l ? 0 === m && 0 === l && (t = 2) : t = 2), q = g.Ie(q + this.C, c), 0 !== t) {
                        r = this.stills[h];
                        r || (r = new t6(this.player), this.stills[h] = r, f.appendChild(r.element));
                        v = Math.floor(p * m / b);
                        var x = Math.floor(n * l / a),
                            A = Math.floor(p * (m + t) / b) - v - 4,
                            E = Math.floor(n * (l + t) / a) - x - 4;
                        g.rs(r.element, x, v);
                        g.ws(r.element, E, A);
                        g.ls(r.element, "transitionDelay",
                            (m + l) / 20 + "s");
                        g.cv(r.element, "ytp-videowall-still-mini", 1 === t);
                        g.cv(r.element, "ytp-videowall-still-large", 2 < t);
                        t = Math.max(E, A);
                        g.cv(r.element, "ytp-videowall-still-round-large", 256 <= t);
                        g.cv(r.element, "ytp-videowall-still-round-medium", 96 < t && 256 > t);
                        g.cv(r.element, "ytp-videowall-still-round-small", 96 >= t);
                        q = e[q];
                        r.suggestion !== q && (r.suggestion = q, t = r.api.U(), v = g.Yu(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", j6(r, q, v), g.QR(t) && !r.api.L("web_player_log_click_before_generating_ve_conversion_params") &&
                            (t = q.Sk(), v = {}, g.ST(r.api, "addEmbedsConversionTrackingParams", [v]), t = g.bn(t, g.lP(v, "emb_rel_end")), r.updateValue("url", t)), (q = (q = q.sessionData) && q.itct) && r.api.setTrackingParams(r.element, q));
                        h++
                    }
            f.ariaBusy = "false";
            g.cv(this.element, "ytp-endscreen-paginate", h < c);
            for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.Rf(a.element), g.vb(a);
            this.stills.length = h
        }
    };
    g.k.onVideoDataChange = function() {
        var a, b = (null == (a = this.player.U()) ? 0 : a.L("html5_ignore_null_autonav_suggestion")) ? this.player.getVideoData(1) : this.player.getVideoData();
        if (this.videoData !== b) {
            var c;
            null == (c = this.player.U()) || !c.L("html5_ignore_null_autonav_suggestion") || null != b && g.eT(b) ? (this.C = 0, this.videoData = b, this.kq()) : this.player.qa("missg", {
                vid: (null == b ? void 0 : b.videoId) || "",
                cpn: (null == b ? void 0 : b.clientPlaybackNonce) || ""
            })
        }
    };
    g.k.Q2 = function() {
        this.C += this.stills.length;
        this.kq()
    };
    g.k.R2 = function() {
        this.C -= this.stills.length;
        this.kq()
    };
    g.k.qY = function() {
        return this.j.Wk()
    };
    g.k.LL = function(a) {
        1 === a ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.aq(), this.Jb && this.kq()) : (this.G = !0, this.Jb && v6(this) && (2 === a ? this.j.BB() : 3 === a && this.j.Ww()))
    };
    g.k.P2 = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.J.logVisibility(this.stills[a].element, !0);
            this.LL(1)
        } else this.D = null, this.G = !1;
        this.kq()
    };
    g.k.Mf = function() {
        return this.Jb && v6(this)
    };
    g.w(x6, n6);
    x6.prototype.bE = function() {
        var a;
        return null == (a = this.j) ? void 0 : a.bE()
    };
    x6.prototype.show = function() {
        if (3 !== this.player.getPlayerState()) {
            n6.prototype.show.call(this);
            var a = this.B;
            if (a) {
                var b = this.j.bE();
                g.cv(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            null == (c = g.ZT(this.player)) || c.tB(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.Nc(!0)
        }
    };
    x6.prototype.hide = function() {
        n6.prototype.hide.call(this);
        var a;
        null == (a = g.ZT(this.player)) || a.tB(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.Nc(!1)
    };
    g.w(Isb, g.NV);
    g.k = Isb.prototype;
    g.k.Zt = function() {
        var a = this.player.getVideoData(),
            b = a.mutedAutoplay;
        if ((this.player.md() || this.B) && !b) return !0;
        var c;
        var d = !!((null == a ? 0 : g.eT(a)) || (null == a ? 0 : null == (c = a.suggestions) ? 0 : c.length));
        d = !Fsb(this.player) || d;
        a = a.xk;
        c = this.player.AD();
        return d && !a && !c && !b
    };
    g.k.Mf = function() {
        return this.endScreen.Mf()
    };
    g.k.C8 = function() {
        return this.Mf() ? this.endScreen.qY() : !1
    };
    g.k.xa = function() {
        this.player.Ef("endscreen");
        g.NV.prototype.xa.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.Bb().Ne.get("heartbeat"),
                d = g.eT(a);
            !d || b.videoId !== d.videoId || a.YS ? (this.player.Lo(b.videoId, void 0, void 0, !0, !0, b), c && c.hJ("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.NV.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.NV.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Zt() && (this.endScreen.created || this.endScreen.create(), "load" === a.getId() && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        "load" === a.getId() && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        Hsb(this);
        this.D && Gsb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new p6(this.player) : this.endScreen = new u6(this.player), g.N(this, this.endScreen), g.kU(this.player, this.endScreen.element, 4))
    };
    g.MV("endscreen", Isb);
})(_yt_player);