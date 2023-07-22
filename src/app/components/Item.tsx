import React from 'react';
import Image from 'next/image';

type Props = {
  title:string,
  theme: string,
  image: string
};

export const Item = ({ title, theme, image}: Props) => {
  return <div>
    <h1>{title} </h1>
    <p>{theme}</p>
    <Image
        src={image}
        alt={title}
        width={300}
        height={200}
      />
  </div>;
};
