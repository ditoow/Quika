import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/react";
import "../globals.css";
import ModalSelectMenu from "@/components/ModalSelectMenu";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen mx-24">
      <Navbar />
      <div className="flex items-center justify-center min-h-[94.4dvh]">
        <div className="flex bg-red-300 w-full">
          <img
            src="/images/belajar2.png"
            alt="QUIKA logo"
            className="w-full"
          />
        </div>
        <div className="flex flex-col pl-8 max-w-4xl bg-green-300">
          <h1 className="text-3xl font-bold">QUIKA</h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}
