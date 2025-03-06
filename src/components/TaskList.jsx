import React, { useState } from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTaskCompletion, setTaskPriority, selectTask } from "../store/tasksSlice";

function TaskList() {
  const { tasks } = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), text: newTask, completed: false };
      dispatch(addTask(newTaskObj));
      setNewTask("");
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleSetPriority = (id, priority) => {
    dispatch(setTaskPriority({ id, priority }));
  };

  const handleSelectTask = (task) => {
    dispatch(selectTask(task));
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="task-list p-3">
      <div className="task-header d-flex justify-content-between align-items-center mb-3">
        <h2>To Do</h2>
      </div>

      <div className="task-input mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
          />
          <button className="btn btn-primary" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="tasks">
        <h5>Today Tasks ({pendingTasks.length})</h5>
        {pendingTasks.map((task) => (
          <div
            key={task.id}
            className="task d-flex justify-content-between align-items-center mb-2"
            onClick={() => handleSelectTask(task)}
            style={{ cursor: "pointer" }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <label className="form-check-label">{task.text}</label>
            </div>
            <Star className={`text-${task.priority === "high" ? "danger" : "warning"}`} />
          </div>
        ))}

        <h5 className="mt-4">Completed Tasks</h5>
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="task d-flex justify-content-between align-items-center mb-2"
            onClick={() => handleSelectTask(task)}
            style={{ cursor: "pointer" }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <label className="form-check-label">{task.text}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
