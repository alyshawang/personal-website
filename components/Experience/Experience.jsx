import styles from "./Experience.module.css";
import experienceimage from "../../public/Images/lead.svg";
import kaizen from "../../public/Images/kaizen 1.svg";
import Image from "next/image";


export default function Experience() {
  return (
    <section className = "fade">
      <section className = "entireproject">
    <section className={styles.entire}  >
      <h2 id="projects" className="primary">
        Projects
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
        <h2 className="header2">01. PERSONAL WEBSITE</h2>

          <div>
            
            <p className="classic">
            A personal website designed in Figma and created with HTML, CSS,
            Javascript, and React to showcase projects and experiences.
            </p>
            <p className="italic"> <strong>Technologies:</strong> JavaScript, HTML, CSS, React.js,
              Next.js
            </p>

          </div>
        </div>

        <div className={styles.card}>
          <div>
           
           
            <p className="classic">
            An autonomous vehicle controlled by a live fish or joystick using
              OpenCV, a Raspberry Pi, and an algorithm coded in Node.js. Virtual
              joystick programmed with HTML and Javascript.
            </p>
            
            <p className="italic"><strong>Technologies:</strong> Javascript, HTML, OpenCV, Node.js,
              WPILib, Python</p>
          </div>
          <h2 className="header2">
            02. MOTORIZED FISH-CONTROLLED VEHICLE
            </h2>
        </div>
        <div className={styles.card}>
        <h2 className="header2">03. MATH QUIZ</h2>

          <div>

            <p className="classic">
            An interactive program with a graphical user interface developed
              using Java and Java Swing to test the user’s knowledge on various
              mathematics topics.
            </p>
            <p className="italic">  <strong>Technologies:</strong> Java, JavaSwing, Eclipse Window
              Builder</p>
           
          </div>
        </div>
        
      </div>
    </section>
    </section>
    </section>
  );
}
