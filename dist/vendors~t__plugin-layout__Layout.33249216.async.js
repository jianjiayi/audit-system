(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "+QRC":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "E9nw");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
      message,
      reselectPrevious,
      range,
      selection,
      mark,
      success = false;

  if (!options) {
    options = {};
  }

  debug = options.debug || false;

  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text; // reset user styles for span element

    mark.style.all = "unset"; // prevents scrolling to the end of the page

    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)"; // used to preserve spaces and line breaks

    mark.style.whiteSpace = "pre"; // do not inherit user-select (it may be `none`)

    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function (e) {
      e.stopPropagation();

      if (options.format) {
        e.preventDefault();

        if (typeof e.clipboardData === "undefined") {
          // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else {
          // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }

      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");

    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }

    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");

    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }

    reselectPrevious();
  }

  return success;
}

module.exports = copy;

/***/ }),

/***/ "/hEp":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-design/icons/ArrowRightOutlined.js ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _ArrowRightOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/ArrowRightOutlined */ "CrYe"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _ArrowRightOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "/qDX":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/typography/style/index.less ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "/thR":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EnterOutlined.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "TqRt");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _EnterOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EnterOutlined */ "YCuv"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "KQxl"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var EnterOutlined = function EnterOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _EnterOutlined.default
  }));
};

EnterOutlined.displayName = 'EnterOutlined';

var _default = React.forwardRef(EnterOutlined);

exports.default = _default;

/***/ }),

/***/ "0OKo":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/CopyOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CopyOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CopyOutlined */ "TdNH"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CopyOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "15/o":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/affix/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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

/***/ "2j6C":
/*!***************************************************!*\
  !*** ./node_modules/minimalistic-assert/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = assert;

function assert(val, msg) {
  if (!val) throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r) throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r);
};

/***/ }),

/***/ "7ckf":
/*!*************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/common.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "w8CP");

var assert = __webpack_require__(/*! minimalistic-assert */ "2j6C");

function BlockHash() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';
  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}

exports.BlockHash = BlockHash;

BlockHash.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils.toArray(msg, enc);
  if (!this.pending) this.pending = msg;else this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length; // Enough data, try updating

  if (this.pending.length >= this._delta8) {
    msg = this.pending; // Process pending data in blocks

    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0) this.pending = null;
    msg = utils.join32(msg, 0, msg.length - r, this.endian);

    for (var i = 0; i < msg.length; i += this._delta32) {
      this._update(msg, i, i + this._delta32);
    }
  }

  return this;
};

BlockHash.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert(this.pending === null);
  return this._digest(enc);
};

BlockHash.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - (len + this.padLength) % bytes;
  var res = new Array(k + this.padLength);
  res[0] = 0x80;

  for (var i = 1; i < k; i++) {
    res[i] = 0;
  } // Append length


  len <<= 3;

  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++) {
      res[i++] = 0;
    }

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = len >>> 24 & 0xff;
    res[i++] = len >>> 16 & 0xff;
    res[i++] = len >>> 8 & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = len >>> 8 & 0xff;
    res[i++] = len >>> 16 & 0xff;
    res[i++] = len >>> 24 & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (t = 8; t < this.padLength; t++) {
      res[i++] = 0;
    }
  }

  return res;
};

/***/ }),

/***/ "8E2V":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/TopNavHeader/index.less ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ama":
/*!****************************************************!*\
  !*** ./node_modules/antd/es/tabs/style/index.less ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "AOa7":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/breadcrumb/style/index.less ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "B/J0":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/224.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "w8CP");

var SHA256 = __webpack_require__(/*! ./256 */ "bu2F");

function SHA224() {
  if (!(this instanceof SHA224)) return new SHA224();
  SHA256.call(this);
  this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
}

utils.inherits(SHA224, SHA256);
module.exports = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex') return utils.toHex32(this.h.slice(0, 7), 'big');else return utils.split32(this.h.slice(0, 7), 'big');
};

/***/ }),

/***/ "CWI+":
/*!******************************************************!*\
  !*** ./node_modules/antd/es/drawer/style/index.less ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "CrYe":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/ArrowRightOutlined.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "TqRt");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _ArrowRightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/ArrowRightOutlined */ "r4ZK"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "KQxl"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var ArrowRightOutlined = function ArrowRightOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _ArrowRightOutlined.default
  }));
};

ArrowRightOutlined.displayName = 'ArrowRightOutlined';

var _default = React.forwardRef(ArrowRightOutlined);

exports.default = _default;

/***/ }),

/***/ "E+IA":
/*!************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/1.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "w8CP");

var common = __webpack_require__(/*! ../common */ "7ckf");

var shaCommon = __webpack_require__(/*! ./common */ "qlaj");

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_5 = utils.sum32_5;
var ft_1 = shaCommon.ft_1;
var BlockHash = common.BlockHash;
var sha1_K = [0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xCA62C1D6];

function SHA1() {
  if (!(this instanceof SHA1)) return new SHA1();
  BlockHash.call(this);
  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  this.W = new Array(80);
}

utils.inherits(SHA1, BlockHash);
module.exports = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++) {
    W[i] = msg[start + i];
  }

  for (; i < W.length; i++) {
    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
  }

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
};

/***/ }),

/***/ "E9nw":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () {
  var selection = document.getSelection();

  if (!selection.rangeCount) {
    return function () {};
  }

  var active = document.activeElement;
  var ranges = [];

  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) {
    // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' && selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function (range) {
        selection.addRange(range);
      });
    }

    active && active.focus();
  };
};

/***/ }),

/***/ "FMes":
/*!*********************************************************!*\
  !*** ./node_modules/@ant-design/icons/EnterOutlined.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _EnterOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EnterOutlined */ "/thR"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _EnterOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "GOef":
/*!*****************************************************************!*\
  !*** ./node_modules/@umijs/route-utils/es/index.js + 5 modules ***!
  \*****************************************************************/
/*! exports provided: transformRoute, getFlatMenus, getMatchMenu */
/*! exports used: getFlatMenus, getMatchMenu, transformRoute */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/hash.js/lib/hash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash.isequal/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ transformRoute_transformRoute; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ es_getFlatMenus_getFlatMenus; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ es_getMatchMenu_getMatchMenu; });

// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__("XaGS");
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);

// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/* harmony default export */ var memoize_one_esm = (memoizeOne);
// EXTERNAL MODULE: ./node_modules/hash.js/lib/hash.js
var hash = __webpack_require__("fZJM");
var hash_default = /*#__PURE__*/__webpack_require__.n(hash);

// CONCATENATED MODULE: ./node_modules/@qixian.cs/path-to-regexp/dist.es2015/index.js
/**
 * Tokenize input string.
 */
function lexer(str) {
  var tokens = [];
  var i = 0;

  while (i < str.length) {
    var char = str[i];

    if (char === "*" || char === "+" || char === "?") {
      tokens.push({
        type: "MODIFIER",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === "\\") {
      tokens.push({
        type: "ESCAPED_CHAR",
        index: i++,
        value: str[i++]
      });
      continue;
    }

    if (char === "{") {
      tokens.push({
        type: "OPEN",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === "}") {
      tokens.push({
        type: "CLOSE",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === ":") {
      var name = "";
      var j = i + 1;

      while (j < str.length) {
        var code = str.charCodeAt(j);

        if ( // `0-9`
        code >= 48 && code <= 57 || // `A-Z`
        code >= 65 && code <= 90 || // `a-z`
        code >= 97 && code <= 122 || // `_`
        code === 95) {
          name += str[j++];
          continue;
        }

        break;
      }

      if (!name) throw new TypeError("Missing parameter name at " + i);
      tokens.push({
        type: "NAME",
        index: i,
        value: name
      });
      i = j;
      continue;
    }

    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;

      if (str[j] === "?") {
        throw new TypeError("Pattern cannot start with \"?\" at " + j);
      }

      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (str[j] === ")") {
          count--;

          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;

          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }

        pattern += str[j++];
      }

      if (count) throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern) throw new TypeError("Missing pattern at " + i);
      tokens.push({
        type: "PATTERN",
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }

    tokens.push({
      type: "CHAR",
      index: i,
      value: str[i++]
    });
  }

  tokens.push({
    type: "END",
    index: i,
    value: ""
  });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */


function parse(str, options) {
  if (options === void 0) {
    options = {};
  }

  var tokens = lexer(str);
  var _a = options.prefixes,
      prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";

  var tryConsume = function tryConsume(type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };

  var mustConsume = function mustConsume(type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
        nextType = _a.type,
        index = _a.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };

  var consumeText = function consumeText() {
    var result = "";
    var value; // tslint:disable-next-line

    while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result += value;
    }

    return result;
  };

  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");

    if (name || pattern) {
      var prefix = char || "";

      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }

      if (path) {
        result.push(path);
        path = "";
      }

      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    var value = char || tryConsume("ESCAPED_CHAR");

    if (value) {
      path += value;
      continue;
    }

    if (path) {
      result.push(path);
      path = "";
    }

    var open = tryConsume("OPEN");

    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    mustConsume("END");
  }

  return result;
}
/**
 * Compile a string to a template function for the path.
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */

function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }

  var reFlags = flags(options);
  var _a = options.encode,
      encode = _a === void 0 ? function (x) {
    return x;
  } : _a,
      _b = options.validate,
      validate = _b === void 0 ? true : _b; // Compile all the tokens into regexps.

  var matches = tokens.map(function (token) {
    if (typeof token === "object") {
      return new RegExp("^(?:" + token.pattern + ")$", reFlags);
    }
  });
  return function (data) {
    var path = "";

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === "string") {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";

      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
        }

        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError("Expected \"" + token.name + "\" to not be empty");
        }

        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
          }

          path += token.prefix + segment + token.suffix;
        }

        continue;
      }

      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
        }

        path += token.prefix + segment + token.suffix;
        continue;
      }

      if (optional) continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
    }

    return path;
  };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */

function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */

function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.decode,
      decode = _a === void 0 ? function (x) {
    return x;
  } : _a;
  return function (pathname) {
    var m = re.exec(pathname);
    if (!m) return false;
    var path = m[0],
        index = m.index;
    var params = Object.create(null);

    var _loop_1 = function _loop_1(i) {
      // tslint:disable-next-line
      if (m[i] === undefined) return "continue";
      var key = keys[i - 1];

      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i], key);
      }
    };

    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }

    return {
      path: path,
      index: index,
      params: params
    };
  };
}
/**
 * Escape a regular expression string.
 */

function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */


function flags(options) {
  return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 */


function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function (path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */


function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.strict,
      strict = _a === void 0 ? false : _a,
      _b = options.start,
      start = _b === void 0 ? true : _b,
      _c = options.end,
      end = _c === void 0 ? true : _c,
      _d = options.encode,
      encode = _d === void 0 ? function (x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
  var route = start ? "^" : ""; // Iterate over the tokens and create our regexp string.

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));

      if (token.pattern) {
        if (keys) keys.push(token);

        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
          }
        } else {
          route += "(" + token.pattern + ")" + token.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token.modifier;
      }
    }
  }

  if (end) {
    if (!strict) route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : // tslint:disable-next-line
    endToken === undefined;

    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }

    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }

  return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */

function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/transformRoute/transformRoute.js
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

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

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
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

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





function stripQueryStringAndHashFromPath(url) {
  return url.split('?')[0].split('#')[0];
}
/* eslint no-useless-escape:0 import/prefer-default-export:0 */

var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
var isUrl = function isUrl(path) {
  return reg.test(path);
};
var transformRoute_getKeyByPath = function getKeyByPath(item) {
  var path = item.path;

  if (!path || path === '/') {
    // 如果还是没有，用对象的hash 生成一个
    try {
      return "/".concat(hash_default.a.sha256().update(JSON.stringify(item)).digest('hex'));
    } catch (error) {// dom some thing
    }
  }

  return path ? stripQueryStringAndHashFromPath(path) : path;
};
/**
 * 获取locale，增加了一个功能，如果 locale = false，将不使用国际化
 * @param item
 * @param parentName
 */

var getItemLocaleName = function getItemLocaleName(item, parentName) {
  var name = item.name,
      locale = item.locale; // 如果配置了 locale 并且 locale 为 false或 ""

  if ('locale' in item && locale === false || !name) {
    return false;
  }

  return item.locale || "".concat(parentName, ".").concat(name);
};
/**
 * 如果不是 / 开头的和父节点做一下合并
 * 如果是 / 开头的不作任何处理
 * 如果是 url 也直接返回
 * @param path
 * @param parentPath
 */


var mergePath = function mergePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if ((path || parentPath).startsWith('/')) {
    return path;
  }

  if (isUrl(path)) {
    return path;
  }

  return "/".concat(parentPath, "/").concat(path).replace(/\/\//g, '/').replace(/\/\//g, '/');
}; // bigfish 的兼容准话


var bigfishCompatibleConversions = function bigfishCompatibleConversions(route, props) {
  var _route$menu = route.menu,
      menu = _route$menu === void 0 ? {} : _route$menu,
      indexRoute = route.indexRoute,
      _route$path = route.path,
      path = _route$path === void 0 ? '' : _route$path,
      children = route.children;
  var _menu$name = menu.name,
      name = _menu$name === void 0 ? route.name : _menu$name,
      _menu$icon = menu.icon,
      icon = _menu$icon === void 0 ? route.icon : _menu$icon,
      _menu$hideChildren = menu.hideChildren,
      hideChildren = _menu$hideChildren === void 0 ? route.hideChildren : _menu$hideChildren,
      _menu$flatMenu = menu.flatMenu,
      flatMenu = _menu$flatMenu === void 0 ? route.flatMenu : _menu$flatMenu; // 兼容平铺式写法
  // 拼接 childrenRoutes, 处理存在 indexRoute 时的逻辑

  var childrenRoutes = indexRoute && // 如果只有 redirect,不用处理的
  Object.keys(indexRoute).join(',') !== 'redirect' ? [_objectSpread({
    path: path,
    menu: menu
  }, indexRoute)].concat(children || []) : children; // 拼接返回的 menu 数据

  var result = _objectSpread({}, route);

  if (name) {
    result.name = name;
  }

  if (icon) {
    result.icon = icon;
  }

  if (childrenRoutes && childrenRoutes.length) {
    /** 在菜单中隐藏子项 */
    if (hideChildren) {
      delete result.children;
      return result;
    } // 需要重新进行一次


    var routers = formatter(_objectSpread(_objectSpread({}, props), {}, {
      data: childrenRoutes
    }), route);
    /** 在菜单中只隐藏此项，子项往上提，仍旧展示 */

    if (flatMenu) {
      return routers;
    }

    result.children = routers;
  }

  return result;
};
/**
 *
 * @param props
 * @param parent
 */


function formatter(props) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    path: '/'
  };
  var data = props.data,
      formatMessage = props.formatMessage,
      parentName = props.parentName,
      menuLocale = props.locale;

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.filter(function (item) {
    if (!item) return false;
    if (item.routes || item.children) return true;
    if (item.path) return true;
    if (item.layout) return true; // 重定向

    if (item.redirect) return false;
    return false;
  }).filter(function (item) {
    var _item$menu, _item$menu2; // 是否没有权限查看
    // 这样就不会显示，是一个兼容性的方式


    if (item.unaccessible) {
      // eslint-disable-next-line no-param-reassign
      delete item.name;
    }

    if ((item === null || item === void 0 ? void 0 : (_item$menu = item.menu) === null || _item$menu === void 0 ? void 0 : _item$menu.name) || (item === null || item === void 0 ? void 0 : item.flatMenu) || (item === null || item === void 0 ? void 0 : (_item$menu2 = item.menu) === null || _item$menu2 === void 0 ? void 0 : _item$menu2.flatMenu)) {
      return true;
    } // 显示指定在 menu 中隐藏该项
    // layout 插件的功能，其实不应该存在的


    if (item.menu === false) {
      return false;
    }

    return true;
  }).map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      path: '/'
    };
    var path = mergePath(item.path, parent ? parent.path : '/');
    var name = item.name;
    var locale = getItemLocaleName(item, parentName || 'menu'); // if enableMenuLocale use item.name,
    // close menu international

    var localeName = locale !== false && menuLocale !== false && formatMessage && locale ? formatMessage({
      id: locale,
      defaultMessage: name
    }) : name;

    var _parent$pro_layout_pa = parent.pro_layout_parentKeys,
        pro_layout_parentKeys = _parent$pro_layout_pa === void 0 ? [] : _parent$pro_layout_pa,
        children = parent.children,
        icon = parent.icon,
        flatMenu = parent.flatMenu,
        indexRoute = parent.indexRoute,
        restParent = _objectWithoutProperties(parent, ["pro_layout_parentKeys", "children", "icon", "flatMenu", "indexRoute"]);

    var finallyItem = _objectSpread(_objectSpread(_objectSpread({}, restParent), {}, {
      menu: undefined
    }, item), {}, {
      path: path,
      locale: locale,
      key: item.key || transformRoute_getKeyByPath(_objectSpread(_objectSpread({}, item), {}, {
        path: path
      })),
      routes: null,
      pro_layout_parentKeys: Array.from(new Set([].concat(_toConsumableArray(item.parentKeys || []), _toConsumableArray(pro_layout_parentKeys), ["/".concat(parent.key || '').replace(/\/\//g, '/').replace(/\/\//g, '/')]))).filter(function (key) {
        return key && key !== '/';
      })
    });

    if (localeName) {
      finallyItem.name = localeName;
    } else {
      delete finallyItem.name;
    }

    if (finallyItem.menu === undefined) {
      delete finallyItem.menu;
    }

    if (item.routes || item.children) {
      var formatterChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
        data: item.routes || item.children,
        parentName: locale || ''
      }), finallyItem); // Reduce memory usage

      finallyItem.children = formatterChildren && formatterChildren.length > 0 ? formatterChildren : undefined;

      if (!finallyItem.children) {
        delete finallyItem.children;
      }
    }

    return bigfishCompatibleConversions(finallyItem, props);
  }).flat(1);
}

var memoizeOneFormatter = memoize_one_esm(formatter, lodash_isequal_default.a);
/**
 * 删除 hideInMenu 和 item.name 不存在的
 */

var defaultFilterMenuData = function defaultFilterMenuData() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.filter(function (item) {
    return item && (item.name || item.children) && !item.hideInMenu && !item.redirect;
  }).map(function (item) {
    if (item.children && Array.isArray(item.children) && !item.hideChildrenInMenu && item.children.some(function (child) {
      return child && !!child.name;
    })) {
      var children = defaultFilterMenuData(item.children);
      if (children.length) return _objectSpread(_objectSpread({}, item), {}, {
        children: children
      });
    }

    return _objectSpread(_objectSpread({}, item), {}, {
      children: undefined
    });
  }).filter(function (item) {
    return item;
  });
};
/**
 * support pathToRegexp get string
 */


var transformRoute_RoutesMap = /*#__PURE__*/function (_Map) {
  _inherits(RoutesMap, _Map);

  var _super = _createSuper(RoutesMap);

  function RoutesMap() {
    _classCallCheck(this, RoutesMap);

    return _super.apply(this, arguments);
  }

  _createClass(RoutesMap, [{
    key: "get",
    value: function get(pathname) {
      var routeValue;

      try {
        // eslint-disable-next-line no-restricted-syntax
        var _iterator = _createForOfIteratorHelper(this.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            var path = stripQueryStringAndHashFromPath(key);

            if (!isUrl(key) && pathToRegexp(path, []).test(pathname)) {
              routeValue = value;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } catch (error) {
        routeValue = undefined;
      }

      return routeValue;
    }
  }]);

  return RoutesMap;
}( /*#__PURE__*/_wrapNativeSuper(Map));
/**
 * 获取面包屑映射
 * @param MenuDataItem[] menuData 菜单配置
 */


var getBreadcrumbNameMap = function getBreadcrumbNameMap(menuData) {
  // Map is used to ensure the order of keys
  var routerMap = new transformRoute_RoutesMap();

  var flattenMenuData = function flattenMenuData(data, parent) {
    data.forEach(function (menuItem) {
      if (menuItem && menuItem.children) {
        flattenMenuData(menuItem.children, menuItem);
      } // Reduce memory usage


      var path = mergePath(menuItem.path, parent ? parent.path : '/');
      routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
    });
  };

  flattenMenuData(menuData);
  return routerMap;
};

var memoizeOneGetBreadcrumbNameMap = memoize_one_esm(getBreadcrumbNameMap, lodash_isequal_default.a);

var clearChildren = function clearChildren() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.map(function (item) {
    if (item.children && Array.isArray(item.children) && item.children.length > 0) {
      var children = clearChildren(item.children);
      if (children.length) return _objectSpread(_objectSpread({}, item), {}, {
        children: children
      });
    }

    var finallyItem = _objectSpread({}, item);

    delete finallyItem.children;
    return finallyItem;
  }).filter(function (item) {
    return item;
  });
};
/**
 * @param routes 路由配置
 * @param locale 是否使用国际化
 * @param formatMessage 国际化的程序
 * @param ignoreFilter 是否筛选掉不展示的 menuItem 项，plugin-layout需要所有项目来计算布局样式
 * @returns { breadcrumb, menuData}
 */


var transformRoute = function transformRoute(routes, locale, formatMessage, ignoreFilter) {
  var originalMenuData = memoizeOneFormatter({
    data: routes,
    formatMessage: formatMessage,
    locale: locale
  });
  var menuData = ignoreFilter ? clearChildren(originalMenuData) : defaultFilterMenuData(originalMenuData); // Map type used for internal logic

  var breadcrumb = memoizeOneGetBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb: breadcrumb,
    menuData: menuData
  };
};

/* harmony default export */ var transformRoute_transformRoute = (transformRoute);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/getFlatMenus/getFlatMenus.js
function getFlatMenus_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function getFlatMenus_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      getFlatMenus_ownKeys(Object(source), true).forEach(function (key) {
        getFlatMenus_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      getFlatMenus_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function getFlatMenus_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/**
 * 获取打平的 menuData
 * 已 path 为 key
 * @param menuData
 */

var getFlatMenus_getFlatMenus = function getFlatMenus() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var menus = {};
  menuData.forEach(function (item) {
    if (!item || !item.key) {
      return;
    }

    menus[stripQueryStringAndHashFromPath(item.path || item.key || '/')] = getFlatMenus_objectSpread({}, item);
    menus[item.key || item.path || '/'] = getFlatMenus_objectSpread({}, item);

    if (item.children) {
      menus = getFlatMenus_objectSpread(getFlatMenus_objectSpread({}, menus), getFlatMenus(item.children));
    }
  });
  return menus;
};
/* harmony default export */ var es_getFlatMenus_getFlatMenus = (getFlatMenus_getFlatMenus);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/getMatchMenu/getMatchMenu.js



var getMatchMenu_getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  return flatMenuKeys.filter(function (item) {
    if (item === '/' && path === '/') {
      return true;
    }

    if (item !== '/' && item !== '/*' && item && !isUrl(item)) {
      var pathKey = stripQueryStringAndHashFromPath(item);

      try {
        // /a
        if (pathToRegexp("".concat(pathKey), []).test(path)) {
          return true;
        } // /a/b/b


        if (pathToRegexp("".concat(pathKey, "/(.*)")).test(path)) {
          return true;
        }
      } catch (error) {// console.log(error, path);
      }
    }

    return false;
  }).sort(function (a, b) {
    // 如果完全匹配放到最后面
    if (a === path) {
      return 10;
    }

    if (b === path) {
      return -10;
    }

    return a.substr(1).split('/').length - b.substr(1).split('/').length;
  });
};
/**
 * 获取当前的选中菜单列表
 * @param pathname
 * @param menuData
 * @returns MenuDataItem[]
 */

var getMatchMenu_getMatchMenu = function getMatchMenu(pathname, menuData,
/**
 * 要不要展示全部的 key
 */
fullKeys) {
  var flatMenus = es_getFlatMenus_getFlatMenus(menuData);
  var flatMenuKeys = Object.keys(flatMenus);
  var menuPathKeys = getMatchMenu_getMenuMatches(flatMenuKeys, pathname || '/');

  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }

  if (!fullKeys) {
    menuPathKeys = [menuPathKeys[menuPathKeys.length - 1]];
  }

  return menuPathKeys.map(function (menuPathKey) {
    var menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: '',
      key: ''
    }; // 去重

    var map = new Map();
    var parentItems = (menuItem.pro_layout_parentKeys || []).map(function (key) {
      if (map.has(key)) {
        return null;
      }

      map.set(key, true);
      return flatMenus[key];
    }).filter(function (item) {
      return item;
    });

    if (menuItem.key) {
      parentItems.push(menuItem);
    }

    return parentItems;
  }).flat(1);
};
/* harmony default export */ var es_getMatchMenu_getMatchMenu = (getMatchMenu_getMatchMenu);
// CONCATENATED MODULE: ./node_modules/@umijs/route-utils/es/index.js




/***/ }),

/***/ "Hx5s":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/index.js + 103 modules ***!
  \***********************************************************************/
/*! exports provided: BasicLayout, RouteContext, PageLoading, GridContent, DefaultHeader, TopNavHeader, DefaultFooter, SettingDrawer, getPageTitle, PageHeaderWrapper, getMenuData, PageContainer, FooterToolbar, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/ArrowLeftOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/ArrowRightOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/CloseOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/DownOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/EllipsisOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/PlusOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/es/components/AntdIcon.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/es/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createSuper.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/slicedToArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/typeof.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/pro-layout/es/Footer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/pro-layout/es/PageLoading/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/isBrowser/index.js (<- Module uses injected variables (process)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/pro-layout/node_modules/path-to-regexp/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/createClass.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/createSuper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/inherits.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/typeof.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@umijs/route-utils/es/index.js because of ./src/.umi-production/plugin-layout/layout/layout/index.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/devWarning.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/reactNode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/transButton.js because of ./src/.umi-production/plugin-layout/layout/component/ErrorBoundary/index.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/type.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/avatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/avatar/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/context.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/dropdown/dropdown.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/dropdown/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/layout/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/layout/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/locale-provider/LocaleReceiver.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/fast-deep-equal/react.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mini-store/esm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/omit.js/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/raf/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-dropdown/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-motion/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-resize-observer/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-trigger/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Children/toArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Dom/addEventListener.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/KeyCode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/PortalWrapper.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/createChainedFunction.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/getScrollBarSize.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/hooks/useMergedState.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/warning.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/lib/hooks/useMergedState.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/lib/warning.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-responsive/dist/react-responsive.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/shallowequal/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/warning/warning.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: BasicLayout, RouteContext, PageLoading, GridContent, DefaultHeader, TopNavHeader, DefaultFooter, SettingDrawer, getPageTitle, PageHeaderWrapper, getMenuData, PageContainer, FooterToolbar

// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/index.js
var layout_style = __webpack_require__("B9cy");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var es_layout = __webpack_require__("Ol7k");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/style/index.js
var config_provider_style = __webpack_require__("GNNt");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/BasicLayout.less
var es_BasicLayout = __webpack_require__("mQwV");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__("2W6z");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/rc-util/lib/hooks/useMergedState.js
var useMergedState = __webpack_require__("kZ8M");
var useMergedState_default = /*#__PURE__*/__webpack_require__.n(useMergedState);

// CONCATENATED MODULE: ./node_modules/use-json-comparison/dist/index.esm.js


function _typeof(obj) {
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

var getCircularReplacer = function getCircularReplacer() {
  var seen = new WeakSet();
  return function (key, value) {
    if (_typeof(value) === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }

    return value;
  };
};
/**
 * 一个更加安全的 stringify，可以解决循环依赖的问题
 * @param value
 */


var stringify = function stringify(value) {
  return JSON.stringify(value, getCircularReplacer());
};

var jsonCompareEquals = function jsonCompareEquals(value, nextValue) {
  try {
    return stringify(value) === stringify(nextValue);
  } catch (error) {// do something
  }

  return false;
};

function useJsonCompareMemoize(value) {
  var ref = Object(react["useRef"])(''); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!jsonCompareEquals(value, ref.current)) {
    ref.current = JSON.stringify(value, getCircularReplacer());
  }

  return ref.current;
}

function useDeepJSONEffect(effect, dependencies) {
  Object(react["useEffect"])(effect, [useJsonCompareMemoize(dependencies)]);
}

/* harmony default export */ var index_esm = (useDeepJSONEffect);

// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__("s/Ur");

// CONCATENATED MODULE: ./node_modules/use-media-antd-query/es/index.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



var MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: '(max-width: 575px)'
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: '(min-width: 576px) and (max-width: 767px)'
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: '(min-width: 768px) and (max-width: 991px)'
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: '(min-width: 992px) and (max-width: 1199px)'
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: '(min-width: 1200px) and (max-width: 1599px)'
  },
  xxl: {
    minWidth: 1600,
    matchMedia: '(min-width: 1600px)'
  }
};
/**
 * loop query screen className
 * Array.find will throw a error
 * `Rendered more hooks than during the previous render.`
 * So should use Array.forEach
 */

var getScreenClassName = function getScreenClassName() {
  var className = 'md'; // support ssr

  if (typeof window === 'undefined') {
    return className;
  }

  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function (key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;

    if (window.matchMedia(matchMedia).matches) {
      return true;
    }

    return false;
  });
  className = mediaQueryKey;
  return className;
};

var es_useMedia = function useMedia() {
  var isMd = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.md);
  var isLg = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.lg);
  var isXxl = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.xxl);
  var isXl = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.xl);
  var isSm = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.sm);
  var isXs = Object(react_responsive["useMediaQuery"])(MediaQueryEnum.xs);

  var _useState = Object(react["useState"])(getScreenClassName()),
      _useState2 = _slicedToArray(_useState, 2),
      colSpan = _useState2[0],
      setColSpan = _useState2[1];

  Object(react["useEffect"])(function () {
    if (false) {}

    if (isXxl) {
      setColSpan('xxl');
      return;
    }

    if (isXl) {
      setColSpan('xl');
      return;
    }

    if (isLg) {
      setColSpan('lg');
      return;
    }

    if (isMd) {
      setColSpan('md');
      return;
    }

    if (isSm) {
      setColSpan('sm');
      return;
    }

    if (isXs) {
      setColSpan('xs');
      return;
    }

    setColSpan('md');
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};

/* harmony default export */ var es = (es_useMedia);
// EXTERNAL MODULE: ./node_modules/fast-deep-equal/react.js
var fast_deep_equal_react = __webpack_require__("nkPT");
var fast_deep_equal_react_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react);

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/hooks/useDeepCompareEffect/index.js


var isDeepEqual = fast_deep_equal_react_default.a;

function useDeepCompareMemoize(value) {
  var ref = Object(react["useRef"])(); // it can be done by using useMemo as well
  // but useRef is rather cleaner and easier

  if (!isDeepEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(effect) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  Object(react["useEffect"])(effect, useDeepCompareMemoize(dependencies));
}

/* harmony default export */ var hooks_useDeepCompareEffect = (useDeepCompareEffect);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/isBrowser/index.js
var isBrowser = __webpack_require__("rOsg");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/hooks/useDocumentTitle/index.js



function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  Object(react["useEffect"])(function () {
    if (Object(isBrowser["a" /* default */])() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title]);
}

/* harmony default export */ var hooks_useDocumentTitle = (useDocumentTitle);
// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var omit_js_es = __webpack_require__("BGR+");

// EXTERNAL MODULE: ./node_modules/@umijs/route-utils/es/index.js + 5 modules
var route_utils_es = __webpack_require__("GOef");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/Header.less
var Header = __webpack_require__("YPDd");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/GlobalHeader/index.less
var es_GlobalHeader = __webpack_require__("f9ba");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("lUTK");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 15 modules
var es_menu = __webpack_require__("BvKs");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuUnfoldOutlined.js
// This icon file is generated automatically.
var MenuUnfoldOutlined_MenuUnfoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };
/* harmony default export */ var asn_MenuUnfoldOutlined = (MenuUnfoldOutlined_MenuUnfoldOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_MenuUnfoldOutlined_MenuUnfoldOutlined = function MenuUnfoldOutlined(props, ref) {
  return react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_MenuUnfoldOutlined
  }));
};

icons_MenuUnfoldOutlined_MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
/* harmony default export */ var icons_MenuUnfoldOutlined = (react["forwardRef"](icons_MenuUnfoldOutlined_MenuUnfoldOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuFoldOutlined.js
// This icon file is generated automatically.
var MenuFoldOutlined_MenuFoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };
/* harmony default export */ var asn_MenuFoldOutlined = (MenuFoldOutlined_MenuFoldOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_MenuFoldOutlined_MenuFoldOutlined = function MenuFoldOutlined(props, ref) {
  return react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_MenuFoldOutlined
  }));
};

icons_MenuFoldOutlined_MenuFoldOutlined.displayName = 'MenuFoldOutlined';
/* harmony default export */ var icons_MenuFoldOutlined = (react["forwardRef"](icons_MenuFoldOutlined_MenuFoldOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/SiderMenu/index.less
var es_SiderMenu = __webpack_require__("bAEX");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/utils.js
var utils = __webpack_require__("Qi1f");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js





var Icon = react["forwardRef"](function (props, ref) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"]);

  Object(utils["g" /* warning */])(Boolean(Component || children), 'Should have `component` prop or `children`.');
  Object(utils["f" /* useInsertStyles */])();
  var classString = classnames_default()('anticon', className);
  var svgClassString = classnames_default()({
    'anticon-spin': !!spin
  });
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var innerSvgProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, utils["e" /* svgBaseProps */]), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  } // component > children


  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return react["createElement"](Component, Object.assign({}, innerSvgProps), children);
    }

    if (children) {
      Object(utils["g" /* warning */])(Boolean(viewBox) || react["Children"].count(children) === 1 && react["isValidElement"](children) && react["Children"].only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return react["createElement"]("svg", Object.assign({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }

    return null;
  };

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return react["createElement"]("span", Object.assign({
    role: "img"
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ var components_Icon = (Icon);
// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconFont.js



var customCache = new Set();

function isValidCustomScriptUrl(scriptUrl) {
  return Boolean(typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl));
}

function createScriptUrlElements(scriptUrls) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentScriptUrl = scriptUrls[index];

  if (isValidCustomScriptUrl(currentScriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);

    if (scriptUrls.length > index + 1) {
      script.onload = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };

      script.onerror = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }

    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}

function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (scriptUrl && typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function') {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }

  var Iconfont = react["forwardRef"](function (props, ref) {
    var type = props.type,
        children = props.children,
        restProps = Object(objectWithoutProperties["a" /* default */])(props, ["type", "children"]); // children > type


    var content = null;

    if (props.type) {
      content = react["createElement"]("use", {
        xlinkHref: "#".concat(type)
      });
    }

    if (children) {
      content = children;
    }

    return react["createElement"](components_Icon, Object.assign({}, extraCommonProps, restProps, {
      ref: ref
    }), content);
  });
  Iconfont.displayName = 'Iconfont';
  return Iconfont;
}
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/isUrl/index.js
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

var isUrl = function isUrl(path) {
  return reg.test(path);
};

/* harmony default export */ var es_isUrl = (isUrl);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/isImg/index.js
/** 判断是否是图片链接 */
function isImg(path) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

/* harmony default export */ var es_isImg = (isImg);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/defaultSettings.js
var defaultSettings = {
  navTheme: 'dark',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  menu: {
    locale: true
  },
  headerHeight: 48,
  title: 'Ant Design Pro',
  iconfontUrl: '',
  primaryColor: '#1890ff'
};
/* harmony default export */ var es_defaultSettings = (defaultSettings);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/utils.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var getOpenKeysFromMenuData = function getOpenKeysFromMenuData(menuData) {
  return (menuData || []).reduce(function (pre, item) {
    if (item.key) {
      pre.push(item.key);
    }

    if (item.children) {
      var newArray = pre.concat(getOpenKeysFromMenuData(item.children) || []);
      return newArray;
    }

    return pre;
  }, []);
};
var themeConfig = {
  daybreak: 'daybreak',
  '#1890ff': 'daybreak',
  '#F5222D': 'dust',
  '#FA541C': 'volcano',
  '#FAAD14': 'sunset',
  '#13C2C2': 'cyan',
  '#52C41A': 'green',
  '#2F54EB': 'geekblue',
  '#722ED1': 'purple'
};

var invertKeyValues = function invertKeyValues(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    acc[obj[key]] = key;
    return acc;
  }, {});
};
/**
 * #1890ff -> daybreak
 * @param val
 */


function genThemeToString(val) {
  return val && themeConfig[val] ? themeConfig[val] : undefined;
}
/**
 * daybreak-> #1890ff
 * @param val
 */

function genStringToTheme(val) {
  var stringConfig = invertKeyValues(themeConfig);
  return val && stringConfig[val] ? stringConfig[val] : val;
}
function clearMenuItem(menusData) {
  return menusData.map(function (item) {
    var finalItem = _objectSpread({}, item);

    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }

    if (finalItem && (finalItem === null || finalItem === void 0 ? void 0 : finalItem.children)) {
      if (!finalItem.hideChildrenInMenu && finalItem.children.some(function (child) {
        return child && child.name && !child.hideInMenu;
      })) {
        return _objectSpread(_objectSpread({}, item), {}, {
          children: clearMenuItem(finalItem.children)
        });
      } // children 为空就直接删掉


      delete finalItem.children;
    }

    return finalItem;
  }).filter(function (item) {
    return item;
  });
}
// CONCATENATED MODULE: ./node_modules/unstated-next/dist/unstated-next.mjs


function createContainer(useHook) {
  var Context = react.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}

function unstated_next_useContainer(container) {
  return container.useContainer();
}


// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/SiderMenu/Counter.js
function Counter_slicedToArray(arr, i) {
  return Counter_arrayWithHoles(arr) || Counter_iterableToArrayLimit(arr, i) || Counter_unsupportedIterableToArray(arr, i) || Counter_nonIterableRest();
}

function Counter_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Counter_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Counter_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Counter_arrayLikeToArray(o, minLen);
}

function Counter_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Counter_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function Counter_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




function useMenuCounter() {
  var _useState = Object(react["useState"])([]),
      _useState2 = Counter_slicedToArray(_useState, 2),
      flatMenuKeys = _useState2[0],
      setFlatMenuKeys = _useState2[1];

  return {
    flatMenuKeys: flatMenuKeys,
    setFlatMenuKeys: setFlatMenuKeys
  };
}

var MenuCounter = createContainer(useMenuCounter);
/* harmony default export */ var Counter = (MenuCounter);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/PageLoading/index.js
var PageLoading = __webpack_require__("tbuW");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/SiderMenu/BaseMenu.js



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function BaseMenu_slicedToArray(arr, i) {
  return BaseMenu_arrayWithHoles(arr) || BaseMenu_iterableToArrayLimit(arr, i) || BaseMenu_unsupportedIterableToArray(arr, i) || BaseMenu_nonIterableRest();
}

function BaseMenu_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function BaseMenu_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return BaseMenu_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BaseMenu_arrayLikeToArray(o, minLen);
}

function BaseMenu_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function BaseMenu_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function BaseMenu_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function BaseMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function BaseMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BaseMenu_ownKeys(Object(source), true).forEach(function (key) {
        BaseMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BaseMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function BaseMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}











var BaseMenu_SubMenu = es_menu["a" /* default */].SubMenu;
var IconFont = create({
  scriptUrl: es_defaultSettings.iconfontUrl
}); // Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,

var BaseMenu_getIcon = function getIcon(icon) {
  if (typeof icon === 'string' && icon !== '') {
    if (es_isUrl(icon) || es_isImg(icon)) {
      return /*#__PURE__*/react_default.a.createElement(components_Icon, {
        component: function component() {
          return /*#__PURE__*/react_default.a.createElement("img", {
            src: icon,
            alt: "icon",
            className: "ant-pro-sider-menu-icon"
          });
        }
      });
    }

    if (icon.startsWith('icon-')) {
      return /*#__PURE__*/react_default.a.createElement(IconFont, {
        type: icon
      });
    }
  }

  return icon;
};

var BaseMenu_MenuUtil = function MenuUtil(props) {
  var _this = this;

  _classCallCheck(this, MenuUtil);

  this.getNavMenuItems = function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var isChildren = arguments.length > 1 ? arguments[1] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, isChildren);
    }).filter(function (item) {
      return item;
    });
  };
  /**
   * get SubMenu or Item
   */


  this.getSubMenuOrItem = function (item, isChildren) {
    if (Array.isArray(item.children) && item && item.children.length > 0) {
      var name = _this.getIntlName(item);

      var _this$props = _this.props,
          subMenuItemRender = _this$props.subMenuItemRender,
          prefixCls = _this$props.prefixCls; //  get defaultTitle by menuItemRender

      var defaultTitle = item.icon ? /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item")
      }, !isChildren && BaseMenu_getIcon(item.icon), /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name)) : /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item")
      }, name); // subMenu only title render

      var title = subMenuItemRender ? subMenuItemRender(BaseMenu_objectSpread(BaseMenu_objectSpread({}, item), {}, {
        isUrl: false
      }), defaultTitle) : defaultTitle;
      return /*#__PURE__*/react_default.a.createElement(BaseMenu_SubMenu, {
        title: title,
        key: item.key || item.path,
        onTitleClick: item.onTitleClick
      }, _this.getNavMenuItems(item.children, true));
    }

    return /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */].Item, {
      inlineIndent: 24,
      disabled: item.disabled,
      key: item.key || item.path
    }, _this.getMenuItemPath(item, isChildren));
  };

  this.getIntlName = function (item) {
    var name = item.name,
        locale = item.locale;
    var _this$props2 = _this.props,
        _this$props2$menu = _this$props2.menu,
        menu = _this$props2$menu === void 0 ? {
      locale: false
    } : _this$props2$menu,
        formatMessage = _this$props2.formatMessage;

    if (locale && menu.locale !== false && formatMessage) {
      return formatMessage({
        id: locale,
        defaultMessage: name
      });
    }

    return name;
  };
  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */


  this.getMenuItemPath = function (item, isChildren) {
    var itemPath = _this.conversionPath(item.path || '/');

    var _this$props3 = _this.props,
        _this$props3$location = _this$props3.location,
        location = _this$props3$location === void 0 ? {
      pathname: '/'
    } : _this$props3$location,
        isMobile = _this$props3.isMobile,
        onCollapse = _this$props3.onCollapse,
        menuItemRender = _this$props3.menuItemRender;
    var target = item.target; // if local is true formatMessage all name。

    var name = _this.getIntlName(item);

    var prefixCls = _this.props.prefixCls;
    var icon = isChildren ? null : BaseMenu_getIcon(item.icon);
    var defaultItem = /*#__PURE__*/react_default.a.createElement("span", {
      className: "".concat(prefixCls, "-menu-item")
    }, icon, /*#__PURE__*/react_default.a.createElement("span", {
      className: "".concat(prefixCls, "-menu-item-title")
    }, name));
    var isHttpUrl = es_isUrl(itemPath); // Is it a http link

    if (isHttpUrl) {
      defaultItem = /*#__PURE__*/react_default.a.createElement("a", {
        href: itemPath,
        target: target,
        className: "".concat(prefixCls, "-menu-item")
      }, icon, /*#__PURE__*/react_default.a.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name));
    }

    if (menuItemRender) {
      var renderItemProps = BaseMenu_objectSpread(BaseMenu_objectSpread({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        }
      });

      return menuItemRender(renderItemProps, defaultItem);
    }

    return defaultItem;
  };

  this.conversionPath = function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }

    return "/".concat(path || '').replace(/\/+/g, '/');
  };

  this.props = props;
};
/**
 * 生成openKeys 的对象，因为设置了openKeys 就会变成受控，所以需要一个空对象
 * @param BaseMenuProps
 */


var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
      collapsed = _ref.collapsed;
  var openKeysProps = {};

  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }

  return openKeysProps;
};

var BaseMenu_BaseMenu = function BaseMenu(props) {
  var theme = props.theme,
      mode = props.mode,
      className = props.className,
      handleOpenChange = props.handleOpenChange,
      style = props.style,
      menuData = props.menuData,
      menu = props.menu,
      matchMenuKeys = props.matchMenuKeys,
      iconfontUrl = props.iconfontUrl,
      collapsed = props.collapsed,
      propsSelectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      propsOpenKeys = props.openKeys;
  var openKeysRef = Object(react["useRef"])([]); // 用于减少 defaultOpenKeys 计算的组件

  var defaultOpenKeysRef = Object(react["useRef"])([]);

  var _MenuCounter$useConta = Counter.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var _useState = Object(react["useState"])(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
      _useState2 = BaseMenu_slicedToArray(_useState, 2),
      defaultOpenAll = _useState2[0],
      setDefaultOpenAll = _useState2[1];

  var _useMergedState = useMergedState_default()(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) {
      return getOpenKeysFromMenuData(menuData) || [];
    }

    if (propsOpenKeys === false) {
      return false;
    }

    return [];
  }, {
    value: propsOpenKeys === false ? undefined : propsOpenKeys,
    onChange: handleOpenChange
  }),
      _useMergedState2 = BaseMenu_slicedToArray(_useMergedState, 2),
      openKeys = _useMergedState2[0],
      setOpenKeys = _useMergedState2[1];

  var _useMergedState3 = useMergedState_default()([], {
    value: propsSelectedKeys,
    onChange: onSelect ? function (keys) {
      if (onSelect && keys) {
        onSelect(keys);
      }
    } : undefined
  }),
      _useMergedState4 = BaseMenu_slicedToArray(_useMergedState3, 2),
      selectedKeys = _useMergedState4[0],
      setSelectedKeys = _useMergedState4[1];

  Object(react["useEffect"])(function () {
    if ((menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) || propsOpenKeys === false || flatMenuKeys.length) {
      return;
    }

    if (matchMenuKeys) {
      openKeysRef.current = matchMenuKeys;
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    }
  }, [matchMenuKeys.join('-')]);
  Object(react["useEffect"])(function () {
    // reset IconFont
    if (iconfontUrl) {
      IconFont = create({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  Object(react["useEffect"])(function () {
    // if pathname can't match, use the nearest parent's key
    var keys = matchMenuKeys;
    var animationFrameId = requestAnimationFrame(function () {
      if (keys.join('-') !== (selectedKeys || []).join('-')) {
        setSelectedKeys(keys);
      }

      if (!defaultOpenAll && propsOpenKeys !== false && keys.join('-') !== (openKeysRef.current || []).join('-')) {
        setOpenKeys(keys);
        openKeysRef.current = keys;
      } else if (flatMenuKeys.length > 0) {
        setDefaultOpenAll(false);
      }
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [matchMenuKeys.join('-'), collapsed]);
  var openKeysProps = Object(react["useMemo"])(function () {
    return getOpenKeysProps(openKeys, props);
  }, [openKeys && openKeys.join(','), props.layout, props.collapsed]);

  var _useState3 = Object(react["useState"])(function () {
    return new BaseMenu_MenuUtil(props);
  }),
      _useState4 = BaseMenu_slicedToArray(_useState3, 1),
      menuUtils = _useState4[0];

  if (menu === null || menu === void 0 ? void 0 : menu.loading) {
    return /*#__PURE__*/react_default.a.createElement(PageLoading["a" /* default */], null);
  }

  var cls = classnames_default()(className, {
    'top-nav-menu': mode === 'horizontal'
  }); // sync props

  menuUtils.props = props; // 这次 openKeys === false 的时候的情况，这种情况下帮用户选中一次
  // 第二此不会使用，所以用了 defaultOpenKeys
  // 这里返回 null，是为了让 defaultOpenKeys 生效

  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }

  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;

  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */], _extends({}, openKeysProps, {
    key: "Menu",
    mode: mode,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: theme,
    inlineIndent: 16,
    selectedKeys: selectedKeys,
    style: style,
    className: cls,
    onOpenChange: function onOpenChange(keys) {
      openKeysRef.current = keys;
      setOpenKeys(keys);
    }
  }, props.menuProps), menuUtils.getNavMenuItems(finallyData, false));
};

BaseMenu_BaseMenu.defaultProps = {
  postMenuData: function postMenuData(data) {
    return data || [];
  }
};
/* harmony default export */ var SiderMenu_BaseMenu = (BaseMenu_BaseMenu);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/SiderMenu/SiderMenu.js





function SiderMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function SiderMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      SiderMenu_ownKeys(Object(source), true).forEach(function (key) {
        SiderMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      SiderMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function SiderMenu_extends() {
  SiderMenu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SiderMenu_extends.apply(this, arguments);
}

function SiderMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







var Sider = es_layout["a" /* default */].Sider;
var SiderMenu_defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/react_default.a.createElement("img", {
      src: logo,
      alt: "logo"
    });
  }

  if (typeof logo === 'function') {
    return logo();
  }

  return logo;
};
var SiderMenu_defaultRenderLogoAndTitle = function defaultRenderLogoAndTitle(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
  var _props$logo = props.logo,
      logo = _props$logo === void 0 ? 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg' : _props$logo,
      title = props.title,
      layout = props.layout;
  var renderFunction = props[renderKey || ''];

  if (renderFunction === false) {
    return null;
  }

  var logoDom = SiderMenu_defaultRenderLogo(logo);
  var titleDom = /*#__PURE__*/react_default.a.createElement("h1", null, title);

  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }

  if (layout === 'mix' && renderKey === 'menuHeaderRender') {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("a", null, logoDom, props.collapsed ? null : titleDom);
};
var SiderMenu_defaultRenderCollapsedButton = function defaultRenderCollapsedButton(collapsed) {
  return collapsed ? /*#__PURE__*/react_default.a.createElement(icons_MenuUnfoldOutlined, null) : /*#__PURE__*/react_default.a.createElement(icons_MenuFoldOutlined, null);
};

var SiderMenu_SiderMenu = function SiderMenu(props) {
  var _classNames;

  var collapsed = props.collapsed,
      fixSiderbar = props.fixSiderbar,
      menuFooterRender = props.menuFooterRender,
      _onCollapse = props.onCollapse,
      theme = props.theme,
      siderWidth = props.siderWidth,
      isMobile = props.isMobile,
      onMenuHeaderClick = props.onMenuHeaderClick,
      _props$breakpoint = props.breakpoint,
      breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint,
      style = props.style,
      layout = props.layout,
      _props$menuExtraRende = props.menuExtraRender,
      menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende,
      _props$collapsedButto = props.collapsedButtonRender,
      collapsedButtonRender = _props$collapsedButto === void 0 ? SiderMenu_defaultRenderCollapsedButton : _props$collapsedButto,
      links = props.links,
      menuContentRender = props.menuContentRender,
      prefixCls = props.prefixCls,
      onOpenChange = props.onOpenChange,
      headerHeight = props.headerHeight;
  var baseClassName = "".concat(prefixCls, "-sider");

  var _MenuCounter$useConta = Counter.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var siderClassName = classnames_default()("".concat(baseClassName), (_classNames = {}, SiderMenu_defineProperty(_classNames, "".concat(baseClassName, "-fixed"), fixSiderbar), SiderMenu_defineProperty(_classNames, "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), SiderMenu_defineProperty(_classNames, "".concat(baseClassName, "-light"), theme === 'light'), _classNames));
  var headerDom = SiderMenu_defaultRenderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);
  var menuDom = menuContentRender !== false && flatMenuKeys && /*#__PURE__*/react_default.a.createElement(SiderMenu_BaseMenu, SiderMenu_extends({}, props, {
    mode: "inline",
    handleOpenChange: onOpenChange,
    style: {
      width: '100%'
    },
    className: "".concat(baseClassName, "-menu")
  }));
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, fixSiderbar && /*#__PURE__*/react_default.a.createElement("div", {
    style: SiderMenu_objectSpread({
      width: collapsed ? 48 : siderWidth,
      overflow: 'hidden',
      flex: "0 0 ".concat(collapsed ? 48 : siderWidth, "px"),
      maxWidth: collapsed ? 48 : siderWidth,
      minWidth: collapsed ? 48 : siderWidth
    }, style)
  }), /*#__PURE__*/react_default.a.createElement(Sider, {
    collapsible: true,
    trigger: null,
    collapsed: collapsed,
    breakpoint: breakpoint === false ? undefined : breakpoint,
    onCollapse: function onCollapse(collapse) {
      if (!isMobile) {
        if (_onCollapse) {
          _onCollapse(collapse);
        }
      }
    },
    collapsedWidth: 48,
    style: SiderMenu_objectSpread({
      overflow: 'hidden',
      paddingTop: layout === 'mix' && !isMobile ? headerHeight : undefined
    }, style),
    width: siderWidth,
    theme: theme,
    className: siderClassName
  }, headerDom && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-logo"),
    onClick: layout !== 'mix' ? onMenuHeaderClick : undefined,
    id: "logo"
  }, headerDom), extraDom && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-extra ").concat(!headerDom && "".concat(baseClassName, "-extra-no-logo"))
  }, extraDom), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, menuContentRender ? menuContentRender(props, menuDom) : menuDom), /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-links")
  }, /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */], {
    theme: theme,
    inlineIndent: 16,
    className: "".concat(baseClassName, "-link-menu"),
    selectedKeys: [],
    openKeys: [],
    mode: "inline"
  }, (links || []).map(function (node, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react_default.a.createElement(es_menu["a" /* default */].Item, {
        className: "".concat(baseClassName, "-link"),
        key: index
      }, node)
    );
  }), collapsedButtonRender && !isMobile && /*#__PURE__*/react_default.a.createElement(es_menu["a" /* default */].Item, {
    className: "".concat(baseClassName, "-collapsed-button"),
    title: false,
    onClick: function onClick() {
      if (_onCollapse) {
        _onCollapse(!collapsed);
      }
    }
  }, collapsedButtonRender(collapsed)))), menuFooterRender && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-footer")
  }, menuFooterRender(props))));
};

/* harmony default export */ var es_SiderMenu_SiderMenu = (SiderMenu_SiderMenu);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var rc_resize_observer_es = __webpack_require__("t23M");

// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/TopNavHeader/index.less
var es_TopNavHeader = __webpack_require__("8E2V");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/TopNavHeader/index.js
function TopNavHeader_extends() {
  TopNavHeader_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TopNavHeader_extends.apply(this, arguments);
}

function TopNavHeader_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function TopNavHeader_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      TopNavHeader_ownKeys(Object(source), true).forEach(function (key) {
        TopNavHeader_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      TopNavHeader_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function TopNavHeader_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function TopNavHeader_slicedToArray(arr, i) {
  return TopNavHeader_arrayWithHoles(arr) || TopNavHeader_iterableToArrayLimit(arr, i) || TopNavHeader_unsupportedIterableToArray(arr, i) || TopNavHeader_nonIterableRest();
}

function TopNavHeader_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function TopNavHeader_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return TopNavHeader_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TopNavHeader_arrayLikeToArray(o, minLen);
}

function TopNavHeader_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function TopNavHeader_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function TopNavHeader_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}







/**
 * 抽离出来是为了防止 rightSize 经常改变导致菜单 render
 * @param param0
 */

var TopNavHeader_RightContent = function RightContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
      props = _objectWithoutProperties(_ref, ["rightContentRender"]);

  var _useState = Object(react["useState"])('auto'),
      _useState2 = TopNavHeader_slicedToArray(_useState, 2),
      rightSize = _useState2[0],
      setRightSize = _useState2[1];

  return /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      minWidth: rightSize
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      paddingRight: 8
    }
  }, /*#__PURE__*/react_default.a.createElement(rc_resize_observer_es["a" /* default */], {
    onResize: function onResize(_ref2) {
      var width = _ref2.width;
      setRightSize(width);
    }
  }, rightContentRender && /*#__PURE__*/react_default.a.createElement("div", null, rightContentRender(TopNavHeader_objectSpread({}, props))))));
};

var TopNavHeader_TopNavHeader = function TopNavHeader(props) {
  var ref = Object(react["useRef"])(null);
  var theme = props.theme,
      onMenuHeaderClick = props.onMenuHeaderClick,
      contentWidth = props.contentWidth,
      rightContentRender = props.rightContentRender,
      propsClassName = props.className,
      style = props.style,
      layout = props.layout;
  var prefixCls = "".concat(props.prefixCls || 'ant-pro', "-top-nav-header");
  var headerDom = SiderMenu_defaultRenderLogoAndTitle(TopNavHeader_objectSpread(TopNavHeader_objectSpread({}, props), {}, {
    collapsed: false
  }), layout === 'mix' ? 'headerTitleRender' : undefined);
  var className = classnames_default()(prefixCls, propsClassName, {
    light: theme === 'light'
  });
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/react_default.a.createElement("div", {
    ref: ref,
    className: "".concat(prefixCls, "-main ").concat(contentWidth === 'Fixed' ? 'wide' : '')
  }, headerDom && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixCls, "-main-left"),
    onClick: onMenuHeaderClick
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixCls, "-logo"),
    key: "logo",
    id: "logo"
  }, headerDom)), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flex: 1
    },
    className: "".concat(prefixCls, "-menu")
  }, /*#__PURE__*/react_default.a.createElement(SiderMenu_BaseMenu, TopNavHeader_extends({}, props, props.menuProps))), rightContentRender && /*#__PURE__*/react_default.a.createElement(TopNavHeader_RightContent, TopNavHeader_extends({
    rightContentRender: rightContentRender
  }, props))));
};

/* harmony default export */ var pro_layout_es_TopNavHeader = (TopNavHeader_TopNavHeader);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/GlobalHeader/index.js
function GlobalHeader_extends() {
  GlobalHeader_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return GlobalHeader_extends.apply(this, arguments);
}

function GlobalHeader_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function GlobalHeader_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      GlobalHeader_ownKeys(Object(source), true).forEach(function (key) {
        GlobalHeader_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      GlobalHeader_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function GlobalHeader_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







var renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }

  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }

  return logoDom;
};

var GlobalHeader_GlobalHeader = function GlobalHeader(props) {
  var isMobile = props.isMobile,
      logo = props.logo,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse,
      _props$collapsedButto = props.collapsedButtonRender,
      collapsedButtonRender = _props$collapsedButto === void 0 ? SiderMenu_defaultRenderCollapsedButton : _props$collapsedButto,
      rightContentRender = props.rightContentRender,
      menuHeaderRender = props.menuHeaderRender,
      onMenuHeaderClick = props.onMenuHeaderClick,
      propClassName = props.className,
      style = props.style,
      layout = props.layout,
      children = props.children,
      _props$headerTheme = props.headerTheme,
      headerTheme = _props$headerTheme === void 0 ? 'dark' : _props$headerTheme,
      splitMenus = props.splitMenus,
      menuData = props.menuData,
      prefixCls = props.prefixCls;
  var baseClassName = "".concat(prefixCls, "-global-header");
  var className = classnames_default()(propClassName, baseClassName, GlobalHeader_defineProperty({}, "".concat(baseClassName, "-layout-").concat(layout), layout && headerTheme === 'dark'));

  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return GlobalHeader_objectSpread(GlobalHeader_objectSpread({}, item), {}, {
        children: undefined
      });
    });
    return /*#__PURE__*/react_default.a.createElement(pro_layout_es_TopNavHeader, GlobalHeader_extends({
      mode: "horizontal"
    }, props, {
      splitMenus: false,
      menuData: noChildrenMenuData,
      theme: headerTheme
    }));
  }

  var logoDom = /*#__PURE__*/react_default.a.createElement("span", {
    className: "".concat(baseClassName, "-logo"),
    key: "logo"
  }, /*#__PURE__*/react_default.a.createElement("a", null, SiderMenu_defaultRenderLogo(logo)));
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: className,
    style: GlobalHeader_objectSpread({}, style)
  }, isMobile && renderLogo(menuHeaderRender, logoDom), isMobile && collapsedButtonRender && /*#__PURE__*/react_default.a.createElement("span", {
    className: "".concat(baseClassName, "-collapsed-button"),
    onClick: function onClick() {
      if (onCollapse) {
        onCollapse(!collapsed);
      }
    }
  }, collapsedButtonRender(collapsed)), layout === 'mix' && !isMobile && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-logo"),
    onClick: onMenuHeaderClick
  }, SiderMenu_defaultRenderLogoAndTitle(GlobalHeader_objectSpread(GlobalHeader_objectSpread({}, props), {}, {
    collapsed: false
  }), 'headerTitleRender'))), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flex: 1
    }
  }, children), rightContentRender && rightContentRender(props));
};

/* harmony default export */ var pro_layout_es_GlobalHeader = (GlobalHeader_GlobalHeader);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/Header.js



function Header_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    Header_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    Header_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return Header_typeof(obj);
}

function Header_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function Header_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Header_ownKeys(Object(source), true).forEach(function (key) {
        Header_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Header_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Header_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function Header_extends() {
  Header_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Header_extends.apply(this, arguments);
}

function Header_classCallCheck(instance, Constructor) {
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
  if (call && (Header_typeof(call) === "object" || typeof call === "function")) {
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







var Header_Header = es_layout["a" /* default */].Header;

var Header_HeaderView = /*#__PURE__*/function (_Component) {
  _inherits(HeaderView, _Component);

  var _super = _createSuper(HeaderView);

  function HeaderView() {
    var _this;

    Header_classCallCheck(this, HeaderView);

    _this = _super.apply(this, arguments);

    _this.renderContent = function () {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          onCollapse = _this$props.onCollapse,
          navTheme = _this$props.navTheme,
          layout = _this$props.layout,
          headerRender = _this$props.headerRender,
          headerContentRender = _this$props.headerContentRender;
      var isTop = layout === 'top';
      var clearMenuData = clearMenuItem(_this.props.menuData || []);
      var defaultDom = /*#__PURE__*/react_default.a.createElement(pro_layout_es_GlobalHeader, Header_extends({
        onCollapse: onCollapse
      }, _this.props, {
        menuData: clearMenuData
      }), headerContentRender && headerContentRender(_this.props));

      if (isTop && !isMobile) {
        defaultDom = /*#__PURE__*/react_default.a.createElement(pro_layout_es_TopNavHeader, Header_extends({
          theme: navTheme,
          mode: "horizontal",
          onCollapse: onCollapse
        }, _this.props, {
          menuData: clearMenuData
        }));
      }

      if (headerRender && typeof headerRender === 'function') {
        return headerRender(_this.props, defaultDom);
      }

      return defaultDom;
    };

    return _this;
  }

  _createClass(HeaderView, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          fixedHeader = _this$props2.fixedHeader,
          layout = _this$props2.layout,
          propsClassName = _this$props2.className,
          style = _this$props2.style,
          collapsed = _this$props2.collapsed,
          siderWidth = _this$props2.siderWidth,
          hasSiderMenu = _this$props2.hasSiderMenu,
          isMobile = _this$props2.isMobile,
          prefixCls = _this$props2.prefixCls,
          headerHeight = _this$props2.headerHeight;
      var needFixedHeader = fixedHeader || layout === 'mix';
      var isTop = layout === 'top';
      var needSettingWidth = needFixedHeader && hasSiderMenu && !isTop && !isMobile;
      var className = classnames_default()(propsClassName, (_classNames = {}, Header_defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), needFixedHeader), Header_defineProperty(_classNames, "".concat(prefixCls, "-top-menu"), isTop), _classNames));
      /**
       * 计算侧边栏的宽度，不然导致左边的样式会出问题
       */

      var width = layout !== 'mix' && needSettingWidth ? "calc(100% - ".concat(collapsed ? 48 : siderWidth, "px)") : '100%';
      var right = needFixedHeader ? 0 : undefined;
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, needFixedHeader && /*#__PURE__*/react_default.a.createElement(Header_Header, {
        style: {
          height: headerHeight,
          lineHeight: "".concat(headerHeight, "px"),
          background: 'transparent'
        }
      }), /*#__PURE__*/react_default.a.createElement(Header_Header, {
        style: Header_objectSpread({
          padding: 0,
          height: headerHeight,
          lineHeight: "".concat(headerHeight, "px"),
          width: width,
          zIndex: layout === 'mix' ? 100 : 19,
          right: right
        }, style),
        className: className
      }, this.renderContent()));
    }
  }]);

  return HeaderView;
}(react["Component"]);

/* harmony default export */ var es_Header = (Header_HeaderView);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__("jfsG");
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/getPageTitle.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || getPageTitle_unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getPageTitle_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return getPageTitle_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getPageTitle_arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return getPageTitle_arrayLikeToArray(arr);
}

function getPageTitle_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


var getPageTitle_matchParamsPath = function matchParamsPath(pathname, breadcrumb, breadcrumbMap) {
  // Internal logic use breadcrumbMap to ensure the order
  // 内部逻辑使用 breadcrumbMap 来确保查询顺序
  if (breadcrumbMap) {
    var pathKey = _toConsumableArray(breadcrumbMap.keys()).find(function (key) {
      return path_to_regexp_default()(key).test(pathname);
    });

    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  } // External uses use breadcrumb
  // 外部用户使用 breadcrumb 参数


  if (breadcrumb) {
    var _pathKey = Object.keys(breadcrumb).find(function (key) {
      return path_to_regexp_default()(key).test(pathname);
    });

    if (_pathKey) {
      return breadcrumb[_pathKey];
    }
  }

  return {
    path: ''
  };
};
/**
 * 获取关于 pageTile 的所有信息方便包装
 * @param props
 * @param ignoreTile
 */

var getPageTitleInfo = function getPageTitleInfo(props, ignoreTile) {
  var _props$pathname = props.pathname,
      pathname = _props$pathname === void 0 ? '/' : _props$pathname,
      breadcrumb = props.breadcrumb,
      breadcrumbMap = props.breadcrumbMap,
      formatMessage = props.formatMessage,
      _props$title = props.title,
      title = _props$title === void 0 ? 'Ant Design Pro' : _props$title,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? {
    locale: false
  } : _props$menu;
  var pageTitle = ignoreTile ? '' : title || '';
  var currRouterData = getPageTitle_matchParamsPath(pathname, breadcrumb, breadcrumbMap);

  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle
    };
  }

  var pageName = currRouterData.name;

  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name
    });
  }

  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle
    };
  }

  if (ignoreTile || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName: pageName
    };
  }

  return {
    title: "".concat(pageName, " - ").concat(title),
    id: currRouterData.locale || '',
    pageName: pageName
  };
};



var getPageTitle = function getPageTitle(props, ignoreTile) {
  return getPageTitleInfo(props, ignoreTile).title;
};

/* harmony default export */ var es_getPageTitle = (getPageTitle);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js
/* harmony default export */ var settingDrawer = ({
  'app.setting.pagestyle': '整体风格设置',
  'app.setting.pagestyle.dark': '暗色菜单风格',
  'app.setting.pagestyle.light': '亮色菜单风格',
  'app.setting.content-width': '内容区域宽度',
  'app.setting.content-width.fixed': '定宽',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主题色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '极光绿',
  'app.setting.themecolor.daybreak': '拂晓蓝（默认）',
  'app.setting.themecolor.geekblue': '极客蓝',
  'app.setting.themecolor.purple': '酱紫',
  'app.setting.navigationmode': '导航模式',
  'app.setting.regionalsettings': '内容区域',
  'app.setting.regionalsettings.header': '顶栏',
  'app.setting.regionalsettings.menu': '菜单',
  'app.setting.regionalsettings.footer': '页脚',
  'app.setting.regionalsettings.menuHeader': '菜单头',
  'app.setting.sidemenu': '侧边菜单布局',
  'app.setting.topmenu': '顶部菜单布局',
  'app.setting.mixmenu': '混合菜单布局',
  'app.setting.splitMenus': '自动分割菜单',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定侧边菜单',
  'app.setting.fixedsidebar.hint': '侧边菜单布局时可配置',
  'app.setting.hideheader': '下滑时隐藏 Header',
  'app.setting.hideheader.hint': '固定 Header 时可配置',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷贝设置',
  'app.setting.loading': '正在加载主题',
  'app.setting.copyinfo': '拷贝成功，请到 src/defaultSettings.js 中替换默认配置',
  'app.setting.production.hint': '配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-CN.js
function zh_CN_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function zh_CN_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      zh_CN_ownKeys(Object(source), true).forEach(function (key) {
        zh_CN_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      zh_CN_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function zh_CN_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/* harmony default export */ var zh_CN = (zh_CN_objectSpread({}, settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js
/* harmony default export */ var zh_TW_settingDrawer = ({
  'app.setting.pagestyle': '整體風格設置',
  'app.setting.pagestyle.dark': '暗色菜單風格',
  'app.setting.pagestyle.light': '亮色菜單風格',
  'app.setting.content-width': '內容區域寬度',
  'app.setting.content-width.fixed': '定寬',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主題色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '極光綠',
  'app.setting.themecolor.daybreak': '拂曉藍（默認）',
  'app.setting.themecolor.geekblue': '極客藍',
  'app.setting.themecolor.purple': '醬紫',
  'app.setting.navigationmode': '導航模式',
  'app.setting.sidemenu': '側邊菜單布局',
  'app.setting.topmenu': '頂部菜單布局',
  'app.setting.mixmenu': '混合菜單布局',
  'app.setting.splitMenus': '自动分割菜单',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定側邊菜單',
  'app.setting.fixedsidebar.hint': '側邊菜單布局時可配置',
  'app.setting.hideheader': '下滑時隱藏 Header',
  'app.setting.hideheader.hint': '固定 Header 時可配置',
  'app.setting.othersettings': '其他設置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷貝設置',
  'app.setting.loading': '正在加載主題',
  'app.setting.copyinfo': '拷貝成功，請到 src/defaultSettings.js 中替換默認配置',
  'app.setting.production.hint': '配置欄只在開發環境用於預覽，生產環境不會展現，請拷貝後手動修改配置文件'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/zh-TW.js
function zh_TW_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function zh_TW_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      zh_TW_ownKeys(Object(source), true).forEach(function (key) {
        zh_TW_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      zh_TW_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function zh_TW_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/* harmony default export */ var zh_TW = (zh_TW_objectSpread({}, zh_TW_settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js
/* harmony default export */ var en_US_settingDrawer = ({
  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.content-width': 'Content Width',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
  'app.setting.themecolor.geekblue': 'Geek Blue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.regionalsettings': 'Regional Settings',
  'app.setting.regionalsettings.header': 'Header',
  'app.setting.regionalsettings.menu': 'Menu',
  'app.setting.regionalsettings.footer': 'Footer',
  'app.setting.regionalsettings.menuHeader': 'Menu Header',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.mixmenu': 'Mix Menu Layout',
  'app.setting.splitMenus': 'Split Menus',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
  'app.setting.hideheader': 'Hidden Header when scrolling',
  'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/en-US.js
function en_US_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function en_US_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      en_US_ownKeys(Object(source), true).forEach(function (key) {
        en_US_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      en_US_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function en_US_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/* harmony default export */ var en_US = (en_US_objectSpread({}, en_US_settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js
/* harmony default export */ var it_IT_settingDrawer = ({
  'app.setting.pagestyle': 'Impostazioni di stile',
  'app.setting.pagestyle.dark': 'Tema scuro',
  'app.setting.pagestyle.light': 'Tema chiaro',
  'app.setting.content-width': 'Largezza contenuto',
  'app.setting.content-width.fixed': 'Fissa',
  'app.setting.content-width.fluid': 'Fluida',
  'app.setting.themecolor': 'Colore del tema',
  'app.setting.themecolor.dust': 'Rosso polvere',
  'app.setting.themecolor.volcano': 'Vulcano',
  'app.setting.themecolor.sunset': 'Arancione tramonto',
  'app.setting.themecolor.cyan': 'Ciano',
  'app.setting.themecolor.green': 'Verde polare',
  'app.setting.themecolor.daybreak': 'Blu cielo mattutino (default)',
  'app.setting.themecolor.geekblue': 'Blu geek',
  'app.setting.themecolor.purple': 'Viola dorato',
  'app.setting.navigationmode': 'Modalità di navigazione',
  'app.setting.sidemenu': 'Menu laterale',
  'app.setting.topmenu': 'Menu in testata',
  'app.setting.mixmenu': 'Menu misto',
  'app.setting.splitMenus': 'Menu divisi',
  'app.setting.fixedheader': 'Testata fissa',
  'app.setting.fixedsidebar': 'Menu laterale fisso',
  'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
  'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
  'app.setting.hideheader.hint': 'Solo se abilitato Nascondi testata durante lo scorrimento',
  'app.setting.othersettings': 'Altre impostazioni',
  'app.setting.weakmode': 'Inverti colori',
  'app.setting.copy': 'Copia impostazioni',
  'app.setting.loading': 'Carico tema...',
  'app.setting.copyinfo': 'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
  'app.setting.production.hint': 'Questo pannello è visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente'
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/it-IT.js
function it_IT_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function it_IT_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      it_IT_ownKeys(Object(source), true).forEach(function (key) {
        it_IT_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      it_IT_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function it_IT_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/* harmony default export */ var it_IT = (it_IT_objectSpread({}, it_IT_settingDrawer));
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/locales/index.js





var locales_locales = {
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'en-US': en_US,
  'it-IT': it_IT
};

var locales_getLanguage = function getLanguage() {
  var lang; // support ssr

  if (!Object(isBrowser["a" /* default */])()) {
    return lang || '';
  }

  lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};


/* harmony default export */ var es_locales = (function () {
  var gLocale = locales_getLanguage();

  if (locales_locales[gLocale]) {
    return locales_locales[gLocale];
  }

  return locales_locales['zh-CN'];
});
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/Footer.js + 5 modules
var Footer = __webpack_require__("9W6o");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/RouteContext.js

var routeContext = Object(react["createContext"])({});
/* harmony default export */ var RouteContext = (routeContext);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var es_style = __webpack_require__("cIOH");

// EXTERNAL MODULE: ./node_modules/antd/es/drawer/style/index.less
var drawer_style = __webpack_require__("CWI+");

// CONCATENATED MODULE: ./node_modules/antd/es/drawer/style/index.js
// deps-lint-skip: empty


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("PJYZ");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__("LQ03");
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var esm_classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var esm_createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var esm_inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("md7G");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("foSv");

// EXTERNAL MODULE: ./node_modules/rc-util/es/PortalWrapper.js + 2 modules
var PortalWrapper = __webpack_require__("1W/9");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var esm_assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__("qx4F");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// CONCATENATED MODULE: ./node_modules/rc-drawer/es/utils.js
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};
// CONCATENATED MODULE: ./node_modules/rc-drawer/es/DrawerChild.js









function DrawerChild_createSuper(Derived) {
  var hasNativeReflectConstruct = DrawerChild_isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(getPrototypeOf["a" /* default */])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(possibleConstructorReturn["a" /* default */])(this, result);
  };
}

function DrawerChild_isNativeReflectConstruct() {
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






var currentDrawer = {};

var DrawerChild_DrawerChild = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(DrawerChild, _React$Component);

  var _super = DrawerChild_createSuper(DrawerChild);

  function DrawerChild(props) {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, DrawerChild);

    _this = _super.call(this, props);

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if ((currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && getTouchParentScroll(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      removeEventListener(dom, transitionEnd, _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === KeyCode["a" /* default */].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router 切换时可能会导至页面失去滚动条，所以需要时时获取。

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        addEventListener(dom, transitionEnd, _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = transformArguments(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(getScrollBarSize["a" /* default */])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getOpenCount = _this$props4.getOpenCount,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer();
      var openCount = getOpenCount && getOpenCount(); // 处理 body 滚动

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          if (openCount === 1) {
            document.body.style.overflow = 'hidden';
          }

          document.body.style.touchAction = 'none'; // 手机禁滚

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            addEventListener(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          // 没有弹框的状态下清除 overflow;
          if (!openCount) {
            document.body.style.overflow = '';
          }

          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // 恢复事件


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            removeEventListener(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease,
          getOpenCount = _this$props5.getOpenCount,
          switchScrollingEffect = _this$props5.switchScrollingEffect;
      var openCount = getOpenCount && getOpenCount();

      if (openCount === 1) {
        switchScrollingEffect();
      }

      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease,
          getOpenCount = _this$props6.getOpenCount,
          switchScrollingEffect = _this$props6.switchScrollingEffect;
      var openCount = getOpenCount && getOpenCount();

      if (!openCount) {
        switchScrollingEffect(true);
      }

      if (transitionStr) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (windowIsUndefined) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        dataToArray(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: Object(esm_assertThisInitialized["a" /* default */])(_this)
    };
    return _this;
  }

  Object(esm_createClass["a" /* default */])(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!windowIsUndefined) {
        var passiveSupported = false;

        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
              return null;
            }
          }));
        } catch (err) {}

        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var _this$props7 = this.props,
          open = _this$props7.open,
          getContainer = _this$props7.getContainer;
      var container = getContainer && getContainer();
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = open;
        } // 默认打开状态时推出 level;


        this.openLevelTransition();
        this.forceUpdate(function () {
          _this2.domFocus();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props8 = this.props,
          open = _this$props8.open,
          getContainer = _this$props8.getContainer;
      var container = getContainer && getContainer();

      if (open !== prevProps.open) {
        if (open) {
          this.domFocus();
        }

        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = !!open;
        }

        this.openLevelTransition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props9 = this.props,
          getOpenCount = _this$props9.getOpenCount,
          open = _this$props9.open,
          switchScrollingEffect = _this$props9.switchScrollingEffect;
      var openCount = typeof getOpenCount === 'function' && getOpenCount();
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      if (!openCount) {
        document.body.style.overflow = '';
        switchScrollingEffect(true);
      }
    } // tslint:disable-next-line:member-ordering

  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props10 = this.props,
          className = _this$props10.className,
          children = _this$props10.children,
          style = _this$props10.style,
          width = _this$props10.width,
          height = _this$props10.height,
          defaultOpen = _this$props10.defaultOpen,
          $open = _this$props10.open,
          prefixCls = _this$props10.prefixCls,
          placement = _this$props10.placement,
          level = _this$props10.level,
          levelMove = _this$props10.levelMove,
          ease = _this$props10.ease,
          duration = _this$props10.duration,
          getContainer = _this$props10.getContainer,
          handler = _this$props10.handler,
          onChange = _this$props10.onChange,
          afterVisibleChange = _this$props10.afterVisibleChange,
          showMask = _this$props10.showMask,
          maskClosable = _this$props10.maskClosable,
          maskStyle = _this$props10.maskStyle,
          onClose = _this$props10.onClose,
          onHandleClick = _this$props10.onHandleClick,
          keyboard = _this$props10.keyboard,
          getOpenCount = _this$props10.getOpenCount,
          switchScrollingEffect = _this$props10.switchScrollingEffect,
          props = Object(objectWithoutProperties["a" /* default */])(_this$props10, ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount", "switchScrollingEffect"]); // 首次渲染都将是关闭状态。


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames_default()(prefixCls, (_classnames = {}, Object(esm_defineProperty["a" /* default */])(_classnames, "".concat(prefixCls, "-").concat(placement), true), Object(esm_defineProperty["a" /* default */])(_classnames, "".concat(prefixCls, "-open"), open), Object(esm_defineProperty["a" /* default */])(_classnames, className || '', !!className), Object(esm_defineProperty["a" /* default */])(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && react["cloneElement"](handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return react["createElement"]("div", Object.assign({}, props, {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && react["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), react["createElement"]("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: {
          transform: transform,
          msTransform: transform,
          width: isNumeric(width) ? "".concat(width, "px") : width,
          height: isNumeric(height) ? "".concat(height, "px") : height
        },
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, react["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        },
        onTouchStart: open && showMask ? this.removeStartHandler : undefined,
        onTouchMove: open && showMask ? this.removeMoveHandler : undefined
      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test 的 bug, 有动画过场，删除 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react["Component"]);

DrawerChild_DrawerChild.defaultProps = {
  switchScrollingEffect: function switchScrollingEffect() {}
};
/* harmony default export */ var es_DrawerChild = (DrawerChild_DrawerChild);
// CONCATENATED MODULE: ./node_modules/rc-drawer/es/DrawerWrapper.js







function DrawerWrapper_createSuper(Derived) {
  var hasNativeReflectConstruct = DrawerWrapper_isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(getPrototypeOf["a" /* default */])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(possibleConstructorReturn["a" /* default */])(this, result);
  };
}

function DrawerWrapper_isNativeReflectConstruct() {
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





var DrawerWrapper_DrawerWrapper = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(DrawerWrapper, _React$Component);

  var _super = DrawerWrapper_createSuper(DrawerWrapper);

  function DrawerWrapper(props) {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, DrawerWrapper);

    _this = _super.call(this, props);

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var _open = _this.state.open;

        _this.setState({
          open: !_open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;
    _this.state = {
      open: open
    };

    if ('onMaskClick' in props) {
      console.warn('`onMaskClick` are removed, please use `onClose` instead.');
    }

    return _this;
  }

  Object(esm_createClass["a" /* default */])(DrawerWrapper, [{
    key: "render",
    // tslint:disable-next-line:member-ordering
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = Object(objectWithoutProperties["a" /* default */])(_this$props3, ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"]);

      var open = this.state.open; // 渲染在当前 dom 里；

      if (!getContainer) {
        return react["createElement"]("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, react["createElement"](es_DrawerChild, Object.assign({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // 如果有 handler 为内置强制渲染；


      var $forceRender = !!handler || forceRender;
      return react["createElement"](PortalWrapper["a" /* default */], {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = Object(objectWithoutProperties["a" /* default */])(_ref, ["visible", "afterClose"]);

        return (// react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
          react["createElement"](es_DrawerChild, Object.assign({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react["Component"]);

DrawerWrapper_DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: react["createElement"]("div", {
    className: "drawer-handle"
  }, react["createElement"]("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false
};
/* harmony default export */ var es_DrawerWrapper = (DrawerWrapper_DrawerWrapper);
// CONCATENATED MODULE: ./node_modules/rc-drawer/es/index.js
// export this package's api

/* harmony default export */ var rc_drawer_es = (es_DrawerWrapper);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__("V/uB");
var CloseOutlined_default = /*#__PURE__*/__webpack_require__.n(CloseOutlined);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var config_provider_context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// CONCATENATED MODULE: ./node_modules/antd/es/drawer/index.js








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









var DrawerContext = /*#__PURE__*/react["createContext"](null);
var PlacementTypes = Object(_util_type["a" /* tuple */])('top', 'right', 'bottom', 'left');
var defaultPushState = {
  distance: 180
};

var drawer_Drawer = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Drawer, _React$Component);

  var _super = createSuper_default()(Drawer);

  function Drawer() {
    var _this;

    classCallCheck_default()(this, Drawer);

    _this = _super.apply(this, arguments);
    _this.state = {
      push: false
    };

    _this.push = function () {
      if (_this.props.push) {
        _this.setState({
          push: true
        });
      }
    };

    _this.pull = function () {
      if (_this.props.push) {
        _this.setState({
          push: false
        });
      }
    };

    _this.onDestroyTransitionEnd = function () {
      var isDestroyOnClose = _this.getDestroyOnClose();

      if (!isDestroyOnClose) {
        return;
      }

      if (!_this.props.visible) {
        _this.destroyClose = true;

        _this.forceUpdate();
      }
    };

    _this.getDestroyOnClose = function () {
      return _this.props.destroyOnClose && !_this.props.visible;
    };

    _this.getPushDistance = function () {
      var push = _this.props.push;
      var distance;

      if (typeof push === 'boolean') {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }

      return parseFloat(String(distance || 0));
    }; // get drawer push width or height


    _this.getPushTransform = function (placement) {
      var distance = _this.getPushDistance();

      if (placement === 'left' || placement === 'right') {
        return "translateX(".concat(placement === 'left' ? distance : -distance, "px)");
      }

      if (placement === 'top' || placement === 'bottom') {
        return "translateY(".concat(placement === 'top' ? distance : -distance, "px)");
      }
    };

    _this.getRcDrawerStyle = function () {
      var _this$props = _this.props,
          zIndex = _this$props.zIndex,
          placement = _this$props.placement,
          mask = _this$props.mask,
          style = _this$props.style;
      var push = _this.state.push; // 当无 mask 时，将 width 应用到外层容器上
      // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题

      var offsetStyle = mask ? {} : _this.getOffsetStyle();
      return extends_default()(extends_default()({
        zIndex: zIndex,
        transform: push ? _this.getPushTransform(placement) : undefined
      }, offsetStyle), style);
    }; // render drawer body dom


    _this.renderBody = function () {
      var _this$props2 = _this.props,
          bodyStyle = _this$props2.bodyStyle,
          drawerStyle = _this$props2.drawerStyle,
          prefixCls = _this$props2.prefixCls,
          visible = _this$props2.visible;

      if (_this.destroyClose && !visible) {
        return null;
      }

      _this.destroyClose = false;
      var containerStyle = {};

      var isDestroyOnClose = _this.getDestroyOnClose();

      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }

      return /*#__PURE__*/react["createElement"]("div", {
        className: "".concat(prefixCls, "-wrapper-body"),
        style: extends_default()(extends_default()({}, containerStyle), drawerStyle),
        onTransitionEnd: _this.onDestroyTransitionEnd
      }, _this.renderHeader(), /*#__PURE__*/react["createElement"]("div", {
        className: "".concat(prefixCls, "-body"),
        style: bodyStyle
      }, _this.props.children), _this.renderFooter());
    }; // render Provider for Multi-level drawer


    _this.renderProvider = function (value) {
      _this.parentDrawer = value;

      var _a = _this.props,
          prefixCls = _a.prefixCls,
          placement = _a.placement,
          className = _a.className,
          mask = _a.mask,
          direction = _a.direction,
          visible = _a.visible,
          rest = __rest(_a, ["prefixCls", "placement", "className", "mask", "direction", "visible"]);

      var drawerClassName = classnames_default()(defineProperty_default()({
        'no-mask': !mask
      }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      var offsetStyle = mask ? _this.getOffsetStyle() : {};
      return /*#__PURE__*/react["createElement"](DrawerContext.Provider, {
        value: assertThisInitialized_default()(_this)
      }, /*#__PURE__*/react["createElement"](rc_drawer_es, extends_default()({
        handler: false
      }, Object(omit_js_es["a" /* default */])(rest, ['zIndex', 'closable', 'closeIcon', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'footerStyle', 'footer', 'title', 'push', 'visible', 'width', 'height']), offsetStyle, {
        prefixCls: prefixCls,
        open: visible,
        showMask: mask,
        placement: placement,
        style: _this.getRcDrawerStyle(),
        className: drawerClassName
      }), _this.renderBody()));
    };

    return _this;
  }

  createClass_default()(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // fix: delete drawer in child and re-render, no push started.
      // <Drawer>{show && <Drawer />}</Drawer>
      var visible = this.props.visible;

      if (visible && this.parentDrawer) {
        this.parentDrawer.push();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      var visible = this.props.visible;

      if (preProps.visible !== visible && this.parentDrawer) {
        if (visible) {
          this.parentDrawer.push();
        } else {
          this.parentDrawer.pull();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmount drawer in child, clear push.
      if (this.parentDrawer) {
        this.parentDrawer.pull();
        this.parentDrawer = null;
      }
    }
  }, {
    key: "getOffsetStyle",
    value: function getOffsetStyle() {
      var _this$props3 = this.props,
          placement = _this$props3.placement,
          width = _this$props3.width,
          height = _this$props3.height,
          visible = _this$props3.visible,
          mask = _this$props3.mask; // https://github.com/ant-design/ant-design/issues/24287

      if (!visible && !mask) {
        return {};
      }

      var offsetStyle = {};

      if (placement === 'left' || placement === 'right') {
        offsetStyle.width = width;
      } else {
        offsetStyle.height = height;
      }

      return offsetStyle;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props4 = this.props,
          title = _this$props4.title,
          prefixCls = _this$props4.prefixCls,
          closable = _this$props4.closable,
          headerStyle = _this$props4.headerStyle;

      if (!title && !closable) {
        return null;
      }

      var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
      return /*#__PURE__*/react["createElement"]("div", {
        className: headerClassName,
        style: headerStyle
      }, title && /*#__PURE__*/react["createElement"]("div", {
        className: "".concat(prefixCls, "-title")
      }, title), closable && this.renderCloseIcon());
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props5 = this.props,
          footer = _this$props5.footer,
          footerStyle = _this$props5.footerStyle,
          prefixCls = _this$props5.prefixCls;

      if (!footer) {
        return null;
      }

      var footerClassName = "".concat(prefixCls, "-footer");
      return /*#__PURE__*/react["createElement"]("div", {
        className: footerClassName,
        style: footerStyle
      }, footer);
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var _this$props6 = this.props,
          closable = _this$props6.closable,
          _this$props6$closeIco = _this$props6.closeIcon,
          closeIcon = _this$props6$closeIco === void 0 ? /*#__PURE__*/react["createElement"](CloseOutlined_default.a, null) : _this$props6$closeIco,
          prefixCls = _this$props6.prefixCls,
          onClose = _this$props6.onClose;
      return closable && /*#__PURE__*/react["createElement"]("button", {
        type: "button",
        onClick: onClose,
        "aria-label": "Close",
        className: "".concat(prefixCls, "-close"),
        style: {
          '--scroll-bar': "".concat(Object(getScrollBarSize["a" /* default */])(), "px")
        }
      }, closeIcon);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react["createElement"](DrawerContext.Consumer, null, this.renderProvider);
    }
  }]);

  return Drawer;
}(react["Component"]);

drawer_Drawer.defaultProps = {
  width: 256,
  height: 256,
  closable: true,
  placement: 'right',
  maskClosable: true,
  mask: true,
  level: null,
  keyboard: true,
  push: defaultPushState
};

var drawer_DrawerWrapper = function DrawerWrapper(props) {
  var customizePrefixCls = props.prefixCls,
      customizeGetContainer = props.getContainer;

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var getContainer = // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  return /*#__PURE__*/react["createElement"](drawer_Drawer, extends_default()({}, props, {
    prefixCls: prefixCls,
    getContainer: getContainer,
    direction: direction
  }));
};

drawer_DrawerWrapper.displayName = 'DrawerWrapper';
/* harmony default export */ var drawer = (drawer_DrawerWrapper);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/SiderMenu/index.js



function es_SiderMenu_extends() {
  es_SiderMenu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return es_SiderMenu_extends.apply(this, arguments);
}

function es_SiderMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function es_SiderMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      es_SiderMenu_ownKeys(Object(source), true).forEach(function (key) {
        es_SiderMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      es_SiderMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function es_SiderMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








var SiderMenu_SiderMenuWrapper = function SiderMenuWrapper(props) {
  var isMobile = props.isMobile,
      menuData = props.menuData,
      siderWidth = props.siderWidth,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse,
      style = props.style,
      className = props.className,
      hide = props.hide,
      getContainer = props.getContainer,
      prefixCls = props.prefixCls,
      matchMenuKeys = props.matchMenuKeys;

  var _MenuCounter$useConta = Counter.useContainer(),
      setFlatMenuKeys = _MenuCounter$useConta.setFlatMenuKeys;

  Object(react["useEffect"])(function () {
    if (!menuData || menuData.length < 1) {
      return function () {
        return null;
      };
    } // 当 menu data 改变的时候重新计算这两个参数


    var newFlatMenus = Object(route_utils_es["a" /* getFlatMenus */])(menuData);
    var animationFrameId = requestAnimationFrame(function () {
      setFlatMenuKeys(Object.keys(newFlatMenus));
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [matchMenuKeys.join('-')]);
  Object(react["useEffect"])(function () {
    if (isMobile === true) {
      if (onCollapse) {
        onCollapse(true);
      }
    }
  }, [isMobile]);
  var omitProps = Object(omit_js_es["a" /* default */])(props, ['className', 'style']);

  if (hide) {
    return null;
  }

  return isMobile ? /*#__PURE__*/react_default.a.createElement(drawer, {
    visible: !collapsed,
    placement: "left",
    className: classnames_default()("".concat(prefixCls, "-drawer-sider"), className),
    onClose: function onClose() {
      return onCollapse && onCollapse(true);
    },
    style: es_SiderMenu_objectSpread({
      padding: 0,
      height: '100vh'
    }, style),
    getContainer: getContainer,
    width: siderWidth,
    bodyStyle: {
      height: '100vh',
      padding: 0,
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/react_default.a.createElement(es_SiderMenu_SiderMenu, es_SiderMenu_extends({}, omitProps, {
    className: classnames_default()("".concat(prefixCls, "-sider"), className),
    collapsed: isMobile ? false : collapsed,
    splitMenus: false
  }))) : /*#__PURE__*/react_default.a.createElement(es_SiderMenu_SiderMenu, es_SiderMenu_extends({
    className: classnames_default()("".concat(prefixCls, "-sider"), className)
  }, omitProps, {
    style: style
  }));
};

SiderMenu_SiderMenuWrapper.defaultProps = {
  onCollapse: function onCollapse() {
    return undefined;
  }
};
/* harmony default export */ var pro_layout_es_SiderMenu = (SiderMenu_SiderMenuWrapper);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/pathTools.js
// /userInfo/2144/id => ['/userInfo','/userInfo/2144,'/userInfo/2144/id']
// eslint-disable-next-line import/prefer-default-export
function urlToList(url) {
  if (!url || url === '/') {
    return ['/'];
  }

  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (urlItem, index) {
    return "/".concat(urlList.slice(0, index + 1).join('/'));
  });
}
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js
function getBreadcrumbProps_toConsumableArray(arr) {
  return getBreadcrumbProps_arrayWithoutHoles(arr) || getBreadcrumbProps_iterableToArray(arr) || getBreadcrumbProps_unsupportedIterableToArray(arr) || getBreadcrumbProps_nonIterableSpread();
}

function getBreadcrumbProps_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getBreadcrumbProps_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return getBreadcrumbProps_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getBreadcrumbProps_arrayLikeToArray(o, minLen);
}

function getBreadcrumbProps_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function getBreadcrumbProps_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return getBreadcrumbProps_arrayLikeToArray(arr);
}

function getBreadcrumbProps_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}




 // 渲染Breadcrumb 子节点
// Render the Breadcrumb child node

var getBreadcrumbProps_defaultItemRender = function defaultItemRender(_ref) {
  var breadcrumbName = _ref.breadcrumbName,
      path = _ref.path;
  return /*#__PURE__*/react_default.a.createElement("a", {
    href: path
  }, breadcrumbName);
};

var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? {
    locale: false
  } : _props$menu;

  if (item.locale && formatMessage && menu.locale !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }

  return item.name;
};

var getBreadcrumbProps_getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
  if (!breadcrumbMap) {
    return {
      path: ''
    };
  }

  var breadcrumbItem = breadcrumbMap.get(url);

  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // 按照 route config 定义的顺序找到第一个匹配的路径
    var targetPath = getBreadcrumbProps_toConsumableArray(breadcrumbMap.keys()).find(function (path) {
      return (// remove ? ,不然会重复
        path_to_regexp_default()(path.replace('?', '')).test(url)
      );
    });

    if (targetPath) {
      breadcrumbItem = breadcrumbMap.get(targetPath);
    }
  }

  return breadcrumbItem || {
    path: ''
  };
};
var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
      breadcrumbMap = props.breadcrumbMap;
  return {
    location: location,
    breadcrumbMap: breadcrumbMap
  };
};

var getBreadcrumbProps_conversionFromLocation = function conversionFromLocation() {
  var routerLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pathname: '/'
  };
  var breadcrumbMap = arguments.length > 1 ? arguments[1] : undefined;
  var props = arguments.length > 2 ? arguments[2] : undefined;

  if (!routerLocation) {
    return [];
  } // Convertor the url to an array


  var pathSnippets = urlToList(routerLocation.pathname); // Loop data mosaic routing

  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    // For application that has configured router base
    // @ts-ignore
    var _ref2 = Object(isBrowser["a" /* default */])() ? window : {},
        _ref2$routerBase = _ref2.routerBase,
        routerBase = _ref2$routerBase === void 0 ? '/' : _ref2$routerBase;

    var realPath = routerBase === '/' ? url : "".concat(routerBase).concat(url);
    var currentBreadcrumb = getBreadcrumbProps_getBreadcrumb(breadcrumbMap, url);

    if (currentBreadcrumb.inherited) {
      return {
        path: '',
        breadcrumbName: ''
      };
    }

    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      path: realPath,
      breadcrumbName: name,
      component: currentBreadcrumb.component
    } : {
      path: '',
      breadcrumbName: ''
    };
  }).filter(function (item) {
    return item && item.path;
  });
  return extraBreadcrumbItems;
};
/**
 * 将参数转化为面包屑
 * Convert parameters into breadcrumbs
 */


var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
      location = _getBreadcrumbFromPro.location,
      breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap; // 根据 location 生成 面包屑
  // Generate breadcrumbs based on location


  if (location && location.pathname && breadcrumbMap) {
    return getBreadcrumbProps_conversionFromLocation(location, breadcrumbMap, props);
  }

  return [];
}; // use breadcrumbRender to change routes

var getBreadcrumbProps = function getBreadcrumbProps(props) {
  var breadcrumbRender = props.breadcrumbRender,
      propsItemRender = props.itemRender;
  var routesArray = genBreadcrumbProps(props);
  var itemRender = propsItemRender || getBreadcrumbProps_defaultItemRender;
  var routes = routesArray; // if routes.length =1, don't show it

  if (breadcrumbRender) {
    routes = breadcrumbRender(routes) || [];
  }

  if (routes && routes.length < 2) {
    routes = undefined;
  }

  return {
    routes: routes,
    itemRender: itemRender
  };
};
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/getMenuData.js
function getMenuData_slicedToArray(arr, i) {
  return getMenuData_arrayWithHoles(arr) || getMenuData_iterableToArrayLimit(arr, i) || getMenuData_unsupportedIterableToArray(arr, i) || getMenuData_nonIterableRest();
}

function getMenuData_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getMenuData_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function getMenuData_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function getMenuData_toConsumableArray(arr) {
  return getMenuData_arrayWithoutHoles(arr) || getMenuData_iterableToArray(arr) || getMenuData_unsupportedIterableToArray(arr) || getMenuData_nonIterableSpread();
}

function getMenuData_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getMenuData_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return getMenuData_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getMenuData_arrayLikeToArray(o, minLen);
}

function getMenuData_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function getMenuData_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return getMenuData_arrayLikeToArray(arr);
}

function getMenuData_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}



function fromEntries(iterable) {
  return getMenuData_toConsumableArray(iterable).reduce(function (obj, _ref) {
    var _ref2 = getMenuData_slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1]; // eslint-disable-next-line no-param-reassign


    obj[key] = val;
    return obj;
  }, {});
}

/* harmony default export */ var getMenuData = (function (routes, menu, formatMessage, menuDataRender) {
  var _transformRoute = Object(route_utils_es["c" /* transformRoute */])(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true),
      menuData = _transformRoute.menuData,
      breadcrumb = _transformRoute.breadcrumb;

  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData: menuData
    };
  }

  var renderData = Object(route_utils_es["c" /* transformRoute */])(menuDataRender(menuData), (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true);
  return {
    breadcrumb: fromEntries(renderData.breadcrumb),
    breadcrumbMap: renderData.breadcrumb,
    menuData: renderData.menuData
  };
});
// EXTERNAL MODULE: ./node_modules/rc-util/lib/warning.js
var lib_warning = __webpack_require__("cOkC");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/zh_CN.js
/* harmony default export */ var locale_zh_CN = ({
  moneySymbol: '￥',
  form: {
    lightFilter: {
      more: '更多筛选',
      clear: '清除',
      confirm: '确认',
      itemUnit: '项'
    }
  },
  tableForm: {
    search: '查询',
    reset: '重置',
    submit: '提交',
    collapsed: '展开',
    expand: '收起',
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择'
  },
  alert: {
    clear: '取消选择',
    selected: '已选择',
    item: '项'
  },
  pagination: {
    total: {
      range: '第',
      total: '条/总共',
      item: '条'
    }
  },
  tableToolBar: {
    leftPin: '固定在列首',
    rightPin: '固定在列尾',
    noPin: '不固定',
    leftFixedTitle: '固定在左侧',
    rightFixedTitle: '固定在右侧',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列设置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '默认',
    densityMiddle: '中等',
    densitySmall: '紧凑'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/en_US.js
/* harmony default export */ var locale_en_US = ({
  moneySymbol: '$',
  form: {
    lightFilter: {
      more: 'More',
      clear: 'Clear',
      confirm: 'Confirm',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed the left',
    rightFixedTitle: 'Fixed the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Next',
    prev: 'Previous',
    submit: 'Finish'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/vi_VN.js
/* harmony default export */ var vi_VN = ({
  moneySymbol: '₫',
  tableForm: {
    search: 'Tìm kiếm',
    reset: 'Làm lại',
    submit: 'Gửi đi',
    collapsed: 'Mở rộng',
    expand: 'Thu gọn',
    inputPlaceholder: 'nhập dữ liệu',
    selectPlaceholder: 'Vui lòng chọn'
  },
  alert: {
    clear: 'Xóa',
    selected: 'đã chọn',
    item: 'mục'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'trên',
      item: 'mặt hàng'
    }
  },
  tableToolBar: {
    leftPin: 'Ghim trái',
    rightPin: 'Ghim phải',
    noPin: 'Bỏ ghim',
    leftFixedTitle: 'Cố định trái',
    rightFixedTitle: 'Cố định phải',
    noFixedTitle: 'Chưa cố định',
    reset: 'Làm lại',
    columnDisplay: 'Cột hiển thị',
    columnSetting: 'Cấu hình',
    fullScreen: 'Chế độ toàn màn hình',
    exitFullScreen: 'Thoát chế độ toàn màn hình',
    reload: 'Làm mới',
    density: 'Mật độ hiển thị',
    densityDefault: 'Mặc định',
    densityLarger: 'Mặc định',
    densityMiddle: 'Trung bình',
    densitySmall: 'Chật'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/it_IT.js
/* harmony default export */ var locale_it_IT = ({
  moneySymbol: '€',
  tableForm: {
    search: 'Filtra',
    reset: 'Pulisci',
    submit: 'Invia',
    collapsed: 'Espandi',
    expand: 'Contrai',
    inputPlaceholder: 'Digita',
    selectPlaceholder: 'Seleziona'
  },
  alert: {
    clear: 'Rimuovi',
    selected: 'Selezionati',
    item: 'elementi'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'di',
      item: 'elementi'
    }
  },
  tableToolBar: {
    leftPin: 'Fissa a sinistra',
    rightPin: 'Fissa a destra',
    noPin: 'Ripristina posizione',
    leftFixedTitle: 'Fissato a sinistra',
    rightFixedTitle: 'Fissato a destra',
    noFixedTitle: 'Non fissato',
    reset: 'Ripristina',
    columnDisplay: 'Disposizione colonne',
    columnSetting: 'Impostazioni',
    fullScreen: 'Modalità schermo intero',
    exitFullScreen: 'Esci da modalità schermo intero',
    reload: 'Ricarica',
    density: 'Grandezza tabella',
    densityLarger: 'Grande',
    densityMiddle: 'Media',
    densitySmall: 'Compatta'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/es_ES.js
/* harmony default export */ var es_ES = ({
  moneySymbol: '€',
  tableForm: {
    search: 'Buscar',
    reset: 'Limpiar',
    submit: 'Submit',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Ingrese valor',
    selectPlaceholder: 'Seleccione valor'
  },
  alert: {
    clear: 'Limpiar',
    selected: 'Seleccionado',
    item: 'Articulo'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'artículos'
    }
  },
  tableToolBar: {
    leftPin: 'Pin a la izquierda',
    rightPin: 'Pin a la derecha',
    noPin: 'Sin Pin',
    leftFixedTitle: 'Fijado a la izquierda',
    rightFixedTitle: 'Fijado a la derecha',
    noFixedTitle: 'Sin Fijar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuración',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Salir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densidad',
    densityDefault: 'Por Defecto',
    densityLarger: 'Largo',
    densityMiddle: 'Medio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Siguiente',
    prev: 'Anterior',
    submit: 'Finalizar'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/ja_JP.js
/* harmony default export */ var ja_JP = ({
  moneySymbol: '¥',
  tableForm: {
    search: '検索',
    reset: 'リセット',
    submit: '提交',
    collapsed: '展開',
    expand: '収納',
    inputPlaceholder: '入力してください',
    selectPlaceholder: '選択してください'
  },
  alert: {
    clear: 'クリア',
    selected: '選択した',
    item: '項目'
  },
  pagination: {
    total: {
      range: '記事',
      total: '/合計',
      item: ' '
    }
  },
  tableToolBar: {
    leftPin: '左に固定',
    rightPin: '右に固定',
    noPin: 'キャンセル',
    leftFixedTitle: '左に固定された項目',
    rightFixedTitle: '右に固定された項目',
    noFixedTitle: '固定されてない項目',
    reset: 'リセット',
    columnDisplay: '表示列',
    columnSetting: '列表示設定',
    fullScreen: 'フルスクリーン',
    exitFullScreen: '終了',
    reload: '更新',
    density: '行高',
    densityLarger: '默认',
    densityMiddle: '中',
    densitySmall: '小'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/ru_RU.js
/* harmony default export */ var ru_RU = ({
  moneySymbol: '₽',
  tableForm: {
    search: 'Найти',
    reset: 'Сброс',
    submit: 'Отправить',
    collapsed: 'Развернуть',
    expand: 'Свернуть',
    inputPlaceholder: 'Введите значение',
    selectPlaceholder: 'Выберите значение'
  },
  alert: {
    clear: 'Очистить',
    selected: 'выбранный',
    item: 'предмет'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'из',
      item: 'предметов'
    }
  },
  tableToolBar: {
    leftPin: 'Закрепить слева',
    rightPin: 'Закрепить справа',
    noPin: 'Открепить',
    leftFixedTitle: 'Закреплено слева',
    rightFixedTitle: 'Закреплено справа',
    noFixedTitle: 'Не закреплено',
    reset: 'Сброс',
    columnDisplay: 'Отображение столбца',
    columnSetting: 'Настройки',
    fullScreen: 'Полный экран',
    exitFullScreen: 'Выйти из полноэкранного режима',
    reload: 'Обновить',
    density: 'Размер',
    densityDefault: 'По умолчанию',
    densityLarger: 'Большой',
    densityMiddle: 'Средний',
    densitySmall: 'Сжатый'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/ms_MY.js
/* harmony default export */ var ms_MY = ({
  moneySymbol: 'RM',
  tableForm: {
    search: 'Cari',
    reset: 'Menetapkan semula',
    submit: 'Hantar',
    collapsed: 'Kembang',
    expand: 'Kuncup',
    inputPlaceholder: 'Sila masuk',
    selectPlaceholder: 'Sila pilih'
  },
  alert: {
    clear: 'Padam',
    selected: 'Dipilih',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'daripada',
      item: 'item'
    }
  },
  tableToolBar: {
    leftPin: 'Pin ke kiri',
    rightPin: 'Pin ke kanan',
    noPin: 'Tidak pin',
    leftFixedTitle: 'Tetap ke kiri',
    rightFixedTitle: 'Tetap ke kanan',
    noFixedTitle: 'Tidak Tetap',
    reset: 'Menetapkan semula',
    columnDisplay: 'Lajur',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Keluar Full Screen',
    reload: 'Muat Semula',
    density: 'Densiti',
    densityDefault: 'Biasa',
    densityLarger: 'Besar',
    densityMiddle: 'Tengah',
    densitySmall: 'Kecil'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/zh_TW.js
/* harmony default export */ var locale_zh_TW = ({
  moneySymbol: '￥',
  tableForm: {
    search: '查詢',
    reset: '重置',
    submit: '提交',
    collapsed: '展開',
    expand: '收起',
    inputPlaceholder: '請輸入',
    selectPlaceholder: '請選擇'
  },
  alert: {
    clear: '取消選擇',
    selected: '已選擇',
    item: '項'
  },
  pagination: {
    total: {
      range: '第',
      total: '條/總共',
      item: '條'
    }
  },
  tableToolBar: {
    leftPin: '固定到左邊',
    rightPin: '固定到右邊',
    noPin: '不固定',
    leftFixedTitle: '固定在左側',
    rightFixedTitle: '固定在右側',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列設置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '默認',
    densityMiddle: '中等',
    densitySmall: '緊湊'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/fr_FR.js
/* harmony default export */ var fr_FR = ({
  moneySymbol: '€',
  tableForm: {
    search: 'Rechercher',
    reset: 'Réinitialiser',
    submit: 'Envoyer',
    collapsed: 'Agrandir',
    expand: 'Réduire',
    inputPlaceholder: 'Entrer une valeur',
    selectPlaceholder: 'Sélectionner une valeur'
  },
  alert: {
    clear: 'Réinitialiser',
    selected: 'Sélectionné',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'sur',
      item: 'éléments'
    }
  },
  tableToolBar: {
    leftPin: 'Épingler à gauche',
    rightPin: 'Épingler à gauche',
    noPin: 'Sans épingle',
    leftFixedTitle: 'Fixer à gauche',
    rightFixedTitle: 'Fixer à droite',
    noFixedTitle: 'Non fixé',
    reset: 'Réinitialiser',
    columnDisplay: 'Affichage colonne',
    columnSetting: 'Réglages',
    fullScreen: 'Plein écran',
    exitFullScreen: 'Quitter Plein écran',
    reload: 'Rafraichir',
    density: 'Densité',
    densityDefault: 'Par défaut',
    densityLarger: 'Larger',
    densityMiddle: 'Moyenne',
    densitySmall: 'Compacte'
  },
  stepsForm: {
    next: 'Suivante',
    prev: 'Précédente',
    submit: 'Finaliser'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/pt_BR.js
/* harmony default export */ var pt_BR = ({
  moneySymbol: 'R$',
  tableForm: {
    search: 'Filtrar',
    reset: 'Limpar',
    submit: 'Confirmar',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Por favor insira',
    selectPlaceholder: 'Por favor selecione'
  },
  alert: {
    clear: 'Limpar',
    selected: 'Selecionado(s)',
    item: 'Item(s)'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Fixar à esquerda',
    rightPin: 'Fixar à direita',
    noPin: 'Desfixado',
    leftFixedTitle: 'Fixado à esquerda',
    rightFixedTitle: 'Fixado à direita',
    noFixedTitle: 'Não fixado',
    reset: 'Limpar',
    columnDisplay: 'Mostrar Coluna',
    columnSetting: 'Configurações',
    fullScreen: 'Tela Cheia',
    exitFullScreen: 'Sair da Tela Cheia',
    reload: 'Atualizar',
    density: 'Densidade',
    densityDefault: 'Padrão',
    densityLarger: 'Largo',
    densityMiddle: 'Médio',
    densitySmall: 'Compacto'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/locale/ko_KR.js
/* harmony default export */ var ko_KR = ({
  moneySymbol: '₩',
  form: {
    lightFilter: {
      more: '더보기',
      clear: '취소',
      confirm: '확인',
      itemUnit: '건수'
    }
  },
  tableForm: {
    search: '조회',
    reset: '초기화',
    submit: '제출',
    collapsed: '확장',
    expand: '닫기',
    inputPlaceholder: '입력해 주세요',
    selectPlaceholder: '선택해 주세요'
  },
  alert: {
    clear: '취소',
    selected: '선택',
    item: '건'
  },
  pagination: {
    total: {
      range: ' ',
      total: '/ 총',
      item: '건'
    }
  },
  tableToolBar: {
    leftPin: '왼쪽으로 핀',
    rightPin: '오른쪽으로 핀',
    noPin: '핀 제거',
    leftFixedTitle: '왼쪽으로 고정',
    rightFixedTitle: '오른쪽으로 고정',
    noFixedTitle: '비고정',
    reset: '초기화',
    columnDisplay: '컬럼 표시',
    columnSetting: '설정',
    fullScreen: '전체 화면',
    exitFullScreen: '전체 화면 취소',
    reload: '다시 읽기',
    density: '여백',
    densityDefault: '기본',
    densityLarger: '많은 여백',
    densityMiddle: '중건 여백',
    densitySmall: '좁은 여백'
  }
});
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-provider/es/index.js



function es_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function es_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      es_ownKeys(Object(source), true).forEach(function (key) {
        es_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      es_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function es_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = es_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function es_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return es_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return es_arrayLikeToArray(o, minLen);
}

function es_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
















function get(source, path, defaultValue) {
  // a[3].b -> a.3.b
  var paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  var result = source;
  var message = defaultValue; // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(paths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];

      if (message === undefined) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return message;
}
/**
 * 创建一个操作函数
 * @param locale
 * @param localeMap
 */


var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale
  };
};

var zhCNIntl = createIntl('zh_CN', locale_zh_CN);
var enUSIntl = createIntl('en_US', locale_en_US);
var viVNIntl = createIntl('vi_VN', vi_VN);
var itITIntl = createIntl('it_IT', locale_it_IT);
var jaJPIntl = createIntl('ja_JP', ja_JP);
var esESIntl = createIntl('es_ES', es_ES);
var ruRUIntl = createIntl('ru_RU', ru_RU);
var msMYIntl = createIntl('ms_MY', ms_MY);
var zhTWIntl = createIntl('zh_TW', locale_zh_TW);
var frFRIntl = createIntl('fr_FR', fr_FR);
var ptBRIntl = createIntl('pt_BR', pt_BR);
var koKRIntl = createIntl('ko_KR', ko_KR);
var intlMap = {
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'js-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ru-RU': ruRUIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'ko-KR': koKRIntl
};
var intlMapKeys = Object.keys(intlMap);

var ConfigContext = react_default.a.createContext({
  intl: es_objectSpread(es_objectSpread({}, zhCNIntl), {}, {
    locale: 'default'
  })
});
var ConfigConsumer = ConfigContext.Consumer,
    ConfigProvider = ConfigContext.Provider;
/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 * @param localeKey
 */

var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  if (!localeKey) {
    return 'zh-CN';
  }

  var localeName = localeKey.toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  }) || 'zh-CN';
};
/**
 *  如果没有配置 locale，这里组件会根据 antd 的 key 来自动选择
 * @param param0
 */


var es_ConfigProviderWrap = function ConfigProviderWrap(_ref) {
  var children = _ref.children;

  var _useContext = Object(react["useContext"])(config_provider["b" /* default */].ConfigContext),
      locale = _useContext.locale;

  return /*#__PURE__*/react_default.a.createElement(ConfigConsumer, null, function (value) {
    var _value$intl;

    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName); // antd 的 key 存在的时候以 antd 的为主

    var intl = localeName && ((_value$intl = value.intl) === null || _value$intl === void 0 ? void 0 : _value$intl.locale) === 'default' ? intlMap[key] : value.intl || intlMap[key];
    return /*#__PURE__*/react_default.a.createElement(ConfigProvider, {
      value: es_objectSpread(es_objectSpread({}, value), {}, {
        intl: intl || zhCNIntl
      })
    }, children);
  });
};


function useIntl() {
  var context = Object(react["useContext"])(ConfigContext);
  Object(lib_warning["noteOnce"])(!!context.intl, "\n\u4E3A\u4E86\u63D0\u5347\u517C\u5BB9\u6027  \n<IntlProvider value={zhCNIntl}/>\n\u9700\u8981\u4FEE\u6539\u4E3A:\n<ConfigProvider\n  value={{\n    intl: zhCNIntl,\n  }}\n/>\n\u6211\u4EEC\u5C06\u4F1A\u5728\u4E0B\u4E2A\u7248\u672C\u4E2D\u5220\u9664\u5B83\n    ");
  Object(lib_warning["noteOnce"])(!!context.intl, "\nTo improve compatibility\n  <IntlProvider value={zhCNIntl}/>\nNeed to be modified to:\n  <ConfigProvider\n    value={{\n      intl: zhCNIntl,\n    }}\n  />\nWe will remove it in the next version\n    ");

  if (!context.intl) {
    return context || zhCNIntl;
  }

  return context.intl || zhCNIntl;
}
/* harmony default export */ var pro_provider_es = (ConfigContext);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/WrapContent.js





var WrapContent_WrapContent = function WrapContent(props) {
  var style = props.style,
      className = props.className,
      children = props.children;
  return /*#__PURE__*/react_default.a.createElement(es_ConfigProviderWrap, null, /*#__PURE__*/react_default.a.createElement(es_layout["a" /* default */].Content, {
    className: className,
    style: style
  }, children));
};

/* harmony default export */ var es_WrapContent = (WrapContent_WrapContent);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/compatibleLayout.js
var compatibleLayout = function compatibleLayout(layout) {
  if (!layout) {
    return layout;
  }

  var layoutEnum = ['sidemenu', 'topmenu'];

  if (layoutEnum.includes(layout)) {
    return layout.replace('menu', '');
  }

  return layout;
};

/* harmony default export */ var utils_compatibleLayout = (compatibleLayout);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/omitUndefined/index.js
var omitUndefined = function omitUndefined(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

/* harmony default export */ var es_omitUndefined = (omitUndefined);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js
function useCurrentMenuLayoutProps_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    useCurrentMenuLayoutProps_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    useCurrentMenuLayoutProps_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return useCurrentMenuLayoutProps_typeof(obj);
}

function useCurrentMenuLayoutProps_slicedToArray(arr, i) {
  return useCurrentMenuLayoutProps_arrayWithHoles(arr) || useCurrentMenuLayoutProps_iterableToArrayLimit(arr, i) || useCurrentMenuLayoutProps_unsupportedIterableToArray(arr, i) || useCurrentMenuLayoutProps_nonIterableRest();
}

function useCurrentMenuLayoutProps_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useCurrentMenuLayoutProps_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useCurrentMenuLayoutProps_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useCurrentMenuLayoutProps_arrayLikeToArray(o, minLen);
}

function useCurrentMenuLayoutProps_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function useCurrentMenuLayoutProps_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function useCurrentMenuLayoutProps_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




var useCurrentMenuLayoutProps_useCurrentMenuLayoutProps = function useCurrentMenuLayoutProps(currentMenu) {
  var _useState = Object(react["useState"])({}),
      _useState2 = useCurrentMenuLayoutProps_slicedToArray(_useState, 2),
      currentMenuLayoutProps = _useState2[0],
      setCurrentMenuLayoutProps = _useState2[1];

  Object(react["useEffect"])(function () {
    setCurrentMenuLayoutProps(es_omitUndefined({
      // 有时候会变成对象，是原来的方式
      layout: useCurrentMenuLayoutProps_typeof(currentMenu.layout) !== 'object' ? currentMenu.layout : undefined,
      navTheme: currentMenu.navTheme,
      menuRender: currentMenu.menuRender,
      footerRender: currentMenu.footerRender,
      menuHeaderRender: currentMenu.menuHeaderRender,
      headerRender: currentMenu.headerRender,
      fixSiderbar: currentMenu.fixSiderbar,
      headerTheme: currentMenu.headerTheme
    }));
  }, [currentMenu.layout, currentMenu.navTheme, currentMenu.menuRender, currentMenu.footerRender, currentMenu.menuHeaderRender, currentMenu.headerRender, currentMenu.fixSiderbar, currentMenu.headerTheme]);
  return currentMenuLayoutProps;
};

/* harmony default export */ var utils_useCurrentMenuLayoutProps = (useCurrentMenuLayoutProps_useCurrentMenuLayoutProps);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/BasicLayout.js





function BasicLayout_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = BasicLayout_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function BasicLayout_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function BasicLayout_slicedToArray(arr, i) {
  return BasicLayout_arrayWithHoles(arr) || BasicLayout_iterableToArrayLimit(arr, i) || BasicLayout_unsupportedIterableToArray(arr, i) || BasicLayout_nonIterableRest();
}

function BasicLayout_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function BasicLayout_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return BasicLayout_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BasicLayout_arrayLikeToArray(o, minLen);
}

function BasicLayout_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function BasicLayout_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function BasicLayout_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function BasicLayout_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function BasicLayout_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BasicLayout_ownKeys(Object(source), true).forEach(function (key) {
        BasicLayout_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BasicLayout_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function BasicLayout_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function BasicLayout_extends() {
  BasicLayout_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BasicLayout_extends.apply(this, arguments);
}



























var BasicLayout_headerRender = function headerRender(props, matchMenuKeys) {
  if (props.headerRender === false || props.pure) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(es_Header, BasicLayout_extends({
    matchMenuKeys: matchMenuKeys
  }, props));
};

var BasicLayout_footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(BasicLayout_objectSpread({}, props), /*#__PURE__*/react_default.a.createElement(Footer["a" /* default */], null));
  }

  return null;
};

var BasicLayout_renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var layout = props.layout,
      isMobile = props.isMobile,
      openKeys = props.openKeys,
      splitMenus = props.splitMenus,
      menuRender = props.menuRender;

  if (props.menuRender === false || props.pure) {
    return null;
  }

  var menuData = props.menuData;
  /**
   * 如果是分割菜单模式，需要专门实现一下
   */

  if (splitMenus && openKeys !== false && !isMobile) {
    var _matchMenuKeys = BasicLayout_slicedToArray(matchMenuKeys, 1),
        key = _matchMenuKeys[0];

    if (key) {
      var _props$menuData, _props$menuData$find;

      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 ? void 0 : (_props$menuData$find = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData$find === void 0 ? void 0 : _props$menuData$find.children) || [];
    } else {
      menuData = [];
    }
  } // 这里走了可以少一次循环


  var clearMenuData = clearMenuItem(menuData || []);

  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && splitMenus) {
    return null;
  }

  if (layout === 'top' && !isMobile) {
    return /*#__PURE__*/react_default.a.createElement(pro_layout_es_SiderMenu, BasicLayout_extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      hide: true
    }));
  }

  if (menuRender) {
    var defaultDom = /*#__PURE__*/react_default.a.createElement(pro_layout_es_SiderMenu, BasicLayout_extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      // 这里走了可以少一次循环
      menuData: clearMenuData
    }));
    return menuRender(props, defaultDom);
  }

  return /*#__PURE__*/react_default.a.createElement(pro_layout_es_SiderMenu, BasicLayout_extends({
    matchMenuKeys: matchMenuKeys
  }, props, {
    // 这里走了可以少一次循环
    menuData: clearMenuData
  }));
};

var BasicLayout_defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);

  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }

  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);

    if (typeof title === 'string') {
      return BasicLayout_objectSpread(BasicLayout_objectSpread({}, pageTitleInfo), {}, {
        title: title
      });
    }

    warning_default()(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }

  return pageTitleInfo;
};

var getPaddingLeft = function getPaddingLeft(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 48 : siderWidth;
  }

  return 0;
};
/**
 * 🌃 Powerful and easy to use beautiful layout
 * 🏄‍ Support multiple topics and layout types
 * @param props
 */


var BasicLayout_BasicLayout = function BasicLayout(props) {
  var _props$prefixCls, _classNames, _classNames2;

  var children = props.children,
      propsOnCollapse = props.onCollapse,
      _props$location = props.location,
      location = _props$location === void 0 ? {
    pathname: '/'
  } : _props$location,
      contentStyle = props.contentStyle,
      route = props.route,
      defaultCollapsed = props.defaultCollapsed,
      style = props.style,
      disableContentMargin = props.disableContentMargin,
      _props$siderWidth = props.siderWidth,
      siderWidth = _props$siderWidth === void 0 ? 208 : _props$siderWidth,
      menu = props.menu,
      propsIsChildrenLayout = props.isChildrenLayout,
      menuDataRender = props.menuDataRender,
      loading = props.loading;
  var context = Object(react["useContext"])(config_provider["b" /* default */].ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');

  var formatMessage = function formatMessage(_ref) {
    var id = _ref.id,
        defaultMessage = _ref.defaultMessage,
        restParams = BasicLayout_objectWithoutProperties(_ref, ["id", "defaultMessage"]);

    if (props.formatMessage) {
      return props.formatMessage(BasicLayout_objectSpread({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }

    var locales = es_locales();
    return locales[id] ? locales[id] : defaultMessage;
  };

  var _useMergedState = useMergedState_default()(function () {
    return getMenuData((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }),
      _useMergedState2 = BasicLayout_slicedToArray(_useMergedState, 2),
      menuInfoData = _useMergedState2[0],
      setMenuInfoData = _useMergedState2[1];

  var _menuInfoData$breadcr = menuInfoData.breadcrumb,
      breadcrumb = _menuInfoData$breadcr === void 0 ? {} : _menuInfoData$breadcr,
      breadcrumbMap = menuInfoData.breadcrumbMap,
      _menuInfoData$menuDat = menuInfoData.menuData,
      menuData = _menuInfoData$menuDat === void 0 ? [] : _menuInfoData$menuDat;
  var matchMenus = Object(route_utils_es["b" /* getMatchMenu */])(location.pathname || '/', menuData, true);
  var matchMenuKeys = matchMenus.map(function (item) {
    return item.key || item.path || '';
  }); // 当前选中的menu，一般不会为空

  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = utils_useCurrentMenuLayoutProps(currentMenu);

  var _props$currentMenuLay = BasicLayout_objectSpread(BasicLayout_objectSpread({}, props), currentMenuLayoutProps),
      fixSiderbar = _props$currentMenuLay.fixSiderbar,
      navTheme = _props$currentMenuLay.navTheme,
      defaultPropsLayout = _props$currentMenuLay.layout,
      rest = BasicLayout_objectWithoutProperties(_props$currentMenuLay, ["fixSiderbar", "navTheme", "layout"]);

  var propsLayout = utils_compatibleLayout(defaultPropsLayout);
  var colSize = es();
  var isMobile = (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  /**
   *  如果 menuRender 不存在，可以做一下性能优化
   *  只要 routers 没有更新就不需要重新计算
   */

  hooks_useDeepCompareEffect(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.loading) {
      return function () {
        return null;
      };
    }

    var infoData = getMenuData((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender); // 稍微慢一点 render，不然会造成性能问题，看起来像是菜单的卡顿

    var animationFrameId = requestAnimationFrame(function () {
      setMenuInfoData(infoData);
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [props.route, stringify(menu)]); // If it is a fix menu, calculate padding
  // don't need padding in phone mode

  var hasLeftPadding = propsLayout !== 'top' && !isMobile;

  var _useMergedState3 = useMergedState_default()(defaultCollapsed || false, {
    value: props.collapsed,
    onChange: propsOnCollapse
  }),
      _useMergedState4 = BasicLayout_slicedToArray(_useMergedState3, 2),
      collapsed = _useMergedState4[0],
      onCollapse = _useMergedState4[1]; // Splicing parameters, adding menuData and formatMessage in props


  var defaultProps = Object(omit_js_es["a" /* default */])(BasicLayout_objectSpread(BasicLayout_objectSpread(BasicLayout_objectSpread({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    layout: propsLayout
  }), ['className', 'style']); // gen page title

  var pageTitleInfo = BasicLayout_defaultPageTitleRender(BasicLayout_objectSpread(BasicLayout_objectSpread({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props); // gen breadcrumbProps, parameter for pageHeader

  var breadcrumbProps = getBreadcrumbProps(BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  })); // render sider dom

  var siderMenuDom = BasicLayout_renderSiderMenu(BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light',
    collapsed: collapsed
  }), matchMenuKeys); // render header dom

  var headerDom = BasicLayout_headerRender(BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light'
  }), matchMenuKeys); // render footer dom

  var footerDom = BasicLayout_footerRender(BasicLayout_objectSpread({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));

  var _useContext = Object(react["useContext"])(RouteContext),
      contextIsChildrenLayout = _useContext.isChildrenLayout; // 如果 props 中定义，以 props 为准


  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var baseClassName = "".concat(prefixCls, "-basicLayout"); // gen className

  var className = classnames_default()(props.className, 'ant-design-pro', baseClassName, (_classNames = {}, BasicLayout_defineProperty(_classNames, "screen-".concat(colSize), colSize), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-top-menu"), propsLayout === 'top'), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-is-children"), isChildrenLayout), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-fix-siderbar"), fixSiderbar), BasicLayout_defineProperty(_classNames, "".concat(baseClassName, "-").concat(propsLayout), propsLayout), _classNames));
  /**
   * 计算 slider 的宽度
   */

  var leftSiderWidth = getPaddingLeft(!!hasLeftPadding, collapsed, siderWidth); // siderMenuDom 为空的时候，不需要 padding

  var genLayoutStyle = {
    position: 'relative'
  }; // if is some layout children, don't need min height

  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  var contentClassName = classnames_default()("".concat(baseClassName, "-content"), (_classNames2 = {}, BasicLayout_defineProperty(_classNames2, "".concat(baseClassName, "-has-header"), headerDom), BasicLayout_defineProperty(_classNames2, "".concat(baseClassName, "-content-disable-margin"), disableContentMargin), _classNames2));
  /**
   * 页面切换的时候触发
   */

  Object(react["useEffect"])(function () {
    var onPageChange = props.onPageChange;

    if (onPageChange) {
      onPageChange(props.location);
    }
  }, [stringify(props.location)]);

  var _useState = Object(react["useState"])(false),
      _useState2 = BasicLayout_slicedToArray(_useState, 2),
      hasFooterToolbar = _useState2[0],
      setHasFooterToolbar = _useState2[1];

  hooks_useDocumentTitle(pageTitleInfo, props.title || es_defaultSettings.title);
  return /*#__PURE__*/react_default.a.createElement(Counter.Provider, null, /*#__PURE__*/react_default.a.createElement(RouteContext.Provider, {
    value: BasicLayout_objectSpread(BasicLayout_objectSpread({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react_default.a.createElement(es_layout["a" /* default */], {
    style: BasicLayout_objectSpread({
      minHeight: '100%'
    }, style),
    hasSider: true
  }, siderMenuDom, /*#__PURE__*/react_default.a.createElement(es_layout["a" /* default */], {
    style: genLayoutStyle
  }, headerDom, /*#__PURE__*/react_default.a.createElement(es_WrapContent, BasicLayout_extends({
    isChildrenLayout: isChildrenLayout
  }, rest, {
    className: contentClassName,
    style: contentStyle
  }), loading ? /*#__PURE__*/react_default.a.createElement(PageLoading["a" /* default */], null) : children), footerDom)))));
};

BasicLayout_BasicLayout.defaultProps = BasicLayout_objectSpread(BasicLayout_objectSpread({
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg'
}, es_defaultSettings), {}, {
  location: Object(isBrowser["a" /* default */])() ? window.location : undefined
});
/* harmony default export */ var pro_layout_es_BasicLayout = (BasicLayout_BasicLayout);
// EXTERNAL MODULE: ./node_modules/antd/es/affix/style/index.less
var affix_style = __webpack_require__("15/o");

// CONCATENATED MODULE: ./node_modules/antd/es/affix/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("cDf5");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__("xEkU");
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);

// CONCATENATED MODULE: ./node_modules/antd/es/_util/throttleByAnimationFrame.js


function throttleByAnimationFrame(fn) {
  var requestId;

  var later = function later(args) {
    return function () {
      requestId = null;
      fn.apply(void 0, toConsumableArray_default()(args));
    };
  };

  var throttled = function throttled() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      requestId = raf_default()(later(args));
    }
  };

  throttled.cancel = function () {
    return raf_default.a.cancel(requestId);
  };

  return throttled;
}
function throttleByAnimationFrameDecorator() {
  return function throttle(target, key, descriptor) {
    var fn = descriptor.value;
    var definingProperty = false;
    return {
      configurable: true,
      get: function get() {
        // In IE11 calling Object.defineProperty has a side-effect of evaluating the
        // getter for the property which is being replaced. This causes infinite
        // recursion and an "Out of stack space" error.
        // eslint-disable-next-line no-prototype-builtins
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          /* istanbul ignore next */
          return fn;
        }

        var boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true
        });
        definingProperty = false;
        return boundFn;
      }
    };
  };
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var Dom_addEventListener = __webpack_require__("zT1h");

// CONCATENATED MODULE: ./node_modules/antd/es/affix/utils.js

function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : {
    top: 0,
    bottom: window.innerHeight
  };
}
function getFixedTop(placeholderReact, targetRect, offsetTop) {
  if (offsetTop !== undefined && targetRect.top > placeholderReact.top - offsetTop) {
    return offsetTop + targetRect.top;
  }

  return undefined;
}
function getFixedBottom(placeholderReact, targetRect, offsetBottom) {
  if (offsetBottom !== undefined && targetRect.bottom < placeholderReact.bottom + offsetBottom) {
    var targetBottomOffset = window.innerHeight - targetRect.bottom;
    return offsetBottom + targetBottomOffset;
  }

  return undefined;
} // ======================== Observer ========================

var TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var observerEntities = [];
function getObserverEntities() {
  // Only used in test env. Can be removed if refactor.
  return observerEntities;
}
function addObserveTarget(target, affix) {
  if (!target) return;
  var entity = observerEntities.find(function (item) {
    return item.target === target;
  });

  if (entity) {
    entity.affixList.push(affix);
  } else {
    entity = {
      target: target,
      affixList: [affix],
      eventHandlers: {}
    };
    observerEntities.push(entity); // Add listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      entity.eventHandlers[eventName] = Object(Dom_addEventListener["a" /* default */])(target, eventName, function () {
        entity.affixList.forEach(function (targetAffix) {
          targetAffix.lazyUpdatePosition();
        });
      });
    });
  }
}
function removeObserveTarget(affix) {
  var observerEntity = observerEntities.find(function (oriObserverEntity) {
    var hasAffix = oriObserverEntity.affixList.some(function (item) {
      return item === affix;
    });

    if (hasAffix) {
      oriObserverEntity.affixList = oriObserverEntity.affixList.filter(function (item) {
        return item !== affix;
      });
    }

    return hasAffix;
  });

  if (observerEntity && observerEntity.affixList.length === 0) {
    observerEntities = observerEntities.filter(function (item) {
      return item !== observerEntity;
    }); // Remove listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      var handler = observerEntity.eventHandlers[eventName];

      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }
}
// CONCATENATED MODULE: ./node_modules/antd/es/affix/index.js








var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : typeof_default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

var AffixStatus;

(function (AffixStatus) {
  AffixStatus[AffixStatus["None"] = 0] = "None";
  AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
})(AffixStatus || (AffixStatus = {}));

var affix_Affix = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Affix, _React$Component);

  var _super = createSuper_default()(Affix);

  function Affix() {
    var _this;

    classCallCheck_default()(this, Affix);

    _this = _super.apply(this, arguments);
    _this.state = {
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null
    };

    _this.getOffsetTop = function () {
      var offsetBottom = _this.props.offsetBottom;
      var offsetTop = _this.props.offsetTop;

      if (offsetBottom === undefined && offsetTop === undefined) {
        offsetTop = 0;
      }

      return offsetTop;
    };

    _this.getOffsetBottom = function () {
      return _this.props.offsetBottom;
    };

    _this.savePlaceholderNode = function (node) {
      _this.placeholderNode = node;
    };

    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    }; // =================== Measure ===================


    _this.measure = function () {
      var _this$state = _this.state,
          status = _this$state.status,
          lastAffix = _this$state.lastAffix;
      var onChange = _this.props.onChange;

      var targetFunc = _this.getTargetFunc();

      if (status !== AffixStatus.Prepare || !_this.fixedNode || !_this.placeholderNode || !targetFunc) {
        return;
      }

      var offsetTop = _this.getOffsetTop();

      var offsetBottom = _this.getOffsetBottom();

      var targetNode = targetFunc();

      if (!targetNode) {
        return;
      }

      var newState = {
        status: AffixStatus.None
      };
      var targetRect = getTargetRect(targetNode);
      var placeholderReact = getTargetRect(_this.placeholderNode);
      var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
      var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);

      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          top: fixedTop,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          bottom: fixedBottom,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      }

      newState.lastAffix = !!newState.affixStyle;

      if (onChange && lastAffix !== newState.lastAffix) {
        onChange(newState.lastAffix);
      }

      _this.setState(newState);
    }; // @ts-ignore TS6133


    _this.prepareMeasure = function () {
      // event param is used before. Keep compatible ts define here.
      _this.setState({
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined
      }); // Test if `updatePosition` called


      if (false) { var onTestUpdatePosition; }
    }; // =================== Render ===================


    _this.render = function () {
      var getPrefixCls = _this.context.getPrefixCls;
      var _this$state2 = _this.state,
          affixStyle = _this$state2.affixStyle,
          placeholderStyle = _this$state2.placeholderStyle;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children;
      var className = classnames_default()(defineProperty_default()({}, getPrefixCls('affix', prefixCls), affixStyle));
      var props = Object(omit_js_es["a" /* default */])(_this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']); // Omit this since `onTestUpdatePosition` only works on test.

      if (false) {}

      return /*#__PURE__*/react["createElement"](rc_resize_observer_es["a" /* default */], {
        onResize: function onResize() {
          _this.updatePosition();
        }
      }, /*#__PURE__*/react["createElement"]("div", extends_default()({}, props, {
        ref: _this.savePlaceholderNode
      }), affixStyle && /*#__PURE__*/react["createElement"]("div", {
        style: placeholderStyle,
        "aria-hidden": "true"
      }), /*#__PURE__*/react["createElement"]("div", {
        className: className,
        ref: _this.saveFixedNode,
        style: affixStyle
      }, /*#__PURE__*/react["createElement"](rc_resize_observer_es["a" /* default */], {
        onResize: function onResize() {
          _this.updatePosition();
        }
      }, children))));
    };

    return _this;
  }

  createClass_default()(Affix, [{
    key: "getTargetFunc",
    value: function getTargetFunc() {
      var getTargetContainer = this.context.getTargetContainer;
      var target = this.props.target;

      if (target !== undefined) {
        return target;
      }

      return getTargetContainer || getDefaultTarget;
    } // Event handler

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var targetFunc = this.getTargetFunc();

      if (targetFunc) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        this.timeout = setTimeout(function () {
          addObserveTarget(targetFunc(), _this2); // Mock Event object.

          _this2.updatePosition();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevTarget = this.state.prevTarget;
      var targetFunc = this.getTargetFunc();
      var newTarget = null;

      if (targetFunc) {
        newTarget = targetFunc() || null;
      }

      if (prevTarget !== newTarget) {
        removeObserveTarget(this);

        if (newTarget) {
          addObserveTarget(newTarget, this); // Mock Event object.

          this.updatePosition();
        } // eslint-disable-next-line react/no-did-update-set-state


        this.setState({
          prevTarget: newTarget
        });
      }

      if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
        this.updatePosition();
      }

      this.measure();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
      removeObserveTarget(this);
      this.updatePosition.cancel(); // https://github.com/ant-design/ant-design/issues/22683

      this.lazyUpdatePosition.cancel();
    } // Handle realign logic

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      this.prepareMeasure();
    }
  }, {
    key: "lazyUpdatePosition",
    value: function lazyUpdatePosition() {
      var targetFunc = this.getTargetFunc();
      var affixStyle = this.state.affixStyle; // Check position change before measure to make Safari smooth

      if (targetFunc && affixStyle) {
        var offsetTop = this.getOffsetTop();
        var offsetBottom = this.getOffsetBottom();
        var targetNode = targetFunc();

        if (targetNode && this.placeholderNode) {
          var targetRect = getTargetRect(targetNode);
          var placeholderReact = getTargetRect(this.placeholderNode);
          var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
          var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);

          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      } // Directly call prepare measure since it's already throttled.


      this.prepareMeasure();
    }
  }]);

  return Affix;
}(react["Component"]);

affix_Affix.contextType = config_provider_context["b" /* ConfigContext */];

__decorate([throttleByAnimationFrameDecorator()], affix_Affix.prototype, "updatePosition", null);

__decorate([throttleByAnimationFrameDecorator()], affix_Affix.prototype, "lazyUpdatePosition", null);

/* harmony default export */ var es_affix = (affix_Affix);
// EXTERNAL MODULE: ./node_modules/antd/es/page-header/style/index.less
var page_header_style = __webpack_require__("YV/h");

// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/style/index.less
var breadcrumb_style = __webpack_require__("AOa7");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/index.js
var dropdown_style = __webpack_require__("qVdP");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/style/index.js




// EXTERNAL MODULE: ./node_modules/antd/es/avatar/style/index.js + 1 modules
var avatar_style = __webpack_require__("Telt");

// CONCATENATED MODULE: ./node_modules/antd/es/page-header/style/index.js
 // style dependencies



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/ArrowLeftOutlined.js
var ArrowLeftOutlined = __webpack_require__("h4NZ");
var ArrowLeftOutlined_default = /*#__PURE__*/__webpack_require__.n(ArrowLeftOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/ArrowRightOutlined.js
var ArrowRightOutlined = __webpack_require__("/hEp");
var ArrowRightOutlined_default = /*#__PURE__*/__webpack_require__.n(ArrowRightOutlined);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/DownOutlined.js
var DownOutlined = __webpack_require__("HQEm");
var DownOutlined_default = /*#__PURE__*/__webpack_require__.n(DownOutlined);

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/dropdown.js + 1 modules
var dropdown = __webpack_require__("XBQK");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbItem.js


var BreadcrumbItem_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var BreadcrumbItem_BreadcrumbItem = function BreadcrumbItem(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      children = _a.children,
      overlay = _a.overlay,
      dropdownProps = _a.dropdownProps,
      restProps = BreadcrumbItem_rest(_a, ["prefixCls", "separator", "children", "overlay", "dropdownProps"]);

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  /**
   * if overlay is have
   * Wrap a DropDown
   */

  var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
    if (overlay) {
      return /*#__PURE__*/react["createElement"](dropdown["a" /* default */], extends_default()({
        overlay: overlay,
        placement: "bottomCenter"
      }, dropdownProps), /*#__PURE__*/react["createElement"]("span", {
        className: "".concat(prefixCls, "-overlay-link")
      }, breadcrumbItem, /*#__PURE__*/react["createElement"](DownOutlined_default.a, null)));
    }

    return breadcrumbItem;
  };

  var link;

  if ('href' in restProps) {
    link = /*#__PURE__*/react["createElement"]("a", extends_default()({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } else {
    link = /*#__PURE__*/react["createElement"]("span", extends_default()({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } // wrap to dropDown


  link = renderBreadcrumbNode(link);

  if (children) {
    return /*#__PURE__*/react["createElement"]("span", null, link, separator && separator !== '' && /*#__PURE__*/react["createElement"]("span", {
      className: "".concat(prefixCls, "-separator")
    }, separator));
  }

  return null;
};

BreadcrumbItem_BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
/* harmony default export */ var breadcrumb_BreadcrumbItem = (BreadcrumbItem_BreadcrumbItem);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbSeparator.js



var BreadcrumbSeparator_BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
  var children = _ref.children;

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb');
  return /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(prefixCls, "-separator")
  }, children || '/');
};

BreadcrumbSeparator_BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
/* harmony default export */ var breadcrumb_BreadcrumbSeparator = (BreadcrumbSeparator_BreadcrumbSeparator);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/Breadcrumb.js




var Breadcrumb_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function Breadcrumb_defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? /*#__PURE__*/react["createElement"]("span", null, name) : /*#__PURE__*/react["createElement"]("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var getPath = function getPath(path, params) {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(function (key) {
    path = path.replace(":".concat(key), params[key]);
  });
  return path;
};

var Breadcrumb_addChildPath = function addChildPath(paths) {
  var childPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var params = arguments.length > 2 ? arguments[2] : undefined;

  var originalPaths = toConsumableArray_default()(paths);

  var path = getPath(childPath, params);

  if (path) {
    originalPaths.push(path);
  }

  return originalPaths;
};

var Breadcrumb_Breadcrumb = function Breadcrumb(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      style = _a.style,
      className = _a.className,
      routes = _a.routes,
      children = _a.children,
      _a$itemRender = _a.itemRender,
      itemRender = _a$itemRender === void 0 ? Breadcrumb_defaultItemRender : _a$itemRender,
      _a$params = _a.params,
      params = _a$params === void 0 ? {} : _a$params,
      restProps = Breadcrumb_rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var crumbs;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

  if (routes && routes.length > 0) {
    // generated by route
    var paths = [];
    crumbs = routes.map(function (route) {
      var path = getPath(route.path, params);

      if (path) {
        paths.push(path);
      } // generated overlay by route.children


      var overlay;

      if (route.children && route.children.length) {
        overlay = /*#__PURE__*/react["createElement"](es_menu["a" /* default */], null, route.children.map(function (child) {
          return /*#__PURE__*/react["createElement"](es_menu["a" /* default */].Item, {
            key: child.path || child.breadcrumbName
          }, itemRender(child, params, routes, Breadcrumb_addChildPath(paths, child.path, params)));
        }));
      }

      return /*#__PURE__*/react["createElement"](breadcrumb_BreadcrumbItem, {
        overlay: overlay,
        separator: separator,
        key: path || route.breadcrumbName
      }, itemRender(route, params, routes, paths));
    });
  } else if (children) {
    crumbs = Object(toArray["a" /* default */])(children).map(function (element, index) {
      if (!element) {
        return element;
      }

      Object(devWarning["a" /* default */])(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
      return Object(reactNode["a" /* cloneElement */])(element, {
        separator: separator,
        key: index
      });
    });
  }

  var breadcrumbClassName = classnames_default()(prefixCls, defineProperty_default()({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react["createElement"]("div", extends_default()({
    className: breadcrumbClassName,
    style: style
  }, restProps), crumbs);
};

Breadcrumb_Breadcrumb.Item = breadcrumb_BreadcrumbItem;
Breadcrumb_Breadcrumb.Separator = breadcrumb_BreadcrumbSeparator;
/* harmony default export */ var breadcrumb_Breadcrumb = (Breadcrumb_Breadcrumb);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/index.js

/* harmony default export */ var es_breadcrumb = (breadcrumb_Breadcrumb);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 4 modules
var es_avatar = __webpack_require__("Tckk");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/transButton.js
var transButton = __webpack_require__("gDlH");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("YMnH");

// CONCATENATED MODULE: ./node_modules/antd/es/page-header/index.js













var page_header_renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return /*#__PURE__*/react["createElement"](LocaleReceiver["a" /* default */], {
    componentName: "PageHeader"
  }, function (_ref) {
    var back = _ref.back;
    return /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-back")
    }, /*#__PURE__*/react["createElement"](transButton["a" /* default */], {
      onClick: function onClick(e) {
        if (onBack) {
          onBack(e);
        }
      },
      className: "".concat(prefixCls, "-back-button"),
      "aria-label": back
    }, backIcon));
  });
};

var page_header_renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return /*#__PURE__*/react["createElement"](es_breadcrumb, breadcrumb);
};

var page_header_getBackIcon = function getBackIcon(props) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';

  if (props.backIcon !== undefined) {
    return props.backIcon;
  }

  return direction === 'rtl' ? /*#__PURE__*/react["createElement"](ArrowRightOutlined_default.a, null) : /*#__PURE__*/react["createElement"](ArrowLeftOutlined_default.a, null);
};

var page_header_renderTitle = function renderTitle(prefixCls, props) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var title = props.title,
      avatar = props.avatar,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra,
      onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");
  var hasHeading = title || subTitle || tags || extra; // 如果 什么都没有，直接返回一个 null

  if (!hasHeading) {
    return null;
  }

  var backIcon = page_header_getBackIcon(props, direction);
  var backIconDom = page_header_renderBack(prefixCls, backIcon, onBack);
  var hasTitle = backIconDom || avatar || hasHeading;
  return /*#__PURE__*/react["createElement"]("div", {
    className: headingPrefixCls
  }, hasTitle && /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(headingPrefixCls, "-left")
  }, backIconDom, avatar && /*#__PURE__*/react["createElement"](es_avatar["a" /* default */], avatar), title && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), subTitle && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-sub-title"),
    title: typeof subTitle === 'string' ? subTitle : undefined
  }, subTitle), tags && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-tags")
  }, tags)), extra && /*#__PURE__*/react["createElement"]("span", {
    className: "".concat(headingPrefixCls, "-extra")
  }, extra));
};

var page_header_renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return /*#__PURE__*/react["createElement"]("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var page_header_renderChildren = function renderChildren(prefixCls, children) {
  return /*#__PURE__*/react["createElement"]("div", {
    className: "".concat(prefixCls, "-content")
  }, children);
};

var page_header_PageHeader = function PageHeader(props) {
  var _React$useState = react["useState"](false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      compact = _React$useState2[0],
      updateCompact = _React$useState2[1];

  var onResize = function onResize(_ref2) {
    var width = _ref2.width;
    updateCompact(width < 768);
  };

  return /*#__PURE__*/react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, function (_ref3) {
    var _classNames;

    var getPrefixCls = _ref3.getPrefixCls,
        pageHeader = _ref3.pageHeader,
        direction = _ref3.direction;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children,
        breadcrumb = props.breadcrumb,
        customizeClassName = props.className;
    var ghost = true; // Use `ghost` from `props` or from `ConfigProvider` instead.

    if ('ghost' in props) {
      ghost = props.ghost;
    } else if (pageHeader && 'ghost' in pageHeader) {
      ghost = pageHeader.ghost;
    }

    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var breadcrumbDom = breadcrumb && breadcrumb.routes ? page_header_renderBreadcrumb(breadcrumb) : null;
    var className = classnames_default()(prefixCls, customizeClassName, (_classNames = {
      'has-breadcrumb': breadcrumbDom,
      'has-footer': footer
    }, defineProperty_default()(_classNames, "".concat(prefixCls, "-ghost"), ghost), defineProperty_default()(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), defineProperty_default()(_classNames, "".concat(prefixCls, "-compact"), compact), _classNames));
    return /*#__PURE__*/react["createElement"](rc_resize_observer_es["a" /* default */], {
      onResize: onResize
    }, /*#__PURE__*/react["createElement"]("div", {
      className: className,
      style: style
    }, breadcrumbDom, page_header_renderTitle(prefixCls, props, direction), children && page_header_renderChildren(prefixCls, children), page_header_renderFooter(prefixCls, footer)));
  });
};

/* harmony default export */ var page_header = (page_header_PageHeader);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/style/index.less
var tabs_style = __webpack_require__("9ama");

// CONCATENATED MODULE: ./node_modules/antd/es/tabs/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var esm_slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var hooks_useMergedState = __webpack_require__("6cGi");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var esm_toConsumableArray = __webpack_require__("KQm4");

// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useRaf.js



function useRaf(callback) {
  var rafRef = Object(react["useRef"])();
  var removedRef = Object(react["useRef"])(false);

  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!removedRef.current) {
      raf_default.a.cancel(rafRef.current);
      rafRef.current = raf_default()(function () {
        callback.apply(void 0, args);
      });
    }
  }

  Object(react["useEffect"])(function () {
    return function () {
      removedRef.current = true;
      raf_default.a.cancel(rafRef.current);
    };
  }, []);
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = Object(react["useRef"])([]);

  var _useState = Object(react["useState"])({}),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      forceUpdate = _useState2[1];

  var state = Object(react["useRef"])(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });

  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/TabNode.js





function TabNode(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      active = _ref.active,
      rtl = _ref.rtl,
      _ref$tab = _ref.tab,
      key = _ref$tab.key,
      tab = _ref$tab.tab,
      disabled = _ref$tab.disabled,
      closeIcon = _ref$tab.closeIcon,
      tabBarGutter = _ref.tabBarGutter,
      tabPosition = _ref.tabPosition,
      closable = _ref.closable,
      renderWrapper = _ref.renderWrapper,
      removeAriaLabel = _ref.removeAriaLabel,
      editable = _ref.editable,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onFocus = _ref.onFocus;
  var tabPrefix = "".concat(prefixCls, "-tab");
  react["useEffect"](function () {
    return onRemove;
  }, []);
  var nodeStyle = {};

  if (tabPosition === 'top' || tabPosition === 'bottom') {
    nodeStyle[rtl ? 'marginLeft' : 'marginRight'] = tabBarGutter;
  } else {
    nodeStyle.marginBottom = tabBarGutter;
  }

  var removable = editable && closable !== false && !disabled;

  function onInternalClick(e) {
    if (disabled) return;
    onClick(e);
  }

  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }

  var node = react["createElement"]("div", {
    key: key,
    ref: ref,
    className: classnames_default()(tabPrefix, (_classNames = {}, Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(tabPrefix, "-with-remove"), removable), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(tabPrefix, "-active"), active), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: nodeStyle,
    onClick: onInternalClick
  }, react["createElement"]("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode["a" /* default */].SPACE, KeyCode["a" /* default */].ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, tab), removable && react["createElement"]("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

/* harmony default export */ var TabNavList_TabNode = (react["forwardRef"](TabNode));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useOffsets.js


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return Object(react["useMemo"])(function () {
    var _tabs$;

    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;

    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key); // Reuse last one when not exist yet

      if (!data) {
        var _tabs;

        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }

      var entity = map.get(key) || Object(objectSpread2["a" /* default */])({}, data); // Right


      entity.right = rightOffset - entity.left - entity.width; // Update entity

      map.set(key, entity);
    }

    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useVisibleRange.js

var useVisibleRange_DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, containerSize, tabContentNodeSize, addNodeSize, _ref) {
  var tabs = _ref.tabs,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl;
  var unit;
  var position;
  var transformSize;

  if (['top', 'bottom'].includes(tabPosition)) {
    unit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(containerSize.left);
  } else {
    unit = 'height';
    position = 'top';
    transformSize = -containerSize.top;
  }

  var basicSize = containerSize[unit];
  var tabContentSize = tabContentNodeSize[unit];
  var addSize = addNodeSize[unit];
  var mergedBasicSize = basicSize;

  if (tabContentSize + addSize > basicSize) {
    mergedBasicSize = basicSize - addSize;
  }

  return Object(react["useMemo"])(function () {
    if (!tabs.length) {
      return [0, 0];
    }

    var len = tabs.length;
    var endIndex = len;

    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || useVisibleRange_DEFAULT_SIZE;

      if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    var startIndex = 0;

    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || useVisibleRange_DEFAULT_SIZE;

      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }

    return [startIndex, endIndex];
  }, [tabOffsets, transformSize, mergedBasicSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var esm_createSuper = __webpack_require__("LK+K");

// EXTERNAL MODULE: ./node_modules/mini-store/esm/index.js + 3 modules
var esm = __webpack_require__("I8Z2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/rc-util/es/createChainedFunction.js
var createChainedFunction = __webpack_require__("2GS6");

// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("Gytx");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/isMobile.js

 // MIT License from https://github.com/kaimallea/isMobile

var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'

var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i; // Match 'Windows' AND 'ARM'

var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

function match(regex, userAgent) {
  return regex.test(userAgent);
}

function isMobile_isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : ''); // Facebook mobile app's integrated browser adds a bunch of strings that
  // match everything. Strip it out if it exists.

  var tmp = ua.split('[FBAN');

  if (typeof tmp[1] !== 'undefined') {
    var _tmp = tmp;

    var _tmp2 = Object(esm_slicedToArray["a" /* default */])(_tmp, 1);

    ua = _tmp2[0];
  } // Twitter mobile app's integrated browser on iPad adds a "Twitter for
  // iPhone" string. Same probably happens on other tablet platforms.
  // This will confuse detection so strip it out if it exists.


  tmp = ua.split('Twitter');

  if (typeof tmp[1] !== 'undefined') {
    var _tmp3 = tmp;

    var _tmp4 = Object(esm_slicedToArray["a" /* default */])(_tmp3, 1);

    ua = _tmp4[0];
  }

  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },
    // Additional
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device; // excludes 'other' devices and ipods, targeting touchscreen phones

  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}

var defaultResult = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, isMobile_isMobile()), {}, {
  isMobile: isMobile_isMobile
});

/* harmony default export */ var utils_isMobile = (defaultResult);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/util.js



function noop() {}
function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || "".concat(prefix, "item_").concat(index);
}
function getMenuIdFromSubMenuEventKey(eventKey) {
  return "".concat(eventKey, "-menu-");
}
function loopMenuItem(children, cb) {
  var index = -1;
  react["Children"].forEach(children, function (c) {
    index += 1;

    if (c && c.type && c.type.isMenuItemGroup) {
      react["Children"].forEach(c.props.children, function (c2) {
        index += 1;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}
function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }

  react["Children"].forEach(children, function (c) {
    if (c) {
      var construct = c.type;

      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
        return;
      }

      if (keys.indexOf(c.key) !== -1) {
        // eslint-disable-next-line no-param-reassign
        ret.find = true;
      } else if (c.props.children) {
        loopMenuItemRecursively(c.props.children, keys, ret);
      }
    }
  });
}
var menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator', 'motion', // the following keys found need to be removed from test regression
'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon']; // ref: https://github.com/ant-design/ant-design/issues/14007
// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
// getBoundingClientRect return the full precision value, which is
// not the same behavior as on chrome. Set the precision to 6 to
// unify their behavior

var getWidth = function getWidth(elem) {
  var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;

  if (width) {
    if (includeMargin) {
      var _getComputedStyle = getComputedStyle(elem),
          marginLeft = _getComputedStyle.marginLeft,
          marginRight = _getComputedStyle.marginRight;

      width += +marginLeft.replace('px', '') + +marginRight.replace('px', '');
    }

    width = +width.toFixed(6);
  }

  return width || 0;
};
var util_setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && Object(esm_typeof["a" /* default */])(elem.style) === 'object') {
    // eslint-disable-next-line no-param-reassign
    elem.style[styleProperty] = value;
  }
};
var util_isMobileDevice = function isMobileDevice() {
  return utils_isMobile.any;
};
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("bdgK");

// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 13 modules
var rc_trigger_es = __webpack_require__("uciX");

// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__("8XRh");

// CONCATENATED MODULE: ./node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu.js

















var guid = 0;
var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var SubMenu_updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var menuId = getMenuIdFromSubMenuEventKey(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, state.defaultActiveFirst), {}, Object(esm_defineProperty["a" /* default */])({}, menuId, defaultActiveFirst))
  });
};

var SubMenu_SubMenu = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(SubMenu, _React$Component);

  var _super = Object(esm_createSuper["a" /* default */])(SubMenu);

  function SubMenu(props) {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, SubMenu);

    _this = _super.call(this, props);

    _this.onDestroy = function (key) {
      _this.props.onDestroy(key);
    };
    /**
     * note:
     *  This legacy code that `onKeyDown` is called by parent instead of dom self.
     *  which need return code to check if this event is handled
     */


    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      var menu = _this.menuInstance;
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          store = _this$props.store;

      if (keyCode === KeyCode["a" /* default */].ENTER) {
        _this.onTitleClick(e);

        SubMenu_updateDefaultActiveFirst(store, _this.props.eventKey, true);
        return true;
      }

      if (keyCode === KeyCode["a" /* default */].RIGHT) {
        if (isOpen) {
          menu.onKeyDown(e);
        } else {
          _this.triggerOpenChange(true); // need to update current menu's defaultActiveFirst value


          SubMenu_updateDefaultActiveFirst(store, _this.props.eventKey, true);
        }

        return true;
      }

      if (keyCode === KeyCode["a" /* default */].LEFT) {
        var handled;

        if (isOpen) {
          handled = menu.onKeyDown(e);
        } else {
          return undefined;
        }

        if (!handled) {
          _this.triggerOpenChange(false);

          handled = true;
        }

        return handled;
      }

      if (isOpen && (keyCode === KeyCode["a" /* default */].UP || keyCode === KeyCode["a" /* default */].DOWN)) {
        return menu.onKeyDown(e);
      }

      return undefined;
    };

    _this.onOpenChange = function (e) {
      _this.props.onOpenChange(e);
    };

    _this.onPopupVisibleChange = function (visible) {
      _this.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          key = _this$props2.eventKey,
          onMouseEnter = _this$props2.onMouseEnter,
          store = _this$props2.store;
      SubMenu_updateDefaultActiveFirst(store, _this.props.eventKey, false);
      onMouseEnter({
        key: key,
        domEvent: e
      });
    };

    _this.onMouseLeave = function (e) {
      var _this$props3 = _this.props,
          parentMenu = _this$props3.parentMenu,
          eventKey = _this$props3.eventKey,
          onMouseLeave = _this$props3.onMouseLeave;
      parentMenu.subMenuInstance = Object(esm_assertThisInitialized["a" /* default */])(_this);
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onTitleMouseEnter = function (domEvent) {
      var _this$props4 = _this.props,
          key = _this$props4.eventKey,
          onItemHover = _this$props4.onItemHover,
          onTitleMouseEnter = _this$props4.onTitleMouseEnter;
      onItemHover({
        key: key,
        hover: true
      });
      onTitleMouseEnter({
        key: key,
        domEvent: domEvent
      });
    };

    _this.onTitleMouseLeave = function (e) {
      var _this$props5 = _this.props,
          parentMenu = _this$props5.parentMenu,
          eventKey = _this$props5.eventKey,
          onItemHover = _this$props5.onItemHover,
          onTitleMouseLeave = _this$props5.onTitleMouseLeave;
      parentMenu.subMenuInstance = Object(esm_assertThisInitialized["a" /* default */])(_this);
      onItemHover({
        key: eventKey,
        hover: false
      });
      onTitleMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onTitleClick = function (e) {
      var _assertThisInitialize = Object(esm_assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize.props;

      props.onTitleClick({
        key: props.eventKey,
        domEvent: e
      });

      if (props.triggerSubMenuAction === 'hover') {
        return;
      }

      _this.triggerOpenChange(!props.isOpen, 'click');

      SubMenu_updateDefaultActiveFirst(props.store, _this.props.eventKey, false);
    };

    _this.onSubMenuClick = function (info) {
      // in the case of overflowed submenu
      // onClick is not copied over
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(_this.addKeyPath(info));
      }
    };

    _this.onSelect = function (info) {
      _this.props.onSelect(info);
    };

    _this.onDeselect = function (info) {
      _this.props.onDeselect(info);
    };

    _this.getPrefixCls = function () {
      return "".concat(_this.props.rootPrefixCls, "-submenu");
    };

    _this.getActiveClassName = function () {
      return "".concat(_this.getPrefixCls(), "-active");
    };

    _this.getDisabledClassName = function () {
      return "".concat(_this.getPrefixCls(), "-disabled");
    };

    _this.getSelectedClassName = function () {
      return "".concat(_this.getPrefixCls(), "-selected");
    };

    _this.getOpenClassName = function () {
      return "".concat(_this.props.rootPrefixCls, "-submenu-open");
    };

    _this.saveMenuInstance = function (c) {
      // children menu instance
      _this.menuInstance = c;
    };

    _this.addKeyPath = function (info) {
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, info), {}, {
        keyPath: (info.keyPath || []).concat(_this.props.eventKey)
      });
    };

    _this.triggerOpenChange = function (open, type) {
      var key = _this.props.eventKey;

      var openChange = function openChange() {
        _this.onOpenChange({
          key: key,
          item: Object(esm_assertThisInitialized["a" /* default */])(_this),
          trigger: type,
          open: open
        });
      };

      if (type === 'mouseenter') {
        // make sure mouseenter happen after other menu item's mouseleave
        _this.mouseenterTimeout = setTimeout(function () {
          openChange();
        }, 0);
      } else {
        openChange();
      }
    };

    _this.isChildrenSelected = function () {
      var ret = {
        find: false
      };
      loopMenuItemRecursively(_this.props.children, _this.props.selectedKeys, ret);
      return ret.find;
    };

    _this.isOpen = function () {
      return _this.props.openKeys.indexOf(_this.props.eventKey) !== -1;
    };

    _this.adjustWidth = function () {
      /* istanbul ignore if */
      if (!_this.subMenuTitle || !_this.menuInstance) {
        return;
      }

      var popupMenu = react_dom["findDOMNode"](_this.menuInstance);

      if (popupMenu.offsetWidth >= _this.subMenuTitle.offsetWidth) {
        return;
      }
      /* istanbul ignore next */


      popupMenu.style.minWidth = "".concat(_this.subMenuTitle.offsetWidth, "px");
    };

    _this.saveSubMenuTitle = function (subMenuTitle) {
      _this.subMenuTitle = subMenuTitle;
    };

    _this.getBaseProps = function () {
      var _assertThisInitialize2 = Object(esm_assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize2.props;

      return {
        mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
        visible: _this.props.isOpen,
        level: props.level + 1,
        inlineIndent: props.inlineIndent,
        focusable: false,
        onClick: _this.onSubMenuClick,
        onSelect: _this.onSelect,
        onDeselect: _this.onDeselect,
        onDestroy: _this.onDestroy,
        selectedKeys: props.selectedKeys,
        eventKey: "".concat(props.eventKey, "-menu-"),
        openKeys: props.openKeys,
        motion: props.motion,
        onOpenChange: _this.onOpenChange,
        subMenuOpenDelay: props.subMenuOpenDelay,
        parentMenu: Object(esm_assertThisInitialized["a" /* default */])(_this),
        subMenuCloseDelay: props.subMenuCloseDelay,
        forceSubMenuRender: props.forceSubMenuRender,
        triggerSubMenuAction: props.triggerSubMenuAction,
        builtinPlacements: props.builtinPlacements,
        defaultActiveFirst: props.store.getState().defaultActiveFirst[getMenuIdFromSubMenuEventKey(props.eventKey)],
        multiple: props.multiple,
        prefixCls: props.rootPrefixCls,
        id: _this.internalMenuId,
        manualRef: _this.saveMenuInstance,
        itemIcon: props.itemIcon,
        expandIcon: props.expandIcon,
        direction: props.direction
      };
    };

    _this.getMotion = function (mode, visible) {
      var _assertThisInitialize3 = Object(esm_assertThisInitialized["a" /* default */])(_this),
          haveRendered = _assertThisInitialize3.haveRendered;

      var _this$props6 = _this.props,
          motion = _this$props6.motion,
          rootPrefixCls = _this$props6.rootPrefixCls; // don't show transition on first rendering (no animation for opened menu)
      // show appear transition if it's not visible (not sure why)
      // show appear transition if it's not inline mode

      var mergedMotion = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, motion), {}, {
        leavedClassName: "".concat(rootPrefixCls, "-hidden"),
        removeOnLeave: false,
        motionAppear: haveRendered || !visible || mode !== 'inline'
      });

      return mergedMotion;
    };

    var store = props.store,
        eventKey = props.eventKey;

    var _store$getState = store.getState(),
        defaultActiveFirst = _store$getState.defaultActiveFirst;

    _this.isRootMenu = false;
    var value = false;

    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }

    SubMenu_updateDefaultActiveFirst(store, eventKey, value);
    return _this;
  }

  Object(esm_createClass["a" /* default */])(SubMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$props7 = this.props,
          mode = _this$props7.mode,
          parentMenu = _this$props7.parentMenu,
          manualRef = _this$props7.manualRef,
          isOpen = _this$props7.isOpen; // invoke customized ref to expose component to mixin

      if (manualRef) {
        manualRef(this);
      }

      if (mode !== 'horizontal' || !(parentMenu === null || parentMenu === void 0 ? void 0 : parentMenu.isRootMenu) || !isOpen) {
        return;
      }

      this.minWidthTimeout = setTimeout(function () {
        return _this2.adjustWidth();
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props8 = this.props,
          onDestroy = _this$props8.onDestroy,
          eventKey = _this$props8.eventKey;

      if (onDestroy) {
        onDestroy(eventKey);
      }
      /* istanbul ignore if */


      if (this.minWidthTimeout) {
        clearTimeout(this.minWidthTimeout);
      }
      /* istanbul ignore if */


      if (this.mouseenterTimeout) {
        clearTimeout(this.mouseenterTimeout);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this3 = this;

      var baseProps = this.getBaseProps(); // [Legacy] getMotion must be called before `haveRendered`

      var mergedMotion = this.getMotion(baseProps.mode, baseProps.visible);
      this.haveRendered = true;
      this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender; // never rendered not planning to, don't render

      if (!this.haveOpened) {
        return react["createElement"]("div", null);
      }

      var direction = baseProps.direction;
      return react["createElement"](rc_motion_es["b" /* default */], Object.assign({
        visible: baseProps.visible
      }, mergedMotion), function (_ref) {
        var className = _ref.className,
            style = _ref.style;
        var mergedClassName = classnames_default()("".concat(baseProps.prefixCls, "-sub"), className, Object(esm_defineProperty["a" /* default */])({}, "".concat(baseProps.prefixCls, "-rtl"), direction === 'rtl'));
        return react["createElement"](es_SubPopupMenu, Object.assign({}, baseProps, {
          id: _this3.internalMenuId,
          className: mergedClassName,
          style: style
        }), children);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2, _props$parentMenu;

      var props = Object(objectSpread2["a" /* default */])({}, this.props);

      var isOpen = props.isOpen;
      var prefixCls = this.getPrefixCls();
      var isInlineMode = props.mode === 'inline';
      var className = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(props.mode), (_classNames2 = {}, Object(esm_defineProperty["a" /* default */])(_classNames2, props.className, !!props.className), Object(esm_defineProperty["a" /* default */])(_classNames2, this.getOpenClassName(), isOpen), Object(esm_defineProperty["a" /* default */])(_classNames2, this.getActiveClassName(), props.active || isOpen && !isInlineMode), Object(esm_defineProperty["a" /* default */])(_classNames2, this.getDisabledClassName(), props.disabled), Object(esm_defineProperty["a" /* default */])(_classNames2, this.getSelectedClassName(), this.isChildrenSelected()), _classNames2));

      if (!this.internalMenuId) {
        if (props.eventKey) {
          this.internalMenuId = "".concat(props.eventKey, "$Menu");
        } else {
          guid += 1;
          this.internalMenuId = "$__$".concat(guid, "$Menu");
        }
      }

      var mouseEvents = {};
      var titleClickEvents = {};
      var titleMouseEvents = {};

      if (!props.disabled) {
        mouseEvents = {
          onMouseLeave: this.onMouseLeave,
          onMouseEnter: this.onMouseEnter
        }; // only works in title, not outer li

        titleClickEvents = {
          onClick: this.onTitleClick
        };
        titleMouseEvents = {
          onMouseEnter: this.onTitleMouseEnter,
          onMouseLeave: this.onTitleMouseLeave
        };
      }

      var style = {};
      var direction = props.direction;

      if (isInlineMode) {
        if (direction === 'rtl') {
          style.paddingRight = props.inlineIndent * props.level;
        } else {
          style.paddingLeft = props.inlineIndent * props.level;
        }
      }

      var ariaOwns = {}; // only set aria-owns when menu is open
      // otherwise it would be an invalid aria-owns value
      // since corresponding node cannot be found

      if (this.props.isOpen) {
        ariaOwns = {
          'aria-owns': this.internalMenuId
        };
      } // expand custom icon should NOT be displayed in menu with horizontal mode.


      var icon = null;

      if (props.mode !== 'horizontal') {
        icon = this.props.expandIcon; // ReactNode

        if (typeof this.props.expandIcon === 'function') {
          icon = react["createElement"](this.props.expandIcon, Object(objectSpread2["a" /* default */])({}, this.props));
        }
      }

      var title = react["createElement"]("div", Object.assign({
        ref: this.saveSubMenuTitle,
        style: style,
        className: "".concat(prefixCls, "-title"),
        role: "button"
      }, titleMouseEvents, titleClickEvents, {
        "aria-expanded": isOpen
      }, ariaOwns, {
        "aria-haspopup": "true",
        title: typeof props.title === 'string' ? props.title : undefined
      }), props.title, icon || react["createElement"]("i", {
        className: "".concat(prefixCls, "-arrow")
      }));
      var children = this.renderChildren(props.children);
      var getPopupContainer = ((_props$parentMenu = props.parentMenu) === null || _props$parentMenu === void 0 ? void 0 : _props$parentMenu.isRootMenu) ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
        return triggerNode.parentNode;
      };
      var popupPlacement = popupPlacementMap[props.mode];
      var popupAlign = props.popupOffset ? {
        offset: props.popupOffset
      } : {};
      var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
      popupClassName += direction === 'rtl' ? " ".concat(prefixCls, "-rtl") : '';
      var disabled = props.disabled,
          triggerSubMenuAction = props.triggerSubMenuAction,
          subMenuOpenDelay = props.subMenuOpenDelay,
          forceSubMenuRender = props.forceSubMenuRender,
          subMenuCloseDelay = props.subMenuCloseDelay,
          builtinPlacements = props.builtinPlacements;
      menuAllProps.forEach(function (key) {
        return delete props[key];
      }); // Set onClick to null, to ignore propagated onClick event

      delete props.onClick;
      var placement = direction === 'rtl' ? Object.assign({}, placementsRtl, builtinPlacements) : Object.assign({}, placements, builtinPlacements);
      delete props.direction;
      return react["createElement"]("li", Object.assign({}, props, mouseEvents, {
        className: className,
        role: "menuitem"
      }), react["createElement"](rc_trigger_es["a" /* default */], {
        prefixCls: prefixCls,
        popupClassName: classnames_default()("".concat(prefixCls, "-popup"), popupClassName),
        getPopupContainer: getPopupContainer,
        builtinPlacements: placement,
        popupPlacement: popupPlacement,
        popupVisible: isInlineMode ? false : isOpen,
        popupAlign: popupAlign,
        popup: isInlineMode ? null : children,
        action: disabled || isInlineMode ? [] : [triggerSubMenuAction],
        mouseEnterDelay: subMenuOpenDelay,
        mouseLeaveDelay: subMenuCloseDelay,
        onPopupVisibleChange: this.onPopupVisibleChange,
        forceRender: forceSubMenuRender
      }, title), isInlineMode ? children : null);
    }
  }]);

  return SubMenu;
}(react["Component"]);
SubMenu_SubMenu.defaultProps = {
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTitleMouseEnter: noop,
  onTitleMouseLeave: noop,
  onTitleClick: noop,
  manualRef: noop,
  mode: 'vertical',
  title: ''
};
var connected = Object(esm["b" /* connect */])(function (_ref2, _ref3) {
  var openKeys = _ref2.openKeys,
      activeKey = _ref2.activeKey,
      selectedKeys = _ref2.selectedKeys;
  var eventKey = _ref3.eventKey,
      subMenuKey = _ref3.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu_SubMenu);
connected.isSubMenu = true;
/* harmony default export */ var es_SubMenu = (connected);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/DOMWrap.js













var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var FLOAT_PRECISION_ADJUST = 0.5;

var DOMWrap_DOMWrap = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(DOMWrap, _React$Component);

  var _super = Object(esm_createSuper["a" /* default */])(DOMWrap);

  function DOMWrap() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, DOMWrap);

    _this = _super.apply(this, arguments);
    _this.resizeObserver = null;
    _this.mutationObserver = null; // original scroll size of the list

    _this.originalTotalWidth = 0; // copy of overflowed items

    _this.overflowedItems = []; // cache item of the original items (so we can track the size and order)

    _this.menuItemSizes = [];
    _this.cancelFrameId = null;
    _this.state = {
      lastVisibleIndex: undefined
    }; // get all valid menuItem nodes

    _this.getMenuItemNodes = function () {
      var prefixCls = _this.props.prefixCls;
      var ul = react_dom["findDOMNode"](Object(esm_assertThisInitialized["a" /* default */])(_this));

      if (!ul) {
        return [];
      } // filter out all overflowed indicator placeholder


      return [].slice.call(ul.children).filter(function (node) {
        return node.className.split(' ').indexOf("".concat(prefixCls, "-overflowed-submenu")) < 0;
      });
    };

    _this.getOverflowedSubMenuItem = function (keyPrefix, overflowedItems, renderPlaceholder) {
      var _this$props = _this.props,
          overflowedIndicator = _this$props.overflowedIndicator,
          level = _this$props.level,
          mode = _this$props.mode,
          prefixCls = _this$props.prefixCls,
          theme = _this$props.theme;

      if (level !== 1 || mode !== 'horizontal') {
        return null;
      } // put all the overflowed item inside a submenu
      // with a title of overflow indicator ('...')


      var copy = _this.props.children[0];

      var _copy$props = copy.props,
          throwAway = _copy$props.children,
          title = _copy$props.title,
          propStyle = _copy$props.style,
          rest = Object(objectWithoutProperties["a" /* default */])(_copy$props, ["children", "title", "style"]);

      var style = Object(objectSpread2["a" /* default */])({}, propStyle);

      var key = "".concat(keyPrefix, "-overflowed-indicator");
      var eventKey = "".concat(keyPrefix, "-overflowed-indicator");

      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
        style = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, style), {}, {
          display: 'none'
        });
      } else if (renderPlaceholder) {
        style = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, style), {}, {
          visibility: 'hidden',
          // prevent from taking normal dom space
          position: 'absolute'
        });
        key = "".concat(key, "-placeholder");
        eventKey = "".concat(eventKey, "-placeholder");
      }

      var popupClassName = theme ? "".concat(prefixCls, "-").concat(theme) : '';
      var props = {};
      menuAllProps.forEach(function (k) {
        if (rest[k] !== undefined) {
          props[k] = rest[k];
        }
      });
      return react["createElement"](es_SubMenu, Object.assign({
        title: overflowedIndicator,
        className: "".concat(prefixCls, "-overflowed-submenu"),
        popupClassName: popupClassName
      }, props, {
        key: key,
        eventKey: eventKey,
        disabled: false,
        style: style
      }), overflowedItems);
    }; // memorize rendered menuSize


    _this.setChildrenWidthAndResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }

      var ul = react_dom["findDOMNode"](Object(esm_assertThisInitialized["a" /* default */])(_this));

      if (!ul) {
        return;
      }

      var ulChildrenNodes = ul.children;

      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
        return;
      }

      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1]; // need last overflowed indicator for calculating length;

      util_setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');

      var menuItemNodes = _this.getMenuItemNodes(); // reset display attribute for all hidden elements caused by overflow to calculate updated width
      // and then reset to original state after width calculation


      var overflowedItems = menuItemNodes.filter(function (c) {
        return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
      });
      overflowedItems.forEach(function (c) {
        util_setStyle(c, 'display', 'inline-block');
      });
      _this.menuItemSizes = menuItemNodes.map(function (c) {
        return getWidth(c, true);
      });
      overflowedItems.forEach(function (c) {
        util_setStyle(c, 'display', 'none');
      });
      _this.overflowedIndicatorWidth = getWidth(ul.children[ul.children.length - 1], true);
      _this.originalTotalWidth = _this.menuItemSizes.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);

      _this.handleResize(); // prevent the overflowed indicator from taking space;


      util_setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'none');
    };

    _this.handleResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }

      var ul = react_dom["findDOMNode"](Object(esm_assertThisInitialized["a" /* default */])(_this));

      if (!ul) {
        return;
      }

      var width = getWidth(ul);
      _this.overflowedItems = [];
      var currentSumWidth = 0; // index for last visible child in horizontal mode

      var lastVisibleIndex; // float number comparison could be problematic
      // e.g. 0.1 + 0.2 > 0.3 =====> true
      // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation

      if (_this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
        lastVisibleIndex = -1;

        _this.menuItemSizes.forEach(function (liWidth) {
          currentSumWidth += liWidth;

          if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
            lastVisibleIndex += 1;
          }
        });
      }

      _this.setState({
        lastVisibleIndex: lastVisibleIndex
      });
    };

    return _this;
  }

  Object(esm_createClass["a" /* default */])(DOMWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setChildrenWidthAndResize();

      if (this.props.level === 1 && this.props.mode === 'horizontal') {
        var menuUl = react_dom["findDOMNode"](this);

        if (!menuUl) {
          return;
        }

        this.resizeObserver = new ResizeObserver_es["a" /* default */](function (entries) {
          entries.forEach(function () {
            var cancelFrameId = _this2.cancelFrameId;
            cancelAnimationFrame(cancelFrameId);
            _this2.cancelFrameId = requestAnimationFrame(_this2.setChildrenWidthAndResize);
          });
        });
        [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
          _this2.resizeObserver.observe(el);
        });

        if (typeof MutationObserver !== 'undefined') {
          this.mutationObserver = new MutationObserver(function () {
            _this2.resizeObserver.disconnect();

            [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
              _this2.resizeObserver.observe(el);
            });

            _this2.setChildrenWidthAndResize();
          });
          this.mutationObserver.observe(menuUl, {
            attributes: false,
            childList: true,
            subTree: false
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }

      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }

      cancelAnimationFrame(this.cancelFrameId);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this3 = this; // need to take care of overflowed items in horizontal mode


      var lastVisibleIndex = this.state.lastVisibleIndex;
      return (children || []).reduce(function (acc, childNode, index) {
        var item = childNode;

        if (_this3.props.mode === 'horizontal') {
          var overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, []);

          if (lastVisibleIndex !== undefined && _this3.props.className.indexOf("".concat(_this3.props.prefixCls, "-root")) !== -1) {
            if (index > lastVisibleIndex) {
              item = react["cloneElement"](childNode, // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
              {
                style: {
                  display: 'none'
                },
                eventKey: "".concat(childNode.props.eventKey, "-hidden"),

                /**
                 * Legacy code. Here `className` never used:
                 * https://github.com/react-component/menu/commit/4cd6b49fce9d116726f4ea00dda85325d6f26500#diff-e2fa48f75c2dd2318295cde428556a76R240
                 */
                className: "".concat(MENUITEM_OVERFLOWED_CLASSNAME)
              });
            }

            if (index === lastVisibleIndex + 1) {
              _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
                return react["cloneElement"](c, // children[index].key will become '.$key' in clone by default,
                // we have to overwrite with the correct key explicitly
                {
                  key: c.props.eventKey,
                  mode: 'vertical-left'
                });
              });
              overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
            }
          }

          var ret = [].concat(Object(esm_toConsumableArray["a" /* default */])(acc), [overflowed, item]);

          if (index === children.length - 1) {
            // need a placeholder for calculating overflowed indicator width
            ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
          }

          return ret;
        }

        return [].concat(Object(esm_toConsumableArray["a" /* default */])(acc), [item]);
      }, []);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visible = _this$props2.visible,
          prefixCls = _this$props2.prefixCls,
          overflowedIndicator = _this$props2.overflowedIndicator,
          mode = _this$props2.mode,
          level = _this$props2.level,
          tag = _this$props2.tag,
          children = _this$props2.children,
          theme = _this$props2.theme,
          rest = Object(objectWithoutProperties["a" /* default */])(_this$props2, ["visible", "prefixCls", "overflowedIndicator", "mode", "level", "tag", "children", "theme"]);

      var Tag = tag;
      return react["createElement"](Tag, Object.assign({}, rest), this.renderChildren(children));
    }
  }]);

  return DOMWrap;
}(react["Component"]);

DOMWrap_DOMWrap.defaultProps = {
  tag: 'div',
  className: ''
};
/* harmony default export */ var es_DOMWrap = (DOMWrap_DOMWrap);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubPopupMenu.js


















function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }

  return arr.every(function (c) {
    return !!c.props.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var state = store.getState();
  store.setState({
    activeKey: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, state.activeKey), {}, Object(esm_defineProperty["a" /* default */])({}, menuId, activeKey))
  });
}

function getEventKey(props) {
  // when eventKey not available ,it's menu and return menu id '0-menu-'
  return props.eventKey || '0-menu-';
}

function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var children = props.children,
      eventKey = props.eventKey;

  if (activeKey) {
    var found;
    loopMenuItem(children, function (c, i) {
      if (c && c.props && !c.props.disabled && activeKey === getKeyFromChildrenIndex(c, eventKey, i)) {
        found = true;
      }
    });

    if (found) {
      return activeKey;
    }
  }

  activeKey = null;

  if (props.defaultActiveFirst) {
    loopMenuItem(children, function (c, i) {
      if (!activeKey && c && !c.props.disabled) {
        activeKey = getKeyFromChildrenIndex(c, eventKey, i);
      }
    });
    return activeKey;
  }

  return activeKey;
}
function saveRef(c) {
  if (c) {
    var index = this.instanceArray.indexOf(c);

    if (index !== -1) {
      // update component if it's already inside instanceArray
      this.instanceArray[index] = c;
    } else {
      // add component if it's not in instanceArray yet;
      this.instanceArray.push(c);
    }
  }
}
var SubPopupMenu_SubPopupMenu = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(SubPopupMenu, _React$Component);

  var _super = Object(esm_createSuper["a" /* default */])(SubPopupMenu);

  function SubPopupMenu(props) {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, SubPopupMenu);

    _this = _super.call(this, props);
    /**
     * all keyboard events callbacks run from here at first
     *
     * note:
     *  This legacy code that `onKeyDown` is called by parent instead of dom self.
     *  which need return code to check if this event is handled
     */

    _this.onKeyDown = function (e, callback) {
      var keyCode = e.keyCode;
      var handled;

      _this.getFlatInstanceArray().forEach(function (obj) {
        if (obj && obj.props.active && obj.onKeyDown) {
          handled = obj.onKeyDown(e);
        }
      });

      if (handled) {
        return 1;
      }

      var activeItem = null;

      if (keyCode === KeyCode["a" /* default */].UP || keyCode === KeyCode["a" /* default */].DOWN) {
        activeItem = _this.step(keyCode === KeyCode["a" /* default */].UP ? -1 : 1);
      }

      if (activeItem) {
        e.preventDefault();
        updateActiveKey(_this.props.store, getEventKey(_this.props), activeItem.props.eventKey);

        if (typeof callback === 'function') {
          callback(activeItem);
        }

        return 1;
      }

      return undefined;
    };

    _this.onItemHover = function (e) {
      var key = e.key,
          hover = e.hover;
      updateActiveKey(_this.props.store, getEventKey(_this.props), hover ? key : null);
    };

    _this.onDeselect = function (selectInfo) {
      _this.props.onDeselect(selectInfo);
    };

    _this.onSelect = function (selectInfo) {
      _this.props.onSelect(selectInfo);
    };

    _this.onClick = function (e) {
      _this.props.onClick(e);
    };

    _this.onOpenChange = function (e) {
      _this.props.onOpenChange(e);
    };

    _this.onDestroy = function (key) {
      /* istanbul ignore next */
      _this.props.onDestroy(key);
    };

    _this.getFlatInstanceArray = function () {
      return _this.instanceArray;
    };

    _this.step = function (direction) {
      var children = _this.getFlatInstanceArray();

      var activeKey = _this.props.store.getState().activeKey[getEventKey(_this.props)];

      var len = children.length;

      if (!len) {
        return null;
      }

      if (direction < 0) {
        children = children.concat().reverse();
      } // find current activeIndex


      var activeIndex = -1;
      children.every(function (c, ci) {
        if (c && c.props.eventKey === activeKey) {
          activeIndex = ci;
          return false;
        }

        return true;
      });

      if (!_this.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
        return undefined;
      }

      var start = (activeIndex + 1) % len;
      var i = start;

      do {
        var child = children[i];

        if (!child || child.props.disabled) {
          i = (i + 1) % len;
        } else {
          return child;
        }
      } while (i !== start);

      return null;
    };

    _this.renderCommonMenuItem = function (child, i, extraProps) {
      var state = _this.props.store.getState();

      var _assertThisInitialize = Object(esm_assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize.props;

      var key = getKeyFromChildrenIndex(child, props.eventKey, i);
      var childProps = child.props; // https://github.com/ant-design/ant-design/issues/11517#issuecomment-477403055

      if (!childProps || typeof child.type === 'string') {
        return child;
      }

      var isActive = key === state.activeKey;

      var newChildProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
        mode: childProps.mode || props.mode,
        level: props.level,
        inlineIndent: props.inlineIndent,
        renderMenuItem: _this.renderMenuItem,
        rootPrefixCls: props.prefixCls,
        index: i,
        parentMenu: props.parentMenu,
        // customized ref function, need to be invoked manually in child's componentDidMount
        manualRef: childProps.disabled ? undefined : Object(createChainedFunction["a" /* default */])(child.ref, saveRef.bind(Object(esm_assertThisInitialized["a" /* default */])(_this))),
        eventKey: key,
        active: !childProps.disabled && isActive,
        multiple: props.multiple,
        onClick: function onClick(e) {
          (childProps.onClick || noop)(e);

          _this.onClick(e);
        },
        onItemHover: _this.onItemHover,
        motion: props.motion,
        subMenuOpenDelay: props.subMenuOpenDelay,
        subMenuCloseDelay: props.subMenuCloseDelay,
        forceSubMenuRender: props.forceSubMenuRender,
        onOpenChange: _this.onOpenChange,
        onDeselect: _this.onDeselect,
        onSelect: _this.onSelect,
        builtinPlacements: props.builtinPlacements,
        itemIcon: childProps.itemIcon || _this.props.itemIcon,
        expandIcon: childProps.expandIcon || _this.props.expandIcon
      }, extraProps), {}, {
        direction: props.direction
      }); // ref: https://github.com/ant-design/ant-design/issues/13943


      if (props.mode === 'inline' || util_isMobileDevice()) {
        newChildProps.triggerSubMenuAction = 'click';
      }

      return react["cloneElement"](child, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, newChildProps), {}, {
        key: key || i
      }));
    };

    _this.renderMenuItem = function (c, i, subMenuKey) {
      /* istanbul ignore if */
      if (!c) {
        return null;
      }

      var state = _this.props.store.getState();

      var extraProps = {
        openKeys: state.openKeys,
        selectedKeys: state.selectedKeys,
        triggerSubMenuAction: _this.props.triggerSubMenuAction,
        subMenuKey: subMenuKey
      };
      return _this.renderCommonMenuItem(c, i, extraProps);
    };

    props.store.setState({
      activeKey: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props.store.getState().activeKey), {}, Object(esm_defineProperty["a" /* default */])({}, props.eventKey, getActiveKey(props, props.activeKey)))
    });
    _this.instanceArray = [];
    return _this;
  }

  Object(esm_createClass["a" /* default */])(SubPopupMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // invoke customized ref to expose component to mixin
      if (this.props.manualRef) {
        this.props.manualRef(this);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.visible || nextProps.visible || this.props.className !== nextProps.className || !shallowequal_default()(this.props.style, nextProps.style);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;
      var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
      var activeKey = getActiveKey(props, originalActiveKey);

      if (activeKey !== originalActiveKey) {
        updateActiveKey(props.store, getEventKey(props), activeKey);
      } else if ('activeKey' in prevProps) {
        // If prev activeKey is not same as current activeKey,
        // we should set it.
        var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);

        if (activeKey !== prevActiveKey) {
          updateActiveKey(props.store, getEventKey(props), activeKey);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = Object(esm_extends["a" /* default */])({}, this.props);

      this.instanceArray = [];
      var className = classnames_default()(props.prefixCls, props.className, "".concat(props.prefixCls, "-").concat(props.mode));
      var domProps = {
        className: className,
        // role could be 'select' and by default set to menu
        role: props.role || 'menu'
      };

      if (props.id) {
        domProps.id = props.id;
      }

      if (props.focusable) {
        domProps.tabIndex = 0;
        domProps.onKeyDown = this.onKeyDown;
      }

      var prefixCls = props.prefixCls,
          eventKey = props.eventKey,
          visible = props.visible,
          level = props.level,
          mode = props.mode,
          overflowedIndicator = props.overflowedIndicator,
          theme = props.theme;
      menuAllProps.forEach(function (key) {
        return delete props[key];
      }); // Otherwise, the propagated click event will trigger another onClick

      delete props.onClick;
      return react["createElement"](es_DOMWrap, Object.assign({}, props, {
        prefixCls: prefixCls,
        mode: mode,
        tag: "ul",
        level: level,
        theme: theme,
        visible: visible,
        overflowedIndicator: overflowedIndicator
      }, domProps), Object(toArray["a" /* default */])(props.children).map(function (c, i) {
        return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
      }));
    }
  }]);

  return SubPopupMenu;
}(react["Component"]);
SubPopupMenu_SubPopupMenu.defaultProps = {
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  level: 1,
  inlineIndent: 24,
  visible: true,
  focusable: true,
  style: {},
  manualRef: noop
};
var SubPopupMenu_connected = Object(esm["b" /* connect */])()(SubPopupMenu_SubPopupMenu);
/* harmony default export */ var es_SubPopupMenu = (SubPopupMenu_connected);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__("Kwbf");

// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/legacyUtil.js


function getMotion(_ref, _ref2, menuMode) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      _ref$defaultMotions = _ref.defaultMotions,
      defaultMotions = _ref$defaultMotions === void 0 ? {} : _ref$defaultMotions,
      openAnimation = _ref.openAnimation,
      openTransitionName = _ref.openTransitionName;
  var switchingModeFromInline = _ref2.switchingModeFromInline;

  if (motion) {
    return motion;
  }

  if (Object(esm_typeof["a" /* default */])(openAnimation) === 'object' && openAnimation) {
    Object(es_warning["a" /* default */])(false, 'Object type of `openAnimation` is removed. Please use `motion` instead.');
  } else if (typeof openAnimation === 'string') {
    return {
      motionName: "".concat(prefixCls, "-open-").concat(openAnimation)
    };
  }

  if (openTransitionName) {
    return {
      motionName: openTransitionName
    };
  } // Default logic


  var defaultMotion = defaultMotions[menuMode];

  if (defaultMotion) {
    return defaultMotion;
  } // When mode switch from inline
  // submenu should hide without animation


  return switchingModeFromInline ? null : defaultMotions.other;
}
// CONCATENATED MODULE: ./node_modules/rc-menu/es/Menu.js













var Menu_Menu = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(Menu, _React$Component);

  var _super = Object(esm_createSuper["a" /* default */])(Menu);

  function Menu(props) {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, Menu);

    _this = _super.call(this, props);

    _this.onSelect = function (selectInfo) {
      var _assertThisInitialize = Object(esm_assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize.props;

      if (props.selectable) {
        // root menu
        var _this$store$getState = _this.store.getState(),
            _selectedKeys = _this$store$getState.selectedKeys;

        var selectedKey = selectInfo.key;

        if (props.multiple) {
          _selectedKeys = _selectedKeys.concat([selectedKey]);
        } else {
          _selectedKeys = [selectedKey];
        }

        if (!('selectedKeys' in props)) {
          _this.store.setState({
            selectedKeys: _selectedKeys
          });
        }

        props.onSelect(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, selectInfo), {}, {
          selectedKeys: _selectedKeys
        }));
      }
    };

    _this.onClick = function (e) {
      var mode = _this.getRealMenuMode();

      var _assertThisInitialize2 = Object(esm_assertThisInitialized["a" /* default */])(_this),
          store = _assertThisInitialize2.store,
          onOpenChange = _assertThisInitialize2.props.onOpenChange;

      if (mode !== 'inline' && !('openKeys' in _this.props)) {
        // closing vertical popup submenu after click it
        store.setState({
          openKeys: []
        });
        onOpenChange([]);
      }

      _this.props.onClick(e);
    }; // onKeyDown needs to be exposed as a instance method
    // e.g., in rc-select, we need to navigate menu item while
    // current active item is rc-select input box rather than the menu itself


    _this.onKeyDown = function (e, callback) {
      _this.innerMenu.getWrappedInstance().onKeyDown(e, callback);
    };

    _this.onOpenChange = function (event) {
      var _assertThisInitialize3 = Object(esm_assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize3.props;

      var openKeys = _this.store.getState().openKeys.concat();

      var changed = false;

      var processSingle = function processSingle(e) {
        var oneChanged = false;

        if (e.open) {
          oneChanged = openKeys.indexOf(e.key) === -1;

          if (oneChanged) {
            openKeys.push(e.key);
          }
        } else {
          var index = openKeys.indexOf(e.key);
          oneChanged = index !== -1;

          if (oneChanged) {
            openKeys.splice(index, 1);
          }
        }

        changed = changed || oneChanged;
      };

      if (Array.isArray(event)) {
        // batch change call
        event.forEach(processSingle);
      } else {
        processSingle(event);
      }

      if (changed) {
        if (!('openKeys' in _this.props)) {
          _this.store.setState({
            openKeys: openKeys
          });
        }

        props.onOpenChange(openKeys);
      }
    };

    _this.onDeselect = function (selectInfo) {
      var _assertThisInitialize4 = Object(esm_assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize4.props;

      if (props.selectable) {
        var _selectedKeys2 = _this.store.getState().selectedKeys.concat();

        var selectedKey = selectInfo.key;

        var index = _selectedKeys2.indexOf(selectedKey);

        if (index !== -1) {
          _selectedKeys2.splice(index, 1);
        }

        if (!('selectedKeys' in props)) {
          _this.store.setState({
            selectedKeys: _selectedKeys2
          });
        }

        props.onDeselect(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, selectInfo), {}, {
          selectedKeys: _selectedKeys2
        }));
      }
    }; // Restore vertical mode when menu is collapsed responsively when mounted
    // https://github.com/ant-design/ant-design/issues/13104
    // TODO: not a perfect solution,
    // looking a new way to avoid setting switchingModeFromInline in this situation


    _this.onMouseEnter = function (e) {
      _this.restoreModeVerticalFromInline();

      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    _this.onTransitionEnd = function (e) {
      // when inlineCollapsed menu width animation finished
      // https://github.com/ant-design/ant-design/issues/12864
      var widthCollapsed = e.propertyName === 'width' && e.target === e.currentTarget; // Fix SVGElement e.target.className.indexOf is not a function
      // https://github.com/ant-design/ant-design/issues/15699

      var className = e.target.className; // SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal,
      // unless during an animation.

      var classNameValue = Object.prototype.toString.call(className) === '[object SVGAnimatedString]' ? className.animVal : className; // Fix for <Menu style={{ width: '100%' }} />,
      // the width transition won't trigger when menu is collapsed
      // https://github.com/ant-design/ant-design-pro/issues/2783

      var iconScaled = e.propertyName === 'font-size' && classNameValue.indexOf('anticon') >= 0;

      if (widthCollapsed || iconScaled) {
        _this.restoreModeVerticalFromInline();
      }
    };

    _this.setInnerMenu = function (node) {
      _this.innerMenu = node;
    };

    _this.isRootMenu = true;
    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;

    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }

    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    _this.store = Object(esm["c" /* create */])({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: {
        '0-menu-': getActiveKey(props, props.activeKey)
      }
    });
    _this.state = {
      switchingModeFromInline: false,
      prevProps: props,
      inlineOpenKeys: [],
      store: _this.store
    };
    return _this;
  }

  Object(esm_createClass["a" /* default */])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateMiniStore();
      this.updateMenuDisplay();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          siderCollapsed = _this$props.siderCollapsed,
          inlineCollapsed = _this$props.inlineCollapsed,
          onOpenChange = _this$props.onOpenChange;

      if (!prevProps.inlineCollapsed && inlineCollapsed || !prevProps.siderCollapsed && siderCollapsed) {
        onOpenChange([]);
      }

      this.updateMiniStore();
      this.updateMenuDisplay();
    }
  }, {
    key: "updateMenuDisplay",
    value: function updateMenuDisplay() {
      var collapsedWidth = this.props.collapsedWidth,
          store = this.store,
          prevOpenKeys = this.prevOpenKeys; // https://github.com/ant-design/ant-design/issues/8587

      var hideMenu = this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px');

      if (hideMenu) {
        this.prevOpenKeys = store.getState().openKeys.concat();
        this.store.setState({
          openKeys: []
        });
      } else if (prevOpenKeys) {
        this.store.setState({
          openKeys: prevOpenKeys
        });
        this.prevOpenKeys = null;
      }
    }
  }, {
    key: "getRealMenuMode",
    value: function getRealMenuMode() {
      var mode = this.props.mode;
      var switchingModeFromInline = this.state.switchingModeFromInline;
      var inlineCollapsed = this.getInlineCollapsed();

      if (switchingModeFromInline && inlineCollapsed) {
        return 'inline';
      }

      return inlineCollapsed ? 'vertical' : mode;
    }
  }, {
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props2 = this.props,
          inlineCollapsed = _this$props2.inlineCollapsed,
          siderCollapsed = _this$props2.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "restoreModeVerticalFromInline",
    value: function restoreModeVerticalFromInline() {
      var switchingModeFromInline = this.state.switchingModeFromInline;

      if (switchingModeFromInline) {
        this.setState({
          switchingModeFromInline: false
        });
      }
    }
  }, {
    key: "updateMiniStore",
    value: function updateMiniStore() {
      if ('selectedKeys' in this.props) {
        this.store.setState({
          selectedKeys: this.props.selectedKeys || []
        });
      }

      if ('openKeys' in this.props) {
        this.store.setState({
          openKeys: this.props.openKeys || []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = Object(objectSpread2["a" /* default */])({}, Object(omit_js_es["a" /* default */])(this.props, ['collapsedWidth', 'siderCollapsed', 'defaultMotions']));

      var mode = this.getRealMenuMode();
      props.className += " ".concat(props.prefixCls, "-root");

      if (props.direction === 'rtl') {
        props.className += " ".concat(props.prefixCls, "-rtl");
      }

      props = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
        mode: mode,
        onClick: this.onClick,
        onOpenChange: this.onOpenChange,
        onDeselect: this.onDeselect,
        onSelect: this.onSelect,
        onMouseEnter: this.onMouseEnter,
        onTransitionEnd: this.onTransitionEnd,
        parentMenu: this,
        motion: getMotion(this.props, this.state, mode)
      });
      delete props.openAnimation;
      delete props.openTransitionName;
      return react["createElement"](esm["a" /* Provider */], {
        store: this.store
      }, react["createElement"](es_SubPopupMenu, Object.assign({}, props, {
        ref: this.setInnerMenu
      }), this.props.children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevProps = prevState.prevProps,
          store = prevState.store;
      var prevStoreState = store.getState();
      var newStoreState = {};
      var newState = {
        prevProps: nextProps
      };

      if (prevProps.mode === 'inline' && nextProps.mode !== 'inline') {
        newState.switchingModeFromInline = true;
      }

      if ('openKeys' in nextProps) {
        newStoreState.openKeys = nextProps.openKeys;
      } else {
        // [Legacy] Old code will return after `openKeys` changed.
        // Not sure the reason, we should keep this logic still.
        if (nextProps.inlineCollapsed && !prevProps.inlineCollapsed || nextProps.siderCollapsed && !prevProps.siderCollapsed) {
          newState.switchingModeFromInline = true;
          newState.inlineOpenKeys = prevStoreState.openKeys;
          newStoreState.openKeys = [];
        }

        if (!nextProps.inlineCollapsed && prevProps.inlineCollapsed || !nextProps.siderCollapsed && prevProps.siderCollapsed) {
          newStoreState.openKeys = prevState.inlineOpenKeys;
          newState.inlineOpenKeys = [];
        }
      }

      if (Object.keys(newStoreState).length) {
        store.setState(newStoreState);
      }

      return newState;
    }
  }]);

  return Menu;
}(react["Component"]);

Menu_Menu.defaultProps = {
  selectable: true,
  onClick: noop,
  onSelect: noop,
  onOpenChange: noop,
  onDeselect: noop,
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  subMenuOpenDelay: 0.1,
  subMenuCloseDelay: 0.1,
  triggerSubMenuAction: 'hover',
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  style: {},
  builtinPlacements: {},
  overflowedIndicator: react["createElement"]("span", null, "\xB7\xB7\xB7")
};
/* harmony default export */ var es_Menu = (Menu_Menu);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItem.js













var MenuItem_MenuItem = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(MenuItem, _React$Component);

  var _super = Object(esm_createSuper["a" /* default */])(MenuItem);

  function MenuItem() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, MenuItem);

    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;

      if (keyCode === KeyCode["a" /* default */].ENTER) {
        _this.onClick(e);

        return true;
      }

      return undefined;
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;
      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;
      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;
      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: Object(esm_assertThisInitialized["a" /* default */])(_this),
        domEvent: e
      };
      onClick(info);

      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    _this.saveNode = function (node) {
      _this.node = node;
    };

    return _this;
  }

  Object(esm_createClass["a" /* default */])(MenuItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // invoke customized ref to expose component to mixin
      this.callRef();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.callRef();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var props = this.props;

      if (props.onDestroy) {
        props.onDestroy(props.eventKey);
      }
    }
  }, {
    key: "getPrefixCls",
    value: function getPrefixCls() {
      return "".concat(this.props.rootPrefixCls, "-item");
    }
  }, {
    key: "getActiveClassName",
    value: function getActiveClassName() {
      return "".concat(this.getPrefixCls(), "-active");
    }
  }, {
    key: "getSelectedClassName",
    value: function getSelectedClassName() {
      return "".concat(this.getPrefixCls(), "-selected");
    }
  }, {
    key: "getDisabledClassName",
    value: function getDisabledClassName() {
      return "".concat(this.getPrefixCls(), "-disabled");
    }
  }, {
    key: "callRef",
    value: function callRef() {
      if (this.props.manualRef) {
        this.props.manualRef(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var props = Object(objectSpread2["a" /* default */])({}, this.props);

      var className = classnames_default()(this.getPrefixCls(), props.className, (_classNames = {}, Object(esm_defineProperty["a" /* default */])(_classNames, this.getActiveClassName(), !props.disabled && props.active), Object(esm_defineProperty["a" /* default */])(_classNames, this.getSelectedClassName(), props.isSelected), Object(esm_defineProperty["a" /* default */])(_classNames, this.getDisabledClassName(), props.disabled), _classNames));

      var attrs = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props.attribute), {}, {
        title: typeof props.title === 'string' ? props.title : undefined,
        className: className,
        // set to menuitem by default
        role: props.role || 'menuitem',
        'aria-disabled': props.disabled
      });

      if (props.role === 'option') {
        // overwrite to option
        attrs = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, attrs), {}, {
          role: 'option',
          'aria-selected': props.isSelected
        });
      } else if (props.role === null || props.role === 'none') {
        // sometimes we want to specify role inside <li/> element
        // <li><a role='menuitem'>Link</a></li> would be a good example
        // in this case the role on <li/> should be "none" to
        // remove the implied listitem role.
        // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
        attrs.role = 'none';
      } // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner


      var mouseEvent = {
        onClick: props.disabled ? null : this.onClick,
        onMouseLeave: props.disabled ? null : this.onMouseLeave,
        onMouseEnter: props.disabled ? null : this.onMouseEnter
      };

      var style = Object(objectSpread2["a" /* default */])({}, props.style);

      if (props.mode === 'inline') {
        if (props.direction === 'rtl') {
          style.paddingRight = props.inlineIndent * props.level;
        } else {
          style.paddingLeft = props.inlineIndent * props.level;
        }
      }

      menuAllProps.forEach(function (key) {
        return delete props[key];
      });
      delete props.direction;
      var icon = this.props.itemIcon;

      if (typeof this.props.itemIcon === 'function') {
        // TODO: This is a bug which should fixed after TS refactor
        icon = react["createElement"](this.props.itemIcon, this.props);
      }

      return react["createElement"]("li", Object.assign({}, Object(omit_js_es["a" /* default */])(props, ['onClick', 'onMouseEnter', 'onMouseLeave', 'onSelect']), attrs, mouseEvent, {
        style: style,
        ref: this.saveNode
      }), props.children, icon);
    }
  }]);

  return MenuItem;
}(react["Component"]);
MenuItem_MenuItem.isMenuItem = true;
MenuItem_MenuItem.defaultProps = {
  onSelect: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  manualRef: noop
};
var MenuItem_connected = Object(esm["b" /* connect */])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem_MenuItem);
/* harmony default export */ var es_MenuItem = (MenuItem_connected);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItemGroup.js








var MenuItemGroup_MenuItemGroup = /*#__PURE__*/function (_React$Component) {
  Object(esm_inherits["a" /* default */])(MenuItemGroup, _React$Component);

  var _super = Object(esm_createSuper["a" /* default */])(MenuItemGroup);

  function MenuItemGroup() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, MenuItemGroup);

    _this = _super.apply(this, arguments);

    _this.renderInnerMenuItem = function (item) {
      var _this$props = _this.props,
          renderMenuItem = _this$props.renderMenuItem,
          index = _this$props.index;
      return renderMenuItem(item, index, _this.props.subMenuKey);
    };

    return _this;
  }

  Object(esm_createClass["a" /* default */])(MenuItemGroup, [{
    key: "render",
    value: function render() {
      var props = Object(esm_extends["a" /* default */])({}, this.props);

      var _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className,
          rootPrefixCls = props.rootPrefixCls;
      var titleClassName = "".concat(rootPrefixCls, "-item-group-title");
      var listClassName = "".concat(rootPrefixCls, "-item-group-list");
      var title = props.title,
          children = props.children;
      menuAllProps.forEach(function (key) {
        return delete props[key];
      }); // Set onClick to null, to ignore propagated onClick event

      delete props.onClick;
      delete props.direction;
      return react["createElement"]("li", Object.assign({}, props, {
        className: "".concat(className, " ").concat(rootPrefixCls, "-item-group")
      }), react["createElement"]("div", {
        className: titleClassName,
        title: typeof title === 'string' ? title : undefined
      }, title), react["createElement"]("ul", {
        className: listClassName
      }, react["Children"].map(children, this.renderInnerMenuItem)));
    }
  }]);

  return MenuItemGroup;
}(react["Component"]);

MenuItemGroup_MenuItemGroup.isMenuItemGroup = true;
MenuItemGroup_MenuItemGroup.defaultProps = {
  disabled: true
};
/* harmony default export */ var es_MenuItemGroup = (MenuItemGroup_MenuItemGroup);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/Divider.js


var Divider_Divider = function Divider(_ref) {
  var className = _ref.className,
      rootPrefixCls = _ref.rootPrefixCls,
      style = _ref.style;
  return react["createElement"]("li", {
    className: "".concat(className, " ").concat(rootPrefixCls, "-item-divider"),
    style: style
  });
};

Divider_Divider.defaultProps = {
  // To fix keyboard UX.
  disabled: true,
  className: '',
  style: {}
};
/* harmony default export */ var es_Divider = (Divider_Divider);
// CONCATENATED MODULE: ./node_modules/rc-menu/es/index.js






/* harmony default export */ var rc_menu_es = (es_Menu);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 2 modules
var rc_dropdown_es = __webpack_require__("eDIo");

// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/AddButton.js


function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      editable = _ref.editable,
      locale = _ref.locale,
      style = _ref.style;

  if (!editable || editable.showAdd === false) {
    return null;
  }

  return react["createElement"]("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}

/* harmony default export */ var TabNavList_AddButton = (react["forwardRef"](AddButton));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/OperationNode.js










function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      tabs = _ref.tabs,
      locale = _ref.locale,
      mobile = _ref.mobile,
      _ref$moreIcon = _ref.moreIcon,
      moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      style = _ref.style,
      className = _ref.className,
      editable = _ref.editable,
      tabBarGutter = _ref.tabBarGutter,
      rtl = _ref.rtl,
      onTabClick = _ref.onTabClick; // ======================== Dropdown ========================

  var _useState = Object(react["useState"])(false),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react["useState"])(null),
      _useState4 = Object(esm_slicedToArray["a" /* default */])(_useState3, 2),
      selectedKey = _useState4[0],
      setSelectedKey = _useState4[1];

  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  var menu = react["createElement"](rc_menu_es, {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
          domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    return react["createElement"](es_MenuItem, {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, tab.tab);
  }));

  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;

    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];

      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }

  function onKeyDown(e) {
    var which = e.which;

    if (!open) {
      if ([KeyCode["a" /* default */].DOWN, KeyCode["a" /* default */].SPACE, KeyCode["a" /* default */].ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }

      return;
    }

    switch (which) {
      case KeyCode["a" /* default */].UP:
        selectOffset(-1);
        e.preventDefault();
        break;

      case KeyCode["a" /* default */].DOWN:
        selectOffset(1);
        e.preventDefault();
        break;

      case KeyCode["a" /* default */].ESC:
        setOpen(false);
        break;

      case KeyCode["a" /* default */].SPACE:
      case KeyCode["a" /* default */].ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  } // ========================= Effect =========================


  Object(react["useEffect"])(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);

    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  Object(react["useEffect"])(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]); // ========================= Render =========================

  var moreStyle = Object(esm_defineProperty["a" /* default */])({}, rtl ? 'marginLeft' : 'marginRight', tabBarGutter);

  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }

  var overlayClassName = classnames_default()(Object(esm_defineProperty["a" /* default */])({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : react["createElement"](rc_dropdown_es["a" /* default */], {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: open,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: overlayClassName,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  }, react["createElement"]("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, react["createElement"](TabNavList_AddButton, {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}

/* harmony default export */ var TabNavList_OperationNode = (react["forwardRef"](OperationNode));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabContext.js

/* harmony default export */ var TabContext = (Object(react["createContext"])(null));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useTouchMove.js



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL); // ========================= Check if is a mobile =========================

function useTouchMove_isMobile() {
  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent.substr(0, 4))) {
    return true;
  }

  return false;
} // ================================= Hook =================================

function useTouchMove(ref, onOffset) {
  var _useState = Object(react["useState"])(),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      touchPosition = _useState2[0],
      setTouchPosition = _useState2[1];

  var _useState3 = Object(react["useState"])(0),
      _useState4 = Object(esm_slicedToArray["a" /* default */])(_useState3, 2),
      lastTimestamp = _useState4[0],
      setLastTimestamp = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      _useState6 = Object(esm_slicedToArray["a" /* default */])(_useState5, 2),
      lastTimeDiff = _useState6[0],
      setLastTimeDiff = _useState6[1];

  var _useState7 = Object(react["useState"])(),
      _useState8 = Object(esm_slicedToArray["a" /* default */])(_useState7, 2),
      lastOffset = _useState8[0],
      setLastOffset = _useState8[1];

  var motionRef = Object(react["useRef"])(); // ========================= Events =========================
  // >>> Touch events

  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
        screenX = _e$touches$.screenX,
        screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }

  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
        screenX = _e$touches$2.screenX,
        screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }

  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null); // Swipe if needed

    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY); // Skip swipe if low distance

      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }

        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  } // >>> Wheel event


  var lastWheelTimestampRef = Object(react["useRef"])(0);
  var lastWheelPreventRef = Object(react["useRef"])(false);
  var lastWheelDirectionRef = Object(react["useRef"])();

  function onWheel(e) {
    var deltaX = e.deltaX,
        deltaY = e.deltaY; // Convert both to x & y since wheel only happened on PC

    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);

    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    } // Optimize mac touch scroll


    var now = Date.now();

    if (now - lastWheelTimestampRef.current > 100) {
      lastWheelPreventRef.current = false;
    }

    if (onOffset(-mixed, -mixed) || lastWheelPreventRef.current) {
      e.preventDefault();
      lastWheelPreventRef.current = true;
    }

    lastWheelTimestampRef.current = now;
  } // ========================= Effect =========================


  var touchEventsRef = Object(react["useRef"])(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react["useEffect"](function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }

    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }

    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }

    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }

    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    }); // No need to clean up since element removed

    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useRefs.js


function useRefs() {
  var cacheRefs = Object(react["useRef"])(new Map());

  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, react["createRef"]());
    }

    return cacheRefs.current.get(key);
  }

  function removeRef(key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useSyncState.js


function useSyncState(defaultState, onChange) {
  var stateRef = react["useRef"](defaultState);

  var _React$useState = react["useState"]({}),
      _React$useState2 = Object(esm_slicedToArray["a" /* default */])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;

    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }

    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/index.js




















var TabNavList_ExtraContent = function ExtraContent(_ref) {
  var position = _ref.position,
      prefixCls = _ref.prefixCls,
      extra = _ref.extra;
  if (!extra) return null;
  var content;
  var assertExtra = extra;

  if (position === 'right') {
    content = assertExtra.right || !assertExtra.left && assertExtra || null;
  }

  if (position === 'left') {
    content = assertExtra.left || null;
  }

  return content ? react["createElement"]("div", {
    className: "".concat(prefixCls, "-extra-content")
  }, content) : null;
};

function TabNavList(props, ref) {
  var _classNames;

  var _React$useContext = react["useContext"](TabContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var className = props.className,
      style = props.style,
      id = props.id,
      animated = props.animated,
      activeKey = props.activeKey,
      rtl = props.rtl,
      extra = props.extra,
      editable = props.editable,
      locale = props.locale,
      tabPosition = props.tabPosition,
      tabBarGutter = props.tabBarGutter,
      children = props.children,
      onTabClick = props.onTabClick,
      onTabScroll = props.onTabScroll;
  var tabsWrapperRef = Object(react["useRef"])();
  var tabListRef = Object(react["useRef"])();
  var operationsRef = Object(react["useRef"])();
  var innerAddButtonRef = Object(react["useRef"])();

  var _useRefs = useRefs(),
      _useRefs2 = Object(esm_slicedToArray["a" /* default */])(_useRefs, 2),
      getBtnRef = _useRefs2[0],
      removeBtnRef = _useRefs2[1];

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';

  var _useSyncState = useSyncState(0, function (next, prev) {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'left' : 'right'
      });
    }
  }),
      _useSyncState2 = Object(esm_slicedToArray["a" /* default */])(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];

  var _useSyncState3 = useSyncState(0, function (next, prev) {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'top' : 'bottom'
      });
    }
  }),
      _useSyncState4 = Object(esm_slicedToArray["a" /* default */])(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];

  var _useState = Object(react["useState"])(0),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];

  var _useState3 = Object(react["useState"])(0),
      _useState4 = Object(esm_slicedToArray["a" /* default */])(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      _useState6 = Object(esm_slicedToArray["a" /* default */])(_useState5, 2),
      wrapperContentWidth = _useState6[0],
      setWrapperContentWidth = _useState6[1];

  var _useState7 = Object(react["useState"])(0),
      _useState8 = Object(esm_slicedToArray["a" /* default */])(_useState7, 2),
      wrapperContentHeight = _useState8[0],
      setWrapperContentHeight = _useState8[1];

  var _useState9 = Object(react["useState"])(null),
      _useState10 = Object(esm_slicedToArray["a" /* default */])(_useState9, 2),
      wrapperWidth = _useState10[0],
      setWrapperWidth = _useState10[1];

  var _useState11 = Object(react["useState"])(null),
      _useState12 = Object(esm_slicedToArray["a" /* default */])(_useState11, 2),
      wrapperHeight = _useState12[0],
      setWrapperHeight = _useState12[1];

  var _useState13 = Object(react["useState"])(0),
      _useState14 = Object(esm_slicedToArray["a" /* default */])(_useState13, 2),
      addWidth = _useState14[0],
      setAddWidth = _useState14[1];

  var _useState15 = Object(react["useState"])(0),
      _useState16 = Object(esm_slicedToArray["a" /* default */])(_useState15, 2),
      addHeight = _useState16[0],
      setAddHeight = _useState16[1];

  var _useRafState = useRafState(new Map()),
      _useRafState2 = Object(esm_slicedToArray["a" /* default */])(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];

  var tabOffsets = useOffsets(tabs, tabSizes, wrapperScrollWidth); // ========================== Util =========================

  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;

  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, wrapperHeight - wrapperScrollHeight);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, wrapperScrollWidth - wrapperWidth);
  } else {
    transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
    transformMax = 0;
  }

  function alignInRange(value) {
    if (value < transformMin) {
      return [transformMin, false];
    }

    if (value > transformMax) {
      return [transformMax, false];
    }

    return [value, true];
  } // ========================= Mobile ========================


  var touchMovingRef = Object(react["useRef"])();

  var _useState17 = Object(react["useState"])(),
      _useState18 = Object(esm_slicedToArray["a" /* default */])(_useState17, 2),
      lockAnimation = _useState18[0],
      setLockAnimation = _useState18[1];

  function doLockAnimation() {
    setLockAnimation(Date.now());
  }

  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }

  useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
    var preventDefault = false;

    function doMove(setState, offset) {
      setState(function (value) {
        var _alignInRange = alignInRange(value + offset),
            _alignInRange2 = Object(esm_slicedToArray["a" /* default */])(_alignInRange, 2),
            newValue = _alignInRange2[0],
            needPrevent = _alignInRange2[1];

        preventDefault = needPrevent;
        return newValue;
      });
    }

    if (tabPositionTopOrBottom) {
      // Skip scroll if place is enough
      if (wrapperWidth >= wrapperScrollWidth) {
        return preventDefault;
      }

      doMove(setTransformLeft, offsetX);
    } else {
      if (wrapperHeight >= wrapperScrollHeight) {
        return preventDefault;
      }

      doMove(setTransformTop, offsetY);
    }

    clearTouchMoving();
    doLockAnimation();
    return preventDefault;
  });
  Object(react["useEffect"])(function () {
    clearTouchMoving();

    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }

    return clearTouchMoving;
  }, [lockAnimation]); // ========================= Scroll ========================

  function scrollToTab() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key);
    if (!tabOffset) return;

    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft; // RTL

      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + wrapperWidth) {
          newTransform = tabOffset.right + tabOffset.width - wrapperWidth;
        }
      } // LTR
      else if (tabOffset.left < -transformLeft) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft + wrapperWidth) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth);
        }

      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform)[0]);
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;

      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + wrapperHeight) {
        _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight);
      }

      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform)[0]);
    }
  } // ========================== Tab ==========================
  // Render tab node & collect tab offset


  var _useVisibleRange = useVisibleRange(tabOffsets, {
    width: wrapperWidth,
    height: wrapperHeight,
    left: transformLeft,
    top: transformTop
  }, {
    width: wrapperContentWidth,
    height: wrapperContentHeight
  }, {
    width: addWidth,
    height: addHeight
  }, Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    tabs: tabs
  })),
      _useVisibleRange2 = Object(esm_slicedToArray["a" /* default */])(_useVisibleRange, 2),
      visibleStart = _useVisibleRange2[0],
      visibleEnd = _useVisibleRange2[1];

  var tabNodes = tabs.map(function (tab) {
    var key = tab.key;
    return react["createElement"](TabNavList_TabNode, {
      id: id,
      prefixCls: prefixCls,
      key: key,
      rtl: rtl,
      tab: tab,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      tabPosition: tabPosition,
      tabBarGutter: tabBarGutter,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      ref: getBtnRef(key),
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {
        removeBtnRef(key);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation(); // Focus element will make scrollLeft change which we should reset back

        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }

        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var onListHolderResize = useRaf(function () {
    var _tabsWrapperRef$curre, _tabsWrapperRef$curre2, _innerAddButtonRef$cu, _innerAddButtonRef$cu2, _operationsRef$curren, _operationsRef$curren2, _tabListRef$current, _tabListRef$current2, _operationsRef$curren3; // Update wrapper records


    var offsetWidth = ((_tabsWrapperRef$curre = tabsWrapperRef.current) === null || _tabsWrapperRef$curre === void 0 ? void 0 : _tabsWrapperRef$curre.offsetWidth) || 0;
    var offsetHeight = ((_tabsWrapperRef$curre2 = tabsWrapperRef.current) === null || _tabsWrapperRef$curre2 === void 0 ? void 0 : _tabsWrapperRef$curre2.offsetHeight) || 0;
    var newAddWidth = ((_innerAddButtonRef$cu = innerAddButtonRef.current) === null || _innerAddButtonRef$cu === void 0 ? void 0 : _innerAddButtonRef$cu.offsetWidth) || 0;
    var newAddHeight = ((_innerAddButtonRef$cu2 = innerAddButtonRef.current) === null || _innerAddButtonRef$cu2 === void 0 ? void 0 : _innerAddButtonRef$cu2.offsetHeight) || 0;
    var newOperationWidth = ((_operationsRef$curren = operationsRef.current) === null || _operationsRef$curren === void 0 ? void 0 : _operationsRef$curren.offsetWidth) || 0;
    var newOperationHeight = ((_operationsRef$curren2 = operationsRef.current) === null || _operationsRef$curren2 === void 0 ? void 0 : _operationsRef$curren2.offsetHeight) || 0;
    setWrapperWidth(offsetWidth);
    setWrapperHeight(offsetHeight);
    setAddWidth(newAddWidth);
    setAddHeight(newAddHeight);
    var newWrapperScrollWidth = (((_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.offsetWidth) || 0) - newAddWidth;
    var newWrapperScrollHeight = (((_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.offsetHeight) || 0) - newAddHeight;
    setWrapperScrollWidth(newWrapperScrollWidth);
    setWrapperScrollHeight(newWrapperScrollHeight);
    var isOperationHidden = (_operationsRef$curren3 = operationsRef.current) === null || _operationsRef$curren3 === void 0 ? void 0 : _operationsRef$curren3.className.includes(operationsHiddenClassName);
    setWrapperContentWidth(newWrapperScrollWidth - (isOperationHidden ? 0 : newOperationWidth));
    setWrapperContentHeight(newWrapperScrollHeight - (isOperationHidden ? 0 : newOperationHeight)); // Update buttons records

    setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var key = _ref2.key;
        var btnNode = getBtnRef(key).current;

        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  }); // ======================== Dropdown =======================

  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat(Object(esm_toConsumableArray["a" /* default */])(startHiddenTabs), Object(esm_toConsumableArray["a" /* default */])(endHiddenTabs)); // =================== Link & Operations ===================

  var _useState19 = Object(react["useState"])(),
      _useState20 = Object(esm_slicedToArray["a" /* default */])(_useState19, 2),
      inkStyle = _useState20[0],
      setInkStyle = _useState20[1];

  var activeTabOffset = tabOffsets.get(activeKey); // Delay set ink style to avoid remove tab blink

  var inkBarRafRef = Object(react["useRef"])();

  function cleanInkBarRaf() {
    raf_default.a.cancel(inkBarRafRef.current);
  }

  Object(react["useEffect"])(function () {
    var newInkStyle = {};

    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }

        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }

    cleanInkBarRaf();
    inkBarRafRef.current = raf_default()(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]); // ========================= Effect ========================

  Object(react["useEffect"])(function () {
    scrollToTab();
  }, [activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom]); // Should recalculate when rtl changed

  Object(react["useEffect"])(function () {
    onListHolderResize();
  }, [rtl, tabBarGutter, activeKey, tabs.map(function (tab) {
    return tab.key;
  }).join('_')]); // ========================= Render ========================

  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;

  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft + wrapperWidth < wrapperScrollWidth;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = -transformLeft + wrapperWidth < wrapperScrollWidth;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = -transformTop + wrapperHeight < wrapperScrollHeight;
  }
  /* eslint-disable jsx-a11y/interactive-supports-focus */


  return react["createElement"]("div", {
    ref: ref,
    role: "tablist",
    className: classnames_default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, react["createElement"](TabNavList_ExtraContent, {
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), react["createElement"](rc_resize_observer_es["a" /* default */], {
    onResize: onListHolderResize
  }, react["createElement"]("div", {
    className: classnames_default()(wrapPrefix, (_classNames = {}, Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, react["createElement"](rc_resize_observer_es["a" /* default */], {
    onResize: onListHolderResize
  }, react["createElement"]("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, react["createElement"](TabNavList_AddButton, {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: {
      visibility: hasDropdown ? 'hidden' : null
    }
  }), react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-ink-bar"), Object(esm_defineProperty["a" /* default */])({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  }))))), react["createElement"](TabNavList_OperationNode, Object.assign({}, props, {
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName
  })), react["createElement"](TabNavList_ExtraContent, {
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  }));
  /* eslint-enable */
}

/* harmony default export */ var es_TabNavList = (react["forwardRef"](TabNavList));
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/index.js




function TabPanelList(_ref) {
  var id = _ref.id,
      activeKey = _ref.activeKey,
      animated = _ref.animated,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane;

  var _React$useContext = react["useContext"](TabContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var tabPaneAnimated = animated.tabPane;
  var activeIndex = tabs.findIndex(function (tab) {
    return tab.key === activeKey;
  });
  return react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-content-holder"))
  }, react["createElement"]("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), Object(esm_defineProperty["a" /* default */])({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated)),
    style: activeIndex && tabPaneAnimated ? Object(esm_defineProperty["a" /* default */])({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
  }, tabs.map(function (tab) {
    return react["cloneElement"](tab.node, {
      key: tab.key,
      prefixCls: prefixCls,
      tabKey: tab.key,
      id: id,
      animated: tabPaneAnimated,
      active: tab.key === activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane
    });
  })));
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/TabPane.js




function TabPane(_ref) {
  var prefixCls = _ref.prefixCls,
      forceRender = _ref.forceRender,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id,
      active = _ref.active,
      animated = _ref.animated,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      tabKey = _ref.tabKey,
      children = _ref.children;

  var _React$useState = react["useState"](forceRender),
      _React$useState2 = Object(esm_slicedToArray["a" /* default */])(_React$useState, 2),
      visited = _React$useState2[0],
      setVisited = _React$useState2[1];

  react["useEffect"](function () {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);
  var mergedStyle = {};

  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  return react["createElement"]("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, mergedStyle), style),
    className: classnames_default()("".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), className)
  }, (active || visited || forceRender) && children);
}
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/Tabs.js




 // Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role











/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */
// Used for accessibility

var uuid = 0;

function parseTabList(children) {
  return Object(toArray["a" /* default */])(children).map(function (node) {
    if (react["isValidElement"](node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
        key: key
      }, node.props), {}, {
        node: node
      });
    }

    return null;
  }).filter(function (tab) {
    return tab;
  });
}

function Tabs(_ref, ref) {
  var _classNames;

  var id = _ref.id,
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      activeKey = _ref.activeKey,
      defaultActiveKey = _ref.defaultActiveKey,
      editable = _ref.editable,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? {
    inkBar: true,
    tabPane: false
  } : _ref$animated,
      _ref$tabPosition = _ref.tabPosition,
      tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
      tabBarGutter = _ref.tabBarGutter,
      tabBarStyle = _ref.tabBarStyle,
      tabBarExtraContent = _ref.tabBarExtraContent,
      locale = _ref.locale,
      moreIcon = _ref.moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      renderTabBar = _ref.renderTabBar,
      onChange = _ref.onChange,
      onTabClick = _ref.onTabClick,
      onTabScroll = _ref.onTabScroll,
      restProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["id", "prefixCls", "className", "children", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll"]);

  var tabs = parseTabList(children);
  var rtl = direction === 'rtl';
  var mergedAnimated;

  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = Object(objectSpread2["a" /* default */])({
      inkBar: true,
      tabPane: false
    }, Object(esm_typeof["a" /* default */])(animated) === 'object' ? animated : {});
  } // ======================== Mobile ========================


  var _useState = Object(react["useState"])(false),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];

  Object(react["useEffect"])(function () {
    // Only update on the client side
    setMobile(useTouchMove_isMobile());
  }, []); // ====================== Active Key ======================

  var _useMergedState = Object(hooks_useMergedState["a" /* default */])(function () {
    var _tabs$;

    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }),
      _useMergedState2 = Object(esm_slicedToArray["a" /* default */])(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];

  var _useState3 = Object(react["useState"])(function () {
    return tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
  }),
      _useState4 = Object(esm_slicedToArray["a" /* default */])(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1]; // Reset active key if not exist anymore


  Object(react["useEffect"])(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });

    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;

      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }

    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]); // ===================== Accessibility ====================

  var _useMergedState3 = Object(hooks_useMergedState["a" /* default */])(null, {
    value: id
  }),
      _useMergedState4 = Object(esm_slicedToArray["a" /* default */])(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];

  var mergedTabPosition = tabPosition;

  if (mobile && !['left', 'right'].includes(tabPosition)) {
    mergedTabPosition = 'top';
  } // Async generate id to avoid ssr mapping failed


  Object(react["useEffect"])(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? undefined : uuid));
      uuid += 1;
    }
  }, []); // ======================== Events ========================

  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    setMergedActiveKey(key);
    onChange === null || onChange === void 0 ? void 0 : onChange(key);
  } // ======================== Render ========================


  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: mergedTabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;

  var tabNavBarProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: children
  });

  if (renderTabBar) {
    tabNavBar = renderTabBar(tabNavBarProps, es_TabNavList);
  } else {
    tabNavBar = react["createElement"](es_TabNavList, Object.assign({}, tabNavBarProps));
  }

  return react["createElement"](TabContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, react["createElement"]("div", Object.assign({
    ref: ref,
    id: id,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(mergedTabPosition), (_classNames = {}, Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-mobile"), mobile), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-editable"), editable), Object(esm_defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, react["createElement"](TabPanelList, Object.assign({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}

var ForwardTabs = react["forwardRef"](Tabs);
ForwardTabs.TabPane = TabPane;
/* harmony default export */ var es_Tabs = (ForwardTabs);
// CONCATENATED MODULE: ./node_modules/rc-tabs/es/index.js



/* harmony default export */ var rc_tabs_es = (es_Tabs);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/EllipsisOutlined.js
var EllipsisOutlined = __webpack_require__("cCPh");
var EllipsisOutlined_default = /*#__PURE__*/__webpack_require__.n(EllipsisOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/PlusOutlined.js
var PlusOutlined = __webpack_require__("fNCr");
var PlusOutlined_default = /*#__PURE__*/__webpack_require__.n(PlusOutlined);

// CONCATENATED MODULE: ./node_modules/antd/es/tabs/index.js



var tabs_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










function tabs_Tabs(_a) {
  var _classNames;

  var type = _a.type,
      className = _a.className,
      size = _a.size,
      _onEdit = _a.onEdit,
      hideAdd = _a.hideAdd,
      centered = _a.centered,
      addIcon = _a.addIcon,
      props = tabs_rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon"]);

  var customizePrefixCls = props.prefixCls;

  var _React$useContext = react["useContext"](config_provider_context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;

  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
            event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react["createElement"](CloseOutlined_default.a, null),
      addIcon: addIcon || /*#__PURE__*/react["createElement"](PlusOutlined_default.a, null),
      showAdd: hideAdd !== true
    };
  }

  Object(devWarning["a" /* default */])(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.');
  return /*#__PURE__*/react["createElement"](rc_tabs_es, extends_default()({
    direction: direction
  }, props, {
    moreTransitionName: "slide-up",
    className: classnames_default()((_classNames = {}, defineProperty_default()(_classNames, "".concat(prefixCls, "-").concat(size), size), defineProperty_default()(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), defineProperty_default()(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), defineProperty_default()(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
    editable: editable,
    moreIcon: /*#__PURE__*/react["createElement"](EllipsisOutlined_default.a, null),
    prefixCls: prefixCls
  }));
}

tabs_Tabs.TabPane = TabPane;
/* harmony default export */ var es_tabs = (tabs_Tabs);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/GridContent/GridContent.less
var GridContent_GridContent = __webpack_require__("kZZr");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/GridContent/index.js






/**
 * This component can support contentWidth so you don't need to calculate the width
 * contentWidth=Fixed, width will is 1200
 * @param props
 */

var es_GridContent_GridContent = function GridContent(props) {
  var value = Object(react["useContext"])(RouteContext);
  var children = props.children,
      propsContentWidth = props.contentWidth,
      propsClassName = props.className,
      style = props.style;

  var _useContext = Object(react["useContext"])(config_provider["b" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var contentWidth = propsContentWidth || value.contentWidth;
  var className = "".concat(prefixCls, "-grid-content");
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(className, propsClassName, {
      wide: contentWidth === 'Fixed'
    }),
    style: style
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixCls, "-grid-content-children")
  }, children));
};

/* harmony default export */ var es_GridContent = (es_GridContent_GridContent);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/FooterToolbar/index.less
var es_FooterToolbar = __webpack_require__("NZ0x");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/FooterToolbar/index.js



function FooterToolbar_extends() {
  FooterToolbar_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FooterToolbar_extends.apply(this, arguments);
}

function FooterToolbar_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function FooterToolbar_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      FooterToolbar_ownKeys(Object(source), true).forEach(function (key) {
        FooterToolbar_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      FooterToolbar_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function FooterToolbar_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function FooterToolbar_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = FooterToolbar_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function FooterToolbar_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}







var FooterToolbar_FooterToolbar = function FooterToolbar(props) {
  var children = props.children,
      className = props.className,
      extra = props.extra,
      style = props.style,
      renderContent = props.renderContent,
      restProps = FooterToolbar_objectWithoutProperties(props, ["children", "className", "extra", "style", "renderContent"]);

  var _useContext = Object(react["useContext"])(config_provider["b" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var baseClassName = "".concat(prefixCls, "-footer-bar");
  var value = Object(react["useContext"])(RouteContext);
  var width = Object(react["useMemo"])(function () {
    var hasSiderMenu = value.hasSiderMenu,
        isMobile = value.isMobile,
        siderWidth = value.siderWidth;

    if (!hasSiderMenu) {
      return undefined;
    } // 0 or undefined


    if (!siderWidth) {
      return '100%';
    }

    return isMobile ? '100%' : "calc(100% - ".concat(siderWidth, "px)");
  }, [value.collapsed, value.hasSiderMenu, value.isMobile, value.siderWidth]);
  var dom = /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-left")
  }, extra), /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(baseClassName, "-right")
  }, children));
  /**
   * 告诉 props 是否存在 footerBar
   */

  Object(react["useEffect"])(function () {
    if (!value || !(value === null || value === void 0 ? void 0 : value.setHasFooterToolbar)) {
      return function () {};
    }

    value === null || value === void 0 ? void 0 : value.setHasFooterToolbar(true);
    return function () {
      if (!value || !(value === null || value === void 0 ? void 0 : value.setHasFooterToolbar)) {
        return;
      }

      value === null || value === void 0 ? void 0 : value.setHasFooterToolbar(false);
    };
  }, []);
  return /*#__PURE__*/react_default.a.createElement("div", FooterToolbar_extends({
    className: classnames_default()(className, "".concat(baseClassName)),
    style: FooterToolbar_objectSpread({
      width: width
    }, style)
  }, Object(omit_js_es["a" /* default */])(restProps, ['prefixCls'])), renderContent ? renderContent(FooterToolbar_objectSpread(FooterToolbar_objectSpread(FooterToolbar_objectSpread({}, props), value), {}, {
    leftWidth: width
  }), dom) : dom);
};

/* harmony default export */ var pro_layout_es_FooterToolbar = (FooterToolbar_FooterToolbar);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/PageContainer/index.less
var es_PageContainer = __webpack_require__("lN3h");

// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/PageContainer/index.js









function PageContainer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function PageContainer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      PageContainer_ownKeys(Object(source), true).forEach(function (key) {
        PageContainer_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      PageContainer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function PageContainer_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function PageContainer_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = PageContainer_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function PageContainer_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function PageContainer_extends() {
  PageContainer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PageContainer_extends.apply(this, arguments);
}








/**
 * render Footer tabList
 * In order to be compatible with the old version of the PageHeader
 * basically all the functions are implemented.
 */

var PageContainer_renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
      tabActiveKey = _ref.tabActiveKey,
      onTabChange = _ref.onTabChange,
      tabBarExtraContent = _ref.tabBarExtraContent,
      tabProps = _ref.tabProps,
      prefixedClassName = _ref.prefixedClassName;

  if (tabList && tabList.length) {
    return /*#__PURE__*/react_default.a.createElement(es_tabs, PageContainer_extends({
      className: "".concat(prefixedClassName, "-tabs"),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent
    }, tabProps), tabList.map(function (item, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        react_default.a.createElement(es_tabs.TabPane, PageContainer_extends({}, item, {
          tab: item.tab,
          key: item.key || index
        }))
      );
    }));
  }

  return null;
};

var PageContainer_renderPageHeader = function renderPageHeader(content, extraContent, prefixedClassName) {
  if (!content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-extraContent")
  }, extraContent))));
};

var PageContainer_defaultPageHeaderRender = function defaultPageHeaderRender(props, value) {
  var title = props.title,
      content = props.content,
      pageHeaderRender = props.pageHeaderRender,
      header = props.header,
      extraContent = props.extraContent,
      style = props.style,
      prefixCls = props.prefixCls,
      restProps = PageContainer_objectWithoutProperties(props, ["title", "content", "pageHeaderRender", "header", "extraContent", "style", "prefixCls"]);

  if (pageHeaderRender) {
    return pageHeaderRender(PageContainer_objectSpread(PageContainer_objectSpread({}, props), value));
  }

  var pageHeaderTitle = title;

  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }

  return /*#__PURE__*/react_default.a.createElement(page_header, PageContainer_extends({}, value, {
    title: pageHeaderTitle
  }, restProps, {
    footer: PageContainer_renderFooter(PageContainer_objectSpread(PageContainer_objectSpread({}, restProps), {}, {
      prefixedClassName: value.prefixedClassName
    }))
  }, header, {
    prefixCls: prefixCls
  }), (header === null || header === void 0 ? void 0 : header.children) || PageContainer_renderPageHeader(content, extraContent, value.prefixedClassName));
};

var PageContainer_PageContainer = function PageContainer(props) {
  var children = props.children,
      loading = props.loading,
      style = props.style,
      footer = props.footer,
      affixProps = props.affixProps,
      ghost = props.ghost,
      fixedHeader = props.fixedHeader;
  var value = Object(react["useContext"])(RouteContext);

  var _useContext = Object(react["useContext"])(config_provider["b" /* default */].ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var prefixedClassName = "".concat(prefixCls, "-page-container");
  var className = classnames_default()(prefixedClassName, props.className, PageContainer_defineProperty({}, "".concat(prefixCls, "-page-container-ghost"), ghost));
  var content = children ? /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-children-content")
  }, children), value.hasFooterToolbar && /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      height: 48,
      marginTop: 24
    }
  })) : null;
  var headerDom = /*#__PURE__*/react_default.a.createElement("div", {
    className: "".concat(prefixedClassName, "-warp")
  }, PageContainer_defaultPageHeaderRender(props, PageContainer_objectSpread(PageContainer_objectSpread({}, value), {}, {
    prefixCls: undefined,
    prefixedClassName: prefixedClassName
  })));
  return /*#__PURE__*/react_default.a.createElement("div", {
    style: style,
    className: className
  }, fixedHeader ?
  /*#__PURE__*/
  // 在 hasHeader 且 fixedHeader 的情况下，才需要设置高度
  react_default.a.createElement(es_affix, PageContainer_extends({
    offsetTop: value.hasHeader && value.fixedHeader ? value.headerHeight : 0
  }, affixProps), headerDom) : headerDom, /*#__PURE__*/react_default.a.createElement(es_GridContent, null, loading ? /*#__PURE__*/react_default.a.createElement(PageLoading["a" /* default */], null) : content), footer && /*#__PURE__*/react_default.a.createElement(pro_layout_es_FooterToolbar, {
    prefixCls: prefixCls
  }, footer));
};

/* harmony default export */ var pro_layout_es_PageContainer = (PageContainer_PageContainer);
// CONCATENATED MODULE: ./node_modules/@ant-design/pro-layout/es/index.js












var PageHeaderWrapper = pro_layout_es_PageContainer;

/* harmony default export */ var pro_layout_es = __webpack_exports__["a"] = (pro_layout_es_BasicLayout);

/***/ }),

/***/ "ITfd":
/*!***********************************************!*\
  !*** ./node_modules/hash.js/lib/hash/hmac.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "w8CP");

var assert = __webpack_require__(/*! minimalistic-assert */ "2j6C");

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac)) return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}

module.exports = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
  assert(key.length <= this.blockSize); // Add padding to key

  for (var i = key.length; i < this.blockSize; i++) {
    key.push(0);
  }

  for (i = 0; i < key.length; i++) {
    key[i] ^= 0x36;
  }

  this.inner = new this.Hash().update(key); // 0x36 ^ 0x5c = 0x6a

  for (i = 0; i < key.length; i++) {
    key[i] ^= 0x6a;
  }

  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};

/***/ }),

/***/ "MUZu":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EditOutlined.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "TqRt");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _EditOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EditOutlined */ "ZxNd"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "KQxl"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var EditOutlined = function EditOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _EditOutlined.default
  }));
};

EditOutlined.displayName = 'EditOutlined';

var _default = React.forwardRef(EditOutlined);

exports.default = _default;

/***/ }),

/***/ "NZ0x":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/FooterToolbar/index.less ***!
  \*************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "P7XM":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ "SRve":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/PlusOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
exports.default = PlusOutlined;


/***/ }),

/***/ "TdNH":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CopyOutlined.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "TqRt");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _CopyOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CopyOutlined */ "m546"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "KQxl"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CopyOutlined = function CopyOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CopyOutlined.default
  }));
};

CopyOutlined.displayName = 'CopyOutlined';

var _default = React.forwardRef(CopyOutlined);

exports.default = _default;

/***/ }),

/***/ "WRkp":
/*!**********************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.sha1 = __webpack_require__(/*! ./sha/1 */ "E+IA");
exports.sha224 = __webpack_require__(/*! ./sha/224 */ "B/J0");
exports.sha256 = __webpack_require__(/*! ./sha/256 */ "bu2F");
exports.sha384 = __webpack_require__(/*! ./sha/384 */ "i5UE");
exports.sha512 = __webpack_require__(/*! ./sha/512 */ "tSWc");

/***/ }),

/***/ "XaGS":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */

var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */


function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function cacheHas(cache, key) {
  return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */


function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */


function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */

var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */


function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */


function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */


function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */


function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */


function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */


function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */


var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */


function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */


var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */

function isEqual(value, other) {
  return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */


function stubArray() {
  return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}

module.exports = isEqual;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "yLpj"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "YCuv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EnterOutlined.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var EnterOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };
exports.default = EnterOutlined;


/***/ }),

/***/ "YPDd":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/Header.less ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "YV/h":
/*!***********************************************************!*\
  !*** ./node_modules/antd/es/page-header/style/index.less ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZxNd":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EditOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
exports.default = EditOutlined;


/***/ }),

/***/ "ayqn":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/ArrowLeftOutlined.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var ArrowLeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, "name": "arrow-left", "theme": "outlined" };
exports.default = ArrowLeftOutlined;


/***/ }),

/***/ "bAEX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/SiderMenu/index.less ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bu2F":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/256.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "w8CP");

var common = __webpack_require__(/*! ../common */ "7ckf");

var shaCommon = __webpack_require__(/*! ./common */ "qlaj");

var assert = __webpack_require__(/*! minimalistic-assert */ "2j6C");

var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash = common.BlockHash;
var sha256_K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

function SHA256() {
  if (!(this instanceof SHA256)) return new SHA256();
  BlockHash.call(this);
  this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  this.k = sha256_K;
  this.W = new Array(64);
}

utils.inherits(SHA256, BlockHash);
module.exports = SHA256;
SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;

SHA256.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++) {
    W[i] = msg[start + i];
  }

  for (; i < W.length; i++) {
    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
  }

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];
  assert(this.k.length === W.length);

  for (i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32(T1, T2);
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
  this.h[5] = sum32(this.h[5], f);
  this.h[6] = sum32(this.h[6], g);
  this.h[7] = sum32(this.h[7], h);
};

SHA256.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
};

/***/ }),

/***/ "f9ba":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/GlobalHeader/index.less ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fNCr":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/PlusOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _PlusOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/PlusOutlined */ "tSko"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _PlusOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "fZJM":
/*!******************************************!*\
  !*** ./node_modules/hash.js/lib/hash.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var hash = exports;
hash.utils = __webpack_require__(/*! ./hash/utils */ "w8CP");
hash.common = __webpack_require__(/*! ./hash/common */ "7ckf");
hash.sha = __webpack_require__(/*! ./hash/sha */ "WRkp");
hash.ripemd = __webpack_require__(/*! ./hash/ripemd */ "u0Sq");
hash.hmac = __webpack_require__(/*! ./hash/hmac */ "ITfd"); // Proxy hash functions to the main object

hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;

/***/ }),

/***/ "gDlH":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/_util/transButton.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ "LQ03");
/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "4IlW");






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
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 * This helps accessibility reader to tread as a interactive button to operation.
 */




var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};

var TransButton = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TransButton, _React$Component);

  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4___default()(TransButton);

  function TransButton() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TransButton);

    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].ENTER) {
        event.preventDefault();
      }
    };

    _this.onKeyUp = function (event) {
      var keyCode = event.keyCode;
      var onClick = _this.props.onClick;

      if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].ENTER && onClick) {
        onClick();
      }
    };

    _this.setRef = function (btn) {
      _this.div = btn;
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TransButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoFocus = this.props.autoFocus;

      if (autoFocus) {
        this.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.div) {
        this.div.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.div) {
        this.div.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          style = _a.style,
          noStyle = _a.noStyle,
          disabled = _a.disabled,
          restProps = __rest(_a, ["style", "noStyle", "disabled"]);

      var mergedStyle = {};

      if (!noStyle) {
        mergedStyle = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, inlineStyle);
      }

      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }

      mergedStyle = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, mergedStyle), style);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        role: "button",
        tabIndex: 0,
        ref: this.setRef
      }, restProps, {
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        style: mergedStyle
      }));
    }
  }]);

  return TransButton;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TransButton);

/***/ }),

/***/ "h4NZ":
/*!*************************************************************!*\
  !*** ./node_modules/@ant-design/icons/ArrowLeftOutlined.js ***!
  \*************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _ArrowLeftOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/ArrowLeftOutlined */ "jw4T"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _ArrowLeftOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "i5UE":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/384.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "w8CP");

var SHA512 = __webpack_require__(/*! ./512 */ "tSWc");

function SHA384() {
  if (!(this instanceof SHA384)) return new SHA384();
  SHA512.call(this);
  this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4];
}

utils.inherits(SHA384, SHA512);
module.exports = SHA384;
SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h.slice(0, 12), 'big');else return utils.split32(this.h.slice(0, 12), 'big');
};

/***/ }),

/***/ "jfsG":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/node_modules/path-to-regexp/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;
/**
 * Default configs.
 */

var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
// "(\\d+)"  => [undefined, undefined, "\d+", undefined]
'(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }

    var prev = '';
    var next = str[index];
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k];
        path = path.slice(0, k);
      }
    } // Push the current path onto the tokens.


    if (path) {
      tokens.push(path);
      path = '';
      pathEscaped = false;
    }

    var partial = prev !== '' && next !== undefined && next !== prev;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = prev || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Push any remaining characters.


  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (data, options) {
    var path = '';
    var encode = options && options.encode || encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var segment;

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
        }

        if (value.length === 0) {
          if (token.optional) continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment;
        continue;
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix;
        continue;
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  options = options || {};
  var strict = options.strict;
  var start = options.start !== false;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = start ? '^' : '';
  var isEndDelimited = tokens.length === 0; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*' : token.pattern;
      if (keys) keys.push(token);

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?';
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')';
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?';
    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
  }

  return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */


function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path, keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path, keys, options);
}

/***/ }),

/***/ "jw4T":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/ArrowLeftOutlined.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "TqRt");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _ArrowLeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/ArrowLeftOutlined */ "ayqn"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "KQxl"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var ArrowLeftOutlined = function ArrowLeftOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _ArrowLeftOutlined.default
  }));
};

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';

var _default = React.forwardRef(ArrowLeftOutlined);

exports.default = _default;

/***/ }),

/***/ "kZ8M":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/hooks/useMergedState.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useControlledState;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = React.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = React.useRef(true);
  React.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

/***/ }),

/***/ "kZZr":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/GridContent/GridContent.less ***!
  \*****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "lN3h":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/PageContainer/index.less ***!
  \*************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "m546":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CopyOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CopyOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
exports.default = CopyOutlined;


/***/ }),

/***/ "mQwV":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/es/BasicLayout.less ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "nkPT":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/react.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // do not edit .js files directly - edit src/index.jst

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};

/***/ }),

/***/ "qlaj":
/*!*****************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/common.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "w8CP");

var rotr32 = utils.rotr32;

function ft_1(s, x, y, z) {
  if (s === 0) return ch32(x, y, z);
  if (s === 1 || s === 3) return p32(x, y, z);
  if (s === 2) return maj32(x, y, z);
}

exports.ft_1 = ft_1;

function ch32(x, y, z) {
  return x & y ^ ~x & z;
}

exports.ch32 = ch32;

function maj32(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

exports.maj32 = maj32;

function p32(x, y, z) {
  return x ^ y ^ z;
}

exports.p32 = p32;

function s0_256(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}

exports.s0_256 = s0_256;

function s1_256(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}

exports.s1_256 = s1_256;

function g0_256(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}

exports.g0_256 = g0_256;

function g1_256(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}

exports.g1_256 = g1_256;

/***/ }),

/***/ "qx4F":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollBarSize; });
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "r4ZK":
/*!**************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/ArrowRightOutlined.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var ArrowRightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" } }] }, "name": "arrow-right", "theme": "outlined" };
exports.default = ArrowRightOutlined;


/***/ }),

/***/ "rOsg":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ant-design/pro-layout/node_modules/@ant-design/pro-utils/es/isBrowser/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (process) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

var isBrowser = function isBrowser() {
  if (false) {}

  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && !isNode;
};

/* harmony default export */ __webpack_exports__["a"] = (isBrowser);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node-libs-browser/mock/process.js */ "Q2Ig")))

/***/ }),

/***/ "s/Ur":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive/dist/react-responsive.js ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: useMediaQuery */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

!function (root, factory) {
   true ? module.exports = factory(__webpack_require__(/*! react */ "q1tI")) : undefined;
}("undefined" != typeof self ? self : this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
  return function (modules) {
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
        configurable: !1,
        enumerable: !0,
        get: getter
      });
    }, __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function () {
        return module.default;
      } : function () {
        return module;
      };
      return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7);
  }([function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (o) {
        if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
      }
    }

    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
        var _arr = [],
            _n = !0,
            _d = !1,
            _e = void 0;

        try {
          for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) {
            ;
          }
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            _n || null == _i.return || _i.return();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),
        __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __webpack_require__(8),
        __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__),
        __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __webpack_require__(10),
        __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__),
        __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_5__Context__ = __webpack_require__(6),
        makeQuery = function makeQuery(settings) {
      return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
    },
        hyphenateKeys = function hyphenateKeys(obj) {
      if (!obj) return null;
      var keys = Object.keys(obj);
      return 0 === keys.length ? null : keys.reduce(function (result, key) {
        return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], result;
      }, {});
    },
        useIsUpdate = function useIsUpdate() {
      var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        ref.current = !0;
      }, []), ref.current;
    },
        useDevice = function useDevice(deviceFromProps) {
      var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a),
          getDevice = function getDevice() {
        return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
      },
          _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          device = _React$useState2[0],
          setDevice = _React$useState2[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        var newDevice = getDevice();
        __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
      }, [deviceFromProps, deviceFromContext]), device;
    },
        useQuery = function useQuery(settings) {
      var getQuery = function getQuery() {
        return makeQuery(settings);
      },
          _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery),
          _React$useState4 = _slicedToArray(_React$useState3, 2),
          query = _React$useState4[0],
          setQuery = _React$useState4[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        var newQuery = getQuery();
        query !== newQuery && setQuery(newQuery);
      }, [settings]), query;
    },
        useMatchMedia = function useMatchMedia(query, device) {
      var getMatchMedia = function getMatchMedia() {
        return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
      },
          _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia),
          _React$useState6 = _slicedToArray(_React$useState5, 2),
          mq = _React$useState6[0],
          setMq = _React$useState6[1],
          isUpdate = useIsUpdate();

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        return isUpdate && setMq(getMatchMedia()), function () {
          mq.dispose();
        };
      }, [query, device]), mq;
    },
        useMatches = function useMatches(mediaQuery) {
      var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches),
          _React$useState8 = _slicedToArray(_React$useState7, 2),
          matches = _React$useState8[0],
          setMatches = _React$useState8[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        var updateMatches = function updateMatches() {
          setMatches(mediaQuery.matches);
        };

        return mediaQuery.addListener(updateMatches), updateMatches(), function () {
          mediaQuery.removeListener(updateMatches);
        };
      }, [mediaQuery]), matches;
    },
        useMediaQuery = function useMediaQuery(settings, device, onChange) {
      var deviceSettings = useDevice(device),
          query = useQuery(settings);
      if (!query) throw new Error("Invalid or missing MediaQuery!");
      var mq = useMatchMedia(query, deviceSettings),
          matches = useMatches(mq),
          isUpdate = useIsUpdate();
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function () {
        isUpdate && onChange && onChange(matches);
      }, [matches]), matches;
    };

    __webpack_exports__.a = useMediaQuery;
  }, function (module, exports) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function toHyphenLower(match) {
      return "-" + match.toLowerCase();
    }

    function hyphenateStyleName(name) {
      if (cache.hasOwnProperty(name)) return cache[name];
      var hName = name.replace(uppercasePattern, toHyphenLower);
      return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
    }

    var uppercasePattern = /[A-Z]/g,
        msPattern = /^ms-/,
        cache = {};
    __webpack_exports__.a = hyphenateStyleName;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(11),
        negate = function negate(cond) {
      return "not ".concat(cond);
    },
        keyVal = function keyVal(k, v) {
      var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
      return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
    },
        join = function join(conds) {
      return conds.join(" and ");
    },
        toQuery = function toQuery(obj) {
      var rules = [];
      return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function (k) {
        var v = obj[k];
        null != v && rules.push(keyVal(k, v));
      }), join(rules);
    };

    __webpack_exports__.a = toQuery;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = __webpack_require__(13);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),
        Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

    __webpack_exports__.a = Context;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: !0
    });

    var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(17),
        __WEBPACK_IMPORTED_MODULE_2__toQuery__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_3__Context__ = __webpack_require__(6);

    __webpack_require__.d(__webpack_exports__, "default", function () {
      return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
    }), __webpack_require__.d(__webpack_exports__, "useMediaQuery", function () {
      return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
    }), __webpack_require__.d(__webpack_exports__, "toQuery", function () {
      return __WEBPACK_IMPORTED_MODULE_2__toQuery__.a;
    }), __webpack_require__.d(__webpack_exports__, "Context", function () {
      return __WEBPACK_IMPORTED_MODULE_3__Context__.a;
    });
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function Mql(query, values, forceStatic) {
      function addListener(listener) {
        mql && mql.addListener(listener);
      }

      function removeListener(listener) {
        mql && mql.removeListener(listener);
      }

      function update(evt) {
        self.matches = evt.matches, self.media = evt.media;
      }

      function dispose() {
        mql && mql.removeListener(update);
      }

      var self = this;

      if (dynamicMatch && !forceStatic) {
        var mql = dynamicMatch.call(window, query);
        this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
      } else this.matches = staticMatch(query, values), this.media = query;

      this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
    }

    function matchMedia(query, values, forceStatic) {
      return new Mql(query, values, forceStatic);
    }

    var staticMatch = __webpack_require__(9).match,
        dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;

    module.exports = matchMedia;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function matchQuery(mediaQuery, values) {
      return parseQuery(mediaQuery).some(function (query) {
        var inverse = query.inverse,
            typeMatch = "all" === query.type || values.type === query.type;
        if (typeMatch && inverse || !typeMatch && !inverse) return !1;
        var expressionsMatch = query.expressions.every(function (expression) {
          var feature = expression.feature,
              modifier = expression.modifier,
              expValue = expression.value,
              value = values[feature];
          if (!value) return !1;

          switch (feature) {
            case "orientation":
            case "scan":
              return value.toLowerCase() === expValue.toLowerCase();

            case "width":
            case "height":
            case "device-width":
            case "device-height":
              expValue = toPx(expValue), value = toPx(value);
              break;

            case "resolution":
              expValue = toDpi(expValue), value = toDpi(value);
              break;

            case "aspect-ratio":
            case "device-aspect-ratio":
            case "device-pixel-ratio":
              expValue = toDecimal(expValue), value = toDecimal(value);
              break;

            case "grid":
            case "color":
            case "color-index":
            case "monochrome":
              expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
          }

          switch (modifier) {
            case "min":
              return value >= expValue;

            case "max":
              return value <= expValue;

            default:
              return value === expValue;
          }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
      });
    }

    function parseQuery(mediaQuery) {
      return mediaQuery.split(",").map(function (query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY),
            modifier = captures[1],
            type = captures[2],
            expressions = captures[3] || "",
            parsed = {};
        return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function (expression) {
          var captures = expression.match(RE_MQ_EXPRESSION),
              feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
          return {
            modifier: feature[1],
            feature: feature[2],
            value: captures[2]
          };
        }), parsed;
      });
    }

    function toDecimal(ratio) {
      var numbers,
          decimal = Number(ratio);
      return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), decimal;
    }

    function toDpi(resolution) {
      var value = parseFloat(resolution);

      switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
        case "dpcm":
          return value / 2.54;

        case "dppx":
          return 96 * value;

        default:
          return value;
      }
    }

    function toPx(length) {
      var value = parseFloat(length);

      switch (String(length).match(RE_LENGTH_UNIT)[1]) {
        case "em":
        case "rem":
          return 16 * value;

        case "cm":
          return 96 * value / 2.54;

        case "mm":
          return 96 * value / 2.54 / 10;

        case "in":
          return 96 * value;

        case "pt":
          return 72 * value;

        case "pc":
          return 72 * value / 12;

        default:
          return value;
      }
    }

    exports.match = matchQuery, exports.parse = parseQuery;
    var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
        RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function shallowEqualObjects(objA, objB) {
      if (objA === objB) return !0;
      if (!objA || !objB) return !1;
      var aKeys = Object.keys(objA),
          bKeys = Object.keys(objB),
          len = aKeys.length;
      if (bKeys.length !== len) return !1;

      for (var i = 0; i < len; i++) {
        var key = aKeys[i];
        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
      }

      return !0;
    }

    module.exports = shallowEqualObjects;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }

    var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12),
        __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__),
        stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),
        matchers = {
      orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["portrait", "landscape"]),
      scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["progressive", "interlace"]),
      aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      height: stringOrNumber,
      deviceHeight: stringOrNumber,
      width: stringOrNumber,
      deviceWidth: stringOrNumber,
      color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      resolution: stringOrNumber
    },
        features = _objectSpread({
      minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minHeight: stringOrNumber,
      maxHeight: stringOrNumber,
      minDeviceHeight: stringOrNumber,
      maxDeviceHeight: stringOrNumber,
      minWidth: stringOrNumber,
      maxWidth: stringOrNumber,
      minDeviceWidth: stringOrNumber,
      maxDeviceWidth: stringOrNumber,
      minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minResolution: stringOrNumber,
      maxResolution: stringOrNumber
    }, matchers),
        types = {
      all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
    },
        all = _objectSpread(_objectSpread({}, types), features);

    matchers.type = Object.keys(types), __webpack_exports__.a = {
      all: all,
      types: types,
      matchers: matchers,
      features: features
    };
  }, function (module, exports, __webpack_require__) {
    var ReactIs = __webpack_require__(4);

    module.exports = __webpack_require__(14)(ReactIs.isElement, !0);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    !function () {
      function isValidElementType(type) {
        return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if ("object" == typeof object && null !== object) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }

      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      var hasSymbol = "function" == typeof Symbol && Symbol.for,
          REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103,
          REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106,
          REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107,
          REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108,
          REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114,
          REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109,
          REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110,
          REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111,
          REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111,
          REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112,
          REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113,
          REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120,
          REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115,
          REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116,
          REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121,
          REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117,
          REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118,
          REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119,
          AsyncMode = REACT_ASYNC_MODE_TYPE,
          ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
          ContextConsumer = REACT_CONTEXT_TYPE,
          ContextProvider = REACT_PROVIDER_TYPE,
          Element = REACT_ELEMENT_TYPE,
          ForwardRef = REACT_FORWARD_REF_TYPE,
          Fragment = REACT_FRAGMENT_TYPE,
          Lazy = REACT_LAZY_TYPE,
          Memo = REACT_MEMO_TYPE,
          Portal = REACT_PORTAL_TYPE,
          Profiler = REACT_PROFILER_TYPE,
          StrictMode = REACT_STRICT_MODE_TYPE,
          Suspense = REACT_SUSPENSE_TYPE,
          hasWarnedAboutDeprecatedIsAsyncMode = !1;
      exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    }();
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var ReactIs = __webpack_require__(4),
        assign = __webpack_require__(15),
        ReactPropTypesSecret = __webpack_require__(5),
        checkPropTypes = __webpack_require__(16),
        has = Function.call.bind(Object.prototype.hasOwnProperty),
        printWarning = function printWarning() {};

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, module.exports = function (isValidElement, throwOnDirectAccess) {
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if ("function" == typeof iteratorFn) return iteratorFn;
      }

      function is(x, y) {
        return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
      }

      function PropTypeError(message) {
        this.message = message, this.stack = "";
      }

      function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              throw err.name = "Invariant Violation", err;
            }

            if ("undefined" != typeof console) {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
            }
          }

          return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
        }

        var manualPropTypeCallCache = {},
            manualPropTypeWarningCount = 0,
            chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          var propValue = props[propName];

          if (!Array.isArray(propValue)) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
          }

          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) return null;
          }

          var valuesString = JSON.stringify(expectedValues, function (key, value) {
            return "symbol" === getPreciseType(value) ? String(value) : value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
        }

        return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");

          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
          }

          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
        }

        if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), emptyFunctionThatReturnsNull;
        }

        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");

          for (var key in shapeTypes) {
            var checker = shapeTypes[key];

            if (checker) {
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
          var allKeys = assign({}, props[propName], shapeTypes);

          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;

          case "boolean":
            return !propValue;

          case "object":
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (null === propValue || isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (!iteratorFn) return !1;
            var step,
                iterator = iteratorFn.call(propValue);

            if (iteratorFn !== propValue.entries) {
              for (; !(step = iterator.next()).done;) {
                if (!isNode(step.value)) return !1;
              }
            } else for (; !(step = iterator.next()).done;) {
              var entry = step.value;
              if (entry && !isNode(entry[1])) return !1;
            }

            return !0;

          default:
            return !1;
        }
      }

      function isSymbol(propType, propValue) {
        return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
      }

      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
      }

      function getPreciseType(propValue) {
        if (void 0 === propValue || null === propValue) return "" + propValue;
        var propType = getPropType(propValue);

        if ("object" === propType) {
          if (propValue instanceof Date) return "date";
          if (propValue instanceof RegExp) return "regexp";
        }

        return propType;
      }

      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);

        switch (type) {
          case "array":
          case "object":
            return "an " + type;

          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;

          default:
            return type;
        }
      }

      function getClassName(propValue) {
        return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
      }

      var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator,
          FAUX_ITERATOR_SYMBOL = "@@iterator",
          ANONYMOUS = "<<anonymous>>",
          ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: function () {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }(),
        arrayOf: createArrayOfTypeChecker,
        element: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!isValidElement(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        elementType: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!ReactIs.isValidElementType(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        instanceOf: createInstanceTypeChecker,
        node: function () {
          function validate(props, propName, componentName, location, propFullName) {
            return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
          }

          return createChainableTypeChecker(validate);
        }(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function toObject(val) {
      if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(val);
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */


    var getOwnPropertySymbols = Object.getOwnPropertySymbols,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        propIsEnumerable = Object.prototype.propertyIsEnumerable;
    module.exports = function () {
      try {
        if (!Object.assign) return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;

        for (var test2 = {}, i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        }).join("")) return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (letter) {
          test3[letter] = letter;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
      } catch (err) {
        return !1;
      }
    }() ? Object.assign : function (target, source) {
      for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          hasOwnProperty.call(from, key) && (to[key] = from[key]);
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
          }
        }
      }

      return to;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;

          try {
            if ("function" != typeof typeSpecs[typeSpecName]) {
              var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
              throw err.name = "Invariant Violation", err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }

          if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
          }
        }
      }
    }

    var printWarning = function printWarning() {},
        ReactPropTypesSecret = __webpack_require__(5),
        loggedTypeFailures = {},
        has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    }, module.exports = checkPropTypes;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _objectWithoutProperties(source, excluded) {
      if (null == source) return {};

      var key,
          i,
          target = _objectWithoutPropertiesLoose(source, excluded);

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
        }
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (null == source) return {};
      var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
      }

      return target;
    }

    function MediaQuery(_ref) {
      var children = _ref.children,
          device = _ref.device,
          onChange = _ref.onChange,
          settings = _objectWithoutProperties(_ref, ["children", "device", "onChange"]),
          matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);

      return "function" == typeof children ? children(matches) : matches ? children : null;
    }

    __webpack_exports__.a = MediaQuery;

    var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0);
  }]);
});

/***/ }),

/***/ "s/wZ":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/EditOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _EditOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EditOutlined */ "MUZu"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _EditOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "tSWc":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/512.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "w8CP");

var common = __webpack_require__(/*! ../common */ "7ckf");

var assert = __webpack_require__(/*! minimalistic-assert */ "2j6C");

var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;
var BlockHash = common.BlockHash;
var sha512_K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

function SHA512() {
  if (!(this instanceof SHA512)) return new SHA512();
  BlockHash.call(this);
  this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];
  this.k = sha512_K;
  this.W = new Array(160);
}

utils.inherits(SHA512, BlockHash);
module.exports = SHA512;
SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;

SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W; // 32 x 32bit words

  for (var i = 0; i < 32; i++) {
    W[i] = msg[start + i];
  }

  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2

    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14]; // i - 7

    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15

    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32]; // i - 16

    var c3_lo = W[i - 31];
    W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
  }
};

SHA512.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;
  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];
  assert(this.k.length === W.length);

  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];
    var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);
    dh = ch;
    dl = cl;
    ch = bh;
    cl = bl;
    bh = ah;
    bl = al;
    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
};

function ch64_hi(xh, xl, yh, yl, zh) {
  var r = xh & yh ^ ~xh & zh;
  if (r < 0) r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = xl & yl ^ ~xl & zl;
  if (r < 0) r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh) {
  var r = xh & yh ^ xh & zh ^ yh & zh;
  if (r < 0) r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = xl & yl ^ xl & zl ^ yl & zl;
  if (r < 0) r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2); // 34

  var c2_hi = rotr64_hi(xl, xh, 7); // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2); // 34

  var c2_lo = rotr64_lo(xl, xh, 7); // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9); // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9); // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);
  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);
  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29); // 61

  var c2_hi = shr64_hi(xh, xl, 6);
  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29); // 61

  var c2_lo = shr64_lo(xh, xl, 6);
  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

/***/ }),

/***/ "tSko":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/PlusOutlined.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "TqRt");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _PlusOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/PlusOutlined */ "SRve"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "KQxl"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var PlusOutlined = function PlusOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _PlusOutlined.default
  }));
};

PlusOutlined.displayName = 'PlusOutlined';

var _default = React.forwardRef(PlusOutlined);

exports.default = _default;

/***/ }),

/***/ "tU7J":
/*!********************************************************!*\
  !*** ./node_modules/antd/es/typography/style/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ "cIOH");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "/qDX");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tooltip/style */ "5Dmo");
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input/style */ "5NDa");

 // style dependencies




/***/ }),

/***/ "u0Sq":
/*!*************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/ripemd.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "w8CP");

var common = __webpack_require__(/*! ./common */ "7ckf");

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160)) return new RIPEMD160();
  BlockHash.call(this);
  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  this.endian = 'little';
}

utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;

  for (var j = 0; j < 80; j++) {
    var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }

  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils.toHex32(this.h, 'little');else return utils.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15) return x ^ y ^ z;else if (j <= 31) return x & y | ~x & z;else if (j <= 47) return (x | ~y) ^ z;else if (j <= 63) return x & z | y & ~z;else return x ^ (y | ~z);
}

function K(j) {
  if (j <= 15) return 0x00000000;else if (j <= 31) return 0x5a827999;else if (j <= 47) return 0x6ed9eba1;else if (j <= 63) return 0x8f1bbcdc;else return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15) return 0x50a28be6;else if (j <= 31) return 0x5c4dd124;else if (j <= 47) return 0x6d703ef3;else if (j <= 63) return 0x7a6d76e9;else return 0x00000000;
}

var r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var rh = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var s = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var sh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

/***/ }),

/***/ "w8CP":
/*!************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/utils.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assert = __webpack_require__(/*! minimalistic-assert */ "2j6C");

var inherits = __webpack_require__(/*! inherits */ "P7XM");

exports.inherits = inherits;

function isSurrogatePair(msg, i) {
  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
    return false;
  }

  if (i < 0 || i + 1 >= msg.length) {
    return false;
  }

  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}

function toArray(msg, enc) {
  if (Array.isArray(msg)) return msg.slice();
  if (!msg) return [];
  var res = [];

  if (typeof msg === 'string') {
    if (!enc) {
      // Inspired by stringToUtf8ByteArray() in closure-library by Google
      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
      // Apache License 2.0
      // https://github.com/google/closure-library/blob/master/LICENSE
      var p = 0;

      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);

        if (c < 128) {
          res[p++] = c;
        } else if (c < 2048) {
          res[p++] = c >> 6 | 192;
          res[p++] = c & 63 | 128;
        } else if (isSurrogatePair(msg, i)) {
          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
          res[p++] = c >> 18 | 240;
          res[p++] = c >> 12 & 63 | 128;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        } else {
          res[p++] = c >> 12 | 224;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        }
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0) msg = '0' + msg;

      for (i = 0; i < msg.length; i += 2) {
        res.push(parseInt(msg[i] + msg[i + 1], 16));
      }
    }
  } else {
    for (i = 0; i < msg.length; i++) {
      res[i] = msg[i] | 0;
    }
  }

  return res;
}

exports.toArray = toArray;

function toHex(msg) {
  var res = '';

  for (var i = 0; i < msg.length; i++) {
    res += zero2(msg[i].toString(16));
  }

  return res;
}

exports.toHex = toHex;

function htonl(w) {
  var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
  return res >>> 0;
}

exports.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';

  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little') w = htonl(w);
    res += zero8(w.toString(16));
  }

  return res;
}

exports.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1) return '0' + word;else return word;
}

exports.zero2 = zero2;

function zero8(word) {
  if (word.length === 7) return '0' + word;else if (word.length === 6) return '00' + word;else if (word.length === 5) return '000' + word;else if (word.length === 4) return '0000' + word;else if (word.length === 3) return '00000' + word;else if (word.length === 2) return '000000' + word;else if (word.length === 1) return '0000000' + word;else return word;
}

exports.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert(len % 4 === 0);
  var res = new Array(len / 4);

  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big') w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
    res[i] = w >>> 0;
  }

  return res;
}

exports.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);

  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];

    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = m >>> 16 & 0xff;
      res[k + 2] = m >>> 8 & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = m >>> 16 & 0xff;
      res[k + 1] = m >>> 8 & 0xff;
      res[k] = m & 0xff;
    }
  }

  return res;
}

exports.split32 = split32;

function rotr32(w, b) {
  return w >>> b | w << 32 - b;
}

exports.rotr32 = rotr32;

function rotl32(w, b) {
  return w << b | w >>> 32 - b;
}

exports.rotl32 = rotl32;

function sum32(a, b) {
  return a + b >>> 0;
}

exports.sum32 = sum32;

function sum32_3(a, b, c) {
  return a + b + c >>> 0;
}

exports.sum32_3 = sum32_3;

function sum32_4(a, b, c, d) {
  return a + b + c + d >>> 0;
}

exports.sum32_4 = sum32_4;

function sum32_5(a, b, c, d, e) {
  return a + b + c + d + e >>> 0;
}

exports.sum32_5 = sum32_5;

function sum64(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}

exports.sum64 = sum64;

function sum64_hi(ah, al, bh, bl) {
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}

exports.sum64_hi = sum64_hi;

function sum64_lo(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}

exports.sum64_lo = sum64_lo;

function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}

exports.sum64_4_hi = sum64_4_hi;

function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}

exports.sum64_4_lo = sum64_4_lo;

function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = lo + el >>> 0;
  carry += lo < el ? 1 : 0;
  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}

exports.sum64_5_hi = sum64_5_hi;

function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;
  return lo >>> 0;
}

exports.sum64_5_lo = sum64_5_lo;

function rotr64_hi(ah, al, num) {
  var r = al << 32 - num | ah >>> num;
  return r >>> 0;
}

exports.rotr64_hi = rotr64_hi;

function rotr64_lo(ah, al, num) {
  var r = ah << 32 - num | al >>> num;
  return r >>> 0;
}

exports.rotr64_lo = rotr64_lo;

function shr64_hi(ah, al, num) {
  return ah >>> num;
}

exports.shr64_hi = shr64_hi;

function shr64_lo(ah, al, num) {
  var r = ah << 32 - num | al >>> num;
  return r >>> 0;
}

exports.shr64_lo = shr64_lo;

/***/ }),

/***/ "wFql":
/*!**************************************************************!*\
  !*** ./node_modules/antd/es/typography/index.js + 9 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/CheckOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/CopyOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/EditOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/EnterOutlined.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createSuper.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/typeof.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/devWarning.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/raf.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/ref.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/transButton.js because of ./src/components/PageLoading/index.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/_util/type.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/context.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/config-provider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/TextArea.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/locale-provider/LocaleReceiver.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tooltip/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/copy-to-clipboard/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/omit.js/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-resize-observer/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/Children/toArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rc-util/es/KeyCode.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__("uaoM");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/ref.js
var _util_ref = __webpack_require__("ID/q");

// CONCATENATED MODULE: ./node_modules/antd/es/typography/Typography.js



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







var Typography_Typography = function Typography(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      _a$component = _a.component,
      component = _a$component === void 0 ? 'article' : _a$component,
      className = _a.className,
      ariaLabel = _a['aria-label'],
      setContentRef = _a.setContentRef,
      children = _a.children,
      restProps = __rest(_a, ["prefixCls", "component", "className", 'aria-label', "setContentRef", "children"]);

  var mergedRef = ref;

  if (setContentRef) {
    Object(devWarning["a" /* default */])(false, 'Typography', '`setContentRef` is deprecated. Please use `ref` instead.');
    mergedRef = Object(_util_ref["a" /* composeRef */])(ref, setContentRef);
  }

  return /*#__PURE__*/react["createElement"](context["a" /* ConfigConsumer */], null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var Component = component;
    var prefixCls = getPrefixCls('typography', customizePrefixCls);
    var componentClassName = classnames_default()(prefixCls, defineProperty_default()({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
    return /*#__PURE__*/react["createElement"](Component, extends_default()({
      className: componentClassName,
      "aria-label": ariaLabel,
      ref: mergedRef
    }, restProps), children);
  });
};

var RefTypography = /*#__PURE__*/react["forwardRef"](Typography_Typography);
RefTypography.displayName = 'Typography'; // es default export should use const instead of let

var ExportTypography = RefTypography;
/* harmony default export */ var typography_Typography = (ExportTypography);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("cDf5");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__("LQ03");
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__("+QRC");
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);

// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var es = __webpack_require__("BGR+");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/EditOutlined.js
var EditOutlined = __webpack_require__("s/wZ");
var EditOutlined_default = /*#__PURE__*/__webpack_require__.n(EditOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/CheckOutlined.js
var CheckOutlined = __webpack_require__("NAnI");
var CheckOutlined_default = /*#__PURE__*/__webpack_require__.n(CheckOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/CopyOutlined.js
var CopyOutlined = __webpack_require__("0OKo");
var CopyOutlined_default = /*#__PURE__*/__webpack_require__.n(CopyOutlined);

// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js
var rc_resize_observer_es = __webpack_require__("t23M");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 1 modules
var config_provider = __webpack_require__("wEI+");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/transButton.js
var transButton = __webpack_require__("gDlH");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/raf.js
var raf = __webpack_require__("oHiP");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/styleChecker.js
var isStyleSupport = function isStyleSupport(styleName) {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};
var isFlexSupported = isStyleSupport(['flex', 'webkitFlex', 'Flex', 'msFlex']);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 1 modules
var es_tooltip = __webpack_require__("3S7+");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/EnterOutlined.js
var EnterOutlined = __webpack_require__("FMes");
var EnterOutlined_default = /*#__PURE__*/__webpack_require__.n(EnterOutlined);

// EXTERNAL MODULE: ./node_modules/antd/es/input/TextArea.js + 3 modules
var TextArea = __webpack_require__("whJP");

// CONCATENATED MODULE: ./node_modules/antd/es/typography/Editable.js











var Editable_Editable = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Editable, _React$Component);

  var _super = createSuper_default()(Editable);

  function Editable() {
    var _this;

    classCallCheck_default()(this, Editable);

    _this = _super.apply(this, arguments);
    _this.inComposition = false;
    _this.state = {
      current: ''
    };

    _this.onChange = function (_ref) {
      var value = _ref.target.value;

      _this.setState({
        current: value.replace(/[\n\r]/g, '')
      });
    };

    _this.onCompositionStart = function () {
      _this.inComposition = true;
    };

    _this.onCompositionEnd = function () {
      _this.inComposition = false;
    };

    _this.onKeyDown = function (_ref2) {
      var keyCode = _ref2.keyCode; // We don't record keyCode when IME is using

      if (_this.inComposition) return;
      _this.lastKeyCode = keyCode;
    };

    _this.onKeyUp = function (_ref3) {
      var keyCode = _ref3.keyCode,
          ctrlKey = _ref3.ctrlKey,
          altKey = _ref3.altKey,
          metaKey = _ref3.metaKey,
          shiftKey = _ref3.shiftKey;
      var onCancel = _this.props.onCancel; // Check if it's a real key

      if (_this.lastKeyCode === keyCode && !_this.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === KeyCode["a" /* default */].ENTER) {
          _this.confirmChange();
        } else if (keyCode === KeyCode["a" /* default */].ESC) {
          onCancel();
        }
      }
    };

    _this.onBlur = function () {
      _this.confirmChange();
    };

    _this.confirmChange = function () {
      var current = _this.state.current;
      var onSave = _this.props.onSave;
      onSave(current.trim());
    };

    _this.setTextarea = function (textarea) {
      _this.textarea = textarea;
    };

    return _this;
  }

  createClass_default()(Editable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.textarea && this.textarea.resizableTextArea) {
        var textArea = this.textarea.resizableTextArea.textArea;
        textArea.focus();
        var length = textArea.value.length;
        textArea.setSelectionRange(length, length);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.state.current;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          ariaLabel = _this$props['aria-label'],
          className = _this$props.className,
          style = _this$props.style,
          direction = _this$props.direction,
          maxLength = _this$props.maxLength,
          autoSize = _this$props.autoSize;
      var textAreaClassName = classnames_default()(prefixCls, "".concat(prefixCls, "-edit-content"), defineProperty_default()({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      return /*#__PURE__*/react["createElement"]("div", {
        className: textAreaClassName,
        style: style
      }, /*#__PURE__*/react["createElement"](TextArea["a" /* default */], {
        ref: this.setTextarea,
        maxLength: maxLength,
        value: current,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onCompositionStart: this.onCompositionStart,
        onCompositionEnd: this.onCompositionEnd,
        onBlur: this.onBlur,
        "aria-label": ariaLabel,
        autoSize: autoSize === undefined || autoSize
      }), /*#__PURE__*/react["createElement"](EnterOutlined_default.a, {
        className: "".concat(prefixCls, "-edit-content-confirm")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevValue = prevState.prevValue;
      var value = nextProps.value;
      var newState = {
        prevValue: value
      };

      if (prevValue !== value) {
        newState.current = value;
      }

      return newState;
    }
  }]);

  return Editable;
}(react["Component"]);

/* harmony default export */ var typography_Editable = (Editable_Editable);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// CONCATENATED MODULE: ./node_modules/antd/es/typography/util.js


 // We only handle element & text node.

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
  padding: 0,
  margin: 0,
  display: 'inline',
  lineHeight: 'inherit'
};

function pxToNumber(value) {
  if (!value) return 0;
  var match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}

function styleToString(style) {
  // There are some different behavior between Firefox & Chrome.
  // We have to handle this ourself.
  var styleNames = Array.prototype.slice.apply(style);
  return styleNames.map(function (name) {
    return "".concat(name, ": ").concat(style.getPropertyValue(name), ";");
  }).join('');
}

function mergeChildren(children) {
  var childList = [];
  children.forEach(function (child) {
    var prevChild = childList[childList.length - 1];

    if (typeof child === 'string' && typeof prevChild === 'string') {
      childList[childList.length - 1] += child;
    } else {
      childList.push(child);
    }
  });
  return childList;
}

/* harmony default export */ var util = (function (originEle, option, content, fixedContent, ellipsisStr) {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement('div');
    ellipsisContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ellipsisContainer);
  }

  var rows = option.rows,
      _option$suffix = option.suffix,
      suffix = _option$suffix === void 0 ? '' : _option$suffix; // Get origin style

  var originStyle = window.getComputedStyle(originEle);
  var originCSS = styleToString(originStyle);
  var lineHeight = pxToNumber(originStyle.lineHeight);
  var maxHeight = Math.round(lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom)); // Set shadow

  ellipsisContainer.setAttribute('style', originCSS);
  ellipsisContainer.style.position = 'fixed';
  ellipsisContainer.style.left = '0';
  ellipsisContainer.style.height = 'auto';
  ellipsisContainer.style.minHeight = 'auto';
  ellipsisContainer.style.maxHeight = 'auto';
  ellipsisContainer.style.top = '-999999px';
  ellipsisContainer.style.zIndex = '-1000'; // clean up css overflow

  ellipsisContainer.style.textOverflow = 'clip';
  ellipsisContainer.style.whiteSpace = 'normal';
  ellipsisContainer.style.webkitLineClamp = 'none'; // Render in the fake container

  var contentList = mergeChildren(Object(toArray["a" /* default */])(content));
  Object(react_dom["render"])( /*#__PURE__*/react["createElement"]("div", {
    style: wrapperStyle
  }, /*#__PURE__*/react["createElement"]("span", {
    style: wrapperStyle
  }, contentList, suffix), /*#__PURE__*/react["createElement"]("span", {
    style: wrapperStyle
  }, fixedContent)), ellipsisContainer); // wrap in an div for old version react
  // Check if ellipsis in measure div is height enough for content

  function inRange() {
    return ellipsisContainer.offsetHeight < maxHeight;
  } // Skip ellipsis if already match


  if (inRange()) {
    Object(react_dom["unmountComponentAtNode"])(ellipsisContainer);
    return {
      content: content,
      text: ellipsisContainer.innerHTML,
      ellipsis: false
    };
  } // We should clone the childNode since they're controlled by React and we can't reuse it without warning


  var childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter(function (_ref) {
    var nodeType = _ref.nodeType;
    return nodeType !== COMMENT_NODE;
  });
  var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  Object(react_dom["unmountComponentAtNode"])(ellipsisContainer); // ========================= Find match ellipsis content =========================

  var ellipsisChildren = [];
  ellipsisContainer.innerHTML = ''; // Create origin content holder

  var ellipsisContentHolder = document.createElement('span');
  ellipsisContainer.appendChild(ellipsisContentHolder);
  var ellipsisTextNode = document.createTextNode(ellipsisStr + suffix);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach(function (childNode) {
    ellipsisContainer.appendChild(childNode);
  }); // Append before fixed nodes

  function appendChildNode(node) {
    ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
  } // Get maximum text


  function measureText(textNode, fullText) {
    var startLoc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var endLoc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fullText.length;
    var lastSuccessLoc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var midLoc = Math.floor((startLoc + endLoc) / 2);
    var currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;

    if (startLoc >= endLoc - 1) {
      // Loop when step is small
      for (var step = endLoc; step >= startLoc; step -= 1) {
        var currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;

        if (inRange() || !currentStepText) {
          return step === fullText.length ? {
            finished: false,
            reactNode: fullText
          } : {
            finished: true,
            reactNode: currentStepText
          };
        }
      }
    }

    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    }

    return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
  }

  function measureNode(childNode, index) {
    var type = childNode.nodeType;

    if (type === ELEMENT_NODE) {
      // We don't split element, it will keep if whole element can be displayed.
      appendChildNode(childNode);

      if (inRange()) {
        return {
          finished: false,
          reactNode: contentList[index]
        };
      } // Clean up if can not pull in


      ellipsisContentHolder.removeChild(childNode);
      return {
        finished: true,
        reactNode: null
      };
    }

    if (type === TEXT_NODE) {
      var fullText = childNode.textContent || '';
      var textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    } // Not handle other type of content
    // PS: This code should not be attached after react 16

    /* istanbul ignore next */


    return {
      finished: false,
      reactNode: null
    };
  }

  childNodes.some(function (childNode, index) {
    var _measureNode = measureNode(childNode, index),
        finished = _measureNode.finished,
        reactNode = _measureNode.reactNode;

    if (reactNode) {
      ellipsisChildren.push(reactNode);
    }

    return finished;
  });
  return {
    content: ellipsisChildren,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
});
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base.js









var Base_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




















var isLineClampSupport = isStyleSupport('webkitLineClamp');
var isTextOverflowSupport = isStyleSupport('textOverflow');

function wrapperDecorations(_ref, content) {
  var mark = _ref.mark,
      code = _ref.code,
      underline = _ref.underline,
      del = _ref["delete"],
      strong = _ref.strong,
      keyboard = _ref.keyboard;
  var currentContent = content;

  function wrap(needed, tag) {
    if (!needed) return;
    currentContent = /*#__PURE__*/react["createElement"](tag, {}, currentContent);
  }

  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  wrap(keyboard, 'kbd');
  return currentContent;
}

var ELLIPSIS_STR = '...';

var Base_Base = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Base, _React$Component);

  var _super = createSuper_default()(Base);

  function Base() {
    var _this;

    classCallCheck_default()(this, Base);

    _this = _super.apply(this, arguments);
    _this.contentRef = /*#__PURE__*/react["createRef"]();
    _this.state = {
      edit: false,
      copied: false,
      ellipsisText: '',
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false
    };

    _this.getPrefixCls = function () {
      var customizePrefixCls = _this.props.prefixCls;
      var getPrefixCls = _this.context.getPrefixCls;
      return getPrefixCls('typography', customizePrefixCls);
    }; // =============== Expand ===============


    _this.onExpandClick = function (e) {
      var _this$getEllipsis = _this.getEllipsis(),
          onExpand = _this$getEllipsis.onExpand;

      _this.setState({
        expanded: true
      });

      if (onExpand) {
        onExpand(e);
      }
    }; // ================ Edit ================


    _this.onEditClick = function () {
      _this.triggerEdit(true);
    };

    _this.onEditChange = function (value) {
      var _this$getEditable = _this.getEditable(),
          onChange = _this$getEditable.onChange;

      if (onChange) {
        onChange(value);
      }

      _this.triggerEdit(false);
    };

    _this.onEditCancel = function () {
      _this.triggerEdit(false);
    }; // ================ Copy ================


    _this.onCopyClick = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          copyable = _this$props.copyable;

      var copyConfig = extends_default()({}, typeof_default()(copyable) === 'object' ? copyable : null);

      if (copyConfig.text === undefined) {
        copyConfig.text = String(children);
      }

      copy_to_clipboard_default()(copyConfig.text || '');

      _this.setState({
        copied: true
      }, function () {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }

        _this.copyId = window.setTimeout(function () {
          _this.setState({
            copied: false
          });
        }, 3000);
      });
    };

    _this.setEditRef = function (node) {
      _this.editIcon = node;
    };

    _this.triggerEdit = function (edit) {
      var _this$getEditable2 = _this.getEditable(),
          onStart = _this$getEditable2.onStart;

      if (edit && onStart) {
        onStart();
      }

      _this.setState({
        edit: edit
      }, function () {
        if (!edit && _this.editIcon) {
          _this.editIcon.focus();
        }
      });
    }; // ============== Ellipsis ==============


    _this.resizeOnNextFrame = function () {
      raf["a" /* default */].cancel(_this.rafId);
      _this.rafId = Object(raf["a" /* default */])(function () {
        // Do not bind `syncEllipsis`. It need for test usage on prototype
        _this.syncEllipsis();
      });
    };

    return _this;
  }

  createClass_default()(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        clientRendered: true
      });
      this.resizeOnNextFrame();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var children = this.props.children;
      var ellipsis = this.getEllipsis();
      var prevEllipsis = this.getEllipsis(prevProps);

      if (children !== prevProps.children || ellipsis.rows !== prevEllipsis.rows) {
        this.resizeOnNextFrame();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.copyId);
      raf["a" /* default */].cancel(this.rafId);
    }
  }, {
    key: "getEditable",
    value: function getEditable(props) {
      var edit = this.state.edit;

      var _ref2 = props || this.props,
          editable = _ref2.editable;

      if (!editable) return {
        editing: edit
      };
      return extends_default()({
        editing: edit
      }, typeof_default()(editable) === 'object' ? editable : null);
    }
  }, {
    key: "getEllipsis",
    value: function getEllipsis(props) {
      var _ref3 = props || this.props,
          ellipsis = _ref3.ellipsis;

      if (!ellipsis) return {};
      return extends_default()({
        rows: 1,
        expandable: false
      }, typeof_default()(ellipsis) === 'object' ? ellipsis : null);
    }
  }, {
    key: "canUseCSSEllipsis",
    value: function canUseCSSEllipsis() {
      var clientRendered = this.state.clientRendered;
      var _this$props2 = this.props,
          editable = _this$props2.editable,
          copyable = _this$props2.copyable;

      var _this$getEllipsis2 = this.getEllipsis(),
          rows = _this$getEllipsis2.rows,
          expandable = _this$getEllipsis2.expandable,
          suffix = _this$getEllipsis2.suffix,
          onEllipsis = _this$getEllipsis2.onEllipsis;

      if (suffix) return false; // Can't use css ellipsis since we need to provide the place for button

      if (editable || copyable || expandable || !clientRendered || onEllipsis) {
        return false;
      }

      if (rows === 1) {
        return isTextOverflowSupport;
      }

      return isLineClampSupport;
    }
  }, {
    key: "syncEllipsis",
    value: function syncEllipsis() {
      var _this$state = this.state,
          ellipsisText = _this$state.ellipsisText,
          isEllipsis = _this$state.isEllipsis,
          expanded = _this$state.expanded;

      var _this$getEllipsis3 = this.getEllipsis(),
          rows = _this$getEllipsis3.rows,
          suffix = _this$getEllipsis3.suffix,
          onEllipsis = _this$getEllipsis3.onEllipsis;

      var children = this.props.children;
      if (!rows || rows < 0 || !this.contentRef.current || expanded) return; // Do not measure if css already support ellipsis

      if (this.canUseCSSEllipsis()) return;
      Object(devWarning["a" /* default */])(Object(toArray["a" /* default */])(children).every(function (child) {
        return typeof child === 'string';
      }), 'Typography', '`ellipsis` should use string as children only.');

      var _measure = util(this.contentRef.current, {
        rows: rows,
        suffix: suffix
      }, children, this.renderOperations(true), ELLIPSIS_STR),
          content = _measure.content,
          text = _measure.text,
          ellipsis = _measure.ellipsis;

      if (ellipsisText !== text || isEllipsis !== ellipsis) {
        this.setState({
          ellipsisText: text,
          ellipsisContent: content,
          isEllipsis: ellipsis
        });

        if (isEllipsis !== ellipsis && onEllipsis) {
          onEllipsis(ellipsis);
        }
      }
    }
  }, {
    key: "renderExpand",
    value: function renderExpand(forceRender) {
      var _this$getEllipsis4 = this.getEllipsis(),
          expandable = _this$getEllipsis4.expandable,
          symbol = _this$getEllipsis4.symbol;

      var _this$state2 = this.state,
          expanded = _this$state2.expanded,
          isEllipsis = _this$state2.isEllipsis;
      if (!expandable) return null; // force render expand icon for measure usage or it will cause dead loop

      if (!forceRender && (expanded || !isEllipsis)) return null;
      var expandContent;

      if (symbol) {
        expandContent = symbol;
      } else {
        expandContent = this.expandStr;
      }

      return /*#__PURE__*/react["createElement"]("a", {
        key: "expand",
        className: "".concat(this.getPrefixCls(), "-expand"),
        onClick: this.onExpandClick,
        "aria-label": this.expandStr
      }, expandContent);
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var editable = this.props.editable;
      if (!editable) return;
      var icon = editable.icon,
          tooltip = editable.tooltip;
      var title = Object(toArray["a" /* default */])(tooltip)[0] || this.editStr;
      var ariaLabel = typeof title === 'string' ? title : '';
      return /*#__PURE__*/react["createElement"](es_tooltip["a" /* default */], {
        key: "edit",
        title: tooltip === false ? '' : title
      }, /*#__PURE__*/react["createElement"](transButton["a" /* default */], {
        ref: this.setEditRef,
        className: "".concat(this.getPrefixCls(), "-edit"),
        onClick: this.onEditClick,
        "aria-label": ariaLabel
      }, icon || /*#__PURE__*/react["createElement"](EditOutlined_default.a, {
        role: "button"
      })));
    }
  }, {
    key: "renderCopy",
    value: function renderCopy() {
      var copied = this.state.copied;
      var copyable = this.props.copyable;
      if (!copyable) return;
      var prefixCls = this.getPrefixCls();
      var tooltips = copyable.tooltips;
      var tooltipNodes = Object(toArray["a" /* default */])(tooltips);

      if (tooltipNodes.length === 0) {
        tooltipNodes = [this.copyStr, this.copiedStr];
      }

      var title = copied ? tooltipNodes[1] : tooltipNodes[0];
      var ariaLabel = typeof title === 'string' ? title : '';
      var icons = Object(toArray["a" /* default */])(copyable.icon);
      return /*#__PURE__*/react["createElement"](es_tooltip["a" /* default */], {
        key: "copy",
        title: tooltips === false ? '' : title
      }, /*#__PURE__*/react["createElement"](transButton["a" /* default */], {
        className: classnames_default()("".concat(prefixCls, "-copy"), copied && "".concat(prefixCls, "-copy-success")),
        onClick: this.onCopyClick,
        "aria-label": ariaLabel
      }, copied ? icons[1] || /*#__PURE__*/react["createElement"](CheckOutlined_default.a, null) : icons[0] || /*#__PURE__*/react["createElement"](CopyOutlined_default.a, null)));
    }
  }, {
    key: "renderEditInput",
    value: function renderEditInput() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          style = _this$props3.style;
      var direction = this.context.direction;

      var _this$getEditable3 = this.getEditable(),
          maxLength = _this$getEditable3.maxLength,
          autoSize = _this$getEditable3.autoSize;

      return /*#__PURE__*/react["createElement"](typography_Editable, {
        value: typeof children === 'string' ? children : '',
        onSave: this.onEditChange,
        onCancel: this.onEditCancel,
        prefixCls: this.getPrefixCls(),
        className: className,
        style: style,
        direction: direction,
        maxLength: maxLength,
        autoSize: autoSize
      });
    }
  }, {
    key: "renderOperations",
    value: function renderOperations(forceRenderExpanded) {
      return [this.renderExpand(forceRenderExpanded), this.renderEdit(), this.renderCopy()].filter(function (node) {
        return node;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$state3 = this.state,
          ellipsisContent = _this$state3.ellipsisContent,
          isEllipsis = _this$state3.isEllipsis,
          expanded = _this$state3.expanded;

      var _a = this.props,
          component = _a.component,
          children = _a.children,
          className = _a.className,
          type = _a.type,
          disabled = _a.disabled,
          style = _a.style,
          restProps = Base_rest(_a, ["component", "children", "className", "type", "disabled", "style"]);

      var direction = this.context.direction;

      var _this$getEllipsis5 = this.getEllipsis(),
          rows = _this$getEllipsis5.rows,
          suffix = _this$getEllipsis5.suffix;

      var prefixCls = this.getPrefixCls();
      var textProps = Object(es["a" /* default */])(restProps, ['prefixCls', 'editable', 'copyable', 'ellipsis', 'mark', 'code', 'delete', 'underline', 'strong', 'keyboard'].concat(toConsumableArray_default()(config_provider["a" /* configConsumerProps */])));
      var cssEllipsis = this.canUseCSSEllipsis();
      var cssTextOverflow = rows === 1 && cssEllipsis;
      var cssLineClamp = rows && rows > 1 && cssEllipsis;
      var textNode = children; // Only use js ellipsis when css ellipsis not support

      if (rows && isEllipsis && !expanded && !cssEllipsis) {
        var title = restProps.title;
        var restContent = title || '';

        if (!title && (typeof children === 'string' || typeof children === 'number')) {
          restContent = String(children);
        } // show rest content as title on symbol


        restContent = restContent === null || restContent === void 0 ? void 0 : restContent.slice(String(ellipsisContent || '').length); // We move full content to outer element to avoid repeat read the content by accessibility

        textNode = /*#__PURE__*/react["createElement"](react["Fragment"], null, ellipsisContent, /*#__PURE__*/react["createElement"]("span", {
          title: restContent,
          "aria-hidden": "true"
        }, ELLIPSIS_STR), suffix);
      } else {
        textNode = /*#__PURE__*/react["createElement"](react["Fragment"], null, children, suffix);
      }

      textNode = wrapperDecorations(this.props, textNode);
      return /*#__PURE__*/react["createElement"](LocaleReceiver["a" /* default */], {
        componentName: "Text"
      }, function (_ref4) {
        var _classNames;

        var edit = _ref4.edit,
            copyStr = _ref4.copy,
            copied = _ref4.copied,
            expand = _ref4.expand;
        _this2.editStr = edit;
        _this2.copyStr = copyStr;
        _this2.copiedStr = copied;
        _this2.expandStr = expand;
        return /*#__PURE__*/react["createElement"](rc_resize_observer_es["a" /* default */], {
          onResize: _this2.resizeOnNextFrame,
          disabled: !rows
        }, /*#__PURE__*/react["createElement"](typography_Typography, extends_default()({
          className: classnames_default()((_classNames = {}, defineProperty_default()(_classNames, "".concat(prefixCls, "-").concat(type), type), defineProperty_default()(_classNames, "".concat(prefixCls, "-disabled"), disabled), defineProperty_default()(_classNames, "".concat(prefixCls, "-ellipsis"), rows), defineProperty_default()(_classNames, "".concat(prefixCls, "-ellipsis-single-line"), cssTextOverflow), defineProperty_default()(_classNames, "".concat(prefixCls, "-ellipsis-multiple-line"), cssLineClamp), _classNames), className),
          style: extends_default()(extends_default()({}, style), {
            WebkitLineClamp: cssLineClamp ? rows : null
          }),
          component: component,
          ref: _this2.contentRef,
          direction: direction
        }, textProps), textNode, _this2.renderOperations()));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getEditable4 = this.getEditable(),
          editing = _this$getEditable4.editing;

      if (editing) {
        return this.renderEditInput();
      }

      return this.renderContent();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var children = nextProps.children,
          editable = nextProps.editable;
      Object(devWarning["a" /* default */])(!editable || typeof children === 'string', 'Typography', 'When `editable` is enabled, the `children` should use string.');
      return {};
    }
  }]);

  return Base;
}(react["Component"]);

Base_Base.contextType = context["b" /* ConfigContext */];
Base_Base.defaultProps = {
  children: ''
};
/* harmony default export */ var typography_Base = (Base_Base);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Text.js



var Text_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Text_Text = function Text(_a) {
  var ellipsis = _a.ellipsis,
      restProps = Text_rest(_a, ["ellipsis"]);

  Object(devWarning["a" /* default */])(typeof_default()(ellipsis) !== 'object', 'Typography.Text', '`ellipsis` only supports boolean value.');
  return /*#__PURE__*/react["createElement"](typography_Base, extends_default()({}, restProps, {
    ellipsis: !!ellipsis,
    component: "span"
  }));
};

/* harmony default export */ var typography_Text = (Text_Text);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Link.js



var Link_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Link_Link = function Link(_a, ref) {
  var ellipsis = _a.ellipsis,
      rel = _a.rel,
      restProps = Link_rest(_a, ["ellipsis", "rel"]);

  Object(devWarning["a" /* default */])(typeof_default()(ellipsis) !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');
  var baseRef = react["useRef"](null);
  react["useImperativeHandle"](ref, function () {
    var _a;

    return (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.contentRef.current;
  });

  var mergedProps = extends_default()(extends_default()({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
  }); // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore


  delete mergedProps.navigate;
  return /*#__PURE__*/react["createElement"](typography_Base, extends_default()({}, mergedProps, {
    ref: baseRef,
    ellipsis: !!ellipsis,
    component: "a"
  }));
};

/* harmony default export */ var typography_Link = (/*#__PURE__*/react["forwardRef"](Link_Link));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// CONCATENATED MODULE: ./node_modules/antd/es/typography/Title.js


var Title_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var TITLE_ELE_LIST = Object(_util_type["b" /* tupleNum */])(1, 2, 3, 4, 5);

var Title_Title = function Title(props) {
  var _props$level = props.level,
      level = _props$level === void 0 ? 1 : _props$level,
      restProps = Title_rest(props, ["level"]);

  var component;

  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    Object(devWarning["a" /* default */])(false, 'Typography.Title', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.');
    component = 'h1';
  }

  return /*#__PURE__*/react["createElement"](typography_Base, extends_default()({}, restProps, {
    component: component
  }));
};

/* harmony default export */ var typography_Title = (Title_Title);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Paragraph.js




var Paragraph_Paragraph = function Paragraph(props) {
  return /*#__PURE__*/react["createElement"](typography_Base, extends_default()({}, props, {
    component: "div"
  }));
};

/* harmony default export */ var typography_Paragraph = (Paragraph_Paragraph);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/index.js





var es_typography_Typography = typography_Typography;
es_typography_Typography.Text = typography_Text;
es_typography_Typography.Link = typography_Link;
es_typography_Typography.Title = typography_Title;
es_typography_Typography.Paragraph = typography_Paragraph;
/* harmony default export */ var typography = __webpack_exports__["a"] = (es_typography_Typography);

/***/ })

}]);