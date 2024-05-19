import React from 'react'

type TProps = {
    tabId: string
}

export const Cont2Tab = ({ tabId }: TProps) => {

    const intList = [
        {
            date: "2022",
            title: "방통대 컴퓨터과학과 입학 (재학 중)",
            job: ""
        },
        {
            date: "2021",
            title: "그린컴퓨터학원 웹퍼블리셔, 프론트엔드 과정 수료",
            job: ""
        },
        {
            date: "2018",
            title: "수원과학대 호텔조리과 졸업",
            job: ""
        },
    ]
    const expList = [
        {
            date: "2023.05 ~ 2023.12",
            title: "IT 회사",
            job: "프론트엔드 개발"
        },
        {
            date: "2022.02 ~ 2023.05",
            title: "eMoney",
            job: "웹/모바일 퍼블리싱"
        },
    ]
    const actList = [
        {
            date: "2023.11 ~ 2023.12",
            title: "SWYP 스위프",
            job: "개발 동아리"
        },
        {
            date: "2023.04 ~ 2023.08",
            title: "B-Side 비사이드",
            job: "개발 동아리"
        },
    ]

    const skillList = ["React", "TypeScript", "JavaScript", "HTML5", "Tailwind", "css3", "Sass", "ajax", "axios", "Redux", "jquery"]
    const toolList = ["Git", "Github", "Postman", "Zeplin", "figma", "PhotoShop", "XD", "VisualStudio", "IntelliJ"]

    return (
        <div className='w-[800px] p-6 mt-5 m-auto min-h-[500px]'>
            {tabId === "radio-1" ?
                <p className='text-center'>
                    협업을 통해 최선의 결과물을 도출해 내는 것을 좋아하며<br />맡은 일에 후회 없도록 마무리하는 것에 뿌듯함을 느낍니다.<br />
                    <br />
                    현재 개발 트렌드를 배우기 위해 개발 콘퍼런스에 끊임없이 참여하여<br />
                    개발자로서 새로운 것을 배우는 욕심과 그에 맞게 성장하고자 하는 목표를 갖고 있습니다.
                    <div className='mt-10 w-[400px] m-auto text-left'>
                        <h3>[ Education ]</h3>
                        {intList?.map((item, key) => (
                            <div key={key} className='pt-2'>
                                <span className='date'>{item.date}</span>
                                <span className='title'>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </p> : tabId === "radio-2" ?
                    <div>
                        <div className='w-[400px] m-auto'>
                            <h3>[ Career ]</h3>
                            {expList?.map((item, key) => (
                                <div key={key} className='pt-2'>
                                    <span className='date'>{item.date}</span>
                                    <span className='title'>{item.title}</span>
                                    <span className='job'>{item.job}</span>
                                </div>
                            ))}
                        </div>
                        <div className='w-[400px] m-auto mt-10'>
                            <h3>[ Activities ]</h3>
                            {actList?.map((item, key) => (
                                <div key={key} className='pt-2'>
                                    <span className='date'>{item.date}</span>
                                    <span className='title'>{item.title}</span>
                                    <span className='job'>{item.job}</span>
                                </div>
                            ))}
                        </div>
                    </div> : tabId === "radio-3" ?
                    <div>
                        <div className='m-auto w-[400px]'>
                            <h3>[ Skill ]</h3>
                            <div className='flex flex-wrap  w-[400px]'>
                                {skillList?.map((item, key) => (
                                    <span key={key} className='date mt-2'>{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className='m-auto w-[400px] mt-10'>
                            <h3>[ Tool ]</h3>
                            <div className='flex flex-wrap  w-[400px]'>
                                {toolList?.map((item, key) => (
                                    <span key={key} className='date mt-2'>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div> : null
            }

            <style>
                {`
                h3{
                    font-size: 20px;
                    font-weight: bold;
                    border-bottom: 1px solid #c4c4c4;
                }
                .date{
                    font-size: 14px;
                    background: #c4c4c4;
                    color: #c52525;
                    padding: 3px 8px;
                    border-radius: 8px;
                    margin-right: 5px;
                }
                .job{
                    font-size: 14px;
                    margin-left: 10px;
                    color: #737373;
                }
            `}
            </style>
        </div>
    )
}
