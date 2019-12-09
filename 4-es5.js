(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/1u1qkicr.entry.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/1u1qkicr.entry.js ***!
    \*************************************************************************************/

  /*! exports provided: AsToolbar */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5Build1u1qkicrEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsToolbar", function () {
      return Toolbar;
    });
    /* harmony import */


    var _airship_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../airship.core.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/airship.core.js");

    var Toolbar = function () {
      function e() {}

      return e.prototype.componentWillLoad = function () {
        this.actions = this.element.querySelector(".as-toolbar__actions");
      }, e.prototype.componentWillUpdate = function () {
        this.actions = this.element.querySelector(".as-toolbar__actions");
      }, e.prototype.render = function () {
        return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", {
          class: "as-toolbar"
        }, this._renderToggleButton(), Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
      }, e.prototype._toggleDrawer = function () {
        this.actions.classList.toggle("as-toolbar__actions--visible");
      }, e.prototype._renderToggleButton = function () {
        if (this.actions) return Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          onClick: this._toggleDrawer.bind(this),
          class: "as-toolbar__item as-toolbar__toggle"
        }, Object(_airship_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
          class: "as-icon as-icon-hamburger as-title as-m--0"
        }));
      }, Object.defineProperty(e, "is", {
        get: function get() {
          return "as-toolbar";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "properties", {
        get: function get() {
          return {
            element: {
              elementRef: !0
            }
          };
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e, "style", {
        get: function get() {
          return "as-toolbar{display:block;z-index:3}";
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }();
    /***/

  }
}]);
//# sourceMappingURL=4-es5.js.map