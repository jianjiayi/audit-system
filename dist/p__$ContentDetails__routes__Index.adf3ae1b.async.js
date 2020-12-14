(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "3ZqS":
/*!***************************************************************!*\
  !*** ./src/pages/$ContentDetails/routes/leftContent/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses eval() */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "wx14");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style */ "+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "2/Rp");
/* harmony import */ var antd_es_date_picker_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/date-picker/style */ "iQDF");
/* harmony import */ var antd_es_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/date-picker */ "+eQT");
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/input/style */ "5NDa");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/input */ "5rEg");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "Ff2n");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/form/style */ "y8nQ");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/form */ "Vl3Y");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! umi */ "9kvl");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_MediaComponents__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/MediaComponents */ "PWmT");
/* harmony import */ var _components_Editor_index2_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/Editor/index2.js */ "oz3V");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @utils/utils.js */ "+n12");
/* harmony import */ var _components_WrapAuth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/WrapAuth */ "yAXW");
/* harmony import */ var _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index.module.less?modules */ "S6jO");













/* eslint-disable spaced-comment */

/* eslint-disable react/self-closing-comp */

/* eslint-disable react/no-danger */

/* eslint-disable consistent-return */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-param-reassign */

/* eslint-disable import/no-unresolved */

/* eslint-disable array-callback-return */

/* eslint-disable no-eval */

/* eslint-disable react/jsx-no-duplicate-props */










var dateFormat = 'YYYY-MM-DD HH:mm:ss';

function Content(props) {
  var _Form$useForm = antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].useForm(),
      _Form$useForm2 = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_Form$useForm, 1),
      selfForm = _Form$useForm2[0];

  var ueRef = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])(null); // 临时保存编辑器修改后的文章详情

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(''),
      _useState2 = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_useState, 2),
      editorText = _useState2[0],
      setEditorText = _useState2[1];

  var className = props.className,
      CDetails = props.CDetails,
      dispatch = props.dispatch;
  var curArt = CDetails.curArt,
      isEdit = CDetails.isEdit,
      queueContentId = CDetails.queueContentId,
      newsDataType = CDetails.newsDataType,
      forbiddenWordList = CDetails.forbiddenWordList,
      sensitiveWordList = CDetails.sensitiveWordList,
      hotWord = CDetails.hotWord,
      personalWord = CDetails.personalWord;
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    setEditorText(curArt.content);
  }, [curArt.content]);
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    selfForm.setFieldsValue({
      title: curArt.title,
      originName: curArt.originName,
      datetime: moment__WEBPACK_IMPORTED_MODULE_15___default()(curArt.pubTime)
    });
  }, [isEdit]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])({
    initialFrameWidth: '100%',
    initialFrameHeight: 400
  }),
      _useState4 = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_useState3, 1),
      config = _useState4[0]; // 富文本失焦就触发setContent函数设置表单的content内容


  var _setContent = function setContent(content) {
    setEditorText(content);
  };

  var changeIsEdit = function changeIsEdit(status) {
    if (!status) {
      selfForm.resetFields();
    }

    dispatch({
      type: 'CDetails/save',
      payload: {
        isEdit: status
      }
    });
  };

  var formItemLayout = {
    form: selfForm,
    labelAlign: 'left',
    labelCol: {
      span: 3
    },
    wrapperCol: {
      span: 20
    }
  }; // 保存函数

  var handelSaveArt = function handelSaveArt(values) {
    values.content = editorText;

    if (!lodash__WEBPACK_IMPORTED_MODULE_16___default.a.isEmpty(values.datetime)) {
      var time = values.datetime.format(dateFormat);
      values.pubTime = new Date(time.replace(/-/g, '/')).getTime();
    }

    delete values.datetime;

    var id = values.id,
        rest = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(values, ["id"]);

    dispatch({
      type: 'CDetails/getNewsSaveContent',
      payload: {
        content: rest,
        id: queueContentId
      }
    });
    changeIsEdit(false);
  }; // 表头


  var getHaderTpl = function getHaderTpl() {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].header
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]['form-box']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Item, {
      label: "\u6807\u9898",
      name: "title",
      initialValue: curArt.title,
      shouldUpdate: true,
      rules: [{
        required: true,
        message: "\u8BF7\u8F93\u5165\u6807\u9898"
      }]
    }, isEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      placeholder: "\u8BF7\u8F93\u5165\u6807\u9898"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].title
    }, curArt.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Item, {
      label: "\xA0\xA0\xA0ID",
      name: "id",
      initialValue: curArt.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, curArt.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Item, {
      label: "\u6765\u6E90",
      name: "originName",
      initialValue: curArt.originName,
      rules: [{
        required: true,
        message: "\u8BF7\u8F93\u5165\u6765\u6E90"
      }]
    }, isEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      placeholder: "\u8BF7\u8F93\u5165\u6765\u6E90"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].title
    }, curArt.originName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Item, {
      label: "\u65F6\u95F4",
      name: "datetime",
      initialValue: moment__WEBPACK_IMPORTED_MODULE_15___default()(curArt.pubTime),
      rules: [{
        required: true,
        message: "\u8BF7\u9009\u62E9\u65F6\u95F4"
      }]
    }, isEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_date_picker__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      showTime: true,
      format: dateFormat
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].title
    }, _utils_utils_js__WEBPACK_IMPORTED_MODULE_19__[/* ExTime */ "c"].formatDate(curArt.pubTime)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]['button-box']
    }, !isEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_WrapAuth__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
      pathUrl: "/:type/cdetails",
      text: "\u4FEE\u6539",
      perms: "news:edit",
      type: "primary",
      size: "small",
      onClick: function onClick() {
        changeIsEdit(true);
      }
    }), isEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]['button-group']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], (_React$createElement = {
      type: "primary",
      size: "small"
    }, Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$createElement, "type", "primary"), Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$createElement, "htmlType", "submit"), _React$createElement), "\u786E\u5B9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      size: "small",
      onClick: function onClick() {
        changeIsEdit(false);
      }
    }, "\u53D6\u6D88"))));
  };
  /**
   * @name: 高亮单词
   * @test: test font
   * @msg:
   * @param {string, object}
   * @return {string}
   */


  var getContentHtml = function getContentHtml(textHtml, List) {
    // let textHtml = _.cloneDeep(html);
    if (!textHtml) return;
    List.forEach(function (item, index) {
      if (item.value.length > 0) {
        var data = item.value; // 模糊匹配修改样式

        data.map(function (v, i) {
          var reg = "/".concat(v, "/g");
          textHtml = textHtml.replace(eval(reg), "<span style=\"background:".concat(item.color, ";color:#ffffff;padding:0 5px;margin:0 2px;\">").concat(v, "</span>"));
        });
      }
    });
    return textHtml;
  };

  var list = [{
    name: 'forbiddenWordList',
    color: 'red',
    value: forbiddenWordList
  }, {
    name: 'hotWord',
    color: 'red',
    value: hotWord
  }, {
    name: 'sensitiveWordList',
    color: 'blue',
    value: sensitiveWordList
  }, {
    name: 'personalWord',
    color: 'green',
    value: personalWord
  }]; // 正文

  var textHtml = {
    __html: getContentHtml(curArt.content, list)
  }; // 音频

  var audioProps = {
    url: curArt.mediaInfo && curArt.mediaInfo.audios
  }; // console.log(curArt.mediaInfo.videos)
  // 视频

  var videoProps = {
    source: curArt.mediaInfo && curArt.mediaInfo.videos && curArt.mediaInfo.videos[1].src,
    poster: curArt.mediaInfo && curArt.mediaInfo.images || [],
    duration: curArt.mediaInfo && curArt.mediaInfo.videos && curArt.mediaInfo.videos[1].duration
  };

  var getContentTpl = function getContentTpl() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]['content-container']
    }, newsDataType === 'AUDIO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_MediaComponents__WEBPACK_IMPORTED_MODULE_17__[/* AudioPlayer */ "a"], audioProps), newsDataType === 'VIDEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].title
    }, "\u89C6\u9891\u8BE6\u60C5 : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_MediaComponents__WEBPACK_IMPORTED_MODULE_17__[/* VideoPlayer */ "b"], videoProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].title
    }, "\u6B63\u6587\u8BE6\u60C5 : "), isEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Editor_index2_js__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
      id: "container",
      ref: ueRef,
      config: config,
      initData: editorText,
      setContent: function setContent(e) {
        return _setContent(e);
      }
    })), !isEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]['content-box']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]['content-text'],
      dangerouslySetInnerHTML: textHtml
    })))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, formItemLayout, {
    onFinish: handelSaveArt,
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(className, _index_module_less_modules__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].container)
  }), getHaderTpl(), getContentTpl());
}

function mapStateToProps(_ref) {
  var CDetails = _ref.CDetails;
  return {
    CDetails: CDetails
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(umi__WEBPACK_IMPORTED_MODULE_13__[/* connect */ "c"])(mapStateToProps)(Content));

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
  ATLAS: '图集',
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
  INIT: '待审核',
  // PENDING: '已领取',
  PASS: '审核通过',
  REJECT: '审核未通过'
}; // 审核结果

var auditResult1 = {
  '': '全部',
  '审核通过': '审核通过',
  '审核未通过': '审核未通过'
}; // 文章审核通过&未通过原因

var passReason = ['去杂不净', '广告'];
var rejectReason = ['文章质量差', '广告', '软文', '封图', '去杂不净', '抓取不全/错误', '版权问题', '其他'];

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

/***/ "PWmT":
/*!*************************************************************!*\
  !*** ./src/components/MediaComponents/index.js + 4 modules ***!
  \*************************************************************/
/*! exports provided: AudioPlayer, VideoPlayer */
/*! exports used: AudioPlayer, VideoPlayer */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Audio; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Video; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/components/MediaComponents/Audio/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_modulemodules = ({"container":"container___1LbMQ"});
// CONCATENATED MODULE: ./src/components/MediaComponents/Audio/index.js
/* eslint-disable jsx-a11y/media-has-caption */




function AudioPlayer(props) {
  var className = props.className,
      url = props.url;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(className, index_modulemodules.container)
  }, /*#__PURE__*/react_default.a.createElement("audio", {
    src: url,
    controls: true
  }, "\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u4E0D\u652F\u6301audio\u6807\u7B7E"));
}

/* harmony default export */ var Audio = (AudioPlayer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// CONCATENATED MODULE: ./src/components/MediaComponents/Video/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Video_index_modulemodules = ({"container":"container___1I5Dl","video-player":"video-player___1tRzO","video-overlay":"video-overlay___M15oG","btn-play":"btn-play___3Pzif","duration-wrap":"duration-wrap___2UcXe","icon":"icon___2JdVu","duration":"duration___We8yd"});
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("LvDl");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./src/components/MediaComponents/Video/index.js


/* eslint-disable @typescript-eslint/dot-notation */

/* eslint-disable jsx-a11y/media-has-caption */

/* eslint-disable react/self-closing-comp */

/* eslint-disable import/order */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/anchor-has-content */

/* eslint-disable no-unused-vars */





function VideoPlayer(props) {
  var videoRef = Object(react["useRef"])(null);

  var _useState = Object(react["useState"])(true),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      showOverlay = _useState2[0],
      setShowOverlay = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      hasControls = _useState4[0],
      setHasControls = _useState4[1];

  var className = props.className,
      source = props.source,
      poster = props.poster,
      duration = props.duration;

  var onPlay = function onPlay() {
    var video = videoRef.current;
    video.play();
    setShowOverlay(false);
    setHasControls(true);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(className, Video_index_modulemodules['video-player'])
  }, /*#__PURE__*/react_default.a.createElement("video", {
    ref: videoRef,
    controls: hasControls,
    controlsList: "nodownload",
    src: source,
    poster: !lodash_default.a.isEmpty(poster) && poster[1].src || '' // ended={()=>onEnded()}

  }), showOverlay && /*#__PURE__*/react_default.a.createElement("div", {
    className: Video_index_modulemodules['video-overlay'],
    style: {
      backgroundImage: "url(".concat(poster, ")")
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: Video_index_modulemodules['btn-play'],
    onClick: function onClick() {
      return onPlay();
    }
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: Video_index_modulemodules['duration-wrap']
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: Video_index_modulemodules['icon']
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: Video_index_modulemodules['duration']
  }, duration))));
}

/* harmony default export */ var Video = (VideoPlayer);
// CONCATENATED MODULE: ./src/components/MediaComponents/index.js




/***/ }),

/***/ "S6jO":
/*!********************************************************************************!*\
  !*** ./src/pages/$ContentDetails/routes/leftContent/index.module.less?modules ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"container":"container___oUC8k","header":"header___Mx5Mu","form-box":"form-box___1SOFK","button-box":"button-box___1WhUC","button-group":"button-group___YO6Kz","content-container":"content-container___1zdMo","title":"title___2o8T1","content-box":"content-box___2QT3v","content-text":"content-text___8xGQE"});

/***/ }),

/***/ "V0Yb":
/*!********************************************************************************!*\
  !*** ./src/pages/$ContentDetails/components/ButtonMobilePreview/iPhone_bg.svg ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/iPhone_bg.9f24fe6d.svg";

/***/ }),

/***/ "oz3V":
/*!*****************************************!*\
  !*** ./src/components/Editor/index2.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable func-names */

/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-use-before-define */

var editor = null;
var toolbars = [['source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', // 'fontborder',
'strikethrough', 'removeformat', // 'formatmatch',
// 'autotypeset',
'blockquote', // 'pasteplain',
'|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', '|', 'paragraph', 'fontfamily', 'fontsize', '|', 'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', // 'touppercase', 'tolowercase', '|',
'link', // 'unlink',
'|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|', 'simpleupload', 'insertimage' // '|',
// 'horizontal',
// 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
// 'searchreplace'
]];

function UEditor(props, ref) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.UE.getEditor) {
      setConfig(props.initData, props.config, props.setContent);
    }

    return function () {
      editor.destroy(props.id); // 组件销毁时候移除页面中id的textarea

      var tagElement = window.document.querySelector("#ueditor-container");
      tagElement.parentElement.removeChild(tagElement); // editor.removeListener(); //不要打开，否则返回有问题报错
    };
  }, []); // 初始化编辑器

  var setConfig = function setConfig(initData, config, setContent) {
    editor = window.UE && window.UE.getEditor('ueditor-container', {
      toolbars: toolbars,
      // enableAutoSave: false,
      maximumWords: 1000000,
      scaleEnabled: false,
      autoFloatEnabled: false,
      autoHeightEnabled: false,
      initialFrameHeight: config && config.initialFrameHeight || 450,
      initialFrameWidth: config && config.initialFrameWidth || '100%',
      zIndex: 1
    });
    editor.ready(function () {
      if (initData) {
        editor.setContent(initData); // 设置默认值/表单回显
      }
    });
    editor.addListener('blur', function () {
      setContent(editor.getContent());
    });
  }; // 暴露方法


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      getUEContent: function getUEContent() {
        return editor.getContent(); // 获取编辑器内容
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    id: "ueditor-container",
    type: "text/plain"
  });
}

;
/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(UEditor));

/***/ }),

/***/ "tvpq":
/*!**********************************************************************!*\
  !*** ./src/pages/$ContentDetails/routes/Index/index.js + 18 modules ***!
  \**********************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@ant-design/icons/es/icons/RollbackOutlined.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/.umi-production/core/umiExports.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/MediaComponents/index.js because of ./src/pages/$ContentDetails/routes/leftContent/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/WrapAuth/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/$ContentDetails/routes/leftContent/index.js (<- Module uses eval()) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/constants.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd-img-crop/dist/antd-img-crop.esm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/checkbox/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/checkbox/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/col/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/col/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/image/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/image/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/radio/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/radio/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/row/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/row/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/slider/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/spin/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/spin/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tag/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tag/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/upload/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/upload/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/swiper/esm/components/core/core-class.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/swiper/swiper.less */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/spin/style/index.js + 1 modules
var style = __webpack_require__("T2oS");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__("W9HT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts + 19 modules
var umiExports = __webpack_require__("9kvl");

// EXTERNAL MODULE: ./src/pages/$ContentDetails/routes/leftContent/index.js
var leftContent = __webpack_require__("3ZqS");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var button_style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js + 1 modules
var message_style = __webpack_require__("miYZ");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__("tsqr");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js + 1 modules
var form_style = __webpack_require__("y8nQ");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 14 modules
var es_form = __webpack_require__("Vl3Y");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js + 1 modules
var modal_style = __webpack_require__("2qtc");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__("kLXV");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("LvDl");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RollbackOutlined.js + 1 modules
var RollbackOutlined = __webpack_require__("GYYy");

// EXTERNAL MODULE: ./node_modules/antd/es/upload/style/index.js + 3 modules
var upload_style = __webpack_require__("DZo9");

// EXTERNAL MODULE: ./node_modules/antd/es/upload/index.js + 29 modules
var upload = __webpack_require__("8z0m");

// EXTERNAL MODULE: ./node_modules/antd/es/radio/style/index.js + 1 modules
var radio_style = __webpack_require__("7Kak");

// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 4 modules
var es_radio = __webpack_require__("9yH6");

// EXTERNAL MODULE: ./node_modules/antd/es/image/style/index.js + 1 modules
var image_style = __webpack_require__("XCrF");

// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 5 modules
var es_image = __webpack_require__("1GRj");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/antd-img-crop/dist/antd-img-crop.esm.js + 18 modules
var antd_img_crop_esm = __webpack_require__("O7uO");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__("xvlK");

// EXTERNAL MODULE: ./src/pages/constants.js
var constants = __webpack_require__("6ZGt");

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("+n12");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/Normal/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_modulemodules = ({"normal":"normal___1IPtL","title":"title___2rJvL","content":"content___3dB7X","source":"source___1yanX","content-text":"content-text___24V0N","content-detail":"content-detail___3WhMn"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/Normal/index.js
/* eslint-disable react/no-danger */

/* eslint-disable func-names */

/* eslint-disable react/self-closing-comp */

/* eslint-disable no-param-reassign */

/* eslint-disable @typescript-eslint/no-redeclare */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-var */

/* eslint-disable consistent-return */

/* eslint-disable no-redeclare */




function Normal(props) {
  var _props$curArt = props.curArt,
      curArt = _props$curArt === void 0 ? {} : _props$curArt; // 过滤富文本的样式

  var replaceImgStyle = function replaceImgStyle(text) {
    if (!text) return;
    return text.replace(/<[^>]+>/gi, function (tag) {
      var reg = /style\s*?=\s*?([‘"])[\s\S]*?\1/;
      var tag = tag.replace(reg, '');

      if (!(tag.indexOf('<img') > -1)) {
        tag = tag.replace(/width/gi, '');
        tag = tag.replace(/height/gi, '');
      }

      return tag;
    });
  };

  var textHtml = {
    __html: replaceImgStyle(curArt.content) || ''
  };
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: index_modulemodules.normal
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: index_modulemodules.title
  }, curArt.title), /*#__PURE__*/react_default.a.createElement("p", {
    className: index_modulemodules.source
  }, curArt.pubtime && /*#__PURE__*/react_default.a.createElement("span", null, utils["c" /* ExTime */].formatDate(curArt.pubtime)), curArt.sourceName.length > 5 && /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("span", null, " \u6765\u6E90\uFF1A", curArt.sourceName || curArt.sourceName)), /*#__PURE__*/react_default.a.createElement("div", {
    className: index_modulemodules['content-detail'],
    dangerouslySetInnerHTML: textHtml
  }));
}

/* harmony default export */ var ButtonMobilePreview_Normal = (Normal);
// EXTERNAL MODULE: ./node_modules/swiper/esm/components/core/core-class.js + 70 modules
var core_class = __webpack_require__("bTu8");

// EXTERNAL MODULE: ./node_modules/swiper/swiper.less
var swiper = __webpack_require__("J/SH");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/Image/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Image_index_modulemodules = ({"container":"container___3QQbQ","slider":"slider___3swnj","content-text":"content-text___2j2Ou","text":"text___2HH4O","number":"number___3Vpd8"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/Image/index.js


/* eslint-disable react/no-array-index-key */

/* eslint-disable react/self-closing-comp */

/* eslint-disable react/jsx-curly-brace-presence */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-new */

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable no-unused-vars */






function ImagePage(props) {
  var _props$curArt = props.curArt,
      mediaInfo = _props$curArt.mediaInfo,
      title = _props$curArt.title;

  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      showImgDesc = _useState2[0],
      setShowImgDesc = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      images = _useState4[0],
      setImages = _useState4[1];

  var initSwiper = function initSwiper() {
    new core_class["a" /* default */]('.swiper-container', {
      direction: 'horizontal',
      // 垂直切换选项
      loop: true // 循环模式选项

    });
  };

  Object(react["useEffect"])(function () {
    initSwiper();
  }, []);
  Object(react["useEffect"])(function () {
    console.log('mediaInfo.images', mediaInfo.images);
    setImages(mediaInfo.images);
    initSwiper();
  }, [JSON.stringify(mediaInfo)]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('swiper-container', Image_index_modulemodules.container)
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('swiper-wrapper'),
    onClick: function onClick() {
      setShowImgDesc(!showImgDesc);
    }
  }, images.length && images.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      key: index,
      className: classnames_default()('swiper-slide', Image_index_modulemodules.slider)
    }, /*#__PURE__*/react_default.a.createElement("img", {
      src: item.src
    }));
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: Image_index_modulemodules['content-text']
  }, showImgDesc && /*#__PURE__*/react_default.a.createElement("p", {
    className: Image_index_modulemodules.text
  }, title), !showImgDesc && /*#__PURE__*/react_default.a.createElement("p", {
    className: Image_index_modulemodules.number
  }, "1/5")), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('swiper-pagination')
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('swiper-button-prev')
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('swiper-button-next')
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('swiper-scrollbar')
  }));
}

/* harmony default export */ var Image = (ImagePage);
// EXTERNAL MODULE: ./src/components/MediaComponents/index.js + 4 modules
var MediaComponents = __webpack_require__("PWmT");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/Video/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Video_index_modulemodules = ({"normal":"normal___2aeKp","title":"title___2f7-z","content":"content___2EYQV","source":"source___3itpU","content-text":"content-text___3GR1n","content-detail":"content-detail___WDUVV"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/Video/index.js
/* eslint-disable func-names */

/* eslint-disable react/no-danger */

/* eslint-disable no-param-reassign */

/* eslint-disable @typescript-eslint/no-redeclare */

/* eslint-disable react/self-closing-comp */

/* eslint-disable no-var */

/* eslint-disable consistent-return */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-redeclare */





function Video(props) {
  var _props$curArt = props.curArt,
      curArt = _props$curArt === void 0 ? {} : _props$curArt;
  var videoProps = {
    className: Video_index_modulemodules.video_container,
    source: curArt.mediaInfo && curArt.mediaInfo.videos[1].src,
    poster: curArt.mediaInfo && curArt.mediaInfo.images || [],
    duration: curArt.mediaInfo && curArt.mediaInfo.videos[1].duration
  }; // 过滤富文本的样式

  var replaceImgStyle = function replaceImgStyle(text) {
    if (!text) return;
    return text.replace(/<[^>]+>/gi, function (tag) {
      var reg = /style\s*?=\s*?([‘"])[\s\S]*?\1/;
      var tag = tag.replace(reg, '');

      if (!(tag.indexOf('<img') > -1)) {
        tag = tag.replace(/width/gi, '');
        tag = tag.replace(/height/gi, '');
      }

      return tag;
    });
  };

  var textHtml = {
    __html: replaceImgStyle(curArt.content) || ''
  };
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(MediaComponents["b" /* VideoPlayer */], videoProps), /*#__PURE__*/react_default.a.createElement("div", {
    className: Video_index_modulemodules.normal
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: Video_index_modulemodules.title
  }, curArt.title), /*#__PURE__*/react_default.a.createElement("p", {
    className: Video_index_modulemodules.source
  }, curArt.createtime && /*#__PURE__*/react_default.a.createElement("span", null, utils["c" /* ExTime */].formatDate(curArt.createtime)), curArt.origin && curArt.origin.length > 5 && /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("span", null, " \u6765\u6E90\uFF1A", curArt.origin || curArt.originName)), /*#__PURE__*/react_default.a.createElement("div", {
    className: Video_index_modulemodules['content-detail'],
    dangerouslySetInnerHTML: textHtml
  })));
}

/* harmony default export */ var ButtonMobilePreview_Video = (Video);
// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var ButtonMobilePreview_index_modulemodules = ({"btn":"btn___2h0zq","container":"container___2ymtD","bg_box":"bg_box___3Umbr","dark":"dark___1xhEX","mobile":"mobile___1kb1D","body-box":"body-box___2zl5l"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/components/ButtonMobilePreview/index.js








/* eslint-disable prefer-template */

/* eslint-disable react/self-closing-comp */

/* eslint-disable import/no-unresolved */



 // import Audio from './Audio';




var iphoneBg = __webpack_require__(/*! ./iPhone_bg.svg */ "V0Yb");

function ButtonMobilePreview(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var title = props.title,
      _props$curArt = props.curArt,
      curArt = _props$curArt === void 0 ? {} : _props$curArt,
      newsDataType = props.newsDataType,
      rest = Object(objectWithoutProperties["a" /* default */])(props, ["title", "curArt", "newsDataType"]);

  var mobileProps = Object(objectSpread2["a" /* default */])({
    title: title,
    visible: visible,
    centered: true,
    destroyOnClose: true,
    onCancel: function onCancel() {
      setVisible(!visible);
    }
  }, rest);

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    className: ButtonMobilePreview_index_modulemodules.btn,
    type: "primary",
    onClick: function onClick() {
      setVisible(!visible);
    }
  }, title), /*#__PURE__*/react_default.a.createElement(modal["a" /* default */], mobileProps, /*#__PURE__*/react_default.a.createElement("div", {
    className: ButtonMobilePreview_index_modulemodules.container
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(ButtonMobilePreview_index_modulemodules.bg_box, newsDataType === 'ATLAS' ? ButtonMobilePreview_index_modulemodules.dark : '')
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: ButtonMobilePreview_index_modulemodules.mobile,
    style: {
      backgroundImage: 'url(' + iphoneBg + ')'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: ButtonMobilePreview_index_modulemodules['body-box']
  }, (newsDataType === 'NEWS' || newsDataType === 'TEXT') && /*#__PURE__*/react_default.a.createElement(ButtonMobilePreview_Normal, {
    curArt: curArt
  }), newsDataType === 'ATLAS' && /*#__PURE__*/react_default.a.createElement(Image, {
    curArt: curArt
  }), newsDataType === 'VIDEO' && /*#__PURE__*/react_default.a.createElement(ButtonMobilePreview_Video, {
    curArt: curArt
  }))))));
}

/* harmony default export */ var components_ButtonMobilePreview = (ButtonMobilePreview);
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/FormCoverImage.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var FormCoverImage_modulemodules = ({"content":"content___UMpkx","button_list":"button_list___1YCmi","images_list":"images_list___3tv4Y","item":"item___1TfRE","upload_list":"upload_list___2uSqM","button_header":"button_header___3XSS3","footer":"footer___3_U2S"});
// EXTERNAL MODULE: ./node_modules/antd/es/slider/style/index.js + 1 modules
var slider_style = __webpack_require__("8dk+");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/FormCoverImage.js



















/* eslint-disable react/no-array-index-key */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */

/* eslint-disable no-param-reassign */

/* eslint-disable prefer-const */

/* eslint-disable no-func-assign */

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable no-unused-vars */











function FormCoverImage(props) {
  var pForm = props.pForm,
      _props$CDetails = props.CDetails,
      curArt = _props$CDetails.curArt,
      newsDataType = _props$CDetails.newsDataType; // 对象转数组方法

  var objToArr = function objToArr(arrObj) {
    var arr = [];
    if (lodash_default.a.isEmpty(arrObj)) return [];
    Object.keys(arrObj).map(function (key) {
      arrObj[key].uid = key;
      arrObj[key].url = arrObj[key].originalUrl || arrObj[key].src || arrObj[key].imageKey;
      arr.push(arrObj[key]);
    });
    return arr;
  };

  var _useState = Object(react["useState"])([]),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      imgList = _useState2[0],
      setImgList = _useState2[1]; // 正文全图原始数据


  var contentImages = curArt.mediaInfo && objToArr(curArt.mediaInfo.images) || [];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      coverPictureVisible = _useState4[0],
      setCoverPictureVisible = _useState4[1];

  var _useState5 = Object(react["useState"])(0),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      tabKey = _useState6[0],
      setTabKey = _useState6[1]; // 单图和三图的切换


  var _useState7 = Object(react["useState"])(3),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      imagesValue = _useState8[0],
      setImagesValue = _useState8[1]; // 用来共享组件内的封面图数据


  var _useState9 = Object(react["useState"])([]),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      fileList = _useState10[0],
      setFileList = _useState10[1]; // 封面图


  var _useState11 = Object(react["useState"])(contentImages || []),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
      contentList = _useState12[0],
      setContentList = _useState12[1]; // 预览图片状态和图片地址


  var _useState13 = Object(react["useState"])(false),
      _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
      previewVisible = _useState14[0],
      setPreviewVisible = _useState14[1];

  var _useState15 = Object(react["useState"])('cover'),
      _useState16 = Object(slicedToArray["a" /* default */])(_useState15, 2),
      imageSourceType = _useState16[0],
      setImageSourceType = _useState16[1];

  var _useState17 = Object(react["useState"])(''),
      _useState18 = Object(slicedToArray["a" /* default */])(_useState17, 2),
      previewImage = _useState18[0],
      setPreviewImage = _useState18[1]; // 设置封面图


  Object(react["useEffect"])(function () {
    // 设置封面图字段初始值
    pForm.setFieldsValue({
      covers: objToArr(curArt.covers)
    });
    setFileList(objToArr(curArt.covers));
    setImgList(objToArr(curArt.covers));
  }, [curArt.covers]); // 设置正文全图

  Object(react["useEffect"])(function () {
    if (curArt.mediaInfo) {
      setContentList(objToArr(curArt.mediaInfo.images));
    } // 没有封面图是时，取正文图作为封面图


    if (lodash_default.a.isEmpty(curArt.covers) && curArt.mediaInfo) {
      pForm.setFieldsValue({
        covers: objToArr(curArt.mediaInfo.images).slice(0, 3)
      });
      setFileList(objToArr(curArt.mediaInfo.images).slice(0, 3));
      setImgList(objToArr(curArt.mediaInfo.images).slice(0, 3));
    }
  }, [curArt.mediaInfo]); // 三图多图切换

  var setCoverImagesNumber = function setCoverImagesNumber(number) {
    setImagesValue(number); // if (_.isEmpty(fileList)) return;

    if (number === 1) {
      return setFileList(imgList[0] ? [imgList[0]] : []);
    }

    setFileList(Object(toConsumableArray["a" /* default */])(imgList));
  }; // 上传文件校验


  var beforeUpload = function beforeUpload(file) {
    // console.log(file);
    if (!constants["b" /* acceptType */]) return true;
    var reg = new RegExp(".(".concat(constants["b" /* acceptType */].join('|'), ")$"), 'i');

    if (reg.test(file.type)) {
      // console.log(file.size / 1024 / 1024);
      if (!constants["i" /* maxFileSize */]) return true;

      if (file.size / 1024 / 1024 <= constants["i" /* maxFileSize */]) {
        return true;
      }

      message["b" /* default */].error("\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7".concat(constants["i" /* maxFileSize */], "M"));

      return false;
    }

    message["b" /* default */].error("\u6587\u4EF6\u7C7B\u578B\u53EA\u652F\u6301".concat(constants["b" /* acceptType */].join(','), "\u7C7B\u578B"));

    return false;
  }; // 修改图片


  var onChange = function onChange(info) {
    var _info$file$status = info.file.status,
        status = _info$file$status === void 0 ? '' : _info$file$status;

    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
      setFileList(Object(toConsumableArray["a" /* default */])(info.fileList));
    }

    if (status === 'done') {
      setFileList([].concat(Object(toConsumableArray["a" /* default */])(fileList), [{
        uid: new Date(),
        url: info.file.response.data.fileUrl,
        imageKey: info.file.response.data.fileUrl,
        originalUrl: info.file.response.data.fileUrl,
        width: info.file.response.data.width,
        height: info.file.response.data.height
      }]));
    } else if (status === 'error') {
      message["b" /* default */].error("".concat(info.file.name, " file upload failed."));
    }
  }; // 图片预览


  var onPreview = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(file) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (file.url) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setPreviewVisible(true);
              setPreviewImage(file.url);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onPreview(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // 预览效果


  var MobilePreviewProps = {
    title: '预览效果',
    footer: null,
    width: 420,
    curArt: curArt,
    // 当前文章
    newsDataType: newsDataType
  };
  return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    name: "covers",
    noStyle: true
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: FormCoverImage_modulemodules.content
  }, /*#__PURE__*/react_default.a.createElement("img", {
    width: 240,
    height: 180,
    src: !lodash_default.a.isEmpty(fileList) && fileList[0] && fileList[0].originalUrl || !lodash_default.a.isEmpty(fileList) && fileList[0] && fileList[0].src || constants["g" /* errorImg */]
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: FormCoverImage_modulemodules.button_list
  }, /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    disabled: lodash_default.a.isEmpty(fileList) || !fileList[2],
    onClick: function onClick() {
      setCoverPictureVisible(true);
      setTabKey(0); // setFileList(list || []);

      setImageSourceType('cover');
    }
  }, "\u4E09\u56FE"), /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    onClick: function onClick() {
      setCoverPictureVisible(true);
      setTabKey(1); // setFileList(list || []);
    }
  }, "\u4FEE\u6539\u5C01\u9762\u56FE"), /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    onClick: function onClick() {
      setCoverPictureVisible(true);
      setTabKey(2);
      setImageSourceType('contentImages');
    }
  }, "\u6B63\u6587\u5168\u56FE"), /*#__PURE__*/react_default.a.createElement(components_ButtonMobilePreview, MobilePreviewProps))), /*#__PURE__*/react_default.a.createElement(modal["a" /* default */], {
    title: tabKey === 2 ? '正文全图' : '封面图',
    centered: true,
    destroyOnClose: true,
    visible: coverPictureVisible,
    onCancel: function onCancel() {
      setCoverPictureVisible(false);
      setImageSourceType('cover');

      if (tabKey !== 2) {
        setFileList(Object(toConsumableArray["a" /* default */])(fileList));
      }
    },
    footer: null
  }, (tabKey === 0 || tabKey === 2) && /*#__PURE__*/react_default.a.createElement("div", {
    className: FormCoverImage_modulemodules.images_list
  }, imageSourceType === 'cover' && !lodash_default.a.isEmpty(fileList) ? fileList.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(es_image["a" /* default */], {
      className: FormCoverImage_modulemodules.item,
      key: index,
      width: 120,
      height: 90,
      alt: "\u5C01\u9762\u56FE",
      src: item.originalUrl,
      fallback: constants["g" /* errorImg */]
    });
  }) : imageSourceType === 'cover' && /*#__PURE__*/react_default.a.createElement("p", null, "\u6682\u65E0\u5C01\u9762\u56FE"), imageSourceType === 'contentImages' && !lodash_default.a.isEmpty(contentList) ? contentList.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(es_image["a" /* default */], {
      className: FormCoverImage_modulemodules.item,
      key: index,
      width: 120,
      height: 90,
      alt: "\u5C01\u9762\u56FE",
      src: item.src,
      fallback: constants["g" /* errorImg */]
    });
  }) : imageSourceType === 'contentImages' && /*#__PURE__*/react_default.a.createElement("p", null, "\u6682\u65E0\u5185\u5BB9\u56FE\u7247")), tabKey === 1 && /*#__PURE__*/react_default.a.createElement("div", {
    className: FormCoverImage_modulemodules.upload_list
  }, /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */].Group, {
    className: FormCoverImage_modulemodules.button_header,
    name: "image-number",
    defaultValue: imagesValue,
    onChange: function onChange(e) {
      return setCoverImagesNumber(e.target.value);
    }
  }, /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */], {
    value: 1
  }, "\u5355\u56FE"), /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */], {
    value: 3
  }, "\u4E09\u56FE")), /*#__PURE__*/react_default.a.createElement(antd_img_crop_esm["a" /* default */], {
    rotate: true
  }, /*#__PURE__*/react_default.a.createElement(upload["a" /* default */], {
    action: constants["a" /* UPLOAD_FILE_URL */],
    listType: "picture-card",
    fileList: objToArr(fileList) || [],
    beforeUpload: beforeUpload,
    onChange: onChange,
    onPreview: onPreview
  }, !lodash_default.a.isEmpty(fileList) && objToArr(fileList).length >= imagesValue ? null : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(PlusOutlined["a" /* default */], null), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Upload"))))), /*#__PURE__*/react_default.a.createElement(modal["a" /* default */], {
    visible: previewVisible,
    title: "\u56FE\u7247\u9884\u89C8",
    footer: null,
    onCancel: function onCancel() {
      return setPreviewVisible(false);
    }
  }, /*#__PURE__*/react_default.a.createElement("img", {
    alt: "example",
    style: {
      width: '100%'
    },
    src: previewImage
  })), tabKey !== 2 && /*#__PURE__*/react_default.a.createElement("div", {
    className: FormCoverImage_modulemodules.footer
  }, tabKey === 0 ? /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    onClick: function onClick() {
      return setTabKey(1);
    }
  }, "\u4FEE\u6539\u5C01\u9762\u56FE") : /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    onClick: function onClick() {
      pForm.setFieldsValue({
        covers: fileList
      });
      setCoverPictureVisible(false);
    }
  }, "\u786E\u5B9A"), /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    onClick: function onClick() {
      return setCoverPictureVisible(false);
    }
  }, "\u5173\u95ED"))));
}

function mapStateToProps(_ref2) {
  var CDetails = _ref2.CDetails;
  return {
    CDetails: CDetails
  };
}

/* harmony default export */ var Operate_FormCoverImage = (Object(umiExports["c" /* connect */])(mapStateToProps)(FormCoverImage));
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__("/MKj");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/FormExtraInfo.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var FormExtraInfo_modulemodules = ({"container":"container____cJ29"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/FormExtraInfo.js
/* eslint-disable @typescript-eslint/dot-notation */





function FormExtraInfo(props) {
  // console.log(props)
  var className = props.className,
      curArt = props.CDetails.curArt;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(className, FormExtraInfo_modulemodules['container'])
  }, /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("span", null, "\u6293\u53D6\u6765\u6E90ID: ", curArt.sourceName || ''), /*#__PURE__*/react_default.a.createElement("span", null, "\u6293\u53D6\u6765\u6E90\uFF1A ", curArt.sourceId || '')), /*#__PURE__*/react_default.a.createElement("p", null, "\u539F\u6587\u94FE\u63A5\uFF1A ", /*#__PURE__*/react_default.a.createElement("a", {
    href: curArt.originUrl || ''
  }, curArt.originUrl || '')), /*#__PURE__*/react_default.a.createElement("p", null, "\u6458\u8981\uFF1A ", curArt.summary || ''));
}

function FormExtraInfo_mapStateToProps(_ref) {
  var CDetails = _ref.CDetails;
  return {
    CDetails: CDetails
  };
}

/* harmony default export */ var Operate_FormExtraInfo = (Object(es["c" /* connect */])(FormExtraInfo_mapStateToProps)(FormExtraInfo));
// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js
var row_style = __webpack_require__("14J3");

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("BMrR");

// EXTERNAL MODULE: ./node_modules/antd/es/col/style/index.js
var col_style = __webpack_require__("jCWc");

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__("kPKH");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js + 1 modules
var input_style = __webpack_require__("5NDa");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__("5rEg");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js + 1 modules
var checkbox_style = __webpack_require__("sRBo");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__("kaz8");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/antd/es/tag/style/index.js + 1 modules
var tag_style = __webpack_require__("+BJd");

// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var es_tag = __webpack_require__("mr32");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js + 1 modules
var select_style = __webpack_require__("OaEy");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 25 modules
var es_select = __webpack_require__("2fM7");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/ThreeLevelClassification.js








/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-unused-vars */



var Option = es_select["a" /* default */].Option;

function multilevelCategories(props) {
  var dispatch = props.dispatch,
      type = props.type,
      _props$pForm = props.pForm,
      resetFields = _props$pForm.resetFields,
      setFieldsValue = _props$pForm.setFieldsValue,
      getFieldsValue = _props$pForm.getFieldsValue,
      _props$Global = props.Global,
      firstCategory = _props$Global.firstCategory,
      secondCategory = _props$Global.secondCategory,
      thirdCategory = _props$Global.thirdCategory; // console.log('------------------',type)

  var selectProps = {
    allowClear: true,
    style: {
      width: '33%'
    }
  };
  Object(react["useEffect"])(function () {
    if (getFieldsValue().categoryFirst) {
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: getFieldsValue().categoryFirst,
          type: type
        }
      });
    }
  }, [getFieldsValue().categoryFirst]);
  Object(react["useEffect"])(function () {
    if (getFieldsValue().categorySecond) {
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id: getFieldsValue().categorySecond,
          type: type
        }
      });
    }
  }, [getFieldsValue().categorySecond]);

  var selectCategoryFun = function selectCategoryFun(id, name) {
    if (name === 'firstCategoryId') {
      resetFields(['categorySecond', 'categoryThird']);
      setFieldsValue({
        categorySecond: null,
        categoryThird: null
      });
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: id || 0,
          type: type
        }
      });
    } else {
      resetFields(['categoryThird']);
      setFieldsValue({
        categoryThird: null
      });
      if (!id) return;
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id: id,
          type: type
        }
      });
    }
  };

  var selectChange = function selectChange(e, id) {
    selectCategoryFun(e, id);
  };

  return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u5206\u7C7B",
    shouldUpdate: true
  }, /*#__PURE__*/react_default.a.createElement(input["a" /* default */].Group, {
    compact: true
  }, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "categoryFirst",
    name: "categoryFirst",
    noStyle: true
  }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: "\u4E00\u7EA7\u5206\u7C7B"
  }, selectProps, {
    onChange: function onChange(e) {
      return selectChange(e, 'firstCategoryId');
    }
  }), !lodash_default.a.isEmpty(firstCategory) && firstCategory.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Option, {
      key: item.code,
      value: item.code.toString()
    }, item.name);
  }))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "categorySecond",
    name: "categorySecond",
    noStyle: true
  }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: "\u4E8C\u7EA7\u5206\u7C7B"
  }, selectProps, {
    onChange: function onChange(e) {
      return selectChange(e, 'secondCategoryId');
    }
  }), !lodash_default.a.isEmpty(secondCategory) && secondCategory.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Option, {
      key: item.code,
      value: item.code.toString()
    }, item.name);
  }))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "categoryThird",
    name: "categoryThird",
    noStyle: true
  }, /*#__PURE__*/react_default.a.createElement(es_select["a" /* default */], Object(esm_extends["a" /* default */])({
    placeholder: "\u4E09\u7EA7\u5206\u7C7B"
  }, selectProps, {
    onChange: function onChange(e) {
      return selectChange(e, 'thirdCategoryId');
    }
  }), !lodash_default.a.isEmpty(thirdCategory) && thirdCategory.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Option, {
      key: item.code,
      value: item.code.toString()
    }, item.name);
  })))));
}

function ThreeLevelClassification_mapStateToProps(_ref) {
  var Global = _ref.Global,
      CDetails = _ref.CDetails;
  return {
    Global: Global,
    CDetails: CDetails
  };
}

/* harmony default export */ var ThreeLevelClassification = (Object(umiExports["c" /* connect */])(ThreeLevelClassification_mapStateToProps)(multilevelCategories));
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/FormAction.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var FormAction_modulemodules = ({"container":"container___1GeKM","category":"category___1yMWt","more-select":"more-select___3GZtb","tags_input":"tags_input___DjwtY","p_text":"p_text___1u_Mj"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/FormAction.js























/* eslint-disable import/order */

/* eslint-disable react/jsx-curly-brace-presence */

/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable no-return-assign */

/* eslint-disable no-param-reassign */

/* eslint-disable react/no-array-index-key */

/* eslint-disable consistent-return */

/* eslint-disable object-shorthand */

/* eslint-disable no-nested-ternary */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-func-assign */

/* eslint-disable no-control-regex */








var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 14
  }
};

function FormAction(props) {
  var _props$name = props.name,
      name = _props$name === void 0 ? 'FormAction' : _props$name,
      selfForm = props.pForm,
      className = props.className,
      _props$CDetails = props.CDetails,
      curArt = _props$CDetails.curArt,
      newsDataType = _props$CDetails.newsDataType,
      auditState = _props$CDetails.auditState,
      reason = _props$CDetails.reason,
      forbiddenWordList = _props$CDetails.forbiddenWordList,
      sensitiveWordList = _props$CDetails.sensitiveWordList,
      hotWord = _props$CDetails.hotWord,
      personalWord = _props$CDetails.personalWord; // console.log('curArt',curArt)

  Object(react["useEffect"])(function () {
    selfForm.setFieldsValue({
      isDup: curArt.isDup || 0,
      hotValue: [curArt.hotValue] || false,
      bigEvent: [curArt.bigEvent] || false,
      tags: curArt.tags || [],
      auditState: auditState !== 'PASS' && auditState !== 'REJECT' ? null : auditState,
      reason: reason || [],
      categoryFirst: curArt.categoryFirst || null,
      categorySecond: curArt.categorySecond || null,
      categoryThird: curArt.categoryThird || null
    });
  }, [JSON.stringify(curArt)]);

  var filterTags = function filterTags(list) {
    if (lodash_default.a.isEmpty(list)) return [];
    return list.map(function (item) {
      return item = {
        type: 0,
        text: item
      };
    });
  };

  var saveInputRef = Object(react["useRef"])(null); // 存储标签

  var _useState = Object(react["useState"])([]),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      inputVisible = _useState4[0],
      setInputVisible = _useState4[1];

  Object(react["useEffect"])(function () {
    setTags(filterTags(curArt.tags));
  }, [curArt.tags]);
  var formItemLayout = {
    labelAlign: 'left',
    labelCol: {
      span: 3
    },
    wrapperCol: {
      span: 21
    }
  }; // 删除标签tags

  var deleteTagClose = function deleteTagClose(removedTag, index) {
    var tagsList = lodash_default.a.cloneDeep(tags);

    tagsList.splice(index, 1);
    setTags(tagsList);
    selfForm.setFieldsValue({
      tags: Object(toConsumableArray["a" /* default */])(tagsList)
    });
  }; // 保存标签


  var handleInputConfirm = function handleInputConfirm() {
    if (tags.length >= 10) {
      return message["b" /* default */].error('最多支持10个标签');
    }

    var inputValue = saveInputRef.current.state.value;
    if (!inputValue) return false;

    if (calcStrLength(inputValue) > 50) {
      return message["b" /* default */].error('您输入的文字过长，最多可输入50个字');
    } // 判断是否存在该表单项


    var isExist = tags.find(function (v) {
      return v.text === inputValue;
    });

    if (isExist) {
      return message["b" /* default */].error('该标签已存在，请不要重复创建');
    }

    setTags([].concat(Object(toConsumableArray["a" /* default */])(tags), [{
      text: inputValue
    }])); // 设置表单项值

    selfForm.setFieldsValue({
      tags: [].concat(Object(toConsumableArray["a" /* default */])(tags), [{
        type: 0,
        text: inputValue
      }])
    }); // 关闭输入框

    setInputVisible(false); // dispatch({
    //   type: 'CDetails/getCheckoutTags',
    //   payload: {
    //     name: inputValue,
    //   },
    //   callback: (data) => {
    //     setTags([...tags, { type: data ? 1 : 0, text: inputValue }]);
    //     // 设置表单项值
    //     selfForm.setFieldsValue({ tags: [...tags, { type: data ? 1 : 0, text: inputValue }] });
    //     // 关闭输入框
    //     setInputVisible(false);
    //   },
    // });
  }; // 取消


  var handleInputCancel = function handleInputCancel() {
    setInputVisible(false);
  }; // 标签文字长度校验


  var calcStrLength = function calcStrLength(value) {
    return Math.ceil(calcByteLength(value) / 2);
  };

  var calcByteLength = function calcByteLength(s) {
    return s.replace(/[^\x00-\xff]/g, 'aa').length;
  };

  var formProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
    name: name,
    form: selfForm
  }, formItemLayout), {}, {
    className: classnames_default()(className, FormAction_modulemodules.container)
  });

  return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */], Object(esm_extends["a" /* default */])({}, formProps, {
    from: selfForm
  }), /*#__PURE__*/react_default.a.createElement(ThreeLevelClassification, {
    pForm: selfForm,
    type: newsDataType
  }), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u8FDD\u7981\u8BCD"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: FormAction_modulemodules.p_text
  }, !lodash_default.a.isEmpty(forbiddenWordList) ? forbiddenWordList.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(es_tag["a" /* default */], {
      key: index,
      color: "red"
    }, item);
  }) : /*#__PURE__*/react_default.a.createElement("span", null, "\u6682\u65E0"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u654F\u611F\u8BCD"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: FormAction_modulemodules.p_text
  }, !lodash_default.a.isEmpty(sensitiveWordList) ? sensitiveWordList.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(es_tag["a" /* default */], {
      key: index,
      color: "volcano"
    }, item);
  }) : /*#__PURE__*/react_default.a.createElement("span", null, "\u6682\u65E0"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u70ED\u8BCD"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: FormAction_modulemodules.p_text
  }, !lodash_default.a.isEmpty(hotWord) ? hotWord.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(es_tag["a" /* default */], {
      key: index,
      color: "blue"
    }, item);
  }) : /*#__PURE__*/react_default.a.createElement("span", null, "\u6682\u65E0"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u4EBA\u7269\u8BCD"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: FormAction_modulemodules.p_text
  }, !lodash_default.a.isEmpty(personalWord) ? personalWord.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(es_tag["a" /* default */], {
      key: index,
      color: "green"
    }, item);
  }) : /*#__PURE__*/react_default.a.createElement("span", null, "\u6682\u65E0"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, Object(esm_extends["a" /* default */])({}, layout, {
    label: "\u662F\u5426\u53EF\u91CD\u590D\u5206\u53D1",
    name: "isDup"
  }), /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */].Group, null, /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */], {
    value: 0
  }, "\u662F"), /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */], {
    value: 1
  }, "\u5426"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, null, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    noStyle: true,
    name: "hotValue"
  }, /*#__PURE__*/react_default.a.createElement(es_checkbox["a" /* default */].Group, null, /*#__PURE__*/react_default.a.createElement(es_checkbox["a" /* default */], {
    value: '1'
  }, "\u70ED\u70B9"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    noStyle: true,
    name: "bigEvent"
  }, /*#__PURE__*/react_default.a.createElement(es_checkbox["a" /* default */].Group, null, /*#__PURE__*/react_default.a.createElement(es_checkbox["a" /* default */], {
    value: '1'
  }, "\u5927\u4E8B\u4EF6")))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u6807\u7B7E",
    name: "tags",
    help: '最多支持10个标签，单个50个字符'
  }, /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, tags.map(function (tag, index) {
    var tagElem = /*#__PURE__*/react_default.a.createElement(es_tag["a" /* default */], {
      key: index + tag.text,
      closable: true,
      color: tag.type === 1 ? 'green' : '',
      onClose: function onClose() {
        return deleteTagClose(tag, index);
      }
    }, tag.text);
    return tagElem;
  }), inputVisible && /*#__PURE__*/react_default.a.createElement("div", {
    className: FormAction_modulemodules.tags_input
  }, /*#__PURE__*/react_default.a.createElement(input["a" /* default */], {
    ref: saveInputRef,
    type: "text",
    size: "small",
    onPressEnter: function onPressEnter(e) {
      e.preventDefault();
    }
  }), /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    size: "small",
    type: "primary",
    onClick: function onClick() {
      return handleInputConfirm();
    }
  }, "\u4FDD\u5B58"), "\xA0\xA0\xA0\xA0", /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    size: "small",
    onClick: function onClick() {
      return handleInputCancel();
    }
  }, "\u53D6\u6D88")), !inputVisible && /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    size: "small",
    onClick: function onClick() {
      setInputVisible(true); // saveInputRef.current.focus();
    },
    style: {
      margin: '5px'
    },
    icon: /*#__PURE__*/react_default.a.createElement(PlusOutlined["a" /* default */], null)
  }, "\u65B0\u589E"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    label: "\u5BA1\u6838\u7ED3\u679C",
    labelCol: {
      span: 6
    },
    name: "auditState",
    rules: [{
      required: true,
      message: "\u9009\u62E9\u5BA1\u6838\u7ED3\u679C"
    }]
  }, /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */].Group, null, /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */], {
    value: "PASS"
  }, "\u5BA1\u6838\u901A\u8FC7"), /*#__PURE__*/react_default.a.createElement(es_radio["a" /* default */], {
    value: "REJECT"
  }, "\u5BA1\u6838\u672A\u901A\u8FC7"))), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    shouldUpdate: function shouldUpdate(prevValues, curValues) {
      return prevValues.auditState !== curValues.auditState;
    }
  }, function (_ref) {
    var getFieldValue = _ref.getFieldValue;
    var result = getFieldValue('auditState');
    if (!result) return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);

    var getReasonTpl = function getReasonTpl(rules, data) {
      return /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
        wrapperCol: {
          xs: {
            span: 20,
            offset: 3
          },
          sm: {
            span: 20,
            offset: 3
          }
        },
        name: "reason",
        rules: rules
      }, /*#__PURE__*/react_default.a.createElement(es_checkbox["a" /* default */].Group, null, /*#__PURE__*/react_default.a.createElement(row["a" /* default */], {
        gutter: 24
      }, data.map(function (item, index) {
        return /*#__PURE__*/react_default.a.createElement(col["a" /* default */], {
          span: 8,
          key: index + item
        }, /*#__PURE__*/react_default.a.createElement(es_checkbox["a" /* default */], {
          value: item
        }, item));
      }))));
    };

    return result === 'PASS' ? getReasonTpl(null, constants["l" /* passReason */]) : result === 'REJECT' ? getReasonTpl([{
      required: true,
      message: "\u9009\u62E9\u5BA1\u6838\u672A\u901A\u8FC7\u539F\u56E0"
    }], constants["o" /* rejectReason */]) : null;
  }));
}

function FormAction_mapStateToProps(_ref2) {
  var Global = _ref2.Global,
      CDetails = _ref2.CDetails;
  return {
    Global: Global,
    CDetails: CDetails
  };
}

/* harmony default export */ var Operate_FormAction = (Object(umiExports["c" /* connect */])(FormAction_mapStateToProps)(FormAction));
// EXTERNAL MODULE: ./src/components/WrapAuth/index.js
var WrapAuth = __webpack_require__("yAXW");

// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Operate_index_modulemodules = ({"operate_container":"operate_container___3-en0","button_group":"button_group___o53nh"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Operate/index.js












/* eslint-disable import/order */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-console */

/* eslint-disable consistent-return */

/* eslint-disable prefer-destructuring */

/* eslint-disable no-param-reassign */

/* eslint-disable react/self-closing-comp */

/* eslint-disable @typescript-eslint/no-unused-vars */










var Operate_confirm = modal["a" /* default */].confirm;

function Operate(props) {
  var className = props.className,
      CDetails = props.CDetails,
      dispatch = props.dispatch;
  var curArt = CDetails.curArt,
      isEdit = CDetails.isEdit,
      category = CDetails.category,
      query = CDetails.query,
      queueContentData = CDetails.queueContentData,
      queueContentId = CDetails.queueContentId; // 提交审核按钮状态

  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      saveBtnLoading = _useState2[0],
      setSaveBtnLoading = _useState2[1]; // 跳过按钮状态


  var _useState3 = Object(react["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      skipBtnLoading = _useState4[0],
      setSkipBtnLoading = _useState4[1]; // 退出按钮状态


  var _useState5 = Object(react["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      exitBtnLoading = _useState6[0],
      setExitBtnLoading = _useState6[1];

  var _Form$useForm = es_form["a" /* default */].useForm(),
      _Form$useForm2 = Object(slicedToArray["a" /* default */])(_Form$useForm, 1),
      selfForm = _Form$useForm2[0];

  var formProps = {
    form: selfForm,
    className: Operate_index_modulemodules.operate_container
  }; // 审核操作

  var auditSubmit = function auditSubmit() {
    // 判断左侧是否处于编辑状态
    if (isEdit) return message["b" /* default */].error('左侧内容区域正处于编辑状态，请保存，或取取消编辑');
    selfForm.validateFields().then(function (values) {
      console.log('values', values); // 处理封面图

      if (lodash_default.a.isEmpty(values.covers)) {
        values.covers = {};
      } else {
        values.covers = Object.fromEntries(values.covers.map(function (item, index) {
          return [index, item];
        }));
      }

      var copyArt = lodash_default.a.cloneDeep(curArt); // 处理大事件和热点


      values.hotValue = values.hotValue ? values.hotValue[0] : 0;
      values.bigEvent = values.bigEvent ? values.bigEvent[0] : 0;

      var auditState = values.auditState,
          reason = values.reason,
          rest = Object(objectWithoutProperties["a" /* default */])(values, ["auditState", "reason"]);

      dispatch({
        type: 'CDetails/getAuditSave',
        payload: {
          typename: 'news',
          data: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, queueContentData), {}, {
            feedMessage: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, copyArt), rest),
            auditState: auditState,
            reason: reason
          })
        },
        callback: function callback(data) {
          selfForm.resetFields();
          setSaveBtnLoading(false);

          if (!data) {
            umiExports["f" /* history */].goBack();
          }
        }
      });
    }).catch(function (errorInfo) {
      console.log('errorInfo', errorInfo);
    });
  }; // 跳过操作


  var skipNowContent = function skipNowContent() {
    // setSkipBtnLoading(true);
    dispatch({
      type: 'CDetails/getNewsSkip',
      payload: {
        skipId: queueContentId
      },
      callback: function callback() {
        setSkipBtnLoading(false);
      }
    });
  }; // 退出操作


  var exitQueue = function exitQueue() {
    setExitBtnLoading(true);
    Operate_confirm({
      title: '温馨提示',
      content: '确定退出吗',
      onOk: function onOk() {
        console.log('OK');
        dispatch({
          type: 'CDetails/getNewsExit',
          payload: {},
          callback: function callback() {
            setExitBtnLoading(false);
            umiExports["f" /* history */].go(-1);
          }
        });
      },
      onCancel: function onCancel() {}
    });
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */], formProps, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(className)
  }, /*#__PURE__*/react_default.a.createElement(Operate_FormCoverImage, {
    pForm: selfForm,
    name: "FormCoverImage"
  }), /*#__PURE__*/react_default.a.createElement(Operate_FormExtraInfo, {
    pForm: selfForm,
    name: "FormExtraInfo"
  }), /*#__PURE__*/react_default.a.createElement(Operate_FormAction, {
    pForm: selfForm,
    name: "FormAction"
  }), /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: Operate_index_modulemodules.button_group
  }, /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
    pathUrl: "/:type/cdetails",
    text: "\u786E\u5B9A",
    loading: saveBtnLoading,
    perms: "news:audit",
    type: "primary",
    onClick: function onClick() {
      return auditSubmit();
    }
  }), query.routersource !== 'search' && /*#__PURE__*/react_default.a.createElement(WrapAuth["a" /* default */], {
    pathUrl: "/:type/cdetails",
    text: "\u8DF3\u8FC7",
    loading: skipBtnLoading,
    perms: "news:skip",
    onClick: function onClick() {
      return skipNowContent();
    }
  }), /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    loading: exitBtnLoading,
    type: "primary",
    ghost: true,
    onClick: function onClick() {
      return exitQueue();
    },
    icon: /*#__PURE__*/react_default.a.createElement(RollbackOutlined["a" /* default */], null)
  }, "\u9000\u51FA"))))));
}

function Operate_mapStateToProps(_ref) {
  var Global = _ref.Global,
      CDetails = _ref.CDetails;
  return {
    Global: Global,
    CDetails: CDetails
  };
}

/* harmony default export */ var routes_Operate = (Object(umiExports["c" /* connect */])(Operate_mapStateToProps)(Operate));
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Index/index.module.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Index_index_modulemodules = ({"container":"container___2L0J5","content":"content___2vIO_","line":"line___2qENv","action":"action___3XUhl","loading":"loading___1zav7"});
// CONCATENATED MODULE: ./src/pages/$ContentDetails/routes/Index/index.js



/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/self-closing-comp */

/* eslint-disable no-console */


 // import Operate from '../RightContent';




function ContentDetails(props) {
  var history = props.history,
      dispatch = props.dispatch,
      _props$CDetails = props.CDetails,
      loading = _props$CDetails.loading,
      actionLoading = _props$CDetails.actionLoading;
  Object(react["useEffect"])(function () {
    dispatch({
      type: 'CDetails/init',
      payload: {},
      callback: function callback() {}
    });
  }, [dispatch]);
  var contentProps = {
    className: Index_index_modulemodules.content
  };
  var operateProps = {
    className: Index_index_modulemodules.action,
    history: history
  };
  var pageProps = {
    className: Index_index_modulemodules.container
  }; // console.log('loading:', loading);

  return /*#__PURE__*/react_default.a.createElement("div", pageProps, /*#__PURE__*/react_default.a.createElement(leftContent["a" /* default */], contentProps), /*#__PURE__*/react_default.a.createElement("div", {
    className: Index_index_modulemodules.line
  }), /*#__PURE__*/react_default.a.createElement(routes_Operate, operateProps), actionLoading && /*#__PURE__*/react_default.a.createElement("div", {
    className: Index_index_modulemodules.loading
  }, /*#__PURE__*/react_default.a.createElement(spin["a" /* default */], {
    size: "large"
  })));
}

function Index_mapStateToProps(_ref) {
  var CDetails = _ref.CDetails;
  return {
    CDetails: CDetails
  };
}

/* harmony default export */ var Index = __webpack_exports__["default"] = (Object(umiExports["c" /* connect */])(Index_mapStateToProps)(ContentDetails));

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
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "wx14");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "Ff2n");
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
      rest = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props, ["text", "pathUrl", "perms", "children"]); // console.log('access.canReadFoo', access.canReadFoo())


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, perms ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(umi__WEBPACK_IMPORTED_MODULE_5__[/* Access */ "a"], {
    accessible: access.canReadButton(pathUrl, perms),
    fallback: children ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, rest, {
      disabled: true
    }), text)
  }, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], rest, text)) : children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], rest, text));
};

/* harmony default export */ __webpack_exports__["a"] = (wrapAuthButton);

/***/ })

}]);