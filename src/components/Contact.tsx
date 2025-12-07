import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

  const [state, handleSubmit] = useForm(
    formspreeEndpoint ? formspreeEndpoint : "temp_placeholder"
  );
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="contact-links">
              <a
                href="mailto:joshua.spence@hotmail.co.uk"
                className="contact-link"
              >
                <span className="contact-icon">✉</span>
                joshua.spence@hotmail.co.uk
              </a>
              <a
                href="https://www.linkedin.com/in/josh-s-spence"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/JoshS1234"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">🔗</span>
                GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
            {state.succeeded && (
              <p style={{ color: "white", marginTop: "1rem" }}>
                Thank you for your message! I will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
