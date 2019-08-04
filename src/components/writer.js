import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { Layout, Divider } from 'antd';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layer from './layer';
import WriterCard from './writerCard';
import MyVideo from './videoWidget';
import MyMap from './mapWidget';
import TimeLine from './timeLine';
import Gallery from './gallery';
import Masterpieces from './masterpieces';

import '../styles/author.css';

const AuthorPage = ({ data, t }) => {
  const dataToShow = data.dataJson; //todo add err handler
  const writerCard = JSON.parse(dataToShow.snippet);
  const gallery = JSON.parse(dataToShow.gallery);
  const timeline = JSON.parse(dataToShow.timeline);
  const mapPlaces = JSON.parse(dataToShow.mapPlaces);
  const video = dataToShow.video;
  const masterpieces = JSON.parse(dataToShow.masterpieces); //todo add masterpiece component

  const { Content } = Layout;
  return (
    <div>
      <Layer t={t}>
        <Layout className="layout author-page">
          <Content className="content">
            <div className="content-wrapper">
              <WriterCard data={writerCard} />
              <Divider />
              <Gallery data={gallery} t={t} />
              <Divider />
              <TimeLine data={timeline} t={t} />
              <Divider />
              <Masterpieces data={masterpieces} t={t} />
              <Divider />
              <MyMap data={mapPlaces} t={t} />
              <Divider />
              <MyVideo data={video} />
              <Divider />
            </div>
          </Content>
        </Layout>
      </Layer>
    </div>
  );
};

AuthorPage.propTypes = {
  data: PropTypes.object,
  dataToShow: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  t: PropTypes.func.isRequired,
};

export const postQuery = graphql`
  query($lng: String!, $title: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }

    dataJson(language: { eq: $lng }, title2: { eq: $title }) {
      title2
      snippet
      gallery
      timeline
      mapPlaces
      video
      masterpieces
    }
  }
`;

export default withI18next()(withNamespaces()(AuthorPage));
