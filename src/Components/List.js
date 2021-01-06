import NewTask from "./NewTask";

const List = ({list, addNewTodo, deleteToDo}) => {
  return (
    <div className="list">
      <h3 key={list.id}>{list.title}</h3>
      <h4>By {list.author}</h4>
        {list.content.map((content, index) => {
           return (
            <p className="list-item" key={list.id + (index * .1)}>
            <span>{content}</span>
            <span onClick={() => deleteToDo(content, list.id)}>x</span>
            </p>
           )
          })
        }
      <NewTask addNewTodo={addNewTodo} listId={list.id} />
    </div>
  );
};

export default List;
