import { Router } from "@reach/router";

import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Archive from "./Components/Archive";
import About from "./Components/About";

import ListContext from './contexts/ListContext';

function App() {
  const lists =[];
  return (
    <>
      <div className="mdl-layout mdl-js-layout">
        <Header />
          <ListContext.Provider value={lists}>
            <Router>
              <Dashboard path="/" />
              <Archive path="/archive" />
              <About path="/about" />
            </Router>
          </ListContext.Provider>
      </div>
    </>
  );
}

export default App;
