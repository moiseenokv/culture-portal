import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import { Layout, Row, Col } from 'antd';
import user from '../images/user.jpg';
import github from '../images/github.png';

import '../styles/layout.css'
import '../styles/developers.css'

const Layer = ({ children, path }) => {
  const { Footer } = Layout;
  return (
  <div>
    <Header path={path} />
    <main>{children}</main>
    <Footer style={{ textAlign: 'center' }}>
      <div>Разработчики</div>
      <Row className="developers">
        <Col span={4}>
          <div className="developer-card">
            <p>Евгений</p>
            <img alt='Евгений' src={user} />
            <div className="github">
              <a href='https://github.com/eugenio7779' rel="noopener noreferrer" target='_blank'>
                <img alt='eugenio7779' src={github}></img>
              </a>
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">
            <p>Георг</p>
            <img alt='Георг' src={user} />
            <div className="github">
              <a href='https://github.com/georgpandeh' rel="noopener noreferrer" target='_blank'>
                <img alt='georgpandeh' src={github}></img>
              </a>
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">
            <p>Сергей Лунёв</p>
            <img alt='Сергей Лунёв' src={user} />
            <div className="github">
              <a href='https://github.com/venul' rel="noopener noreferrer" target='_blank'>
                <img alt='venul' src={github}></img>
              </a>
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">
            <p>Виталий</p>
            <img alt='Сергей Лунёв' src={user} />
            <div className="github">
              <a href='https://github.com/moiseenokv' rel="noopener noreferrer" target='_blank'>
                <img alt='moiseenokv' src={github}></img>
              </a>
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">
            <p>Анна</p>
            <img alt='Анна' src={user} />
            <div className="github">
              <a href='https://github.com/annakiniova' rel="noopener noreferrer" target='_blank'>
                <img alt='annakiniova' src={github}></img>
              </a>
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">
            <p>Евгения</p>
            <img alt='Евгения' src={user} />
            <div className="github">
              <a href='https://github.com/yevgeniyaa' rel="noopener noreferrer" target='_blank'>
                <img alt='yevgeniyaa' src={github}></img>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Footer>
  </div>
  )
}

Layer.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

export default Layer;
