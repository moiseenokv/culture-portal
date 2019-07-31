import React from 'react';
import { Col } from 'antd';
import PropTypes from 'prop-types';

import '../styles/developers.css';

import github from '../images/github.png';

const Developer = (props) => (
  <Col span={4}>
    <div className="developer-card">
      <p>{props.name}</p>
      <img alt={props.name} src={props.avatarSrc}/>
      <div className="github">
        <a href={`https://github.com/${props.login}`} rel="noopener noreferrer" target='_blank'>
          <img alt={props.login} src={github}/>
        </a>
      </div>
    </div>
  </Col>
);

Developer.propTypes = {
  name: PropTypes.string,
  avatarSrc: PropTypes.string,
  login: PropTypes.string,
};

export default Developer;
