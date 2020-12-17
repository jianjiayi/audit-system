/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react';
import { Modal, Tag } from 'antd';
import _ from 'lodash';
import { connect } from 'umi';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';
import { roleStatus, dateFormat } from '@/pages/constants';
import WrapAuthButton from '@components/WrapAuth';
import ModalForm from '../../components/ModalForm';

import TreeSelectComponent from '../../components/TreeSelect';

import styles from './index.module.less';

const { confirm } = Modal;

function RolePage(props) {

  const modalFormRef = useRef(null);
  // modal标题
  const [title, setTitle] = useState('');
  // 临时存储用户信息
  const [formValues, setFormValues] = useState({});

  const {
    dispatch,
    Rights: { loading, permissionDataList, dataSource, pagination },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Rights/init',
      payload: {
        type: 'role',
      },
    });
    dispatch({
      type: 'Rights/getPermissionList',
      payload: {},
    });
  }, [dispatch]);

  // 多条件搜索配置
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/rights/role',
      perms: 'role:select',
    },
    dataSource: [
      {
        label: '角色',
        name: 'roleName',
      },
      { label: '更新时间', name: 'datatime', type: 'DateTimeStartEnd' },
      {
        label: '状态',
        type: 'SELECT',
        name: 'state',
        initialValue: '',
        map: roleStatus,
      },
      { label: '更新人', name: 'updateUser' },
    ],
    onReset: () => {
      dispatch({
        type: 'Rights/init',
        payload: {
          type: 'role',
        },
      });
    },
    onSubmit: (formValues) => {
      if (!_.isEmpty(formValues.datatime)) {
        formValues.startTime = formValues.datatime[0].format(dateFormat);
        formValues.endTime = formValues.datatime[1].format(dateFormat);
      }
      delete formValues.datatime;

      console.log('formValues', formValues);
      dispatch({
        type: 'Rights/getUserOrRoleQuery',
        payload: {
          ...formValues,
          type: 'role',
        },
      });
    },
  };

  // 列表配置
  const tableProps = {
    scroll: { x: 800 },
    // 类型
    selectionType: null, // checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '角色名',
        dataIndex: 'roleName',
        width: '200px',
        fixed: 'left',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '更新人',
        align: 'center',
        dataIndex: 'updateUser',
      },
      {
        title: '更新时间',
        align: 'center',
        width: '200px',
        dataIndex: 'updateTime',
      },
      {
        title: '状态',
        align: 'center',
        dataIndex: 'state',
        render: (text) => <span>{text === '' ? '全部' : roleStatus[text]}</span>,
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
                pathUrl="/rights/role"
                perms="role:edit"
                type="primary"
                size="small"
                text="编辑"
                disabled={r.roleName === 'system'}
                onClick={() => openUserModal('edit', r)}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/rights/role"
                perms="role:edit"
                size="small"
                text={r.state !== 1 ? '注销' : '重启'}
                disabled={r.roleName === 'system'}
                onClick={() => updateUserOrRoleStatus('role', r.state, r.id)}
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
        type: 'Rights/getUserOrRoleQuery',
        payload: {
          type: 'role',
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });
    },
  };

  // 更新用户或角色状态
  const updateUserOrRoleStatus = (type, number, id) => {
    console.log(type, number, id);
    if (number !== 1) {
      confirm({
        title: '提示',
        content: '是否确认注销该角色吗？',
        onOk() {
          return updateUserOrRoleAsyncFun(type, number, id);
        },
        onCancel() {},
      });
    } else {
      updateUserOrRoleAsyncFun(type, number, id);
    }
  };

  // 更新角色状态
  const updateUserOrRoleAsyncFun = (type, number, id) => {
    // console.log(type, id)
    dispatch({
      type: 'Rights/updateUserOrRoleStatus',
      payload: {
        type,
        name: number === 1 ? 'enable' : 'disable',
        id,
      },
      callback: () => {
        // 更新当前列表状态
        const tableList = _.cloneDeep(dataSource);
        const index = tableList.findIndex((item) => id === item.id);
        const item = tableList[index];
        tableList.splice(index, 1, {
          ...item,
          ...{ state: number === 1 ? 0 : 1 },
        });
        dispatch({
          type: 'Rights/save',
          payload: { dataSource: tableList },
        });
      },
    });
  };

  // 点击打开用户编辑模态框
  const openUserModal = (type, values) => {
    setTitle(type === 'create' ? '创建' : '编辑');
    dispatch({ type: 'Rights/save', payload: { permissionIds: [] } });

    modalFormRef.current.setVisible(true);
    if (!values) return;
    // 处理编辑用户回显逻辑
    dispatch({
      type: 'Rights/getRuleDetailsById',
      payload: {
        id: values.id,
      },
      callback: (res) => {
        // console.log(values,res);
        values.permissionIds = res || [];
        setFormValues(values);
        // console.log('modalFormRef',modalFormRef.current)
        modalFormRef.current.updateFormValues(values);
      },
    });
  };

  // 创建modal配置
  const modalFormProps = {
    title: title + '角色',
    footer: null,
    onCancel: () => {
      modalFormRef.current.setModalStatus(false, () => {
        setFormValues({});
      });
    },
    /** 表单参数 */
    formProps: {
      className: styles['form-contaner'],
      layout: 'horizontal',
      submitText: '保存',
      dataSource: [
        {
          label: '角色名',
          name: 'roleName',
          required: true,
          type: 'TextArea',
          showCount: true,
          maxLength: 200,
        },
        {
          label: '分配权限',
          name: 'permissionIds',
          itemRender: (
            <TreeSelectComponent 
              permissionDataList={permissionDataList} 
            ></TreeSelectComponent>
          ),
        },
      ],
      formValues: formValues,
      onSubmit: (Values) => {
        // console.log('Values', Values)
        dispatch({
          type: 'Rights/addUserOrRole',
          payload: {
            id: formValues.id,
            ...Values,
            pathname: 'role',
            type: title === '创建' ? 'add' : 'edit',
          },
          callback: (res) => {
            if (res === 200) {
              modalFormRef.current.setModalStatus(false, () => {
                setFormValues({});
              });

              // 创建成功，刷新当前列表
              if (title === '创建') {
                dispatch({
                  type: 'Rights/init',
                  payload: {
                    type: 'role',
                  },
                });

                dispatch({
                  type: 'Rights/getPermissionList',
                  payload: {},
                });
              } else {
                // 更新当前列表状态
                const tableList = _.cloneDeep(dataSource);
                const index = tableList.findIndex((item) => formValues.id === item.id);
                const item = tableList[index];
                tableList.splice(index, 1, {
                  ...item,
                  ...formValues,
                });
                dispatch({
                  type: 'Rights/save',
                  payload: { dataSource: tableList },
                });
              }
            }
          },
        });
      },
    },
  };

  return (
    <>
      <BaseForm {...searchFormProps}>
        <WrapAuthButton
          pathUrl="/rights/role"
          perms="role:add"
          text="新建"
          ghost
          type="primary"
          onClick={() => openUserModal('create')}
        ></WrapAuthButton>
      </BaseForm>
      <BaseTable {...tableProps}></BaseTable>
      <ModalForm {...modalFormProps} ref={modalFormRef}></ModalForm>
    </>
  );
}

function mapStateToProps({ Rights }) {
  return { Rights };
}

export default connect(mapStateToProps)(RolePage);
