import('https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/card-section-simple.min.js');

import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

const HomeCards = ({
	section = []
}) => {
	return html`
		<dds-card-section-simple>
			<dds-content-section-heading>
				${section.heading}
			</dds-content-section-heading>
			<dds-card-group>
				${ section.cards.map((card) => {
					return html`
						<dds-card-group-item href="${card.href}" cta-type="local">
							<dds-card-heading>${card.heading}</dds-card-heading>
							<dds-card-cta-footer slot="footer"></dds-card-cta-footer>
						</dds-card-group-item>
					`;
				}) }
			</dds-card-group>
		</dds-card-section-simple>
	`;
};

export default HomeCards;
