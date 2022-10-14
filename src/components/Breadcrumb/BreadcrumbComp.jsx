import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.less";
import { Breadcrumb } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

const BreadcrumbComp = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname
      .replace(new RegExp("-", "g"), " ")
      .split("/")
      .filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div>
        <Breadcrumb className="breadcrumb-container">
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Dashboard</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={index}>{capatilize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                {/* <Link to={`${routeTo}`}>{capatilize(name)}</Link> */}
                {capatilize(name)}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadcrumbComp;
