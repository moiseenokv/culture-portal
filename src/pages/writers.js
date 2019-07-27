import React from 'react';
import { Link } from 'gatsby';
import { Layout as Layer, Input, List } from 'antd';
import Layout from '../components/layout';

import '../styles/writers.css';

const data = [
  {
    name: 'Быков, Дмитрий Львович',
    description: 'smth',
  },
  {
    name: 'Короткевич, Владимир Семёнович',
    description: 'smth',
  },
  {
    name: 'Шамякин, Иван Петрович',
    description: 'smth',
  },
  {
    name: 'Михайлович, Александр Адамович',
    description: 'smth',
  },
  {
    name: 'Алексиевич, Светлана Александровна',
    description: 'smth',
  },
];

const { Search } = Input;
const { Content } = Layer;

const Writers = () => (
  <div>
    <Layout path={window.location.pathname}>
      <Content style={{ padding: '0 50px' }}>
        <Layer className="layout">
          <h1>Writers</h1>
          <Search
            placeholder="input search writer"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <List
            itemLayout="horizontal"
            className="list-of-writers"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Link to="/">{item.name}</Link>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Layer>
      </Content>
    </Layout>
  </div>
)

export default Writers;
