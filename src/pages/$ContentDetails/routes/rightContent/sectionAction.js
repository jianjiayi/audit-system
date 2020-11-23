/* eslint-disable no-func-assign */
/* eslint-disable no-control-regex */

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { message, Form, Checkbox, Radio, Input, Tag, Button, Row, Col, Icon } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import MoreSelect from '@components/BaseForm/multilevelCategories';

import styles from './index.module.less';

const formItemLayout = {
  labelAlign: 'left',
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

function SectionAction(props, ref) {
  const [selfForm] = Form.useForm();

  // 存储标签
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const saveInputRef = useRef(null);

  const {
    className,
    curArt,
    dispatch,
    category, // 分类
    forbiddenWordList, // 违禁词
    sensitiveWordList, // 敏感词
    hotWord, // 热词
    personalWord, // 人物词
    tagsList,
    Global: { firstCategory, secondCategory, thirdCategory },
  } = props;

  useEffect(() => {
    // console.log(tagsList)
    setTags(tagsList);
  }, [tagsList]);

  /** 三级分类参数 */

  const moreSelectProps = {
    size: 'small',
    style: { width: '320px' },
    category: category[0], // 分类
    firstCategory,
    secondCategory,
    thirdCategory,
    onSelect: (values) => {
      // console.log(values)
      // let arr = Object.values(values);
      // arr = arr.filter((item,index)=>item != undefined)
      // setFieldsValue({'category':arr.join('/')})
    },
    selectFirstCategory: (id) => {
      dispatch({
        type: 'Global/getSecondCategory',
        payload: {
          id,
        },
      });
    },
    selectSecondCategory: (id) => {
      dispatch({
        type: 'Global/getThirdCategory',
        payload: {
          id,
        },
      });
    },
  };
  // 文章分类
  const getMoreSelectTpl = () => {
    return (
      <Form.Item label="分类" name="category">
        <MoreSelect {...moreSelectProps} />
      </Form.Item>
    );
  };
  // 敏感词、违禁词标签
  const getTagsTpl = () => {
    return (
      <div>
        <Form.Item label="违禁词 : ">
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
        <Form.Item label="敏感词 : ">
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
        <Form.Item label="热词 : ">
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
        <Form.Item label="人物词 : ">
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
      </div>
    );
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
  const calcStrLength = (value) => {
    return Math.ceil(calcByteLength(value) / 2);
  };
  const calcByteLength = (s) => {
    return s.replace(/[^\x00-\xff]/g, 'aa').length;
  };

  // 审核打标
  const getMarkTpl = () => {
    return (
      <div className="">
        <Form.Item
          {...layout}
          label="是否可重复分发"
          name="repeat_delivery"
          initialValue={
            (curArt.extra &&
              curArt.extra.sourceExtra &&
              curArt.extra.sourceExtra.repeat_delivery) ||
            '0'
          }
        >
          <Radio.Group>
            <Radio value="0">是</Radio>
            <Radio value="1">否</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Row type="flex" justify="start">
            <Col>
              <Form.Item name="hotValue" initialValue={[curArt.hotValue] || 0}>
                <Checkbox.Group>
                  <Checkbox value={1}>热点</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="bigEvent" initialValue={[curArt.bigEvent] || false}>
                <Checkbox.Group>
                  <Checkbox value>大事件</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Col>
          </Row>
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
      </div>
    );
  };

  // 审核结果
  const getResultTpl = () => {
    const result = selfForm.getFieldValue('resultStatus');
    return (
      <div>
        <Form.Item
          {...layout}
          label="审核结果"
          name="resultStatus"
          rules={[{ required: true, message: `选择审核结果` }]}
        >
          <Radio.Group>
            <Radio value="PASS">审核通过</Radio>
            <Radio value="REJECT">审核未通过</Radio>
          </Radio.Group>
        </Form.Item>
        {result === 'PASS' && (
          <Form.Item name="reason">
            <Checkbox.Group style={{ width: '100%' }}>
              <Checkbox value="去杂不净">去杂不净</Checkbox>
              <Checkbox value="广告">广告</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        )}
        {result === 'REJECT' && (
          <Form.Item name="reason" rules={[{ required: true, message: `选择审核未通过原因` }]}>
            <Checkbox.Group style={{ width: '100%' }}>
              <Checkbox value="文章质量差">文章质量差</Checkbox>
              <Checkbox value="广告">广告</Checkbox>
              <Checkbox value="软文">软文</Checkbox>
              <Checkbox value="封图">封图</Checkbox>
              <Checkbox value="去杂不净">去杂不净</Checkbox>
              <Checkbox value="抓取不全/错误">抓取不全/错误</Checkbox>
              <Checkbox value="版权问题">版权问题</Checkbox>
              <Checkbox value="其他">其他</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        )}
      </div>
    );
  };

  return (
    <Form {...formItemLayout} form={selfForm} className={classNames(className, styles.section3)}>
      {getMoreSelectTpl()}
      {getTagsTpl()}
      {getMarkTpl()}
      {getResultTpl()}
    </Form>
  );
}

SectionAction = forwardRef(SectionAction);

export default SectionAction;
