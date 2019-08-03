import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';

import '../styles/author.css';

const MyMap = ({ data, t }) => {
  // const { coordinates } = this.props;
  // const position = [this.state.lat, this.state.lng]
  if (typeof window !== 'undefined') {
    return (
      <>
        <h2>{t('mapPlaces')}</h2>
        <Map coordinates
          className='map'
          center={[54, 28]}
          zoom={5.7}
          maxZoom={10}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {data.map((element, i) => <Marker key={i} position={element} />)}
        </Map>
      </>
    );
  }
  return null;
}

MyMap.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
};

export default MyMap;
