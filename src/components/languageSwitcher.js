import React from 'react';
import { Language } from 'gatsby-plugin-i18next';
import { Select } from 'antd';

const LanguageSwitcher = ({ changeLng, lng, availableLngs }) => (
  <Select
    defaultValue={lng}
    className='change-language'
    onChange={chosenLang => changeLng(chosenLang)}>
    {availableLngs.map(curValue => (
      <Select.Option value={curValue} key={curValue}>{curValue}</Select.Option>
    ))}
  </Select>
);

export default props => (
  <Language>
    {lngProps => <LanguageSwitcher {...props} {...lngProps} />}
  </Language>
);
