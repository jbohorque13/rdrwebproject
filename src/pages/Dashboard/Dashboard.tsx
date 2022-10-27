import React from 'react'
import { useAuthContext } from '../../contexts/auth';

function Dashboard() {
  const {name, toggleName} = useAuthContext()
  return (
    <div>
      Dashboard {name}
      <button onClick={toggleName}> Pressed </button>
    </div>
  )
}

export default Dashboard