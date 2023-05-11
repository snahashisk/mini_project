import React, { useState } from "react";
import axios from "axios";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data.error);
    }
  };
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row-reverse">
      <div className="w-1/2 h-full overflow-hidden bg-gradient-to-br from-purple-600 to-teal-400 via-blue-500 flex flex-col justify-center items-center text-white">
        hello Snahashis Kanrar
      </div>
      <form className="w-1/2 h-full py-16 px-40">
        <h1 className="text-2xl font-semibold mb-8 text-blue-800">
          FUTURE STOCKER
        </h1>
        <h3 className="text-4xl font-semibold text-gray-600 mb-3">
          Create an Account
        </h3>
        <p className="text-gray-600">Join us! Register with a method:</p>
        <div className="flex justify-around py-6">
          <div className="flex gap-1 border-2 border-gray-200 px-6 py-2 rounded-md text-md cursor-pointer">
            <AiOutlineGoogle className="text-2xl text-blue-500" />
            <p>Google</p>
          </div>
          <div className="flex gap-1 border-2 border-gray-200 px-6 py-2 rounded-md text-md cursor-pointer">
            <AiFillFacebook className="text-2xl text-blue-500" />
            <p>Facebook</p>
          </div>
          <div className="flex gap-1 border-2 border-gray-200 px-6 py-2 rounded-md text-md cursor-pointer">
            <AiOutlineTwitter className="text-2xl text-blue-500" />
            <p>Twitter</p>
          </div>
        </div>
        <p className="text-gray-500 text-center flex items-center">
          <span className="inline-block w-1/3 h-0.5 bg-gray-300 my-4"></span>
          <span
            className={`w-2/5 text-md ${errorMessage ? "text-red-500" : ""}`}
          >
            {errorMessage ? errorMessage : "or register with email"}
          </span>
          <span className="inline-block w-1/3 h-0.5 bg-gray-300 my-4"></span>
        </p>
        <div className="flex flex-col pt-4 pb-4">
          <label htmlFor="email" className="text-gray-700 font-semibold pb-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-gray-700 font-semibold pb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col py-2">
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 font-semibold pb-2"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-4 w-4"
            />
            <span className="ml-2 text-gray-700 font-semibold">
              I agree to the terms and conditions
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-8 mb-6 bg-blue-600 text-white font-medium w-full py-3 rounded-md"
          onClick={handleSubmit}
        >
          Register
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 cursor-pointer">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
