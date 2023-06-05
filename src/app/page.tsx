
import { Footer, Header } from "@/components/molecules";
import {
  AboutSection,
  HighlightSection,
  ProjectSection,
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <HighlightSection />
      <ProjectSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
