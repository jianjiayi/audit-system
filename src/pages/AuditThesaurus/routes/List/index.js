/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import _ from 'lodash';
import { Modal } from 'antd';

import SearchForm from './SearchForm';
import TableList from './TableList';
import ModalForm from './ModalForm';

const { confirm } = Modal;

function SensitiveWords(props) {
  // modal基本状态
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    title: '新建',
    type: 'create',
    footer: null,
  });

  // 临时存储用户信息
  const [formValues, setFormValues] = useState({});

  const {
    dispatch,
    Sensitive: { loading, query, dataSource, pagination },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Sensitive/init',
      payload: {},
    });
  }, [dispatch]);

  // 多条件搜索
  const searchProps = {
    onCreate: () => {
      setModalInfo({
        ...modalInfo,
        title: '创建敏感词',
        type: 'create',
        visible: true,
      });
    },
    onReset: () => {
      dispatch({
        type: 'Sensitive/init',
        payload: {},
      });
    },
    onSubmit: (values) => {
      console.log('formValues', values);
      dispatch({
        type: 'Sensitive/getSensitiveQuery',
        payload: {
          ...values,
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
        type: 'Sensitive/getSensitiveQuery',
        payload: {
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });
    },
    // 编辑
    onEditItem: (data) => {
      setFormValues({
        ...data,
        type: _.toString(data.type),
        status: _.toString(data.status),
        level: _.toString(data.level),
      });
      setModalInfo({
        ...modalInfo,
        title: '编辑敏感词',
        type: 'edit',
        visible: true,
      });
    },
    // 修改状态
    onChangeStatus: (number, data) => {
      if (number === 0) {
        confirm({
          title: '提示',
          content: '是否确认停用？',
          onOk() {
            return updateUserOrRoleAsyncFun(number, data);
          },
          onCancel() {},
        });
      } else {
        updateUserOrRoleAsyncFun(number, data);
      }
    },
  };

  // 更新用户状态
  const updateUserOrRoleAsyncFun = (number, data) => {
    console.log(number, data)
    dispatch({
      type: 'Sensitive/addOrUpdateSensitive',
      payload: {
        ...data,
        status: number === 1 ? '0' : '1',
        ApiType: 'update',
      },
      callback: () => {
        // 更新当前列表状态
        let tableList = _.cloneDeep(dataSource);
        const index = tableList.findIndex((item) => data.id === item.id);
        const item = tableList[index];
        tableList.splice(index, 1, {
          ...item,
          ...{ status: number === 1 ? 0 : 1 },
        });
        dispatch({
          type: 'Sensitive/save',
          payload: { dataSource: tableList },
        });
      },
    });
  };

  // modal 表单
  const modalProps = {
    ...modalInfo,
    formValues,
    // 关闭modal
    onCancel: () => {
      setFormValues({});
      setModalInfo({
        ...modalInfo,
        visible: false,
      });
    },
    // 确定
    onOk: (ApiType, values) => {
      console.log(ApiType, values);
      // type === 'create' 创建
      dispatch({
        type: 'Sensitive/addOrUpdateSensitive',
        payload: {
          ...formValues,
          ...values,
          pathname: 'user',
          ApiType: ApiType === 'create' ? 'add' : 'update',
        },
        callback: (res) => {
          if (res === 200) {
            setFormValues({});
            setModalInfo({
              ...modalInfo,
              visible: false,
            });
            // 刷新当前列表
            return dispatch({ type: 'Sensitive/getSensitiveQuery', payload: { ...query } });
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

function mapStateToProps({ Sensitive }) {
  return { Sensitive };
}

export default connect(mapStateToProps)(SensitiveWords);
