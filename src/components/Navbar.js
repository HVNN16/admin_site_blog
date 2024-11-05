// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import CSS
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Admin Panel</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Đẩy các item về bên phải */}
            <li className="nav-item">
              <Link className="nav-link" to="/stories">Stories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link> {/* Thêm trang cài đặt */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link> {/* Thêm trang đăng xuất */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
