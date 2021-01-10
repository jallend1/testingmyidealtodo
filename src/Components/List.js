import NewTask from "./NewTask";

const List = ({ list, addNewToDo, deleteToDo, updateToDo }) => {
  return (
    <div className="list">
      <h3 key={list.id}>{list.title}</h3>
      <h4>By {list.author}</h4>
      {list.content.map((content, index) => {
        return (
          <div className="list-item" key={list.id + index * 0.1}>
            {content.isUnfinished ? (
              <input
                onChange={() => updateToDo(list.id, index)}
                type="checkbox"
              />
            ) : (
              <input
                onChange={() => updateToDo(list.id, index)}
                type="checkbox"
                checked
              />
            )}
            <span>{content.item}</span>
            <span
              className="material-icons delete"
              onClick={() => deleteToDo(content, list.id)}
            >
              delete_forever
            </span>
          </div>
        );
      })}
      <NewTask addNewToDo={addNewToDo} listId={list.id} />
    </div>
  );
};

export default List;
