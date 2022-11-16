import React from 'react'
import { useParams } from 'react-router-dom'
const Home = () => {
  const { id_token } = useParams();
  console.log('id_token ', id_token);

  return (
    <div>Inicio</div>
  )
}

export default Home