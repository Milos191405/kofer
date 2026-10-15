"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navbar />

      <section className="relative pt-10 w-full h-[350px] sm:h-[500px] lg:h-[700px]">
        <Image
          src="/images/kofer_home_page.jpg"
          alt="Igraonica Kofer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>
    </main>
  );
}
