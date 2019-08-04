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

import mainPhoto from '../images/main-page.jpg';

const Main = ({ data, t }) => {
  const authorOfTheDayId = new Date().getDay() % data.allDataJson.edges.length;
  const { node } = data.allDataJson.edges[authorOfTheDayId];
  const authorOfTheDay = Object.assign(
    { title: node.title2 },
    JSON.parse(node.snippet)
  );

  const { Content } = Layout;
  return (
    <div>
      <Layer path="/" t={t}>
        <Layout className="layout">
          <Content className="content">
            <div className="content-wrapper">
              <h1>{t('mainTitle')}</h1>
              <img alt="writers" src={mainPhoto} />
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

Main.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  t: PropTypes.func,
};

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }

    allDataJson(
      filter: { language: { eq: $lng } }
      sort: { fields: [title2], order: ASC }
    ) {
      edges {
        node {
          title2
          snippet
        }
      }
    }
  }
`;

export default withI18next()(withNamespaces()(Main));
