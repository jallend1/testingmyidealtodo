const NewTask = ({ addNewTodo, listId }) => {
  return (
    <form id={listId} onSubmit={addNewTodo}>
      <div className="mdl-textfield mdl-js-textfield">
        <input type="text" className="mdl-textfield__input" id={"newtodo" + listId} />
        <label htmlFor={"newtodo" + listId} className="mdl-textfield__label">
          Add a new todo
        </label>
      </div>
    </form>
  );
};

export default NewTask;
