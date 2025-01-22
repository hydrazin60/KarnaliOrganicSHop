import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";

import axios from "axios";
export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("invalid credentials");
  const [loading, setLoading] = useState(false);
  const [ieError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      setLoading(true);
      setIsError(false);
      if (!formData.fullName || !formData.email || !formData.password) {
        setIsError(true);
        setErrorMessage("All fields are required.");
        setLoading(false);
        return;
      }
      if (formData.password !== formData.reEnterPassword) {
        setIsError(true);
        setErrorMessage("Passwords do not match.");
        setFormData({
          ...formData,
          reEnterPassword: "",
        });
        setLoading(false);
        return;
      }
      const res = await axios.post(
        "http://localhost:4000/api/v1/amazoneClone/user/auth/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response Data:", res.data);

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message || "Registration successful!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          reEnterPassword: "",
        });
        navagation("/login", {
          state: { email: formData.email, password: formData.password },
        });
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setIsError(true);
        setErrorMessage(
          error.response.data.message || "Server error occurred."
        );
        toast.error(error.response.data.message || "Server error occurred.");
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className=" p-3 w-screen h-screen  flex  flex-col items-center gap-8">
      <section className="w-[350px] h-fit flex flex-col gap-4    ">
        <div>
          <img
            src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
            alt="logo"
            className="w-24 items-center mx-auto"
          />
        </div>
        <div className="border border-slate-300 rounded-md p-5 flex flex-col gap-3 ">
          <>
            <h2 className="text-[30px] font-semibold text-zinc-800 ">
              Create account
            </h2>
          </>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-sm font-bold text-zinc-700">
              Your name
            </label>
            <Input
              type="text"
              name="fullName"
              placeholder="First and Last name"
              required
              className="w-full h-8 mb-3 border border-slate-400 "
              value={formData.fullName}
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              name="email"
              className="text-sm font-bold text-zinc-700"
            >
              Mobile number or email
            </label>
            <Input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 mb-3 border border-slate-400  "
            />
            <label
              htmlFor="password"
              className="text-sm font-bold text-zinc-700"
            >
              Password
            </label>
            <div className="relative mb-3 ">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                className="w-full h-8  border border-slate-400 "
              />
              {showPassword ? (
                <IoEyeOutline
                  className="absolute right-3 top-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IoEyeOffOutline
                  className="absolute right-3 top-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <div className="flex gap-2 mb-3">
              <div className="w-4 h-4 text-[13px] font-semibold flex items-center justify-center bg-[#007185] text-white p-1  rounded-full">
                i
              </div>
              <div>
                <p className="text-xs text-zinc-700">
                  Password must be at least 6 characters
                </p>
              </div>
            </div>
            <label
              htmlFor="password"
              className="text-sm font-bold text-zinc-700"
            >
              Re-enter password
            </label>
            <div className="relative mb-3 ">
              <Input
                type="password"
                name="reEnterPassword"
                required
                value={formData.reEnterPassword}
                onChange={handleChange}
                className={`w-full h-8 border ${
                  ieError ? "border-red-600" : "border-slate-400"
                }`}
              />
              {ieError && (
                <p className="text-xs text-red-600 absolute left-3 top-2">
                  {errorMessage}
                </p>
              )}
            </div>

            <Button className="w-full my-3 bg-yellow-400 hover:bg-yellow-500 h-8 text-black rounded-full">
              Continue
            </Button>
          </form>
          <div>
            <p className="text-xs text-zinc-700">
              By continuing, you agree to Amazon's You agree to Amazon's
              <a
                href="#"
                className="text-[#007185]  hover:text-red-600 underline"
              >
                Conditions of Use{" "}
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#007185]  hover:text-red-600 underline"
              >
                {" "}
                Privacy Notice.
              </a>
            </p>
          </div>
          <div className="border-t border-b border-slate-300 py-3">
            <p className="text-sm font-bold text-zinc-800">Buying fro work</p>
            <p className="text-[#007185] text-sm  hover:text-red-600 ">
              Create a free business account
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-[14px]  text-zinc-900">
              Already have an account?
            </p>
            <button
              onClick={() => navigate("/login")}
              className="text-[#007185] text-sm hover:text-red-600"
            >
              sign in,
            </button>
          </div>
        </div>
      </section>
      <section className=" border-t-2 border-slate-300 w-full h-full items-center flex justify-center">
        <div className="flex items-center gap-2 flex-col ">
          <div className="flex space-x-5">
            <a
              href="#"
              className=" text-[13px]   text-[#007185] hover:underline hover:text-red-600"
            >
              Conditions of Use
            </a>
            <a
              href="#"
              className=" text-[13px]   text-[#007185] hover:underline hover:text-red-600"
            >
              Privacy Notice
            </a>
            <a
              href="#"
              className="text-[13px] text-[#007185] hover:underline hover:text-red-600"
            >
              Help
            </a>
          </div>
          <div>
            <p className="text-xs text-zinc-700">
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     setLoading(true);

//     if (!formData.fullName || !formData.email || !formData.password) {
//       setIsError(true);
//       setErrorMessage("All fields are required");
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.reEnterPassword) {
//       setIsError(true);
//       setErrorMessage("Passwords don't match");
//       setFormData({
//         ...formData,
//         reEnterPassword: "",
//       });
//       setLoading(false);
//       return;
//     }

//     const res = await axios.post(
//       "http://localhost:4000/api/v1/amazoneClone/user/auth/register",
//       formData,
//       {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(res.data);
//     if (res.data.success) {
//       toast.success(`${res.data.message}`);
//       setFormData({
//         fullName: "",
//         email: "",
//         password: "",
//         reEnterPassword: "",
//       });
//     } else {
//       toast.error(res.data.message || "Something went wrong!");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     toast.error(error.response?.data?.message || "An error occurred.");
//   } finally {
//     setLoading(false);
//   }
// };
