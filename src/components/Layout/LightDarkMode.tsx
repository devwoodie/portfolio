import React, { useLayoutEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = {
    THEME: 'wd-theme-mode',
} as const;

const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const LightDarkMode = () => {

    const [isDark, setIsDark] = useState<Boolean>(false);

    useLayoutEffect(() => {
        const theme = localStorage.getItem(LOCAL_STORAGE_KEY.THEME) || THEME.LIGHT;
        if (theme === THEME.DARK) {
            document.querySelector('html')?.classList.add(THEME.DARK);
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const htmlEl = document.querySelector('html');
        if (!htmlEl) return;

        const enabledDarkMode = htmlEl.classList.contains('dark');
        if (enabledDarkMode) {
            // 다크모드인 경우(html 태그의 className에 dark가 있을때)
            // -> className에서 dark를 제거
            htmlEl.classList.remove('dark');
            setIsDark(false);
            localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME.LIGHT);
        } else {
            // 다크모드가 아닌 경우, className에서 dark를 추가
            htmlEl.classList.add('dark');
            setIsDark(true);
            localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME.DARK);
        }
    };

    return (
        <div onClick={toggleTheme} className='ml-5 cursor-pointer bg-[#0000000c] dark:bg-[#ffffff0c] p-2 rounded-[50%]'>
        {isDark ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        }
        </div>
    )
}
