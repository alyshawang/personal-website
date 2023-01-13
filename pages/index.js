import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Landing />
      <Projects />
      <Experience />
      {/* <About /> */}
      <Contact />
    </>
  );
}
