import codeSnipet from './code-snipet.js';

const targetId = 'media-target';
const uiConfId = '55474022';
const partnerId = '6010023';
const entryId = '1_9li2tsie';

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

codeSnipet({
	targetId,
	uiConfId,
	partnerId,
	entryId,
});
