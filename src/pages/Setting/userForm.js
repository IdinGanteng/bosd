import { Form, Input, Button,Card } from 'antd';
import { useState,useEffect } from 'react';
import React from 'react';
const UserForm = () => {   
  const[chanel,setChanel]=useState([]);

  const [SMS,setSMS]=useState('');
  const[FlashSMS,setFlashSMS]=useState('');
  const[SimAds,setSimAds]=useState('');
  const[MMS,setMMS]=useState('');
  const[WhatsApp,setWhatsApp]=useState('');
  const[MaxDuration,setMaxDuration]=useState('');
  const[MaxBudget,setMaxBudget]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    let chanels={
      SMS,FlashSMS,SimAds,MMS,
      WhatsApp,MaxDuration,MaxBudget
    }
    setChanel([...chanel,chanels]);
    setSMS('');
    setFlashSMS('');
    setSimAds('');
    setMMS('');
    setWhatsApp('');
    setMaxDuration('');
    setMaxBudget('');
  }

  useEffect(()=>{
    localStorage.setItem('chanel',JSON.stringify(chanel));
  },[chanel])
  return (
   
    <div>
    <h1>Harga Chanel:</h1>  
    <br/>
    <Form
      onFinish={handleSubmit}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item
       
        label="SMS"
        name="SMS"
      >
        <Input onChange={(e)=>setSMS(e.target.value)} value={SMS}/>
      </Form.Item>

      <Form.Item
        label="Flash SMS"
        name="Flash SMS"

      >
        <Input onChange={(e)=>setFlashSMS(e.target.value)} value={FlashSMS}/>
      </Form.Item>
      <Form.Item
        label="Sim Ads"
        name="Sim Ads"

      >
        <Input onChange={(e)=>setSimAds(e.target.value)} value={SimAds}/>
      </Form.Item>
      <Form.Item
        label="MMS"
        name="MMS"

      >
        <Input onChange={(e)=>setMMS(e.target.value)} value={MMS}/>
      </Form.Item>
      <Form.Item
        label="WhatsApp"
        name="WhatsApp"

      >
        <Input onChange={(e)=>setWhatsApp(e.target.value)} value={WhatsApp}/>
      </Form.Item>

      <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 6,
      }}
    >
           <Form.Item
        label="Max-Duration"
        name="Max-Duration"

      >
        <Input onChange={(e)=>setMaxDuration(e.target.value)} value={MaxDuration}/>
      </Form.Item>
      <Form.Item
        label="Max-Budget"
        name="Max-Budget"

      >
        <Input onChange={(e)=>setMaxBudget(e.target.value)} value={MaxBudget}/>
      </Form.Item>
    </Form>
    </Form>    
      <Button onClick={handleSubmit}>Send Approval</Button>
    </div>
  );
};
export default UserForm;