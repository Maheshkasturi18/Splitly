import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import "../styles/components/header.css";

const links = [
  { link: "/login", label: "Login/Signup" },
  // Add more links if needed
];

export default function Header() {
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened(!opened);

  return (
    <header className="header bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-violet-700 text-xl font-bold">
          <a href="#" className="header-logo">
            Splitly
          </a>
        </h1>

        <nav className="hidden sm:flex gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className="text-gray-700 hover:text-violet-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="sm:hidden text-gray-700 focus:outline-none"
        >
          {opened ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <IoMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {opened && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.link}
                onClick={() => setOpened(false)}
                className="text-gray-700 hover:text-violet-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
