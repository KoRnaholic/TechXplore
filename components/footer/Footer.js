import Image from "next/image";
import logo from "../../public/logo/futurisers.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <Image className="w-60 h-20" src={logo} alt="Logo" />

            <p className="mb-4">
              FutuRisers have much planned for the future, working with great
              clients and continued blockchain investment. If you&apos;d like to
              invest our company, then we&apos;d also love to hear from you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Manage Account</a>
              </li>
              <li className="mb-2">
                <a href="#">How to Deposit</a>
              </li>
              <li className="mb-2">
                <a href="#">How to Withdraw</a>
              </li>
              <li className="mb-2">
                <a href="#">Account Info</a>
              </li>
              <li className="mb-2">
                <a href="#">Safety & Security</a>
              </li>
              <li className="mb-2">
                <a href="#">Membership Level</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <ul>
              <li className="mb-2 flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i> Street#27
                Division St, New York, 10002 BDS, U.S.A
              </li>
              <li className="mb-2 flex items-center">
                <i className="fas fa-phone-alt mr-2"></i> +80 (123) 985 789 521
              </li>
              <li className="mb-2 flex items-center">
                <i className="fas fa-envelope mr-2"></i> admin@s7template.com
              </li>
              <li className="mb-2 flex items-center">
                <i className="fas fa-globe mr-2"></i> www.s7template.com
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>Copyright © FutuRisers 2024. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
