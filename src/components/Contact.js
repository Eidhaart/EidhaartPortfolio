"use client";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
