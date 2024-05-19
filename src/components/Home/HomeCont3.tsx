import React from 'react';
import ImgProfile from "../../assets/images/profile-blog.png";
import { Link, useNavigate } from 'react-router-dom';
import { SnsLink } from '../Common/SnsLink';
import { Cont3Box } from './Cont3Box';

export const HomeCont3 = () => {

    const navigate = useNavigate();

    return (
        <div className='pt-[80px] pb-[80px] border-t-[1px] border-solid border-[#c4c4c4] flex justify-between'>
            <div>
                <h2 className='text-[35px] font-black'>포트폴리오 (프로젝트 상세)</h2>
                <p className='text-[25px] mt-5'>회사에서 진행했던 프로젝트와 개발 동아리에서 진행했던 프로젝트<br/>또는 토이 프로젝트들을 정리했습니다.</p>
                <button className='home-btn bg-primary-1 text-white mt-10' onClick={() => navigate("/project")}>
                    전체 프로젝트
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </button>
            </div>
            <Cont3Box />
        </div>
    )
}
