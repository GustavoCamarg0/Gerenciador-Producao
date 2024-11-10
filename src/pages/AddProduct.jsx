import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { Sidebar } from "../components/Sidebar";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export function AddProduct() {
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
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />
          <span className="w-full p-1 pl-4">
            Home <span className="text-gray-400">/ Cadastro de Produto</span>
          </span>
          <div className="h-full bg-gray-200 w-full flex flex-col items-center">
            <AddTask onAddTaskSubmit={onAddTaskSubmit} />
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onTaskClick={onTaskClick}
                onDeleteTaskClick={onDeleteTaskClick}
              />
            ) : null}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
