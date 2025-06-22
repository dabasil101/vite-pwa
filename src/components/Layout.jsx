import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Nav />
      <main className="flex-grow flex justify-center items-start px-4 py-10">
        <div className="w-full max-w-5xl">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
