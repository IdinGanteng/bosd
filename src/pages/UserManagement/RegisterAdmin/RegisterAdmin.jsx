import React from "react";
import { Form, Input, Modal, Radio, Button } from "antd";

const RegisterAdmin = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const modalHeader = <div className="font-bold">Buat Admin Baru</div>;

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title={modalHeader}
      width="40%"
      okText="Buat"
      okType="danger"
      closable
      // cancelText="Batal"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_new_admin"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="userName"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input the username account!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input the email account!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          autoComplete={"current-password"}
          rules={[
            {
              required: true,
              message: "Please input the password account!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="userType"
          label="Akses Role"
          className="collection-create-form_last-form-item"
          rules={[
            {
              required: true,
              message: "Please select the role account!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="1">Support</Radio>
            <Radio value="2">Admin Konten</Radio>
            <Radio value="3">Admin Keuangan</Radio>
            <Radio value="4">Manajemen</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterAdmin;
