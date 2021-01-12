/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-unresolved */

import React from 'react';
import _ from 'lodash';
import { Tag } from 'antd';
import BaseTable from '@components/BaseTable';

import { rightStatus } from '@/pages/constants';

import styles from './index.module.less';

import WrapAuthButton from '@components/WrapAuth';

function TableList(props) {
  const {
    loading,
    dataSource,
    pagination,
    onPageChg = () => {},
    onEditItem = () => {},
    onChangeStatus = () => {},
  } = props;

  // 分页table列表
  const tableProps = {
    scroll: { x: 1000 },
    // 类型
    selectionType: null,
    // 表头
    columns: [
      {
        title: '用户名',
        dataIndex: 'username',
        fixed: 'left',
        width: '200px',
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
        width: '200px',
        dataIndex: 'loginTime',
      },
      {
        title: '登录IP',
        align: 'center',
        dataIndex: 'loginIp',
      },
      {
        title: '状态',
        align: 'center',
        dataIndex: 'state',
        render: (text) => <span>{text === '' ? '全部' : rightStatus[text]}</span>,
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
                pathUrl="/rights/user"
                perms={'user:edit'}
                type="primary"
                size="small"
                text="编辑"
                disabled={r.username === 'system'}
                onClick={() => onEditItem(r)}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/rights/user"
                perms={'user:edit'}
                size="small"
                text={r.state !== 2 ? '注销' : '重启'}
                disabled={r.username === 'system'}
                onClick={() => onChangeStatus('user', r.state, r.username)}
              ></WrapAuthButton>
            </div>
          );
        },
      },
    ],
    loading,
    dataSource,
    pagination,
    onPageChg: (page) => onPageChg(page),
  };

  return <BaseTable {...tableProps}></BaseTable>;
}

export default TableList;
