import ('https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/data-table.min.js');
// import('https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/list.min.js');

import { h } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

const ParametersTable = ({
	parameters = '',
	embedType = 'iframe'
}) => {
	const tableHeader = [
		'Name',
		'Description',
		'Type',
		'Default',
		'Values'
	];

	return html`
		<div class="bx--row pt-2">
			<div class="bx--col bx--col--auto">
				<h2>Possible Parameters:</h2>

				<!--
				<h4>Important notice:</h4>

				<cds-unordered-list>
					<cds-list-item>
						The default behaviour of the player is the one intended and approved by IBM Brand & Design Language
						<br />
						Any change to such behaviour may require especial approvals from the mentioned teams and are not responsibility of the Mediacenter engineering team.
					</cds-list-item>
					<cds-list-item>
						The bellow list has the most used variations available, not all of then.
						<br />
						So if you want to do is not listed here, please give us a call in our slack support channel #mediacenter_support 
					</cds-list-item>
				</cds-unordered-list>

				<br />
				<br />
				-->

				<cds-table>
					<cds-table-head>
						<cds-table-header-row>
							${tableHeader.map((header) => (html`
								<cds-table-header-cell>
									${header}
								</cds-table-header-cell>
							`))}
						</cds-table-header-row>
					</cds-table-head>

					<cds-table-body>
						${parameters.map((data) => (html`
							<cds-table-row>
								<cds-table-cell dangerouslySetInnerHTML="${{__html: data.parameters[embedType]}}" />
								<cds-table-cell dangerouslySetInnerHTML="${{__html: data.description}}" />
								<cds-table-cell dangerouslySetInnerHTML="${{__html: data.type}}" />
								<cds-table-cell dangerouslySetInnerHTML="${{__html: data.default}}" />
								<cds-table-cell dangerouslySetInnerHTML="${{__html: data.values}}" />
							</cds-table-row>
						`))}
					</cds-table-body>
				</cds-table>
			</div>
		</div>
	`;
};

export default ParametersTable;
