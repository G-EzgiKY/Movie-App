'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { CiDark,CiLight } from "react-icons/ci";

const ThemeComp: React.FC = () => {
  const {systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mounted durumunu ayarla
  useEffect(() => setMounted(true), []);

  const themeMode=theme==="system" ? systemTheme : theme

  console.log(themeMode,"mode")

  // Henüz istemciye yüklenmeden render etme
  if (!mounted) return null;

  return (

    <div>
      {
        mounted && (
          themeMode==="dark" ?
          <CiLight onClick={()=> setTheme("light")} className='cursor-pointer' size={25}/> :
          <CiDark onClick={()=> setTheme("dark")} className='cursor-pointer' size={25}/>
        )
      }




      
    
    </div>



    
  );
};

export default ThemeComp;
