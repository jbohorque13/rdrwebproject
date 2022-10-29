import {useParams} from 'react-router-dom';
import {useAuthContext} from 'contexts/auth';

function Dashboard() {
  const {name, toggleName} = useAuthContext()
  // Hook
  const {accessToken} = useParams();

  return (
    <div>
      Dashboard 
      {name}
      <button onClick={toggleName}> Pressed </button>
    </div>
  )
}

export default Dashboard