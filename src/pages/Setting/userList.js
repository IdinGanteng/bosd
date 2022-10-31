import React from 'react'

const UserList = ({chanel}) => {

  return chanel.map(chanels=>(
   <div>
     <h1>{chanels.SMS}</h1>
   </div>
  )

  )
}

export default UserList;

 