import('https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/footer.min.js');
import('https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/masthead.min.js');

window.digitalData = {
	page: {
		pageInfo: {
			language: 'en-US',
			ibm: {
				country: 'US',
				siteID: 'IBMTESTWWW',
			},
		},
		isDataLayerReady: true,
	},
};

const footer = document.createElement('dds-footer-container');
footer.size = 'micro';

const masthead = document.createElement('dds-masthead-container');
masthead.platform = 'Kaltura V7 Player Study'

document.body.prepend(masthead);
document.body.append(footer);

document.body.classList.add('cds-theme-zone-white');
