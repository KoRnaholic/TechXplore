"use client";
import Image from "next/image";

import { LineChart } from "@mui/x-charts";
export default function CompanyCard({ company }) {
  return (
    <>
      <div className="max-w-sm mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src={company.image}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-[#8a27f7]">
            {company.companyName}
          </h2>
          <p className="text-black text-sm">{company.symbol}</p>
          <div className="flex items-center justify-center text-green-500 text-2xl font-bold">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
              series={[
                {
                  data: company.data,
                  showMark: ({ index }) => index % 2 === 0,
                },
              ]}
              width={300}
              height={200}
            />
          </div>
          <p className="text-blue-900 flex justify-center gap-2">
            Change:{" "}
            {company.percentChange < 0 ? (
              <span className="flex text-red-600 gap-2">
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                {company.percentChange}%
              </span>
            ) : (
              <span className="flex text-green-600 gap-2">
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                {company.percentChange}%
              </span>
            )}
          </p>
        </div>
        <div className="border-t border-orange-400 my-4"></div>
        <div className="grid grid-cols-3 gap-2 mb-4 text-black">
          <div className="flex hover:text-white items-center hover:bg-green-500 justify-center border border-green-500 rounded-lg p-2">
            <span className="  font-bold">50</span>
          </div>
          <div className="flex hover:text-white items-center hover:bg-green-500 justify-center border border-green-500 rounded-lg p-2">
            <span className="  font-bold">100</span>
          </div>
          <div className="flex hover:text-white items-center hover:bg-green-500 justify-center border border-green-500 rounded-lg p-2">
            <span className="  font-bold">150</span>
          </div>
          <div className="flex hover:text-white items-center hover:bg-green-500 justify-center border border-green-500 rounded-lg p-2">
            <span className="  font-bold">200</span>
          </div>
          <div className="flex hover:text-white items-center hover:bg-green-500 justify-center border border-green-500 rounded-lg p-2">
            <span className="  font-bold">300</span>
          </div>
          <div className="flex hover:text-white items-center justify-center border border-green-500 rounded-lg p-2">
            <span className=" hover:bg-green-500 font-bold">500</span>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            // onClick={handleSell}
            className="w-full bg-[#8a27f7] text-white font-bold py-2 rounded-lg mr-2"
          >
            Sell
          </button>
          <button
            // onClick={handleBuy}
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg ml-2"
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
