import React, { useEffect, useState } from 'react';
import { Header } from '../components/Layout/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../components/Layout/Footer';

export const Layout = () => {

    const location = useLocation();
    const path: string = location.pathname;
    const [fade, setFade] = useState<string>("");

    useEffect(() => {
        setTimeout(() => {
            setFade("end");
        }, 10)
    
        return() => {
            setFade("");
        }
    }, [path])

    return (
        <div className='flex flex-wrap justify-center'>
            <Header />
            <div className={`max-w-[1280px] min-w-[1280px] flex-1 start ${fade} mt-[80px]`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
