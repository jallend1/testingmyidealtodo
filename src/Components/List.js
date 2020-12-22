import React from "react";
import NewTask from "./NewTask";

const List = ({ title, author, content }) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>By {author}</h4>
      <p>{content}</p>
      <NewTask />
    </>
  );
};

export default List;
