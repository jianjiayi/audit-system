/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import _ from 'lodash';
import { connect } from 'umi';

import { Select, Tag } from 'antd';

const { Option } = Select;

function SelectRender(props) {
  const {
    showType = 'form',
    value = [],
    onChange,
    QDetails: { sourceList },
  } = props;

  // console.log('SelectRendervalue---',value)

  return (
    <>
      {showType === 'form' ? (
        <Select
          mode="tags"
          size={'default'}
          placeholder="请选择"
          onChange={onChange}
          defaultValue={value !== null ? value : []}
        >
          {!_.isEmpty(sourceList) &&
            sourceList.map((item, index) => {
              return (
                <Option key={item.id+index} value={item.name}>
                  {item.name}
                </Option>
              );
            })}
        </Select>
      ) : (
        <>
          {!_.isEmpty(value) &&
            value.map((item, index) => {
              return <Tag key={index}>{item}</Tag>;
            })}
        </>
      )}
    </>
  );
}

function mapStateToProps({ QDetails }) {
  return { QDetails };
}

export default connect(mapStateToProps)(SelectRender);
