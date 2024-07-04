"use client";
import Image from "next/image";

import logo from "../../public/logo/futurisers.png";
import avatar from "../../public/images/avatar.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between bg-[#8a27f7] px-40 items-center">
        <div className="flex justify-between w-full items-center">
          <div>
            <Image className="w-48 h-20" src={logo} />
          </div>
          <div onClick={() => setIsOpen(true)} className="cursor-pointer">
            <Image className="w-10 h-10 rounded-full" src={avatar} />
          </div>
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
              Status
            </a>
            <a href="#" className="block py-2">
              UserName
            </a>
            <a href="#" className="block py-2">
              Link 3
            </a>
          </nav>
        </div>

        {/* Main Content */}
      </div>
    </>
  );
}
