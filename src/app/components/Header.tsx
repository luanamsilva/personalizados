import  Image  from 'next/image';
import Link from 'next/link';
import { navLinks } from '../data/nav';

export const Header = () => {
  return (
    <header>
      <div className='flex'>
        <Image className='m-3 ml-28' src='/images/logo.jpeg' width={90} height={90} alt='logo'/>
    
    </div>
    
      <nav className="bg-main text-light">
      
        <ul className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center p-3 gap-10 ">
        {navLinks.map((link, index)=>(
<li className='hover:text-gray-200' key={index}>
  <Link href={link.path}>{link.label}</Link>
</li>
        ))}

        </ul>
      </nav>
    </header>
  )
}