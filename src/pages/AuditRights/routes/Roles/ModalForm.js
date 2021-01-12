/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-func-assign */

import React from 'react';
import _ from 'lodash';
import { Modal, Button } from 'antd';
import BaseForm from '@components/BaseForm';
import TreeSelectComponent from './TreeSelect';

import styles from './index.module.less';

function ModalForm(props) {
  const {
    type = 'create',
    permissionDataList = [],
    onCancel = () => {},
    onOk = () => {},
    formValues = {},
    ...rest
  } = props;

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
        label: '角色名',
        name: 'roleName',
        required: true,
        type: 'TextArea',
        showCount: true,
        maxLength: 200,
      },
      {
        label: '分配权限',
        name: 'permissionIds',
        itemRender: (
          <TreeSelectComponent permissionDataList={permissionDataList}></TreeSelectComponent>
        ),
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
