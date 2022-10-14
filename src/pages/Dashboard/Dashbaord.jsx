import React from "react";
import UnderConstruct from "../../assets/work-in-progress.png";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic, Button } from "antd";

const Dashboard = () => {
  return (
    <div>
      <div style={{ padding: "30px", background: "#ececec" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="p-10">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
            />
            <Button
              style={{
                marginTop: 16,
              }}
              type="primary"
            >
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic
              title="Active Users"
              value={112893}
              loading
              valueStyle={{ color: "red" }}
            />
          </Col>
        </Row>
      </div>
      <div className="p-10" style={{ padding: "30px", background: "#f8ffbd" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
