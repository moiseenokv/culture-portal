import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import { graphql } from 'gatsby';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import PropTypes from 'prop-types';

import Layer from '../components/layer';
import WriterList from '../components/writerList';
import '../styles/writers.css';

class Writers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: [],
    };
  }

  static getDerivedStateFromProps(props) {
    const initialData = props.data.allDataJson.edges.map(({ node }) => {
      return Object.assign({ title: node.title2 }, JSON.parse(node.snippet));
    });

    return {
      data: initialData,
    };
  }

  componentDidMount() {
    const { data } = this.state;
    this.setState({
      search: data,
    });
  }

  handleSearch = e => {
    let search = e.target.value;
    const { data } = this.state;

    search = search.toLowerCase();
    const result = data.filter(
      ({ fullName, birthCity }) =>
        fullName.toLowerCase().includes(search) ||
        birthCity.toLowerCase().includes(search)
    );

    this.setState({ search: result });
  };

  static propTypes = {
    data: PropTypes.objectOf(PropTypes.object),
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;
    const { search } = this.state;
    return (
      <Layout className="layer">
        <Layer path="/writers" t={t}>
          <Layout.Content className="content">
            <div className="content-wrapper">
              <h1>{t('writersTitle')}</h1>
              <input
                className="search"
                placeholder="search by name and place of birth"
                onChange={this.handleSearch}
              />
              <Divider />
              <WriterList writers={search} t={t} />
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

export default withI18next()(withNamespaces()(Writers));
