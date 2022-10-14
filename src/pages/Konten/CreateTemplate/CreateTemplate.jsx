import React from "react";
import { Tabs } from "antd";
import CTempFlashSMS from "./FlashSMS/CTempFlashSMS";

const { TabPane } = Tabs;

const CreateTemplate = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="SMS" key="1">
          {/* <SMSList /> */}
        </TabPane>
        <TabPane tab="MMS" key="2">
          {/* <MMSList /> */}
        </TabPane>
        <TabPane tab="FlashSMS" key="3">
          <CTempFlashSMS />
        </TabPane>
        <TabPane tab="WhatsApp" key="4">
          Content of card tab 4
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CreateTemplate;
