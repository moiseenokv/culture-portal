import React from 'react';
import Layer from '../components/layer';
import { Layout, Divider, Row, Col } from 'antd';
import MyVideo from '../components/videoWidget'
import MyMap from '../components/mapWidget';
import TimeLine from '../components/timeLine';
import Gallery from '../components/gallery';
import Korotkevich from '../images/korotkevich.jpg';

import '../styles/author.css';

const AuthorPage = () => {

  const { Content } = Layout;
  return (
    <div>
      <Layer path='/'>
        <Layout className="layout author-page">
          <Content className='content'>
            <div className='content-wrapper'>
            <h1>Имя автора</h1>
            {/* TODO:alt исправить */}
              <img alt="фото" src={Korotkevich}/>
              <h3>годы жизни</h3>
              <Row type="flex" justify="space-around">
                <Col span={14}>описание описание описание описание описание описание описание описание описание
                  описание описание описание описание описание описание описание описание описание описание
                </Col>
              </Row>
              <Divider/>
              <h2>Галерея</h2>
              <div className='gallery'>
                <Gallery/>
              </div>
              <Divider/>
              <h2>Основные события в жизни</h2>
              <TimeLine/>
              <Divider/>
              <h2>Ключевые места, связанные с автором</h2>
              <div>
                <MyMap data={[[54.000361, 27.028653], [54.034945, 28.037390], [54.033028, 28.539078], [54.067857, 28.330841]]} />
              </div>
              <Divider/>
              <h2>Видео об авторе</h2>
              <MyVideo url='https://www.youtube.com/embed/vkEscYr-tfU' title="Karatkevich" />
              <Divider/>
            </div>
          </Content>
        </Layout>
      </Layer>
    </div>      
  )
}

export default AuthorPage;
