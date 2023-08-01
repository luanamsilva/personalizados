import  itemsData  from '../data/itemsData.json';
import { Item } from '../components/Item';

const Decoration = () => {
  return (
    <>
   
      <div className="flex flex-wrap">
        {itemsData
          .filter((item) => item.title === 'Festa Completa')
          .map((item) => (
            <Item
              key={item.id}
              title={item.title}
              theme={item.theme}
              image={item.image}
            />
          ))}
      </div>
    </>
  );
};

export default Decoration;
