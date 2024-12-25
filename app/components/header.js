import React from "react";
import { BioRhyme_Expanded } from "next/font/google";
import Facebook from "./Facebook";
import Insta from "./Insta";
import Bandcamp from "./Bandcamp";
import Tiktok from "./Tiktok";
import Youtube from "./Youtube";
import Spotify from "./Spotify";

const biorhyme = BioRhyme_Expanded({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className='absolute w-full h-24 flex justify-around text-white'>
      <div className={`flex items-center text-2xl ${biorhyme.className}`}>
        <ul className='flex gap-5 h-[48px]'>
          <li className='nav'>Home</li>
          <li className='nav'>Bio</li>
          <li className='nav'>Music</li>
          <li className='nav'>Contact</li>
        </ul>
      </div>

      <div className='flex gap-5 items-center'>
        <Facebook className='social' />
        <Insta className='social' />
        <Tiktok className='social' />
        <Youtube className='social' />
        <Bandcamp className='social' />
        <Spotify className='social' />
      </div>
    </div>
  );
};

export default Header;
