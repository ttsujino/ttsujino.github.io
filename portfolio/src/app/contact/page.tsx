// app/contact/page.tsx
import PageTransition from "../../components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="contact">
        <h1>Contact Me</h1>
        <p>Feel free to contact us via the form below or by email.</p>
        <p>Currently, the form functionality is under development.</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </PageTransition>
  );
}
