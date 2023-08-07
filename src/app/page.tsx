'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import itemsData from './data/itemsData.json';
import { Item } from './components/Item';
import NextPage from './components/NextPage';
import unidecode from 'unidecode';
import Sliders from './components/Sliders';
import sliders from './data/sliders.json'



export default function Home() {
  const [search, setSearch] = useState('');
  const removeAccents = (word:string) => unidecode(word);

  
const products = itemsData.filter(item => 

  item.title.toLowerCase().includes(search.toLowerCase()) ||
  item.theme.toLowerCase().includes(search.toLowerCase()) ||
  removeAccents(item.title.toLowerCase()).includes(search.toLowerCase()) ||
  removeAccents(item.theme.toLowerCase()).includes(search.toLowerCase()))


  return (
    <div>
     <div className='flex'>
      <Sliders sliders={sliders}/>
      </div>
      <div className="flex justify-center items-center mt-4 sm:mt-0 w-full sm:w-auto mb-4">
        <input
          className="rounded-md border border-rose p-1 pl-4 mt-6 mr-6 text-center text-brown placeholder:text-brown placeholder:opacity-60 outline-main bg-ligth mx:auto"
          type="text"
          placeholder="Busque aqui seu produto "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
     
{search === '' ? <NextPage/> :
<div className="flex flex-wrap">
        {products.map((item) => (
          <Link key={item.id} href={`/products/${item.id}`} passHref>
            <Item
              key={item.id}
              title={item.title}
              theme={item.theme}
              image={item.image}
            />
          </Link>
        ))}
      </div> }
      
    </div>
  );
}