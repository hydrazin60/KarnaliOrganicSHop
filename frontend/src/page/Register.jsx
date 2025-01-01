import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Register() {
  return (
    <body className=" p-3 w-screen h-screen  flex  flex-col items-center gap-8">
      <section className="w-[350px] h-fit flex flex-col gap-4    ">
        <div>
          <img
            src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
            alt="logo"
            className="w-24 items-center mx-auto"
          />
        </div>
        <div className="border border-slate-300 rounded-md p-6 flex flex-col gap-3 ">
          <>
            <h2 className="text-[27px] font-semibold text-zinc-700 ">
              Create account
            </h2>
          </>
          <div className="">
            <label for="name" className="text-sm font-bold text-zinc-700">
              Your name
            </label>
            <Input
              type="text"
              placeholder="First and Last name"
              className="w-full h-8 mb-3 border border-slate-400 "
            />
            <label htmlFor="email" className="text-sm font-bold text-zinc-700">
              Mobile number or email
            </label>
            <Input
              type="email"
              className="w-full h-8 mb-3 border border-slate-400  "
            />
            <label
              htmlFor="password"
              className="text-sm font-bold text-zinc-700"
            >
              Password
            </label>
            <Input
              type="password"
              placeholder="At least 6 characters"
              className="w-full h-8 mb-3 border border-slate-400 "
            />
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
            <Input
              type="password"
              className="w-full h-8 border border-slate-400 "
            />
            <Button className="w-full my-3 bg-yellow-400 hover:bg-yellow-500 h-8 text-black rounded-full">
              Continue
            </Button>
          </div>
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
          <div>
            <p className="text-[14px]  text-zinc-900">
              Already have an account?
              <a
                href="#"
                className="text-[#007185]  hover:text-red-600 hover:underline "
              >
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className=" border-t-2 border-slate-300 w-full h-full items-center flex justify-center">
        <div className="flex items-center gap-2 flex-col ">
          <div className="flex space-x-5">
            <a href="#" className=" text-[13px] text-[#007185]">
              Conditions of Use
            </a>
            <a href="#" className=" text-[13px] text-[#007185]">
              Privacy Notice
            </a>
            <a href="#" className="text-[13px] text-[#007185]">
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
    </body>
  );
}
