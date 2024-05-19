import React from 'react';
import ImgProfile from "../../assets/images/profile-blog.png";
import { Link, useNavigate } from 'react-router-dom';
import { SnsLink } from '../Common/SnsLink';

export const HomeCont1 = () => {

    const navigate = useNavigate();

    const handleResume = () => {
        window.open("https://spring-fang-155.notion.site/Tidy-Code-3b8fa188e4e34a95bd5b2299d7ff86bd");
    }

    return (
        <div className='my-[80px] flex justify-between items-center'>
            <div>
                <h2 className='text-[30px]'>안녕하세요.</h2>
                <p className='text-[35px] relative after:absolute after:w-[90%] after:left-[-5px] after:bottom-5 after:z-[-1] z-[1] after:h-[18px] after:bg-[#326aee50] dark:after:bg-[#f0b75384]'>
                    <b className='text-[45px] font-black'>디자인과 기술의 조화를 실현</b> 하는
                </p>
                <p className='text-[35px]'>프론트엔드 개발자 <b className='text-[40px] font-black'>유동우</b> 입니다.</p>
                <div className='flex my-6'>
                    <button className='home-btn mr-[10px] bg-primary-1 text-white' onClick={() => navigate("/contact")}>
                        연락하기
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>
                    <button className='home-btn mr-[10px] border-[1px] border-solid border-[#000] dark:border-[#fff]' onClick={handleResume}>
                        이력서
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </button>
                </div>
                <SnsLink
                    direction={"flex-start"}
                />
            </div>
            <div className='w-[300px] h-[300px] border-[1px] border-solid rounded-[50%] overflow-hidden mr-[50px]'>
                <img src={ImgProfile} alt='profile-img' />
            </div>
            
            <style>
                {`
                .home-btn{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    // border: 1px solid;
                    padding: 5px 15px;
                    border-radius: 16px;
                    font-size: 18px;
                    svg{
                        margin-left: 6px;
                    }
                }
                `}
            </style>
        </div>
    )
}
