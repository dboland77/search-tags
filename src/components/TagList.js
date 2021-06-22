const TagList = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);

const Item = ({ item, onRemove }) => (
  <li>
    <span>{item.text}</span>
    <button type="button" onClick={() => onRemove(item.id)}>
      x
    </button>
  </li>
);

export default TagList;