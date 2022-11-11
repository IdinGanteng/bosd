import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSms,
  faMessage,
  faClipboardList,
  faMoneyBillTransfer,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

// import { fontaw}
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import {
  ProfileOutlined,
  HomeOutlined,
  BarChartOutlined,
  SettingOutlined,
  ScheduleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeOutlined />,
    cName: "nav-text",
    keys: 1,
  },
  {
    title: "Template MMS",
    path: "/mms",
    icon: <HomeOutlined />,
    // icon: <FontAwesomeIcon icon={faMessage} />,
    cName: "nav-text",
    keys: 2,
  },
  {
    title: "Template Flash SMS",
    path: "/flash-sms",
    icon: <FontAwesomeIcon icon={faCommentSms} />,
    cName: "nav-text",
    keys: 11,
  },
  {
    title: "Logs Approval",
    path: "/logs/approval",
    icon: <FontAwesomeIcon icon={faClipboardList} />,
    cName: "nav-text",
    keys: 12,
  },
  {
    title: "Pembayaran",
    path: "/pembayaran",
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
    cName: "nav-text",
    keys: 13,
  },
  {
    title: "User Management",
    path: "/user-management",
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    cName: "nav-text",
    keys: 14,
  },
  {
    title: "Queue Payment",
    path: "/queue/payment",
    icon: <ProfileOutlined />,
    cName: "nav-text",
    keys: 3,
  },
  {
    title: "Approve Payment",
    path: "/approve/payment",
    icon: <ScheduleOutlined />,
    cName: "nav-text",
    keys: 4,
  },
  {
    title: "Queue Konten",
    path: "/queue/konten",
    icon: <ProfileOutlined />,
    cName: "nav-text",
    keys: 5,
  },
  {
    title: "Approve Konten",
    path: "/approve/konten",
    icon: <ScheduleOutlined />,
    cName: "nav-text",
    keys: 6,
  },
  {
    title: "Request New Template",
    path: "/template/request",
    icon: <PlusCircleOutlined />,
    cName: "nav-text",
    keys: 7,
  },
  {
    title: "Finance",
    path: "/finance",
    icon: <BarChartOutlined />,
    cName: "nav-text",
    keys: 8,
  },
  {
    title:"Setting",
    path:"/setting",
    cName:"nav-text",
    keys:9
  },
];
