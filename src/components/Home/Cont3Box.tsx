import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Cont3Box = () => {

    const navigate = useNavigate();

    return (
        <div className='mr-[100px]'>
            <div className="parent">
                <div className="card">
                    <div className="logo">
                        <span className="circle circle1"></span>
                        <span className="circle circle2"></span>
                        <span className="circle circle3"></span>
                        <span className="circle circle4"></span>
                        <span className="circle circle5">FE</span>

                    </div>
                    <div className="glass"></div>
                    <div className="content">
                        <span className="title">PROJECT</span>
                        <span className="text">지금까지 진행했던 프로젝트들을<br/> 정리했습니다. (회사 or 동아리)</span>
                    </div>
                    <div className="bottom">
                        <div className="social-buttons-container">
                            <button className="social-button .social-button1 dark:text-black">
                                유
                            </button>
                            <button className="social-button .social-button2 dark:text-black">
                                동
                            </button>
                            <button className="social-button .social-button3 dark:text-black">
                                우
                            </button>
                        </div>
                        <div className="view-more" onClick={() => navigate("/project")}>
                            <button className="view-more-button">View more</button>
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    .parent {
                        width: 290px;
                        height: 300px;
                        perspective: 1000px;
                      }
                      
                      .card {
                        height: 100%;
                        border-radius: 50px;
                        background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
                        transition: all 0.5s ease-in-out;
                        transform-style: preserve-3d;
                        box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
                      }
                      
                      .glass {
                        transform-style: preserve-3d;
                        position: absolute;
                        inset: 8px;
                        border-radius: 55px;
                        border-top-right-radius: 100%;
                        background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
                        /* -webkit-backdrop-filter: blur(5px);
                        backdrop-filter: blur(5px); */
                        transform: translate3d(0px, 0px, 25px);
                        border-left: 1px solid white;
                        border-bottom: 1px solid white;
                        transition: all 0.5s ease-in-out;
                      }
                      
                      .content {
                        padding: 100px 60px 0px 30px;
                        transform: translate3d(0, 0, 26px);
                      }
                      
                      .content .title {
                        display: block;
                        color: #00894d;
                        font-weight: 900;
                        font-size: 20px;
                      }
                      
                      .content .text {
                        display: block;
                        color: rgba(0, 137, 78, 0.7647058824);
                        font-size: 15px;
                        margin-top: 20px;
                      }
                      
                      .bottom {
                        padding: 10px 12px;
                        transform-style: preserve-3d;
                        position: absolute;
                        bottom: 20px;
                        left: 20px;
                        right: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        transform: translate3d(0, 0, 26px);
                      }
                      
                      .bottom .view-more {
                        display: flex;
                        align-items: center;
                        width: 40%;
                        justify-content: flex-end;
                        transition: all 0.2s ease-in-out;
                      }
                      
                      .bottom .view-more:hover {
                        transform: translate3d(0, 0, 10px);
                      }
                      
                      .bottom .view-more .view-more-button {
                        background: none;
                        border: none;
                        color: #00c37b;
                        font-weight: bolder;
                        font-size: 12px;
                      }
                      
                      .bottom .view-more .svg {
                        fill: none;
                        stroke: #00c37b;
                        stroke-width: 3px;
                        max-height: 15px;
                      }
                      
                      .bottom .social-buttons-container {
                        display: flex;
                        gap: 10px;
                        transform-style: preserve-3d;
                      }
                      
                      .bottom .social-buttons-container .social-button {
                        width: 30px;
                        height: 30px;
                        aspect-ratio: 1;
                        padding: 5px;
                        background: rgb(255, 255, 255);
                        border-radius: 50%;
                        border: none;
                        display: grid;
                        place-content: center;
                        box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
                      }
                      
                      .bottom .social-buttons-container .social-button:first-child {
                        transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
                      }
                      
                      .bottom .social-buttons-container .social-button:nth-child(2) {
                        transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
                      }
                      
                      .bottom .social-buttons-container .social-button:nth-child(3) {
                        transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
                      }
                      
                      .bottom .social-buttons-container .social-button .svg {
                        width: 15px;
                        fill: #00894d;
                      }
                      
                      .bottom .social-buttons-container .social-button:hover {
                        background: black;
                        color: white;
                      }
                      
                      .bottom .social-buttons-container .social-button:hover .svg {
                        fill: white;
                      }
                      
                      .bottom .social-buttons-container .social-button:active {
                        background: rgb(255, 234, 0);
                      }
                      
                      .bottom .social-buttons-container .social-button:active .svg {
                        fill: black;
                      }
                      
                      .logo {
                        position: absolute;
                        right: 0;
                        top: 0;
                        transform-style: preserve-3d;
                      }
                      
                      .logo .circle {
                        display: block;
                        position: absolute;
                        aspect-ratio: 1;
                        border-radius: 50%;
                        top: 0;
                        right: 0;
                        box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
                        -webkit-backdrop-filter: blur(5px);
                        backdrop-filter: blur(5px);
                        background: rgba(0, 249, 203, 0.2);
                        transition: all 0.5s ease-in-out;
                      }
                      
                      .logo .circle1 {
                        width: 170px;
                        transform: translate3d(0, 0, 20px);
                        top: 8px;
                        right: 8px;
                      }
                      
                      .logo .circle2 {
                        width: 140px;
                        transform: translate3d(0, 0, 40px);
                        top: 10px;
                        right: 10px;
                        -webkit-backdrop-filter: blur(1px);
                        backdrop-filter: blur(1px);
                        transition-delay: 0.4s;
                      }
                      
                      .logo .circle3 {
                        width: 110px;
                        transform: translate3d(0, 0, 60px);
                        top: 17px;
                        right: 17px;
                        transition-delay: 0.8s;
                      }
                      
                      .logo .circle4 {
                        width: 80px;
                        transform: translate3d(0, 0, 80px);
                        top: 23px;
                        right: 23px;
                        transition-delay: 1.2s;
                      }
                      
                      .logo .circle5 {
                        width: 50px;
                        transform: translate3d(0, 0, 100px);
                        top: 30px;
                        right: 30px;
                        display: grid;
                        place-content: center;
                        transition-delay: 1.6s;
                        color: white;
                      }
                      

                      
                      .parent:hover .card {
                        transform: rotate3d(1, 1, 0, 30deg);
                        box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
                      }
                      
                      .parent:hover .card .bottom .social-buttons-container .social-button {
                        transform: translate3d(0, 0, 50px);
                        box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
                      }
                      
                      .parent:hover .card .logo .circle2 {
                        transform: translate3d(0, 0, 60px);
                      }
                      
                      .parent:hover .card .logo .circle3 {
                        transform: translate3d(0, 0, 80px);
                      }
                      
                      .parent:hover .card .logo .circle4 {
                        transform: translate3d(0, 0, 100px);
                      }
                      
                      .parent:hover .card .logo .circle5 {
                        transform: translate3d(0, 0, 120px);
                      }
                `}
            </style>
        </div>
    )
}
