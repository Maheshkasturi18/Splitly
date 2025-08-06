import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.css"; // Adjust the path as needed

export default function Footer() {
  return (
    <footer className="footer bg-white shadow ">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center p-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="footer-logo font-semibold text-violet-600">
            Splitly
          </a>
          . All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/about" className="text-sm text-violet-700 hover:underline">
            About
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-violet-700 hover:underline"
          >
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-violet-700 hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
