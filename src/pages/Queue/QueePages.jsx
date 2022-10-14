import React, { useEffect, useRef, useState } from "react";
import "./index.less";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { Table, Tag, Button, Modal } from "antd";

import { data } from "./dummyData";

const { confirm } = Modal;

const QueePages = () => {
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const [orderDetail, setOrderDetail] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);

  useEffect(() => {
    setLoading(true);
    setCurrentData(data);
    setLoading(false);
  }, [currentData]);

  const handleOrderDetail = (e) => {
    setOrderDetail(true);
  };

  const handleCloseOrderDetail = () => {
    setOrderDetail(false);
    // !orderDetail;
  };

  const handleModalConfirm = () => {
    ModalConfirmComp();
    setModalConfirm(true);
  };

  const columns = [
    {
      title: "No Order",
      dataIndex: "order_id",
      key: "name",
      render: (text) => <a onClick={handleOrderDetail}>{text}</a>,
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
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status.map((stat) => {
            let color = stat.length > 5 ? "yellow" : "green";
            if (stat === "approve") {
              color = "green";
            }
            return (
              <Tag color={color} key={stat}>
                {stat.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Verifikator",
      dataIndex: "verifikator",
      key: "verifikator",
      align: "center",
    },
    {
      title: "Approved",
      key: "action",
      align: "center",
      render: (text, record) => (
        <Button onClick={handleModalConfirm}>Confirm</Button>
      ),
    },
  ];

  const ModalConfirmComp = () => {
    // console.log("test");
    confirm({
      title: "Apakah Anda Yakin menkonfirmasi pembayaran ini?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Dengan mengkonfirmasi ini Konten akan segera di teruskan untuk pengecekan",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // Render
  return (
    <div>
      <Button>Open Payment</Button>
      <Table
        loading={loading}
        columns={columns}
        dataSource={currentData}
        pagination={{ position: ["topRight"], hideOnSinglePage: true }}
        // onRow={(r) => ({
        //   onClick: () => console.log(r, "woyy"),
        // })}
      />
      <Modal
        // ref={modalRef}
        visible={orderDetail}
        title="Order Details"
        centered
        onCancel={() => handleCloseOrderDetail()}
        footer={[
          <Button type="primary" onClick={() => handleCloseOrderDetail()}>
            Close
          </Button>,
        ]}
        width={1000}
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

export default QueePages;
