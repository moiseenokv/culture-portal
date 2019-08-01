import React, { Component } from 'react';
import { Layout, Divider } from 'antd';

import Layer from '../components/layer';
import WriterList from '../components/writerList';
import Data from '../components/constants';
import '../styles/writers.css';

class Writers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      search: Data,
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
    const result = data.filter(({ name, placeOfBirth }) =>
      name.toLowerCase().includes(search)
      || placeOfBirth.toLowerCase().includes(search));

    this.setState({ search: result });
  };

  render() {
    return (
      <Layout className='layer'>
        <Layer path='/writers'>
          <Layout.Content className='content'>
            <div className='content-wrapper'>
              <h1>Writers</h1>
              <input
                className="search"
                placeholder='search by name and place of birth'
                onChange={this.handleSearch}
              />
              <Divider/>
              <WriterList writers={this.state.search}/>
            </div>
          </Layout.Content>
        </Layer>
      </Layout>
    );
  }
}

export default Writers;
