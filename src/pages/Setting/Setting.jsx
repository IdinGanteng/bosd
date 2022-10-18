
import { Form, Input, Col, Row,Card,Button } from 'antd';
import { useState } from 'react';
import React from 'react';
const Setting = () => {
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
          </Form>
          <br/>
          <Form  name="basic"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 10,
            }}
            >
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
            <Form name="basic"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 10,
            }}>
              <Form.Item label="SMS">
                <Input bordered={false} />
              </Form.Item>
              <Form.Item label="Flash SMS">
                <Input bordered={false} />
              </Form.Item>
              <Form.Item label="SIM Ads">
                <Input bordered={false} />
              </Form.Item>
              <Form.Item label="MMS">
                <Input bordered={false} />
              </Form.Item>
              <Form.Item label="Whats App">
                <Input bordered={false} />
              </Form.Item>
            </Form>
          </div>
         </Card> 
         <div style={{padding:"20px"}}>
          <Button type="primary" danger>
            Send Approval
          </Button>
          <br/>
          <br/>
          <Button danger>Cancel</Button>
         </div>
        </Col>
       </Row>
    </div>
  );
};
export default Setting;