import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

type TProps = {
    email: string;
    content: string;
}
type TResType = {
    status: number;
    text: string;
}

export const Btn = ({
    email,
    content
}: TProps) => {
    const EMAILJS_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const templateParams = {
            user_email : email,
            content: content
        };
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

        if(email_regex.test(email) && email !== "" && content !== ""){
            emailjs
            .send(
                'portfolio-service',
                'portfolio-service',
                templateParams,
                EMAILJS_KEY,
            )
            .then((response: TResType) => {
                if(response.status === 200){
                    toast.success('이메일을 전송했습니다.');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            })
            .catch((error) => {
                toast.error("이메일 전송에 실패했습니다.");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            });
        }else{
            if(email === ""){
                toast.error("이메일을 확인해주세요.");
            }else if(content === ""){
                toast.error("내용을 확인해주세요.");
            }else if(!email_regex.test(email)){
                toast.error("이메일 형식을 확인해주세요.");
            }
        }

        
    };

    return (
        <button
            onClick={handleSubmit}
            className="flex items-center mr-0 ml-auto bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
        >
            Send
            <svg
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                ></path>
            </svg>
        </button>
    )
}
