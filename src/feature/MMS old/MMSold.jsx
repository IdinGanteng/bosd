import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Space, Tooltip, Button, Modal, Descriptions } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
// import ButtonAdd from "../../components/Button/ButtonAdd";

import { data } from "./dummyData";

function MMS() {
  const history = useHistory();
  const pathCreateTemplate = "/mms/create";
  const [currentData, setCurrentData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataModal, setDataModal] = useState({});

  // Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setCurrentData(data);
  }, [currentData]);

  const createTemplate = () => {
    history.push(pathCreateTemplate);
    // history.push("/mms/create");
  };

  const handleDetail = (record) => {
    console.log(record, "id nih boss");
    showModal();
    setDataModal(record);
  };

  // Action Handle
  const handleEditMMS = (record) => {
    const id = record.id;
    history.push({ pathname: `/mms/edit/${id}`, state: { data: record } });
    console.log(record.id, "id");
  };

  const columns = [
    {
      title: "ID Template",
      dataIndex: "templateId",
      key: "templateId",
    },
    {
      title: "Nama template",
      dataIndex: "mmsNameTemplate",
      key: "mmsNameTemplate",
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
      render: (item, record) => (
        <Space size="middle">
          <Tooltip title="view">
            <a
              onClick={(e) => {
                handleDetail(record);
              }}
            >
              <EyeOutlined />
            </a>
          </Tooltip>
          <span>|</span>
          <Tooltip title="edit">
            <button onClick={() => handleEditMMS(record)}>
              <a>
                <EditOutlined />
              </a>
            </button>
          </Tooltip>
          <span>|</span>
          <Tooltip title="delete">
            <a>
              <DeleteOutlined />
            </a>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-5">
      <div>
        <div className="text-right mr-5 mb-5">
          <Tooltip title="Buat Template MMS">
            <Button onClick={createTemplate} type="primary" size="middle">
              <PlusOutlined />
              <span>Buat Template</span>
            </Button>
          </Tooltip>
        </div>
        <Table columns={columns} dataSource={currentData} bordered={true} />
      </div>
      <Modal
        title={dataModal?.templateId}
        visible={isModalVisible}
        data={dataModal}
        onOk={handleOk}
        onCancel={handleCancel}
        // cancelText="Tutup"
        footer={[
          <Button key="close" onClick={handleCancel}>
            Tutup
          </Button>,
        ]}
      >
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Platform">
            {dataModal?.platform}
          </Descriptions.Item>
          <Descriptions.Item label="Nama Template">
            {dataModal?.mmsNameTemplate}
          </Descriptions.Item>
          <Descriptions.Item label="Kategori">
            {dataModal?.mmsCategoryTemplate}
          </Descriptions.Item>
          <Descriptions.Item label="Konten Template">
            {/* Sisa jumlah karakter : {countChar} */}
            <div
              style={{ whiteSpace: "pre-line" }}
              className="max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
            >
              <>
                {dataModal?.kontenTemplate
                  ? dataModal?.kontenTemplate.replace(/(?:\r\n|\r|\n)/g, "\n")
                  : ""}
              </>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </div>
  );
}

export default MMS;
