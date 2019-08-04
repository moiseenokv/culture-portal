import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'gatsby-plugin-i18next';
import PropTypes from 'prop-types';

import '../styles/main.css';

const AuthorOfTheDay = ({ data, t }) => (
	<>
		<h2 className="author-of-the-day">{t('authorOfTheDay')}</h2>
		<Layout className="layout author-of-the-day">
			<Link to={`/${data.title}`}>
				<Row>
					<Col xs={24} sm={24} md={8} lg={6} xl={4}>
						<h3 className="show-small">{data.fullName}</h3>
						<img
							className="author-of-the-day-img"
							alt={data.fullName}
							src={data.photo}
						/>
					</Col>
					<Col
						xs={24}
						sm={24}
						md={14}
						lg={16}
						xl={18}
						offset={1}
						className="about-autor-of-day"
					>
						<h3 className="hide-small">{data.fullName}</h3>
						<p className="life-dates">{`${data.birthDate} - ${data.deathDate}`}</p>
						<p>{data.description}</p>
					</Col>
				</Row>
			</Link>
		</Layout>
	</>
);

AuthorOfTheDay.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		photo: PropTypes.string,
		birthDate: PropTypes.string,
		deathDate: PropTypes.string,
		description: PropTypes.string,
		fullName: PropTypes.string.isRequired,
	}),
	t: PropTypes.func.isRequired,
};

export default AuthorOfTheDay;
