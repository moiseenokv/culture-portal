import React from 'react';
import { Carousel } from 'antd';
import Korotkevich from '../images/korotkevich.jpg';
import sea from '../images/sea.jpg';
import astronaut from '../images/gatsby-astronaut.png'
const Gallery = () => {
  return (
    <Carousel style={{height: '250px', width: '500px'}}>
    <div>
      <img src={Korotkevich}/>
    </div>
    <div>
      <img src={sea}/>
    </div>
    <div>
      <img src={astronaut}/>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
  )
}

export default Gallery;