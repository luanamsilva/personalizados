import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { itemsData } from '../data/items';
import { Item } from '../components/Item';

const Special = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        {itemsData
          .filter((item) => item.title.includes('Caixa'))
          .map((item) => (
            <Item
              key={item.id}
              title={item.title}
              theme={item.theme}
              image={item.image}
            />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Special;