import Image from "next/image";

const data = [
  {
    name: "Ken Shaw",
    price: "$10.50",
    dailyDividend: "$0.09",
    amounts: "$718",
    depositBy: "30 Days",
    currency: "BTC",
  },
  {
    name: "Melody Briggs",
    price: "$19.50",
    dailyDividend: "$11.09",
    amounts: "$716",
    depositBy: "30 Days",
    currency: "TRX",
  },
  {
    name: "Cheryl Brady",
    price: "$20.50",
    dailyDividend: "$13.09",
    amounts: "$618",
    depositBy: "30 Days",
    currency: "LTC",
  },
  {
    name: "Tony Casey",
    price: "$30.50",
    dailyDividend: "$14.09",
    amounts: "$818",
    depositBy: "30 Days",
    currency: "ETH",
  },
  {
    name: "Hazel Cain",
    price: "$44.50",
    dailyDividend: "$18.09",
    amounts: "$717",
    depositBy: "30 Days",
    currency: "TRX",
  },
  {
    name: "Chad Cox",
    price: "$45.50",
    dailyDividend: "$22.09",
    amounts: "$315",
    depositBy: "30 Days",
    currency: "XRP",
  },
  {
    name: "Fred Lane",
    price: "$22.50",
    dailyDividend: "$33.09",
    amounts: "$915",
    depositBy: "30 Days",
    currency: "BNB",
  },
];

export default function Table() {
  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center">
      <table className="w-4/5 bg-purple-700 text-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-purple-600">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Profit</th>
            <th className="py-3 px-4 text-left">amount</th>
            <th className="py-3 px-4 text-left">date</th>
            <th className="py-3 px-4 text-left">Deposit By</th>
            <th className="py-3 px-4 text-left">Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-purple-500">
              <td className="py-3 px-4 flex items-center">
                <Image alt={item.name} className="w-8 h-8 rounded-full mr-4" />
                <span>{item.name}</span>
              </td>
              <td className="py-3 px-4">{item.price}</td>
              <td className="py-3 px-4">{item.dailyDividend}</td>
              <td className="py-3 px-4">{item.amounts}</td>
              <td className="py-3 px-4">{item.depositBy}</td>
              <td className="py-3 px-4">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
