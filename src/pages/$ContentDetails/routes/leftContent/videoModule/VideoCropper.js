/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import classNames from 'classnames';
import { Form, InputNumber, Button } from 'antd';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const limitDecimals = value => {
  return value.replace(/[^\d]+/g,'')
}

const FormItemInput = (props) => {
  const { value = {}, onChange = () => {}, duration = 0 } = props;

  const handleChange = (v = 0, k = '') => {
    const obj = value || {};
    obj[k] = v;
    onChange({ ...obj });
  };
  

  return (
    <Form.Item noStyle>
      <Form.Item label="切头">
        <InputNumber
          min={0}
          max={duration}
          formatter={limitDecimals}
          parser={limitDecimals}
          style={{ width: '80%' }}
          defaultValue={value.start || 0}
          onChange={(e) => handleChange(e, 'start')}
        />{' '}
        秒
      </Form.Item>
      <Form.Item label="切尾">
        <InputNumber
          min={0}
          max={duration}
          formatter={limitDecimals}
          parser={limitDecimals}
          style={{ width: '80%' }}
          defaultValue={value.end || 0}
          onChange={(e) => handleChange(e, 'end')}
        />{' '}
        秒
      </Form.Item>
    </Form.Item>
  );
};

function VideoCropper(props) {
  const { className = '', duration = 0, pFrom, onFinish = () => {} } = props;
  const initialValues = {
    videoInfo: {
      start: 0,
      end: 0,
    },
  };

  const handelSubmit = () => {
    pFrom
    .validateFields()
    .then((values) => {
      console.log(values)
      onFinish(values);
    })
    .catch((errorInfo) => {
      console.log('errorInfo', errorInfo);
    });
    
  };

  return (
    <div className={classNames(className)}>
      <Form name="videoCropper" form={pFrom} {...layout} initialValues={initialValues}>
        <h3>视频剪切首尾过滤</h3>
        <Form.Item
          name="videoInfo"
          rules={[
            { required: true },
            {
              validator: (rule, value, callback) => {
                if(value.start===null || value.end===null){
                  return Promise.reject('切头、切尾不能为空');
                }
                if (value.start*1000 >= duration) {
                  return Promise.reject('切头时间不能大于视频总长度');
                }
                if (value.end*1000 >= duration) {
                  return Promise.reject('切尾时间不能大于视频总长度');
                }
                if (duration - value.start*1000 - value.end*1000 < 5000) {
                  return Promise.reject('裁切后视频剩余时间必须大于等于5秒');
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <FormItemInput duration={duration} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <Button type="primary" size='small' onClick={handelSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default VideoCropper;
