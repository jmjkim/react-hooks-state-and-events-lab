import { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCart] = useState("")
  const [buttonText, setCartStatus] = useState("Add to Cart")
  const [buttonClass, setButtonClass] = useState("add")

  function handleClick() {
    setCart("in-cart")
    setCartStatus("Remove From Cart")
    setButtonClass("remove")
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{buttonText}</button>
    </li>
  );
}

export default Item;
