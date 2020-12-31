const NewTask = () => {
  return (
    <form id="addnew">
      <div className="mdl-textfield mdl-js-textfield">
        <input type="text" className="mdl-textfield__input" id="newtodo" />
        <label htmlFor="newtodo" className="mdl-textfield__label">
          Add a new todo
        </label>
      </div>
    </form>
  );
};

export default NewTask;