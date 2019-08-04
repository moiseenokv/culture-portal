import React from 'react';
import { Language } from 'gatsby-plugin-i18next';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ changeLng, lng, availableLngs }) => (
  <Select
    defaultValue={lng}
    className="change-language"
    onChange={chosenLang => changeLng(chosenLang)}
  >
    {availableLngs.map(curValue => (
      <Select.Option value={curValue} key={curValue}>
        {curValue}
      </Select.Option>
    ))}
  </Select>
);

LanguageSwitcher.propTypes = {
  lng: PropTypes.string,
  availableLngs: PropTypes.array,
  changeLng: PropTypes.func,
};

export default function Switcher(props) {
  return (
    <Language>
      {lngProps => <LanguageSwitcher {...props} {...lngProps} />}
    </Language>
  );
}
