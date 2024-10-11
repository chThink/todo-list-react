import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList.js";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks || []);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: text,
        done: false,
      },
    ]);

    console.log(tasks);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <div className="App">
      <h1>Prague Itinerary</h1>
      {/* add task */}

      <AddTask onAddTask={handleAddTask} />
      {/* list tasks */}

      {tasks ? (
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      ) : (
        <>
          <p>Nenhuma tarefa disponível {}</p>
        </>
      )}
    </div>
  );
}

export default App;
