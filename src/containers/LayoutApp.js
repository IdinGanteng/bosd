// import React, { useEffect, useState } from "react";
// import { Layout, Button, Avatar } from "antd";
// import { Switch, Route, useHistory } from "react-router-dom";

// // Components
// import MenuItemList from "../components/Sidebar/MainMenu";
// import BreadcrumbComp from "../components/Breadcrumb/BreadcrumbComp";
// import Page404 from "../pages/404";

// // Assets
// import "./layoutApp.less";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// // import Logo from "../../assets/logo-ioh.svg";
// import imageLogoCollapse from "../assets/top-right-pink-bg.png";
// import imageLogoCollapse2 from "../assets/logo_Personal_IM3.svg";
// import imageLogo from "../assets/img-card-about-us.png";
// import AppNotification from "../components/AppNotification/AppNotification";

// // Data
// import routes from "../route/index";
// import Main from "./Main";

// const { Header, Content, Sider } = Layout;

// function LayoutApp() {
//   const route = useHistory();
//   const [collapsed, setCollapsed] = useState(false);
//   const [dummyUserActive, setDummyUserActive] = useState("");

//   const [auth, setAuth] = useState(false);

//   // useEffect(() => {
//   //   if (auth) {
//   //     if (!auth) {
//   //       console.log("push to login");
//   //       route.push("/");
//   //     }
//   //   } else {
//   //     console.log("push to login");
//   //     route.push("/login");
//   //   }
//   // });

//   const handleSubmit = () => {
//     localStorage.setItem("authentication", auth);
//     setAuth(!auth);
//     console.log(auth, "auth submit");
//     route.push("/login");
//   };

//   const showSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         onCollapse={showSidebar}
//       >
//         <div className="logo">
//           {collapsed ? (
//             <img
//               src={imageLogoCollapse2}
//               className="logoCollapse"
//               style={{
//                 width: "67px",
//                 height: "64px",
//                 backgroundColor: "white",
//                 transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
//               }}
//               alt=""
//             />
//           ) : (
//             <img
//               src={imageLogo}
//               style={{
//                 width: "150px",
//                 height: "64px",
//                 backgroundColor: "white",
//                 transition: "width .5s",
//                 transitionTimingFunction: "linear",
//               }}
//               alt=""
//             />
//           )}
//         </div>
//         <MenuItemList collapsed={collapsed} defaultOpenKeys={["1"]} />
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           <div className="wrapper-header-action">
//             <div>
//               <Button
//                 type="secondary"
//                 className="trigger"
//                 onClick={() => showSidebar(true)}
//               >
//                 {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               </Button>
//               <Button onClick={handleSubmit}>Login</Button>
//             </div>
//             <div className="header-avatar">
//               <div className="notify-navbar">
//                 <AppNotification />
//               </div>
//               <div>
//                 <span className="header-avatar-text">
//                   Halo Admin, {dummyUserActive}{" "}
//                 </span>
//                 <Avatar shape="square" icon={<UserOutlined />} />
//               </div>
//             </div>
//           </div>
//         </Header>
//         <BreadcrumbComp />
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: "8px 8px",
//             padding: 5,
//             minHeight: 280,
//           }}
//         >
//           <Main>
//             <Switch>
//               {routes.length !== 0 &&
//                 routes.map((route, i) => {
//                   return route.component ? (
//                     <Route
//                       key={i}
//                       exact={true}
//                       path={`/${route.path}`}
//                       render={(props) => <route.component {...props} />}
//                     />
//                   ) : null;
//                 })}
//               <Route path={"*"} component={Page404} />;
//             </Switch>
//           </Main>
//         </Content>
//         <div className="copyright-praxis">
//           <span>&copy; Praxis 2022</span>
//         </div>
//       </Layout>
//     </Layout>
//   );
// }

// export default LayoutApp;
