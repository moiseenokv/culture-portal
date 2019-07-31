import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import { Layout, Row, Col } from 'antd';
import github from '../images/github.png';

import '../styles/layout.css';
import '../styles/developers.css';

const Layer = ({ children, path }) => {
  const { Footer } = Layout;
  return (
  <div>
    <Header path={path} />
    <main>{children}</main>
    <Footer className='footer'>
      <div className="delepopers-header">Наша команда разработчиков</div>
      <Row className="developers">
        <Col span={4}>
          <div className="developer-card">           
            <a href='https://github.com/eugenio7779' rel="noopener noreferrer" target='_blank'>
              <p>Евгений</p>
              <img alt='Евгений' src="https://avatars1.githubusercontent.com/u/47753023"></img>
              <div className="github">
                  <img alt='eugenio7779' src={github}></img>
                  <span>eugenio7779</span>
              </div>
            </a> 
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">
            <a href='https://github.com/georgpandeh' rel="noopener noreferrer" target='_blank'>
              <p>Георг</p>
              <img alt='Георг' src="https://avatars2.githubusercontent.com/u/34744343"></img>
              <div className="github">
                  <img alt='georgpandeh' src={github}></img>
                  <span>georgpandeh</span>
              </div>
            </a>  
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">           
            <a href='https://github.com/venul' rel="noopener noreferrer" target='_blank'>
              <p>Сергей Лунёв</p>
              <img alt='Сергей Лунёв' src="https://avatars2.githubusercontent.com/u/4992801"></img>
              <div className="github">
                  <img alt='venul' src={github}></img>
                  <span>venul</span>
              </div>
            </a> 
          </div>
        </Col>
        <Col span={4}>
          <div className="developer-card">           
            <a href='https://github.com/moiseenokv' rel="noopener noreferrer" target='_blank'>
            <p>Виталий</p>
              <img alt='Виталий' src="https://avatars3.githubusercontent.com/u/44432156"></img>
              <div className="github">
                  <img alt='moiseenokv' src={github}></img>
                  <span>moiseenokv</span>
              </div>
            </a> 
          </div>
        </Col>
        <Col span={4}>
        <div className="developer-card">           
            <a href='https://github.com/annakiniova' rel="noopener noreferrer" target='_blank'>
            <p>Анна</p>
            <img alt='Анна' src="https://avatars1.githubusercontent.com/u/47710110"></img>
              <div className="github">
                  <img alt='annakiniova' src={github}></img>
                  <span>annakiniova</span>
              </div>
            </a> 
          </div>
        </Col>
        <Col span={4}>
        <div className="developer-card">           
            <a href='https://github.com/yevgeniyaa' rel="noopener noreferrer" target='_blank'>
            <p>Евгения</p>
            <img alt='Евгения' src="https://avatars1.githubusercontent.com/u/9293095"></img>
              <div className="github">
                  <img alt='yevgeniyaa' src={github}></img>
                  <span>yevgeniyaa</span>
              </div>
            </a> 
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
