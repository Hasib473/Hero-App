import React from 'react';
import logoimg from '../../assets/logo.png';

const Loading = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-gray-50">
      
      <h1 className="text-5xl font-bold flex items-center gap-2">
        L
        <img 
          className="w-14 animate-spin" 
          src={logoimg} 
          alt="logo" 
        /> 
        ADING
      </h1>
    </div>
  );
};

export default Loading;
