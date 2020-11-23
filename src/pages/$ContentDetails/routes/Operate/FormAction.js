/* eslint-disable import/no-unresolved */
/* eslint-disable no-func-assign */
/* eslint-disable no-control-regex */

import React, { useState, useRef } from 'react';
import { message, Form, Checkbox, Radio, Input, Tag, Button, Row, Col, Icon } from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';
import _ from 'lodash';
import ThreeLevelClassification from './ThreeLevelClassification';

import { passReason, rejectReason } from '@/pages/constants';

import styles from './FormAction.module.less';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

function FormAction(props) {
  // 存储标签
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const saveInputRef = useRef(null);

  const [selfForm] = Form.useForm();

  const {
    name = 'FormAction',
    className,
    dispatch,
    CDetails: {
      curArt,
      category,
      queueContentId,
      newsDataType,
      forbiddenWordList, // 违禁词
      sensitiveWordList, // 敏感词
      hotWord, // 热词
      personalWord, // 人物词
      tagsList,
    },
    Global: { firstCategory, secondCategory, thirdCategory },
  } = props;

  const formItemLayout = {
    labelAlign: 'left',
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  };

  // 删除标签tags
  const deleteTagClose = (removedTag) => {
    const tagsList = _.cloneDeep(tags);
    _.pull(tagsList, removedTag);
    setTags(tagsList);
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
        setFieldsValue({ labels: [...tags, { type: data ? 1 : 0, text: inputValue }] });
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


  const selectCategoryFun = (id, name)=>{
    console.log('id, name',id, name)
    if(name === 'firstCategoryId'){
      selfForm.resetFields(['secondCategoryId', 'thirdCategoryId']);
      selfForm.setFieldsValue({ secondCategoryId: null, thirdCategoryId: null });
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id: id || 0,
          type: 0
        },
      });
    }else{
      selfForm.resetFields(['thirdCategoryId']);
      selfForm.setFieldsValue({ thirdCategoryId: null });
      if(!id) return;
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id,
          type: 0
        },
      });
    }
  }

  const moreSelectProps = {
    firstCategory,
    secondCategory,
    thirdCategory,
    onChange: (values, name) => {
      selectCategoryFun(values[name], name)
    },
  }

  const formProps = {
    name,
    form: selfForm,
    ...formItemLayout,
    className: classNames(className, styles.container),
  };

  return (
    <Form {...formProps}>
      <Form.Item label="分类">
        <ThreeLevelClassification {...moreSelectProps}/>
      </Form.Item>
      <Form.Item label="违禁词">
        <p className={styles}>
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
        <p className={styles}>
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
        <p className={styles}>
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
        <p className={styles}>
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
        name="repeat_delivery"
        initialValue={
          (curArt.extra && curArt.extra.sourceExtra && curArt.extra.sourceExtra.repeat_delivery) ||
          '0'
        }
      >
        <Radio.Group>
          <Radio value="0">是</Radio>
          <Radio value="1">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Form.Item noStyle name="hotValue" initialValue={[curArt.hotValue] || 0}>
          <Checkbox.Group>
            <Checkbox value={1}>热点</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item noStyle name="bigEvent" initialValue={[curArt.bigEvent] || false}>
          <Checkbox.Group>
            <Checkbox value>大事件</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form.Item>
      <Form.Item label="标签" name="labels" initialValue={curArt.labels || []}>
        <>
          {tags.map((tag, index) => {
            const tagElem = (
              <Tag
                key={index + tag.text}
                closable
                color={tag.type === 1 ? 'green' : ''}
                onClose={() => deleteTagClose(tag)}
              >
                {tag.text}
              </Tag>
            );
            return tagElem;
          })}
          {inputVisible && (
            <div>
              <Input ref={saveInputRef} type="text" size="small" />
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
        name="resultStatus"
        rules={[{ required: true, message: `选择审核结果` }]}
      >
        <Radio.Group>
          <Radio value="PASS">审核通过</Radio>
          <Radio value="REJECT">审核未通过</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 21, offset: 3 },
          sm: { span: 21, offset: 3 },
        }}
        shouldUpdate={(prevValues, curValues) => {
          return prevValues.resultStatus !== curValues.resultStatus;
        }}
      >
        {({ getFieldValue }) => {
          const result = getFieldValue('resultStatus');
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
            : getReasonTpl([{ required: true, message: `选择审核未通过原因` }], rejectReason);
        }}
      </Form.Item>

      <Form.Item>
        <Row gutter={24} justify="space-between">
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button type="primary">
            跳过
          </Button>
          <Button type="primary">
            退出
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
}
function mapStateToProps({ Global, CDetails }) {
  return { Global, CDetails };
}

export default connect(mapStateToProps)(FormAction);
