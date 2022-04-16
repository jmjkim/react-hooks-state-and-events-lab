import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All")

  function handleFilterBy(category) {
    setFilterBy(category.target.value)
  }

  const categoryToDisplay = items.filter((item) => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterBy}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
