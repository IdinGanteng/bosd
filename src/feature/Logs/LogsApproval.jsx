import { useState, useEffect, useRef } from "react";
import HeaderFeature from "../../components/HeaderFeature/HeaderFeature";
import Highlighter from "react-highlight-words";
import { Table, Pagination, Tooltip, Button, Tag, Input } from "antd";
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { data } from "./dummyData";

const LogsApproval = () => {
  const refInput = useRef("");
  const refDropdown = useRef(null);
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentData(data);
    }, 1500);
  }, [currentData]);

  // Search column
  const getColumnProps = (dataIndex, placeHolder) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div>
        <Input
          ref={refInput}
          placeholder={`Search ${placeHolder}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          // icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  // Render statusTag
  const statusTag = (status) => {
    // console.log(status[0]);
    let statusText = status[0];
    if (statusText == "approve") {
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          approve
        </Tag>
      );
    } else if (statusText == "process") {
      return (
        <Tag icon={<SyncOutlined spin />} color="processing">
          process
        </Tag>
      );
    } else if (statusText == "wait") {
      return (
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          wait
        </Tag>
      );
    }
  };

  const columns = [
    {
      title: "Tanggal / Waktu",
      dataIndex: "date",
      key: "date",
      width: "15%",
      ...getColumnProps("date", "tanggal"),
    },
    {
      title: "No order",
      dataIndex: "orderId",
      key: "orderId",
      width: "10%",
      sorter: (record1, record2) => {
        return record1.orderId > record2.orderId;
      },
    },
    {
      title: "Nama Template",
      dataIndex: "mmsCategoryTemplate",
      key: "mmsCategoryTemplate",
      ...getColumnProps("mmsCategoryTemplate", "Nama Template"),
      // width: "1%",
    },
    {
      title: "Admin account",
      dataIndex: "adminName",
      key: "adminName",
    },
    {
      title: "Channel Target",
      dataIndex: "targetChannel",
      key: "targetChannel",
      width: "10%",
      filters: [
        { text: "MMS", value: "MMS" },
        { text: "Flash SMS", value: "Flash-SMS" },
      ],
      onFilter: (value, record) => {
        return record.targetChannel.indexOf(value) === 0;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "25%",
      align: "center",
      ellipsis: {
        showTitle: false,
      },

      render: (status, i) => (
        <Tooltip key={i} placement="topLeft" title={status[0]}>
          {/* {console.log(status[0])} */}
          {statusTag(status)}
        </Tooltip>
      ),
      filters: [
        { text: "approve", value: "approve" },
        { text: "process", value: "process" },
        { text: "wait", value: "wait" },
      ],
      onFilter: (value, record) => {
        return record.status.indexOf(value) === 0;
      },
    },
  ];

  return (
    <div className="mt-5">
      <div>
        <HeaderFeature titleHeader={"Approval Log"} />
      </div>

      <div className="p-5 mt-5">
        <div>Filter</div>
        <div className="">
          <Table
            columns={columns}
            dataSource={currentData}
            loading={loading}
            bordered={true}
            pagination={{
              showSizeChanger: true,
              locale: { items_per_page: "" },
              defaultPageSize: 10,
              pageSizeOptions: ["10", "20", "30", "40", "50"],
            }}
          />
        </div>
      </div>
    </div>
  );
};;

export default LogsApproval;
