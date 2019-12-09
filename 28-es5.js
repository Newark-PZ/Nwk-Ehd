(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/qdb7o0gd.entry.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/qdb7o0gd.entry.js ***!
    \*************************************************************************************/

  /*! exports provided: AsLegendColorBinsPoint */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildQdb7o0gdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendColorBinsPoint", function () {
      return LegendColorBinsPoint;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var LegendColorBinsPoint = function () {
      function e() {}

      return e.prototype.render = function () {
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-category", {
          data: this.data,
          orientation: this.orientation,
          width: this.width
        });
      }, Object.defineProperty(e, "is", {
        get: function get() {
          return "as-legend-color-bins-point";
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
          return "as-legend-color-bins-point{display:block}";
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();
    /***/

  }
}]);
//# sourceMappingURL=28-es5.js.map