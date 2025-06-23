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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Proyects />
      <Certifications />
      <LanguagesSection />
      <Contact />
      <ToTop />
    </div>
  )
}

export default App
