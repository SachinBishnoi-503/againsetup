import React from 'react'
import { MONEY_BY } from '../Utils/Helper'
import CustomButton from '../common/CustomButton'

const EnergyPlans = () => {
    return (
        <div className='max-lg:mt-[100px] max-md:mt-[60px] lg:mt-[162px]'>
            <div className='container'>
                <div className='flex flex-row flex-wrap -mx-3 items-center'>
                    <div className='px-3 max-xl:w-full xl:w-1/2 max-xl:justify-center max-xl:flex'>
                        <img src="./assets/images/png/switching-energy.png" alt="" className='max-md:w-full md:max-w-[507px] max-md:h-full md:min-h-[451px]' />
                    </div>
                    <div className='px-3 max-xl:w-full xl:w-1/2 max-xl:justify-center max-xl:flex '>
                        <div>
                            <h2 className='max-w-[409px] max-sm:text-custom-sm sm:text-custom-lg font-normal leading-custom-sm font-'><span className='font-bold'>Switching Energy</span> Made Simple</h2>
                            <p className='font-normal max-sm:text-sm sm:text-base max-sm:w-full sm:max-w-[558px] mt-4'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                            <h3 className='font-normal text-2xl mt-[38px]'>
                                Benefits of Comparing Energy Plans
                            </h3>
                            <div className='mt-[38px]'>
                                {MONEY_BY.map((obj, i) => (
                                    <div key={i} className='mt-2'>
                                        <ul>
                                            <li className=''>{obj.list}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-[42px]'>
                                <button className='flex items-center gap-1 py-3 px-[27px] border border-sky-blue font-bold text-base rounded-[0_50px_50px_20px] bg-sky-blue text-white'>Compare With Us</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EnergyPlans