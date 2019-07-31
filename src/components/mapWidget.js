import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import PropTypes from 'prop-types'

class MyMap extends Component {
  constructor() {  
    super(); 
  }

  render() {
    // const { coordinates } = this.props;
    // const position = [this.state.lat, this.state.lng]
    if (typeof window !== 'undefined') {
      return (
        <Map coordinates
          style={{ height: "480px", width: "500px", margin: '0 auto' }}
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
          {this.props.data.map((element, i) => <Marker key={i} position={element}/> )}
        </Map>
      )
    }
    return null  
  } 
}

MyMap.propTypes = {
  data: PropTypes.array,
}

export default MyMap;