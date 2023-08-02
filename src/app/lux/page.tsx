import itemsData from '../data/itemsData.json';
import { Item } from '../components/Item';
import Link from 'next/link';

const Lux = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {itemsData
          .filter(
            (item) =>
              item.title.includes('Nutella') || item.title.includes('Barra'),
          )
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

export default Lux;
