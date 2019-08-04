import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import '../styles/author.css';

const WriterCard = ({ data }) => (
  <>
    <h1>{data.fullName}</h1>
    <img alt={data.fullName} src={data.photo} />
    <h3>
      {data.deathDate
        ? `${data.birthDate} - ${data.deathDate}`
        : data.birthDate}
    </h3>
    <Row type="flex" justify="space-around">
      <Col span={14}>{data.description}</Col>
    </Row>
  </>
);

WriterCard.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    birthDate: PropTypes.string,
    deathDate: PropTypes.string,
    description: PropTypes.string,
    fullName: PropTypes.string.isRequired,
  }),
};

export default WriterCard;
