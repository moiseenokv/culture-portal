import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';

import Header from './header';
import '../styles/layout.css';
import '../styles/footer.css';

const Layer = ({ children, path, t }) => {
  const { Footer } = Layout;
  return (
    <div>
      <Header path={path} t={t} />
      <main>{children}</main>
      <Footer>
        <Row>
          <Col className="rights" span={8}>
            RSSchool <span>&copy;</span>2019 | Created by Team 14.
          </Col>
          <Col className="contribution" span={8} offset={8}>
            <a
              href={`https://docs.google.com/spreadsheets/d/1_HYtfPoTEGPdKPDmKHn8llA4757YDZpWdh7JNcFt03I/edit#gid=569398064`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Workflow
            </a>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};

Layer.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
  t: PropTypes.func.isRequired,
};

export default Layer;
