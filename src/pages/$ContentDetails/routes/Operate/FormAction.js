/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-func-assign */
/* eslint-disable no-control-regex */

import React, { useEffect } from 'react';
import { Form, Checkbox, Radio, } from 'antd';
import classNames from 'classnames';
import { connect } from 'umi';
import _ from 'lodash';
import TagList from './components/TagList';
import SelectModeTags from './components/SelectModeTags';
import ThreeLevelCategory from '@/components/BaseForm/ThreeLevelCategory';
import { passReason, rejectReason } from '@/pages/constants';
import WrapAuthButton from '@components/WrapAuth';

import styles from './FormAction.module.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const formItemLayout = {
  labelAlign: 'left',
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

function FormAction(props) {
  const {
    name = 'FormAction',
    pForm: selfForm,
    className,
    CDetails: {
      curArt,
      newsDataType,
      auditState,
      reason,
      forbiddenWordList, // 违禁词
      sensitiveWordList, // 敏感词
      hotWord, // 热词
      personalWord, // 人物词
    },
  } = props;

  useEffect(() => {
    setInitFormValues();
  }, [JSON.stringify(curArt)]);


  const setInitFormValues = ()=>{
    selfForm.setFieldsValue({
      isDup: curArt.isDup || 0,
      hotValue: [curArt.hotValue] || 0,
      bigEvent: [curArt.bigEvent] || 0,
      tags: curArt.tags || [],
      auditState: auditState !== 'PASS' && auditState !== 'REJECT' ? null : auditState,
      reason: reason || [],
      category: {
        category1: curArt.categoryFirst || null,
        category2: curArt.categorySecond || null,
        category3: curArt.categoryThird || null,
      }
    });
  }
  
  const formProps = {
    name,
    form: selfForm,
    ...formItemLayout,
    className: classNames(className, styles.container),
  };

  return (
    <Form {...formProps} from={selfForm}>
      <Form.Item 
        label="分类" 
        labelCol= {{ span: 4}}
        name="category" 
        rules={[
          { required: true }, 
          { 
            validator : (rule, value, callback) => {
              if(!value.category1 && !value.category2 && !value.category3){
                return Promise.reject('请选择分类');
              }
              return Promise.resolve();
            } 
          }
        ]}
      >
        <ThreeLevelCategory newsType={newsDataType} />
      </Form.Item>

      <TagList label="违禁词" dataList={forbiddenWordList} color="#ff1840"></TagList>
      <TagList label="敏感词" dataList={sensitiveWordList} color="#ff6600"></TagList>
      <TagList label="热词" dataList={hotWord} color="#1890ff"></TagList>
      <TagList label="人物词" dataList={personalWord} color="#00ff97"></TagList>

      <Form.Item {...layout} label="是否可重复分发" name="isDup">
        <Radio.Group>
          <Radio value={0}>是</Radio>
          <Radio value={1}>否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Form.Item noStyle name="hotValue">
          <Checkbox.Group>
            <Checkbox value={1}>热点</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item noStyle name="bigEvent">
          <Checkbox.Group>
            <Checkbox value={1}>大事件</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form.Item>

      <Form.Item label="标签" name="tags" help={'最多支持10个标签，单个50个字符'}>
        <SelectModeTags></SelectModeTags>
      </Form.Item>

      <Form.Item
        label="审核结果"
        labelCol={{ span: 6 }}
        name="auditState"
        rules={[{ required: true, message: `选择审核结果` }]}
      >
        <Radio.Group>
          <Radio value="PASS">审核通过</Radio>
          <Radio value="REJECT">审核未通过</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        shouldUpdate={(prevValues, curValues) => {
          return prevValues.auditState !== curValues.auditState;
        }}
      >
        {({ getFieldValue }) => {
          const result = getFieldValue('auditState');
          if (!result) return <></>;

          const getReasonTpl = (rules, data) => {
            return (
              <Form.Item name="reason" rules={rules}>
                <Checkbox.Group>
                  {data.map((item, index) => {
                    return (
                      <Checkbox key={index} value={item}>
                        {item}
                      </Checkbox>
                    );
                  })}
                </Checkbox.Group>
              </Form.Item>
            );
          };

          return result === 'PASS'
            ? getReasonTpl(null, passReason)
            : result === 'REJECT'
            ? getReasonTpl([{ required: true, message: `选择审核未通过原因` }], rejectReason)
            : null;
        }}
      </Form.Item>
    </Form>
  );
}
function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(FormAction);
