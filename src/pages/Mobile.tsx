import React from 'react'

export const Mobile = () => {
    return (
        <div className='text-center my-[100px] px-[10px]'>
            <p className='text-[22px]'>이 프로젝트는 PC 환경에 최적화되어 있어</p>
            <small className='block mt-[-5px] text-[#797979] text-[14px]'>This project is optimized for PC use and</small>
            <p className='text-[22px] mt-2'>모바일 기기에서는 이용하실 수 없습니다.</p>
            <small className='block mt-[-5px] text-[#797979] text-[14px]'>cannot be accessed on mobile devices.</small>
            <br/>
            <p className='text-[22px] mt-3'>PC로 접속해 주시기 바랍니다.</p>
            <small className='block mt-[-5px] text-[#797979] text-[14px]'>Please access it from a PC.</small>
        </div>
    )
}
