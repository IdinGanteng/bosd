import React from 'react'

const UserList = ({chanel}) => {

  return chanel.map(chanels=>(
   <div>

     <h1>{chanels.SMS}</h1>
     <h1>{chanels.FlashSMS}</h1>
     <h1>{chanels.SimAds}</h1>
     <h1>{chanels.MMS}</h1>
     <h1>{chanels.WhatsApp}</h1>
     <h1>{chanels.SMS}</h1>
   </div>
  )

  )
}

export default UserList