import React, { Component } from 'react';
import { Layout, Divider, Col } from 'antd';
import Layer from '../components/layer';
import Data from '../components/constants';
import '../styles/writers.css';
import { Link } from 'gatsby';

class Writers extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      search: Data,
    }
  }

  data = () => {
    
  }

  list = (item, i) => {
    return (
      <Col span={5}>
        <div key={i} className="writer-listPage-block">
          <Link to="/author">
            {/* TODO: линки на страницу */}
            <img src={item.photo} alt={item.name}></img>
            <div className="writer-name">{item.name}</div>
            <div className="writer-birth-place">Место Рождения: {item.placeOfBirth}</div>
            <div className="writer-description">{item.description}</div>
          </Link>
        </div>
        <Divider/>
      </Col>
    )
  }

  handleSearch = (e) => {
    let value = e.target.value;
    const { data } = this.state;
    if (value.length) {
      let buffer = [];
      data.map((item) => {
        if (!item.name.search(value)) {
          buffer.push(item);
        } else if (!item.placeOfBirth.search(value)) {
          buffer.push(item);
        }
      });
      this.setState({search: buffer});
    } else {
      this.setState({search: data});
    }
  }

  render() {
    const { search } = this.state;
    const { Content } = Layout;
    return (
      <div>
        <Layer path='/writers'>
            <Content style={{ padding: '0 50px' }}>
              <h1>Writers</h1>
              <input
                className="search"
                placeholder='search by name and place of birth'
                onChange={this.handleSearch}
              />
              <div className="writers-list">
                {search.map(this.list)}
              </div>
            </Content>
        </Layer>
      </div>
    )
  }
}

export default Writers;
