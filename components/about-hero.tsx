"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
          About Me
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
          Software developer with a passion for creating accessible and
          impactful digital experiences
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
