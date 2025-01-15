import React from "react"
import Image from "next/image"
import { BioRhyme_Expanded } from "next/font/google"
import Facebook from "./Facebook"
import Insta from "./Insta"
import Bandcamp from "./Bandcamp"
import Tiktok from "./Tiktok"
import Youtube from "./Youtube"
import Spotify from "./Spotify"
import Link from "next/link"

const biorhyme = BioRhyme_Expanded({
	weight: "400",
	subsets: ["latin"],
})

const Header = () => {
	return (
		<div className="absolute w-full flex justify-around text-white">
			<div className={`flex items-center text-2xl ${biorhyme.className} mb-1`}>
				{/* <Image
          className='opacity-70 hover:opacity-100 mr-8'
          src='/logo.png'
          alt='Jim Williams Logo'
          width={150}
          height={150}
        /> */}
				<ul className="flex gap-4">
					<Link
						href="/"
						rel="preload"
					>
						<li className="nav">Home</li>
					</Link>
					<Link
						href="/bio"
						rel="preload"
					>
						<li className="nav">Bio</li>
					</Link>
					<Link
						href="/music"
						rel="preload"
					>
						<li className="nav">Music</li>
					</Link>
					<Link
						href="/contact"
						rel="preload"
					>
						<li className="nav">Contact</li>
					</Link>
				</ul>
			</div>

			<div className="h-[150px] w-[150px]"></div>

			<div className="flex gap-5 items-center">
				<a
					href="https://www.facebook.com/profile.php?id=61551916748821"
					target="_blank"
				>
					<Facebook className="social" />
				</a>
				<a
					href="https://www.instagram.com/thejimwilliamsmusic/"
					target="_blank"
				>
					<Insta className="social" />
				</a>
				<a
					href="https://www.tiktok.com/@thejimwilliams"
					target="_blank"
				>
					<Tiktok className="social" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCDY0enG0D2824vckC-Ri6iQ"
					target="_blank"
				>
					<Youtube className="social" />
				</a>
				<a
					href="https://jimwilliamsmusic.bandcamp.com/"
					target="_blank"
				>
					<Bandcamp className="social" />
				</a>
				<a
					href="https://open.spotify.com/artist/3qyXnPjQ47e17GzCScQVc4"
					target="_blank"
				>
					<Spotify className="social" />
				</a>
			</div>
		</div>
	)
}

export default Header
