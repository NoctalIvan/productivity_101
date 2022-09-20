chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {

		// date limitations
		const d = new Date()
		if(
			d.getDay() == 6 || d.getDay() == 0 // satuday, sunday
			|| d.getHours() >= 18 // after 6pm
		) {
			return
		}

		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			switch(window.location.hostname) {
				// yt
				case 'www.youtube.com':

				// memes
				case '9gag.com':

				// games
				case "www.jeuxvideo.com":

				// comics (that i like a bit too much)
				case "www.commitstrip.com":
				case "dilbert.com":
				case "xkcd.com":
				case "www.smbc-comics.com":
					const a = Math.floor(1 + Math.random() * 10)
					const b = Math.floor(1 + Math.random() * 10)
					const res = -1 // window.prompt(`${a} * ${b}?`)
					
					if(res != a * b) {
						window.location.href = "https://www.meme-arsenal.com/memes/308414a4ed2d3aceb7b323dccba5193e.jpg"
					}

					return
			}
		}
	}, 10);
});