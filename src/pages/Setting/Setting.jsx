
import { Form, Input, Col, Row,Card } from 'antd';
import { useState } from 'react';
import React from 'react';
const Setting = () => {
  const[data,setData]=useState();
  localStorage.setItem(JSON.stringify(data))
  return (
    <div>
      <h1>Harga Chanel:</h1>
       <br/>
       <Row>
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 15,
            }}
          >
          
            <Form.Item
              label="SMS"
              id='SMS'
              
            >
              <Input
              value={data?.Form}
              onChange={(e)=>{setData({...data,Form: e.target.value})}}
               />
            </Form.Item>
            <Form.Item
              label="Flash SMS"
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Sim Ads"
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="MMS"
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Whats App"
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Max-Duration"
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Max-Budget"
              
            >
              <Input />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
         <Card  
         style={{
         
         paddingLeft:"20px"
         }}>
          <div>
            
          </div>
         </Card> 
        </Col>
       </Row>
    </div>
  );
};
export default Setting;