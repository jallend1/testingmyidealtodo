import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <Dashboard />

        {/* <div id="listarea"> 
            <div className="list">
              <ul className="mdl-list" id="primarylist"></ul>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default App;
