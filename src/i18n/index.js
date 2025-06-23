import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import AboutEn from "../locales/en/About.json";
import AboutEs from "../locales/es/About.json";
import CertificationsEn from "../locales/en/Certifications.json";
import CertificationsEs from "../locales/es/Certifications.json";
import ContactEn from "../locales/en/Contact.json";
import ContactEs from "../locales/es/Contact.json";
import EducationEn from "../locales/en/Education.json";
import EducationEs from "../locales/es/Education.json";
import ExperienceEn from "../locales/en/Experience.json";
import ExperienceEs from "../locales/es/Experience.json";
import HeroEn from "../locales/en/Hero.json";
import HeroEs from "../locales/es/Hero.json";
import LanguagesEn from "../locales/en/Languages.json";
import LanguagesEs from "../locales/es/Languages.json";
import NavigationEn from "../locales/en/Navigation.json";
import NavigationEs from "../locales/es/Navigation.json";
import ProjectsEn from "../locales/en/Projects.json";
import ProjectsEs from "../locales/es/Projects.json";
import SkillsEn from "../locales/en/Skills.json";
import SkillsEs from "../locales/es/Skills.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: AboutEn,
        certifications: CertificationsEn,
        contact: ContactEn,
        education: EducationEn,
        experience: ExperienceEn,
        hero: HeroEn,
        languages: LanguagesEn,
        navigation: NavigationEn,
        projects: ProjectsEn,
        skills: SkillsEn,
      },
      es: {
        about: AboutEs,
        certifications: CertificationsEs,
        contact: ContactEs,
        education: EducationEs,
        experience: ExperienceEs,
        hero: HeroEs,
        languages: LanguagesEs,
        navigation: NavigationEs,
        projects: ProjectsEs,
        skills: SkillsEs,
      },
    },
    lng: "es",
    fallbackLng: "es",
    ns: [
      "about",
      "certifications",
      "contact",
      "education",
      "experience",
      "hero",
      "languages",
      "navigation",
      "projects",
      "skills"
    ],
    defaultNS: "navigation", // por defecto
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
