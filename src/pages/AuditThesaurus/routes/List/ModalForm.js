/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-func-assign */

import React from 'react';

import { Modal, Button } from 'antd';
import BaseForm from '@components/BaseForm';
import {
  sensitiveStatus,
  sensitiveCategories,
  sensitiveClassification,
  sensitiveLevel,
} from '@/pages/constants';

import styles from './index.module.less';

function ModalForm(props) {
  const { type = 'create', onCancel = () => {}, onOk = () => {}, formValues = {}, ...rest } = props;

  /**表单参数*/
  const editFormProps = {
    className: styles['form-contaner'],
    layout: 'vertical',
    submitText: '保存',
    formLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    },
    dataSource: [
      {
        label: '敏感词',
        name: 'word',
        required: true,
      },
      {
        label: '状态',
        type: 'SELECT',
        name: 'status',
        required: true,
        map: sensitiveStatus,
      },
      {
        label: '类别',
        type: 'SELECT',
        name: 'type',
        required: true,
        map: sensitiveCategories,
      },
      {
        label: '分类',
        type: 'SELECT',
        name: 'category',
        required: true,
        map: sensitiveClassification,
      },
      {
        label: '等级',
        type: 'SELECT',
        name: 'level',
        required: true,
        map: sensitiveLevel,
      },
      {
        label: '备注',
        name: 'remark',
        type: 'TextArea',
        required: true,
        showCount: true,
        maxLength: 200,
      },
    ],
    formValues,
    onSubmit: (values) => onOk(type, values),
  };

  const modalProps = {
    ...rest,
    centered: true,
    destroyOnClose: true,
    onCancel,
  };

  return (
    <Modal {...modalProps}>
      <BaseForm {...editFormProps}>
        <Button onClick={() => onCancel()}>取消</Button>
      </BaseForm>
    </Modal>
  );
}

export default ModalForm;
