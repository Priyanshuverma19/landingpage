"use client"
import { useState } from 'react';

import Image from 'next/image';
import { HiMenuAlt4 } from 'react-icons/hi'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center bg-white p-4">
           
            <div className="flex items-center md:hidden">
                <button onClick={toggleMenu}>
                    <HiMenuAlt4 className="w-8 h-8 text-black" />
                </button>
            </div>

     
            <div className="flex items-center justify-center md:justify-start flex-grow">
                <span className="ml-2 text-lg font-semibold">MyFast</span>
                <span className="ml-1 text-lg text-primary font-semibold">x</span>
                <Image src="/logo.png" alt="Logo" width={25} height={25} />
                <span className="ml-2 text-lg font-semibold">Partner</span>
            </div>

      
            <div className="hidden md:flex">
                <button className="px-4 py-2 bg-black text-white rounded-lg">Sign up</button>
                <button className="ml-2 px-4 py-2 bg-black text-white rounded-lg">Login</button>
            </div>

         
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
                    <div className="flex flex-col items-center p-4 space-y-4">
                        <button className="w-full px-4 py-2 bg-black text-white rounded-lg">Sign up</button>
                        <button className="w-full px-4 py-2 bg-black text-white rounded-lg">Login</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
