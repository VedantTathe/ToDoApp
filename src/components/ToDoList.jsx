import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = () => {
  // Load tasks from localStorage on mount

  const [task, setTask] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white/80 backdrop-blur-md dark:bg-gray-800 transition">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700 dark:text-white">Your Tasks</h2>
      <div className="flex">
        <input
          type="text"
          className="border p-2 w-full rounded-l dark:bg-gray-700 dark:text-white"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition" onClick={addTask}>
          Add
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul className="mt-4" {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((t, index) => (
                <Draggable key={t.id} draggableId={t.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex justify-between bg-white p-3 mt-2 rounded-lg shadow-md dark:bg-gray-700 transition"
                    >
                      <span className="text-gray-800 dark:text-white">{t.text}</span>
                      <button className="text-red-500" onClick={() => deleteTask(t.id)}>❌</button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
