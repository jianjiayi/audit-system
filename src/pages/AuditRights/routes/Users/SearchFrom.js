/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import React from 'react';
import _ from 'lodash';

import BaseForm from '@components/BaseForm';

import { rightStatus } from '@/pages/constants';

import WrapAuthButton from '@components/WrapAuth';
import styles from './index.module.less';


function SearchFrom(props) {
  const { roleList = [], onReset = () => {}, onSubmit = () => {}, onCreate = () => {} } = props;

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
    onReset: () => onReset(),
    onSubmit: (values) => onSubmit(values),
  };

  return (
    <BaseForm {...searchFormProps}>
      <WrapAuthButton
        pathUrl="/rights/user"
        perms="user:add"
        text="新建"
        ghost
        type="primary"
        onClick={() => onCreate('create')}
      ></WrapAuthButton>
    </BaseForm>
  );
}

export default SearchFrom;
