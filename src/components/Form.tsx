import { useState } from 'react';
import { PackingItem } from '../@types/PackingItem.type';

type TProps = {
  onAddItems: (item: PackingItem) => void;
};

export function Form({ onAddItems }: TProps) {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  function handleChangeDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  function handleChangeQuantity(e: React.ChangeEvent<HTMLSelectElement>) {
    setQuantity(parseInt(e.target.value));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleChangeQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={handleChangeDescription}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
