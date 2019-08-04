import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import PropTypes from 'prop-types';

import '../styles/writers.css';

const WriterPreview = props => (
  <Link className="single-writer" to={`/${props.title}`}>
    <div className="writer-listPage-block">
      {/* TODO: линки на страницу */}
      <img src={props.photo} alt={props.fullName} />
      <h5 className="writer-name">{props.fullName}</h5>
      <div className="writer-birth-place">{`${props.t('placeOfBirth')}: ${
        props.birthCity
      }`}</div>
      <p className="writer-description">{props.description}</p>
    </div>
  </Link>
);

WriterPreview.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  birthCity: PropTypes.string,
  description: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default WriterPreview;
