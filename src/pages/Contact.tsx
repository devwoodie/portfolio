import React, { useState } from 'react';
import { Btn } from '../components/Contact/Btn';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {

    const [email, setEmail] = useState<string>("");
    const [content, setContent] = useState<string>("");

    return (
        <div className='mt-[80px] mb-[150px]'>
            <h2 className='text-[25px] mb-5 text-center font-black'>C O N T A C T</h2>
            <div className="container">
                <div className="hero">
                    <form action="" className="form">
                        <input 
                            type="email" 
                            name="user_email" 
                            id="email" 
                            className="input dark:bg-[#cccccc] dark:placeholder:text-[#575757] dark:shadow-none" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required={true}
                        />
                        <textarea 
                            name="content" 
                            id="content" 
                            className="input textarea resize-none dark:bg-[#cccccc] dark:placeholder:text-[#575757] dark:shadow-none" 
                            placeholder="Message" 
                            value={content}
                            onChange={(e) => {setContent(e.target.value)}}
                            required={true}
                        ></textarea>
                        <div className='w-full mt-10 text-right'>
                            <Btn
                                email={email}
                                content={content}
                            />
                        </div>
                    </form>
                </div>

                <Toaster />
            </div>


            <style>
                {`
                    .container {
                        height: 100%;
                        width: 100%;
                      }
                      
                      .hero {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                      
                      .form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: 1rem;
                        width: 45%;
                      }
                      
                      .input {
                        padding: 1rem 1.2rem;
                        margin: 1rem;
                        border-radius: 16px;
                        display: block;
                        width: 100%;
                        border: none;
                        box-shadow: inset 6px 6px 8px rgba(97, 97, 97, 0.075),
                          6px 6px 6px rgba(255, 255, 255, 0.781);
                        outline: none;
                        background-color: inherit;
                        font-size: inherit;
                        color: #575757;
                      }
                      .textarea{
                        min-height: 200px;
                      }
                `}
            </style>
        </div>
    )
}
