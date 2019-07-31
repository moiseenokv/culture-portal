import React from 'react';
import { Select } from 'antd';

const LanguageSwitcher = (props) => (
  <Select
    defaultValue="ru"
    style={{ width: 60 }}
    onChange={props.handleChange}>
    <Select.Option value="en">en</Select.Option>
    <Select.Option value="ru">ru</Select.Option>
    <Select.Option value="by">by</Select.Option>
  </Select>
);

export default LanguageSwitcher;
