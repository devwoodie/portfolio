import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {

    const navigate = useNavigate();

    return (
        <h1 onClick={() => navigate("/")} className='cursor-pointer text-2xl relative  z-[2]'>
            devwoodie
            <span className='absolute left-[50%] top-[63%] translate-x-[-50%] translate-y-[-50%] w-[110%] h-[8px] bg-[#326aee8f] z-[-1]'></span>
        </h1>
    )
}
