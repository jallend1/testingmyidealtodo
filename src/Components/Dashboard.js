import firebase from '../config/firebase'
import { useState } from 'react';
import List from "./List";


const retrieveLists = () => {
  const taskListRef = firebase.firestore().collection('tasklists');
  const todoLists = [];
  taskListRef.get()
  .then(querySnapshot => {
    querySnapshot.forEach(list => {
      const taskList = {};
      taskList.id = list.id;
      taskList.details = list.data();
      todoLists.push(taskList)
    });
  })
  return todoLists;
}


const Dashboard = () => {
  const [taskLists, setTaskLists] = useState(retrieveLists);
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
