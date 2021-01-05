import firebase from '../config/firebase'
import { useState, useEffect } from 'react';
import List from "./List";

const Dashboard = () => {
  const [taskLists, setTaskLists] = useState([]);

  const addNewTodo = e => {
    e.preventDefault();
    
    // Extracts the id to add to the correct to-do list in Firebase
    const id = e.target.id;
    
    // Matches firebase id to object
    const listDetails = taskLists.find(item => item.id === id);
    const newItem = e.target[0].value.trim();
    
    // Adds new item onto corresponding Firebase list
    listDetails.content.push(newItem)

    const db = firebase.firestore().collection('tasklists');
    db.doc(id)
      .update({content: listDetails.content})
      .then(console.log('Completed!'));
    e.target.reset();
  }

  //Pulls existing tasklists from Firebase and puts them in state
  const retrieveLists = () => {
    const db = firebase.firestore().collection('tasklists');
    if(taskLists.length === 0){
      db.onSnapshot(snapshot => {
        const todoLists = [];
        snapshot.forEach(list => {
          const newItem = list.data();
          newItem.id = list.id;
          todoLists.push(newItem);
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