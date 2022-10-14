import React from "react";
import { Button, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
// import { useHistory } from "react-router-dom";

const GoBack = ({ titleName }) => {
  // const history = useHistory();
  return (
    <div>
      <Tooltip title="Go back" className="ml-5">
        <Button
        // onClick={history.goBack}
        // // shape="circle"
        // icon={<ArrowLeftOutlined />}
        >
          {titleName}
        </Button>
      </Tooltip>
    </div>
  );
};

export default GoBack;
