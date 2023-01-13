import { Main } from "next/document";
import Link from "next/link";

const links = [
  { link: "#", text: "Home", newPage: false },
  { link: "#projects", text: "Projects", newPage: false },
  { link: "#experience", text: "Experience", newPage: false },
  // { link: "#about", text: "About", newPage: false },
  { link: "#contact", text: "Contact", newPage: false },
  { link: "/resume.pdf", text: "Resume", newPage: true },
];

export default function NavBar() {
  return (
    <nav className="main-nav">
      <ul>
        {links.map((navbarlink) => (
          <li className="bar">
            {navbarlink.newPage ? (
              <a href={navbarlink.link} target="_blank">
                {navbarlink.text}
              </a>
            ) : (
              <Link href={navbarlink.link}>{navbarlink.text}</Link>
            )}{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}