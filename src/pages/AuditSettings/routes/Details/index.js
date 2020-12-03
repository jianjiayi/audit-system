/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useRef } from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Button } from 'antd';
import { history, useModel } from 'umi';

import BaseForm  from '@components/BaseForm';
import RuleJsonRender from './RuleJsonRender';

import { contentType } from '@/pages/constants';
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
    const artData = _.clone(art);
    if(_.isEmpty(artData)){
      formRef.current.resetFields();
      formRef.current.setFieldsValue({
        queueType: '1'
      });
    }else{
      artData.bid = _.toString(artData.bid)
      formRef.current.setFieldsValue({...artData});
    }
    
  }, [JSON.stringify(art)]);

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
          <RuleJsonRender pForm={formRef.current}></RuleJsonRender>
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
        type: 'Number',
        min: 0,
        max: 100000,
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
    formValues: {},
    onSubmit: formValues => {
      console.log('formValues',formValues)
      formValues.ruleJson = JSON.stringify(formValues.ruleJson);

      // 判断是否更新
      const { action, id } = location.query;
      if (action === 'update') {
        formValues['id'] = id;
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
      <BaseForm {...searchFormProps} pRef={formRef}>
        <Button type="dashed" onClick={()=>{history.go(-1)}}>返回</Button>
      </BaseForm>
    </div>
  )
}

function mapStateToProps({ Global, QDetails }) {
  return { Global, QDetails };
}

export default (connect(mapStateToProps)(QueueContent));
