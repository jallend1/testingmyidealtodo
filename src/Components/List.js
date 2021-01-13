import { useState } from "react";
import NewTask from "./NewTask";
import ListItem from "./ListItem";

const List = ({ list, addNewToDo, deleteToDo, completeToDo }) => {
  const [hovering, setHovering] = useState(false);

  const hoverState = () => {
    return (
      <>
        <header className="list-header">
          <h3>{list.title}</h3>
          <button className="material-icons edit" onClick={(e) => completeToDo(list.id, null, e.target.tagName)}>
            edit
          </button>
        </header>
          <h4>By {list.author}</h4>
      </>
    )
  }

  return (
    <div className="list">
      <div onMouseEnter = {() => setHovering(true)} onMouseLeave = {() => setHovering(false)}>
        {hovering ? hoverState() : (
          <>
            <h3>{list.title}</h3>
            <h4>By {list.author}</h4>
          </>
          )
          }
      </div>
      {list.content.map((content, index) => {
        return (
          <ListItem
            list={list}
            content={content}
            index={index}
            deleteToDo={deleteToDo}
            completeToDo={completeToDo}
            key={list.id + index + 1}
          />
        );
      })}
      <NewTask addNewToDo={addNewToDo} listId={list.id} />
    </div>
  );
};

export default List;
