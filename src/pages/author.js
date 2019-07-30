import React from 'react';
import Layer from '../components/layer';
import { Layout, Divider, Row, Col } from 'antd';
import MyMap from '../components/mapWidget';
import TimeLine from '../components/timeLine';
import Gallery from '../components/gallery';

import '../styles/author.css';

const AuthorPage = () => {

  const { Content } = Layout;
  return (
    <div>
      <Layer path='/'>
        <Layout className="layout">
          <Content style={{ padding: '0 50px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <img alt="фото" src=""/>
              <h2>имя</h2>
              <h3>годы жизни</h3>
              <Row type="flex" justify="space-around">
                <Col span={14}>описание описание описание описание описание описание описание описание описание
                  описание описание описание описание описание описание описание описание описание описание
                </Col>
              </Row>
              <Divider/>
              <MyMap data={[[54.000361, 27.028653], [54.034945, 28.037390], [54.033028, 28.539078], [54.067857, 28.330841]]} />
              <Divider/>
              <TimeLine/>
              <Divider/>
              <div className='gallery'>
                <Gallery/>
              </div>
              <Divider/>
            </div>
          </Content>
        </Layout>
      </Layer>
    </div>      
  )
}

export default AuthorPage;