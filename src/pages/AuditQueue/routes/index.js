/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import { message } from 'antd';
import _ from 'lodash';
import { history, useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';

import { contentType } from '@/pages/constants';

import styles from './index.module.less';

import WrapAuthButton from '@components/WrapAuth';

delete contentType[''];

function AuditQueue(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const formRef = useRef(null);

  const {
    dispatch,
    business = currentUser.business || {},
    Queue: { loading, dataSource },
  } = props;

  useEffect(() => {
    let payload = formRef.current.getFieldsValue();
    dispatch({
      type: 'Queue/init',
      payload,
    });
  }, [business, dispatch, formRef.current]);

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
        initialValue: 'NEWS',
        map: contentType,
      },
    ],
    onSubmit: (formValues) => {
      console.log('formValues', formValues);
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
    let formValues = formRef.current.getFieldsValue();
    let params = {
      businessId: formValues.bid,
      queue: id,
      queueName: name,
      type: formValues.type,
      routersource: 'queue',
    };
    dispatch({
      type: 'CDetails/getNewsGetTask',
      payload: params,
      callback: (data) => {
        console.log('data', data);
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
        width: 150,
        render: (text) => <b>{text}</b>,
      },
      {
        title: '数量',
        dataIndex: 'queueLen',
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
  };

  return (
    <>
      <BaseForm {...searchFormProps} pRef={formRef} />
      <BaseTable {...tableProps}></BaseTable>
    </>
  );
}

function mapStateToProps({ Queue, CDetails }) {
  return { Queue, CDetails };
}

export default connect(mapStateToProps)(AuditQueue);
