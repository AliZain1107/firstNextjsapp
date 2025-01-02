//Till now this is a server component 
import React from 'react'


const Users = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

  return (
    <div className='min-h-[80vh] grid grid-cols-1 gap-2  justify-center items-center py-8 '>
      <h2>This contains all the users ......!</h2>
      {users.map(user=>{
        return <div className=' border-b-2 border-gray-700 flex flex-col justify-center items-center ' key={user.id}>
                <h2>Name: {user.name}</h2>
                {/* <p>Email: {user.email}</p>
                <div>
                   Address:  {user.address.city}
                </div>
                <p>Phone: {user.phone}</p>
                <p>Company Website: {user.website}</p> */}
            </div>
      })}
    </div>
  )
}

export default Users
