import React from 'react'
import { Money_By } from '../Utils/Helper'

const EnergyPlans = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex flex-row flex-wrap -mx-3'>
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
                                {Money_By.map((obj, i) => (
                                    <div key={i} className='mt-2'>
                                        <ul>
                                            <li className=''>{obj.list}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EnergyPlans