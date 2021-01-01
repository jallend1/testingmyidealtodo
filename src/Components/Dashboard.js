import firebase from '../config/firebase'
import List from "./List";

const refs = firebase.firestore().collection('tasklists')
console.log(refs)


const lists = [
  {
    id: 50,
    title: "Primary To-Do",
    author: "JD",
    contents: ["Plan a party", "Clean up after party", "Regret having party"],
  },
  {
    id: 51,
    title: "Secondary To-Do",
    author: "JD",
    contents: ["Wake up", "Make Eggs", "Do the twist"],
  },
];

const Dashboard = () => {
  return (
    <>
      <main className="mdl-layout__content">
        {lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
      </main>
    </>
  );
};

export default Dashboard;
