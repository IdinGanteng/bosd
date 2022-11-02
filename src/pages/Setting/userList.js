import React from 'react'

 export const Sms = ({chanel}) => {

  return chanel.map(chanels=>(
   <div>
     <h1>{chanels.SMS}</h1>
   </div>
  )

  )
}




 export const FlashSms =({chanel})=>{
  return chanel.map(chanels=>(
    <div><h1>{chanels.FlashSMS}</h1></div>
  ))
 };

 export const  Simads=({chanel})=>{
  return chanel.map(chanels=>(
    <div><h1>{chanels.SimAds}</h1></div>
  ))
 };

 export const Mms =({chanel})=>{
  return chanel.map(chanels=>(
    <div><h1>{chanels.MMS}</h1></div>
  ))
 };

 export const Whatsapp =({chanel})=>{
  return chanel.map(chanels=>(
    <div><h1>{chanels.WhatsApp}</h1></div>
  ))
 };


 