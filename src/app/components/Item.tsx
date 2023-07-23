import React from 'react';
import Image from 'next/image';

type Props = {
  title:string,
  theme: string,
  image: string
};

export const Item = ({ title, theme, image}: Props) => {
  return <div className="flex flex-col m-4 p-4 ">
    
    <h1>{title} </h1>
    <p>{theme}</p>
    <Image className="w-33 h-32 object-cover" 
        src={image}
        alt={title}
        width={150}
        height={150}
      />
  </div>;
};
