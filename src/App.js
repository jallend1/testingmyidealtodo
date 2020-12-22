import Header from './Components/Header';
import ListSummary from './Components/ListSummary';

function App() {
  return (
    <>
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <main className="mdl-layout__content">
          <ListSummary title="Primary To-Do" author="Jason" content={["Plan a party", "Clean up after party", "Regret having party"]} />
          {/* <div id="listarea">
            <div className="list">
              <h3>Primary List</h3>
              <ul className="mdl-list" id="primarylist"></ul>
              <div>
                <form id="addnew">
                  <div className="mdl-textfield mdl-js-textfield">
                    <input type="text" className="mdl-textfield__input" id="newtodo" />
                    <label htmlFor="newtodo" className="mdl-textfield__label">
                      Add a new todo
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </>
  );
}

export default App;
