import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import '../styles/layout.css';
import '../styles/developers.css';

const Layer = ({ children, path, t }) => {
  return (
    <div>
      <Header path={path} t={t} />
      <main>{children}</main>
    </div>
  );
};

Layer.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
  t: PropTypes.func.isRequired,
};

export default Layer;
