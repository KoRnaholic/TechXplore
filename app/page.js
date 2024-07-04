import HowItWorks from "@/components/about/HowItWorks";
import SimpleCharts from "@/components/charts/Chart";
import Header from "@/components/header/Header";
import MainBanner from "@/components/main-banner/MainBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />

      <div
        className="w-full h-[800px] sm:h-[900px] md:h-[700px] relative bg-center bg-no-repeat bg-cover  "
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        {/* <SimpleCharts /> */}
        <MainBanner />
        <HowItWorks />
      </div>
    </main>
  );
}
