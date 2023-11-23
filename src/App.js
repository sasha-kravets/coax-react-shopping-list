import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputQty, setInputQty] = useState(1);
  const [listItems, setListItems] = useState([]);

  // Get from local storage
  useEffect(() => {
    const storedListItems = JSON.parse(localStorage.getItem("listItems")) || [];
    setListItems(storedListItems);
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <div className="container">
      <section className="shopping-list">
        <h1 className="shopping-list__title">Shopping List</h1>

        <div className="shopping-list__form form">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            inputQty={inputQty}
            setInputQty={setInputQty}
            listItems={listItems}
            setListItems={setListItems}
          />
        </div>

        <div className="shopping-list__list list">
          <List listItems={listItems} setListItems={setListItems} />
        </div>
      </section>
    </div>
  );
}

export default App;