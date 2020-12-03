/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-func-assign */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-unresolved */

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import _ from 'lodash';
import { Modal } from 'antd';

import BaseTable from '@components/BaseTable';

import styles from './viewlog.module.less';

function ViewLogRender(props, ref) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // 向父组件暴露的方法
  useImperativeHandle(ref, () => {
    return {
      setModalVisible, //设置modal状态
      setDataSource,
    };
  });

  const modalProps = {
    title: `审核操作记录`,
    footer: null,
    width: 820,
    visible: modalVisible,
    bodyStyle: { padding: 0 },
    destroyOnClose: true,
    onCancel: () => {
      setModalVisible(false);
    },
  };

  const tableProps = {
    className: styles['table-container'],
    // 类型
    selectionType: null,
    // 表头
    columns: [
      {
        title: '操作人',
        dataIndex: 'auditorName',
      },
      {
        title: '审核操作',
        align: 'center',
        dataIndex: 'auditStatus',
        render: (text) => <a>{text}</a>,
      },
      {
        title: '任务状态',
        align: 'center',
        dataIndex: 'event',
        render: (text) => <a>{text}</a>,
      },
      {
        title: '操作时间',
        align: 'center',
        dataIndex: 'logTime',
        render: (text) => <a>{text}</a>,
      },
    ],
    dataSource,
  };

  return (
    <Modal {...modalProps}>
      <BaseTable {...tableProps} />
    </Modal>
  );
}

ViewLogRender = forwardRef(ViewLogRender);

export default ViewLogRender;
