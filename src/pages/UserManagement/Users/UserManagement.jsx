import { Table, Button } from "antd";
import React, { useState, useEffect } from "react";
// import HeaderFeature from "../../components/HeaderFeature/HeaderFeature";
// import RegisterAdmin from "../RegisterAdmin/RegisterAdmin";
import RegisterAdmin from "../RegisterAdmin/RegisterAdmin";
import { dataUser } from "./dummyUser";
import { PlusOutlined } from "@ant-design/icons";

const UserManagement = () => {
  const [currentData, setCurrentData] = useState([]);
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  useEffect(() => {
    setCurrentData(dataUser);
  }, [currentData]);

  const columns = [
    {
      title: "Nama akun",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Akses role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Akun dibuat",
      dataIndex: "createdOn",
      key: "createdOn",
      width: "15%",
      // ...getColumnProps("date", "tanggal"),
    },
    {
      title: "Aktivitas Terakhir",
      dataIndex: "lastActivity",
      key: "lastActivity",
    },
  ];

  return (
    <div className="p-5">
      <div className="mb-5">
        {/* <HeaderFeature titleHeader={"Admin Management"} /> */}
      </div>
      <div className="mb-5">
        <Button
          danger
          icon={<PlusOutlined />}
          onClick={() => {
            setVisible(true);
          }}
        >
          Admin User
        </Button>
        <RegisterAdmin
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={currentData}
          bordered={true}
          size="small"
        />
      </div>
    </div>
  );
};

export default UserManagement;
