import React from 'react'

const CustomButton = ({ customButton, text }) => {
    return (
        <div>
            <button className='flex items-center gap-1 py-3 px-[27px] font-bold text-base rounded-[0_50px_50px_20px] bg-sky-blue text-white'>{customButton}{text}</button>
        </div>
    )
}

export default CustomButton
