'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import localFont from 'next/font/local';

const myFont = localFont({ src: './mortend-bold.otf' });

export default function Home() {
  // const [width, setWidth] = useState<number>(0);

  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(window.innerWidth);
  //   }

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // });

  return (
    <main className={myFont.className}>
      <div className='flex justify-center'>
        {/* <Image
          className='absolute -z-10 w-full max-h-screen'
          src={width > 500 ? '/desktopLanding.svg' : '/mobileLanding.svg'}
          alt='desktop'
          layout='responsive'
          width={0}
          height={0}
        /> */}
        <Image
          className='absolute -z-10 w-full max-h-screen'
          src='/desktopLanding.svg'
          alt='desktopLanding'
          height={0}
          width={0}
        />
        <Image
          className='absolute w-full block md:hidden -z-10'
          sizes='100vw'
          src='/mobile.jpg'
          alt='mobileLanding'
          height={0}
          width={0}
        />
        <div className='absolute bottom-16'>
          <div className='grid gap-8 items-start justify-center'>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
              <a
                href='https://holobet.com/?faff=121&sub=A101'
                target='_blank'
                className='relative hover:cursor-pointer border-2 border-[#e60385] py-4 px-10 rounded-2xl font-black text-2xl leading-none flex items-center bg-[#090a36]'
              >
                <span className='text-[#e60385] group-hover:text-pink-300 transition duration-200 text-4xl'>
                  PLAY NOW
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
