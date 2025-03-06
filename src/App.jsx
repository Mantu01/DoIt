import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import TaskDetails from './components/TaskDetails';
import { useSelector } from 'react-redux';
import './index.css';

function App() {
  const { dark, showSideBar, showDetails } = useSelector(state => state.app);

  return (
    <>
      <Navbar />
      <div className={`row vh-100 justify-content-between ${dark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <div className={`sidebar-transition ${showSideBar ? 'col-md-2 show' : 'col-md-2 hide'}`}>
          {showSideBar && <Sidebar />}
        </div>
        <div className={`${showSideBar && showDetails ? 'col-md-5' : showSideBar || showDetails ? 'col-md-7' : 'col-md-9'}`}>
          <TaskList />
        </div>
        <div className={`details-transition ${showDetails ? 'col-md-3 show ' : 'col-md-3 hide'}`}>
          {showDetails && <TaskDetails />}
        </div>

      </div>
    </>
  );
}

export default App;
