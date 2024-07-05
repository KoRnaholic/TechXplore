import Image from "next/image";
import account from "../../public/icons/account.svg";
import profit from "../../public/icons/profit.svg";
import invest from "../../public/icons/invest-money.svg";
import arrow1 from "../../public/icons/arrow1.svg";
import arrow2 from "../../public/icons/arrow2.svg";

export default function HowItWorks(props) {
  return (
    <>
      <div className="py-10 bg-[#F4F2F9] flex items-center justify-center">
        <section className="py-20 px-4 ">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              How It Works
            </h2>
            <p className="mb-12 text-gray-600">
              Create a new account to start your investment journey. This will
              allow you to access various educational tools and resources
              designed to help you learn about investing in a fun and
              interactive way.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-purple-600 p-6 rounded-full text-white shadow-lg">
                  <Image src={account} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Register An Account
                </h3>
                <p className="text-gray-600">
                  Create a new account to start your investment journey. This
                  will allow you to access various educational tools and
                  resources designed to help you learn about investing in a fun
                  and interactive way.
                </p>
              </div>
              <div>
                <Image className="mb-44" src={arrow1} width={800} />
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="bg-yellow-500 p-6 rounded-full text-white shadow-lg">
                  <Image src={invest} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Get Budget to start with
                </h3>
                <p className="text-gray-600">
                  Receive a virtual budget to practice your investment skills.
                  Learn how to allocate funds across different assets, manage
                  risks, and make informed decisions.
                </p>
              </div>
              <div>
                <Image className="mb-40" width={800} src={arrow2} />
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-pink-500 p-6 rounded-full text-white shadow-lg">
                  <Image src={profit} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Get Smart Profit
                </h3>
                <p className="text-gray-600">
                  Use your budget to invest in a simulated stock market. Track
                  your progress, analyze market trends, and see how your
                  investments grow over time. Gain valuable insights and
                  experience without any financial risk.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
