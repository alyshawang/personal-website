import styles from "./Projects.module.css";
import projectimage from "../../public/Images/image 4.png";
import github from "../../public/Images/github.svg";
import js from "../../public/Images/js.svg";
import css from "../../public/Images/css 1.svg";
import html from "../../public/Images/html 1.svg";
import react from "../../public/Images/react 1.svg";
import node from "../../public/Images/nodejs-logo 1.svg";
import python from "../../public/Images/Python-logo-notext 1.svg";
import cv from "../../public/Images/487px-OpenCV_Logo_with_text 1.svg";
import java from "../../public/Images/java.svg";
import eclipse from "../../public/Images/eclipse.svg";

import Image from "next/image";

export default function Projects() {
  return (
    <section className = "margin">
      <h2 id="projects" className="primary">
        Projects
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div>
            <h3 className="header">Personal Website</h3>
            <p className="classic">
              A personal website designed in Figma and created with HTML, CSS,
              Javascript, and React to showcase projects and experiences.
            </p>
            <p className="classic">
              <strong>Technologies:</strong> JavaScript, HTML, CSS, React.js,
              Next.js
            </p>
          </div>
          <div className={styles.images}>
            <div className={styles.tech}>
              <Image src={js} />
              <Image src={html} />
              <Image src={css} />
              <Image src={react} />
            </div>
            <a
              href="https://github.com/alyshawang/personal-website"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <Image src={github} />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <div>
            <h3 className="header">Motorized fish-controlled vehicle</h3>
            <p className="classic">
              An autonomous vehicle controlled by a live fish or joystick using
              OpenCV, a Raspberry Pi, and an algorithm coded in Node.js. Virtual
              joystick programmed with HTML and Javascript.
            </p>
            <p className="classic">
              <strong>Technologies:</strong> Javascript, HTML, OpenCV, Node.js,
              WPILib, Python
            </p>
          </div>

          <div className={styles.images}>
            <div className={styles.tech}>
              <Image src={js} />
              <Image src={html} />
              <Image src={cv} />
              <Image src={node} />
              <Image src={python} />
            </div>
            <a
              href="https://github.com/alyshawang/motorized-fish-controlled-vehicle"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <Image src={github} />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <h3 className="header">Math Quiz</h3>
            <p className="classic">
              An interactive program with a graphical user interface developed
              using Java and Java Swing to test the user’s knowledge on various
              mathematics topics.
            </p>
            <p className="classic">
              <strong>Technologies:</strong> Java, JavaSwing, Eclipse Window
              Builder
            </p>
          </div>
          <div className={styles.images}>
            <div className={styles.tech}>
              <Image src={java} />
              <Image src={eclipse} />
            </div>
            <a
              href="https://github.com/alyshawang/math-quiz"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>
                <Image src={github} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
