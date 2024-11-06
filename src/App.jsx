import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { Sidebar } from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(description, unitPrice) {
    const newTask = {
      id: tasks.length + 1,
      description,
      unitPrice,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-slate-700">
          <div className="flex justify-center h-full">
            <div className="w-[500px] space-y-4">
              <Title> Cadastro de Peça </Title>
              <AddTask onAddTaskSubmit={onAddTaskSubmit} />
              <Tasks
                tasks={tasks}
                onTaskClick={onTaskClick}
                onDeleteTaskClick={onDeleteTaskClick}
              />
            </div>
          </div>
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default App;
