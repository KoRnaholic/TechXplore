import Image from "next/image";
import avatar1 from "../../public/images/avatar-1.png";
import avatar2 from "../../public/images/avatar-2.png";
import avatar3 from "../../public/images/avatar-3.png";

const data = [
  {
    name: "Ken Shaw",
    price: "%10.50",
    dailyDividend: "$15,00,000.00",
    date: "15 jun, 2024",
    depositBy: "30 Days",
    image: avatar1,
  },
  {
    name: "Melody Briggs",
    price: "%19.50",
    dailyDividend: "$12,00,000.00",
    date: "13 jun, 2024",
    depositBy: "30 Days",
    image: avatar2,
  },
  {
    name: "Cheryl Brady",
    price: "%20.50",
    dailyDividend: "$7,00,000.00",
    date: "14 jun, 2024",
    depositBy: "30 Days",
    image: avatar3,
  },
  {
    name: "Tony Casey",
    price: "%30.50",
    dailyDividend: "$4,00,000.00",
    date: "19 march, 2024",
    depositBy: "30 Days",
    image: avatar2,
  },
  {
    name: "Hazel Cain",
    price: "%44.50",
    dailyDividend: "$3,00,000.00",
    date: "25 jul, 2024",
    depositBy: "30 Days",
    image: avatar1,
  },
  {
    name: "Chad Cox",
    price: "%45.50",
    dailyDividend: "$3,00,000.00",
    date: "12 jun, 2024",
    depositBy: "30 Days",
    image: avatar3,
  },
  {
    name: "Fred Lane",
    price: "%22.50",
    dailyDividend: "$2,00,000.00",
    date: "9 jul, 2024",
    depositBy: "30 Days",
    image: avatar1,
  },
];

export default function Table() {
  return (
    <div className="py-32 bg-purple-900 flex gap-10 flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-semibold">Top Users</h1>
      <table className="w-3/4 bg-purple-700 text-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-purple-600">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Profit</th>
            <th className="py-3 px-4 text-left">amount</th>
            <th className="py-3 px-4 text-left">date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-purple-500">
              <td className="py-3 px-4 flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 rounded-full mr-4"
                />
                <span>{item.name}</span>
              </td>
              <td className="py-3 px-4">
                {" "}
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
                {item.price}
              </td>
              <td className="py-3 px-4">{item.dailyDividend}</td>
              <td className="py-3 px-4">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
