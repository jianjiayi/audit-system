/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { message, Button, Form, Select, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { connect } from 'dva';

import RulesRender from '../../components/RulesRender';

import styles from './RuleJsonRender.module.less';

import { isShowInclude } from '../../utils';

const { Option } = Select;

function RuleJsonRender(props) {
  const {
    value = {},
    QDetails: { configRule = [] },
  } = props;

  // console.log('value',value)

  const [jsonArray, setJsonArray] = useState({});
  const [itemKey, setItemKey] = useState(1);
  const [itemExtra, setItemExtra] = useState('in');

  useEffect(() => {
    if(!_.isEmpty(value)){
      setJsonArray(value || {});
    }
  }, [value]);

  const addJsonItem = () => {
    let key = isShowInclude(itemKey.toString()) ? `${itemKey}_${itemExtra}` : itemKey;
    let value = null;
    // 判断是否存在该表单项
    if (jsonArray[key] !== undefined) return message.error('该表单项已被创建');

    jsonArray[key] = value;

    setJsonArray({ ...jsonArray });
  };

  return (
    <>
      <Input.Group compact>
        <Select
          defaultValue={itemKey}
          style={{ width: 120 }}
          onChange={(value) => {
            setItemKey(value);
          }}
        >
          {!_.isEmpty(configRule) &&
            configRule.map((item) => {
              return (
                item.name !== '媒体分类' && (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                )
              );
            })}
        </Select>
        {isShowInclude(itemKey.toString()) && (
          <Select
            defaultValue={itemExtra}
            style={{ width: 120 }}
            onChange={(value) => {
              setItemExtra(value);
            }}
          >
            <Option value="in">包含</Option>
            <Option value="notIn">不包含</Option>
          </Select>
        )}

        <Button type="primary" icon={<PlusOutlined />} onClick={() => addJsonItem()}>
          增加
        </Button>
      </Input.Group>

      {/* json数据 */}
      {!_.isEmpty(jsonArray) ? (
        <Form.Item
          className={styles.container}
          shouldUpdate={(prevValues, curValues) => {
            return prevValues.ruleJson !== curValues.ruleJson || prevValues.bid !== curValues.bid;
          }}
        >
          {({ getFieldValue }) => {
            const bid = getFieldValue('bid') || '';
            // console.log('bid', bid);
            return (
              !_.isEmpty(jsonArray) &&
              Object.keys(jsonArray).map((item) => {
                let params = item.split('_');
                let key = params[0];
                // console.log('params', params, 'key', key);

                return (
                  RulesRender(configRule, item, 'form', bid)[key]()
                );
              })
            );
          }}
        </Form.Item>
      ) : null}
    </>
  );
}

function mapStateToProps({ QDetails }) {
  return { QDetails };
}

export default connect(mapStateToProps)(RuleJsonRender);
