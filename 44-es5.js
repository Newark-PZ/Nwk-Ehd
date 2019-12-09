(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/tmuj3ovx.entry.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/tmuj3ovx.entry.js ***!
    \*************************************************************************************/

  /*! exports provided: AsLegendSizeContinuous, AsLegendSizeContinuousLine, AsLegendSizeContinuousPoint */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildTmuj3ovxEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendSizeContinuous", function () {
      return LegendSizeContinuous;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendSizeContinuousLine", function () {
      return LegendSizeContinuousLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendSizeContinuousPoint", function () {
      return LegendSizeContinuousPoint;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");
    /* harmony import */


    var _chunk_512e386e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-512e386e.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-512e386e.js");

    var LegendSizeContinuous = function () {
      function t() {
        this.orientation = "vertical", this.scale = 1;
      }

      return t.prototype.render = function () {
        return this.data && 0 !== this.data.length ? Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: {
            "as-legend-size-continuous--overflow": "line" === this.data[0].type
          }
        }, this.renderLegend(this.data)) : null;
      }, t.prototype.renderLegend = function (t) {
        switch (t[0].type) {
          case "point":
            return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-size-continuous-point", {
              data: this.data,
              orientation: this.orientation,
              scale: this.scale
            });

          case "line":
            return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-size-continuous-line", {
              data: this.data,
              orientation: this.orientation
            });

          default:
            return null;
        }
      }, Object.defineProperty(t, "is", {
        get: function get() {
          return "as-legend-size-continuous";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "properties", {
        get: function get() {
          return {
            data: {
              type: "Any",
              attr: "data"
            },
            orientation: {
              type: String,
              attr: "orientation"
            },
            scale: {
              type: Number,
              attr: "scale"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "style", {
        get: function get() {
          return "as-legend-size-continuous{display:block}as-legend-size-continuous .as-legend-size-continuous--overflow{overflow:hidden}";
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        TEXT_MARGIN = 4,
        MIN_LINE_SIZE = 4,
        LegendSizeContinuousLine = function () {
      function t() {
        this.data = null, this.orientation = "vertical", this.size = 300, this.leadingLineStrokeWidth = .5, this.textLineHeight = 12, this.xMarginFactor = .1, this.yMarginFactor = .1, this.width = null, this.rSize = 0;
      }

      return t.prototype.componentWillUpdate = function () {
        this.parseSize();
      }, t.prototype.componentWillLoad = function () {
        this.parseSize();
      }, t.prototype.render = function () {
        var t,
            e = this;

        if (this.data && 0 !== this.data.length) {
          var i = this.getSortedData(),
              n = i[0].width,
              r = n / 2,
              o = Math.max(n + MIN_LINE_SIZE, this.width),
              a = "horizontal" === this.orientation || null === this.width ? 0 : (this.width - n) / 2,
              s = [],
              l = [];
          i.forEach(function (t, h) {
            var u = r * (t.width / n),
                c = h / (i.length - 1),
                d = r + u,
                p = r - u,
                g = e.size - e.size * c,
                y = "vertical" === e.orientation ? [p + a, g] : [g + a, p];

            if (s.splice(h, 0, "L" + ("vertical" === e.orientation ? [d + a, g] : [g + a, d]).join(" ")), s.splice(s.length - h, 0, "L" + y.join(" ")), t.label) {
              var f = e.getOffset(h, i.length - 1),
                  z = e.size - e.size * c + f,
                  S = [r + u, z],
                  b = [o, z];
              "horizontal" === e.orientation && (S.reverse(), b.reverse()), S[0] += a, b[0] += a, l.push({
                label: t.label,
                x1: S[0],
                x2: b[0],
                y1: S[1],
                y2: b[1]
              });
            }
          }), s.splice(0, 0, "horizontal" === this.orientation ? "M" + this.size + " 0" : "M0 " + this.size);
          var u = ((t = {})["as-legend-size-continuous-line--" + this.orientation] = !0, t);
          return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", {
            class: u,
            style: this.getSVGStyle(),
            viewBox: this.getSVGViewBox()
          }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
            style: this.getPathStyle(),
            d: s.join(" ") + " Z"
          }), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null, l.map(function (t) {
            var i = -a;
            return "horizontal" === e.orientation && (i = 0), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("line", {
              "stroke-width": e.leadingLineStrokeWidth,
              x1: t.x1,
              y1: t.y1,
              x2: t.x2 + i,
              y2: t.y2
            });
          })), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", null, l.map(function (t) {
            var i = t.label,
                n = t.x2,
                r = t.y2,
                o = {
              x: TEXT_MARGIN - a,
              y: e.textLineHeight / 4
            };
            return "horizontal" === e.orientation && (o.x = 0, o.y = e.textLineHeight), [Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", {
              x: n + o.x,
              y: r + o.y
            }, i)];
          }))));
        }
      }, t.prototype.parseSize = function () {
        if (this.data && 0 !== this.data.length) {
          var t = this.getSortedData();
          this.rSize = Math.max(t[0].width + MIN_LINE_SIZE + this.textLineHeight, 0);
        }
      }, t.prototype.getSortedData = function () {
        return null === this.data ? this.data : this.data.slice().sort(function (t, e) {
          return e.width - t.width;
        });
      }, t.prototype.getPathStyle = function () {
        return {
          fill: "" + this.data[0].color
        };
      }, t.prototype.getSVGStyle = function () {
        return {
          height: ("horizontal" === this.orientation ? this.rSize : this.size) * (1 + this.yMarginFactor) + "px",
          width: this.size * (1 + this.xMarginFactor) + "px"
        };
      }, t.prototype.getSVGViewBox = function () {
        var t = "horizontal" === this.orientation ? this.rSize : this.size,
            e = this.size * (-this.xMarginFactor / 2);
        return "vertical" === this.orientation && (e = 0), e + " " + t * (-this.yMarginFactor / 2) + " " + this.size * (1 + this.xMarginFactor) + " " + t * (1 + this.yMarginFactor);
      }, t.prototype.getOffset = function (t, e) {
        var i = 0;
        return t === e && (i += this.leadingLineStrokeWidth), 0 === t && (i -= this.leadingLineStrokeWidth), i;
      }, Object.defineProperty(t, "is", {
        get: function get() {
          return "as-legend-size-continuous-line";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "properties", {
        get: function get() {
          return {
            data: {
              type: "Any",
              attr: "data"
            },
            leadingLineStrokeWidth: {
              type: Number,
              attr: "leading-line-stroke-width"
            },
            orientation: {
              type: String,
              attr: "orientation"
            },
            rSize: {
              state: !0
            },
            size: {
              type: Number,
              attr: "size"
            },
            textLineHeight: {
              type: Number,
              attr: "text-line-height"
            },
            width: {
              type: Number,
              attr: "width"
            },
            xMarginFactor: {
              type: Number,
              attr: "x-margin-factor"
            },
            yMarginFactor: {
              type: Number,
              attr: "y-margin-factor"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "style", {
        get: function get() {
          return "as-legend-size-continuous-line{display:block;overflow:hidden}as-legend-size-continuous-line svg text{font:var(--as--font--caption)}as-legend-size-continuous-line svg line{stroke:var(--as-legend--color)}as-legend-size-continuous-line svg.as-legend-size-continuous-line--horizontal text{text-anchor:middle}";
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        FAKE_BORDER_SIZE = 1,
        LegendSizeContinuousPoint = function () {
      function t() {
        this.orientation = "vertical", this.scale = 1;
      }

      return t.prototype.render = function () {
        var t,
            e = this;
        if (!this.data) return null;
        var i = ((t = {
          "as-legend-size-continuous-point--wrapper": !0
        })["as-legend-size-continuous-point--" + this.orientation] = !0, t),
            n = this.data.slice().sort(function (t, e) {
          return e.width - t.width;
        });
        this.maxSize = n[0].width * this.scale;
        var r = {
          height: this.maxSize + "px",
          width: this.maxSize + "px"
        };
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: i
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "as-legend-size-continuous-point--label"
        }, n[n.length - 1].label), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          style: r,
          class: "as-legend-size-continuous-point--steps"
        }, n.map(function (t) {
          return e.renderStep(t);
        })), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "as-legend-size-continuous-point--label"
        }, n[0].label));
      }, t.prototype.renderStep = function (t) {
        var e = FAKE_BORDER_SIZE + "px " + (t.strokeStyle || "solid") + " " + t.strokeColor,
            i = Object(_chunk_512e386e_js__WEBPACK_IMPORTED_MODULE_1__["a"])(t.strokeStyle) ? 2 * FAKE_BORDER_SIZE : 0,
            n = Math.round((t.width + i) * this.scale) + "px";
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-size-continuous-point--circle",
          style: {
            backgroundColor: t.color,
            border: e,
            height: n,
            width: n
          }
        });
      }, Object.defineProperty(t, "is", {
        get: function get() {
          return "as-legend-size-continuous-point";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "properties", {
        get: function get() {
          return {
            data: {
              type: "Any",
              attr: "data"
            },
            orientation: {
              type: String,
              attr: "orientation"
            },
            scale: {
              type: Number,
              attr: "scale"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "style", {
        get: function get() {
          return "as-legend-size-continuous-point{--as-legend-size-continuous-point--color:var(--as--color--type-01);--as-legend-size-continuous-point--shadow:rgba(0,0,0,0.1);display:block}as-legend-size-continuous-point .as-legend-size-continuous-point--steps{position:relative;margin:8px}as-legend-size-continuous-point .as-legend-size-continuous-point--steps,as-legend-size-continuous-point .as-legend-size-continuous-point--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-continuous-point .as-legend-size-continuous-point--circle{position:absolute;border:2px solid var(--as-legend-size-continuous-point--shadow);border-radius:50%;-webkit-box-shadow:0 0 2px 0 var(--as-legend-size-continuous-point--shadow);box-shadow:0 0 2px 0 var(--as-legend-size-continuous-point--shadow)}as-legend-size-continuous-point .as-legend-size-continuous-point--label{color:var(--as-legend-size-continuous-point--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-size-continuous-point .as-legend-size-continuous-point--vertical .as-legend-size-continuous-point--steps,as-legend-size-continuous-point .as-legend-size-continuous-point--vertical.as-legend-size-continuous-point--wrapper{-ms-flex-direction:column-reverse;flex-direction:column-reverse}";
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }();
    /***/

  }
}]);
//# sourceMappingURL=44-es5.js.map