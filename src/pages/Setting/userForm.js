import { Form, Input, Button,Card } from 'antd';
import {Col, Row} from 'antd';
import { useState,useEffect } from 'react';
import {Sms} from './userList';
import { FlashSms } from './userList';
import { Simads } from './userList';
import { Mms } from './userList';
import { Whatsapp } from './userList';
import React from 'react';

const GetDataFromLS=()=>{
  const data = localStorage.getItem('chanel');
  if(data){
    return JSON.parse(data);
  }else{
    return[]
  }
}

const UserForm = () => {   
  const[chanel,setChanel]=useState(GetDataFromLS());

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
  <Row>
    <Col span={12}>
    <div>
    <h1>Harga Chanel:</h1>  
    <br/>
    <Form
     
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
    </Col>
    <Col span={12}>
     <div>
       <Card>
         <Form labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 16,
              }}
          >
          <Form.Item label='SMS'>
            {chanel.length>0&&<>
              <div> 
                <Sms chanel={chanel}/>
              </div>  
            </>}
          </Form.Item>
          <Form.Item label='Flash SMS'>
            {chanel.length>0&&<>
              <div> 
                <FlashSms chanel={chanel}/>
              </div>  
            </>} 
          </Form.Item>
          <Form.Item label='Sim Ads'>
            {chanel.length>0&&<>
              <div> 
              <Simads chanel={chanel}/>
              </div>  
            </>}
          </Form.Item>
          <Form.Item label='MMS'>
            {chanel.length>0&&<>
              <div> 
              <Mms chanel={chanel}/>
              </div>  
            </>} 
          </Form.Item>
          <Form.Item label='WhatsApp'>
            {chanel.length>0&&<>
              <div> 
              <Whatsapp chanel={chanel}/>
              </div>  
            </>} 
          </Form.Item>
        </Form>
      </Card>
    </div>
    </Col>
</Row>
  );
};
export default UserForm;