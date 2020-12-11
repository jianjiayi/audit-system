(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "PeeD":
/*!******************************************************************!*\
  !*** ./src/.umi-production/plugin-layout/Layout.tsx + 8 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/es/icons/LogoutOutlined.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/.umi-production/core/umiExports.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/pro-layout/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createClass.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createSuper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/inherits.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/route-utils/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/runtime/dist/index.esm.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/@umijs/renderer-react/dist/index.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/avatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/avatar/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/dropdown/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/dropdown/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/result/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/result/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/spin/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/spin/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/typography/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/typography/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("k1fw");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts + 19 modules
var umiExports = __webpack_require__("9kvl");

// EXTERNAL MODULE: ./node_modules/@umijs/runtime/dist/index.esm.js
var index_esm = __webpack_require__("LtsZ");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("PpiC");

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("55Ip");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/index.js + 103 modules
var es = __webpack_require__("Hx5s");

// EXTERNAL MODULE: ./src/.umi-production/plugin-layout/layout/layout/style.less
var style = __webpack_require__("rZaO");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("fWQN");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("mtLc");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("yKVA");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__("879j");

// EXTERNAL MODULE: ./node_modules/antd/es/result/style/index.js
var result_style = __webpack_require__("J+/v");

// EXTERNAL MODULE: ./node_modules/antd/es/result/index.js + 3 modules
var result = __webpack_require__("MoRW");

// EXTERNAL MODULE: ./node_modules/antd/es/typography/style/index.js
var typography_style = __webpack_require__("tU7J");

// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 9 modules
var typography = __webpack_require__("wFql");

// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/locale/zh-CN.ts
/* harmony default export */ var zh_CN = ({
  'layout.global.error.title': '出错了，可点击右下角进行反馈',
  'layout.global.error.stack': '错误堆栈'
});
// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/locale/en-US.ts
/* harmony default export */ var en_US = ({
  'layout.global.error.title': 'Something wrong, click on the bottom right corner to give us feedback',
  'layout.global.error.stack': 'Error stack'
});
// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/utils/intl.ts



var LOCALES;

(function (LOCALES) {
  LOCALES["zh-CN"] = "\u4E2D\u6587";
  LOCALES["en-US"] = "English";
})(LOCALES || (LOCALES = {}));

var LOCALES_ICON;

(function (LOCALES_ICON) {
  LOCALES_ICON["zh-CN"] = "\uD83C\uDDE8\uD83C\uDDF3";
  LOCALES_ICON["en-US"] = "\uD83C\uDDFA\uD83C\uDDF8";
})(LOCALES_ICON || (LOCALES_ICON = {}));

/** 处理默认 UI 的国际化函数 */
function formatMessage(_ref) {
  var id = _ref.id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value;
  var localeMessages = Object(umiExports["e" /* getLocale */])() === 'zh-CN' ? zh_CN : en_US;

  if (!umiExports["d" /* getIntl */]) {
    return localeMessages[id] || id;
  }

  var intl = Object(umiExports["d" /* getIntl */])();
  return intl.formatMessage({
    id: id
  }, value) || localeMessages[id] || id;
}
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/component/Exception/index.tsx







function backToHome() {
  umiExports["f" /* history */].push('/');
}

var Exception_Exception404 = function Exception404() {
  return /*#__PURE__*/react_default.a.createElement(result["a" /* default */], {
    status: "404",
    title: "404",
    subTitle: "\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",
    extra: /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      onClick: backToHome
    }, "\u8FD4\u56DE\u9996\u9875")
  });
};

var Exception_Exception500 = function Exception500() {
  return /*#__PURE__*/react_default.a.createElement(result["a" /* default */], {
    status: "500",
    title: "500",
    subTitle: "\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u51FA\u9519\u4E86",
    extra: /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      onClick: backToHome
    }, "\u8FD4\u56DE\u9996\u9875")
  });
};

var Exception_Exception403 = function Exception403() {
  return /*#__PURE__*/react_default.a.createElement(result["a" /* default */], {
    status: "403",
    title: "403",
    subTitle: "\u62B1\u6B49\uFF0C\u4F60\u65E0\u6743\u8BBF\u95EE\u8BE5\u9875\u9762",
    extra: /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      onClick: backToHome
    }, "\u8FD4\u56DE\u9996\u9875")
  });
};
/**
 * 异常路由处理组件
 * - 无权限
 * - 404
 */


var Exception_WithExceptionOpChildren = function WithExceptionOpChildren(props) {
  var children = props.children,
      currentPathConfig = props.currentPathConfig; // 404 现在应该很少会发生

  if (!currentPathConfig) {
    return /*#__PURE__*/react_default.a.createElement(Exception_Exception404, null);
  }
  /**
   * 这里是没有权限的意思
   */


  if (currentPathConfig.unAccessible || currentPathConfig.unaccessible) {
    return /*#__PURE__*/react_default.a.createElement(Exception_Exception403, null);
  }

  return children;
};


// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/component/ErrorBoundary/index.tsx














var ErrorBoundary_DefaultFallbackComponent = function DefaultFallbackComponent(_ref) {
  var componentStack = _ref.componentStack,
      error = _ref.error;
  return /*#__PURE__*/react["createElement"](result["a" /* default */], {
    status: "error",
    title: formatMessage({
      id: 'layout.global.error.title'
    }),
    subTitle: error.toString()
  }, /*#__PURE__*/react["createElement"](typography["a" /* default */].Paragraph, null, formatMessage({
    id: 'layout.global.error.stack'
  }), "\uFF1A", /*#__PURE__*/react["createElement"]("pre", null, componentStack)));
};

var ErrorBoundary_ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(ErrorBoundary, _React$Component);

  var _super = Object(createSuper["a" /* default */])(ErrorBoundary);

  Object(createClass["a" /* default */])(ErrorBoundary, null, [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  function ErrorBoundary(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      error: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
      var onError = this.props.onError;

      if (onError && typeof onError === 'function') {
        onError(error, info);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          restProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["children"]);

      var _this$state = this.state,
          hasError = _this$state.hasError,
          error = _this$state.error,
          info = _this$state.info;

      if (hasError) {
        return (// @ts-ignore
           false || /*#__PURE__*/react["createElement"](Exception_Exception500, null)
        );
      }

      return children;
    }
  }]);

  return ErrorBoundary;
}(react["Component"]);

ErrorBoundary_ErrorBoundary.defaultProps = {
  onError: null
};
/* harmony default export */ var component_ErrorBoundary = (ErrorBoundary_ErrorBoundary);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/index.js
var dropdown_style = __webpack_require__("qVdP");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__("jsC+");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/style/index.js
var spin_style = __webpack_require__("T2oS");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__("W9HT");

// EXTERNAL MODULE: ./node_modules/antd/es/avatar/style/index.js + 1 modules
var avatar_style = __webpack_require__("Telt");

// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 4 modules
var es_avatar = __webpack_require__("Tckk");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("lUTK");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 15 modules
var es_menu = __webpack_require__("BvKs");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LogoutOutlined.js + 1 modules
var LogoutOutlined = __webpack_require__("aIfO");

// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/layout/renderRightContent.tsx












function renderRightContent(runtimeLayout, loading, initialState, setInitialState) {
  if (runtimeLayout.rightRender) {
    return runtimeLayout.rightRender(initialState, setInitialState, runtimeLayout);
  }

  var menu = /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */], {
    className: "umi-plugin-layout-menu"
  }, /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */].Item, {
    key: "logout",
    onClick: function onClick() {
      return runtimeLayout.logout && (runtimeLayout === null || runtimeLayout === void 0 ? void 0 : runtimeLayout.logout(initialState));
    }
  }, /*#__PURE__*/react_default.a.createElement(LogoutOutlined["a" /* default */], null), "\u9000\u51FA\u767B\u5F55"));
  var avatar = /*#__PURE__*/react_default.a.createElement("span", {
    className: "umi-plugin-layout-action"
  }, /*#__PURE__*/react_default.a.createElement(es_avatar["a" /* default */], {
    size: "small",
    className: "umi-plugin-layout-avatar",
    src: initialState && initialState.avatar || 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    alt: "avatar"
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: "umi-plugin-layout-name"
  }, initialState && initialState.name));

  if (loading) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "umi-plugin-layout-right"
    }, /*#__PURE__*/react_default.a.createElement(spin["a" /* default */], {
      size: "small",
      style: {
        marginLeft: 8,
        marginRight: 8
      }
    }));
  }

  return initialState && /*#__PURE__*/react_default.a.createElement("div", {
    className: "umi-plugin-layout-right anticon"
  }, runtimeLayout.logout ? /*#__PURE__*/react_default.a.createElement(dropdown["a" /* default */], {
    overlay: menu,
    overlayClassName: "umi-plugin-layout-container"
  }, avatar) : avatar, umiExports["b" /* SelectLang */] && /*#__PURE__*/react_default.a.createElement(umiExports["b" /* SelectLang */], null));
}
// EXTERNAL MODULE: ./node_modules/@umijs/route-utils/es/index.js + 5 modules
var route_utils_es = __webpack_require__("GOef");

// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/component/logo.tsx


var logo_LogoIcon = function LogoIcon() {
  return /*#__PURE__*/react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-1",
    x1: "62.102%",
    x2: "108.197%",
    y1: "0%",
    y2: "37.864%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#4285EB"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#2EC7FF"
  })), /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-2",
    x1: "69.644%",
    x2: "54.043%",
    y1: "0%",
    y2: "108.457%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#29CDFF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "37.86%",
    stopColor: "#148EFF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#0A60FF"
  })), /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-3",
    x1: "69.691%",
    x2: "16.723%",
    y1: "-12.974%",
    y2: "117.391%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#FA816E"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "41.473%",
    stopColor: "#F74A5C"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#F51D2C"
  })), /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-4",
    x1: "68.128%",
    x2: "30.44%",
    y1: "-35.691%",
    y2: "114.943%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#FA8E7D"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "51.264%",
    stopColor: "#F74A5C"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#F51D2C"
  }))), /*#__PURE__*/react_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    transform: "translate(-20 -20)"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    transform: "translate(20 20)"
  }, /*#__PURE__*/react_default.a.createElement("g", null, /*#__PURE__*/react_default.a.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/react_default.a.createElement("g", null, /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-1)",
    d: "M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-2)",
    d: "M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z"
  })), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-3)",
    d: "M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z"
  })), /*#__PURE__*/react_default.a.createElement("ellipse", {
    cx: "100.519",
    cy: "100.437",
    fill: "url(#linearGradient-4)",
    rx: "23.6",
    ry: "23.581"
  }))))));
};

/* harmony default export */ var logo = (logo_LogoIcon);
// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/layout/layout/index.tsx




 // @ts-ignore







 // @ts-ignore




var getLayoutRender = function getLayoutRender(currentPathConfig) {
  var _currentPathConfig$la, _currentPathConfig$la2, _currentPathConfig$la3;

  var layoutRender = {};

  if (currentPathConfig === null || currentPathConfig === void 0 ? void 0 : currentPathConfig.hideFooter) {
    layoutRender.footerRender = false;
  }

  if ((currentPathConfig === null || currentPathConfig === void 0 ? void 0 : currentPathConfig.layout) == false) {
    layoutRender.pure = true;
    return layoutRender;
  }

  if (currentPathConfig === null || currentPathConfig === void 0 ? void 0 : (_currentPathConfig$la = currentPathConfig.layout) === null || _currentPathConfig$la === void 0 ? void 0 : _currentPathConfig$la.hideMenu) {
    layoutRender.menuRender = false;
  }

  if (currentPathConfig === null || currentPathConfig === void 0 ? void 0 : (_currentPathConfig$la2 = currentPathConfig.layout) === null || _currentPathConfig$la2 === void 0 ? void 0 : _currentPathConfig$la2.hideFooter) {
    layoutRender.footerRender = false;
  }

  if (currentPathConfig === null || currentPathConfig === void 0 ? void 0 : (_currentPathConfig$la3 = currentPathConfig.layout) === null || _currentPathConfig$la3 === void 0 ? void 0 : _currentPathConfig$la3.hideNav) {
    layoutRender.headerRender = false;
  }

  return layoutRender;
};

var layout_BasicLayout = function BasicLayout(props) {
  var children = props.children,
      userConfig = props.userConfig,
      location = props.location,
      route = props.route,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["children", "userConfig", "location", "route"]);

  var initialInfo = umiExports["k" /* useModel */] && Object(umiExports["k" /* useModel */])('@@initialState') || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  var initialState = initialInfo.initialState,
      loading = initialInfo.loading,
      setInitialState = initialInfo.setInitialState;

  var _useState = Object(react["useState"])({}),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      currentPathConfig = _useState2[0],
      setCurrentPathConfig = _useState2[1];

  Object(react["useEffect"])(function () {
    var _props$route;

    var _transformRoute = Object(route_utils_es["c" /* transformRoute */])((props === null || props === void 0 ? void 0 : (_props$route = props.route) === null || _props$route === void 0 ? void 0 : _props$route.routes) || [], undefined, undefined, true),
        menuData = _transformRoute.menuData; // 动态路由匹配


    var currentPathConfig = Object(route_utils_es["b" /* getMatchMenu */])(location.pathname, menuData).pop();
    setCurrentPathConfig(currentPathConfig || {});
  }, [location.pathname]); // layout 是否渲染相关

  var layoutRestProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
    itemRender: function itemRender(route) {
      return /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: route.path
      }, route.breadcrumbName);
    }
  }, userConfig), restProps), getLayoutRender(currentPathConfig));

  return /*#__PURE__*/react_default.a.createElement(es["a" /* default */], Object(esm_extends["a" /* default */])({
    route: route,
    location: location,
    title: userConfig.name || userConfig.title,
    className: "umi-plugin-layout-main",
    navTheme: "dark",
    siderWidth: 256,
    onMenuHeaderClick: function onMenuHeaderClick(e) {
      e.stopPropagation();
      e.preventDefault();
      umiExports["f" /* history */].push('/');
    },
    menu: {
      locale: userConfig.locale
    } // 支持了一个 patchMenus，其实应该用 menuDataRender
    ,
    menuDataRender: userConfig.patchMenus ? function (menuData) {
      return userConfig.patchMenus(menuData, initialInfo);
    } : undefined,
    formatMessage: formatMessage,
    logo: logo,
    menuItemRender: function menuItemRender(menuItemProps, defaultDom) {
      if (menuItemProps.isUrl || menuItemProps.children) {
        return defaultDom;
      }

      if (menuItemProps.path) {
        return /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
          to: menuItemProps.path
        }, defaultDom);
      }

      return defaultDom;
    },
    disableContentMargin: true,
    fixSiderbar: true,
    fixedHeader: true
  }, layoutRestProps, {
    rightContentRender: // === false 应该关闭这个功能
    (layoutRestProps === null || layoutRestProps === void 0 ? void 0 : layoutRestProps.rightContentRender) !== false && function (layoutProps) {
      var dom = renderRightContent(userConfig, loading, initialState, setInitialState);

      if (layoutRestProps.rightContentRender) {
        return layoutRestProps.rightContentRender(layoutProps, dom, {
          userConfig: userConfig,
          loading: loading,
          initialState: initialState,
          setInitialState: setInitialState
        });
      }

      return dom;
    }
  }), /*#__PURE__*/react_default.a.createElement(component_ErrorBoundary, null, /*#__PURE__*/react_default.a.createElement(Exception_WithExceptionOpChildren, {
    currentPathConfig: currentPathConfig
  }, userConfig.childrenRender ? userConfig.childrenRender(children) : children)));
};

/* harmony default export */ var layout = (layout_BasicLayout);
// CONCATENATED MODULE: ./src/.umi-production/plugin-layout/Layout.tsx


// @ts-nocheck




/* harmony default export */ var Layout = __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      runtimeConfig = _useState2[0],
      setRuntimeConfig = _useState2[1];

  var initialInfo = umiExports["k" /* useModel */] && Object(umiExports["k" /* useModel */])("@@initialState") || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  Object(react["useEffect"])(function () {
    var useRuntimeConfig = umiExports["g" /* plugin */].applyPlugins({
      key: "layout",
      type: index_esm["ApplyPluginsType"].modify,
      initialValue: initialInfo
    }) || {};

    if (useRuntimeConfig instanceof Promise) {
      useRuntimeConfig.then(function (config) {
        setRuntimeConfig(config);
      });
      return;
    }

    setRuntimeConfig(useRuntimeConfig);
  }, [initialInfo === null || initialInfo === void 0 ? void 0 : initialInfo.initialState]);

  var userConfig = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, {
    'name': 'ant-design-pro',
    'theme': 'PRO',
    'locale': false,
    'showBreadcrumb': true,
    'navTheme': 'dark',
    'primaryColor': '#1890ff',
    'layout': 'side',
    'contentWidth': 'Fluid',
    'fixedHeader': false,
    'fixSiderbar': true,
    'colorWeak': false,
    'menu': {
      'locale': false
    },
    'title': '审核系统',
    'pwa': false,
    'iconfontUrl': ''
  }), runtimeConfig || {});

  if (!runtimeConfig) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(layout, Object(objectSpread2["a" /* default */])({
    userConfig: userConfig
  }, props));
});

/***/ }),

/***/ "rZaO":
/*!********************************************************************!*\
  !*** ./src/.umi-production/plugin-layout/layout/layout/style.less ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);