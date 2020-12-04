/* eslint-disable no-unneeded-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Form } from 'antd';

import WordsComponents from './WordsRender';
import IntervalValue from './IntervalValue';
import CheckBoxRender from './CheckBoxRender';
import InputRender from './InputRender';
import SelectRender from './SelectRender';
import CascaderCheckBox from './CascaderCheckBox';
import TreeClassification from './TreeClassification';

const labelText = (List = [], key = '') => {
  for (const item of List) {
    if (item.id.toString() === key) {
      return item.name;
    }
  }
};

/**
 * 规则配置对象
 *
 * @param {*} labelList 可配置列表数组
 * @param {*} item 当前key
 * @param {*} isEdit 是否可编辑
 * @param {*} bid  业务线id
 * @return {*} dom
 */
const ruleJson = (labelList, item, isEdit, bid, pForm) => {
  const parentName = 'ruleJson';

  const params = item.split('_');
  const key = params[0];
  const type = params[1];
  // console.log('key', key, type);
  const label = labelText(labelList, key);
  const itemProps = {
    key: type ? `${key}_${type}` : key,
    label: type ? `${label}${type === 'in' ? '(包含)' : '(不包含)'}` : label,
    name: [parentName, type ? `${key}_${type}` : key],
    rules: [
      {
        required: (key >=11 && key<=14 ) ? false : true,
        message: `${label} 字段不能为空`,
      },
    ],
  };

  return {
    1: () => (
      <Form.Item {...itemProps}>
        <WordsComponents label={label} showType={isEdit} bid={bid}></WordsComponents>
      </Form.Item>
    ),
    2: () => (
      <Form.Item {...itemProps}>
        <WordsComponents label={label} showType={isEdit} bid={bid}></WordsComponents>
      </Form.Item>
    ),
    3: () => (
      <Form.Item {...itemProps}>
        <WordsComponents label={label} showType={isEdit} bid={bid}></WordsComponents>
      </Form.Item>
    ),
    4: () => (
      <Form.Item {...itemProps}>
        <WordsComponents label={label} showType={isEdit} bid={bid}></WordsComponents>
      </Form.Item>
    ),
    5: () => (
      <Form.Item {...itemProps} help={isEdit === 'form' && '分值：0~100，可输入相同分数，左小右大'}>
        <IntervalValue pForm={pForm} min={0} max={100} showType={isEdit}></IntervalValue>
      </Form.Item>
    ),
    6: () => (
      <Form.Item {...itemProps} help={isEdit === 'form' && '权重：0~10，可输入相同分数，左小右大'}>
        <IntervalValue min={0} max={10} showType={isEdit}></IntervalValue>
      </Form.Item>
    ),
    7: () => (
      <Form.Item {...itemProps}>
        <CascaderCheckBox
          map={{ 1: '公众媒体', 2: '自媒体(机构)', 3: '自媒体(个人)' }}
          itemName={item}
          parentName={parentName}
          showType={isEdit}
        ></CascaderCheckBox>
      </Form.Item>
    ),
    8: () => <></>,
    9: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender map={{ 1: '白名单', 2: '非白名单' }} showType={isEdit}></CheckBoxRender>
      </Form.Item>
    ),
    10: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender map={{ 1: '人民系', 2: '非人民系' }} showType={isEdit}></CheckBoxRender>
      </Form.Item>
    ),
    11: () => (
      <Form.Item {...itemProps} initialValue={"涉黄"}>
        <span>涉黄</span>
        
      </Form.Item>
    ),
    12: () => (
      <Form.Item {...itemProps} initialValue={"政暴恐"}>
        <span>政暴恐</span>
      </Form.Item>
    ),
    13: () => (
      <Form.Item {...itemProps} initialValue={"二维码"}>
        <span>二维码</span>
      </Form.Item>
    ),
    14: () => (
      <Form.Item {...itemProps} initialValue={"广告"}>
        <span>广告</span>
      </Form.Item>
    ),
    15: () => (
      <Form.Item {...itemProps}>
        <InputRender showType={isEdit}></InputRender>
      </Form.Item>
    ),
    16: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender
          map={{ 1: '高时效', 2: '中时效', 3: '低时效', 4: '无时效' }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
    17: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender
          map={{ 1: '先审后发', 2: '先发后审', 3: '免审' }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
    18: () => (
      <Form.Item {...itemProps}>
        <SelectRender showType={isEdit}></SelectRender>
      </Form.Item>
    ),
    19: () => (
      <Form.Item {...itemProps}>
        <SelectRender showType={isEdit}></SelectRender>
      </Form.Item>
    ),
    20: () => (
      <Form.Item {...itemProps}>
        <TreeClassification showType={isEdit}></TreeClassification>
      </Form.Item>
    ),
  };
};

export default ruleJson;
