"use ciient";

import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#1A1A2E] text-white">
      <nav className="px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">LAW LAB</div>
        <div className="flex space-x-6">
          {["Home", "Services", "Expertise", "Resources", "News"].map(
            (item) => (
              <a key={item} className="hover:text-gray-300 transition-colors">
                {item}
              </a>
            )
          )}
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold leading-tight">
            LEGAL
            <br />
            INSIGHT
            <br />
            HUB
          </h1>
          <p className="text-gray-400">
            Empowering justice seekers through legal innovation.
          </p>
          <button className="bg-red-600 px-8 py-3 rounded hover:bg-red-700 transition-colors">
            Contact Now
          </button>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image placeholder */}
            <div className="aspect-[3/4] bg-gray-800 rounded-lg"></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
