(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-512e386e.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-512e386e.js ***!
    \*************************************************************************************/

  /*! exports provided: a */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildChunk512e386eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return borderStyleCounts;
    });

    function borderStyleCounts(n) {
      return -1 === ["none", "initial", "inherit", "hidden", "unset"].indexOf(n);
    }
    /***/

  },

  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-7de78343.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-7de78343.js ***!
    \*************************************************************************************/

  /*! exports provided: a */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildChunk7de78343Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return yAxisService;
    });
    /* harmony import */


    var _chunk_6e6f6eb8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-6e6f6eb8.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-6e6f6eb8.js");
    /* harmony import */


    var _chunk_72a4ae8e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-72a4ae8e.js */
    "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-72a4ae8e.js");

    function renderYAxis(e, t) {
      var r = Object(_chunk_72a4ae8e_js__WEBPACK_IMPORTED_MODULE_1__["n"])(e),
          a = r.node().getBoundingClientRect().height - 36,
          i = 25 - r.node().getBoundingClientRect().width,
          n = [a, 0],
          s = Object(_chunk_72a4ae8e_js__WEBPACK_IMPORTED_MODULE_1__["t"])().domain(t).range(n),
          c = Object(_chunk_72a4ae8e_js__WEBPACK_IMPORTED_MODULE_1__["v"])(s).tickSizeInner(i + 18).ticks(6).tickFormat(function (e) {
        return "" + Object(_chunk_6e6f6eb8_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e);
      });
      return r.select(".y-axis").empty() ? _createYAxisElement(r).call(c) : r.select(".y-axis").call(c), r.selectAll(".tick text").attr("textLength", 25).attr("lengthAdjust", "spacing"), e.querySelector("g.y-axis");
    }

    function _createYAxisElement(e) {
      return e.append("g").attr("class", "y-axis");
    }

    var yAxisService = {
      renderYAxis: renderYAxis
    };
    /***/
  },

  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-b0e1ce66.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-b0e1ce66.js ***!
    \*************************************************************************************/

  /*! exports provided: a */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildChunkB0e1ce66Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return redrawChildren;
    });

    function redrawChildren(e) {
      for (var r = 0, a = e.querySelectorAll("*"); r < a.length; r++) {
        var o = a[r];
        0 === o.tagName.toLowerCase().indexOf("as-") && o.forceUpdate && o.forceUpdate();
      }
    }
    /***/

  },

  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-b62f03fa.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/build/chunk-b62f03fa.js ***!
    \*************************************************************************************/

  /*! exports provided: a */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5BuildChunkB62f03faJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return shadeOrBlend;
    });

    function shadeOrBlend(e, n, t) {
      if ("number" != typeof e || e < -1 || e > 1 || "string" != typeof n || "r" != n[0] && "#" != n[0] || t && "string" != typeof t) return null;

      var r = function r(e) {
        var n = e.length,
            t = {};

        if (n > 9) {
          if ((e = e.split(",")).length < 3 || e.length > 4) return null;
          t[0] = l(e[0].split("(")[1]), t[1] = l(e[1]), t[2] = l(e[2]), t[3] = e[3] ? parseFloat(e[3]) : -1;
        } else {
          if (8 == n || 6 == n || n < 4) return null;
          n < 6 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (n > 4 ? e[4] + "" + e[4] : "")), e = l(e.slice(1), 16), t[0] = e >> 16 & 255, t[1] = e >> 8 & 255, t[2] = 255 & e, t[3] = -1, 9 != n && 5 != n || (t[3] = i(t[2] / 255 * 1e4) / 1e4, t[2] = t[1], t[1] = t[0], t[0] = e >> 24 & 255);
        }

        return t;
      },
          l = parseInt,
          i = Math.round,
          s = n.length > 9,
          u = (s = "string" == typeof t ? t.length > 9 || "c" == t && !s : s, e < 0),
          a = (e = u ? -1 * e : e, t = t && "c" != t ? t : u ? "#000000" : "#FFFFFF", r(n)),
          o = r(t);

      return a && o ? s ? "rgb" + (a[3] > -1 || o[3] > -1 ? "a(" : "(") + i((o[0] - a[0]) * e + a[0]) + "," + i((o[1] - a[1]) * e + a[1]) + "," + i((o[2] - a[2]) * e + a[2]) + (a[3] < 0 && o[3] < 0 ? ")" : "," + (a[3] > -1 && o[3] > -1 ? i(1e4 * ((o[3] - a[3]) * e + a[3])) / 1e4 : o[3] < 0 ? a[3] : o[3]) + ")") : "#" + (4294967296 + 16777216 * i((o[0] - a[0]) * e + a[0]) + 65536 * i((o[1] - a[1]) * e + a[1]) + 256 * i((o[2] - a[2]) * e + a[2]) + (a[3] > -1 && o[3] > -1 ? i(255 * ((o[3] - a[3]) * e + a[3])) : o[3] > -1 ? i(255 * o[3]) : a[3] > -1 ? i(255 * a[3]) : 255)).toString(16).slice(1, a[3] > -1 || o[3] > -1 ? void 0 : -2) : null;
    }
    /***/

  },

  /***/
  "./node_modules/@carto/airship-components/dist/esm/es5/polyfills/tslib.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/@carto/airship-components/dist/esm/es5/polyfills/tslib.js ***!
    \********************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesCartoAirshipComponentsDistEsmEs5PolyfillsTslibJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    }); // REV: 9dd9aa322c893e5e0b3f1609b1126314ccf37bbb

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map