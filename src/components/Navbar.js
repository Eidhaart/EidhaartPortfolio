export default function Navbar() {
  return (
    <nav className="navbar container hero-header">
      <div className="intro-block">
        <p className="intro-line">
          I&lsquo;m <span className="eidhaart-name">Eidhaart</span>
        </p>
        <p className="intro-subtitle">Full-Stack Web Developer</p>
      </div>

      <div className="hero-image-wrapper">
        <img
          src="/images/eidhaart-white.png"
          alt="Eidhaart logotype"
          className="hero-image"
        />
      </div>
    </nav>
  );
}
