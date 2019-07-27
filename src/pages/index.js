import React from 'react';
import Layout from '../components/layout';
import { Layout as Layer, Divider, Row, Col } from 'antd';
import Korotkevich from '../images/korotkevich.jpg'

import '../styles/main.css'

const Main = () => {

  const { Content, Footer } = Layer;
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

            </div>
          </Content>
        </Layer>
      </Layout>
    </div>
  )
}

export default Main;