import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>get in touch</h3>
        <p>If you have any questions or feedback, feel free to reach out!</p>
        <form className="contact-form">
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone" />
          <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <p className='footer-copyright'>&copy; Made with ❤️ by BaoNG. Bringing the best of Bao to your table.</p>
    </footer>
  );
}

export default Footer;