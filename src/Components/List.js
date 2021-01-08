import NewTask from "./NewTask";

const List = ({ list, addNewTodo, deleteToDo }) => {
  return (
    <div className="list">
      <h3 key={list.id}>{list.title}</h3>
      <h4>By {list.author}</h4>
      {list.content.map((content, index) => {
        return (
          <div className="list-item" key={list.id + index * 0.1}>
            {content.isUnfinished ? <input type="checkbox" /> : <input type="checkbox" checked />}
            <span>{content.item}</span>
            <span className="material-icons delete" 
              onClick={() => deleteToDo(content, list.id)}>
                delete_forever
            </span>
          </div>
        );
      })}
      <NewTask addNewTodo={addNewTodo} listId={list.id} />
    </div>
  );
};

export default List;
