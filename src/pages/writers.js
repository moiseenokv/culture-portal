import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import { graphql } from 'gatsby';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layer from '../components/layer';
import WriterList from '../components/writerList';
import '../styles/writers.css';

class Writers extends Component {
  constructor(props) {
    super(props);

    let initialData = [];
    if (props.data.allDataJson) {
      initialData = props.data.allDataJson.edges.map(({ node }) =>
        Object.assign({ title: node.title2 }, JSON.parse(node.snippet)));
    }
    this.state = {
      data: initialData,
      search: initialData,
    };
  }

  handleSearch = (e) => {
    let search = e.target.value;
    const { data } = this.state;

    if (!search) {
      this.setState({ search: data });
      return;
    }

    search = search.toLowerCase();
    const result = data.filter(({ fullName, birthCity }) =>
      fullName.toLowerCase().includes(search)
      || birthCity.toLowerCase().includes(search));

    this.setState({ search: result });
  };

  render() {
    return (
      <Layout className='layer'>
        <Layer path='/writers' t={this.props.t}>
          <Layout.Content className='content'>
            <div className='content-wrapper'>
              <h1>{this.props.t('writersTitle')}</h1>
              <input
                className="search"
                placeholder='search by name and place of birth'
                onChange={this.handleSearch}
              />
              <Divider/>
              <WriterList writers={this.state.search} t={this.props.t}/>
            </div>
          </Layout.Content>
        </Layer>
      </Layout>
    );
  }
}

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
    allDataJson(
    filter: {language: {eq: $lng}},
    sort: {
      fields: [
        title2
      ]
      order: ASC
    }
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

export default withI18next()(withNamespaces()(Writers));
