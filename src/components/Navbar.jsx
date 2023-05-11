import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  StockOutlined,
  SettingOutlined,
  MailOutlined,
  TeamOutlined,
  FileSearchOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const location = useLocation();
  if (
    location.pathname !== "/" &&
    location.pathname !== "/registration" &&
    location.pathname !== "/error"
  ) {
    return (
      <nav className="col-span-1 min-h-screen text-gray-600 p-8 flex flex-col justify-between">
        <ul className="flex flex-col gap-1">
          <li className="text-2xl font-semibold mb-4 text-center">
            FUTURE STOCKER
          </li>
          <li className="px-6 py-4 bg-gray-800 text-white rounded-lg flex flex-col mb-4">
            <p className="text-xl font-light">Total Investment</p>
            <h3 className="text-2xl">$ 43000.00</h3>
          </li>
          <li className="hover:bg-gray-200 hover:rounded-lg text-lg px-3 py-2 flex items-center gap-2 duration-200">
            <HomeOutlined />
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:bg-gray-200 hover:rounded-lg text-lg px-3 py-2 flex items-center gap-2 duration-200">
            <StockOutlined />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:bg-gray-200 hover:rounded-lg text-lg px-3 py-2 flex items-center gap-2 duration-200">
            <FileSearchOutlined />
            <Link to="/news">News</Link>
          </li>
          <li className="hover:bg-gray-200 hover:rounded-lg text-lg px-3 py-2  flex items-center gap-2 duration-200">
            <SettingOutlined />
            <Link to="/setting">Settings</Link>
          </li>
          <li className="hover:bg-gray-200 hover:rounded-lg text-lg px-3 py-2 flex items-center gap-2 duration-200">
            <MailOutlined />
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:bg-gray-200 hover:rounded-lg text-lg px-3 py-2 flex items-center gap-2 duration-200">
            <TeamOutlined />
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="flex gap-2 text-2xl justify-around">
          <GithubOutlined className="text-black cursor-pointer" />
          <LinkedinOutlined className="text-blue-600 cursor-pointer" />
          <TwitterOutlined className="text-blue-500 cursor-pointer" />
          <InstagramOutlined className="cursor-pointer text-purple-600" />
          <FacebookOutlined className="text-blue-500 cursor-pointer" />
          <YoutubeOutlined className="text-red-500 cursor-pointer" />
        </div>
      </nav>
    );
  } else {
    return;
  }
};

export default Navbar;
