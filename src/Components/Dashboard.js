import React from "react";
import List from "./List";

const Dashboard = () => {
  return (
    <>
      <main className="mdl-layout__content">
        <List
          title="Primary To-Do"
          author="Jason"
          content={[
            "Plan a party",
            "Clean up after party",
            "Regret having party",
          ]}
        />
      </main>
    </>
  );
};

export default Dashboard;
