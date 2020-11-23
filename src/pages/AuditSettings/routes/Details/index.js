/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { history, useModel } from 'umi';

import BaseForm  from '@components/BaseForm';
import RuleJsonRender from './RuleJsonRender';

import { contentType, queueType, keepDays, queueStatus } from '@/pages/constants';
import { ExObject } from '@/utils/utils';

import styles from './index.module.less';

delete contentType['']; //删除内容类型中的全部

function QueueContent(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  // 获取state
  const {
    dispatch,
    location,
    business = currentUser.business || {},
    Global: {
      firstCategory, // 一级分类
      secondCategory, // 二级分类
      thirdCategory, // 三级分类
    },
    QDetails: { art },
  } = props;

  const formRef = useRef(null);

  // 组件销毁时候
  useEffect(() => {
    dispatch({
      type: 'QDetails/init',
      payload: {
        business,
        id: location.query.id || '',
        action: location.query.action || '',
      },
      callback: () => {},
    });
  }, [dispatch]);

  // 处理规则配置回显
  useEffect(() => {
    // console.log('art',art)
    if(_.isEmpty(art)){
      formRef.current.resetFields();
    }else{
      formRef.current.setFieldsValue({...art});
    }
    
  }, [art]);

  const searchFormProps = {
    className: styles['content'],
    layout: 'horizontal',
    submitText: '保存',
    cancelShow: true,
    formLayout: {
      labelAlign: 'right',
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    // loading: btnLoading,
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'bid',
        initialValue: ExObject.getFirstValue(business),
        placeholder: '选择业务线',
        map: business,
        // onChange:()=>{
        //   formRef.current.setFieldsValue({ruleJson: {}});
        // }
      },
      {
        label: '内容类型',
        type: 'SELECT',
        name: 'type',
        required: true,
        placeholder: '选择类型',
        map: contentType,
      },
      { 
        label: '队列名称', 
        name: 'name', 
        type: 'TextArea',
        showCount:true,
        maxLength:50,
        required: true 
      },
      { 
        label: '规则配置', 
        name: 'ruleJson', 
        required: true,
        itemRender: (
          <RuleJsonRender></RuleJsonRender>
        )
      },
      {
        label: '队列机制',
        type: 'RADIO',
        name: 'queueType',
        required: true,
        map: { 1: '先审后发', 2: '先发后审', 3: '免审' },
      },
      { 
        label: '队列权重', 
        name: 'priority', 
        required: true,
        help: '权重：0~10000，整数'
      },
      { 
        label: '备注', 
        name: 'remark', 
        type: 'TextArea',
        showCount:true,
        maxLength:200
      },
    ],
    formValues: {
      // ...art,
      // category: ["16-160000", "16-160001", "16-160005", "16-160006", "16-420100"],
      bid: _.cloneDeep(art['bid']),
      category: _.cloneDeep(art['category']),
      queueType: _.toString(art['queueType']),
      keepDays: _.toString(art['keepDays']),
    },
    onSubmit: formValues => {
      console.log('formValues',formValues)
      formValues.ruleJson = JSON.stringify(formValues.ruleJson);

      // 判断是否更新
      let action = location.query.action || '';
      if (action !== 'update') {
        delete formValues.id;
      }

      console.log('formValues', formValues);
      dispatch({
        type: 'QDetails/saveQueue',
        payload: formValues,
        callback: res => {
          if (res !== 200) {
            return;
          }
          history.push({ pathname: '/setting' });
        },
      });
    },
  };

  return (
    <div className={styles.container}>
      <BaseForm {...searchFormProps} pRef={formRef}></BaseForm>
    </div>
  )
}

function mapStateToProps({ Global, QDetails }) {
  return { Global, QDetails };
}

export default (connect(mapStateToProps)(QueueContent));
