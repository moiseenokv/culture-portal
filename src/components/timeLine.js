import React from 'react';
import { Timeline } from 'antd';

const TimeLine = () => {
  return (
    <Timeline mode="alternate">
      <Timeline.Item>Что-то сделал 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">опять что-то сделал 2015-09-01</Timeline.Item>
      <Timeline.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Timeline.Item>
      <Timeline.Item color="red">Создал чудо 2015-09-01</Timeline.Item>
      <Timeline.Item>А тут что-то невероятное создал 2015-09-01</Timeline.Item>
      <Timeline.Item>
        Погиб 2015-09-01
      </Timeline.Item>
    </Timeline>
  )
}

export default TimeLine;