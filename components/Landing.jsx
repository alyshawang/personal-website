export default function Landing() {
  return (
    <header className="landing-div">
      <div>
        <h1 className="cover">Hi, I'm Alysha.</h1>
        <p3 className="other">Software Engineering Student at UWaterloo</p3>
      </div>

      <div className="btncontainer">
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
      </div>
    </header>
  );
}
