import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Layout, Menu, Col, Row } from 'antd';

import LanguageSwitcher from './languageSwitcher';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeyPath: props.path,
    };
  }

  selectDefaultPath = () => {
    const { selectedKeyPath } = this.state;
    if (selectedKeyPath === '/' || selectedKeyPath === '/writers') {
      return selectedKeyPath;
    } else return '/';
  };

  render() {
    return (
      <div>
        <Layout className='layout'>
          <Layout.Header>
            <Row>
              <Col span={4}>
                <LanguageSwitcher/>
              </Col>
              <Col span={20}>
                <Menu
                  theme='dark'
                  mode='horizontal'
                  defaultSelectedKeys={[this.selectDefaultPath()]}
                  className='navigation'
                >
                  <Menu.Item key='/'><Link to='/'>На Главную</Link></Menu.Item>
                  <Menu.Item key='/writers'><Link to='/writers'>Писатели</Link></Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Layout.Header>
        </Layout>
      </div>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
