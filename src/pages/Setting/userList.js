import React from 'react'
import { useEffect,useState } from 'react';
import { Input,Card,Form } from 'antd';

const UserList = () => {

  return (
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
           <Input bordered={false} />
          </Form.Item>
          <Form.Item label='Flash SMS'>
           <Input bordered={false} />
          </Form.Item>
          <Form.Item label='Sim Ads'>
           <Input bordered={false} />
          </Form.Item>
          <Form.Item label='MMS'>
           <Input bordered={false} />
          </Form.Item>
          <Form.Item label='WhatsApp'>
           <Input bordered={false} />
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default UserList