import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/react";
import ModalSelectMenu from "@/components/ModalSelectMenu";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex items-center justify-between p-4">
        <div className="flex-1">
          <img src="/images/belajar.png" alt="Logo" className="w-96 h-96 mx-auto" />
        </div>
        <div className="flex-1 pl-8">
          <h1 className="text-3xl font-bold">QUIKA</h1>
          <p className="mt-4 text-lg">Quiz Fisika Kelompok Dito !</p>
          <Button>Click Me</Button>
        </div>
      </div>
    </main>
  );
}
