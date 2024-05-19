import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomeCont4 = () => {

    const navigate = useNavigate();

    return (
        <div className='pt-[250px] pb-[100px] text-center'>
                <h2 className='text-[25px]'>궁금하신 사항이 있으시면 연락 바랍니다.</h2>
            <div className='text-center m-auto mt-6'>
                <button className='m-auto home-btn bg-primary-1 text-white' onClick={() => navigate("/contact")}>
                    연락하기
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
