import React, { useState } from "react";

function Input({ text, setText }) {
  const [inputfield, setInputField] = useState("");
  function handleClick() {
    setText([...text, inputfield]);
    setInputField("");
  }
  return (
    <div className="input">
      <input
        className="input-box"
        type="text"
        placeholder="Enter Your Task Here"
        value={inputfield}
        onChange={(e) => setInputField(e.target.value)}
      ></input>
      <button className="Add-Button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Input;
