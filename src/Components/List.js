import { useState } from 'react';
import NewTask from "./NewTask";
import ListItem from './ListItem';

const List = ({ list, addNewToDo, deleteToDo, updateToDo }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="list">
      <h3 key={list.id}>{list.title}</h3>
      <h4>By {list.author}</h4>
      {list.content.map((content, index) => {
        return (
          <ListItem list={list} content={content} index = {index} deleteToDo = {deleteToDo} updateToDo = {updateToDo} />
          
        );
      })}
      <NewTask addNewToDo={addNewToDo} listId={list.id} />
    </div>
  );
};

export default List;
