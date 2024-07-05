import mcdonals from "../../public/icons/mcdonalds.svg";
import amazon from "../../public/icons/amazon.svg";
import microsoft from "../../public/icons/microsoft.svg";
import tesla from "../../public/icons/tesla.svg";
import apple from "../../public/icons/apple.svg";
import google from "../../public/icons/google.svg";
import CompanyCard from "./CompanyCard";

export const stocks = [
  {
    companyName: "McDonald's",
    symbol: "MCD",
    change: 1.45,
    percentChange: 0.84,
    volume: "4.56M",
    image: mcdonals,
    data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
  },
  {
    companyName: "Tesla",
    symbol: "TSLA",
    change: -9.92,
    percentChange: -1.42,
    volume: "23.45M",
    image: tesla,
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    companyName: "Google",
    symbol: "GOOGL",
    change: -14.82,
    percentChange: -0.57,
    volume: "1.67M",
    image: google,
    data: [5, 4, 3, 2, 1, 2, 3, 4, 5, 6],
  },
  {
    companyName: "Microsoft",
    symbol: "MSFT",
    change: 0.65,
    percentChange: 0.23,
    volume: "20.34M",
    image: microsoft,
    data: [3, 5, 2, 7, 4, 6, 8, 1, 5, 3],
  },
  {
    companyName: "Apple",
    symbol: "AAPL",
    change: 0.22,
    percentChange: 0.16,
    volume: "50.78M",
    image: apple,
    data: [6, 4, 7, 2, 8, 3, 5, 1, 4, 6],
  },
  {
    companyName: "Amazon",
    symbol: "AMZN",
    change: -22.79,
    percentChange: -0.66,
    volume: "2.19M",
    image: amazon,
    data: [1, 3, 5, 7, 9, 2, 4, 6, 8, 10],
  },
];

export default function CompaniesList() {
  return (
    <div className=" mt-20 bg-white flex flex-wrap gap-5 justify-center items-center">
      {stocks.map((company) => {
        return <CompanyCard key={company.name} company={company} />;
      })}
    </div>
  );
}
