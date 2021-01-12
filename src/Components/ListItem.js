import { useState } from "react";

const ListItem = ({ list, content, index, deleteToDo, updateToDo }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="list-item"
      key={list.id + index * 0.1}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <input
        onChange={() => updateToDo(list.id, index)}
        type="checkbox"
        checked={content.isFinished}
      />
      <span>{content.item}</span>
      {/* If hovering, display item options on list item */}
      {hovering ? (
        <span
          className="material-icons delete"
          onClick={() => deleteToDo(content, list.id)}
        >
          delete_forever
        </span>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default ListItem;