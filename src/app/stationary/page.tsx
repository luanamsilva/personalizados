import  itemsData  from '../data/itemsData.json';
import { Item } from '../components/Item';

const Stationary = () =>{
  return(<>
 
  <div className="flex flex-wrap">
        {itemsData
          .filter((item) => item.title.includes('Papelaria'))
          .map((item) => (
            <Item
              key={item.id}
              title={item.title}
              theme={item.theme}
              image={item.image}
            />
          ))}
      </div>

  </>)
}

export default Stationary