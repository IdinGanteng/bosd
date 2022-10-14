import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Table, Space, Tooltip, Button } from "antd";
import { EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import { data } from "./dummyFlashSms";
import HeaderFeature from "../../../../components/HeaderFeature/HeaderFeature";

const FlashSMS2 = () => {
  // const history = useHistory();
  const pathCreateTemplate = "/flash-sms/create";
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data);
  }, [currentData]);

  const createTemplate = () => {
    // history.push(pathCreateTemplate);
    // history.push("/mms/create");
  };

  const columns = [
    {
      title: "Nama template",
      dataIndex: "mmsNameTemplate",
      key: "mmsNameTemplate",
      width: 150,
    },
    {
      title: "Tipe",
      dataIndex: "mmsTypeTemplate",
      key: "mmsTypeTemplate",
      width: 150,
      // width: "7%",
    },
    {
      title: "Kategory Template",
      dataIndex: "mmsCategoryTemplate",
      key: "mmsCategoryTemplate",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },

    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    {
      title: "Creator Template",
      dataIndex: "mmsCreatorAdminName",
      key: "mmsCreatorAdminName",
      width: 150,
    },
    // {
    //   title: "Konten Template",
    //   dataIndex: "kontenTemplate",
    //   key: "kontenTemplate",
    //   // width: "40%",
    //   ellipsis: {
    //     showTitle: false,
    //   },
    //   render: (kontenTemplate) => (
    //     <Tooltip placement="topLeft" title={kontenTemplate}>
    //       {kontenTemplate}
    //       {/* test */}
    //     </Tooltip>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      align: "center",
      fixed: "right",
      width: 150,
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
    <div>
      <div className="mb-5">
        <HeaderFeature titleHeader={"Approve FlashSMS Merchant"} />
      </div>
      <div>
        {/* <div className="text-right mr-5 mb-5">
          <Tooltip title="Buat Template Flash SMS">
            <Button onClick={createTemplate} type="primary" size="middle">
              <PlusOutlined />
              <span>Buat Template</span>
            </Button>
          </Tooltip>
        </div> */}
        <Table
          columns={columns}
          dataSource={currentData}
          bordered={true}
          scroll={{
            x: 1500,
            // y: 1500,
          }}
        />
      </div>
    </div>
  );
};

export default FlashSMS2;
