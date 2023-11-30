import { useState } from "react";
import useDarkSide from "../../hooks/useDarkSide";


export function ThemeToggle() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = () => {
        setTheme(colorTheme);
        setDarkSide(colorTheme === "light" ? true : false);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={`px-2 py-3 rounded-md bg-[#096fd4] transition-colors duration-200`}
        >
            {darkSide ?
                (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>

                )
                :
                (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>



                )}
        </button>
    );

};