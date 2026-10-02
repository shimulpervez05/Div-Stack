import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Technologies", "#technologies"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>

        <a href="#home" className="brand">
          <span className="brand-mark">&lt;/&gt;</span>
          <span className="gradient-text">Dev Stack</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="sign-in">Sign In</a>
          <a href="#technologies" className="sign-up">Sign Up</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;