import React, { Component } from 'react';
import { Layout, Divider, Col, Row } from 'antd';
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

  listOfWriters = (item, i) => {
    return (
      <Link key={i} className="single-writer" to="/author">
        <Col span={6}>
          <div className="writer-listPage-block">
            {/* TODO: линки на страницу */}
            <img src={item.photo} alt={item.name}></img>
            <h4 className="writer-name">{item.name}</h4>
            <div className="writer-birth-place">Место Рождения: {item.placeOfBirth}</div>
            <p className="writer-description">{item.description}</p>
          </div>
        </Col>
      </Link>
    )
  }
  
  list = () => {
    const { search } = this.state;
    let size = 4; //размер подмассива
    let subarray = []; //массив в котором будут массивы по 4 элемента.

    for (let i = 0; i < Math.ceil(search.length / size); i += 1) {
      subarray[i] = search.slice((i*size), (i*size) + size);
    }

    return subarray.map((item, i) => {
      return(
      <div key={i}>
        <Row gutter={16}>
          {item.map(this.listOfWriters)}
        </Row>
        <Divider/>
      </div>
      )
    })
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
    const { Content } = Layout;
    return (
      <div>
        <Layout className='layer'>
          <Layer path='/writers'>
            <Content className='content'>
              <div className='content-wrapper'>
                <h1>Writers</h1>
                <input
                  className="search"
                  placeholder='search by name and place of birth'
                  onChange={this.handleSearch}
                />
                <Divider/>
                <div className="writers-list">
                  {this.list()}
                </div>
              </div>
            </Content>
          </Layer>
        </Layout>
      </div>
    )
  }
}

export default Writers;
