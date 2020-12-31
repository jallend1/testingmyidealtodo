import NewTask from "./NewTask";

const List = ({ list: { title, author, contents, id } }) => {
  return (
    <>
      <h3 key={id}>{title}</h3>
      <h4>By {author}</h4>
      {contents.map((content, index) => (
        <p key={id + index / 10}>{content}</p>
      ))}
      <NewTask />
    </>
  );
};

export default List;
