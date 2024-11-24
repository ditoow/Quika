import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/react";
import "../globals.css";
import ModalSelectMenu from "@/components/ModalSelectMenu";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex items-center justify-between p-4">
        <div className="flex-1">
          <img src="/images/belajar2.png" alt="Logo" className="w-96 h-96 mx-auto custom-image " />
        </div>
        <div className="flex-1 pl-8">
          <h1 className="text-3xl font-bold">QUIKA</h1>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
      </div>
    </main>
  );
}
