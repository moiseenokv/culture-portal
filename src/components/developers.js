import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';

import Developer from './developer';
import '../styles/developers.css';

import TEAM_DATA from '../data/team';

const Developers = ({ t }) => (
  <div style={{ textAlign: 'center' }}>
    <h3 className="developers-header">{t('developersTitle')}</h3>
    <Row className="developers" gutter={16} type="flex" justify="center">
      {TEAM_DATA.map(devData => (
        <Developer {...devData} key={devData.login} />
      ))}
    </Row>
  </div>
);

Developers.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Developers;
