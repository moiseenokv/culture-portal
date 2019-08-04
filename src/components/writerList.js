import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

import '../styles/writers.css';
import WriterPreview from './writerPreview';

const WriterList = ({ t, writers }) => {

  return (
    <div className="writers-list">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        dataSource={writers}
        renderItem={item => (
          <List.Item>
            <WriterPreview {...item} t={t} />
          </List.Item>
        )}
      />
    </div>
  );
};

WriterList.propTypes = {
  t: PropTypes.func.isRequired,
  colAmount: PropTypes.number,
  writers: PropTypes.array.isRequired,
};

export default WriterList;
