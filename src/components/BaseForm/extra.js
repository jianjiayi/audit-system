/* eslint-disable prefer-template */
/* eslint-disable no-bitwise */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */

import React from 'react';
import { Col, Form, Input, Radio, Checkbox, Select } from 'antd';
import { isArray, isFunction, isPlainObject } from 'lodash';
// eslint-disable-next-line import/no-cycle
import { FormItem } from './config';

/**
 * 生成uuid，用来没有设置name时候，取此值作为唯一key
 *
 * @return {*}
 */
function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
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
function entries(object, callback = (item) => item) {
  console.log(isPlainObject(object),object)
  if(isPlainObject(object)) return Object.entries(object).map(([key, value]) => callback({ key, value }));
  if(isArray(object)) return object.map(v => callback( v.key, v.value ));
}

/**
 * 补充表单字段配置
 *
 * @param items      字段定义：[{label: '名称', name: 'name', required: true}]
 * @param formValues 字段默认值: {name: 'default'}
 * @returns {*}
 */
export function fillFormItems(items, formValues = {}) {
  // console.log(items)
  return items.map((item) => {
    const {
      label,
      name = guid(),
      required = false,
      validator,
      initialValue = formValues[name],
      help = null,
    } = item;

    const rules = validator ? 
      [{ required: required, message: `请输入${label}` } , { validator }]:
      [{ required: required, message: `请输入${label}` }];

    return {
      options: {
        rules: required ? rules : null,
        initialValue,
        help,
      },
      ...item,
    };
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
export function renderFormItem(item, formLayout, layout, mediaSpan) {
  // console.log('item', item)
  const {
    label,
    name = guid(),
    type = '',
    map = [],
    options,
    initialValue,
    itemRender,
    placeholder,
    validator,
    colSpan,
    isSpecial = false,
    ...props
  } = item;

  if (!name) return;

  // 针对时间等长度的组件进行单独配置
  if (
    type === 'DateTimeStartEnd' ||
    type === 'ThreeLevelCategory' ||
    isSpecial
  ) {
    mediaSpan = {
      className: 'gutter-row',
      xs: 24,
      md: layout === 'inline' ? 8 : 24,
      lg: layout === 'inline' ? 16 : 24,
      xl: layout === 'inline' ? 12 : 24,
      xxl: layout === 'inline' ? 8 : 24,
    };
    formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: layout === 'inline' ? 8 : 8 },
        md: { span: layout === 'inline' ? 8 : 8 },
        lg: { span: layout === 'inline' ? 4 : 8 },
        xl: { span: layout === 'inline' ? 4 : 8 },
        xxl: { span: layout === 'inline' ? 4 : 8 },
      },
    };
  }

  const itemProps = {
    key: name,
    name: name,
    label: label,
    ...formLayout,
    ...options,
  };

  mediaSpan = colSpan ? colSpan : mediaSpan;

  const colProps = {
    key: name,
    // style: layout === 'inline' ? { padding: 0 } : null,
    ...mediaSpan,
  };

  //item form.item参数，map  数据，prop 事件
  if (type && !isFunction(itemRender))
    return <Col {...colProps}>{FormItem[type](itemProps, map, props)}</Col>;

  const child = itemRender || <Input placeholder={placeholder || '请输入'} {...props} allowClear/>;
  return (
    <Col {...colProps}>
      <Form.Item {...itemProps}>{child}</Form.Item>
    </Col>
  );
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
export function renderGroupComponent(iterable, Parent, Item, props) {
  if (iterable) {
    const forEach = ({ key, value }) => (
      <Item key={key} value={key}>
        {value}
      </Item>
    );
    const child = isArray(iterable) ? iterable.map(forEach) : entries(iterable, forEach);
    return <Parent {...props}>{child}</Parent>;
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
export function renderRadioGroup(iterable, Item = Radio, props) {
  return renderGroupComponent(iterable, Radio.Group, Item, props);
}

/**
 * 绘制复选按钮
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param Item     子组件类型
 * @param props    传递给父组件的属性
 * @returns {*}
 */
export function renderCheckBoxGroup(iterable, Item = Checkbox, props) {
  return renderGroupComponent(iterable, Checkbox.Group, Item, props);
}

/**
 * 绘制下拉选择框
 *
 * @param iterable 格式：[{ key: 'key', value: 'value' }] 或者 {key1: value1, key2: value2}
 * @param props    传递给父组件的属性
 * @returns {*}
 */
export function renderSelect(iterable, props) {
  const newProps = {
    placeholder: '请选择',
    style: { width: '100%' },
    ...props,
  };
  // console.log('props',props)
  return renderGroupComponent(iterable, Select, Select.Option, newProps);
}
