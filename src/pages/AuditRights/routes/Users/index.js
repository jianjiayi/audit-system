/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import _ from 'lodash';
import { Modal } from 'antd';
import { dateFormat } from '@/pages/constants';

import SearchForm from './SearchFrom';
import TableList from './TableList';
import ModalForm from './ModalFrom';



const { confirm } = Modal;

function UserRights(props) {
  const {
    dispatch,
    Rights: { loading, query, roleList, roleAllLIst, dataSource, pagination },
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
        type: 'user',
      },
    });
  }, [dispatch]);

  // 多条件搜索
  const searchProps = {
    roleList,
    onCreate: () => {
      setModalInfo({
        ...modalInfo,
        title: '创建用户',
        type: 'create',
        visible: true,
      });
    },
    onReset: () => {
      dispatch({
        type: 'Rights/init',
        payload: {
          type: 'user',
        },
      });
    },
    onSubmit: (values) => {
      if (!_.isEmpty(values.datatime)) {
        values.startTime = values.datatime[0].format(dateFormat);
        values.endTime = values.datatime[1].format(dateFormat);
      }
      delete values.datatime;
      dispatch({
        type: 'Rights/getUserOrRoleQuery',
        payload: {
          ...values,
          type: 'user',
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
          type: 'user',
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });
    },
    // 编辑
    onEditItem: (data = {}) => {
      if (!data) return;
      data.roles = (data.roles[0] && data.roles[0].roleName) || null;
      setFormValues(data);
      setModalInfo({
        ...modalInfo,
        title: '编辑用户',
        type: 'edit',
        visible: true,
      });
    },
    // 修改状态
    onChangeStatus: (type, number, username) => {
      if (number !== 2) {
        confirm({
          title: '提示',
          content: '是否确认注销该用户吗？',
          onOk() {
            return updateUserOrRoleAsyncFun(type, number, username);
          },
          onCancel() {},
        });
      } else {
        updateUserOrRoleAsyncFun(type, number, username);
      }
    },
  };
  // 更新用户状态
  const updateUserOrRoleAsyncFun = (type, number, username) => {
    dispatch({
      type: 'Rights/updateUserOrRoleStatus',
      payload: {
        type,
        name: number === 2 ? 'enable' : 'disable',
        username,
      },
      callback: () => {
        // 更新当前列表状态
        let tableList = _.cloneDeep(dataSource);
        const index = tableList.findIndex((item) => username === item.username);
        const item = tableList[index];
        tableList.splice(index, 1, {
          ...item,
          ...{ state: number === 2 ? 0 : 2 },
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
    roleAllLIst,
    // 关闭modal
    onCancel: () => {
      setFormValues({});
      setModalInfo({
        ...modalInfo,
        visible: false,
      });
    },
    // 确定
    onOk: (type, values) => {
      // 处理角色
      if (!_.isEmpty(values.roles)) {
        let list = [];
        let item = roleAllLIst.filter((v) => {
          return v.roleName === values.roles;
        });
        list.push(item[0].id);
        values.roles = list;
      }

      dispatch({
        type: 'Rights/addUserOrRole',
        payload: {
          ...values,
          pathname: 'user',
          type: type === 'create' ? 'add' : 'edit',
        },
        callback: (res) => {
          if (res === 200) {
            setFormValues({});
            setModalInfo({
              ...modalInfo,
              visible: false,
            });
            // 刷新当前列表
            return dispatch({ type: 'Rights/getUserOrRoleQuery', payload: { ...query } });
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

export default connect(mapStateToProps)(UserRights);
