import React from "react";
import Image from "next/image";
import { BioRhyme } from "next/font/google";
import Facebook from "./Facebook";
import Insta from "./Insta";
import Bandcamp from "./Bandcamp";
import Tiktok from "./Tiktok";
import Youtube from "./Youtube";
import Spotify from "./Spotify";

const biorhyme = BioRhyme({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className='absolute w-full flex justify-around text-white'>
      <div className={`flex items-center text-2xl ${biorhyme.className} mb-1`}>
        <Image
          className='opacity-70 hover:opacity-100 mr-8'
          src='/logo.png'
          alt='Jim Williams Logo'
          width={150}
          height={150}
        />
        <ul className='flex gap-4'>
          <li className='nav'>Bio</li>
          <li className='nav'>Music</li>
          <li className='nav'>Contact</li>
        </ul>
      </div>

      <div className='h-[150px] w-[150px]'></div>

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
