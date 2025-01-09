export default function Music() {
	return (
		<div className="h-full w-full bg-[url('/MusicPageBG.png')] bg-center bg-contain bg-no-repeat">
			<div className="h-full w-full bg-black/25 flex flex-col justify-center my-10 mx-5 gap-3">
				<iframe
					src="https://open.spotify.com/embed/track/02WOqz8zDvMVKeMoHoXySt?utm_source=generator"
					width="40%"
					height="152"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>
		</div>
	)
}
