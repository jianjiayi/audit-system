/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Form } from 'antd';

import IntervalValueInput from '@/components/BaseForm/IntervalValue';

export default function IntervalValue(props) {
  const {
    showType,
    name,
    min,
    max,
    error,
    label,
    ...itemProps
  } = props;

  return (
    <Form.Item 
      {...itemProps} 
      label={label}
      name = {name}
      rules={[
        { required: true }, 
        { 
          validator : (rule, value, callback) => {
            if(value[0] === null || value[1] === null){
              return Promise.reject(`${label}不能为空`);
            }
            if(value[0] > value[1]){
              return Promise.reject(error);
            }
            return Promise.resolve();
          } 
        }
      ]}
    >
      {
        showType === 'form' ? <IntervalValueInput min={min} max={max}></IntervalValueInput> :
        <Form.Item noStyle shouldUpdate>
          {({ getFieldValue })=>{
            const value = getFieldValue(name);
            return (<span>{`${value[0]} ~ ${value[1]}`}</span>)
          }}
        </Form.Item>
      }
    </Form.Item>
  )
}
