/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-array-index-key */
import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import { connect } from 'umi';
import { Select, Tag } from 'antd';
import * as api from '../../services/index.js';

const { Option } = Select;

function SelectRender(props) {
  const {
    API = '',
    showType = 'form',
    value = [],
    onChange,
  } = props;

  const [dataSource, setDataSource] = useState([]);

  const getAsyncData = async (name) => {
    const { code, data } = await api.getContentOrCrawSource({
      API: name,
    });
    // console.log(code ,data)
    if (code === 200) return setDataSource(data);
  };


  // 获取词库
  useEffect(() => {
    if(API){
      getAsyncData(API);
    }
  }, [API]);

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
          filterOption={(input, option) => {
            return option.children && option.children.indexOf(input) >= 0
          }}
        >
          {!_.isEmpty(dataSource) &&
            dataSource.map((item, index) => {
              return (
                <Option key={item.id+index} value={item.name}>
                  {`${item.name}(${item.id})`}
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
