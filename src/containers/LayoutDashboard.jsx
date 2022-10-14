import React, { useState } from "react";
import { Outlet, Route, Routes, Link, useLocation } from "react-router-dom";
import "./LayoutDashboard.css";
// Icons
import { HomeOutlined } from "@ant-design/icons";
import { RiListSettingsLine, RiHandCoinLine } from "react-icons/ri";
import { GrTransaction, GrUserSettings } from "react-icons/gr";
import {
  HiOutlinePencilAlt,
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineUserGroup,
} from "react-icons/hi";

// Comps
import { Layout, Menu } from "antd";
import Logo from "../assets/iboost-logo.png";
import BreadcrumbComp from "../components/Breadcrumb/BreadcrumbComp";
import Copyright from "../components/Copyright/Copyright";
import Setting from "../pages/Setting/Setting";
import PageNotFound from "../pages/404/PageNotFound";
import Dashboard from "../pages/Dashboard/Dashbaord";
import Approval from "../pages/Konten/Approval/Approval";
import CreateTemplate from "../pages/Konten/CreateTemplate/CreateTemplate";
import UserManagement from "../pages/UserManagement/Users/UserManagement";
import KategoriTemplate from "../pages/Konten/KelolaTemplate/KategoriTemplate/KategoriTemplate";

// Extract Comps
const { Header, Content, Footer, Sider } = Layout;

// Menu
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">Dashboard</Link>, "1", <HomeOutlined />, null),
  // Admin Konten
  getItem("Manajemen Konten", "sub1", <RiListSettingsLine />, [
    getItem(
      <Link to="/konten/approval">Approval Konten Merchant</Link>,
      "2",
      <HiOutlineCheckCircle />
    ),
    getItem(
      <Link to="/konten/new-template">Buat Template Baru</Link>,
      "3",
      <HiOutlinePencilAlt />
    ),
    getItem("Kelola Template", "4", <HiOutlineCog />, [
      getItem(
        <Link to="/konten/kategori/template">Kategori Template</Link>,
        "21",
        null
      ),
      getItem("Option 8", "22", null),
    ]),
    // getItem("Submenu", "sub3", null, [
    //   getItem("Option 7", "7"),
    //   getItem("Option 8", "8"),
    // ]),
  ]),
  // Admin Keuangan
  getItem("Manajemen Keuangan", "sub2", <RiHandCoinLine />, [
    getItem("Transaksi", "5", <GrTransaction />),
    getItem("Team 2", "6"),
  ]),
  // Admin Manajemen
  getItem("Team", "sub3", <HomeOutlined />, [
    getItem("Team 1", "7"),
    getItem("Team 2", "8"),
  ]),
  getItem("Manajemen User", "sub4", <GrUserSettings />, [
    getItem(
      <Link to="/user/admin-users">Admin Users</Link>,
      "9",
      <HiOutlineUserGroup />
    ),
    getItem("Team 2", "10"),
  ]),
  getItem("Setting", "11", <HomeOutlined />),
];

const LayoutDashboard = () => {
  // const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        width={256}
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <img
            src={Logo}
            alt=""
            style={{
              width: "100%",
              height: "60px",
              transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
          />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          theme="light"
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <BreadcrumbComp />
          <div
            className="site-layout-background"
            style={{
              padding: 16,
              minHeight: "80vh",
            }}
          >
            {/* Change Content Here */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/konten/approval" element={<Approval />} />
              <Route path="/konten/new-template" element={<CreateTemplate />} />
              <Route path="/user/admin-users" element={<UserManagement />} />
              <Route
                path="/konten/kategori/template"
                element={<KategoriTemplate />}
              />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/*  */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <Copyright />
        </Footer>
      </Layout>
      <Outlet />
    </Layout>
  );
};

export default LayoutDashboard;
