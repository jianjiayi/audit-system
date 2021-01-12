/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-unresolved */

import React from 'react';
import _ from 'lodash';
import BaseTable from '@components/BaseTable';
import WrapAuthButton from '@components/WrapAuth';
import {
  sensitiveStatus,
  sensitiveCategories,
  sensitiveClassification,
  sensitiveLevel,
} from '@/pages/constants';
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

  // 分页table列表
  const tableProps = {
    scroll: { x: 1000 },
    // 类型
    selectionType: null,
    // 表头
    columns: [
      {
        title: '敏感词ID',
        dataIndex: 'id',
        fixed: 'left',
        width: '100px',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '敏感词',
        dataIndex: 'word',
        fixed: 'left',
        render: (text) => <span>{text}</span>,
      },
      {
        title: '类别',
        align: 'center',
        dataIndex: 'type',
        render: (text) => <span>{sensitiveCategories[text]}</span>,
      },
      {
        title: '分类',
        align: 'center',
        dataIndex: 'category',
        render: (text) => <span>{sensitiveClassification[text]}</span>,
      },
      {
        title: '等级',
        align: 'center',
        dataIndex: 'level',
        render: (text) => <span>{sensitiveLevel[text]}</span>,
      },
      {
        title: '状态',
        align: 'center',
        dataIndex: 'status',
        render: (text) => <span>{sensitiveStatus[text]}</span>,
      },
      {
        title: '备注',
        align: 'center',
        dataIndex: 'remark',
      },
      {
        title: '操作人',
        align: 'center',
        dataIndex: 'updateBy',
      },
      {
        title: '创建时间',
        align: 'center',
        dataIndex: 'createTime',
      },
      {
        title: '更新时间',
        align: 'center',
        dataIndex: 'updateTime',
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
                pathUrl="/thesaurus"
                perms={'thesaurus:edit'}
                type="primary"
                size="small"
                text="编辑"
                onClick={() => onEditItem(r)}
              ></WrapAuthButton>
              <WrapAuthButton
                pathUrl="/thesaurus"
                perms={'thesaurus:edit'}
                size="small"
                text={r.status === 0 ? '停用' : '启用'}
                onClick={() => onChangeStatus(r.status, r)}
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
