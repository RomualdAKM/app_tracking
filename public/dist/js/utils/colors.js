(() => {
    var yt = Object.create;
    var Ne = Object.defineProperty;
    var wt = Object.getOwnPropertyDescriptor;
    var vt = Object.getOwnPropertyNames;
    var xt = Object.getPrototypeOf,
        kt = Object.prototype.hasOwnProperty;
    var p = (e, r) => () => (
        r || e((r = { exports: {} }).exports, r), r.exports
    );
    var _t = (e, r, n, t) => {
        if ((r && typeof r == "object") || typeof r == "function")
            for (let i of vt(r))
                !kt.call(e, i) &&
                    i !== n &&
                    Ne(e, i, {
                        get: () => r[i],
                        enumerable: !(t = wt(r, i)) || t.enumerable,
                    });
        return e;
    };
    var L = (e, r, n) => (
        (n = e != null ? yt(xt(e)) : {}),
        _t(
            r || !e || !e.__esModule
                ? Ne(n, "default", { value: e, enumerable: !0 })
                : n,
            e
        )
    );
    var Ie = p((X) => {
        "use strict";
        Object.defineProperty(X, "__esModule", { value: !0 });
        Object.defineProperty(X, "default", {
            enumerable: !0,
            get: function () {
                return Ct;
            },
        });
        var Ct = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
        };
    });
    var D = p((J) => {
        "use strict";
        Object.defineProperty(J, "__esModule", { value: !0 });
        function Et(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        Et(J, {
            parseColor: function () {
                return Tt;
            },
            formatColor: function () {
                return zt;
            },
        });
        var He = Ot(Ie());
        function Ot(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var At = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
            St = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
            _ = /(?:\d+|\d*\.\d+)%?/,
            W = /(?:\s*,\s*|\s+)/,
            Ye = /\s*[,/]\s*/,
            C = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/,
            jt = new RegExp(
                `^(rgba?)\\(\\s*(${_.source}|${C.source})(?:${W.source}(${_.source}|${C.source}))?(?:${W.source}(${_.source}|${C.source}))?(?:${Ye.source}(${_.source}|${C.source}))?\\s*\\)$`
            ),
            Pt = new RegExp(
                `^(hsla?)\\(\\s*((?:${_.source})(?:deg|rad|grad|turn)?|${C.source})(?:${W.source}(${_.source}|${C.source}))?(?:${W.source}(${_.source}|${C.source}))?(?:${Ye.source}(${_.source}|${C.source}))?\\s*\\)$`
            );
        function Tt(e, { loose: r = !1 } = {}) {
            var n, t;
            if (typeof e != "string") return null;
            if (((e = e.trim()), e === "transparent"))
                return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
            if (e in He.default)
                return {
                    mode: "rgb",
                    color: He.default[e].map((d) => d.toString()),
                };
            let i = e
                .replace(St, (d, g, u, f, m) =>
                    ["#", g, g, u, u, f, f, m ? m + m : ""].join("")
                )
                .match(At);
            if (i !== null)
                return {
                    mode: "rgb",
                    color: [
                        parseInt(i[1], 16),
                        parseInt(i[2], 16),
                        parseInt(i[3], 16),
                    ].map((d) => d.toString()),
                    alpha: i[4]
                        ? (parseInt(i[4], 16) / 255).toString()
                        : void 0,
                };
            var s;
            let l =
                (s = e.match(jt)) !== null && s !== void 0 ? s : e.match(Pt);
            if (l === null) return null;
            let c = [l[2], l[3], l[4]].filter(Boolean).map((d) => d.toString());
            return c.length === 2 && c[0].startsWith("var(")
                ? { mode: l[1], color: [c[0]], alpha: c[1] }
                : (!r && c.length !== 3) ||
                  (c.length < 3 && !c.some((d) => /^var\(.*?\)$/.test(d)))
                ? null
                : {
                      mode: l[1],
                      color: c,
                      alpha:
                          (n = l[5]) === null ||
                          n === void 0 ||
                          (t = n.toString) === null ||
                          t === void 0
                              ? void 0
                              : t.call(n),
                  };
        }
        function zt({ mode: e, color: r, alpha: n }) {
            let t = n !== void 0;
            return e === "rgba" || e === "hsla"
                ? `${e}(${r.join(", ")}${t ? `, ${n}` : ""})`
                : `${e}(${r.join(" ")}${t ? ` / ${n}` : ""})`;
        }
    });
    var Q = p((Z) => {
        "use strict";
        Object.defineProperty(Z, "__esModule", { value: !0 });
        Object.defineProperty(Z, "default", {
            enumerable: !0,
            get: function () {
                return Mt;
            },
        });
        function Mt(e) {
            if (((e = `${e}`), e === "0")) return "0";
            if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e))
                return e.replace(/^[+-]?/, (n) => (n === "-" ? "" : "-"));
            let r = ["var", "calc", "min", "max", "clamp"];
            for (let n of r) if (e.includes(`${n}(`)) return `calc(${e} * -1)`;
        }
    });
    var Ze = p((ee) => {
        "use strict";
        Object.defineProperty(ee, "__esModule", { value: !0 });
        Object.defineProperty(ee, "default", {
            enumerable: !0,
            get: function () {
                return Rt;
            },
        });
        var Rt = [
            "preflight",
            "container",
            "accessibility",
            "pointerEvents",
            "visibility",
            "position",
            "inset",
            "isolation",
            "zIndex",
            "order",
            "gridColumn",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRow",
            "gridRowStart",
            "gridRowEnd",
            "float",
            "clear",
            "margin",
            "boxSizing",
            "lineClamp",
            "display",
            "aspectRatio",
            "size",
            "height",
            "maxHeight",
            "minHeight",
            "width",
            "minWidth",
            "maxWidth",
            "flex",
            "flexShrink",
            "flexGrow",
            "flexBasis",
            "tableLayout",
            "captionSide",
            "borderCollapse",
            "borderSpacing",
            "transformOrigin",
            "translate",
            "rotate",
            "skew",
            "scale",
            "transform",
            "animation",
            "cursor",
            "touchAction",
            "userSelect",
            "resize",
            "scrollSnapType",
            "scrollSnapAlign",
            "scrollSnapStop",
            "scrollMargin",
            "scrollPadding",
            "listStylePosition",
            "listStyleType",
            "listStyleImage",
            "appearance",
            "columns",
            "breakBefore",
            "breakInside",
            "breakAfter",
            "gridAutoColumns",
            "gridAutoFlow",
            "gridAutoRows",
            "gridTemplateColumns",
            "gridTemplateRows",
            "flexDirection",
            "flexWrap",
            "placeContent",
            "placeItems",
            "alignContent",
            "alignItems",
            "justifyContent",
            "justifyItems",
            "gap",
            "space",
            "divideWidth",
            "divideStyle",
            "divideColor",
            "divideOpacity",
            "placeSelf",
            "alignSelf",
            "justifySelf",
            "overflow",
            "overscrollBehavior",
            "scrollBehavior",
            "textOverflow",
            "hyphens",
            "whitespace",
            "textWrap",
            "wordBreak",
            "borderRadius",
            "borderWidth",
            "borderStyle",
            "borderColor",
            "borderOpacity",
            "backgroundColor",
            "backgroundOpacity",
            "backgroundImage",
            "gradientColorStops",
            "boxDecorationBreak",
            "backgroundSize",
            "backgroundAttachment",
            "backgroundClip",
            "backgroundPosition",
            "backgroundRepeat",
            "backgroundOrigin",
            "fill",
            "stroke",
            "strokeWidth",
            "objectFit",
            "objectPosition",
            "padding",
            "textAlign",
            "textIndent",
            "verticalAlign",
            "fontFamily",
            "fontSize",
            "fontWeight",
            "textTransform",
            "fontStyle",
            "fontVariantNumeric",
            "lineHeight",
            "letterSpacing",
            "textColor",
            "textOpacity",
            "textDecoration",
            "textDecorationColor",
            "textDecorationStyle",
            "textDecorationThickness",
            "textUnderlineOffset",
            "fontSmoothing",
            "placeholderColor",
            "placeholderOpacity",
            "caretColor",
            "accentColor",
            "opacity",
            "backgroundBlendMode",
            "mixBlendMode",
            "boxShadow",
            "boxShadowColor",
            "outlineStyle",
            "outlineWidth",
            "outlineOffset",
            "outlineColor",
            "ringWidth",
            "ringColor",
            "ringOpacity",
            "ringOffsetWidth",
            "ringOffsetColor",
            "blur",
            "brightness",
            "contrast",
            "dropShadow",
            "grayscale",
            "hueRotate",
            "invert",
            "saturate",
            "sepia",
            "filter",
            "backdropBlur",
            "backdropBrightness",
            "backdropContrast",
            "backdropGrayscale",
            "backdropHueRotate",
            "backdropInvert",
            "backdropOpacity",
            "backdropSaturate",
            "backdropSepia",
            "backdropFilter",
            "transitionProperty",
            "transitionDelay",
            "transitionDuration",
            "transitionTimingFunction",
            "willChange",
            "content",
            "forcedColorAdjust",
        ];
    });
    var Qe = p((re) => {
        "use strict";
        Object.defineProperty(re, "__esModule", { value: !0 });
        Object.defineProperty(re, "default", {
            enumerable: !0,
            get: function () {
                return Dt;
            },
        });
        function Dt(e, r) {
            return e === void 0
                ? r
                : Array.isArray(e)
                ? e
                : [
                      ...new Set(
                          r
                              .filter((t) => e !== !1 && e[t] !== !1)
                              .concat(Object.keys(e).filter((t) => e[t] !== !1))
                      ),
                  ];
        }
    });
    var ne = p((No, te) => {
        var h = String,
            er = function () {
                return {
                    isColorSupported: !1,
                    reset: h,
                    bold: h,
                    dim: h,
                    italic: h,
                    underline: h,
                    inverse: h,
                    hidden: h,
                    strikethrough: h,
                    black: h,
                    red: h,
                    green: h,
                    yellow: h,
                    blue: h,
                    magenta: h,
                    cyan: h,
                    white: h,
                    gray: h,
                    bgBlack: h,
                    bgRed: h,
                    bgGreen: h,
                    bgYellow: h,
                    bgBlue: h,
                    bgMagenta: h,
                    bgCyan: h,
                    bgWhite: h,
                };
            };
        te.exports = er();
        te.exports.createColors = er;
    });
    var G = p((ae) => {
        "use strict";
        Object.defineProperty(ae, "__esModule", { value: !0 });
        function qt(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        qt(ae, {
            dim: function () {
                return Ft;
            },
            default: function () {
                return Ut;
            },
        });
        var j = $t(ne());
        function $t(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var rr = new Set();
        function oe(e, r, n) {
            (typeof process < "u" && process.env.JEST_WORKER_ID) ||
                (n && rr.has(n)) ||
                (n && rr.add(n),
                console.warn(""),
                r.forEach((t) => console.warn(e, "-", t)));
        }
        function Ft(e) {
            return j.default.dim(e);
        }
        var Ut = {
            info(e, r) {
                oe(
                    j.default.bold(j.default.cyan("info")),
                    ...(Array.isArray(e) ? [e] : [r, e])
                );
            },
            warn(e, r) {
                oe(
                    j.default.bold(j.default.yellow("warn")),
                    ...(Array.isArray(e) ? [e] : [r, e])
                );
            },
            risk(e, r) {
                oe(
                    j.default.bold(j.default.magenta("risk")),
                    ...(Array.isArray(e) ? [e] : [r, e])
                );
            },
        };
    });
    var le = p((ie) => {
        "use strict";
        Object.defineProperty(ie, "__esModule", { value: !0 });
        Object.defineProperty(ie, "default", {
            enumerable: !0,
            get: function () {
                return Wt;
            },
        });
        var Bt = Lt(G());
        function Lt(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function q({ version: e, from: r, to: n }) {
            Bt.default.warn(`${r}-color-renamed`, [
                `As of Tailwind CSS ${e}, \`${r}\` has been renamed to \`${n}\`.`,
                "Update your configuration file to silence this warning.",
            ]);
        }
        var Wt = {
            inherit: "inherit",
            current: "currentColor",
            transparent: "transparent",
            black: "#000",
            white: "#fff",
            slate: {
                50: "#f8fafc",
                100: "#f1f5f9",
                200: "#e2e8f0",
                300: "#cbd5e1",
                400: "#94a3b8",
                500: "#64748b",
                600: "#475569",
                700: "#334155",
                800: "#1e293b",
                900: "#0f172a",
                950: "#020617",
            },
            gray: {
                50: "#f9fafb",
                100: "#f3f4f6",
                200: "#e5e7eb",
                300: "#d1d5db",
                400: "#9ca3af",
                500: "#6b7280",
                600: "#4b5563",
                700: "#374151",
                800: "#1f2937",
                900: "#111827",
                950: "#030712",
            },
            zinc: {
                50: "#fafafa",
                100: "#f4f4f5",
                200: "#e4e4e7",
                300: "#d4d4d8",
                400: "#a1a1aa",
                500: "#71717a",
                600: "#52525b",
                700: "#3f3f46",
                800: "#27272a",
                900: "#18181b",
                950: "#09090b",
            },
            neutral: {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#e5e5e5",
                300: "#d4d4d4",
                400: "#a3a3a3",
                500: "#737373",
                600: "#525252",
                700: "#404040",
                800: "#262626",
                900: "#171717",
                950: "#0a0a0a",
            },
            stone: {
                50: "#fafaf9",
                100: "#f5f5f4",
                200: "#e7e5e4",
                300: "#d6d3d1",
                400: "#a8a29e",
                500: "#78716c",
                600: "#57534e",
                700: "#44403c",
                800: "#292524",
                900: "#1c1917",
                950: "#0c0a09",
            },
            red: {
                50: "#fef2f2",
                100: "#fee2e2",
                200: "#fecaca",
                300: "#fca5a5",
                400: "#f87171",
                500: "#ef4444",
                600: "#dc2626",
                700: "#b91c1c",
                800: "#991b1b",
                900: "#7f1d1d",
                950: "#450a0a",
            },
            orange: {
                50: "#fff7ed",
                100: "#ffedd5",
                200: "#fed7aa",
                300: "#fdba74",
                400: "#fb923c",
                500: "#f97316",
                600: "#ea580c",
                700: "#c2410c",
                800: "#9a3412",
                900: "#7c2d12",
                950: "#431407",
            },
            amber: {
                50: "#fffbeb",
                100: "#fef3c7",
                200: "#fde68a",
                300: "#fcd34d",
                400: "#fbbf24",
                500: "#f59e0b",
                600: "#d97706",
                700: "#b45309",
                800: "#92400e",
                900: "#78350f",
                950: "#451a03",
            },
            yellow: {
                50: "#fefce8",
                100: "#fef9c3",
                200: "#fef08a",
                300: "#fde047",
                400: "#facc15",
                500: "#eab308",
                600: "#ca8a04",
                700: "#a16207",
                800: "#854d0e",
                900: "#713f12",
                950: "#422006",
            },
            lime: {
                50: "#f7fee7",
                100: "#ecfccb",
                200: "#d9f99d",
                300: "#bef264",
                400: "#a3e635",
                500: "#84cc16",
                600: "#65a30d",
                700: "#4d7c0f",
                800: "#3f6212",
                900: "#365314",
                950: "#1a2e05",
            },
            green: {
                50: "#f0fdf4",
                100: "#dcfce7",
                200: "#bbf7d0",
                300: "#86efac",
                400: "#4ade80",
                500: "#22c55e",
                600: "#16a34a",
                700: "#15803d",
                800: "#166534",
                900: "#14532d",
                950: "#052e16",
            },
            emerald: {
                50: "#ecfdf5",
                100: "#d1fae5",
                200: "#a7f3d0",
                300: "#6ee7b7",
                400: "#34d399",
                500: "#10b981",
                600: "#059669",
                700: "#047857",
                800: "#065f46",
                900: "#064e3b",
                950: "#022c22",
            },
            teal: {
                50: "#f0fdfa",
                100: "#ccfbf1",
                200: "#99f6e4",
                300: "#5eead4",
                400: "#2dd4bf",
                500: "#14b8a6",
                600: "#0d9488",
                700: "#0f766e",
                800: "#115e59",
                900: "#134e4a",
                950: "#042f2e",
            },
            cyan: {
                50: "#ecfeff",
                100: "#cffafe",
                200: "#a5f3fc",
                300: "#67e8f9",
                400: "#22d3ee",
                500: "#06b6d4",
                600: "#0891b2",
                700: "#0e7490",
                800: "#155e75",
                900: "#164e63",
                950: "#083344",
            },
            sky: {
                50: "#f0f9ff",
                100: "#e0f2fe",
                200: "#bae6fd",
                300: "#7dd3fc",
                400: "#38bdf8",
                500: "#0ea5e9",
                600: "#0284c7",
                700: "#0369a1",
                800: "#075985",
                900: "#0c4a6e",
                950: "#082f49",
            },
            blue: {
                50: "#eff6ff",
                100: "#dbeafe",
                200: "#bfdbfe",
                300: "#93c5fd",
                400: "#60a5fa",
                500: "#3b82f6",
                600: "#2563eb",
                700: "#1d4ed8",
                800: "#1e40af",
                900: "#1e3a8a",
                950: "#172554",
            },
            indigo: {
                50: "#eef2ff",
                100: "#e0e7ff",
                200: "#c7d2fe",
                300: "#a5b4fc",
                400: "#818cf8",
                500: "#6366f1",
                600: "#4f46e5",
                700: "#4338ca",
                800: "#3730a3",
                900: "#312e81",
                950: "#1e1b4b",
            },
            violet: {
                50: "#f5f3ff",
                100: "#ede9fe",
                200: "#ddd6fe",
                300: "#c4b5fd",
                400: "#a78bfa",
                500: "#8b5cf6",
                600: "#7c3aed",
                700: "#6d28d9",
                800: "#5b21b6",
                900: "#4c1d95",
                950: "#2e1065",
            },
            purple: {
                50: "#faf5ff",
                100: "#f3e8ff",
                200: "#e9d5ff",
                300: "#d8b4fe",
                400: "#c084fc",
                500: "#a855f7",
                600: "#9333ea",
                700: "#7e22ce",
                800: "#6b21a8",
                900: "#581c87",
                950: "#3b0764",
            },
            fuchsia: {
                50: "#fdf4ff",
                100: "#fae8ff",
                200: "#f5d0fe",
                300: "#f0abfc",
                400: "#e879f9",
                500: "#d946ef",
                600: "#c026d3",
                700: "#a21caf",
                800: "#86198f",
                900: "#701a75",
                950: "#4a044e",
            },
            pink: {
                50: "#fdf2f8",
                100: "#fce7f3",
                200: "#fbcfe8",
                300: "#f9a8d4",
                400: "#f472b6",
                500: "#ec4899",
                600: "#db2777",
                700: "#be185d",
                800: "#9d174d",
                900: "#831843",
                950: "#500724",
            },
            rose: {
                50: "#fff1f2",
                100: "#ffe4e6",
                200: "#fecdd3",
                300: "#fda4af",
                400: "#fb7185",
                500: "#f43f5e",
                600: "#e11d48",
                700: "#be123c",
                800: "#9f1239",
                900: "#881337",
                950: "#4c0519",
            },
            get lightBlue() {
                return (
                    q({ version: "v2.2", from: "lightBlue", to: "sky" }),
                    this.sky
                );
            },
            get warmGray() {
                return (
                    q({ version: "v3.0", from: "warmGray", to: "stone" }),
                    this.stone
                );
            },
            get trueGray() {
                return (
                    q({ version: "v3.0", from: "trueGray", to: "neutral" }),
                    this.neutral
                );
            },
            get coolGray() {
                return (
                    q({ version: "v3.0", from: "coolGray", to: "gray" }),
                    this.gray
                );
            },
            get blueGray() {
                return (
                    q({ version: "v3.0", from: "blueGray", to: "slate" }),
                    this.slate
                );
            },
        };
    });
    var tr = p((se) => {
        "use strict";
        Object.defineProperty(se, "__esModule", { value: !0 });
        Object.defineProperty(se, "defaults", {
            enumerable: !0,
            get: function () {
                return Gt;
            },
        });
        function Gt(e, ...r) {
            for (let i of r) {
                for (let s in i) {
                    var n;
                    (!(
                        e == null ||
                        (n = e.hasOwnProperty) === null ||
                        n === void 0
                    ) &&
                        n.call(e, s)) ||
                        (e[s] = i[s]);
                }
                for (let s of Object.getOwnPropertySymbols(i)) {
                    var t;
                    (!(
                        e == null ||
                        (t = e.hasOwnProperty) === null ||
                        t === void 0
                    ) &&
                        t.call(e, s)) ||
                        (e[s] = i[s]);
                }
            }
            return e;
        }
    });
    var nr = p((ce) => {
        "use strict";
        Object.defineProperty(ce, "__esModule", { value: !0 });
        Object.defineProperty(ce, "toPath", {
            enumerable: !0,
            get: function () {
                return Vt;
            },
        });
        function Vt(e) {
            if (Array.isArray(e)) return e;
            let r = e.split("[").length - 1,
                n = e.split("]").length - 1;
            if (r !== n)
                throw new Error(
                    `Path is invalid. Has unbalanced brackets: ${e}`
                );
            return e.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
        }
    });
    var V = p((ue) => {
        "use strict";
        Object.defineProperty(ue, "__esModule", { value: !0 });
        function Nt(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        Nt(ue, {
            flagEnabled: function () {
                return Yt;
            },
            issueFlagNotices: function () {
                return Kt;
            },
            default: function () {
                return Xt;
            },
        });
        var It = ir(ne()),
            Ht = ir(G());
        function ir(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var or = {
                optimizeUniversalDefaults: !1,
                generalizedModifiers: !0,
                get disableColorOpacityUtilitiesByDefault() {
                    return !1;
                },
                get relativeContentPathsByDefault() {
                    return !1;
                },
            },
            $ = {
                future: [
                    "hoverOnlyWhenSupported",
                    "respectDefaultRingColorOpacity",
                    "disableColorOpacityUtilitiesByDefault",
                    "relativeContentPathsByDefault",
                ],
                experimental: [
                    "optimizeUniversalDefaults",
                    "generalizedModifiers",
                ],
            };
        function Yt(e, r) {
            if ($.future.includes(r)) {
                var n, t, i;
                return (
                    e.future === "all" ||
                    ((i =
                        (t =
                            e == null || (n = e.future) === null || n === void 0
                                ? void 0
                                : n[r]) !== null && t !== void 0
                            ? t
                            : or[r]) !== null && i !== void 0
                        ? i
                        : !1)
                );
            }
            if ($.experimental.includes(r)) {
                var s, l, c;
                return (
                    e.experimental === "all" ||
                    ((c =
                        (l =
                            e == null ||
                            (s = e.experimental) === null ||
                            s === void 0
                                ? void 0
                                : s[r]) !== null && l !== void 0
                            ? l
                            : or[r]) !== null && c !== void 0
                        ? c
                        : !1)
                );
            }
            return !1;
        }
        function ar(e) {
            if (e.experimental === "all") return $.experimental;
            var r;
            return Object.keys(
                (r = e?.experimental) !== null && r !== void 0 ? r : {}
            ).filter((n) => $.experimental.includes(n) && e.experimental[n]);
        }
        function Kt(e) {
            if (process.env.JEST_WORKER_ID === void 0 && ar(e).length > 0) {
                let r = ar(e)
                    .map((n) => It.default.yellow(n))
                    .join(", ");
                Ht.default.warn("experimental-flags-enabled", [
                    `You have enabled experimental features: ${r}`,
                    "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.",
                ]);
            }
        }
        var Xt = $;
    });
    var sr = p((de) => {
        "use strict";
        Object.defineProperty(de, "__esModule", { value: !0 });
        Object.defineProperty(de, "normalizeConfig", {
            enumerable: !0,
            get: function () {
                return Qt;
            },
        });
        var Jt = V(),
            P = Zt(G());
        function lr(e) {
            if (typeof WeakMap != "function") return null;
            var r = new WeakMap(),
                n = new WeakMap();
            return (lr = function (t) {
                return t ? n : r;
            })(e);
        }
        function Zt(e, r) {
            if (!r && e && e.__esModule) return e;
            if (e === null || (typeof e != "object" && typeof e != "function"))
                return { default: e };
            var n = lr(r);
            if (n && n.has(e)) return n.get(e);
            var t = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e)
                if (
                    s !== "default" &&
                    Object.prototype.hasOwnProperty.call(e, s)
                ) {
                    var l = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                    l && (l.get || l.set)
                        ? Object.defineProperty(t, s, l)
                        : (t[s] = e[s]);
                }
            return (t.default = e), n && n.set(e, t), t;
        }
        function Qt(e) {
            if (
                ((() => {
                    if (
                        e.purge ||
                        !e.content ||
                        (!Array.isArray(e.content) &&
                            !(
                                typeof e.content == "object" &&
                                e.content !== null
                            ))
                    )
                        return !1;
                    if (Array.isArray(e.content))
                        return e.content.every((t) =>
                            typeof t == "string"
                                ? !0
                                : !(
                                      typeof t?.raw != "string" ||
                                      (t?.extension &&
                                          typeof t?.extension != "string")
                                  )
                        );
                    if (typeof e.content == "object" && e.content !== null) {
                        if (
                            Object.keys(e.content).some(
                                (t) =>
                                    ![
                                        "files",
                                        "relative",
                                        "extract",
                                        "transform",
                                    ].includes(t)
                            )
                        )
                            return !1;
                        if (Array.isArray(e.content.files)) {
                            if (
                                !e.content.files.every((t) =>
                                    typeof t == "string"
                                        ? !0
                                        : !(
                                              typeof t?.raw != "string" ||
                                              (t?.extension &&
                                                  typeof t?.extension !=
                                                      "string")
                                          )
                                )
                            )
                                return !1;
                            if (typeof e.content.extract == "object") {
                                for (let t of Object.values(e.content.extract))
                                    if (typeof t != "function") return !1;
                            } else if (
                                !(
                                    e.content.extract === void 0 ||
                                    typeof e.content.extract == "function"
                                )
                            )
                                return !1;
                            if (typeof e.content.transform == "object") {
                                for (let t of Object.values(
                                    e.content.transform
                                ))
                                    if (typeof t != "function") return !1;
                            } else if (
                                !(
                                    e.content.transform === void 0 ||
                                    typeof e.content.transform == "function"
                                )
                            )
                                return !1;
                            if (
                                typeof e.content.relative != "boolean" &&
                                typeof e.content.relative < "u"
                            )
                                return !1;
                        }
                        return !0;
                    }
                    return !1;
                })() ||
                    P.default.warn("purge-deprecation", [
                        "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
                        "Update your configuration file to eliminate this warning.",
                        "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources",
                    ]),
                (e.safelist = (() => {
                    var t;
                    let { content: i, purge: s, safelist: l } = e;
                    return Array.isArray(l)
                        ? l
                        : Array.isArray(i?.safelist)
                        ? i.safelist
                        : Array.isArray(s?.safelist)
                        ? s.safelist
                        : Array.isArray(
                              s == null ||
                                  (t = s.options) === null ||
                                  t === void 0
                                  ? void 0
                                  : t.safelist
                          )
                        ? s.options.safelist
                        : [];
                })()),
                (e.blocklist = (() => {
                    let { blocklist: t } = e;
                    if (Array.isArray(t)) {
                        if (t.every((i) => typeof i == "string")) return t;
                        P.default.warn("blocklist-invalid", [
                            "The `blocklist` option must be an array of strings.",
                            "https://tailwindcss.com/docs/content-configuration#discarding-classes",
                        ]);
                    }
                    return [];
                })()),
                typeof e.prefix == "function")
            )
                P.default.warn("prefix-function", [
                    "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
                    "Update `prefix` in your configuration to be a string to eliminate this warning.",
                    "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function",
                ]),
                    (e.prefix = "");
            else {
                var n;
                e.prefix = (n = e.prefix) !== null && n !== void 0 ? n : "";
            }
            e.content = {
                relative: (() => {
                    let { content: t } = e;
                    return t?.relative
                        ? t.relative
                        : (0, Jt.flagEnabled)(
                              e,
                              "relativeContentPathsByDefault"
                          );
                })(),
                files: (() => {
                    let { content: t, purge: i } = e;
                    return Array.isArray(i)
                        ? i
                        : Array.isArray(i?.content)
                        ? i.content
                        : Array.isArray(t)
                        ? t
                        : Array.isArray(t?.content)
                        ? t.content
                        : Array.isArray(t?.files)
                        ? t.files
                        : [];
                })(),
                extract: (() => {
                    let t = (() => {
                            var l, c, d, g, u, f, m, y, b, k;
                            return !((l = e.purge) === null || l === void 0) &&
                                l.extract
                                ? e.purge.extract
                                : !((c = e.content) === null || c === void 0) &&
                                  c.extract
                                ? e.content.extract
                                : !(
                                      (d = e.purge) === null ||
                                      d === void 0 ||
                                      (g = d.extract) === null ||
                                      g === void 0
                                  ) && g.DEFAULT
                                ? e.purge.extract.DEFAULT
                                : !(
                                      (u = e.content) === null ||
                                      u === void 0 ||
                                      (f = u.extract) === null ||
                                      f === void 0
                                  ) && f.DEFAULT
                                ? e.content.extract.DEFAULT
                                : !(
                                      (m = e.purge) === null ||
                                      m === void 0 ||
                                      (y = m.options) === null ||
                                      y === void 0
                                  ) && y.extractors
                                ? e.purge.options.extractors
                                : !(
                                      (b = e.content) === null ||
                                      b === void 0 ||
                                      (k = b.options) === null ||
                                      k === void 0
                                  ) && k.extractors
                                ? e.content.options.extractors
                                : {};
                        })(),
                        i = {},
                        s = (() => {
                            var l, c, d, g;
                            if (
                                !(
                                    (l = e.purge) === null ||
                                    l === void 0 ||
                                    (c = l.options) === null ||
                                    c === void 0
                                ) &&
                                c.defaultExtractor
                            )
                                return e.purge.options.defaultExtractor;
                            if (
                                !(
                                    (d = e.content) === null ||
                                    d === void 0 ||
                                    (g = d.options) === null ||
                                    g === void 0
                                ) &&
                                g.defaultExtractor
                            )
                                return e.content.options.defaultExtractor;
                        })();
                    if (
                        (s !== void 0 && (i.DEFAULT = s),
                        typeof t == "function")
                    )
                        i.DEFAULT = t;
                    else if (Array.isArray(t))
                        for (let { extensions: l, extractor: c } of t ?? [])
                            for (let d of l) i[d] = c;
                    else
                        typeof t == "object" &&
                            t !== null &&
                            Object.assign(i, t);
                    return i;
                })(),
                transform: (() => {
                    let t = (() => {
                            var s, l, c, d, g, u;
                            return !((s = e.purge) === null || s === void 0) &&
                                s.transform
                                ? e.purge.transform
                                : !((l = e.content) === null || l === void 0) &&
                                  l.transform
                                ? e.content.transform
                                : !(
                                      (c = e.purge) === null ||
                                      c === void 0 ||
                                      (d = c.transform) === null ||
                                      d === void 0
                                  ) && d.DEFAULT
                                ? e.purge.transform.DEFAULT
                                : !(
                                      (g = e.content) === null ||
                                      g === void 0 ||
                                      (u = g.transform) === null ||
                                      u === void 0
                                  ) && u.DEFAULT
                                ? e.content.transform.DEFAULT
                                : {};
                        })(),
                        i = {};
                    return (
                        typeof t == "function" && (i.DEFAULT = t),
                        typeof t == "object" &&
                            t !== null &&
                            Object.assign(i, t),
                        i
                    );
                })(),
            };
            for (let t of e.content.files)
                if (typeof t == "string" && /{([^,]*?)}/g.test(t)) {
                    P.default.warn("invalid-glob-braces", [
                        `The glob pattern ${(0, P.dim)(
                            t
                        )} in your Tailwind CSS configuration is invalid.`,
                        `Update it to ${(0, P.dim)(
                            t.replace(/{([^,]*?)}/g, "$1")
                        )} to silence this warning.`,
                    ]);
                    break;
                }
            return e;
        }
    });
    var cr = p((fe) => {
        "use strict";
        Object.defineProperty(fe, "__esModule", { value: !0 });
        Object.defineProperty(fe, "default", {
            enumerable: !0,
            get: function () {
                return en;
            },
        });
        function en(e) {
            if (Object.prototype.toString.call(e) !== "[object Object]")
                return !1;
            let r = Object.getPrototypeOf(e);
            return r === null || Object.getPrototypeOf(r) === null;
        }
    });
    var me = p((ge) => {
        "use strict";
        Object.defineProperty(ge, "__esModule", { value: !0 });
        Object.defineProperty(ge, "cloneDeep", {
            enumerable: !0,
            get: function () {
                return pe;
            },
        });
        function pe(e) {
            return Array.isArray(e)
                ? e.map((r) => pe(r))
                : typeof e == "object" && e !== null
                ? Object.fromEntries(
                      Object.entries(e).map(([r, n]) => [r, pe(n)])
                  )
                : e;
        }
    });
    var ur = p((he) => {
        "use strict";
        Object.defineProperty(he, "__esModule", { value: !0 });
        Object.defineProperty(he, "default", {
            enumerable: !0,
            get: function () {
                return rn;
            },
        });
        function rn(e) {
            return e.replace(/\\,/g, "\\2c ");
        }
    });
    var ye = p((be) => {
        "use strict";
        Object.defineProperty(be, "__esModule", { value: !0 });
        function tn(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        tn(be, {
            withAlphaValue: function () {
                return nn;
            },
            default: function () {
                return on;
            },
        });
        var N = D();
        function nn(e, r, n) {
            if (typeof e == "function") return e({ opacityValue: r });
            let t = (0, N.parseColor)(e, { loose: !0 });
            return t === null ? n : (0, N.formatColor)({ ...t, alpha: r });
        }
        function on({ color: e, property: r, variable: n }) {
            let t = [].concat(r);
            if (typeof e == "function")
                return {
                    [n]: "1",
                    ...Object.fromEntries(
                        t.map((s) => [
                            s,
                            e({
                                opacityVariable: n,
                                opacityValue: `var(${n})`,
                            }),
                        ])
                    ),
                };
            let i = (0, N.parseColor)(e);
            return i === null
                ? Object.fromEntries(t.map((s) => [s, e]))
                : i.alpha !== void 0
                ? Object.fromEntries(t.map((s) => [s, e]))
                : {
                      [n]: "1",
                      ...Object.fromEntries(
                          t.map((s) => [
                              s,
                              (0, N.formatColor)({ ...i, alpha: `var(${n})` }),
                          ])
                      ),
                  };
        }
    });
    var I = p((we) => {
        "use strict";
        Object.defineProperty(we, "__esModule", { value: !0 });
        Object.defineProperty(we, "splitAtTopLevelOnly", {
            enumerable: !0,
            get: function () {
                return an;
            },
        });
        function an(e, r) {
            let n = [],
                t = [],
                i = 0,
                s = !1;
            for (let l = 0; l < e.length; l++) {
                let c = e[l];
                n.length === 0 &&
                    c === r[0] &&
                    !s &&
                    (r.length === 1 || e.slice(l, l + r.length) === r) &&
                    (t.push(e.slice(i, l)), (i = l + r.length)),
                    s ? (s = !1) : c === "\\" && (s = !0),
                    c === "(" || c === "[" || c === "{"
                        ? n.push(c)
                        : ((c === ")" && n[n.length - 1] === "(") ||
                              (c === "]" && n[n.length - 1] === "[") ||
                              (c === "}" && n[n.length - 1] === "{")) &&
                          n.pop();
            }
            return t.push(e.slice(i)), t;
        }
    });
    var fr = p((ve) => {
        "use strict";
        Object.defineProperty(ve, "__esModule", { value: !0 });
        function ln(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        ln(ve, {
            parseBoxShadowValue: function () {
                return dn;
            },
            formatBoxShadowValue: function () {
                return fn;
            },
        });
        var sn = I(),
            cn = new Set(["inset", "inherit", "initial", "revert", "unset"]),
            un = /\ +(?![^(]*\))/g,
            dr = /^-?(\d+|\.\d+)(.*?)$/g;
        function dn(e) {
            return (0, sn.splitAtTopLevelOnly)(e, ",").map((n) => {
                let t = n.trim(),
                    i = { raw: t },
                    s = t.split(un),
                    l = new Set();
                for (let c of s)
                    (dr.lastIndex = 0),
                        !l.has("KEYWORD") && cn.has(c)
                            ? ((i.keyword = c), l.add("KEYWORD"))
                            : dr.test(c)
                            ? l.has("X")
                                ? l.has("Y")
                                    ? l.has("BLUR")
                                        ? l.has("SPREAD") ||
                                          ((i.spread = c), l.add("SPREAD"))
                                        : ((i.blur = c), l.add("BLUR"))
                                    : ((i.y = c), l.add("Y"))
                                : ((i.x = c), l.add("X"))
                            : i.color
                            ? (i.unknown || (i.unknown = []), i.unknown.push(c))
                            : (i.color = c);
                return (i.valid = i.x !== void 0 && i.y !== void 0), i;
            });
        }
        function fn(e) {
            return e
                .map((r) =>
                    r.valid
                        ? [r.keyword, r.x, r.y, r.blur, r.spread, r.color]
                              .filter(Boolean)
                              .join(" ")
                        : r.raw
                )
                .join(", ");
        }
    });
    var _e = p((ke) => {
        "use strict";
        Object.defineProperty(ke, "__esModule", { value: !0 });
        function pn(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        pn(ke, {
            normalize: function () {
                return E;
            },
            url: function () {
                return pr;
            },
            number: function () {
                return gr;
            },
            percentage: function () {
                return mr;
            },
            length: function () {
                return hr;
            },
            lineWidth: function () {
                return kn;
            },
            shadow: function () {
                return _n;
            },
            color: function () {
                return Cn;
            },
            image: function () {
                return En;
            },
            gradient: function () {
                return br;
            },
            position: function () {
                return Sn;
            },
            familyName: function () {
                return jn;
            },
            genericName: function () {
                return Tn;
            },
            absoluteSize: function () {
                return Mn;
            },
            relativeSize: function () {
                return Dn;
            },
        });
        var gn = D(),
            mn = fr(),
            H = I(),
            hn = ["min", "max", "clamp", "calc"];
        function xe(e) {
            return hn.some((r) => new RegExp(`^${r}\\(.*\\)`).test(e));
        }
        var bn = new Set([
            "scroll-timeline-name",
            "timeline-scope",
            "view-timeline-name",
            "font-palette",
            "scroll-timeline",
            "animation-timeline",
            "view-timeline",
        ]);
        function E(e, r = null, n = !0) {
            let t = r && bn.has(r.property);
            return e.startsWith("--") && !t
                ? `var(${e})`
                : e.includes("url(")
                ? e
                      .split(/(url\(.*?\))/g)
                      .filter(Boolean)
                      .map((i) => (/^url\(.*?\)$/.test(i) ? i : E(i, r, !1)))
                      .join("")
                : ((e = e
                      .replace(
                          /([^\\])_+/g,
                          (i, s) => s + " ".repeat(i.length - 1)
                      )
                      .replace(/^_/g, " ")
                      .replace(/\\_/g, "_")),
                  n && (e = e.trim()),
                  (e = yn(e)),
                  e);
        }
        function yn(e) {
            let r = ["theme"],
                n = [
                    "min-content",
                    "max-content",
                    "fit-content",
                    "safe-area-inset-top",
                    "safe-area-inset-right",
                    "safe-area-inset-bottom",
                    "safe-area-inset-left",
                    "titlebar-area-x",
                    "titlebar-area-y",
                    "titlebar-area-width",
                    "titlebar-area-height",
                    "keyboard-inset-top",
                    "keyboard-inset-right",
                    "keyboard-inset-bottom",
                    "keyboard-inset-left",
                    "keyboard-inset-width",
                    "keyboard-inset-height",
                    "radial-gradient",
                    "linear-gradient",
                    "conic-gradient",
                    "repeating-radial-gradient",
                    "repeating-linear-gradient",
                    "repeating-conic-gradient",
                ];
            return e.replace(/(calc|min|max|clamp)\(.+\)/g, (t) => {
                let i = "";
                function s() {
                    let l = i.trimEnd();
                    return l[l.length - 1];
                }
                for (let l = 0; l < t.length; l++) {
                    let c = function (u) {
                            return u.split("").every((f, m) => t[l + m] === f);
                        },
                        d = function (u) {
                            let f = 1 / 0;
                            for (let y of u) {
                                let b = t.indexOf(y, l);
                                b !== -1 && b < f && (f = b);
                            }
                            let m = t.slice(l, f);
                            return (l += m.length - 1), m;
                        },
                        g = t[l];
                    if (c("var")) i += d([")", ","]);
                    else if (n.some((u) => c(u))) {
                        let u = n.find((f) => c(f));
                        (i += u), (l += u.length - 1);
                    } else
                        r.some((u) => c(u))
                            ? (i += d([")"]))
                            : c("[")
                            ? (i += d(["]"]))
                            : ["+", "-", "*", "/"].includes(g) &&
                              !["(", "+", "-", "*", "/", ","].includes(s())
                            ? (i += ` ${g} `)
                            : (i += g);
                }
                return i.replace(/\s+/g, " ");
            });
        }
        function pr(e) {
            return e.startsWith("url(");
        }
        function gr(e) {
            return !isNaN(Number(e)) || xe(e);
        }
        function mr(e) {
            return (e.endsWith("%") && gr(e.slice(0, -1))) || xe(e);
        }
        var wn = [
                "cm",
                "mm",
                "Q",
                "in",
                "pc",
                "pt",
                "px",
                "em",
                "ex",
                "ch",
                "rem",
                "lh",
                "rlh",
                "vw",
                "vh",
                "vmin",
                "vmax",
                "vb",
                "vi",
                "svw",
                "svh",
                "lvw",
                "lvh",
                "dvw",
                "dvh",
                "cqw",
                "cqh",
                "cqi",
                "cqb",
                "cqmin",
                "cqmax",
            ],
            vn = `(?:${wn.join("|")})`;
        function hr(e) {
            return (
                e === "0" ||
                new RegExp(
                    `^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${vn}$`
                ).test(e) ||
                xe(e)
            );
        }
        var xn = new Set(["thin", "medium", "thick"]);
        function kn(e) {
            return xn.has(e);
        }
        function _n(e) {
            let r = (0, mn.parseBoxShadowValue)(E(e));
            for (let n of r) if (!n.valid) return !1;
            return !0;
        }
        function Cn(e) {
            let r = 0;
            return (0, H.splitAtTopLevelOnly)(e, "_").every(
                (t) => (
                    (t = E(t)),
                    t.startsWith("var(")
                        ? !0
                        : (0, gn.parseColor)(t, { loose: !0 }) !== null
                        ? (r++, !0)
                        : !1
                )
            )
                ? r > 0
                : !1;
        }
        function En(e) {
            let r = 0;
            return (0, H.splitAtTopLevelOnly)(e, ",").every(
                (t) => (
                    (t = E(t)),
                    t.startsWith("var(")
                        ? !0
                        : pr(t) ||
                          br(t) ||
                          [
                              "element(",
                              "image(",
                              "cross-fade(",
                              "image-set(",
                          ].some((i) => t.startsWith(i))
                        ? (r++, !0)
                        : !1
                )
            )
                ? r > 0
                : !1;
        }
        var On = new Set([
            "conic-gradient",
            "linear-gradient",
            "radial-gradient",
            "repeating-conic-gradient",
            "repeating-linear-gradient",
            "repeating-radial-gradient",
        ]);
        function br(e) {
            e = E(e);
            for (let r of On) if (e.startsWith(`${r}(`)) return !0;
            return !1;
        }
        var An = new Set(["center", "top", "right", "bottom", "left"]);
        function Sn(e) {
            let r = 0;
            return (0, H.splitAtTopLevelOnly)(e, "_").every(
                (t) => (
                    (t = E(t)),
                    t.startsWith("var(")
                        ? !0
                        : An.has(t) || hr(t) || mr(t)
                        ? (r++, !0)
                        : !1
                )
            )
                ? r > 0
                : !1;
        }
        function jn(e) {
            let r = 0;
            return (0, H.splitAtTopLevelOnly)(e, ",").every(
                (t) => (
                    (t = E(t)),
                    t.startsWith("var(")
                        ? !0
                        : (t.includes(" ") && !/(['"])([^"']+)\1/g.test(t)) ||
                          /^\d/g.test(t)
                        ? !1
                        : (r++, !0)
                )
            )
                ? r > 0
                : !1;
        }
        var Pn = new Set([
            "serif",
            "sans-serif",
            "monospace",
            "cursive",
            "fantasy",
            "system-ui",
            "ui-serif",
            "ui-sans-serif",
            "ui-monospace",
            "ui-rounded",
            "math",
            "emoji",
            "fangsong",
        ]);
        function Tn(e) {
            return Pn.has(e);
        }
        var zn = new Set([
            "xx-small",
            "x-small",
            "small",
            "medium",
            "large",
            "x-large",
            "x-large",
            "xxx-large",
        ]);
        function Mn(e) {
            return zn.has(e);
        }
        var Rn = new Set(["larger", "smaller"]);
        function Dn(e) {
            return Rn.has(e);
        }
    });
    var vr = p((Ce) => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", { value: !0 });
        Object.defineProperty(Ce, "backgroundSize", {
            enumerable: !0,
            get: function () {
                return qn;
            },
        });
        var yr = _e(),
            wr = I();
        function qn(e) {
            let r = ["cover", "contain"];
            return (0, wr.splitAtTopLevelOnly)(e, ",").every((n) => {
                let t = (0, wr.splitAtTopLevelOnly)(n, "_").filter(Boolean);
                return t.length === 1 && r.includes(t[0])
                    ? !0
                    : t.length !== 1 && t.length !== 2
                    ? !1
                    : t.every(
                          (i) =>
                              (0, yr.length)(i) ||
                              (0, yr.percentage)(i) ||
                              i === "auto"
                      );
            });
        }
    });
    var Tr = p((Oe) => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", { value: !0 });
        function $n(e, r) {
            for (var n in r)
                Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }
        $n(Oe, {
            updateAllClasses: function () {
                return Ln;
            },
            asValue: function () {
                return F;
            },
            parseColorFormat: function () {
                return Ee;
            },
            asColor: function () {
                return Sr;
            },
            asLookupValue: function () {
                return jr;
            },
            typeMap: function () {
                return Y;
            },
            coerceValue: function () {
                return Vn;
            },
            getMatchingTypes: function () {
                return Pr;
            },
        });
        var Fn = Cr(ur()),
            xr = ye(),
            w = _e(),
            kr = Cr(Q()),
            Un = vr(),
            Bn = V();
        function Cr(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function Ln(e, r) {
            e.walkClasses((n) => {
                (n.value = r(n.value)),
                    n.raws &&
                        n.raws.value &&
                        (n.raws.value = (0, Fn.default)(n.raws.value));
            });
        }
        function Er(e, r) {
            if (!O(e)) return;
            let n = e.slice(1, -1);
            if (r(n)) return (0, w.normalize)(n);
        }
        function Wn(e, r = {}, n) {
            let t = r[e];
            if (t !== void 0) return (0, kr.default)(t);
            if (O(e)) {
                let i = Er(e, n);
                return i === void 0 ? void 0 : (0, kr.default)(i);
            }
        }
        function F(e, r = {}, { validate: n = () => !0 } = {}) {
            var t;
            let i = (t = r.values) === null || t === void 0 ? void 0 : t[e];
            return i !== void 0
                ? i
                : r.supportsNegativeValues && e.startsWith("-")
                ? Wn(e.slice(1), r.values, n)
                : Er(e, n);
        }
        function O(e) {
            return e.startsWith("[") && e.endsWith("]");
        }
        function Or(e) {
            let r = e.lastIndexOf("/"),
                n = e.lastIndexOf("[", r),
                t = e.indexOf("]", r);
            return (
                e[r - 1] === "]" ||
                    e[r + 1] === "[" ||
                    (n !== -1 &&
                        t !== -1 &&
                        n < r &&
                        r < t &&
                        (r = e.lastIndexOf("/", n))),
                r === -1 || r === e.length - 1
                    ? [e, void 0]
                    : O(e) && !e.includes("]/[")
                    ? [e, void 0]
                    : [e.slice(0, r), e.slice(r + 1)]
            );
        }
        function Ee(e) {
            if (typeof e == "string" && e.includes("<alpha-value>")) {
                let r = e;
                return ({ opacityValue: n = 1 }) =>
                    r.replace("<alpha-value>", n);
            }
            return e;
        }
        function Ar(e) {
            return (0, w.normalize)(e.slice(1, -1));
        }
        function Sr(e, r = {}, { tailwindConfig: n = {} } = {}) {
            var t;
            if (
                ((t = r.values) === null || t === void 0 ? void 0 : t[e]) !==
                void 0
            ) {
                var i;
                return Ee(
                    (i = r.values) === null || i === void 0 ? void 0 : i[e]
                );
            }
            let [s, l] = Or(e);
            if (l !== void 0) {
                var c, d, g, u;
                let f =
                    (u =
                        (c = r.values) === null || c === void 0
                            ? void 0
                            : c[s]) !== null && u !== void 0
                        ? u
                        : O(s)
                        ? s.slice(1, -1)
                        : void 0;
                return f === void 0
                    ? void 0
                    : ((f = Ee(f)),
                      O(l)
                          ? (0, xr.withAlphaValue)(f, Ar(l))
                          : ((d = n.theme) === null ||
                            d === void 0 ||
                            (g = d.opacity) === null ||
                            g === void 0
                                ? void 0
                                : g[l]) === void 0
                          ? void 0
                          : (0, xr.withAlphaValue)(f, n.theme.opacity[l]));
            }
            return F(e, r, { validate: w.color });
        }
        function jr(e, r = {}) {
            var n;
            return (n = r.values) === null || n === void 0 ? void 0 : n[e];
        }
        function v(e) {
            return (r, n) => F(r, n, { validate: e });
        }
        var Y = {
                any: F,
                color: Sr,
                url: v(w.url),
                image: v(w.image),
                length: v(w.length),
                percentage: v(w.percentage),
                position: v(w.position),
                lookup: jr,
                "generic-name": v(w.genericName),
                "family-name": v(w.familyName),
                number: v(w.number),
                "line-width": v(w.lineWidth),
                "absolute-size": v(w.absoluteSize),
                "relative-size": v(w.relativeSize),
                shadow: v(w.shadow),
                size: v(Un.backgroundSize),
            },
            _r = Object.keys(Y);
        function Gn(e, r) {
            let n = e.indexOf(r);
            return n === -1 ? [void 0, e] : [e.slice(0, n), e.slice(n + 1)];
        }
        function Vn(e, r, n, t) {
            if (n.values && r in n.values)
                for (let { type: s } of e ?? []) {
                    let l = Y[s](r, n, { tailwindConfig: t });
                    if (l !== void 0) return [l, s, null];
                }
            if (O(r)) {
                let s = r.slice(1, -1),
                    [l, c] = Gn(s, ":");
                if (!/^[\w-_]+$/g.test(l)) c = s;
                else if (l !== void 0 && !_r.includes(l)) return [];
                if (c.length > 0 && _r.includes(l))
                    return [F(`[${c}]`, n), l, null];
            }
            let i = Pr(e, r, n, t);
            for (let s of i) return s;
            return [];
        }
        function* Pr(e, r, n, t) {
            let i = (0, Bn.flagEnabled)(t, "generalizedModifiers"),
                [s, l] = Or(r);
            if (
                ((i &&
                    n.modifiers != null &&
                    (n.modifiers === "any" ||
                        (typeof n.modifiers == "object" &&
                            ((l && O(l)) || l in n.modifiers)))) ||
                    ((s = r), (l = void 0)),
                l !== void 0 && s === "" && (s = "DEFAULT"),
                l !== void 0 && typeof n.modifiers == "object")
            ) {
                var d, g;
                let u =
                    (g =
                        (d = n.modifiers) === null || d === void 0
                            ? void 0
                            : d[l]) !== null && g !== void 0
                        ? g
                        : null;
                u !== null ? (l = u) : O(l) && (l = Ar(l));
            }
            for (let { type: u } of e ?? []) {
                let f = Y[u](s, n, { tailwindConfig: t });
                f !== void 0 && (yield [f, u, l ?? null]);
            }
        }
    });
    var zr = p((Ae) => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", { value: !0 });
        Object.defineProperty(Ae, "default", {
            enumerable: !0,
            get: function () {
                return Nn;
            },
        });
        function Nn(e) {
            return typeof e == "function" ? e({}) : e;
        }
    });
    var $r = p((je) => {
        "use strict";
        Object.defineProperty(je, "__esModule", { value: !0 });
        Object.defineProperty(je, "default", {
            enumerable: !0,
            get: function () {
                return co;
            },
        });
        var In = M(Q()),
            Hn = M(Ze()),
            Yn = M(Qe()),
            Kn = M(le()),
            Dr = tr(),
            Mr = nr(),
            Xn = sr(),
            T = M(cr()),
            Jn = me(),
            Zn = Tr(),
            Qn = ye(),
            eo = M(zr());
        function M(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function z(e) {
            return typeof e == "function";
        }
        function U(e, ...r) {
            let n = r.pop();
            for (let t of r)
                for (let i in t) {
                    let s = n(e[i], t[i]);
                    s === void 0
                        ? (0, T.default)(e[i]) && (0, T.default)(t[i])
                            ? (e[i] = U({}, e[i], t[i], n))
                            : (e[i] = t[i])
                        : (e[i] = s);
                }
            return e;
        }
        var Se = {
            colors: Kn.default,
            negative(e) {
                return Object.keys(e)
                    .filter((r) => e[r] !== "0")
                    .reduce((r, n) => {
                        let t = (0, In.default)(e[n]);
                        return t !== void 0 && (r[`-${n}`] = t), r;
                    }, {});
            },
            breakpoints(e) {
                return Object.keys(e)
                    .filter((r) => typeof e[r] == "string")
                    .reduce((r, n) => ({ ...r, [`screen-${n}`]: e[n] }), {});
            },
        };
        function ro(e, ...r) {
            return z(e) ? e(...r) : e;
        }
        function to(e) {
            return e.reduce(
                (r, { extend: n }) =>
                    U(r, n, (t, i) =>
                        t === void 0
                            ? [i]
                            : Array.isArray(t)
                            ? [i, ...t]
                            : [i, t]
                    ),
                {}
            );
        }
        function no(e) {
            return {
                ...e.reduce((r, n) => (0, Dr.defaults)(r, n), {}),
                extend: to(e),
            };
        }
        function Rr(e, r) {
            if (Array.isArray(e) && (0, T.default)(e[0])) return e.concat(r);
            if (Array.isArray(r) && (0, T.default)(r[0]) && (0, T.default)(e))
                return [e, ...r];
            if (Array.isArray(r)) return r;
        }
        function oo({ extend: e, ...r }) {
            return U(r, e, (n, t) =>
                !z(n) && !t.some(z)
                    ? U({}, n, ...t, Rr)
                    : (i, s) => U({}, ...[n, ...t].map((l) => ro(l, i, s)), Rr)
            );
        }
        function* ao(e) {
            let r = (0, Mr.toPath)(e);
            if (r.length === 0 || (yield r, Array.isArray(e))) return;
            let n = /^(.*?)\s*\/\s*([^/]+)$/,
                t = e.match(n);
            if (t !== null) {
                let [, i, s] = t,
                    l = (0, Mr.toPath)(i);
                (l.alpha = s), yield l;
            }
        }
        function io(e) {
            let r = (n, t) => {
                for (let i of ao(n)) {
                    let s = 0,
                        l = e;
                    for (; l != null && s < i.length; )
                        (l = l[i[s++]]),
                            (l =
                                z(l) &&
                                (i.alpha === void 0 || s <= i.length - 1)
                                    ? l(r, Se)
                                    : l);
                    if (l !== void 0) {
                        if (i.alpha !== void 0) {
                            let c = (0, Zn.parseColorFormat)(l);
                            return (0, Qn.withAlphaValue)(
                                c,
                                i.alpha,
                                (0, eo.default)(c)
                            );
                        }
                        return (0, T.default)(l) ? (0, Jn.cloneDeep)(l) : l;
                    }
                }
                return t;
            };
            return (
                Object.assign(r, { theme: r, ...Se }),
                Object.keys(e).reduce(
                    (n, t) => ((n[t] = z(e[t]) ? e[t](r, Se) : e[t]), n),
                    {}
                )
            );
        }
        function qr(e) {
            let r = [];
            return (
                e.forEach((n) => {
                    r = [...r, n];
                    var t;
                    let i = (t = n?.plugins) !== null && t !== void 0 ? t : [];
                    i.length !== 0 &&
                        i.forEach((s) => {
                            s.__isOptionsFunction && (s = s());
                            var l;
                            r = [
                                ...r,
                                ...qr([
                                    (l = s?.config) !== null && l !== void 0
                                        ? l
                                        : {},
                                ]),
                            ];
                        });
                }),
                r
            );
        }
        function lo(e) {
            return [...e].reduceRight(
                (n, t) =>
                    z(t) ? t({ corePlugins: n }) : (0, Yn.default)(t, n),
                Hn.default
            );
        }
        function so(e) {
            return [...e].reduceRight((n, t) => [...n, ...t], []);
        }
        function co(e) {
            let r = [...qr(e), { prefix: "", important: !1, separator: ":" }];
            var n, t;
            return (0, Xn.normalizeConfig)(
                (0, Dr.defaults)(
                    {
                        theme: io(
                            oo(
                                no(
                                    r.map((i) =>
                                        (n = i?.theme) !== null && n !== void 0
                                            ? n
                                            : {}
                                    )
                                )
                            )
                        ),
                        corePlugins: lo(r.map((i) => i.corePlugins)),
                        plugins: so(
                            e.map((i) =>
                                (t = i?.plugins) !== null && t !== void 0
                                    ? t
                                    : []
                            )
                        ),
                    },
                    ...r
                )
            );
        }
    });
    var Pe = p((ca, Fr) => {
        Fr.exports = {
            content: [],
            presets: [],
            darkMode: "media",
            theme: {
                accentColor: ({ theme: e }) => ({
                    ...e("colors"),
                    auto: "auto",
                }),
                animation: {
                    none: "none",
                    spin: "spin 1s linear infinite",
                    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    bounce: "bounce 1s infinite",
                },
                aria: {
                    busy: 'busy="true"',
                    checked: 'checked="true"',
                    disabled: 'disabled="true"',
                    expanded: 'expanded="true"',
                    hidden: 'hidden="true"',
                    pressed: 'pressed="true"',
                    readonly: 'readonly="true"',
                    required: 'required="true"',
                    selected: 'selected="true"',
                },
                aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" },
                backdropBlur: ({ theme: e }) => e("blur"),
                backdropBrightness: ({ theme: e }) => e("brightness"),
                backdropContrast: ({ theme: e }) => e("contrast"),
                backdropGrayscale: ({ theme: e }) => e("grayscale"),
                backdropHueRotate: ({ theme: e }) => e("hueRotate"),
                backdropInvert: ({ theme: e }) => e("invert"),
                backdropOpacity: ({ theme: e }) => e("opacity"),
                backdropSaturate: ({ theme: e }) => e("saturate"),
                backdropSepia: ({ theme: e }) => e("sepia"),
                backgroundColor: ({ theme: e }) => e("colors"),
                backgroundImage: {
                    none: "none",
                    "gradient-to-t":
                        "linear-gradient(to top, var(--tw-gradient-stops))",
                    "gradient-to-tr":
                        "linear-gradient(to top right, var(--tw-gradient-stops))",
                    "gradient-to-r":
                        "linear-gradient(to right, var(--tw-gradient-stops))",
                    "gradient-to-br":
                        "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                    "gradient-to-b":
                        "linear-gradient(to bottom, var(--tw-gradient-stops))",
                    "gradient-to-bl":
                        "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                    "gradient-to-l":
                        "linear-gradient(to left, var(--tw-gradient-stops))",
                    "gradient-to-tl":
                        "linear-gradient(to top left, var(--tw-gradient-stops))",
                },
                backgroundOpacity: ({ theme: e }) => e("opacity"),
                backgroundPosition: {
                    bottom: "bottom",
                    center: "center",
                    left: "left",
                    "left-bottom": "left bottom",
                    "left-top": "left top",
                    right: "right",
                    "right-bottom": "right bottom",
                    "right-top": "right top",
                    top: "top",
                },
                backgroundSize: {
                    auto: "auto",
                    cover: "cover",
                    contain: "contain",
                },
                blur: {
                    0: "0",
                    none: "0",
                    sm: "4px",
                    DEFAULT: "8px",
                    md: "12px",
                    lg: "16px",
                    xl: "24px",
                    "2xl": "40px",
                    "3xl": "64px",
                },
                borderColor: ({ theme: e }) => ({
                    ...e("colors"),
                    DEFAULT: e("colors.gray.200", "currentColor"),
                }),
                borderOpacity: ({ theme: e }) => e("opacity"),
                borderRadius: {
                    none: "0px",
                    sm: "0.125rem",
                    DEFAULT: "0.25rem",
                    md: "0.375rem",
                    lg: "0.5rem",
                    xl: "0.75rem",
                    "2xl": "1rem",
                    "3xl": "1.5rem",
                    full: "9999px",
                },
                borderSpacing: ({ theme: e }) => ({ ...e("spacing") }),
                borderWidth: {
                    DEFAULT: "1px",
                    0: "0px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                boxShadow: {
                    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                    DEFAULT:
                        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                    none: "none",
                },
                boxShadowColor: ({ theme: e }) => e("colors"),
                brightness: {
                    0: "0",
                    50: ".5",
                    75: ".75",
                    90: ".9",
                    95: ".95",
                    100: "1",
                    105: "1.05",
                    110: "1.1",
                    125: "1.25",
                    150: "1.5",
                    200: "2",
                },
                caretColor: ({ theme: e }) => e("colors"),
                colors: ({ colors: e }) => ({
                    inherit: e.inherit,
                    current: e.current,
                    transparent: e.transparent,
                    black: e.black,
                    white: e.white,
                    slate: e.slate,
                    gray: e.gray,
                    zinc: e.zinc,
                    neutral: e.neutral,
                    stone: e.stone,
                    red: e.red,
                    orange: e.orange,
                    amber: e.amber,
                    yellow: e.yellow,
                    lime: e.lime,
                    green: e.green,
                    emerald: e.emerald,
                    teal: e.teal,
                    cyan: e.cyan,
                    sky: e.sky,
                    blue: e.blue,
                    indigo: e.indigo,
                    violet: e.violet,
                    purple: e.purple,
                    fuchsia: e.fuchsia,
                    pink: e.pink,
                    rose: e.rose,
                }),
                columns: {
                    auto: "auto",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                    "3xs": "16rem",
                    "2xs": "18rem",
                    xs: "20rem",
                    sm: "24rem",
                    md: "28rem",
                    lg: "32rem",
                    xl: "36rem",
                    "2xl": "42rem",
                    "3xl": "48rem",
                    "4xl": "56rem",
                    "5xl": "64rem",
                    "6xl": "72rem",
                    "7xl": "80rem",
                },
                container: {},
                content: { none: "none" },
                contrast: {
                    0: "0",
                    50: ".5",
                    75: ".75",
                    100: "1",
                    125: "1.25",
                    150: "1.5",
                    200: "2",
                },
                cursor: {
                    auto: "auto",
                    default: "default",
                    pointer: "pointer",
                    wait: "wait",
                    text: "text",
                    move: "move",
                    help: "help",
                    "not-allowed": "not-allowed",
                    none: "none",
                    "context-menu": "context-menu",
                    progress: "progress",
                    cell: "cell",
                    crosshair: "crosshair",
                    "vertical-text": "vertical-text",
                    alias: "alias",
                    copy: "copy",
                    "no-drop": "no-drop",
                    grab: "grab",
                    grabbing: "grabbing",
                    "all-scroll": "all-scroll",
                    "col-resize": "col-resize",
                    "row-resize": "row-resize",
                    "n-resize": "n-resize",
                    "e-resize": "e-resize",
                    "s-resize": "s-resize",
                    "w-resize": "w-resize",
                    "ne-resize": "ne-resize",
                    "nw-resize": "nw-resize",
                    "se-resize": "se-resize",
                    "sw-resize": "sw-resize",
                    "ew-resize": "ew-resize",
                    "ns-resize": "ns-resize",
                    "nesw-resize": "nesw-resize",
                    "nwse-resize": "nwse-resize",
                    "zoom-in": "zoom-in",
                    "zoom-out": "zoom-out",
                },
                divideColor: ({ theme: e }) => e("borderColor"),
                divideOpacity: ({ theme: e }) => e("borderOpacity"),
                divideWidth: ({ theme: e }) => e("borderWidth"),
                dropShadow: {
                    sm: "0 1px 1px rgb(0 0 0 / 0.05)",
                    DEFAULT: [
                        "0 1px 2px rgb(0 0 0 / 0.1)",
                        "0 1px 1px rgb(0 0 0 / 0.06)",
                    ],
                    md: [
                        "0 4px 3px rgb(0 0 0 / 0.07)",
                        "0 2px 2px rgb(0 0 0 / 0.06)",
                    ],
                    lg: [
                        "0 10px 8px rgb(0 0 0 / 0.04)",
                        "0 4px 3px rgb(0 0 0 / 0.1)",
                    ],
                    xl: [
                        "0 20px 13px rgb(0 0 0 / 0.03)",
                        "0 8px 5px rgb(0 0 0 / 0.08)",
                    ],
                    "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
                    none: "0 0 #0000",
                },
                fill: ({ theme: e }) => ({ none: "none", ...e("colors") }),
                flex: {
                    1: "1 1 0%",
                    auto: "1 1 auto",
                    initial: "0 1 auto",
                    none: "none",
                },
                flexBasis: ({ theme: e }) => ({
                    auto: "auto",
                    ...e("spacing"),
                    "1/2": "50%",
                    "1/3": "33.333333%",
                    "2/3": "66.666667%",
                    "1/4": "25%",
                    "2/4": "50%",
                    "3/4": "75%",
                    "1/5": "20%",
                    "2/5": "40%",
                    "3/5": "60%",
                    "4/5": "80%",
                    "1/6": "16.666667%",
                    "2/6": "33.333333%",
                    "3/6": "50%",
                    "4/6": "66.666667%",
                    "5/6": "83.333333%",
                    "1/12": "8.333333%",
                    "2/12": "16.666667%",
                    "3/12": "25%",
                    "4/12": "33.333333%",
                    "5/12": "41.666667%",
                    "6/12": "50%",
                    "7/12": "58.333333%",
                    "8/12": "66.666667%",
                    "9/12": "75%",
                    "10/12": "83.333333%",
                    "11/12": "91.666667%",
                    full: "100%",
                }),
                flexGrow: { 0: "0", DEFAULT: "1" },
                flexShrink: { 0: "0", DEFAULT: "1" },
                fontFamily: {
                    sans: [
                        "ui-sans-serif",
                        "system-ui",
                        "sans-serif",
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                        '"Noto Color Emoji"',
                    ],
                    serif: [
                        "ui-serif",
                        "Georgia",
                        "Cambria",
                        '"Times New Roman"',
                        "Times",
                        "serif",
                    ],
                    mono: [
                        "ui-monospace",
                        "SFMono-Regular",
                        "Menlo",
                        "Monaco",
                        "Consolas",
                        '"Liberation Mono"',
                        '"Courier New"',
                        "monospace",
                    ],
                },
                fontSize: {
                    xs: ["0.75rem", { lineHeight: "1rem" }],
                    sm: ["0.875rem", { lineHeight: "1.25rem" }],
                    base: ["1rem", { lineHeight: "1.5rem" }],
                    lg: ["1.125rem", { lineHeight: "1.75rem" }],
                    xl: ["1.25rem", { lineHeight: "1.75rem" }],
                    "2xl": ["1.5rem", { lineHeight: "2rem" }],
                    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                    "5xl": ["3rem", { lineHeight: "1" }],
                    "6xl": ["3.75rem", { lineHeight: "1" }],
                    "7xl": ["4.5rem", { lineHeight: "1" }],
                    "8xl": ["6rem", { lineHeight: "1" }],
                    "9xl": ["8rem", { lineHeight: "1" }],
                },
                fontWeight: {
                    thin: "100",
                    extralight: "200",
                    light: "300",
                    normal: "400",
                    medium: "500",
                    semibold: "600",
                    bold: "700",
                    extrabold: "800",
                    black: "900",
                },
                gap: ({ theme: e }) => e("spacing"),
                gradientColorStops: ({ theme: e }) => e("colors"),
                gradientColorStopPositions: {
                    "0%": "0%",
                    "5%": "5%",
                    "10%": "10%",
                    "15%": "15%",
                    "20%": "20%",
                    "25%": "25%",
                    "30%": "30%",
                    "35%": "35%",
                    "40%": "40%",
                    "45%": "45%",
                    "50%": "50%",
                    "55%": "55%",
                    "60%": "60%",
                    "65%": "65%",
                    "70%": "70%",
                    "75%": "75%",
                    "80%": "80%",
                    "85%": "85%",
                    "90%": "90%",
                    "95%": "95%",
                    "100%": "100%",
                },
                grayscale: { 0: "0", DEFAULT: "100%" },
                gridAutoColumns: {
                    auto: "auto",
                    min: "min-content",
                    max: "max-content",
                    fr: "minmax(0, 1fr)",
                },
                gridAutoRows: {
                    auto: "auto",
                    min: "min-content",
                    max: "max-content",
                    fr: "minmax(0, 1fr)",
                },
                gridColumn: {
                    auto: "auto",
                    "span-1": "span 1 / span 1",
                    "span-2": "span 2 / span 2",
                    "span-3": "span 3 / span 3",
                    "span-4": "span 4 / span 4",
                    "span-5": "span 5 / span 5",
                    "span-6": "span 6 / span 6",
                    "span-7": "span 7 / span 7",
                    "span-8": "span 8 / span 8",
                    "span-9": "span 9 / span 9",
                    "span-10": "span 10 / span 10",
                    "span-11": "span 11 / span 11",
                    "span-12": "span 12 / span 12",
                    "span-full": "1 / -1",
                },
                gridColumnEnd: {
                    auto: "auto",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                    13: "13",
                },
                gridColumnStart: {
                    auto: "auto",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                    13: "13",
                },
                gridRow: {
                    auto: "auto",
                    "span-1": "span 1 / span 1",
                    "span-2": "span 2 / span 2",
                    "span-3": "span 3 / span 3",
                    "span-4": "span 4 / span 4",
                    "span-5": "span 5 / span 5",
                    "span-6": "span 6 / span 6",
                    "span-7": "span 7 / span 7",
                    "span-8": "span 8 / span 8",
                    "span-9": "span 9 / span 9",
                    "span-10": "span 10 / span 10",
                    "span-11": "span 11 / span 11",
                    "span-12": "span 12 / span 12",
                    "span-full": "1 / -1",
                },
                gridRowEnd: {
                    auto: "auto",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                    13: "13",
                },
                gridRowStart: {
                    auto: "auto",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                    13: "13",
                },
                gridTemplateColumns: {
                    none: "none",
                    subgrid: "subgrid",
                    1: "repeat(1, minmax(0, 1fr))",
                    2: "repeat(2, minmax(0, 1fr))",
                    3: "repeat(3, minmax(0, 1fr))",
                    4: "repeat(4, minmax(0, 1fr))",
                    5: "repeat(5, minmax(0, 1fr))",
                    6: "repeat(6, minmax(0, 1fr))",
                    7: "repeat(7, minmax(0, 1fr))",
                    8: "repeat(8, minmax(0, 1fr))",
                    9: "repeat(9, minmax(0, 1fr))",
                    10: "repeat(10, minmax(0, 1fr))",
                    11: "repeat(11, minmax(0, 1fr))",
                    12: "repeat(12, minmax(0, 1fr))",
                },
                gridTemplateRows: {
                    none: "none",
                    subgrid: "subgrid",
                    1: "repeat(1, minmax(0, 1fr))",
                    2: "repeat(2, minmax(0, 1fr))",
                    3: "repeat(3, minmax(0, 1fr))",
                    4: "repeat(4, minmax(0, 1fr))",
                    5: "repeat(5, minmax(0, 1fr))",
                    6: "repeat(6, minmax(0, 1fr))",
                    7: "repeat(7, minmax(0, 1fr))",
                    8: "repeat(8, minmax(0, 1fr))",
                    9: "repeat(9, minmax(0, 1fr))",
                    10: "repeat(10, minmax(0, 1fr))",
                    11: "repeat(11, minmax(0, 1fr))",
                    12: "repeat(12, minmax(0, 1fr))",
                },
                height: ({ theme: e }) => ({
                    auto: "auto",
                    ...e("spacing"),
                    "1/2": "50%",
                    "1/3": "33.333333%",
                    "2/3": "66.666667%",
                    "1/4": "25%",
                    "2/4": "50%",
                    "3/4": "75%",
                    "1/5": "20%",
                    "2/5": "40%",
                    "3/5": "60%",
                    "4/5": "80%",
                    "1/6": "16.666667%",
                    "2/6": "33.333333%",
                    "3/6": "50%",
                    "4/6": "66.666667%",
                    "5/6": "83.333333%",
                    full: "100%",
                    screen: "100vh",
                    svh: "100svh",
                    lvh: "100lvh",
                    dvh: "100dvh",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                }),
                hueRotate: {
                    0: "0deg",
                    15: "15deg",
                    30: "30deg",
                    60: "60deg",
                    90: "90deg",
                    180: "180deg",
                },
                inset: ({ theme: e }) => ({
                    auto: "auto",
                    ...e("spacing"),
                    "1/2": "50%",
                    "1/3": "33.333333%",
                    "2/3": "66.666667%",
                    "1/4": "25%",
                    "2/4": "50%",
                    "3/4": "75%",
                    full: "100%",
                }),
                invert: { 0: "0", DEFAULT: "100%" },
                keyframes: {
                    spin: { to: { transform: "rotate(360deg)" } },
                    ping: {
                        "75%, 100%": { transform: "scale(2)", opacity: "0" },
                    },
                    pulse: { "50%": { opacity: ".5" } },
                    bounce: {
                        "0%, 100%": {
                            transform: "translateY(-25%)",
                            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                        },
                        "50%": {
                            transform: "none",
                            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                        },
                    },
                },
                letterSpacing: {
                    tighter: "-0.05em",
                    tight: "-0.025em",
                    normal: "0em",
                    wide: "0.025em",
                    wider: "0.05em",
                    widest: "0.1em",
                },
                lineHeight: {
                    none: "1",
                    tight: "1.25",
                    snug: "1.375",
                    normal: "1.5",
                    relaxed: "1.625",
                    loose: "2",
                    3: ".75rem",
                    4: "1rem",
                    5: "1.25rem",
                    6: "1.5rem",
                    7: "1.75rem",
                    8: "2rem",
                    9: "2.25rem",
                    10: "2.5rem",
                },
                listStyleType: {
                    none: "none",
                    disc: "disc",
                    decimal: "decimal",
                },
                listStyleImage: { none: "none" },
                margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }),
                lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" },
                maxHeight: ({ theme: e }) => ({
                    ...e("spacing"),
                    none: "none",
                    full: "100%",
                    screen: "100vh",
                    svh: "100svh",
                    lvh: "100lvh",
                    dvh: "100dvh",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                }),
                maxWidth: ({ theme: e, breakpoints: r }) => ({
                    ...e("spacing"),
                    none: "none",
                    xs: "20rem",
                    sm: "24rem",
                    md: "28rem",
                    lg: "32rem",
                    xl: "36rem",
                    "2xl": "42rem",
                    "3xl": "48rem",
                    "4xl": "56rem",
                    "5xl": "64rem",
                    "6xl": "72rem",
                    "7xl": "80rem",
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                    prose: "65ch",
                    ...r(e("screens")),
                }),
                minHeight: ({ theme: e }) => ({
                    ...e("spacing"),
                    full: "100%",
                    screen: "100vh",
                    svh: "100svh",
                    lvh: "100lvh",
                    dvh: "100dvh",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                }),
                minWidth: ({ theme: e }) => ({
                    ...e("spacing"),
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                }),
                objectPosition: {
                    bottom: "bottom",
                    center: "center",
                    left: "left",
                    "left-bottom": "left bottom",
                    "left-top": "left top",
                    right: "right",
                    "right-bottom": "right bottom",
                    "right-top": "right top",
                    top: "top",
                },
                opacity: {
                    0: "0",
                    5: "0.05",
                    10: "0.1",
                    15: "0.15",
                    20: "0.2",
                    25: "0.25",
                    30: "0.3",
                    35: "0.35",
                    40: "0.4",
                    45: "0.45",
                    50: "0.5",
                    55: "0.55",
                    60: "0.6",
                    65: "0.65",
                    70: "0.7",
                    75: "0.75",
                    80: "0.8",
                    85: "0.85",
                    90: "0.9",
                    95: "0.95",
                    100: "1",
                },
                order: {
                    first: "-9999",
                    last: "9999",
                    none: "0",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                },
                outlineColor: ({ theme: e }) => e("colors"),
                outlineOffset: {
                    0: "0px",
                    1: "1px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                outlineWidth: {
                    0: "0px",
                    1: "1px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                padding: ({ theme: e }) => e("spacing"),
                placeholderColor: ({ theme: e }) => e("colors"),
                placeholderOpacity: ({ theme: e }) => e("opacity"),
                ringColor: ({ theme: e }) => ({
                    DEFAULT: e("colors.blue.500", "#3b82f6"),
                    ...e("colors"),
                }),
                ringOffsetColor: ({ theme: e }) => e("colors"),
                ringOffsetWidth: {
                    0: "0px",
                    1: "1px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                ringOpacity: ({ theme: e }) => ({
                    DEFAULT: "0.5",
                    ...e("opacity"),
                }),
                ringWidth: {
                    DEFAULT: "3px",
                    0: "0px",
                    1: "1px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                rotate: {
                    0: "0deg",
                    1: "1deg",
                    2: "2deg",
                    3: "3deg",
                    6: "6deg",
                    12: "12deg",
                    45: "45deg",
                    90: "90deg",
                    180: "180deg",
                },
                saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" },
                scale: {
                    0: "0",
                    50: ".5",
                    75: ".75",
                    90: ".9",
                    95: ".95",
                    100: "1",
                    105: "1.05",
                    110: "1.1",
                    125: "1.25",
                    150: "1.5",
                },
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px",
                },
                scrollMargin: ({ theme: e }) => ({ ...e("spacing") }),
                scrollPadding: ({ theme: e }) => e("spacing"),
                sepia: { 0: "0", DEFAULT: "100%" },
                skew: {
                    0: "0deg",
                    1: "1deg",
                    2: "2deg",
                    3: "3deg",
                    6: "6deg",
                    12: "12deg",
                },
                space: ({ theme: e }) => ({ ...e("spacing") }),
                spacing: {
                    px: "1px",
                    0: "0px",
                    0.5: "0.125rem",
                    1: "0.25rem",
                    1.5: "0.375rem",
                    2: "0.5rem",
                    2.5: "0.625rem",
                    3: "0.75rem",
                    3.5: "0.875rem",
                    4: "1rem",
                    5: "1.25rem",
                    6: "1.5rem",
                    7: "1.75rem",
                    8: "2rem",
                    9: "2.25rem",
                    10: "2.5rem",
                    11: "2.75rem",
                    12: "3rem",
                    14: "3.5rem",
                    16: "4rem",
                    20: "5rem",
                    24: "6rem",
                    28: "7rem",
                    32: "8rem",
                    36: "9rem",
                    40: "10rem",
                    44: "11rem",
                    48: "12rem",
                    52: "13rem",
                    56: "14rem",
                    60: "15rem",
                    64: "16rem",
                    72: "18rem",
                    80: "20rem",
                    96: "24rem",
                },
                stroke: ({ theme: e }) => ({ none: "none", ...e("colors") }),
                strokeWidth: { 0: "0", 1: "1", 2: "2" },
                supports: {},
                data: {},
                textColor: ({ theme: e }) => e("colors"),
                textDecorationColor: ({ theme: e }) => e("colors"),
                textDecorationThickness: {
                    auto: "auto",
                    "from-font": "from-font",
                    0: "0px",
                    1: "1px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                textIndent: ({ theme: e }) => ({ ...e("spacing") }),
                textOpacity: ({ theme: e }) => e("opacity"),
                textUnderlineOffset: {
                    auto: "auto",
                    0: "0px",
                    1: "1px",
                    2: "2px",
                    4: "4px",
                    8: "8px",
                },
                transformOrigin: {
                    center: "center",
                    top: "top",
                    "top-right": "top right",
                    right: "right",
                    "bottom-right": "bottom right",
                    bottom: "bottom",
                    "bottom-left": "bottom left",
                    left: "left",
                    "top-left": "top left",
                },
                transitionDelay: {
                    0: "0s",
                    75: "75ms",
                    100: "100ms",
                    150: "150ms",
                    200: "200ms",
                    300: "300ms",
                    500: "500ms",
                    700: "700ms",
                    1e3: "1000ms",
                },
                transitionDuration: {
                    DEFAULT: "150ms",
                    0: "0s",
                    75: "75ms",
                    100: "100ms",
                    150: "150ms",
                    200: "200ms",
                    300: "300ms",
                    500: "500ms",
                    700: "700ms",
                    1e3: "1000ms",
                },
                transitionProperty: {
                    none: "none",
                    all: "all",
                    DEFAULT:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
                    opacity: "opacity",
                    shadow: "box-shadow",
                    transform: "transform",
                },
                transitionTimingFunction: {
                    DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
                    linear: "linear",
                    in: "cubic-bezier(0.4, 0, 1, 1)",
                    out: "cubic-bezier(0, 0, 0.2, 1)",
                    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
                },
                translate: ({ theme: e }) => ({
                    ...e("spacing"),
                    "1/2": "50%",
                    "1/3": "33.333333%",
                    "2/3": "66.666667%",
                    "1/4": "25%",
                    "2/4": "50%",
                    "3/4": "75%",
                    full: "100%",
                }),
                size: ({ theme: e }) => ({
                    auto: "auto",
                    ...e("spacing"),
                    "1/2": "50%",
                    "1/3": "33.333333%",
                    "2/3": "66.666667%",
                    "1/4": "25%",
                    "2/4": "50%",
                    "3/4": "75%",
                    "1/5": "20%",
                    "2/5": "40%",
                    "3/5": "60%",
                    "4/5": "80%",
                    "1/6": "16.666667%",
                    "2/6": "33.333333%",
                    "3/6": "50%",
                    "4/6": "66.666667%",
                    "5/6": "83.333333%",
                    "1/12": "8.333333%",
                    "2/12": "16.666667%",
                    "3/12": "25%",
                    "4/12": "33.333333%",
                    "5/12": "41.666667%",
                    "6/12": "50%",
                    "7/12": "58.333333%",
                    "8/12": "66.666667%",
                    "9/12": "75%",
                    "10/12": "83.333333%",
                    "11/12": "91.666667%",
                    full: "100%",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                }),
                width: ({ theme: e }) => ({
                    auto: "auto",
                    ...e("spacing"),
                    "1/2": "50%",
                    "1/3": "33.333333%",
                    "2/3": "66.666667%",
                    "1/4": "25%",
                    "2/4": "50%",
                    "3/4": "75%",
                    "1/5": "20%",
                    "2/5": "40%",
                    "3/5": "60%",
                    "4/5": "80%",
                    "1/6": "16.666667%",
                    "2/6": "33.333333%",
                    "3/6": "50%",
                    "4/6": "66.666667%",
                    "5/6": "83.333333%",
                    "1/12": "8.333333%",
                    "2/12": "16.666667%",
                    "3/12": "25%",
                    "4/12": "33.333333%",
                    "5/12": "41.666667%",
                    "6/12": "50%",
                    "7/12": "58.333333%",
                    "8/12": "66.666667%",
                    "9/12": "75%",
                    "10/12": "83.333333%",
                    "11/12": "91.666667%",
                    full: "100%",
                    screen: "100vw",
                    svw: "100svw",
                    lvw: "100lvw",
                    dvw: "100dvw",
                    min: "min-content",
                    max: "max-content",
                    fit: "fit-content",
                }),
                willChange: {
                    auto: "auto",
                    scroll: "scroll-position",
                    contents: "contents",
                    transform: "transform",
                },
                zIndex: {
                    auto: "auto",
                    0: "0",
                    10: "10",
                    20: "20",
                    30: "30",
                    40: "40",
                    50: "50",
                },
            },
            plugins: [],
        };
    });
    var Br = p((Te) => {
        "use strict";
        Object.defineProperty(Te, "__esModule", { value: !0 });
        Object.defineProperty(Te, "default", {
            enumerable: !0,
            get: function () {
                return Ur;
            },
        });
        var uo = po(Pe()),
            fo = V();
        function po(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function Ur(e) {
            var r;
            let n = (
                    (r = e?.presets) !== null && r !== void 0 ? r : [uo.default]
                )
                    .slice()
                    .reverse()
                    .flatMap((s) => Ur(s instanceof Function ? s() : s)),
                t = {
                    respectDefaultRingColorOpacity: {
                        theme: {
                            ringColor: ({ theme: s }) => ({
                                DEFAULT: "#3b82f67f",
                                ...s("colors"),
                            }),
                        },
                    },
                    disableColorOpacityUtilitiesByDefault: {
                        corePlugins: {
                            backgroundOpacity: !1,
                            borderOpacity: !1,
                            divideOpacity: !1,
                            placeholderOpacity: !1,
                            ringOpacity: !1,
                            textOpacity: !1,
                        },
                    },
                },
                i = Object.keys(t)
                    .filter((s) => (0, fo.flagEnabled)(e, s))
                    .map((s) => t[s]);
            return [e, ...i, ...n];
        }
    });
    var Wr = p((ze) => {
        "use strict";
        Object.defineProperty(ze, "__esModule", { value: !0 });
        Object.defineProperty(ze, "default", {
            enumerable: !0,
            get: function () {
                return ho;
            },
        });
        var go = Lr($r()),
            mo = Lr(Br());
        function Lr(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function ho(...e) {
            let [, ...r] = (0, mo.default)(e[0]);
            return (0, go.default)([...e, ...r]);
        }
    });
    var Vr = p((fa, Gr) => {
        var Me = Wr();
        Gr.exports = (Me.__esModule ? Me : { default: Me }).default;
    });
    var Ir = p((Re) => {
        "use strict";
        Object.defineProperty(Re, "__esModule", { value: !0 });
        Object.defineProperty(Re, "default", {
            enumerable: !0,
            get: function () {
                return bo;
            },
        });
        function Nr(e, r) {
            return { handler: e, config: r };
        }
        Nr.withOptions = function (e, r = () => ({})) {
            let n = function (t) {
                return { __options: t, handler: e(t), config: r(t) };
            };
            return (
                (n.__isOptionsFunction = !0),
                (n.__pluginFunction = e),
                (n.__configFunction = r),
                n
            );
        };
        var bo = Nr;
    });
    var Hr = p((De) => {
        "use strict";
        Object.defineProperty(De, "__esModule", { value: !0 });
        Object.defineProperty(De, "default", {
            enumerable: !0,
            get: function () {
                return vo;
            },
        });
        var yo = wo(Ir());
        function wo(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var vo = yo.default;
    });
    var $e = p((ma, Yr) => {
        var qe = Hr();
        Yr.exports = (qe.__esModule ? qe : { default: qe }).default;
    });
    var Ue = p((ha, Kr) => {
        var Fe = le();
        Kr.exports = (Fe.__esModule ? Fe : { default: Fe }).default;
    });
    var Jr = p((ba, Xr) => {
        Xr.exports = {
            aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
            azure: /#f0ffff(ff)?(?!\w)/gi,
            beige: /#f5f5dc(ff)?(?!\w)/gi,
            bisque: /#ffe4c4(ff)?(?!\w)/gi,
            black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
            blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
            brown: /#a52a2a(ff)?(?!\w)/gi,
            coral: /#ff7f50(ff)?(?!\w)/gi,
            cornsilk: /#fff8dc(ff)?(?!\w)/gi,
            crimson: /#dc143c(ff)?(?!\w)/gi,
            cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
            darkblue: /#00008b(ff)?(?!\w)/gi,
            darkcyan: /#008b8b(ff)?(?!\w)/gi,
            darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
            darkred: /#8b0000(ff)?(?!\w)/gi,
            deeppink: /#ff1493(ff)?(?!\w)/gi,
            dimgrey: /#696969(ff)?(?!\w)/gi,
            gold: /#ffd700(ff)?(?!\w)/gi,
            green: /#008000(ff)?(?!\w)/gi,
            grey: /#808080(ff)?(?!\w)/gi,
            honeydew: /#f0fff0(ff)?(?!\w)/gi,
            hotpink: /#ff69b4(ff)?(?!\w)/gi,
            indigo: /#4b0082(ff)?(?!\w)/gi,
            ivory: /#fffff0(ff)?(?!\w)/gi,
            khaki: /#f0e68c(ff)?(?!\w)/gi,
            lavender: /#e6e6fa(ff)?(?!\w)/gi,
            lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
            linen: /#faf0e6(ff)?(?!\w)/gi,
            maroon: /#800000(ff)?(?!\w)/gi,
            moccasin: /#ffe4b5(ff)?(?!\w)/gi,
            navy: /#000080(ff)?(?!\w)/gi,
            oldlace: /#fdf5e6(ff)?(?!\w)/gi,
            olive: /#808000(ff)?(?!\w)/gi,
            orange: /#ffa500(ff)?(?!\w)/gi,
            orchid: /#da70d6(ff)?(?!\w)/gi,
            peru: /#cd853f(ff)?(?!\w)/gi,
            pink: /#ffc0cb(ff)?(?!\w)/gi,
            plum: /#dda0dd(ff)?(?!\w)/gi,
            purple: /#800080(ff)?(?!\w)/gi,
            red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
            salmon: /#fa8072(ff)?(?!\w)/gi,
            seagreen: /#2e8b57(ff)?(?!\w)/gi,
            seashell: /#fff5ee(ff)?(?!\w)/gi,
            sienna: /#a0522d(ff)?(?!\w)/gi,
            silver: /#c0c0c0(ff)?(?!\w)/gi,
            skyblue: /#87ceeb(ff)?(?!\w)/gi,
            snow: /#fffafa(ff)?(?!\w)/gi,
            tan: /#d2b48c(ff)?(?!\w)/gi,
            teal: /#008080(ff)?(?!\w)/gi,
            thistle: /#d8bfd8(ff)?(?!\w)/gi,
            tomato: /#ff6347(ff)?(?!\w)/gi,
            violet: /#ee82ee(ff)?(?!\w)/gi,
            wheat: /#f5deb3(ff)?(?!\w)/gi,
            white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi,
        };
    });
    var Qr = p((ya, Zr) => {
        var Be = Jr(),
            We = {
                whitespace: /\s+/g,
                urlHexPairs: /%[\dA-F]{2}/g,
                quotes: /"/g,
            };
        function xo(e) {
            return e.trim().replace(We.whitespace, " ");
        }
        function ko(e) {
            return encodeURIComponent(e).replace(We.urlHexPairs, Co);
        }
        function _o(e) {
            return (
                Object.keys(Be).forEach(function (r) {
                    Be[r].test(e) && (e = e.replace(Be[r], r));
                }),
                e
            );
        }
        function Co(e) {
            switch (e) {
                case "%20":
                    return " ";
                case "%3D":
                    return "=";
                case "%3A":
                    return ":";
                case "%2F":
                    return "/";
                default:
                    return e.toLowerCase();
            }
        }
        function Le(e) {
            if (typeof e != "string")
                throw new TypeError(
                    "Expected a string, but received " + typeof e
                );
            e.charCodeAt(0) === 65279 && (e = e.slice(1));
            var r = _o(xo(e)).replace(We.quotes, "'");
            return "data:image/svg+xml," + ko(r);
        }
        Le.toSrcset = function (r) {
            return Le(r).replace(/ /g, "%20");
        };
        Zr.exports = Le;
    });
    var et = p((Ge) => {
        "use strict";
        Object.defineProperty(Ge, "__esModule", { value: !0 });
        Object.defineProperty(Ge, "default", {
            enumerable: !0,
            get: function () {
                return So;
            },
        });
        var Eo = me(),
            Oo = Ao(Pe());
        function Ao(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var So = (0, Eo.cloneDeep)(Oo.default.theme);
    });
    var tt = p((va, rt) => {
        var Ve = et();
        rt.exports = (Ve.__esModule ? Ve : { default: Ve }).default;
    });
    var lt = p((xa, it) => {
        var K = Qr(),
            jo = $e(),
            at = tt(),
            A = Ue(),
            [Po, { lineHeight: To }] = at.fontSize.base,
            { spacing: x, borderWidth: nt, borderRadius: ot } = at;
        function S(e, r) {
            return e.replace("<alpha-value>", `var(${r}, 1)`);
        }
        var zo = jo.withOptions(function (e = { strategy: void 0 }) {
            return function ({ addBase: r, addComponents: n, theme: t }) {
                let i =
                        e.strategy === void 0
                            ? ["base", "class"]
                            : [e.strategy],
                    s = [
                        {
                            base: [
                                "[type='text']",
                                "input:where(:not([type]))",
                                "[type='email']",
                                "[type='url']",
                                "[type='password']",
                                "[type='number']",
                                "[type='date']",
                                "[type='datetime-local']",
                                "[type='month']",
                                "[type='search']",
                                "[type='tel']",
                                "[type='time']",
                                "[type='week']",
                                "[multiple]",
                                "textarea",
                                "select",
                            ],
                            class: [
                                ".form-input",
                                ".form-textarea",
                                ".form-select",
                                ".form-multiselect",
                            ],
                            styles: {
                                appearance: "none",
                                "background-color": "#fff",
                                "border-color": S(
                                    t("colors.gray.500", A.gray[500]),
                                    "--tw-border-opacity"
                                ),
                                "border-width": nt.DEFAULT,
                                "border-radius": ot.none,
                                "padding-top": x[2],
                                "padding-right": x[3],
                                "padding-bottom": x[2],
                                "padding-left": x[3],
                                "font-size": Po,
                                "line-height": To,
                                "--tw-shadow": "0 0 #0000",
                                "&:focus": {
                                    outline: "2px solid transparent",
                                    "outline-offset": "2px",
                                    "--tw-ring-inset":
                                        "var(--tw-empty,/*!*/ /*!*/)",
                                    "--tw-ring-offset-width": "0px",
                                    "--tw-ring-offset-color": "#fff",
                                    "--tw-ring-color": S(
                                        t("colors.blue.600", A.blue[600]),
                                        "--tw-ring-opacity"
                                    ),
                                    "--tw-ring-offset-shadow":
                                        "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                                    "--tw-ring-shadow":
                                        "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                                    "box-shadow":
                                        "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
                                    "border-color": S(
                                        t("colors.blue.600", A.blue[600]),
                                        "--tw-border-opacity"
                                    ),
                                },
                            },
                        },
                        {
                            base: [
                                "input::placeholder",
                                "textarea::placeholder",
                            ],
                            class: [
                                ".form-input::placeholder",
                                ".form-textarea::placeholder",
                            ],
                            styles: {
                                color: S(
                                    t("colors.gray.500", A.gray[500]),
                                    "--tw-text-opacity"
                                ),
                                opacity: "1",
                            },
                        },
                        {
                            base: ["::-webkit-datetime-edit-fields-wrapper"],
                            class: [
                                ".form-input::-webkit-datetime-edit-fields-wrapper",
                            ],
                            styles: { padding: "0" },
                        },
                        {
                            base: ["::-webkit-date-and-time-value"],
                            class: [".form-input::-webkit-date-and-time-value"],
                            styles: { "min-height": "1.5em" },
                        },
                        {
                            base: ["::-webkit-date-and-time-value"],
                            class: [".form-input::-webkit-date-and-time-value"],
                            styles: { "text-align": "inherit" },
                        },
                        {
                            base: ["::-webkit-datetime-edit"],
                            class: [".form-input::-webkit-datetime-edit"],
                            styles: { display: "inline-flex" },
                        },
                        {
                            base: [
                                "::-webkit-datetime-edit",
                                "::-webkit-datetime-edit-year-field",
                                "::-webkit-datetime-edit-month-field",
                                "::-webkit-datetime-edit-day-field",
                                "::-webkit-datetime-edit-hour-field",
                                "::-webkit-datetime-edit-minute-field",
                                "::-webkit-datetime-edit-second-field",
                                "::-webkit-datetime-edit-millisecond-field",
                                "::-webkit-datetime-edit-meridiem-field",
                            ],
                            class: [
                                ".form-input::-webkit-datetime-edit",
                                ".form-input::-webkit-datetime-edit-year-field",
                                ".form-input::-webkit-datetime-edit-month-field",
                                ".form-input::-webkit-datetime-edit-day-field",
                                ".form-input::-webkit-datetime-edit-hour-field",
                                ".form-input::-webkit-datetime-edit-minute-field",
                                ".form-input::-webkit-datetime-edit-second-field",
                                ".form-input::-webkit-datetime-edit-millisecond-field",
                                ".form-input::-webkit-datetime-edit-meridiem-field",
                            ],
                            styles: { "padding-top": 0, "padding-bottom": 0 },
                        },
                        {
                            base: ["select"],
                            class: [".form-select"],
                            styles: {
                                "background-image": `url("${K(
                                    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${S(
                                        t("colors.gray.500", A.gray[500]),
                                        "--tw-stroke-opacity"
                                    )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
                                )}")`,
                                "background-position": `right ${x[2]} center`,
                                "background-repeat": "no-repeat",
                                "background-size": "1.5em 1.5em",
                                "padding-right": x[10],
                                "print-color-adjust": "exact",
                            },
                        },
                        {
                            base: [
                                "[multiple]",
                                '[size]:where(select:not([size="1"]))',
                            ],
                            class: [
                                '.form-select:where([size]:not([size="1"]))',
                            ],
                            styles: {
                                "background-image": "initial",
                                "background-position": "initial",
                                "background-repeat": "unset",
                                "background-size": "initial",
                                "padding-right": x[3],
                                "print-color-adjust": "unset",
                            },
                        },
                        {
                            base: ["[type='checkbox']", "[type='radio']"],
                            class: [".form-checkbox", ".form-radio"],
                            styles: {
                                appearance: "none",
                                padding: "0",
                                "print-color-adjust": "exact",
                                display: "inline-block",
                                "vertical-align": "middle",
                                "background-origin": "border-box",
                                "user-select": "none",
                                "flex-shrink": "0",
                                height: x[4],
                                width: x[4],
                                color: S(
                                    t("colors.blue.600", A.blue[600]),
                                    "--tw-text-opacity"
                                ),
                                "background-color": "#fff",
                                "border-color": S(
                                    t("colors.gray.500", A.gray[500]),
                                    "--tw-border-opacity"
                                ),
                                "border-width": nt.DEFAULT,
                                "--tw-shadow": "0 0 #0000",
                            },
                        },
                        {
                            base: ["[type='checkbox']"],
                            class: [".form-checkbox"],
                            styles: { "border-radius": ot.none },
                        },
                        {
                            base: ["[type='radio']"],
                            class: [".form-radio"],
                            styles: { "border-radius": "100%" },
                        },
                        {
                            base: [
                                "[type='checkbox']:focus",
                                "[type='radio']:focus",
                            ],
                            class: [
                                ".form-checkbox:focus",
                                ".form-radio:focus",
                            ],
                            styles: {
                                outline: "2px solid transparent",
                                "outline-offset": "2px",
                                "--tw-ring-inset":
                                    "var(--tw-empty,/*!*/ /*!*/)",
                                "--tw-ring-offset-width": "2px",
                                "--tw-ring-offset-color": "#fff",
                                "--tw-ring-color": S(
                                    t("colors.blue.600", A.blue[600]),
                                    "--tw-ring-opacity"
                                ),
                                "--tw-ring-offset-shadow":
                                    "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                                "--tw-ring-shadow":
                                    "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                                "box-shadow":
                                    "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
                            },
                        },
                        {
                            base: [
                                "[type='checkbox']:checked",
                                "[type='radio']:checked",
                            ],
                            class: [
                                ".form-checkbox:checked",
                                ".form-radio:checked",
                            ],
                            styles: {
                                "border-color": "transparent",
                                "background-color": "currentColor",
                                "background-size": "100% 100%",
                                "background-position": "center",
                                "background-repeat": "no-repeat",
                            },
                        },
                        {
                            base: ["[type='checkbox']:checked"],
                            class: [".form-checkbox:checked"],
                            styles: {
                                "background-image": `url("${K(
                                    '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>'
                                )}")`,
                                "@media (forced-colors: active) ": {
                                    appearance: "auto",
                                },
                            },
                        },
                        {
                            base: ["[type='radio']:checked"],
                            class: [".form-radio:checked"],
                            styles: {
                                "background-image": `url("${K(
                                    '<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>'
                                )}")`,
                                "@media (forced-colors: active) ": {
                                    appearance: "auto",
                                },
                            },
                        },
                        {
                            base: [
                                "[type='checkbox']:checked:hover",
                                "[type='checkbox']:checked:focus",
                                "[type='radio']:checked:hover",
                                "[type='radio']:checked:focus",
                            ],
                            class: [
                                ".form-checkbox:checked:hover",
                                ".form-checkbox:checked:focus",
                                ".form-radio:checked:hover",
                                ".form-radio:checked:focus",
                            ],
                            styles: {
                                "border-color": "transparent",
                                "background-color": "currentColor",
                            },
                        },
                        {
                            base: ["[type='checkbox']:indeterminate"],
                            class: [".form-checkbox:indeterminate"],
                            styles: {
                                "background-image": `url("${K(
                                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>'
                                )}")`,
                                "border-color": "transparent",
                                "background-color": "currentColor",
                                "background-size": "100% 100%",
                                "background-position": "center",
                                "background-repeat": "no-repeat",
                                "@media (forced-colors: active) ": {
                                    appearance: "auto",
                                },
                            },
                        },
                        {
                            base: [
                                "[type='checkbox']:indeterminate:hover",
                                "[type='checkbox']:indeterminate:focus",
                            ],
                            class: [
                                ".form-checkbox:indeterminate:hover",
                                ".form-checkbox:indeterminate:focus",
                            ],
                            styles: {
                                "border-color": "transparent",
                                "background-color": "currentColor",
                            },
                        },
                        {
                            base: ["[type='file']"],
                            class: null,
                            styles: {
                                background: "unset",
                                "border-color": "inherit",
                                "border-width": "0",
                                "border-radius": "0",
                                padding: "0",
                                "font-size": "unset",
                                "line-height": "inherit",
                            },
                        },
                        {
                            base: ["[type='file']:focus"],
                            class: null,
                            styles: {
                                outline: [
                                    "1px solid ButtonText",
                                    "1px auto -webkit-focus-ring-color",
                                ],
                            },
                        },
                    ],
                    l = (c) =>
                        s
                            .map((d) =>
                                d[c] === null ? null : { [d[c]]: d.styles }
                            )
                            .filter(Boolean);
                i.includes("base") && r(l("base")),
                    i.includes("class") && n(l("class"));
            };
        });
        it.exports = zo;
    });
    var ct = p((ka, st) => {
        var Mo = $e(),
            a = Ue(),
            { parseColor: Ro } = D(),
            o = (e) => Ro(e).color.join(" ");
        st.exports = {
            content: ["./*.html", "./src/**/*.{php,html,js,jsx,ts,tsx}"],
            darkMode: "class",
            theme: {
                container: { screens: { "2xl": "1320px" } },
                extend: {
                    screens: { "3xl": "1600px" },
                    colors: {
                        theme: {
                            1: "rgb(var(--color-theme-1) / <alpha-value>)",
                            2: "rgb(var(--color-theme-2) / <alpha-value>)",
                        },
                        primary: "rgb(var(--color-primary) / <alpha-value>)",
                        secondary:
                            "rgb(var(--color-secondary) / <alpha-value>)",
                        success: "rgb(var(--color-success) / <alpha-value>)",
                        info: "rgb(var(--color-info) / <alpha-value>)",
                        warning: "rgb(var(--color-warning) / <alpha-value>)",
                        pending: "rgb(var(--color-pending) / <alpha-value>)",
                        danger: "rgb(var(--color-danger) / <alpha-value>)",
                        light: "rgb(var(--color-light) / <alpha-value>)",
                        dark: "rgb(var(--color-dark) / <alpha-value>)",
                        darkmode: {
                            50: "rgb(var(--color-darkmode-50) / <alpha-value>)",
                            100: "rgb(var(--color-darkmode-100) / <alpha-value>)",
                            200: "rgb(var(--color-darkmode-200) / <alpha-value>)",
                            300: "rgb(var(--color-darkmode-300) / <alpha-value>)",
                            400: "rgb(var(--color-darkmode-400) / <alpha-value>)",
                            500: "rgb(var(--color-darkmode-500) / <alpha-value>)",
                            600: "rgb(var(--color-darkmode-600) / <alpha-value>)",
                            700: "rgb(var(--color-darkmode-700) / <alpha-value>)",
                            800: "rgb(var(--color-darkmode-800) / <alpha-value>)",
                            900: "rgb(var(--color-darkmode-900) / <alpha-value>)",
                        },
                    },
                    fontFamily: { "public-sans": ["Public Sans"] },
                    backgroundImage: {
                        "texture-black": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2346.899' height='1200.894' viewBox='0 0 2346.899 1200.894'%3E%3Cg id='Group_369' data-name='Group 369' transform='translate(-33.74 508.575)'%3E%3Cg id='Group_366' data-name='Group 366' transform='translate(33.74 -458.541)'%3E%3Crect id='Rectangle_492' data-name='Rectangle 492' width='745.289' height='650.113' transform='matrix(0.978, 0.208, -0.208, 0.978, 296.729, 261.648)' fill='rgba(30,41,59,0.01)'/%3E%3Crect id='Rectangle_491' data-name='Rectangle 491' width='1335.276' height='650.113' transform='translate(0 543.106) rotate(-24)' fill='rgba(30,41,59,0.01)'/%3E%3C/g%3E%3Cg id='Group_367' data-name='Group 367' transform='translate(1647.456 1026.688) rotate(-128)'%3E%3Crect id='Rectangle_492-2' data-name='Rectangle 492' width='745.289' height='650.113' transform='matrix(0.978, 0.208, -0.208, 0.978, 296.729, 261.648)' fill='rgba(30,41,59,0.01)'/%3E%3Crect id='Rectangle_491-2' data-name='Rectangle 491' width='1335.276' height='650.113' transform='translate(0 543.106) rotate(-24)' fill='rgba(30,41,59,0.01)'/%3E%3C/g%3E%3Cg id='Group_368' data-name='Group 368' transform='matrix(-0.656, -0.755, 0.755, -0.656, 1017.824, 1042.94)'%3E%3Crect id='Rectangle_492-3' data-name='Rectangle 492' width='745.289' height='650.113' transform='matrix(0.978, 0.208, -0.208, 0.978, 296.729, 261.648)' fill='rgba(30,41,59,0.01)'/%3E%3Crect id='Rectangle_491-3' data-name='Rectangle 491' width='1335.276' height='650.113' transform='translate(0 543.106) rotate(-24)' fill='rgba(30,41,59,0.01)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
                        "texture-white": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2346.899' height='1200.894' viewBox='0 0 2346.899 1200.894'%3E%3Cg id='Group_369' data-name='Group 369' transform='translate(-33.74 508.575)'%3E%3Cg id='Group_366' data-name='Group 366' transform='translate(33.74 -458.541)'%3E%3Crect id='Rectangle_492' data-name='Rectangle 492' width='745.289' height='650.113' transform='translate(296.729 261.648) rotate(12.007)' fill='rgba(255,255,255,0.014)'/%3E%3Crect id='Rectangle_491' data-name='Rectangle 491' width='1335.276' height='650.113' transform='translate(0 543.106) rotate(-24)' fill='rgba(255,255,255,0.014)'/%3E%3C/g%3E%3Cg id='Group_367' data-name='Group 367' transform='translate(1647.456 1026.688) rotate(-128)'%3E%3Crect id='Rectangle_492-2' data-name='Rectangle 492' width='745.289' height='650.113' transform='translate(296.729 261.648) rotate(12.007)' fill='rgba(255,255,255,0.014)'/%3E%3Crect id='Rectangle_491-2' data-name='Rectangle 491' width='1335.276' height='650.113' transform='translate(0 543.106) rotate(-24)' fill='rgba(255,255,255,0.014)'/%3E%3C/g%3E%3Cg id='Group_368' data-name='Group 368' transform='matrix(-0.656, -0.755, 0.755, -0.656, 1017.824, 1042.94)'%3E%3Crect id='Rectangle_492-3' data-name='Rectangle 492' width='745.289' height='650.113' transform='translate(296.729 261.648) rotate(12.007)' fill='rgba(255,255,255,0.014)'/%3E%3Crect id='Rectangle_491-3' data-name='Rectangle 491' width='1335.276' height='650.113' transform='translate(0 543.106) rotate(-24)' fill='rgba(255,255,255,0.014)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
                        "chevron-white": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff95' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        "chevron-black": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2300000095' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        "file-icon-empty-directory": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='786' height='786' viewBox='0 0 786 786'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238a97ac'/%3E%3Cstop offset='1' stop-color='%235d6c83'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Group_2' data-name='Group 2' transform='translate(-567 -93)'%3E%3Crect id='Rectangle_4' data-name='Rectangle 4' width='418' height='681' rx='40' transform='translate(896 109)' fill='%2395a5b9'/%3E%3Crect id='Rectangle_3' data-name='Rectangle 3' width='433' height='681' rx='40' transform='translate(606 93)' fill='%23a0aec0'/%3E%3Crect id='Rectangle_2' data-name='Rectangle 2' width='786' height='721' rx='40' transform='translate(567 158)' fill='url(%23linear-gradient)'/%3E%3C/g%3E%3C/svg%3E%0A")`,
                        "file-icon-directory": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='786' height='786' viewBox='0 0 786 786'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238a97ac'/%3E%3Cstop offset='1' stop-color='%235d6c83'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Group_3' data-name='Group 3' transform='translate(-567 -93)'%3E%3Crect id='Rectangle_4' data-name='Rectangle 4' width='418' height='681' rx='40' transform='translate(896 109)' fill='%2395a5b9'/%3E%3Crect id='Rectangle_3' data-name='Rectangle 3' width='433' height='681' rx='40' transform='translate(606 93)' fill='%23a0aec0'/%3E%3Crect id='Rectangle_2' data-name='Rectangle 2' width='742' height='734' rx='40' transform='translate(590 145)' fill='%23bec8d9'/%3E%3Crect id='Rectangle_5' data-name='Rectangle 5' width='786' height='692' rx='40' transform='translate(567 187)' fill='url(%23linear-gradient)'/%3E%3C/g%3E%3C/svg%3E%0A")`,
                        "file-icon-file": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='628.027' height='786.012' viewBox='0 0 628.027 786.012'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238a97ac'/%3E%3Cstop offset='1' stop-color='%235d6c83'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Group_5' data-name='Group 5' transform='translate(-646 -92.988)'%3E%3Cpath id='Union_2' data-name='Union 2' d='M40,786A40,40,0,0,1,0,746V40A40,40,0,0,1,40,0H501V103h29v24h98V746a40,40,0,0,1-40,40Z' transform='translate(646 93)' fill='url(%23linear-gradient)'/%3E%3Cpath id='Intersection_2' data-name='Intersection 2' d='M.409,162.042l.058-109.9c31.605,29.739,125.37,125.377,125.37,125.377l-109.976.049A20.025,20.025,0,0,1,.409,162.042Z' transform='translate(1147 42)' fill='%23bec8d9' stroke='%23bec8d9' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A")`,
                        "loading-puff": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' viewBox='0 0 44 44' %3E%3Cg stroke='white' fill='none' fill-rule='evenodd' stroke-width='4' %3E%3Ccircle cx='22' cy='22' r='1' %3E%3Canimate values='1; 20' attributeName='r' begin='0s' dur='1.8s' calcMode='spline' keyTimes='0; 1' keySplines='0.165, 0.84, 0.44, 1' repeatCount='indefinite' /%3E%3Canimate values='1; 0' attributeName='stroke-opacity' begin='0s' dur='1.8s' calcMode='spline' keyTimes='0; 1' keySplines='0.3, 0.61, 0.355, 1' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='1' %3E%3Canimate values='1; 20' attributeName='r' begin='-0.9s' dur='1.8s' calcMode='spline' keyTimes='0; 1' keySplines='0.165, 0.84, 0.44, 1' repeatCount='indefinite' /%3E%3Canimate values='1; 0' attributeName='stroke-opacity' begin='-0.9s' dur='1.8s' calcMode='spline' keyTimes='0; 1' keySplines='0.3, 0.61, 0.355, 1' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
                    },
                    container: { center: !0 },
                },
            },
            plugins: [
                lt(),
                Mo(function ({ addBase: e, matchUtilities: r }) {
                    e({
                        ":root": {
                            "--color-theme-1": o("#03045e"),
                            "--color-theme-2": o("#0c4a6e"),
                            "--color-primary": o("#03045e"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                        },
                        ".dark": {
                            "--color-primary": o(a.blue[700]),
                            "--color-darkmode-50": "87 103 132",
                            "--color-darkmode-100": "74 90 121",
                            "--color-darkmode-200": "65 81 114",
                            "--color-darkmode-300": "53 69 103",
                            "--color-darkmode-400": "48 61 93",
                            "--color-darkmode-500": "41 53 82",
                            "--color-darkmode-600": "40 51 78",
                            "--color-darkmode-700": "35 45 69",
                            "--color-darkmode-800": "27 37 59",
                            "--color-darkmode-900": "15 23 42",
                        },
                        ".theme-1": {
                            "--color-theme-1": o(a.violet[900]),
                            "--color-theme-2": o(a.rose[800]),
                            "--color-primary": o(a.violet[900]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-2": {
                            "--color-theme-1": o(a.purple[900]),
                            "--color-theme-2": o(a.cyan[700]),
                            "--color-primary": o(a.purple[900]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-3": {
                            "--color-theme-1": o(a.cyan[700]),
                            "--color-theme-2": o(a.violet[800]),
                            "--color-primary": o(a.cyan[700]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-4": {
                            "--color-theme-1": o(a.sky[700]),
                            "--color-theme-2": o(a.rose[800]),
                            "--color-primary": o(a.sky[700]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-5": {
                            "--color-theme-1": o(a.sky[800]),
                            "--color-theme-2": o(a.emerald[800]),
                            "--color-primary": o(a.sky[800]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-6": {
                            "--color-theme-1": o("#247ba0"),
                            "--color-theme-2": o("#0a2463"),
                            "--color-primary": o("#247ba0"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-7": {
                            "--color-theme-1": o(a.lime[950]),
                            "--color-theme-2": o(a.teal[900]),
                            "--color-primary": o(a.lime[950]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-8": {
                            "--color-theme-1": o("#357266"),
                            "--color-theme-2": o("#0E3B43"),
                            "--color-primary": o("#357266"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-9": {
                            "--color-theme-1": o("#6C6C60"),
                            "--color-theme-2": o("#4D4D42"),
                            "--color-primary": o("#6C6C60"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-10": {
                            "--color-theme-1": o(a.indigo[800]),
                            "--color-theme-2": o(a.blue[900]),
                            "--color-primary": o(a.indigo[800]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-11": {
                            "--color-theme-1": o("#2f3e46"),
                            "--color-theme-2": o("#52796f"),
                            "--color-primary": o("#2f3e46"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-12": {
                            "--color-theme-1": o("#5e503f"),
                            "--color-theme-2": o("#22333b"),
                            "--color-primary": o("#5e503f"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-13": {
                            "--color-theme-1": o("#5e548e"),
                            "--color-theme-2": o("#231942"),
                            "--color-primary": o("#5e548e"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-14": {
                            "--color-theme-1": o("#02292f"),
                            "--color-theme-2": o("#767522"),
                            "--color-primary": o("#02292f"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-15": {
                            "--color-theme-1": o("#4c956c"),
                            "--color-theme-2": o("#006466"),
                            "--color-primary": o("#4c956c"),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-16": {
                            "--color-theme-1": o(a.sky[900]),
                            "--color-theme-2": o(a.blue[950]),
                            "--color-primary": o(a.sky[900]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                        ".theme-17": {
                            "--color-theme-1": o(a.slate[900]),
                            "--color-theme-2": o(a.slate[800]),
                            "--color-primary": o(a.slate[900]),
                            "--color-secondary": o(a.slate[200]),
                            "--color-success": o(a.teal[600]),
                            "--color-info": o(a.cyan[600]),
                            "--color-warning": o(a.yellow[600]),
                            "--color-pending": o(a.orange[700]),
                            "--color-danger": o(a.red[700]),
                            "--color-light": o(a.slate[100]),
                            "--color-dark": o(a.slate[800]),
                            "&.dark": { "--color-primary": o(a.sky[800]) },
                        },
                    });
                }),
            ],
        };
    });
    var gt = p((_a, pt) => {
        pt.exports = B;
        B.flatten = B;
        B.unflatten = ft;
        function ut(e) {
            return (
                e &&
                e.constructor &&
                typeof e.constructor.isBuffer == "function" &&
                e.constructor.isBuffer(e)
            );
        }
        function dt(e) {
            return e;
        }
        function B(e, r) {
            r = r || {};
            let n = r.delimiter || ".",
                t = r.maxDepth,
                i = r.transformKey || dt,
                s = {};
            function l(c, d, g) {
                (g = g || 1),
                    Object.keys(c).forEach(function (u) {
                        let f = c[u],
                            m = r.safe && Array.isArray(f),
                            y = Object.prototype.toString.call(f),
                            b = ut(f),
                            k =
                                y === "[object Object]" ||
                                y === "[object Array]",
                            R = d ? d + n + i(u) : i(u);
                        if (
                            !m &&
                            !b &&
                            k &&
                            Object.keys(f).length &&
                            (!r.maxDepth || g < t)
                        )
                            return l(f, R, g + 1);
                        s[R] = f;
                    });
            }
            return l(e), s;
        }
        function ft(e, r) {
            r = r || {};
            let n = r.delimiter || ".",
                t = r.overwrite || !1,
                i = r.transformKey || dt,
                s = {};
            if (
                ut(e) ||
                Object.prototype.toString.call(e) !== "[object Object]"
            )
                return e;
            function c(u) {
                let f = Number(u);
                return isNaN(f) || u.indexOf(".") !== -1 || r.object ? u : f;
            }
            function d(u, f, m) {
                return Object.keys(m).reduce(function (y, b) {
                    return (y[u + n + b] = m[b]), y;
                }, f);
            }
            function g(u) {
                let f = Object.prototype.toString.call(u),
                    m = f === "[object Array]",
                    y = f === "[object Object]";
                if (u) {
                    if (m) return !u.length;
                    if (y) return !Object.keys(u).length;
                } else return !0;
            }
            return (
                (e = Object.keys(e).reduce(function (u, f) {
                    let m = Object.prototype.toString.call(e[f]);
                    return !(
                        m === "[object Object]" || m === "[object Array]"
                    ) || g(e[f])
                        ? ((u[f] = e[f]), u)
                        : d(f, u, B(e[f], r));
                }, {})),
                Object.keys(e).forEach(function (u) {
                    let f = u.split(n).map(i),
                        m = c(f.shift()),
                        y = c(f[0]),
                        b = s;
                    for (; y !== void 0; ) {
                        if (m === "__proto__") return;
                        let k = Object.prototype.toString.call(b[m]),
                            R =
                                k === "[object Object]" ||
                                k === "[object Array]";
                        if (!t && !R && typeof b[m] < "u") return;
                        ((t && !R) || (!t && b[m] == null)) &&
                            (b[m] =
                                typeof y == "number" && !r.object ? [] : {}),
                            (b = b[m]),
                            f.length > 0 && ((m = c(f.shift())), (y = c(f[0])));
                    }
                    b[m] = ft(e[u], r);
                }),
                s
            );
        }
    });
    var Ke = L(D()),
        Xe = {
            cutText(e, r) {
                if (e.split(" ").length > 1) {
                    let t = e.substring(0, r).split(" ");
                    return t.pop(), t.join(" ") + "...";
                } else return e;
            },
            formatDate(e, r) {
                return dayjs(e).format(r);
            },
            capitalizeFirstLetter(e) {
                if (e) return e.charAt(0).toUpperCase() + e.slice(1);
            },
            onlyNumber(e) {
                return e ? e.replace(/\D/g, "") : "";
            },
            formatCurrency(e) {
                if (e) {
                    let r = e.toString().replace(/\D/g, ""),
                        n = r.length % 3,
                        t = r.substr(0, n),
                        i = r.substr(n).match(/\d{3}/g),
                        s;
                    return i && ((s = n ? "." : ""), (t += s + i.join("."))), t;
                } else return "";
            },
            timeAgo(e) {
                let r = new Date(
                        (e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")
                    ),
                    n = (new Date().getTime() - r.getTime()) / 1e3,
                    t = Math.floor(n / 86400);
                return isNaN(t) || t < 0 || t >= 31
                    ? dayjs(e).format("MMMM DD, YYYY")
                    : (t == 0 &&
                          ((n < 60 && "just now") ||
                              (n < 120 && "1 minute ago") ||
                              (n < 3600 &&
                                  Math.floor(n / 60) + " minutes ago") ||
                              (n < 7200 && "1 hour ago") ||
                              (n < 86400 &&
                                  Math.floor(n / 3600) + " hours ago"))) ||
                          (t == 1 && "Yesterday") ||
                          (t < 7 && t + " days ago") ||
                          (t < 31 && Math.ceil(t / 7) + " weeks ago");
            },
            diffTimeByNow(e) {
                let r = dayjs(dayjs().format("YYYY-MM-DD HH:mm:ss").toString()),
                    n = dayjs(
                        dayjs(e).format("YYYY-MM-DD HH:mm:ss").toString()
                    ),
                    t = dayjs.duration(n.diff(r)),
                    i = Math.floor(t.asMilliseconds()),
                    s = Math.round(i / 864e5),
                    l = Math.round((i % 864e5) / 36e5),
                    c = Math.round(((i % 864e5) % 36e5) / 6e4),
                    d = Math.round((((i % 864e5) % 36e5) % 6e4) / 1e3);
                return (
                    d < 30 && d >= 0 && (c += 1),
                    {
                        days: s.toString().length < 2 ? "0" + s : s,
                        hours: l.toString().length < 2 ? "0" + l : l,
                        minutes: c.toString().length < 2 ? "0" + c : c,
                        seconds: d.toString().length < 2 ? "0" + d : d,
                    }
                );
            },
            isset(e) {
                return Object.keys(e).length;
            },
            assign(e) {
                return JSON.parse(JSON.stringify(e));
            },
            delay(e) {
                return new Promise((r, n) => {
                    setTimeout(() => {
                        r();
                    }, e);
                });
            },
            randomNumbers(e, r, n) {
                let t = [0];
                for (let i = 1; i < n; i++)
                    t.push(Math.ceil(Math.random() * (e - r) + r));
                return t;
            },
            replaceAll(e, r, n) {
                return e.replace(new RegExp(r, "g"), n);
            },
            toRGB(e) {
                return (0, Ke.parseColor)(e).color.join(" ");
            },
            watchCssVariables(e, r, n) {
                let t = typeof e == "string" ? document.querySelector(e) : e,
                    i = new MutationObserver(() => {
                        let l = getComputedStyle(t),
                            c = r.reduce(
                                (d, g) => (
                                    (d[g] = l
                                        .getPropertyValue(`--${g}`)
                                        .trim()),
                                    d
                                ),
                                {}
                            );
                        n(c);
                    });
                i.observe(t, { attributes: !0 });
                let s = r.reduce(
                    (l, c) => (
                        (l[c] = getComputedStyle(t)
                            .getPropertyValue(`--${c}`)
                            .trim()),
                        l
                    ),
                    {}
                );
                return n(s), i;
            },
        };
    window.helper = Xe;
    var Je = Xe;
    var mt = L(Vr()),
        ht = L(ct()),
        bt = L(gt()),
        Do = (0, mt.default)(ht.default),
        qo = Do.theme?.colors;
    function $o(e, r = 1) {
        let n = (0, bt.default)(qo);
        if (n[e].search("var") === -1) return `rgb(${Je.toRGB(n[e])} / ${r})`;
        {
            let t = `--color-${n[e].split("--color-")[1].split(")")[0]}`;
            return `rgb(${getComputedStyle(document.body).getPropertyValue(
                t
            )} / ${r})`;
        }
    }
    window.getColor = $o;
})();
