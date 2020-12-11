/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'antd';
import { history, useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';
import { contentType, auditResult1, dateFormat } from '@/pages/constants';

import styles from './index.module.less';

function AuditStatistics(props) {
  const {
    initialState: { currentUser = {}},
  } = useModel('@@initialState');

  const formRef = useRef(null);

  const {
    dispatch,
    location,
    business = currentUser.business || {},
    Statistics: { loading, dataSource, pagination },
  } = props;

  useEffect(() => {
    let formValues = formRef.current.getFieldsValue();
    if (!_.isEmpty(formValues.datatime)) {
      formValues.startTime = formValues.datatime[0].format(dateFormat);
      formValues.endTime = formValues.datatime[1].format(dateFormat);
    }
    delete formValues.datatime;

    dispatch({
      type: 'Statistics/getPersoneDetailQuery',
      payload: {
        userId: location.query.id,
        // businessId: formRef.current.getFieldValue('businessId'),
        ...formValues,
      },
    });
  }, [dispatch, location.query]);

  // 多条件搜索配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'businessId',
        // initialValue: ExObject.getFirstValue(business),
        map: business,
      },
      { label: '审核时间', name: 'datatime', type: 'DateTimeStartEnd' },
      {
        label: '内容类型',
        type: 'SELECT',
        name: 'newsType',
        map: contentType,
      },
      {
        label: '审核结果',
        type: 'SELECT',
        name: 'auditStatus',
        initialValue: '',
        map: auditResult1,
      },
      { label: '标题', name: 'title' },
    ],
    formValues: location.query,
    onReset: () => {
      dispatch({
        type: 'Statistics/getPersoneDetailQuery',
        payload: {
          userId: location.query.id,
          businessId: formRef.current.getFieldValue('businessId'),
        },
      });
    },
    onSubmit: formValues => {
      if (!_.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(dateFormat);
        formValues.endTime = formValues.datatime[1].format(dateFormat);
      }
      delete formValues.datatime;

      console.log('formValues', formValues);
      dispatch({
        type: 'Statistics/getPersoneDetailQuery',
        payload: {
          ...formValues,
          userId: location.query.id,
        },
      });
    },
  };

  // 列表配置
  const tableProps = {
    bordered: true,
    // 类型
    selectionType: null, //checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '人名',
        dataIndex: 'auditorName',
        key: 'auditorName',
        align: 'center',
        className: styles.tdmiddle,
        render(_, row) {
          return {
            children: <span>{row.auditorName}</span>,
            props: {
              rowSpan: row.rowSpan,
            },
          };
        },
      },
      {
        title: '队列',
        align: 'center',
        dataIndex: 'queue',
        key: 'queue',
      },
      {
        title: '标题',
        align: 'center',
        dataIndex: 'title',
      },
      {
        title: '审核时间',
        align: 'center',
        dataIndex: 'finishAuditDatetime',
      },
      {
        title: '审核结果',
        align: 'center',
        width: '260px',
        dataIndex: 'auditStatus',
        render: text => <span>{text}</span>,
      },
    ],
    loading,
    dataSource,
    pagination,
    onPageChg: page => {
      // console.log(page)
      dispatch({
        type: 'Statistics/getPersoneDetailQuery',
        payload: {
          user: location.query.user,
          pageNum: page.current,
          pageSize: page.pageSize,
          businessId: formRef.current.getFieldValue('businessId'),
        },
      });
    },
  };

  return (
    <>
      <BaseForm {...searchFormProps} pRef={formRef}>
        <Button onClick={()=>{history.go(-1)}}>返回</Button>
      </BaseForm>
      <BaseTable {...tableProps}></BaseTable>
    </>
  );
}

function mapStateToProps({ Statistics }) {
  return { Statistics };
}

export default connect(mapStateToProps)(AuditStatistics);
