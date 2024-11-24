import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/react";
import "../globals.css";
import ModalSelectMenu from "@/components/ModalSelectMenu";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center py-6">
        <div className="flex-1">
          <img
            src="/images/belajar2.png"
            alt="QUIKA logo"
            className="mx-auto custom-image"
          />
        </div>
        <div className="flex-1 pl-8">
          <h1 className="text-3xl font-bold">QUIKA</h1>
          <p className="mt-4 text-lg">
            Aplikasi belajar online yang membantu kamu untuk memahami materi
            pelajaran dengan mudah dan menyenangkan.
          </p>
        </div>
      </div>
    </main>
  );
}
