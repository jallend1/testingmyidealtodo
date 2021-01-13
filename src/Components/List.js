import { useState } from "react";
import NewTask from "./NewTask";
import ListItem from "./ListItem";

const List = ({ list, addNewToDo, deleteToDo, updateToDo }) => {
  const [hovering, setHovering] = useState(false);

  const hoverState = () => {
    return (
      <header className="list-header">
        <h3>{list.title}</h3>
        <span
          className="material-icons edit"
          >
          edit
        </span>
      </header>
    )
  }

  return (
    <div className="list"
        onMouseEnter = {() => setHovering(true)}
        onMouseLeave = {() => setHovering(false)}
    >
      {hovering ? hoverState() : <h3>{list.title}</h3>}
      {/* <h3>{list.title}</h3> */}
      <h4>By {list.author}</h4>
      {list.content.map((content, index) => {
        return (
          <ListItem
            list={list}
            content={content}
            index={index}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
            key={list.id + index + 1}
          />
        );
      })}
      <NewTask addNewToDo={addNewToDo} listId={list.id} />
    </div>
  );
};

export default List;
