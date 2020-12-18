/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Form, Tag } from 'antd';
import _ from 'lodash';

export default function TagList(props) {
  const { label, dataList, color } = props;

  return (
    <Form.Item label={label}>
      <p style={{ marginTop: '6px', marginLeft: '10px' }}>
        {!_.isEmpty(dataList) ? (
          dataList.map((item, index) => {
            return (
              <Tag key={index} color={color}>
                {item}
              </Tag>
            );
          })
        ) : (
          <span>暂无</span>
        )}
      </p>
    </Form.Item>
  );
}
