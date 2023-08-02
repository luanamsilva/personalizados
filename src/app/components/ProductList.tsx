import { Item } from './../components/Item';
import itemsData from '../data/itemsData.json';
import Link from 'next/link';

export default function ProductList() {
  return (
    <div className="flex flex-wrap">
      {itemsData.map((item) => (
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
  );
}
