import Navbar from "../_components/Navbar";
import Hero from "../_components/Hero";
import Experience from "../_components/Experience";
import ProjectGrid from "../_components/ProjectGrid";
import Testimonials from "../_components/Testimonials";
import SkillSection from "../_components/SkillSection";
import ExtraExperience from "../_components/ExtraExperience";
import Contact from "../_components/Contact";

import PageWrapper from "../_components/PageWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageWrapper>
          <Hero />
          <Experience />
          <ProjectGrid />
          <Testimonials />
          <SkillSection />
          <ExtraExperience />
          <Contact />
        </PageWrapper>
      </main>
    </div>
  );
}
