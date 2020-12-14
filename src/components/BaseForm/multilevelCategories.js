/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Form, Input, Select } from 'antd';
import _ from 'lodash';

const { Option } = Select;

export default function multilevelCategories(props) {
  const {
    firstCategory = [],
    secondCategory = [],
    thirdCategory = [],
    onChange,
    value = {},
    ...rest
  } = props;

  console.log('3333333', value);

  const selectProps = {
    allowClear: true,
    style: { width: '33%' },
    ...rest,
  };

  const selectChange = (e, id) => {
    console.log('e, id', e, id);
    value[id] = e;
    onChange(value, id);
  };

  return (
    <Input.Group compact>
      <Form.Item key="firstCategoryId" name="firstCategoryId" noStyle>
        <Select
          placeholder="一级分类"
          {...selectProps}
          onChange={(e) => selectChange(e, 'firstCategoryId')}
        >
          {!_.isEmpty(firstCategory) &&
            firstCategory.map((item, index) => {
              return (
                <Option key={item.id} value={item.id.toString()}>
                  {item.name}
                </Option>
              );
            })}
        </Select>
      </Form.Item>
      <Form.Item key="secondCategoryId" name="secondCategoryId" noStyle>
        <Select
          placeholder="二级分类"
          {...selectProps}
          onChange={(e) => selectChange(e, 'secondCategoryId')}
        >
          {!_.isEmpty(secondCategory) &&
            secondCategory.map((item, index) => {
              return (
                <Option key={item.id} value={item.id.toString()}>
                  {item.name}
                </Option>
              );
            })}
        </Select>
      </Form.Item>
      <Form.Item key="thirdCategoryId" name="thirdCategoryId" noStyle>
        <Select
          placeholder="三级分类"
          {...selectProps}
          onChange={(e) => selectChange(e, 'thirdCategoryId')}
        >
          {!_.isEmpty(thirdCategory) &&
            thirdCategory.map((item, index) => {
              return (
                <Option key={item.id} value={item.id.toString()}>
                  {item.name}
                </Option>
              );
            })}
        </Select>
      </Form.Item>
    </Input.Group>
  );
}
