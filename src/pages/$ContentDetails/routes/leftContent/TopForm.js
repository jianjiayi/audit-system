/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import classNames from 'classnames';
import { Form, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import WrapAuthButton from '@components/WrapAuth';
import { ExTime } from '@utils/utils.js';
import styles from './index.module.less';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const formItemLayout = {
  labelAlign: 'left',
  labelCol: { span: 3 },
  wrapperCol: { span: 20 },
};

function TopForm(props) {
  const {
    curArt,
    isEdit,
    pForm,
    className,
    handelSaveArt= ()=>{},
    changeIsEdit =() =>{},
  } = props;

  return (
    <Form
      form ={pForm}
      {...formItemLayout}
      className={classNames(className, styles.container)}
    >
      <div className={styles.header}>
        <div className={styles['form-box']}>
          <Form.Item
            label="标题"
            name="title"
            initialValue={curArt.title}
            shouldUpdate
            rules={[{ required: true, message: `请输入标题` }]}
          >
            {isEdit ? (
              <Input placeholder="请输入标题" />
            ) : (
              <h3 className={styles.titleText}>{curArt.title}</h3>
            )}
          </Form.Item>
          <Form.Item label="&nbsp;&nbsp;&nbsp;ID" name="id" initialValue={curArt.id}>
            <span>{curArt.id}</span>
          </Form.Item>
          <Form.Item
            label="来源"
            name='originName'
            initialValue={curArt.originName}
            rules={[{ required: true, message: `请输入来源` }]}
          >
            {isEdit ? (
              <Input placeholder="请输入来源" />
            ) : (
              <span className={styles.title}>{curArt.originName}</span>
            )}
          </Form.Item>
          <Form.Item
            label="时间"
            name="datetime"
            initialValue={moment(curArt.pubTime)}
            rules={[{ required: true, message: `请选择时间` }]}
          >
            {isEdit ? (
              <DatePicker showTime format={dateFormat} />
            ) : (
              <span className={styles.title}>{ExTime.formatDate(curArt.pubTime)}</span>
            )}
          </Form.Item>
        </div>
        <div className={styles['button-box']}>
          {!isEdit && (
            <WrapAuthButton
              pathUrl="/:type/cdetails"
              text="修改"
              perms="news:edit"
              type="primary"
              size="small"
              onClick={() => {
                changeIsEdit(true);
              }}
            />
          )}
          {isEdit && (
            <div className={styles['button-group']}>
              <Button type="primary" size="small" type="primary" onClick={() => handelSaveArt()}>
                确定
              </Button>
              <Button
                size="small"
                onClick={() => {
                  changeIsEdit(false);
                }}
              >
                取消
              </Button>
            </div>
          )}
        </div>
      </div>
    </Form>
  )
}

export default TopForm;
