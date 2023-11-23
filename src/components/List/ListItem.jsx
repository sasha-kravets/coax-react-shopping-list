const ListItem = ({ listItems, setListItems, text, listItem, qty }) => {

  // Events
  const deleteHandler = () => {
    setListItems(listItems.filter((el) => el.id !== listItem.id));
  };

  const completeHandler = () => {
    setListItems(
      listItems.map((item) => {
        if (item.id === listItem.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  return (
    <li
      className={`list__item item-list ${
        listItem.completed ? "completed" : ""
      }`}
    >
      <div className="item-list__qty">{qty}</div>
      <div className="item-list__title" onClick={completeHandler}>{text}</div>
      <button className="item-list__button" onClick={deleteHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
          <path
            d="M22.1312 9.63126L20.3687 7.86876L15 13.2375L9.63124 7.86876L7.86874 9.63126L13.2375 15L7.86874 20.3688L9.63124 22.1313L15 16.7625L20.3687 22.1313L22.1312 20.3688L16.7625 15L22.1312 9.63126Z"
            fill="#FFD700"
          />
        </svg>
      </button>
    </li>
  );
};

export default ListItem;
