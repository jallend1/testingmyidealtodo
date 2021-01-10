import { useState } from 'react';
import NewTask from "./NewTask";

const List = ({ list, addNewToDo, deleteToDo, updateToDo }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="list">
      <h3 key={list.id}>{list.title}</h3>
      <h4>By {list.author}</h4>
      {list.content.map((content, index) => {
        return (
          <div 
            className="list-item" 
            key={list.id + index * 0.1}
            onMouseEnter = {() => setHovering(true)}
            onMouseLeave = {() => setHovering(false)}
            >
            <input
                onChange={() => updateToDo(list.id, index)}
                type="checkbox"
                checked = {content.isFinished}
              />
            <span>{content.item}</span>
            {/* If hovering, display item options on list item */}
            {hovering ? 
              (
                <span
                  className="material-icons delete"
                  onClick={() => deleteToDo(content, list.id)} >
                delete_forever
                </span>)
              : <div></div>
            }
          </div>
        );
      })}
      <NewTask addNewToDo={addNewToDo} listId={list.id} />
    </div>
  );
};

export default List;
