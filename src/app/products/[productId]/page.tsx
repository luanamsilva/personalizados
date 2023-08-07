import { NextPage } from 'next';
import itemsData from '../../data/itemsData.json';
import { ItemType } from '@/app/types/ItemType';
import Image from 'next/image';
import Link from 'next/link';
interface ProductProps {
  params: {
    productId: string;
  };
}

const Product: NextPage<ProductProps> = ({ params: { productId } }) => {
  const product: ItemType | undefined = itemsData.find(
    (item) => item.id === parseInt(productId),
  );

  if (!product) {
    return (
      <>
        <h1>Produto não encontrado</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-wrap text-brown items-center justify-center">
        <Image
          className="m-4 rounded-md"
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
        <div className="flex flex-col">
          <h1 className="text-xl text-main py-4 text-center font-bold">
            {product.title}
          </h1>
          <p className="text-center">
            <strong className="p-2  m-2">Tema:</strong>
            {product.theme}
          </p>
          <p className='w-64 p-2 pt-4 justify-center text-justify items-center'>{product.description}</p>
     <button className='flex justify-center items-center text-brown bg-rose-200 p-1 px-3 mt-4 rounded-md text-center'>
      <Link href="https://api.whatsapp.com/send?phone=5537998208850"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center">
                Faça um orçamento</Link></button>
          <div className="flex justify-end mt-10">
            <button className='text-main  bottom-4 right-4 bg-rose hover:brightness-95 rounded-md  font-bold py-2 px-4 rounded"'>
              <Link href={'/'}>Voltar</Link>{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
