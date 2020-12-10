/* eslint-disable react/no-array-index-key */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable array-callback-return */

import React, { useState, useEffect, useRef } from 'react';
import { useModel, connect } from 'umi';
import _ from 'lodash';
import { Modal, message, Select, Input, Tag } from 'antd';

import BaseForm from '@components/BaseForm';
import BaseTable from '@components/BaseTable';
import ModalForm from '../../components/ModalForm';

import { rightStatus, dateFormat } from '@/pages/constants';

import styles from './index.module.less';

import WrapAuthButton from '@components/WrapAuth';

const { TextArea } = Input;
const { Option } = Select;

const { confirm } = Modal;

function UserRights(props) {
  const {
    initialState: { currentUser = {} },
  } = useModel('@@initialState');

  const modalFormRef = useRef(null);
  // modal标题
  const [title, setTitle] = useState('');
  // 临时存储用户信息
  const [formValues, setFormValues] = useState({});
  // 保存由业务线创建出来的角色列表
  const [ItemOptions, setItemOptions] = useState([]);
  // 表单按钮状态
  const [btnLoading, setBtnLoading] = useState(false);

  const {
    dispatch,
    business = currentUser.business || {},
    Rights: { loading, query, roleList, roleAllLIst, dataSource, pagination },
  } = props;

  useEffect(() => {
    dispatch({
      type: 'Rights/init',
      payload: {
        type: 'user',
      },
    });
  }, [dispatch]);

  // 多条件搜索表单
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/rights/user',
      perms: 'user:select',
    },
    dataSource: [
      {
        label: '角色',
        type: 'SELECT',
        name: 'roleId',
        initialValue: '',
        map: { '': '全部', ...roleList },
      },
      { label: '时间', name: 'datatime', type: 'DateTimeStartEnd' },
      {
        label: '状态',
        type: 'SELECT',
        name: 'state',
        initialValue: '',
        map: rightStatus,
      },
      { label: '真实姓名', name: 'name' },
      { label: 'ip', name: 'loginIp' },
      { label: '用户名', name: 'username' },
    ],
    onReset: () => {
      dispatch({
        type: 'Rights/init',
        payload: {
          type: 'user',
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
          type: 'user',
        },
      });
    },
  };

  // 分页table列表
  const tableProps = {
    // 类型
    selectionType: null, //checkbox or radio or null||false
    // 表头
    columns: [
      {
        title: '用户名',
        dataIndex: 'username',
        width: '100px',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '真实姓名',
        align: 'center',
        dataIndex: 'name',
      },
      {
        title: '角色',
        align: 'center',
        dataIndex: 'roles',
        render: (data) => {
          return (
            !_.isEmpty(data) &&
            data.map((item, index) => {
              return (
                <Tag color="#87d068" style={{ marginBottom: '5px' }} key={item.id}>
                  {item.roleName}
                </Tag>
              );
            })
          );
        },
      },
      {
        title: '最近一次登录时间',
        align: 'center',
        dataIndex: 'loginTime',
      },
      {
        title: '登录IP',
        align: 'center',
        dataIndex: 'loginIp',
      },
      // {
      //   title: '登出时间',
      //   align: 'center',
      //   dataIndex: 'logoutTime',
      // },
      {
        title: '状态',
        align: 'center',
        dataIndex: 'state',
        render: (text) => <span>{text === '' ? '全部' : rightStatus[text]}</span>,
      },
      {
        title: '操作',
        width: '150px',
        align: 'center',
        render(r) {
          return r.username !== 'system' ? (
            <div className={styles.tableaction}>
              <WrapAuthButton
                pathUrl="/rights/user"
                perms={'user:edit'}
                type="primary"
                size="small"
                text="编辑"
                onClick={() => openUserModal('edit', r)}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/rights/user"
                perms={'user:edit'}
                size="small"
                text={r.state !== 2 ? '注销' : '重启'}
                onClick={() => updateUserOrRoleStatus('user', r.state, r.username)}
              ></WrapAuthButton>
            </div>
          ) : null;
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
          type: 'user',
          pageNum: page.current,
          pageSize: page.pageSize,
        },
      });
    },
  };

  // 更新用户或角色状态
  const updateUserOrRoleStatus = (type, number, username) => {
    console.log(type, number, username);
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

  // 点击打开用户编辑模态框
  const openUserModal = (type, values) => {
    setTitle(type === 'create' ? '创建' : '编辑');
    modalFormRef.current.setVisible(true);
    if (!values) return;
    values.roles = (values.roles[0] && values.roles[0].roleName) || null;
    console.log(values);
    
    setFormValues(values);
  };

  // 创建用户moddal表
  const modalFormProps = {
    title: title + '用户',
    footer: null,
    onCancel: () => {
      modalFormRef.current.setModalStatus(false, () => {
        setItemOptions([]);
        setFormValues({});
      });
    },

    /**表单参数*/
    formProps: {
      className: styles['form-contaner'],
      layout: 'vertical',
      submitText: '保存',
      loading: btnLoading,
      dataSource: [
        {
          label: '用户名',
          name: 'username',
          required: true,
          disabled: title !== '创建' && true,
          type: 'TextArea',
          showCount: true,
          maxLength: 100,
        },
        {
          label: '密码',
          name: title === '创建' ? 'password' : null,
          required: true,
          type: 'TextArea',
          showCount: true,
          maxLength: 100,
        },
        {
          label: '角色',
          name: 'roles',
          required: true,
          itemRender: (
            <Select showSearch placeholder="请选择角色">
              {!_.isEmpty(roleAllLIst) &&
                roleAllLIst.map((item, index) => {
                  return (
                    <Option key={index} value={item.roleName}>
                      {item.roleName}
                    </Option>
                  );
                })}
            </Select>
          ),
        },

        {
          label: '真实姓名',
          name: 'name',
          required: true,
          type: 'TextArea',
          showCount: true,
          maxLength: 100,
        },

        {
          label: '备注',
          name: 'remarks',
          type: 'TextArea',
          showCount: true,
          maxLength: 200,
        },
      ],
      formValues: formValues,
      onSubmit: (formValues) => {
        console.log('formValues', formValues);
        // 处理角色
        if (!_.isEmpty(formValues.roles)) {
          let list = [];
          let item = roleAllLIst.filter((v) => {
            return v.roleName === formValues.roles;
          });
          console.log(item);
          list.push(item[0].id);
          formValues.roles = list;
        }
        // 设置按钮状态
        setBtnLoading(true);

        dispatch({
          type: 'Rights/addUserOrRole',
          payload: {
            ...formValues,
            pathname: 'user',
            type: title === '创建' ? 'add' : 'edit',
          },
          callback: (res) => {
            setBtnLoading(false);

            if (res === 200) {
              modalFormRef.current.setModalStatus(false, () => {
                setItemOptions([]);
                setFormValues({});
              });

              console.log('query:', query);

              // 刷新当前列表
              dispatch({ type: 'Rights/getUserOrRoleQuery', payload: { ...query } });

              return;
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
          pathUrl="/rights/user"
          perms="user:add"
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

export default connect(mapStateToProps)(UserRights);
