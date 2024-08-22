'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const Language = () => {
    const pathname = usePathname();
    const isEnglish = pathname.includes("/en");

    return (
        <div className="relative">
            <button className="flex items-center gap-2">
                <Image width={25} height={25} src="/bd.png" alt="bangla" />
                {isEnglish ? "Bangla" : "বাংলা"}
            </button>

            {/* dropdown  */}
            <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <Image width={25} height={25} src="/bd.png" alt="bangla" />
                    {isEnglish ? "Bangla" : "বাংলা"}
                </li>
                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <Image width={25} height={25} src="/usa.png" alt="english" />
                    {isEnglish ? "English" : "ইংরেজি"}
                </li>
            </div>
        </div>
    );
};

export default Language;
