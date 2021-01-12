/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import React from 'react';
import _ from 'lodash';

import BaseForm from '@components/BaseForm';
import { roleStatus } from '@/pages/constants';
import WrapAuthButton from '@components/WrapAuth';

import styles from './index.module.less';

function SearchForm(props) {
  const { onReset = () => {}, onSubmit = () => {}, onCreate = () => {} } = props;

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
    onReset: () => onReset(),
    onSubmit: (values) => onSubmit(values),
  };

  return (
    <BaseForm {...searchFormProps}>
      <WrapAuthButton
        pathUrl="/rights/role"
        perms="role:add"
        text="新建"
        ghost
        type="primary"
        onClick={() => onCreate('create')}
      ></WrapAuthButton>
    </BaseForm>
  );
}

export default SearchForm;
