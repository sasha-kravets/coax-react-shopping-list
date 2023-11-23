import { v4 as uuidv4 } from "uuid";
import "./form.css";

const Form = ({
  inputText,
  setInputText,
  inputQty,
  setInputQty,
  listItems,
  setListItems,
}) => {
  const inputTextHandler = (e) => {
    let inputValue = e.target.value.trim();
    setInputText(inputValue);
  };

  const inputQtyHandler = (e) => {
    let inputValue = e.target.value;
    setInputQty(inputValue);
  };

  const submitListItemsHandler = (e) => {
    e.preventDefault();
    if (inputText !== '') {
      const quantity = inputQty !== '' ? inputQty : 1;
      setListItems([
        ...listItems,
        { text: inputText, qty: quantity, completed: false, id: uuidv4() },
      ]);
      setInputText("");
      setInputQty("");
    } else {
      alert ('Please add the product name')
    }
    
  };

  return (
    <form className="form__container">
      <input
        value={inputText}
        type="text"
        placeholder="Title..."
        className="form__input"
        onChange={inputTextHandler}
      />
      <input
        value={inputQty}
        type="number"
        placeholder="1"
        className="form__input form__input_number"
        onChange={inputQtyHandler}
      />
      <button
        type="submit"
        className="form__button"
        onClick={submitListItemsHandler}
      >
        Add
      </button>
    </form>
  );
};

export default Form;