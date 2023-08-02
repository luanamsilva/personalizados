import itemsData from '../data/itemsData.json';
import { Item } from '../components/Item';
import Link from 'next/link';

const Special = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {itemsData
          .filter((item) => item.title.includes('Caixa'))
          .map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} passHref>
              <Item
                key={item.id}
                title={item.title}
                theme={item.theme}
                image={item.image}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Special;
