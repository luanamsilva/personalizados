// Importar os módulos necessários
import { NextPage } from 'next';
import itemsData from '../../data/itemsData.json';
import { ItemType } from '@/app/types/ItemType';
import Image from 'next/image';

interface ProductProps {
  params: {
    productId: string;
  };
}


const Product: NextPage<ProductProps> = ({ params: { productId } }) => {

  const product: ItemType | undefined = itemsData.find((item) => item.id === parseInt(productId));

  if (!product) {
    return (
      <>
        <h1>Produto não encontrado</h1>
      </>
    );
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>Tema: {product.theme}</p>
      <Image  
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />
    
    </>
  );
};

export default Product;
