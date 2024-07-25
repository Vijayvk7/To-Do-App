import React from "react";

function Item({ item, handleDelete, index }) {
  function handleClick() {
    handleDelete(index);
    console.log(index);
  }
  return (
    <div className="items">
      <h3>{item}</h3>
      <button className="Delete-Button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Item;
