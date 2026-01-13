const loadPlayers = async (playersInfo = []) => {
	window.IBM ||= {};
	window.IBM.kaltura ||= {};

	for (let playerInfo of playersInfo) {
		const partnerId = playerInfo.partnerId;
		const uiConfId = playerInfo.uiConfId;

		await new Promise((resolve) => {
			const script = document.createElement('script');

			script.onload = function () {
				window.IBM.kaltura[uiConfId] = {
					KalturaPlayer: window.KalturaPlayer,
					kalturaCustomPreset: window.kalturaCustomPreset,
					__kalturaplayerdata: window.__kalturaplayerdata
				};

				window.setTimeout(() => {
					resolve(true);
				}, 500);
			};
			script.src = `https://cdnapisec.kaltura.com/p/${partnerId}/embedPlaykitJs/uiconf_id/${uiConfId}`;

			document.head.appendChild(script);
		});
	}
};

export default loadPlayers;
