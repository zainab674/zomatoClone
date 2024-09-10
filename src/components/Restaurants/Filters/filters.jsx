
import { useState, useEffect } from 'react';



const Filters = ({ filters }) => {


    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`${scrolled ? "fixed top-0 py-7 z-50 bg-white w-full" : ""}  md:px-16`}>
            <ul className="space-x-2 flex overflow-x-auto ">
                {filters.map((filter, index) => (
                    <li key={index}>
                        <button
                            className=" md:py-2 px-1 md:px-4 text-left whitespace-nowrap py-1  border border-gray-300  text-gray-400 rounded-lg focus:outline-none "
                        >
                            {filter}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Filters