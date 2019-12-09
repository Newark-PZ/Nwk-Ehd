(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/xmgcm8yw.sc.entry.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/xmgcm8yw.sc.entry.js ***!
    \****************************************************************************************/

  /*! exports provided: AsLegendColorContinuousPoint */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildXmgcm8ywScEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendColorContinuousPoint", function () {
      return LegendColorBinsPoint;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var LegendColorBinsPoint = function () {
      function t() {}

      return t.prototype.render = function () {
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-category", {
          data: this.data,
          orientation: this.orientation,
          width: this.width
        });
      }, Object.defineProperty(t, "is", {
        get: function get() {
          return "as-legend-color-continuous-point";
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
            width: {
              type: Number,
              attr: "width"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "style", {
        get: function get() {
          return "as-legend-color-continuous-point{display:block}";
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }();
    /***/

  }
}]);
//# sourceMappingURL=57-es5.js.map