import React from 'react';
import { graphql } from 'gatsby';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

import Layer from '../components/layer';
import SEO from '../components/seo';

const NotFoundPage = ({ t }) => (
	<Layer t={t}>
		<SEO title="404: Not found" />
		<h1>{t('notFoundMessage')}</h1>
		<p>{t('notFoundReason')}</p>
	</Layer>
);

NotFoundPage.propTypes = {
	t: PropTypes.func,
};

export const query = graphql`
	query($lng: String!) {
		locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
			...TranslationFragment
		}
	}
`;

export default withI18next()(withNamespaces()(NotFoundPage));
