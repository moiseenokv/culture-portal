import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import Korotkevich from '../images/korotkevich.jpg'

import Layer from '../components/layer';
import Developers from '../components/developers';
import '../styles/main.css'
import { Link } from 'gatsby';

const Main = () => {

  const { Content } = Layout;
  return (
    <div>
      <Layer path='/'>
        <Layout className="layout">
          <Content className='content'>
            <div className='content-wrapper'>
              <h1>Писатели Беларуси</h1>
              <p className="writers-about">Белорусская литература условно делится на несколько периодов: «Давняя (древняя)
                белорусская литература» (ХI—ХVІІ вв.), «Новая беларуская литература» (перв.пол. XVIII—ХІХ в.в.)
                , и «Новейшая белорусская литература» (литература от начала ХХ в.). Литература первой половины
                XVIII в. определяется как «Литература переходного периода» — время, когда формировались основы
                новой поэтики. Литература второй половины XVIII ст. – первой четверти ХІХ ст. именуется как
                «Литература эпохи Просветительства». Белорусскую литературу от середины 20-х гг. до конца ХІХ в.
                воодушевляла романтичная мысль про национальное Возрождение. Романтичный пафос
                этого этапа предопределяет и его название — «Литература эпохи романтизма».
              </p>
              <Divider />
              <h2 className='author-of-the-day'>Автор дня</h2>
              <Layout className="layout">
                <Link to='/author'>
                  <Row type='flex' justify='center'>
                    <Col span={4}>
                      <img className='author-of-the-day-img' alt='Короткевич' src={Korotkevich} />
                    </Col>
                    <Col span={16} offset={1}>
                      <h3>Короткевич, Владимир Семёнович</h3>
                      <p className="life-dates" >26 ноября 1930 - 25 июля 1984 (53 года)</p>
                      <p>Белорусский советский писатель, поэт, драматург, сценарист и публицист, классик белорусской
                        литературы. Является одной из наиболее ярких фигур в белорусской литературе XX столетия.
                        Стал первым белорусским писателем, обратившимся к жанру исторического детектива.
                      </p>
                    </Col>
                  </Row>
                </Link>
              </Layout>
              <Divider/>
              <Developers/>
            </div>
          </Content>
        </Layout>
      </Layer>
    </div>
  )
};

export default Main;
