import React, { Component } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

class Masterpieces extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <>
          <h2>{this.props.t('masterpieces')}</h2>
          <List
          className="masterpieces"
          itemLayout="horizontal"
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.year}
              />
            </List.Item>
          )}
        />
        </>
      );
    }
    return null;
  }
}
Masterpieces.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
};

export default Masterpieces;

