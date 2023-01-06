import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoTextBlack from '@/public/logo-text-black.png';

const Footer = () => {
  return (
    <footer className="flex justify-between border-t border-slate-4 p-16 shadow">
      <div className="socials">
        <Link href="/">
          <Image src={logoTextBlack} width={200} height={200} alt="Logo" />
        </Link>
        <div className="socials-icons flex gap-4">
          <div className="social h-12 w-12 bg-blue-600"></div>
          <div className="social h-12 w-12 bg-blue-600"></div>
          <div className="social h-12 w-12 bg-blue-600"></div>
          <div className="social h-12 w-12 bg-blue-600"></div>
        </div>
        <p>Copyright © BlogHive 2022</p>
      </div>
      <div className="links flex gap-20">
        <div className="link-container flex flex-col gap-3">
          <h6 className="text-[#075985] font-bold text-[22px]">Explore</h6>
          <Link href="/#" className='text-[18px]'>Feed</Link>
          <Link href="/#" className='text-[18px]'>Trending Blogs</Link>
          <Link href="/#" className='text-[18px]'>Tags</Link>
          <Link href="/#" className='text-[18px]'>Search</Link>
        </div>
        <div className="link-container flex flex-col gap-3">
          <h6 className="text-[#075985] font-bold text-[22px]">BlogHive</h6>
          <Link href="/#" className='text-[18px]'>About</Link>
          <Link href="/#" className='text-[18px]'>Contact</Link>
          <Link href="/#" className='text-[18px]'>Terms</Link>
          <Link href="/#" className='text-[18px]'>Privacy</Link>
        </div>
        <div className="link-container flex flex-col gap-3">
          <h6 className="text-[#075985] font-bold text-[22px]">Support</h6>
          <Link href="/#" className='text-[18px]'>Community</Link>
          <Link href="/#" className='text-[18px]'>Discussion</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
