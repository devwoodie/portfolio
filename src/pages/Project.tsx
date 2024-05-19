import React from 'react';
import { ProjectCont } from '../components/Project/ProjectCont';
import ProjectList from '../constants/project.json';

export const Project = () => {

    return (
        <div className='my-[80px]'>
            <h2 className='text-[45px] text-center mb-[100px] font-black'>P R O J E C T S</h2>
            <div className='flex flex-wrap items-start justify-between'>
                {ProjectList?.map(item => (
                    <ProjectCont
                        key={item.id}
                        id={item?.id}
                        title={item.title}
                        description={item.description}
                        type={item.type}
                        company={item.company}
                        git={item.git}
                        site={item.site}
                        img={item.img}
                    />
                ))}     
            </div>
        </div>
    )
}
