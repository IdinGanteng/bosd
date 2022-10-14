import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.less";
import {
  ExclamationCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { Table, Tag, Button, Modal, Tooltip } from "antd";

import { data } from "./dummyData";

const { confirm } = Modal;

const RequestNewTemplate = () => {
  const history = useHistory();
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

  const handleNewRequestPage = () => {
    history.push("/template/request/new");
  };

  const columns = [
    {
      title: "Template Name",
      dataIndex: "template_name",
      key: "template_name",
      // render: (text) => <a onClick={handleOrderDetail}>{text}</a>,
    },
    {
      title: "UUID",
      dataIndex: "uuid",
      key: "uuid",
      ellipsis: {
        showTitle: false,
      },
      render: (uuid) => (
        <Tooltip placement="topLeft" title={uuid}>
          {uuid}
        </Tooltip>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Template Content",
      dataIndex: "template_content",
      key: "template_content",
      width: "25%",
      ellipsis: {
        showTitle: false,
      },
      render: (content) => (
        <Tooltip placement="topLeft" title={content}>
          {content}
        </Tooltip>
      ),
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Media",
      dataIndex: "media",
      key: "media",
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
    // {
    //   title: "",
    //   dataIndex: "verifikator",
    //   key: "verifikator",
    //   align: "center",
    // },
    {
      title: "Action",
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
      <Button onClick={handleNewRequestPage}>
        <PlusCircleOutlined />
        Add New Template
      </Button>
      <Table
        loading={loading}
        columns={columns}
        dataSource={currentData}
        size={"middle"}
        pagination={{
          position: ["topRight"],
          hideOnSinglePage: true,
          size: "middle",
        }}
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

export default RequestNewTemplate;
