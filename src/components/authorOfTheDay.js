import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'gatsby-plugin-i18next';

import '../styles/main.css';

const AuthorOfTheDay = ({ data, t }) => (
  <>
    <h2 className='author-of-the-day'>{t('authorOfTheDay')}</h2>
    <Layout className="layout">
      <Link to={`/${data.title}`}>
        <Row type='flex' justify='center'>
          <Col span={4}>
            <img className='author-of-the-day-img' alt={data.fullName} src={data.photo}/>
          </Col>
          <Col span={16} offset={1}>
            <h3>{data.fullName}</h3>
            <p className="life-dates">{`${data.birthDate} - ${data.deathDate}`}</p>
            <p>{data.description}</p>
          </Col>
        </Row>
      </Link>
    </Layout>
  </>
);

export default AuthorOfTheDay;
