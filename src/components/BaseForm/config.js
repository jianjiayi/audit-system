/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import {
  Form,
  // Input, Radio, Checkbox, Select,
  DatePicker,
  Input,
  InputNumber,
} from 'antd';
// eslint-disable-next-line import/no-cycle
import { renderRadioGroup, renderCheckBoxGroup, renderSelect } from './extra';
import IntervalValue from './IntervalValue';
import ThreeLevelCategory from './ThreeLevelCategory';

const {
  // MonthPicker,
  RangePicker,
  // WeekPicker,
} = DatePicker;
const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const { TextArea } = Input;

export const FormItem = {
  RADIO: (options, map, props) => <Form.Item {...options}>{renderRadioGroup(map)}</Form.Item>,
  CHECKBOX: (options, map, props) => <Form.Item {...options}>{renderCheckBoxGroup(map)}</Form.Item>,
  SELECT: (options, map, props) => <Form.Item {...options}>{renderSelect(map, props)}</Form.Item>,
  DateTime: (options, map, props) => (
    <Form.Item {...options}>
      <DatePicker format={dateFormat} />
    </Form.Item>
  ),
  TextArea: (options, map, props) => (
    <Form.Item {...options}>
      <TextArea {...props} allowClear />
    </Form.Item>
  ),
  DateTimeStartEnd: (options, map, props) => (
    <Form.Item {...options}>
      <RangePicker showTime format={dateFormat} {...props} style={{ width: '100%' }} />
    </Form.Item>
  ),
  Number: (options, map, props) => (
    <Form.Item {...options}>
      <InputNumber {...props} style={{ width: '100%' }} />
    </Form.Item>
  ),
  IntervalValue: (options, map, props) => (
    <Form.Item {...options}>
      <IntervalValue {...props} />
    </Form.Item>
  ),
  ThreeLevelCategory: (options, map, props) => (
    <Form.Item {...options}>
      <ThreeLevelCategory {...props} />
    </Form.Item>
  ),
};
