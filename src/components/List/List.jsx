import ListItem from './ListItem';
import './list.css';

const List = ({ listItems, setListItems }) => {
  return (
    <ul className="list__container">
      {listItems.map((item) => (
        <ListItem
          listItems={listItems}
          setListItems={setListItems}
          key={item.key}
          listItem={item}
          text={item.text}
          qty={item.qty}
        />
      ))}
    </ul>
  )
}

export default List