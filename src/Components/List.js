import NewTask from "./NewTask";

const List = ({list, addNewTodo}) => {
  return (
    <>
      <h3 key={list.id}>{list.details.title}</h3>
      <h4>By {list.details.author}</h4>
      {list.details.contents.map((content, index) => (
        <p key={list.id + (index * .1)}>
          {content}
        </p>
        ))}
      <NewTask addNewTodo={addNewTodo} listId={list.id} />
    </>
  );
};

export default List;
