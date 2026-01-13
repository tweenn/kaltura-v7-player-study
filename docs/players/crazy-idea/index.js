import codeSnipet from './code-snipet.js';

import loadPlayers from './load-players.js';
import embedPlayers from './embed-players.js';

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

loadPlayers(mediaEntries)
	.then(() => {
		embedPlayers(mediaEntries);
	});

codeSnipet({
	mediaEntries
});
