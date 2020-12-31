import { Router } from "@reach/router";
import firebase from './config/firebase';

import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Archive from "./Components/Archive";
import About from "./Components/About";

function App() {
  console.log(firebase.firestore());
  return (
    <>
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <Router>
          <Dashboard path="/" />
          <Archive path="/archive" />
          <About path="/about" />
        </Router>
      </div>
    </>
  );
}

export default App;
