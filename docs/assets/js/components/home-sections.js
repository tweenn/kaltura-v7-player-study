import('https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/card-section-simple.min.js');

import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

import HomeSubSections from './home-sub-sections.js';

const html = htm.bind(h);

const HomeSections = ({
	sections = []
}) => {
	return sections.map((section) => (html`
		<section>
			<div class="bx--grid">
				<div class="bx--row">
					<div class="bx--col bx--col--auto">
						<h1>
							<strong>
								${section.heading}
							</strong>
						</h1>
					</div>
				</div>

				${section.subSections.map((subSection) => (html`
					<${HomeSubSections} section="${subSection}" />
				`))}
			</div>
		</section>
	`));
};

export default HomeSections;
