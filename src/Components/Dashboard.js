import firebase from '../config/firebase'
import { useState, useEffect } from 'react';
import List from "./List";

const Dashboard = () => {
  const [taskLists, setTaskLists] = useState([]);
  //Pulls existing tasklists from Firebase and puts them in state
  const retrieveLists = () => {
    const taskListRef = firebase.firestore().collection('tasklists');
    if(taskLists.length === 0){
      const todoLists = [];
      taskListRef.get()
      .then(querySnapshot => {
        querySnapshot.forEach(list => {
          const taskList = {};
          taskList.id = list.id;
          taskList.details = list.data();
          todoLists.push(taskList)
        });
        setTaskLists(todoLists);
      });
    }
  }
  
  useEffect(retrieveLists, [taskLists, setTaskLists]);
  
  return (
    <>
      <main className="mdl-layout__content">
        {taskLists.map((list) => (
          <List list={list} key={list.id} />
        ))}
      </main>
    </>
  );
};

export default Dashboard;
