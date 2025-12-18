import { Link } from "react-router-dom";
import "./Contact.css"; 

function Contact() {
  return  (
  <div className="contact-container">
      {/* Navbar for easy navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Contact Form */}
      <div className="contact-form">
        <h1>Contact Us 🌸</h1>

        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
