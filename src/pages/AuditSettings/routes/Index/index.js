/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'antd';
import _ from 'lodash';
import { history, useModel, connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';

import WrapAuthButton from '@components/WrapAuth';

import { contentType, queueType, queueStatus } from '@/pages/constants';
import RulesRender from '../../components/RulesRender';

import styles from './index.module.less';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const { confirm } = Modal;

function AuditSettings(props){
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const [rulesVisible, setRulesVisible] = useState(false);
  const [jsonArray, setJsonArray] = useState([]);

  const {
    dispatch,
    business = currentUser.business || {},
    QDetails: { configRule },
    Settings: { loading, dataSource, pagination },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Settings/init',
      payload: {},
    });
  }, [dispatch]);

  // 搜索表单配置项
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/setting/',
      perms: 'setting:select',
    },
    dataSource: [
      {
        label: '业务线',
        type: 'SELECT',
        name: 'bid',
        initialValue: '',
        map: { '': '全部', ...business },
      },
      { label: '更新时间', name: 'updateTime', type: 'DateTimeStartEnd' },
      {
        label: '内容类型',
        type: 'SELECT',
        name: 'type',
        initialValue: '',
        map: { '': '全部', ...contentType },
      },
      { label: '队列名称', name: 'name' },
      {
        label: '队列机制',
        type: 'SELECT',
        name: 'queueType',
        initialValue: '',
        map: queueType,
      },
      {
        label: '状态',
        type: 'SELECT',
        name: 'status',
        initialValue: '',
        map: queueStatus,
      },
      { label: '更新人', name: 'updateBy' },
    ],
    onReset: () => {
      dispatch({
        type: 'Settings/init',
        payload: {},
      });
    },
    onSubmit: (formValues) => {
      if (!_.isEmpty(formValues.updateTime)) {
        formValues.updateTime_start = formValues.updateTime[0].format(dateFormat);
        formValues.updateTime_end = formValues.updateTime[1].format(dateFormat);
      }
      delete formValues.updateTime;

      console.log('formValues', formValues);
      dispatch({
        type: 'Settings/getQueue',
        payload: formValues,
      });
    },
  };

  // 队列详情页
  const goDetails = (params) => {
    history.push({
      pathname: '/setting/details/',
      query: {
        ...params,
        isBack: true,
      },
    });
  };

  // 列表配置
  const tableProps = {
    scroll: { x: 1000 },
    // 类型
    selectionType: null, // checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '队列名称',
        dataIndex: 'name',
        width: '200px',
        fixed: 'left',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '队列规则',
        align: 'center',
        dataIndex: 'ruleJson',
        render: (text) => <a onClick={() => getViewRules(text)}>查看</a>,
      },
      {
        title: '内容类型',
        align: 'center',
        dataIndex: 'type',
        render: (text) => <span>{contentType[text || '']}</span>,
      },
      {
        title: '队列机制',
        align: 'center',
        dataIndex: 'queueType',
        render: (text) => <span>{queueType[text || '']}</span>,
      },
      {
        title: '更新时间',
        align: 'center',
        width: '200px',
        dataIndex: 'updateTime',
      },
      {
        title: '更新人',
        align: 'center',
        dataIndex: 'updateBy',
      },
      {
        title: '权重',
        align: 'center',
        dataIndex: 'priority',
      },
      {
        title: '状态',
        align: 'center',
        width: '160px',
        dataIndex: 'status',
        render: (text) => <span>{text === 0 ? '启用' : '停用'}</span>,
      },
      {
        title: '操作',
        fixed: 'right',
        width: '100px',
        align: 'center',
        render(r) {
          return (
            <div className={styles.tableaction}>
              <WrapAuthButton
                pathUrl="/setting/"
                text="修改"
                perms={'setting:edit'}
                type="primary"
                size="small"
                onClick={() => goDetails({ id: r.id, action: 'update' })}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/setting/"
                text={r.status === 0 ? '停用' : '开启'}
                perms={'setting:edit'}
                size="small"
                onClick={() => updateQueueStatus(r)}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/setting/"
                text="复制"
                perms={'setting:add'}
                size="small"
                onClick={() => goDetails({ id: r.id, action: 'copy' })}
              ></WrapAuthButton>
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
        type: 'Settings/getQueue',
        payload: {
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });
    },
  };

  // 更新队列状态
  const updateQueueStatus = (data) => {
    // console.log(data);
    const { id, bid, queueType, name, type, keepDays, status } = data;
    if (status === 1) {
      confirm({
        title: '提示',
        content: '是否确认开启队列',
        onOk() {
          return updateQueueAsyncFun({ id, bid, queueType, name, type, keepDays }, status);
        },
        onCancel() {},
      });
    } else {
      updateQueueAsyncFun({ id, bid, queueType, name, type, keepDays }, status);
    }
  };

  const updateQueueAsyncFun = (params, status) => {
    dispatch({
      type: 'Settings/updateQueueStatus',
      payload: {
        typename: status === 1 ? 'close' : 'reOpen',
        ...params,
      },
      callback: () => {
        // 更新当前列表状态
        let tableList = _.cloneDeep(dataSource);
        const index = tableList.findIndex((item) => params.id === item.id);
        const item = tableList[index];
        tableList.splice(index, 1, {
          ...item,
          ...{ status: status === 1 ? 0 : 1 },
        });
        dispatch({
          type: 'Settings/save',
          payload: { dataSource: tableList },
        });
      },
    });
  };

  // 查看队列规则
  const getViewRules = (data) => {
    setRulesVisible(true);
    // console.log('data', JSON.parse(data));
    setJsonArray(JSON.parse(data));
  };

  const modalProps = {
    title: '队列规则',
    footer: null,
    visible: rulesVisible,
    destroyOnClose: true,
    onCancel: () => {
      setRulesVisible(false);
    },
  };

  return (
    <>
      <BaseForm {...searchFormProps}>
        <WrapAuthButton
          pathUrl="/setting/"
          text="创建队列"
          perms={'setting:add'}
          type="link"
          onClick={() => goDetails({ action: 'create' })}
        ></WrapAuthButton>
      </BaseForm>
      <BaseTable {...tableProps}></BaseTable>

      {/* 预览规则 */}
      <Modal {...modalProps}>
        <Form name="basic" initialValues={{ ruleJson: jsonArray }}>
          {!_.isEmpty(jsonArray) &&
            Object.keys(jsonArray).map((item) => {
              let params = item.split('_');
              let key = params[0];
              return RulesRender(configRule, item, 'text')[key]();
            })}
        </Form>
      </Modal>
    </>
  );
}

function mapStateToProps({ QDetails, Settings }) {
  return { QDetails, Settings };
}

export default connect(mapStateToProps)(AuditSettings);
