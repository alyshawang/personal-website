import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
    {/* <NavBar /> */}
      <Landing />
      {/* <Projects /> */}
      <Experience />
      {/* <About /> */}
      <Contact />
      <Footer />

    </>
  );
}
