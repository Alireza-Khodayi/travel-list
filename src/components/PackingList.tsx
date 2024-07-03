import { PackingItem } from '../@types/PackingItem.type';
import Item from './Item';

type TProps = {
  items: PackingItem[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};
export function PackingList({ items, onDeleteItem, onToggleItem }: TProps) {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
