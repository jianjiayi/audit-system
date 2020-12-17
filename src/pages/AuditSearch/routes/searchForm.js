/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useRef } from 'react';
import {Form, Select, Input } from 'antd';
import _ from 'lodash';
import { useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';

import { ExObject } from '@utils/utils.js';
import { contentType, auditResult, runningStatus, dateFormat } from '@/pages/constants';
import styles from './index.module.less';

const { Option } = Select;

delete contentType[''];

function SearchForm(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const formRef = useRef(null);
  
  // 内容类型
  const [cType, setCType] = useState('');

  // 搜索表单参数值
  const QUERY_FROM_SEARCH = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {};

  const {
    dispatch,
    Global: { firstCategory, secondCategory, thirdCategory },
    business = currentUser.business || {},
    Search: { query, queueMap },
  } = props;

  useEffect(() => {
    const params = formRef.current.getFieldsValue();
    const query = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {}; // 获取缓存中查询条件
    // console.log('query', query);
    formRef.current.setFieldsValue({
      ...query,
    });

    dispatch({
      type: 'Search/init',
      payload: {
        ...params,
        ...query,
      },
    });

    if(query.category1){
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: query.category1,
          type: cType,
        },
      });
    }

    if(query.category2){
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: query.category2,
          type: cType,
        },
      });
    }
  }, []);

  useEffect(()=>{
    if(query.category1){
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: query.category1,
          type: cType,
        },
      });
    }
  },[query.category1])

  

  // 表单默认值
  const staticFormValues = {
    businessId: ExObject.getFirstValue(business),
    type: 'NEWS',
    queue: '',
    resultStatus: '',
    status: '',
  };

  // console.log(updateFormValues, _.isEmpty(JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH'))))
  const selectCategoryFun = (id, name) => {
    // console.log(id, name)
    if (name === 'firstCategoryId') {
      formRef.current.resetFields(['category2', 'category3']);
      formRef.current.setFieldsValue({ category2: null, category3: null });
      
      if(!id){
        dispatch({
          type: 'Global/save',
          payload: {
            secondCategory: [],
            thirdCategory: []
          },
        });
        return;
      }
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id,
          type: cType,
        },
      });
    } else {
      formRef.current.resetFields(['category3']);
      formRef.current.setFieldsValue({ category3: null });
      if(!id){
        dispatch({
          type: 'Global/save',
          payload: {
            thirdCategory: []
          },
        });
        return;
      }
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id,
          type: cType,
        },
      });
    }
  };

  // 多条搜索表单配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/search',
      perms: 'news:select',
    },
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'businessId',
        map: business,
        onChange: (e) => {
          // console.log('e', e);
          if (!e) return;
          // 更新队列
          formRef.current.setFieldsValue({ queue: '' });

          dispatch({
            type: 'Search/getQueue',
            payload: {
              bid: e,
            },
          });
        },
      },
      { label: '入审时间', name: 'datatime', type: 'DateTimeStartEnd' },
      {
        label: '内容类型',
        type: 'SELECT',
        name: 'type',
        map: contentType,
        onChange: (e) => {
          // console.log(e);
          setCType(e);
          // console.log(formRef.current);
          formRef.current.setFieldsValue({
            category1: null,
            category2: null,
            category3: null,
          });
          dispatch({
            type: 'Global/getFirstCategory',
            payload: {
              id: 0,
              type: e,
            },
          });
        },
      },
      {
        label: '内容分类',
        type: 'MultilevelCategories',
        firstCategory,
        secondCategory,
        thirdCategory,
        onChange: (values, name) => {
          selectCategoryFun(values[name], name);
        },
      },
      {
        label: '所属队列',
        type: 'SELECT',
        name: 'queue',
        map: { '': '全部', ...queueMap },
      },
      {
        label: '审核状态',
        type: 'SELECT',
        name: 'resultStatus',
        // initialValue: '',
        map: auditResult,
      },
      {
        label: '是否上架',
        type: 'SELECT',
        name: 'status',
        // initialValue: '',
        map: runningStatus,
      },
      { label: '来源', name: 'source' },
      { label: '采集源ID', name: 'crawlSourceId' },
      { label: '采集源', name: 'crawlSource' },
      {
        label: '筛选',
        // name: 'filter',
        isSpecial: true,
        itemRender: (
          <Input.Group compact>
            <Form.Item name='key' noStyle initialValue="title">
              <Select style={{ width: '30%' }}>
                <Option value="title">标题</Option>
                <Option value="id">ID</Option>
              </Select>
            </Form.Item>
            <Form.Item name='value' noStyle>
              <Input placeholder="请输入" style={{ width: '70%' }} />
            </Form.Item>
          </Input.Group>
        ),
      },
    ],
    formValues:
      (!_.isEmpty(QUERY_FROM_SEARCH) && { ...QUERY_FROM_SEARCH, ...staticFormValues }) ||
      staticFormValues,
    onReset: () => {
      const params = formRef.current.getFieldsValue();
      dispatch({
        type: 'Search/init',
        payload: { ...params },
      });
    },
    onSubmit: (formValues) => {
      // 整理时间
      if (!_.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(dateFormat);
        formValues.endTime = formValues.datatime[1].format(dateFormat);
      }
      delete formValues.datatime;

      // 格式化筛选条件
      formValues[formValues.key] = formValues.value;

      // console.log('formValues', formValues);
      dispatch({
        type: 'Search/getNewsList',
        payload: formValues,
      });
    },
  };

  

  return (
    <BaseForm {...searchFormProps} pRef={formRef} />
  );
}

function mapStateToProps({ Global, Search }) {
  return { Global, Search };
}

export default connect(mapStateToProps)(SearchForm);
