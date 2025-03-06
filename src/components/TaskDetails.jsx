import { Star, Plus, Bell, Calendar, Repeat, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../store/tasksSlice";
import { useEffect } from "react";

const TaskInfo = () => {
  const { dark } = useSelector((state) => state.app);
  const {selectedTask}=useDispatch((state) => state.tasks);
  const dispatch = useDispatch();

  if (!selectedTask) {
    return <div className="container-fluid vh-90 p-3">Select a task to view details</div>;
  }
  const handleDeleteTask = () => {
    dispatch(deleteTask(selectedTask.id));
  };

  return (
    <div className={`container-fluid vh-90 d-flex flex-column ${dark ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="p-3">
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={selectedTask.completed}
            onChange={() => dispatch(toggleTaskCompletion(selectedTask.id))}
          />
          <span className="fs-5 flex-grow-1">{selectedTask.text}</span>
          <Star className="text-warning" size={20} />
        </div>
      </div>

      <div className="mt-3 px-3">
        <div className="d-flex align-items-center py-2 border-bottom">
          <Plus className="me-3" size={20} />
          <span>Add Step</span>
        </div>
        <div className="d-flex align-items-center py-2 border-bottom">
          <Bell className="me-3" size={20} />
          <span>Set Reminder</span>
        </div>
        <div className="d-flex align-items-center py-2 border-bottom">
          <Calendar className="me-3" size={20} />
          <span>Add Due Date</span>
        </div>
        <div className="d-flex align-items-center py-2 border-bottom">
          <Repeat className="me-3" size={20} />
          <span>Repeat</span>
        </div>
      </div>

      <div className="mt-auto p-3 d-flex justify-content-between align-items-center border-top">
        <span>Created Today</span>
        <Trash2 className="text-danger cursor-pointer" size={20} onClick={handleDeleteTask} />
      </div>
    </div>
  );
};

export default TaskInfo;
