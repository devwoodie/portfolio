import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LightDarkMode } from './LightDarkMode';

type TMenuList = {
    id: number;
    title: string;
    link: string;
}

export const Menu = () => {

    const menuList:TMenuList[] = [
        {
            id: 1,
            title: "Home",
            link: "/"
        },
        {
            id: 2,
            title: "Project",
            link: "/project"
        },
        {
            id: 3,
            title: "Contact",
            link: "/contact"
        },
    ]
    const location = useLocation();
    const path: string = location.pathname;

    return (
        <div className={`flex items-center`}>
            {menuList.map((menu: TMenuList) => (
                <Link key={menu.id} to={menu.link} className={`px-3 mx-2 text-center relative before:absolute before:bottom-[-6px] before:left-[50%] before:translate-x-[-50%] before:w-[70%] before:h-[3px] ${path === menu.link ? "before:bg-primary-1" : "before:bg-transparent"}` }>
                    {menu.title}
                </Link>
            ))}
            <LightDarkMode />
        </div>
    )
}
