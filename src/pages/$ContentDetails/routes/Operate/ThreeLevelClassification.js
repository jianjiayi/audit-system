/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { connect } from 'umi';
import _ from 'lodash';

const { Option } = Select;

function multilevelCategories(props) {
  const {
    dispatch,
    type,
    pForm:{
      resetFields,
      setFieldsValue,
      getFieldsValue,
    },
    Global: { firstCategory, secondCategory, thirdCategory },
  } = props;

  console.log('------------------',getFieldsValue())

  const selectProps = {
    allowClear: true,
    style: { width: '33%' },
  };

  useEffect(()=>{
    if(getFieldsValue().categoryFirst !== undefined){
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: getFieldsValue().categoryFirst,
          type
        },
      });
    }
  }, [getFieldsValue().categoryFirst])

  useEffect(()=>{
    if(getFieldsValue().categorySecond !== undefined){
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id: getFieldsValue().categorySecond,
          type
        },
      });
    }
  }, [getFieldsValue().categorySecond]);
  

  const selectCategoryFun = (id, name)=>{
    if(name === 'firstCategoryId'){
      resetFields(['categorySecond', 'categoryThird']);
      setFieldsValue({ categorySecond: null, categoryThird: null });
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: id || 0,
          type
        },
      });
    }else{
      resetFields(['categoryThird']);
      setFieldsValue({ categoryThird: null });
      if(!id) return;
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id,
          type
        },
      });
    }
  }

  const selectChange = (e, id)=>{
    selectCategoryFun(e,id)
  }

  return (
      <Input.Group compact>
        <Form.Item  
          key="categoryFirst" 
          name="categoryFirst" 
          noStyle 
        >
          <Select
            placeholder="一级分类"
            {...selectProps}
            allowClear={false}
            onChange={(e) => selectChange(e, 'firstCategoryId')}
          >
            {!_.isEmpty(firstCategory) &&
              firstCategory.map((item, index) => {
                return (
                  <Option key={item.code} value={item.code.toString()}>
                    {item.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item 
          key="categorySecond" 
          name="categorySecond" 
          noStyle
        >
          <Select
            placeholder="二级分类"
            {...selectProps}
            onChange={(e) => selectChange(e, 'secondCategoryId')}
          >
            {!_.isEmpty(secondCategory) &&
              secondCategory.map((item, index) => {
                return (
                  <Option key={item.code} value={item.code.toString()}>
                    {item.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item 
          key="categoryThird" 
          name="categoryThird" 
          noStyle 
        >
          <Select 
            placeholder="三级分类" 
            {...selectProps} 
            onChange={(e) => selectChange(e, 'thirdCategoryId')}
          >
            {!_.isEmpty(thirdCategory) &&
              thirdCategory.map((item, index) => {
                return (
                  <Option key={item.code} value={item.code.toString()}>
                    {item.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
      </Input.Group>
  );
}

function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(multilevelCategories);
