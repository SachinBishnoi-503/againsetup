import React from 'react'
import { Company_Names } from '../Utils/Helper'

const CompanyList = () => {
    return (
        <div className='mt-[54px]'>
            <div className='container'>
                <div>
                    <p className='!leading-custom-lg max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-custom-4xl max-w-[548px] text-green-vogue max-lg:text-white max-lg:max-w-full'>More than <span className='font-bold text-sky-blue'> 80,000+ </span> companies trust bill central </p>
                        <div className='flex items-center justify-between mt-[64px]'>
                            {Company_Names.map((item,index) => (
                                <img src={item.logo} key={index} className='' alt="{item.alt}" />
                            ))}
                        </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyList