/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useRef } from 'react';
import { Form, Select, Input } from 'antd';
import _ from 'lodash';
import { useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';

import { ExObject } from '@utils/utils.js';
import { contentType, auditResult, runningStatus, dateFormat } from '@/pages/constants';
import ThreeLevelCategory from '@/components/BaseForm/ThreeLevelCategory';
import styles from './index.module.less';

const { Option } = Select;

delete contentType[''];

function SearchForm(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const formRef = useRef(null);

  // 内容类型
  const [newsType, setNewsType] = useState('NEWS');

  // 搜索表单参数值
  const QUERY_FROM_SEARCH = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {};

  const {
    dispatch,
    business = currentUser.business || {},
    Search: { queueMap },
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
  }, []);

  // 表单默认值
  const staticFormValues = {
    businessId: ExObject.getFirstValue(business),
    type: 'NEWS',
    queue: '',
    resultStatus: '',
    status: '',
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
        onChange: (value) => { setNewsType(value || 'NEWS')},
      },
      {
        label: '内容分类',
        name: 'category',
        isSpecial: true,
        itemRender: <ThreeLevelCategory newsType={newsType} isReset />,
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
        map: auditResult,
      },
      {
        label: '是否上架',
        type: 'SELECT',
        name: 'status',
        map: runningStatus,
      },
      { label: '来源', name: 'source' },
      { label: '采集源ID', name: 'crawlSourceId' },
      { label: '采集源', name: 'crawlSource' },
      {
        label: '筛选',
        isSpecial: true,
        itemRender: (
          <Input.Group compact>
            <Form.Item name="key" noStyle initialValue="title">
              <Select style={{ width: '30%' }}>
                <Option value="title">标题</Option>
                <Option value="id">ID</Option>
              </Select>
            </Form.Item>
            <Form.Item name="value" noStyle>
              <Input placeholder="请输入" style={{ width: '70%' }} allowClear/>
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
      console.log(formValues)
      const { datatime, category, key, value, ...params } = formValues;

      // 整理时间
      if (!_.isEmpty(datatime)) {
        params.startTime = datatime[0].format(dateFormat);
        params.endTime = datatime[1].format(dateFormat);
      }

      // 格式化筛选条件
      params[key] = value;

      const paramsData = { ...params, ...category, category };

      console.log('paramsData', paramsData);
      dispatch({
        type: 'Search/getNewsList',
        payload: paramsData,
      });
    },
  };

  return <BaseForm {...searchFormProps} pRef={formRef} />;
}

function mapStateToProps({ Global, Search }) {
  return { Global, Search };
}

export default connect(mapStateToProps)(SearchForm);
