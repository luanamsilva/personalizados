import  Image  from 'next/image';


export const Header = () => {
  return (
    <header>
      <div className='flex'>
        <Image className='m-3 ml-28' src='/images/logo.jpeg' width={90} height={90} alt='logo'/>
    
    </div>
    
      <nav className="bg-main text-light">
      
        <ul className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center p-3 gap-10 ">
          <li className='hover:text-gray-300'><a href="/">Página Inicial</a></li>
          <li className='hover:text-gray-300 '><a href="/decoration">Decoração</a></li>         
          <li className='hover:text-gray-300'><a href="/stationary">Papelaria</a></li>
          <li className='hover:text-gray-300'><a href="/lux">Personalizados de Luxo</a></li>
          <li className='hover:text-gray-300'><a href="/special">Caixas Especiais</a></li>
        </ul>
      </nav>
    </header>
  )
}