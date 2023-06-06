import { Footer, Header } from "@/components/molecules";
import {
  AboutSection,
  HighlightSection,
  ProjectSection,
} from "@/components/organisms";

export default function Home() {
  return (
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
    </main>
  );
}
