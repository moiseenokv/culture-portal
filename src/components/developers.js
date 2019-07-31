import React from 'react';
import { Row } from 'antd';

import Developer from './developer';
import '../styles/developers.css';

import TEAM_DATA from '../data/team';

const Developers = () => (
  <div style={{ textAlign: 'center' }}>
    <div className="developers-header">Наша команда разработчиков</div>
    <Row className="developers">
      {TEAM_DATA.map(devData => (
        <Developer {...devData} key={devData.login}/>
      ))}
    </Row>
  </div>
);

export default Developers;
