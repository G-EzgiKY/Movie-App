import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-1">
      <AiOutlineLoading3Quarters size={35} className="animate-spin" />
      <div>Yükleniyor...</div>
    </div>
  );
}

export default Loading;
