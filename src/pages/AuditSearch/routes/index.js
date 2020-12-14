/* eslint-disable import/order */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */

import React, { useState, useEffect, useRef } from 'react';
import { message, Modal, Tag, Tooltip, Form, Select, Input } from 'antd';
import _ from 'lodash';
import { history, useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';
import ViewLog from '../components/viewlog';
// import { renderSelect } from '@components/BasicForm/BaseForm';

import { ExObject } from '@utils/utils.js';
import { contentType, auditResult, runningStatus, dateFormat } from '@/pages/constants';

import WrapAuthButton from '@components/WrapAuth';
import styles from './index.module.less';

const { Option } = Select;

delete contentType[''];

function AuditSearch(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const tableRef = useRef(null);
  const formRef = useRef(null);
  const viewRecordRef = useRef(null);

  // 内容类型
  const [cType, setCType] = useState('');

  // 搜索表单参数值
  const QUERY_FROM_SEARCH = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {};

  const {
    dispatch,
    Global: { firstCategory, secondCategory, thirdCategory },
    business = currentUser.business || {},
    Search: { query, loading, queueMap, dataSource, pagination },
  } = props;

  useEffect(() => {
    const params = formRef.current.getFieldsValue();
    const query = JSON.parse(sessionStorage.getItem('$QUERY_FROM_SEARCH')) || {}; // 获取缓存中查询条件
    console.log('query', query);
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
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: 'Global/getSecondCategory',
      payload: {
        id: query.firstCategoryId,
        type: cType,
      },
    });
  }, [query.firstCategoryId]);

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
    if (name === 'firstCategoryId') {
      formRef.current.resetFields(['secondCategoryId', 'thirdCategoryId']);
      formRef.current.setFieldsValue({ secondCategoryId: null, thirdCategoryId: null });
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id,
          type: cType,
        },
      });
    } else {
      formRef.current.resetFields(['thirdCategoryId']);
      formRef.current.setFieldsValue({ thirdCategoryId: null });
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
        // initialValue: ExObject.getFirstValue(business),
        map: business,
        onChange: (e) => {
          console.log('e', e);
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
        // initialValue: 'NEWS',
        map: contentType,
        onChange: (e) => {
          console.log(e);
          setCType(e);
          console.log(formRef.current);
          formRef.current.setFieldsValue({
            firstCategoryId: null,
            secondCategoryId: null,
            thirdCategoryId: null,
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
        // name: 'category',
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
        // initialValue: '',
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
        name: 'filter',
        isSpecial: true,
        itemRender: (
          <Input.Group compact>
            <Form.Item name={['filter', 'key']} noStyle initialValue="title">
              <Select style={{ width: '30%' }}>
                <Option value="title">标题</Option>
                <Option value="id">ID</Option>
              </Select>
            </Form.Item>
            <Form.Item name={['filter', 'value']} noStyle>
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
      // 取消table选中的数据
      tableRef.current.setSelectedRowKeys(null);

      // 格式化分类
      // if (!_.isEmpty(formValues.category)) {
      //   let arr = Object.values(formValues.category);
      //   arr = arr.filter((item) => item !== undefined);
      //   formValues.category = arr.join('/');
      // }

      // 整理时间
      if (!_.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(dateFormat);
        formValues.endTime = formValues.datatime[1].format(dateFormat);
      }
      delete formValues.datatime;

      // 格式化筛选条件
      formValues[formValues.filter.key] = formValues.filter.value;
      delete formValues.filter;

      console.log('formValues', formValues);
      dispatch({
        type: 'Search/getNewsList',
        payload: formValues,
      });
    },
  };

  // 格式化所属队列
  const getQueueText = (data) => {
    let str = '';
    if (!_.isEmpty(data)) {
      data.map((item, index) => {
        if (index === data.length - 1) {
          str += item.name;
        } else {
          str += `${item.name},`;
        }
      });
    }
    const text = str.length > 20 ? `${str.slice(0, 20)}...` : str;

    return (
      <Tooltip title={str}>
        <a>{text}</a>
      </Tooltip>
    );
  };

  // 列表配置
  const tableProps = {
    // 类型
    selectionType: 'checkbox', // checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '标题',
        dataIndex: 'title',
        align: 'center',
        width: '150px',
        render: (text) => (
          <Tooltip title={text}>
            <a>{text.length > 15 ? `${text.slice(0, 15)}...` : text}</a>
          </Tooltip>
        ),
      },
      {
        title: 'ID',
        align: 'center',
        dataIndex: 'articleId',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '分类',
        align: 'center',
        dataIndex: 'categorys',
      },
      {
        title: '来源',
        align: 'center',
        dataIndex: 'source',
      },
      {
        title: '采集源ID',
        align: 'center',
        dataIndex: 'crawlSourceId',
      },
      {
        title: '采集源',
        align: 'center',
        dataIndex: 'crawlSource',
      },
      {
        title: '所属队列',
        align: 'center',
        dataIndex: 'queues',
        render: (text) => getQueueText(text),
      },
      {
        title: '封面图',
        align: 'center',
        dataIndex: 'cover',
        render: (text) => (
          <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            {text && <img style={{ width: '120px', height: '90px' }} src={text} />}
          </div>
        ),
      },
      {
        title: '是否上架',
        width: '100px',
        align: 'center',
        dataIndex: 'status',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '审核状态',
        align: 'center',
        width: '100px',
        dataIndex: 'resultStatus',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '入审时间',
        align: 'center',
        dataIndex: 'createTime',
      },
      {
        title: '操作',
        width: '40px',
        align: 'center',
        render(r) {
          return (
            <div className={styles.tableaction}>
              <WrapAuthButton
                pathUrl="/search"
                perms="news:get"
                type="primary"
                size="small"
                text="领审"
                onClick={() => goDetails(r)}
              />
              <WrapAuthButton
                pathUrl="/search"
                perms="queue:add"
                size="small"
                type="dashed"
                text="加队列"
                onClick={() => openAddQueueModal(r)}
              />
              <WrapAuthButton
                pathUrl="/search"
                perms="history:select"
                size="small"
                text="操作记录"
                onClick={() => getViewRecord(r.id)}
              />
            </div>
          );
        },
      },
    ],
    loading,
    dataSource,
    pagination,
    onPageChg: (page) => {
      // console.log(page)
      dispatch({
        type: 'Search/getNewsList',
        payload: {
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });

      tableRef.current.setSelectedRowKeys(null);
      tableRef.current.setSelectedRows(null);
    },
  };

  // 领审操作
  const goDetails = (data) => {
    const { businessId, id, queues, type } = data;
    const { queueType, id: queue } = _.isEmpty(queues) ? '' : queues[0];
    const params = {
      routersource: 'search',
      businessId,
      id,
      queue,
      queueType,
      type,
    };

    console.log(params);
    try {
      dispatch({
        type: 'CDetails/getNewsGetTask',
        payload: params,
        callback: (data) => {
          if (_.isEmpty(data)) {
            return message.error('当前文章不可以领取');
          }

          dispatch({ type: 'CDetails/save', payload: { query: params } });

          sessionStorage.setItem('$QUERY', JSON.stringify(params));

          sessionStorage.setItem('$QUERY_FROM_SEARCH', query);
          sessionStorage.setItem('$QUERY_FROM_SEARCH', JSON.stringify(query));
          history.push({
            pathname: '/search/cdetails',
            query: {
              isBack: true,
            },
          });
        },
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  // 加队列操作
  const openAddQueueModal = (data) => {
    const { businessId, id, type } = data;
    dispatch({
      type: 'Search/getNewsReAduit',
      payload: {
        businessId,
        id,
        type,
      },
      callback: (code, data) => {
        if (code === 200) {
          if (data == 1) {
            message.success('加入复审队列成功');
          } else {
            message.warning('该文章已经在复审队列，请勿重复添加');
          }
        } else {
          message.error('加入复审队列失败');
        }
      },
    });
  };

  // 查看操作记录
  const getViewRecord = (id) => {
    dispatch({
      type: 'Search/getNewsLog',
      payload: {
        id,
      },
      callback: (data) => {
        viewRecordRef.current.setModalVisible(true);
        viewRecordRef.current.setDataSource(data);
      },
    });
  };

  // 批量审核操作
  const batchAudit = (status) => {
    const pass = status;
    // console.log(tableRef.current.selectedRows)
    const { selectedRows } = tableRef.current; // 获取选中的列表
    if (_.isEmpty(selectedRows)) return message.error('请勾选文章列表后在操作');

    // 处理选中文章数据
    const paramsList = [];
    selectedRows.map((item) => {
      const { id } = item;
      const firstQueue = item.queues[0];
      const queueInfo = {
        bid: firstQueue.bid,
        id: firstQueue.id,
        queueType: firstQueue.queueType,
        type: firstQueue.type,
      };
      paramsList.push({ id, queueInfo });
    });

    // console.log(paramsList)

    dispatch({
      type: 'Search/batchAudit',
      payload: {
        pass,
        paramsList,
      },
      callback: (data) => {
        tableRef.current.setSelectedRowKeys(null);
        tableRef.current.setSelectedRows(null);

        if ((pass && _.isEmpty(data._2)) || (!pass && _.isEmpty(data._1))) return;

        // 温馨提示
        Modal.warning({
          title: '温馨提示',
          content: (
            <div>
              {pass ? (
                <div className="">
                  <p>以下文章id没有操作成功</p>
                  {data._2.map((item) => {
                    return <Tag key={item}>{item}</Tag>;
                  })}
                </div>
              ) : (
                <div className="">
                  <p>以下文章id没有操作成功</p>
                  {data._1.map((item) => {
                    return <Tag key={item}>{item}</Tag>;
                  })}
                </div>
              )}
            </div>
          ),
          onOk() {},
        });
      },
    });
  };

  return (
    <>
      <BaseForm {...searchFormProps} pRef={formRef} />
      <BaseTable {...tableProps} ref={tableRef}>
        <div className={styles['right-button']}>
          <WrapAuthButton
            pathUrl="/search"
            perms="news:audit"
            text="通过"
            type="primary"
            onClick={() => batchAudit(true)}
          />
          <WrapAuthButton
            pathUrl="/search"
            perms="news:audit"
            text="未通过"
            type="danger"
            onClick={() => batchAudit(false)}
          />
        </div>
      </BaseTable>
      <ViewLog ref={viewRecordRef} />
    </>
  );
}

function mapStateToProps({ Global, User, Search }) {
  return { Global, User, Search };
}

export default connect(mapStateToProps)(AuditSearch);
