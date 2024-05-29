(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, g = c.length, l = {}; d < g; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) l[c[0][d]] =
                        b[d];
                    return l
                }
            return !1
        }(),
        g = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        l = {
            request: function(c) {
                var g = d.requestFullscreen;
                c = c || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[g]();
                else c[g](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[d.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(b, c) {
                var d = g[b];
                d && a.addEventListener(d, c, !1)
            },
            off: function(b,
                c) {
                var d = g[b];
                d && a.removeEventListener(d, c, !1)
            },
            raw: d
        };
    d ? (Object.defineProperties(l, {
        isFullscreen: {
            get: function() {
                return !!a[d.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[d.fullscreenEnabled]
            }
        }
    }), c ? module.exports = l : window.screenfull = l) : c ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function c(a, b) {
        var c = -1,
            p = a ? a.length : 0;
        if ("number" == typeof p && -1 < p && p <= t)
            for (; ++c < p;) b(a[c], c, a);
        else d(a, b)
    }

    function b(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function d(a, b) {
        for (var c in a) w.call(a, c) && b(a[c], c, a)
    }

    function g(b) {
        return null == b ? a(b) : x.call(b).slice(8, -1)
    }

    function l(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[b] : !0)
    }

    function e(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function k(a, b) {
        var p = null;
        c(a, function(c, d) {
            p = b(p, c, d, a)
        });
        return p
    }

    function q(a) {
        function c(c) {
            return k(c, function(c, p) {
                var d = p.pattern || e(p);
                !c && (c = RegExp("\\b" + d + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + d + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + d + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(p.label && !RegExp(d, "i").test(p.label) ? p.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), p = p.label || p, c = b(c[0].replace(RegExp(d, "i"), p).replace(RegExp("; *(?:" + p + "[_-])?", "i"), " ").replace(RegExp("(" + p + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function p(b) {
            return k(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var h = n,
            f = a && "object" == typeof a && "String" != g(a);
        f && (h = a, a = null);
        var w = h.navigator || {},
            t = w.userAgent || "";
        a || (a = t);
        var C = f ? !!w.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(x.toString()),
            A = f ? "Object" : "ScriptBridgingProxyObject",
            F = f ? "Object" : "Environment",
            E = f && h.java ? "JavaPackage" : g(h.java),
            J = f ? "Object" : "RuntimeObject";
        F = (E = /\bJava/.test(E) && h.java) && g(h.environment) == F;
        var B = E ? "a" : "\u03b1",
            T = E ? "b" : "\u03b2",
            S = h.document || {},
            H = h.operamini || h.opera,
            K = r.test(K = f && H ? H["[[Class]]"] : g(H)) ? K : H = null,
            m, G = a;
        f = [];
        var L = null,
            I = a == t;
        t = I && H && "function" == typeof H.version && H.version();
        var y = function(b) {
                return k(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || e(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            u = function(b) {
                return k(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || e(c)) + "\\b", "i").exec(a) && (c.label || c)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            z = c([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            D = function(b) {
                return k(b, function(b, c, p) {
                    return b || (c[z] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(z)] || RegExp("\\b" + e(p) + "(?:\\b|\\w*\\d)", "i").exec(a)) && p
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            v = function(c) {
                return k(c, function(c, p) {
                    var d = p.pattern || e(p);
                    if (!c && (c = RegExp("\\b" + d + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var g = c,
                            h = p.label || p,
                            k = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        d && h && /^Win/i.test(g) && !/^Windows Phone /i.test(g) && (k = k[/[\d.]+$/.exec(g)]) && (g = "Windows " + k);
                        g = String(g);
                        d && h && (g = g.replace(RegExp(d, "i"), h));
                        c = g = b(g.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        y && (y = [y]);
        D && !z && (z = c([D]));
        if (m = /\bGoogle TV\b/.exec(z)) z = m[0];
        /\bSimulator\b/i.test(a) && (z = (z ? z + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(a) && f.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(a) ? (m = q(a.replace(/like iPhone OS/, "")), D = m.manufacturer, z = m.product) : /^iP/.test(z) ? (u || (u = "Safari"), v = "iOS" + ((m = / OS ([\d_]+)/i.exec(a)) ? " " + m[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(v) ? D && "Google" != D && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(z)) || /\bAndroid\b/.test(v) && /^Chrome/.test(u) && /\bVersion\//i.test(a) ? (u = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == u ? (/\bMobi/i.test(a) || (v = "Android", f.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && f.unshift("accelerated")) : "PaleMoon" == u && (m = /\bFirefox\/([\d.]+)\b/.exec(a)) ? f.push("identifying as Firefox " + m[1]) : "Firefox" == u && (m = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (v || (v = "Firefox OS"), z || (z = m[1])) : !u || (m = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !z && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(m + "/") + 8)) && (u = null), (m = z || D || v) && (z || D || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : m) + " Browser")) : "Electron" == u && (m = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && f.push("Chromium " + m) : v = "Kubuntu";
        t || (t = p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", e(u), "(?:Firefox|Minefield|NetFront)"]));
        if (m = "iCab" == y && 3 < parseFloat(t) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(y) && "WebKit" || !y && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == y && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") y = [m];
        "IE" == u && (m = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (u += " Mobile", v = "Windows Phone " + (/\+$/.test(m) ? m : m + ".x"), f.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (u = "IE Mobile", v = "Windows Phone 8.x",
            f.unshift("desktop mode"), t || (t = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != u && "Trident" == y && (m = /\brv:([\d.]+)/.exec(a)) && (u && f.push("identifying as " + u + (t ? " " + t : "")), u = "IE", t = m[1]);
        if (I) {
            if (l(h, "global"))
                if (E && (m = E.lang.System, G = m.getProperty("os.arch"), v = v || m.getProperty("os.name") + " " + m.getProperty("os.version")), F) {
                    try {
                        t = h.require("ringo/engine").version.join("."), u = "RingoJS"
                    } catch (R) {
                        (m = h.system) && m.global.system == h.system && (u = "Narwhal", v || (v = m[0].os || null))
                    }
                    u || (u = "Rhino")
                } else "object" == typeof h.process &&
                    !h.process.browser && (m = h.process) && ("object" == typeof m.versions && ("string" == typeof m.versions.electron ? (f.push("Node " + m.versions.node), u = "Electron", t = m.versions.electron) : "string" == typeof m.versions.nw && (f.push("Chromium " + t, "Node " + m.versions.node), u = "NW.js", t = m.versions.nw)), u || (u = "Node.js", G = m.arch, v = m.platform, t = (t = /[\d.]+/.exec(m.version)) ? t[0] : null));
            else g(m = h.runtime) == A ? (u = "Adobe AIR", v = m.flash.system.Capabilities.os) : g(m = h.phantom) == J ? (u = "PhantomJS", t = (m = m.version || null) && m.major + "." + m.minor +
                "." + m.patch) : "number" == typeof S.documentMode && (m = /\bTrident\/(\d+)/i.exec(a)) ? (t = [t, S.documentMode], (m = +m[1] + 4) != t[1] && (f.push("IE " + t[1] + " mode"), y && (y[1] = ""), t[1] = m), t = "IE" == u ? String(t[1].toFixed(1)) : t[0]) : "number" == typeof S.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (f.push("masking as " + u + " " + t), u = "IE", t = "11.0", y = ["Trident"], v = "Windows");
            v = v && b(v)
        }
        t && (m = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(t) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (I && w.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (L = /b/i.test(m) ? "beta" : "alpha", t = t.replace(RegExp(m + "\\+?$"), "") + ("beta" == L ? T : B) + (/\d+\+?/.exec(m) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(v)) u = "Firefox Mobile";
        else if ("Maxthon" == u && t) t = t.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(z)) "Xbox 360" == z && (v = null), "Xbox 360" == z && /\bIEMobile\b/.test(a) && f.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || z || /Browser|Mobi/.test(u)) || "Windows CE" != v && !/Mobi/i.test(a))
            if ("IE" == u && I) try {
                null === h.external &&
                    f.unshift("platform preview")
            } catch (R) {
                f.unshift("embedded")
            } else(/\bBlackBerry\b/.test(z) || /\bBB10\b/.test(a)) && (m = (RegExp(z.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || t) ? (m = [m, /BB10/.test(a)], v = (m[1] ? (z = null, D = "BlackBerry") : "Device Software") + " " + m[0], t = null) : this != d && "Wii" != z && (I && H || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == u && (v && !/^Win/.test(v) && 5.5 < t || /\bWindows XP\b/.test(v) && 8 < t || 8 == t && !/\bTrident\b/.test(a))) && !r.test(m =
                q.call(d, a.replace(r, "") + ";")) && m.name && (m = "ing as " + m.name + ((m = m.version) ? " " + m : ""), r.test(u) ? (/\bIE\b/.test(m) && "Mac OS" == v && (v = null), m = "identify" + m) : (m = "mask" + m, u = K ? b(K.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(m) && (v = null), I || (t = null)), y = ["Presto"], f.push(m));
            else u += " Mobile";
        if (m = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            m = [parseFloat(m.replace(/\.(\d)$/, ".0$1")), m];
            if ("Safari" == u && "+" == m[1].slice(-1)) u = "WebKit Nightly", L = "alpha", t = m[1].slice(0, -1);
            else if (t == m[1] || t == (m[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) t = null;
            m[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == m[0] && 537.36 == m[2] && 28 <= parseFloat(m[1]) && "WebKit" == y && (y = ["Blink"]);
            I && (C || m[1]) ? (y && (y[1] = "like Chrome"), m = m[1] || (m = m[0], 530 > m ? 1 : 532 > m ? 2 : 532.05 > m ? 3 : 533 > m ? 4 : 534.03 > m ? 5 : 534.07 > m ? 6 : 534.1 > m ? 7 : 534.13 > m ? 8 : 534.16 > m ? 9 : 534.24 > m ? 10 : 534.3 > m ? 11 : 535.01 > m ? 12 : 535.02 > m ? "13+" : 535.07 > m ? 15 : 535.11 > m ? 16 : 535.19 > m ? 17 : 536.05 > m ? 18 : 536.1 > m ? 19 : 537.01 > m ? 20 : 537.11 > m ? "21+" : 537.13 > m ? 23 : 537.18 > m ? 24 : 537.24 > m ? 25 : 537.36 > m ? 26 : "Blink" !=
                y ? "27" : "28")) : (y && (y[1] = "like Safari"), m = (m = m[0], 400 > m ? 1 : 500 > m ? 2 : 526 > m ? 3 : 533 > m ? 4 : 534 > m ? "4+" : 535 > m ? 5 : 537 > m ? 6 : 538 > m ? 7 : 601 > m ? 8 : "8"));
            y && (y[1] += " " + (m += "number" == typeof m ? ".x" : /[.+]/.test(m) ? "" : "+"));
            "Safari" == u && (!t || 45 < parseInt(t)) && (t = m)
        }
        "Opera" == u && (m = /\bzbov|zvav$/.exec(v)) ? (u += " ", f.unshift("desktop mode"), "zvav" == m ? (u += "Mini", t = null) : u += "Mobile", v = v.replace(RegExp(" *" + m + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(y && y[1]) && (f.unshift("desktop mode"), u = "Chrome Mobile", t = null, /\bOS X\b/.test(v) ? (D =
            "Apple", v = "iOS 4.3+") : v = null);
        t && 0 == t.indexOf(m = /[\d.]+$/.exec(v)) && -1 < a.indexOf("/" + m + "-") && (v = String(v.replace(m, "")).replace(/^ +| +$/g, ""));
        y && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(v) && /\bSafari\b/.test(y[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && y[1]) && (m = y[y.length - 1]) && f.push(m);
        f.length && (f = ["(" + f.join("; ") + ")"]);
        D && z && 0 > z.indexOf(D) && f.push("on " + D);
        z && f.push((/^on /.test(f[f.length -
            1]) ? "" : "on ") + z);
        if (v) {
            var N = (m = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - m[0].length - 1);
            v = {
                architecture: 32,
                family: m && !N ? v.replace(m[0], "") : v,
                version: m ? m[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !N ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(m = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(G)) && !/\bi686\b/i.test(G) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + m), "")), u && (/\bWOW64\b/i.test(a) || I && /\w(?:86|32)$/.test(w.cpuClass || w.platform) && !/\bWin64; x64\b/i.test(a)) &&
            f.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == u && 39 <= parseFloat(t) && (v.architecture = 64);
        a || (a = null);
        h = {};
        h.description = a;
        h.layout = y && y[0];
        h.manufacturer = D;
        h.name = u;
        h.prerelease = L;
        h.product = z;
        h.ua = a;
        h.version = u && t;
        h.os = v || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        h.parse = q;
        h.toString = function() {
            return this.description || ""
        };
        h.version && f.unshift(t);
        h.name && f.unshift(u);
        v && u && (v != String(v).split(" ")[0] || v != u.split(" ")[0] && !z) && f.push(z ? "(" + v + ")" : "on " +
            v);
        f.length && (h.description = f.join(" "));
        return h
    }
    var f = {
            "function": !0,
            object: !0
        },
        n = f[typeof window] && window || this,
        p = f[typeof exports] && exports;
    f = f[typeof module] && module && !module.nodeType && module;
    var h = p && f && "object" == typeof global && global;
    !h || h.global !== h && h.window !== h && h.self !== h || (n = h);
    var t = Math.pow(2, 53) - 1,
        r = /\bOpera/;
    h = Object.prototype;
    var w = h.hasOwnProperty,
        x = h.toString,
        A = q();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (n.platform = A, define(function() {
            return A
        })) : p &&
        f ? d(A, function(a, b) {
            p[b] = a
        }) : n.platform = A
}).call(this);

function CVector2(a, c) {
    var b, d;
    this._init = function(a, c) {
        b = a;
        d = c
    };
    this.add = function(a, c) {
        b += a;
        d += c
    };
    this.addV = function(a) {
        b += a.getX();
        d += a.getY()
    };
    this.scalarDivision = function(a) {
        b /= a;
        d /= a
    };
    this.subV = function(a) {
        b -= a.getX();
        d -= a.getY()
    };
    this.scalarProduct = function(a) {
        b *= a;
        d *= a
    };
    this.invert = function() {
        b *= -1;
        d *= -1
    };
    this.dotProduct = function(a) {
        return b * a.getX() + d * a.getY()
    };
    this.set = function(a, c) {
        b = a;
        d = c
    };
    this.setV = function(a) {
        b = a.getX();
        d = a.getY()
    };
    this.length = function() {
        return Math.sqrt(b * b + d * d)
    };
    this.length2 =
        function() {
            return b * b + d * d
        };
    this.normalize = function() {
        var a = this.length();
        0 < a && (b /= a, d /= a)
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(b, d);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = b;
        b = -d;
        d = a
    };
    this.rot90CW = function() {
        var a = b;
        b = d;
        d = -a
    };
    this.getRotCCW = function(a) {
        a.set(b, d);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(b, d);
        a.rot90CW()
    };
    this.ceil = function() {
        b = Math.ceil(b);
        d = Math.ceil(d)
    };
    this.round = function() {
        b = Math.round(b);
        d = Math.round(d)
    };
    this.toString = function() {
        return "Vector2: " + b + ", " +
            d
    };
    this.print = function() {
        trace("Vector2: " + b + ", " + d)
    };
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return d
    };
    this._init(a, c)
}

function toRadian(a) {
    return Math.PI / 180 * a
}

function toDegree(a) {
    return 180 / Math.PI * a
}

function randRange(a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a
}

function angleBetweenVectors(a, c) {
    var b = Math.acos(dotProductV2(a, c) / (a.length() * c.length()));
    return !0 === isNaN(b) ? 0 : b
}

function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, d)
}

function reflectVectorV2(a, c) {
    var b = new CVector2,
        d = dotProductV2(a, c);
    b.set(a.getX() - 2 * d * c.getX(), a.getY() - 2 * d * c.getY());
    return b
}

function dotProductV2(a, c) {
    return a.getX() * c.getX() + a.getY() * c.getY()
}

function pointInRect(a, c) {
    return a.getX() > c.x && a.getX() < c.x + c.width && a.getY() > c.y && a.getY() < c.y + c.height
}

function distance2(a, c) {
    return (c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY())
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
            this._iFontSize = a
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function(a) {
        this._bVerticalAlign = a
    },
    setOutline: function(a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function(a, c, b, d) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, c, b, d))
    },
    setColor: function(a) {
        this._oText.color = a
    },
    setAlpha: function(a) {
        this._oText.alpha = a
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(a, c, b, d, g, l, e, k, q, f, n, p, h, t, r, w, x) {
    this._oContainer = a;
    this._x = c;
    this._y = b;
    this._iWidth = d;
    this._iHeight = g;
    this._bMultiline = w;
    this._iFontSize = l;
    this._szAlign = e;
    this._szColor = k;
    this._szFont = q;
    this._iPaddingH = n;
    this._iPaddingV = p;
    this._bVerticalAlign = r;
    this._bFitText = t;
    this._bDebug = x;
    this._oDebugShape = null;
    this._fLineHeightFactor = f;
    this._oText = null;
    h && this.__createText(h)
}
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);

function trace(a) {
    // console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function playSound(a, c, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}
$(window).resize(function() {
    sizeHandler()
});

function getSize(a) {
    var c = a.toLowerCase(),
        b = window.document,
        d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var g = b.createElement("body");
        g.id = "vpw-test-b";
        g.style.cssText = "overflow:scroll";
        var l = b.createElement("div");
        l.id = "vpw-test-d";
        l.style.cssText = "position:absolute;top:-1000px";
        l.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        g.appendChild(l);
        d.insertBefore(g, b.head);
        a = 7 == l["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(g)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            d = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var g = a - b;
            b += g;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else d < c && (g = c - d, d += g, b += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - b / 2;
        var l = c / 2 - d / 2,
            e = CANVAS_WIDTH / d;
        if (l * e < -EDGEBOARD_X || g * e < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
            c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, g = (a - b) / 2, l = (c - d) / 2, e = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * l * e;
        s_iOffsetY = -1 * g * e;
        0 <= g && (s_iOffsetY = 0);
        0 <= l && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", s_iScaleFactor = 2 * Math.min(d /
            CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g || (g = (a - b) / 2);
        $("#canvas").css("top", g + "px");
        $("#canvas").css("left", l + "px");
        fullscreenHandler()
    }
}

function createBitmap(a, c, b) {
    var d = new createjs.Bitmap(a),
        g = new createjs.Shape;
    c && b ? g.graphics.beginFill("#fff").drawRect(0, 0, c, b) : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = g;
    return d
}

function createSprite(a, c, b, d, g, l) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-b, -d, g, l);
    a.hitArea = c;
    return a
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, d)
}

function tweenVectorsOnX(a, c, b) {
    return a + b * (c - a)
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[d], a[d] = b;
    return a
}

function bubbleSort(a) {
    do {
        var c = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (c = a[b], a[b] = a[b + 1], a[b + 1] = c, c = !0)
    } while (c)
}

function compare(a, c) {
    return a.index > c.index ? -1 : a.index < c.index ? 1 : 0
}

function easeLinear(a, c, b, d) {
    return b * a / d + c
}

function easeInQuad(a, c, b, d) {
    return b * (a /= d) * a + c
}

function easeInSine(a, c, b, d) {
    return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, d) {
    return b * (a /= d) * a * a + c
}

function getTrajectoryPoint(a, c) {
    var b = new createjs.Point,
        d = (1 - a) * (1 - a),
        g = a * a;
    b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + g * c.end.x;
    b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + g * c.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = Math.floor(a - 60 * c);
    var b = "";
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, c) {
    var b = getBounds(a, .9);
    var d = getBounds(c, .98);
    return calculateIntersection(b, d)
}

function calculateIntersection(a, c) {
    var b, d, g, l;
    var e = a.x + (b = a.width / 2);
    var k = a.y + (d = a.height / 2);
    var q = c.x + (g = c.width / 2);
    var f = c.y + (l = c.height / 2);
    e = Math.abs(e - q) - (b + g);
    k = Math.abs(k - f) - (d + l);
    return 0 > e && 0 > k ? (e = Math.min(Math.min(a.width, c.width), -e), k = Math.min(Math.min(a.height, c.height), -k), {
        x: Math.max(a.x, c.x),
        y: Math.max(a.y, c.y),
        width: e,
        height: k,
        rect1: a,
        rect2: c
    }) : null
}

function getBounds(a, c) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children,
            g = d.length,
            l;
        for (l = 0; l < g; l++) {
            var e = getBounds(d[l], 1);
            e.x < b.x && (b.x = e.x);
            e.y < b.y && (b.y = e.y);
            e.x + e.width > b.x2 && (b.x2 = e.x + e.width);
            e.y + e.height > b.y2 && (b.y2 = e.y + e.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            g =
                a.sourceRect || a.image;
            l = g.width * c;
            var k = g.height * c
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                g = a.spriteSheet.getFrame(a.currentFrame);
                l = g.rect.width;
                k = g.rect.height;
                d = g.regX;
                var q = g.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        d = d || 0;
        l = l || 0;
        q = q || 0;
        k = k || 0;
        b.regX = d;
        b.regY = q;
        g = a.localToGlobal(0 - d, 0 - q);
        e = a.localToGlobal(l - d, k - q);
        l = a.localToGlobal(l - d, 0 - q);
        d = a.localToGlobal(0 - d, k - q);
        b.x =
            Math.min(Math.min(Math.min(g.x, e.x), l.x), d.x);
        b.y = Math.min(Math.min(Math.min(g.y, e.y), l.y), d.y);
        b.width = Math.max(Math.max(Math.max(g.x, e.x), l.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(g.y, e.y), l.y), d.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 < c;) d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var d = c[b].split("=");
        if (d[0] == a) return d[1]
    }
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function CSpriteLibrary() {
    var a = {},
        c, b, d, g, l, e;
    this.init = function(a, q, f) {
        c = {};
        d = b = 0;
        g = a;
        l = q;
        e = f
    };
    this.addSprite = function(d, e) {
        if (!a.hasOwnProperty(d)) {
            var g = new Image;
            a[d] = c[d] = {
                szPath: e,
                oSprite: g,
                bLoaded: !1
            };
            b++
        }
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        b = 0;
        l.call(e)
    };
    this._onSpriteLoaded = function() {
        g.call(e);
        ++d === b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var a in c) c[a].oSprite.oSpriteLibrary = this, c[a].oSprite.szKey =
            a, c[a].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, c[a].oSprite.onerror = function(a) {
                var b = a.currentTarget;
                setTimeout(function() {
                    c[b.szKey].oSprite.src = c[b.szKey].szPath
                }, 500)
            }, c[a].oSprite.src = c[a].szPath
    };
    this.setLoaded = function(b) {
        a[b].bLoaded = !0
    };
    this.isLoaded = function(b) {
        return a[b].bLoaded
    };
    this.getNumSprites = function() {
        return b
    }
}
var CANVAS_WIDTH = 640,
    CANVAS_HALF_WIDTH = CANVAS_WIDTH / 2,
    CANVAS_HEIGHT = 960,
    FONT = "diogenesregular",
    EDGEBOARD_X = 20,
    EDGEBOARD_Y = 95,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = !1,
    SOUNDTRACK_VOLUME_IN_GAME = 1,
    GAMMA_RANGE_ACCEPTED, CANVAS_WIDTH_RANGE_ACCEPTED, PLAYER_X_START = CANVAS_WIDTH / 2,
    PLAYER_Y_START = CANVAS_HEIGHT - 200,
    PLAYER_WIDTH = 84,
    PLAYER_HEIGHT = 107,
    PLAYER_GOD_WIDTH = 282,
    PLAYER_GOD_HEIGHT = 283,
    PLAYER_FALLING_WIDTH = 78,
    PLAYER_FALLING_HEIGHT = 102,
    PLAYER_STUNNED_WIDTH = 102,
    PLAYER_STUNNED_HEIGHT = 97,
    MAX_PLATFORM_FOR_TYPE =
    26,
    PLATFORM_WIDTH = 152,
    PLATFORM_HEIGHT = 52,
    PLATFORM2_WIDTH = 177,
    PLATFORM2_HEIGHT = 127,
    PLATFORM3_WIDTH = 117,
    PLATFORM3_HEIGHT = 74,
    WINGS_WIDTH = 120,
    WINGS_HEIGHT = 106,
    NUM_ELEMENTS = 5,
    NUM_PLATFORM_CREATED_FOR_SPRING, SPRING_WIDTH = 45,
    SPRING_HEIGHT = 33,
    COIN_WIDTH = 31,
    COIN_HEIGHT = 31,
    COIN_RECTANGLE_WIDTH = 50,
    COIN_RECTANGLE_HEIGHT = 50,
    PLATFORM = 1,
    SPRING = 2,
    COIN = 3,
    WINGS = 4,
    PLAYER_SPD_MAX, PLAYER_SPD_MIN, PLAYER_ACCELERATION_NO_GIROSCOPE, PLAYER_ACCELERATION_GIROSCOPE, PLAYER_DECELERATION, OBJECT_SPD, OBJECT_SPD_ORIZZONTAL, ACCELERATION,
    DECELERATION, DECELERATION_BG_GAME_OVER, OBJECT_SPD_MAX, OBJECT_SPD_MIN, BONUS_OCCUR, COIN_OCCUR, HEIGHT_BETWEEN_OBJECT, BG_INDEX = 1,
    GOING_RIGHT = 0,
    GOING_LEFT = 1,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_START_GAME = "CLICK ON THE SCREEN TO START THE GAME",
    TEXT_GAMEOVER = "GAME OVER",
    TEXT_SCORE = "YOUR SCORE IS:",
    TEXT_PAUSE = "PAUSE",
    TEXT_DEVELOPED = "developed by NUT MARKET",
    TEXT_DESKTOP = "MOVE LEFT AND RIGHT TO GUIDE YOUR THOG AS HE JUMPS TO SCORE THE MOST APPLES!",
    TEXT_MOBILE = "MOVE LEFT AND RIGHT TO GUIDE YOUR THOG AS HE JUMPS TO SCORE THE MOST APPLES!",
    TEXT_ORIENTATION = "TURN YOUR PHONE LEFT OR RIGHT TO CONTROL YOUR THOG. THE MORE YOU'LL ROTATE THE PHONE, THE FASTER THE HERO WILL FLY",
    TEXT_PLATFORM0 = "FIXED PLATFORM",
    TEXT_PLATFORM1 = "MOVING PLATFORM",
    TEXT_PLATFORM2 = "CRASHING PLATFOMR",
    TEXT_PLATFORM3 = "VANISHING PLATFORM",
    TEXT_SPRING = "MEGA JUMP PLATFORM",
    TEXT_COIN = "EXTRA SCORE COINS",
    TEXT_WINGS = "SUPER SPEED POWERUP",
    TEXT_PRELOADER_CONTINUE = "START",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
    var a, c, b, d, g, l, e, k, q, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren();
        q.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(n);
        n = s_oSpriteLibrary.getSprite("200x200");
        e = createBitmap(n);
        e.regX = .5 * n.width;
        e.regY = .5 * n.height;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 - 180;
        f.addChild(e);
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(e.x - 100, e.y - 100, 200, 200, 10);
        f.addChild(k);
        e.mask = k;
        n = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(n);
        d.x = CANVAS_WIDTH / 2 - n.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 50;
        f.addChild(d);
        a = n.width;
        c = n.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
        f.addChild(g);
        d.mask = g;
        b = new createjs.Text("", "40px " + FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 110;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        f.addChild(b);
        n = s_oSpriteLibrary.getSprite("but_start");
        q = new CTextButton(CANVAS_WIDTH / 2.15 + 20, CANVAS_HEIGHT - 285, n, TEXT_PRELOADER_CONTINUE,
            "Arial", "#000", "bold 50", f);
        q.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        q.setVisible(!1);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(l);
            f.removeChild(l)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(e) {
        b.text = e + "%";
        100 === e && (s_oMain._onRemovePreloader(), q.setVisible(!1), b.visible = !1, d.visible = !1);
        g.graphics.clear();
        e = Math.floor(e * a / 100);
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, e, c)
    };
    this._init()
}

function CMain(a) {
    var c, b = 0,
        d = 0,
        g = STATE_LOADING,
        l, e;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = 30;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
         l = new CPreloader 
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        c = !0
    };
    this.soundLoaded = function() {
        b++;
        l.refreshLoader(Math.floor(b / d * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "death",
            loop: !1,
            volume: 1,
            ingamename: "death"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "money",
            loop: !1,
            volume: 1,
            ingamename: "money"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "platform_2_broken",
            loop: !1,
            volume: 1,
            ingamename: "platform_2_broken"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "platform_3_wind",
            loop: !1,
            volume: 1,
            ingamename: "platform_3_wind"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "power_up",
            loop: !1,
            volume: 1,
            ingamename: "power_up"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "press_button"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "spring",
            loop: !1,
            volume: 1,
            ingamename: "spring"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "voice_falling",
            loop: !1,
            volume: 1,
            ingamename: "voice_falling"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "voice_jump_1",
            loop: !1,
            volume: 1,
            ingamename: "voice_jump_1"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "voice_jump_2",
            loop: !1,
            volume: 1,
            ingamename: "voice_jump_2"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "wings",
            loop: !1,
            volume: 1,
            ingamename: "wings"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        d += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function(a, b) {
        setTimeout(function() {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(a, b) {
                    for (var c = 0; c < s_aSoundsInfo.length; c++)
                        if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
                            break
                        }
                },
                onplayerror: function(a) {
                    for (var b = 0; b < s_aSoundsInfo.length; b++)
                        if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[b].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[b].ingamename].play();
                                "soundtrack" ===
                                s_aSoundsInfo[b].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu",
            "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_scroll_1", "./sprites/bg_scroll_1.jpg");
        s_oSpriteLibrary.addSprite("bg_scroll_2", "./sprites/bg_scroll_2.jpg");
        s_oSpriteLibrary.addSprite("bg_scroll_3", "./sprites/bg_scroll_3.jpg");
        s_oSpriteLibrary.addSprite("bg_scroll_4", "./sprites/bg_scroll_4.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("player", "./sprites/player.png");
        s_oSpriteLibrary.addSprite("god",
            "./sprites/player_god_power.png");
        s_oSpriteLibrary.addSprite("falling", "./sprites/player_falling.png");
        s_oSpriteLibrary.addSprite("stunned", "./sprites/player_stunned.png");
        s_oSpriteLibrary.addSprite("platform_0", "./sprites/platform_0.png");
        s_oSpriteLibrary.addSprite("platform_1", "./sprites/platform_1.png");
        s_oSpriteLibrary.addSprite("platform_2", "./sprites/platform_2.png");
        s_oSpriteLibrary.addSprite("platform_3", "./sprites/platform_3.png");
        s_oSpriteLibrary.addSprite("god_cloud_0", "./sprites/cloud_cupido.png");
        s_oSpriteLibrary.addSprite("god_cloud_1", "./sprites/cloud_mars.png");
        s_oSpriteLibrary.addSprite("god_cloud_2", "./sprites/cloud_poseidon.png");
        s_oSpriteLibrary.addSprite("clouds_in_overlay", "./sprites/clouds.png");
        s_oSpriteLibrary.addSprite("spring", "./sprites/spring.png");
        s_oSpriteLibrary.addSprite("wings", "./sprites/wings.png");
        s_oSpriteLibrary.addSprite("coin", "./sprites/coin.png");
        s_oSpriteLibrary.addSprite("help_monitor", "./sprites/help_monitor.png");
        s_oSpriteLibrary.addSprite("help_mouse", "./sprites/help_mouse.png");
        s_oSpriteLibrary.addSprite("help_smartphone", "./sprites/help_smartphone.png");
        s_oSpriteLibrary.addSprite("help_touch", "./sprites/help_touch.png");
        s_oSpriteLibrary.addSprite("smartphone_rotation", "./sprites/smartphone_rotation.png");
        s_oSpriteLibrary.addSprite("dividing_line", "./sprites/dividing_line.png");
        s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        l.refreshLoader(Math.floor(b / d * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() {
        l.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        g = STATE_MENU
    };
    this.gotoGame = function(a) {
        e =
            new CGame(k, a);
        g = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        g = STATE_HELP
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            g === STATE_GAME && e.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var k = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_bCanOrientate = !1,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_bFullscreen = !1,
    s_aSounds, s_aSoundsInfo;

function CTextButton(a, c, b, d, g, l, e, k) {
    var q, f, n, p, h, t, r, w, x, A;
    this._init = function(a, b, c, d, e, h, g) {
        q = !1;
        f = 1;
        n = [];
        p = [];
        A = createBitmap(c);
        w = new createjs.Container;
        w.x = a;
        w.y = b;
        w.regX = c.width / 2;
        w.regY = c.height / 2;
        s_bMobile || (w.cursor = "pointer");
        w.addChild(A, x);
        k.addChild(w);
        x = new CTLText(w, 40, 0, c.width - 80, c.height, g, "center", h, e, 1, 2, 2, d, !0, !0, !1, !1);
        this._initListener()
    };
    this.unload = function() {
        w.off("mousedown", h);
        w.off("pressup", t);
        k.removeChild(w)
    };
    this.setVisible = function(a) {
        w.visible = a
    };
    this.setAlign =
        function(a) {
            x.textAlign = a
        };
    this.setTextX = function(a) {
        x.x = a
    };
    this.setScale = function(a) {
        f = w.scaleX = w.scaleY = a
    };
    this.enable = function() {
        q = !1
    };
    this.disable = function() {
        q = !0
    };
    this._initListener = function() {
        h = w.on("mousedown", this.buttonDown);
        t = w.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        n[a] = b;
        p[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        n[a] = b;
        p[a] = c;
        r = d
    };
    this.buttonRelease = function() {
        q || (playSound("but_click", 1, !1), w.scaleX = f, w.scaleY = f, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(p[ON_MOUSE_UP],
            r))
    };
    this.buttonDown = function() {
        q || (w.scaleX = .9 * f, w.scaleY = .9 * f, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        w.x = a;
        w.y = b
    };
    this.tweenPosition = function(a, b, c, p, d, e, h) {
        createjs.Tween.get(w).wait(p).to({
            x: a,
            y: b
        }, c, d).call(function() {
            void 0 !== e && e.call(h)
        })
    };
    this.changeText = function(a) {
        x.refreshText(a)
    };
    this.setX = function(a) {
        w.x = a
    };
    this.setY = function(a) {
        w.y = a
    };
    this.getButtonImage = function() {
        return w
    };
    this.getX = function() {
        return w.x
    };
    this.getY = function() {
        return w.y
    };
    this.getSprite = function() {
        return w
    };
    this.getScale = function() {
        return w.scaleX
    };
    this._init(a, c, b, d, g, l, e)
}

function CToggle(a, c, b, d, g) {
    var l, e, k, q = [],
        f, n, p;
    this._init = function(a, b, c, d) {
        e = [];
        k = [];
        var h = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        l = d;
        p = createSprite(h, "state_" + l, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        p.x = a;
        p.y = b;
        p.stop();
        p.cursor = "pointer";
        g.addChild(p);
        this._initListener()
    };
    this.unload = function() {
        p.off("mousedown", f);
        p.off("pressup", n);
        g.removeChild(p)
    };
    this._initListener =
        function() {
            f = p.on("mousedown", this.buttonDown);
            n = p.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, p) {
        e[a] = b;
        k[a] = c;
        q = p
    };
    this.setActive = function(a) {
        l = a;
        p.gotoAndStop("state_" + l)
    };
    this.buttonRelease = function() {
        p.scaleX = 1;
        p.scaleY = 1;
        playSound("press_button", 1, !1);
        l = !l;
        p.gotoAndStop("state_" + l);
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(k[ON_MOUSE_UP], q)
    };
    this.buttonDown = function() {
        p.scaleX = .9;
        p.scaleY = .9;
        e[ON_MOUSE_DOWN] &&
            e[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], q)
    };
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    };
    this.setVisible = function(a) {
        p.visible = a
    };
    this._init(a, c, b, d)
}

function CGfxButton(a, c, b, d) {
    var g, l, e, k = [],
        q, f, n;
    this._init = function(a, b, c) {
        g = 1;
        l = [];
        e = [];
        n = createBitmap(c);
        n.x = a;
        n.y = b;
        n.regX = c.width / 2;
        n.regY = c.height / 2;
        n.cursor = "pointer";
        d.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        n.off("mousedown", q);
        n.off("pressup", f);
        d.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this._initListener = function() {
        q = n.on("mousedown", this.buttonDown);
        f = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        e[a] = c
    };
    this.addEventListenerWithParams =
        function(a, b, c, d) {
            l[a] = b;
            e[a] = c;
            k = d
        };
    this.buttonRelease = function() {
        n.scaleX = g;
        n.scaleY = g;
        l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(e[ON_MOUSE_UP], k)
    };
    this.buttonDown = function() {
        n.scaleX = .9 * g;
        n.scaleY = .9 * g;
        playSound("press_button", 1, !1);
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], k)
    };
    this.setScale = function(a) {
        g = a;
        n.scaleX = a;
        n.scaleY = a
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function(a) {
        n.x = a
    };
    this.setY = function(a) {
        n.y = a
    };
    this.getButtonImage = function() {
        return n
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    this._init(a, c, b);
    return this
}

function CMenu() {
    var a, c, b, d, g, l, e, k, q, f, n, p, h = null,
        t = null;
    this._init = function() {
        setVolume("soundtrack", 1);
        e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(e);
        window.addEventListener("deviceorientation", function(a) {
            null !== a.gamma && (s_bCanOrientate = !0)
        }, !1);
        var r = s_oSpriteLibrary.getSprite("but_play");
        k = new CGfxButton(CANVAS_WIDTH / 2.15 + 20, CANVAS_HEIGHT - 285, r, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r = s_oSpriteLibrary.getSprite("audio_icon"),
            g = CANVAS_WIDTH - r.height / 2 - 10, l = r.height / 2 + 10, f = new CToggle(g, l, r, s_bAudioActive, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = s_oSpriteLibrary.getSprite("but_credits");
        b = r.height / 2 + 10;
        d = r.height / 2 + 10;
        n = new CGfxButton(b, d, r, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onButCreditRelease, this);
        r = window.document;
        var w = r.documentElement;
        h = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
        t = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen ||
            r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (h = !1);
        h && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + r.width / 2 + 10, c = d, p = new CToggle(a, c, r, s_bFullscreen, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 1E3).call(function() {
            q.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        k.unload();
        k = null;
        q.visible = !1;
        n.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), f = null;
        h && screenfull.enabled && p.unload();
        s_oStage.removeChild(e);
        s_oMenu = e = null
    };
    this.refreshButtonPos = function(e, k) {
        n.setPosition(b + s_iOffsetX, s_iOffsetY + d);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || f.setPosition(g - e, k + l);
        h && screenfull.enabled && p.setPosition(a + s_iOffsetX, c + s_iOffsetY)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoHelp()
    };
    this.resetFullscreenBut = function() {
        h && screenfull.enabled && p.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? t.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButCreditRelease = function() {
        new CCreditsPanel
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CHelp() {
    var a = this,
        c, b, d, g, l, e, k, q, f, n;
    this._init = function() {
        c = createBitmap(s_oSpriteLibrary.getSprite("bg_scroll_1"));
        s_oStage.addChild(c);
        b = new createjs.Container;
        b.alpha = 0;
        d = new createjs.Container;
        d.alpha = 0;
        c = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        s_oStage.addChild(c);
        var a = 400,
            h = 160;
        g = new CTLText(b, CANVAS_WIDTH / 2 - a / 2 + 1, CANVAS_HEIGHT / 2 - h / 2 + 130, a, h, 25, "center", "#410701", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        l = new CTLText(b, CANVAS_WIDTH / 2 - a / 2, CANVAS_HEIGHT / 2 - h / 2 + 130, a, h, 25, "center", "#ffb400", 
            FONT, 1, 2, 2, "", !0, !0, !0, !1);
            s_bMobile ? s_bCanOrientate ? (g.refreshText(TEXT_ORIENTATION), l.refreshText(TEXT_ORIENTATION), a = {
            images: [s_oSpriteLibrary.getSprite("smartphone_rotation")],
            framerate: 15,
            frames: {
                width: 166,
                height: 166,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 19, "idle"]
            }
        },
        
        a = new createjs.SpriteSheet(a), e = createSprite(a, "idle", 0, 0, 166, 166), 
        e.x = CANVAS_WIDTH / 2 - 80, e.y = CANVAS_HEIGHT / 2 - 130, 
        b.addChild(e)) : (g.refreshText(TEXT_MOBILE), 
        l.refreshText(TEXT_MOBILE), 
        e = createBitmap(s_oSpriteLibrary.getSprite("help_smartphone")),
            e.x = CANVAS_WIDTH / 2 - 50, 
            e.y = CANVAS_HEIGHT / 2 - 130, b.addChild(e), 
            k = createBitmap(s_oSpriteLibrary.getSprite("help_touch")), 
            k.x = CANVAS_WIDTH / 2 - 30, k.y = CANVAS_HEIGHT / 2 - 60, 
            this.moveCursorRight(k), 
            b.addChild(k)) : (g.refreshText(TEXT_DESKTOP), 
            l.refreshText(TEXT_DESKTOP ), 
            e = createBitmap(s_oSpriteLibrary.getSprite("help_monitor")), 
            e.x = CANVAS_WIDTH / 2 - 80, e.y = CANVAS_HEIGHT / 2 - 130, 
            b.addChild(e), k = createBitmap(s_oSpriteLibrary.getSprite("help_mouse")), 
            k.x = CANVAS_WIDTH / 2 - 10, k.y = CANVAS_HEIGHT / 2 - 60, this.moveCursorRightDesktop(k),
            b.addChild(k));
        s_oStage.addChild(b);
        a = 200;
        h = 400;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 - 139, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_PLATFORM0, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 - 140, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_PLATFORM0, !0, !0, !0, !1);
        a = {
            images: [s_oSpriteLibrary.getSprite("platform_0")],
            framerate: 1,
            frames: {
                width: PLATFORM_WIDTH,
                height: PLATFORM_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 7, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a,
            "idle", 0, 0, PLATFORM_WIDTH, PLATFORM_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 200;
        a.y = CANVAS_HEIGHT / 2 - 170;
        d.addChild(a);
        a = createBitmap(s_oSpriteLibrary.getSprite("dividing_line"));
        a.x = CANVAS_WIDTH / 2 - 170;
        a.y = CANVAS_HEIGHT / 2 - 115;
        d.addChild(a);
        a = 200;
        h = 40;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 - 79, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_PLATFORM1, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 - 80, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_PLATFORM1, !0, !0, !0, !1);
        a = {
            images: [s_oSpriteLibrary.getSprite("platform_1")],
            framerate: 28,
            frames: {
                width: PLATFORM_WIDTH,
                height: PLATFORM_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 7, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "idle", 0, 0, PLATFORM_WIDTH, PLATFORM_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 200;
        a.y = CANVAS_HEIGHT / 2 - 110;
        d.addChild(a);
        a = createBitmap(s_oSpriteLibrary.getSprite("dividing_line"));
        a.x = CANVAS_WIDTH / 2 - 170;
        a.y = CANVAS_HEIGHT / 2 - 55;
        d.addChild(a);
        a = 200;
        h = 40;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 - 19, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_PLATFORM2, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 - 20, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_PLATFORM2, !0, !0, !0, !1);
        a = {
            images: [s_oSpriteLibrary.getSprite("platform_2")],
            framerate: 28,
            frames: {
                width: PLATFORM2_WIDTH,
                height: PLATFORM2_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 8, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "idle", 0, 0, PLATFORM2_WIDTH, PLATFORM2_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 213;
        a.y = CANVAS_HEIGHT / 2 - 50;
        d.addChild(a);
        a = createBitmap(s_oSpriteLibrary.getSprite("dividing_line"));
        a.x = CANVAS_WIDTH / 2 - 170;
        a.y = CANVAS_HEIGHT / 2 + 5;
        d.addChild(a);
        a = 200;
        h = 40;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 + 41, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_PLATFORM3, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 + 40, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_PLATFORM3, !0, !0, !0, !1);
        a = {
            images: [s_oSpriteLibrary.getSprite("platform_3")],
            framerate: 28,
            frames: {
                width: PLATFORM3_WIDTH,
                height: PLATFORM3_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 10, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "idle", 0, 0, PLATFORM3_WIDTH, PLATFORM3_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 185;
        a.y = CANVAS_HEIGHT / 2 + 20;
        d.addChild(a);
        a = createBitmap(s_oSpriteLibrary.getSprite("dividing_line"));
        a.x = CANVAS_WIDTH / 2 - 170;
        a.y = CANVAS_HEIGHT / 2 + 65;
        d.addChild(a);
        a = 200;
        h = 40;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 + 100, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_SPRING, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 + 99, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_SPRING, !0, !0, !0, !1);
        a = {
            images: [s_oSpriteLibrary.getSprite("spring")],
            framerate: 10,
            frames: {
                width: SPRING_WIDTH,
                height: SPRING_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [1, 7, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "idle", 0, 0, SPRING_WIDTH, SPRING_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 150;
        a.y = CANVAS_HEIGHT / 2 + 83;
        d.addChild(a);
        a = createBitmap(s_oSpriteLibrary.getSprite("dividing_line"));
        a.x = CANVAS_WIDTH / 2 - 170;
        a.y = CANVAS_HEIGHT / 2 + 125;
        d.addChild(a);
        a = 200;
        h = 40;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 + 158, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_COIN, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 + 157, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_COIN, !0, !0, !0, !1);
        a = s_oSpriteLibrary.getSprite("coin");
        a = {
            images: [a],
            framerate: 30,
            frames: {
                width: COIN_WIDTH,
                height: COIN_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 19, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "idle", 0, 0, COIN_WIDTH, COIN_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 145;
        a.y = CANVAS_HEIGHT / 2 + 145;
        d.addChild(a);
        a = createBitmap(s_oSpriteLibrary.getSprite("dividing_line"));
        a.x = CANVAS_WIDTH / 2 -
            170;
        a.y = CANVAS_HEIGHT / 2 + 185;
        d.addChild(a);
        a = 200;
        h = 40;
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 51, CANVAS_HEIGHT / 2 - h / 2 + 221, a, h, 20, "center", "#410701", FONT, 1, 2, 2, TEXT_WINGS, !0, !0, !0, !1);
        new CTLText(d, CANVAS_WIDTH / 2 - a / 2 + 50, CANVAS_HEIGHT / 2 - h / 2 + 220, a, h, 20, "center", "#ffb400", FONT, 1, 2, 2, TEXT_WINGS, !0, !0, !0, !1);
        a = s_oSpriteLibrary.getSprite("wings");
        a = {
            images: [a],
            framerate: 28,
            frames: {
                width: WINGS_WIDTH,
                height: WINGS_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 23, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a,
            "idle", 0, 0, WINGS_WIDTH, WINGS_HEIGHT);
        a.x = CANVAS_WIDTH / 2 - 195;
        a.y = CANVAS_HEIGHT / 2 + 175;
        d.addChild(a);
        s_oStage.addChild(d);
        q = createBitmap(s_oSpriteLibrary.getSprite("but_skip"));
        q.x = CANVAS_WIDTH / 2 - 200;
        q.y = CANVAS_HEIGHT / 2 + 288;
        q.regX = 30;
        q.regY = 43;
        q.scaleX = -1;
        s_oStage.addChild(q);
        f = createBitmap(s_oSpriteLibrary.getSprite("but_skip"));
        f.x = CANVAS_WIDTH / 2 + 200;
        f.y = CANVAS_HEIGHT / 2 + 288;
        f.regX = 30;
        f.regY = 43;
        s_oStage.addChild(f);
        n = createBitmap(s_oSpriteLibrary.getSprite("but_next"));
        n.x = CANVAS_WIDTH / 2 - 100;
        n.y = CANVAS_HEIGHT /
            2 + 250;
        s_oStage.addChild(n);
        q.alpha = 0;
        f.alpha = 0;
        this.show()
    };
    this.moveCursorRightDesktop = function(a) {
        var b = this;
        createjs.Tween.get(a).to({
            x: CANVAS_WIDTH / 2 + 40
        }, 1E3).call(function() {
            b.moveCursorLeftDesktop(a)
        })
    };
    this.moveCursorLeftDesktop = function(a) {
        var b = this;
        createjs.Tween.get(a).to({
            x: CANVAS_WIDTH / 2 - 80
        }, 1E3).call(function() {
            b.moveCursorRightDesktop(a)
        })
    };
    this.moveCursorRight = function(a) {
        var b = this;
        createjs.Tween.get(a).to({
            x: CANVAS_WIDTH / 2
        }, 1E3).call(function() {
            b.moveCursorLeft(a)
        })
    };
    this.moveCursorLeft =
        function(a) {
            var b = this;
            createjs.Tween.get(a).to({
                x: CANVAS_WIDTH / 2 - 55
            }, 1E3).call(function() {
                b.moveCursorRight(a)
            })
        };
    this._initListener = function() {
        q.addEventListener("click", this._previousPage);
        f.addEventListener("click", this._nextPage);
        n.addEventListener("click", this._onExit)
    };
    this._previousPage = function() {
        createjs.Tween.get(b).to({
            alpha: 1
        }, 1E3).call(function() {});
        createjs.Tween.get(d).to({
            alpha: 0
        }, 500).call(function() {});
        createjs.Tween.get(f).to({
            alpha: 1
        }, 1E3).call(function() {});
        createjs.Tween.get(q).to({
                alpha: 0
            },
            500).call(function() {})
    };
    this._nextPage = function() {
        createjs.Tween.get(b).to({
            alpha: 0
        }, 500).call(function() {});
        createjs.Tween.get(d).to({
            alpha: 1
        }, 1E3).call(function() {});
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {});
        createjs.Tween.get(q).to({
            alpha: 1
        }, 1E3).call(function() {})
    };
    this.show = function() {
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            a._initListener()
        })
    };
    this._onExit = function() {
        a.unload();
        s_oMain.gotoGame()
    };
    this.unload = function() {
        q.removeAllEventListeners("click");
        f.removeAllEventListeners("click");
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this._init();
    return this
}

function CGame(a) {
    var c = 0,
        b = 0,
        d = 0,
        g, l = 0,
        e, k = 0,
        q = 0,
        f, n = 0,
        p = 0,
        h = 0,
        t = 0,
        r = 0,
        w = 0,
        x, A = null,
        C = [],
        O, U, Q, W, P, Y = [
            [0],
            [0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2],
            [1, 1, 1, 2, 2, 2, 2, 2],
            [1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
            [1, 2, 2, 2, 3, 3, 3, 3],
            [2, 2, 2, 3, 3, 3]
        ],
        V, M = [],
        F = [],
        E = [],
        J = [],
        B = [],
        T = !1,
        S = !1,
        H = !1,
        K = !0,
        m = !1,
        G = !1,
        L = !1,
        I = !1,
        y = !1,
        u, z = null,
        D = this,
        v, N, R = null,
        X;
    this._init = function() {
        V = HEIGHT_BETWEEN_OBJECT;
        e = CANVAS_HEIGHT - 275;
        f = OBJECT_SPD;
        g = V[0];
        $(s_oMain).trigger("start_level", 1);
        q = Math.floor((CANVAS_HEIGHT + g) / g) + 5;
        O = new createjs.Container;
        s_oStage.addChild(O);
        v = new CScrollingBg(O);
        Q = new createjs.Container;
        O.addChild(Q);
        P = new createjs.Container;
        O.addChild(P);
        for (var a = 0; a < MAX_PLATFORM_FOR_TYPE; a++) M.push(new CPlatform(-150, CANVAS_HEIGHT + 150, 0, P)), F.push(new CPlatform(-150, CANVAS_HEIGHT + 150, 1, P)), E.push(new CPlatform(-150, CANVAS_HEIGHT + 150, 2, P)), J.push(new CPlatform(-150, CANVAS_HEIGHT + 150, 3, P)), C.push(new CBonus(-150, CANVAS_HEIGHT + 150, COIN, P));
        this._controlIfAllReady();
        W = new createjs.Container;
        O.addChild(W);
        x = new CPlayer(W);
        u = new CInterface;
        U = new createjs.Container;
        s_oStage.addChild(U);
        a = createBitmap(s_oSpriteLibrary.getSprite("help_touch"));
        a.x = CANVAS_WIDTH / 2 - 50;
        a.y = CANVAS_HEIGHT / 2 - 25;
        X = new createjs.Shape;
        X.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        var b = new createjs.Text(TEXT_START_GAME, " 40px " + FONT, "#410701");
        b.x = CANVAS_WIDTH / 2 + 2;
        b.y = CANVAS_HEIGHT / 2 - 140;
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.lineWidth = 500;
        var c = new createjs.Text(TEXT_START_GAME, " 40px " + FONT, "#ffb400");
        c.x = CANVAS_WIDTH /
            2;
        c.y = CANVAS_HEIGHT / 2 - 142;
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.lineWidth = 500;
        U.addChild(X, a, b, c);
        this.startSpeedIncrement(a);
        O.on("mousedown", this.setUpdateTrue);
        this._initMouseMove()
    };
    this._controlIfAllReady = function() {
        M.length === MAX_PLATFORM_FOR_TYPE && (k += M.length);
        F.length === MAX_PLATFORM_FOR_TYPE && (k += F.length);
        E.length === MAX_PLATFORM_FOR_TYPE && (k += E.length);
        J.length === MAX_PLATFORM_FOR_TYPE && (k += J.length);
        C.length === MAX_PLATFORM_FOR_TYPE && (k += C.length);
        if (k >= MAX_PLATFORM_FOR_TYPE *
            (NUM_ELEMENTS - 1))
            for (var a = 0; a < q; a++) this._createRow();
        k = 0
    };
    this._createRow = function() {
        if (7E3 <= c) {
            if (5 === l) N = new CCloud(e, 2, Q);
            else {
                var a = Math.floor(300 * Math.random() + 1);
                1 === a && (A = new CCloud(e, Math.floor(2 * Math.random()), Q))
            }
            l = 6;
            g = V[3]
        } else 5E3 <= c && 7E3 > c ? (4 === l && (N = new CCloud(e, 1, Q)), l = 5) : 2500 <= c && 5E3 > c ? (3 === l && (N = new CCloud(e, 0, Q)), l = 4, g = V[2]) : 1500 <= c && 2500 > c ? (l = 3, g = V[1]) : l = 1E3 <= c && 1500 > c ? 2 : 500 <= c && 1E3 > c ? 1 : 0;
        1500 <= c && null === R && (a = Math.floor(300 * Math.random() + 1), 1 === a && (R = new CCloud(e, 3, Q)));
        e -= g;
        a = Math.random() * (CANVAS_WIDTH - PLATFORM_WIDTH);
        var d = e;
        var k = Y[l][Math.floor(Math.random() * Y[l].length)];
        2 === k && 1 > b ? b++ : 2 === k && 1 <= b && (k = 1, b = 0);
        B.push(this.getFirstAvailableObstacle(k));
        k = B.length - 1;
        null !== B[k] ? B[k].changeStatusOn(a, d) : B.pop();
        p++;
        p >= NUM_PLATFORM_CREATED_FOR_SPRING && (B[k].spawnSpring(), p = 0);
        a = Math.floor(100 * Math.random());
        a <= COIN_OCCUR && t < C.length ? (C[t].changeStatusOn(Math.random() * (CANVAS_WIDTH - COIN_WIDTH) + COIN_WIDTH, e - 2 * COIN_HEIGHT), t++) : a <= BONUS_OCCUR && !A && !y && (A = new CBonus(Math.random() *
            (CANVAS_WIDTH - WINGS_WIDTH) + WINGS_WIDTH, e - WINGS_HEIGHT, WINGS, P))
    };
    this.getFirstAvailableObstacle = function(a) {
        switch (a) {
            case 0:
                return 0 < M.length ? (a = M.length - 1, a = M[a], M.pop(), a) : null;
            case 1:
                return 0 < F.length ? (a = F.length - 1, a = F[a], F.pop(), a) : null;
            case 2:
                return 0 < E.length ? (a = E.length - 1, a = E[a], E.pop(), a) : null;
            case 3:
                return 0 < J.length ? (a = J.length - 1, a = J[a], J.pop(), a) : null
        }
    };
    this._initMouseMove = function() {
        if (s_bCanOrientate) window.addEventListener("deviceorientation", function(a) {
            a.gamma < GAMMA_RANGE_ACCEPTED &&
                a.gamma > -GAMMA_RANGE_ACCEPTED ? r = a.gamma / GAMMA_RANGE_ACCEPTED : (r = 0 > a.gamma ? -1 : 1, w = PLAYER_ACCELERATION_GIROSCOPE)
        }, !1);
        else s_oStage.on("stagemousemove", function(a) {
            r = (a.stageX - CANVAS_HALF_WIDTH) / (CANVAS_HALF_WIDTH - CANVAS_WIDTH_RANGE_ACCEPTED);
            1 < Math.abs(r) && (r = 1);
            a.stageX < CANVAS_HALF_WIDTH && (r = -1 * Math.abs(r));
            w = PLAYER_ACCELERATION_NO_GIROSCOPE
        })
    };
    this.setUpdateTrue = function() {
        T || G || (createjs.Tween.get(U).to({
                alpha: 0
            }, 500).call(function() {
                s_oStage.removeChild(U)
            }), O.off("mousedown", this.setUpdateTrue),
            T = L = !0, x.showJumpingAnimation(), x.moveUp())
    };
    this.moveObject = function() {
        var a = 0;
        v.move(n, G);
        if (N) {
            var b = N.move(n);
            b && (N = null)
        }
        R && (b = R.move(n)) && (R = null);
        for (b = 0; b < B.length; b++) {
            B[b].move(f);
           //beGod when x.beGod() vs showReJumpAnimation() and then comment out deceleration from beGod
            K && m && (a = B[b].controlCollision(x.getRectangle()), 0 < a && (K = !1, x.showReJumpAnimation(), L = !1));
            var d = this._controlIfPlatformOverCanvas(b);
            if (null !== d) {
                switch (d.getType()) {
                    case 0:
                        M.push(d);
                        break;
                    case 1:
                        F.push(d);
                        break;
                    case 2:
                        E.push(d);
                        break;
                    case 3:
                        J.push(d)
                }
                b--
            }
        }
        for (b = 0; b < t; b++)
            if (C[b].move(f), C[b].controlCollision(x.getRectangle()) ||
                this._controlIfCoinOverCanvas(b)) d = C[b], this._controlIfCoinOverCanvas(b) && C[b].changeStatusOff(), C.splice(b, 1), t--, C.push(d), C[b].controlCollision(x.getRectangle()) && (c += 10);
        null !== A && (A.move(f), A.controlCollision(x.getRectangle()) && (I = !0), this._controlIfBonusOverCanvas());
        0 < a && this.startSpeedIncrement(a)
        //SPRING
    };
    this._controlIfPlatformOverCanvas = function(a) {
        if (B[a].getY() >= CANVAS_HEIGHT && a < B.length - 1) {
            B[a].changeStatusOff();
            var b = B[a];
            B.splice(a, 1);
            d--;
            this._createRow();
            return b
        }
        return null
    };
    this._controlIfCoinOverCanvas =
        function(a) {
            if (C[a].getY() >= CANVAS_HEIGHT) {
                if (a < C.length - 1) return !0
            } else return !1
        };
    this._controlIfBonusOverCanvas = function() {
        A.getY() >= CANVAS_HEIGHT && (A.unload(), A = null)
    };
    this.startSpeedIncrement = function(a) {
        S = !0;
        m = H = !1;
        f = OBJECT_SPD;
        switch (a) {
            case PLATFORM:
                playSound("voice_jump_" + (Math.floor(2 * Math.random()) + 1), 1, !1);
                h = 0;
                K = !1;
                break;
            case SPRING:
                h += 30;
                K = !1;
                break;
            case WINGS:
                h += 50, K = !1, y = !0, x.beGod()
        }
    };
    this.incrementSpeedObject = function() {
        f += ACCELERATION;
        n = Math.round(f / 7);
        !L && 0 <= f && x.showJumpingAnimation();
        f >= OBJECT_SPD_MAX + h && (h = 0, S = !1, H = !0, L = !1, m = !0)
    };
    //comment out to always rise
    this.decrementSpeedObject = function() {
        f -= DECELERATION;
        n = G ? n - DECELERATION_BG_GAME_OVER : f / 3;
        0 >= f && (y ? (x.returnHero(), I = !1) : (L || (x.showFallingAnimation(), L = !0), K = !0));
        this.controlIfGameOver() && !G && (x.playFallingAnimation(), x.moveDown(), playSound("voice_falling", 1, !1), G = !0)
    };
    this.beGod = function() {
        A.unload();
        A = null;
        y || this.startSpeedIncrement(WINGS)
    };
    this.playerIsNoLongerGod = function() {
        y = !1
    };
    this.playerStunnedAnimation = function() {
        I || (!0 !== G ? (setTimeout(function() {
            playSound("death",
                1, !1);
            x.playStunnedAnimation();
            createjs.Tween.get(s_oStage).to({
                x: Math.round(10 * Math.random()),
                y: Math.round(30 * Math.random())
            }, 50).call(function() {
                createjs.Tween.get(s_oStage).to({
                    x: Math.round(8 * Math.random()),
                    y: -Math.round(24 * Math.random())
                }, 50).call(function() {
                    createjs.Tween.get(s_oStage).to({
                        x: Math.round(6 * Math.random()),
                        y: Math.round(18 * Math.random())
                    }, 50).call(function() {
                        createjs.Tween.get(s_oStage).to({
                            x: Math.round(4 * Math.random()),
                            y: -Math.round(12 * Math.random())
                        }, 50).call(function() {
                            createjs.Tween.get(s_oStage).to({
                                x: Math.round(2 *
                                    Math.random()),
                                y: Math.round(6 * Math.random())
                            }, 50).call(function() {
                                createjs.Tween.get(s_oStage).to({
                                    x: Math.round(10 * Math.random()),
                                    y: -Math.round(30 * Math.random())
                                }, 50).call(function() {
                                    createjs.Tween.get(s_oStage).to({
                                        y: 0,
                                        x: 0
                                    }, 50).call(function() {
                                        D.gameOver()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }, 400), x.moveDownWithoutAnimation()) : (playSound("death", 1, !1), x.playStunnedAnimation(), createjs.Tween.get(s_oStage).to({
            x: Math.round(10 * Math.random()),
            y: Math.round(30 * Math.random())
        }, 50).call(function() {
            createjs.Tween.get(s_oStage).to({
                x: Math.round(8 *
                    Math.random()),
                y: -Math.round(24 * Math.random())
            }, 50).call(function() {
                createjs.Tween.get(s_oStage).to({
                    x: Math.round(6 * Math.random()),
                    y: Math.round(18 * Math.random())
                }, 50).call(function() {
                    createjs.Tween.get(s_oStage).to({
                        x: Math.round(4 * Math.random()),
                        y: -Math.round(12 * Math.random())
                    }, 50).call(function() {
                        createjs.Tween.get(s_oStage).to({
                            x: Math.round(2 * Math.random()),
                            y: Math.round(6 * Math.random())
                        }, 50).call(function() {
                            createjs.Tween.get(s_oStage).to({
                                    x: Math.round(10 * Math.random()),
                                    y: -Math.round(30 * Math.random())
                                },
                                50).call(function() {
                                createjs.Tween.get(s_oStage).to({
                                    y: 0,
                                    x: 0
                                }, 50).call(function() {
                                    D.gameOver()
                                })
                            })
                        })
                    })
                })
            })
        })), T = !1, G = !0)
    };
    this.controlIfGameOver = function() {
        return B[0].getY() + 275 < x.getY() ? !0 : !1
    };
    this.unload = function() {
        u.unload();
        null !== z && z.unload();
        B = [];
        M = [];
        F = [];
        E = [];
        J = [];
        C = [];
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session")
    };
    this.onRestart = function() {
        this.unload();
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        s_oMain.gotoGame()
    };
    this.gameOver = function() {
        z = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        z.show(c)
    };
    this.update = function() {
        T && (x._movePlayer(r, w), S && this.incrementSpeedObject(), H && this.decrementSpeedObject(), this.moveObject(), e = B[B.length - 1].getY(), !G && 0 < c + n && (c += Math.floor(n), u.refreshScore(c)))
    };
    s_oGame = this;
    D = this;
    PLAYER_SPD_MAX = a.player_spd_max;
    PLAYER_SPD_MIN = a.player_spd_min;
    PLAYER_ACCELERATION_NO_GIROSCOPE = a.player_acceleration_no_giroscope;
    PLAYER_ACCELERATION_GIROSCOPE = a.player_acceleration_giroscope;
    PLAYER_DECELERATION = a.player_deceleration;
    OBJECT_SPD = a.object_spd;
    OBJECT_SPD_ORIZZONTAL = a.object_spd_orizzontal;
    ACCELERATION = a.acceleration;
    DECELERATION = a.deceleration;
    DECELERATION_BG_GAME_OVER = a.deceleration_bg_game_over;
    OBJECT_SPD_MAX = a.object_spd_max;
    OBJECT_SPD_MIN = a.object_spd_min;
    HEIGHT_BETWEEN_OBJECT = a.height_between_object;
    GAMMA_RANGE_ACCEPTED =
        a.gamma_range_accepted;
    CANVAS_WIDTH_RANGE_ACCEPTED = a.canvas_half_width_range_accepted;
    NUM_PLATFORM_CREATED_FOR_SPRING = a.num_platform_created_for_spring;
    BONUS_OCCUR = a.bonus_occurrence;
    COIN_OCCUR = a.coin_occurrence;
    this._init()
}
var s_oGame;

function CInterface(a) {
    var c, b, d, g, l, e, k, q, f, n = null,
        p = null,
        h = null,
        t, r;
    this._init = function(a) {
        a = s_oSpriteLibrary.getSprite("but_exit");
        l = CANVAS_WIDTH - a.height / 2 - 33;
        e = a.height / 2 + 25;
        q = new CGfxButton(l, e, a, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = l - a.width - 10;
        g = a.height / 2 + 10;
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (a = s_oSpriteLibrary.getSprite("audio_icon"), k = new CToggle(d, g, a, s_bAudioActive, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), a = s_oSpriteLibrary.getSprite("but_fullscreen"),
            c = d - a.width / 2 - 10, b = g) : (c = l - a.width - 10, b = a.height / 2 + 10);
        a = window.document;
        var h = a.documentElement;
        n = h.requestFullscreen || h.mozRequestFullScreen || h.webkitRequestFullScreen || h.msRequestFullscreen;
        p = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (n = !1);
        n && screenfull.enabled && (a = s_oSpriteLibrary.getSprite("but_fullscreen"), f = new CToggle(c, b, a, s_bFullscreen, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new createjs.Text("SCORE: 0",
            " 40px " + FONT, "#108146");
        t.x = 32;
        t.y = 62;
        t.textAlign = "left";
        t.textBaseline = "alphabetic";
        t.lineWidth = 400;
        s_oStage.addChild(t);
        r = new createjs.Text("SCORE: 0", " 40px " + FONT, "#ffb400");
        r.x = 30;
        r.y = 60;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        r.lineWidth = 400;
        s_oStage.addChild(r);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshScore = function(a, b) {

        t.text = "SCORE: " + a;
        r.text = "SCORE: " + a

        if(a < 100) {
            // console.log("SCORE: " + a)
        } else {
            // console.log("SUCCESS")

            // this.gameOver = function() {
            //     CInterface 
            //     z = CWinPanel(s_oSpriteLibrary.getSprite("msg_box"));
            //     z.show(c)
            // }();
            
        }
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k.unload(), k = null;
        n && screenfull.enabled &&
            f.unload();
        q.unload();
        null !== h && h.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, h) {
        q.setPosition(l - a, h + e);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(d - a, h + g);
        n && screenfull.enabled && f.setPosition(c - s_iOffsetX, b + s_iOffsetY);
        t.y = 60 + h;
        r.y = 60 + h
    };
    this._onButHelpRelease = function() {
        h = new CHelpPanel
    };
    this.onExitFromHelp = function() {
        h.unload()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this.resetFullscreenBut =
        function() {
            n && screenfull.enabled && f.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? p.call(window.document) : n.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CEndPanel(a) {
    var c, b, d, g, l, e, k, q, f = this;
    this._init = function(a) {
        c = createBitmap(a);
        c.x = 0;
        c.y = 0;
        a = {
            images: [s_oSpriteLibrary.getSprite("stunned")],
            framerate: 40,
            frames: {
                width: PLAYER_STUNNED_WIDTH,
                height: PLAYER_STUNNED_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                falled: [0, 2, "idle"],
                idle: [3, 27, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "falled", 0, 0, PLAYER_STUNNED_WIDTH, PLAYER_STUNNED_HEIGHT);
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 10;
        a.regX = PLAYER_STUNNED_WIDTH / 2;
        a.regY = PLAYER_STUNNED_HEIGHT /
            2;
        a.scaleX = 1.2;
        a.scaleY = 1.2;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        var f = 390,
            h = 80;
        d = new CTLText(b, CANVAS_WIDTH / 2 - f / 2 + 2, CANVAS_HEIGHT / 2 - h / 2 - 125, f, h, 70, "center", "#410701", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        g = new CTLText(b, CANVAS_WIDTH / 2 - f / 2, CANVAS_HEIGHT / 2 - h / 2 - 125, f, h, 70, "center", "#ffb400", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        f = 300;
        h = 60;
        l = new CTLText(b, CANVAS_WIDTH / 2 - f / 2 + 2, CANVAS_HEIGHT / 2 - h / 2 + 112, f, h, 40, "center", "#410701", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        e = new CTLText(b, CANVAS_WIDTH / 2 - f / 2, CANVAS_HEIGHT / 2 - h / 2 + 112, f,
            h, 40, "center", "#ffb400", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        k = createBitmap(s_oSpriteLibrary.getSprite("but_restart"));
        k.x = CANVAS_WIDTH / 2 + 20;
        k.y = CANVAS_HEIGHT / 2 + 200;
        q = createBitmap(s_oSpriteLibrary.getSprite("but_home"));
        q.x = CANVAS_WIDTH / 2 - 230;
        q.y = CANVAS_HEIGHT / 2 + 200;
        b.addChild(c, a, k, q);
        s_oStage.addChild(b)
    };
    this.unload = function() {
        q.off("mousedown", this._onExit);
        k.off("mousedown", this._onRestart)
    };
    this._initListener = function() {
        q.on("mousedown", this._onExit);
        k.on("mousedown", this._onRestart)
    };
    this.show = function(a) {
        setVolume("soundtrack",
            0);
        playSound("game_over", 1, !1);
        d.refreshText(TEXT_GAMEOVER);
        g.refreshText(TEXT_GAMEOVER);
        l.refreshText(TEXT_SCORE + a);
        e.refreshText(TEXT_SCORE + a);
        b.visible = !0;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            f._initListener()
        });
        $(s_oMain).trigger("share_event", [a]);
        $(s_oMain).trigger("save_score", [a])
    };
    this._onExit = function() {
        f.unload();
        s_oStage.removeChild(b);
        s_oGame.onExit();
        stopSound("game_over");
        stopSound("death")
    };
    this._onRestart = function() {
        f.unload();
        s_oStage.removeChild(b);
        s_oGame.onRestart();
        stopSound("game_over");
        setVolume("soundtrack", 1);
        stopSound("death")
    };
    this._init(a);
    return this
}

function CWinPanel(a) {
    var c, b, d, g, l, e, k, q, f = this;
    this._init = function(a) {
        c = createBitmap(a);
        c.x = 0;
        c.y = 0;
        a = {
            images: [s_oSpriteLibrary.getSprite("stunned")],
            framerate: 40,
            frames: {
                width: PLAYER_STUNNED_WIDTH,
                height: PLAYER_STUNNED_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                falled: [0, 2, "idle"],
                idle: [3, 27, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        a = createSprite(a, "falled", 0, 0, PLAYER_STUNNED_WIDTH, PLAYER_STUNNED_HEIGHT);
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 10;
        a.regX = PLAYER_STUNNED_WIDTH / 2;
        a.regY = PLAYER_STUNNED_HEIGHT /
            2;
        a.scaleX = 1.2;
        a.scaleY = 1.2;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        var f = 390,
            h = 80;
        d = new CTLText(b, CANVAS_WIDTH / 2 - f / 2 + 2, CANVAS_HEIGHT / 2 - h / 2 - 125, f, h, 70, "center", "#410701", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        g = new CTLText(b, CANVAS_WIDTH / 2 - f / 2, CANVAS_HEIGHT / 2 - h / 2 - 125, f, h, 70, "center", "#ffb400", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        f = 300;
        h = 60;
        l = new CTLText(b, CANVAS_WIDTH / 2 - f / 2 + 2, CANVAS_HEIGHT / 2 - h / 2 + 112, f, h, 40, "center", "#410701", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        e = new CTLText(b, CANVAS_WIDTH / 2 - f / 2, CANVAS_HEIGHT / 2 - h / 2 + 112, f,
            h, 40, "center", "#ffb400", FONT, 1, 2, 2, "", !0, !0, !0, !1);
        k = createBitmap(s_oSpriteLibrary.getSprite("but_restart"));
        k.x = CANVAS_WIDTH / 2 + 20;
        k.y = CANVAS_HEIGHT / 2 + 200;
        q = createBitmap(s_oSpriteLibrary.getSprite("but_home"));
        q.x = CANVAS_WIDTH / 2 - 230;
        q.y = CANVAS_HEIGHT / 2 + 200;
        b.addChild(c, a, k, q);
        s_oStage.addChild(b)
    };
    this.unload = function() {
        q.off("mousedown", this._onExit);
        k.off("mousedown", this._onRestart)
    };
    this._initListener = function() {
        q.on("mousedown", this._onExit);
        k.on("mousedown", this._onRestart)
    };
    this.show = function(a) {
        setVolume("soundtrack",
            0);
        playSound("game_over", 1, !1);
        d.refreshText(TEXT_GAMEOVER);
        g.refreshText(TEXT_GAMEOVER);
        l.refreshText(TEXT_SCORE + a);
        e.refreshText(TEXT_SCORE + a);
        b.visible = !0;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            f._initListener()
        });
        $(s_oMain).trigger("share_event", [a]);
        $(s_oMain).trigger("save_score", [a])
    };
    this._onExit = function() {
        f.unload();
        s_oStage.removeChild(b);
        s_oGame.onExit();
        stopSound("game_over");
        stopSound("death")
    };
    this._onRestart = function() {
        f.unload();
        s_oStage.removeChild(b);
        s_oGame.onRestart();
        stopSound("game_over");
        setVolume("soundtrack", 1);
        stopSound("death")
    };
    this._init(a);
    return this
}

function CPlayer(a) {
    var c, b, d, g, l = 0,
        e, k, q, f, n, p, h = !1,
        t = !1,
        r = !1;
    this._init = function(a) {
        var f = s_oSpriteLibrary.getSprite("player");
        f.x = PLAYER_X_START;
        f.y = PLAYER_Y_START;
        f = new createjs.SpriteSheet({
            images: [f],
            framerate: 40,
            frames: {
                width: PLAYER_WIDTH,
                height: PLAYER_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0],
                jumping: [1, 3, "inTheAir"],
                inTheAir: [4, 10, "inTheAir"],
                falling: [11, 12, "falling_idle"],
                falling_idle: [13, 19, "falling_idle"],
                rejumping: [20, 23, "inTheAir"]
            }
        });
        e = createSprite(f, "idle", 0, 0, PLAYER_WIDTH, PLAYER_HEIGHT);
        e.x = PLAYER_X_START;
        e.y = PLAYER_Y_START;
        e.regX = PLAYER_WIDTH / 2;
        e.regY = PLAYER_HEIGHT / 2;
        a.addChild(e);
        c = e.x - e.regX + 20;
        b = e.y + 20;
        d = PLAYER_WIDTH - 45;
        g = PLAYER_HEIGHT - PLAYER_HEIGHT / 2 - 30;
        n = new createjs.Rectangle(c, b, d, g)
        
    };
    this.flipSprite = function(a) {
        a === GOING_LEFT ? h ? k.scaleX -= 2 : e.scaleX -= 2 : a === GOING_RIGHT && (h ? k.scaleX += 2 : e.scaleX += 2)
    };
    this.showJumpingAnimation = function() {
        e.gotoAndPlay("jumping");
        p = "jumping"
    };
    this.showReJumpAnimation = function() {
        e.gotoAndPlay("rejumping");
        p = "rejumping"
    };
    this.showFallingAnimation =
        function() {
            e.gotoAndPlay("falling");
            p = "falling"
        };
    this.playStunnedAnimation = function() {
        t ? q.visible = !1 : e.visible = !1;
        var b = {
            images: [s_oSpriteLibrary.getSprite("stunned")],
            framerate: 40,
            frames: {
                width: PLAYER_STUNNED_WIDTH,
                height: PLAYER_STUNNED_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                falled: [0, 2, "idle"],
                idle: [3, 27, "idle"]
            }
        };
        b = new createjs.SpriteSheet(b);
        f = createSprite(b, "falled", 0, 0, PLAYER_STUNNED_WIDTH, PLAYER_STUNNED_HEIGHT);
        t ? (f.x = q.x, f.y = q.y) : (f.x = e.x, f.y = e.y);
        f.regX = PLAYER_STUNNED_WIDTH / 2;
        f.regY = PLAYER_STUNNED_HEIGHT /
            2;
        a.addChild(f)
    };
    this.playFallingAnimation = function() {
        e.visible = !1;
        var b = {
            images: [s_oSpriteLibrary.getSprite("falling")],
            framerate: 20,
            frames: {
                width: PLAYER_FALLING_WIDTH,
                height: PLAYER_FALLING_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                fear: [0, 1, "idle"],
                idle: [1, 4, "idle"]
            }
        };
        b = new createjs.SpriteSheet(b);
        q = createSprite(b, "fear", 0, 0, PLAYER_FALLING_WIDTH, PLAYER_FALLING_HEIGHT);
        q.x = e.x;
        q.y = e.y;
        q.regX = PLAYER_FALLING_WIDTH / 2;
        q.regY = PLAYER_FALLING_HEIGHT / 2;
        a.addChild(q);
        t = !0
    };
    this.refreshRectangle = function() {
        h || t ? t ?
            (c = q.x - e.regX + 20, b = q.y + 20, d = PLAYER_WIDTH - 45, g = PLAYER_HEIGHT - PLAYER_HEIGHT / 2 - 30) : h && (c = k.x - e.regX + 20, b = k.y + 20, d = PLAYER_WIDTH - 45, g = PLAYER_HEIGHT - PLAYER_HEIGHT / 2 - 20) : (c = e.x - e.regX + 20, b = e.y + 20, d = PLAYER_WIDTH - 45, g = PLAYER_HEIGHT - PLAYER_HEIGHT / 2 - 30);
        n.setValues(c, b, d, g)
    };
    this.beGod = function() {
        if (!h) {
            playSound("wings", 1, !1);
            e.visible = !1;
            var f = {
                images: [s_oSpriteLibrary.getSprite("god")],
                framerate: 40,
                frames: {
                    width: PLAYER_GOD_WIDTH,
                    height: PLAYER_GOD_HEIGHT,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    beingGod: [0, 7, "idle"],
                    idle: [8,
                        15, "idle"
                    ],
                    returningHero: [7, 6, 5, 4, 3, 2, 1, 0]
                }
            };
            f = new createjs.SpriteSheet(f);
            k = createSprite(f, "beingGod", 0, 0, PLAYER_GOD_WIDTH, PLAYER_GOD_HEIGHT);
            k.x = e.x;
            k.y = e.y;
            k.regX = PLAYER_GOD_WIDTH / 2;
            k.regY = PLAYER_GOD_HEIGHT / 2;
            a.addChild(k);
            k.scaleX = e.scaleX;
            c = e.x - e.regX + 20;
            b = e.y + 20;
            d = PLAYER_WIDTH - 45;
            g = PLAYER_HEIGHT - PLAYER_HEIGHT / 2 - 20;
            n = new createjs.Rectangle(c, b, d, g);
            h = !0
        }
    };
    this.returnHero = function() {
        k.gotoAndPlay("returningHero");
        createjs.Tween.get(k).to({
            alpha: 0
        }, 300).call(function() {
            a.removeChild(k);
            k = null;
            h = !1;
            s_oGame.playerIsNoLongerGod()
        });
        e.scaleX = k.scaleX;
        e.x = k.x;
        e.visible = !0
    };
    this._movePlayer = function(a, b) {
        l += b * a;
        0 > l ? (l < -PLAYER_SPD_MAX && (l = -PLAYER_SPD_MAX), r || (r = !0, this.flipSprite(GOING_LEFT))) : 0 < l && (l > PLAYER_SPD_MAX && (l = PLAYER_SPD_MAX), r && (r = !1, this.flipSprite(GOING_RIGHT)));
        this.addSpeedToPlayer(l);
        0 < l ? (l -= PLAYER_DECELERATION, 0 > l && (l = 0)) : 0 > l && (l += PLAYER_DECELERATION, 0 < l && (l = 0));
        this.getX() > CANVAS_WIDTH ? this.setPos(0) : 0 > this.getX() && this.setPos(CANVAS_WIDTH)
    };
    this.addSpeedToPlayer = function(a) {
        h ?
            t ? q.x += a : h && null !== k && (k.x += a) : e.x += a;
        this.refreshRectangle()
    };
    this.setPos = function(a) {
        h ? null !== k && (k.x = a) : e.x = a;
        this.refreshRectangle()
    };
    this.moveUp = function() {
        createjs.Tween.get(e).to({
            y: PLAYER_Y_START - 100
        }, 1E3).call(function() {})
    };
    this.moveDown = function() {
        createjs.Tween.get(q).to({
            y: PLAYER_Y_START
        }, 200).call(function() {})
    };
    this.moveDownWithoutAnimation = function() {
        createjs.Tween.get(e).to({
            y: PLAYER_Y_START
        }, 300).call(function() {})
    };
    this.returnState = function() {
        return p
    };
    this.getRectangle = function() {
        return n
    };
    this.getSprite = function() {
        return e
    };
    this.getX = function() {
        if (!h) return e.x;
        if (null !== k) return k.x
    };
    this.getY = function() {
        return e.y
    };
    this._init(a)
}

function CPlatform(a, c, b, d) {
    var g, l, e, k, q, f, n = !0,
        p = !1,
        h = !1,
        t = !1,
        r, w, x;
    this._init = function() {
        q = a;
        f = c;
        var h = s_oSpriteLibrary.getSprite("platform_" + b),
            n = 28 + Math.floor(2 * Math.random() + 1);
        0 === b || 1 === b ? (h = {
            images: [h],
            framerate: n,
            frames: {
                width: PLATFORM_WIDTH,
                height: PLATFORM_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 7, "idle"]
            }
        }, h = new createjs.SpriteSheet(h), r = createSprite(h, "idle", 0, 0, PLATFORM_WIDTH, PLATFORM_HEIGHT), r.x = q, r.y = f, g = r.x + 30, l = r.y + 10, e = PLATFORM_WIDTH - 75, k = PLATFORM_HEIGHT - 35) : 2 === b ? (h = {
            images: [h],
            framerate: n,
            frames: {
                width: PLATFORM2_WIDTH,
                height: PLATFORM2_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 8, "idle"],
                breaking: [9, 15, "disable"],
                disable: [16]
            }
        }, h = new createjs.SpriteSheet(h), r = createSprite(h, "idle", 0, 0, PLATFORM2_WIDTH, PLATFORM2_HEIGHT), r.x = q, r.y = f, g = r.x + 45, l = r.y + 10, e = PLATFORM_WIDTH - 75, k = PLATFORM_HEIGHT - 35) : 3 === b && (h = {
                images: [h],
                framerate: n,
                frames: {
                    width: PLATFORM3_WIDTH,
                    height: PLATFORM3_HEIGHT,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    idle: [0, 10, "idle"],
                    vanishing: [11, 23]
                }
            }, h = new createjs.SpriteSheet(h), r =
            createSprite(h, "idle", 0, 0, PLATFORM3_WIDTH, PLATFORM3_HEIGHT), r.x = q, r.y = f, g = r.x + 20, l = r.y, e = PLATFORM_WIDTH - 75, k = PLATFORM_HEIGHT - 35);
        d.addChild(r);
        r.stop();
        r.visible = !1;
        w = new createjs.Rectangle(g, l, e, k);
        2 > b && (x = new CSpring(a + PLATFORM_WIDTH / 2, f, b, d, SPRING), x.setVisibleFalse())
    };
    this.controlCollision = function(a) {
        if (h && n) {
            if (x.controlCollision(a)) return createjs.Tween.get(r).wait(400).call(function() {
                n = !0
            }), SPRING;
            if (w.intersection(a)) return createjs.Tween.get(r).wait(400).call(function() {
                n = !0
            }), PLATFORM
        } else {
            if (w.intersects(a) &&
                2 > b && n) return n = !1, createjs.Tween.get(r).wait(400).call(function() {
                n = !0
            }), PLATFORM;
            if (w.intersects(a) && 2 === b && n) playSound("platform_2_broken", 1, !1), r.gotoAndPlay("breaking"), n = !1;
            else if (w.intersects(a) && 3 === b && n) return playSound("platform_3_wind", 1, !1), r.gotoAndPlay("vanishing"), createjs.Tween.get(r).to({
                alpha: 0
            }, 400).call(function() {}), n = !1, PLATFORM
        }
    };
    this.setInvisible = function() {
        r.visible = !1
    };
    this.move = function(a) {
        r.y += a;
        1 === b && this.moveOrizzontal();
        h && x.move(a);
        this.refreshRectangle()
    };
    this.moveOrizzontal =
        function() {
            t && (r.x < CANVAS_WIDTH - 100 - PLATFORM_WIDTH / 2 && !p ? (h && x.moveOrizzontal(OBJECT_SPD_ORIZZONTAL), r.x += OBJECT_SPD_ORIZZONTAL) : r.x >= CANVAS_WIDTH - 100 - PLATFORM_WIDTH / 2 && (p = !0), r.x > 100 - PLATFORM_WIDTH / 2 && p ? (h && x.moveOrizzontal(-OBJECT_SPD_ORIZZONTAL), r.x -= OBJECT_SPD_ORIZZONTAL) : r.x <= 100 - PLATFORM_WIDTH / 2 && (p = !1))
        };
    this.refreshRectangle = function() {
        switch (b) {
            case 0:
            case 1:
                g = r.x + 33;
                l = r.y + 10;
                e = PLATFORM_WIDTH - 75;
                k = PLATFORM_HEIGHT - 35;
                break;
            case 2:
                g = r.x + 45;
                l = r.y + 10;
                e = PLATFORM_WIDTH - 75;
                k = PLATFORM_HEIGHT - 35;
                break;
            case 3:
                g = r.x + 20, l = r.y, e = PLATFORM_WIDTH - 75, k = PLATFORM_HEIGHT - 35
        }
        w.setValues(g, l, e, k)
    };
    this.changeStatusOn = function(a, b) {
        r.x = a;
        r.y = b;
        r.visible = !0;
        r.alpha = 1;
        r.play();
        n = t = !0
    };
    this.changeStatusOff = function() {
        r.x = -150;
        r.y = CANVAS_HEIGHT + 150;
        r.gotoAndPlay("idle");
        r.stop();
        n = t = r.visible = !1;
        h && (x.setVisibleFalse(r.x + PLATFORM_WIDTH / 2, r.y), h = !1)
    };
    this.spawnSpring = function() {
        2 > b && 1 === Math.round(2 * Math.random()) - 1 && (x.setVisibleTrue(r.x + PLATFORM_WIDTH / 2, r.y), h = !0)
    };
    this.getRectangle = function() {
        return w
    };
    this.getType = function() {
        return b
    };
    this.getY = function() {
        return r.y
    };
    this.getX = function() {
        return r.x
    };
    this.unload = function() {
        d.removeChild(r);
        x = r = null
    };
    this._init()
}

function CSpring(a, c, b, d, g) {
    var l, e, k, q, f, n, p;
    this._init = function() {
        f = b;
        if (g === SPRING) {
            var h = {
                images: [s_oSpriteLibrary.getSprite("spring")],
                frames: {
                    width: SPRING_WIDTH,
                    height: SPRING_HEIGHT,
                    regX: SPRING_WIDTH / 2,
                    regY: SPRING_HEIGHT / 2
                },
                animations: {
                    idle: [0],
                    hitted: [1, 7]
                }
            };
            h = new createjs.SpriteSheet(h);
            n = createSprite(h, "idle", 0, 0, SPRING_WIDTH, SPRING_HEIGHT);
            n.x = a;
            n.y = c;
            n.rotation = 0;
            d.addChild(n);
            l = n.x - SPRING_WIDTH / 2;
            e = n.y - SPRING_HEIGHT / 2;
            k = SPRING_WIDTH;
            q = SPRING_HEIGHT;
            p = new createjs.Rectangle(l, e, k, q)
        }
    };
    this.controlCollision = function(a) {
        return null !== p.intersection(a) ? (n.gotoAndPlay("hitted"), playSound("spring", 1, !1), !0) : !1
    };
    this.setVisibleFalse = function() {
        n.visible = !1;
        n.gotoAndStop(0)
    };
    this.setVisibleTrue = function(a, b) {
        n.visible = !0;
        n.x = a;
        n.y = b
    };
    this.move = function(a) {
        n.y += a;
        this.refreshRectangle()
    };
    this.refreshRectangle = function() {
        l = n.x - SPRING_WIDTH / 2;
        e = n.y - SPRING_HEIGHT / 2;
        k = SPRING_WIDTH;
        q = SPRING_HEIGHT;
        p.setValues(l, e, k, q)
    };
    this.moveOrizzontal = function(a) {
        n.x += a
    };
    this.getRectangle = function() {
        return p
    };
    this.getType = function() {
        return f
    };
    this.getY = function() {
        return n.y
    };
    this.getX = function() {
        return n.x
    };
    this.unload = function() {};
    this._init()
}

function CBonus(a, c, b, d) {
    var g, l, e, k, q, f, n = !0,
        p, h;
    this._init = function(a, c) {
        q = a;
        f = c;
        if (b === COIN) {
            var n = {
                images: [s_oSpriteLibrary.getSprite("coin")],
                framerate: 30,
                frames: {
                    width: COIN_WIDTH,
                    height: COIN_HEIGHT,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    idle: [0, 19, "idle"]
                }
            };
            n = new createjs.SpriteSheet(n);
            p = createSprite(n, "idle", 0, 0, COIN_WIDTH, COIN_HEIGHT);
            p.x = q >= CANVAS_WIDTH / 2 ? q - COIN_WIDTH : q + COIN_WIDTH;
            p.y = f;
            d.addChild(p);
            g = p.x;
            l = p.y;
            e = COIN_WIDTH;
            k = 2 * COIN_HEIGHT;
            h = new createjs.Rectangle(g, l, e, k)
        } else b === WINGS && (n = {
            images: [s_oSpriteLibrary.getSprite("wings")],
            framerate: 30,
            frames: {
                width: WINGS_WIDTH,
                height: WINGS_HEIGHT,
                regX: 0,
                regY: 0
            },
            animations: {
                idle: [0, 23, "idle"]
            }
        }, n = new createjs.SpriteSheet(n), p = createSprite(n, "idle", 0, 0, WINGS_WIDTH, WINGS_HEIGHT), p.x = q >= CANVAS_WIDTH / 2 ? q - WINGS_WIDTH : q + WINGS_WIDTH, p.y = f, d.addChild(p), g = p.x, l = p.y, e = WINGS_WIDTH, k = WINGS_HEIGHT, h = new createjs.Rectangle(g, l, e, k))
    };
    this.controlCollision = function(a) {
        var c = this;
        if (null !== h.intersection(a) && n && b === COIN) return createjs.Tween.get(p).to({
            x: CANVAS_WIDTH / 2 - 200,
            y: 100,
            alpha: 0
        }, 3E3, createjs.Ease.elasticOut).call(function() {
            this.alpha =
                0;
            c.changeStatusOff()
        }), playSound("money", 1, !1), n = !1, !0;
        if (null !== h.intersection(a) && n && b === WINGS) return playSound("power_up", 1, !1),         
        createjs.Tween.get(p).to({
            x: a.x,
            y: a.y - 50
        }, 400).call(function() {
            this.alpha = 0;
            s_oGame.beGod()
        }), n = !1, !0
    };
    this.changeStatusOn = function(a, b) {
        p.x = a;
        p.y = b;
        p.visible = !0;
        p.alpha = 1;
        p.play();
        this.refreshRectangle();
        n = !0
    };
    this.changeStatusOff = function() {
        p.x = -150;
        p.y = CANVAS_HEIGHT + 150;
        p.visible = !1;
        p.stop();
        this.refreshRectangle()
    };
    this.setInvisible = function() {
        p.visible = !1
    };
    this.move =
        function(a) {
            p.y += a;
            this.refreshRectangle()
        };
    this.refreshRectangle = function() {
        switch (b) {
            case COIN:
                g = p.x;
                l = p.y;
                e = COIN_WIDTH;
                k = 2 * COIN_HEIGHT;
                break;
            case WINGS:
                g = p.x, l = p.y, e = WINGS_WIDTH, k = WINGS_HEIGHT
        }
        h.setValues(g, l, e, k)
    };
    this.getRectangle = function() {
        return h
    };
    this.getY = function() {
        return p.y
    };
    this.getX = function() {
        return p.x
    };
    this.unload = function() {
        d.removeChild(p);
        p = null
    };
    this._init(a, c)
}

function CScrollingBg(a) {
    var c = null,
        b = null,
        d = null,
        g = null,
        l = 1,
        e = !1;
    this._init = function() {
        var e = s_oSpriteLibrary.getSprite("bg_scroll_1");
        c = createBitmap(e);
        a.addChild(c);
        a.setChildIndex(c, BG_INDEX);
        e = s_oSpriteLibrary.getSprite("bg_scroll_2");
        b = createBitmap(e);
        b.y = -CANVAS_HEIGHT;
        a.addChild(b);
        a.setChildIndex(b, BG_INDEX);
        e = s_oSpriteLibrary.getSprite("bg_scroll_3");
        d = createBitmap(e);
        d.y = 2 * -CANVAS_HEIGHT;
        a.addChild(d);
        a.setChildIndex(d, BG_INDEX);
        e = s_oSpriteLibrary.getSprite("bg_scroll_3");
        g = createBitmap(e);
        g.y = 3 * -CANVAS_HEIGHT;
        a.addChild(g);
        a.setChildIndex(g, BG_INDEX)
    };
    this.move = function(a, q) {
        c.y >= CANVAS_HEIGHT && (l = 2);
        b.y >= CANVAS_HEIGHT && (l = 3);
        d.y <= -CANVAS_HEIGHT && 3 <= l && (l = 3, d.y = g.y + CANVAS_HEIGHT);
        d.y >= CANVAS_HEIGHT && 3 <= l && (l = 3, d.y = g.y - CANVAS_HEIGHT);
        g.y <= -CANVAS_HEIGHT && 3 <= l && (l = 4, g.y = d.y + CANVAS_HEIGHT);
        g.y >= CANVAS_HEIGHT && 3 <= l && (l = 4, g.y = d.y - CANVAS_HEIGHT);
        c.y += a;
        b.y += a;
        d.y += a;
        g.y += a;
        q && !e && 4 === l ? (d.y = g.y + CANVAS_HEIGHT, b.y = d.y + CANVAS_HEIGHT, c.y = d.y + 2 * CANVAS_HEIGHT, e = !0) : q && !e && 3 === l && (g.y = d.y + CANVAS_HEIGHT,
            b.y = g.y + CANVAS_HEIGHT, c.y = g.y + 2 * CANVAS_HEIGHT, e = !0);
        0 >= c.y && s_oGame.playerStunnedAnimation()
    };
    this._init()
}

function CCloud(a, c, b) {
    var d, g, l = 0,
        e = 0,
        k;
    this._init = function() {
        d = Math.random() * CANVAS_WIDTH;
        g = a - 600;
        e = 1 * Math.random();
        3 > c ? (k = createBitmap(s_oSpriteLibrary.getSprite("god_cloud_" + c)), k.scaleX = e, k.scaleY = e, k.alpha = .7) : (k = createBitmap(s_oSpriteLibrary.getSprite("clouds_in_overlay")), k.scaleX = 1, k.scaleY = 1, k.alpha = .9);
        k.x = d;
        k.y = g;
        b.addChild(k);
        k.x <= CANVAS_WIDTH / 2 ? (l = GOING_LEFT, 3 > c && (k.scaleX = -k.scaleX)) : l = GOING_RIGHT
    };
    this.move = function(a) {
        k.y += a;
        this.moveOrizzontal();
        return k.y >= CANVAS_HEIGHT + 50 ? (this.unload(), !0) : !1
    };
    this.moveOrizzontal = function() {
        k.x = l === GOING_LEFT ? k.x + 1 * e : k.x - 1 * e
    };
    this.getType = function() {
        return c
    };
    this.getY = function() {
        return k.y
    };
    this.getX = function() {
        return k.x
    };
    this.unload = function() {
        b.removeChild(k);
        k = null
    };
    this._init()
}

function CCreditsPanel() {
    var a, c, b, d, g, l, e, k;
    this._init = function() {
        d = new createjs.Container;
        s_oStage.addChild(d);
        b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a = b.on("click", function() {});
        b.alpha = 0;
        d.addChild(b);
        g = new createjs.Container;
        d.addChild(g);
        var q = s_oSpriteLibrary.getSprite("msg_box");
        k = createBitmap(q);
        c = k.on("click", this._onLogoButRelease);
        g.addChild(k);
        var f = new createjs.Text(TEXT_DEVELOPED, " 50px " + FONT, "#410701");
        f.x = q.width / 2 + 2;
        f.y = q.height /
            2 - 8;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 600;
        g.addChild(f);
        f = new createjs.Text(TEXT_DEVELOPED, " 50px " + FONT, "#ffb400");
        f.x = q.width / 2;
        f.y = q.height / 2 - 10;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 600;
        g.addChild(f);
        f = new createjs.Text("www.codethislab.com", " 40px " + FONT, "#410701");
        f.x = q.width / 2;
        f.y = q.height / 2 + 152;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 600;
        g.addChild(f);
        f = new createjs.Text("www.codethislab.com", " 40px " + FONT, "#ffb400");
        f.x = q.width / 2;
        f.y = q.height / 2 + 150;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 600;
        g.addChild(f);
        f = s_oSpriteLibrary.getSprite("ctl_logo");
        e = createBitmap(f);
        e.x = q.width / 2;
        e.y = q.height / 2 + 70;
        e.regX = f.width / 2;
        e.regY = f.height / 2;
        g.addChild(e);
        f = s_oSpriteLibrary.getSprite("but_exit");
        l = new CGfxButton(470, 350, f, g);
        l.addEventListener(ON_MOUSE_UP, this.unload, this);
        g.regX = q.width / 2;
        g.regY = q.height / 2;
        g.x = CANVAS_WIDTH / 2;
        g.y = -q.height;
        createjs.Tween.get(b).to({
            alpha: .7
        }, 1E3, createjs.Ease.cubicOut);
        createjs.Tween.get(g).to({
            y: CANVAS_HEIGHT /
                2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this.unload = function() {
        s_oStage.removeChild(d);
        l.unload();
        b.off("click", a);
        k.off("click", c)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._init()
}

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var c = a.split("."),
        b = c.length;
    2 < b && (a = c[b - 2] + "." + c[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            c = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    c = !0;
                    break
                }
        } catch (b) {
            c = !0
        }
        return {
            topFrame: a,
            err: c
        }
    },
    getBestPageUrl = function(a) {
        var c = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (g) {
                var d = window.location.ancestorOrigins;
                b = d[d.length - 1]
            }
        } catch (g) {
            b = c.document.referrer
        } else b = c.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), c = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < c.length; b++)
        if (c[b] === a) return !0;
    return !1
};