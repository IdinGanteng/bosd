import { useEffect, useState, useRef } from "react";
// import { useHistory } from "react-router-dom";
import { Table, Tag, Button, Modal, Input, Spin } from "antd";
import { ClockCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import "./index.less";
import dummyImage from "../../assets/top-right-pink-bg.png";

import axios from "axios";

// Data
import { dummyKonten } from "./dummyData";
import moment from "moment";
// import { dummyDetailKonten } from "./dummyData";

// Component
const { TextArea } = Input;

function QueueKonten() {
  const ref = useRef();
  // let history = useHistory();

  const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const [modalKonten, setModalKonten] = useState(false);
  const [dummyKontenDetail, setKontenDetail] = useState({});
  const [modalReject, setModalReject] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [getOrders, setGetOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    setCurrentData(dummyKonten);
    setLoading(false);

    // GET API ALL ORDER
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get(`https://api-gateway.dev.103.81.246.51.sslip.io/order/list`, {
            // headers: {
            //   "Content-Type": "application/json",
            //   "Access-Control-Allow-Origin": "*",
            // },
          })
          .then((res) => {
            const orders = res.data.data.filter((x) => x.status == "ONREVIEW");
            console.log(orders);
            setGetOrders(orders);
            setLoading(false);
          });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [currentData]);

  // Action handle
  const showDetailKonten = (data) => {
    // setKontenDetail(r);
    // setModalKonten(true);
    // console.log(data, "data parrent");
    // history.push({
    //   pathname: `/queue/konten/${data.referenceNo}`,
    //   state: { data },
    // });
  };

  const opneReject = () => {
    setModalReject(true);
  };
  const sendDescReject = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalReject(false);
      setModalKonten(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleApprove = () => {
    setModalKonten(true);
  };

  // Change Colums
  const columns = [
    {
      title: "Order Reference",
      dataIndex: "referenceNo",
      key: "referenceNo",
      render: (text, i) => <a key={i}>{text}</a>,
    },
    {
      title: "Template Name",
      dataIndex: "goodsNm",
      key: "goodsNm",
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Review Date",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (updated_at) => moment(updated_at).format("MMMM Do YYYY, h:mm a"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (stat, index) => (
        <div key={index}>
          <Tag color="gold">{stat.toUpperCase()}</Tag>
          {/* <span>{icon ? icon : null}</span> */}
          <span>
            <ClockCircleOutlined />
          </span>{" "}
        </div>
      ),
    },
    // {
    //   title: "Review Status",
    //   key: "reviewStatus",
    //   dataIndex: "reviewStatus",
    //   render: (reviewStatus) => (
    //     <>
    //       {reviewStatus.map((stat, index) => {
    //         let icon = <ClockCircleOutlined />;
    //         let color = stat.length > 1 ? "yellow" : "green";
    //         if (stat === "baru") {
    //           color = "green";
    //           icon = null;
    //         }
    //         return (
    //           <div key={index}>
    //             <Tag color={color}>{stat.toUpperCase()}</Tag>
    //             <span>{icon ? icon : null}</span>
    //           </div>
    //         );
    //       })}
    //     </>
    //   ),
    // },
  ];
  return (
    <div>
      Test
      {/* {getOrders.map((x) => x.duration)} */}
      <Table
        loading={{
          indicator: <Spin indicator={loadingIcon} size="large" />,
          spinning: loading,
        }}
        columns={columns}
        dataSource={getOrders || []}
        pagination={{ position: ["topRight"], hideOnSinglePage: true }}
        rowKey={(row) => row.id}
        onRow={(data) => ({
          onClick: () => showDetailKonten(data),
        })}
      />
      {/* <Modal
        data={dummyKontenDetail}
        ref={ref}
        visible={modalKonten}
        width={1300}
        title="Approve Konten"
        onOk={!modalKonten}
        closable={true}
        maskClosable={false}
        onCancel={() => setModalKonten(false)}
        footer={[
          <Button
            type="primary"
            key="approve"
            onClick={() => setModalKonten(false)}
          >
            Approve
          </Button>,
          <Button key="tolak" onClick={opneReject}>
            Tolak
          </Button>,
        ]}
      >
        <div className="style-modal">
          <div className="modal-image">
            {dummyKontenDetail ? (
              <img src={dummyKontenDetail.contents[0].image} alt="Image" />
            ) : (
              <img src={dummyImage} alt="Image" />
            )}
          </div>
          <div className="modal-desc">
            <div>Content :</div>
            <div>
              {dummyKontenDetail ?
              <div>
                {dummyKontenDetail.contents[0].content}
              </div>
              : ""
              }
            </div>
          </div>
        </div>
      </Modal> */}
      {/* Reject Modal */}
      <Modal
        visible={modalReject}
        width={700}
        title="Isikan Alasan Penolakan Konten!"
        onOk={!modalKonten}
        closable={true}
        maskClosable={false}
        onCancel={() => setModalReject(false)}
        confirmLoading={confirmLoading}
        footer={[
          <Button type="primary" key="back" onClick={sendDescReject}>
            Kirim
          </Button>,
        ]}
      >
        <div className="style-modal">
          <div></div>
          <div className="modal-desc">
            <div>
              <TextArea
                placeholder="textarea with clear icon"
                allowClear
                // onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default QueueKonten;
