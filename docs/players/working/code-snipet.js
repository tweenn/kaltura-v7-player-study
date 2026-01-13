import { h, render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';

import CodeSnipet from '../../../assets/js/components/code-snipet.js';

const codeSnipet = ({
	targetId,
	uiConfId,
	partnerId,
	entryId,
}) => {
	const codeExample = `
<div id="media-target" class="media-player"></div>

<style>
	.media-player {
		aspect-ratio: 16/9;
		background-color: #dedede;
	}
</style>

<script src="https://cdnapisec.kaltura.com/p/${partnerId}/embedPlaykitJs/uiconf_id/${uiConfId}"></script>

<script defer>
	const targetId = '${targetId}';
	const uiConfId = '${uiConfId}';
	const partnerId = '${partnerId}';
	const entryId = '${entryId}';

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

</script>
	`;

	const html = htm.bind(h);

	render(
		html`<${CodeSnipet} code="${codeExample}" />`,
		document.getElementById('code-snipet')
	);
}

export default codeSnipet;
