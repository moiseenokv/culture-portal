import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';

import '../styles/author.css';

const MyMap = ({ data, t }) => {
	if (typeof window !== 'undefined') {
		return (
			<>
				<h2>{t('mapPlaces')}</h2>
				<Map
					className="map"
					center={[54, 28]}
					zoom={5.7}
					maxZoom={10}
					doubleClickZoom={true}
					scrollWheelZoom={true}
					dragging={true}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					{data.map((element, i) => (
						<Marker key={i} position={element} />
					))}
				</Map>
			</>
		);
	}
	return null;
};

MyMap.propTypes = {
	t: PropTypes.func.isRequired,
	data: PropTypes.array,
};

export default MyMap;
