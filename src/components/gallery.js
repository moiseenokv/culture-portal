import React from 'react';
import { Carousel } from 'antd';
import Korotkevich from '../images/korotkevich.jpg';
import sea from '../images/sea.jpg';
import astronaut from '../images/gatsby-astronaut.png';

import '../styles/author.css';

const Gallery = () => {
  return (
    <Carousel className="carousel" autoplay>
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