'use client';
import React from 'react';
import Image from 'next/image';

export const Whatsapp = () => {
  const phoneNumber = '5537998208850';

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };
  return (
    <div
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 hover:brightness-125"
      onClick={handleWhatsAppClick}
    >
      <Image
        src="/images/whatsapp-icone-1.png"
        alt="whatsapp"
        width={30}
        height={30}
      />
    </div>
  );
};
