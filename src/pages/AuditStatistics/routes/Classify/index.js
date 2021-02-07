/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Select } from 'antd';
import _ from 'lodash';
import { useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';

import { ExObject } from '@utils/utils.js';
import { contentType, orderFieldMap, orderTypeMap, dateFormat } from '@/pages/constants';
import ThreeLevelCategory from '@/components/BaseForm/ThreeLevelCategory';

import styles from './index.module.less';

const InputGroup = Input.Group;
const { Option } = Select;

// 过滤分类
const filterCategory = (firstCategoryName, secondCategoryName, thirdCategoryName) => {
  let str = '';
  if (!firstCategoryName && !secondCategoryName && !thirdCategoryName) return str;

  if (firstCategoryName) {
    str += `${firstCategoryName}`;
    if (secondCategoryName) {
      str += `/${secondCategoryName}`;
      if (thirdCategoryName) {
        str += `/${thirdCategoryName}`;
      }
    }
  }

  return str;
};

// const dateFormat = 'YYYY-MM-DD';

function AuditStatistics(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const formRef = useRef(null);
  // 内容类型
  const [newsType, setNewsType] = useState('NEWS');
  // 存放分类
  const [categoryMap, setCategoryMap] = useState({});

  const {
    dispatch,
    business = currentUser.business || {},
    Global: { firstCategory },
    Statistics: { loading, dataSource, pagination },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Statistics/init',
      payload: {
        type: 'category',
        ...formRef.current.getFieldsValue(),
      },
    });
  }, [dispatch]);

  useEffect(() => {
    const mapObj = {};
    firstCategory.map((item) => {
      mapObj[item.id.toString()] = item.name;
    });
    setCategoryMap(mapObj);
  }, [firstCategory]);

  // 多条件搜索配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/statistics/classify',
      perms: 'statistics:classify:select',
    },
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'businessId',
        initialValue:
          (!_.isEmpty(business) &&
            business.find((v) => v.key === 15000002) &&
            business.find((v) => v.key === 15000002).key) ||
          '',
        map: business,
      },
      { label: '时间', name: 'datatime', type: 'DateTimeStartEnd' },
      {
        label: '类型',
        type: 'SELECT',
        name: 'newsType',
        initialValue: 'NEWS',
        map: contentType,
        onChange: (value) => {
          setNewsType(value || 'NEWS');
        },
      },
      {
        label: '分类',
        name: 'category',
        initialValue: '',
        isSpecial: true,
        itemRender: <ThreeLevelCategory newsType={newsType} isReset />,
      },
      {
        label: '排序',
        name: 'params11',
        itemRender: (
          <InputGroup compact>
            <Form.Item name="orderField" initialValue="" noStyle>
              <Select style={{ width: '50%' }}>
                {Object.keys(orderFieldMap).map((item) => {
                  return (
                    <Option key={item} value={item}>
                      {orderFieldMap[item]}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="orderType" initialValue="desc" noStyle>
              <Select style={{ width: '50%' }}>
                {Object.keys(orderTypeMap).map((item) => {
                  return (
                    <Option key={item} value={item}>
                      {orderTypeMap[item]}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </InputGroup>
        ),
      },
    ],
    onReset: () => {
      dispatch({
        type: 'Statistics/init',
        payload: {
          type: 'category',
          businessId: formRef.current.getFieldValue('businessId'),
        },
      });
    },
    onSubmit: (formValues) => {
      const { datatime, category, ...params } = formValues;

      // 整理时间
      if (!_.isEmpty(datatime)) {
        params.startTime = datatime[0].format(dateFormat);
        params.endTime = datatime[1].format(dateFormat);
      }

      //  处理多及分类
      const {
        category1: firstCategoryId,
        category2: secondCategoryId,
        category3: thirdCategoryId,
      } = category;

      // 合并参数
      const paramsData = { ...params, firstCategoryId, secondCategoryId, thirdCategoryId };

      dispatch({
        type: 'Statistics/getStatisticQuery',
        payload: {
          ...paramsData,
          type: 'category',
        },
      });
    },
  };

  // 列表配置
  const tableProps = {
    // 类型
    selectionType: null, // checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '时间',
        dataIndex: 'dt',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '分类',
        align: 'center',
        render(r) {
          return (
            <span>
              {filterCategory(r.firstCategoryName, r.secondCategoryName, r.thirdCategoryName)}
            </span>
          );
        },
      },
      {
        title: '入审量',
        align: 'center',
        dataIndex: 'auditPendingCount',
      },
      {
        title: '审核量',
        align: 'center',
        dataIndex: 'auditCount',
      },
      {
        title: '审核通过量',
        align: 'center',
        width: '160px',
        dataIndex: 'auditPassedCount',
      },
    ],
    loading,
    dataSource,
    pagination,
    onPageChg: (page) => {
      // console.log(page)
      dispatch({
        type: 'Statistics/getStatisticQuery',
        payload: {
          type: 'category',
          pageNum: page.current,
          pageSize: page.pageSize,
          businessId: formRef.current.getFieldValue('businessId'),
        },
      });
    },
  };

  return (
    <>
      <BaseForm {...searchFormProps} pRef={formRef} />
      <BaseTable {...tableProps} />
    </>
  );
}

function mapStateToProps({ Global, Statistics }) {
  return { Global, Statistics };
}

export default connect(mapStateToProps)(AuditStatistics);
