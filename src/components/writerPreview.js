import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import '../styles/writers.css';

const WriterPreview = (props) => (
  <Link className="single-writer" to="/author">
    <div className="writer-listPage-block">
      {/* TODO: линки на страницу */}
      <img src={props.photo} alt={props.name}/>
      <h5 className="writer-name">{props.name}</h5>
      <div className="writer-birth-place">Место Рождения: {props.placeOfBirth}</div>
      <p className="writer-description">{props.description}</p>
    </div>
  </Link>
);

WriterPreview.propTypes = {
  photo: PropTypes.string,
  placeOfBirth: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default WriterPreview;
