import { Link } from 'gatsby-plugin-i18next';
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

  render() {
    let { selectedKeyPath } = this.state;
    return (
      <div>
        <Layout className='layout'>
          <Layout.Header>
            <Row>
              <Col span={4}>
                <LanguageSwitcher />
              </Col>
              <Col span={20}>
                <Menu
                  theme='dark'
                  mode='horizontal'
                  defaultSelectedKeys={[`${selectedKeyPath}`]}
                  className='navigation'
                >
                  <Menu.Item key='/'><Link to='/'>{this.props.t('menuHome')}</Link></Menu.Item>
                  <Menu.Item key='/writers'><Link to='/writers'>{this.props.t('menuWriters')}</Link></Menu.Item>
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
  t: PropTypes.func.isRequired,
};

export default Header;
