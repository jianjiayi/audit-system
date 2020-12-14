(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
    // console.log('selectedKeys',selectedKeys)
    if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(selectedKeys)) {
      setSelectedRowKeys(selectedKeys);
    }
  }, [JSON.stringify(selectedKeys)]); // 获取选中元素

  var getSelectedRowKeys = function getSelectedRowKeys() {
    if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(selectedRowKeys)) {
      return {
        selectedRowKeys: selectedRowKeys
      };
    }

    return {};
  }; // table 单选、多选配置


  var rowSelection = Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    type: 'checkbox'
  }, getSelectedRowKeys()), {}, {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      console.log(selectedRowKeys, selectedRows);
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    onSelectAll: function onSelectAll(selected, selectedRows) {
      console.log(selected, selectedRows); // setSelectedRowKeys(selectedRows);

      setSelectedRows(selectedRows);
    }
  });

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

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "pQwi":
/*!*********************************************************************!*\
  !*** ./src/pages/AuditStatistics/routes/Personnel/Details/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/.umi-production/core/routes.ts (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends */ "0Owb");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button/style */ "+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button */ "2/Rp");
/* harmony import */ var _Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "k1fw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umi */ "9kvl");
/* harmony import */ var _components_BaseForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/BaseForm */ "zLEZ");
/* harmony import */ var _components_BaseTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/BaseTable */ "5KP8");
/* harmony import */ var _pages_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/constants */ "6ZGt");
/* harmony import */ var _index_module_less_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.less?modules */ "s9YE");
/* harmony import */ var _index_module_less_modules__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_less_modules__WEBPACK_IMPORTED_MODULE_10__);





/* eslint-disable react/self-closing-comp */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable spaced-comment */

/* eslint-disable no-console */

/* eslint-disable no-param-reassign */

/* eslint-disable prefer-const */

/* eslint-disable import/no-unresolved */








function AuditStatistics(props) {
  var _useModel = Object(umi__WEBPACK_IMPORTED_MODULE_6__[/* useModel */ "k"])('@@initialState'),
      _useModel$initialStat = _useModel.initialState.currentUser,
      currentUser = _useModel$initialStat === void 0 ? {} : _useModel$initialStat;

  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var dispatch = props.dispatch,
      location = props.location,
      _props$business = props.business,
      business = _props$business === void 0 ? currentUser.business || {} : _props$business,
      _props$Statistics = props.Statistics,
      loading = _props$Statistics.loading,
      dataSource = _props$Statistics.dataSource,
      pagination = _props$Statistics.pagination;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var formValues = formRef.current.getFieldsValue();

    if (!lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(formValues.datatime)) {
      formValues.startTime = formValues.datatime[0].format(_pages_constants__WEBPACK_IMPORTED_MODULE_9__[/* dateFormat */ "f"]);
      formValues.endTime = formValues.datatime[1].format(_pages_constants__WEBPACK_IMPORTED_MODULE_9__[/* dateFormat */ "f"]);
    }

    delete formValues.datatime;
    dispatch({
      type: 'Statistics/getPersoneDetailQuery',
      payload: Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
        userId: location.query.id
      }, formValues)
    });
  }, [dispatch, location.query]); // 多条件搜索配置

  var searchFormProps = {
    className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_10___default.a['form-contaner'],
    layout: 'inline',
    dataSource: [{
      label: '业务线',
      type: 'SELECT',
      name: 'businessId',
      // initialValue: ExObject.getFirstValue(business),
      map: business
    }, {
      label: '审核时间',
      name: 'datatime',
      type: 'DateTimeStartEnd'
    }, {
      label: '内容类型',
      type: 'SELECT',
      name: 'newsType',
      map: _pages_constants__WEBPACK_IMPORTED_MODULE_9__[/* contentType */ "e"]
    }, {
      label: '审核结果',
      type: 'SELECT',
      name: 'auditStatus',
      initialValue: '',
      map: _pages_constants__WEBPACK_IMPORTED_MODULE_9__[/* auditResult1 */ "d"]
    }, {
      label: '标题',
      name: 'title'
    }],
    formValues: location.query,
    onReset: function onReset() {
      dispatch({
        type: 'Statistics/getPersoneDetailQuery',
        payload: {
          userId: location.query.id,
          businessId: formRef.current.getFieldValue('businessId')
        }
      });
    },
    onSubmit: function onSubmit(formValues) {
      if (!lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(_pages_constants__WEBPACK_IMPORTED_MODULE_9__[/* dateFormat */ "f"]);
        formValues.endTime = formValues.datatime[1].format(_pages_constants__WEBPACK_IMPORTED_MODULE_9__[/* dateFormat */ "f"]);
      }

      delete formValues.datatime;
      console.log('formValues', formValues);
      dispatch({
        type: 'Statistics/getPersoneDetailQuery',
        payload: Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, formValues), {}, {
          userId: location.query.id
        })
      });
    }
  }; // 列表配置

  var tableProps = {
    bordered: true,
    // 类型
    selectionType: null,
    //checkbox or radio or null||false
    // 表头
    columns: [{
      title: '人名',
      dataIndex: 'auditorName',
      key: 'auditorName',
      align: 'center',
      className: _index_module_less_modules__WEBPACK_IMPORTED_MODULE_10___default.a.tdmiddle,
      render: function render(_, row) {
        return {
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, row.auditorName),
          props: {
            rowSpan: row.rowSpan
          }
        };
      }
    }, {
      title: '队列',
      align: 'center',
      dataIndex: 'queue',
      key: 'queue'
    }, {
      title: '标题',
      align: 'center',
      dataIndex: 'title'
    }, {
      title: '审核时间',
      align: 'center',
      dataIndex: 'finishAuditDatetime'
    }, {
      title: '审核结果',
      align: 'center',
      width: '260px',
      dataIndex: 'auditStatus',
      render: function render(text) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, text);
      }
    }],
    loading: loading,
    dataSource: dataSource,
    pagination: pagination,
    onPageChg: function onPageChg(page) {
      // console.log(page)
      dispatch({
        type: 'Statistics/getPersoneDetailQuery',
        payload: {
          user: location.query.user,
          pageNum: page.current,
          pageSize: page.pageSize,
          businessId: formRef.current.getFieldValue('businessId')
        }
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_BaseForm__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_Users_jsp_Documents_rmkj_projectCode_new_idata_audit_view_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, searchFormProps, {
    pRef: formRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: function onClick() {
      umi__WEBPACK_IMPORTED_MODULE_6__[/* history */ "f"].go(-1);
    }
  }, "\u8FD4\u56DE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_BaseTable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], tableProps));
}

function mapStateToProps(_ref) {
  var Statistics = _ref.Statistics;
  return {
    Statistics: Statistics
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(umi__WEBPACK_IMPORTED_MODULE_6__[/* connect */ "c"])(mapStateToProps)(AuditStatistics));

/***/ }),

/***/ "s9YE":
/*!**************************************************************************************!*\
  !*** ./src/pages/AuditStatistics/routes/Personnel/Details/index.module.less?modules ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tableaction":"tableaction___2brJu","tdmiddle":"tdmiddle___2r-Cc"};

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










/* eslint-disable @typescript-eslint/no-shadow */

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
      id = props.id,
      rest = Object(objectWithoutProperties["a" /* default */])(props, ["firstCategory", "secondCategory", "thirdCategory", "onChange", "value", "id"]); // console.log('3333333', rest);


  var selectProps = Object(objectSpread2["a" /* default */])({
    allowClear: true,
    style: {
      width: '33%'
    }
  }, rest);

  var selectChange = function selectChange(e, id) {
    // console.log('e, id', e, id);
    value[id] = e;
    onChange(value, id);
  };

  return /*#__PURE__*/react_default.a.createElement(input["a" /* default */].Group, {
    compact: true
  }, /*#__PURE__*/react_default.a.createElement(es_form["a" /* default */].Item, {
    key: "firstCategoryId",
    name: "category1",
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
    key: "secondCategoryId",
    name: "category2",
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
    key: "thirdCategoryId",
    name: "category3",
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

















/* eslint-disable prefer-template */

/* eslint-disable no-bitwise */

/* eslint-disable no-unneeded-ternary */

/* eslint-disable no-constant-condition */

/* eslint-disable no-param-reassign */

/* eslint-disable spaced-comment */

/* eslint-disable consistent-return */

/* eslint-disable object-shorthand */

 // eslint-disable-next-line import/no-cycle


/**
 * 生成uuid，用来没有设置name时候，取此值作为唯一key
 *
 * @return {*}
 */

function guid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
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
        _item$name = item.name,
        name = _item$name === void 0 ? guid() : _item$name,
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
      _item$name2 = item.name,
      name = _item$name2 === void 0 ? guid() : _item$name2,
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