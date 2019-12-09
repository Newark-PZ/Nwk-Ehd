(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/mbrd1z8r.entry.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/mbrd1z8r.entry.js ***!
    \*************************************************************************************/

  /*! exports provided: AsLegendColorCategory */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildMbrd1z8rEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegendColorCategory", function () {
      return LegendColorCategory;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var LegendColorCategory = function () {
      function e() {}

      return e.prototype.render = function () {
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-legend-category", {
          data: this.data,
          orientation: this.orientation,
          width: this.width
        });
      }, Object.defineProperty(e, "is", {
        get: function get() {
          return "as-legend-color-category";
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
          return "as-legend-color-category{display:block}";
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();
    /***/

  }
}]);
//# sourceMappingURL=24-es5.js.map