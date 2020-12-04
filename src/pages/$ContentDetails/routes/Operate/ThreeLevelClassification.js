/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';

const { Option } = Select;

function multilevelCategories(props) {
  
  const {
    dispatch,
    pForm,
    CDetails: {
      curArt = {}
    },
    Global: { firstCategory, secondCategory, thirdCategory },
  } = props;

  const selectProps = {
    allowClear: true,
    style: { width: '33%' },
  };

  

  const selectCategoryFun = (id, name)=>{
    if(name === 'firstCategoryId'){
      pForm.resetFields(['categorySecond', 'categoryThird']);
      pForm.setFieldsValue({ categorySecond: null, categoryThird: null });
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: id || 0,
          type: 0
        },
      });
    }else{
      pForm.resetFields(['categoryThird']);
      pForm.setFieldsValue({ categoryThird: null });
      if(!id) return;
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id,
          type: 0
        },
      });
    }
  }

  const selectChange = (e, id)=>{
    selectCategoryFun(e,id)
  }

  return (
    <Form.Item label="分类" shouldUpdate>
      <Input.Group compact>
        <Form.Item  
          key="categoryFirst" 
          name="categoryFirst" 
          noStyle 
        >
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
                  <Option key={item.id} value={item.id.toString()}>
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
                  <Option key={item.id} value={item.id.toString()}>
                    {item.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
      </Input.Group>
    </Form.Item>
  );
}

function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(multilevelCategories);
