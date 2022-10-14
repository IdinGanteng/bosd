import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import "./index.less";

import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const location = useLocation();
  return (
    <Menu
      className="menu-style"
      theme="light"
      mode="inline"
      defaultSelectedKeys={["/dashboard"]}
      selectedKeys={[location.pathname]}
    >
      {SidebarData.map((item) => {
        return (
          <Menu.Item key={item.path} icon={item.icon}>
            {item.title}
            <Link to={item.path}></Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
