/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {
  LockTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { Alert } from 'antd';

import ProForm, { ProFormText } from '@ant-design/pro-form';
import {
  useModel,
} from 'umi';

import logo from '@/assets/logo.svg';

import proSettings from './../../../../config/defaultSettings';
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
        <div className={styles.header}>
          <img className={styles.logo} src={logo}></img>
          <h2 className={styles.title}>{proSettings.title}</h2>
        </div>
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
