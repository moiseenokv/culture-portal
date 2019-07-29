import React from 'react'
import Header from './header'
import { Layout, Row, Col } from 'antd';
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
      <div className="delepopers-header">Наша команда разработчиков</div>
      <Row className="developers">
        <Col span={4}>
          <div className="developer-card">
            <p>Евгений</p>
            <img alt='Евгений' src="https://avatars1.githubusercontent.com/u/47753023"></img>
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
            <img alt='Георг' src="https://avatars2.githubusercontent.com/u/34744343"></img>
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
            <img alt='Сергей Лунёв' src="https://avatars2.githubusercontent.com/u/4992801"></img>
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
            <img alt='Виталий' src="https://avatars3.githubusercontent.com/u/44432156"></img>
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
            <img alt='Анна' src="https://avatars1.githubusercontent.com/u/47710110"></img>
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
            <img alt='Евгения' src="https://avatars1.githubusercontent.com/u/9293095"></img>
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

export default Layer
