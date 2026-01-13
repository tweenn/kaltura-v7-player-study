import('https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/code-snippet.min.js');

import { h, Fragment } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

const CodeSnipet = ({
	code = ''
}) => {
	return html`
		<${Fragment}>
			<h2>Code:</h2>
			<cds-code-snippet type="multi">${code}</cds-code-snippet>
		</${Fragment}>
	`;
};

export default CodeSnipet;
