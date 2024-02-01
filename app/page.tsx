'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import localFont from 'next/font/local';

const myFont = localFont({ src: './mortend-bold.otf' });

export default function Home() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    console.log(width);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <main className={myFont.className}>
      {/* <Image
        className='w-full h-full hidden -z-10'
        src='/desktopLanding.svg'
        alt='desktopLanding'
        height={0}
        width={0}
      />
      <Image
        className='w-full block md:hidden -z-10'
        sizes='100vw'
        src='/mobileLanding.svg'
        alt='mobileLanding'
        height={0}
        width={0}
      /> */}
      <div className='flex justify-center'>
        <Image
          className='absolute -z-10 w-full max-h-screen'
          src={width > 500 ? '/desktopLanding.svg' : '/mobileLanding.svg'}
          alt='desktop'
          layout='responsive'
          width={0}
          height={0}
        />
        <div className='absolute bottom-16'>
          <div className='grid gap-8 items-start justify-center'>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-cyan-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
              <button className='relative border-2 py-4 px-10 rounded-2xl font-black text-2xl leading-none flex items-center bg-[#090a36]'>
                <span className='text-cyan-400 border-cyan-400 group-hover:text-cyan-300 transition duration-200'>
                  PLAY NOW
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
