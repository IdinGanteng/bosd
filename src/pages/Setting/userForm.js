import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import React from 'react';
const UserForm = () => {
    const [chanel,setChanel]=useState({
        SMS:"",
        FlashSMS:"",
        SimAds:"",
        MMS:"",
        WhatsApp:"",
        MaxDuration:"",
        MaxBudged:"",
    });
     
    // const handleChange = (event) => {
    //     setChanel({ ...chanel, [event.target.chanel]: event.target.value });
           
     
    //   };
    const handleSubmit = (event)=>{
      event.preventDefault(chanel)
      localStorage.setItem('user',JSON.stringify(chanel));
      // console.log(chanel)
    }   
  return (
   
    <div>
    <h1>Harga Chanel:</h1>  
    <br/>
    <Form
      // onFinish={handleSubmit}
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
        <Input 
        onChange={(event)=>setChanel({...chanel, SMS:event.target.value})}
        />
      </Form.Item>

      <Form.Item
        label="Flash SMS"
        name="Flash SMS"

      >
        <Input 
        onChange={(event)=>setChanel({...chanel, FlashSMS:event.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Sim Ads"
        name="Sim Ads"

      >
        <Input
        onChange={(event)=>setChanel({...chanel, SimAds:event.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="MMS"
        name="MMS"

      >
        <Input
        onChange={(event)=>setChanel({...chanel, MMS:event.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="WhatsApp"
        name="WhatsApp"

      >
        <Input
        onChange={(event)=>setChanel({...chanel, WhatsApp:event.target.value})} 
        />
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
        <Input
        onChange={(event)=>setChanel({...chanel, MaxDuration:event.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Max-Budged"
        name="Max-Budged"

      >
        <Input 
        onChange={(event)=>setChanel({...chanel, MaxBudged:event.target.value})}
        />
      </Form.Item>
    </Form>
    </Form>
      <Button onClick={handleSubmit}>Send Approval</Button>
    </div>
  );
};
export default UserForm;