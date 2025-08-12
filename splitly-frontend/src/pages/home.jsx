import { FiLock } from "react-icons/fi"; // Feather lock icon
import { FaUserGroup } from "react-icons/fa6";
import { IoCalculator } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import image from "../assets/hero-img.jpg";
import MainLayout from "../layouts/mainLayout";
import "../styles/pages/home.css";
import { Link } from "react-router-dom";
import Contact from "../components/contact";

export const MOCKDATA = [
  {
    icon: IoCalculator,
    title: "Smart Calculations",
    description:
      "Automatically calculate who owes what with smart expense splitting",
    bgColor: "bg-orange-100",
    iconBgColor: "bg-orange-200",
    iconColor: "text-orange-700",
  },
  {
    icon: FaUserGroup,
    title: "Group Management",
    description: "Create groups for trips, roommates, or any shared expenses",
    bgColor: "bg-indigo-100",
    iconBgColor: "bg-indigo-200",
    iconColor: "text-indigo-700",
  },
  {
    icon: CiChat1,
    title: "Group Chat",
    description: "Discuss expenses and plans with built-in group chat",
    bgColor: "bg-emerald-100",
    iconBgColor: "bg-emerald-200",
    iconColor: "text-emerald-700",
  },
  {
    icon: FiLock,
    title: "Secure & Private",
    description: "Your financial data is encrypted and secure",
    bgColor: "bg-rose-100",
    iconBgColor: "bg-rose-200",
    iconColor: "text-rose-700",
  },
];

function Feature({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
  iconBgColor,
}) {
  return (
    <div className={`flex flex-col items-start p-6  ${bgColor} rounded-xl`}>
      <div className={`p-3 rounded-full ${iconBgColor} ${iconColor}`}>
        <Icon size={32} />
      </div>
      <h3 className="mt-3 mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-6 py-6 md:py-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">
              Split Expenses with Friends,
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-violet-600">
              Hassle-Free
            </h1>
            <p className="mt-4 text-gray-700">
              Splitly makes it easy to share expenses with friends and family.
              Track group expenses, split bills, and settle up without the math.
            </p>
            <div className="mt-6">
              <Link to="/login">
                <button className="bg-violet-500 text-white px-6 py-2 rounded-full hover:bg-violet-600 cursor-pointer">
                  Get started - It's Free
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={image} alt="Hero" className="rounded-lg w-full" />
          </div>
        </div>

        {/* Features section */}
        <section className="py-6 md:py-12">
          <div className="mb-10 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
              Simplify your shared expenses
            </h2>
            <h5 className="text-base lg:text-xl text-gray-700 text-center w-full md:w-[75%] inline-block">
              Splitly makes it easy to share expenses with friends and family,
              so you can focus on the fun things in life.
            </h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCKDATA.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Contact section */}
        {/* <section className="py-12">
          <Contact />
        </section> */}
      </div>
    </MainLayout>
  );
}
