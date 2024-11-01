"use client"
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import MenuItems from './MenuItems';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';






const Header = () => {

    const [keyword,setKeyWord]=useState("")
    const router=useRouter();

    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        }
    ]

    const searchFunc=(e: { key: string; })=>{
        if(e.key==="Enter"&& keyword.length >=3){
            router.push(`/search/${keyword}`)
        }

    }


    return (
        <div className='flex items-center gap-7 p-5 h-20 dark:text-blue-50 text-blue-800 border-blue-800 border'>
            <div className=' bg-blue-800 rounded-lg p-3  text-2xl font-bold text-blue-50' >
                GEK Movie
                
            </div>
            <div className=' text-center items-center gap-2 rounded-lg p-1  flex  border-blue-800 border flex-1 ' >

                <IoIosSearch size={25} />
                <input onKeyDown={searchFunc} onChange={e=>setKeyWord(e.target.value)} placeholder='Arama Yapınız' type="text" className='  p-1 rounded-xl flex-1 bg-transparent border-2 border-transparent' />
            </div>
            
                <ThemeComp />
            

            {
                menu.map((mn, i) => (
                    <MenuItems mn={mn} key={i} />

                ))
            }
        </div>
    )
}

export default Header