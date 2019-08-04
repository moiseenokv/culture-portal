import React from 'react';
import PropTypes from 'prop-types';

import Developer from './developer';
import '../styles/developers.css';

import TEAM_DATA from '../data/team';

const Developers = ({ t }) => (
  <div style={{ textAlign: 'center' }}>
    <h3 className="developers-header">{t('developersTitle')}</h3>
      {TEAM_DATA.map(devData => (
        <Developer {...devData} key={devData.login} />
      ))}
  </div>
);

Developers.propTypes = {
  t: PropTypes.func.isRequired,
}

export default Developers;
