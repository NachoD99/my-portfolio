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
      AboutEn: { translation: AboutEn },
      AboutEs: { translation: AboutEs },
      CertificationsEn: { translation: CertificationsEn },
      CertificationsEs: { translation: CertificationsEs },
      ContactEn: { translation: ContactEn },
      ContactEs: { translation: ContactEs },
      EducationEn: { translation: EducationEn },
      EducationEs: { translation: EducationEs },
      ExperienceEn: { translation: ExperienceEn },
      ExperienceEs: { translation: ExperienceEs },
      HeroEn: { translation: HeroEn },
      HeroEs: { translation: HeroEs },
      LanguagesEn: { translation: LanguagesEn },
      LanguagesEs: { translation: LanguagesEs },
      NavigationEn: { translation: NavigationEn },
      NavigationEs: { translation: NavigationEs },
      ProjectsEn: { translation: ProjectsEn },
      ProjectsEs: { translation: ProjectsEs },
      SkillsEn: { translation: SkillsEn },
      SkillsEs: { translation: SkillsEs },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
