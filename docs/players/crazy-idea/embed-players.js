const embedPlayers = async (playersInfo = []) => {

	for (let playerInfo of playersInfo) {
		const targetId = playerInfo.targetId;
		const partnerId = playerInfo.partnerId;
		const uiConfId = playerInfo.uiConfId;
		const entryId = playerInfo.entryId;

		const playerData = window.IBM.kaltura[uiConfId];

		window.KalturaPlayer = playerData.KalturaPlayer;
		window.kalturaCustomPreset = playerData.kalturaCustomPreset;
		window.__kalturaplayerdata = playerData.__kalturaplayerdata;

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

		await new Promise((resolve) => {
			window.setTimeout(() => {
				resolve(true);
			}, 500);
		});
	}
};

export default embedPlayers;
