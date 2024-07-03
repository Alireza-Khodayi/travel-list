import { useState } from 'react';
import { PackingItem } from './@types/PackingItem.type';
import { Form, Logo, PackingList, Stats } from './components';

export default function App() {
  const [items, setItems] = useState<PackingItem[]>([]);

  function handleAddItem(newItem: PackingItem) {
    setItems(items => [...items, newItem]);
  }

  function handleDeleteItem(id: number) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
