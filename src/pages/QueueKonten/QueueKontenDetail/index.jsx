import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import "./style.less";
import { Card, Row, Col, Modal, Input, Button, Spin } from "antd";
import dummyImage from "../../../assets/placeholderImage.png";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import axios from "axios";

const { TextArea } = Input;
const { confirm } = Modal;

function QueueKontenDetail() {
  const [detailKonten, setDetailKonten] = useState({});
  const [messageKonten, setMessageKonten] = useState();
  const [modalReject, setModalReject] = useState(false);

  const [loading, setLoading] = useState(true);
  const [spinLoad, setSpinLoad] = useState(false)

  let history = useHistory();
  let location = useLocation();
  const goBack = () => {
    history.goBack();
  };

  const opneReject = () => {
    console.log("wkwkw");
    setModalReject(true);
  };

  useEffect(() => {
    setDetailKonten(location.state.data);

    const filterMessage = location.state.data.contents
      ?.map((x) => x)
      .slice(0, 1);
    if (location.state !== undefined) {
      const finalMessage = Object.assign({}, ...filterMessage);
      setMessageKonten(finalMessage);
    }

    setTimeout(() => setLoading(false), 6000);
  }, []);

  console.log(messageKonten, "jkjaskdj");
  console.log(detailKonten, "detail");

  function handleApprove() {
    // let secondsToGo = 3;
    changeStatusApprove();
    const modal = Modal.success({
      title: "Konten berhasil di Approve !",
      content: `Konten yang di Aprrove akan langsung terkirim oleh pengguna.`,
    });
  }

  function handleTolak() {
    confirm({
      title: "Apakah anda yakin ingin menolak konten ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Konten yang Ditolak akan dikembalikan untuk direview ulang!",
      centered: true,
      onOk() {
        console.log("OK");
        changeStatusReject();
        history.push("/queue/konten");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  const changeStatusApprove = () => {
    const statusApprove = { status: "APPROVE" };
    const id = detailKonten.id;

    console.log(statusApprove, id);
    try {
      const res = axios
        .put(
          `https://api-gateway.dev.103.81.246.51.sslip.io/order/approve/${id}`,
          statusApprove
        )
        .then((response) => console.log("success"));
      console.log("res", res);
      history.push("/queue/konten");
      // return res;
    } catch (error) {
      console.log(error);
    }
  };
  const changeStatusReject = () => {
    const statusApprove = { status: "REJECT" };
    const id = detailKonten.id;

    console.log(statusApprove, id);
    try {
      const res = axios
        .put(
          `https://api-gateway.dev.103.81.246.51.sslip.io/order/approve/${id}`,
          statusApprove
        )
        .then((response) => console.log("success"));
      console.log("res", res);
      // return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* {loading && <div>Loading ...</div>} */}
      <div className="container">
        <div className="">
          <div>
            <Button onClick={goBack} icon={<LeftOutlined />}>
              Back
            </Button>
          </div>
        </div>
        <div className="konten">
          {detailKonten ? (
            <Row>
              <Col
                span={12}
                style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}
              >
                <Card title="Message Content" style={{}}>
                  <div>
                    <div style={{ paddingBottom: "1rem" }}>
                      {messageKonten?.image == null ? (
                        ""
                      ) : (
                        <img src={messageKonten?.image} alt="Image" />
                      )}
                      {/* {messageKonten ? (
                        <img src={messageKonten?.image} alt="Image" />
                      ) : (
                        <img src={dummyImage} alt="Image" />
                      )} */}
                    </div>
                    <p>{messageKonten?.content}</p>
                  </div>
                </Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingTop: "1.5rem",
                  }}
                >
                  {/* <Button
                    style={{ marginRight: "0.5rem" }}
                    size="large"
                    key="approve"
                    // onClick={() => setModalKonten(false)}
                  >
                    Approve
                  </Button> */}
                  <Button
                    style={{ marginRight: "0.5rem" }}
                    size="large"
                    key="approve"
                    onClick={handleApprove}
                  >
                    Approve
                  </Button>
                  ,
                  <Button
                    size="large"
                    key="tolak"
                    type="primary"
                    onClick={handleTolak}
                  >
                    Tolak
                  </Button>
                </div>
              </Col>
              <Col style={{ paddingLeft: "2rem" }} span={12}>
                <div style={{ display: "flex" }}>
                  <div style={{}}>
                    <h3 style={{ paddingRight: "0.5rem" }}>Title </h3>
                    <h3 style={{ paddingRight: "0.5rem" }}>Nomor Order </h3>
                    <h3 style={{ paddingRight: "0.5rem" }}>Platform </h3>
                  </div>
                  <div style={{}}>
                    <p>: {messageKonten ? messageKonten.title : ""}</p>
                    <p>: {detailKonten ? detailKonten.referenceNo : ""}</p>
                    <p>: {detailKonten ? detailKonten.goodsNm : ""}</p>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal
        visible={modalReject}
        width={700}
        title="Apakah Anda yakin ingin menolak konten ?"
        // onOk={!modalKonten}
        closable={true}
        maskClosable={false}
        onCancel={() => setModalReject(false)}
        // confirmLoading={confirmLoading}
        footer={[
          <Button type="primary" key="back">
            {/* <Button type="primary" key="back" onClick={sendDescReject}> */}
            Tolak
          </Button>,
        ]}
      ></Modal>
      {/* <Modal
        visible={modalReject}
        width={700}
        title="Isikan alasan penolakan konten!"
        // onOk={!modalKonten}
        closable={true}
        maskClosable={false}
        onCancel={() => setModalReject(false)}
        // confirmLoading={confirmLoading}
        footer={[
          <Button type="primary" key="back">
            <Button type="primary" key="back" onClick={sendDescReject}>
            Kirim
          </Button>,
        ]}
      >
        <div className="style-modal">
          <div className="modal-desc">
            <div>
              <TextArea
                placeholder="Masukkan alasan"
                allowClear
                // onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default QueueKontenDetail;
