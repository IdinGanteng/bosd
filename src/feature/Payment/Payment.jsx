import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Space, Tooltip, Button } from "antd";
import { EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
// import ButtonAdd from "../../components/Button/ButtonAdd";
import HeaderFeature from "../../components/HeaderFeature/HeaderFeature";

import { data } from "./dummyData";

function Payment() {
  const history = useHistory();
  const pathCreateTemplate = "/mms/create";
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
      title: "Nomor Order",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Name Merchant",
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      title: "Kategory Template",
      dataIndex: "mmsCategoryTemplate",
      key: "mmsCategoryTemplate",
    },
    {
      title: "Tanggal/Waktu",
      dataIndex: "date",
      key: "date",
      width: "15%",
      // ...getColumnProps("date", "tanggal"),
    },
    {
      title: "Total bayar",
      dataIndex: "totalPayment",
      key: "totalPayment",
      render: (totalPayment) => (
        <div>
          Rp.
          {totalPayment}
        </div>
      ),
    },
    // {
    //   title: "Konten Template",
    //   dataIndex: "kontenTemplate",
    //   key: "kontenTemplate",
    //   width: "40%",
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
    // {
    //   title: "Action",
    //   key: "action",
    //   align: "center",
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>
    //         <EyeOutlined />
    //       </a>
    //       <span>|</span>
    //       <a>
    //         <DeleteOutlined />
    //       </a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <div className="p-5">
      <div className="mb-5">
        <HeaderFeature titleHeader={"Pembayaran"} />
      </div>
      <div>
        <Table columns={columns} dataSource={currentData} bordered={true} />
      </div>
    </div>
  );
}
export default Payment;
