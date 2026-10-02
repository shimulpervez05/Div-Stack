import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand" id="about">
          <a href="#home" className="brand">
            <span className="brand-mark">&lt;/&gt;</span>
            <span className="gradient-text">Dev Stack</span>
          </a>
          <p>A practical place to discover modern development technologies and build a stack that works for you.</p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#technologies">Technologies</a>
            <a href="#technologies">Build a Stack</a>
            <a href="#technologies">Categories</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#about">Careers</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#contact">Support</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Dev Stack. Built for modern developers.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  );
}

export default Footer;