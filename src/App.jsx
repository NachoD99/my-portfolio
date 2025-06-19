"use client"
import { useState, useEffect } from "react"

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

function App() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "experience", "certifications", "languages", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

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
