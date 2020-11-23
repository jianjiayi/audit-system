/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
/* eslint-disable no-console */

import React from 'react';
import { Row, Col, Form, Button } from 'antd';
import { renderFormItem, fillFormItems } from './extra';
import classNames from 'classnames';
import styles from './index.module.less';
import WrapAuthButton from '@components/WrapAuth';

const formItemLayout = {
  // labelAlign: 'left',
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function BaseForm(props) {
  const [selfForm] = Form.useForm();

  const {
    children,
    className,
    // colon = true,
    authProps = {},
    submitText = '查询',
    resetShow = false,
    cancelShow = false,
    layout = 'horizontal',
    // formLayout = layout === 'inline' ? null : formItemLayout,
    formLayout = formItemLayout,
    dataSource = [],
    formValues = {},
    onSubmit = () => {},
    onReset = () => {},
    pRef = () => {},
    pFrom,
    renderItem = renderFormItem,
    ...otherFormProps
  } = props;

  const form = pFrom || selfForm;

  const reset = () => {
    form.resetFields();
    onReset();
  };

  // 自适应配置
  const mediaSpan = {
    className: 'gutter-row',
    xs: 24,
    md: layout === 'inline' ? 8 : 24,
    lg: layout === 'inline' ? 8 : 24,
    xl: layout === 'inline' ? 6 : 24,
    xxl: layout === 'inline' ? 4 : 24,
  };

  const formProps = {
    ...otherFormProps,
    form,
    // layout,
    scrollToFirstError: true,
    onFinish: (values) => onSubmit({ ...values }, form),
    className: classNames(className, styles.container),
  };

  const submitProps = {
    text: submitText,
    type: 'primary',
    htmlType: 'submit',
    ...authProps,
  };

  const RowProps = layout === 'horizontal' ? { gutter: [16, 24] } : null


  return (
    <Form {...formProps} ref={pRef}>
      <Row {...RowProps}>
        {fillFormItems(dataSource, formValues).map((item) =>
          renderItem(item, formLayout, layout, mediaSpan),
        )}

        <Col {...mediaSpan} style={{ padding: 0 }}>
          <Form.Item>
            <div
              className={
                layout === 'inline' ? styles['button-group'] : styles['button-group-center']
              }
            >
              {cancelShow && <Button onClick={() => reset()}>取消</Button>}
              <WrapAuthButton {...submitProps}></WrapAuthButton>
              {/* <Button type="primary" htmlType="submit">
                {submitText}
              </Button> */}
              {resetShow && <Button onClick={() => reset()}>重置</Button>}
              {children}
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export * from './extra';
export default BaseForm;
