import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import { Layout } from 'antd';

import '../styles/layout.css';
import '../styles/developers.css';

const Layer = ({ children, path }) => {
  const { Footer } = Layout;
  return (
  <div>
    <Header path={path} />
    <main>{children}</main>
    <Footer/>
  </div>
  )
};

Layer.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

export default Layer;
