title = "POWERVIOLENCE!! "

currentIndex = 2
favicon = document.querySelector("link[rel='icon']")

window.onload = () => {

	// Making website's title change
	setInterval(() => {
		firstChar = title[0]

		title = title.slice(1)
		title += firstChar

		document.title = title
	}, 1000)

	// Spinny favicon
	setInterval(() => {
		favicon.href = `favicons/favicon-${currentIndex}.png`
		currentIndex++

		if (currentIndex - 1 == 15) {
			currentIndex = 1
		}
	}, 500)
}