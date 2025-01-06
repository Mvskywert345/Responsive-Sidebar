import React, { useState, useEffect } from 'react';
import './style.css';
import 'boxicons/css/boxicons.min.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const autoCollapseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    autoCollapseSidebar();
    window.addEventListener('resize', autoCollapseSidebar);

    return () => {
      window.removeEventListener('resize', autoCollapseSidebar);
    };
  }, []);

  const menuBtnChange = () => {
    return isOpen ? 'bx-menu-alt-right' : 'bx-menu';
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}> {/* Conditionally add 'open' class */}
      <div className="logo-details">
        <div className="logo_name">MNNLR</div>
        <i className={`bx ${menuBtnChange()}`} id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <i className='bx bxs-dashboard'></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bxs-user-plus'></i>
            <span className="links_name">Add Employee</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bxs-calendar-event'></i>
            <span className="links_name">Holidays</span>
          </a>
        </li>
        <li className="section-title">Account Pages</li>
        <li>
          <a href="#">
            <i className='bx bxs-user'></i>
            <span className="links_name">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-log-out'></i>
            <span className="links_name">Logout</span>
          </a>
        </li>
      </ul>
      <section className="home-section">
        <div className="text">Dashboard</div>
      </section>
    </div>
  );
};

export default App;