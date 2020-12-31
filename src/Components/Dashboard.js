import List from "./List";

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
  lists.map((list) => console.log(list));
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
