import React, { useState } from "react";
import { Form, Input, Button, Descriptions, Select, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GoBack from "../../../components/Button/GoBack";
import HeaderCreatePage from "../../../components/HeaderFeature/HeaderFeature";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 15 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} harus di isi!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
const CreateTemplateFlashSMS = () => {
  const history = useHistory();
  const staticTarget = "Flash SMS";

  const [target, setTarget] = useState(staticTarget);
  const [namaTemplate, setNamaTemplate] = useState("");
  const [kategori, setKategori] = useState("");
  const [kontenTemplate, setKontenTemplate] = useState("");
  // Count text area
  const [countChar, setCountChar] = useState(0);
  // State Form Value
  const [templateMMS, setTemplateMMS] = useState();

  // Form
  const onFinish = (values) => {
    console.log(values);
  };
  const onSearchKategory = (value) => {
    console.log("search:", value);
  };

  // Form Input
  const handleNameTemplate = (e) => {
    setNamaTemplate(e.target.value);
  };
  const onChangeKategory = (value) => {
    setKategori(value);
    console.log(`selected ${value}`);
  };
  const hanldeKontenTemplate = (e) => {
    setKontenTemplate(e.target.value);
    setCountChar(e.target.value.length);
  };

  const handleFormCreateTemplateMMS = () => {
    let formMMS = [namaTemplate, kategori, kontenTemplate];
    console.log(formMMS);
    setTemplateMMS(formMMS);
  };

  console.log(kontenTemplate.replace(/(?:\r\n|\r|\n)/g, "<br />"));

  return (
    <div className="mt-5">
      <div>
        <GoBack titleName={"Back"} />
        {/* <div className="text-center text-2xl">Buat Template MMS</div> */}
        <HeaderCreatePage titleHeader={"Buat Template Flash SMS"} />
      </div>
      <div className="container p-5 mt-5 flex ">
        <div className="basis-2/3	">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="templateName"
              label="Nama Template"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Masukkan nama template"
                onChange={handleNameTemplate}
              />
            </Form.Item>
            <Form.Item
              name="kategoryTemplate"
              label="Kategori Template"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                placeholder="Pilih kategori"
                optionFilterProp="children"
                onChange={onChangeKategory}
                onSearch={onSearchKategory}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="pendidikan">Pendidikan</Option>
                <Option value="elektornik">Elektronik</Option>
                <Option value="makanan">Makanan</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="templateKonten"
              label="Konten Template"
              rules={[{ required: true }]}
            >
              <Input.TextArea
                rows={7}
                placeholder="Maximal 1024 karekter"
                maxLength={1024}
                onChange={hanldeKontenTemplate}
              />
            </Form.Item>
            <Form.Item className="flex justify-end">
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleFormCreateTemplateMMS}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="basis-1/3">
          <Descriptions layout="vertical" bordered>
            <Descriptions.Item label="Target">
              {target ? target : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Nama Template">
              {namaTemplate ? namaTemplate : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Kategori">
              {kategori ? kategori : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Konten Template">
              Jumlah karakter : {countChar}
              <br />
              <br />
              {kontenTemplate
                ? kontenTemplate
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque nulla et laudantium, reiciendis explicabo quaerat accusamus quis consectetur consequuntur reprehenderit beatae voluptas atque debitis, nemo laborum aliquam necessitatibus labore?"}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplateFlashSMS;
