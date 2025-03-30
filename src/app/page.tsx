"use client"

import { useScroll, motion } from "framer-motion"
import { lazy } from "react";

const Footer = lazy(() => import("../components/molecules/Footer"));
const Header = lazy(() => import("../components/molecules/Header"));
const AboutSection = lazy(() => import("../components/organisms/AboutSection"));
const HighlightSection = lazy(() => import("../components/organisms/HighlightSection"));
const ProjectSection = lazy(() => import("../components/organisms/ProjectSection"));


export default function Home() {
  const { scrollYProgress } = useScroll({ smooth: 1.5 });
  return (
    <div>
      <motion.div className="fixed h-1 top-0 right-0 left-0 bg-black transform-none" style={{ scaleX: scrollYProgress }} />
      <main className="flex min-h-screen flex-col  md:px-24 px-4 py-8 ">
        <Header />
        <HighlightSection />
        <div id="works">
          <ProjectSection className="my-20" />
        </div>
        <div id="about" className="flex flex-col justify-center items-center mx-auto">
          <AboutSection className="my-20" />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>f
    </div>
  );
}
