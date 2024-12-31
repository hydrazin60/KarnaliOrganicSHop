import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Login() {
  return (
    <body className="w-screen h-screen p-3 gap-7 flex  flex-col items-center  ">
      <section className="w-[350px] flex flex-col gap-5  ">
        <div>
          <img
            src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
            alt="logo"
            className="w-24 items-center mx-auto"
          />
        </div>
        <div className="border border-slate-300 rounded-md p-6 ">
          <div className="flex flex-col gap-3 ">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-700 ">Sign in</h2>
            </div>
            <div>
              <label for="email" className="text-sm font-bold text-zinc-700">
                Email or mobile phone number
              </label>
              <Input className="border border-slate-400    " type="email" />
              <Button className="w-full my-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full">
                Continue
              </Button>
            </div>
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
          <Button className="w-full  bg-white hover:bg-zinc-100 text-zinc-700 rounded-full border border-zinc-400 h-8">
            Create your Amazon account
          </Button>
        </div>
      </section>
      <section className="w-full border-t-2 h-auto">
        <div className="flex items-center flex-col gap-1 my-3">
          <div>
            <a
              href="#"
              className="text-[13px] text-[#007185] hover:underline hover:text-red-500"
            >
              Conditions of Use {" "}
            </a>
            <a
              href="#"
              className="text-[13px] text-[#007185] hover:underline hover:text-red-500"
            >
              Privacy Notion { " "}
            </a>
            <a
              href="#"
              className="text-[13px] text-[#007185] hover:underline hover:text-red-500"
            >
              Help {" "}
            </a>
          </div>
          <div>
            <p className="text-[12px] text-zinc-500 ">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}
