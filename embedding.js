async function loadiFrame(id, url) {
	return new Promise((resolve) => {
		document.getElementById(id).src = url
		resolve("resolved")
	})
}

window.addEventListener("DOMContentLoaded", (event) => {
	spotifys = document.getElementsByClassName("spotify")
	for (let i = 0; i < spotifys.length - 1; i++) {
		spotifys[i].allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		spotifys[i].loading = "lazy"
	}

	youtubes = document.getElementsByClassName("youtube")
	for (let i = 0; i < youtubes.length - 1; i++) {
		youtubes[i].title = "Youtube video player"
		youtubes[i].allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		youtubes[i].referrerpolicy = "strict-origin-when-cross-origin"
	}
})

window.addEventListener("load", async (event) => {
	Promise.all([
		loadiFrame("siege-dropdead", "https://open.spotify.com/embed/album/7kIvlhU8SmzVu8C9zB6EWQ?utm_source=generator&theme=0"),
		loadiFrame("spazz-crushkill", "https://open.spotify.com/embed/album/7y28DRoed3LaipJk8Rns0x?utm_source=generator&theme=0"),
		loadiFrame("dissassemblyline", "https://open.spotify.com/embed/album/09L3eJX0axMCx5u5aKpzoP?utm_source=generator&theme=0")
	])
	Promise.all([
		loadiFrame("worldpeace", "https://open.spotify.com/embed/album/4Ld6s6IGAXnX655NJn4gHX?utm_source=generator&theme=0"),
		loadiFrame("fentanyl", "https://open.spotify.com/embed/track/2mmspaBBxJa8K2qHhj4w0h?utm_source=generator&theme=0"),
		loadiFrame("bandit", "https://open.spotify.com/embed/album/3WDVhMVXoue3HTLC6WkcoT?utm_source=generator&theme=0")
	])
	Promise.all([
		loadiFrame("play-phoebe", "https://open.spotify.com/embed/playlist/1X02kpVawku2ZElYRcSLhQ?utm_source=generator&theme=0"),
		loadiFrame("play-antonio", "https://open.spotify.com/embed/playlist/2rHYSXwhJclq8bIinU8zYM?utm_source=generator&theme=0")
	])
	Promise.all([
		loadiFrame("spazz-warpath", "https://www.youtube-nocookie.com/embed/yb0jaGrP_S4?si=SAnEeDj66E5Xugkv"),
		loadiFrame("spazz-redwood", "https://www.youtube-nocookie.com/embed/T5qUl5BAIYs?si=AwcZ2CC1sNIDqVoC"),
		loadiFrame("siege-obscene", "https://www.youtube-nocookie.com/embed/UEELR3XpXcg?si=zW3F7sYqHzTe3rQd")
	])
	Promise.all([
		loadiFrame("siege-void", "https://www.youtube-nocookie.com/embed/g8Vq5R913NU?si=rxoktfMUnoMuiJEV"),
		loadiFrame("bandit-richmond", "https://www.youtube-nocookie.com/embed/wuyiRCEaIWU?si=_gZd4yb99AsAcp4d"),
		loadiFrame("capitalistcas", "https://www.youtube-nocookie.com/embed/O3o4IaHZLx4?si=nT9Uswog1z8PDq96")
	])
})