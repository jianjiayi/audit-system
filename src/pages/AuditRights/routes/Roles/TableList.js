/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-unresolved */

import React from 'react';
import _ from 'lodash';
import BaseTable from '@components/BaseTable';
import { roleStatus } from '@/pages/constants';
import WrapAuthButton from '@components/WrapAuth';

import styles from './index.module.less';

function TableList(props) {
  const {
    loading,
    dataSource,
    pagination,
    onPageChg = () => {},
    onEditItem = () => {},
    onChangeStatus = () => {},
  } = props;

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
                onClick={() => onEditItem(r)}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/rights/role"
                perms="role:edit"
                size="small"
                text={r.state !== 1 ? '注销' : '重启'}
                disabled={r.roleName === 'system'}
                onClick={() => onChangeStatus('role', r.state, r.id)}
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
