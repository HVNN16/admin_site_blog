
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import StoryAdmin from './pages/StoryAdmin';
// Import other admin pages if you have them
// import UserAdmin from './pages/UserAdmin';
// import BlogAdmin from './pages/BlogAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <center>
          <h1>Admin Dashboard</h1>
        </center>
        <div className="d-flex justify-content-between">
          <div className="btn-group" role="group" aria-label="Admin Navigation">
            {/* Uncomment below links when you have other pages */}
            {/* <Link to="/users" className="btn btn-secondary">Manage Users</Link>
            <Link to="/blogs" className="btn btn-secondary">Manage Blogs</Link> */}
          </div>
        </div>
        <Routes>
          <Route path="/stories" element={<StoryAdmin />} />
          {/* Add routes for other admin pages */}
          {/* <Route path="/users" element={<UserAdmin />} />
          <Route path="/blogs" element={<BlogAdmin />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
