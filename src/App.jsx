import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Status from "./components/status";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Buy groceries",
      isDone: false,
    },
    {
      id: 2,
      task: "Clean the house",
      isDone: false,
    },
    {
      id: 3,
      task: "Finish the report",
      isDone: false,
    },
  ]);

  const setDone = (id) => {
    setTasks(
      tasks.map((el) => (el.id == id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((el) => el.id != id));
  };

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, editedTask) => {
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, task: editedTask } : el))
    );
  };

  const updateAllDone = () => {
    setTasks(tasks.map((el) => ({ ...el, isDone: true })));
  };
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Header />
      <Form createTask={createTask} />
      <Status tasks={tasks} />
      <ListGroup
        tasks={tasks}
        setDone={setDone}
        deleteTask={deleteTask}
        updateTask={updateTask}
        updateAllDone={updateAllDone}
      />
    </div>
  );
};

export default App;
