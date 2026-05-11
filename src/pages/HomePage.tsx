import { Hero } from "../features/hero/Hero";
import { Projects } from "../features/projects/Projects";
import { OpenSource } from "../features/opensource/OpenSource";
import { Articles } from "../features/articles/Articles";
import { Experience } from "../features/experience/Experience";
import { Education } from "../features/education/Education";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <OpenSource />
      <Articles />
      <Experience />
      <Education />
    </main>
  );
}
