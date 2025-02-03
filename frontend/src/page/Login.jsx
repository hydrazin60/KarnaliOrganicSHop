import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/slice/userSlice";
export default function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    image: "",
  });
  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("All fields are required");
    }
    try {
      setIsLoding(true);
      const res = await axios.post(
        "http://localhost:4000/api/v1/amazoneClone/user/auth/login",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoding(false);
      if (res.data.success) {
        dispatch(setUserDetails(res.data.data));
        toast.success(res.data.message || "Login successful");
        navigate("/");
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setIsLoding(false);
      if (error.response) {
        console.error("Server Error:", error.response.data);
        toast.error(error.response.data.message || "Server error occurred.");
      } else if (error.request) {
        console.error("Network Error:", error.request);
        toast.error("Network error. Please check your internet connection.");
      } else {
        console.error("Unexpected Error:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  const navigate = useNavigate();
  return (
    <main className="w-screen h-screen p-3 gap-7 flex  flex-col items-center  ">
      <section className="w-[350px] flex flex-col gap-5 ">
        <div>
          <img
            src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
            alt="logo"
            className="w-24 items-center mx-auto"
          />
        </div>
        <div className="border border-slate-300 rounded-md p-6 ">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-800 ">Sign in</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-zinc-800"
                >
                  Email or mobile phone number
                </label>
                <Input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="Email or mobile phone number "
                  className="border border-slate-400"
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-zinc-800"
                >
                  Password
                </label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  placeholder="password at least 6 characters"
                  className="border border-slate-400"
                  onChange={handleChange}
                />
                {showPassword ? (
                  <IoEyeOutline
                    className="absolute cursor-pointer right-2 top-11 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="absolute right-2 cursor-pointer top-11 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <Button className="w-full my-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full">
                {isLoding ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                    <span className="ml-2">Loading...</span>
                  </div>
                ) : (
                  "Continue"
                )}
              </Button>
            </form>
            <div>
              <div>
                <p className="text-[13px]">
                  By continuing, you agree to Amazon's{" "}
                  <a
                    href="#"
                    className="text-[#007185]  hover:text-red-600 underline"
                  >
                    Conditions of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[#0c6878] underline  hover:text-red-600"
                  >
                    Privacy Notice.
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-1 my-3">
                <FaAngleDown />
                <a
                  href="#"
                  className="text-[#007185] hover:underline text-[14px] hover:text-red-600"
                >
                  {" "}
                  Need help?
                </a>
              </div>
            </div>
            <div className="border-t border-slate-300 py-3">
              <p className="text-[13px] font-bold text-zinc-700 mb-1 ">
                Buying for work?
              </p>
              <a
                href="#"
                className="text-[#007185] hover:underline text-[15px] hover:text-red-600 "
              >
                Shop on Amazon Business
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[350px] mb-2   flex items-center gap-1">
            <div className="w-1/3 border-b border-slate-300 "></div>
            <p className="text-[12px] font-semibold text-zinc-700 ">
              New to Amazon?
            </p>
            <div className="w-1/3 border-b border-slate-300 "></div>
          </div>
          <Button
            className="w-full  bg-white hover:bg-zinc-100 text-zinc-700 rounded-full border border-zinc-400 h-8"
            onClick={() => navigate("/register")}
          >
            Create your Amazon account
          </Button>
        </div>
      </section>
      <section className="w-full border-t-2 h-auto">
        <div className="flex items-center flex-col gap-1 my-3">
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-[14px] text-[#007185] hover:underline hover:text-red-500"
            >
              Conditions of Use{" "}
            </a>
            <a
              href="#"
              className="text-[14px] text-[#007185] hover:underline hover:text-red-500"
            >
              Privacy Notion{" "}
            </a>
            <a
              href="#"
              className="text-[14px] text-[#007185] hover:underline hover:text-red-500"
            >
              Help{" "}
            </a>
          </div>
          <div>
            <p className="text-[12px] text-zinc-500 ">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
