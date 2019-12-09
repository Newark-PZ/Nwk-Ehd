(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/hfmalcli.entry.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/hfmalcli.entry.js ***!
    \*************************************************************************************/

  /*! exports provided: AsLegendSizeCategory, AsLegendSizeCategoryLine */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildHfmalcliEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendSizeCategory", function () {
      return LegendSizeCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendSizeCategoryLine", function () {
      return LegendSizeBinsPoint;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var LegendSizeCategory = function () {
      function e() {
        this.orientation = "vertical", this.width = null;
      }

      return e.prototype.render = function () {
        if (!this.data || 0 === this.data.length) return null;

        switch (this.data[0].type) {
          case "point":
            return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-size-bins-point", {
              data: this.data,
              orientation: this.orientation,
              width: this.width
            });

          case "line":
            return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-size-category-line", {
              data: this.data,
              orientation: this.orientation
            });

          default:
            return null;
        }
      }, Object.defineProperty(e, "is", {
        get: function get() {
          return "as-legend-size-category";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "properties", {
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
            width: {
              type: Number,
              attr: "width"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "style", {
        get: function get() {
          return "as-legend-size-category{display:block}";
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }(),
        MIN_WIDTH = 48,
        FACTOR = 3,
        LegendSizeBinsPoint = function () {
      function e() {
        this.orientation = "vertical", this.aligned = !1, this.factor = FACTOR, this.minWidth = MIN_WIDTH;
      }

      return e.prototype.render = function () {
        var e,
            t = this;
        if (!this.data) return null;
        var i = ((e = {
          "as-legend-size-category-line--steps": !0
        })["as-legend-size-category-line--" + this.orientation] = !0, e);
        return this.maxSize = this.data.slice().sort(function (e, t) {
          return t.width - e.width;
        })[0].width, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: i
        }, this.data.map(function (e) {
          return t.renderStep(e);
        }));
      }, e.prototype.renderStep = function (e) {
        var t = {
          borderTopColor: "" + e.color,
          borderTopStyle: "" + (e.strokeStyle || "solid"),
          borderTopWidth: e.width + "px"
        },
            i = Math.max(MIN_WIDTH, this.maxSize * this.factor),
            n = Object.assign({
          height: e.width + "px",
          width: i + "px"
        }, t),
            r = {};
        return "horizontal" === this.orientation ? (r.height = i + "px", this.aligned && (n.marginBottom = (this.maxSize - e.width) / 2 + "px")) : "vertical" === this.orientation && (r.width = i + "px"), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-size-category-line--step"
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          style: r,
          class: "as-legend-size-category-line--line-wrapper"
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-size-category-line--line",
          style: n
        })), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "as-legend-size-category-line--label"
        }, e.label));
      }, Object.defineProperty(e, "is", {
        get: function get() {
          return "as-legend-size-category-line";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "properties", {
        get: function get() {
          return {
            aligned: {
              type: Boolean,
              attr: "aligned"
            },
            data: {
              type: "Any",
              attr: "data"
            },
            factor: {
              type: Number,
              attr: "factor"
            },
            minWidth: {
              type: Number,
              attr: "min-width"
            },
            orientation: {
              type: String,
              attr: "orientation"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "style", {
        get: function get() {
          return "as-legend-size-category-line{--as-legend-size-category-line--color:var(--as--color--type-01);--as-legend-size-category-line--shadow:rgba(0,0,0,0.1);display:block}as-legend-size-category-line .as-legend-size-category-line--steps{display:-ms-flexbox;display:flex}as-legend-size-category-line .as-legend-size-category-line--line-wrapper,as-legend-size-category-line .as-legend-size-category-line--step{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-category-line .as-legend-size-category-line--line-wrapper{-ms-flex-pack:center;justify-content:center}as-legend-size-category-line .as-legend-size-category-line--label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--as-legend-size-category-line--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-size-category-line .as-legend-size-category-line--horizontal{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:distribute;justify-content:space-around}as-legend-size-category-line .as-legend-size-category-line--horizontal .as-legend-size-category-line--step{-ms-flex-direction:column;flex-direction:column;margin:0 4px}as-legend-size-category-line .as-legend-size-category-line--horizontal .as-legend-size-category-line--step:first-of-type{margin-left:0}as-legend-size-category-line .as-legend-size-category-line--horizontal .as-legend-size-category-line--step:last-of-type{margin-right:0}as-legend-size-category-line .as-legend-size-category-line--horizontal .as-legend-size-category-line--label{margin-top:8px}as-legend-size-category-line .as-legend-size-category-line--horizontal .as-legend-size-category-line--line-wrapper{-ms-flex-align:end;align-items:flex-end}as-legend-size-category-line .as-legend-size-category-line--vertical{-ms-flex-direction:column;flex-direction:column}as-legend-size-category-line .as-legend-size-category-line--vertical .as-legend-size-category-line--label{margin-left:8px}as-legend-size-category-line .as-legend-size-category-line--vertical .as-legend-size-category-line--step:not(:first-of-type){margin-top:8px}";
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();
    /***/

  }
}]);
//# sourceMappingURL=14-es5.js.map