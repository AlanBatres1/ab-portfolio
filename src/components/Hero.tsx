import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from '../../lib/utils/cn'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36 h-[100vh]'>
  <div>
    {/* Increase the opacity or brightness of the Spotlights */}
    <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-90' />
    <Spotlight className='top-10 left-full h-[80vh] w-[50vw] opacity-90' />
    <Spotlight className='top-28 left-200 h-[80vh] w-[50vw] opacity-90' />
  </div>

  <div className="flex h-screen w-full items-center justify-center bg-[#090909] absolute top-0 left-0">
    {/* Grid background with reduced opacity */}
    <div
      className={cn(
        "absolute inset-0 z-0",
        "[background-size:80px_80px]",
        "[background-image:linear-gradient(to_right,rgba(38,38,38,0.50)_2px,transparent_2px),linear-gradient(to_bottom,rgba(38,38,38,0.50)_2px,transparent_2px)]"
      )}
    />


    {/* Radial mask effect for center glow */}
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] bg-black" />
  </div>

  <div className='flex justify-center relative my-20 z-10'>
    <div className=' flex flex-col items-center justify-center'>
      <TextGenerateEffect
        className='text-center text-[40px] md:text-5xl lg:text-6xl'
        words='Transforming Concepts into Seamless Experiences'
      />
      <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
  Hello, I&apos;m <span className="text-[#4bbafa]">Alan Batres</span>, a Full Stack Developer based in California.
</p>

      <a href="#about">
        <MagicButton
          title="Show my Work"
          icon={<FaLocationArrow />}
          position='right'
        />
      </a>
    </div>
  </div>
</div>

    )
}

export default Hero