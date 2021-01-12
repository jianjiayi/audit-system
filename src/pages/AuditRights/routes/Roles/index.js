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

import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import _ from 'lodash';
import { connect } from 'umi';
import { dateFormat } from '@/pages/constants';

import SearchForm from './SearchForm';
import TableList from './TableList';
import ModalForm from './ModalForm';

const { confirm } = Modal;

function RolePage(props) {
  const {
    dispatch,
    Rights: { loading, permissionDataList, dataSource, pagination },
  } = props;

  // modal基本状态
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    title: '新建',
    type: 'create',
    footer: null,
  });

  // 临时存储用户信息
  const [formValues, setFormValues] = useState({});

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

  // 多条件搜索
  const searchProps = {
    onCreate: () => {
      setModalInfo({
        ...modalInfo,
        title: '创建角色',
        type: 'create',
        visible: true,
      });
    },
    onReset: () => {
      dispatch({
        type: 'Rights/init',
        payload: {
          type: 'role',
        },
      });
    },
    onSubmit: (values) => {
      if (!_.isEmpty(values.datatime)) {
        values.startTime = values.datatime[0].format(dateFormat);
        values.endTime = values.datatime[1].format(dateFormat);
      }
      delete values.datatime;

      console.log('formValues', values);
      dispatch({
        type: 'Rights/getUserOrRoleQuery',
        payload: {
          ...values,
          type: 'role',
        },
      });
    },
  };

  // 表格列表
  const tableProps = {
    loading,
    dataSource,
    pagination,
    // 分页
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
    // 编辑
    onEditItem: (data = {}) => {
      dispatch({ type: 'Rights/save', payload: { permissionIds: [] } });
      if (!data) return;
      // 处理编辑用户回显逻辑
      dispatch({
        type: 'Rights/getRuleDetailsById',
        payload: {
          id: data.id,
        },
        callback: (res) => {
          data.permissionIds = res || [];
          setFormValues(data);
          setModalInfo({
            ...modalInfo,
            title: '编辑用户',
            type: 'edit',
            visible: true,
          });
        },
      });
    },
    // 修改状态
    onChangeStatus: (type, number, id) => {
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
    },
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

  // modal 表单
  const modalProps = {
    ...modalInfo,
    formValues,
    permissionDataList,
    // 关闭modal
    onCancel: () => {
      setFormValues({});
      setModalInfo({
        ...modalInfo,
        visible: false,
      });
    },
    // 确定
    onOk: (type, Values) => {
      console.log(formValues, Values);
      dispatch({
        type: 'Rights/addUserOrRole',
        payload: {
          id: formValues.id,
          ...Values,
          pathname: 'role',
          type: type === 'create' ? 'add' : 'edit',
        },
        callback: (res) => {
          if (res === 200) {
            setFormValues({});
            setModalInfo({
              ...modalInfo,
              visible: false,
            });
            // 创建成功，刷新当前列表
            if (type === 'create') {
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
  };

  return (
    <>
      <SearchForm {...searchProps}></SearchForm>
      <TableList {...tableProps}></TableList>
      <ModalForm {...modalProps}></ModalForm>
    </>
  );
}

function mapStateToProps({ Rights }) {
  return { Rights };
}

export default connect(mapStateToProps)(RolePage);
