import('https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/card-section-simple.min.js');

import { h, Fragment } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

import HomeCards from './home-cards.js';

const html = htm.bind(h);

const HomeSubSections = ({
	section = []
}) => {
	return html`
		<${Fragment}>
			<div class="bx--row">
				<div class="bx--col bx--col--auto">
					<h2>
						${section.heading}
					</h2>
				</div>
			</div>

			${section.cardSections.map((cardSection) => (html`
				<${HomeCards} section="${cardSection}" />
			`))}
		</${Fragment}>
	`;
};

export default HomeSubSections;
