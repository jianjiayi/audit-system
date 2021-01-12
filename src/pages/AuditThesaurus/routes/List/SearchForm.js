/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import React from 'react';
import BaseForm from '@components/BaseForm';
import WrapAuthButton from '@components/WrapAuth';
import {
  sensitiveStatus,
  sensitiveCategories,
  sensitiveClassification,
  sensitiveLevel,
} from '@/pages/constants';
import styles from './index.module.less';

function SearchForm(props) {
  const { onReset = () => {}, onSubmit = () => {}, onCreate = () => {} } = props;

  // 多条件搜索表单
  const searchFormProps = {
    className: styles['form-contaner'],
    layout: 'inline',
    resetShow: true,
    authProps: {
      pathUrl: '/thesaurus',
      perms: 'thesaurus:select',
    },
    dataSource: [
      { 
        label: '敏感词', 
        name: 'word',
        allowClear: true, 
      },
      {
        label: '状态',
        type: 'SELECT',
        name: 'status',
        allowClear: true, 
        map: sensitiveStatus,
      },
      {
        label: '类别',
        type: 'SELECT',
        name: 'type',
        allowClear: true, 
        map: sensitiveCategories,
      },
      {
        label: '分类',
        type: 'SELECT',
        name: 'category',
        allowClear: true, 
        map: sensitiveClassification,
      },
      {
        label: '等级',
        type: 'SELECT',
        name: 'level',
        allowClear: true, 
        map: sensitiveLevel,
      },
    ],
    onReset: () => onReset(),
    onSubmit: (formValues) => onSubmit(formValues),
  };

  return (
    <BaseForm {...searchFormProps}>
      <WrapAuthButton
        pathUrl="/thesaurus"
        perms="thesaurus:add"
        text="新建"
        ghost
        type="primary"
        onClick={() => onCreate()}
      ></WrapAuthButton>
    </BaseForm>
  );
}

export default SearchForm;
