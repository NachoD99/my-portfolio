"use client"

import Navigation from "./sections/navigation/Navigation"
import Hero from "./sections/hero/Hero"
import About from "./sections/about/About"
import Education from "./sections/education/Education"
import Skills from "./sections/skills/Skills"
import Experience from "./sections/experience/Experience"
import Proyects from "./sections/proyects/Projects.jsx"
import Certifications from "./sections/certifications/Certifications"
import LanguagesSection from "./sections/languages/MyLanguages"
import Contact from "./sections/contact/Contact"
import ToTop from "./components/layout/ToTop";
import "./i18n";
import { ColorModeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ColorModeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Proyects />
        <Skills />
        {/* <Certifications /> */}
        <Education />
        <LanguagesSection />
        <Contact />
        <ToTop />
      </div>
    </ColorModeProvider>
  )
}

export default App
