(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/tx8kmi5k.sc.entry.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/tx8kmi5k.sc.entry.js ***!
    \****************************************************************************************/

  /*! exports provided: AsLegend */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildTx8kmi5kScEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsLegend", function () {
      return Legend;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var Legend = function () {
      function e() {}

      return e.prototype.render = function () {
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend--wrapper"
        }, this.renderHeader(), this.renderContent());
      }, e.prototype.renderContent = function () {
        return this.loading ? null : [Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "as-legend--legends-slot"
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "legends"
        })), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "footer"
        })];
      }, e.prototype.renderHeader = function () {
        if (this.heading || this.description) return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("as-widget-header", {
          header: this.heading,
          subheader: this.description
        });
      }, Object.defineProperty(e, "is", {
        get: function get() {
          return "as-legend";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "properties", {
        get: function get() {
          return {
            description: {
              type: String,
              attr: "description"
            },
            heading: {
              type: String,
              attr: "heading"
            },
            loading: {
              type: Boolean,
              attr: "loading"
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "style", {
        get: function get() {
          return "as-legend{--as-legend--color:var(--as--color--type-01);--as-legend--background-color:var(--as--color--ui-01);--as-legend--footer-font-size:12px;--as-legend--footer-color:var(--as--color--type-01);--as-legend--footer-margin-top:12px;--as-legend--padding:12px;background:var(--as-legend--background-color);color:var(--as-legend--color)}as-legend .as-legend--wrapper{padding:var(--as-legend--padding)}as-legend [slot=footer]{display:block;margin-top:var(--as-legend--footer-margin-top);color:var(--as-legend--footer-color);font-family:var(--as--font-family--base);font-size:var(--as-legend--footer-font-size)}as-legend .as-legend--legends-slot{overflow:auto}";
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();
    /***/

  }
}]);
//# sourceMappingURL=47-es5.js.map