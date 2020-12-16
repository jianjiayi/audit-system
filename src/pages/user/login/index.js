/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { Form, Input, Button,} from 'antd';
import { useModel } from 'umi';

import Particles from '@/components/Particles';

import logo from '@/assets/logo.png';

import proSettings from './../../../../config/defaultSettings';
import userLogin from './models';
import styles from './index.less';

import { encode } from '@utils/base64';


const Login = () => {
  const { signin } = userLogin();
  const { setInitialState, refresh } = useModel('@@initialState');

  const onFinish = values => {
    const password = encode(values.password);
    
    signin({...values, password}, setInitialState, refresh);
  };

  return (
    <div className={styles.content}>
      <Particles />
      <div className={styles.main}>
        <div className={styles.header}>
          <img className={styles.logo} src={logo}></img>
          <h2 className={styles.title}>{proSettings.title}</h2>
        </div>
        <Form
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户账号' }]}
          >
            <Input placeholder="账号"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入用户密码！' }]}
          >
            <Input.Password placeholder="密码"/>
          </Form.Item>
          <Form.Item>
            <Button style={{width:'100%'}} type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
