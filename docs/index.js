import { h, render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

import HomeSections from './assets/js/components/home-sections.js';

const sections = [
	{
		heading: 'V7 Player',
		subSections: [
			{
				heading: 'Media Player',
				cardSections: [
					{
						heading: 'Examples:',
						cards: [
							{
								href: './players/working/',
								heading: 'Video working as intended'
							},
							{
								href: './players/audio-then-video/',
								heading: 'Audio then Video'
							},
							{
								href: './players/video-then-audio/',
								heading: 'Video then Audio'
							},
						]
					},
					{
						heading: 'Solution:',
						cards: [
							{
								href: './players/crazy-idea/',
								heading: 'Possible Rework'
							},
						]
					},
				]
			},
		]
	},
];

const html = htm.bind(h);

render(
	html`<${HomeSections} sections="${sections}" />`,
	document.getElementsByTagName('main')[0]
);
