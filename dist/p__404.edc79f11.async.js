(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "pssB":
/*!***************************!*\
  !*** ./src/pages/404.jsx ***!
  \***************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/.umi-production/core/routes.ts (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_result_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/result/style */ "J+/v");
/* harmony import */ var antd_es_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/result */ "MoRW");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style */ "+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "2/Rp");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! umi */ "9kvl");







var NoFoundPage = function NoFoundPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_result__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    status: "404",
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
    extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      type: "primary",
      onClick: function onClick() {
        return umi__WEBPACK_IMPORTED_MODULE_5__[/* history */ "f"].push('/');
      }
    }, "Back Home")
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NoFoundPage);

/***/ })

}]);