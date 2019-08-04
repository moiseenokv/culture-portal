import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

import '../styles/author.css';

const Gallery = ({ data, t }) => {
	const images = (item, i) => {
		return (
			<div key={i}>
				<img src={item} />
			</div>
		);
	};

	return (
		<>
			<h2>{t('gallery')}</h2>
			<div className="gallery">
				<Carousel className="carousel" autoplay>
					{data.img.map(images)}
				</Carousel>
			</div>
		</>
	);
};

Gallery.propTypes = {
	data: PropTypes.object,
	t: PropTypes.func.isRequired,
};

export default Gallery;
