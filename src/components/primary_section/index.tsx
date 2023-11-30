import ImgURL from "../../assets/imgs/photo-primary.png";
import { LinkIcon } from '@heroicons/react/20/solid';

export function PrimarySection() {
    return (
        <main className='mx-10 md:mx-28 first-letter:min-w-screen min-h-screen flex flex-col-reverse md:flex-row items-center'>
            <div
                className='flex flex-1 flex-col'
            >
                <h1
                    className=' font-bold text-xl md:text-4xl   '
                >
                    Olá 🤙🏼, sou  <span className='animate-pulse bg-gradient-to-l from-[#096fd4] to-[#096fd4] text-transparent bg-clip-text'>Rafael Oliveira</span> e pretendo me tornar um especialista em desenvolvimento de softwares.</h1>
                <p className='text-base md:text-lg text-justify mt-7'>
                    Estou em busca de me tornar um profissional de tecnologia com conhecimento e que possa contribuir com
                    as pessoas e organizações em seus projetos.

                    Estou focado no desenvolvimento com Java para o back end e ReactJs para o front end, mas disposto a
                    aprender novas tecnologias.


                </p>
                <div className='flex mt-20 items-center gap-5'>
                    <button
                    onClick={() => window.location.href = "https://www.linkedin.com/in/rafaoliveirasouza/"}
                        className='text-white bg-[#05498d] flex gap-2 rounded px-4 py-2 w-36 font-semibold items-center justify-center hover:bg-[#096fd4] transition-colors'
                    >
                        Linkedin <LinkIcon className='w-5 font-bold' />
                    </button>
                    <a 
                    className='text-[#096fd4] underline hover:text-[#05498d] transition-colors text-lg'
                    href="https://public.dm.files.1drv.com/y4mInjdg-Hxnqx4VaYXRmGjK8rMUNjknbpUWZ8ccpCJWk5G_-SZMCS4teWvRni9ZIv_f7lWMH6eQH-vIEqbyqkygEqwHWqqRVx8Mh0T6s96KN48qUdM7ry8ljbQqX_egIq0Z0YUCPfT4nFa8jaQAQsHQD25QmLtASEXTBnZhj0A_bLXHcDmjBimMXVy_YcFJ1qSwfso8ogPC20ZjHJOCCxEXPDc26M6fAFj6fzw1NnzCnM?AVOverride=1">
                        Baixe meu curriculo
                    </a>
                </div>

            </div>
            <div className='flex-1 flex items-center justify-end'>
                <img src={ImgURL} className=' w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[550px] lg:h-[550px]' alt="" />
            </div>
        </main>
    )
}