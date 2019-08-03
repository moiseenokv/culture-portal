import React from 'react';
import { Row, Col } from 'antd';

import '../styles/author.css';

const WriterCard = ({ data }) => (
  <>
    <h1>{data.fullName}</h1>
    <img alt={data.fullName} src={data.photo}/>
    <h3>{`${data.birthDate} - ${data.deathDate}`}</h3>
    <Row type="flex" justify="space-around">
      <Col span={14}>{data.description}</Col>
    </Row>
  </>
);

export default WriterCard;
