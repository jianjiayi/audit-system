/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import { connect } from 'dva';
import { Form } from 'antd';
import CheckBoxRender from './CheckBoxRender';
import * as api from '../../services/index.js';

function CascaderCheckBox(props) {
  const { 
    showType = 'form', 
    map = {}, 
    itemName = '', 
    value = [], 
    parentName, 
    onChange,
  } = props;

  // 媒体类型数据
  const [mediaInfo, setMediaInfo] = useState({});
  // 媒体分类数据
  const [mediaType, setMediaType] = useState([]);

  // 异步数据
  const  getAsyncMediaInfoData = async () => {
    const {code, data} = await api.getMediaInfo({type: 'rmw_media_type'});
    console.log(code, data)
  }
  const  getAsyncMediaTypeData = async () => {
    const {code, data} = await api.getMediaInfo({type: 'rmw_media_type'});
    console.log(code, data)
  }

  useEffect(()=>{
    getAsyncMediaInfoData()
  },[])
  

  const CheckBoxRenderProps = {
    showType,
    map,
    value,
    onChange,
  };

  const params = itemName.split('_');
  const type = params[1];

  return (
    <>
      <Form.Item >
        <CheckBoxRender {...CheckBoxRenderProps}></CheckBoxRender>
      </Form.Item>

      <Form.Item
        key={`8_${type}`}
        labelCol={{ span: 24 }}
        style={{ marginBottom: 0 }}
        label={`媒体分类${type === 'in' ? '(包含)' : '(不包含)'}`}
        shouldUpdate={(prevValues, curValues) => prevValues.ruleJson !== curValues.ruleJson}
      >
        {({ getFieldValue }) => {
          const mediaList = getFieldValue([parentName, itemName]) || [];
          return (
            <>
              {mediaList.map((item,i) => {
                return (
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    label={map[item]}
                    key={item+i}
                    name={[parentName, `8_${type}`, `${item}`]}
                  >
                    <CheckBoxRender
                      showType = {showType}
                      map={{ 1: '公众媒体', 2: '自媒体(机构)', 3: '自媒体(个人)' }}
                    ></CheckBoxRender>
                  </Form.Item>
                );
              })}
            </>
          );
        }}
      </Form.Item>
    </>
  );
}


export default CascaderCheckBox;
