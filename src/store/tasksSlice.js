import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  selectedTask: null, // ✅ Stores selected task details
  filterType: "all", // ✅ Filter type (allTasks, today, important, planned, assignedToMe)
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      if (state.selectedTask?.id === action.payload) {
        state.selectedTask = null;
      }
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    setTaskPriority: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.priority = priority;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload; // ✅ Set the filter type
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  setTaskPriority,
  selectTask,
  setFilterType,
} = tasksSlice.actions;
export default tasksSlice.reducer;
