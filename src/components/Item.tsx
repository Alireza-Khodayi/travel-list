import { PackingItem } from '../@types/PackingItem.type';
type TProps = {
  item: PackingItem;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};
export default function Item({ item, onDeleteItem, onToggleItem }: TProps) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed ? 'true' : 'false'}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
