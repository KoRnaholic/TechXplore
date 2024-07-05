import HowItWorks from "@/components/about/HowItWorks";
import Table from "@/components/about/Table";

import { CarouselSize } from "@/components/companies/Carousel";
import CompaniesList from "@/components/companies/CompaniesList";
import GetStarted from "@/components/get-started/GetStarted";

import Header from "@/components/header/Header";
import MainBanner from "@/components/main-banner/MainBanner";

export default function Home() {
  return (
    <main className="bg-white">
      <div
        className="w-full h-[800px] sm:h-[900px] md:h-[700px] b relative bg-center bg-no-repeat bg-cover  "
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        {/* <SimpleCharts /> */}
        <MainBanner />
      </div>
      <HowItWorks />
      <GetStarted />
      {/* <CompaniesList /> */}
      <div className="mt-20 flex justify-center">
        <CarouselSize />
      </div>
      <Table />
    </main>
  );
}
