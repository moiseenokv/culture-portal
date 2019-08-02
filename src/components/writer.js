import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { Layout, Divider } from 'antd';
import { graphql } from 'gatsby';

import Layer from './layer';
import WriterCard from './writerCard';
import MyVideo from './videoWidget';
import MyMap from './mapWidget';
import TimeLine from './timeLine';
import Gallery from './gallery';

import '../styles/author.css';

const AuthorPage = ({ data, t }) => {
  const dataToShow = data.dataJson;//todo add err handler
  const writerCard = JSON.parse(dataToShow.snippet);
  const gallery = JSON.parse(dataToShow.gallery);
  const timeline = JSON.parse(dataToShow.timeline);
  const mapPlaces = JSON.parse(dataToShow.mapPlaces);
  const video = dataToShow.video;//todo add to component
  const masterpieces = JSON.parse(dataToShow.masterpieces);//todo add masterpiece component

  const { Content } = Layout;
  return (
    <div>
      <Layer path='/' t={t}>
        <Layout className="layout author-page">
          <Content className='content'>
            <div className='content-wrapper'>
              <WriterCard data={writerCard}/>
              <Divider/>
              <Gallery data={gallery} t={t}/>
              <Divider/>
              <TimeLine data={timeline} t={t}/>
              <Divider/>
              <MyMap data={mapPlaces} t={t}/>
              <Divider/>
              <MyVideo url='https://www.youtube.com/embed/vkEscYr-tfU' title="Karatkevich"/>
              <Divider/>
            </div>
          </Content>
        </Layout>
      </Layer>
    </div>
  );
};

export const postQuery = graphql`
  query($lng: String!, $title: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }

    dataJson(language: {eq: $lng}, title2: {eq: $title}){
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