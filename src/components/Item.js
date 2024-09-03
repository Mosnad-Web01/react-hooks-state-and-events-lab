import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = React.useState("");
  const handelInCard = () => {
    setInCart((inCart) => (inCart === "" ? "in-cart" : ""));
  };
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={inCart === "" ? "add" : "remove"}
        onClick={handelInCard}
      >
        {inCart === "" ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
