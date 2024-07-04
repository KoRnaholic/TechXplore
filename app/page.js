import HowItWorks from "@/components/about/HowItWorks";

import { CarouselSize } from "@/components/companies/Carousel";
import CompaniesList from "@/components/companies/CompaniesList";

import Header from "@/components/header/Header";
import MainBanner from "@/components/main-banner/MainBanner";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <div
        className="w-full h-[800px] sm:h-[900px] md:h-[700px] b relative bg-center bg-no-repeat bg-cover  "
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        {/* <SimpleCharts /> */}
        <MainBanner />
      </div>
      <HowItWorks />
      {/* <CompaniesList /> */}
      <div className="mt-20 flex justify-center">
        <CarouselSize />
      </div>
    </main>
  );
}
