"use client";

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { HeroSection } from "@/components/home/HeroSection";
import { SpecialOffersSection } from "@/components/home/SpecialOffersSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: offersRef, inView: offersInView } = useInView({ triggerOnce: true });
  const { ref: categoriesRef, inView: categoriesInView } = useInView({ triggerOnce: true });

  return (
    <main className="flex-1">
      <motion.section
        ref={heroRef}
        variants={fadeInAnimation}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.section>
      <motion.section
        ref={offersRef}
        variants={fadeInAnimation}
        initial="hidden"
        animate={offersInView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <SpecialOffersSection />
      </motion.section>
      <motion.section
        ref={categoriesRef}
        variants={fadeInAnimation}
        initial="hidden"
        animate={categoriesInView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
      >
        <CategoriesSection />
      </motion.section>
    </main>
  );
}
