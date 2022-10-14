
import { Form, Input, Col, Row } from 'antd';
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
              span: 20,
            }}
          >
          
            <Form.Item
              label="SMS"
              
            >
              <Input />
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
         <Input placeholder="Borderless" bordered={false} />
        </Col>
       </Row>
    </div>
  );
};
export default Setting;