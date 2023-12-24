import React, { useState } from "react";
import Empty from "./Empty";
import List from "./list";
import Bulk from "./bulk";

const ListGroup = ({
  tasks,
  setDone,
  deleteTask,
  updateTask,
  updateAllDone,
}) => {
  return (
    <div id="listGroup">
      <Empty />
      {tasks.map(({ id, task, isDone }) => (
        <List
          key={id}
          id={id}
          task={task}
          isDone={isDone}
          setDone={setDone}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
      {tasks.length > 0 && <Bulk updateAllDone={updateAllDone} />}
    </div>
  );
};

export default ListGroup;
