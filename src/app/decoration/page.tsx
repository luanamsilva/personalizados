import itemsData from '../data/itemsData.json';
import { Item } from '../components/Item';
import Link from 'next/link';
const Decoration = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {itemsData
          .filter((item) => item.title === 'Festa Completa')
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

export default Decoration;
