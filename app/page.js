import AboutMe from "@/Components/AboutMe";
import HeroSection from "@/Components/HeroSection";
import MyWork from "@/Components/MyWork";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <section>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <MyWork />
    </section>
  );
}
