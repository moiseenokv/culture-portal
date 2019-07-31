import React from 'react';
import { Col } from 'antd';
import PropTypes from 'prop-types';

import '../styles/developers.css';

import github from '../images/github.png';

const Developer = (props) => (
  <Col span={4}>
    <div className="developer-card">
      <a href={`https://github.com/${props.login}`} rel="noopener noreferrer" target='_blank'>
        <p>{props.name}</p>
        <img alt={props.name} src={props.avatarSrc}/>
        <div className="github">
          <img alt={props.login} src={github}/>
          <span>{props.login}</span>
        </div>
      </a>
    </div>
  </Col>
);

Developer.propTypes = {
  name: PropTypes.string,
  avatarSrc: PropTypes.string,
  login: PropTypes.string,
};

export default Developer;
