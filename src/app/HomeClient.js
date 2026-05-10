'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-50 to-yellow-100 text-center p-6  md:p-12">
      <Navbar />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl  mb-4 md:mb-12"
      >
       <p className="text-5xl font-bold">
  Nova avantura pocinje uskoro 
</p>
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Image
          src="/kofer_logo.svg"
          alt="Kofer logo"
          width={600}
          height={800}
          className="drop-shadow-lg"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-2xl mt-6 text-gray-700 mb-20"
      >
        Da li ste spremni za put?
      </motion.p>

       
    </main>
  );
}
