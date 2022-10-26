import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
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
          <li>
            <Link to="/person-to-group">
              Person to group
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar