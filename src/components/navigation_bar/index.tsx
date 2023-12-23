
import { useState } from 'react';
import { Link } from 'react-scroll';


interface LinkItem {
    id: string;
    to: string;
    label: string;
}

export function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const links: LinkItem[] = [
        { id: 'link1', to: 'inicio', label: 'Início' },
        { id: 'link2', to: 'experiencia', label: 'Experiência' },
        { id: 'link3', to: 'habilidades', label: 'Habilidades' },
    ];

    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            const title = document.getElementById('inicio');
            const titleRect = title?.getBoundingClientRect();
            navbar.style.marginTop = titleRect ? `${titleRect.height}px` : '0';
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className="w-screen z-50 bg-[#fdfdfd] fixed border-b border-[#e7e7e7] dark:border-[#3b3b3b] dark:bg-[#202020] flex h-16 px-10 md:px-28 items-center justify-between">
            <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#05498d" className="w-10 h-10 animate-pulse" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span className='animate-pulse bg-gradient-to-l from-[#096fd4] to-[#096fd4] text-transparent bg-clip-text text-xl md:text-2     xl font-bold    '>Rafael Oliveira</span>
            </div>
            <ul className="gap-10 text-lg hidden md:flex font-semibold">
                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            className="hover:text-[#05498d] transition-colors cursor-pointer"
                            activeClass="active"
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleScroll}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="md:hidden block">
                <button onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* Menu para Dispositivos Móveis (exibido ao clicar no botão) */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'fixed z-50 bg-[#fdfdfd] fixed border-b border-[#e7e7e7] dark:border-[#3b3b3b] dark:bg-[#202020] w-screen left-0 px-10 top-16' : 'hidden'}`}>
                <ul className="text-lg font-semibold">
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link
                                className="hover:text-[#05498d] transition-colors cursor-pointer block py-2"
                                activeClass="active"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={() => {
                                    handleScroll();
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
