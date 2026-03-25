"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex flex-col gap-20 mt-100">
      <motion.img
        src="/images/homepage/kyoto_street.jpg"
        alt="Kyoto Street Background"
        className="fixed inset-0 w-full h-full object-cover object-center z-0"
      />

      <div className="fixed inset-0 bg-black/30 z-10 pointer-events-none" />

      <section className="relative z-20 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <h1
            className={`${playfair.className} text-4xl sm:text-6xl font-extrabold mb-4 tracking-wide`}
          >
            Welcome to Our Story
          </h1>
          <p className="text-lg sm:text-2xl mb-8 max-w-2xl">
            This website serves as a platform to share our journey, experiences,
            and insights. We hope you find inspiration and value in the stories
            we tell.
          </p>
        </div>
      </section>

      <section className="relative z-20 py-24 px-4">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2
            className={`${playfair.className} text-3xl sm:text-5xl font-bold mb-6 tracking-wide`}
          >
            About Us
          </h2>
          <p className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto">
            ##PLACEHOLDER##
          </p>
        </div>
      </section>
    </main>
  );
}