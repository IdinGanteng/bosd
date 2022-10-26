import React from 'react'
import { Col,Row } from 'antd'
import UserForm from './userForm'
import UserList from './userList'

const Setting = () => {
  return (
    <div>
      <Row>
        <Col span={12}><UserForm/></Col>
        <Col span={12}><UserList/></Col>
      </Row> 
    </div>
  )
}

export default Setting