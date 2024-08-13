export default function Item({ item, onDeletedItem, onToggleItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        <span> </span>
        {item.description}
      </span>
      <button onClick={() => onDeletedItem(item.id)}>❌</button>
    </li>
  );
}
