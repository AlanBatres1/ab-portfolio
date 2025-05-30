import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "../data";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
    <main className="relative bg-[#070707] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
