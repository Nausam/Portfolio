import AboutMe from "@/Components/AboutMe";
import Design from "@/Components/Design";
import HeroSection from "@/Components/HeroSection";
import MyWork from "@/Components/MyWork";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <section>
      {/* <Design /> */}
      <NavBar />
      <HeroSection />
      <AboutMe />
      <MyWork />
    </section>
  );
}
