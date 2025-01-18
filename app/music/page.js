export default function Music() {
	return (
		<div className="h-screen w-full bg-[url('/MusicPageBG.png')] bg-center bg-cover bg-no-repeat overflow-hidden">
			<div className="h-screen w-full bg-black/40 flex flex-col justify-center items-center gap-3 pt-20">
				<div className="w-full flex justify-center gap-12">
					<iframe
						className="video"
						width="420"
						height="265"
						src="https://www.youtube.com/embed/MlEbk-J_W8w?si=NZ8icBvAGhYl7A9R"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
					<iframe
						className="video"
						width="420"
						height="265"
						src="https://www.youtube.com/embed/XZ1kSae3MTo?si=ujxljUwdqNcrE9_7"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="mt-4">
					<iframe
						className="video"
						width="420"
						height="265"
						src="https://www.youtube.com/embed/oeOluakCfOc?si=sqTRnb1xKponhI4T"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	)
}
