import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../../assets/images/project/1.png';

type TProps = {
    id: number;
    title: string;
    type: string;
    company: string;
    description: string;
    git?: string;
    site?: string;
    img?: string;
}

export const ProjectCont = ({
    id,
    title,
    description,
    company,
    type,
    git,
    site,
    img,
}: TProps) => {

    const handleWindowOpen = (link: string) => {
        window.open(link);
    }

    return (
        <div className="relative mb-20 flex w-80 flex-col rounded-xl dark:bg-[#42444e] bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                {img !== "" && 
                    <img className='object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]' src={require(`../../assets/images/project/${img}`)} alt={`${id}-img`}/>
                }
            </div>
            <div className="p-6">
                <h5 className="block text-xl dark:text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                    <span className='ml-2 text-[14px] dark:text-white text-[#818181]'>{company}</span>
                </h5>
                <span className='mb-2 block text-[16px] underline dark:text-white text-[#4f4f4f]'>{type}</span>
                <p className="dark:text-white min-h-[70px] block text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
                {git !== "" &&
                    <button onClick={() =>  handleWindowOpen(git || "")} data-ripple-light="true" type="button" className="select-none rounded-lg mr-2 bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        GitHub
                    </button>
                }
                {site !== "" &&
                    <button onClick={() =>  handleWindowOpen(site || "")} data-ripple-light="true" type="button" className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-[1px] border-solid border-[#c4c4c4]">
                        Site
                    </button>
                }
            </div>
        </div>
    )
}
