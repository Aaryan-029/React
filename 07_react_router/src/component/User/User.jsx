import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div>
      <p className='text-center bg-gray-700 text-white p-2 text-2xl'>User:{userid}</p>
    </div>
  )
}



export default User

