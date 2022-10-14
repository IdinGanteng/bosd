import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { Button, Space, Tabs } from "antd";
import FlashSMS2 from "./FlashSMS/FlashSMS2";
import MMSList from "./MMS/MMSList";
import SMSList from "./SMS/SMSList";

const { TabPane } = Tabs;

const Approval = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        type="card"
        tabBarExtraContent={
          <Button icon={<BsClipboardCheck className="mr-1" />}>Logs</Button>
        }
      >
        <TabPane tab="SMS" key="1">
          <SMSList />
        </TabPane>
        <TabPane tab="MMS" key="2">
          <MMSList />
        </TabPane>
        <TabPane tab="FlashSMS" key="3">
          <FlashSMS2 />
        </TabPane>
        <TabPane tab="WhatsApp" key="4">
          Content of card tab 4
        </TabPane>
      </Tabs>
    </>
  );
};

export default Approval;
