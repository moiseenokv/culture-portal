import React from 'react';
import Layout from '../components/layout';
import { Layout as Layer, Divider, Row, Col } from 'antd';
import Korotkevich from '../images/korotkevich.jpg'

import '../styles/main.css'

const Main = () => {

  const { Content } = Layer;
  return (
    <div>
      <Layout path={window.location.pathname}>
        <Layer className="layout">
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
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
              <Layer className="layout">
                <Row type="flex" justify="center">
                  <Col span={4} className='author-of-the-day-img'>
                    <img alt='Короткевич' src={Korotkevich} />
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
              </Layer>
            </div>
          </Content>
        </Layer>
      </Layout>
    </div>
  )
}

export default Main;