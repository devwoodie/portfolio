import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Header = () => {
    return (
        <div className='bg-[#e0e0e0] dark:bg-[#1e293b] w-full fixed z-50 border-b-[1px] border-[#bcbcbccf] border-solid'>
            <div className="m-auto flex flex-1 max-w-[1280px] min-w-[1280px] my-4 justify-between items-center" >
                <Logo />
                <Menu />
            </div>
        </div>
    )
}
