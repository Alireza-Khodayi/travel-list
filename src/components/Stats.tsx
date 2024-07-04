import { PackingItem } from '../@types/PackingItem.type';

type TProps = {
  items: PackingItem[];
};

export function Stats({ items }: TProps) {
  if (!items.length)
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((numberOfPackedItems / numberOfItems) * 100);

  return (
    <footer className='stats'>
      {percentage === 100 ? (
        <em>You got everything! Ready to Go! ✈️</em>
      ) : (
        <em>
          {`💼 You have ${numberOfItems} items on your list, and you already packed ${numberOfPackedItems} (${percentage}%)`}
        </em>
      )}
    </footer>
  );
}
