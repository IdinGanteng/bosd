import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Space, Tooltip, Button } from "antd";
import { EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import { data } from "./dummyData";

const FlashSMS = () => {
  const history = useHistory();
  const pathCreateTemplate = "/flash-sms/create";
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data);
  }, [currentData]);

  const createTemplate = () => {
    history.push(pathCreateTemplate);
    // history.push("/mms/create");
  };

  const columns = [
    {
      title: "Nama template",
      dataIndex: "mmsNameTemplate",
      key: "mmsNameTemplate",
    },
    {
      title: "Tipe",
      dataIndex: "mmsTypeTemplate",
      key: "mmsTypeTemplate",
      width: "7%",
    },
    {
      title: "Kategory Template",
      dataIndex: "mmsCategoryTemplate",
      key: "mmsCategoryTemplate",
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
    },
    {
      title: "Konten Template",
      dataIndex: "kontenTemplate",
      key: "kontenTemplate",
      width: "40%",
      ellipsis: {
        showTitle: false,
      },
      render: (kontenTemplate) => (
        <Tooltip placement="topLeft" title={kontenTemplate}>
          {kontenTemplate}
          {/* test */}
        </Tooltip>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (text, record) => (
        <Space size="middle">
          <a>
            <EyeOutlined />
          </a>
          <span>|</span>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div className="p-5">
      <div>
        <div className="text-right mr-5 mb-5">
          <Tooltip title="Buat Template Flash SMS">
            <Button onClick={createTemplate} type="primary" size="middle">
              <PlusOutlined />
              <span>Buat Template</span>
            </Button>
          </Tooltip>
        </div>
        <Table columns={columns} dataSource={currentData} bordered={true} />
      </div>
    </div>
  );
};

export default FlashSMS;
