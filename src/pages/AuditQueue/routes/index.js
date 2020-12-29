/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useRef } from 'react';
import { message } from 'antd';
import _ from 'lodash';
import { history, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';

import { contentType } from '@/pages/constants';

import styles from './index.module.less';

import WrapAuthButton from '@components/WrapAuth';

delete contentType[''];

function AuditQueue(props) {
  // 当前页面
  const [current, setCurrent] = useState(1);
  const [type, setType] = useState('NEWS');

  const {
    dispatch,
    Queue: { loading, dataSource },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Queue/init',
      payload:{
        type
      }
    });
  }, [dispatch]);

  // 多条件搜索配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    submitText: '刷新',
    authProps: {
      pathUrl: '/statistics/classify',
      perms: 'statistics:classify:select',
    },
    dataSource: [
      {
        label: '内容类型',
        type: 'SELECT',
        name: 'type',
        initialValue: type,
        map: contentType,
      },
    ],
    onSubmit: (formValues) => {
      console.log('formValues', formValues);
      setType(formValues.type);
      setCurrent(1)
      dispatch({
        type: 'Queue/init',
        payload: {
          ...formValues,
        },
      });
    },
  };

  // 领审
  const goDetails = (name, id) => {
    let params = {
      queue: id,
      queueName: name,
      type,
      routersource: 'queue',
    };

    sessionStorage.setItem('$queueContentId', '');
    sessionStorage.setItem('$QUERY', JSON.stringify({}));

    dispatch({
      type: 'Queue/getQueueListDetails',
      payload: params,
      callback: (code,data) => {
        if(code === 500) return;
        
        if (_.isEmpty(data)) {
          return message.error('当前队列没有文章可以领取');
        }

        dispatch({ type: 'CDetails/save', payload: { query: params } });
        sessionStorage.setItem('$QUERY', JSON.stringify(params));

        history.push({
          pathname: '/queue/cdetails',
          query: {
            isBack: true,
          },
        });
      },
    });
  };

  const tableProps = {
    className: styles.tablebox,
    // 类型
    selectionType: null, //checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '名称',
        dataIndex: 'queueName',
        width: 300,
        render: (text) => <b>{text}</b>,
      },
      {
        title: '数量',
        dataIndex: 'count',
        align: 'center',
        width: 150,
      },
      {
        title: '操作',
        render(r) {
          return (
            <WrapAuthButton
              pathUrl="/queue"
              text="领取"
              key={r.id}
              perms={'queue:receive'}
              onClick={() => {
                goDetails(r.queueName, r.queueId);
              }}
            ></WrapAuthButton>
          );
        },
      },
    ],
    loading,
    dataSource,
    pagination:{
      current,
    },
    onPageChg: (page) => {
      // console.log(page)
      setCurrent(page.current)
    },
  };

  return (
    <>
      <BaseForm {...searchFormProps}/>
      <BaseTable {...tableProps}></BaseTable>
    </>
  );
}

function mapStateToProps({ Queue, CDetails }) {
  return { Queue, CDetails };
}

export default connect(mapStateToProps)(AuditQueue);
