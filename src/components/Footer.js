export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Marcin Świeczkowski | Built with
            Next.js. Designed with grimdark love.
          </p>
        </div>
        <div className="footer-right">
          <img
            src="/images/eidhaart-red.png"
            alt="Eidhaart Logo"
            className="footer-logo"
          />
        </div>
      </div>
    </footer>
  );
}
