import { SnsLink } from '../Common/SnsLink';

export const Footer = () => {

    return (
        <div className='py-[30px] border-t-[1px] border-solid border-gray-400 dark:border-gray-500 w-full text-center'>
            <p className='text-[16px] text-gray-500 dark:text-gray-300 mb-3'>© 2024.유동우 All rights reserved.</p>
            <SnsLink
                direction={"justify-center"}
            />
        </div>
    )
}
