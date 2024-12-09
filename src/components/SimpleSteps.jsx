import React from 'react'
import { SIMPLE_STEPS } from '../Utils/Helper'

const SimpleSteps = () => {
  return (
      <div className='max-lg:mt-[100px] max-md:mt-[60px] lg:mt-[162px]'>
          <div className='container'>
              <div className='flex flex-col items-center justify-center'>
                  <h2 className='font-normal text-custom-lg leading-custom-lg'>Simple Steps to <span className='font-bold'>Switch</span></h2>
                  <p className='text-base font-normal max-w-[610px] text-center mt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
              </div>
              <div className='flex items-center mt-[58px]'>
                  {SIMPLE_STEPS.map((item, index) => (
                      <div className='relative group cursor-pointer overflow-hidden' key={index}>
                          <img src={item.image} alt={item.alt} />
                          <div className='absolute group-hover:h-0 group-hover:w-0 group-hover:top-1/2 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:opacity-100 group-hover:z-10 transition-all duration-300 bg-link-white opacity-94 top-0 left-0 w-full h-full'>
                              <div className='relative w-full h-full'>
                                  <p className='absolute top-1/2 left-1/2 translate-x-[-50%] text-center leading-custom-sm pointer-events-none text-custom-sm group-hover:  text-black- -rotate-90 min-w-[574px] group-hover:hidden'>{item.imageHeading}</p>
                              </div>
                          </div>
                          <div className='bg-deep-ocean absolute bottom-[-50%] group-hover:bottom-0 transition-all duration-300 w-full max-w-[360px] p-8 '>
                              <h4 className='leading-custom-sm text-custom-sm font-normal mb-3.5 text-white'>{item.hoverHeading}</h4>
                              <p className='leading-custom-ssm font-normal text-white'>{item.hoverParagraph}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          
    </div>
  )
}

export default SimpleSteps