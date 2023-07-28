"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  id?: number
  title:string,
  theme: string,
  image: string
  
};

export const Item = ({ title, theme, image}: Props) => {

  const [imageZoom , setImageZoom] = useState(false)
  const handleZoom = ()=>{
    setImageZoom(true)
  }
const handleRemoveZoom = ()=>{
  setImageZoom(false)
}



  return <div  onMouseEnter={handleZoom} onMouseLeave={handleRemoveZoom} className="flex flex-col m-4 p-4">
    
    <h1 className='text-brown text-center font-bold'>{title} </h1>
    <p className='text-brown text-center text-sm py-2'>Tema: {theme}</p>
   
    <Image className={`w-40 h-40 rounded-md object-cover transition-transform ${
          imageZoom ? 'transform scale-175 cursor-pointer' : ''
        }`} 
        src={image}
        alt={title}
        width={150}
        height={150}
      />
  
  </div>;
};
