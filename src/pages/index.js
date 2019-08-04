import React from 'react';
import { Layout, Divider } from 'antd';
import { graphql } from 'gatsby';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

import Layer from '../components/layer';
import Developers from '../components/developers';
import '../styles/main.css';
import AuthorOfTheDay from '../components/authorOfTheDay';

const Main = ({ data, t }) => {
  const authorOfTheDay = Object.assign(
    { title: data.dataJson.title2 },
    JSON.parse(data.dataJson.snippet)
  );

  const { Content } = Layout;
  return (
    <div>
      <Layer path="/" t={t}>
        <Layout className="layout">
          <Content className="content">
            <div className="content-wrapper">
              <h1>{t('mainTitle')}</h1>
              <p className="writers-about">{t('portalDescription')}</p>
              <Divider />
              <AuthorOfTheDay data={authorOfTheDay} t={t} />
              <Divider />
              <Developers t={t} />
            </div>
          </Content>
        </Layout>
      </Layer>
    </div>
  );
};

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }

    dataJson(language: { eq: $lng }) {
      title2
      snippet
    }
  }
`;

Main.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default withI18next()(withNamespaces()(Main));
