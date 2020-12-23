import { Router } from '@reach/router';

import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Archive from './Components/Archive';
import About from './Components/About';

function App() {
  return (
    <>
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <Router>
          <Dashboard path="/" />
          <Archive path="/archive" />
          <About path="/about" />
        </Router>

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
