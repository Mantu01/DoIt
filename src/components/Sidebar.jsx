import React, { useEffect, useState } from "react";
import { Calendar, ClipboardList, Star, Map, User, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Sidebar = () => {
  const { dark } = useSelector((state) => state.app);
  const { tasks } = useSelector((state) => state.tasks);
  const themeClass = dark ? "bg-dark text-light" : "bg-light text-dark";
  const navLinkClass = dark ? "text-light" : "text-dark";
  const statBoxBg = dark ? "bg-secondary" : "bg-light border";
  const statText = dark ? "text-white" : "text-dark";

  const [prog,setProg] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    const percent = (completedTasks.length / tasks.length) * 100;
    setProg(percent);
  },[tasks]);

  return (
    <div className={`d-flex flex-column vh-90 p-3 ${themeClass}`} style={{ width: "260px" }}>
      {/* Profile Section */}
      <div className="text-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpMTQ8bn0tXi5PCUtyL9WxkVI_3yvqeBDTKPG9cUA--ESKtPUwBJjUrdYtQCNrhmoUkk&usqp=CAU"
          alt="Profile"
          className="rounded-circle mb-2"
          width="80"
          height="80"
        />
        <p className="m-0">Hey, ABCD</p>
      </div>
      <nav className="nav flex-column">
        <a className={`nav-link d-flex align-items-center btn ${navLinkClass}`}>
          <ClipboardList size={18} className="me-2" />
          All Tasks
        </a>
        <a className="nav-link d-flex align-items-center bg-success text-white rounded">
          <Calendar size={18} className="me-2" />
          Today
        </a>
        <a className={`nav-link d-flex align-items-center btn ${navLinkClass}`}>
          <Star size={18} className="me-2" />
          Important
        </a>
        <a className={`nav-link d-flex align-items-center btn ${navLinkClass}`}>
          <Map size={18} className="me-2" />
          Planned
        </a>
        <a className={`nav-link d-flex align-items-center btn ${navLinkClass}`}>
          <User size={18} className="me-2" />
          Assigned to me
        </a>
      </nav>
      <button className={`btn mt-3 d-flex align-items-center ${dark ? "btn-outline-light" : "btn-outline-dark"}`}>
        <Plus size={18} className="me-2" />
        Add list
      </button>
      <div className={`mt-auto p-3 rounded ${statBoxBg}`}>
        <p className="mb-1">Today Tasks</p>
        <h3 className={`fw-bold ${statText}`}>{tasks.length}</h3>
        <div style={{ width: 200, height: 200, padding:30 }}>
          <CircularProgressbar value={prog} text={`${prog}%`} />
        </div>
        <div className="d-flex justify-content-between text-small">
          <span className={dark ? "text-white-50" : "text-muted"}>Pending</span>
          <span className="text-emphasis">Done</span>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
