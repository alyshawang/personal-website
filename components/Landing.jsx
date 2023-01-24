import background from "../public/Images/unnamed 1.svg";
import Image from "next/image";



export default function Landing() {
  return (
    <section className = "fade">
    <header className="landing-div">

        <h1 className="small">Hi, I&apos;m</h1>
        <h1 className="cover">Alysha Wang.</h1>
        <p3 className="other">Software Engineering Student @ UWaterloo</p3>

      {/* <div className="btncontainer">
        <a href="#projects">
          <button role="button" className="btn">
            Learn More
          </button>
        </a>
        <a href="/resume.pdf" target="_blank">
          <button role="button" className="btn">
            Resume
          </button>
        </a>
      </div> */}
      <a href="#projects">
      {/* <p className = "arrowdown"> <i class="arrow down"></i></p> */}
      </a>
    </header>
    </section>
  );
}
