import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<div> Home </div>} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
      </Routes>
    </div>
  )
}

export default App