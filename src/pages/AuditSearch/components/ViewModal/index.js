/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Modal, List } from 'antd';
import _ from 'lodash';

import styles from './index.module.less';

function ViewRecord(props, ref) {
  // modal状态
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // 向父组件暴露的方法
  useImperativeHandle(ref, () => {
    return {
      setVisible, //设置modal状态
      setDataSource,
    };
  });

  const modalProps = {
    title: '操作记录',
    visible,
    centered: true,
    okText: '确认',
    cancelText: '取消',
    ...props,
    destroyOnClose: true,
    // onOk: () =>{this.handleOk},
    onCancel: () => {
      setVisible(!visible);
    },
  };

  return (
    <>
      <Modal {...modalProps}>
        <div className={`${styles.header} ${styles.listItem}`}>
          <span>操作人</span>
          <span>审核操作</span>
          <span>任务状态</span>
          <span>操作时间</span>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={item => (
            <List.Item>
              <div className={styles.listItem}>
                <span>{item.auditorName}</span>
                <span>{item.auditStatus}</span>
                <span>{item.event}</span>
                <span>{item.logTime}</span>
              </div>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
}

ViewRecord = forwardRef(ViewRecord);

export default ViewRecord;
