import React from 'react';
import { Btn } from '../components/Contact/Btn';

export const Contact = () => {
    return (
        <div className='mt-[80px] mb-[150px]'>
            <h2 className='text-[25px] mb-5 text-center font-black'>C O N T A C T</h2>
            <div className="container">
                <div className="hero">
                    <form action="" className="form">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="input dark:bg-[#e9e9e9] dark:shadow-none" 
                            placeholder="Email" 
                        />
                        <textarea 
                            name="content" 
                            id="content" 
                            className="input textarea resize-none dark:bg-[#e9e9e9] dark:shadow-none" 
                            placeholder="Message" 
                        ></textarea>
                        <div className='w-full mt-10 text-right'>
                            <Btn />
                        </div>
                    </form>
                </div>
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
