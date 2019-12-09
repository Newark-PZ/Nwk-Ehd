(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/@carto/airship-components/dist/esm/es5/build/tglswmhe.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/tglswmhe.entry.js ***!
  \*************************************************************************************/
/*! exports provided: AsYAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsYAxis", function() { return YAxis; });
/* harmony import */ var _chunk_7de78343_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-7de78343.js */ "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-7de78343.js");
/* harmony import */ var _chunk_6e6f6eb8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-6e6f6eb8.js */ "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-6e6f6eb8.js");
/* harmony import */ var _chunk_72a4ae8e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-72a4ae8e.js */ "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-72a4ae8e.js");
var YAxis=function(){function e(){this.from=0,this.to=0,this.responsive=!0,this._resizeListener=this._resizeListener.bind(this)}return e.prototype.componentWillLoad=function(){addEventListener("resize",this._resizeListener)},e.prototype.componentDidUnload=function(){removeEventListener("resize",this._resizeListener)},e.prototype.render=function(){_chunk_7de78343_js__WEBPACK_IMPORTED_MODULE_0__["a"].renderYAxis(this.element.previousElementSibling,[this.from,this.to])},e.prototype._resizeListener=function(){this.responsive&&this.element.forceUpdate()},Object.defineProperty(e,"is",{get:function(){return"as-y-axis"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},from:{type:Number,attr:"from"},responsive:{type:Boolean,attr:"responsive"},to:{type:Number,attr:"to"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".y-axis{--widget-axis-text-color:var(--as--color--type-01,#2c2c2c);--widget-axis-line-color:var(--as--color--ui-05,#b3b3b3)}.y-axis .tick text{width:30px;fill:var(--widget-axis-text-color);white-space:pre}.y-axis .tick line{stroke:var(--widget-axis-line-color);opacity:.1}.y-axis .tick line.zero{opacity:.5}.y-axis .domain{display:none}"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);