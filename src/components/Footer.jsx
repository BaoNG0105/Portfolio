import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
  return (
    <footer id='contact' className="footer">
      <div className="footer-content">
        {/* Cột thông tin bên trái */}
        <div className="footer-info">
          <h3>contact info</h3>
          <p><FaMapMarkerAlt /> Xo Viet Nghe Tinh Str.,Thanh My Tay Ward, HCMC</p>
          <p><FaEnvelope /> ngogiabao01052004@gmail.com</p>
          <p><FaPhone /> (+84) 911 031 534</p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/gia.bao.010504" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/_akiraa0105_/" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Tiktok"><FaTiktok /></a>
            <a href="https://www.youtube.com/@akiraa0105" aria-label="Youtube"><FaYoutube /></a>
            <a href="https://github.com/BaoNG0105" aria-label="Github"><FaGithub /></a>
          </div>
        </div>

        {/* Cột biểu mẫu liên hệ bên phải */}
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
      </div>

      <p className='footer-copyright'>&copy; Made with ❤️ by BaoNG. Bringing the best of Bao to your table.</p>
    </footer>
  );
}

export default Footer;