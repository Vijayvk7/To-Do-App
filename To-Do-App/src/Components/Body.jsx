import React from "react";
import Item from "./Item";

export default function Body({ text, setText, handleDelete }) {
  return (
    <div className="body-container">
      <h3>
        {text.map((item, index) => (
          <Item
            item={item}
            key={index}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </h3>
    </div>
  );
}
