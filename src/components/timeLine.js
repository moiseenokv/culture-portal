import React from 'react';
import { Timeline } from 'antd';
import PropTypes from 'prop-types';

const TimeLine = ({ data, t }) => {

  const timelineItem = (item, i) => {
    return (
      <Timeline.Item key={i}>
        <div>{item.period}</div>
        <div>{item.description}</div>
      </Timeline.Item>
    )
  }

  return (
    <>
      <h2>{t('timeline')}</h2>
      <Timeline mode="alternate">
        {data.map(timelineItem)}
      </Timeline>
    </>
  );
};

TimeLine.propTypes = {
  data: PropTypes.array,
  t: PropTypes.func.isRequired,
}

export default TimeLine;
