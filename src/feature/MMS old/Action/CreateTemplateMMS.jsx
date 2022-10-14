import React, { useState } from "react";
import { Form, Input, Button, Descriptions, Select, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GoBack from "../../../components/Button/GoBack";

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
const CreateTemplateMMS = () => {
  const history = useHistory();
  const staticPlatform = "MMS";
  const staticCharLmt = 1024;

  const [platform, setPlatform] = useState(staticPlatform);
  const [namaTemplate, setNamaTemplate] = useState("");
  const [kategori, setKategori] = useState("");
  const [kontenTemplate, setKontenTemplate] = useState("");
  // Count text area
  const [countChar, setCountChar] = useState(staticCharLmt);
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

  const countCharLeft = (txtArea) => {
    let charLeft = staticCharLmt - txtArea;
    // console.log(staticCharLmt - txtArea, "coountt");
    setCountChar(charLeft);
  };

  const hanldeKontenTemplate = (e) => {
    let txtArea = e.target.value.length;
    let konten = e.target.value.replace(/(?:\r\n|\r|\n)/g, "\\n");
    // let konten = e.target.value;
    // console.log(konten);

    setKontenTemplate(e.target.value);
    countCharLeft(txtArea);
  };

  const handleFormCreateTemplateMMS = () => {
    let formMMS = [namaTemplate, kategori, kontenTemplate];
    // console.log(formMMS);
    setTemplateMMS(formMMS);
  };

  // console.log(kontenTemplate.replace(/(?:\r\n|\r|\n)/g, "<br />"));

  return (
    <div className="mt-5">
      <div>
        <GoBack titleName={"Back"} />
        <div className="text-center text-2xl">Buat Template MMS</div>
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
                placeholder={`Maximal ${staticCharLmt} karekter`}
                maxLength={staticCharLmt}
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
            <Descriptions.Item label="Platform">
              {platform ? platform : ""}
            </Descriptions.Item>
            <Descriptions.Item label="Nama Template">
              {namaTemplate ? namaTemplate : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Kategori">
              {kategori ? kategori : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Konten Template">
              Sisa jumlah karakter : {countChar}
              <br />
              <br />
              <div
                style={{ whiteSpace: "pre-line" }}
                className="max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
              >
                <>
                  {kontenTemplate
                    ? kontenTemplate.replace(/(?:\r\n|\r|\n)/g, "\n")
                    : ""}
                </>
              </div>
            </Descriptions.Item>
          </Descriptions>
        </div>
        {/* <div className="basis-1/3 border border-slate-200		">
          <div className="">
            <div
              className=" w-full bg-amber-400 h-16 pt-2 text-white flex justify-between shadow-md"
              // style="top:0px; overscroll-behavior: none;"
              style={{ top: "12rem" }}
            >
              <div className="ml-3 my-3 text-green-100 font-bold text-lg tracking-wide">
                Indosat Hutchison
              </div>
              <div className="icon-dots-vertical w-8 h-8 mt-2 mr-2 ">
                <MenuOutlined
                  // rotate={90}
                  style={{ color: "#fff", fontSize: "1.5rem" }}
                />
              </div>
             
            </div>

            <div className="mt-10 mb-10">
              <div className="clearfix">
                <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                  this is a basic mobile chat layout, build with tailwind css
                </div>
              </div>

              <div className="clearfix">
                <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                  It will be used for a full tutorial about building a chat app
                  with vue, tailwind and firebase.
                </div>
              </div>
              <div className="clearfix">
                <div className="bg-amber-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                  check my twitter to see when it will be released.
                </div>
              </div>
            </div>
          </div>

          <div
            className=" w-full flex justify-between bg-amber-100"
            // style={{ bottom: "14rem"}}
            // style="bottom: 0px;"
          >
            <textarea
              className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
              rows="1"
              placeholder="Message..."
              disabled={true}
              // style="outline: none;"
            ></textarea>
          </div>
        </div> */}
      </div>
    </div>
  );
};;;

export default CreateTemplateMMS;
