import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { OpenSourcePage } from "./pages/OpenSourcePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { EducationPage } from "./pages/EducationPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-mono transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/opensource" element={<OpenSourcePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
