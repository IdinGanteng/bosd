import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Modal } from "antd";

import "./index.less";
import { data } from "./dummyData";

const ApprovePayment = () => {
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalDetailPayment, setModalDetailPayment] = useState(false);

  const viewDetailPayment = () => {
    setModalDetailPayment(true);
  };

  const columns = [
    {
      title: "No Order",
      dataIndex: "order_id",
      key: "name",
      render: (text) => <a onClick={viewDetailPayment}>{text}</a>,
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
    setCurrentData(data);
    setLoading(false);
  }, [currentData]);

  return (
    <div>
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
      <Modal
        title="Approve Payment Detail"
        visible={modalDetailPayment}
        onOk={() => setModalDetailPayment(false)}
        onCancel={() => setModalDetailPayment(false)}
      >
        <div>
          <div className="wrap-order">
            <p>No Order : </p>
            <p className="space-1">121212</p>
          </div>
          <div className="wrap-order">
            <p>Durasi : </p>
            <p className="space-1">4 hari</p>
          </div>
          <div className="wrap-order">
            <p>Harga per hari : </p>
            <p className="space-1">150.000</p>
          </div>
          <div className="wrap-order">
            <p>Total biaya boosting : </p>
            <p className="space-1">600.000</p>
          </div>
          <div className="wrap-order">
            <p>Metode Pembayaran : </p>
            <p className="space-1">Virtual Account</p>
          </div>
          <div className="wrap-order">
            <p>Tanggal pembuatan konten : </p>
            <p className="space-1">8/11/2021</p>
          </div>
          <div className="wrap-order">
            <p>Tenggat pembayaran : </p>
            <p className="space-1">9/11/2021 - 11:20</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ApprovePayment;
