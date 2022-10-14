import React, { useState } from "react";
import axios from "axios";

// Comp
import { Spin } from "antd";
import Copyright from "../../components/Copyright/Copyright";

// Icons
import { LoadingOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import IboostIcon from "../../assets/iboost-logo.png";

function Login() {
  const API_URL =
    "https://api-gateway.dev.103.81.246.51.sslip.io/auth/admin/login";
  const [loading, setLoading] = useState(false);
  const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    // console.log(e.target.value, "password");
    setUserPassword(e.target.value);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    // setLoading(true);
    const payloadLogin = { userName, userPassword };
    console.log("payload", payloadLogin);
    const loginRes = await axios
      .post(API_URL, payloadLogin, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    console.log("responses", loginRes)
    localStorage.setItem("auth-token", loginRes.data.data.token);

    // localStorage.setItem("authentication", auth);
    // setAuth(!auth);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   route.push("/");
    // }, 2000);
    // console.log(auth);
  };

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-6 bg-white-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div></div>
              <div className="text-xl text-gray-700 tracking-wide ml-2 font-semibold">
                Selamat Datang!
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-gray-700 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              Masuk
            </h2>
            <div className="mt-12">
              <div>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Alamat e-mail
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-400	"
                    type=""
                    placeholder="masukkan alamat e-mail Anda"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Kata sandi
                    </div>
                    <div>
                      <a
                        className="text-xs font-display font-semibold text-gray-600 hover:text-red-600
                                        cursor-pointer"
                      >
                        Lupa kata sandi ?
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="">
                      <input
                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-gray-400"
                        type={showPassword === false ? "password" : "text"}
                        placeholder="masukkan kata sandi Anda"
                        onChange={(e) => handlePassword(e)}
                      />
                    </div>
                    <div className="absolute text-xl top-4 right-3">
                      {showPassword === false ? (
                        <span onClick={handleToggleShowPassword}>
                          <EyeInvisibleOutlined />
                        </span>
                      ) : (
                        <span onClick={handleToggleShowPassword}>
                          <EyeOutlined />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    onClick={handleSubmit}
                    className=" text-gray-100 bg-red-500 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600
                                shadow-lg"
                  >
                    Masuk
                  </button>
                  <div className="text-center py-3">
                    {loading === true ? (
                      <Spin size="large" indicator={loadingIcon} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 text-sm font-display font-semibold text-gray-700 text-center">
                Belum memiliki akun,{" "}
                <a className="cursor-pointer text-red-500 hover:text-red-600">
                  meminta dibuatkan akun!
                </a>
              </div>
              <div className="mt-20 text-sm font-display font-semibold text-gray-700 text-center">
                <div className="m-1 p-0">
                  <Copyright />
                </div>
                {/* <p>v0.1</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center flex-1 h-screen bg-pink-300/10">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-80 h-80 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"></div>
            <div className="z-10 relative">
              <img src={IboostIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
