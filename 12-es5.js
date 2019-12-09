(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/han7hxga.entry.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/han7hxga.entry.js ***!
    \*************************************************************************************/

  /*! exports provided: AsLegendColorContinuous, AsLegendColorContinuousPolygon */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildHan7hxgaEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendColorContinuous", function () {
      return LegendColorCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendColorContinuousPolygon", function () {
      return LegendColorContinuousPolygon;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var LegendColorCategory = function () {
      function n() {}

      return n.prototype.render = function () {
        return this.data && 0 !== this.data.length ? "polygon" === this.data[0].type ? Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-color-continuous-polygon", {
          data: this.data,
          orientation: this.orientation
        }) : Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-category", {
          data: this.data,
          orientation: this.orientation,
          width: this.width
        }) : null;
      }, Object.defineProperty(n, "is", {
        get: function get() {
          return "as-legend-color-continuous";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(n, "properties", {
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
      }), Object.defineProperty(n, "style", {
        get: function get() {
          return "as-legend-color-continuous{display:block}";
        },
        enumerable: !0,
        configurable: !0
      }), n;
    }(),
        LegendColorContinuousPolygon = function () {
      function n() {
        this.orientation = "vertical";
      }

      return n.prototype.render = function () {
        var n,
            e = this;
        if (!this.data) return null;
        var o = ((n = {
          "as-legend-color-continuous-polygon--outer-wrapper": !0
        })["as-legend-color-continuous-polygon--" + this.orientation] = !0, n);
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: o
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-color-continuous-polygon--wrapper as-legend-color-continuous-polygon--color"
        }, this.data.map(function (n, o, t) {
          return e.renderGradientStep(n, o, t);
        })), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-color-continuous-polygon--wrapper as-legend-color-continuous-polygon--labels"
        }, this.data.map(function (n, o, t) {
          return e.renderLabel(n, o, t);
        })));
      }, n.prototype.renderGradientStep = function (n, e, o) {
        return e === o.length - 1 ? null : Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-color-continuous-polygon--step",
          style: {
            backgroundImage: "linear-gradient(" + ("vertical" === this.orientation ? ".5turn" : ".25turn") + ", " + n.color + ", " + o[e + 1].color + ")"
          }
        });
      }, n.prototype.renderLabel = function (n, e, o) {
        return "vertical" === this.orientation && 0 === e ? null : "horizontal" === this.orientation && e === o.length - 1 ? null : Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend-color-continuous-polygon--label"
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, n.label));
      }, Object.defineProperty(n, "is", {
        get: function get() {
          return "as-legend-color-continuous-polygon";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(n, "properties", {
        get: function get() {
          return {
            data: {
              type: "Any",
              attr: "data"
            },
            orientation: {
              type: String,
              attr: "orientation"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(n, "style", {
        get: function get() {
          return "as-legend-color-continuous-polygon{--as-legend-color-continuous-polygon--border-color:rgba(0,0,0,0.1);--as-legend-color-continuous-polygon--color:var(--as--color--type-01);display:block}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--step{-ms-flex:1;flex:1;background-origin:border-box}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--step{height:8px;border-top:1px solid var(--as-legend-color-continuous-polygon--border-color);border-bottom:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--step{width:8px;border-right:1px solid var(--as-legend-color-continuous-polygon--border-color);border-left:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--outer-wrapper{display:-ms-flexbox;display:flex}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--outer-wrapper.as-legend-color-continuous-polygon--vertical{-ms-flex-direction:row;flex-direction:row}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--outer-wrapper.as-legend-color-continuous-polygon--horizontal{-ms-flex-direction:column;flex-direction:column}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--wrapper{display:-ms-flexbox;display:flex}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--label{-ms-flex:1;flex:1;color:var(--as-legend-color-continuous-polygon--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--color{-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-color-continuous-polygon--border-color);box-shadow:-1px 0 2px 0 var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--wrapper{-ms-flex-direction:column;flex-direction:column;min-height:300px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--labels{margin-left:8px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--step:first-of-type{border-top:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--step:last-of-type{border-bottom:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--wrapper{min-width:300px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--labels{margin-top:8px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--step:first-of-type{border-left:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--step:last-of-type{border-right:1px solid var(--as-legend-color-continuous-polygon--border-color)}";
        },
        enumerable: !0,
        configurable: !0
      }), n;
    }();
    /***/

  }
}]);
//# sourceMappingURL=12-es5.js.map