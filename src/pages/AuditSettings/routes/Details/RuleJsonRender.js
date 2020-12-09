/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { message, Button, Form, Select, Input } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { connect } from 'umi';

import RulesRender from '../../components/RulesRender';

import styles from './RuleJsonRender.module.less';

import { isShowInclude } from '../../utils';

const { Option } = Select;

function RuleJsonRender(props) {
  const {
    pForm,
    value = {},
    onChange = () => {},
    QDetails: { configRule = [] },
  } = props;

  // console.log('pForm222',pForm)

  const [jsonArray, setJsonArray] = useState({});
  const [itemKey, setItemKey] = useState('无');
  const [itemExtra, setItemExtra] = useState('in');

  useEffect(() => {
    if (!_.isEmpty(value)) {
      setJsonArray(value || {});
    }
  }, [value]);

  // 增加配置项
  const addJsonItem = () => {
    let key = isShowInclude(itemKey.toString()) ? `${itemKey}_${itemExtra}` : itemKey;
    let value = null;
    // 判断是否存在该表单项
    if (jsonArray[key] !== undefined) return message.error('该表单项已被创建');

    jsonArray[key] = value;

    setJsonArray({ ...jsonArray });
  };

  // 删除配置项
  const delJsonItem = (key) => {
    console.log(key)
    let arr = _.clone(jsonArray);
    delete arr[key];
    setJsonArray({ ...arr });
    onChange(arr)
  }

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

        <Button
          type="primary"
          disabled={itemKey === '无'}
          icon={<PlusOutlined />}
          onClick={() => addJsonItem()}
        >
          增加
        </Button>
      </Input.Group>

      {/* json数据 */}
      {!_.isEmpty(jsonArray) && pForm ? (
        <Form.Item
          key="qqqqqqqq"
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
                  <div key={item} className={styles.ruleitem}>
                    {RulesRender(configRule, item, 'form', bid, pForm)[key]()}
                    {key !== '8' && (
                      <Button
                        className={styles.delete_button}
                        type="link"
                        icon={<MinusCircleOutlined />}
                        onClick={() => delJsonItem(item)}
                      />
                    )}
                  </div>
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
