import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Layout, Menu, Select, Col, Row } from 'antd';

import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeyPath: props.path,
    }
  }

  selectDefaultPath = () => {
    const { selectedKeyPath } = this.state;
    if (selectedKeyPath === '/' || selectedKeyPath === '/writers') {
      return selectedKeyPath;
    } else return '/';
  }
  
  render() {
    const { Option } = Select;
    return (
      <div>
        <Layout className="layout">
          <Layout.Header>
            <Row>
              <Col span={4}>
                <Select defaultValue="ru" style={{ width: 60 }} onChange={this.handleChange}>
                  <Option value="en">en</Option>
                  <Option value="ru">ru</Option>
                  <Option value="by">by</Option>
                </Select>
              </Col>
              <Col span={20}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[this.selectDefaultPath()]}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="/"><Link to='/'>На Главную</Link></Menu.Item>
                  <Menu.Item key="/writers"><Link to='/writers'>Писатели</Link></Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Layout.Header>
        </Layout>
      </div>
    )
  }
}

Header.propTypes = {
  path: PropTypes.string
};

export default Header;
