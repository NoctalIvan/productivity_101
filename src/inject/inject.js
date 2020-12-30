chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			switch(window.location.hostname) {
				// yt
				case 'www.youtube.com':

				// memes
				case '9gag.com':

				// comics (that i like a bit too much)
				case "www.commitstrip.com":
				case "dilbert.com":
				case "xkcd.com":
				case "www.smbc-comics.com":
					const res = window.confirm('Are you sure that\'s what you wanna do right now?')
					if(!res) {
						window.location.href = "https://sayingimages.com/wp-content/uploads/really-proud-of-you-meme.gif"
					}

					return
			}
		}
	}, 10);
});