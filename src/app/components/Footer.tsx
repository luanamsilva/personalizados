import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../data/nav';

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap pl-4 bg-main text-white text-center">
        <div className="w-full md:w-1/4 p-4">
          <h1 className="pb-2 font-bold">Sobre a SM</h1>
          <p>
            Somos uma empresa especializada em decoração e personalizados,
            trazendo magia e inovação para sua data tão especial.
          </p>
        </div>

        <div className="w-full md:w-1/4 p-4">
          <h1 className="pb-2 font-bold">Categorias</h1>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/4 p-4">
          <h1 className="pb-2 font-bold">Atendimento</h1>
          <div className="flex items-center justify-center">
            <Link
              href="https://api.whatsapp.com/send?phone=5537998208850"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/images/whatsapp-icone-1.png"
                alt="whatsapp"
                width={20}
                height={20}
              />
              <p className="ml-2">(37) 99820-8850</p>
            </Link>
          </div>
          <p>8:00 às 8:00 seg a sex</p>
        </div>

        <div className="w-full p-4 md:w-auto">
          <h1 className="pb-3 font-bold">Siga nossa página</h1>
          <Link
            href="https://www.instagram.com/smdecoracaoepersonalizados/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center">
              <Image
                src="/images/instagram.png"
                alt="whatsapp"
                width={25}
                height={25}
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="text-brown p-2 text-center">
        © Todos os direitos reservados
      </div>
    </footer>
  );
};
