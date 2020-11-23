/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  LockTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, Space, message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import {
  useIntl,
  // FormattedMessage,
  useModel,
} from 'umi';

import proSettings from './../../../../config/defaultSettings';

import { getFakeCaptcha } from '@/services/login';
import userLogin from './models';
import styles from './index.less';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = () => {
  const { signin } = userLogin();
  const { setInitialState, refresh } = useModel('@@initialState');

  const handleSubmit = (values) => {
    signin(values, setInitialState, refresh);
  };

  return (
    <div className={styles.content}>
      <div className={styles.main}>
      <h2 className={styles.title}>{proSettings.title}</h2>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            // loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={async (values) => {
          handleSubmit(values);
        }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockTwoTone className={styles.prefixIcon} />,
            }}
            placeholder="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>
      </ProForm>
      </div>
    </div>
  );
};

export default Login;
