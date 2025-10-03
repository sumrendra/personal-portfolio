import { Hero } from "@/components/sections/Hero";
import { ParticleBackground } from "@/components/3d/ParticleBackground";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}
