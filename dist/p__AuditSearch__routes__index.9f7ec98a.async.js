(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "1W/9":
/*!**************************************************************!*\
  !*** ./node_modules/rc-util/es/PortalWrapper.js + 2 modules ***!
  \**************************************************************/
/*! exports provided: getOpenCount, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Dom/canUseDom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Portal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/getScrollBarSize.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/raf.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: getOpenCount

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__("wgJM");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Portal.js
var Portal = __webpack_require__("QC+M");

// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__("qx4F");

// CONCATENATED MODULE: ./node_modules/rc-util/es/setStyle.js
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ var es_setStyle = (setStyle);
// CONCATENATED MODULE: ./node_modules/rc-util/es/switchScrollingEffect.js



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ var switchScrollingEffect = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    es_setStyle(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = Object(getScrollBarSize["a" /* default */])();

  if (scrollBarSize) {
    cacheStyle = es_setStyle({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__("MNnm");

// CONCATENATED MODULE: ./node_modules/rc-util/es/PortalWrapper.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/* eslint-disable no-underscore-dangle,react/require-default-props */








var openCount = 0;
var supportDom = Object(canUseDom["a" /* default */])();
/** @private Test usage only */

function getOpenCount() {
  return  false ? undefined : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper_PortalWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PortalWrapper, _React$Component);

  var _super = _createSuper(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    _classCallCheck(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.componentRef = react["createRef"]();

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren; // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.


      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */


    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect(); // Must be set after switchScrollingEffect

        cacheOverflow = es_setStyle({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        es_setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };

    var visible = props.visible,
        getContainer = props.getContainer;

    if (supportDom && getParent(getContainer) === document.body) {
      openCount = visible ? openCount + 1 : openCount;
    }

    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.attachToParent()) {
        this.rafId = Object(raf["a" /* default */])(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props = this.props,
          visible = _this$props.visible,
          getContainer = _this$props.getContainer;

      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      raf["a" /* default */].cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          forceRender = _this$props2.forceRender,
          visible = _this$props2.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = react["createElement"](Portal["a" /* default */], {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          _self = _ref._self;
      var visible = props.visible,
          getContainer = props.getContainer;

      if (prevProps) {
        var prevVisible = prevProps.visible,
            prevGetContainer = prevProps.getContainer;

        if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
          openCount = visible && !prevVisible ? openCount + 1 : openCount - 1;
        }

        var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

        if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
          _self.removeCurrentContainer();
        }
      }

      return {
        prevProps: props
      };
    }
  }]);

  return PortalWrapper;
}(react["Component"]);

/* harmony default export */ var es_PortalWrapper = __webpack_exports__["a"] = (PortalWrapper_PortalWrapper);

/***/ }),

/***/ "1wcP":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/modal/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2qtc":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/modal/style/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ "cIOH");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "1wcP");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style */ "+L6B");

 // style dependencies



/***/ }),

/***/ "3k04":
/*!************************************************************!*\
  !*** ./src/components/BaseTable/index.module.less?modules ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___9kxO4"};

/***/ }),

/***/ "5H4c":
/*!***********************************************************!*\
  !*** ./src/components/BaseForm/index.module.less?modules ***!
  \***********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___1pF8t","button-group":"button-group___r4vDn","button-group-center":"button-group-center___2Bbzj"};

/***/ }),

/***/ "5KP8":
/*!*******************************************!*\
  !*** ./src/components/BaseTable/index.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_es_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/table/style */ "g9YV");
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/table */ "wCAj");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "k1fw");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "PpiC");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_module_less_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.less?modules */ "3k04");
/* harmony import */ var _index_module_less_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_less_modules__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);






/* eslint-disable import/order */

/* eslint-disable object-shorthand */

/* eslint-disable no-param-reassign */

/* eslint-disable spaced-comment */

/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable no-func-assign */





function BaseTable(props, ref) {
  // 存储选中元素
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState4 = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1]; // 向父组件暴露的方法


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useImperativeHandle"])(ref, function () {
    return {
      selectedRowKeys: selectedRowKeys,
      setSelectedRowKeys: setSelectedRowKeys,
      selectedRows: selectedRows,
      setSelectedRows: setSelectedRows
    };
  });

  var className = props.className,
      columns = props.columns,
      dataSource = props.dataSource,
      selectionType = props.selectionType,
      pagination = props.pagination,
      onPageChg = props.onPageChg,
      children = props.children,
      selectedKeys = props.selectedKeys,
      rest = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props, ["className", "columns", "dataSource", "selectionType", "pagination", "onPageChg", "children", "selectedKeys"]);

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setSelectedRowKeys(selectedKeys);
  }, [selectedKeys]); // table 单选、多选配置

  var rowSelection = {
    type: 'checkbox',
    selectedRowKeys: selectedRowKeys,
    onChange: function onChange(selectedRowKeys, selectedRows) {
      // console.log(selectedRowKeys, selectedRows)
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    onSelectAll: function onSelectAll(selected, selectedRows) {
      console.log(selected, selectedRows); // setSelectedRowKeys(selectedRows);

      setSelectedRows(selectedRows);
    }
  };
  var rowSelections = Boolean;

  if (selectionType === false || selectionType === null) {
    rowSelections = false;
  } else if (selectionType === 'checkbox') {
    rowSelection.type = 'checkbox';
  } else {
    rowSelection.type = 'radio';
  } //table 合并数组单元格


  var createNewArr = function createNewArr(data) {
    if (!data || data.length === 0) return [];
    return data.reduce(function (result, item) {
      //首先将name字段作为新数组result取出
      if (result.indexOf(item.name) < 0) {
        result.push(item.name);
      }

      return result;
    }, []).reduce(function (result, name) {
      //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
      var children = data.filter(function (item) {
        return item.name === name;
      });
      result = result.concat(children.map(function (item, index) {
        return Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, item), {}, {
          rowSpan: index === 0 ? children.length : 0 //将第一行数据添加rowSpan字段

        });
      }));
      return result;
    }, []);
  };

  var footer = function footer() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a['right-btn']
    }, children);
  }; // table配置


  var tableProps = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    columns: columns,
    // dataSource,
    dataSource: createNewArr(dataSource),
    pagination: pagination,
    rowKey: function rowKey(record, index) {
      return record.id || index;
    },
    rowSelection: rowSelections ? rowSelection : null,
    onChange: onPageChg,
    footer: children && !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(dataSource) ? footer : null
  }, rest);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_index_module_less_modules__WEBPACK_IMPORTED_MODULE_7___default.a.container, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], tableProps));
}

BaseTable = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(BaseTable);
/* harmony default export */ __webpack_exports__["a"] = (BaseTable);

/***/ }),

/***/ "6ZGt":
/*!********************************!*\
  !*** ./src/pages/constants.js ***!
  \********************************/
/*! exports provided: UPLOAD_FILE_URL, errorImg, acceptType, maxFileSize, colorList, dateFormat, contentType, queueType, keepDays, queueStatus, rightStatus, roleStatus, auditStatus, runningStatus, orderFieldMap, orderTypeMap, auditResult, auditResult1, passReason, rejectReason */
/*! exports used: UPLOAD_FILE_URL, acceptType, auditResult, auditResult1, contentType, dateFormat, errorImg, keepDays, maxFileSize, orderFieldMap, orderTypeMap, passReason, queueStatus, queueType, rejectReason, rightStatus, roleStatus, runningStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPLOAD_FILE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return errorImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return acceptType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return maxFileSize; });
/* unused harmony export colorList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return contentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return queueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return keepDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return queueStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return rightStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return roleStatus; });
/* unused harmony export auditStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return runningStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return orderFieldMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return orderTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return auditResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return auditResult1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return passReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return rejectReason; });
/* eslint-disable import/newline-after-import */

/* eslint-disable global-require */
// import { BASEURL } from '@/config';
var BASEURL = ''; // 上传文件路径

var UPLOAD_FILE_URL = "".concat(BASEURL, "/audit/file/upload/image");
var errorImg = __webpack_require__(/*! @/assets/error.png */ "H+gj");
var acceptType = ['jpg', 'png', 'jpeg', 'gif'];
var maxFileSize = 5; // 系统使用的随机颜色

var colorList = ['#7eacea', '#e15777', '#95ea71', '#ea9b4f', '#7577df', '#be72d8', '#6633FF', '#6600CC', '#006633', '#993333', '#FF9900', '#9999FF']; // 时间类型

var dateFormat = 'YYYY-MM-DD HH:mm:ss'; // 内容类型

var contentType = {
  '': '全部',
  NEWS: '图文',
  VIDEO: '视频',
  AUDIO: '音频',
  IMAGE: '图集',
  TEXT: '纯文本'
}; // 队列机制

var queueType = {
  '': '全部',
  1: '先审后发',
  2: '先发后审',
  3: '免审'
}; // 队列保存时长

var keepDays = {
  '': '全部',
  1: '1天',
  3: '3天',
  7: '7天',
  15: '15天',
  30: '30天',
  60: '60天',
  90: '90天'
}; // 队列状态

var queueStatus = {
  '': '全部',
  0: '启用',
  1: '停用'
}; // 权限状态

var rightStatus = {
  '': '全部',
  0: '离线',
  1: '在线',
  2: '注销'
}; // 角色状态

var roleStatus = {
  '': '全部',
  0: '有效',
  1: '注销'
}; // 审核状态

var auditStatus = {
  '': '全部',
  1: '待审核',
  2: '审核通过',
  3: '审核未通过'
}; // 上架状态

var runningStatus = {
  '': '全部',
  ONLINE: '上架',
  OFFLINE: '下架'
}; // 统计排序

var orderFieldMap = {
  '': '全部',
  dt: '时间',
  entry_queue_count: '入审量',
  audit_count: '审核量',
  audit_passed_count: '审核通过量'
}; // 统计排序

var orderTypeMap = {
  desc: '降序',
  asc: '升序'
}; // 审核结果

var auditResult = {
  '': '全部',
  INIT: '待审',
  PENDING: '已领取',
  PASS: '通过',
  REJECT: '删除'
}; // 审核结果

var auditResult1 = {
  '': '全部',
  '审核通过': '审核通过',
  '审核未通过': '审核未通过'
}; // 文章审核通过&未通过原因

var passReason = ['去杂不净', '广告'];
var rejectReason = ['文章质量差', '广告', '软文', '封图', '去杂不净', '抓取不全/错误', '版权问题', '其他'];

/***/ }),

/***/ "9kV3":
/*!***********************************************************!*\
  !*** ./src/pages/AuditSearch/routes/index.js + 1 modules ***!
  \***********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/AuditSearch/components/viewlog.module.less?modules (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/AuditSearch/routes/index.module.less?modules (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/.umi-production/core/umiExports.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/BaseForm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/BaseTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/WrapAuth/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/constants.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tag/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tag/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tooltip/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tooltip/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: ./node_modules/antd/es/tag/style/index.js
var style = __webpack_require__("+BJd");

// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__("mr32");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("2qtc");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__("kLXV");

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("miYZ");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__("tsqr");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("5Dmo");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var tooltip = __webpack_require__("3S7+");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("5NDa");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__("5rEg");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("y8nQ");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 14 modules
var es_form = __webpack_require__("Vl3Y");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("k1fw");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("OaEy");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 25 modules
var es_select = __webpack_require__("2fM7");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("LvDl");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts + 19 modules
var umiExports = __webpack_require__("9kvl");

// EXTERNAL MODULE: ./src/components/BaseForm/index.js + 4 modules
var BaseForm = __webpack_require__("zLEZ");

// EXTERNAL MODULE: ./src/components/BaseTable/index.js
var BaseTable = __webpack_require__("5KP8");

// EXTERNAL MODULE: ./src/pages/AuditSearch/components/viewlog.module.less?modules
var viewlog_modulemodules = __webpack_require__("QXD2");
var viewlog_modulemodules_default = /*#__PURE__*/__webpack_require__.n(viewlog_modulemodules);

// CONCATENATED MODULE: ./src/pages/AuditSearch/components/viewlog.js




/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-func-assign */

/* eslint-disable spaced-comment */

/* eslint-disable import/no-unresolved */





function ViewLogRender(props, ref) {
  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      dataSource = _useState4[0],
      setDataSource = _useState4[1]; // 向父组件暴露的方法


  Object(react["useImperativeHandle"])(ref, function () {
    return {
      setModalVisible: setModalVisible,
      //设置modal状态
      setDataSource: setDataSource
    };
  });
  var modalProps = {
    title: "\u5BA1\u6838\u64CD\u4F5C\u8BB0\u5F55",
    footer: null,
    width: 820,
    visible: modalVisible,
    bodyStyle: {
      padding: 0
    },
    destroyOnClose: true,
    onCancel: function onCancel() {
      setModalVisible(false);
    }
  };
  var tableProps = {
    className: viewlog_modulemodules_default.a['table-container'],
    // 类型
    selectionType: null,
    // 表头
    columns: [{
      title: '操作人',
      dataIndex: 'auditorName'
    }, {
      title: '审核操作',
      align: 'center',
      dataIndex: 'auditStatus',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("a", null, text);
      }
    }, {
      title: '任务状态',
      align: 'center',
      dataIndex: 'event',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("a", null, text);
      }
    }, {
      title: '操作时间',
      align: 'center',
      dataIndex: 'logTime',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("a", null, text);
      }
    }],
    dataSource: dataSource
  };
  return /*#__PURE__*/react_default.a.createElement(modal["a" /* default */], modalProps, /*#__PURE__*/react_default.a.createElement(BaseTable["a" /* default */], tableProps));
}

ViewLogRender = /*#__PURE__*/Object(react["forwardRef"])(ViewLogRender);
/* harmony default export */ var viewlog = (ViewLogRender);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("+n12");

// EXTERNAL MODULE: ./src/pages/constants.js
var constants = __webpack_require__("6ZGt");

// EXTERNAL MODULE: ./src/components/WrapAuth/index.js
var WrapAuth = __webpack_require__("yAXW");

// EXTERNAL MODULE: ./src/pages/AuditSearch/routes/index.module.less?modules
var index_modulemodules = __webpack_require__("FMO7");
var index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(index_modulemodules);

// CONCATENATED MODULE: ./src/pages/AuditSearch/routes/index.js


















/* eslint-disable import/order */

/* eslint-disable react/jsx-boolean-value */

/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-underscore-dangle */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable consistent-return */

/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable no-param-reassign */

/* eslint-disable spaced-comment */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-unused-vars */

/* eslint-disable eqeqeq */

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable array-callback-return */





 // import { renderSelect } from '@components/BasicForm/BaseForm';





var Option = es_select["a" /* default */].Option;
delete constants["e" /* contentType */][''];

function AuditSearch(props) {
  var _useModel = Object(umiExports["k" /* useModel */])('@@initialState'),
      _useModel$initialStat = _useModel.initialState.currentUser,
      currentUser = _useModel$initialStat === void 0 ? {} : _useModel$initialStat;

  var tableRef = Object(react["useRef"])(null);
  var formRef = Object(react["useRef"])(null);
  var viewRecordRef = Object(react["useRef"])(null); // 内容类型

  var _useState = Object(react["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      cType = _useState2[0],
      setCType = _useState2[1]; // 搜索表单参数值


  var QUERY_FROM_SEARCH = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {};
  var dispatch = props.dispatch,
      _props$Global = props.Global,
      firstCategory = _props$Global.firstCategory,
      secondCategory = _props$Global.secondCategory,
      thirdCategory = _props$Global.thirdCategory,
      _props$business = props.business,
      business = _props$business === void 0 ? currentUser.business || {} : _props$business,
      _props$Search = props.Search,
      query = _props$Search.query,
      loading = _props$Search.loading,
      queueMap = _props$Search.queueMap,
      dataSource = _props$Search.dataSource,
      pagination = _props$Search.pagination;
  Object(react["useEffect"])(function () {
    var params = formRef.current.getFieldsValue();
    var query = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {}; // 获取缓存中查询条件

    console.log('query', query);
    formRef.current.setFieldsValue(Object(objectSpread2["a" /* default */])({}, query));
    dispatch({
      type: 'Search/init',
      payload: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, params), query)
    });
  }, [dispatch]); // 表单默认值

  var staticFormValues = {
    businessId: utils["a" /* ExObject */].getFirstValue(business),
    type: 'NEWS',
    queue: '',
    resultStatus: '',
    status: ''
  }; // console.log(updateFormValues, _.isEmpty(JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH'))))

  var selectCategoryFun = function selectCategoryFun(id, name) {
    if (name === 'firstCategoryId') {
      formRef.current.resetFields(['secondCategoryId', 'thirdCategoryId']);
      formRef.current.setFieldsValue({
        secondCategoryId: null,
        thirdCategoryId: null
      });
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: id,
          type: cType
        }
      });
    } else {
      formRef.current.resetFields(['thirdCategoryId']);
      formRef.current.setFieldsValue({
        thirdCategoryId: null
      });
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id: id,
          type: cType
        }
      });
    }
  }; // 多条搜索表单配置


  var searchFormProps = {
    className: index_modulemodules_default.a['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/search',
      perms: 'news:select'
    },
    dataSource: [{
      label: '业务线',
      type: 'SELECT',
      name: 'businessId',
      // initialValue: ExObject.getFirstValue(business),
      map: business,
      onChange: function onChange(e) {
        console.log('e', e);
        if (!e) return; // 更新队列

        formRef.current.setFieldsValue({
          queue: ''
        });
        dispatch({
          type: 'Search/getQueue',
          payload: {
            bid: e
          }
        });
      }
    }, {
      label: '入审时间',
      name: 'datatime',
      type: 'DateTimeStartEnd'
    }, {
      label: '内容类型',
      type: 'SELECT',
      name: 'type',
      // initialValue: 'NEWS',
      map: constants["e" /* contentType */],
      onChange: function onChange(e) {
        console.log(e);
        setCType(e);
        console.log(formRef.current);
        formRef.current.setFieldsValue({
          firstCategoryId: null,
          secondCategoryId: null,
          thirdCategoryId: null
        });
        dispatch({
          type: 'Global/getFirstCategory',
          payload: {
            id: 0,
            type: e
          }
        });
      }
    }, {
      label: '内容分类',
      name: 'category',
      type: 'MultilevelCategories',
      firstCategory: firstCategory,
      secondCategory: secondCategory,
      thirdCategory: thirdCategory,
      onChange: function onChange(values, name) {
        selectCategoryFun(values[name], name);
      }
    }, {
      label: '所属队列',
      type: 'SELECT',
      name: 'queue',
      // initialValue: '',
      map: Object(objectSpread2["a" /* default */])({
        '': '全部'
      }, queueMap)
    }, {
      label: '审核状态',
      type: 'SELECT',
      name: 'resultStatus',
      // initialValue: '',
      map: constants["c" /* auditResult */]
    }, {
      label: '是否上架',
      type: 'SELECT',
      name: 'status',
      // initialValue: '',
      map: constants["r" /* runningStatus */]
    }, {
      label: '来源',
      name: 'source'
    }, {
      label: '采集源ID',
      name: 'crawlSourceId'
    }, {
      label: '采集源',
      name: 'crawlSource'
    }, {
      label: '筛选',
      name: 'filter',
      isSpecial: true,
      itemRender: /*#__PURE__*/react_default.a.createElement(input["a" /* default */].Group, {
        compact: true
      }, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
        name: ['filter', 'key'],
        noStyle: true,
        initialValue: "title"
      }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], {
        style: {
          width: '30%'
        }
      }, /*#__PURE__*/react_default.a.createElement(Option, {
        value: "title"
      }, "\u6807\u9898"), /*#__PURE__*/react_default.a.createElement(Option, {
        value: "id"
      }, "ID"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
        name: ['filter', 'value'],
        noStyle: true
      }, /*#__PURE__*/react_default.a.createElement(input["a" /* default */], {
        placeholder: "\u8BF7\u8F93\u5165",
        style: {
          width: '70%'
        }
      })))
    }],
    formValues: !lodash_default.a.isEmpty(QUERY_FROM_SEARCH) && Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, QUERY_FROM_SEARCH), staticFormValues) || staticFormValues,
    onReset: function onReset() {
      var params = formRef.current.getFieldsValue();
      dispatch({
        type: 'Search/init',
        payload: Object(objectSpread2["a" /* default */])({}, params)
      });
    },
    onSubmit: function onSubmit(formValues) {
      // 取消table选中的数据
      tableRef.current.setSelectedRowKeys(null); // 格式化分类

      if (!lodash_default.a.isEmpty(formValues.category)) {
        var arr = Object.values(formValues.category);
        arr = arr.filter(function (item) {
          return item !== undefined;
        });
        formValues.category = arr.join('/');
      }

      ; // 整理时间

      if (!lodash_default.a.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(constants["f" /* dateFormat */]);
        formValues.endTime = formValues.datatime[1].format(constants["f" /* dateFormat */]);
      }

      delete formValues.datatime; // 格式化筛选条件

      formValues[formValues.filter.key] = formValues.filter.value;
      delete formValues.filter;
      console.log('formValues', formValues);
      dispatch({
        type: 'Search/getNewsList',
        payload: formValues
      });
    }
  }; // 格式化所属队列

  var getQueueText = function getQueueText(data) {
    var str = '';

    if (!lodash_default.a.isEmpty(data)) {
      data.map(function (item, index) {
        if (index === data.length - 1) {
          str += item.name;
        } else {
          str += "".concat(item.name, ",");
        }
      });
    }

    var text = str.length > 20 ? "".concat(str.slice(0, 20), "...") : str;
    return /*#__PURE__*/react_default.a.createElement(tooltip["a" /* default */], {
      title: str
    }, /*#__PURE__*/react_default.a.createElement("a", null, text));
  }; // 列表配置


  var tableProps = {
    // 类型
    selectionType: 'checkbox',
    // checkbox or radio or null||false
    // 表头
    columns: [{
      title: '标题',
      dataIndex: 'title',
      align: 'center',
      width: '150px',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement(tooltip["a" /* default */], {
          title: text,
          destroyTooltipOnHide: true,
          getPopupContainer: true
        }, /*#__PURE__*/react_default.a.createElement("a", null, text.length > 15 ? "".concat(text.slice(0, 15), "...") : text));
      }
    }, {
      title: 'ID',
      align: 'center',
      dataIndex: 'articleId',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("span", null, text);
      }
    }, {
      title: '分类',
      align: 'center',
      dataIndex: 'categorys'
    }, {
      title: '来源',
      align: 'center',
      dataIndex: 'source'
    }, {
      title: '采集源ID',
      align: 'center',
      dataIndex: 'crawlSourceId'
    }, {
      title: '采集源',
      align: 'center',
      dataIndex: 'crawlSource'
    }, {
      title: '所属队列',
      align: 'center',
      dataIndex: 'queues',
      render: function render(text) {
        return getQueueText(text);
      }
    }, {
      title: '封面图',
      align: 'center',
      dataIndex: 'cover',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          style: {
            display: 'table-cell',
            verticalAlign: 'middle'
          }
        }, text && /*#__PURE__*/react_default.a.createElement("img", {
          style: {
            width: '120px',
            height: '90px'
          },
          src: text
        }));
      }
    }, {
      title: '是否上架',
      width: '100px',
      align: 'center',
      dataIndex: 'status',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("span", null, text);
      }
    }, {
      title: '审核状态',
      align: 'center',
      width: '100px',
      dataIndex: 'resultStatus',
      render: function render(text) {
        return /*#__PURE__*/react_default.a.createElement("span", null, text);
      }
    }, {
      title: '入审时间',
      align: 'center',
      dataIndex: 'createTime'
    }, {
      title: '操作',
      width: '40px',
      align: 'center',
      render: function render(r) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: index_modulemodules_default.a.tableaction
        }, /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
          pathUrl: "/search",
          perms: "news:get",
          type: "primary",
          size: "small",
          text: "\u9886\u5BA1",
          onClick: function onClick() {
            return goDetails(r);
          }
        }), /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
          pathUrl: "/search",
          perms: "queue:add",
          size: "small",
          type: "dashed",
          text: "\u52A0\u961F\u5217",
          onClick: function onClick() {
            return openAddQueueModal(r);
          }
        }), /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
          pathUrl: "/search",
          perms: "history:select",
          size: "small",
          text: "\u64CD\u4F5C\u8BB0\u5F55",
          onClick: function onClick() {
            return getViewRecord(r.id);
          }
        }));
      }
    }],
    loading: loading,
    dataSource: dataSource,
    pagination: pagination,
    onPageChg: function onPageChg(page) {
      // console.log(page)
      dispatch({
        type: 'Search/getNewsList',
        payload: {
          pageNum: page.current,
          pageSize: page.pageSize
        }
      });
      tableRef.current.setSelectedRowKeys(null);
      tableRef.current.setSelectedRows(null);
    }
  }; // 领审操作

  var goDetails = function goDetails(data) {
    var businessId = data.businessId,
        id = data.id,
        queues = data.queues,
        type = data.type;

    var _ref = lodash_default.a.isEmpty(queues) ? '' : queues[0],
        queueType = _ref.queueType,
        queue = _ref.id;

    var params = {
      routersource: 'search',
      businessId: businessId,
      id: id,
      queue: queue,
      queueType: queueType,
      type: type
    };
    console.log(params);

    try {
      dispatch({
        type: 'CDetails/getNewsGetTask',
        payload: params,
        callback: function callback(data) {
          if (lodash_default.a.isEmpty(data)) {
            return message["b" /* default */].error('当前文章不可以领取');
          }

          dispatch({
            type: 'CDetails/save',
            payload: {
              query: params
            }
          }); // sessionStorage.setItem('$QUERY', params);

          sessionStorage.setItem('$QUERY', JSON.stringify(params));
          sessionStorage.setItem('$QUERY_FROM_SEARCH', JSON.stringify(query));
          umiExports["f" /* history */].push({
            pathname: '/search/cdetails',
            query: {
              isBack: true
            }
          });
        }
      });
    } catch (e) {
      console.log('e', e);
    }
  }; // 加队列操作


  var openAddQueueModal = function openAddQueueModal(data) {
    var businessId = data.businessId,
        id = data.id,
        type = data.type;
    dispatch({
      type: 'Search/getNewsReAduit',
      payload: {
        businessId: businessId,
        id: id,
        type: type
      },
      callback: function callback(code, data) {
        if (code === 200) {
          if (data == 1) {
            message["b" /* default */].success('加入复审队列成功');
          } else {
            message["b" /* default */].warning('该文章已经在复审队列，请勿重复添加');
          }
        } else {
          message["b" /* default */].error('加入复审队列失败');
        }
      }
    });
  }; // 查看操作记录


  var getViewRecord = function getViewRecord(id) {
    dispatch({
      type: 'Search/getNewsLog',
      payload: {
        id: id
      },
      callback: function callback(data) {
        viewRecordRef.current.setModalVisible(true);
        viewRecordRef.current.setDataSource(data);
      }
    });
  }; // 批量审核操作


  var batchAudit = function batchAudit(status) {
    var pass = status; // console.log(tableRef.current.selectedRows)

    var selectedRows = tableRef.current.selectedRows; // 获取选中的列表

    if (lodash_default.a.isEmpty(selectedRows)) return message["b" /* default */].error('请勾选文章列表后在操作'); // 处理选中文章数据

    var paramsList = [];
    selectedRows.map(function (item) {
      var id = item.id;
      var firstQueue = item.queues[0];
      var queueInfo = {
        bid: firstQueue.bid,
        id: firstQueue.id,
        queueType: firstQueue.queueType,
        type: firstQueue.type
      };
      paramsList.push({
        id: id,
        queueInfo: queueInfo
      });
    }); // console.log(paramsList)

    dispatch({
      type: 'Search/batchAudit',
      payload: {
        pass: pass,
        paramsList: paramsList
      },
      callback: function callback(data) {
        tableRef.current.setSelectedRowKeys(null);
        tableRef.current.setSelectedRows(null);
        if (pass && lodash_default.a.isEmpty(data._2) || !pass && lodash_default.a.isEmpty(data._1)) return; // 温馨提示

        modal["a" /* default */].warning({
          title: '温馨提示',
          content: /*#__PURE__*/react_default.a.createElement("div", null, pass ? /*#__PURE__*/react_default.a.createElement("div", {
            className: ""
          }, /*#__PURE__*/react_default.a.createElement("p", null, "\u4EE5\u4E0B\u6587\u7AE0id\u6CA1\u6709\u64CD\u4F5C\u6210\u529F"), data._2.map(function (item) {
            return /*#__PURE__*/react_default.a.createElement(tag["a" /* default */], {
              key: item
            }, item);
          })) : /*#__PURE__*/react_default.a.createElement("div", {
            className: ""
          }, /*#__PURE__*/react_default.a.createElement("p", null, "\u4EE5\u4E0B\u6587\u7AE0id\u6CA1\u6709\u64CD\u4F5C\u6210\u529F"), data._1.map(function (item) {
            return /*#__PURE__*/react_default.a.createElement(tag["a" /* default */], {
              key: item
            }, item);
          }))),
          onOk: function onOk() {}
        });
      }
    });
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(BaseForm["a" /* default */], Object(esm_extends["a" /* default */])({}, searchFormProps, {
    pRef: formRef
  })), /*#__PURE__*/react_default.a.createElement(BaseTable["a" /* default */], Object(esm_extends["a" /* default */])({}, tableProps, {
    ref: tableRef
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: index_modulemodules_default.a['right-button']
  }, /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
    pathUrl: "/search",
    perms: "news:audit",
    text: "\u901A\u8FC7",
    type: "primary",
    onClick: function onClick() {
      return batchAudit(true);
    }
  }), /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
    pathUrl: "/search",
    perms: "news:audit",
    text: "\u672A\u901A\u8FC7",
    type: "danger",
    onClick: function onClick() {
      return batchAudit(false);
    }
  }))), /*#__PURE__*/react_default.a.createElement(viewlog, {
    ref: viewRecordRef
  }));
}

function mapStateToProps(_ref2) {
  var Global = _ref2.Global,
      User = _ref2.User,
      Search = _ref2.Search;
  return {
    Global: Global,
    User: User,
    Search: Search
  };
}

/* harmony default export */ var routes = __webpack_exports__["default"] = (Object(umiExports["c" /* connect */])(mapStateToProps)(AuditSearch));

/***/ }),

/***/ "FMO7":
/*!****************************************************************!*\
  !*** ./src/pages/AuditSearch/routes/index.module.less?modules ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tableaction":"tableaction___xDDT2","right-button":"right-button___1h1nM"};

/***/ }),

/***/ "H+gj":
/*!******************************!*\
  !*** ./src/assets/error.png ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "QXD2":
/*!**********************************************************************!*\
  !*** ./src/pages/AuditSearch/components/viewlog.module.less?modules ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "hzQT":
/*!********************************************************!*\
  !*** ./node_modules/rc-dialog/es/index.js + 5 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-motion/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Dom/contains.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/KeyCode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/PortalWrapper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/rc-util/es/PortalWrapper.js + 2 modules
var PortalWrapper = __webpack_require__("1W/9");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__("l4aY");

// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__("8XRh");

// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Mask.js




function Mask(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      visible = props.visible,
      maskProps = props.maskProps,
      motionName = props.motionName;
  return react["createElement"](es["b" /* default */], {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return react["createElement"]("div", Object.assign({
      style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName)
    }, maskProps));
  });
}
// CONCATENATED MODULE: ./node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;

  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }

  return motionName;
} // ================================ UUID ================================

var uuid = -1;
function getUUID() {
  uuid += 1;
  return uuid;
} // =============================== Offset ===============================

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content.js







var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Content = react["forwardRef"](function (props, ref) {
  var closable = props.closable,
      prefixCls = props.prefixCls,
      width = props.width,
      height = props.height,
      footer = props.footer,
      title = props.title,
      closeIcon = props.closeIcon,
      style = props.style,
      className = props.className,
      visible = props.visible,
      forceRender = props.forceRender,
      bodyStyle = props.bodyStyle,
      bodyProps = props.bodyProps,
      children = props.children,
      destroyOnClose = props.destroyOnClose,
      modalRender = props.modalRender,
      motionName = props.motionName,
      ariaId = props.ariaId,
      onClose = props.onClose,
      onVisibleChanged = props.onVisibleChanged,
      onClick = props.onClick,
      mousePosition = props.mousePosition;
  var sentinelStartRef = Object(react["useRef"])();
  var sentinelEndRef = Object(react["useRef"])();
  var dialogRef = Object(react["useRef"])(); // ============================== Ref ===============================

  react["useImperativeHandle"](ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;

        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      getDOM: function getDOM() {
        return dialogRef.current;
      },
      changeActive: function changeActive(next) {
        var _document = document,
            activeElement = _document.activeElement;

        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  }); // ============================= Style ==============================

  var _React$useState = react["useState"](),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      transformOrigin = _React$useState2[0],
      setTransformOrigin = _React$useState2[1];

  var contentStyle = {};

  if (width !== undefined) {
    contentStyle.width = width;
  }

  if (height !== undefined) {
    contentStyle.height = height;
  }

  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }

  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  } // ============================= Render =============================


  var footerNode;

  if (footer) {
    footerNode = react["createElement"]("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  var headerNode;

  if (title) {
    headerNode = react["createElement"]("div", {
      className: "".concat(prefixCls, "-header")
    }, react["createElement"]("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }

  var closer;

  if (closable) {
    closer = react["createElement"]("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || react["createElement"]("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }

  var content = react["createElement"]("div", {
    className: "".concat(prefixCls, "-content")
  }, closer, headerNode, react["createElement"]("div", Object.assign({
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, bodyProps), children), footerNode);
  return react["createElement"](es["b" /* default */], {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return react["createElement"]("div", {
      key: "dialog-element",
      role: "document",
      ref: motionRef,
      style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, motionStyle), style), contentStyle),
      className: classnames_default()(prefixCls, className, motionClassName),
      onClick: onClick
    }, react["createElement"]("div", {
      tabIndex: 0,
      ref: sentinelStartRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }), modalRender ? modalRender(content) : content, react["createElement"]("div", {
      tabIndex: 0,
      ref: sentinelEndRef,
      style: sentinelStyle,
      "aria-hidden": "true"
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ var Dialog_Content = (Content);
// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/index.js










function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
      zIndex = props.zIndex,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$keyboard = props.keyboard,
      keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      _props$switchScrollin = props.switchScrollingEffect,
      switchScrollingEffect = _props$switchScrollin === void 0 ? function () {} : _props$switchScrollin,
      title = props.title,
      wrapStyle = props.wrapStyle,
      wrapClassName = props.wrapClassName,
      wrapProps = props.wrapProps,
      onClose = props.onClose,
      afterClose = props.afterClose,
      transitionName = props.transitionName,
      animation = props.animation,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      maskStyle = props.maskStyle,
      maskProps = props.maskProps;
  var lastOutSideActiveElementRef = Object(react["useRef"])();
  var wrapperRef = Object(react["useRef"])();
  var contentRef = Object(react["useRef"])();

  var _React$useState = react["useState"](visible),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1]; // ========================== Init ==========================


  var ariaIdRef = Object(react["useRef"])();

  if (!ariaIdRef.current) {
    ariaIdRef.current = "rcDialogTitle".concat(getUUID());
  } // ========================= Events =========================


  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      // Try to focus
      if (!Object(contains["a" /* default */])(wrapperRef.current, document.activeElement)) {
        var _contentRef$current;

        lastOutSideActiveElementRef.current = document.activeElement;
        (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
      }
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);
      switchScrollingEffect();

      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {// Do nothing
        }

        lastOutSideActiveElementRef.current = null;
      }

      afterClose === null || afterClose === void 0 ? void 0 : afterClose();
    }
  }

  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  } // >>> Content


  var contentClickRef = Object(react["useRef"])(false);
  var contentTimeoutRef = Object(react["useRef"])(); // We need record content click incase content popup out of dialog

  var onContentClick = function onContentClick() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  }; // >>> Wrapper
  // Close only when element not on dialog


  var onWrapperClick = null;

  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (!contentClickRef.current && !Object(contains["a" /* default */])(contentRef.current.getDOM(), e.target)) {
        onInternalClose(e);
      }
    };
  }

  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode["a" /* default */].ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    } // keep focus inside dialog


    if (visible) {
      if (e.keyCode === KeyCode["a" /* default */].TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  } // ========================= Effect =========================


  Object(react["useEffect"])(function () {
    if (visible) {
      setAnimatedVisible(true);
      switchScrollingEffect();
    }
  }, [visible]); // Remove direct should also check the scroll bar update

  Object(react["useEffect"])(function () {
    return function () {
      switchScrollingEffect();
      clearTimeout(contentTimeoutRef.current);
    };
  }, []); // ========================= Render =========================

  return react["createElement"]("div", {
    className: "".concat(prefixCls, "-root")
  }, react["createElement"](Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: Object(objectSpread2["a" /* default */])({
      zIndex: zIndex
    }, maskStyle),
    maskProps: maskProps
  }), react["createElement"]("div", Object.assign({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName),
    ref: wrapperRef,
    onClick: onWrapperClick,
    role: "dialog",
    "aria-labelledby": title ? ariaIdRef.current : null,
    style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
      zIndex: zIndex
    }, wrapStyle), {}, {
      display: !animatedVisible ? 'none' : null
    })
  }, wrapProps), react["createElement"](Dialog_Content, Object.assign({}, props, {
    onClick: onContentClick,
    ref: contentRef,
    closable: closable,
    ariaId: ariaIdRef.current,
    prefixCls: prefixCls,
    visible: visible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}
// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js



 // fix issue #10656

/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

var DialogWrap_DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
      getContainer = props.getContainer,
      forceRender = props.forceRender,
      _props$destroyOnClose = props.destroyOnClose,
      destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
      _afterClose = props.afterClose;

  var _React$useState = react["useState"](visible),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1];

  react["useEffect"](function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]); // 渲染在当前 dom 里；

  if (getContainer === false) {
    return react["createElement"](Dialog, Object.assign({}, props, {
      getOpenCount: function getOpenCount() {
        return 2;
      }
    }));
  } // Destroy on close will remove wrapped div


  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }

  return react["createElement"](PortalWrapper["a" /* default */], {
    visible: visible,
    forceRender: forceRender,
    getContainer: getContainer
  }, function (childProps) {
    return react["createElement"](Dialog, Object.assign({}, props, {
      destroyOnClose: destroyOnClose,
      afterClose: function afterClose() {
        _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
        setAnimatedVisible(false);
      }
    }, childProps));
  });
};

DialogWrap_DialogWrap.displayName = 'Dialog';
/* harmony default export */ var es_DialogWrap = (DialogWrap_DialogWrap);
// CONCATENATED MODULE: ./node_modules/rc-dialog/es/index.js

/* harmony default export */ var rc_dialog_es = __webpack_exports__["a"] = (es_DialogWrap);

/***/ }),

/***/ "kLXV":
/*!*********************************************************!*\
  !*** ./node_modules/antd/es/modal/index.js + 7 modules ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/CheckCircleOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/CloseCircleOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/CloseOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/ExclamationCircleOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/InfoCircleOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/slicedToArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/devWarning.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/button.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/context.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/locale-provider/LocaleReceiver.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/locale/default.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/locale.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-dialog/es/index.js because of ./node_modules/rc-image/es/Preview.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Dom/addEventListener.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/rc-dialog/es/index.js + 5 modules
var es = __webpack_require__("hzQT");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__("zT1h");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__("V/uB");
var CloseOutlined_default = /*#__PURE__*/__webpack_require__.n(CloseOutlined);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/usePatchElement.js



function usePatchElement() {
  var _React$useState = react["useState"]([]),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function patchElement(element) {
    // append a new element to elements (and create a new ref)
    setElements(function (originElements) {
      return [].concat(toConsumableArray_default()(originElements), [element]);
    }); // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect

    return function () {
      setElements(function (originElements) {
        return originElements.filter(function (ele) {
          return ele !== element;
        });
      });
    };
  }

  return [elements, patchElement];
}
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/antd/es/button/button.js + 3 modules
var button_button = __webpack_require__("zvFY");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/ActionButton.js






var ActionButton_ActionButton = function ActionButton(props) {
  var clickedRef = react["useRef"](false);
  var ref = react["useRef"]();

  var _React$useState = react["useState"](false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  react["useEffect"](function () {
    var timeoutId;

    if (props.autoFocus) {
      var $this = ref.current;
      timeoutId = setTimeout(function () {
        return $this.focus();
      });
    }

    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
    var closeModal = props.closeModal;

    if (!returnValueOfOnOk || !returnValueOfOnOk.then) {
      return;
    }

    setLoading(true);
    returnValueOfOnOk.then(function () {
      // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
      // setState({ loading: false });
      closeModal.apply(void 0, arguments);
    }, function (e) {
      // Emit error when catch promise reject
      // eslint-disable-next-line no-console
      console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

      setLoading(false);
      clickedRef.current = false;
    });
  };

  var onClick = function onClick() {
    var actionFn = props.actionFn,
        closeModal = props.closeModal;

    if (clickedRef.current) {
      return;
    }

    clickedRef.current = true;

    if (!actionFn) {
      closeModal();
      return;
    }

    var returnValueOfOnOk;

    if (actionFn.length) {
      returnValueOfOnOk = actionFn(closeModal); // https://github.com/ant-design/ant-design/issues/23358

      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();

      if (!returnValueOfOnOk) {
        closeModal();
        return;
      }
    }

    handlePromiseOnOk(returnValueOfOnOk);
  };

  var type = props.type,
      children = props.children,
      prefixCls = props.prefixCls,
      buttonProps = props.buttonProps;
  return /*#__PURE__*/react["createElement"](es_button["a" /* default */], extends_default()({}, Object(button_button["a" /* convertLegacyProps */])(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: ref
  }), children);
};

/* harmony default export */ var modal_ActionButton = (ActionButton_ActionButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/ConfirmDialog.js








var ConfirmDialog_ConfirmDialog = function ConfirmDialog(props) {
  var icon = props.icon,
      onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okText = props.okText,
      okButtonProps = props.okButtonProps,
      cancelText = props.cancelText,
      cancelButtonProps = props.cancelButtonProps,
      direction = props.direction,
      prefixCls = props.prefixCls,
      rootPrefixCls = props.rootPrefixCls,
      bodyStyle = props.bodyStyle,
      modalRender = props.modalRender;
  Object(devWarning["a" /* default */])(!(typeof icon === 'string' && icon.length > 2), 'Modal', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var okType = props.okType || 'primary';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), defineProperty_default()({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), props.className);
  var cancelButton = okCancel && /*#__PURE__*/react["createElement"](modal_ActionButton, {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, cancelText);
  return /*#__PURE__*/react["createElement"](modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()(defineProperty_default()({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: function onCancel() {
      return close({
        triggerCancel: true
      });
    },
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    modalRender: modalRender
  }, /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, /*#__PURE__*/react["createElement"](config_provider["b" /* default */], {
    prefixCls: rootPrefixCls
  }, /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-body"),
    style: bodyStyle
  }, icon, props.title === undefined ? null : /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content))), /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, /*#__PURE__*/react["createElement"](modal_ActionButton, {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, okText))));
};

/* harmony default export */ var modal_ConfirmDialog = (ConfirmDialog_ConfirmDialog);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 1 modules
var locale_default = __webpack_require__("ZvpZ");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__("H84U");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/HookModal.js








var HookModal_HookModal = function HookModal(_ref, ref) {
  var afterClose = _ref.afterClose,
      config = _ref.config;

  var _React$useState = react["useState"](true),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useState3 = react["useState"](config),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      innerConfig = _React$useState4[0],
      setInnerConfig = _React$useState4[1];

  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      direction = _React$useContext.direction,
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('modal');
  var rootPrefixCls = getPrefixCls();

  function close() {
    setVisible(false);
  }

  react["useImperativeHandle"](ref, function () {
    return {
      destroy: close,
      update: function update(newConfig) {
        setInnerConfig(function (originConfig) {
          return extends_default()(extends_default()({}, originConfig), newConfig);
        });
      }
    };
  });
  return /*#__PURE__*/react["createElement"](LocaleReceiver["a" /* default */], {
    componentName: "Modal",
    defaultLocale: locale_default["a" /* default */].Modal
  }, function (modalLocale) {
    return /*#__PURE__*/react["createElement"](modal_ConfirmDialog, extends_default()({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls
    }, innerConfig, {
      close: close,
      visible: visible,
      afterClose: afterClose,
      okText: innerConfig.okText || (innerConfig.okCancel ? modalLocale.okText : modalLocale.justOkText),
      direction: direction,
      cancelText: innerConfig.cancelText || modalLocale.cancelText
    }));
  });
};

/* harmony default export */ var useModal_HookModal = (/*#__PURE__*/react["forwardRef"](HookModal_HookModal));
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/InfoCircleOutlined.js
var InfoCircleOutlined = __webpack_require__("ESPI");
var InfoCircleOutlined_default = /*#__PURE__*/__webpack_require__.n(InfoCircleOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/CheckCircleOutlined.js
var CheckCircleOutlined = __webpack_require__("0G8d");
var CheckCircleOutlined_default = /*#__PURE__*/__webpack_require__.n(CheckCircleOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/CloseCircleOutlined.js
var CloseCircleOutlined = __webpack_require__("Z/ur");
var CloseCircleOutlined_default = /*#__PURE__*/__webpack_require__.n(CloseCircleOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/ExclamationCircleOutlined.js
var ExclamationCircleOutlined = __webpack_require__("xddM");
var ExclamationCircleOutlined_default = /*#__PURE__*/__webpack_require__.n(ExclamationCircleOutlined);

// EXTERNAL MODULE: ./node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__("ul5b");

// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var defaultRootPrefixCls = 'ant';

function getRootPrefixCls() {
  return defaultRootPrefixCls;
}

function confirm_confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  var currentConfig = extends_default()(extends_default()({}, config), {
    close: close,
    visible: true
  });

  function destroy() {
    var unmountResult = react_dom["unmountComponentAtNode"](div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(_a) {
    var okText = _a.okText,
        cancelText = _a.cancelText,
        prefixCls = _a.prefixCls,
        props = __rest(_a, ["okText", "cancelText", "prefixCls"]);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     * Sync render blocks React event. Let's make this async.
     */


    setTimeout(function () {
      var runtimeLocale = Object(modal_locale["b" /* getConfirmLocale */])();
      react_dom["render"]( /*#__PURE__*/react["createElement"](modal_ConfirmDialog, extends_default()({}, props, {
        prefixCls: prefixCls || "".concat(getRootPrefixCls(), "-modal"),
        rootPrefixCls: getRootPrefixCls(),
        okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
        cancelText: cancelText || runtimeLocale.cancelText
      })), div);
    });
  }

  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = extends_default()(extends_default()({}, currentConfig), {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });
    render(currentConfig);
  }

  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = extends_default()(extends_default()({}, currentConfig), configUpdate);
    }

    render(currentConfig);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
function withWarn(props) {
  return extends_default()({
    type: 'warning',
    icon: /*#__PURE__*/react["createElement"](ExclamationCircleOutlined_default.a, null),
    okCancel: false
  }, props);
}
function withInfo(props) {
  return extends_default()({
    type: 'info',
    icon: /*#__PURE__*/react["createElement"](InfoCircleOutlined_default.a, null),
    okCancel: false
  }, props);
}
function withSuccess(props) {
  return extends_default()({
    type: 'success',
    icon: /*#__PURE__*/react["createElement"](CheckCircleOutlined_default.a, null),
    okCancel: false
  }, props);
}
function withError(props) {
  return extends_default()({
    type: 'error',
    icon: /*#__PURE__*/react["createElement"](CloseCircleOutlined_default.a, null),
    okCancel: false
  }, props);
}
function withConfirm(props) {
  return extends_default()({
    type: 'confirm',
    icon: /*#__PURE__*/react["createElement"](ExclamationCircleOutlined_default.a, null),
    okCancel: true
  }, props);
}
function globalConfig(_ref) {
  var rootPrefixCls = _ref.rootPrefixCls;

  if (rootPrefixCls) {
    defaultRootPrefixCls = rootPrefixCls;
  }
}
// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/index.js





var uuid = 0;
function useModal() {
  var _usePatchElement = usePatchElement(),
      _usePatchElement2 = slicedToArray_default()(_usePatchElement, 2),
      elements = _usePatchElement2[0],
      patchElement = _usePatchElement2[1];

  function getConfirmFunc(withFunc) {
    return function hookConfirm(config) {
      uuid += 1;
      var modalRef = /*#__PURE__*/react["createRef"]();
      var closeFunc;
      var modal = /*#__PURE__*/react["createElement"](useModal_HookModal, {
        key: "modal-".concat(uuid),
        config: withFunc(config),
        ref: modalRef,
        afterClose: function afterClose() {
          closeFunc();
        }
      });
      closeFunc = patchElement(modal);
      return {
        destroy: function destroy() {
          if (modalRef.current) {
            modalRef.current.destroy();
          }
        },
        update: function update(newConfig) {
          if (modalRef.current) {
            modalRef.current.update(newConfig);
          }
        }
      };
    };
  }

  return [{
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }, /*#__PURE__*/react["createElement"](react["Fragment"], null, elements)];
}
// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js



var Modal_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












var mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  Object(addEventListener["a" /* default */])(document.documentElement, 'click', getClickPosition);
}

var Modal_Modal = function Modal(props) {
  var _classNames;

  var _React$useContext = react["useContext"](context["b" /* ConfigContext */]),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var handleCancel = function handleCancel(e) {
    var onCancel = props.onCancel;

    if (onCancel) {
      onCancel(e);
    }
  };

  var handleOk = function handleOk(e) {
    var onOk = props.onOk;

    if (onOk) {
      onOk(e);
    }
  };

  var renderFooter = function renderFooter(locale) {
    var okText = props.okText,
        okType = props.okType,
        cancelText = props.cancelText,
        confirmLoading = props.confirmLoading;
    return /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"](es_button["a" /* default */], extends_default()({
      onClick: handleCancel
    }, props.cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/react["createElement"](es_button["a" /* default */], extends_default()({}, Object(button_button["a" /* convertLegacyProps */])(okType), {
      loading: confirmLoading,
      onClick: handleOk
    }, props.okButtonProps), okText || locale.okText));
  };

  var customizePrefixCls = props.prefixCls,
      footer = props.footer,
      visible = props.visible,
      wrapClassName = props.wrapClassName,
      centered = props.centered,
      getContainer = props.getContainer,
      closeIcon = props.closeIcon,
      restProps = Modal_rest(props, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon"]);

  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var defaultFooter = /*#__PURE__*/react["createElement"](LocaleReceiver["a" /* default */], {
    componentName: "Modal",
    defaultLocale: Object(modal_locale["b" /* getConfirmLocale */])()
  }, renderFooter);
  var closeIconToRender = /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react["createElement"](CloseOutlined_default.a, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = classnames_default()(wrapClassName, (_classNames = {}, defineProperty_default()(_classNames, "".concat(prefixCls, "-centered"), !!centered), defineProperty_default()(_classNames, "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/react["createElement"](es["a" /* default */], extends_default()({}, restProps, {
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    wrapClassName: wrapClassNameExtended,
    footer: footer === undefined ? defaultFooter : footer,
    visible: visible,
    mousePosition: mousePosition,
    onClose: handleCancel,
    closeIcon: closeIconToRender
  }));
};

Modal_Modal.useModal = useModal;
Modal_Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
/* harmony default export */ var modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js



function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}

var es_modal_Modal = modal_Modal;

es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};

es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};

es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};

es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;

es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};

es_modal_Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close = destroyFns.pop();

    if (close) {
      close();
    }
  }
};

es_modal_Modal.config = globalConfig;
/* harmony default export */ var es_modal = __webpack_exports__["a"] = (es_modal_Modal);

/***/ }),

/***/ "yAXW":
/*!******************************************!*\
  !*** ./src/components/WrapAuth/index.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style */ "+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "2/Rp");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends */ "0Owb");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "PpiC");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! umi */ "9kvl");





/* eslint-disable no-nested-ternary */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable import/newline-after-import */

/* eslint-disable no-unneeded-ternary */

/* eslint-disable react-hooks/rules-of-hooks */



var wrapAuthButton = function wrapAuthButton(props) {
  var access = Object(umi__WEBPACK_IMPORTED_MODULE_5__[/* useAccess */ "i"])();

  var text = props.text,
      _props$pathUrl = props.pathUrl,
      pathUrl = _props$pathUrl === void 0 ? '' : _props$pathUrl,
      _props$perms = props.perms,
      perms = _props$perms === void 0 ? '' : _props$perms,
      children = props.children,
      rest = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props, ["text", "pathUrl", "perms", "children"]); // console.log('access.canReadFoo', access.canReadFoo())


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, perms ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(umi__WEBPACK_IMPORTED_MODULE_5__[/* Access */ "a"], {
    accessible: access.canReadButton(pathUrl, perms),
    fallback: children ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, rest, {
      disabled: true
    }), text)
  }, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], rest, text)) : children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], rest, text));
};

/* harmony default export */ __webpack_exports__["a"] = (wrapAuthButton);

/***/ }),

/***/ "zLEZ":
/*!******************************************************!*\
  !*** ./src/components/BaseForm/index.js + 4 modules ***!
  \******************************************************/
/*! exports provided: fillFormItems, renderFormItem, renderGroupComponent, renderRadioGroup, renderCheckBoxGroup, renderSelect, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/BaseForm/index.module.less?modules (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/WrapAuth/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/checkbox/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/checkbox/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/col/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/col/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/date-picker/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/date-picker/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input-number/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input-number/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/radio/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/radio/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/row/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/row/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: fillFormItems, renderFormItem, renderGroupComponent, renderRadioGroup, renderCheckBoxGroup, renderSelect

// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js
var style = __webpack_require__("14J3");

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("BMrR");

// EXTERNAL MODULE: ./node_modules/antd/es/col/style/index.js
var col_style = __webpack_require__("jCWc");

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__("kPKH");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("k1fw");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("PpiC");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("y8nQ");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 14 modules
var es_form = __webpack_require__("Vl3Y");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("OaEy");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 25 modules
var es_select = __webpack_require__("2fM7");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js
var checkbox_style = __webpack_require__("sRBo");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__("kaz8");

// EXTERNAL MODULE: ./node_modules/antd/es/radio/style/index.js
var radio_style = __webpack_require__("7Kak");

// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__("9yH6");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("5NDa");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__("5rEg");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("LvDl");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./node_modules/antd/es/input-number/style/index.js
var input_number_style = __webpack_require__("giR+");

// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__("fyUT");

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/style/index.js
var date_picker_style = __webpack_require__("iQDF");

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 50 modules
var date_picker = __webpack_require__("+eQT");

// CONCATENATED MODULE: ./src/components/BaseForm/numberRange.js







/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable no-console */

/* eslint-disable import/newline-after-import */

function numberRange(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      onChange = _ref.onChange;
  console.log(value);

  var _useState = Object(react["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      minNumber = _useState2[0],
      setMinNumber = _useState2[1];

  var _useState3 = Object(react["useState"])(0),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      maxNumber = _useState4[0],
      setMaxNumber = _useState4[1];

  var triggerChange = function triggerChange(changedValue) {
    if (onChange) {
      onChange(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
        minNumber: minNumber,
        maxNumber: maxNumber
      }, value), changedValue));
    }
  };

  var onNumberChange = function onNumberChange(e, type) {
    console.log(e, type);

    if (type === 'minNumber') {
      setMinNumber(e);
      triggerChange({
        minNumber: e
      });
    } else {
      setMaxNumber(e);
      triggerChange({
        maxNumber: e
      });
    }
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    name: "minNumber",
    noStyle: true,
    initialValue: value.minNumber
  }, /*#__PURE__*/react_default.a.createElement(input_number["a" /* default */], {
    type: "text",
    onChange: function onChange(e) {
      return onNumberChange(e, 'minNumber');
    },
    style: {
      width: 100
    }
  })), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    name: "maxNumber",
    noStyle: true,
    initialValue: value.maxNumber
  }, /*#__PURE__*/react_default.a.createElement(input_number["a" /* default */], {
    style: {
      width: 100
    },
    onChange: function onChange(e) {
      return onNumberChange(e, 'maxNumber');
    }
  })));
}
// CONCATENATED MODULE: ./src/components/BaseForm/multilevelCategories.js










/* eslint-disable @typescript-eslint/no-unused-vars */


var Option = es_select["a" /* default */].Option;
function multilevelCategories(props) {
  var _props$firstCategory = props.firstCategory,
      firstCategory = _props$firstCategory === void 0 ? [] : _props$firstCategory,
      _props$secondCategory = props.secondCategory,
      secondCategory = _props$secondCategory === void 0 ? [] : _props$secondCategory,
      _props$thirdCategory = props.thirdCategory,
      thirdCategory = _props$thirdCategory === void 0 ? [] : _props$thirdCategory,
      onChange = props.onChange,
      _props$value = props.value,
      value = _props$value === void 0 ? {} : _props$value,
      rest = Object(objectWithoutProperties["a" /* default */])(props, ["firstCategory", "secondCategory", "thirdCategory", "onChange", "value"]);

  var selectProps = Object(objectSpread2["a" /* default */])({
    allowClear: true,
    style: {
      width: '33%'
    }
  }, rest);

  var _value$firstCategoryI = value.firstCategoryId,
      firstCategoryId = _value$firstCategoryI === void 0 ? null : _value$firstCategoryI,
      _value$secondCategory = value.secondCategoryId,
      secondCategoryId = _value$secondCategory === void 0 ? null : _value$secondCategory,
      _value$thirdCategoryI = value.thirdCategoryId,
      thirdCategoryId = _value$thirdCategoryI === void 0 ? null : _value$thirdCategoryI;

  var selectChange = function selectChange(e, id) {
    value[id] = e;
    onChange(value, id);
  };

  return /*#__PURE__*/react_default.a.createElement(input["a" /* default */].Group, {
    compact: true
  }, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "firstCategoryId",
    name: "firstCategoryId",
    noStyle: true,
    initialValue: firstCategoryId
  }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: "\u4E00\u7EA7\u5206\u7C7B"
  }, selectProps, {
    onChange: function onChange(e) {
      return selectChange(e, 'firstCategoryId');
    }
  }), !lodash_default.a.isEmpty(firstCategory) && firstCategory.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Option, {
      key: item.id,
      value: item.id.toString()
    }, item.name);
  }))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "secondCategoryId",
    name: "secondCategoryId",
    noStyle: true,
    initialValue: secondCategoryId
  }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: "\u4E8C\u7EA7\u5206\u7C7B"
  }, selectProps, {
    onChange: function onChange(e) {
      return selectChange(e, 'secondCategoryId');
    }
  }), !lodash_default.a.isEmpty(secondCategory) && secondCategory.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Option, {
      key: item.id,
      value: item.id.toString()
    }, item.name);
  }))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "thirdCategoryId",
    name: "thirdCategoryId",
    noStyle: true,
    initialValue: thirdCategoryId
  }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: "\u4E09\u7EA7\u5206\u7C7B"
  }, selectProps, {
    onChange: function onChange(e) {
      return selectChange(e, 'thirdCategoryId');
    }
  }), !lodash_default.a.isEmpty(thirdCategory) && thirdCategory.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Option, {
      key: item.id,
      value: item.id.toString()
    }, item.name);
  }))));
}
// CONCATENATED MODULE: ./src/components/BaseForm/config.js










// eslint-disable-next-line import/no-cycle



var RangePicker = date_picker["a" /* default */].RangePicker;
var dateFormat = 'YYYY-MM-DD HH:mm:ss';
var _TextArea = input["a" /* default */].TextArea;
var FormItem = {
  RADIO: function RADIO(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, renderRadioGroup(map));
  },
  CHECKBOX: function CHECKBOX(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, renderCheckBoxGroup(map));
  },
  SELECT: function SELECT(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, renderSelect(map, props));
  },
  DateTime: function DateTime(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, /*#__PURE__*/react_default.a.createElement(date_picker["a" /* default */], {
      format: dateFormat
    }));
  },
  TextArea: function TextArea(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, /*#__PURE__*/react_default.a.createElement(_TextArea, props));
  },
  DateTimeStartEnd: function DateTimeStartEnd(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, /*#__PURE__*/react_default.a.createElement(RangePicker, Object(esm_extends["a" /* default */])({
      showTime: true,
      format: dateFormat
    }, props, {
      style: {
        width: '100%'
      }
    })));
  },
  Number: function Number(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, /*#__PURE__*/react_default.a.createElement(input_number["a" /* default */], Object(esm_extends["a" /* default */])({}, props, {
      style: {
        width: '100%'
      }
    })));
  },
  NumberRange: function NumberRange(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, /*#__PURE__*/react_default.a.createElement(numberRange, props));
  },
  MultilevelCategories: function MultilevelCategories(options, map, props) {
    return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, options, /*#__PURE__*/react_default.a.createElement(multilevelCategories, props));
  }
};
// CONCATENATED MODULE: ./src/components/BaseForm/extra.js

















/* eslint-disable no-unneeded-ternary */

/* eslint-disable no-constant-condition */

/* eslint-disable no-param-reassign */

/* eslint-disable spaced-comment */

/* eslint-disable consistent-return */

/* eslint-disable object-shorthand */

 // eslint-disable-next-line import/no-cycle


/**
 * 对象转为entry数组
 *
 * @param object   原对象
 * @param callback 转换方式
 * @returns {any}
 */

function entries(object) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (item) {
    return item;
  };
  return Object(lodash["isPlainObject"])(object) ? Object.entries(object).map(function (_ref) {
    var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return callback({
      key: key,
      value: value
    });
  }) : null;
}
/**
 * 补充表单字段配置
 *
 * @param items      字段定义：[{label: '名称', name: 'name', required: true}]
 * @param formValues 字段默认值: {name: 'default'}
 * @returns {*}
 */


function fillFormItems(items) {
  var formValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // console.log(items)
  return items.map(function (item) {
    var label = item.label,
        name = item.name,
        _item$required = item.required,
        required = _item$required === void 0 ? false : _item$required,
        _item$initialValue = item.initialValue,
        initialValue = _item$initialValue === void 0 ? formValues[name] : _item$initialValue,
        _item$help = item.help,
        help = _item$help === void 0 ? null : _item$help;
    return Object(objectSpread2["a" /* default */])({
      options: {
        rules: required ? [{
          required: required,
          message: "\u8BF7\u8F93\u5165".concat(label)
        }] : null,
        initialValue: initialValue,
        help: help
      }
    }, item);
  });
}
/**
 * 绘制Form.Item
 *
 * @export
 * @param {*} item
 * @param {*} formLayout
 * @return {*}
 */

function renderFormItem(item, formLayout, layout, mediaSpan) {
  // console.log('item', item)
  var label = item.label,
      name = item.name,
      _item$type = item.type,
      type = _item$type === void 0 ? '' : _item$type,
      _item$map = item.map,
      map = _item$map === void 0 ? [] : _item$map,
      options = item.options,
      initialValue = item.initialValue,
      itemRender = item.itemRender,
      placeholder = item.placeholder,
      colSpan = item.colSpan,
      _item$isSpecial = item.isSpecial,
      isSpecial = _item$isSpecial === void 0 ? false : _item$isSpecial,
      props = Object(objectWithoutProperties["a" /* default */])(item, ["label", "name", "type", "map", "options", "initialValue", "itemRender", "placeholder", "colSpan", "isSpecial"]);

  if (!name) return; // 针对时间等长度的组件进行单独配置

  if (type === 'DateTimeStartEnd' || type === 'selectMore' || type === 'MultilevelCategories' || isSpecial) {
    mediaSpan = {
      className: 'gutter-row',
      xs: 24,
      md: layout === 'inline' ? 8 : 24,
      lg: layout === 'inline' ? 16 : 24,
      xl: layout === 'inline' ? 12 : 24,
      xxl: layout === 'inline' ? 8 : 24
    };
    formLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: layout === 'inline' ? 8 : 8
        },
        md: {
          span: layout === 'inline' ? 8 : 8
        },
        lg: {
          span: layout === 'inline' ? 4 : 8
        },
        xl: {
          span: layout === 'inline' ? 4 : 8
        },
        xxl: {
          span: layout === 'inline' ? 4 : 8
        }
      }
    };
  }

  var itemProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
    key: name,
    name: name,
    label: label
  }, formLayout), options);

  mediaSpan = colSpan ? colSpan : mediaSpan;

  var colProps = Object(objectSpread2["a" /* default */])({
    key: name
  }, mediaSpan); //item form.item参数，map  数据，prop 事件


  if (type && !Object(lodash["isFunction"])(itemRender)) return /*#__PURE__*/react_default.a.createElement(col["a" /* default */], colProps, FormItem[type](itemProps, map, props));
  var child = itemRender || /*#__PURE__*/react_default.a.createElement(input["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: placeholder || '请输入'
  }, props));
  return /*#__PURE__*/react_default.a.createElement(col["a" /* default */], colProps, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, itemProps, child));
}
/**
 * 绘制组合表单项
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param Parent   父组件类型
 * @param Item     子组件类型
 * @param props    传递给父组件的属性
 * @returns {*}
 */

function renderGroupComponent(iterable, Parent, Item, props) {
  if (iterable) {
    var forEach = function forEach(_ref3) {
      var key = _ref3.key,
          value = _ref3.value;
      return /*#__PURE__*/react_default.a.createElement(Item, {
        key: key,
        value: key
      }, value);
    };

    var child = Object(lodash["isArray"])(iterable) ? iterable.map(forEach) : entries(iterable, forEach);
    return /*#__PURE__*/react_default.a.createElement(Parent, props, child);
  }

  return null;
}
/**
 * 绘制单选按钮
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param Item     子组件类型
 * @param props    传递给父组件的属性
 * @returns {*}
 */

function renderRadioGroup(iterable) {
  var Item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_radio["a" /* default */];
  var props = arguments.length > 2 ? arguments[2] : undefined;
  return renderGroupComponent(iterable, es_radio["a" /* default */].Group, Item, props);
}
/**
 * 绘制复选按钮
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param Item     子组件类型
 * @param props    传递给父组件的属性
 * @returns {*}
 */

function renderCheckBoxGroup(iterable) {
  var Item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_checkbox["a" /* default */];
  var props = arguments.length > 2 ? arguments[2] : undefined;
  return renderGroupComponent(iterable, es_checkbox["a" /* default */].Group, Item, props);
}
/**
 * 绘制下拉选择框
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param props    传递给父组件的属性
 * @returns {*}
 */

function renderSelect(iterable, props) {
  var newProps = Object(objectSpread2["a" /* default */])({
    placeholder: '请选择',
    style: {
      width: '100%'
    }
  }, props); // console.log('props',props)


  return renderGroupComponent(iterable, es_select["a" /* default */], es_select["a" /* default */].Option, newProps);
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/components/BaseForm/index.module.less?modules
var index_modulemodules = __webpack_require__("5H4c");
var index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(index_modulemodules);

// EXTERNAL MODULE: ./src/components/WrapAuth/index.js
var WrapAuth = __webpack_require__("yAXW");

// CONCATENATED MODULE: ./src/components/BaseForm/index.js













/* eslint-disable import/no-unresolved */

/* eslint-disable react/self-closing-comp */

/* eslint-disable import/order */

/* eslint-disable no-console */





var formItemLayout = {
  // labelAlign: 'left',
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

function BaseForm(props) {
  var _Form$useForm = es_form["a" /* default */].useForm(),
      _Form$useForm2 = Object(slicedToArray["a" /* default */])(_Form$useForm, 1),
      selfForm = _Form$useForm2[0];

  var children = props.children,
      className = props.className,
      _props$authProps = props.authProps,
      authProps = _props$authProps === void 0 ? {} : _props$authProps,
      _props$submitText = props.submitText,
      submitText = _props$submitText === void 0 ? '查询' : _props$submitText,
      _props$resetShow = props.resetShow,
      resetShow = _props$resetShow === void 0 ? false : _props$resetShow,
      _props$cancelShow = props.cancelShow,
      cancelShow = _props$cancelShow === void 0 ? false : _props$cancelShow,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
      _props$formLayout = props.formLayout,
      formLayout = _props$formLayout === void 0 ? formItemLayout : _props$formLayout,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$formValues = props.formValues,
      formValues = _props$formValues === void 0 ? {} : _props$formValues,
      _props$onSubmit = props.onSubmit,
      onSubmit = _props$onSubmit === void 0 ? function () {} : _props$onSubmit,
      _props$onReset = props.onReset,
      onReset = _props$onReset === void 0 ? function () {} : _props$onReset,
      _props$pRef = props.pRef,
      pRef = _props$pRef === void 0 ? function () {} : _props$pRef,
      pFrom = props.pFrom,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? renderFormItem : _props$renderItem,
      otherFormProps = Object(objectWithoutProperties["a" /* default */])(props, ["children", "className", "authProps", "submitText", "resetShow", "cancelShow", "layout", "formLayout", "dataSource", "formValues", "onSubmit", "onReset", "pRef", "pFrom", "renderItem"]);

  var form = pFrom || selfForm;

  var reset = function reset() {
    form.resetFields();
    onReset();
  }; // 自适应配置


  var mediaSpan = {
    className: 'gutter-row',
    xs: 24,
    md: layout === 'inline' ? 8 : 24,
    lg: layout === 'inline' ? 8 : 24,
    xl: layout === 'inline' ? 6 : 24,
    xxl: layout === 'inline' ? 4 : 24
  };

  var formProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, otherFormProps), {}, {
    form: form,
    // layout,
    scrollToFirstError: true,
    onFinish: function onFinish(values) {
      return onSubmit(Object(objectSpread2["a" /* default */])({}, values), form);
    },
    className: classnames_default()(className, index_modulemodules_default.a.container)
  });

  var submitProps = Object(objectSpread2["a" /* default */])({
    text: submitText,
    type: 'primary',
    htmlType: 'submit'
  }, authProps);

  var RowProps = layout === 'horizontal' ? {
    gutter: [16, 24]
  } : null;
  return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */], Object(esm_extends["a" /* default */])({}, formProps, {
    ref: pRef
  }), /*#__PURE__*/react_default.a.createElement(row["a" /* default */], RowProps, fillFormItems(dataSource, formValues).map(function (item) {
    return renderItem(item, formLayout, layout, mediaSpan);
  }), /*#__PURE__*/react_default.a.createElement(col["a" /* default */], Object(esm_extends["a" /* default */])({}, mediaSpan, {
    style: {
      padding: 0
    }
  }), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: layout === 'inline' ? index_modulemodules_default.a['button-group'] : index_modulemodules_default.a['button-group-center']
  }, cancelShow && /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    onClick: function onClick() {
      return reset();
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], submitProps), resetShow && /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    onClick: function onClick() {
      return reset();
    }
  }, "\u91CD\u7F6E"), children)))));
}


/* harmony default export */ var components_BaseForm = __webpack_exports__["a"] = (BaseForm);

/***/ })

}]);