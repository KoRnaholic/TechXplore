import Image from "next/image";
import appStore from "../../public/icons/app-store.svg";
import google from "../../public/icons/google-play.svg";
import mobile from "../../public/images/mobile.png";
export default function GetStarted() {
  return (
    <>
      <section className="bg-purple-500 py-10 relative text-white">
        <div className="container flex justify-center gap-16 items-center text-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 ">Ready to get started?</h2>
            <p className="text-xl mb-8">
              Global access to financial markets from a single account
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button className="bg-white text-black px-6 py-2 rounded-md shadow-md">
                Open your account
              </button>
              <span className="">And download the app</span>
              <Image className="cursor-pointer" src={appStore} />
              <Image className="cursor-pointer" src={google} />
            </div>
          </div>
          <div className="main-banner">
            <Image
              className="w-40 rounded-3xl rotate-6"
              src={mobile}
              quality={100}
            />
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 "></div>
      </section>
    </>
  );
}
