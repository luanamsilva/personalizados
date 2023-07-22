import { Header } from './components/Header';
import { Item } from './components/Item';
import { itemsData } from './data/items';

export default function Home() {

  return (
    <>
      <Header />
      {itemsData.map((item) => (
        <Item 
        key={item.id} 
        title={item.title} 
        theme={item.theme} 
        image={item.image}
      
        />
      ))}
    </>
  );
}
