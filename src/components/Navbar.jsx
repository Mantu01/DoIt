import React, { useEffect } from 'react';
import { AlignJustify, Search, List, LayoutGrid, MoonStar, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardMode, toggleDarkMode, toggleSideBar } from '../store/appSlice';

function Navbar() {
  const dispatch = useDispatch();
  const { dark, cardMode } = useSelector(state => state.app);

  useEffect(() => {
    const html = document.querySelector('html');
    if (dark) {
      html.classList.add('dark-mode');
      html.classList.remove('light-mode');
    } else {
      html.classList.remove('dark-mode');
      html.classList.add('light-mode');
    }
  }, [dark]);

  return (
    <nav className={`navbar navbar-expand-lg w-100 d-flex justify-content-between align-items-center ${dark ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
      <div className="navbar-brand d-flex align-items-center btn">
        <AlignJustify onClick={() => dispatch(toggleSideBar())} className='ms-4' />
        <img
          src="/logo.png"
          alt="Logo"
          className="img-fluid btn ms-2"
          style={{ height: '40px' }}
        />
      </div>
      <div className="navbar-brand d-flex align-items-center">
        <div className="nav-item me-3">
          <Search />
        </div>
        <div className="nav-item me-3" onClick={() => dispatch(toggleCardMode())}>
          {cardMode ? <LayoutGrid /> : <List />}
        </div>
        <div className="nav-item me-3" onClick={() => dispatch(toggleDarkMode())}>
          {dark ? <Sun /> : <MoonStar />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
