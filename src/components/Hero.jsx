import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/*Code for the hero left side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR FEATURED</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>TOP GADGETS</h1>
                <div className='flex items-center gap2'>
                    <p className='font-semibold text-sm md:text-base'>BUY NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Code for the hero Right Side */}
        <img className='w-full sm:w-1/2' src={assets.hero_image_new} alt="" />
    </div>
  )
}

export default Hero