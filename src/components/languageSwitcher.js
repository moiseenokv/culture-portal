import React from 'react';
import { Select } from 'antd';

const LanguageSwitcher = () => (
  <Select
    defaultValue="ru"
    className='change-language'
    onChange={(e)=>{console.log(e)}}>
    <Select.Option value="en">en</Select.Option>
    <Select.Option value="ru">ru</Select.Option>
    <Select.Option value="by">by</Select.Option>
  </Select>
);

export default LanguageSwitcher;
