import React from 'react'
import { Link } from 'react-router-dom';

type TLinkList = {
    id: number;
    title: string;
    link: string;
    icon: JSX.Element
}

export const Footer = () => {

    const linkList: TLinkList[] = [
        {
            id: 1,
            title: "github",
            link: "https://github.com/devwoodie",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
        },
        {
            id: 2,
            title: "linkedIn",
            link: "https://www.linkedin.com/in/dongwoo-yu",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        },
        {
            id: 3,
            title: "blog",
            link: "https://devwoodie.github.io",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 9c0-.552.414-1 .924-1h2.818c.512 0 .924.448.924 1s-.412 1-.924 1h-2.818c-.51 0-.924-.448-.924-1zm7.013 5h-6.027c-.545 0-.986.447-.986 1s.441 1 .986 1h6.026c.546 0 .988-.448.988-1s-.442-1-.987-1zm8.987-9v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-4 5.812c0-.438-.354-.792-.79-.792h-1.301c-.666 0-.789-.509-.789-1.138 0-2.696-2.182-4.882-4.873-4.882h-3.374c-2.691 0-4.873 2.186-4.873 4.883v6.234c0 2.697 2.182 4.883 4.873 4.883h6.255c2.69 0 4.872-2.186 4.872-4.883v-4.305z"/></svg>
        },
    ]

    return (
        <div className='py-[30px] border-t-[1px] border-solid border-gray-400 dark:border-gray-500 w-full text-center'>
            <p className='text-[16px] text-gray-500 dark:text-gray-300 mb-3'>© 2024.유동우 All rights reserved.</p>
            <div className='flex items-center justify-center'>
                {linkList.map((item: TLinkList) => (
                    <Link target="_blank" to={item.link} key={item.id} className='mx-1 p-1 bg-white rounded-[10px]'>
                        {item.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}
