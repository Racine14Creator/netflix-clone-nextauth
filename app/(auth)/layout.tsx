import Image from "next/image";
import { ReactNode } from "react";
import bgImg from "../../public/login_background.jpg";
import LogoCampany from "../../public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent'>
      <Image
        src={bgImg}
        alt='Bg-image'
        className='hidden sm:flex sm:object-cover -z-10 brightness-50'
        priority
        fill
      />
      <Image
        src={LogoCampany}
        alt='Logo'
        width={120}
        height={120}
        className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
        priority
      />
      <div className='rounded mt-24 bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
        {children}
      </div>
    </div>
  );
}
