import Image from "next/image";
import about from "../../public/images/about.png";
import mcdonals from "../../public/icons/mcdonalds.svg";
import amazon from "../../public/icons/amazon.svg";
import microsoft from "../../public/icons/microsoft.svg";

export default function MainBanner(props) {
  return (
    <section className=" ml-40 text-black flex justify-center items-center py-20 ">
      <div className=" flex flex-col gap-8">
        <h1 className="text-5xl max-w-[450px] leading-snug text-blue-900 font-semibold">
          Start Investing Young, Dream Big!
        </h1>
        <p className="max-w-[400px] text-blue-900 font-semibold">
          Empower kids with real-world financial skills through fun stock market
          simulations and educational resources.
        </p>
        <div className=" flex gap-8">
          <div className="flex hover:-translate-y-2 transition-all duration-300 justify-center px-4 py-2 items-center gap-2 bg-slate-600 bg-opacity-85 rounded-md">
            <Image className="w-8 h-8" src={mcdonals} />
            <div>
              <p className="text-sm flex gap-3  text-white">
                MCD <span>1.47%</span>
              </p>
              <p className="text-green-500">$113.06</p>
            </div>
          </div>
          <div className="flex hover:-translate-y-2 transition-all duration-300  justify-center px-4 py-2 items-center gap-2 bg-slate-600 bg-opacity-85 rounded-md">
            <Image className="w-8 h-8" src={amazon} />
            <div>
              <p className="text-sm flex gap-3 text-white">
                AMZN <span>-3.56%</span>
              </p>
              <p className="text-red-500">$86.08</p>
            </div>
          </div>
          <div className="flex hover:-translate-y-2 transition-all duration-300  justify-center px-4 py-2 items-center gap-2 bg-slate-600 bg-opacity-85 rounded-md">
            <Image className="w-8 h-8" src={microsoft} />
            <div>
              <p className="text-sm flex gap-3 text-white">
                MSFT <span>1.18%</span>
              </p>
              <p className="text-green-500">$224.93</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-16 main-banner flex justify-center">
        <Image className="w-3/4" src={about} />
      </div>
    </section>
  );
}
