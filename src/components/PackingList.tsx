import { useState } from 'react';
import { PackingItem } from '../@types/PackingItem.type';
import Item from './Item';

type TProps = {
  items: PackingItem[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
};

enum SortBy {
  'input',
  'description',
  'packed',
}

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: TProps) {
  const [sortBy, setSortBy] = useState<keyof typeof SortBy>('packed');

  function handleChangeSortBy(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value as keyof typeof SortBy);
  }

  let sortedItems: PackingItem[] = [];
  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems?.map(item => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={handleChangeSortBy}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
