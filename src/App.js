import Header from './Components/Header';

function App() {
  return (
    <>
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <main className="mdl-layout__content">
          <div id="listarea">
            <div className="list">
              <h3>Primary List</h3>
              <ul className="mdl-list" id="primarylist"></ul>
              <div>
                <form id="addnew">
                  <div className="mdl-textfield mdl-js-textfield">
                    <input type="text" className="mdl-textfield__input" id="newtodo" />
                    <label for="newtodo" className="mdl-textfield__label">
                      Add a new todo
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
