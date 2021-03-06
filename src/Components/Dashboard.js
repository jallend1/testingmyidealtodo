// TODO Extract todo lists into isolated context file?

import firebase from "../config/firebase";
import { useState, useEffect } from "react";
import List from "./List";

const Dashboard = () => {
  const [taskLists, setTaskLists] = useState([]);

  const addNewToDo = (e) => {
    e.preventDefault();
    // Extracts the id to add to the correct to-do list in Firebase
    const id = e.target.id;
    // Matches firebase id to object
    const listDetails = taskLists.find((item) => item.id === id);
    const newItem = {
      item: e.target[0].value.trim(),
      isFinished: false,
    };
    listDetails.content.push(newItem);
    updateTaskList(id, listDetails.content)
    setTaskLists(taskLists);
    e.target.reset();
  };

  const deleteToDo = (itemToDelete, id) => {
    const listIndex = taskLists.findIndex((item) => item.id === id); // Locates appropriate list
    const listContents = taskLists[listIndex].content;
    const itemIndex = listContents.indexOf(itemToDelete); // Locates appropriate list item
    listContents.splice(itemIndex, 1); // Removes it
    updateTaskList(id, listContents)
  };

  //Pulls existing tasklists from Firebase and puts them in state
  const retrieveLists = () => {
    console.log('running!')
    const db = firebase.firestore().collection("tasklists");
    if (taskLists.length === 0) {
      db.onSnapshot((snapshot) => {
        const todoLists = [];
        snapshot.forEach((list) => {
          const newItem = list.data();
          newItem.id = list.id;
          todoLists.push(newItem);
        });
        setTaskLists(todoLists);
      });
    }
  };

  const completeToDo = (id, index) => {
    const listIndex = taskLists.findIndex((item) => item.id === id);
    const taskList = taskLists[listIndex].content;
    taskList[index].isFinished = !taskList[index].isFinished;
    updateTaskList(id, taskList)
    setTaskLists(taskLists);
  };

  const updateTaskList = (id, newTaskList) => {
    const db = firebase.firestore().collection('tasklists');
    db.doc(id).update({content: newTaskList})
  }

  useEffect(retrieveLists);

  return (
    <>
      <main className="mdl-layout__content container">
        {/* Populates only active lists and not archived ones */}
        {taskLists.map((list) => {
          if (list.isActive) {
            return (
              <List
                list={list}
                key={list.id}
                listId={list.id}
                addNewToDo={addNewToDo}
                completeToDo={completeToDo}
                deleteToDo={deleteToDo}
              />
            );
          }
          return null;
        })}
      </main>
    </>
  );
};

export default Dashboard;