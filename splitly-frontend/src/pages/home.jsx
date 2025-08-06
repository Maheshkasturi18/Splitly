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
  },
  {
    icon: FaUserGroup,
    title: "Group Management",
    description: "Create groups for trips, roommates, or any shared expenses",
  },
  {
    icon: CiChat1,
    title: "Group Chat",
    description: "Discuss expenses and plans with built-in group chat",
  },
  {
    icon: FiLock,
    title: "Secure & Private",
    description: "Your financial data is encrypted and secure",
  },
];

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-violet-100 text-violet-700 p-3 rounded-full">
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 py-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold">Split Expenses with Friends,</h1>
            <h1 className="text-4xl font-bold text-violet-600">Hassle-Free</h1>
            <p className="mt-4 text-gray-700">
              Striply makes it easy to share expenses with friends and family.
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
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {MOCKDATA.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="py-12">
          <Contact />
        </section>
      </div>
    </MainLayout>
  );
}
