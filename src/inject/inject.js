const blackList = [
	// It just isn't fun anymore
	'9gag.com',
]

const greyList = [
	// youtube = productivity killer
	'www.youtube.com',

	// comics I like a bit too much
	'www.commitstrip.com',
	'xkcd.com',
	'www.smbc-comics.com',
]

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {

		// date limitations
		const d = new Date()

		// also block after midnight
		const isWorkHours = d.getDay() != 6 && d.getDay() != 0 && d.getHours() < 18

		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			if(blackList.includes(window.location.hostname)) {
				window.location.href = "https://www.meme-arsenal.com/memes/308414a4ed2d3aceb7b323dccba5193e.jpg"
				return
			}

			if(greyList.includes(window.location.hostname) && isWorkHours) {
				window.location.href = "https://www.meme-arsenal.com/memes/308414a4ed2d3aceb7b323dccba5193e.jpg"
			}

			return
		}
	}, 10);
});