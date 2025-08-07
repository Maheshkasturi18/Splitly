import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen lg:min-h-[75vh] bg-white px-4 text-center">
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
