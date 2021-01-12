/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-curly-brace-presence */
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
import SelectRender from './SelectRender';
import CascaderCheckBox from './CascaderCheckBox';
import TreeClassification from './TreeClassification';
import SelectModeTags from './SelectModeTags';

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
        required: key >= 11 && key <= 14 ? false : true,
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
      <IntervalValue 
        min={0} 
        max={100} 
        showType={isEdit}
        {...itemProps} 
        error={'分值：0~100，可输入相同分数，左小右大'} 
      ></IntervalValue>
    ),
    6: () => (
      <IntervalValue 
        min={0} 
        max={10} 
        showType={isEdit}
        {...itemProps}  
        error={'权重：0~10，可输入相同分数，左小右大'}
      ></IntervalValue>
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
        <CheckBoxRender
          map={{ WHITE_LIST: '白名单', NO_WHITE_LIST: '非白名单' }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
    10: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender
          map={{ INTERNAL: '人民系', NO_INTERNAL: '非人民系' }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
    11: () => (
      <Form.Item {...itemProps}>
        <span>涉黄</span>
      </Form.Item>
    ),
    12: () => (
      <Form.Item {...itemProps}>
        <span>政暴恐</span>
      </Form.Item>
    ),
    13: () => (
      <Form.Item {...itemProps}>
        <span>二维码</span>
      </Form.Item>
    ),
    14: () => (
      <Form.Item {...itemProps}>
        <span>广告</span>
      </Form.Item>
    ),
    15: () => (
      <Form.Item {...itemProps}>
        <SelectModeTags showType={isEdit}></SelectModeTags>
      </Form.Item>
    ),
    16: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender
          map={{ 'HIGH_TIME_LIMITATION': '高时效', 'MID_TIME_LIMITATION': '中时效', 'LOW_TIME_LIMITATION': '低时效', 'NO_TIME_LIMITATION"': '无时效' }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
    17: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender
          map={{ 'DELIVERY_AUDIT': '先审后发', 'AUDIT_DELIVERY': '先发后审', 'NO_AUDIT': '免审' }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
    18: () => (
      <Form.Item {...itemProps}>
        <SelectRender showType={isEdit} API={'crawlSource'}></SelectRender>
      </Form.Item>
    ),
    19: () => (
      <Form.Item {...itemProps}>
        <SelectRender showType={isEdit} API={'contentSource'}></SelectRender>
      </Form.Item>
    ),
    20: () => (
      <Form.Item {...itemProps}>
        <Form.Item 
          shouldUpdate={(prevValues, curValues) => {
            return prevValues.type !== curValues.type;
          }}
        >
          {({getFieldValue, setFieldsValue})=>{
            const { name } = itemProps;
            const treeProps = {
              type: getFieldValue('type'),
              value: getFieldValue(name),
              showType: isEdit,
              onChange: (values)=>{
                const parentValues = getFieldValue(name[0]);
                setFieldsValue({
                  [name[0]]:{
                    ...parentValues,
                    [name[1]]:values,
                  }
                });
              }
            }
            return (
              <TreeClassification {...treeProps}></TreeClassification>
            )
          }}
        </Form.Item>
      </Form.Item>
    ),
    21: () => (
      <Form.Item {...itemProps}>
        <CheckBoxRender
          map={{ 
            POLITICAL: '政治',
            OTHER: '脏话',
            PORNOGRAPHIC: '色情',
            CURRENT_EVENT: '敏感时事',
            LEADER: '领导人',
            ADVERTISEMENT: '广告',
            HIGH_RISK: '高危',
            RUBBISH: '垃圾',
            VIOLENCE: '暴恐', 
          }}
          showType={isEdit}
        ></CheckBoxRender>
      </Form.Item>
    ),
  };
};

export default ruleJson;
