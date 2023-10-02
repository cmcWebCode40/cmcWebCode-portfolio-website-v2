"use client"

import { Footer, Header } from "@/components/molecules";
import { motion, useScroll } from "framer-motion"
import {
  AboutSection,
  HighlightSection,
  ProjectSection,
} from "@/components/organisms";


export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div className="fixed h-1 top-0 right-0 left-0 bg-black transform-none" style={{ scaleX: scrollYProgress }} />
      <main className="flex min-h-screen flex-col  md:px-24 px-4 py-8 ">
        <Header />
        <HighlightSection />

        <div id="works">
          <ProjectSection className="my-20" />
        </div>
        <div id="about">
          <AboutSection className="my-20" />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>f
    </>
  );
}
