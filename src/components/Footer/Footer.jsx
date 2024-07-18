import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-extras">
        <section className="footer-extra" aria-labelledby="Need-help-heading">
          <h2 id="Need-help-heading" className="footer-heading">
            Need Help?
          </h2>
          <ul>
            <li>
              <a href="/getting-started" aria-label="Chat with us">
                Chat with us
              </a>
            </li>
            <li>
              <a href="/help-center" aria-label="Help Center">
                Help Center
              </a>
            </li>
            <li>
              <a href="/contact us" aria-label="Contact us">
                Contact us
              </a>
            </li>
          </ul>
        </section>
        <section
          className="footer-extra-socials"
          aria-labelledby="follow-us-heading"
        >
          <h2 id="join-us-on-heading" className="footer-heading">
            join us on
          </h2>
          <ul>
            <li className="socials">
              <a href="http://facebook.com" aria-label="Facebook">
                <FaFacebook className="social-logo" size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li className="socials">
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="social-logo" size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li className="socials">
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin className="social-logo" size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
export default Footer;
