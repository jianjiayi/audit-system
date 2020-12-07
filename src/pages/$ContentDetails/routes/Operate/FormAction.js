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

import React, { useState, useEffect, useRef } from 'react';
import { message, Form, Checkbox, Radio, Input, Tag, Button, Row, Col, Icon } from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';
import _ from 'lodash';

import ThreeLevelClassification from './ThreeLevelClassification';

import { passReason, rejectReason } from '@/pages/constants';

import styles from './FormAction.module.less';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

function FormAction(props) {
  const {
    name = 'FormAction',
    pForm: selfForm, 
    className,
    dispatch,
    CDetails: {
      curArt,
      auditState,
      reason,
      forbiddenWordList, // 违禁词
      sensitiveWordList, // 敏感词
      hotWord, // 热词
      personalWord, // 人物词
    },
  } = props;

  // console.log('curArt',curArt)

  useEffect(()=>{
    selfForm.setFieldsValue({
      isDup: curArt.isDup || 0,
      hotValue: [curArt.hotValue] || 0,
      bigEvent: [curArt.bigEvent] || 0,
      tags: curArt.tags || [],
      auditState: (auditState !== 'PASS' &&  auditState !== 'REJECT') ? null : auditState,
      reason: reason || [],
      categoryFirst: curArt.categoryFirst || null,
      categorySecond: curArt.categorySecond || null,
      categoryThird: curArt.categoryThird || null
    });
  },[JSON.stringify(curArt)])

  const filterTags = (list = [])=>{
    // console.log('222222222',list);
    return list.map((item)=>{
      return item = {
        type: 0,
        text: item,
      }
    })
  }

  const saveInputRef = useRef(null);
  // 存储标签
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);

  useEffect(() => {
    setTags(filterTags(curArt.tags))
  }, [curArt.tags])


  const formItemLayout = {
    labelAlign: 'left',
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  };

  // 删除标签tags
  const deleteTagClose = (removedTag,index) => {
    const tagsList = _.cloneDeep(tags);
    tagsList.splice(index,1);
    setTags(tagsList);
    selfForm.setFieldsValue({ tags: [...tagsList] });
  };
  // 保存标签
  const handleInputConfirm = () => {
    const inputValue = saveInputRef.current.state.value;
    if (!inputValue) return false;

    if (calcStrLength(inputValue) > 50) {
      return message.error('您输入的文字过长，最多可输入50个字');
    }

    // 判断是否存在该表单项
    const isExist = tags.find((v) => {
      return v.text === inputValue;
    });
    if (isExist) {
      return message.error('该标签已存在，请不要重复创建');
    }

    dispatch({
      type: 'CDetails/getCheckoutTags',
      payload: {
        name: inputValue,
      },
      callback: (data) => {
        setTags([...tags, { type: data ? 1 : 0, text: inputValue }]);
        // 设置表单项值
        selfForm.setFieldsValue({ tags: [...tags, { type: data ? 1 : 0, text: inputValue }] });
        // 关闭输入框
        setInputVisible(false);
      },
    });
  };
  // 取消
  const handleInputCancel = () => {
    setInputVisible(false);
  };

  // 标签文字长度校验
  const calcStrLength = value => {
    return Math.ceil(calcByteLength(value) / 2);
  };
  const calcByteLength = s => {
    return s.replace(/[^\x00-\xff]/g, 'aa').length;
  };

  const formProps = {
    name,
    form: selfForm,
    ...formItemLayout,
    className: classNames(className, styles.container),
  };

  return (
    <Form {...formProps} from={selfForm}>
      <ThreeLevelClassification pForm={selfForm}/>
      <Form.Item label="违禁词">
        <p className={styles.p_text}>
          {!_.isEmpty(forbiddenWordList) ? (
            forbiddenWordList.map((item, index) => {
              return (
                <Tag key={index} color="red">
                  {item}
                </Tag>
              );
            })
          ) : (
            <span>暂无</span>
          )}
        </p>
      </Form.Item>
      <Form.Item label="敏感词">
        <p className={styles.p_text}>
          {!_.isEmpty(sensitiveWordList) ? (
            sensitiveWordList.map((item, index) => {
              return (
                <Tag key={index} color="volcano">
                  {item}
                </Tag>
              );
            })
          ) : (
            <span>暂无</span>
          )}
        </p>
      </Form.Item>
      <Form.Item label="热词">
        <p className={styles.p_text}>
          {!_.isEmpty(hotWord) ? (
            hotWord.map((item, index) => {
              return (
                <Tag key={index} color="blue">
                  {item}
                </Tag>
              );
            })
          ) : (
            <span>暂无</span>
          )}
        </p>
      </Form.Item>
      <Form.Item label="人物词">
        <p className={styles.p_text}>
          {!_.isEmpty(personalWord) ? (
            personalWord.map((item, index) => {
              return (
                <Tag key={index} color="green">
                  {item}
                </Tag>
              );
            })
          ) : (
            <span>暂无</span>
          )}
        </p>
      </Form.Item>

      <Form.Item
        {...layout}
        label="是否可重复分发"
        name="isDup"
      >
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
      {/* <Form.Item label="标签" name="tags" help={'最多支持10个标签，单个50个字符'} >
        <SelectModeTags></SelectModeTags>
      </Form.Item> */}
      <Form.Item label="标签" name="tags" help={'最多支持10个标签，单个50个字符'}>
        <>
          {tags.map((tag, index) => {
            const tagElem = (
              <Tag
                key={index + tag.text}
                closable
                color={tag.type === 1 ? 'green' : ''}
                onClose={() => deleteTagClose(tag, index)}
              >
                {tag.text}
              </Tag>
            );
            return tagElem;
          })}
          {inputVisible && (
            <div>
              <Input ref={saveInputRef} type="text" size="small" onPressEnter={(e)=>{e.preventDefault()}} />
              <Button size="small" type="primary" onClick={() => handleInputConfirm()}>
                保存
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button size="small" onClick={() => handleInputCancel()}>
                取消
              </Button>
            </div>
          )}
          {!inputVisible && (
            <Tag
              onClick={() => {
                setInputVisible(true);
              }}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type="plus" /> 新增
            </Tag>
          )}
        </>
      </Form.Item>

      <Form.Item
        label="审核结果"
        labelCol= {{ span: 6}}
        name="auditState"
        rules={[{ required: true, message: `选择审核结果` }]}
      >
        <Radio.Group>
          <Radio value="PASS">审核通过</Radio>
          <Radio value="REJECT">审核未通过</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 20, offset: 3 },
          sm: { span: 20, offset: 3 },
        }}
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
                  <Row gutter={24}>
                    {data.map((item,index) => {
                      return (
                        <Col span={8} key={index+item}>
                          <Checkbox value={item}>{item}</Checkbox>
                        </Col>
                      );
                    })}
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            );
          };

          return result === 'PASS'
            ? getReasonTpl(null, passReason)
            : (
              result === 'REJECT' ? 
              getReasonTpl([{ required: true, message: `选择审核未通过原因` }], rejectReason): 
              null
            );
        }}
      </Form.Item>
    </Form>
  );
}
function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(FormAction);
