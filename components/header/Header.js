"use client";
import Image from "next/image";

import logo from "../../public/logo/futurisers.png";
import avatar from "../../public/images/avatar.png";
import { useState } from "react";
import mcdonals from "../../public/icons/mcdonalds.svg";
import amazon from "../../public/icons/amazon.svg";
import microsoft from "../../public/icons/microsoft.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="mb-20 fixed w-full flex justify-between bg-[#8a27f7] px-40 items-center z-50">
        <div className="flex justify-between w-full items-center">
          <div>
            <Image className="w-48 h-20" src={logo} alt="Logo" />
          </div>
          <div onClick={() => setIsOpen(true)} className="cursor-pointer">
            <Image
              className="w-10 h-10 rounded-full"
              src={avatar}
              alt="Avatar"
            />
          </div>
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </nav>

      <div className="flex h-screen absolute">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-1/5 z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out bg-[#9538f9] text-white`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setIsOpen(false)} className="text-xl">
              &times;
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <p>#Top 11</p>
            <Image className="w-20 h-20 rounded-full" src={avatar} />
          </div>

          <nav className="px-4 py-2 flex justify-center flex-col items-center">
            <a href="#" className="block py-2">
              Elene
            </a>
            <a href="#" className="block py-2">
              Status: Student
            </a>
            <a href="#" className="block py-2">
              Budget: $1000.99
            </a>

            <div className="mt-10 flex flex-col gap-8">
              <div className="flex hover:-translate-y-2 transition-all duration-300 justify-center px-10 py-2 items-center gap-2 bg-slate-600 bg-opacity-85 rounded-md">
                <Image className="w-8 h-8" src={mcdonals} />
                <div>
                  <p className="text-sm flex gap-3  text-white">
                    MCD <span>1.47%</span>
                  </p>
                  <p className="text-green-500">$113.06</p>
                </div>
              </div>
              <div className="flex hover:-translate-y-2 transition-all duration-300  justify-center px-10 py-2 items-center gap-2 bg-slate-600 bg-opacity-85 rounded-md">
                <Image className="w-8 h-8" src={amazon} />
                <div>
                  <p className="text-sm flex gap-3 text-white">
                    ZMZN <span>-3.56%</span>
                  </p>
                  <p className="text-red-500">$86.08</p>
                </div>
              </div>
              <div className="flex hover:-translate-y-2 transition-all duration-300  justify-center px-10 py-2 items-center gap-2 bg-slate-600 bg-opacity-85 rounded-md">
                <Image className="w-8 h-8" src={microsoft} />
                <div>
                  <p className="text-sm flex gap-3 text-white">
                    MSFT <span>1.18%</span>
                  </p>
                  <p className="text-green-500">$224.93</p>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
      </div>
    </>
  );
}
