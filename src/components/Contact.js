"use client";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
      <div className="contact-direct">
        <p>
          Or reach out directly:
          <br />
          <a href="mailto:Eidhaart@gmail.com">Eidhaart@gmail.com</a>
          <br />
          <a href="tel:+46739736248">+46 73 973 6248</a>
        </p>
      </div>
    </section>
  );
}
