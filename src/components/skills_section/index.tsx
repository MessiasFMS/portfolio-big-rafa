import React, { ReactNode } from 'react';
import { SkillCard } from './skill_card';
import { Coffee } from '@phosphor-icons/react';
import { Atom, Database, FileCss, FileHtml, FileJs } from '@phosphor-icons/react/dist/ssr';

export function SkillsSection(){
    return (
        <div className='mx-10 md:mx-28 min-w-screen min-h-screen'>
            <h1
            id="habilidades"
                        className=' font-bold text-xl md:text-4xl  mt-10 mb-20 '
                    >
                        Minhas <span className='animate-pulse bg-gradient-to-l from-[#096fd4] to-[#096fd4] text-transparent bg-clip-text'>Habilidades</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <SkillCard title='React' icon={<Atom size={32} />}/>
                <SkillCard title='JavaScript' icon={<FileJs size={32} />}/>
                <SkillCard title='Java' icon={<Coffee size={32} />}/>
                <SkillCard title='Python' icon={<svg fill="none" height="32" viewBox="0 0 15 15" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9" stroke="currentColor"/></svg>}/>
                <SkillCard title='MySQL' icon={<Database size={32} />}/>
                <SkillCard title='HTML' icon={<FileHtml size={32} />}/>
                <SkillCard title='CSS' icon={<FileCss size={32}/>}/>
            </div>
        </div>
    )
}