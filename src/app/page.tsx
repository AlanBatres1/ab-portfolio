import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { navItems } from "../data";
import Footer from "@/components/Footer";

export const content = [
  {
    
    title: "Introduction",
    description: "Welcome to the sticky scroll section.",
    content: <p>This section will stay in view while you scroll.</p>,
  },
  {
    title: "Features",
    description: "Explore the different features.",
    content: (
      <ul>
        <li>Sticky scrolling</li>
        <li>Dynamic content</li>
      </ul>
    ),
  },
  {
    title: "Conclusion",
    description: "Thanks for scrolling through.",
    content: <p>We hope you enjoyed the demo!</p>,
  },
];

export default function Home() {
  return (
    
    <main className="relative bg-[#070707] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
       <Projects/>
       <Footer/>
      </div>
    </main>
  );
}
