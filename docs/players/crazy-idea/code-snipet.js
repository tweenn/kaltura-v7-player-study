import { h, render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

import CodeSnipet from '../../../assets/js/components/code-snipet.js';

const codeSnipet = ({
	mediaEntries
}) => {
	const codeExample = `
<div id="video-target" class="media-player"></div>
<div id="audio-target" class="media-player"></div>

<style>
	.media-player {
		aspect-ratio: 16/9;
		background-color: #dedede;

		& + .media-player {
			margin-top: 2em;
		}
	}
</style>

${mediaEntries.map(({
	uiConfId,
	partnerId,
}) => `<script src="https://cdnapisec.kaltura.com/p/${partnerId}/embedPlaykitJs/uiconf_id/${uiConfId}"></script>`).join('\n')}

<script defer>
	const mediaEntries = [
		${mediaEntries.map(({
			targetId,
			uiConfId,
			partnerId,
			entryId
		}) => `
		{
			targetId: ${targetId},
			uiConfId: ${uiConfId},
			partnerId: ${partnerId},
			entryId: ${entryId},
		},
		`).join('\n')}
	];

	mediaEntries.forEach(({
		targetId,
		uiConfId,
		partnerId,
		entryId
	}) => {
		const kalturaPlayer = window.KalturaPlayer.setup({
			targetId,
			provider: {
				partnerId,
				uiConfId
			},
			playback: {
				autoplay: false
			}
		});
		kalturaPlayer.loadMedia({entryId});
	});
</script>
	`;

	const html = htm.bind(h);

	render(
		html`<${CodeSnipet} code="${codeExample}" />`,
		document.getElementById('code-snipet')
	);
};

export default codeSnipet;
