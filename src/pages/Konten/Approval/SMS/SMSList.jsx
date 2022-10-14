import React, { useState, useEffect } from "react";
import { Table, Tag, Button, Modal } from "antd";
import { dataSms } from "./dummySms";
import HeaderFeature from "../../../../components/HeaderFeature/HeaderFeature";

const SMSList = () => {
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "No Order",
      dataIndex: "order_id",
      key: "name",
      // render: (text) => <a onClick={viewDetailPayment}>{text}</a>,
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
    },
    {
      title: "Waktu Bayar",
      dataIndex: "waktu_bayar",
      key: "waktu_bayar",
    },
    {
      title: "Verifikator",
      dataIndex: "verifikator",
      key: "verifikator",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setCurrentData(dataSms);
    setLoading(false);
  }, [currentData]);

  return (
    <div>
      <HeaderFeature titleHeader={"Approve SMS Merchant"} />
      <div>Filter table</div>
      <Table
        loading={loading}
        columns={columns}
        // onOk={() => setOrderDetail(false)}
        dataSource={currentData}
        pagination={{ position: ["topRight"], hideOnSinglePage: true }}
        // onRow={(r) => ({
        //   onClick: () => console.log(r, "woyy"),
        // })}
      />
    </div>
  );
};

export default SMSList;
