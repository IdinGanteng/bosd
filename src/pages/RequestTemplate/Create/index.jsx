import React from "react";
import { Input } from "antd";
import "./index.less";

const CreateNewTemplate = () => {
  return (
    <div className="wrapper-form">
      <div>
        <h3>Add New Broadcast Template</h3>
        <div>
          <label htmlFor="">Template Name</label>
          <Input placeholder="Basic usage" />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <Input placeholder="Basic usage" />
        </div>
        <div>
          <label htmlFor="">Langauge</label>
          <Input placeholder="Basic usage" />
        </div>
      </div>
      <div>Preview</div>
    </div>
  );
};

export default CreateNewTemplate;
