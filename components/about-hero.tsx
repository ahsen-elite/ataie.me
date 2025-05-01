"use client";

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Product designer with a passion for creating accessible and impactful digital experiences
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;