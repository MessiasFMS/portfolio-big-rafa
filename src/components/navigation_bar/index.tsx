import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";

export function NavigationBar() {
    return (
        <div className="w-screen fixed border-b border-[#e7e7e7] dark:border-[#3b3b3b] flex h-16 px-10 md:px-28 items-center justify-between">
            <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#05498d" className="w-10 h-10 animate-pulse" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span className='animate-pulse bg-gradient-to-l from-[#096fd4] to-[#096fd4] text-transparent bg-clip-text text-xl md:text-2     xl font-bold    '>Rafael Oliveira</span>
            </div>
            <ul className="gap-10 text-lg hidden md:flex font-semibold">
                <li className="hover:text-[#05498d] transition-colors cursor-pointer ">Início</li>
                <li className="hover:text-[#05498d] transition-colors cursor-pointer">Experiência</li>
                <li className="hover:text-[#05498d] transition-colors cursor-pointer">Objetivo</li>
                <li className="hover:text-[#05498d] transition-colors cursor-pointer">Habilidades</li>
            </ul>
            <div className="md:hidden block">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
            </div>
        </div>
    )
};