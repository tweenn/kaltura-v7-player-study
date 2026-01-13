import codeSnipet from './code-snipet.js';

const mediaEntries = [
	{
		targetId: 'video-target',
		uiConfId: '55474022',
		partnerId: '6010023',
		entryId: '1_9li2tsie',	
	},
	{
		targetId: 'audio-target',
		uiConfId: '57620223',
		partnerId: '6010023',
		entryId: '1_j5140e5y',	
	},
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

codeSnipet({
	mediaEntries
});
