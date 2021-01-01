import { Router } from "@reach/router";
import { useState } from 'react';
import firebase from './config/firebase';

import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Archive from "./Components/Archive";
import About from "./Components/About";

function App() {
  const [taskList, setTaskList] = useState('hello')
  const db = firebase.firestore();
  db.collection('tasklists')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(task => console.log(task.data()))
    });
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
