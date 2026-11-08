
/* Import social media icons */
import SocialIcons from "./SocialIcons";

/* Footer component */
function Footer() {
  return (
    <footer className="site-footer">

      {/* Footer navigation links */}
      <nav className="footer-nav">
        <a href="#about">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#author">Our Story</a>
      </nav>

      {/* Copyright information */}
      <p className="copyright">
        Copyright © 2023 Erased Disks Ltd.
      </p>

      {/* Social media icons */}
      <SocialIcons />

    </footer>
  );
}

/* Export Footer */
export default Footer;
