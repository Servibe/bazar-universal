import { ProductItem } from "../types";

export const ProductList = ({
  items,
  handleClick,
}: {
  items: ProductItem[];
  handleClick: (id: number) => void;
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <img src={item.thumbnail} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <b>{item.price}&nbsp;&euro;</b>
          <b>{item.rating}</b>
        </li>
      ))}
    </ul>
  );
};
