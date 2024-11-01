"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface Tab {
    name: string;
    url: string;
}

const Tabs: React.FC = () => {
    const seacrhParams=useSearchParams()
    const genre=seacrhParams.get("genre")
    const tabs: Tab[] = [
        {
            name: "En Populer",
            url: "popular"
        },
        {
            name: "En Son",
            url: "latest"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        },
    ];

    return (
        <div className='p-5 m-5 bg-blue-100 dark:bg-gray-800 flex items-center justify-center gap-8'>
            {
                tabs.map((tab, i) => (
                    <Link className={`cursor-pointer dark:text-blue-200  hover:opacity-80 opacity-100 transition-opacity ${ tab.url === genre ?  " underline underline-offset-8 text-blue-800": ""}`} key={i} href={`/?genre=${tab.url}`}>
                        {tab.name}
                    </Link>
                ))
            }
        </div>
    );
}

export default Tabs;
