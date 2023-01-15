import styles from "./Experience.module.css";
import experienceimage from "../../public/Images/lead.svg";
import kaizen from "../../public/Images/kaizen 1.svg";
import Image from "next/image";

export default function Experience() {
  return (
    <section className={styles.entire}>
      <h2 id="experience" className="primary">
        Experience
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div>
            <h2 className="header2">President</h2>
            <p className="italic">
              Leadership, Enrichment, and Development Club
            </p>
            <p className="classic">
              • Partnered with 360Kids to fulfill the wish-lists of 30 at risk
              and homeless youth
            </p>
            <p className="classic">
              • Managed a team of 30 members to implement a mental health
              campaign, impacting 70+ students
            </p>
            <p className="classic">
              • Led the executive team by communicating with teacher advisors,
              innovating leadership and team building events, and delegating
              tasks to executive members
            </p>
          </div>
          <Image src={experienceimage} />
        </div>

        <div className={styles.card}>
          <div>
            <h2 className="header2">
              Junior Achievement Human Resources Member
            </h2>
            <p className="italic">The Kaizen Project and Studypod</p>
            <p className="classic">
              • Co-founded two podcast companies to aid high school students
              develop their future
            </p>
            <p className="classic">
              • Reached out to secure 20+ guest speakers and 6 sponsors for the
              Kaizen Project, generating $830+ in sales and raising $100+ for
              360Kids
            </p>
            <p className="classic">
              • Networked with 50+ business professionals to pitch the company’s
              product, increasing our investors by 110%
            </p>
          </div>
          <Image src={kaizen} />
        </div>
        <div className={styles.card}>
          <div>
            <h2 className="header2">Executive Member</h2>
            <p className="italic">Markham Classics Club</p>
            <p className="classic">
              • Collaborated with fellow executives to host events such as study
              sessions for 100+ members
            </p>
            <p className="classic">
              • Awarded provincial champion at the Ontario Student’s Classics
              Conference amongst 150+ participants
            </p>
            <p className="classic">
              • Received Silver in the National Latin Vocabulary Exam and Bronze
              in the National Classical Etymology Exam
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h2 className="header2">Hostess</h2>
            <p className="italic">Mandarin Restaurant</p>
            <p className="classic">
              • Greeted customers when they arrived, seated them, and
              accommodated for any issues they had
            </p>
            <p className="classic">
              • Played a pivotal role in maintaining a positive experience and
              impression for customers which required strong interpersonal
              skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
