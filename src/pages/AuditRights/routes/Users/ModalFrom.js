/* eslint-disable react/no-array-index-key */
/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-func-assign */

import React from 'react';
import _ from 'lodash';
import { Modal, Button, Select } from 'antd';
import BaseForm from '@components/BaseForm';

import styles from './index.module.less';

const { Option } = Select;

function ModalForm(props) {
  const {
    type = 'create',
    roleAllLIst = [],
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
        label: '用户名',
        name: 'username',
        required: true,
        disabled: type !== 'create' && true,
        type: 'TextArea',
        showCount: true,
        maxLength: 100,
      },
      {
        label: '密码',
        name: type === 'create' ? 'password' : null,
        required: true,
        validator: (rule, value, callback) => {
          // console.log('rule, value',value)
          const pwdRegex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');
          if (!pwdRegex.test(value)) {
            return callback(`密码中必须包含大小写 字母、数字、特殊字符，至少8个字符，最多30个字符`);
          }
          return callback();
        },
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
