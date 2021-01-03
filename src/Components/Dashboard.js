import firebase from '../config/firebase'
import { useState, useEffect } from 'react';
import List from "./List";

const Dashboard = () => {
  const [taskLists, setTaskLists] = useState([]);

  const addNewTodo = e => {
    e.preventDefault();
    
    const listDetails = taskLists.find(item => item.id === e.target.id);
    listDetails.details.contents.push(e.target[0].value.trim());
    
    const taskListRef = firebase.firestore().collection('tasklists');
    taskListRef.doc(e.target.id)
      .update({content: listDetails.details})
      .then(console.log('Completed!'));
    setTaskLists(taskLists);
    e.target.reset();
  }

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
          <List list={list} key={list.id} listId={list.id} addNewTodo = {addNewTodo} />
        ))}
      </main>
    </>
  );
};

export default Dashboard;
