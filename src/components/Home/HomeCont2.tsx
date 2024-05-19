import React, { useState } from 'react'
import { Cont2Tab } from './Cont2Tab';

export const HomeCont2 = () => {

    const [radioNum, setRadioNum] = useState<string>("radio-1");

    const handleChange = (e: any) => {
        setRadioNum(e.target.id);
    }

    return (
        <div className='mt-[200px]'>
            <div className="container ">
                <div className="tabs m-auto dark:bg-[#42444e]">
                    <input onChange={handleChange} type="radio" id="radio-1" name="tabs" defaultChecked={true} />
                    <label className="tab dark:text-white" htmlFor="radio-1">Introduce</label>
                    <input onChange={handleChange} type="radio" id="radio-2" name="tabs" />
                    <label className="tab dark:text-white" htmlFor="radio-2">Experience</label>
                    <input onChange={handleChange} type="radio" id="radio-3" name="tabs" />
                    <label className="tab dark:text-white" htmlFor="radio-3">Skill</label>
                    <span className="glider"></span>
                </div>
            </div>
            <Cont2Tab
                tabId={radioNum}
            />

            <style>
                {`
                    .tabs {
                        display: flex;
                        position: relative;
                        background-color: #fff;
                        box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
                        padding: 0.75rem;
                        border-radius: 99px;
                        width: 480px;
                      }
                      
                      .tabs * {
                        z-index: 2;
                      }
                      
                      .container input[type="radio"] {
                        display: none;
                      }
                      
                      .tab {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 30px;
                        width: 150px;
                        font-size: .8rem;
                        color: black;
                        font-weight: 500;
                        border-radius: 99px;
                        cursor: pointer;
                        transition: color 0.15s ease-in;
                      }
                    
                      
                      .container input[type="radio"]:checked + label {
                        color: #185ee0;
                      }
                      
                      .container input[type="radio"]:checked + label > .notification {
                        background-color: #185ee0;
                        color: #fff;
                        margin: 0px;
                      }
                      
                      .container input[id="radio-1"]:checked ~ .glider {
                        transform: translateX(0);
                      }
                      
                      .container input[id="radio-2"]:checked ~ .glider {
                        transform: translateX(100%);
                      }
                      
                      .container input[id="radio-3"]:checked ~ .glider {
                        transform: translateX(200%);
                      }
                      
                      .glider {
                        position: absolute;
                        display: flex;
                        height: 30px;
                        width: 150px;
                        background-color: #e6eef9;
                        z-index: 1;
                        border-radius: 99px;
                        transition: 0.25s ease-out;
                      }
                      
                      @media (max-width: 700px) {
                       
                        .tabs {
                          transform: scale(0.6);
                        }
                      }
                      
                `}
            </style>
        </div>
    )
}
