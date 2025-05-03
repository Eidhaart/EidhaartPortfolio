import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <ThemeToggle />

      <Navbar />

      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <main className="container">
        <div className="hero-links-split">
          <a href="#contact" className="btn primary-btn">
            Contact Me
          </a>
          <div className="hero-links">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
