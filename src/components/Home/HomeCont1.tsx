import React from 'react';

export const HomeCont1 = () => {
    return (
        <div className='min-h-[50vh] mt-[100px]'>
            <div>
                <h2 className='text-[25px]'>안녕하세요.</h2>
                <p className='text-[30px] relative after:absolute after:w-[31%] after:left-[-5px] after:bottom-4 after:z-[-1] z-[1] after:h-[18px] after:bg-[#326aee50] dark:after:bg-[#f0b75384]'>
                    <b className='text-[40px] font-black'>디자인과 기술의 조화를 실현</b> 하는
                </p>
                <p className='text-[30px]'>프론트엔드 개발자 <b className='text-[35px] font-black'>유동우</b> 입니다.</p>
            </div>
        
        </div>
    )
}
