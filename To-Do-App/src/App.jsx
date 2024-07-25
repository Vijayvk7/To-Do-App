import Header from "./Components/Header";
import Input from "./Components/Input";
import Body from "./Components/Body";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState([]);
  function handleDelete(index) {
    setText((prevText) => prevText.filter((_, i) => i !== index));
  }
  return (
    <div>
      <Header />
      <Input text={text} setText={setText} />
      <Body text={text} handleDelete={handleDelete} />
    </div>
  );
}
