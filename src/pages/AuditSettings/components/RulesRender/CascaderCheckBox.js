/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
/* eslint-disable no-await-in-loop */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import CheckBoxRender from './CheckBoxRender';
import * as api from '../../services/index.js';

function CascaderCheckBox(props) {
  const { showType = 'form', map = {}, itemName = '', value = [], parentName, onChange } = props;

  // 媒体类型数据
  const [mediaInfo, setMediaInfo] = useState({});
  // 媒体分类数据
  const [mediaType, setMediaType] = useState([]);

  const ArrToObj = (data) => {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
      obj[data[i].value] = data[i].label;
    }
    return obj;
  };

  // 异步数据
  const getAsyncMediaInfoData = async () => {
    const { code, data } = await api.getMediaInfo({ type: 'rmw_media_type' });
    setMediaInfo(ArrToObj(data));
    if (code === 200) {
      let mediaInfoObj = {};
      for (let i in data) {
        let { code: c, data: d } = await api.getMediaInfo({ type: data[i].value });
        if (c === 200) {
          mediaInfoObj[data[i].value] = ArrToObj(d);
        }
      }
      setMediaType(mediaInfoObj);
    }
  };

  useEffect(() => {
    getAsyncMediaInfoData();
  }, []);

  const CheckBoxRenderProps = {
    showType,
    map: mediaInfo,
    value,
    onChange,
  };

  const params = itemName.split('_');
  const type = params[1];

  return (
    <>
      <Form.Item key={'wwwwwwwwww'}>
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
              {mediaList.map((item) => {
                return (
                  <Form.Item
                    style={{ marginBottom: 0 }}
                    label={map[item]}
                    key={item}
                    name={[parentName, `8_${type}`, `${item}`]}
                  >
                    <CheckBoxRender
                      showType={showType}
                      map={mediaType[item]}
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
